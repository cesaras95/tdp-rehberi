# =============================================================
# bildirim.py — Telefona bildirim gönderen robot (Web Push)
#
# Benzetme: Postacı. Bakanlığın açıklamalar panosuna yarım saatte bir bakar;
# yeni bir açıklama asılmışsa abonelerin kapısına kısa bir not bırakır.
# Günde üç kez de Türkiye ve dünya gündeminin en önemli başlıklarını götürür.
#
# GitHub Actions'ta .github/workflows/bildirim.yml tarafından çalıştırılır.
# Gizli bilgiler GitHub "Secrets" bölümünden gelir (kodda ya da depoda YOK):
#   VAPID_OZEL     : bildirimleri imzalayan gizli anahtar (PEM). bildirim-anahtari.html üretir.
#   PUSH_ABONELER  : abonelik kodları. Her satıra bir kod (uygulamadaki "Bildirimler" kutusu üretir).
#
# Kullanım:  python3 robot/bildirim.py yeni   → yeni Bakanlık açıklamalarını bildir
#            python3 robot/bildirim.py gundem → Türkiye ve dünya gündeminden önemli başlıklar (günde 3 kez)
#            python3 robot/bildirim.py kontrol → gündem özetinde ne seçileceğini göster (göndermez)
#            python3 robot/bildirim.py bugun  → bugünün açıklamaları + dünya manşetleri (elle)
#            python3 robot/bildirim.py test   → tüm abonelere deneme bildirimi
# =============================================================

import json
import os
import sys
import tempfile
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from basliklari_cek import KAYNAKLAR, indir, cozumle  # aynı RSS okuyucuyu kullanır

SITE = "https://cesaras95.github.io/tdp-rehberi/"
DURUM = Path(os.environ.get("BILDIRIM_DURUM", Path(__file__).resolve().parent / ".bildirim_durum.json"))
# VAPID "sub": bildirim servislerinin gerekirse ulaşacağı adres. Kütüphane yolsuz bir https adresi ister.
ILETISIM = "https://cesaras95.github.io"
EN_FAZLA_TEK_TEK = 3        # bir seferde en fazla kaç açıklama ayrı ayrı bildirilsin (fazlası tek özet olur)
HATIRLA = 300               # durum dosyasında saklanan en fazla link sayısı


def aboneleri_oku():
    """PUSH_ABONELER içindeki her satırı (ya da JSON listesini) abonelik nesnesine çevirir."""
    ham = os.environ.get("PUSH_ABONELER", "").strip()
    if not ham:
        return []
    if ham.startswith("["):
        liste = json.loads(ham)
    else:
        liste = [json.loads(satir) for satir in ham.splitlines() if satir.strip().startswith("{")]
    return [a for a in liste if a.get("endpoint") and a.get("keys", {}).get("p256dh") and a.get("keys", {}).get("auth")]


def gonder(aboneler, baslik, govde, url, etiket):
    """Her aboneye bir bildirim gönderir. Geçersiz abonelikleri günlüğe yazar."""
    from pywebpush import webpush, WebPushException  # sadece gönderirken gerekli
    ozel = os.environ.get("VAPID_OZEL", "").strip()
    if not ozel:
        print("VAPID_OZEL tanımlı değil; bildirim gönderilmedi.")
        return 0
    # PEM metnini geçici bir dosyaya yaz (kütüphane dosya yolunu en güvenilir biçimde okur)
    with tempfile.NamedTemporaryFile("w", suffix=".pem", delete=False) as f:
        f.write(ozel.replace("\\n", "\n") + ("\n" if not ozel.endswith("\n") else ""))
        anahtar_yolu = f.name
    veri = json.dumps({"baslik": baslik, "govde": govde, "url": url, "etiket": etiket}, ensure_ascii=False)
    basarili = 0
    for i, abone in enumerate(aboneler, 1):
        try:
            webpush(subscription_info=abone, data=veri, vapid_private_key=anahtar_yolu,
                    vapid_claims={"sub": ILETISIM}, ttl=12 * 3600)
            basarili += 1
        except WebPushException as hata:
            kod = getattr(hata.response, "status_code", None)
            if kod in (404, 410):
                print(f"Abone {i}: abonelik artık geçersiz (HTTP {kod}). PUSH_ABONELER'den bu satırı silebilirsin.")
            else:
                print(f"Abone {i}: gönderilemedi ({kod or hata})", file=sys.stderr)
        except Exception as hata:  # tek bir abonedeki sorun diğerlerini durdurmasın
            print(f"Abone {i}: gönderilemedi ({hata})", file=sys.stderr)
    os.unlink(anahtar_yolu)
    print(f"'{baslik}' → {basarili}/{len(aboneler)} aboneye gönderildi.")
    return basarili


