// =============================================================
// POLİTİKA BAŞLIKLARI (iki dilli) — olgulara dayalı sürüm
// Her kartta:
//   resmi      : Türkiye'nin resmî tutumu (Bakanlık metinlerine dayanır, kendi cümlelerimizle)
//   analiz     : analitik değerlendirme (yorum burada kalır)
//   olgular    : doğrulanmış tarih, sayı ve olaylar (kaynaklar "belgeler" alanında)
//   belgeler   : birincil kaynak ve resmî metin linkleri
//   karsiTez   : diğer aktörlerin tezi (sınavda dengeli analiz için)
//   sinavIpucu : sık yapılan hatalar ve vurgulanacak noktalar
// Rakamlar değişebilir; yanlarındaki tarih "o tarih itibarıyla" demektir.
// =============================================================

const POLITIKALAR = [
  {
    id: "kibris",
    baslik: { tr: "Kıbrıs", en: "Cyprus" },
    bolge: { tr: "Doğu Akdeniz", en: "Eastern Mediterranean" },
    oncelik: "yuksek",
    resmi: {
      tr: "Türkiye, adada iki halk ve iki devlet bulunduğunu esas alır; Kıbrıslı Rumların ne Kıbrıslı Türkleri ne de bütün adayı temsil edebileceğini savunur. Çözümün Kıbrıslı Türklerin egemen eşitliğine ve eşit uluslararası statüsüne dayanmasını, Kıbrıslı Türklere uygulanan izolasyonların kaldırılmasını ister. 1960 antlaşmalarından doğan garantörlük haklarını korur ve KKTC'yi tanımaya devam eder.",
      en: "Türkiye holds that there are two peoples and two states on the island, and that the Greek Cypriots can represent neither the Turkish Cypriots nor the whole of Cyprus. It seeks a settlement based on the sovereign equality and equal international status of the Turkish Cypriots and an end to their isolation. It maintains its rights as a guarantor state under the 1960 treaties and continues to recognise the TRNC."
    },
    analiz: {
      tr: "Türkiye'nin tezi, BM parametrelerine dayanan iki toplumlu, iki bölgeli federasyon modelinden 2021'den itibaren açıkça uzaklaştı. Bu değişim Crans-Montana'nın (2017) başarısızlığına bir yanıt olarak okunabilir. Ancak BM Güvenlik Konseyi kararları federasyon çerçevesini korumaya devam ediyor; AB ise Kıbrıs Cumhuriyeti üzerinden meseleye taraf. Bu nedenle Kıbrıs, AB katılım sürecindeki fasıl blokajlarından Doğu Akdeniz enerji denklemine kadar birçok dosyayı doğrudan etkiliyor.",
      en: "Since 2021, Türkiye's position has openly moved away from the bizonal, bicommunal federation model based on UN parameters. The shift can be read as a response to the failure of Crans-Montana (2017). Yet UN Security Council resolutions still uphold the federal framework, and the EU is a party to the issue through the Republic of Cyprus. Cyprus therefore directly affects many files, from blocked chapters in the EU accession process to the Eastern Mediterranean energy equation."
    },
    olgular: [
      { tr: "1960: Kıbrıs Cumhuriyeti, Zürih ve Londra Antlaşmalarıyla iki toplumun ortaklığına dayalı olarak kuruldu. Garantörler: Türkiye, Yunanistan, Birleşik Krallık.", en: "1960: The Republic of Cyprus was established under the Zurich and London Agreements as a partnership of the two communities. Guarantors: Türkiye, Greece, the United Kingdom." },
      { tr: "21 Aralık 1963: Kıbrıslı Türklere yönelik saldırılar başladı (\"Kanlı Noel\"). Bakanlığa göre yaklaşık 30.000 Kıbrıslı Türk 103 köyü terk etti.", en: "21 December 1963: Attacks on Turkish Cypriots began (\"Bloody Christmas\"). According to the Ministry, some 30,000 Turkish Cypriots left 103 villages." },
      { tr: "4 Mart 1964: BMGK'nın 186 sayılı kararıyla BM Barış Gücü (UNFICYP) kuruldu.", en: "4 March 1964: UN Security Council Resolution 186 established the UN peacekeeping force (UNFICYP)." },
      { tr: "15 Temmuz 1974 darbesinin ardından 20 Temmuz 1974'te Türkiye garantörlük hakkına dayanarak Barış Harekâtı'nı başlattı.", en: "After the coup of 15 July 1974, Türkiye launched the Peace Operation on 20 July 1974, invoking its rights as a guarantor state." },
      { tr: "15 Kasım 1983: KKTC ilan edildi. KKTC'yi yalnızca Türkiye tanıyor; Türk Devletleri Teşkilatı'nda 2022'den beri gözlemci.", en: "15 November 1983: The TRNC was proclaimed. Only Türkiye recognises it; it has been an observer in the Organization of Turkic States since 2022." },
      { tr: "24 Nisan 2004 Annan Planı referandumu: Kıbrıslı Türklerin %64,91'i \"evet\", Kıbrıslı Rumların %75,83'ü \"hayır\" dedi. Rum yönetimi 1 Mayıs 2004'te AB'ye üye oldu.", en: "24 April 2004 Annan Plan referendums: 64.91% of Turkish Cypriots voted yes, 75.83% of Greek Cypriots voted no. The Greek Cypriot administration joined the EU on 1 May 2004." },
      { tr: "Temmuz 2017: Crans-Montana Konferansı sonuçsuz kaldı. Nisan 2021 Cenevre gayriresmî 5+BM toplantısında Kıbrıslı Türk tarafı egemen eşitlik ve eşit uluslararası statü önerisini masaya koydu.", en: "July 2017: The Crans-Montana Conference ended without agreement. At the informal 5+UN meeting in Geneva in April 2021, the Turkish Cypriot side put forward its proposal of sovereign equality and equal international status." }
    ],
    belgeler: [
      { ad: { tr: "Dışişleri Bakanlığı: Kıbrıs", en: "Ministry of Foreign Affairs: Cyprus" }, url: "https://www.mfa.gov.tr/kibris.tr.mfa" },
      { ad: { tr: "Kıbrıs Meselesinin Tarihçesi (Bakanlık)", en: "History of the Cyprus Question (Ministry, Turkish)" }, url: "https://www.mfa.gov.tr/kibris-meselesinin-tarihcesi_-bm-muzakerelerinin-baslangici.tr.mfa" },
      { ad: { tr: "Türkiye'nin Kıbrıs'la ilgili Deklarasyonu (29 Temmuz 2005)", en: "Türkiye's Declaration on Cyprus (29 July 2005)" }, url: "https://www.mfa.gov.tr/turkiye_nin-kibris_la-ilgili-deklarasyonu_-29-temmuz-2005.tr.mfa" }
    ],
    karsiTez: {
      tr: "Kıbrıs Cumhuriyeti, Yunanistan ve AB, BMGK kararlarına dayanarak iki bölgeli, iki toplumlu federasyonu tek meşru çözüm çerçevesi olarak görür; garantörlük sisteminin ve adadaki Türk askerî varlığının sona ermesini ister. BMGK'nın 541 sayılı kararı (1983) KKTC'nin ilanını hukuken geçersiz saymıştır.",
      en: "The Republic of Cyprus, Greece and the EU, relying on UNSC resolutions, regard a bizonal, bicommunal federation as the only legitimate framework and seek an end to the guarantee system and the Turkish military presence. UNSC Resolution 541 (1983) deemed the proclamation of the TRNC legally invalid."
    },
    sinavIpucu: {
      tr: "\"Kıbrıs Cumhuriyeti\" yerine Bakanlık dilinde \"GKRY\" ya da \"Kıbrıslı Rumlar\" kullanılır; resmî tutum yazarken bu terminolojiye dikkat et. 1963'ü atlamak sık yapılan bir hatadır: Türkiye'nin anlatısında sorunun başlangıcı 1974 değil 1963'tür.",
      en: "In the Ministry's language, \"Greek Cypriot Administration\" or \"Greek Cypriots\" is used instead of \"Republic of Cyprus\"; keep to this terminology when stating the official position. Skipping 1963 is a common mistake: in Türkiye's narrative, the problem begins in 1963, not 1974."
    },
    kavramlar: [{ tr: "Egemen eşitlik", en: "Sovereign equality" }, { tr: "Garantör ülke", en: "Guarantor state" }, { tr: "Güven artırıcı önlemler", en: "Confidence building measures (CBMs)" }, { tr: "Tanımama siyaseti", en: "Non-recognition policy" }],
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
      tr: "Türkiye, Ege sorunlarının birbiriyle bağlantılı olduğunu ve bir bütün olarak, hakkaniyete uygun biçimde ve doğrudan diyalogla çözülmesi gerektiğini savunur. Doğu Akdeniz'de adaların, karşı kıyıdaki ana karanın kıta sahanlığını kesecek şekilde tam etki almaması gerektiği görüşündedir. Libya ile 2019'da imzalanan Deniz Yetki Alanlarının Sınırlandırılmasına İlişkin Mutabakat Muhtırası bu yaklaşımın somut ifadesidir.",
      en: "Türkiye holds that the Aegean issues are interrelated and should be resolved as a whole, equitably and through direct dialogue. In the Eastern Mediterranean, it considers that islands should not be given full effect in a way that cuts off the continental shelf of the mainland opposite. The 2019 Memorandum of Understanding with Libya on the Delimitation of Maritime Jurisdiction Areas is the concrete expression of this approach."
    },
    analiz: {
      tr: "Ege'de sorunların çoğu kesin sınır çizilmemesinden kaynaklanıyor: ne kıta sahanlığı ne de karasuları dışındaki deniz alanları sınırlandırılmış durumda. Türkiye BM Deniz Hukuku Sözleşmesi'ne (UNCLOS) taraf değil ve hakkaniyet ilkesini uluslararası içtihada dayandırıyor. 2023 sonrası Atina Beyannamesi ve \"pozitif gündem\" gerilimi azalttı ama özü çözmedi. Ekim 2026'da Doğu Libya'nın 2019 mutabakatını onaylaması Türkiye'nin pozisyonunu güçlendirirken, Yunanistan-Mısır ekseninde karşı hamle tartışmasını başlattı.",
      en: "Most Aegean issues stem from the absence of agreed boundaries: neither the continental shelf nor maritime areas beyond territorial waters have been delimited. Türkiye is not a party to UNCLOS and bases the principle of equity on international case law. The Athens Declaration and the 'positive agenda' after 2023 reduced tension but did not resolve the substance. Eastern Libya's ratification of the 2019 memorandum in October 2026 strengthened Türkiye's position while prompting talk of a counter-move by Greece and Egypt."
    },
    olgular: [
      { tr: "Karasuları: İki ülke de Ege'de 6 deniz mili uyguluyor. Bakanlığa göre 12 mile genişleme Yunanistan'ın payını yaklaşık %40'tan %70'e çıkarır, açık denizi %51'den %19'a düşürür, Türkiye'ye %10'dan az alan bırakır.", en: "Territorial waters: Both countries apply 6 nautical miles in the Aegean. According to the Ministry, an extension to 12 miles would raise Greece's share from about 40% to 70%, cut high seas from 51% to 19% and leave Türkiye less than 10%." },
      { tr: "8 Haziran 1995: TBMM, Yunanistan'ın karasularını 6 milin ötesine genişletmesinin savaş nedeni (casus belli) sayılacağını belirten kararı kabul etti.", en: "8 June 1995: The Grand National Assembly adopted a resolution stating that a Greek extension of territorial waters beyond 6 miles would be a cause for war (casus belli)." },
      { tr: "Hava sahası: Yunanistan 6 millik karasularına karşın 10 millik hava sahası iddia ediyor (1931'de 3 millik karasuları dönemindeki ilan). Türkiye 10 mili tanımıyor.", en: "Airspace: Greece claims 10 miles of airspace despite 6-mile territorial waters (a 1931 declaration made when its territorial waters were 3 miles). Türkiye does not recognise the 10-mile claim." },
      { tr: "Doğu Ege adalarının gayri askerî statüsü 1923 Lozan ve 1947 Paris Antlaşmalarına dayanıyor; Türkiye, Yunanistan'ın 1960'lardan beri bu adaları silahlandırdığını belirtiyor.", en: "The demilitarised status of the Eastern Aegean islands rests on the 1923 Treaty of Lausanne and the 1947 Treaty of Paris; Türkiye states that Greece has militarised these islands since the 1960s." },
      { tr: "19 Aralık 1978: Uluslararası Adalet Divanı, Yunanistan'ın açtığı Ege Kıta Sahanlığı davasında yargı yetkisi olmadığına karar verdi.", en: "19 December 1978: The International Court of Justice ruled that it lacked jurisdiction in the Aegean Sea Continental Shelf case brought by Greece." },
      { tr: "27 Kasım 2019: Türkiye-Libya mutabakatı imzalandı. 6 Ağustos 2020: Yunanistan ve Mısır kısmi MEB anlaşması imzaladı. 20 Ekim 2026: Libya Temsilciler Meclisi 2019 mutabakatını onayladı.", en: "27 November 2019: The Türkiye–Libya memorandum was signed. 6 August 2020: Greece and Egypt signed a partial EEZ agreement. 20 October 2026: Libya's House of Representatives approved the 2019 memorandum." }
    ],
    belgeler: [
      { ad: { tr: "Başlıca Ege Denizi Sorunları (Bakanlık)", en: "Main Aegean Sea Issues (Ministry, Turkish)" }, url: "https://www.mfa.gov.tr/baslica-ege-denizi-sorunlari.tr.mfa" },
      { ad: { tr: "Background Note on Aegean Dispute (Bakanlık, İngilizce)", en: "Background Note on Aegean Dispute (Ministry)" }, url: "https://www.mfa.gov.tr/background-note-on-aegean-dispute.en.mfa" },
      { ad: { tr: "No: 202 — Libya mutabakatına ilişkin açıklama (20 Ekim 2026)", en: "No: 202 — Statement on the Libya memorandum (20 October 2026, Turkish)" }, url: "https://www.mfa.gov.tr/no_-202_-turkiye-ile-libya-arasindaki-deniz-yetki-alanlarinin-sinirlandirilmasina-iliskin-mutabakat-muhtirasi-hk.tr.mfa" }
    ],
    karsiTez: {
      tr: "Yunanistan, UNCLOS'a dayanarak adaların da ana kara gibi tam kıta sahanlığı ve MEB hakkına sahip olduğunu, 12 mil karasularının bir hak olduğunu savunur; tek uyuşmazlığın kıta sahanlığı/MEB sınırlandırması olduğunu ve bunun Lahey'de çözülebileceğini söyler. AB, Türkiye-Libya mutabakatını üçüncü devletlerin haklarını ihlal ettiği gerekçesiyle tanımaz.",
      en: "Greece, relying on UNCLOS, argues that islands have the same full continental shelf and EEZ entitlement as the mainland and that 12-mile territorial waters are a right; it maintains that the only dispute is continental shelf/EEZ delimitation, which could be settled at The Hague. The EU does not recognise the Türkiye–Libya memorandum, arguing that it infringes third states' rights."
    },
    sinavIpucu: {
      tr: "\"Deniz sınırı\" yerine Bakanlık terminolojisindeki \"deniz yetki alanlarının sınırlandırılması\" (delimitation of maritime jurisdiction areas) ifadesini kullan. Türkiye'nin UNCLOS'a taraf olmadığını ve neden olmadığını (adalar rejimi, kapalı/yarı kapalı deniz özellikleri) bilmek kritik.",
      en: "Use the Ministry term \"delimitation of maritime jurisdiction areas\" rather than \"maritime border\". It is critical to know that Türkiye is not a party to UNCLOS and why (the regime of islands, the features of enclosed/semi-enclosed seas)."
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
      tr: "Türkiye, AB'ye tam üyeliği stratejik hedef olarak korur ve müzakerelerin önündeki siyasi blokajların kaldırılmasını ister. Gümrük Birliği'nin güncellenmesini, vize serbestisinin tamamlanmasını ve üst düzey diyalog mekanizmalarının işletilmesini talep eder. AB'nin savunma girişimlerine (ör. SAFE) Türkiye'nin dâhil edilmesini Avrupa güvenliğinin gereği olarak görür.",
      en: "Türkiye maintains full EU membership as a strategic objective and calls for the removal of the political blockages on the negotiations. It seeks the modernisation of the Customs Union, the completion of visa liberalisation and the functioning of high-level dialogue mechanisms. It regards Türkiye's inclusion in EU defence initiatives (e.g. SAFE) as a requirement of European security."
    },
    analiz: {
      tr: "Müzakereler hukuken sürüyor ama fiilen duruyor: AB Konseyi Haziran 2018 sonuçlarında yeni fasıl açılmasının öngörülmediğini kaydetti. 35 fasıldan 14'ünün siyasi gerekçelerle bloke olması, sorunun teknik değil Kıbrıs merkezli siyasi bir düğüm olduğunu gösteriyor. Bu nedenle ilişki giderek göç, ticaret, enerji ve savunma gibi \"işlevsel\" alanlarda yürüyor. Rusya tehdidi ve SAFE tartışması, Türkiye'nin değerini savunma ekseninde yeniden gündeme taşıdı.",
      en: "Negotiations continue legally but have stalled in practice: in its June 2018 conclusions the EU Council noted that no further chapters could be considered for opening. The political blocking of 14 of the 35 chapters shows that the problem is not technical but a political knot centred on Cyprus. The relationship therefore increasingly runs through 'functional' areas such as migration, trade, energy and defence. The Russian threat and the SAFE debate have brought Türkiye's value back onto the agenda in the defence dimension."
    },
    olgular: [
      { tr: "Kilometre taşları: 1959 ortaklık başvurusu; 12 Eylül 1963 Ankara Antlaşması; 1970 Katma Protokol; 14 Nisan 1987 tam üyelik başvurusu; 1 Ocak 1996 Gümrük Birliği (1/95 sayılı Ortaklık Konseyi Kararı); Aralık 1999 Helsinki'de adaylık; 3 Ekim 2005 müzakerelerin açılışı.", en: "Milestones: 1959 application for association; 12 September 1963 Ankara Agreement; 1970 Additional Protocol; 14 April 1987 application for full membership; 1 January 1996 Customs Union (Association Council Decision 1/95); December 1999 candidacy at Helsinki; 3 October 2005 opening of negotiations." },
      { tr: "Fasıl durumu (Ocak 2024 itibarıyla): 35 fasıldan 16'sı açıldı, 1'i (Bilim ve Araştırma) geçici olarak kapandı.", en: "Chapter status (as of January 2024): 16 of the 35 chapters have been opened and 1 (Science and Research) provisionally closed." },
      { tr: "Blokajlar: AB Konseyi 11 Aralık 2006'da Ankara Protokolü'nün GKRY'ye uygulanmaması gerekçesiyle 8 faslı askıya aldı; GKRY tek taraflı olarak 6 faslı bloke ediyor. Toplam 14 fasıl bloke.", en: "Blockages: On 11 December 2006 the EU Council suspended 8 chapters over the non-application of the Ankara Protocol to the Greek Cypriot Administration, which unilaterally blocks 6 more. A total of 14 chapters are blocked." },
      { tr: "18 Mart 2016 Türkiye-AB Mutabakatı: düzensiz göçle mücadele, geri kabul ve AB'nin sığınmacılar için mali desteği.", en: "18 March 2016 Türkiye–EU Statement: combating irregular migration, readmission and EU financial support for refugees." },
      { tr: "Vize serbestisi: 72 kriterin 66'sı karşılandı, 6'sı kaldı (Temmuz 2025). AB, Temmuz 2025'te Türk vatandaşları için kademeli çok girişli vize uygulamasını başlattı.", en: "Visa liberalisation: 66 of 72 benchmarks met, 6 remaining (July 2025). In July 2025 the EU introduced a cascade multiple-entry visa regime for Turkish citizens." },
      { tr: "SAFE: AB Konseyi Mayıs 2025'te ortak savunma alımları için 150 milyar avroluk kredi aracını kabul etti. Üçüncü ülke katılımı ikili anlaşmaya bağlı; Türkiye'nin katılımı tartışılıyor.", en: "SAFE: In May 2025 the EU Council adopted a €150 billion loan instrument for joint defence procurement. Third-country participation depends on a bilateral agreement; Türkiye's participation is under discussion." }
    ],
    belgeler: [
      { ad: { tr: "Türkiye-AB İlişkilerine Genel Bakış (Bakanlık)", en: "Overview of Türkiye–EU Relations (Ministry, Turkish)" }, url: "https://www.mfa.gov.tr/turkiye-ab-iliskilerine-genel-bakis.tr.mfa" },
      { ad: { tr: "Katılım Müzakerelerinde Mevcut Durum (AB Başkanlığı)", en: "Current State of Accession Negotiations (Directorate for EU Affairs, Turkish)" }, url: "https://www.ab.gov.tr/katilim-muzakerelerinde-mevcut-durum_65.html" },
      { ad: { tr: "SAFE: AB Konseyi kararı (Mayıs 2025)", en: "SAFE: EU Council adoption (May 2025)" }, url: "https://www.eeas.europa.eu/delegations/ukraine/safe-council-adopts-%E2%82%AC150-billion-boost-joint-procurement-european-security-and-defence_en" }
    ],
    karsiTez: {
      tr: "AB kurumları ve bazı üye devletler, müzakerelerin durmasını Türkiye'deki hukukun üstünlüğü, yargı bağımsızlığı ve temel haklar alanındaki gerilemeye bağlar; ilerlemeyi Kopenhag kriterlerine ve Ankara Protokolü'nün tüm üye devletlere uygulanmasına şartlar. Bazı çevreler tam üyelik yerine \"imtiyazlı ortaklık\" modelini savunur.",
      en: "EU institutions and some member states attribute the standstill to backsliding in Türkiye on the rule of law, judicial independence and fundamental rights; they make progress conditional on the Copenhagen criteria and the application of the Ankara Protocol to all member states. Some circles advocate a 'privileged partnership' instead of full membership."
    },
    sinavIpucu: {
      tr: "Fasıl sayılarını karıştırma: açılan 16, kapanan 1, bloke 14 (8 Konsey + 6 GKRY). Gümrük Birliği'nin tarımı, hizmetleri ve kamu alımlarını kapsamadığını ve Türkiye'nin AB'nin üçüncü ülkelerle yaptığı STA'lara karar sürecinde katılmadan uymak zorunda kaldığı \"asimetri\" sorununu bil.",
      en: "Don't mix up the chapter numbers: 16 opened, 1 closed, 14 blocked (8 by the Council + 6 by the Greek Cypriot side). Know that the Customs Union excludes agriculture, services and public procurement, and the 'asymmetry' problem whereby Türkiye must follow the EU's FTAs with third countries without a say in them."
    },
    kavramlar: [{ tr: "Gümrük Birliği", en: "Customs Union" }, { tr: "Vize serbestisi diyaloğu", en: "Visa liberalisation dialogue" }, { tr: "Katılım müzakereleri", en: "Accession negotiations" }, { tr: "AB müktesebatı", en: "Acquis communautaire" }, { tr: "Aday ülke", en: "Candidate country" }],
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
      tr: "Türkiye NATO'yu Avrupa-Atlantik güvenliğinin temeli olarak görür ve ittifakın en büyük ordularından birine sahip bir müttefik olarak katkısını vurgular. Terörle mücadelede müttefiklerden dayanışma bekler. ABD ile ilişkileri stratejik ortaklık çerçevesinde ele alır; F-35 programına dönüş ve CAATSA yaptırımlarının kaldırılması gibi sorunların çözümünü ister.",
      en: "Türkiye regards NATO as the cornerstone of Euro-Atlantic security and stresses its contribution as an ally with one of the largest armed forces in the Alliance. It expects solidarity from allies in counter-terrorism. It approaches relations with the US within a strategic partnership framework and seeks solutions to issues such as returning to the F-35 programme and lifting the CAATSA sanctions."
    },
    analiz: {
      tr: "Türkiye-NATO ilişkisi \"vazgeçilmez ama sorunlu\" bir ilişki olarak tanımlanabilir. Coğrafya (Karadeniz, Boğazlar, Orta Doğu'ya açılan kanat) Türkiye'yi vazgeçilmez kılıyor; S-400 alımı ve Suriye'de YPG'ye verilen destek ise güveni zedeledi. 2026'da İran füzelerinin NATO sistemlerince engellenmesi ve Ankara Zirvesi, ittifakın Türkiye için somut değerini ve Türkiye'nin ittifaktaki ağırlığını birlikte gösterdi. İsveç ve Finlandiya'nın üyelik süreçleri, Türkiye'nin onay yetkisini pazarlık gücüne çevirebildiğini ortaya koydu.",
      en: "Türkiye–NATO relations can be described as 'indispensable but troubled'. Geography (the Black Sea, the Straits, the flank facing the Middle East) makes Türkiye indispensable, while the S-400 purchase and US support for the YPG in Syria damaged trust. In 2026, the interception of Iranian missiles by NATO systems and the Ankara Summit showed both the Alliance's tangible value for Türkiye and Türkiye's weight within it. The Swedish and Finnish accession processes showed that Türkiye could turn its ratification power into leverage."
    },
    olgular: [
      { tr: "18 Şubat 1952: Türkiye ve Yunanistan NATO'ya katıldı. Türkiye, Kore Savaşı'na (1950) asker göndermişti.", en: "18 February 1952: Türkiye and Greece joined NATO. Türkiye had sent troops to the Korean War (1950)." },
      { tr: "Temmuz 2019: S-400 teslimatı başladı; ABD Türkiye'yi F-35 programından çıkardı. 14 Aralık 2020: ABD, CAATSA kapsamında Savunma Sanayii Başkanlığı'na yaptırım uyguladı.", en: "July 2019: S-400 deliveries began; the US removed Türkiye from the F-35 programme. 14 December 2020: The US imposed CAATSA sanctions on Türkiye's Presidency of Defence Industries." },
      { tr: "TBMM, Finlandiya'nın üyeliğini 30 Mart 2023'te, İsveç'inkini 23 Ocak 2024'te onayladı.", en: "The Grand National Assembly ratified Finland's accession on 30 March 2023 and Sweden's on 23 January 2024." },
      { tr: "Haziran 2025 Lahey Zirvesi: müttefikler 2035'e kadar GSYH'nin %5'ini savunma ve güvenliğe ayırmayı (%3,5 temel savunma + %1,5 ilgili harcamalar) kararlaştırdı.", en: "June 2025 Hague Summit: allies agreed to spend 5% of GDP on defence and security by 2035 (3.5% core defence + 1.5% related spending)." },
      { tr: "Mart 2026: Türk hava sahasına giren dört İran balistik füzesi NATO hava ve füze savunma sistemlerince düşürüldü; NATO Malatya'ya ek Patriot bataryası konuşlandırdı.", en: "March 2026: Four Iranian ballistic missiles that entered Turkish airspace were shot down by NATO air and missile defence systems; NATO deployed an additional Patriot battery to Malatya." },
      { tr: "7-8 Temmuz 2026: NATO Ankara Zirvesi. Türkiye, 2004 İstanbul Zirvesi'nden sonra ikinci kez NATO liderler zirvesine ev sahipliği yaptı.", en: "7–8 July 2026: NATO Ankara Summit. Türkiye hosted a NATO leaders' summit for the second time, after the 2004 Istanbul Summit." }
    ],
    belgeler: [
      { ad: { tr: "NATO Lahey Zirvesi Bildirisi (2025)", en: "The Hague Summit Declaration (2025)" }, url: "https://www.ncia.nato.int/newsroom/news/the-hague-summit-declaration" },
      { ad: { tr: "Bakan Fidan: Ankara Zirvesi değerlendirmesi", en: "FM Fidan on the Ankara Summit" }, url: "https://en.yenisafak.com/turkiye/turkish-fm-nato-ankara-summit-concluded-successfully-3720598" }
    ],
    karsiTez: {
      tr: "ABD ve bazı müttefikler, S-400'ün NATO sistemleriyle uyumsuz olduğunu ve F-35 teknolojisini riske attığını savunur. Türkiye'nin Rusya'ya yaptırımlara katılmaması ve İsveç/Finlandiya sürecini geciktirmesi, bazı başkentlerde ittifak dayanışmasına aykırı bulunmuştur. ABD, YPG'yi DEAŞ'la mücadelede ortak olarak görmüştür.",
      en: "The US and some allies argue that the S-400 is incompatible with NATO systems and puts F-35 technology at risk. Türkiye's non-participation in sanctions on Russia and its delay of the Swedish/Finnish process were seen in some capitals as contrary to allied solidarity. The US has viewed the YPG as a partner in the fight against DAESH."
    },
    sinavIpucu: {
      tr: "NATO'yu sadece \"ittifak\" olarak değil, Türkiye'nin Batı'ya kurumsal bağı olarak anlat. Madde 5'in yanında Madde 4 istişarelerini de bil: Türkiye 2003-2020 arasında beş kez (2003, 2012'de iki kez, 2015 ve 2020) Madde 4 istişaresi talep etti; bu maddeye en sık başvuran müttefik Türkiye'dir.",
      en: "Present NATO not just as an 'alliance' but as Türkiye's institutional anchor in the West. Besides Article 5, know Article 4 consultations: Türkiye requested Article 4 consultations five times between 2003 and 2020 (2003, twice in 2012, 2015 and 2020), more than any other ally."
    },
    kavramlar: [{ tr: "Kolektif savunma (Madde 5)", en: "Collective defence (Article 5)" }, { tr: "Yük paylaşımı", en: "Burden sharing" }, { tr: "Caydırıcılık", en: "Deterrence" }, { tr: "İttifak", en: "Alliance" }],
    soru: {
      tr: "Türkiye'nin NATO üyeliği ile stratejik özerklik arayışı birbiriyle çelişir mi? Tartışınız.",
      en: "Do Türkiye's NATO membership and its pursuit of strategic autonomy contradict each other? Discuss."
    }
  },
  {
    id: "rusya-ukrayna",
    baslik: { tr: "Rusya–Ukrayna Savaşı ve Karadeniz", en: "The Russia–Ukraine War and the Black Sea" },
    bolge: { tr: "Karadeniz", en: "Black Sea" },
    oncelik: "yuksek",
    resmi: {
      tr: "Türkiye Ukrayna'nın egemenliğini ve toprak bütünlüğünü destekler; Kırım'ın yasa dışı ilhakını tanımaz ve Kırım Tatarlarının haklarını gündemde tutar. Montrö Sözleşmesi'ni hükümlerine uygun ve tarafsız biçimde uygular. Savaşın diplomatik yollarla sona erdirilmesi için iki tarafla diyaloğu sürdürür ve İstanbul'u müzakere zemini olarak sunar.",
      en: "Türkiye supports Ukraine's sovereignty and territorial integrity, does not recognise the illegal annexation of Crimea and keeps the rights of the Crimean Tatars on the agenda. It implements the Montreux Convention in line with its provisions and impartially. It maintains dialogue with both sides to end the war through diplomacy and offers Istanbul as a venue for negotiations."
    },
    analiz: {
      tr: "Türkiye'nin tutumu genellikle \"aktif tarafsızlık\" ya da \"Batı'ya yakın denge\" olarak tanımlanıyor: Ukrayna'ya savunma desteği verirken Rusya'ya yaptırımlara katılmadı. Bu denge, Tahıl Girişimi ve esir takaslarında kolaylaştırıcı rolü mümkün kıldı. Montrö'nün 2022'de savaş gemilerine işletilmesi, Karadeniz'de kıyıdaş olmayan donanmaların varlığını sınırlayarak hem Rusya'nın ikmalini hem de NATO'nun Karadeniz'e girişini kısıtladı; bu da Türkiye'nin \"Karadeniz'in bölgesel sahipliği\" tezini güçlendirdi. Müzakerelerin 2026'da Körfez'e kayması ise Türkiye'nin platform rolünün tartışmasız olmadığını gösteriyor.",
      en: "Türkiye's stance is often described as 'active neutrality' or 'Western-leaning balance': it provided defence support to Ukraine without joining sanctions on Russia. This balance enabled its facilitating role in the Grain Initiative and prisoner exchanges. Applying Montreux to warships in 2022 limited the presence of non-littoral navies, restricting both Russian resupply and NATO's entry into the Black Sea, which reinforced Türkiye's thesis of 'regional ownership' of the Black Sea. The shift of negotiations to the Gulf in 2026 shows that Türkiye's platform role is not uncontested."
    },
    olgular: [
      { tr: "Montrö kuralları (Bakanlık): Boğazlardan geçen yabancı savaş gemileri en fazla 9 gemi ve toplam 15.000 ton; kıyıdaş olmayan devletlerin Karadeniz'deki toplam tonajı en fazla 45.000 ton (tek devlet 30.000 ton); kalış süresi en fazla 21 gün; uçak gemileri geçemez.", en: "Montreux rules (Ministry): foreign warships in transit through the Straits are limited to 9 vessels and 15,000 tons aggregate; the aggregate tonnage of non-littoral states in the Black Sea may not exceed 45,000 tons (30,000 for a single state); maximum stay 21 days; aircraft carriers may not pass." },
      { tr: "28 Şubat 2022: Türkiye, Montrö'nün savaş zamanına ilişkin 19. maddesini işleterek savaşan devletlerin savaş gemilerinin Boğazlardan geçişini durdurdu (üslerine dönüş hariç).", en: "28 February 2022: Türkiye applied Article 19 of Montreux on wartime, halting the passage of belligerents' warships through the Straits (except those returning to base)." },
      { tr: "29 Mart 2022: Rusya-Ukrayna barış görüşmeleri İstanbul'da (Dolmabahçe) yapıldı.", en: "29 March 2022: Russia–Ukraine peace talks were held in Istanbul (Dolmabahçe)." },
      { tr: "Karadeniz Tahıl Girişimi: 22 Temmuz 2022'de İstanbul'da imzalandı; 1.003 sefer ve yaklaşık 32,8 milyon ton ihracat sağladı; Rusya Temmuz 2023'te çekildi.", en: "Black Sea Grain Initiative: signed in Istanbul on 22 July 2022; enabled 1,003 voyages and about 32.8 million tonnes of exports; Russia withdrew in July 2023." },
      { tr: "Mayıs 2025: Rusya ve Ukrayna 2022'den bu yana ilk doğrudan görüşmelerini İstanbul'da yaptı. Ekim 2026'da yeni turun Kasım ortasında Abu Dabi'de yapılması bekleniyor.", en: "May 2025: Russia and Ukraine held their first direct talks since 2022 in Istanbul. As of October 2026, a new round is expected in Abu Dhabi in mid-November." }
    ],
    belgeler: [
      { ad: { tr: "Montrö Sözleşmesi'nin Uygulanması (Bakanlık, İngilizce)", en: "Implementation of the Montreux Convention (Ministry)" }, url: "https://www.mfa.gov.tr/implementation-of-the-montreux-convention.en.mfa" },
      { ad: { tr: "Montrö Sözleşmesi metni (Bakanlık, İngilizce)", en: "Text of the Montreux Convention (Ministry)" }, url: "https://www.mfa.gov.tr/ii_-convention-relating-to-the-regime-of-the-straits.en.mfa" },
      { ad: { tr: "Türk Boğazları (Bakanlık)", en: "Turkish Straits (Ministry, Turkish)" }, url: "https://www.mfa.gov.tr/turk-bogazlari.tr.mfa" },
      { ad: { tr: "BM: Tahıl Girişimi son durum raporu (Temmuz 2023)", en: "UN: Black Sea Grain Initiative operational update (July 2023)" }, url: "https://www.ungeneva.org/en/news-media/press-release/2023/07/operational-update-office-un-coordinator-black-sea-grain" }
    ],
    karsiTez: {
      tr: "Bazı Batılı çevreler, Türkiye'nin Rusya ile ticaretinin savaş döneminde artmasını yaptırımları delme riski olarak görür; Montrö'nün NATO müttefiklerinin Karadeniz'e girişini de kısıtladığını eleştirir. Rusya ise Türkiye'nin Ukrayna'ya SİHA ve savunma desteği vermesini tarafsızlıkla bağdaşmaz bulur.",
      en: "Some Western circles see the growth of Türkiye's trade with Russia during the war as a risk of sanctions circumvention, and criticise Montreux for also restricting NATO allies' access to the Black Sea. Russia, for its part, finds Türkiye's provision of drones and defence support to Ukraine incompatible with neutrality."
    },
    sinavIpucu: {
      tr: "Montrö'de 19., 20. ve 21. maddeleri ayırt et: 19 = Türkiye savaşta taraf değilken; 20 = Türkiye savaşta taraf iken (geçiş tamamen Türkiye'nin takdirinde); 21 = Türkiye kendini yakın savaş tehdidi altında gördüğünde. 2022'de işletilen madde 19'dur.",
      en: "Distinguish Articles 19, 20 and 21 of Montreux: 19 = Türkiye is not a belligerent; 20 = Türkiye is a belligerent (passage entirely at Türkiye's discretion); 21 = Türkiye considers itself threatened with imminent danger of war. The article applied in 2022 was Article 19."
    },
    kavramlar: [{ tr: "Toprak bütünlüğü", en: "Territorial integrity" }, { tr: "İlhak", en: "Annexation" }, { tr: "Montrö Sözleşmesi", en: "Montreux Convention" }, { tr: "Savaş gemisi", en: "Warship" }, { tr: "Yaptırım", en: "Sanction" }],
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
      tr: "Türkiye Suriye'nin toprak bütünlüğünü, birliğini ve istikrarını destekler. Yeni Suriye yönetimiyle siyasi, ekonomik ve güvenlik alanlarında kapsamlı işbirliği yürütür. Terör örgütlerinin (PKK/YPG, DEAŞ) Suriye'de yer bulmamasını ve sığınmacıların gönüllü, güvenli ve onurlu dönüşünü öncelik olarak görür; İsrail'in Suriye topraklarındaki ihlallerini kınar.",
      en: "Türkiye supports Syria's territorial integrity, unity and stability. It pursues comprehensive cooperation with the new Syrian administration in the political, economic and security fields. Its priorities are that terrorist organisations (PKK/YPG, DAESH) find no place in Syria and the voluntary, safe and dignified return of asylum seekers; it condemns Israel's violations on Syrian territory."
    },
    analiz: {
      tr: "Esad rejiminin Aralık 2024'te çöküşü, Türkiye'yi Suriye'de 13 yıllık savunmacı pozisyondan en etkili dış aktör konumuna taşıdı. Ancak üç kısıt sürüyor: SDG'nin yeni orduya entegrasyonu, İsrail'in güneyde fiilî oldubittiler yaratması ve ülkenin yeniden inşası için gereken finansman. Dışişleri Bakanı Fidan'ın Suriye'yi 2026'nın birinci önceliği sayması, bu dosyanın \"Terörsüz Türkiye\" süreciyle iç politikaya da bağlanmasından kaynaklanıyor.",
      en: "The fall of the Assad regime in December 2024 moved Türkiye from a 13-year defensive posture to being the most influential external actor in Syria. Three constraints remain, however: integrating the SDF into the new army, Israel's creation of facts on the ground in the south, and financing reconstruction. Foreign Minister Fidan's ranking of Syria as the top priority for 2026 reflects the file's link to domestic politics through the 'Terror-free Türkiye' process."
    },
    olgular: [
      { tr: "20 Ekim 1998 Adana Mutabakatı: Suriye PKK'ya desteğini kesmeyi ve Öcalan'ı ülkeden çıkarmayı taahhüt etti.", en: "20 October 1998 Adana Agreement: Syria undertook to end its support for the PKK and to expel Öcalan." },
      { tr: "Sınır ötesi harekâtlar: Fırat Kalkanı (2016-2017), Zeytin Dalı (2018), Barış Pınarı (Ekim 2019), Bahar Kalkanı (2020).", en: "Cross-border operations: Euphrates Shield (2016–2017), Olive Branch (2018), Peace Spring (October 2019), Spring Shield (2020)." },
      { tr: "2017: Astana süreci (Türkiye, Rusya, İran garantör).", en: "2017: Astana process (Türkiye, Russia, Iran as guarantors)." },
      { tr: "8 Aralık 2024: Esad rejimi çöktü. 4 Mayıs 2026 itibarıyla Türkiye'de geçici koruma altında 2.280.542 Suriyeli bulunuyor; 8 Aralık 2024'ten bu yana 667.565 kişi ülkesine döndü (Göç İdaresi).", en: "8 December 2024: The Assad regime fell. As of 4 May 2026, 2,280,542 Syrians are under temporary protection in Türkiye; 667,565 have returned since 8 December 2024 (Presidency of Migration Management)." },
      { tr: "Ağustos 2026: ABD Suriye'yi terörü destekleyen ülkeler listesinden çıkardı; Eylül 2026: UAEA Suriye'nin nükleer dosyasını kapattı. Türkiye her iki kararı da memnuniyetle karşıladı.", en: "August 2026: The US removed Syria from the list of state sponsors of terrorism; September 2026: the IAEA closed Syria's nuclear file. Türkiye welcomed both decisions." }
    ],
    belgeler: [
      { ad: { tr: "Bakan Fidan'ın Şam ziyareti (13-14 Eylül 2026)", en: "FM Fidan's visit to Damascus (13–14 September 2026)" }, url: "https://www.mfa.gov.tr/sayin-bakanimizin-suriye-yi-ziyareti--13-14-eylul-2026--sam.en.mfa" },
      { ad: { tr: "No: 190 — İsrail'in Suriye topraklarındaki ihlalleri (5 Ekim 2026)", en: "No: 190 — Israel's violations on Syrian territory (5 October 2026, Turkish)" }, url: "https://www.mfa.gov.tr/no_-190_-israil-in-suriye-topraklarindaki-ihlalleri-hk.tr.mfa" },
      { ad: { tr: "Fidan'ın 2026 öncelikleri (Yetkin Report)", en: "Fidan's 2026 priorities (Yetkin Report, Turkish)" }, url: "https://yetkinreport.com/2026/01/16/hakan-fidana-gore-2026da-onem-sirasiyla-turkiyenin-onundeki-3-kriz/" }
    ],
    karsiTez: {
      tr: "SDG ve onu destekleyen bazı Batılı çevreler, ademi merkeziyetçi bir Suriye ve Kürtlere özerklik güvencesi talep eder; Türkiye'nin askerî varlığını işgal olarak niteleyen görüşler de vardır. İsrail ise güney Suriye'de tampon bölge yaklaşımını güvenlik gerekçesiyle savunur.",
      en: "The SDF and some Western supporters call for a decentralised Syria and guarantees of Kurdish autonomy; some characterise Türkiye's military presence as occupation. Israel, for its part, defends a buffer-zone approach in southern Syria on security grounds."
    },
    sinavIpucu: {
      tr: "Rakamlarda tarih ver (\"Mayıs 2026 itibarıyla\"), çünkü dönüşlerle sayı hızla değişiyor. \"Mülteci\" yerine Türkiye'deki hukuki statü olan \"geçici koruma\" terimini kullan: Türkiye 1951 Sözleşmesi'ne coğrafi sınırlamayla taraftır.",
      en: "Date your figures ('as of May 2026'), since the numbers change quickly with returns. Use 'temporary protection', the legal status in Türkiye, rather than 'refugee': Türkiye is party to the 1951 Convention with a geographical limitation."
    },
    kavramlar: [{ tr: "Toprak bütünlüğü", en: "Territorial integrity" }, { tr: "Gönüllü geri dönüş", en: "Voluntary return" }, { tr: "Geçici koruma", en: "Temporary protection" }, { tr: "Sığınmacı", en: "Asylum seeker" }, { tr: "Sınır ötesi", en: "Cross-border" }],
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
      tr: "Türkiye, 1967 sınırları temelinde, başkenti Doğu Kudüs olan, bağımsız, egemen ve coğrafi bütünlüğe sahip bir Filistin devletinin kurulmasını öngören iki devletli çözümü savunur. Gazze'de kalıcı ateşkes, insani yardımın engelsiz ulaştırılması ve uluslararası hukukun ihlallerinden hesap sorulması çağrısı yapar. Kudüs'ün statüsünü değiştirmeye yönelik adımları BMGK kararlarına aykırı bulur.",
      en: "Türkiye advocates a two-state solution providing for an independent, sovereign and geographically contiguous State of Palestine on the basis of the 1967 borders, with East Jerusalem as its capital. It calls for a lasting ceasefire in Gaza, the unhindered delivery of humanitarian aid and accountability for violations of international law. It considers steps to change the status of Jerusalem contrary to UNSC resolutions."
    },
    analiz: {
      tr: "Gazze savaşı Türkiye-İsrail ilişkilerini diplomatik, ticari ve hukuki düzlemde kopma noktasına getirdi: ticaretin kesilmesi ve UAD davasına müdahil olunması, Türkiye'nin söylemden somut araçlara geçtiğini gösteriyor. Ekim 2025 ateşkesinde garantörler arasında yer almak sahaya dönük bir rol açtı; ancak İsrail'in Türkiye'nin istikrar gücüne katılımına itirazı belirleyici bir kısıt. Fidan'ın değerlendirmesine göre Gazze dosyası özünde bölgedeki Türkiye-İsrail rekabetinin bir parçası.",
      en: "The Gaza war brought Türkiye–Israel relations to breaking point on the diplomatic, trade and legal levels: halting trade and intervening in the ICJ case show that Türkiye moved from rhetoric to concrete instruments. Being among the guarantors of the October 2025 ceasefire opened a role on the ground, but Israel's objection to Turkish participation in the stabilisation force is a decisive constraint. In Fidan's assessment, the Gaza file is essentially part of the Türkiye–Israel rivalry in the region."
    },
    olgular: [
      { tr: "15 Kasım 1988: Türkiye, Filistin Devleti'nin ilanını aynı gün tanıyan ülkeler arasında yer aldı.", en: "15 November 1988: Türkiye was among the countries that recognised the proclaimed State of Palestine on the same day." },
      { tr: "Mayıs 2024: Türkiye İsrail ile tüm ticareti durdurdu.", en: "May 2024: Türkiye suspended all trade with Israel." },
      { tr: "7 Ağustos 2024: Türkiye, Güney Afrika'nın İsrail aleyhine UAD'de açtığı Soykırım Sözleşmesi davasına UAD Statüsü'nün 63. maddesi uyarınca müdahillik beyanı sundu.", en: "7 August 2024: Türkiye filed a declaration of intervention under Article 63 of the ICJ Statute in South Africa's Genocide Convention case against Israel." },
      { tr: "10 Ekim 2025: Gazze ateşkesi yürürlüğe girdi; 13 Ekim 2025'te Şarm el-Şeyh'te ABD, Mısır, Katar ve Türkiye garantör belgeyi imzaladı.", en: "10 October 2025: The Gaza ceasefire took effect; on 13 October 2025 the US, Egypt, Qatar and Türkiye signed the guarantor document at Sharm el-Sheikh." },
      { tr: "Ağustos 2026 itibarıyla Gazze Sağlık Bakanlığı ateşkesten bu yana 1.250 Filistinlinin öldüğünü bildiriyor; ateşkesin ikinci aşaması tartışmalı.", en: "As of August 2026, the Gaza Health Ministry reports 1,250 Palestinians killed since the ceasefire; the second phase of the ceasefire remains contested." }
    ],
    belgeler: [
      { ad: { tr: "UAD davasına müdahillik (Bakanlık, No: 161)", en: "Intervention in the ICJ case (Ministry, No: 161)" }, url: "https://www.mfa.gov.tr/no_-161_-guney-afrika-cumhuriyeti-nin-israil-aleyhine-uluslararasi-adalet-divani-nezdinde-actigi-davaya-mudahilligimiz-hk.en.mfa" },
      { ad: { tr: "UAD basın bildirisi: Türkiye'nin müdahilliği", en: "ICJ press release: Türkiye's intervention" }, url: "https://icj-cij.org/node/204214" },
      { ad: { tr: "No: 197 — Kolombiya'nın büyükelçiliğini Kudüs'e taşıma kararı (15 Ekim 2026)", en: "No: 197 — Colombia's decision to move its embassy to Jerusalem (15 October 2026, Turkish)" }, url: "https://www.mfa.gov.tr/no_-197_-kolombiya-nin-tel-aviv-deki-buyukelciligini-kudus-e-tasima-karari-hk.tr.mfa" }
    ],
    karsiTez: {
      tr: "İsrail, Türkiye'nin Hamas'la temasını gerekçe göstererek Türkiye'nin Gazze'de rol almasına karşı çıkar ve askerî operasyonlarını meşru müdafaa olarak tanımlar. Bazı Batılı hükümetler UAD davasının esasına ilişkin karar verilmeden \"soykırım\" nitelemesi yapılmasını erken bulur.",
      en: "Israel opposes any Turkish role in Gaza, citing Türkiye's contacts with Hamas, and describes its military operations as self-defence. Some Western governments consider it premature to use the term 'genocide' before the ICJ rules on the merits."
    },
    sinavIpucu: {
      tr: "İki devletli çözümü yazarken dört unsuru eksiksiz say: 1967 sınırları, Doğu Kudüs başkent, bağımsız-egemen, coğrafi bütünlük. UAD'de \"dava açmak\" ile \"davaya müdahil olmak\" farklıdır: Türkiye davacı değil, 63. madde kapsamında müdahildir.",
      en: "When writing about the two-state solution, list all four elements: 1967 borders, East Jerusalem as capital, independent and sovereign, geographically contiguous. 'Bringing a case' and 'intervening in a case' at the ICJ are different: Türkiye is not the applicant but an intervener under Article 63."
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
      tr: "Türkiye bölgede savaşın yayılmamasını, diplomasinin önceliklendirilmesini, devletlerin egemenliğine ve toprak bütünlüğüne saygıyı savunur. Hava sahasına yönelik ihlalleri kabul edilemez bulur ve kendi güvenliğini koruma hakkını vurgular. Körfez ülkelerine yönelik saldırıları kınar ve bu ülkelerle savunma ve ekonomi işbirliğini kurumsallaştırır.",
      en: "Türkiye advocates preventing the spread of war in the region, prioritising diplomacy and respect for states' sovereignty and territorial integrity. It considers violations of its airspace unacceptable and underlines its right to protect its security. It condemns attacks on the Gulf states and is institutionalising defence and economic cooperation with them."
    },
    analiz: {
      tr: "Türkiye-İran ilişkisi tarihsel olarak \"rekabet içinde istikrar\" üzerine kurulu: 1639'dan beri büyük ölçüde değişmeyen sınır, karşılıklı enerji ve ticaret bağımlılığı, Suriye ve Irak'ta ise rekabet. 2026 İran savaşı bu dengeyi zorladı: Türkiye bir yandan NATO hava savunmasına dayandı, öte yandan savaşa taraf olmaktan kaçındı. Mekke ve \"Badr\" savunma düzenlemeleri, Körfez'de ABD şemsiyesinin güvenilirliği sorgulanırken bölgesel güvenlik mimarisinde Türkiye'ye yeni bir rol açıyor; ancak bu düzenlemelerin NATO yükümlülükleriyle ilişkisi henüz tanımlanmış değil.",
      en: "Türkiye–Iran relations have historically rested on 'stability within rivalry': a border largely unchanged since 1639, mutual dependence in energy and trade, and competition in Syria and Iraq. The 2026 Iran war strained this balance: Türkiye relied on NATO air defence while avoiding becoming a party to the war. The Mecca and 'Badr' defence arrangements open a new role for Türkiye in the regional security architecture as the reliability of the US umbrella in the Gulf is questioned, though their relationship to NATO obligations is not yet defined."
    },
    olgular: [
      { tr: "1639 Kasr-ı Şirin Antlaşması: Bugünkü Türkiye-İran sınırının ana hatlarını belirledi.", en: "1639 Treaty of Qasr-e Shirin: set the main lines of today's Türkiye–Iran border." },
      { tr: "28 Şubat 2026: ABD ve İsrail'in İran'a saldırısıyla savaş başladı; İran Hürmüz Boğazı'nı kapattı. Nisan'daki Pakistan arabuluculuğundaki ateşkes 8 Temmuz 2026'da çöktü.", en: "28 February 2026: The war began with US and Israeli strikes on Iran; Iran closed the Strait of Hormuz. The Pakistan-mediated ceasefire of April collapsed on 8 July 2026." },
      { tr: "Mart 2026: Türk hava sahasına giren dört İran balistik füzesi NATO sistemlerince düşürüldü; Türkiye İran Büyükelçisini Bakanlığa çağırdı.", en: "March 2026: Four Iranian ballistic missiles entering Turkish airspace were shot down by NATO systems; Türkiye summoned the Iranian Ambassador." },
      { tr: "Mekke Ortak Savunma Anlaşması (Türkiye, Pakistan, Suudi Arabistan): Stratejik Siyasi ve Savunma Komitesi ilk kez 30 Ağustos 2026'da toplandı; anlaşma 20 Ekim 2026'da TBMM'ye sunuldu.", en: "Mecca Agreement for Joint Defence (Türkiye, Pakistan, Saudi Arabia): its Strategic Political and Defence Committee first met on 30 August 2026; the agreement was submitted to Parliament on 20 October 2026." },
      { tr: "21 Ekim 2026: Türkiye, Katar, Pakistan ve Endonezya Doha'da \"Badr\" savunma sanayii işbirliği mutabakatını imzaladı.", en: "21 October 2026: Türkiye, Qatar, Pakistan and Indonesia signed the 'Badr' defence industry cooperation memorandum in Doha." }
    ],
    belgeler: [
      { ad: { tr: "Mekke Anlaşması Komitesi ortak açıklaması (31 Ağustos 2026)", en: "Mecca Agreement Committee joint statement (31 August 2026)" }, url: "https://www.mfa.gov.tr/strategic-political-and-defence-committee-of-the-makkah-agreement-for-joint-defence--joint-statement--31-august-2026.tr.mfa" },
      { ad: { tr: "2026 İran savaşı ateşkes süreci (Wikipedia)", en: "2026 Iran war ceasefire (Wikipedia)" }, url: "https://en.wikipedia.org/wiki/2026_Iran_war_ceasefire" }
    ],
    karsiTez: {
      tr: "İran, Türkiye'nin NATO radar ve hava savunma altyapısına ev sahipliği yapmasını tehdit olarak görür. Bazı Batılı analistler ise Türkiye'nin Körfez ve Pakistan ile kurduğu savunma bağlarının NATO içinde koordinasyon sorunları yaratabileceğini savunur.",
      en: "Iran regards Türkiye's hosting of NATO radar and air defence infrastructure as a threat. Some Western analysts argue that Türkiye's defence ties with the Gulf and Pakistan could create coordination problems within NATO."
    },
    sinavIpucu: {
      tr: "İran'ı yazarken \"rekabet ve işbirliğinin bir arada olduğu\" çerçeveyi kullan; tek boyutlu \"düşman\" ya da \"müttefik\" anlatımından kaçın. Enerji bağımlılığını (doğal gaz) ve Irak/Suriye'deki rekabeti örnek ver.",
      en: "When writing about Iran, use a 'coexistence of rivalry and cooperation' framework and avoid a one-dimensional 'enemy' or 'ally' narrative. Use energy dependence (natural gas) and rivalry in Iraq/Syria as examples."
    },
    kavramlar: [{ tr: "Egemenlik", en: "Sovereignty" }, { tr: "Hava sahasının ihlali", en: "Violation of airspace" }, { tr: "Enerji güvenliği", en: "Energy security" }, { tr: "Caydırıcılık", en: "Deterrence" }],
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
      tr: "Türkiye, Türk Devletleri Teşkilatı'nı (TDT) ortak tarih, dil ve kültüre dayanan siyasi ve ekonomik işbirliğinin ana platformu olarak görür. Azerbaycan ile ilişkileri \"tek millet, iki devlet\" anlayışı ve Şuşa Beyannamesi çerçevesinde müttefiklik düzeyinde yürütür. Güney Kafkasya'da kalıcı barışı, bağlantı projelerini ve Ermenistan ile normalleşmeyi destekler.",
      en: "Türkiye regards the Organization of Turkic States (OTS) as the main platform for political and economic cooperation based on shared history, language and culture. It conducts relations with Azerbaijan at the level of an alliance under the 'one nation, two states' understanding and the Shusha Declaration. It supports lasting peace in the South Caucasus, connectivity projects and normalisation with Armenia."
    },
    analiz: {
      tr: "Türk dünyası politikası 1990'ların \"büyük ağabey\" söyleminden kurumsal bir işbirliği modeline evrildi. Rusya'nın Ukrayna'daki savaşı, Orta Asya ülkelerinin dış politikalarını çeşitlendirme arayışını hızlandırdı; Orta Koridor bu arayışın ekonomik omurgası. Karabağ'ın 2020 ve 2023'te Azerbaycan kontrolüne geçmesi ve Azerbaycan-Ermenistan barış metninin 2025'te parafe edilmesi, Türkiye-Ermenistan normalleşmesinin önündeki en büyük engeli zayıflattı. Ancak bölgedeki Rus ve Çin etkisi, Türkiye'nin rolünün sınırlarını belirliyor.",
      en: "Turkic world policy has evolved from the 'big brother' rhetoric of the 1990s into an institutional cooperation model. Russia's war in Ukraine accelerated Central Asian states' search for diversified foreign policies, and the Middle Corridor is the economic backbone of this search. Karabakh's return to Azerbaijani control in 2020 and 2023 and the initialling of the Azerbaijan–Armenia peace text in 2025 weakened the main obstacle to Türkiye–Armenia normalisation. Russian and Chinese influence in the region, however, sets the limits of Türkiye's role."
    },
    olgular: [
      { tr: "9 Kasım 1991: Türkiye, Azerbaycan'ın bağımsızlığını tanıyan ilk ülke oldu.", en: "9 November 1991: Türkiye became the first country to recognise Azerbaijan's independence." },
      { tr: "3 Ekim 2009 Nahçıvan Anlaşması: Türk Konseyi kuruldu (kurucular Azerbaycan, Kazakistan, Kırgızistan, Türkiye). Özbekistan 2019'da tam üye oldu. 12 Kasım 2021 İstanbul Zirvesi'nde adı Türk Devletleri Teşkilatı oldu.", en: "3 October 2009 Nakhchivan Agreement: the Turkic Council was founded (founders Azerbaijan, Kazakhstan, Kyrgyzstan, Türkiye). Uzbekistan became a full member in 2019. At the Istanbul Summit on 12 November 2021 it was renamed the Organization of Turkic States." },
      { tr: "Gözlemciler: Macaristan (2018), Türkmenistan (2021), KKTC (2022) ve Ekonomik İşbirliği Teşkilatı (2023).", en: "Observers: Hungary (2018), Turkmenistan (2021), the TRNC (2022) and the Economic Cooperation Organization (2023)." },
      { tr: "27 Eylül-10 Kasım 2020: 44 gün süren İkinci Karabağ Savaşı. 15 Haziran 2021: Karşılıklı yardım hükmü içeren Şuşa Beyannamesi.", en: "27 September–10 November 2020: the 44-day Second Karabakh War. 15 June 2021: the Shusha Declaration, including a mutual assistance clause." },
      { tr: "Aralık 2021'den bu yana Türkiye ve Ermenistan normalleşme için özel temsilciler atadı. Azerbaycan-Ermenistan barış anlaşması metni 8 Ağustos 2025'te Washington'da parafe edildi.", en: "Since December 2021, Türkiye and Armenia have appointed special envoys for normalisation. The Azerbaijan–Armenia peace agreement text was initialled in Washington on 8 August 2025." }
    ],
    belgeler: [
      { ad: { tr: "Türk Devletleri Teşkilatı (Ticaret Bakanlığı)", en: "Organization of Turkic States (Ministry of Trade, Turkish)" }, url: "https://ticaret.gov.tr/dis-iliskiler/cok-tarafli-ve-bolgesel-iliskiler/cok-tarafli-iliskiler/turk-devletleri-teskilati" },
      { ad: { tr: "No: 188 — 3 Ekim Türk Devletleri İşbirliği Günü (2026)", en: "No: 188 — 3 October Turkic States Cooperation Day (2026, Turkish)" }, url: "https://www.mfa.gov.tr/no_-188_-3-ekim-turk-devletleri-isbirligi-gunu-hk.tr.mfa" }
    ],
    karsiTez: {
      tr: "Rusya, Orta Asya ve Kafkasya'yı kendi nüfuz alanı olarak görür ve Türkiye'nin bölgedeki askerî-siyasi rolünden rahatsızdır. Ermenistan'da bazı çevreler, Türkiye'nin normalleşmeyi Azerbaycan ile barışa bağlamasını ön koşul olarak eleştirir.",
      en: "Russia sees Central Asia and the Caucasus as its sphere of influence and is uneasy about Türkiye's military-political role there. Some circles in Armenia criticise Türkiye for linking normalisation to peace with Azerbaijan as a precondition."
    },
    sinavIpucu: {
      tr: "TDT'nin bir \"askerî ittifak\" değil, işbirliği örgütü olduğunu vurgula. Orta Koridor'u somut projelerle destekle: Bakü-Tiflis-Kars demiryolu (2017), TANAP.",
      en: "Stress that the OTS is a cooperation organisation, not a 'military alliance'. Support the Middle Corridor with concrete projects: the Baku–Tbilisi–Kars railway (2017) and TANAP."
    },
    kavramlar: [{ tr: "Orta Koridor", en: "Middle Corridor" }, { tr: "Normalleşme", en: "Normalisation" }, { tr: "Bölgesel işbirliği", en: "Regional cooperation" }, { tr: "Stratejik ortaklık", en: "Strategic partnership" }],
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
      tr: "Türkiye Afrika ile ilişkilerini eşit ortaklık, karşılıklı saygı ve karşılıklı kazanç ilkelerine dayandırır; \"Afrika sorunlarına Afrikalı çözümler\" yaklaşımını destekler. Diplomatik temsil ağını, ticareti, kalkınma yardımlarını, eğitim burslarını ve ulaştırma bağlantılarını genişletir. Türkiye-Afrika Ortaklık Zirveleri ilişkinin kurumsal çerçevesidir.",
      en: "Türkiye bases its relations with Africa on equal partnership, mutual respect and mutual benefit, and supports the approach of 'African solutions to African problems'. It is expanding its diplomatic network, trade, development assistance, scholarships and transport links. The Türkiye–Africa Partnership Summits form the institutional framework of the relationship."
    },
    analiz: {
      tr: "Afrika açılımı, Türkiye'nin dış politikasında yumuşak güç (insani yardım, eğitim, THY ağı, Maarif okulları) ile sert güç unsurlarını (askerî eğitim, savunma sanayii ihracatı, Somali'deki üs) birleştiren en belirgin örnek. Sömürgecilik geçmişi olmaması Türkiye'ye bir meşruiyet avantajı sağlıyor. Ancak Türkiye, Çin'in finansman kapasitesi ve Körfez ülkelerinin sermayesiyle rekabet ediyor; Sahel'deki darbeler ve Libya'daki bölünmüşlük de siyasi riski artırıyor.",
      en: "The Africa opening is the clearest example in Turkish foreign policy of combining soft power (humanitarian aid, education, the Turkish Airlines network, Maarif schools) with hard power elements (military training, defence exports, the base in Somalia). The absence of a colonial past gives Türkiye a legitimacy advantage. However, Türkiye competes with China's financing capacity and Gulf capital, while coups in the Sahel and division in Libya raise political risk."
    },
    olgular: [
      { tr: "Büyükelçilik sayısı: 2002'de 12, 2022'de 44. Ankara'daki Afrika büyükelçilikleri: 2008 başında 10, Bakanlık verisinde 38.", en: "Number of embassies: 12 in 2002, 44 in 2022. African embassies in Ankara: 10 in early 2008, 38 in the Ministry's figures." },
      { tr: "Ticaret hacmi: 2003'te 5,4 milyar dolar, 2021 sonunda 34,5 milyar dolar.", en: "Trade volume: $5.4 billion in 2003, $34.5 billion at the end of 2021." },
      { tr: "2005: Afrika Birliği'ne gözlemci üye. 2008: Afrika Birliği tarafından stratejik ortak ilan edildi.", en: "2005: observer at the African Union. 2008: declared a strategic partner by the African Union." },
      { tr: "Türkiye-Afrika Ortaklık Zirveleri: 2008 İstanbul, 2014 Malabo, 2021 İstanbul.", en: "Türkiye–Africa Partnership Summits: 2008 Istanbul, 2014 Malabo, 2021 Istanbul." },
      { tr: "THY pandemi öncesinde Afrika'da 39 ülkede 60 noktaya uçuyordu.", en: "Before the pandemic, Turkish Airlines flew to 60 destinations in 39 African countries." }
    ],
    belgeler: [
      { ad: { tr: "Türkiye-Afrika İlişkileri (Bakanlık)", en: "Türkiye–Africa Relations (Ministry)" }, url: "https://www.mfa.gov.tr/turkiye-africa-relations.en.mfa" },
      { ad: { tr: "Türkiye-Afrika İlişkileri (Bakanlık, Türkçe)", en: "Türkiye–Africa Relations (Ministry, Turkish)" }, url: "https://www.mfa.gov.tr/turkiye-afrika-iliskileri.tr.mfa" }
    ],
    karsiTez: {
      tr: "Eleştirmenler, Türkiye'nin Afrika politikasında savunma sanayii ihracatının ve askerî varlığın öne çıktığını, bunun yumuşak güç söylemiyle gerilim yarattığını savunur. Bazı analistler ise ticaret hacminin Çin ve AB'ye kıyasla hâlâ sınırlı olduğuna dikkat çeker.",
      en: "Critics argue that defence exports and military presence have become prominent in Türkiye's Africa policy, creating tension with the soft power narrative. Some analysts also note that trade volume remains limited compared with China and the EU."
    },
    sinavIpucu: {
      tr: "Rakamları yılıyla ver (\"2022 itibarıyla 44 büyükelçilik\"). 2005'in \"Afrika Yılı\" ilan edildiğini ve 1998 Afrika Eylem Planı'nı başlangıç noktası olarak an.",
      en: "Give figures with their year ('44 embassies as of 2022'). Mention that 2005 was declared the 'Year of Africa' and the 1998 Africa Action Plan as the starting point."
    },
    kavramlar: [{ tr: "Eşit ortaklık", en: "Equal partnership" }, { tr: "Kalkınma yardımı", en: "Development assistance" }, { tr: "Yumuşak güç", en: "Soft power" }, { tr: "Büyükelçilik", en: "Embassy" }],
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
      tr: "Türkiye, uyuşmazlıkların barışçıl çözümünü ve arabuluculuğu dış politikasının temel araçlarından biri olarak görür; bu alanda normlar oluşturmak için BM, AGİT ve İİT'de girişimler başlatmıştır. \"Dünya beşten büyüktür\" yaklaşımıyla BM Güvenlik Konseyi'nin daha temsili, demokratik ve etkili olacak biçimde reformunu savunur.",
      en: "Türkiye regards the peaceful settlement of disputes and mediation as one of the main instruments of its foreign policy and has launched initiatives at the UN, the OSCE and the OIC to build norms in this field. With its 'The world is bigger than five' approach, it advocates reforming the UN Security Council to make it more representative, democratic and effective."
    },
    analiz: {
      tr: "Türkiye'nin arabuluculuk kapasitesi üç kaynaktan besleniyor: çok yönlü ilişkiler (iki tarafla da konuşabilme), coğrafi konum ve kurumsal norm girişimciliği. Tahıl Girişimi ve esir takasları bu kapasitenin somut çıktıları. 2026'da İstanbul'da R4 ve R4+E3 toplantılarına ev sahipliği yapılması da yeni formatlar kurma yeteneğini gösteriyor. Ancak Türkiye'nin bazı çatışmalarda doğrudan taraf olması (Suriye, Libya, Gazze) \"tarafsız arabulucu\" algısını sınırlıyor; bu yüzden Türkiye çoğu zaman arabuluculuktan çok kolaylaştırıcılık yapıyor.",
      en: "Türkiye's mediation capacity draws on three sources: multi-dimensional relations (being able to talk to both sides), geography and institutional norm entrepreneurship. The Grain Initiative and prisoner exchanges are concrete outcomes of this capacity. Hosting the R4 and R4+E3 meetings in Istanbul in 2026 also shows its ability to build new formats. However, being a direct party to some conflicts (Syria, Libya, Gaza) limits the perception of Türkiye as an impartial mediator, so Türkiye often acts more as a facilitator than a mediator."
    },
    olgular: [
      { tr: "24 Eylül 2010: Türkiye ve Finlandiya BM'de \"Arabuluculuk Yoluyla Barış\" girişimini başlattı. BM Arabuluculuk Dostlar Grubu (Bakanlık verisinde 54 ülke ve 8 örgüt).", en: "24 September 2010: Türkiye and Finland launched the 'Mediation for Peace' initiative at the UN. UN Group of Friends of Mediation (54 countries and 8 organisations in the Ministry's figures)." },
      { tr: "BM Genel Kurulu'nun arabuluculuk kararları: A/65/283 (2011, ilk karar), A/66/291 (2012), A/68/303 (2014), A/70/304 (2016).", en: "UN General Assembly resolutions on mediation: A/65/283 (2011, the first), A/66/291 (2012), A/68/303 (2014), A/70/304 (2016)." },
      { tr: "2014: AGİT Arabuluculuk Dostlar Grubu (Türkiye, Finlandiya, İsviçre). 24 Eylül 2018: İİT Arabuluculuk Temas Grubu.", en: "2014: OSCE Group of Friends of Mediation (Türkiye, Finland, Switzerland). 24 September 2018: OIC Mediation Contact Group." },
      { tr: "İstanbul Arabuluculuk Konferansları 2012'den beri düzenleniyor; 9.'su 23-24 Ekim 2026'da yapıldı.", en: "The Istanbul Mediation Conferences have been held since 2012; the 9th took place on 23–24 October 2026." },
      { tr: "23 Ekim 2026: İstanbul'da R4 (Türkiye, Mısır, Pakistan, Suudi Arabistan) ve R4+E3 (Almanya, Birleşik Krallık, Fransa) dışişleri bakanları toplantıları.", en: "23 October 2026: R4 (Türkiye, Egypt, Pakistan, Saudi Arabia) and R4+E3 (Germany, the UK, France) foreign ministers' meetings in Istanbul." }
    ],
    belgeler: [
      { ad: { tr: "Uyuşmazlıkların Barışçıl Çözümü ve Arabuluculuk (Bakanlık)", en: "Peaceful Settlement of Disputes and Mediation (Ministry, Turkish)" }, url: "https://www.mfa.gov.tr/uyusmazliklarin-cozumu-ve-arabuluculuk.tr.mfa" },
      { ad: { tr: "No: 204 — 9. İstanbul Arabuluculuk Konferansı", en: "No: 204 — 9th Istanbul Mediation Conference (Turkish)" }, url: "https://www.mfa.gov.tr/no_-204_-9-istanbul-arabuluculuk-konferansi-hk.tr.mfa" },
      { ad: { tr: "No: 203 — R4 ve R4+E3 toplantıları", en: "No: 203 — R4 and R4+E3 meetings (Turkish)" }, url: "https://www.mfa.gov.tr/no_-203_-r4-ve-r4_e3-disisleri-bakanlari-toplantilari-hk.tr.mfa" }
    ],
    karsiTez: {
      tr: "Bazı analistler Türkiye'nin arabuluculuk iddiasının, kendi çıkarlarının bulunduğu çatışmalarda (Libya, Suriye, Karabağ) taraf tutmasıyla gerildiğini savunur. Uluslararası literatürde Norveç, İsviçre ve Katar gibi \"tarafsız\" arabulucularla kıyaslandığında Türkiye'nin modeli daha çok güce dayalı (power mediation) olarak sınıflandırılır.",
      en: "Some analysts argue that Türkiye's claim to mediation is strained by its partiality in conflicts where it has interests (Libya, Syria, Karabakh). In the international literature, compared with 'neutral' mediators such as Norway, Switzerland and Qatar, Türkiye's model is often classified as power-based mediation."
    },
    sinavIpucu: {
      tr: "Arabuluculuk (mediation), kolaylaştırıcılık (facilitation) ve iyi niyet hizmetlerini (good offices) birbirinden ayır. Örnekleri bu kavramlara göre sınıflandırmak analitik puan kazandırır.",
      en: "Distinguish mediation, facilitation and good offices. Classifying examples according to these concepts earns analytical credit."
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
      tr: "Türkiye enerji arz güvenliğini; kaynak, güzergâh ve tedarikçi çeşitliliği yoluyla sağlamayı ve bölgesel bir enerji merkezi olmayı hedefler. Yerli üretimi (Sakarya gaz sahası) ve nükleer enerjiyi bu hedefin parçası olarak görür. Paris Anlaşması'na taraftır ve 2053 net sıfır emisyon hedefini açıklamıştır; 2026'da COP31'e ev sahipliği yapar.",
      en: "Türkiye aims to ensure security of energy supply through diversification of sources, routes and suppliers and to become a regional energy hub. It sees domestic production (the Sakarya gas field) and nuclear power as part of this goal. It is a party to the Paris Agreement, has announced a 2053 net zero emissions target and hosts COP31 in 2026."
    },
    analiz: {
      tr: "Türkiye, enerjide büyük ölçüde ithalata bağımlı bir ülke olmasına rağmen coğrafyası sayesinde bir transit ve ticaret merkezi olmaya aday. TANAP ve TürkAkım bu rolü güçlendirdi; ancak Akkuyu ve TürkAkım nedeniyle Rusya'ya bağımlılık tartışılıyor. Sakarya keşfi arz güvenliğine katkı sağlıyor. COP31 ev sahipliği, Türkiye'nin iklim diplomasisinde gelişmekte olan ülkeler ile gelişmiş ülkeler arasında köprü rolü üstlenme fırsatı; fakat kömüre bağımlılık ve 2053 hedefinin görece geç olması eleştiriliyor.",
      en: "Although Türkiye is largely import-dependent in energy, its geography makes it a candidate transit and trading hub. TANAP and TurkStream strengthened this role, but dependence on Russia because of Akkuyu and TurkStream is debated. The Sakarya discovery contributes to security of supply. Hosting COP31 is an opportunity for Türkiye to act as a bridge between developing and developed countries in climate diplomacy, but its reliance on coal and the relatively late 2053 target draw criticism."
    },
    olgular: [
      { tr: "TANAP Haziran 2018'de, TürkAkım Ocak 2020'de açıldı.", en: "TANAP opened in June 2018 and TurkStream in January 2020." },
      { tr: "Akkuyu Nükleer Santrali: 4 ünite, toplam 4.800 MW; Rusya ile 2010 hükümetlerarası anlaşmasına dayanıyor. Üçüncü santral için uluslararası rekabet sürüyor (Ekim 2026).", en: "Akkuyu Nuclear Power Plant: 4 units, 4,800 MW in total, based on a 2010 intergovernmental agreement with Russia. International competition for a third plant is ongoing (October 2026)." },
      { tr: "Sakarya gaz sahası: Ağustos 2020'de keşfedildi, Nisan 2023'te üretime başladı; Ağustos 2026 itibarıyla rezerv 785 milyar metreküp.", en: "Sakarya gas field: discovered in August 2020, production began in April 2023; reserves of 785 billion cubic metres as of August 2026." },
      { tr: "Eylül 2021: 2053 net sıfır hedefi BM Genel Kurulu'nda açıklandı; Paris Anlaşması Ekim 2021'de onaylandı.", en: "September 2021: the 2053 net zero target was announced at the UN General Assembly; the Paris Agreement was ratified in October 2021." },
      { tr: "COP31: 9-20 Kasım 2026, Antalya. COP Başkanı Bakan Murat Kurum; müzakere başkanlığı Avustralya'dan Chris Bowen'da.", en: "COP31: 9–20 November 2026, Antalya. COP President: Minister Murat Kurum; Australia's Chris Bowen presides over the negotiations." }
    ],
    belgeler: [
      { ad: { tr: "COP31 (Wikipedia)", en: "COP31 (Wikipedia)" }, url: "https://en.wikipedia.org/wiki/2026_United_Nations_Climate_Change_Conference" },
      { ad: { tr: "Türkiye'nin Dış Ekonomik İlişkileri (Bakanlık)", en: "Türkiye's External Economic Relations (Ministry, Turkish)" }, url: "https://www.mfa.gov.tr/turkiye_nin-dis-ekonomik-iliskileri.tr.mfa" },
      { ad: { tr: "Sakarya'da 785 milyar m³ rezerv (Ağustos 2026)", en: "785 bcm reserves at Sakarya (August 2026, Turkish)" }, url: "https://www.alomaliye.com/2026/08/21/karadeniz-gazi-kesfinin-6-yilinda-rezerv-785-milyar-metrekupe-ulasti/" }
    ],
    karsiTez: {
      tr: "AB ve bazı analistler, Türkiye'nin \"enerji merkezi\" hedefinin şeffaf bir piyasa ve fiyatlama yerine Rusya gazının yeniden ihracatına dönüşebileceği riskine dikkat çeker. İklim örgütleri ise kömür santrallerinin kapatılması için bir takvim olmamasını eleştirir.",
      en: "The EU and some analysts point to the risk that Türkiye's 'energy hub' goal could turn into re-exporting Russian gas rather than a transparent market and pricing mechanism. Climate organisations criticise the absence of a timetable for closing coal-fired plants."
    },
    sinavIpucu: {
      tr: "\"Enerji koridoru\" (transit) ile \"enerji merkezi\" (fiyat oluşan ticaret merkezi) farkını açıkla. COP31'deki özel düzenlemeyi (ev sahipliği Türkiye, müzakere başkanlığı Avustralya) doğru yaz.",
      en: "Explain the difference between an 'energy corridor' (transit) and an 'energy hub' (a trading centre where prices are set). State the special COP31 arrangement correctly (hosted by Türkiye, negotiations chaired by Australia)."
    },
    kavramlar: [{ tr: "Enerji güvenliği", en: "Energy security" }, { tr: "Enerji merkezi", en: "Energy hub" }, { tr: "İklim değişikliği", en: "Climate change" }],
    soru: {
      tr: "Türkiye'nin enerji merkezi olma hedefinin jeopolitik fırsat ve risklerini değerlendiriniz.",
      en: "Assess the geopolitical opportunities and risks of Türkiye's goal of becoming an energy hub."
    }
  }
];
