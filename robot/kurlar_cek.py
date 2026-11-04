# =============================================================
# kurlar_cek.py — Döviz ve altın kurlarını toplayan robot
#
# Benzetme: Sabah sabah döviz bürosunun tabelasına bakıp not alan kişi.
# Saatte bir çalışır, birkaç ücretsiz kaynaktan kurları okur ve
# veri/kurlar.js dosyasına yazar. Bir kaynak çalışmazsa sıradakine geçer.
#
# Kaynaklar (API anahtarı gerektirmez):
#   1. Coinbase döviz kurları (piyasa, sürekli güncellenir) — USD bazlı TRY, EUR, GBP ve XAU (altın)
#   2. gold-api.com — ons altın (USD)
#   3. open.er-api.com — günlük kurlar (yedek)
#   4. TCMB — resmî gösterge kurları (günde bir kez, iş günlerinde ~15:30)
#
# Gram altın = ons altın (USD) ÷ 31,1035 × USD/TRY. Bu "has altın"ın yaklaşık
# değeridir; kuyumcu/Kapalıçarşı fiyatı biraz farklı olabilir.
# =============================================================

import json
import sys
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from pathlib import Path

CIKTI = Path(__file__).resolve().parent.parent / "veri" / "kurlar.js"
ONS_GRAM = 31.1034768


def getir(url, zaman_asimi=20):
    istek = urllib.request.Request(url, headers={"User-Agent": "TDP-Rehberi-Robot/1.0", "Accept": "*/*"})
    with urllib.request.urlopen(istek, timeout=zaman_asimi) as yanit:
        return yanit.read()


def coinbase():
    v = json.loads(getir("https://api.coinbase.com/v2/exchange-rates?currency=USD"))["data"]["rates"]
    try_ = float(v["TRY"])
    sonuc = {"usd": try_, "eur": try_ / float(v["EUR"]), "gbp": try_ / float(v["GBP"])}
    if v.get("XAU"):
        sonuc["onsUsd"] = 1 / float(v["XAU"])  # 1 USD kaç ons → 1 ons kaç USD
    return sonuc


def gold_api():
    v = json.loads(getir("https://api.gold-api.com/price/XAU"))
    return {"onsUsd": float(v["price"])}


def er_api():
    v = json.loads(getir("https://open.er-api.com/v6/latest/USD"))["rates"]
    try_ = float(v["TRY"])
    sonuc = {"usd": try_, "eur": try_ / float(v["EUR"]), "gbp": try_ / float(v["GBP"])}
    if v.get("XAU"):
        sonuc["onsUsd"] = 1 / float(v["XAU"])
    return sonuc


def tcmb():
    kok = ET.fromstring(getir("https://www.tcmb.gov.tr/kurlar/today.xml"))
    sonuc = {"tarih": kok.get("Tarih")}
    for kur in kok.findall("Currency"):
        kod = kur.get("CurrencyCode")
        if kod in ("USD", "EUR", "GBP"):
            alis, satis = kur.findtext("ForexBuying"), kur.findtext("ForexSelling")
            if alis and satis:
                sonuc[kod.lower()] = {"alis": float(alis), "satis": float(satis)}
    return sonuc


def dene(ad, islev):
    try:
        v = islev()
        print(f"{ad}: tamam {v}")
        return v
    except Exception as hata:
        print(f"{ad}: olmadı ({hata})", file=sys.stderr)
        return None


def main():
    piyasa, kaynaklar = {}, []
    for ad, islev, site in [("Coinbase", coinbase, "https://www.coinbase.com"),
                            ("gold-api.com", gold_api, "https://gold-api.com"),
                            ("ExchangeRate-API", er_api, "https://www.exchangerate-api.com")]:
        eksik = [k for k in ("usd", "eur", "gbp", "onsUsd") if k not in piyasa]
        if not eksik:
            break
        v = dene(ad, islev)
        if v:
            yeni = {k: v[k] for k in eksik if k in v}
            if yeni:
                piyasa.update(yeni)
                kaynaklar.append({"ad": ad, "site": site})
    resmi = dene("TCMB", tcmb)

    if "usd" not in piyasa:
        print("Hiçbir kaynaktan kur alınamadı; eski dosya korunuyor.", file=sys.stderr)
        return
    if "onsUsd" in piyasa:
        piyasa["gramAltin"] = piyasa["onsUsd"] / ONS_GRAM * piyasa["usd"]
    veri = {
        "zaman": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "piyasa": {k: round(v, 4) for k, v in piyasa.items()},
        "kaynaklar": kaynaklar,
        "tcmb": resmi,
    }
    CIKTI.write_text(
        "// Bu dosya robot/kurlar_cek.py tarafından saatte bir yeniden yazılır. Elle düzenleme.\n"
        "const KURLAR = " + json.dumps(veri, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8")
    print("Yazıldı:", CIKTI)


if __name__ == "__main__":
    main()