def durum_oku():
    try:
        return json.loads(DURUM.read_text(encoding="utf-8"))
    except Exception:
        return None


def durum_yaz(gorulen=None, gundem=None):
    """Durumu kaydeder; verilmeyen alan eski hâliyle kalır."""
    eski = durum_oku() or {}
    yeni = {"gorulen": (gorulen if gorulen is not None else eski.get("gorulen", []))[:HATIRLA],
            "gundem": (gundem if gundem is not None else eski.get("gundem", []))[:HATIRLA]}
    if gorulen is None and "gorulen" not in eski:
        yeni.pop("gorulen")  # Bakanlık takibi henüz başlamadıysa "ilk çalışma" bilgisini bozma
    DURUM.parent.mkdir(parents=True, exist_ok=True)
    DURUM.write_text(json.dumps(yeni, ensure_ascii=False), encoding="utf-8")


def kaynak(kategori, dil):
    return next(k for k in KAYNAKLAR if k["kategori"] == kategori and k["dil"] == dil)


def yeni_aciklamalar(aboneler):
    """Bakanlığın Türkçe açıklamalar akışında daha önce görülmemiş olanları bildirir."""
    haberler = cozumle(indir(kaynak("turkiye", "tr")["url"]))
    durum = durum_oku()
    linkler = [h["link"] for h in haberler]
    if durum is None or "gorulen" not in durum:
        # İlk çalışma: mevcut açıklamaları "görüldü" say, eski haberlerle telefonu doldurma
        durum_yaz(linkler)
        print(f"İlk çalışma: {len(linkler)} açıklama kaydedildi, bildirim gönderilmedi.")
        return
    gorulen = durum.get("gorulen", [])
    yeniler = [h for h in haberler if h["link"] not in gorulen]
    print(f"{len(yeniler)} yeni açıklama.")
    if yeniler and aboneler:
        if len(yeniler) <= EN_FAZLA_TEK_TEK:
            for h in reversed(yeniler):  # eskiden yeniye
                gonder(aboneler, "Dışişleri Bakanlığı", h["baslik"], h["link"], "mfa-" + h["link"][-40:])
        else:
            govde = " • ".join(h["baslik"] for h in yeniler[:4])
            gonder(aboneler, f"Dışişleri Bakanlığı: {len(yeniler)} yeni açıklama", govde, SITE + "#guncel", "mfa-ozet")
    durum_yaz([h["link"] for h in yeniler] + gorulen)


def sabah_ozeti(aboneler):
    """Dünya gündeminden iki manşet (Anadolu Ajansı Dünya, Türkçe)."""
    haberler = cozumle(indir(kaynak("dunya", "tr")["url"]))[:2]
    if not haberler:
        print("Dünya akışı boş; sabah özeti gönderilmedi.")
        return
    govde = " • ".join(h["baslik"] for h in haberler)
    gonder(aboneler, "Dünya gündemi · sabah özeti", govde, SITE + "#dunya", "dunya-sabah")


def bugunun_ozeti(aboneler):
    """İstek üzerine: bugünün Bakanlık açıklamaları + dünya gündeminden üç manşet (iki bildirim)."""
    from datetime import datetime, timedelta, timezone
    bugun = datetime.now(timezone(timedelta(hours=3))).strftime("%Y-%m-%d")  # İstanbul saati
    try:
        mfa = cozumle(indir(kaynak("turkiye", "tr")["url"]))
        bugunku = [h for h in mfa if (h["tarih"] or "").startswith(bugun)]
        if bugunku:
            govde = " • ".join(h["baslik"] for h in bugunku[:4])
            gonder(aboneler, f"Dışişleri Bakanlığı · bugün {len(bugunku)} açıklama", govde, SITE + "#guncel", "mfa-bugun")
        elif mfa:
            gonder(aboneler, "Dışişleri Bakanlığı · bugün yeni açıklama yok", "Son açıklama: " + mfa[0]["baslik"], SITE + "#guncel", "mfa-bugun")
    except Exception as hata:
        print(f"Bakanlık akışı okunamadı: {hata}", file=sys.stderr)
    try:
        dunya = cozumle(indir(kaynak("dunya", "tr")["url"]))[:3]
        if dunya:
            gonder(aboneler, "Dünya gündemi · bugün", " • ".join(h["baslik"] for h in dunya), SITE + "#dunya", "dunya-bugun")
    except Exception as hata:
        print(f"Dünya akışı okunamadı: {hata}", file=sys.stderr)


