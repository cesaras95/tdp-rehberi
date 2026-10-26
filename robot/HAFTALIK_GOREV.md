# Haftalık içerik güncellemesi — görev talimatı

Bu dosya, her pazartesi sabahı çalışan Claude zamanlanmış görevinin talimatıdır.
Görevin davranışını değiştirmek istersen bu dosyayı düzenlemen yeterli.

## Amaç

`veri/duyurular.js` (Türkiye Gündemi) ve `veri/dunya.js` (Dünya Gündemi) dosyalarını son 7 günün önemli gelişmeleriyle güncellemek ve doğrudan yayınlamak. Robotun günlük başlık kutusundan farkı: burada her maddenin **iki dilli özeti**, **sınav notu** / **Türkiye bağlantısı** ve **kaynak linki** olur.

## Adımlar

1. Son 7 günde Türk dış politikasında ve uluslararası ilişkilerde ne olduğunu araştır.
   - Türkiye için önce resmî kaynaklar: mfa.gov.tr basın açıklamaları (TR: `https://www.mfa.gov.tr/tr.rss.mfa?3fc6582e-a37b-40d1-847a-6914dc12fb60`, EN: `https://www.mfa.gov.tr/en.rss.mfa?ad9093da-8e71-4678-a1b6-05f297baadc4`), Cumhurbaşkanlığı, TBMM. Sonra güvenilir basın.
   - Dünya için: BM, NATO, AB Konseyi gibi kurumların açıklamaları ve güvenilir haber ajansları.
2. **Türkiye Gündemi** için en önemli 3–5 gelişmeyi, **Dünya Gündemi** için en önemli 3–5 gelişmeyi seç. Sınav ve mülakat açısından önemli olanları öne al; taziye/kınama gibi rutin açıklamaları ancak siyasi önemi varsa al.
3. Her gelişmeyi en az iki kaynaktan doğrula. Doğrulayamadığın bilgiyi yazma.
4. Yeni maddeleri ilgili listenin **en üstüne** ekle. Var olan maddeleri silme; ama her listede en fazla **15 madde** kalsın, fazlası en eskiden başlayarak çıkarılsın.
5. `YAKLASAN` ve `DUNYA_TAKVIM` listelerinde tarihi geçmiş etkinlikleri çıkar, önümüzdeki 6 haftanın önemli tarihlerini ekle.
6. `SON_GUNCELLEME` ve `DUNYA_GUNCELLEME` tarihlerini bugünün tarihiyle güncelle (TR: "2 Kasım 2026", EN: "2 November 2026" biçiminde).
7. Kontrol et, sonra yayınla (aşağıdaki "Yayınlamadan önce" bölümü).

## Biçim kuralları

- Dosyalardaki mevcut yapıyı birebir izle. Her metin `{ tr: "...", en: "..." }` olmalı; iki dil de dolu olmalı.
- `duyurular.js` maddesi: `tarih` (YYYY-AA-GG), `baslik`, `ozet`, `sinavNotu`, `konu` (politikalar.js'deki bir id: kibris, ege-akdeniz, ab, nato-abd, rusya-ukrayna, suriye, filistin, iran-korfez, turk-dunyasi, afrika, arabuluculuk, enerji-iklim), `tur` ("resmi" ya da "haber"), `kaynak` (tam URL).
- `dunya.js` maddesi: `tarih`, `bolge` (Avrupa/Europe, Orta Doğu/Middle East, Avrasya/Eurasia, Asya-Pasifik/Asia-Pacific, Amerika/Americas, Afrika/Africa, Küresel/Global — mevcut yazımlarla aynı), `baslik`, `ozet`, `baglanti` (Türkiye bağlantısı), `kaynak`.
- Özetler 2–3 cümle, kendi cümlelerinle. Haber metinlerinden kopyalama yapma; doğrudan alıntı gerekiyorsa en fazla bir kısa alıntı (15 kelimenin altında).
- **Resmî tutum ile analiz karıştırılmaz.** Türkiye'nin tutumunu yazarken Bakanlık açıklamasına dayan; yorum ve değerlendirme `sinavNotu` alanında kalsın.
- Siyasi konularda tarafsız, olgusal dil kullan. Taraf tutan sıfatlardan kaçın.
- İngilizce metinlerde İngiliz yazımı (defence, organisation) ve `robot/terminoloji.md` dosyasındaki karşılıklar kullanılır.

## Yayınlamadan önce

1. `node --check veri/duyurular.js veri/dunya.js` hatasız geçmeli.
2. Her yeni maddede `tr` ve `en` dolu, `kaynak` bir `https://` adresi olmalı.
3. Site tarayıcıda açılabiliyorsa Türkiye Gündemi ve Dünya Gündemi sekmelerini iki dilde kontrol et.
4. Commit mesajı: `Haftalık güncelleme: <tarih>` ve kısa bir madde listesi.
5. `main` dalına gönder (push). GitHub Actions siteyi 1–2 dakikada yayınlar.

Bir adım başarısız olursa yayınlama; ne olduğunu kısa bir notla bildir.
