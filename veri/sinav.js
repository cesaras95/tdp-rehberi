// =============================================================
// SINAV REHBERİ ve YAZILI PRATİK (iki dilli)
// SINAV_YAPISI: 2026 KİM giriş sınavı ilanına dayanır. Her yıl ilanı kontrol et!
// KOMPOZISYON: resmî örnek soruların üslubunda pratik soruları
// CEVIRI: Bakanlık açıklaması üslubunda, bu site için yazılmış özgün metinler
// =============================================================

const SINAV_YAPISI = {
  kaynakTarih: { tr: "2026 KİM giriş sınavı ilanı (başvurular 18 Ağustos – 17 Eylül 2026; yazılı sınav 3 Ekim 2026, Ankara)", en: "2026 KİM entrance exam announcement (applications 18 August – 17 September 2026; written exam 3 October 2026, Ankara)" },
  asamalar: [
    {
      baslik: { tr: "1. Yazılı sınav", en: "1. Written exam" },
      maddeler: [
        { tr: "Yabancı dilde kompozisyon veya alan bilgisi", en: "Composition in a foreign language or field knowledge" },
        { tr: "Genel veya alan bilgisiyle ilgili bir konuda Türkçeden yabancı dile çeviri", en: "Translation from Turkish into a foreign language on a general or field-related topic" },
        { tr: "Türkçe kompozisyon veya alan bilgisi", en: "Composition in Turkish or field knowledge" },
        { tr: "Başarı şartı: her bölümden en az 60 puan ve bölüm puanlarının ortalaması en az 70.", en: "Pass mark: at least 60 in each section and an average of at least 70." },
        { tr: "Ek puan: sınav dilinin dışında bir yabancı dilde 80'in üzerindeki YDS (veya eşdeğer) puanı ek puan getirir; ikinci ek dil için yarısı uygulanır.", en: "Bonus: a YDS (or equivalent) score above 80 in another foreign language earns extra points; half of the calculation applies to a second additional language." }
      ]
    },
    {
      baslik: { tr: "2. Kişilik envanteri ve muhakeme/analiz testi", en: "2. Personality inventory and reasoning/analysis test" },
      maddeler: [
        { tr: "Yazılı sınavı geçenlere uygulanır; ilanda puan eşiği belirtilmemiştir.", en: "Applied to those who pass the written exam; the announcement gives no score threshold." }
      ]
    },
    {
      baslik: { tr: "3. Sözlü sınav", en: "3. Oral exam" },
      maddeler: [
        { tr: "Bakanlığın görev ve çalışmalarına ilişkin alan bilgisi", en: "Field knowledge of the Ministry's duties and work" },
        { tr: "Analiz ve muhakeme becerisi, kavrayış", en: "Analytical and reasoning skills, comprehension" },
        { tr: "Temsil görevine uygun nitelik ve yeterlilik", en: "Qualities and competence suited to representation duties" },
        { tr: "Genel kültür düzeyi", en: "General knowledge" },
        { tr: "Türkçe ve yabancı dilde ifade becerisi", en: "Ability to express oneself in Turkish and the foreign language" },
        { tr: "Genel davranış ve tepkilerin mesleğe uygunluğu", en: "Suitability of general behaviour and reactions to the profession" },
        { tr: "Başarı şartı: 100 üzerinden en az 70.", en: "Pass mark: at least 70 out of 100." }
      ]
    }
  ],
  kurallar: [
    { tr: "Yaş: 1 Ocak 2026 itibarıyla 35 yaşını doldurmamış olmak (01.01.1991 ve sonrası doğumlular).", en: "Age: under 35 as of 1 January 2026 (born on or after 1 January 1991)." },
    { tr: "Dil: 1 Ocak 2023'ten sonra alınmış geçerli YDS/e-YDS veya ÖSYM eşdeğer sınav sonucu.", en: "Language: a valid YDS/e-YDS or ÖSYM-equivalent result obtained after 1 January 2023." },
    { tr: "Deneme sınırı: KİM sınavlarında yazılı veya sözlü aşamada toplam üç kez başarısız olanlar tekrar giremez.", en: "Attempt limit: candidates who have failed the written or oral stage of KİM exams three times in total may not sit again." },
    { tr: "Başvuru: e-Devlet ya da Kariyer Kapısı üzerinden, yalnızca elektronik ortamda.", en: "Application: online only, via e-Devlet or the Kariyer Kapısı platform." }
  ],
  kaynaklar: [
    { ad: { tr: "Bakanlık duyurusu (13 Ağustos 2026)", en: "Ministry announcement (13 August 2026, Turkish)" }, url: "https://www.mfa.gov.tr/tc-disisleri-bakanligi-aday-konsolosluk-ve-ihtisas-memurlugu-(kim)-giris-sinavi-duyurusu--13-agustos-2026.tr.mfa" },
    { ad: { tr: "İlanın tam metni (Memurlar.net)", en: "Full text of the announcement (Memurlar.net, Turkish)" }, url: "https://ilan.memurlar.net/ilan/85929/disisleri-bakanligi-80-aday-konsolosluk-ve-ihtisas-memuru-alacak.html" },
    { ad: { tr: "Bakanlığın örnek sınav soruları", en: "The Ministry's sample exam questions (Turkish)" }, url: "https://kariyer.mfa.gov.tr/sinav/Ornek-Sinav-Sorulari.html" },
    { ad: { tr: "Diplomat Reader: çıkmış KİM soruları ve analizi", en: "Diplomat Reader: past KİM questions and analysis (Turkish)" }, url: "http://diplomatreader.blogspot.com/2018/11/dsisleri-kim-snav-ckms-sorular-2010.html" }
  ],
  ornekSorular: {
    tr: "Bakanlığın KİM örnek sorularında yabancı dilde kompozisyon (ör. insani ve kalkınma yardımlarının dış politika aracı olarak kullanımı; terörle mücadele üzerine bir konuşma metni), Türkçe kompozisyon (ör. Türkiye'nin yumuşak gücünün unsurları; girişimci ve insani dış politika) ve Türkçeden yabancı dile çeviri (Libya'daki siyasi süreç üzerine uzun bir metin; üçlü bir dışişleri bakanları toplantısının ortak bildirisi) yer alıyor.",
    en: "The Ministry's KİM sample questions include foreign-language composition (e.g. humanitarian and development aid as a foreign policy tool; a speech on counter-terrorism), Turkish composition (e.g. the elements of Türkiye's soft power; enterprising and humanitarian foreign policy) and translation from Turkish into a foreign language (a long text on the political process in Libya; a joint declaration of a trilateral foreign ministers' meeting)."
  }
};

