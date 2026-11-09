// =============================================================
// GÜNCEL GELİŞMELER (Türk Dış Politikası) — elle güncellenir, iki dilli
// YENİ DUYURU EKLEMEK İÇİN: en üste yeni bir { ... } bloğu ekle.
// tarih: "YYYY-AA-GG" biçiminde (sıralama buna göre yapılır).
// kaynak: mutlaka orijinal habere/açıklamaya link ver.
// tur: "resmi" (Bakanlık/Cumhurbaşkanlığı açıklaması) ya da "haber" (basın/analiz)
// konu: politikalar.js'deki bir id (ilgili karta link verir)
// =============================================================

const SON_GUNCELLEME = { tr: "9 Kasım 2026", en: "9 November 2026" };

const DUYURULAR = [
  {
    tarih: "2026-11-09",
    baslik: { tr: "COP31 İklim Konferansı Antalya'da başladı", en: "COP31 Climate Change Conference opens in Antalya" },
    ozet: {
      tr: "BM İklim Değişikliği Konferansı (COP31), 9-20 Kasım tarihlerinde Antalya Expo Merkezi'nde toplanıyor. COP Başkanı Çevre, Şehircilik ve İklim Değişikliği Bakanı Murat Kurum; COP30'da varılan uzlaşı gereği müzakerelere Avustralya başkanlık ediyor. Dünya Liderleri Zirvesi 11-12 Kasım'da yapılacak; gündemde ulusal iklim planlarının yetersizliği, uyum finansmanı ve kayıp ve zarar fonu öne çıkıyor.",
      en: "The UN Climate Change Conference (COP31) meets at the Antalya Expo Centre on 9–20 November. The COP President is Minister of Environment, Urbanisation and Climate Change Murat Kurum; under the arrangement agreed at COP30, Australia presides over the negotiations. The World Leaders' Summit is on 11–12 November; the agenda is led by insufficient national climate plans, adaptation finance and the loss and damage fund."
    },
    sinavNotu: {
      tr: "Türkiye ile Avustralya arasındaki ev sahipliği/başkanlık paylaşımı COP tarihinde alışılmadık bir model. Türkiye'nin Paris Anlaşması'nı 2021'de onaylaması ve 2053 net sıfır hedefi sorulabilir. Katılımın önceki COP'lara göre düşük kalması, iklim diplomasisindeki genel yavaşlama olarak yorumlanıyor.",
      en: "The hosting/presidency split between Türkiye and Australia is an unusual model in COP history. Türkiye's ratification of the Paris Agreement in 2021 and its 2053 net zero target are likely questions. Lower attendance than at previous COPs is read as a broader slowdown in climate diplomacy."
    },
    konu: "enerji-iklim", tur: "haber",
    kaynak: "https://www.climateandcapitalmedia.com/cop31-antalya-preview/"
  },
  {
    tarih: "2026-11-08",
    baslik: { tr: "Erdoğan, Karabağ Zaferi'nin 6. yılında Şuşa'da", en: "Erdoğan in Shusha on the 6th anniversary of the Karabakh victory" },
    ozet: {
      tr: "Cumhurbaşkanı Erdoğan, 8 Kasım Zafer Günü dolayısıyla Azerbaycan'ı ziyaret etti ve Şuşa'da Cumhurbaşkanı Aliyev tarafından resmî törenle karşılandı. İki lider ortak basın toplantısında 'tek millet, iki devlet' anlayışını ve 2021 Şuşa Beyannamesi'ni vurguladı; Erdoğan Güney Kafkasya'nın artık işbirliği ve kalkınma alanı olarak anıldığını söyledi.",
      en: "President Erdoğan visited Azerbaijan for Victory Day on 8 November and was received by President Aliyev with an official ceremony in Shusha. At a joint press conference, the two leaders stressed the 'one nation, two states' principle and the 2021 Shusha Declaration; Erdoğan said the South Caucasus is now described as an area of cooperation and development."
    },
    sinavNotu: {
      tr: "Şuşa Beyannamesi (15 Haziran 2021) karşılıklı yardım hükmü içeren bir müttefiklik belgesi. Ziyaret, Aliyev'in Ankara'daki TDT Zirvesi'ne katılmamasının ardından yapıldı; ilişkilerin üst düzeyde teyidi olarak okunabilir.",
      en: "The Shusha Declaration (15 June 2021) is an alliance document with a mutual assistance clause. The visit came after Aliyev did not attend the OTS Summit in Ankara and can be read as a reaffirmation of ties at the highest level."
    },
    konu: "turk-dunyasi", tur: "haber",
    kaynak: "https://www.hurriyet.com.tr/gundem/karabag-zaferi-cumhurbaskani-erdogan-azerbaycana-gitti-43370174"
  },
  {
    tarih: "2026-11-07",
    baslik: { tr: "Fidan, TRT World Forum'da bağlantısallık ve deniz yollarını anlattı", en: "Fidan on connectivity and sea routes at the TRT World Forum" },
    ozet: {
      tr: "Bakan Fidan, İstanbul'daki TRT World Forum 2026'da deniz yolları, dar geçitler ve koridorlar oturumunda konuştu. Fidan, Karadeniz'deki seyrüsefer koridorlarının ve boru hatlarının çatışma ve baskı aracına dönüşebileceği uyarısında bulundu, bölgesel kapasitelerin güçlendirilmesi ve 'birden fazla sorumluluk merkezi' oluşturulması çağrısı yaptı. Orta Koridor'u ve Irak üzerinden Körfez'i Avrupa'ya bağlayacak hattı örnek gösterdi.",
      en: "Minister Fidan spoke at a session on sea routes, chokepoints and corridors at the TRT World Forum 2026 in Istanbul. He warned that Black Sea shipping corridors and pipelines could become instruments of conflict and pressure, and called for stronger regional capacities and 'multiple centres of responsibility'. He cited the Middle Corridor and the planned route linking the Gulf to Europe via Iraq as examples."
    },
    sinavNotu: {
      tr: "Bölgesel sahiplenme ('bölge sorunlarına bölgesel çözüm') Fidan döneminin ana temalarından. Kalkınma Yolu Projesi ve Orta Koridor, Hürmüz krizi ortamında alternatif ulaştırma hatları olarak sık soruluyor. Fidan aynı konuşmada Türkiye, Suudi Arabistan ve Pakistan'ı bir araya getiren Mekke savunma ittifakına da değindi.",
      en: "Regional ownership ('regional solutions to regional problems') is a key theme of Fidan's tenure. The Development Road Project and the Middle Corridor are frequently asked about as alternative transport routes amid the Hormuz crisis. In the same speech Fidan also referred to the Mecca defence alliance bringing together Türkiye, Saudi Arabia and Pakistan."
    },
    konu: "iran-korfez", tur: "haber",
    kaynak: "https://www.milliyet.com.tr/dunya/son-dakika-disisleri-bakani-hakan-fidan-turkiye-surdurulebilir-diplomasiyi-saglamaya-calisiyor-7696204"
  },
  {
    tarih: "2026-11-04",
    baslik: { tr: "Avrupa Komisyonu 2026 Türkiye Raporu ve Dışişleri Bakanlığının tepkisi", en: "European Commission's 2026 Türkiye Report and the Ministry of Foreign Affairs' response" },
    ozet: {
      tr: "Komisyon, genişleme paketi kapsamında yayımladığı raporda katılım müzakerelerinin 2018'den beri durma noktasında olduğunu belirtti; demokrasi, hukukun üstünlüğü, yargı bağımsızlığı ve temel haklarda gerilemeye dikkat çekti, ekonomiyi ve Türkiye'nin Avrupa güvenliğindeki rolünü ise olumlu değerlendirdi. Dışişleri Bakanlığı yazılı açıklamasında siyasi kriterler, yargı ve temel haklara ilişkin iddiaları mesnetsiz bularak reddetti ve raporu çifte standartla eleştirdi. Bakanlık ekonomiye ve savunma rolüne dair tespitleri memnuniyetle karşıladı ve Gümrük Birliği'nin güncellenmesi çağrısını yineledi.",
      en: "In its report, published as part of the enlargement package, the Commission said accession negotiations have been at a standstill since 2018; it pointed to backsliding on democracy, the rule of law, judicial independence and fundamental rights, while assessing the economy and Türkiye's role in European security positively. In a written statement, the Ministry of Foreign Affairs rejected the claims on political criteria, the judiciary and fundamental rights as unfounded and criticised the report for double standards. The Ministry welcomed the findings on the economy and the defence role and renewed its call to modernise the Customs Union."
    },
    sinavNotu: {
      tr: "Yıllık ilerleme raporlarının yapısı: siyasi kriterler, ekonomik kriterler ve fasıllar (ör. 23. Fasıl Yargı ve Temel Haklar, 31. Fasıl Dış, Güvenlik ve Savunma Politikası). Rapora göre Türkiye 2025'te AB'nin beşinci büyük ticaret ortağı. Bakanlık ayrıca Kıbrıs ve Doğu Akdeniz değerlendirmelerini reddetti; 'AB'nin Kıbrıs'ta taraf tutması' Türkiye'nin yerleşik eleştirisi.",
      en: "Structure of the annual reports: political criteria, economic criteria and chapters (e.g. Chapter 23 Judiciary and Fundamental Rights, Chapter 31 Foreign, Security and Defence Policy). According to the report, Türkiye was the EU's fifth-largest trading partner in 2025. The Ministry also rejected the assessments on Cyprus and the Eastern Mediterranean; 'the EU taking sides on Cyprus' is a long-standing Turkish criticism."
    },
    konu: "ab", tur: "haber",
    kaynak: "https://enlargement.ec.europa.eu/turkiye-report-2026_en"
  },
  {
    tarih: "2026-10-31",
    baslik: { tr: "Zelenski'nin İstanbul ziyareti", en: "Zelenskyy's visit to Istanbul" },
    ozet: {
      tr: "Cumhurbaşkanı Erdoğan, Ukrayna Devlet Başkanı Zelenski'yi Dolmabahçe'de kabul etti. Görüşmede Ukrayna'da barış çabaları ve Karadeniz'deki seyrüsefer güvenliği ele alındı; Erdoğan sivil gemilere yönelik saldırıların kabul edilemez olduğunu söyledi. Zelenski, Kasım'ın ilk yarısında ABD-Rusya-Ukrayna üçlü görüşmelerine hazırlanıldığını ve Türkiye'nin ev sahipliği seçeneğinin de konuşulduğunu belirtti.",
      en: "President Erdoğan received Ukrainian President Zelenskyy at Dolmabahçe. The talks covered peace efforts in Ukraine and safety of navigation in the Black Sea; Erdoğan said attacks on civilian vessels were unacceptable. Zelenskyy said a trilateral US–Russia–Ukraine round was being prepared for the first half of November and that the option of Türkiye as host had also been discussed."
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
