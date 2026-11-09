// =============================================================
// DÜNYA GÜNDEMİ — güncel uluslararası ilişkiler haberleri (iki dilli)
// Bu liste Türkiye dışındaki küresel gelişmeleri izler.
// YENİ HABER EKLEMEK İÇİN: en üste yeni bir { ... } bloğu ekle.
// bolge: Avrupa, Orta Doğu, Avrasya, Asya-Pasifik, Amerika, Afrika, Küresel
// baglanti: Bu gelişmenin Türkiye ile ilgisi (sınavda "Türkiye perspektifi" için)
// =============================================================

const DUNYA_GUNCELLEME = { tr: "9 Kasım 2026", en: "9 November 2026" };

const DUNYA = [
  {
    tarih: "2026-11-08",
    bolge: { tr: "Avrasya", en: "Eurasia" },
    baslik: { tr: "Ukrayna: Abu Dabi'de ABD arabuluculuğunda yeni tur, Avrupalılar da katılacak", en: "Ukraine: new US-mediated round in Abu Dhabi, with European participation" },
    ozet: {
      tr: "ABD özel temsilcisi Witkoff, Ukrayna ve Rusya heyetlerinin 10-11 Kasım'da Abu Dabi'de teknik düzeyde bir araya geleceğini açıkladı; Kremlin katılımı doğruladı. Bu, ABD arabuluculuğundaki son turun yapıldığı Şubat'tan bu yana ilk görüşme olacak. Fransa Dışişleri Bakanı Barrot Avrupalıların da masada temsil edileceğini söyledi; toprak ve güvenlik güvenceleri konusundaki ayrılıklar sürüyor.",
      en: "US envoy Witkoff announced that Ukrainian and Russian delegations would meet at technical level in Abu Dhabi on 10–11 November; the Kremlin confirmed its participation. It will be the first US-mediated round since February. French Minister of Foreign Affairs Barrot said the Europeans would be represented at the table; differences over territory and security guarantees remain."
    },
    baglanti: {
      tr: "Türkiye, Zelenski'nin 31 Ekim ziyaretinde ev sahipliği seçeneğini gündeme getirmişti; müzakerelerin Körfez'de sürmesi Türkiye'nin kolaylaştırıcı rolü açısından izlenmeli. Karadeniz seyrüsefer güvenliği Türkiye için öncelikli başlık.",
      en: "Türkiye raised the option of hosting during Zelenskyy's 31 October visit; the continuation of talks in the Gulf is worth following for Türkiye's facilitation role. Safety of navigation in the Black Sea is a priority issue for Türkiye."
    },
    kaynak: "https://www.investing.com/news/world-news/europeans-will-join-ukraine-talks-in-abu-dhabi-french-minister-says-5010393"
  },
  {
    tarih: "2026-11-07",
    bolge: { tr: "Orta Doğu", en: "Middle East" },
    baslik: { tr: "ABD, Hürmüz'deki Keşm Adası'na sınırlı saldırı düzenledi", en: "US carries out limited strikes on Qeshm Island in the Strait of Hormuz" },
    ozet: {
      tr: "Başkan Trump, İran devlet medyasının Keşm Adası'na füze isabet ettiğini bildirmesinin ardından ABD'nin İran'a 'küçük' saldırılar düzenlediğini doğruladı; saldırıların İran hava savunma unsurlarını hedef aldığı bildirildi. İran Hürmüz Boğazı'ndaki ablukasını, ABD de İran limanlarına karşı ablukasını sürdürüyor. Taraflar arasında arabulucular aracılığıyla temaslar devam ediyor, ancak ABD Dışişleri Bakanı Rubio bir atılımın yakın olmadığını söyledi.",
      en: "President Trump confirmed that the US had carried out 'minor' strikes on Iran after Iranian state media reported missiles hitting Qeshm Island; the strikes were reported to target Iranian air defence assets. Iran maintains its blockade of the Strait of Hormuz, and the US its counter-blockade of Iranian ports. Contacts continue through mediators, but US Secretary of State Rubio said a breakthrough was not imminent."
    },
    baglanti: {
      tr: "Enerji güvenliği ve petrol fiyatları; Türkiye'nin 'savaşın yayılmaması' ve diplomatik çözüm çağrısı. Fidan'ın TRT World Forum'da dar geçitlerin baskı aracına dönüşmesine ilişkin uyarısıyla bağlantılı (bkz. Türkiye Gündemi).",
      en: "Energy security and oil prices; Türkiye's call to prevent the war from spreading and for a diplomatic solution. Linked to Fidan's warning at the TRT World Forum about chokepoints becoming instruments of pressure (see Türkiye Agenda)."
    },
    kaynak: "https://www.cbsnews.com/live-updates/iran-war-trump-us-strait-hormuz-persian-gulf/"
  },
  {
    tarih: "2026-11-04",
    bolge: { tr: "Amerika", en: "Americas" },
    baslik: { tr: "ABD ara seçimleri: Demokratlar Kongre'nin iki kanadını da kazandı", en: "US midterms: Democrats win both chambers of Congress" },
    ozet: {
      tr: "3 Kasım ara seçimlerinde Demokrat Parti hem Temsilciler Meclisi'nde hem de Senato'da çoğunluğu elde etti. AP'nin 4 Kasım itibarıyla açıkladığı sonuçlara göre Demokratlar Meclis'te 218 eşiğini aşarak 225, Senato'da 54 sandalyeye ulaştı; bazı yarışların sonucu henüz kesinleşmedi. Cumhuriyetçilerin elindeki en az yedi Senato koltuğu Demokratlara geçti.",
      en: "In the 3 November midterm elections, the Democratic Party won majorities in both the House of Representatives and the Senate. According to AP results as of 4 November, Democrats passed the 218 threshold with 225 House seats and reached 54 seats in the Senate; some races have yet to be called. At least seven Republican-held Senate seats flipped to the Democrats."
    },
    baglanti: {
      tr: "Silah satışlarında Kongre onayı (ör. F-16, F-35 dosyaları) ve CAATSA yaptırımları Türkiye-ABD ilişkilerinde Kongre'yi belirleyici kılıyor. Bölünmüş yönetim, Trump yönetiminin dış politika kararları üzerinde Kongre denetimini artırabilir.",
      en: "Congressional approval of arms sales (e.g. the F-16 and F-35 files) and CAATSA sanctions make Congress a decisive actor in Türkiye–US relations. Divided government may increase congressional oversight of the Trump administration's foreign policy decisions."
    },
    kaynak: "https://www.illawarramercury.com.au/story/9386125/democrats-take-full-control-of-congress-in-midterms/"
  },
  {
    tarih: "2026-11-04",
    bolge: { tr: "Avrupa", en: "Europe" },
    baslik: { tr: "Avrupa Komisyonu 2026 Genişleme Paketi'ni açıkladı", en: "European Commission presents the 2026 Enlargement Package" },
    ozet: {
      tr: "Genişlemeden Sorumlu Komisyon Üyesi Marta Kos'un sunduğu paket, genişleme politikasına ilişkin bir bildirim ile on ülkenin raporlarını içeriyor: Karadağ, Arnavutluk, Ukrayna, Moldova, Sırbistan, Kuzey Makedonya, Bosna-Hersek, Kosova, Türkiye ve Gürcistan. Raporlar 1 Eylül 2025 - 1 Eylül 2026 dönemini kapsıyor.",
      en: "Presented by Commissioner for Enlargement Marta Kos, the package comprises a communication on enlargement policy and reports on ten countries: Montenegro, Albania, Ukraine, Moldova, Serbia, North Macedonia, Bosnia and Herzegovina, Kosovo, Türkiye and Georgia. The reports cover the period from 1 September 2025 to 1 September 2026."
    },
    baglanti: {
      tr: "Türkiye 1999'dan beri aday ülke, katılım müzakereleri 2005'te başladı ve 2018'den beri fiilen donmuş durumda. Türkiye raporu ve Bakanlığın tepkisi için bkz. Türkiye Gündemi.",
      en: "Türkiye has been a candidate country since 1999; accession negotiations began in 2005 and have been effectively frozen since 2018. See Türkiye Agenda for the Türkiye report and the Ministry's response."
    },
    kaynak: "https://www.interpressnews.ge/en/article/150641-european-commission-to-present-2026-enlargement-package-today-which-includes-a-report-on-candidate-countries-including-georgia/"
  },
  {
    tarih: "2026-10-31",
    bolge: { tr: "Küresel", en: "Global" },
    baslik: { tr: "G20 Dışişleri Bakanları Atlanta'da uzlaşısız ayrıldı", en: "G20 ministers of foreign affairs part in Atlanta without consensus" },
    ozet: {
      tr: "ABD dönem başkanlığında yapılan iki günlük toplantı ortak bildiri çıkmadan sona erdi; yalnızca bir dönem başkanlığı açıklaması yayımlandı. Avrupalı bakanların Rus Dışişleri Bakanı Lavrov ile aynı karede yer almaya itiraz etmesi üzerine geleneksel aile fotoğrafı iptal edildi. Ukrayna savaşı, Polonya'nın G20 üyeliği ve Güney Afrika'nın davet edilmemesi tartışmalı başlıklar arasındaydı.",
      en: "The two-day meeting under the US presidency ended without a joint communiqué; only a chair's statement was issued. The traditional family photo was cancelled after European ministers objected to appearing alongside Russian Minister of Foreign Affairs Lavrov. The war in Ukraine, Poland's G20 membership and South Africa not being invited were among the contested issues."
    },
    baglanti: {
      tr: "Türkiye G20 üyesi; Bakan Fidan toplantıya katıldı. Aralık'ta Miami'de yapılacak Liderler Zirvesi öncesinde ittifak içi ve Batı-Rusya ayrışmalarının göstergesi.",
      en: "Türkiye is a G20 member, and Minister Fidan attended. An indicator of intra-Western and West–Russia divisions ahead of the Leaders' Summit in Miami in December."
    },
    kaynak: "https://www.ksat.com/news/world/2026/10/31/g20-foreign-ministers-in-atlanta-meeting-head-to-an-ending-without-consensus-on-key-issues/"
  },
  {
    tarih: "2026-10-30",
    bolge: { tr: "Küresel", en: "Global" },
    baslik: { tr: "BM Genel Sekreteri seçimi: 7. yoklama oylaması", en: "Secretary General of the UN selection: 7th straw poll" },
    ozet: {
      tr: "Güvenlik Konseyi 30 Ekim'de yedinci gayriresmî yoklama oylamasını yaptı. Senegal'in eski Cumhurbaşkanı Sall 17 Ekim'de yarıştan çekilmişti; BAE'nin adayı Lana Nusseibeh ise yarışa yeni katıldı. Basına yansıyan sonuçlara göre UNCTAD Genel Sekreteri Grynspan önde, UAEA Genel Direktörü Grossi ikinci sırada.",
      en: "The Security Council held its seventh informal straw poll on 30 October. Former Senegalese President Sall had withdrawn on 17 October, while the UAE's candidate Lana Nusseibeh recently entered the race. According to results reported in the press, UNCTAD Secretary-General Grynspan leads, with IAEA Director General Grossi second."
    },
    baglanti: {
      tr: "Türkiye aynı gün Feridun Sinirlioğlu'nu aday gösterdi (bkz. Türkiye Gündemi).",
      en: "On the same day Türkiye nominated Feridun Sinirlioğlu (see Türkiye Agenda)."
    },
    kaynak: "https://www.thenationalnews.com/news/2026/10/30/un-secretary-general-seventh-straw-poll/"
  },
  {
    tarih: "2026-10-29",
    bolge: { tr: "Orta Doğu", en: "Middle East" },
    baslik: { tr: "İsrail seçimleri: hiçbir blok çoğunluğa ulaşamadı", en: "Israeli election: no bloc wins a majority" },
    ozet: {
      tr: "27 Ekim seçiminde oy sayımı tamamlandı: Netanyahu'nun bloku 53, Eisenkot liderliğindeki muhalefet bloku 48, Arap partileri 19 sandalye kazandı. Likud 26 sandalyeyle birinci parti oldu. 120 sandalyeli Knesset'te 61'lik çoğunluk için koalisyon görüşmeleri başladı.",
      en: "Counting in the 27 October election is complete: Netanyahu's bloc won 53 seats, the opposition bloc led by Eisenkot 48 and the Arab parties 19. Likud came first with 26 seats. Coalition talks have begun to reach the 61-seat majority in the 120-seat Knesset."
    },
    baglanti: {
      tr: "Bakan Fidan seçim öncesinde, sonuç ne olursa olsun İsrail dış politikasında belirgin bir değişiklik beklemediklerini söylemişti. Gazze ateşkesi ve Suriye dosyaları açısından izlenmeli.",
      en: "Before the vote, Minister Fidan said Türkiye expected no particular change in Israeli foreign policy whatever the outcome. Worth following for the Gaza ceasefire and Syria."
    },
    kaynak: "https://www.aljazeera.com/news/2026/10/29/israel-election-result-shows-no-overall-majority-as-vote-count-complete"
  },
  {
    tarih: "2026-10-29",
    bolge: { tr: "Orta Doğu", en: "Middle East" },
    baslik: { tr: "Hürmüz Boğazı'nda tankerlere mayın saldırıları", en: "Mine attacks on tankers in the Strait of Hormuz" },
    ozet: {
      tr: "Boğazda ve çevresinde birden fazla tanker mayına çarptı ya da gemiye yapıştırılan mayınlarla hasar gördü; UKMTO bir tankerin boğazdan çıkarken kimliği belirsiz bir mermiyle vurulduğunu bildirdi. İran Devrim Muhafızları, izinsiz güney rotasını kullanan tankerlerin isabet aldığını ileri sürdü. Brent petrol varil başına 113 doların üzerinde seyrediyor.",
      en: "Several tankers in and around the strait struck mines or were damaged by limpet mines; UKMTO reported a tanker struck by an unknown projectile while exiting the strait. Iran's Revolutionary Guard claimed that tankers using the unauthorised southern route had been hit. Brent crude is trading above 113 dollars a barrel."
    },
    baglanti: {
      tr: "Enerji güvenliği; Erdoğan, Trump ile görüşmesinde Türkiye, Suudi Arabistan ve Pakistan'ın Hürmüz'deki gelişmeleri izlediğini ve diplomatik çözümden yana olduğunu belirtti.",
      en: "Energy security; in his call with Trump, Erdoğan said Türkiye, Saudi Arabia and Pakistan were following developments in Hormuz and favoured a diplomatic solution."
    },
    kaynak: "https://www.cbsnews.com/live-updates/iran-war-donald-trump-qatar-mediators-new-proposal-end-war/"
  },
  {
    tarih: "2026-10-25",
    bolge: { tr: "Amerika", en: "Americas" },
    baslik: { tr: "Brezilya'da Lula dördüncü kez seçildi", en: "Lula elected for a fourth term in Brazil" },
    ozet: {
      tr: "Brezilya'da 25 Ekim'deki ikinci turda Devlet Başkanı Lula, Flávio Bolsonaro'yu yaklaşık yüzde 52 oyla yendi. Lula böylece rekor sayılan dördüncü dönemini kazandı.",
      en: "In Brazil's second round on 25 October, President Lula defeated Flávio Bolsonaro with about 52 per cent of the vote, winning a record fourth term."
    },
    baglanti: {
      tr: "Brezilya BRICS ve G20 üyesi; COP30'a ev sahipliği yaptı ve iklim müzakerelerinde bayrağı COP31 ev sahibi Türkiye'ye devrediyor.",
      en: "Brazil is a BRICS and G20 member; it hosted COP30 and is handing over to Türkiye, the COP31 host, in the climate negotiations."
    },
    kaynak: "https://www.bloomberg.com/news/articles/2026-10-25/lula-wins-a-record-fourth-term-in-brazil-in-a-surprise-comeback"
  },
  {
    tarih: "2026-10-27",
    bolge: { tr: "Orta Doğu", en: "Middle East" },
    baslik: { tr: "İsrail'de genel seçim", en: "General election in Israel" },
    ozet: {
      tr: "İsrail 27 Ekim'de sandığa gidiyor. Kamuoyu yoklamalarına göre ne Netanyahu'nun bloku ne de muhalefet 61 sandalyelik çoğunluğa ulaşabiliyor; uzun bir koalisyon süreci bekleniyor.",
      en: "Israel goes to the polls on 27 October. Polls suggest neither Netanyahu's bloc nor the opposition will reach the 61-seat majority, pointing to a long coalition process."
    },
    baglanti: {
      tr: "Sonuç; Gazze ateşkesinin ikinci aşaması, Suriye ve Türkiye-İsrail gerilimi açısından belirleyici olabilir.",
      en: "The outcome may shape the second phase of the Gaza ceasefire, Syria and the Türkiye–Israel tension."
    },
    kaynak: "https://mdbriefing.substack.com/p/md-weekly-briefing-week-of-26-october"
  },
  {
    tarih: "2026-10-23",
    bolge: { tr: "Orta Doğu", en: "Middle East" },
    baslik: { tr: "Hürmüz Boğazı'nda tanker saldırıları ve petrol şoku", en: "Tanker attacks in the Strait of Hormuz and an oil shock" },
    ozet: {
      tr: "Brent petrol Nisan'dan bu yana en yüksek seviyeye çıktı. İran Devrim Muhafızları dokuz tankerin vurulduğunu ya da mayına çarptığını iddia etti; İngiliz deniz ticaret merkezi UKMTO iki saldırıyı doğruladı. Boğazdan günlük geçiş sayısı savaş öncesi seviyenin çok altında.",
      en: "Brent crude hit its highest level since April. Iran's Revolutionary Guard claimed nine tankers had been hit or mined; the UK maritime trade agency UKMTO confirmed two attacks. Daily transits through the strait remain far below pre-war levels."
    },
    baglanti: {
      tr: "Enerji güvenliği ve enerji fiyatları; Türkiye'nin 'savaşın yayılmaması' çağrısı ve Körfez ile yeni savunma işbirlikleri.",
      en: "Energy security and energy prices; Türkiye's call to prevent the war from spreading and its new defence cooperation with the Gulf."
    },
    kaynak: "https://mdbriefing.substack.com/p/md-weekly-briefing-week-of-26-october"
  },
  {
    tarih: "2026-10-22",
    bolge: { tr: "Avrasya", en: "Eurasia" },
    baslik: { tr: "Ukrayna: ABD arabuluculuğunda yeni tur görüşmeler gündemde", en: "Ukraine: new round of US-brokered talks on the agenda" },
    ozet: {
      tr: "ABD özel temsilcisi Witkoff, Zelenski ve Putin ile ayrı ayrı görüştü. Kremlin'e göre üçlü görüşmeler muhtemelen Kasım ortasında Abu Dabi'de yapılacak. Taraflar Herson'da insani yardım için yerel ateşkes üzerinde uzlaştı, ancak toprak ve güvenlik güvenceleri konusundaki ayrılıklar sürüyor.",
      en: "US envoy Witkoff met Zelenskyy and Putin separately. According to the Kremlin, trilateral talks will probably be held in Abu Dhabi in mid-November. The sides agreed a local ceasefire in Kherson for humanitarian aid, but differences over territory and security guarantees remain."
    },
    baglanti: {
      tr: "Türkiye'nin 2022 ve 2025 İstanbul görüşmeleriyle kurduğu platform rolü; müzakere yerinin Körfez'e kayması dikkat çekici.",
      en: "Türkiye's platform role built through the 2022 and 2025 Istanbul talks; the shift of the venue to the Gulf is noteworthy."
    },
    kaynak: "https://www.mprnews.org/story/2026/10/24/ukraine-and-russia-eye-new-peace-talks-but-steep-obstacles-remain"
  },
  {
    tarih: "2026-10-21",
    bolge: { tr: "Orta Doğu", en: "Middle East" },
    baslik: { tr: "Husiler Suudi Arabistan'daki enerji altyapısını vurdu", en: "Houthis strike energy infrastructure in Saudi Arabia" },
    ozet: {
      tr: "Husi saldırıları Dammam havalimanını ve Şeybe petrol sahasını hedef aldı. Saudi Aramco Dahran'daki genel merkezini boşalttı; ABD Dışişleri Bakanlığı acil olmayan personelin Suudi Arabistan'dan ayrılmasını istedi.",
      en: "Houthi strikes targeted Dammam airport and the Shaybah oilfield. Saudi Aramco evacuated its Dhahran headquarters, and the US State Department ordered non-emergency staff to leave Saudi Arabia."
    },
    baglanti: {
      tr: "Türkiye-Suudi Arabistan-Pakistan savunma paktının arka planı ve Kızıldeniz/Babülmendep güvenliği.",
      en: "Background to the Türkiye–Saudi Arabia–Pakistan defence pact and Red Sea/Bab al-Mandab security."
    },
    kaynak: "https://mdbriefing.substack.com/p/md-weekly-briefing-week-of-26-october"
  },
  {
    tarih: "2026-10-16",
    bolge: { tr: "Avrupa", en: "Europe" },
    baslik: { tr: "AB Liderler Zirvesi: Ukrayna'ya destek, bütçede uzlaşı yok", en: "European Council: support for Ukraine, no deal on the budget" },
    ozet: {
      tr: "15-16 Ekim'deki zirvede liderler Ukrayna'ya desteği ve Rusya'ya yaptırımları sürdürdü. Uzun vadeli AB bütçesinde uzlaşı sağlanamadı; 26 Kasım'da olağanüstü zirve yapılacak. Göç ve Çin'e karşı ticari savunma araçları da gündemdeydi.",
      en: "At the 15–16 October summit, leaders maintained support for Ukraine and sanctions on Russia. No agreement was reached on the long-term EU budget; a special summit will be held on 26 November. Migration and trade defence tools against China were also on the agenda."
    },
    baglanti: {
      tr: "Türkiye-AB ilişkilerinde göç, savunma (SAFE) ve genişleme tartışmalarıyla bağlantılı.",
      en: "Linked to migration, defence (SAFE) and enlargement debates in Türkiye–EU relations."
    },
    kaynak: "https://www.euronews.com/2026/10/16/budget-ukraine-migration-five-takeaways-from-the-eu-leaders-summit"
  },
  {
    tarih: "2026-10-24",
    bolge: { tr: "Asya-Pasifik", en: "Asia-Pacific" },
    baslik: { tr: "Kim Jong Un'dan Çin'e günübirlik ziyaret", en: "Kim Jong Un makes a day trip to China" },
    ozet: {
      tr: "Kuzey Kore lideri Dandong'u ziyaret etti ve 2014'ten beri kullanılmayan Yeni Yalu Nehri Köprüsü'nden geçti. Ziyaret, Pekin'in Pyongyang üzerindeki etkisini yeniden güçlendirme çabası olarak yorumlanıyor.",
      en: "The North Korean leader visited Dandong and crossed the New Yalu River Bridge, unused since 2014. The visit is seen as Beijing reasserting its influence over Pyongyang."
    },
    baglanti: {
      tr: "Doğrudan bağlantı sınırlı; büyük güç rekabeti ve Asya-Pasifik dengeleri için genel kültür.",
      en: "Limited direct link; useful background on great power competition and the Asia-Pacific balance."
    },
    kaynak: "https://mdbriefing.substack.com/p/md-weekly-briefing-week-of-26-october"
  }
];

