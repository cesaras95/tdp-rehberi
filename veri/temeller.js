// =============================================================
// TEMEL ULUSLARARASI İLİŞKİLER KONULARI (iki dilli)
// Benzetme: Bir dilin dil bilgisi kuralları. Politika dosyaları "kelimeler"se, bu kuramlar
// ve kavramlar onları anlamlı cümlelere dönüştüren kurallardır.
//
// Alanlar:
//   kategori : TEMEL_KATEGORI anahtarı
//   ozet     : kısa tanım
//   noktalar : bilinmesi gereken ana noktalar
//   temsilci : öne çıkan düşünürler / belgeler (çevrilmeyen özel adlar)
//   tdp      : Türk dış politikasına uygulama (sınavda farkı yaratan kısım)
//   ipucu    : sınav ipucu
//   soru     : örnek kompozisyon / mülakat sorusu
// =============================================================

const TEMEL_KATEGORI = {
  kuram: { tr: "Kuramlar", en: "Theories" },
  kavram: { tr: "Temel kavramlar", en: "Core concepts" },
  hukuk: { tr: "Uluslararası hukuk", en: "International law" },
  diplomasi: { tr: "Diplomasi", en: "Diplomacy" }
};

const TEMELLER = [
  // ---------- KURAMLAR ----------
  { id: "realizm", kategori: "kuram",
    baslik: { tr: "Realizm", en: "Realism" },
    ozet: { tr: "Uluslararası sistemi, merkezî bir otoritenin olmadığı (anarşik) ve devletlerin güç ve güvenlik peşinde koştuğu bir ortam olarak görür.", en: "Sees the international system as an environment without a central authority (anarchic) in which states pursue power and security." },
    noktalar: [
      { tr: "Temel aktör devlettir; ulusal çıkar güçle tanımlanır.", en: "The state is the main actor; the national interest is defined in terms of power." },
      { tr: "Klasik realizm insan doğasına, yapısal realizm (neorealizm) sistemin anarşik yapısına odaklanır.", en: "Classical realism focuses on human nature, structural realism (neorealism) on the anarchic structure of the system." },
      { tr: "Savunmacı realizm güvenliği, saldırgan realizm gücü en üst düzeye çıkarmayı öne çıkarır.", en: "Defensive realism stresses maximising security, offensive realism maximising power." },
      { tr: "İşbirliği mümkündür ama göreli kazanç kaygısı ve hile korkusu nedeniyle kırılgandır.", en: "Cooperation is possible but fragile because of concern about relative gains and fear of cheating." }
    ],
    temsilci: "Thukydides, Machiavelli, Hobbes, Hans Morgenthau (Politics Among Nations, 1948), Kenneth Waltz (Theory of International Politics, 1979), John Mearsheimer",
    tdp: { tr: "Türkiye'nin Soğuk Savaş'taki NATO'ya katılımı (Sovyet tehdidine karşı denge), Montrö ile Boğazlar üzerindeki kontrolü ve sınır güvenliği odaklı Suriye politikası realist bir mantıkla açıklanabilir.", en: "Türkiye's accession to NATO in the Cold War (balancing against the Soviet threat), its control of the Straits under Montreux and its border-security-focused Syria policy can be explained with realist logic." },
    ipucu: { tr: "Realizmi kullanırken \"güç dengesi\", \"anarşi\" ve \"ulusal çıkar\" kavramlarını açıkça kullan; ama tek bir kuramla açıklamanın sınırlarını da kabul et.", en: "When using realism, use the concepts of 'balance of power', 'anarchy' and 'national interest' explicitly, but also acknowledge the limits of explaining with a single theory." },
    soru: { tr: "Türkiye'nin NATO üyeliğini realist kuram çerçevesinde değerlendiriniz.", en: "Assess Türkiye's NATO membership within the framework of realist theory." } },
  { id: "liberalizm", kategori: "kuram",
    baslik: { tr: "Liberalizm", en: "Liberalism" },
    ozet: { tr: "Uluslararası kurumların, ekonomik karşılıklı bağımlılığın ve demokrasinin devletler arası işbirliğini artırıp çatışmayı azaltabileceğini savunur.", en: "Argues that international institutions, economic interdependence and democracy can increase cooperation between states and reduce conflict." },
    noktalar: [
      { tr: "Liberal kurumsalcılık (neoliberalizm): kurumlar bilgi paylaşımını artırır, hile maliyetini yükseltir ve işbirliğini kolaylaştırır.", en: "Liberal institutionalism (neoliberalism): institutions improve information sharing, raise the cost of cheating and facilitate cooperation." },
      { tr: "Demokratik barış kuramı: demokrasiler birbirleriyle savaşmama eğilimindedir.", en: "Democratic peace theory: democracies tend not to fight each other." },
      { tr: "Karşılıklı bağımlılık, savaşın maliyetini artırır; devlet dışı aktörler de önemlidir.", en: "Interdependence raises the cost of war; non-state actors matter too." },
      { tr: "Mutlak kazanç: taraflar göreli değil mutlak kazanca odaklanırsa işbirliği kolaylaşır.", en: "Absolute gains: cooperation is easier if parties focus on absolute rather than relative gains." }
    ],
    temsilci: "Immanuel Kant (Ebedî Barış, 1795), Woodrow Wilson (14 İlke), Robert Keohane ve Joseph Nye (Power and Interdependence, 1977), Michael Doyle",
    tdp: { tr: "AB ile Gümrük Birliği ve katılım süreci, ticaret ve enerji bağlarının dış politikayı şekillendirmesi (\"ticaret devleti\" yaklaşımı) ve Türkiye'nin BM ve AGİT'teki arabuluculuk girişimleri liberal bakışla açıklanabilir.", en: "The Customs Union and accession process with the EU, trade and energy ties shaping foreign policy (the 'trading state' approach) and Türkiye's mediation initiatives in the UN and OSCE can be explained from a liberal perspective." },
    ipucu: { tr: "Realizmle karşılaştırmak cevabı güçlendirir: aynı olayı (ör. Rusya ile enerji işbirliği) iki kuramla ayrı ayrı yorumla.", en: "Comparing with realism strengthens an answer: interpret the same event (e.g. energy cooperation with Russia) with each theory separately." },
    soru: { tr: "Ekonomik karşılıklı bağımlılık çatışmayı önler mi? Türkiye-Rusya ilişkileri örneğiyle tartışınız.", en: "Does economic interdependence prevent conflict? Discuss with the example of Türkiye–Russia relations." } },
  { id: "konstruktivizm", kategori: "kuram",
    baslik: { tr: "Konstrüktivizm (İnşacılık)", en: "Constructivism" },
    ozet: { tr: "Uluslararası ilişkilerin yalnızca maddi güçle değil; kimlikler, normlar, fikirler ve söylemlerle toplumsal olarak inşa edildiğini savunur.", en: "Argues that international relations are socially constructed not only by material power but also by identities, norms, ideas and discourses." },
    noktalar: [
      { tr: "\"Anarşi, devletlerin ondan ne yaptığıdır\": anarşinin anlamı devletlerin etkileşimine bağlıdır.", en: "'Anarchy is what states make of it': the meaning of anarchy depends on how states interact." },
      { tr: "Kimlik çıkarı belirler; çıkarlar sabit değildir.", en: "Identity shapes interests; interests are not fixed." },
      { tr: "Normlar (ör. insan hakları, kuvvet kullanma yasağı) devlet davranışını değiştirebilir.", en: "Norms (e.g. human rights, the prohibition on the use of force) can change state behaviour." }
    ],
    temsilci: "Alexander Wendt (\"Anarchy is What States Make of It\", 1992), Nicholas Onuf, Peter Katzenstein, Martha Finnemore",
    tdp: { tr: "Türkiye'nin \"köprü ülke\", \"Batılı\" ve \"Türk dünyasının parçası\" gibi kimlik tanımlarının dış politika önceliklerini nasıl değiştirdiği konstrüktivist bir soru olarak ele alınabilir. Kamu diplomasisi ve Türk Devletleri Teşkilatı'nın ortak kimlik vurgusu da bu çerçevede okunabilir.", en: "How Türkiye's identity definitions such as 'bridge country', 'Western' and 'part of the Turkic world' change its foreign policy priorities can be treated as a constructivist question. Public diplomacy and the Organization of Turkic States' emphasis on common identity can also be read in this framework." },
    ipucu: { tr: "Kimlik ve algı sorularında (kamu diplomasisi, ülke imajı) konstrüktivizm en işe yarayan kuramdır.", en: "In questions on identity and perception (public diplomacy, country image), constructivism is the most useful theory." },
    soru: { tr: "Kimlik, Türk dış politikasının önceliklerini nasıl etkiler?", en: "How does identity affect the priorities of Turkish foreign policy?" } },
  { id: "ingiliz-okulu", kategori: "kuram",
    baslik: { tr: "İngiliz Okulu ve eleştirel yaklaşımlar", en: "The English School and critical approaches" },
    ozet: { tr: "İngiliz Okulu, devletlerin anarşiye rağmen ortak kurallar ve kurumlarla bir \"uluslararası toplum\" oluşturduğunu savunur. Eleştirel kuramlar ise mevcut düzenin kimin çıkarına işlediğini sorgular.", en: "The English School argues that despite anarchy, states form an 'international society' through common rules and institutions. Critical theories question whose interests the existing order serves." },
    noktalar: [
      { tr: "İngiliz Okulu: uluslararası sistem, uluslararası toplum ve dünya toplumu ayrımı; diplomasi, uluslararası hukuk ve güç dengesi temel kurumlardır.", en: "English School: the distinction between international system, international society and world society; diplomacy, international law and the balance of power are core institutions." },
      { tr: "Marksist ve bağımlılık kuramları: merkez-çevre ilişkisi, ekonomik eşitsizlik.", en: "Marxist and dependency theories: the centre–periphery relationship, economic inequality." },
      { tr: "Eleştirel kuram ve postkolonyal yaklaşım: \"Kuram her zaman birileri ve bir amaç içindir.\"", en: "Critical theory and the postcolonial approach: 'Theory is always for someone and for some purpose.'" }
    ],
    temsilci: "Hedley Bull (The Anarchical Society, 1977), Martin Wight, Robert Cox, Immanuel Wallerstein",
    tdp: { tr: "Türkiye'nin \"Dünya beşten büyüktür\" söylemi ve BM Güvenlik Konseyi reformu çağrısı, mevcut küresel düzenin adaletini sorgulayan eleştirel bir bakışla; Afrika'daki \"sömürgecilik geçmişi olmayan ortak\" vurgusu postkolonyal bir çerçeveyle ilişkilendirilebilir.", en: "Türkiye's 'The world is bigger than five' discourse and its call for UN Security Council reform can be linked to a critical perspective questioning the fairness of the current global order; its emphasis in Africa on being a 'partner without a colonial past' can be linked to a postcolonial framework." },
    ipucu: { tr: "Kuram adlarını doğru yaz ve en az bir temsilciyi eseriyle an. Bir kuramı küçümseyen bir dille yazma; dengeli ol.", en: "Spell theory names correctly and cite at least one thinker with a work. Don't write dismissively about any theory; be balanced." },
    soru: { tr: "\"Dünya beşten büyüktür\" söylemini uluslararası düzenin meşruiyeti açısından değerlendiriniz.", en: "Assess the discourse 'The world is bigger than five' in terms of the legitimacy of the international order." } },
  { id: "jeopolitik", kategori: "kuram",
    baslik: { tr: "Jeopolitik", en: "Geopolitics" },
    ozet: { tr: "Coğrafyanın (konum, kaynaklar, ulaşım yolları) devletlerin gücünü ve dış politika seçeneklerini nasıl etkilediğini inceler.", en: "Studies how geography (location, resources, transport routes) affects states' power and foreign policy options." },
    noktalar: [
      { tr: "Kara hâkimiyeti (Heartland) ve kıyı kuşağı (Rimland) kuramları; deniz gücü kuramı.", en: "Land power (Heartland) and coastal belt (Rimland) theories; sea power theory." },
      { tr: "Boğazlar, kanallar ve enerji koridorları stratejik önem taşır.", en: "Straits, canals and energy corridors are of strategic importance." },
      { tr: "Coğrafya kader değildir; politika seçimleri coğrafyanın etkisini artırır ya da azaltır.", en: "Geography is not destiny; policy choices increase or reduce its effect." }
    ],
    temsilci: "Halford Mackinder (Heartland, 1904), Nicholas Spykman (Rimland), Alfred Thayer Mahan (deniz gücü), Zbigniew Brzezinski (The Grand Chessboard, 1997)",
    tdp: { tr: "Türkiye'nin Boğazlar, Orta Koridor, enerji koridoru rolü ve Asya ile Avrupa arasındaki konumu, dış politikadaki \"köprü\" ve \"merkez ülke\" tanımlarının jeopolitik temelidir. Çıkmış KİM ve MM sorularında jeopolitik konumun avantaj ve dezavantajları sık sorulmuştur.", en: "Türkiye's role regarding the Straits, the Middle Corridor and as an energy corridor, and its position between Asia and Europe, are the geopolitical basis of the 'bridge' and 'central country' definitions in its foreign policy. Past KİM and MM exams have often asked about the advantages and disadvantages of geopolitical position." },
    ipucu: { tr: "Jeopolitiği hem fırsat hem kırılganlık olarak anlat: konum bir avantajdır ama aynı zamanda istikrarsız komşuluk demektir.", en: "Present geopolitics as both an opportunity and a vulnerability: location is an advantage but also means an unstable neighbourhood." },
    soru: { tr: "Türkiye'nin jeopolitik konumunun dış politikaya sağladığı avantaj ve dezavantajları değerlendiriniz.", en: "Assess the advantages and disadvantages that Türkiye's geopolitical position brings to its foreign policy." } },

  // ---------- TEMEL KAVRAMLAR ----------
  { id: "egemenlik", kategori: "kavram",
    baslik: { tr: "Egemenlik ve Vestfalya düzeni", en: "Sovereignty and the Westphalian order" },
    ozet: { tr: "Egemenlik, bir devletin ülkesi üzerinde en üstün ve dış müdahaleden bağımsız otoriteye sahip olmasıdır. Modern devletler sisteminin başlangıcı genellikle 1648 Vestfalya Barışı'na dayandırılır.", en: "Sovereignty is a state's supreme authority over its territory, independent of outside interference. The modern state system is usually traced back to the Peace of Westphalia in 1648." },
    noktalar: [
      { tr: "İç egemenlik (ülke içindeki üstün otorite) ve dış egemenlik (bağımsızlık, diğer devletlerce tanınma).", en: "Internal sovereignty (supreme authority within the country) and external sovereignty (independence, recognition by other states)." },
      { tr: "Egemen eşitlik ve iç işlerine karışmama, BM Şartı'nın (md. 2) temel ilkeleridir.", en: "Sovereign equality and non-interference in internal affairs are basic principles of the UN Charter (Art. 2)." },
      { tr: "Küreselleşme, AB gibi uluslarüstü yapılar ve insan hakları normları egemenliği dönüştürmektedir.", en: "Globalisation, supranational structures such as the EU and human rights norms are transforming sovereignty." }
    ],
    temsilci: "Jean Bodin, Thomas Hobbes, Vestfalya Barışı (1648), Stephen Krasner (Sovereignty: Organized Hypocrisy, 1999)",
    tdp: { tr: "Kıbrıs'ta \"egemen eşitlik\" talebi, Ege'deki deniz yetki alanları tartışması ve Suriye'nin toprak bütünlüğüne yapılan vurgu, Türk dış politikasında egemenlik kavramının merkezî yerini gösterir. AB üyeliği ise egemenlik devri tartışmasını beraberinde getirir.", en: "The demand for 'sovereign equality' in Cyprus, the dispute over maritime jurisdiction areas in the Aegean and the emphasis on Syria's territorial integrity show the central place of sovereignty in Turkish foreign policy. EU membership brings with it the debate on the transfer of sovereignty." },
    ipucu: { tr: "\"Egemen eşitlik\" (Kıbrıs için) ile \"egemen eşitlik ilkesi\"ni (BM Şartı md. 2/1) karıştırma; bağlamını belirt.", en: "Don't confuse 'sovereign equality' (in the Cyprus context) with the 'principle of sovereign equality' (UN Charter Art. 2(1)); state the context." },
    soru: { tr: "Küreselleşme çağında devlet egemenliği aşınıyor mu? Türkiye örneğiyle tartışınız.", en: "Is state sovereignty eroding in the age of globalisation? Discuss with reference to Türkiye." } },
  { id: "guc-dengesi", kategori: "kavram",
    baslik: { tr: "Güç dengesi ve kutupluluk", en: "Balance of power and polarity" },
    ozet: { tr: "Güç dengesi, tek bir devletin ya da bloğun hâkimiyet kurmasını önlemek için devletlerin güçlerini ya da ittifaklarını ayarlamasıdır. Kutupluluk, sistemdeki büyük güçlerin sayısını ifade eder.", en: "The balance of power is states adjusting their power or alliances to prevent any single state or bloc from establishing dominance. Polarity refers to the number of great powers in the system." },
    noktalar: [
      { tr: "Dengeleme (balancing) ile peşine takılma (bandwagoning) farkı.", en: "The difference between balancing and bandwagoning." },
      { tr: "İç dengeleme (kendi gücünü artırma) ve dış dengeleme (ittifak kurma).", en: "Internal balancing (increasing one's own power) and external balancing (forming alliances)." },
      { tr: "Soğuk Savaş iki kutuplu, 1990'lar tek kutuplu kabul edilir; bugünkü düzen çok kutupluluğa geçiş olarak tartışılır.", en: "The Cold War is considered bipolar and the 1990s unipolar; today's order is debated as a transition to multipolarity." }
    ],
    temsilci: "Kenneth Waltz, Stephen Walt (tehdit dengesi, The Origins of Alliances, 1987), Henry Kissinger (A World Restored)",
    tdp: { tr: "Türkiye'nin NATO içinde kalırken Rusya, Çin ve Körfez ülkeleriyle çok yönlü ilişkiler kurması, çok kutuplu bir düzene uyum ve \"stratejik özerklik\" arayışı olarak yorumlanır. Savunma sanayiinde yerlileşme ise bir iç dengeleme örneğidir.", en: "Türkiye's multidimensional relations with Russia, China and the Gulf states while remaining in NATO are interpreted as adaptation to a multipolar order and a search for 'strategic autonomy'. Localisation in the defence industry is an example of internal balancing." },
    ipucu: { tr: "Stephen Walt'ın \"tehdit dengesi\" kavramı, Türkiye'nin neden en güçlü değil en tehditkâr gördüğü aktöre karşı dengelediğini açıklamakta kullanışlıdır.", en: "Stephen Walt's 'balance of threat' concept is useful for explaining why Türkiye balances against the actor it sees as most threatening rather than the most powerful." },
    soru: { tr: "Çok kutuplu bir dünyada Türkiye'nin stratejik özerklik arayışını değerlendiriniz.", en: "Assess Türkiye's search for strategic autonomy in a multipolar world." } },
  { id: "guvenlik-ikilemi", kategori: "kavram",
    baslik: { tr: "Güvenlik ikilemi ve caydırıcılık", en: "The security dilemma and deterrence" },
    ozet: { tr: "Güvenlik ikilemi, bir devletin kendi güvenliğini artırmak için attığı adımların diğerlerince tehdit algılanması ve karşılıklı silahlanmaya yol açmasıdır. Caydırıcılık, rakibi saldırının maliyetinin kazancından yüksek olacağına ikna etmektir.", en: "The security dilemma is when steps a state takes to increase its own security are perceived by others as a threat, leading to mutual arming. Deterrence is persuading an adversary that the cost of attacking would exceed the gain." },
    noktalar: [
      { tr: "Cezalandırma yoluyla caydırma ile engelleme (inkâr) yoluyla caydırma farkı.", en: "The difference between deterrence by punishment and deterrence by denial." },
      { tr: "Nükleer caydırıcılık ve NATO'nun nükleer paylaşım düzenlemeleri.", en: "Nuclear deterrence and NATO's nuclear sharing arrangements." },
      { tr: "Güven artırıcı önlemler güvenlik ikilemini hafifletmenin başlıca aracıdır.", en: "Confidence-building measures are the main tool for easing the security dilemma." }
    ],
    temsilci: "John Herz (1950), Robert Jervis (Perception and Misperception, 1976), Thomas Schelling (Arms and Influence, 1966)",
    tdp: { tr: "Ege'de Türkiye ile Yunanistan arasındaki silahlanma ve hava sahası gerginlikleri tipik bir güvenlik ikilemidir; 2023 sonrası \"pozitif gündem\" ve güven artırıcı önlemler bu ikilemi yönetme çabasıdır. TBMM'nin 1995 casus belli kararı ise bir caydırıcılık örneğidir.", en: "Arms build-ups and airspace tensions between Türkiye and Greece in the Aegean are a typical security dilemma; the 'positive agenda' and confidence-building measures after 2023 are efforts to manage it. The Grand National Assembly's 1995 casus belli resolution is an example of deterrence." },
    ipucu: { tr: "Güvenlik ikilemini anlatırken \"niyet belirsizliği\" kelimesini kullan: sorun silahın kendisi değil, niyetin bilinmemesidir.", en: "When explaining the security dilemma, use the phrase 'uncertainty of intentions': the problem is not the weapon itself but not knowing the intention." },
    soru: { tr: "Türk-Yunan ilişkilerini güvenlik ikilemi kavramıyla açıklayınız; ikilemden çıkış yolları nelerdir?", en: "Explain Turkish–Greek relations with the concept of the security dilemma; what are the ways out of it?" } },
  { id: "kolektif-guvenlik", kategori: "kavram",
    baslik: { tr: "Kolektif güvenlik ve kolektif savunma", en: "Collective security and collective defence" },
    ozet: { tr: "Kolektif güvenlik, bir sistemin tüm üyelerinin içlerinden saldırgan olana karşı birlikte hareket etmesidir (Milletler Cemiyeti, BM). Kolektif savunma ise bir ittifakın dışarıdan gelen bir tehdide karşı üyelerini birlikte savunmasıdır (NATO md. 5).", en: "Collective security is all members of a system acting together against whichever of them becomes an aggressor (League of Nations, UN). Collective defence is an alliance defending its members together against an external threat (NATO Art. 5)." },
    noktalar: [
      { tr: "BM Şartı VII. Bölüm: Güvenlik Konseyi barışın tehdidi halinde zorlayıcı önlemlere karar verebilir.", en: "UN Charter Chapter VII: the Security Council can decide on enforcement measures in the event of a threat to the peace." },
      { tr: "NATO Antlaşması md. 4 istişareyi, md. 5 kolektif savunmayı düzenler.", en: "Article 4 of the NATO Treaty provides for consultation, Article 5 for collective defence." },
      { tr: "Kolektif güvenliğin zayıf noktası büyük güçlerin veto yetkisidir.", en: "The weak point of collective security is the great powers' veto." }
    ],
    temsilci: "Milletler Cemiyeti Misakı (1919), BM Şartı (1945), Kuzey Atlantik Antlaşması (1949), Inis Claude",
    tdp: { tr: "Türkiye 1932'de Milletler Cemiyeti'ne katıldı, 1945'te BM'nin kurucu üyesi oldu, 1952'den beri NATO üyesi. NATO md. 4 istişaresine 2003–2020 arasında beş kez başvurarak en çok başvuran müttefik oldu. BMGK'nın tıkanması Türkiye'nin reform çağrısının gerekçesidir.", en: "Türkiye joined the League of Nations in 1932, became a founding member of the UN in 1945 and has been a NATO member since 1952. It requested NATO Article 4 consultations five times between 2003 and 2020, more than any other ally. Security Council paralysis is the rationale for Türkiye's reform call." },
    ipucu: { tr: "İki kavramı karıştırmak sık yapılan bir hatadır: NATO kolektif güvenlik örgütü değil, kolektif savunma ittifakıdır.", en: "Confusing the two concepts is a common mistake: NATO is a collective defence alliance, not a collective security organisation." },
    soru: { tr: "Kolektif güvenlik sistemi neden çoğu zaman beklentileri karşılayamamıştır? Güncel örneklerle tartışınız.", en: "Why has the collective security system often failed to meet expectations? Discuss with current examples." } },
  { id: "yumusak-guc", kategori: "kavram",
    baslik: { tr: "Sert, yumuşak ve akıllı güç", en: "Hard, soft and smart power" },
    ozet: { tr: "Sert güç askerî ve ekonomik zorlama; yumuşak güç kültür, değerler ve politikaların çekiciliğiyle ikna; akıllı güç ise ikisinin bağlama göre birlikte kullanılmasıdır.", en: "Hard power is military and economic coercion; soft power is persuasion through the attractiveness of culture, values and policies; smart power is using both together depending on the context." },
    noktalar: [
      { tr: "Yumuşak gücün üç kaynağı: kültür, siyasi değerler ve meşru görülen dış politika.", en: "The three sources of soft power: culture, political values and a foreign policy seen as legitimate." },
      { tr: "Yumuşak güç araçları: kamu diplomasisi, eğitim bursları, kalkınma yardımı, medya, ulaştırma ağları.", en: "Tools of soft power: public diplomacy, scholarships, development aid, media, transport networks." },
      { tr: "Ekim 2026 KİM yazılı sınavında aday aktarımlarına göre bu üç kavram soruldu.", en: "According to candidate reports, these three concepts were asked in the October 2026 KİM written exam." }
    ],
    temsilci: "Joseph Nye (Bound to Lead, 1990; Soft Power, 2004; \"smart power\")",
    tdp: { tr: "Türkiye'nin yumuşak gücü: TİKA, Yunus Emre Enstitüsü, Türkiye Bursları, Maarif Vakfı, THY ağı, diziler ve insani yardım. Sert gücü: savunma sanayii, sınır ötesi harekâtlar, NATO'nun ikinci büyük ordusu. Afrika ve Balkanlar'da ikisinin birlikte kullanılması akıllı güç örneğidir.", en: "Türkiye's soft power: TİKA, the Yunus Emre Institute, Türkiye Scholarships, the Maarif Foundation, the Turkish Airlines network, TV series and humanitarian aid. Its hard power: the defence industry, cross-border operations, NATO's second-largest army. Using both together in Africa and the Balkans is an example of smart power." },
    ipucu: { tr: "Kavramı Nye'a ve eserine atfet, sonra her güç türü için Türkiye'den en az bir somut kurum ya da olay ver.", en: "Attribute the concept to Nye and his work, then give at least one concrete Turkish institution or event for each type of power." },
    soru: { tr: "Yumuşak, sert ve akıllı güç kavramlarını açıklayarak Türk dış politikasındaki rollerini değerlendiriniz.", en: "Explain the concepts of soft, hard and smart power and assess their roles in Turkish foreign policy." } },
  { id: "karsilikli-bagimlilik", kategori: "kavram",
    baslik: { tr: "Karşılıklı bağımlılık ve küreselleşme", en: "Interdependence and globalisation" },
    ozet: { tr: "Devletlerin ekonomik, enerji ve teknoloji alanlarında birbirine bağımlı hâle gelmesi; bu bağımlılığın hem işbirliği hem de baskı aracı olabilmesidir.", en: "States becoming dependent on each other in the economy, energy and technology; this dependence can be both a basis for cooperation and a tool of pressure." },
    noktalar: [
      { tr: "Duyarlılık (sensitivity) ve kırılganlık (vulnerability) ayrımı.", en: "The distinction between sensitivity and vulnerability." },
      { tr: "\"Silahlaştırılmış karşılıklı bağımlılık\": yaptırımlar, enerji kesintileri, tedarik zinciri baskısı.", en: "'Weaponised interdependence': sanctions, energy cut-offs, supply chain pressure." },
      { tr: "Bağlantısallık (connectivity): ulaştırma ve enerji koridorlarının dış politikadaki yükselen yeri.", en: "Connectivity: the rising place of transport and energy corridors in foreign policy." }
    ],
    temsilci: "Robert Keohane ve Joseph Nye (1977), Henry Farrell ve Abraham Newman (\"Weaponized Interdependence\", 2019)",
    tdp: { tr: "Türkiye'nin Rusya'ya enerji bağımlılığı, Çin'den yüksek ithalat ve AB ile Gümrük Birliği karşılıklı bağımlılığın farklı yüzleridir. Orta Koridor ve Kalkınma Yolu projeleri bağlantısallığı bir dış politika aracına dönüştürme çabasıdır.", en: "Türkiye's energy dependence on Russia, high imports from China and the Customs Union with the EU are different faces of interdependence. The Middle Corridor and the Development Road projects are efforts to turn connectivity into a foreign policy tool." },
    ipucu: { tr: "\"Kırılganlık\" kavramıyla Türkiye'nin enerji kaynaklarını çeşitlendirme politikasını (TANAP, LNG, Sakarya gazı) ilişkilendir.", en: "Link the concept of 'vulnerability' to Türkiye's policy of diversifying energy sources (TANAP, LNG, Sakarya gas)." },
    soru: { tr: "Bağlantısallık projeleri Türkiye'nin dış politikasında nasıl bir güç kaynağı olabilir?", en: "How can connectivity projects become a source of power in Türkiye's foreign policy?" } },
  { id: "cok-taraflilik", kategori: "kavram",
    baslik: { tr: "Çok taraflılık ve küresel yönetişim", en: "Multilateralism and global governance" },
    ozet: { tr: "Ortak sorunların (iklim, salgın, ticaret, güvenlik) üç ve daha fazla devletin katıldığı kurallar ve kurumlar aracılığıyla çözülmesidir.", en: "Solving common problems (climate, pandemics, trade, security) through rules and institutions in which three or more states take part." },
    noktalar: [
      { tr: "Uluslararası rejimler: belirli bir alanda ilke, norm, kural ve karar alma usulleri bütünü.", en: "International regimes: sets of principles, norms, rules and decision-making procedures in a given area." },
      { tr: "Kurumların meşruiyet ve temsil krizi; \"minilateral\" (küçük gruplu) işbirliklerinin yükselişi.", en: "The legitimacy and representation crisis of institutions; the rise of 'minilateral' (small-group) cooperation." },
      { tr: "G20, BRICS, ŞİÖ gibi yeni platformlar ile BM, DTÖ, IMF gibi kurumlar arasındaki ilişki.", en: "The relationship between new platforms such as the G20, BRICS and the SCO and institutions such as the UN, WTO and IMF." }
    ],
    temsilci: "Stephen Krasner (uluslararası rejimler tanımı, 1982), John Ruggie, Robert Keohane (After Hegemony, 1984)",
    tdp: { tr: "Türkiye G20, NATO, AGİT, Avrupa Konseyi, İİT ve Türk Devletleri Teşkilatı üyesidir; BM'de Arabuluculuk Dostlar Grubu'nu Finlandiya ile kurmuş, COP31'e ev sahipliği yapmıştır. \"Dünya beşten büyüktür\" söylemi çok taraflı sistemin reformunu savunur.", en: "Türkiye is a member of the G20, NATO, the OSCE, the Council of Europe, the OIC and the Organization of Turkic States; it founded the Group of Friends of Mediation at the UN with Finland and hosted COP31. The 'The world is bigger than five' discourse advocates reform of the multilateral system." },
    ipucu: { tr: "Çıkmış sorularda \"uluslararası sistem ve çok taraflılık\" teması özellikle MM sınavında sık geldi; reform ve meşruiyet kavramlarını hazır tut.", en: "The theme of 'the international system and multilateralism' has come up often, especially in the MM exam; have the concepts of reform and legitimacy ready." },
    soru: { tr: "Çok taraflılığın içinde bulunduğu krizi ve Türkiye'nin bu krize yaklaşımını değerlendiriniz.", en: "Assess the crisis facing multilateralism and Türkiye's approach to it." } },
  { id: "insan-guvenligi", kategori: "kavram",
    baslik: { tr: "İnsan güvenliği ve Koruma Sorumluluğu", en: "Human security and the Responsibility to Protect" },
    ozet: { tr: "İnsan güvenliği, güvenliğin merkezine devleti değil bireyi koyar (korkudan ve yoksulluktan kurtulma). Koruma Sorumluluğu (R2P), devletin halkını soykırım, savaş suçları, etnik temizlik ve insanlığa karşı suçlardan koruma yükümlülüğüdür.", en: "Human security puts the individual rather than the state at the centre of security (freedom from fear and want). The Responsibility to Protect (R2P) is a state's obligation to protect its population from genocide, war crimes, ethnic cleansing and crimes against humanity." },
    noktalar: [
      { tr: "İnsan güvenliği kavramı 1994 BM Kalkınma Programı İnsani Gelişme Raporu ile yaygınlaştı.", en: "The concept of human security became widespread with the 1994 UNDP Human Development Report." },
      { tr: "R2P, 2005 BM Dünya Zirvesi Sonuç Belgesi'nde kabul edildi; üç sütunu: devletin sorumluluğu, uluslararası yardım, zamanında ve kararlı müdahale.", en: "R2P was adopted in the 2005 UN World Summit Outcome Document; its three pillars: the state's responsibility, international assistance, timely and decisive response." },
      { tr: "Eleştiri: R2P'nin seçici uygulanması ve egemenlikle gerilimi (ör. 2011 Libya).", en: "Criticism: selective application of R2P and its tension with sovereignty (e.g. Libya 2011)." }
    ],
    temsilci: "UNDP İnsani Gelişme Raporu (1994), ICISS raporu (2001), Gareth Evans",
    tdp: { tr: "Türkiye'nin dünyanın en çok mülteci barındıran ülkelerinden biri olması, insani yardım harcamaları ve Gazze'deki insani krize ilişkin tutumu insan güvenliği perspektifiyle okunabilir. Türkiye, Suriye ve Gazze'de uluslararası toplumun koruma yükümlülüğünü yerine getirmediğini eleştirir.", en: "Türkiye being one of the countries hosting the most refugees in the world, its humanitarian aid spending and its position on the humanitarian crisis in Gaza can be read from a human security perspective. Türkiye criticises the international community for failing to fulfil its responsibility to protect in Syria and Gaza." },
    ipucu: { tr: "İnsani yardım sorularında (KİM'de sık sorulur) insan güvenliği kavramı cevaba kuramsal bir çerçeve kazandırır.", en: "In questions on humanitarian aid (often asked in the KİM exam), the concept of human security gives the answer a theoretical framework." },
    soru: { tr: "İnsani ve kalkınma yardımlarının bir dış politika aracı olarak önemini insan güvenliği kavramıyla değerlendiriniz.", en: "Assess the importance of humanitarian and development aid as a foreign policy tool using the concept of human security." } },

  // ---------- ULUSLARARASI HUKUK ----------
  { id: "bm-sarti", kategori: "hukuk",
    baslik: { tr: "BM Şartı'nın temel ilkeleri", en: "The core principles of the UN Charter" },
    ozet: { tr: "26 Haziran 1945'te San Francisco'da imzalanan ve 24 Ekim 1945'te yürürlüğe giren BM Şartı, uluslararası düzenin temel hukuki çerçevesidir.", en: "The UN Charter, signed in San Francisco on 26 June 1945 and in force since 24 October 1945, is the basic legal framework of the international order." },
    noktalar: [
      { tr: "md. 2(1): egemen eşitlik · md. 2(3): uyuşmazlıkların barışçıl çözümü · md. 2(4): kuvvet kullanma ve kuvvet kullanma tehdidi yasağı · md. 2(7): iç işlerine karışmama.", en: "Art. 2(1): sovereign equality · Art. 2(3): peaceful settlement of disputes · Art. 2(4): prohibition of the threat or use of force · Art. 2(7): non-interference in domestic affairs." },
      { tr: "Kuvvet kullanma yasağının iki istisnası: md. 51 meşru müdafaa ve VII. Bölüm kapsamında Güvenlik Konseyi yetkilendirmesi.", en: "The two exceptions to the prohibition on the use of force: Art. 51 self-defence and Security Council authorisation under Chapter VII." },
      { tr: "md. 33: barışçıl çözüm yolları (müzakere, soruşturma, arabuluculuk, uzlaştırma, tahkim, yargısal çözüm).", en: "Art. 33: means of peaceful settlement (negotiation, enquiry, mediation, conciliation, arbitration, judicial settlement)." },
      { tr: "Güvenlik Konseyi: 5 daimi (veto hakkı olan), 10 geçici üye.", en: "Security Council: 5 permanent members (with veto power) and 10 non-permanent members." }
    ],
    temsilci: "BM Şartı (1945), BM Genel Kurulu'nun 2625 sayılı Dostane İlişkiler Bildirgesi (1970)",
    tdp: { tr: "Türkiye sınır ötesi harekâtlarını md. 51 meşru müdafaa hakkına ve BMGK'nın terörle mücadele kararlarına dayandırır. Kıbrıs ve Ege'de \"barışçıl çözüm\" ve \"hakkaniyet\" vurgusu md. 33 çerçevesindedir. Türkiye 2009–2010'da BMGK geçici üyesi oldu.", en: "Türkiye bases its cross-border operations on the right of self-defence under Art. 51 and on Security Council counter-terrorism resolutions. Its emphasis on 'peaceful settlement' and 'equity' in Cyprus and the Aegean falls within the framework of Art. 33. Türkiye was a non-permanent member of the Security Council in 2009–2010." },
    ipucu: { tr: "Madde numarasını doğru vermek jüride güçlü izlenim bırakır: 2(4) kuvvet yasağı, 51 meşru müdafaa, VII. Bölüm zorlayıcı önlemler.", en: "Citing article numbers correctly makes a strong impression on the panel: 2(4) prohibition of force, 51 self-defence, Chapter VII enforcement measures." },
    soru: { tr: "BM Şartı'ndaki kuvvet kullanma yasağı ve istisnalarını güncel örneklerle açıklayınız.", en: "Explain the prohibition on the use of force in the UN Charter and its exceptions with current examples." } },
  { id: "devlet-tanima", kategori: "hukuk",
    baslik: { tr: "Devletin unsurları ve tanınma", en: "Elements of statehood and recognition" },
    ozet: { tr: "1933 Montevideo Sözleşmesi'ne göre devletin unsurları: sürekli bir nüfus, belirli bir ülke, hükümet ve diğer devletlerle ilişki kurma kapasitesi. Tanınma, bir devletin başka bir varlığı devlet olarak kabul ettiğini beyan etmesidir.", en: "Under the 1933 Montevideo Convention, the elements of statehood are a permanent population, a defined territory, a government and the capacity to enter into relations with other states. Recognition is a state declaring that it accepts another entity as a state." },
    noktalar: [
      { tr: "Kurucu (constitutive) teori: devlet tanınmayla var olur. Açıklayıcı (declaratory) teori: tanınma var olan bir durumu kabul eder; yaygın görüş budur.", en: "Constitutive theory: a state exists through recognition. Declaratory theory: recognition acknowledges an existing situation; this is the prevailing view." },
      { tr: "Tanıma açık (resmî açıklama) ya da örtülü (diplomatik ilişki kurma) olabilir; devletin tanınması ile hükümetin tanınması ayrıdır.", en: "Recognition can be express (a formal statement) or implied (establishing diplomatic relations); recognising a state differs from recognising a government." },
      { tr: "Halkların kendi kaderini tayin hakkı ile toprak bütünlüğü ilkesi arasındaki gerilim.", en: "The tension between the right of peoples to self-determination and the principle of territorial integrity." }
    ],
    temsilci: "Montevideo Sözleşmesi (1933), Hersch Lauterpacht, UAD'nin Kosova danışma görüşü (2010)",
    tdp: { tr: "KKTC'yi yalnızca Türkiye'nin tanıması, Kosova'yı 2008'de ilk tanıyanlardan olması ve Filistin Devleti'ni 1988'de tanıması, tanınmanın siyasi bir tercih olduğunu gösterir. Türkiye, Kıbrıs'ta iki egemen eşit devletin tanınmasını savunur.", en: "Türkiye being the only country to recognise the TRNC, being among the first to recognise Kosovo in 2008 and recognising the State of Palestine in 1988 show that recognition is a political choice. Türkiye advocates the recognition of two sovereign equal states in Cyprus." },
    ipucu: { tr: "Kurucu ve açıklayıcı teori ayrımını tek cümleyle ver, sonra bir Türkiye örneğine geç. Taraf tutmadan hukuki dili koru.", en: "Give the distinction between constitutive and declaratory theory in one sentence, then move to a Türkiye example. Keep a neutral legal tone." },
    soru: { tr: "Uluslararası hukukta tanınma kavramını Kıbrıs ve Kosova örnekleri üzerinden karşılaştırınız.", en: "Compare the concept of recognition in international law through the examples of Cyprus and Kosovo." } },
  { id: "antlasmalar", kategori: "hukuk",
    baslik: { tr: "Antlaşmalar hukuku", en: "The law of treaties" },
    ozet: { tr: "1969 Viyana Antlaşmalar Hukuku Sözleşmesi, devletler arasındaki yazılı antlaşmaların yapılması, yorumu, geçersizliği ve sona ermesine ilişkin kuralları düzenler.", en: "The 1969 Vienna Convention on the Law of Treaties sets the rules on the conclusion, interpretation, invalidity and termination of written treaties between states." },
    noktalar: [
      { tr: "Ahde vefa (pacta sunt servanda, md. 26): yürürlükteki antlaşmalar iyi niyetle uygulanır.", en: "Pacta sunt servanda (Art. 26): treaties in force must be performed in good faith." },
      { tr: "Emredici kural (jus cogens, md. 53): buna aykırı antlaşma geçersizdir (ör. soykırım, köleliğin yasaklanması).", en: "Peremptory norm (jus cogens, Art. 53): a treaty conflicting with it is void (e.g. prohibition of genocide and slavery)." },
      { tr: "Çekince, onay, katılma; koşulların temelden değişmesi (rebus sic stantibus, md. 62).", en: "Reservations, ratification, accession; fundamental change of circumstances (rebus sic stantibus, Art. 62)." },
      { tr: "Türkiye'de antlaşmalar Anayasa md. 90 uyarınca TBMM'nin uygun bulmasıyla onaylanır ve kanun hükmündedir.", en: "In Türkiye, treaties are ratified with the approval of the Grand National Assembly under Article 90 of the Constitution and have the force of law." }
    ],
    temsilci: "Viyana Antlaşmalar Hukuku Sözleşmesi (1969)",
    tdp: { tr: "Lozan (1923), Montrö (1936) ve 1960 Garanti Antlaşması, Türkiye'nin hukuki tezlerinin temelidir; Türkiye bu antlaşmaların ahde vefa ilkesiyle uygulanmasını savunur. Türkiye 1969 Viyana Sözleşmesi'ne taraf değildir, ancak sözleşmenin örf ve âdet hukukunu yansıtan kuralları genel olarak bağlayıcı kabul edilir.", en: "Lausanne (1923), Montreux (1936) and the 1960 Treaty of Guarantee are the basis of Türkiye's legal arguments; Türkiye insists on their implementation under pacta sunt servanda. Türkiye is not a party to the 1969 Vienna Convention, but the rules of the Convention that reflect customary law are generally regarded as binding." },
    ipucu: { tr: "Latince terimleri doğru yaz ve Türkçe karşılığıyla birlikte ver (ahde vefa / pacta sunt servanda).", en: "Spell the Latin terms correctly and give them together with their Turkish equivalent (ahde vefa / pacta sunt servanda)." },
    soru: { tr: "Ahde vefa ilkesi ile koşulların temelden değişmesi ilkesi arasındaki gerilimi bir Türk dış politikası örneğiyle tartışınız.", en: "Discuss the tension between pacta sunt servanda and the principle of fundamental change of circumstances with an example from Turkish foreign policy." } },

  // ---------- DİPLOMASİ ----------
  { id: "diplomasi-turleri", kategori: "diplomasi",
    baslik: { tr: "Diplomasi türleri", en: "Types of diplomacy" },
    ozet: { tr: "Diplomasi, devletlerin barışçıl yollarla ilişkilerini yürütme ve çıkarlarını koruma sanatıdır. Günümüzde klasik ikili diplomasinin yanında çok sayıda uzmanlaşmış türü vardır.", en: "Diplomacy is the art of conducting relations between states and protecting their interests by peaceful means. Today there are many specialised types alongside classical bilateral diplomacy." },
    noktalar: [
      { tr: "İkili ve çok taraflı diplomasi; zirve diplomasisi; mekik diplomasisi.", en: "Bilateral and multilateral diplomacy; summit diplomacy; shuttle diplomacy." },
      { tr: "Önleyici diplomasi, arabuluculuk ve kolaylaştırıcılık.", en: "Preventive diplomacy, mediation and facilitation." },
      { tr: "Ekonomik ve ticari diplomasi, enerji diplomasisi, iklim diplomasisi, sağlık diplomasisi.", en: "Economic and commercial diplomacy, energy diplomacy, climate diplomacy, health diplomacy." },
      { tr: "Dijital diplomasi ve insani diplomasi.", en: "Digital diplomacy and humanitarian diplomacy." }
    ],
    temsilci: "Harold Nicolson (Diplomacy, 1939), Henry Kissinger (Diplomacy, 1994), 1961 Viyana Diplomatik İlişkiler Sözleşmesi",
    tdp: { tr: "Türkiye'nin Karadeniz Tahıl Girişimi'ndeki rolü kolaylaştırıcılık, İstanbul Arabuluculuk Konferansları arabuluculuk, Afrika ve Latin Amerika açılımları ekonomik diplomasi, COP31 ev sahipliği iklim diplomasisi örnekleridir.", en: "Türkiye's role in the Black Sea Grain Initiative is an example of facilitation, the Istanbul Mediation Conferences of mediation, the Africa and Latin America openings of economic diplomacy and hosting COP31 of climate diplomacy." },
    ipucu: { tr: "Bir diplomasi türünü tanımladıktan sonra mutlaka Türkiye'den yılıyla bir örnek ver.", en: "After defining a type of diplomacy, always give a Türkiye example with its year." },
    soru: { tr: "Ekonomik diplomasinin dış politikadaki artan önemini Türkiye örneğiyle değerlendiriniz.", en: "Assess the growing importance of economic diplomacy in foreign policy with the example of Türkiye." } },
  { id: "kamu-diplomasisi", kategori: "diplomasi",
    baslik: { tr: "Kamu diplomasisi ve kültürel diplomasi", en: "Public diplomacy and cultural diplomacy" },
    ozet: { tr: "Kamu diplomasisi, bir devletin yabancı hükümetlerle değil doğrudan yabancı kamuoylarıyla iletişim kurarak ülkesinin politikalarını ve imajını anlatmasıdır. Kültürel diplomasi bunun kültür, sanat, dil ve eğitim üzerinden yürüyen koludur.", en: "Public diplomacy is a state communicating its policies and image directly to foreign publics rather than to foreign governments. Cultural diplomacy is its branch conducted through culture, art, language and education." },
    noktalar: [
      { tr: "Araçlar: medya ve dijital iletişim, eğitim ve değişim programları, burslar, kültür merkezleri, uluslararası etkinlikler, diaspora.", en: "Tools: media and digital communication, education and exchange programmes, scholarships, cultural centres, international events, the diaspora." },
      { tr: "Ülke markası (nation branding) ve algı yönetimi kavramlarıyla ilişkilidir.", en: "It is related to the concepts of nation branding and perception management." },
      { tr: "Başarının ölçütü güvenilirliktir; propaganda olarak algılanan iletişim ters etki yaratır.", en: "Its measure of success is credibility; communication perceived as propaganda backfires." }
    ],
    temsilci: "Edmund Gullion (kavramı 1965'te ortaya attı), Joseph Nye, Nicholas Cull",
    tdp: { tr: "Türkiye'de Kamu Diplomasisi Koordinatörlüğü 2010'da kuruldu (sonra Cumhurbaşkanlığı İletişim Başkanlığı bünyesine geçti). Yunus Emre Enstitüsü, Türkiye Bursları, Maarif Vakfı, TRT World ve İstanbul'un uluslararası etkinliklere ev sahipliği başlıca araçlardır. Çıkmış KİM sorularında kamu ve kültürel diplomasi en sık sorulan temalardandır.", en: "Türkiye's Office of Public Diplomacy was set up in 2010 (later moved under the Presidency's Directorate of Communications). The Yunus Emre Institute, Türkiye Scholarships, the Maarif Foundation, TRT World and Istanbul hosting international events are the main tools. Public and cultural diplomacy are among the most frequent themes in past KİM exams." },
    ipucu: { tr: "Kamu diplomasisini propagandadan ayıran unsuru (iki yönlü iletişim ve güvenilirlik) mutlaka belirt; ardından bir konsolosluk görevlisinin bu süreçteki rolünü (vatandaşlar, diaspora, yerel kamuoyu) anlat.", en: "Always state what distinguishes public diplomacy from propaganda (two-way communication and credibility); then describe the role of a consular officer in this process (citizens, the diaspora, the local public)." },
    soru: { tr: "Kamu diplomasisinin tanımını, araçlarını ve Türk dış politikasındaki rolünü değerlendiriniz.", en: "Assess the definition and tools of public diplomacy and its role in Turkish foreign policy." } },
  { id: "diplomatik-konsuler", kategori: "diplomasi",
    baslik: { tr: "Diplomatik ve konsüler ilişkiler", en: "Diplomatic and consular relations" },
    ozet: { tr: "Diplomatik ilişkiler 1961, konsüler ilişkiler 1963 Viyana Sözleşmeleri ile düzenlenir. Büyükelçilikler devletler arası siyasi temsili, başkonsolosluklar vatandaşlara hizmet ve ticari, idari işleri yürütür.", en: "Diplomatic relations are governed by the 1961 and consular relations by the 1963 Vienna Conventions. Embassies handle political representation between states; consulates general provide services to citizens and handle commercial and administrative matters." },
    noktalar: [
      { tr: "1961 VDİS: agreman (md. 4), istenmeyen kişi (persona non grata, md. 9), misyonun dokunulmazlığı (md. 22), diplomatik ajanın dokunulmazlığı ve yargı bağışıklığı (md. 29, 31).", en: "1961 VCDR: agrément (Art. 4), persona non grata (Art. 9), inviolability of the mission (Art. 22), inviolability and immunity from jurisdiction of the diplomatic agent (Arts 29, 31)." },
      { tr: "1963 VKİS: konsolosluk görevleri (md. 5), tutuklanan vatandaşla iletişim ve ziyaret hakkı (md. 36), görev eylemleriyle sınırlı bağışıklık.", en: "1963 VCCR: consular functions (Art. 5), the right to communicate with and visit a detained national (Art. 36), immunity limited to official acts." },
      { tr: "Mütekabiliyet ilkesi diplomatik ve konsüler ilişkilerin işleyişinde temel rol oynar.", en: "The principle of reciprocity plays a key role in how diplomatic and consular relations work." }
    ],
    temsilci: "Viyana Diplomatik İlişkiler Sözleşmesi (1961), Viyana Konsolosluk İlişkileri Sözleşmesi (1963)",
    tdp: { tr: "Türkiye'nin dış temsilcilik sayısı 1924'te 39, 2002'de 163 iken bugün 257'dir (Bakanlık verisi); bu ağ dünyanın en geniş diplomatik ağlarından biridir. Yurt dışındaki milyonlarca vatandaşa konsolosluk hizmeti KİM kariyerinin merkezindedir.", en: "Türkiye's number of missions abroad has grown from 39 in 1924 and 163 in 2002 to 257 today (Ministry figures), one of the largest diplomatic networks in the world. Consular services for millions of citizens abroad are at the heart of the KİM career." },
    ipucu: { tr: "Madde numaralarını mülakatta kullanmak güven verir; ama ezber gibi değil, bir senaryo içinde kullan (ör. tutuklanan vatandaş: VKİS md. 36).", en: "Using article numbers in the interview builds confidence, but use them within a scenario, not as a recitation (e.g. a detained citizen: VCCR Art. 36)." },
    soru: { tr: "Diplomatik ve konsüler temsil arasındaki farkları, dokunulmazlıklar açısından açıklayınız.", en: "Explain the differences between diplomatic and consular representation in terms of immunities." } }
];