// Kompozisyon için düşünme çerçevesi (her soruda kullanılabilir)
const CERCEVE = [
  { tr: "Bağlam", en: "Context" }, { tr: "Türkiye'nin çıkarları", en: "Türkiye's interests" },
  { tr: "Aktörler ve tutumları", en: "Actors and positions" }, { tr: "Türkiye'nin resmî tutumu", en: "Türkiye's official position" },
  { tr: "Kısıtlar", en: "Constraints" }, { tr: "Seçenekler", en: "Options" }, { tr: "Olası sonuç ve değerlendirme", en: "Likely outcome and assessment" }
];

const KOMPOZISYON = [
  { konu: "kibris", soru: { tr: "Kıbrıs meselesinde 2017 sonrası yaşanan yaklaşım değişikliğini, Türkiye'nin tezleri ve uluslararası toplumun tutumu çerçevesinde değerlendiriniz.", en: "Assess the change of approach on the Cyprus question since 2017 in the light of Türkiye's positions and the stance of the international community." },
    ipuclari: { tr: ["1960 antlaşmaları ve garantörlük", "Annan Planı 2004 sonuçları", "Crans-Montana 2017 ve Cenevre 2021", "Egemen eşitlik ve eşit uluslararası statü", "BMGK kararları ve AB boyutu"], en: ["The 1960 treaties and guarantorship", "Results of the 2004 Annan Plan", "Crans-Montana 2017 and Geneva 2021", "Sovereign equality and equal international status", "UNSC resolutions and the EU dimension"] } },
  { konu: "rusya-ukrayna", soru: { tr: "Montrö Sözleşmesi'nin Karadeniz güvenliğindeki rolünü Rusya-Ukrayna savaşı örneği üzerinden tartışınız.", en: "Discuss the role of the Montreux Convention in Black Sea security, using the example of the Russia–Ukraine war." },
    ipuclari: { tr: ["Tonaj ve süre sınırları", "19. maddenin 2022'de uygulanması", "Karadeniz'in bölgesel sahipliği tezi", "Tahıl Girişimi", "Batı'nın eleştirileri"], en: ["Tonnage and time limits", "Application of Article 19 in 2022", "The regional ownership thesis", "The Grain Initiative", "Western criticism"] } },
  { konu: "arabuluculuk", soru: { tr: "Arabuluculuğun Türk dış politikasında bir araç olarak kullanımını, başarı ve sınırlarıyla birlikte değerlendiriniz.", en: "Assess the use of mediation as a tool of Turkish foreign policy, including its successes and limits." },
    ipuclari: { tr: ["BM 2010 girişimi ve dostlar grupları", "Tahıl Girişimi ve esir takasları", "Arabuluculuk / kolaylaştırıcılık ayrımı", "Taraf olunan çatışmalar ve tarafsızlık algısı", "R4+E3 gibi yeni formatlar"], en: ["The 2010 UN initiative and friends groups", "Grain Initiative and prisoner exchanges", "Mediation vs facilitation", "Conflicts where Türkiye is a party and perceptions of impartiality", "New formats such as R4+E3"] } },
  { konu: "afrika", soru: { tr: "Türkiye'nin insani ve kalkınma yardımlarını bir dış politika aracı olarak değerlendiriniz.", en: "Assess Türkiye's humanitarian and development aid as a foreign policy tool." },
    ipuclari: { tr: ["Yumuşak güç kavramı (Nye)", "Afrika'da diplomatik ağ (2002: 12 → 2022: 44)", "Somali örneği", "Deprem diplomasisi 2023", "Eleştiriler: sert güçle iç içelik"], en: ["The concept of soft power (Nye)", "Diplomatic network in Africa (2002: 12 → 2022: 44)", "The Somalia example", "Earthquake diplomacy 2023", "Criticism: entanglement with hard power"] } },
  { konu: "ab", soru: { tr: "Türkiye-AB ilişkilerinde işlevsel işbirliği alanlarının üyelik perspektifine etkisini tartışınız.", en: "Discuss how functional cooperation areas affect the membership perspective in Türkiye–EU relations." },
    ipuclari: { tr: ["Fasıl durumu ve blokajlar (16/1/14)", "18 Mart 2016 Mutabakatı", "Gümrük Birliği'nin güncellenmesi", "Vize serbestisi (66/72)", "SAFE ve savunma boyutu"], en: ["Chapter status and blockages (16/1/14)", "The 18 March 2016 Statement", "Modernising the Customs Union", "Visa liberalisation (66/72)", "SAFE and the defence dimension"] } },
  { konu: "suriye", soru: { tr: "Esad sonrası Suriye'de Türkiye'nin güvenlik ve göç politikalarının kesişimini analiz ediniz.", en: "Analyse the intersection of Türkiye's security and migration policies in post-Assad Syria." },
    ipuclari: { tr: ["Adana Mutabakatı 1998", "Sınır ötesi harekâtlar", "Geçici koruma ve dönüş rakamları (Mayıs 2026)", "SDG'nin entegrasyonu", "İsrail faktörü"], en: ["Adana Agreement 1998", "Cross-border operations", "Temporary protection and return figures (May 2026)", "Integration of the SDF", "The Israel factor"] } },
  { konu: "nato-abd", soru: { tr: "Türkiye'nin NATO içindeki yeri ile stratejik özerklik arayışını birlikte değerlendiriniz.", en: "Assess Türkiye's place in NATO together with its search for strategic autonomy." },
    ipuclari: { tr: ["1952 üyelik ve Soğuk Savaş", "S-400, F-35, CAATSA", "İsveç/Finlandiya süreci", "2026 İran füzeleri ve NATO hava savunması", "Ankara Zirvesi"], en: ["1952 membership and the Cold War", "S-400, F-35, CAATSA", "The Swedish/Finnish process", "2026 Iranian missiles and NATO air defence", "The Ankara Summit"] } },
  { konu: "enerji-iklim", soru: { tr: "COP31 ev sahipliğinin Türkiye'nin iklim ve enerji diplomasisine katkılarını tartışınız.", en: "Discuss how hosting COP31 contributes to Türkiye's climate and energy diplomacy." },
    ipuclari: { tr: ["Türkiye-Avustralya düzenlemesi", "2053 net sıfır hedefi", "Enerji merkezi hedefi ve Sakarya", "Gelişmekte olan ülkeler köprüsü", "Kömür eleştirisi"], en: ["The Türkiye–Australia arrangement", "The 2053 net zero target", "The energy hub goal and Sakarya", "Bridge to developing countries", "Criticism over coal"] } }
];

