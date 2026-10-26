// =============================================================
// POLİTİKA BAŞLIKLARI (iki dilli)
// "resmi": Türkiye'nin açıkladığı resmî tutumun özeti (kendi cümlelerimizle).
// "analiz": akademik/analitik tartışma. İkisini KARIŞTIRMA.
// "oncelik": yuksek / orta / dusuk (sınav ve mülakat açısından)
// =============================================================

const POLITIKALAR = [
  {
    id: "kibris",
    baslik: { tr: "Kıbrıs", en: "Cyprus" },
    bolge: { tr: "Doğu Akdeniz", en: "Eastern Mediterranean" },
    oncelik: "yuksek",
    resmi: {
      tr: "Türkiye, adada iki eşit egemen devletin varlığının kabul edildiği, Kıbrıslı Türklerin egemen eşitliğini ve eşit uluslararası statüsünü esas alan gerçekçi bir çözümü savunur. Türkiye 1960 antlaşmalarından doğan garantörlük hakkını ve KKTC'ye desteğini sürdürür.",
      en: "Türkiye advocates a realistic settlement that acknowledges two equal sovereign states on the island and is based on the sovereign equality and equal international status of the Turkish Cypriots. Türkiye maintains its rights as a guarantor state under the 1960 treaties and its support for the TRNC."
    },
    analiz: {
      tr: "BM çatısındaki federasyon modeli tartışmalarından uzaklaşılması, AB ile ilişkileri ve Doğu Akdeniz enerji denklemini doğrudan etkiliyor. KKTC'de 2025'te seçilen Tufan Erhürman döneminde liderler görüşmeleri yeniden başladı; güven artırıcı önlemlerde sınırlı ilerleme var.",
      en: "The move away from the federation model discussed under UN auspices directly affects relations with the EU and the Eastern Mediterranean energy equation. Leaders' meetings resumed under Tufan Erhürman, elected in 2025, with limited progress on confidence building measures."
    },
    kavramlar: [{ tr: "Egemen eşitlik", en: "Sovereign equality" }, { tr: "Garantör ülke", en: "Guarantor state" }, { tr: "Güven artırıcı önlemler", en: "Confidence building measures (CBMs)" }],
    soru: {
      tr: "Kıbrıs meselesinde federasyon modelinden iki devletli çözüm vizyonuna geçişin Türkiye-AB ilişkilerine etkilerini değerlendiriniz.",
      en: "Assess the impact on Türkiye–EU relations of the shift from the federation model to a two-state vision in the Cyprus question."
    }
  },
  {
    id: "ege-akdeniz",
    baslik: { tr: "Ege ve Doğu Akdeniz", en: "Aegean and Eastern Mediterranean" },
    bolge: { tr: "Doğu Akdeniz", en: "Eastern Mediterranean" },
    oncelik: "yuksek",
    resmi: {
      tr: "Türkiye, Ege'deki sorunların (karasuları, hava sahası, kıta sahanlığı, adaların silahlandırılması) bir bütün olarak, hakkaniyet ilkesine uygun ve diyalog yoluyla çözülmesini savunur. Doğu Akdeniz'de adaların kıyı devletinin kıta sahanlığını kesmemesi gerektiği görüşündedir. 2019 Libya mutabakatı bu yaklaşımın parçasıdır.",
      en: "Türkiye holds that the Aegean issues (territorial waters, airspace, continental shelf, militarisation of the islands) should be resolved as a whole, in line with the principle of equity and through dialogue. In the Eastern Mediterranean, it considers that islands should not cut off the continental shelf of a coastal state. The 2019 memorandum with Libya is part of this approach."
    },
    analiz: {
      tr: "'Mavi Vatan' kavramı kamuoyu ve akademide yaygın olarak kullanılıyor. 2023 sonrası Yunanistan ile 'pozitif gündem' ve Atina Beyannamesi yumuşama sağladı. Ekim 2026'da Doğu Libya'nın 2019 mutabakatını onaylaması ise yeni bir dinamik yarattı; AB mutabakatı tanımıyor.",
      en: "The 'Blue Homeland' concept is widely used in public and academic debate. After 2023, the 'positive agenda' and the Athens Declaration brought a thaw with Greece. Eastern Libya's ratification of the 2019 memorandum in October 2026 created a new dynamic; the EU does not recognise the memorandum."
    },
    kavramlar: [{ tr: "Hakkaniyet ilkesi", en: "Principle of equity" }, { tr: "Kıta sahanlığı", en: "Continental shelf" }, { tr: "Münhasır ekonomik bölge", en: "Exclusive economic zone (EEZ)" }, { tr: "Karasuları", en: "Territorial waters" }, { tr: "Deniz yetki alanlarının sınırlandırılması", en: "Delimitation of maritime jurisdiction areas" }],
    soru: {
      tr: "Türkiye'nin Doğu Akdeniz'deki deniz yetki alanları tezini uluslararası hukuk açısından tartışınız.",
      en: "Discuss Türkiye's position on maritime jurisdiction areas in the Eastern Mediterranean from the perspective of international law."
    }
  },
  {
    id: "ab",
    baslik: { tr: "Avrupa Birliği", en: "European Union" },
    bolge: { tr: "Avrupa", en: "Europe" },
    oncelik: "yuksek",
    resmi: {
      tr: "Türkiye, AB tam üyeliğini stratejik hedef olarak korur. Gümrük Birliği'nin güncellenmesini, vize serbestisini ve üst düzey diyalog mekanizmalarının canlandırılmasını ister. AB'nin Türkiye'yi savunma girişimlerine (ör. SAFE) dâhil etmesini de talep eder.",
      en: "Türkiye maintains full EU membership as a strategic objective. It seeks the modernisation of the Customs Union, visa liberalisation and the revitalisation of high-level dialogue mechanisms. It also calls on the EU to include Türkiye in its defence initiatives (e.g. SAFE)."
    },
    analiz: {
      tr: "Katılım müzakereleri 2018'den beri fiilen donmuş durumda. İlişki giderek 'işlevsel' bir zemine kayıyor: göç, ticaret, savunma, enerji ve Ukrayna. Rusya tehdidi, Avrupa'nın Türkiye'ye bakışını güvenlik ortaklığı ekseninde yeniden şekillendiriyor.",
      en: "Accession negotiations have been de facto frozen since 2018. The relationship is increasingly moving onto 'functional' ground: migration, trade, defence, energy and Ukraine. The Russian threat is reshaping Europe's view of Türkiye around security partnership."
    },
    kavramlar: [{ tr: "Gümrük Birliği", en: "Customs Union" }, { tr: "Vize serbestisi diyaloğu", en: "Visa liberalisation dialogue" }, { tr: "Katılım müzakereleri", en: "Accession negotiations" }, { tr: "AB müktesebatı", en: "Acquis communautaire" }],
    soru: {
      tr: "Türkiye-AB ilişkilerinde üyelik perspektifi ile işlevsel işbirliği arasındaki gerilimi değerlendiriniz.",
      en: "Assess the tension between the membership perspective and functional cooperation in Türkiye–EU relations."
    }
  },
  {
    id: "nato-abd",
    baslik: { tr: "NATO ve ABD", en: "NATO and the United States" },
    bolge: { tr: "Transatlantik", en: "Transatlantic" },
    oncelik: "yuksek",
    resmi: {
      tr: "Türkiye NATO'yu Avrupa-Atlantik güvenliğinin temeli olarak görür ve ittifakın en büyük ordularından birine sahip bir müttefik olarak katkısını vurgular. Terörle mücadelede müttefik dayanışması bekler. ABD ile ilişkileri stratejik ortaklık çerçevesinde ele alır; F-35 ve CAATSA gibi sorunların çözümünü ister.",
      en: "Türkiye regards NATO as the cornerstone of Euro-Atlantic security and stresses its contribution as an ally with one of the largest armed forces in the Alliance. It expects allied solidarity in counter-terrorism. It approaches relations with the US within a strategic partnership framework and seeks resolution of issues such as the F-35 and CAATSA."
    },
    analiz: {
      tr: "2026 NATO Ankara Zirvesi Türkiye'nin ittifak içindeki ağırlığını gösterdi. İran füzelerinin NATO sistemlerince engellenmesi, ittifakın Türkiye için somut değerini öne çıkardı. Öte yandan S-400 ve Suriye'deki farklı öncelikler kalıcı gerilim alanları olmaya devam ediyor.",
      en: "The 2026 NATO Ankara Summit showed Türkiye's weight within the Alliance. The interception of Iranian missiles by NATO systems highlighted the Alliance's tangible value for Türkiye. The S-400 issue and diverging priorities in Syria remain lasting sources of tension."
    },
    kavramlar: [{ tr: "Kolektif savunma (Madde 5)", en: "Collective defence (Article 5)" }, { tr: "Yük paylaşımı", en: "Burden sharing" }, { tr: "Caydırıcılık", en: "Deterrence" }, { tr: "İttifak", en: "Alliance" }],
    soru: {
      tr: "Türkiye'nin NATO üyeliği ile stratejik özerklik arayışı birbiriyle çelişir mi? Tartışınız.",
      en: "Do Türkiye's NATO membership and its pursuit of strategic autonomy contradict each other? Discuss."
    }
  },
  {
    id: "rusya-ukrayna",
    baslik: { tr: "Rusya–Ukrayna Savaşı", en: "The Russia–Ukraine War" },
    bolge: { tr: "Karadeniz", en: "Black Sea" },
    oncelik: "yuksek",
    resmi: {
      tr: "Türkiye Ukrayna'nın toprak bütünlüğünü destekler ve Kırım'ın ilhakını tanımaz. Montrö Sözleşmesi'ni hükümlerine uygun şekilde uygular ve savaşın diplomatik yollarla sona erdirilmesi için iki tarafla diyaloğu sürdürür. İstanbul'u müzakere platformu olarak sunar.",
      en: "Türkiye supports Ukraine's territorial integrity and does not recognise the annexation of Crimea. It implements the Montreux Convention in accordance with its provisions and maintains dialogue with both sides to end the war through diplomacy. It offers Istanbul as a platform for negotiation."
    },
    analiz: {
      tr: "Bu tutum genelde 'dengeli' ya da 'Batı'ya yakın tarafsızlık' olarak tanımlanıyor. Türkiye, Rusya'ya yaptırımlara katılmadan Ukrayna'ya savunma desteği verdi. Bu durum hem fırsat (arabuluculuk) hem de baskı (Batı'nın yaptırım beklentisi) yaratıyor.",
      en: "This stance is often described as 'balanced' or as 'pro-Western neutrality'. Türkiye has provided defence support to Ukraine without joining sanctions on Russia. This creates both an opportunity (mediation) and pressure (Western expectations on sanctions)."
    },
    kavramlar: [{ tr: "Toprak bütünlüğü", en: "Territorial integrity" }, { tr: "İlhak", en: "Annexation" }, { tr: "Montrö Sözleşmesi", en: "Montreux Convention" }, { tr: "Yaptırım", en: "Sanction" }],
    soru: {
      tr: "Montrö Sözleşmesi'nin Rusya-Ukrayna savaşı sırasında uygulanmasını Türkiye'nin çıkarları açısından değerlendiriniz.",
      en: "Assess the implementation of the Montreux Convention during the Russia–Ukraine war in terms of Türkiye's interests."
    }
  },
  {
    id: "suriye",
    baslik: { tr: "Suriye", en: "Syria" },
    bolge: { tr: "Orta Doğu", en: "Middle East" },
    oncelik: "yuksek",
    resmi: {
      tr: "Türkiye Suriye'nin toprak bütünlüğünü, birliğini ve istikrarını destekler. Yeni yönetimle siyasi, ekonomik ve güvenlik alanlarında işbirliği yapar. Terör örgütlerinin (PKK/YPG, DEAŞ) bölgede yer almamasını ve sığınmacıların gönüllü, güvenli ve onurlu dönüşünü öncelik olarak görür.",
      en: "Türkiye supports Syria's territorial integrity, unity and stability. It cooperates with the new administration in the political, economic and security fields. Its priorities are that terrorist organisations (PKK/YPG, DAESH) have no place in the region and the voluntary, safe and dignified return of asylum seekers."
    },
    analiz: {
      tr: "Dışişleri Bakanı Fidan, Suriye'yi 2026'nın en önemli krizi olarak sıraladı. Suriye; İsrail'in baskısı, SDG meselesi ve 'Terörsüz Türkiye' süreciyle birlikte iç ve dış politikanın kesiştiği bir alan hâline geldi.",
      en: "Foreign Minister Fidan ranked Syria as the most important crisis of 2026. Together with Israeli pressure, the SDF issue and the 'Terror-free Türkiye' process, Syria has become the point where domestic and foreign policy intersect."
    },
    kavramlar: [{ tr: "Toprak bütünlüğü", en: "Territorial integrity" }, { tr: "Gönüllü geri dönüş", en: "Voluntary return" }, { tr: "Sığınmacı", en: "Asylum seeker" }],
    soru: {
      tr: "Esad sonrası Suriye'de Türkiye'nin öncelikleri ve karşılaştığı kısıtlar nelerdir?",
      en: "What are Türkiye's priorities and constraints in post-Assad Syria?"
    }
  },
  {
    id: "filistin",
    baslik: { tr: "Filistin ve Gazze", en: "Palestine and Gaza" },
    bolge: { tr: "Orta Doğu", en: "Middle East" },
    oncelik: "yuksek",
    resmi: {
      tr: "Türkiye 1967 sınırlarına dayanan, başkenti Doğu Kudüs olan bağımsız, egemen ve coğrafi bütünlüğe sahip bir Filistin devletini içeren iki devletli çözümü savunur. Gazze'de kalıcı ateşkes, insani yardımın engelsiz ulaştırılması ve uluslararası hukuka uyum çağrısı yapar.",
      en: "Türkiye advocates a two-state solution including an independent, sovereign and geographically contiguous State of Palestine based on the 1967 borders with East Jerusalem as its capital. It calls for a lasting ceasefire in Gaza, unhindered delivery of humanitarian aid and compliance with international law."
    },
    analiz: {
      tr: "Türkiye Ekim 2025 ateşkesinde garantör ülkeler arasında yer aldı ve istikrar gücüne katkı vermeye hazır olduğunu açıkladı. Ancak İsrail'in Türkiye'nin sahadaki rolüne itirazı belirleyici bir kısıt olmaya devam ediyor. Fidan'a göre Gazze aslında Türkiye-İsrail gerilimi demek.",
      en: "Türkiye was among the guarantor states of the October 2025 ceasefire and announced it was ready to contribute to the stabilisation force. However, Israel's objection to a Turkish role on the ground remains a decisive constraint. According to Fidan, Gaza essentially means the Türkiye–Israel tension."
    },
    kavramlar: [{ tr: "İki devletli çözüm", en: "Two-state solution" }, { tr: "İnsani yardım", en: "Humanitarian aid" }, { tr: "Ateşkes", en: "Ceasefire" }, { tr: "İşgalci güç", en: "Occupying power" }],
    soru: {
      tr: "Gazze'de ateşkes sonrası dönemde Türkiye'nin garantörlük rolünün imkân ve sınırlarını tartışınız.",
      en: "Discuss the possibilities and limits of Türkiye's guarantor role in Gaza in the post-ceasefire period."
    }
  },
  {
    id: "iran-korfez",
    baslik: { tr: "İran ve Körfez", en: "Iran and the Gulf" },
    bolge: { tr: "Orta Doğu", en: "Middle East" },
    oncelik: "orta",
    resmi: {
      tr: "Türkiye bölgede savaşın yayılmamasını, diplomasinin önceliklendirilmesini ve egemenliğe saygıyı savunur. Hava sahasına yönelik ihlalleri kabul edilemez bulur ve güvenliğini koruma hakkını vurgular. Körfez ülkeleriyle savunma ve ekonomi işbirliğini geliştirir.",
      en: "Türkiye advocates preventing the war from spreading, prioritising diplomacy and respect for sovereignty. It considers violations of its airspace unacceptable and underlines its right to protect its security. It is developing defence and economic cooperation with the Gulf states."
    },
    analiz: {
      tr: "2026 İran savaşı Hürmüz Boğazı ve enerji güvenliği üzerinden Türkiye'yi de etkiledi. Ekim 2026'da Suudi Arabistan ve Pakistan ile Mekke savunma paktı TBMM'ye sunuldu; Katar, Pakistan ve Endonezya ile de 'Badr' mutabakatı imzalandı. Bu durum yeni bir bölgesel güvenlik ağının işareti olarak yorumlanıyor.",
      en: "The 2026 Iran war has also affected Türkiye through the Strait of Hormuz and energy security. In October 2026, the Mecca defence pact with Saudi Arabia and Pakistan was submitted to Parliament, and the 'Badr' memorandum was signed with Qatar, Pakistan and Indonesia. This is read as a sign of a new regional security network."
    },
    kavramlar: [{ tr: "Egemenlik", en: "Sovereignty" }, { tr: "Hava sahasının ihlali", en: "Violation of airspace" }, { tr: "Enerji güvenliği", en: "Energy security" }],
    soru: {
      tr: "Körfez ülkeleriyle kurulan yeni savunma işbirliklerini Türkiye'nin NATO üyeliğiyle birlikte değerlendiriniz.",
      en: "Assess Türkiye's new defence cooperation with the Gulf states in light of its NATO membership."
    }
  },
  {
    id: "turk-dunyasi",
    baslik: { tr: "Türk Dünyası ve Kafkasya", en: "The Turkic World and the Caucasus" },
    bolge: { tr: "Avrasya", en: "Eurasia" },
    oncelik: "orta",
    resmi: {
      tr: "Türkiye, Türk Devletleri Teşkilatı'nı (TDT) siyasi, ekonomik ve kültürel işbirliğinin ana platformu olarak görür. Azerbaycan ile ilişkileri 'tek millet, iki devlet' anlayışı ve Şuşa Beyannamesi çerçevesinde müttefiklik düzeyinde yürütür. Güney Kafkasya'da kalıcı barışı ve bağlantı projelerini destekler.",
      en: "Türkiye regards the Organization of Turkic States (OTS) as the main platform for political, economic and cultural cooperation. It conducts relations with Azerbaijan at the level of an alliance under the 'one nation, two states' understanding and the Shusha Declaration. It supports lasting peace and connectivity projects in the South Caucasus."
    },
    analiz: {
      tr: "Orta Koridor, Rusya'yı bypass eden ulaşım ve enerji hatları nedeniyle önem kazandı. Azerbaycan-Ermenistan barış süreci ve Türkiye-Ermenistan normalleşmesi birbirine bağlı ilerliyor. 2026 TDT zirvesi Türkiye'de yapılacak.",
      en: "The Middle Corridor has gained importance as transport and energy routes bypassing Russia. The Azerbaijan–Armenia peace process and Türkiye–Armenia normalisation are moving forward in tandem. The 2026 OTS summit will be held in Türkiye."
    },
    kavramlar: [{ tr: "Orta Koridor", en: "Middle Corridor" }, { tr: "Normalleşme", en: "Normalisation" }, { tr: "Bölgesel işbirliği", en: "Regional cooperation" }],
    soru: {
      tr: "Orta Koridor'un Türkiye'nin Avrasya politikasındaki yerini değerlendiriniz.",
      en: "Assess the place of the Middle Corridor in Türkiye's Eurasia policy."
    }
  },
  {
    id: "afrika",
    baslik: { tr: "Afrika", en: "Africa" },
    bolge: { tr: "Afrika", en: "Africa" },
    oncelik: "orta",
    resmi: {
      tr: "Türkiye Afrika ile ilişkilerini eşit ortaklık ve karşılıklı kazanç ilkeleriyle yürütür. Büyükelçilik ağını, ticareti, kalkınma yardımlarını ve eğitim burslarını genişletir. Türkiye-Afrika Ortaklık Zirveleri bu ilişkinin kurumsal çerçevesidir.",
      en: "Türkiye conducts its relations with Africa on the principles of equal partnership and mutual benefit. It is expanding its network of embassies, trade, development assistance and scholarships. The Türkiye–Africa Partnership Summits provide the institutional framework for this relationship."
    },
    analiz: {
      tr: "Somali, Türkiye'nin kıtadaki en kapsamlı ortaklığıdır (askerî eğitim, enerji, uzay). Libya'da Türkiye her iki tarafla da temas kurabilen bir aktöre dönüştü. Eleştirmenler savunma sanayii ihracatının öne çıkmasını ve siyasi riskleri vurguluyor.",
      en: "Somalia is Türkiye's most comprehensive partnership on the continent (military training, energy, space). In Libya, Türkiye has become an actor able to engage with both sides. Critics point to the prominence of defence industry exports and the political risks."
    },
    kavramlar: [{ tr: "Eşit ortaklık", en: "Equal partnership" }, { tr: "Kalkınma yardımı", en: "Development assistance" }, { tr: "Büyükelçilik", en: "Embassy" }],
    soru: {
      tr: "Türkiye'nin Afrika açılımını yumuşak güç ve sert güç unsurları açısından analiz ediniz.",
      en: "Analyse Türkiye's Africa opening in terms of soft power and hard power elements."
    }
  },
  {
    id: "arabuluculuk",
    baslik: { tr: "Arabuluculuk ve Çok Taraflı Diplomasi", en: "Mediation and Multilateral Diplomacy" },
    bolge: { tr: "Küresel", en: "Global" },
    oncelik: "orta",
    resmi: {
      tr: "Türkiye arabuluculuğu dış politikasının temel araçlarından biri olarak görür. Finlandiya ile birlikte 2010'da BM'de 'Arabuluculuk Yoluyla Barış' girişimini başlattı ve BM, AGİT ve İİT'deki Arabuluculuk Dostları Gruplarına eş başkanlık yapar. İstanbul Arabuluculuk Konferansları 2012'den beri düzenlenir.",
      en: "Türkiye regards mediation as one of the main instruments of its foreign policy. Together with Finland, it launched the 'Mediation for Peace' initiative at the UN in 2010 and co-chairs the Groups of Friends of Mediation at the UN, the OSCE and the OIC. The Istanbul Mediation Conferences have been held since 2012."
    },
    analiz: {
      tr: "Tahıl koridoru, esir takasları ve İstanbul görüşmeleri, Türkiye'nin iki tarafla da konuşabilme kapasitesini somutlaştırdı. Ekim 2026'da İstanbul'da ilk kez sekiz ülkeyi bir araya getiren toplantı yapıldı. Türkiye'nin bazı çatışmalarda taraf olması ise tarafsızlık algısını sınırlayabiliyor.",
      en: "The grain corridor, prisoner exchanges and the Istanbul talks demonstrated Türkiye's capacity to talk to both sides. In October 2026, Istanbul hosted the first meeting bringing eight countries together in this format. Being a party to some conflicts, however, can limit perceptions of Türkiye's impartiality."
    },
    kavramlar: [{ tr: "Arabuluculuk", en: "Mediation" }, { tr: "Kolaylaştırıcılık", en: "Facilitation" }, { tr: "Önleyici diplomasi", en: "Preventive diplomacy" }, { tr: "Çok taraflı diplomasi", en: "Multilateral diplomacy" }],
    soru: {
      tr: "Türkiye'nin arabuluculuk kapasitesini belirleyen faktörler nelerdir? Örneklerle açıklayınız.",
      en: "What factors determine Türkiye's mediation capacity? Explain with examples."
    }
  },
  {
    id: "enerji-iklim",
    baslik: { tr: "Enerji ve İklim Diplomasisi", en: "Energy and Climate Diplomacy" },
    bolge: { tr: "Küresel", en: "Global" },
    oncelik: "dusuk",
    resmi: {
      tr: "Türkiye enerji arz güvenliğini, kaynak ve güzergâh çeşitliliğini ve bölgesel bir enerji merkezi (hub) olmayı hedefler. Paris Anlaşması çerçevesinde 2053 net sıfır emisyon hedefini açıklamıştır. 2026'da COP31'e ev sahipliği yapar.",
      en: "Türkiye aims for security of energy supply, diversification of sources and routes, and becoming a regional energy hub. Under the Paris Agreement, it has announced a 2053 net zero emissions target. It hosts COP31 in 2026."
    },
    analiz: {
      tr: "Akkuyu, TürkAkım ve TANAP gibi projeler Türkiye'yi enerji koridoru hâline getirdi; ancak Rusya'ya bağımlılık tartışılıyor. Üçüncü nükleer santral için uluslararası rekabet sürüyor. COP31'de ev sahipliği Türkiye'de, müzakere başkanlığı Avustralya'da olacak.",
      en: "Projects such as Akkuyu, TurkStream and TANAP have made Türkiye an energy corridor, though dependence on Russia is debated. International competition continues for the third nuclear power plant. At COP31, Türkiye is the host while Australia presides over the negotiations."
    },
    kavramlar: [{ tr: "Enerji güvenliği", en: "Energy security" }, { tr: "Enerji merkezi", en: "Energy hub" }, { tr: "İklim değişikliği", en: "Climate change" }],
    soru: {
      tr: "Türkiye'nin enerji merkezi olma hedefinin jeopolitik fırsat ve risklerini değerlendiriniz.",
      en: "Assess the geopolitical opportunities and risks of Türkiye's goal of becoming an energy hub."
    }
  }
];
