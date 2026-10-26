# =============================================================
# basliklari_cek.py — Günlük haber başlıklarını toplayan robot
#
# Benzetme: Her sabah gazete bayisine gidip birkaç gazetenin
# sadece manşetlerini not alan bir yardımcı. Haberin tamamını
# kopyalamaz; başlığı, tarihi ve haberin linkini yazar.
#
# Bu program GitHub'ın sunucularında, .github/workflows/guncelle.yml
# dosyasındaki zamanlayıcı tarafından her gün çalıştırılır.
# Sonuç veri/otomatik.js dosyasına yazılır, site de bunu okur.
#
# Sadece Python'un hazır gelen parçalarını kullanır, ek kurulum gerekmez.
# =============================================================

import json
import re
import sys
import time
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path

# ---------- KAYNAKLAR ----------
# Yeni bir kaynak eklemek için bir { ... } bloğunu kopyala:
#   ad:       sitede görünecek isim (iki dilli)
#   dil:      haberlerin dili ("tr" ya da "en")
#   kategori: "turkiye" (Türkiye Gündemi sekmesi) ya da "dunya" (Dünya Gündemi sekmesi)
#   url:      kaynağın RSS adresi
#   site:     kaynağın ana sayfası (kullanıcıya gösterilir)
KAYNAKLAR = [
    {
        "ad": {"tr": "Dışişleri Bakanlığı – Açıklamalar", "en": "Ministry of Foreign Affairs – Press Releases"},
        "dil": "tr", "kategori": "turkiye",
        "url": "https://www.mfa.gov.tr/tr.rss.mfa?3fc6582e-a37b-40d1-847a-6914dc12fb60",
        "site": "https://www.mfa.gov.tr",
    },
    {
        "ad": {"tr": "Dışişleri Bakanlığı – Açıklamalar (İngilizce)", "en": "Ministry of Foreign Affairs – Press Releases"},
        "dil": "en", "kategori": "turkiye",
        "url": "https://www.mfa.gov.tr/en.rss.mfa?ad9093da-8e71-4678-a1b6-05f297baadc4",
        "site": "https://www.mfa.gov.tr/default.en.mfa",
    },
    {
        "ad": {"tr": "BM Haber Merkezi (İngilizce)", "en": "UN News"},
        "dil": "en", "kategori": "dunya",
        "url": "https://news.un.org/feed/subscribe/en/news/all/rss.xml",
        "site": "https://news.un.org/en/",
    },
    {
        "ad": {"tr": "Anadolu Ajansı – Dünya", "en": "Anadolu Agency – World (Turkish)"},
        "dil": "tr", "kategori": "dunya",
        "url": "https://www.aa.com.tr/tr/rss/default?cat=dunya",
        "site": "https://www.aa.com.tr/tr/dunya",
    },
    {
        "ad": {"tr": "Anadolu Ajansı – World (İngilizce)", "en": "Anadolu Agency – World"},
        "dil": "en", "kategori": "dunya",
        "url": "https://www.aa.com.tr/en/rss/default?cat=world",
        "site": "https://www.aa.com.tr/en/world",
    },
]

KAYNAK_BASINA_EN_FAZLA = 8          # her kaynaktan kaç başlık alınsın
CIKTI = Path(__file__).resolve().parent.parent / "veri" / "otomatik.js"


def indir(url, deneme=3):
    """Bir adresi indirir. Başarısız olursa birkaç kez tekrar dener."""
    istek = urllib.request.Request(url, headers={
        "User-Agent": "TDP-Rehberi-Robot/1.0 (+https://github.com)",
        "Accept": "application/rss+xml, application/xml, text/xml, */*",
    })
    son_hata = None
    for i in range(deneme):
        try:
            with urllib.request.urlopen(istek, timeout=25) as yanit:
                return yanit.read()
        except Exception as hata:  # ağ hatası, zaman aşımı vb.
            son_hata = hata
            time.sleep(3 * (i + 1))
    raise son_hata


def temizle(metin):
    """Başlıktaki fazla boşlukları ve HTML etiketlerini temizler."""
    metin = re.sub(r"<[^>]+>", "", metin or "")
    return re.sub(r"\s+", " ", metin).strip()


def tarih_cevir(metin):
    """'Sat, 24 Oct 2026 18:57:27 GMT' ya da ISO tarihlerini 'YYYY-AA-GG' yapar."""
    if not metin:
        return None
    metin = metin.strip()
    try:
        return parsedate_to_datetime(metin).astimezone(timezone.utc).strftime("%Y-%m-%d")
    except Exception:
        pass
    try:
        return datetime.fromisoformat(metin.replace("Z", "+00:00")).strftime("%Y-%m-%d")
    except Exception:
        return None


def yerel_ad(etiket):
    """'{http://www.w3.org/2005/Atom}entry' → 'entry' (isim alanını atar)."""
    return etiket.rsplit("}", 1)[-1]


def cozumle(xml_bayt):
    """RSS 2.0 ya da Atom akışından başlık listesi çıkarır."""
    kok = ET.fromstring(xml_bayt)
    haberler = []
    for oge in kok.iter():
        ad = yerel_ad(oge.tag)
        if ad not in ("item", "entry"):
            continue
        baslik, link, tarih = "", "", None
        for cocuk in oge:
            c = yerel_ad(cocuk.tag)
            if c == "title":
                baslik = temizle("".join(cocuk.itertext()))
            elif c == "link":
                # RSS: <link>adres</link>   Atom: <link href="adres"/>
                link = (cocuk.text or cocuk.get("href") or "").strip() or link
            elif c in ("pubDate", "published", "updated", "date") and not tarih:
                tarih = tarih_cevir(cocuk.text)
        if baslik and link.startswith("http"):
            haberler.append({"baslik": baslik, "link": link.replace("http://", "https://", 1), "tarih": tarih})
    # En yeni en üstte
    haberler.sort(key=lambda h: h["tarih"] or "", reverse=True)
    return haberler[:KAYNAK_BASINA_EN_FAZLA]


def main():
    sonuc = []
    basarili = 0
    for k in KAYNAKLAR:
        kayit = {"ad": k["ad"], "dil": k["dil"], "kategori": k["kategori"], "site": k["site"], "haberler": []}
        try:
            kayit["haberler"] = cozumle(indir(k["url"]))
            basarili += 1
            print(f"✓ {k['ad']['tr']}: {len(kayit['haberler'])} başlık")
        except Exception as hata:
            # Bir kaynak çalışmazsa robot durmaz, diğerlerine devam eder.
            print(f"✗ {k['ad']['tr']}: alınamadı ({hata})", file=sys.stderr)
        sonuc.append(kayit)

    veri = {
        "guncelleme": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%MZ"),
        "kaynaklar": [s for s in sonuc if s["haberler"]],
    }
    icerik = (
        "// OTOMATİK OLUŞTURULUR — bu dosyayı elle düzenleme.\n"
        "// robot/basliklari_cek.py her gün yeniden yazar.\n"
        "const OTOMATIK = " + json.dumps(veri, ensure_ascii=False, indent=1) + ";\n"
    )
    CIKTI.write_text(icerik, encoding="utf-8")
    print(f"{basarili}/{len(KAYNAKLAR)} kaynak başarılı. Yazıldı: {CIKTI}")


if __name__ == "__main__":
    main()