# ---------- GÜNDEM ÖZETİ (günde 3 kez) ----------
# Benzetme: Gazetenin sabah, öğle ve akşam baskısı. Son baskıdan beri çıkan haberlerin
# içinden dış politika açısından en önemli görünenleri seçip tek bildirimde verir.
GUNDEM_KAYNAKLARI = [
    {"ad": "Türkiye gündemi", "url": "https://www.aa.com.tr/tr/rss/default?cat=politika", "sekme": "#guncel", "adet": 3},
    {"ad": "Dünya gündemi", "url": None, "sekme": "#dunya", "adet": 3},  # None → KAYNAKLAR'daki AA Dünya (TR)
]
# Önem puanı: başlıkta geçen kelimelere göre. Büyük harf duyarsız, kelime başı eşleşir.
ONEMLI = {
    4: ["türkiye", "türk ", "ankara", "dışişleri", "erdoğan", "fidan", "tbmm"],
    3: ["nato", "bm ", "birleşmiş milletler", "güvenlik konseyi", "avrupa birliği", "ab ", "zirve", "ateşkes",
        "barış", "müzakere", "anlaşma", "yaptırım", "savaş", "saldırı", "seçim", "darbe", "kıbrıs", "ege",
        "doğu akdeniz", "gazze", "filistin", "israil", "ukrayna", "rusya", "iran", "suriye", "irak", "kafkasya",
        "azerbaycan", "ermenistan", "çin", "abd", "beyaz saray", "kremlin", "nükleer"],
    2: ["bakan", "cumhurbaşkanı", "başbakan", "lider", "görüşme", "ziyaret", "kriz", "tatbikat", "mülteci",
        "göç", "enerji", "doğal gaz", "petrol", "iklim", "insani yardım", "ticaret", "gümrük"],
}
DISLA = ["maç", "futbol", "basketbol", "lig ", "transfer", "magazin", "hava durumu", "deprem tatbikatı"]


def onem(baslik):
    b = " " + baslik.lower().replace("i̇", "i") + " "
    if any(k in b for k in DISLA):
        return -1
    return sum(puan for puan, kelimeler in ONEMLI.items() for k in kelimeler if (" " + k) in b)


def gundem_ozeti(aboneler, kaydet=True):
    import basliklari_cek
    basliklari_cek.KAYNAK_BASINA_EN_FAZLA = 40  # özet için daha geniş havuz
    durum = durum_oku() or {}
    gonderilen = durum.get("gundem", [])
    yeni_gonderilen, secilen_basliklar = [], set()
    for g in GUNDEM_KAYNAKLARI:
        url = g["url"] or kaynak("dunya", "tr")["url"]
        try:
            haberler = cozumle(indir(url))
        except Exception as hata:
            print(f"{g['ad']}: kaynak okunamadı ({hata})", file=sys.stderr)
            continue
        adaylar = [(onem(h["baslik"]), -i, h) for i, h in enumerate(haberler) if h["link"] not in gonderilen and h["baslik"] not in secilen_basliklar]
        adaylar = [a for a in adaylar if a[0] > 0]
        secilen = [h for _, _, h in sorted(adaylar, key=lambda a: (a[0], a[1]), reverse=True)[:g["adet"]]]
        secilen_basliklar.update(h["baslik"] for h in secilen)  # aynı haber iki kaynakta varsa bir kez gönder
        print(f"{g['ad']}: {len(haberler)} başlık, {len(adaylar)} aday, {len(secilen)} seçildi")
        for h in secilen:
            print("   •", h["baslik"])
        if secilen and aboneler:
            gonder(aboneler, g["ad"], " • ".join(h["baslik"] for h in secilen), SITE + g["sekme"], "gundem-" + g["sekme"][1:])
        yeni_gonderilen += [h["link"] for h in secilen]
    if kaydet:
        durum_yaz(gundem=yeni_gonderilen + gonderilen)


def main():
    mod = sys.argv[1] if len(sys.argv) > 1 else "yeni"
    aboneler = aboneleri_oku()
    print(f"Mod: {mod} · abone sayısı: {len(aboneler)}")
    if mod == "test":
        if aboneler:
            gonder(aboneler, "TDP Rehberi", "Deneme bildirimi: bildirimler çalışıyor. 🎉", SITE, "test")
        return
    try:
        if mod == "bugun":
            if aboneler:
                bugunun_ozeti(aboneler)
        elif mod in ("gundem", "sabah"):
            gundem_ozeti(aboneler)
        elif mod == "kontrol":   # bildirim göndermeden ne seçileceğini gösterir
            gundem_ozeti([], kaydet=False)
        else:
            yeni_aciklamalar(aboneler)
    except Exception as hata:
        # Ağ hatasında robot sessizce durur; bir sonraki çalışmada tekrar dener
        print(f"Kaynak okunamadı: {hata}", file=sys.stderr)


if __name__ == "__main__":
    main()
