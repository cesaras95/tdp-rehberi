# TDP Rehberi / TFP Guide

Türk Dış Politikası tarihi, politika başlıkları, Türkiye ve dünya gündemi. Dışişleri sınavlarına hazırlananlar için quiz, bilgi kartları ve mülakat soruları içerir. Site Türkçe ve İngilizcedir; sağ üstteki **EN / TR** butonuyla dil değiştirilir.

> Bu site resmî değildir; T.C. Dışişleri Bakanlığı ile bağlantısı yoktur.

## Dosyalar

| Dosya | Ne işe yarar |
|---|---|
| `index.html` | Sitenin iskeleti (odalar) |
| `style.css` | Görünüm (boya, mobilya) |
| `app.js` | Çalışma mantığı (elektrik tesisatı) |
| `veri/arayuz.js` | Butonlar, menü, başlıklar (iki dilli tabelalar) |
| `veri/tarih.js` | Dönemler ve olaylar |
| `veri/politikalar.js` | Politika kartları |
| `veri/duyurular.js` | Türkiye gündemi (sık güncellenir) |
| `veri/dunya.js` | Dünya gündemi (sık güncellenir) |
| `veri/sorular.js` | Quiz ve bilgi kartları |
| `veri/mulakat.js` | Mülakat antrenmanı: cevap iskeletleri, kurtarıcı cümleler, kontrol listesi, ek sorulu ve örnek cevaplı mülakat soruları, jüri seviyeleri |
| `veri/quiz_ek.js` | Ek quiz soruları (toplam 111 soru; sorular.js'ten sonra yüklenir) |
| `veri/arsiv.js` | Çıkmış sorular arşivi: KİM ve MM sınavlarında sorulan konular (konu düzeyinde, soru metni kopyalanmadan) |
| `veri/harita.js` | Politikalar sekmesindeki harita (otomatik üretilir; `robot/harita_uret.mjs`) |
| `veri/sinav.js` | Sınav rehberi, kompozisyon soruları ve çeviri metinleri |
| `veri/sozluk.js` | 10.700+ terimlik sözlük (Bakanlık terminoloji listelerinden; Sözlük sekmesi açılınca yüklenir) |
| `veri/otomatik.js` | Robotun her gün yazdığı başlıklar (elle düzenleme) |
| `sw.js` | Service worker: siteyi telefona yüklenebilir ve çevrimdışı açılır yapar |
| `manifest.webmanifest` | Uygulamanın adı, rengi ve simgeleri (`gorseller/ikon-*.png`) |
| `robot/basliklari_cek.py` | Başlıkları toplayan robot |
| `.github/workflows/guncelle.yml` | Robotun çalar saati ve yayın adımları |

## Politika dosyaları

Her politika başlığında şu alanlar var: resmî tutum, analiz, karşı tez, olgular ve rakamlar, temel belgeler (linkli), sınav ipucu, kavramlar ve örnek soru. Rakamların yanında "... itibarıyla" tarihi yazılır; rakam güncellenince tarih de güncellenmelidir. Resmî tutum Bakanlık metinlerine dayanır, yorum yalnızca analiz alanında yer alır.

## Günlük robot

`robot/basliklari_cek.py` her gün 07:17'de (İstanbul) Dışişleri Bakanlığı, BM ve Anadolu Ajansı'nın RSS akışlarından son başlıkları toplar ve `veri/otomatik.js` dosyasını yazar. Zamanlayıcı `.github/workflows/guncelle.yml` dosyasındadır. Robot sadece başlık, tarih ve link alır; haber metinlerini kopyalamaz.

- Elle çalıştırmak için: GitHub → **Actions** → **Günlük güncelleme ve yayın** → **Run workflow**
- Kaynak eklemek için: `robot/basliklari_cek.py` içindeki `KAYNAKLAR` listesine yeni bir blok ekle.
- Bir kaynak çalışmazsa robot durmaz; o kaynak sitede görünmez, diğerleri görünür.

## İki dilli metin nasıl yazılır?

Her metin iki dilli bir kutudur:

```js
baslik: { tr: "Türkçe başlık", en: "English title" }
```

İngilizce kısmı boş bırakma. Boş kalırsa İngilizce sayfada Türkçe metin görünür.

## Yeni haber nasıl eklenir?

1. `veri/duyurular.js` (Türkiye) ya da `veri/dunya.js` (dünya) dosyasını aç.
2. Listenin en üstüne mevcut bir `{ ... },` bloğunu kopyala.
3. Tarihi, başlığı, özeti, notu ve kaynak linkini **iki dilde** değiştir.
4. En üstteki güncelleme tarihini değiştir.
5. Kaydet ve GitHub'a yükle.

Virgüllere dikkat et: her `}` bloğundan sonra `,` olmalı.

## Çeviri esasları

İngilizce terimler T.C. Dışişleri Bakanlığı Tercüme Dairesi terminoloji listelerine göre seçilmiştir (Uluslararası İlişkiler, Uluslararası Hukuk, Deniz Hukuku, Göç, Askerî, Ekonomi ve Maliye, Kolluk ve Sınır Yönetimi, Nüfus ve Vatandaşlık, Kültürel Miras). İngiliz yazımı kullanılır (defence, organisation, liberalisation).

Örnekler:

| Türkçe | English |
|---|---|
| deniz yetki alanlarının sınırlandırılması | delimitation of maritime jurisdiction areas |
| hakkaniyet ilkesi | principle of equity |
| kıta sahanlığı / karasuları | continental shelf / territorial waters |
| zararsız geçiş | innocent passage |
| garantör ülke | guarantor state |
| güven artırıcı önlemler | confidence building measures |
| katılım müzakereleri | accession negotiations |
| vize serbestisi diyaloğu | visa liberalisation dialogue |
| geçici koruma / sığınmacı | temporary protection / asylum seeker |
| düzensiz göç / gönüllü geri dönüş | irregular migration / voluntary return |
| statüko politikası / çevreleme | status quo policy / containment |
| caydırıcılık / ilhak / yaptırım | deterrence / annexation / sanction |
| mütekabiliyet / agreman | reciprocity / agrément |
| mutabakat zaptı | memorandum of understanding |
| hava sahasının ihlali | violation of airspace |

## Haftalık içerik güncellemesi

Her pazartesi sabahı bir Claude zamanlanmış görevi son haftanın önemli gelişmelerini araştırır; `veri/duyurular.js` ve `veri/dunya.js` dosyalarına iki dilli özet, sınav notu ve kaynak linkiyle ekler ve doğrudan yayınlar. Görevin kuralları `robot/HAFTALIK_GOREV.md` dosyasında, kullandığı terim karşılıkları `robot/terminoloji.md` dosyasındadır. Görevin davranışını değiştirmek için bu dosyaları düzenlemek yeterlidir.

## Çıkmış sorular nasıl eklenir?

`veri/arsiv.js` içindeki `ARSIV` listesine bir satır ekle:

```js
{ yil: "2027-01", sinav: "kim", bolum: "yd", temalar: ["tdp-genel"], konu: { tr: "Kısa konu başlığı", en: "Short topic line" }, politika: "ab" },
```

`sinav`: `kim` ya da `mm`. `bolum`: `yd` (yabancı dilde kompozisyon), `tr` (Türkçe kompozisyon), `cev` (çeviri). Resmî olarak yayımlanmamış, adaylardan duyulan sorulara `kaynak: "aday"` ekle. Soru metnini olduğu gibi kopyalama; kısa bir konu başlığı yaz. Grafik kendiliğinden güncellenir.

## Uygulama sürümü (PWA)

Site telefona uygulama gibi yüklenebilir ve bir kez açılan sayfalar internetsiz de açılır. `index.html`'deki `?v=` numarasını artırdığında `sw.js` içindeki `SURUM` değerini de artır; böylece telefonlardaki eski kopyalar silinir.