// ÇEVİRİ PRATİĞİ: Türkçe metin → İngilizce. "terimler" doğru çevirinin içermesi beklenen ifadelerdir.
const CEVIRI = [
  {
    baslik: { tr: "Ateşkes çağrısı", en: "Call for a ceasefire" },
    tr: "Bölgede çatışmaların yeniden alevlenmesinden derin endişe duyuyoruz. Tarafları itidale, kalıcı bir ateşkese ve insani yardımın engelsiz ulaştırılmasına imkân tanımaya davet ediyoruz. Türkiye, uyuşmazlığın uluslararası hukuk temelinde barışçıl yollarla çözümüne katkı sağlamaya hazırdır.",
    model: "We are deeply concerned about the renewed escalation of fighting in the region. We call on the parties to exercise restraint, to agree on a lasting ceasefire and to allow the unhindered delivery of humanitarian aid. Türkiye stands ready to contribute to the peaceful settlement of the dispute on the basis of international law.",
    terimler: ["ceasefire", "humanitarian aid", "peaceful settlement", "international law", "restraint"]
  },
  {
    baslik: { tr: "Toprak bütünlüğü", en: "Territorial integrity" },
    tr: "Ülkemiz, komşu ülkenin egemenliğine, birliğine ve toprak bütünlüğüne olan desteğini bir kez daha teyit eder. Hava sahamızın ihlal edilmesini kabul edilemez buluyor, gerekli tüm tedbirleri alma hakkımızı saklı tutuyoruz.",
    model: "Our country once again reaffirms its support for the sovereignty, unity and territorial integrity of its neighbour. We consider the violation of our airspace unacceptable and reserve the right to take all necessary measures.",
    terimler: ["sovereignty", "territorial integrity", "airspace", "reaffirm", "reserve the right"]
  },
  {
    baslik: { tr: "Ortak bildiri", en: "Joint declaration" },
    tr: "Üç ülkenin dışişleri bakanları, ikili ve bölgesel işbirliğini derinleştirme kararlılıklarını teyit etmiştir. Bakanlar, ulaştırma ve enerji bağlantısallığına ilişkin projelerin hayata geçirilmesinin önemini vurgulamış ve bir sonraki toplantının gelecek yıl yapılması üzerinde mutabık kalmıştır.",
    model: "The foreign ministers of the three countries reaffirmed their determination to deepen bilateral and regional cooperation. The ministers underlined the importance of implementing projects on transport and energy connectivity and agreed to hold the next meeting next year.",
    terimler: ["bilateral", "regional cooperation", "connectivity", "reaffirmed", "agreed"]
  },
  {
    baslik: { tr: "Göç ve geri dönüş", en: "Migration and return" },
    tr: "Türkiye, dünyada en fazla sığınmacıya ev sahipliği yapan ülkelerden biridir. Sığınmacıların gönüllü, güvenli ve onurlu geri dönüşü için uluslararası toplumun yük ve sorumluluk paylaşımına daha fazla katkı sağlaması gerekmektedir.",
    model: "Türkiye is one of the countries hosting the largest number of asylum seekers in the world. The international community needs to contribute more to burden and responsibility sharing for the voluntary, safe and dignified return of asylum seekers.",
    terimler: ["asylum seekers", "voluntary", "dignified return", "burden", "international community"]
  },
  {
    baslik: { tr: "Deniz yetki alanları", en: "Maritime jurisdiction areas" },
    tr: "Deniz yetki alanlarının sınırlandırılması, hakkaniyet ilkesi temelinde ve ilgili tüm tarafların haklarını gözetecek şekilde yapılmalıdır. Kıyıdaş devletlerin meşru haklarını yok sayan tek taraflı oldubittiler bölgesel istikrara hizmet etmemektedir.",
    model: "The delimitation of maritime jurisdiction areas should be carried out on the basis of the principle of equity and with due regard to the rights of all parties concerned. Unilateral faits accomplis that disregard the legitimate rights of coastal states do not serve regional stability.",
    terimler: ["delimitation of maritime jurisdiction areas", "principle of equity", "coastal states", "unilateral", "regional stability"]
  },
  {
    baslik: { tr: "Konsolosluk duyurusu", en: "Consular notice" },
    tr: "Bölgedeki güvenlik durumu nedeniyle vatandaşlarımızın zorunlu olmadıkça bölgeye seyahat etmemeleri tavsiye edilmektedir. Bölgede bulunan vatandaşlarımızın Büyükelçiliğimiz ve Başkonsolosluğumuzla temas hâlinde olmaları önem taşımaktadır.",
    model: "Due to the security situation in the region, our citizens are advised not to travel to the region unless strictly necessary. It is important that our citizens in the region remain in contact with our Embassy and Consulate General.",
    terimler: ["citizens", "advised", "Embassy", "Consulate General", "security situation"]
  }
];
