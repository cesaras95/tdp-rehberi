// =============================================================
// GÜNCEL GELİŞMELER (Türk Dış Politikası) — elle güncellenir, iki dilli
// YENİ DUYURU EKLEMEK İÇİN: en üste yeni bir { ... } bloğu ekle.
// tarih: "YYYY-AA-GG" biçiminde (sıralama buna göre yapılır).
// kaynak: mutlaka orijinal habere/açıklamaya link ver.
// tur: "resmi" (Bakanlık/Cumhurbaşkanlığı açıklaması) ya da "haber" (basın/analiz)
// konu: politikalar.js'deki bir id (ilgili karta link verir)
// =============================================================

const SON_GUNCELLEME = { tr: "2 Kasım 2026", en: "2 November 2026" };

const DUYURULAR = [
  {
    tarih: "2026-10-31",
    baslik: { tr: "Zelenski'nin İstanbul ziyareti", en: "Zelenskyy's visit to Istanbul" },
    ozet: {
      tr: "Cumhurbaşkanı Erdoğan, Ukrayna Devlet Başkanı Zelenski'yi Dolmabahçe'de kabul etti. Görüşmede Ukrayna'da barış çabaları ve Karadeniz'deki seyrüsefer güvenliği ele alındı; Erdoğan sivil gemilere yönelik saldırıların kabul edilemez olduğunu söyledi. Zelenski, Kasım'ın ilk yarısında ABD-Rusya-Ukrayna üçlü görüşmelerine hazırlanıldığını ve Türkiye'nin ev sahipliği seçeneğinin de konuşulduğunu belirtti.",
      en: "President Erdoğan received Ukrainian President Zelenskyy at Dolmabahçe. The talks covered peace efforts in Ukraine and navigation safety in the Black Sea; Erdoğan said attacks on civilian vessels were unacceptable. Zelenskyy said a trilateral US–Russia–Ukraine round was being prepared for the first half of November and that the option of Türkiye as host had also been discussed."
    },
    sinavNotu: {
      tr: "Türkiye'nin Montrö Sözleşmesi'nden gelen Karadeniz sorumluluğu ve 2022 Tahıl Koridoru deneyimi. Müzakere yeri Körfez'e kaysa da Türkiye kolaylaştırıcı rolünü canlı tutmaya çalışıyor.",
      en: "Türkiye's Black Sea responsibilities under the Montreux Convention and the 2022 Grain Corridor experience. Although the talks venue has shifted to the Gulf, Türkiye is trying to keep its facilitation role alive."
    },
    konu: "rusya-ukrayna", tur: "haber",
    kaynak: "https://www.hurriyetdailynews.com/erdogan-zelensky-meet-on-war-and-black-sea-security-228843"
  },
  {
    tarih: "2026-10-30",
    baslik: { tr: "Türk Devletleri Teşkilatı 13. Zirvesi — Ankara", en: "13th Summit of the Organization of Turkic States — Ankara" },
    ozet: {
      tr: "Ankara'daki zirvede dönem başkanlığı Azerbaycan'dan Türkiye'ye geçti ve 163 maddelik Ankara Beyannamesi kabul edildi. Beyanname savunma sanayii, siber güvenlik, Orta Koridor ve enerji hatlarında işbirliğini öngörüyor; Kıbrıs Türklerinin eşit haklarına destek de yer aldı. Özbekistan'dan Mirvohid Azimov yeni Genel Sekreter oldu; Azerbaycan zirvede Dışişleri Bakanı Bayramov düzeyinde temsil edildi.",
      en: "At the Ankara summit, the chairmanship passed from Azerbaijan to Türkiye and the 163-point Ankara Declaration was adopted. The declaration provides for cooperation on the defence industry, cybersecurity, the Middle Corridor and energy routes, and includes support for the equal rights of Turkish Cypriots. Mirvokhid Azimov of Uzbekistan became the new Secretary-General; Azerbaijan was represented by Minister of Foreign Affairs Bayramov."
    },
    sinavNotu: {
      tr: "TDT'nin yapısı: 5 üye (Türkiye, Azerbaycan, Kazakistan, Kırgızistan, Özbekistan), gözlemciler (Macaristan, Türkmenistan, KKTC). Orta Koridor ve Zengezur bağlantıları sık sorulur. 2027 zirvesi Özbekistan'da.",
      en: "OTS structure: 5 members (Türkiye, Azerbaijan, Kazakhstan, Kyrgyzstan, Uzbekistan) and observers (Hungary, Turkmenistan, the TRNC). The Middle Corridor and the Zangezur link are frequent questions. The 2027 summit will be in Uzbekistan."
    },
    konu: "turk-dunyasi", tur: "haber",
    kaynak: "https://www.dailysabah.com/politics/turkic-states-adopt-163-point-declaration-to-deepen-strategic-ties/news/amp"
  },
  {
    tarih: "2026-10-30",
    baslik: { tr: "Türkiye, Sinirlioğlu'nu BM Genel Sekreterliğine aday gösterdi", en: "Türkiye nominates Sinirlioğlu for Secretary General of the UN" },
    ozet: {
      tr: "Cumhurbaşkanı Erdoğan'ın imzasını taşıyan aday mektubu, BM Daimi Temsilcisi aracılığıyla Genel Kurul ve Güvenlik Konseyi başkanlarına iletildi. Aday, AGİT Genel Sekreteri ve eski Dışişleri Bakanı Feridun Sinirlioğlu. Bakan Fidan adaylığı, seçim sürecindeki tıkanıklığı aşmaya yönelik diplomatik bir katkı olarak nitelendirdi.",
      en: "A nomination letter signed by President Erdoğan was transmitted by Türkiye's Permanent Representative to the Presidents of the General Assembly and the Security Council. The candidate is Feridun Sinirlioğlu, OSCE Secretary-General and former Minister of Foreign Affairs. Minister Fidan described the candidacy as a diplomatic contribution to overcoming the deadlock in the selection process."
    },
    sinavNotu: {
      tr: "Genel Sekreter seçimi: Güvenlik Konseyi tavsiyesi (en az 9 oy, daimi üyelerin vetosu yok) + Genel Kurul ataması. Bölgesel rotasyon geleneği ve Güvenlik Konseyi'nin seçilmiş üyelerinin (ör. Yunanistan) tutumu belirleyici olabilir.",
      en: "Secretary-General selection: Security Council recommendation (at least 9 votes, no veto by a permanent member) followed by General Assembly appointment. The regional rotation tradition and the positions of elected Council members (e.g. Greece) may prove decisive."
    },
    konu: "arabuluculuk", tur: "haber",
    kaynak: "https://en.yenisafak.com/world/turkiye-nominates-sinirlioglu-to-break-un-deadlock-3725045"
  },
  {
    tarih: "2026-10-30",
    baslik: { tr: "G20 Dışişleri Bakanları Toplantısı ve Türkiye–ABD temasları", en: "G20 Foreign Ministers' Meeting and Türkiye–US contacts" },
    ozet: {
      tr: "Bakan Fidan, 30-31 Ekim'de Atlanta'daki G20 Dışişleri Bakanları Toplantısı'na katıldı ve ABD, Almanya, Japonya, Endonezya ve Meksika dışişleri bakanlarıyla görüştü. ABD Dışişleri Bakanlığına göre Fidan ile Rubio, Aralık'taki G20 Liderler Zirvesi öncesinde ikili ilişkileri ilerletmenin yollarını ele aldı. Bundan iki gün önce Cumhurbaşkanı Erdoğan ile Başkan Trump telefonda Ukrayna, Yemen ve Hürmüz Boğazı'ndaki gelişmeleri görüştü.",
      en: "Minister Fidan attended the G20 Foreign Ministers' Meeting in Atlanta on 30–31 October and met the ministers of foreign affairs of the US, Germany, Japan, Indonesia and Mexico. According to the US State Department, Fidan and Rubio discussed ways to advance bilateral ties ahead of the G20 Leaders' Summit in December. Two days earlier, President Erdoğan and President Trump discussed Ukraine, Yemen and the Strait of Hormuz by telephone."
    },
    sinavNotu: {
      tr: "Türkiye G20'nin kurucu üyesi. Bakanlar toplantısı ortak bildiri olmadan bitti (bkz. Dünya Gündemi); bu, çok taraflı forumlarda uzlaşı zorluğunun güncel bir örneği.",
      en: "Türkiye is a founding member of the G20. The ministerial ended without a joint communiqué (see World Agenda), a current example of how hard consensus has become in multilateral forums."
    },
    konu: "nato-abd", tur: "resmi",
    kaynak: "https://www.mfa.gov.tr/sayin-bakanimizin-g20-disisleri-bakanlari-toplantisi-na-katilimi-30-31-ekim-2026-atlanta.en.mfa"
  },
  {
    tarih: "2026-10-23",
    baslik: { tr: "9. İstanbul Arabuluculuk Konferansı", en: "9th Istanbul Mediation Conference" },
    ozet: {
      tr: "23-24 Ekim'de 'Barış için Ortaklıklar ve Yeni Perspektifler: Değişen Dünyada Arabuluculuk' temasıyla düzenlendi. Seri 2012'den beri yapılıyor.",
      en: "Held on 23–24 October under the theme 'Partnerships for Peace and New Perspectives: Mediation in a Changing World'. The series has been held since 2012."
    },
    sinavNotu: {
      tr: "Türkiye'nin arabuluculuk kimliği: BM'de Finlandiya ile 2010 'Arabuluculuk Yoluyla Barış' girişimi; BM, AGİT ve İİT'de Arabuluculuk Dostları Grubu eş başkanlığı.",
      en: "Türkiye's mediation identity: the 2010 'Mediation for Peace' initiative with Finland at the UN; co-chairing the Groups of Friends of Mediation at the UN, OSCE and OIC."
    },
    konu: "arabuluculuk", tur: "resmi",
    kaynak: "https://www.mfa.gov.tr/no_-204_-9-istanbul-arabuluculuk-konferansi-hk.tr.mfa"
  },
  {
    tarih: "2026-10-23",
    baslik: { tr: "İstanbul'da R4 ve R4+E3 dışişleri bakanları toplantıları", en: "R4 and R4+E3 meetings of ministers of foreign affairs in Istanbul" },
    ozet: {
      tr: "Bakan Fidan, R4 (Türkiye, Mısır, Pakistan, Suudi Arabistan) ve R4+E3 (Almanya, Birleşik Krallık, Fransa) formatındaki toplantılara ev sahipliği yaptı. Basına yansıyan bilgilere göre gündemde Filistin, Yemen, Hürmüz Boğazı ve Rusya-Ukrayna vardı; tarafların düzenli toplanma kararı aldığı bildirildi.",
      en: "Minister Fidan hosted meetings in the R4 (Türkiye, Egypt, Pakistan, Saudi Arabia) and R4+E3 (Germany, the UK, France) formats. According to press reports, the agenda covered Palestine, Yemen, the Strait of Hormuz and Russia–Ukraine, and the parties agreed to meet regularly."
    },
    sinavNotu: {
      tr: "Türkiye'nin Avrupa ile bölge ülkeleri arasında platform rolü ve \"minilateral\" (küçük gruplu) diplomasi örneği. Bazı basın kaynakları İtalya'yı da saydı; Bakanlığın resmî açıklaması ise yedi ülkeyi (R4+E3) belirtiyor. Resmî kaynağı esas al.",
      en: "An example of Türkiye's platform role between Europe and regional states and of 'minilateral' diplomacy. Some press reports also listed Italy; the Ministry's official statement names seven countries (R4+E3). Rely on the official source."
    },
    konu: "arabuluculuk", tur: "resmi",
    kaynak: "https://www.mfa.gov.tr/no_-203_-r4-ve-r4_e3-disisleri-bakanlari-toplantilari-hk.tr.mfa"
  },
  {
    tarih: "2026-10-22",
    baslik: { tr: "Türkiye–Kanada stratejik ortaklık", en: "Türkiye–Canada strategic partnership" },
    ozet: {
      tr: "Kanada Başbakanı Carney'nin ziyaretinde ilişkiler stratejik ortaklık düzeyine çıkarıldı. Enerji, savunma ve hava taşımacılığı anlaşmaları imzalandı. Serbest ticaret müzakerelerinin Kasım sonunda Ankara'da başlaması planlandı.",
      en: "During Prime Minister Carney's visit, relations were upgraded to a strategic partnership. Agreements on energy, defence and air transport were signed. Free trade negotiations are planned to start in Ankara at the end of November."
    },
    sinavNotu: {
      tr: "Orta güçler arası işbirliği örneği. Kanadalı bir şirket Türkiye'nin üçüncü nükleer santrali için rekabette (enerji başlığıyla bağlantı).",
      en: "An example of cooperation between middle powers. A Canadian company is competing for Türkiye's third nuclear power plant (link to the energy topic)."
    },
    konu: "enerji-iklim", tur: "haber",
    kaynak: "https://www.institude.org/news-bulletins/weekly-news-bulletin-on-turkey-october-26-2026"
  },
  {
    tarih: "2026-10-21",
    baslik: { tr: "'Badr' savunma işbirliği mutabakatı", en: "'Badr' defence cooperation memorandum" },
    ozet: {
      tr: "Türkiye, Katar, Pakistan ve Endonezya Doha'da savunma sanayii ve ortak üretimi güçlendirmeye yönelik bir mutabakat imzaladı.",
      en: "Türkiye, Qatar, Pakistan and Indonesia signed a memorandum in Doha to strengthen defence industry ties and joint production."
    },
    sinavNotu: {
      tr: "Savunma sanayii diplomasisi ve İslam ülkeleriyle yeni güvenlik ağları. NATO üyeliğiyle uyumu tartışma konusu.",
      en: "Defence industry diplomacy and new security networks with Muslim-majority countries. Its compatibility with NATO membership is a topic for debate."
    },
    konu: "iran-korfez", tur: "haber",
    kaynak: "https://www.institude.org/news-bulletins/weekly-news-bulletin-on-turkey-october-26-2026"
  },
  {
    tarih: "2026-10-20",
    baslik: { tr: "Mekke savunma paktı TBMM'ye sunuldu", en: "Mecca defence pact submitted to Parliament" },
    ozet: {
      tr: "Türkiye, Suudi Arabistan ve Pakistan arasındaki savunma paktı onay için Meclis'e sunuldu. Pakt, üç ülke de onayladıktan sonra en az 10 yıl bağlayıcı olacak.",
      en: "The defence pact between Türkiye, Saudi Arabia and Pakistan was submitted to Parliament for ratification. Once all three ratify it, the pact will be binding for at least 10 years."
    },
    sinavNotu: {
      tr: "Uluslararası antlaşmaların TBMM onayı (Anayasa md. 90) ve Körfez ile güvenlik ilişkilerinin kurumsallaşması.",
      en: "Parliamentary ratification of international treaties (Constitution, Art. 90) and the institutionalisation of security relations with the Gulf."
    },
    konu: "iran-korfez", tur: "haber",
    kaynak: "https://www.institude.org/news-bulletins/weekly-news-bulletin-on-turkey-october-26-2026"
  },
  {
    tarih: "2026-10-20",
    baslik: { tr: "Doğu Libya, 2019 deniz yetki alanları mutabakatını onayladı", en: "Eastern Libya ratifies the 2019 maritime jurisdiction memorandum" },
    ozet: {
      tr: "Bingazi merkezli Temsilciler Meclisi, Türkiye-Libya mutabakatını onayladı ve 2020'deki Türkiye boykotunu kaldırdı. AB mutabakatı geçersiz saydığını yineledi; Yunanistan ve Mısır kendi anlaşmalarını genişletmeyi görüşmeye karar verdi.",
      en: "The Benghazi-based House of Representatives ratified the Türkiye–Libya memorandum and lifted its 2020 boycott of Türkiye. The EU reiterated that it considers the memorandum void; Greece and Egypt agreed to discuss extending their own agreement."
    },
    sinavNotu: {
      tr: "Doğu Akdeniz başlığı için kritik gelişme. Türkiye'nin Libya'da iki tarafla da temas kurabilmesinin sonucu.",
      en: "A key development for the Eastern Mediterranean topic, resulting from Türkiye's ability to engage with both sides in Libya."
    },
    konu: "ege-akdeniz", tur: "haber",
    kaynak: "https://www.institude.org/news-bulletins/weekly-news-bulletin-on-turkey-october-26-2026"
  },
  {
    tarih: "2026-09-17",
    baslik: { tr: "Kıbrıs: BM çatısında liderler görüşmesi", en: "Cyprus: leaders' meeting under UN auspices" },
    ozet: {
      tr: "KKTC Cumhurbaşkanı Erhürman ile Rum lider Hristodulidis Lefkoşa'da görüştü. Güven artırıcı önlemlerde ve yeni geçiş noktalarında uzlaşı sağlanamadı; liderler BM Genel Sekreteri'ne bilgi verdi.",
      en: "TRNC President Erhürman and Greek Cypriot leader Christodoulides met in Nicosia. No agreement was reached on confidence building measures or new crossing points; the leaders briefed the Secretary General of the UN."
    },
    sinavNotu: {
      tr: "Güven artırıcı önlemler (CBMs) kavramı ve müzakerelerin bugünkü durumu. Rum tarafının İsrail ile yakınlaşması Kıbrıslı Türklerce güveni zedeleyen adım olarak görülüyor.",
      en: "The concept of confidence building measures (CBMs) and the current state of talks. Turkish Cypriots see the Greek Cypriot side's rapprochement with Israel as a step that undermines trust."
    },
    konu: "kibris", tur: "haber",
    kaynak: "https://www.dailysabah.com/politics/turkish-cypriot-leader-warns-of-trust-erosion-after-cyprus-talks/news"
  },
  {
    tarih: "2026-09-13",
    baslik: { tr: "Dışişleri Bakanı Fidan'ın Şam ziyareti", en: "Minister of Foreign Affairs Fidan's visit to Damascus" },
    ozet: {
      tr: "Bakan Fidan 13-14 Eylül'de Şam'da Suriye Dışişleri Bakanı Şeybani ile görüştü ve Cumhurbaşkanı Şara tarafından kabul edildi. Suriye İçişleri Bakanı ile üçlü bir toplantı yapıldı, Suriye Türkmen Meclisi heyetiyle de bir araya gelindi.",
      en: "On 13–14 September in Damascus, Minister Fidan met Syrian Minister of Foreign Affairs al-Shaibani and was received by President al-Sharaa. A trilateral meeting was held with the Syrian Interior Minister, and he also met a delegation of the Syrian Turkmen Assembly."
    },
    sinavNotu: {
      tr: "Yeni Suriye yönetimiyle güvenlik dâhil çok boyutlu işbirliği. Suriye, Fidan'ın 2026 öncelik listesinde birinci sırada.",
      en: "Multi-dimensional cooperation with the new Syrian administration, including on security. Syria tops Fidan's 2026 priority list."
    },
    konu: "suriye", tur: "resmi",
    kaynak: "https://www.mfa.gov.tr/sayin-bakanimizin-suriye-yi-ziyareti--13-14-eylul-2026--sam.en.mfa"
  },
  {
    tarih: "2026-07-07",
    baslik: { tr: "NATO Ankara Zirvesi", en: "NATO Ankara Summit" },
    ozet: {
      tr: "7-8 Temmuz'da Ankara'da yapıldı. Türkiye 2004 İstanbul Zirvesi'nden sonra ikinci kez NATO liderler zirvesine ev sahipliği yaptı. Bakan Fidan zirveyi 'NATO 3.0' vizyonu ve 'güçlü NATO içinde güçlü Avrupa' çerçevesinde değerlendirdi.",
      en: "Held in Ankara on 7–8 July. Türkiye hosted a NATO leaders' summit for the second time, after the 2004 Istanbul Summit. Minister Fidan framed it in terms of the 'NATO 3.0' vision and 'a stronger Europe within a stronger NATO'."
    },
    sinavNotu: {
      tr: "Türkiye'nin ittifaktaki ağırlığı ve yük paylaşımı tartışmaları. Mülakatta sık gelebilecek bir başlık.",
      en: "Türkiye's weight in the Alliance and the burden sharing debate. A likely interview topic."
    },
    konu: "nato-abd", tur: "haber",
    kaynak: "https://en.yenisafak.com/turkiye/turkish-fm-nato-ankara-summit-concluded-successfully-3720598"
  },
  {
    tarih: "2026-03-04",
    baslik: { tr: "İran füzeleri Türk hava sahasında engellendi", en: "Iranian missiles intercepted in Turkish airspace" },
    ozet: {
      tr: "İran savaşı sırasında Türk hava sahasına giren dört balistik füze Mart ayında NATO hava ve füze savunma sistemlerince düşürüldü. Türkiye İran Büyükelçisini Dışişleri'ne çağırdı ve ihlallerin kabul edilemez olduğunu açıkladı.",
      en: "During the Iran war, four ballistic missiles that entered Turkish airspace in March were shot down by NATO air and missile defence systems. Türkiye summoned the Iranian Ambassador and declared the violations unacceptable."
    },
    sinavNotu: {
      tr: "NATO hava savunmasının somut işlevi ve 'büyükelçinin Bakanlığa çağrılması' diplomatik pratiği. Türkiye'nin İran'la ilişkisinde denge arayışı.",
      en: "The tangible function of NATO air defence and the diplomatic practice of summoning an ambassador. Türkiye's search for balance in its relations with Iran."
    },
    konu: "iran-korfez", tur: "haber",
    kaynak: "https://en.wikipedia.org/wiki/2026_interceptions_of_Iranian_missiles_in_Turkey"
  }
];

