// =============================================================
// DÜNYA GÜNDEMİ — güncel uluslararası ilişkiler haberleri (iki dilli)
// Bu liste Türkiye dışındaki küresel gelişmeleri izler.
// YENİ HABER EKLEMEK İÇİN: en üste yeni bir { ... } bloğu ekle.
// bolge: Avrupa, Orta Doğu, Avrasya, Asya-Pasifik, Amerika, Afrika, Küresel
// baglanti: Bu gelişmenin Türkiye ile ilgisi (sınavda "Türkiye perspektifi" için)
// =============================================================

const DUNYA_GUNCELLEME = { tr: "27 Ekim 2026", en: "27 October 2026" };

const DUNYA = [
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
    bolge: { tr: "Küresel", en: "Global" },
    baslik: { tr: "BM Genel Sekreteri seçimi: Güvenlik Konseyi'nde 6. yoklama oylaması", en: "UN Secretary-General selection: 6th straw poll in the Security Council" },
    ozet: {
      tr: "Güvenlik Konseyi yedi aday arasında altıncı gayriresmî yoklama oylamasını yaptı. Adaylar arasında UAEA Genel Direktörü Grossi, UNCTAD Genel Sekreteri Grynspan ve Senegal'in eski Cumhurbaşkanı Sall bulunuyor. Guterres'in görev süresi yıl sonunda doluyor; yeni Genel Sekreter 1 Ocak 2027'de göreve başlayacak.",
      en: "The Security Council held its sixth informal straw poll among seven candidates, including IAEA Director General Grossi, UNCTAD Secretary-General Grynspan and former Senegalese President Sall. Guterres's term ends at the end of the year; the new Secretary-General takes office on 1 January 2027."
    },
    baglanti: {
      tr: "Türkiye'nin BM reformu tutumu ('Dünya beşten büyüktür') ve çok taraflı sistemdeki rolü.",
      en: "Türkiye's position on UN reform ('The world is bigger than five') and its role in the multilateral system."
    },
    kaynak: "https://news.cgtn.com/news/2026-10-17/UNSC-holds-6th-straw-poll-on-secretary-general-candidates-1RjhPtMoRCo/share_amp.html"
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
    tarih: "2026-10-16",
    bolge: { tr: "Amerika", en: "Americas" },
    baslik: { tr: "ABD, Rusya'ya yönelik yeni yaptırımların çoğunu askıya aldı", en: "US waives most new sanctions on Russia" },
    ozet: {
      tr: "Başkan Trump, Graham Yasası kapsamındaki yeni Rusya yaptırımlarının çoğundan muafiyet tanıdı ve Rus dizel alımlarını onayladı. AB zirvesinde Bulgaristan bu anlaşma nedeniyle diğer üyelerden ayrıştı.",
      en: "President Trump waived most of the new Russia sanctions under the Graham Act and approved purchases of Russian diesel. At the EU summit, Bulgaria broke ranks over this deal."
    },
    baglanti: {
      tr: "Türkiye'nin Rusya'ya yaptırımlara katılmama politikasına yönelik Batılı baskıların seyri açısından önemli.",
      en: "Relevant to the course of Western pressure on Türkiye's policy of not joining sanctions on Russia."
    },
    kaynak: "https://mdbriefing.substack.com/p/md-weekly-briefing-week-of-26-october"
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
  { tarih: "2026-11-03", baslik: { tr: "ABD ara seçimleri", en: "US midterm elections" }, kaynak: "https://mdbriefing.substack.com/p/md-weekly-briefing-week-of-26-october" },
  { tarih: "2026-11-18", baslik: { tr: "APEC Liderler Zirvesi — Shenzhen (18-19 Kasım); Trump-Xi görüşmesi bekleniyor", en: "APEC Leaders' Meeting — Shenzhen (18–19 November); a Trump–Xi meeting is expected" }, kaynak: "https://mdbriefing.substack.com/p/md-weekly-briefing-week-of-26-october" },
  { tarih: "2026-11-26", baslik: { tr: "AB olağanüstü zirvesi (bütçe)", en: "Special European Council (budget)" }, kaynak: "https://www.euronews.com/2026/10/16/budget-ukraine-migration-five-takeaways-from-the-eu-leaders-summit" },
  { tarih: "2026-12-01", tarihMetin: { tr: "Aralık 2026", en: "December 2026" }, baslik: { tr: "G20 Zirvesi — Miami", en: "G20 Summit — Miami" }, kaynak: "https://www.roic.ai/news/trump-sets-november-apec-and-december-g20-meetings-with-xi-as-trade-truce-faces-january-deadline-09-25-2026" },
  { tarih: "2027-01-01", baslik: { tr: "Yeni BM Genel Sekreteri göreve başlıyor", en: "New UN Secretary-General takes office" }, kaynak: "https://news.cgtn.com/news/2026-10-17/UNSC-holds-6th-straw-poll-on-secretary-general-candidates-1RjhPtMoRCo/share_amp.html" }
];
