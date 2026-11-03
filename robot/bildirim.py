# =============================================================
# bildirim.py — Telefona bildirim gönderen robot (Web Push)
#
# Benzetme: Postacı. Bakanlığın açıklamalar panosuna yarım saatte bir bakar;
# yeni bir açıklama asılmışsa abonelerin kapısına kısa bir not bırakır.
# Sabahları da dünya gündeminin iki manşetini götürür.
#
# GitHub Actions'ta .github/workflows/bildirim.yml tarafından çalıştırılır.
# Gizli bilgiler GitHub "Secrets" bölümünden gelir (kodda ya da depoda YOK):
#   VAPID_OZEL     : bildirimleri imzalayan gizli anahtar (PEM). bildirim-anahtari.html üretir.
#   PUSH_ABONELER  : abonelik kodları. Her satıra bir kod (uygulamadaki "Bildirimler" kutusu üretir).
#
# Kullanım:  python3 robot/bildirim.py yeni   → yeni Bakanlık açıklamalarını bildir
#            python3 robot/bildirim.py sabah  → dünya gündeminden sabah özeti
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
                    vapid_claims={"sub": SITE}, ttl=12 * 3600)
            basarili += 1
        except WebPushException as hata:
            kod = getattr(hata.response, "status_code", None)
            if kod in (404, 410):
                print(f"Abone {i}: abonelik artık geçersiz (HTTP {kod}). PUSH_ABONELER'den bu satırı silebilirsin.")
            else:
                print(f"Abone {i}: gönderilemedi ({kod or hata})", file=sys.stderr)
    os.unlink(anahtar_yolu)
    print(f"'{baslik}' → {basarili}/{len(aboneler)} aboneye gönderildi.")
    return basarili


def durum_oku():
    try:
        return json.loads(DURUM.read_text(encoding="utf-8"))
    except Exception:
        return None


def durum_yaz(gorulen):
    DURUM.parent.mkdir(parents=True, exist_ok=True)
    DURUM.write_text(json.dumps({"gorulen": gorulen[:HATIRLA]}, ensure_ascii=False), encoding="utf-8")


def kaynak(kategori, dil):
    return next(k for k in KAYNAKLAR if k["kategori"] == kategori and k["dil"] == dil)


def yeni_aciklamalar(aboneler):
    """Bakanlığın Türkçe açıklamalar akışında daha önce görülmemiş olanları bildirir."""
    haberler = cozumle(indir(kaynak("turkiye", "tr")["url"]))
    durum = durum_oku()
    linkler = [h["link"] for h in haberler]
    if durum is None:
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


def main():
    mod = sys.argv[1] if len(sys.argv) > 1 else "yeni"
    aboneler = aboneleri_oku()
    print(f"Mod: {mod} · abone sayısı: {len(aboneler)}")
    if mod == "test":
        if aboneler:
            gonder(aboneler, "TDP Rehberi", "Deneme bildirimi: bildirimler çalışıyor. 🎉", SITE, "test")
        return
    try:
        if mod == "sabah":
            if aboneler:
                sabah_ozeti(aboneler)
        else:
            yeni_aciklamalar(aboneler)
    except Exception as hata:
        # Ağ hatasında robot sessizce durur; bir sonraki çalışmada tekrar dener
        print(f"Kaynak okunamadı: {hata}", file=sys.stderr)


if __name__ == "__main__":
    main()