// YAKLAŞAN ETKİNLİKLER — tarih geçince "DUYURULAR" listesine taşıyabilirsin
const YAKLASAN = [
  {
    tarih: "2026-11-09",
    baslik: { tr: "COP31 İklim Konferansı — Antalya (9-20 Kasım)", en: "COP31 Climate Change Conference — Antalya (9–20 November)" },
    not: { tr: "COP Başkanı Bakan Murat Kurum; müzakere başkanlığı Avustralya'da. Dünya Liderleri Zirvesi 11-12 Kasım'da.", en: "COP President: Minister Murat Kurum; Australia presides over the negotiations. The World Leaders' Summit is on 11–12 November." },
    kaynak: "https://en.wikipedia.org/wiki/2026_United_Nations_Climate_Change_Conference"
  },
  {
    tarih: "2026-11-30",
    baslik: { tr: "Türkiye–Kanada serbest ticaret müzakereleri — Ankara", en: "Türkiye–Canada free trade negotiations — Ankara" },
    not: { tr: "İlk tur 30 Kasım - 4 Aralık arasında planlanıyor.", en: "The first round is planned for 30 November – 4 December." },
    kaynak: "https://www.institude.org/news-bulletins/weekly-news-bulletin-on-turkey-october-26-2026"
  }
];