// DÜNYA TAKVİMİ — yaklaşan önemli uluslararası tarihler
const DUNYA_TAKVIM = [
  { tarih: "2026-11-10", baslik: { tr: "ABD arabuluculuğunda Ukrayna-Rusya görüşmeleri — Abu Dabi (10-11 Kasım)", en: "US-mediated Ukraine–Russia talks — Abu Dhabi (10–11 November)" }, kaynak: "https://lavocedinewyork.com/en/news/2026/11/03/ukraine-russia-talks-to-resume-in-abu-dhabi-nov-10-11-with-u-s-mediation/" },
  { tarih: "2026-11-11", baslik: { tr: "COP31 Dünya Liderleri Zirvesi — Antalya (11-12 Kasım)", en: "COP31 World Leaders' Summit — Antalya (11–12 November)" }, kaynak: "https://en.wikipedia.org/wiki/2026_United_Nations_Climate_Change_Conference" },
  { tarih: "2026-11-18", baslik: { tr: "APEC Liderler Zirvesi — Shenzhen (18-19 Kasım); Trump-Xi görüşmesi bekleniyor", en: "APEC Leaders' Meeting — Shenzhen (18–19 November); a Trump–Xi meeting is expected" }, kaynak: "https://mdbriefing.substack.com/p/md-weekly-briefing-week-of-26-october" },
  { tarih: "2026-11-20", baslik: { tr: "COP31 sona eriyor — Antalya", en: "COP31 closes — Antalya" }, kaynak: "https://www.climateandcapitalmedia.com/cop31-antalya-preview/" },
  { tarih: "2026-11-26", baslik: { tr: "AB olağanüstü zirvesi (bütçe)", en: "Special European Council (budget)" }, kaynak: "https://www.euronews.com/2026/10/16/budget-ukraine-migration-five-takeaways-from-the-eu-leaders-summit" },
  { tarih: "2026-12-01", tarihMetin: { tr: "Aralık 2026", en: "December 2026" }, baslik: { tr: "G20 Zirvesi — Miami", en: "G20 Summit — Miami" }, kaynak: "https://www.roic.ai/news/trump-sets-november-apec-and-december-g20-meetings-with-xi-as-trade-truce-faces-january-deadline-09-25-2026" },
  { tarih: "2027-01-01", baslik: { tr: "Yeni BM Genel Sekreteri göreve başlıyor", en: "New Secretary General of the UN takes office" }, kaynak: "https://news.cgtn.com/news/2026-10-17/UNSC-holds-6th-straw-poll-on-secretary-general-candidates-1RjhPtMoRCo/share_amp.html" }
];
