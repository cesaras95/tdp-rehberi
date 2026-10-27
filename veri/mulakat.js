// =============================================================
// MÜLAKAT ANTRENMANI (iki dilli)
// Benzetme: Bir sporcunun antrenman programı. Önce ısınma (cevap iskeletleri,
// kurtarıcı cümleler), sonra tek tek alıştırma, en sonda maç provası (jüri simülasyonu).
//
// Soru alanları:
//   tur      : MULAKAT_TURLERI anahtarı
//   iskelet  : MULAKAT_ISKELET anahtarı (cevabı hangi kalıpla kurmalı)
//   soru     : { tr, en }
//   profil   : (isteğe bağlı) "Profilim" doluysa kullanılan kişiselleştirilmiş soru.
//              {ulke} {deneyim} {dil} yer tutucuları kullanıcının yazdıklarıyla değişir.
//   ipucu    : güçlü bir cevabın unsurları
//   ek       : jürinin sorabileceği ek sorular (simülasyonda rastgele biri sorulur)
//   model    : örnek cevap (ezberlemek için değil, yapıyı görmek için)
// Resmî tutum ile yorum ayrı tutulmuştur; rakamlar politika dosyalarıyla uyumludur.
// =============================================================

const MULAKAT_TURLERI = {
  genel: { tr: "Genel", en: "General" },
  guncel: { tr: "Güncel", en: "Current" },
  tarih: { tr: "Tarih", en: "History" },
  kisisel: { tr: "Kişisel", en: "Personal" },
  konsolosluk: { tr: "Konsolosluk", en: "Consular" },
  baski: { tr: "Baskı", en: "Pressure" },
  ingilizce: { tr: "İngilizce", en: "In English" }
};

// ---------- CEVAP İSKELETLERİ ----------
// Benzetme: Bir evin taşıyıcı kolonları. Soru ne olursa olsun cevabın çökmemesini sağlar.
const MULAKAT_ISKELET = {
  politika: {
    ad: { tr: "Politika sorusu: Cevap → Tutum → Kanıt → Sonuç", en: "Policy question: Answer → Position → Evidence → Conclusion" },
    adimlar: [
      { tr: "Cevap: İlk cümlede soruya doğrudan cevap ver.", en: "Answer: Answer the question directly in your first sentence." },
      { tr: "Tutum: Türkiye'nin resmî tutumunu bir cümleyle söyle.", en: "Position: State Türkiye's official position in one sentence." },
      { tr: "Kanıt: İki somut gerekçe ya da örnek ver (tarih, rakam, belge).", en: "Evidence: Give two concrete reasons or examples (date, figure, document)." },
      { tr: "Sonuç: Kısa bir değerlendirmeyle bağla; gerekirse bir kısıtı kabul et.", en: "Conclusion: Close with a short assessment; acknowledge a constraint if needed." }
    ],
    acilis: { tr: "\"Kısaca cevap vermem gerekirse … Bunu iki noktayla açıklayayım.\"", en: "\"In short, … Let me explain this with two points.\"" }
  },
  kisisel: {
    ad: { tr: "Kişisel soru: Şimdi → Geçmiş → Gelecek", en: "Personal question: Present → Past → Future" },
    adimlar: [
      { tr: "Şimdi: Bugün kim olduğunu ve neyle uğraştığını tek cümleyle söyle.", en: "Present: Say who you are and what you do today in one sentence." },
      { tr: "Geçmiş: Seni buraya getiren bir ya da iki somut deneyim.", en: "Past: One or two concrete experiences that brought you here." },
      { tr: "Gelecek: Bu deneyimleri görevde nasıl kullanacağın.", en: "Future: How you will use these experiences in the role." }
    ],
    acilis: { tr: "\"Şu anda … Bu ilgim … deneyimiyle başladı. Bunu Bakanlıkta … için kullanmak istiyorum.\"", en: "\"I am currently … This interest began with … I want to use it at the Ministry to …\"" }
  },
  davranis: {
    ad: { tr: "Deneyim sorusu: Durum → Görev → Eylem → Sonuç (STAR)", en: "Experience question: Situation → Task → Action → Result (STAR)" },
    adimlar: [
      { tr: "Durum: Ne zaman, nerede, kısaca ne oldu?", en: "Situation: When, where, briefly what happened?" },
      { tr: "Görev: Senin sorumluluğun neydi?", en: "Task: What was your responsibility?" },
      { tr: "Eylem: Sen ne yaptın? (\"Biz\" değil \"ben\" de.)", en: "Action: What did you do? (Say \"I\", not \"we\".)" },
      { tr: "Sonuç: Ne oldu ve ne öğrendin? Mümkünse ölçülebilir bir sonuç.", en: "Result: What happened and what did you learn? A measurable result if possible." }
    ],
    acilis: { tr: "\"Bunu bir örnekle anlatayım: … sırasında …\"", en: "\"Let me give you an example: during …\"" }
  },
  konsolosluk: {
    ad: { tr: "Konsolosluk senaryosu: İnsan → Hukuk → Paydaşlar → Takip", en: "Consular scenario: People → Law → Stakeholders → Follow-up" },
    adimlar: [
      { tr: "İnsan: Önce vatandaşın güvenliği ve acil ihtiyacı.", en: "People: First the citizen's safety and urgent needs." },
      { tr: "Hukuk: Dayanak (ör. 1963 Viyana Konsolosluk İlişkileri Sözleşmesi, yerel mevzuat).", en: "Law: The legal basis (e.g. the 1963 Vienna Convention on Consular Relations, local law)." },
      { tr: "Paydaşlar: Aile, yerel makamlar, Merkez (Bakanlık), gerekiyorsa diğer kurumlar.", en: "Stakeholders: Family, local authorities, headquarters (the Ministry), other agencies if needed." },
      { tr: "Takip: Kayıt, bilgilendirme, sürecin sonuna kadar izleme.", en: "Follow-up: Records, keeping people informed, monitoring until the end." }
    ],
    acilis: { tr: "\"Önceliğim vatandaşın güvenliği olur. Ardından …\"", en: "\"My first priority would be the citizen's safety. Then …\"" }
  },
  baski: {
    ad: { tr: "Baskı sorusu: Kabul et → Çerçevele → Yanıtla → Bağla", en: "Pressure question: Acknowledge → Frame → Respond → Connect" },
    adimlar: [
      { tr: "Kabul et: Sorudaki haklı noktayı sakin bir dille kabul et.", en: "Acknowledge: Calmly accept the valid point in the question." },
      { tr: "Çerçevele: Konuyu çıkarlar ve koşullar üzerinden yeniden çerçevele.", en: "Frame: Reframe the issue in terms of interests and conditions." },
      { tr: "Yanıtla: Resmî gerekçeyi ve bir somut örneği ver.", en: "Respond: Give the official rationale and one concrete example." },
      { tr: "Bağla: Kısa ve olumlu bir sonuç cümlesiyle bitir.", en: "Connect: Finish with a short, constructive concluding sentence." }
    ],
    acilis: { tr: "\"Haklı bir noktaya değindiniz. Ancak konuya … açısından bakarsak …\"", en: "\"You raise a fair point. However, if we look at it in terms of …\"" }
  }
};

// ---------- KURTARICI CÜMLELER ----------
// Takıldığında, bilmediğinde ya da gerildiğinde kullanılacak hazır cümleler.
const MULAKAT_KURTARICI = [
  { durum: { tr: "Düşünmek için zaman kazanmak", en: "Buying time to think" },
    cumleler: [{ tr: "Güzel bir soru, izin verirseniz bir saniye toparlayayım.", en: "That's a good question; allow me a moment to gather my thoughts." },
               { tr: "Bu soruyu iki boyutuyla ele almak istiyorum.", en: "I would like to address this question in two dimensions." }] },
  { durum: { tr: "Soruyu tam anlamadığında", en: "When you didn't fully understand" },
    cumleler: [{ tr: "Doğru anladıysam … soruyorsunuz, öyle mi?", en: "If I understand correctly, you are asking about …, is that right?" },
               { tr: "Soruyu tekrar edebilir misiniz?", en: "Could you please repeat the question?" }] },
  { durum: { tr: "Cevabı bilmediğinde", en: "When you don't know the answer" },
    cumleler: [{ tr: "Bu konudaki kesin rakamı şu an hatırlamıyorum, ama genel çerçeve şöyle: …", en: "I don't recall the exact figure at the moment, but the general framework is as follows: …" },
               { tr: "Bu konuda bilgim sınırlı; bildiğim kadarıyla … Göreve başlarsam bu konuyu ayrıntılı çalışırım.", en: "My knowledge of this is limited; as far as I know, … I would study it in detail if I took up the post." }] },
  { durum: { tr: "Aklın boşaldığında ya da takıldığında", en: "When your mind goes blank" },
    cumleler: [{ tr: "Toparlamak gerekirse, ana noktam şu: …", en: "To sum up, my main point is this: …" },
               { tr: "Bir adım geri gidersem, asıl mesele …", en: "If I take a step back, the core issue is …" }] },
  { durum: { tr: "Sözün kesildiğinde ya da itiraz geldiğinde", en: "When you are interrupted or challenged" },
    cumleler: [{ tr: "Haklısınız, bu önemli bir nokta. Buna şunu eklemek isterim: …", en: "You are right, that is an important point. I would add the following: …" },
               { tr: "Bu eleştiriyi anlıyorum; resmî tutumun gerekçesi ise …", en: "I understand that criticism; the rationale of the official position, however, is …" }] },
  { durum: { tr: "Uzattığını fark ettiğinde", en: "When you notice you are rambling" },
    cumleler: [{ tr: "Kısacası, …", en: "In short, …" },
               { tr: "Son olarak tek bir noktayı vurgulamak isterim: …", en: "Finally, I would like to stress one point: …" }] }
];

// ---------- MÜLAKAT GÜNÜ KONTROL LİSTESİ ----------
const MULAKAT_LISTE = [
  { tr: "Son haftanın 3 önemli dış politika gelişmesini birer cümleyle söyleyebiliyorum.", en: "I can summarise the 3 most important foreign policy developments of the past week in one sentence each." },
  { tr: "\"Kendinizi tanıtın\" ve \"Neden bu meslek?\" cevaplarımı sesli olarak en az 3 kez prova ettim.", en: "I have rehearsed my answers to \"Introduce yourself\" and \"Why this profession?\" out loud at least 3 times." },
  { tr: "Özgeçmişimdeki her satır için bir soru gelirse ne diyeceğimi biliyorum.", en: "I know what I would say if asked about any line of my CV." },
  { tr: "Girişte jüri üyeleriyle göz teması kurup kısa ve net selam vereceğim.", en: "On entering, I will make eye contact with the panel and greet them briefly and clearly." },
  { tr: "Oturduğumda sırtım dik, ellerim masada ya da dizimde rahat olacak.", en: "When seated, my back will be straight and my hands relaxed on the table or my knees." },
  { tr: "Her cevaba ilk cümlede doğrudan cevapla başlayacağım.", en: "I will begin every answer with a direct answer in the first sentence." },
  { tr: "Bir soruyu bilmezsem dürüstçe söyleyip bildiğim çerçeveye geçeceğim.", en: "If I don't know something, I will say so honestly and move to what I do know." },
  { tr: "Cevaplarımı 60–90 saniyede tutacağım; jüri isterse ayrıntıya gireceğim.", en: "I will keep answers to 60–90 seconds and go into detail if the panel asks." }
];

// ---------- ÖZ DEĞERLENDİRME ÖLÇÜTLERİ ----------
// Her cevaptan sonra 1 (zayıf) – 3 (güçlü) arası puan verilir.
const MULAKAT_OLCUT = [
  { id: "dogruluk", ad: { tr: "Bilgi doğruluğu", en: "Accuracy" } },
  { id: "dogrudan", ad: { tr: "Doğrudan cevap (ilk cümlede)", en: "Directness (in the first sentence)" } },
  { id: "yapi", ad: { tr: "Yapı (iskelete uydum)", en: "Structure (I followed the framework)" } },
  { id: "analiz", ad: { tr: "Analitik düşünme", en: "Analytical thinking" } },
  { id: "ton", ad: { tr: "Diplomatik dil ve ton", en: "Diplomatic language and tone" } },
  { id: "turkiye", ad: { tr: "Türkiye perspektifi (resmî tutumu doğru aktardım)", en: "Türkiye's perspective (conveyed the official position correctly)" } },
  { id: "akicilik", ad: { tr: "Akıcılık ve sakinlik", en: "Fluency and composure" } },
  { id: "sure", ad: { tr: "Süre ve odak (uzatmadım)", en: "Timing and focus (no rambling)" } }
];

// Konuşurken sık kullanılan dolgu kelimeleri (ses tanıma açıksa sayılır)
const MULAKAT_DOLGU = {
  tr: ["şey", "yani", "hani", "işte", "aslında", "ııı", "eee", "ee", "ıı", "falan", "böyle"],
  en: ["um", "uh", "like", "you know", "basically", "actually", "sort of", "kind of"]
};

// ---------- SORULAR ----------
const MULAKAT = [
  // ----- KİŞİSEL -----
  { tur: "kisisel", iskelet: "kisisel",
    soru: { tr: "Kendinizi kısaca tanıtır mısınız?", en: "Could you briefly introduce yourself?" },
    ipucu: { tr: "Özgeçmişini baştan okuma. Bugün → seni buraya getiren 1-2 deneyim → bu görevle bağlantısı. 60 saniye.", en: "Don't recite your CV. Today → 1–2 experiences that brought you here → link to this role. 60 seconds." },
    ek: [{ tr: "Bu deneyimlerden hangisi sizi en çok değiştirdi?", en: "Which of these experiences changed you the most?" },
         { tr: "Özgeçmişinizde bu görevle en az ilgili görünen şey nedir, onu nasıl açıklarsınız?", en: "What in your CV seems least related to this role, and how would you explain it?" }],
    model: { tr: "Uluslararası ilişkiler alanında yüksek lisansımı tamamladım ve şu anda Dışişleri kariyerine hazırlanıyorum. Bu ilgim yurt dışında okurken farklı ülkelerden insanlarla ortak projelerde çalışmamla somutlaştı; uluslararası etkinliklerin organizasyonunda da yer aldım ve farklı tarafların beklentilerini aynı masada buluşturmayı öğrendim. Bu deneyimleri konsolosluk hizmetlerinde, özellikle yurt dışındaki vatandaşlarımızla kurulan ilişkide ve kriz anlarında hızlı ve sakin karar vermekte kullanmak istiyorum.",
             en: "I have completed a master's degree in international relations and I am now preparing for a career at the Ministry of Foreign Affairs. This interest became concrete while I studied abroad and worked on joint projects with people from different countries; I was also involved in organising international events, where I learned to bring the expectations of different parties to the same table. I want to use these experiences in consular services, particularly in our relationship with citizens abroad and in making quick, calm decisions in times of crisis." } },
  { tur: "kisisel", iskelet: "kisisel",
    soru: { tr: "Neden diplomat olmak istiyorsunuz?", en: "Why do you want to become a diplomat?" },
    ipucu: { tr: "Klişeden kaçın (\"ülkemi temsil etmek\" tek başına yetmez). Kişisel motivasyon + kamu hizmeti + somut bir ilgi alanı. 60–90 saniye.", en: "Avoid clichés (\"representing my country\" alone is not enough). Personal motivation + public service + a specific area of interest. 60–90 seconds." },
    ek: [{ tr: "Özel sektörde daha yüksek maaş alabilirsiniz. Neden kamu?", en: "You could earn more in the private sector. Why the public sector?" },
         { tr: "Diplomatlığın en zor yanı sizce nedir?", en: "What do you think is the hardest part of being a diplomat?" }],
    model: { tr: "Beni bu mesleğe çeken şey, ülkeler arasındaki sorunların çoğunun aslında doğru iletişim ve sabırlı müzakereyle çözülebilmesi. Yurt dışında yaşarken Türkiye'nin nasıl algılandığını ve bu algının somut ilişkileri nasıl etkilediğini yakından gördüm. Diplomasiyi, bu algıyı ve ilişkileri kalıcı biçimde iyileştirmenin en doğrudan yolu olarak görüyorum. Özellikle vatandaşlarımıza yurt dışında doğrudan dokunan konsolosluk hizmetleri, kamu hizmetini en somut hâliyle yapma imkânı veriyor.",
             en: "What draws me to this profession is that most problems between countries can in fact be resolved through good communication and patient negotiation. While living abroad, I saw closely how Türkiye is perceived and how that perception affects concrete relationships. I see diplomacy as the most direct way to improve these perceptions and relationships lastingly. Consular services in particular, which directly touch our citizens abroad, offer a chance to provide public service in its most concrete form." } },
  { tur: "kisisel", iskelet: "davranis",
    soru: { tr: "Yurt dışı eğitim veya yaşam deneyiminiz diplomasiye nasıl katkı sağlar?", en: "How does your experience of studying or living abroad contribute to diplomacy?" },
    profil: { tr: "{ulke} deneyiminiz bir diplomat olarak size ne kazandırdı?", en: "What has your experience in {ulke} given you as a future diplomat?" },
    ipucu: { tr: "Somut bir an anlat: kültürlerarası bir anlaşmazlık, bir müzakere ya da temsil deneyimi. Ne öğrendiğini bir diplomatik beceriye bağla.", en: "Describe a concrete moment: an intercultural disagreement, a negotiation or a representation experience. Link what you learned to a diplomatic skill." },
    ek: [{ tr: "O ülkede Türkiye algısı nasıldı? Siz bu algıyı nasıl değiştirmeye çalıştınız?", en: "How was Türkiye perceived in that country? How did you try to change that perception?" },
         { tr: "O ülkenin Türkiye ile ilişkilerindeki en önemli gündem maddesi nedir?", en: "What is the most important item on that country's agenda with Türkiye?" }],
    model: { tr: "Yurt dışında yüksek lisans yaparken bir grup projesinde farklı ülkelerden arkadaşlarla çalıştım ve bir konuda ciddi görüş ayrılığı yaşadık. Görevim ortak bir rapor çıkarmaktı. Herkesin itirazını tek tek dinleyip ortak noktaları yazılı hâle getirdim ve uzlaşamadığımız tek konuyu raporda ayrı bir başlık olarak gösterdik. Rapor zamanında teslim edildi. Bu deneyim bana diplomaside en değerli becerilerden birini öğretti: anlaşamadığın noktayı da açıkça kayda geçirerek ilişkiyi koruyabilmek.",
             en: "During my master's abroad, I worked on a group project with colleagues from different countries and we had a serious disagreement. My task was to produce a joint report. I listened to each objection individually, put the common ground in writing, and we presented the one point we could not agree on as a separate section. The report was delivered on time. This taught me one of the most valuable skills in diplomacy: preserving the relationship while openly recording the point of disagreement." } },
  { tur: "kisisel", iskelet: "davranis",
    soru: { tr: "Baskı altında çalıştığınız ve bir sorunu çözmek zorunda kaldığınız bir anı anlatır mısınız?", en: "Could you describe a time when you worked under pressure and had to solve a problem?" },
    profil: { tr: "{deneyim} sırasında baskı altında kaldığınız bir anı anlatır mısınız?", en: "Could you describe a moment of pressure during {deneyim}?" },
    ipucu: { tr: "STAR: durum, görev, senin eylemin, ölçülebilir sonuç. \"Biz\" değil \"ben\" de. Konsolosluktaki kriz yönetimiyle bağla.", en: "STAR: situation, task, your action, measurable result. Say \"I\", not \"we\". Link it to crisis management in consular work." },
    ek: [{ tr: "Geriye dönüp baksanız neyi farklı yapardınız?", en: "Looking back, what would you do differently?" },
         { tr: "Bu durumda bir hata yaptınız mı?", en: "Did you make a mistake in that situation?" }],
    model: { tr: "Uluslararası bir fuarın açılışından bir gün önce yabancı bir katılımcı heyetin stant malzemeleri gümrükte kaldı. Heyetle iletişimden ben sorumluydum. Önce heyeti sakinleştirip gerçekçi bir zaman çizelgesi verdim, ardından gümrük müşaviri ve organizasyon ekibiyle eş zamanlı çalışıp eksik belgeyi tamamladım; bu arada geçici bir stant düzeni hazırladık. Malzemeler açılış sabahı geldi ve heyet fuara eksiksiz katıldı. Buradan öğrendiğim, krizde önce insanları bilgilendirmenin, sonra süreci paralel yürütmenin önemi oldu.",
             en: "The day before an international trade fair opened, a foreign exhibitor delegation's stand materials were held at customs. I was responsible for communication with the delegation. I first calmed them and gave a realistic timeline, then worked in parallel with the customs broker and the organising team to complete the missing document, while we prepared a temporary stand layout. The materials arrived on opening morning and the delegation took part in full. What I learned was the importance of informing people first in a crisis, then running the processes in parallel." } },
  { tur: "kisisel", iskelet: "kisisel",
    soru: { tr: "En büyük zayıf yönünüz nedir?", en: "What is your greatest weakness?" },
    ipucu: { tr: "Gerçek ama işi engellemeyen bir zayıflık seç, üzerinde nasıl çalıştığını somut olarak anlat. \"Mükemmeliyetçiyim\" gibi kaçamak cevaplardan kaçın.", en: "Choose a real weakness that does not block the job and explain concretely how you are working on it. Avoid evasive answers like \"I'm a perfectionist\"." },
    ek: [{ tr: "Bu zayıflık bir kriz anında nasıl bir sorun yaratabilir?", en: "How could this weakness cause a problem in a crisis?" }],
    model: { tr: "Yüz yüze, hızlı tempolu konuşmalarda düşüncelerimi toparlamakta bazen zorlanıyorum; yazılı ifadem sözlüden daha güçlü. Bunun üzerinde düzenli çalışıyorum: cevaplarımı bir iskeletle kurmayı, ilk cümlede doğrudan cevap vermeyi alışkanlık hâline getirdim ve kendimi kaydedip dinliyorum. Son aylarda belirgin bir ilerleme görüyorum ve bunu konsolosluk görevinde vatandaşlarla ve yerel makamlarla kurulan iletişimde bir güce çevirmek istiyorum.",
             en: "In fast-paced, face-to-face conversations I sometimes find it hard to organise my thoughts; my written expression is stronger than my spoken. I work on this regularly: I have made it a habit to build my answers on a framework and to answer directly in the first sentence, and I record and listen to myself. I have seen clear progress in recent months, and I want to turn this into a strength in communicating with citizens and local authorities in consular work." } },
  { tur: "kisisel", iskelet: "kisisel",
    soru: { tr: "Neden Konsolosluk ve İhtisas Memurluğu? Bu görevde sizi en çok ne zorlar?", en: "Why the consular and specialist officer track? What would challenge you most in this role?" },
    ipucu: { tr: "Konsolosluk hizmetinin vatandaşla doğrudan teması, hukuki ve idari boyutu. Zorluk olarak dürüst bir örnek (ör. kriz yükü) ve onunla nasıl başa çıkacağın.", en: "The direct contact with citizens and the legal and administrative side of consular work. An honest challenge (e.g. crisis workload) and how you would handle it." },
    ek: [{ tr: "Konsoloslukta günlük işlerin çoğu rutin idari işlerdir. Bu sizi sıkmaz mı?", en: "Most day-to-day consular work is routine administration. Won't that bore you?" }],
    model: { tr: "Konsolosluk hizmeti, dış politikanın vatandaşa en doğrudan dokunduğu alan: bir pasaport, bir doğum kaydı ya da bir kriz anında yapılan yardım insanların hayatında somut bir fark yaratıyor. Hukuki ve idari boyutu da ilgimi çekiyor. Beni en çok zorlayacak şey, aynı anda birçok acil talebin gelmesi olabilir; bunun için önceliklendirme yapmayı, kayıt tutmayı ve ekiple net iş bölümü kurmayı önemsiyorum.",
             en: "Consular service is where foreign policy touches citizens most directly: a passport, a birth registration or help given in a crisis makes a concrete difference in people's lives. Its legal and administrative side also interests me. What would challenge me most is many urgent requests arriving at once; for that I value prioritising, keeping records and setting a clear division of work within the team." } },

  // ----- GENEL -----
  { tur: "genel", iskelet: "politika",
    soru: { tr: "Türk dış politikasının değişmeyen temel ilkeleri nelerdir?", en: "What are the enduring core principles of Turkish foreign policy?" },
    ipucu: { tr: "\"Yurtta sulh, cihanda sulh\"; toprak bütünlüğü ve egemenlik; uluslararası hukuka bağlılık; Batı ile kurumsal bağlar; çok yönlülük. 1-2 tarihsel örnekle destekle.", en: "\"Peace at home, peace in the world\"; territorial integrity and sovereignty; commitment to international law; institutional ties with the West; multi-dimensionality. Support with one or two historical examples." },
    ek: [{ tr: "Bu ilkelerden hangisi bugün en çok sınanıyor?", en: "Which of these principles is most tested today?" },
         { tr: "Çok yönlülük ile ittifak yükümlülükleri çelişmiyor mu?", en: "Don't multi-dimensionality and alliance obligations contradict each other?" }],
    model: { tr: "Türk dış politikasının sabit çizgisi, Atatürk'ün \"Yurtta sulh, cihanda sulh\" ilkesinde özetlenen barışçıl bir yönelimdir. Bunun etrafında üç sürekli unsur var: toprak bütünlüğü ve egemenliğin korunması, uluslararası hukuka bağlılık ve Batı ile kurumsal bağlar; örneğin 1952'den beri NATO üyeliği ve AB ile katılım süreci. Bunlara son dönemde çok yönlülük, yani Afrika'dan Asya'ya ilişkileri çeşitlendirme eklendi. Araçlar ve öncelikler değişse de bu temel çerçeve Cumhuriyet'in kuruluşundan bu yana korunuyor.",
             en: "The constant thread of Turkish foreign policy is a peaceful orientation summarised in Atatürk's principle \"Peace at home, peace in the world\". Around it are three enduring elements: protecting territorial integrity and sovereignty, commitment to international law, and institutional ties with the West, for example NATO membership since 1952 and the EU accession process. Multi-dimensionality, diversifying relations from Africa to Asia, has been added more recently. While tools and priorities change, this core framework has been preserved since the founding of the Republic." } },
  { tur: "genel", iskelet: "politika",
    soru: { tr: "Kıbrıs meselesinde Türkiye'nin pozisyonunu bir yabancı diplomata nasıl anlatırsınız?", en: "How would you explain Türkiye's position on Cyprus to a foreign diplomat?" },
    ipucu: { tr: "Tarih (1960 ortaklık devleti, 1963 sonrası, 1974, 2004 Annan) → bugünkü vizyon (egemen eşitlik ve eşit uluslararası statü) → neden gerçekçi bulunduğu. Kısa ve net ol.", en: "History (the 1960 partnership state, after 1963, 1974, the 2004 Annan Plan) → today's vision (sovereign equality and equal international status) → why it is seen as realistic. Be brief and clear." },
    ek: [{ tr: "Türkiye neden federasyon modelinden uzaklaştı?", en: "Why has Türkiye moved away from the federation model?" },
         { tr: "Kıbrıs meselesi Türkiye-AB ilişkilerini nasıl etkiliyor?", en: "How does the Cyprus issue affect Türkiye–EU relations?" }],
    model: { tr: "Türkiye'ye göre sorun 1974'te değil, 1963'te ortaklık devletinin fiilen çökmesi ve Kıbrıslı Türklerin yönetimden dışlanmasıyla başladı; 1974 harekâtı garantör devlet sıfatıyla yapıldı. Kıbrıslı Türkler 2004'te Annan Planı'nı kabul etti, Rum tarafı reddetti; buna rağmen Rum tarafı AB üyesi oldu. 2017 Crans-Montana'dan sonra Türkiye ve KKTC, adada iki egemen eşit devletin varlığının kabulüne dayalı bir çözümü savunuyor. Kısacası Türk tarafının hedefi, Kıbrıslı Türklerin eşit statüsünü ve güvenliğini kalıcı olarak güvence altına almak.",
             en: "In Türkiye's view, the problem began not in 1974 but in 1963, with the de facto collapse of the partnership state and the exclusion of Turkish Cypriots from government; the 1974 operation was carried out in Türkiye's capacity as a guarantor state. Turkish Cypriots accepted the Annan Plan in 2004 while the Greek Cypriot side rejected it, yet the Greek Cypriot side became an EU member. Since Crans-Montana in 2017, Türkiye and the TRNC advocate a settlement based on the recognition of two sovereign, equal states on the island. In short, the Turkish side aims to secure the equal status and security of Turkish Cypriots permanently." } },
  { tur: "genel", iskelet: "politika",
    soru: { tr: "Türkiye'nin Afrika politikası sizce başarılı mı?", en: "In your view, has Türkiye's Africa policy been successful?" },
    ipucu: { tr: "Başarı göstergeleri (büyükelçilik sayısı 2002'de 12'den 44'e, ticaret, THY ağı, Somali) + eleştiriler (rekabet, sürdürülebilirlik). Dengeli bir sonuç cümlesiyle bitir.", en: "Indicators of success (embassies rose from 12 in 2002 to 44, trade, the Turkish Airlines network, Somalia) + criticisms (competition, sustainability). End with a balanced concluding sentence." },
    ek: [{ tr: "Türkiye Afrika'da Çin ve Körfez ülkeleriyle nasıl rekabet edebilir?", en: "How can Türkiye compete with China and the Gulf states in Africa?" }],
    model: { tr: "Büyük ölçüde evet. Türkiye'nin Afrika'daki büyükelçilik sayısı 2002'de 12 iken 44'e çıktı, ticaret hacmi 2003'teki yaklaşık 5,4 milyar dolardan 2021'de 34,5 milyar dolara yükseldi ve Somali gibi ülkelerde insani yardımdan kalkınmaya uzanan kalıcı bir varlık oluştu. Afrika Birliği 2008'de Türkiye'yi stratejik ortak ilan etti. Öte yandan Çin ve Körfez ülkeleriyle rekabet artıyor ve ilişkilerin ticaret ve yatırım tarafını derinleştirmek gerekiyor. Yani temel atıldı; sıradaki aşama bu varlığı sürdürülebilir ekonomik ortaklıklara dönüştürmek.",
             en: "Largely yes. Türkiye's embassies in Africa rose from 12 in 2002 to 44, trade grew from about 5.4 billion dollars in 2003 to 34.5 billion in 2021, and a lasting presence from humanitarian aid to development was built in countries such as Somalia. The African Union declared Türkiye a strategic partner in 2008. On the other hand, competition with China and the Gulf states is growing, and the trade and investment side of relations needs to be deepened. So the foundation has been laid; the next stage is to turn this presence into sustainable economic partnerships." } },

  // ----- GÜNCEL -----
  { tur: "guncel", iskelet: "politika",
    soru: { tr: "Türkiye NATO'da kalırken Rusya ile nasıl ilişki sürdürüyor?", en: "How does Türkiye maintain relations with Russia while remaining in NATO?" },
    ipucu: { tr: "Bağlam → çıkarlar (enerji, Karadeniz, ticaret) → kısıtlar (S-400 ve CAATSA, yaptırımlar) → sonuç: dengeli diplomasi. Resmî tutumu analizden ayır.", en: "Context → interests (energy, the Black Sea, trade) → constraints (S-400 and CAATSA, sanctions) → conclusion: balanced diplomacy. Keep the official position separate from analysis." },
    ek: [{ tr: "S-400 alımı bir hata mıydı?", en: "Was the S-400 purchase a mistake?" },
         { tr: "Türkiye Rusya'ya neden yaptırım uygulamıyor?", en: "Why doesn't Türkiye impose sanctions on Russia?" }],
    model: { tr: "Türkiye NATO'ya bağlılığını temel bir unsur olarak görüyor; aynı zamanda Rusya ile enerji, ticaret ve Karadeniz güvenliği gibi alanlarda karşılıklı bağımlılık var. Resmî tutum, Ukrayna'nın toprak bütünlüğünü desteklemek ve iki tarafla da diyalog kanalını açık tutmak. Bu denge 2022'de somut sonuç verdi: İstanbul görüşmeleri ve Karadeniz Tahıl Girişimi. Kısıtlar da var; S-400 alımı ABD'nin CAATSA yaptırımlarına ve F-35 programından çıkarılmaya yol açtı. Sonuç olarak Türkiye'nin yaklaşımı, ittifak yükümlülüklerini koruyup kendi çıkarlarına göre dengeli bir diplomasi yürütmek.",
             en: "Türkiye sees its commitment to NATO as fundamental; at the same time there is mutual dependence with Russia in energy, trade and Black Sea security. The official position is to support Ukraine's territorial integrity and to keep channels of dialogue open with both sides. This balance produced concrete results in 2022: the Istanbul talks and the Black Sea Grain Initiative. There are constraints too: the S-400 purchase led to US CAATSA sanctions and removal from the F-35 programme. In conclusion, Türkiye's approach is to honour its alliance obligations while pursuing a balanced diplomacy based on its own interests." } },
  { tur: "guncel", iskelet: "politika",
    soru: { tr: "AB üyeliği hâlâ gerçekçi bir hedef mi?", en: "Is EU membership still a realistic goal?" },
    ipucu: { tr: "Resmî tutum: stratejik hedef. Analiz: 35 fasıldan 16'sı açıldı, müzakereler fiilen durdu; işlevsel işbirliği alanları (göç, Gümrük Birliği'nin güncellenmesi, vize serbestisi, savunma) öne çıkıyor. Dengeli ve diplomatik bir dil kullan.", en: "Official position: a strategic objective. Analysis: 16 of 35 chapters were opened and talks have effectively stalled; functional cooperation (migration, updating the Customs Union, visa liberalisation, defence) is prominent. Use balanced, diplomatic language." },
    ek: [{ tr: "Kıbrıs sorunu çözülmeden üyelik mümkün mü?", en: "Is membership possible without a Cyprus settlement?" },
         { tr: "Gümrük Birliği'nin güncellenmesi Türkiye'ye ne kazandırır?", en: "What would updating the Customs Union bring Türkiye?" }],
    model: { tr: "Resmî tutuma göre AB üyeliği Türkiye için stratejik bir hedef olmayı sürdürüyor. Ancak gerçekçi bakmak gerekirse, 35 fasıldan 16'sı açıldı ve müzakereler uzun süredir fiilen durmuş durumda; Kıbrıs meselesi ve AB'deki siyasi isteksizlik bunun başlıca sebepleri. Bu yüzden kısa vadede öne çıkan, işlevsel işbirliği: Gümrük Birliği'nin güncellenmesi, vize serbestisi, göç ve son dönemde savunma sanayii. Bence üyelik uzun vadeli hedef olarak kalırken bu somut alanlardaki ilerleme ilişkinin asıl taşıyıcısı olacak.",
             en: "According to the official position, EU membership remains a strategic objective for Türkiye. Realistically, however, 16 of 35 chapters have been opened and negotiations have effectively stalled for a long time, mainly because of the Cyprus issue and political reluctance within the EU. In the short term, functional cooperation is therefore prominent: updating the Customs Union, visa liberalisation, migration and, recently, the defence industry. In my view, while membership remains a long-term goal, progress in these concrete areas will carry the relationship." } },
  { tur: "guncel", iskelet: "politika",
    soru: { tr: "Son bir ayda sizi en çok düşündüren dış politika gelişmesi hangisi?", en: "Which foreign policy development of the past month has made you think the most?" },
    ipucu: { tr: "Türkiye Gündemi ya da Dünya Gündemi sekmesinden bir olay seç. Ne oldu → Türkiye için neden önemli → olası sonuç. Kişisel ama analitik ol.", en: "Pick an event from the Türkiye Agenda or World Agenda tab. What happened → why it matters for Türkiye → likely outcome. Be personal but analytical." },
    ek: [{ tr: "Bu konuda Türkiye'nin tutumuna katılıyor musunuz?", en: "Do you agree with Türkiye's position on this?" },
         { tr: "Bu gelişme altı ay sonra nereye varır?", en: "Where will this development be in six months?" }],
    model: { tr: "(Örnek yapı) Son ayda beni en çok düşündüren gelişme … oldu. Kısaca olan şu: … Türkiye açısından önemi iki noktada: birincisi …, ikincisi … Bakanlığın açıklamasında … vurgulandı. Bence önümüzdeki dönemde … bekleniyor; Türkiye'nin buradaki rolü … olabilir. — Not: Bu sorunun cevabını her hafta Gündem sekmesinden güncelle.",
             en: "(Sample structure) The development that made me think most in the past month was … In short, what happened is … It matters for Türkiye in two ways: first …, second … The Ministry's statement stressed … I expect … in the coming period; Türkiye's role here could be … — Note: update this answer every week from the Agenda tab." } },
  { tur: "guncel", iskelet: "politika",
    soru: { tr: "Türkiye'nin arabuluculuk kapasitesi nereden geliyor?", en: "Where does Türkiye's mediation capacity come from?" },
    ipucu: { tr: "Coğrafya, çok yönlü ilişkiler, kurumsal girişimler (BM'de Finlandiya ile 2010'da kurulan Arabuluculuk Dostlar Grubu, İstanbul Arabuluculuk Konferansları), somut örnekler (Tahıl Girişimi, İstanbul görüşmeleri, 2026 R4+E3 toplantıları).", en: "Geography, multi-dimensional relations, institutional initiatives (the Group of Friends of Mediation founded with Finland at the UN in 2010, the Istanbul Mediation Conferences), concrete examples (the Grain Initiative, the Istanbul talks, the 2026 R4+E3 meetings)." },
    ek: [{ tr: "Arabuluculuk ile kolaylaştırıcılık arasındaki fark nedir?", en: "What is the difference between mediation and facilitation?" },
         { tr: "Türkiye taraf olduğu bir çatışmada arabulucu olabilir mi?", en: "Can Türkiye mediate in a conflict in which it has a stake?" }],
    model: { tr: "Bu kapasite üç kaynaktan besleniyor. Birincisi coğrafya ve çok yönlü ilişkiler: Türkiye çatışmanın iki tarafıyla da konuşabilen az sayıdaki ülkeden biri. İkincisi kurumsal birikim: 2010'da Finlandiya ile BM'de Arabuluculuk Dostlar Grubu kuruldu ve İstanbul Arabuluculuk Konferansları düzenli yapılıyor. Üçüncüsü somut sonuçlar: 2022 İstanbul görüşmeleri ve Karadeniz Tahıl Girişimi. Türkiye birçok örnekte tam arabuluculuktan çok kolaylaştırıcı rol üstleniyor; bu da tarafların güvenini korumasını sağlıyor.",
             en: "This capacity draws on three sources. First, geography and multi-dimensional relations: Türkiye is one of the few countries able to talk to both sides of a conflict. Second, institutional experience: the Group of Friends of Mediation was founded at the UN with Finland in 2010, and the Istanbul Mediation Conferences are held regularly. Third, concrete results: the 2022 Istanbul talks and the Black Sea Grain Initiative. In many cases Türkiye plays a facilitating rather than a full mediating role, which helps it keep the trust of the parties." } },
  { tur: "guncel", iskelet: "politika",
    soru: { tr: "İklim diplomasisinin dış politikadaki yeri nedir? COP31'i nasıl değerlendiriyorsunuz?", en: "What is the place of climate diplomacy in foreign policy? How do you assess COP31?" },
    ipucu: { tr: "Ev sahipliği ve görünürlük; 2053 net sıfır hedefi; Avustralya ile müzakere başkanlığı düzenlemesi; enerji dönüşümü ve iklim finansmanı.", en: "Hosting and visibility; the 2053 net zero target; the arrangement with Australia on the negotiating presidency; energy transition and climate finance." },
    ek: [{ tr: "Türkiye gelişmekte olan ülke statüsünü iklim müzakerelerinde nasıl kullanıyor?", en: "How does Türkiye use its developing-country position in climate negotiations?" }],
    model: { tr: "İklim artık sadece çevre değil, enerji güvenliği, ticaret ve kalkınma meselesi; bu yüzden dış politikanın merkezine yerleşti. Türkiye 2053 net sıfır hedefini açıkladı ve Paris Anlaşması'nı 2021'de onayladı. COP31'e Antalya'da ev sahipliği yapması, müzakere başkanlığının Avustralya'da olduğu özel bir düzenlemeyle, hem görünürlük hem de köprü rolü için bir fırsat. Zorluk ise enerji dönüşümü için gereken finansmana erişim. Ben COP31'i, Türkiye'nin gelişmiş ve gelişmekte olan ülkeler arasında uzlaştırıcı rolünü gösterebileceği bir sahne olarak görüyorum.",
             en: "Climate is no longer only an environmental issue but a matter of energy security, trade and development, which is why it has moved to the centre of foreign policy. Türkiye announced its 2053 net zero target and ratified the Paris Agreement in 2021. Hosting COP31 in Antalya, under a special arrangement with Australia holding the negotiating presidency, is an opportunity for both visibility and a bridging role. The challenge is access to the finance needed for the energy transition. I see COP31 as a stage where Türkiye can show its role as a bridge between developed and developing countries." } },
  { tur: "guncel", iskelet: "politika",
    soru: { tr: "Yeni BM Genel Sekreteri seçimi Türkiye için neden önemli?", en: "Why does the selection of the new UN Secretary-General matter for Türkiye?" },
    ipucu: { tr: "BM reformu tutumu (\"Dünya beşten büyüktür\"), Güvenlik Konseyi'nin işleyişi, Gazze ve Ukrayna'da BM'nin rolü.", en: "Türkiye's UN reform position (\"The world is bigger than five\"), how the Security Council works, the UN's role in Gaza and Ukraine." },
    ek: [{ tr: "\"Dünya beşten büyüktür\" söylemi somut olarak ne öneriyor?", en: "What does \"The world is bigger than five\" propose in concrete terms?" }],
    model: { tr: "Genel Sekreter, BM'nin krizlerdeki sesini ve önceliklerini belirliyor. Türkiye uzun süredir \"Dünya beşten büyüktür\" diyerek Güvenlik Konseyi'nin daha temsili ve etkili olmasını savunuyor; Gazze ve Ukrayna'da Konsey'in veto nedeniyle tıkanması bu eleştiriyi güçlendirdi. Bu yüzden yeni Genel Sekreterin reform gündemine, insani krizlere yaklaşımına ve arabuluculuğa bakışı Türkiye için önemli. Türkiye'nin İstanbul'daki BM ofisleri ve arabuluculuk girişimleri de yeni yönetimle işbirliği için zemin oluşturuyor.",
             en: "The Secretary-General shapes the UN's voice and priorities in crises. Türkiye has long argued, with the phrase \"The world is bigger than five\", for a more representative and effective Security Council; the Council's paralysis by veto over Gaza and Ukraine has strengthened this criticism. The new Secretary-General's reform agenda, approach to humanitarian crises and view of mediation therefore matter to Türkiye. Türkiye's UN offices in Istanbul and its mediation initiatives also provide a basis for cooperation with the new leadership." } },

  // ----- TARİH -----
  { tur: "tarih", iskelet: "politika",
    soru: { tr: "Montrö Sözleşmesi'ni kısaca anlatır mısınız; neden önemli?", en: "Briefly explain the Montreux Convention. Why does it matter?" },
    ipucu: { tr: "1936; Boğazlarda Türk egemenliği; ticaret gemilerine serbest geçiş, savaş gemilerine sınırlar; Şubat 2022'de 19. maddenin uygulanması; Karadeniz'de denge.", en: "1936; Turkish sovereignty over the Straits; free passage for merchant ships, limits for warships; application of Article 19 in February 2022; balance in the Black Sea." },
    ek: [{ tr: "Kanal İstanbul Montrö'yü etkiler mi?", en: "Would Canal Istanbul affect Montreux?" },
         { tr: "2022'de Türkiye hangi maddeyi uyguladı ve neden?", en: "Which article did Türkiye apply in 2022, and why?" }],
    model: { tr: "1936 Montrö Sözleşmesi, Lozan'daki uluslararası boğazlar komisyonunu kaldırarak Boğazlar üzerinde Türk egemenliğini tesis etti. Ticaret gemilerine barışta serbest geçiş tanırken savaş gemileri için tonaj, süre ve bildirim sınırları koydu; kıyıdaş olmayan devletlerin gemileri Karadeniz'de en fazla 21 gün kalabiliyor. Önemi iki yönlü: Türkiye'ye egemenlik ve kontrol imkânı veriyor, Karadeniz'de de bir güç dengesi sağlıyor. Şubat 2022'de Türkiye, savaşan tarafların savaş gemilerinin geçişini 19. madde uyarınca sınırladı; bu, sözleşmenin bugün de işlediğini gösterdi.",
             en: "The 1936 Montreux Convention abolished the international Straits commission created at Lausanne and established Turkish sovereignty over the Straits. It grants merchant ships free passage in peacetime, while setting tonnage, duration and notification limits for warships; warships of non-Black Sea states may stay in the Black Sea for at most 21 days. Its importance is twofold: it gives Türkiye sovereignty and control, and it maintains a balance of power in the Black Sea. In February 2022 Türkiye restricted the passage of belligerents' warships under Article 19, showing that the Convention still works today." } },
  { tur: "tarih", iskelet: "politika",
    soru: { tr: "Lozan Antlaşması'nın Türk dış politikası açısından önemi nedir?", en: "What is the significance of the Treaty of Lausanne for Turkish foreign policy?" },
    ipucu: { tr: "24 Temmuz 1923; yeni devletin uluslararası tanınması; kapitülasyonların kaldırılması; çözülemeyen meseleler (Musul, Boğazlar rejimi, Hatay) ve sonraki çözümleri. Bugünkü önemi: Ege'deki statü.", en: "24 July 1923; international recognition of the new state; abolition of capitulations; unresolved issues (Mosul, the Straits regime, Hatay) and their later resolution. Its relevance today: the status quo in the Aegean." },
    ek: [{ tr: "Lozan'da çözülemeyen meseleler nelerdi?", en: "What issues remained unresolved at Lausanne?" }],
    model: { tr: "24 Temmuz 1923'te imzalanan Lozan Antlaşması, yeni Türk devletinin bağımsızlığını ve sınırlarını uluslararası alanda tanıttı ve kapitülasyonları kaldırdı; bu yüzden Cumhuriyet dış politikasının kurucu belgesi sayılır. Bazı meseleler açık kaldı: Musul 1926'da Irak lehine sonuçlandı, Boğazlar rejimi 1936'da Montrö ile, Hatay ise 1939'da çözüldü. Lozan bugün de güncel: Ege'deki adaların statüsü ve iki ülke arasındaki dengeye dair birçok tartışmada temel referans noktası.",
             en: "The Treaty of Lausanne, signed on 24 July 1923, secured international recognition of the new Turkish state's independence and borders and abolished the capitulations; it is therefore seen as the founding document of Republican foreign policy. Some issues remained open: Mosul was settled in Iraq's favour in 1926, the Straits regime by Montreux in 1936, and Hatay in 1939. Lausanne remains relevant today as a key reference point in many debates on the status of the Aegean islands and the balance between Türkiye and Greece." } },

  // ----- KONSOLOSLUK -----
  { tur: "konsolosluk", iskelet: "konsolosluk",
    soru: { tr: "Bir konsoloslukta vatandaşımız tutuklandı. İlk adımlarınız neler olur?", en: "A Turkish citizen has been arrested in your consular district. What are your first steps?" },
    ipucu: { tr: "1963 Viyana Konsolosluk İlişkileri Sözleşmesi md. 36: bilgilendirilme, iletişim, ziyaret. Vatandaşın durumunu öğren, aileyle iletişim, avukat listesi, yerel makamlarla temas, Merkezi bilgilendir. Yargı sürecine müdahale edilemeyeceğini belirt.", en: "Article 36 of the 1963 Vienna Convention on Consular Relations: notification, communication, visits. Find out the citizen's condition, contact the family, provide a list of lawyers, liaise with local authorities, inform headquarters. Note that you cannot interfere in the judicial process." },
    ek: [{ tr: "Yerel makamlar konsolosluğu bilgilendirmediyse ne yaparsınız?", en: "What do you do if the local authorities did not notify the consulate?" },
         { tr: "Aile sizden vatandaşı serbest bıraktırmanızı isterse ne dersiniz?", en: "What do you say if the family asks you to get the citizen released?" }],
    model: { tr: "Önceliğim vatandaşın sağlığı ve güvenliği olur. 1963 Viyana Konsolosluk İlişkileri Sözleşmesi'nin 36. maddesi, tutuklanan yabancının konsolosluğuyla iletişim kurma ve ziyaret edilme hakkını düzenliyor; bu çerçevede yerel makamlardan bilgi ister, en kısa sürede vatandaşı ziyaret ederim. Vatandaşın onayıyla ailesini bilgilendirir, yerel avukat listesini iletir ve Merkezi haberdar ederim. Aileye de açık olurum: yargı sürecine müdahale edemeyiz ama vatandaşın haklarına saygı gösterilmesini ve adil yargılanmasını takip ederiz.",
             en: "My first priority would be the citizen's health and safety. Article 36 of the 1963 Vienna Convention on Consular Relations provides for an arrested foreigner's right to communicate with and be visited by their consulate; within this framework I would request information from the local authorities and visit the citizen as soon as possible. With the citizen's consent I would inform the family, provide a list of local lawyers and inform headquarters. I would also be clear with the family: we cannot interfere in the judicial process, but we follow up to ensure the citizen's rights are respected and that they receive a fair trial." } },
  { tur: "konsolosluk", iskelet: "konsolosluk",
    soru: { tr: "Bir vatandaşımız pasaportunu kaybetti ve yarın sabah uçağı var. Ne yaparsınız?", en: "A citizen has lost their passport and has a flight tomorrow morning. What do you do?" },
    ipucu: { tr: "Sakinleştir, kimlik tespiti yap, yerel polise kayıp/çalıntı bildirimi, dönüş için acil seyahat belgesi (pasavan) seçeneği, gerekli belgeler ve ücret bilgisi. Prosedürü bilmiyorsan genel çerçeveyi anlat.", en: "Calm the person, verify identity, report the loss/theft to the local police, the option of an emergency travel document for return, the required documents and fees. If you don't know the exact procedure, explain the general framework." },
    ek: [{ tr: "Vatandaşın kimliğini doğrulayacak hiçbir belgesi yoksa ne yaparsınız?", en: "What if the citizen has no document at all to verify their identity?" }],
    model: { tr: "Önce vatandaşı sakinleştirir ve durumu netleştiririm: kayıp mı, çalıntı mı, uçuş saati ne zaman? Kimliğini elindeki belgelerle ve kayıtlardan doğrular, kayıp ya da çalıntı için yerel polise bildirimde bulunmasını isterim. Uçuş acilse, Türkiye'ye dönüşü için tek seferlik geçerli acil seyahat belgesi düzenlenmesi seçeneğini değerlendiririz; gerekli fotoğraf, belge ve ücret bilgisini net şekilde veririm. Türkiye'ye döndükten sonra yeni pasaport için başvurması gerektiğini de hatırlatırım.",
             en: "First I would calm the citizen and clarify the situation: was it lost or stolen, and when is the flight? I would verify their identity with the documents they have and our records, and ask them to report the loss or theft to the local police. If the flight is urgent, we would consider issuing an emergency travel document valid for a single journey back to Türkiye; I would clearly explain the photo, documents and fee required. I would also remind them to apply for a new passport after returning to Türkiye." } },
  { tur: "konsolosluk", iskelet: "konsolosluk",
    soru: { tr: "Görev bölgenizde büyük bir deprem oldu. Vatandaşlarımız için ilk 24 saatte neler yaparsınız?", en: "A major earthquake hits your consular district. What do you do for our citizens in the first 24 hours?" },
    ipucu: { tr: "Kriz masası; vatandaş tespiti (kayıtlar, sosyal medya, aile başvuruları); yerel makamlar ve hastanelerle iletişim; Merkez ve AFAD gibi kurumlarla koordinasyon; duyurular ve iletişim hattı; tahliye gerekirse planlama.", en: "Crisis desk; locating citizens (records, social media, family enquiries); contact with local authorities and hospitals; coordination with headquarters and agencies such as AFAD; public announcements and a contact line; evacuation planning if needed." },
    ek: [{ tr: "Ekip küçük ve telefonlar susmuyor. Önceliklendirmeyi nasıl yaparsınız?", en: "The team is small and the phones won't stop ringing. How do you prioritise?" }],
    model: { tr: "İlk saatlerde bir kriz masası kurar, ekip içinde net görev dağılımı yaparım. Önceliğim bölgedeki vatandaşlarımızın tespiti: konsolosluk kayıtları, aile başvuruları ve yerel makamlardan gelen bilgilerle bir liste oluştururuz; hastaneler ve yerel acil durum birimleriyle sürekli iletişim kurarız. Merkezi düzenli bilgilendirir, gerekiyorsa AFAD gibi kurumlarla koordinasyon sağlarız. Vatandaşlar ve aileleri için resmî kanallardan duyuru yapar, ulaşılabilecek bir iletişim hattı açarız; durum gerektirirse tahliye planlamasına geçeriz.",
             en: "In the first hours I would set up a crisis desk and assign clear tasks within the team. My priority would be locating our citizens in the area: we would build a list from consular records, family enquiries and information from local authorities, and keep in constant contact with hospitals and local emergency services. We would inform headquarters regularly and coordinate with agencies such as AFAD if needed. We would make announcements through official channels and open a reachable contact line for citizens and their families; if the situation required, we would move to evacuation planning." } },
  { tur: "konsolosluk", iskelet: "konsolosluk",
    soru: { tr: "Vize başvurusu reddedilen yabancı bir başvuru sahibi konsoloslukta sesini yükselterek itiraz ediyor. Nasıl davranırsınız?", en: "A foreign applicant whose visa was refused is protesting loudly at the consulate. How do you handle it?" },
    ipucu: { tr: "Sakin ve saygılı kal, kişiyi kalabalıktan ayır, dinle, kararın gerekçesini kurallar çerçevesinde açıkla, yeniden başvuru ya da itiraz yollarını anlat. Güvenlik gerekiyorsa prosedürü uygula. Söz verme.", en: "Stay calm and respectful, take the person away from the crowd, listen, explain the decision within the rules, describe reapplication or appeal options. Follow security procedures if needed. Make no promises." },
    ek: [{ tr: "Kişi bir tanıdığının sizi arayacağını söylüyor. Ne yaparsınız?", en: "The person says an acquaintance of theirs will call you. What do you do?" }],
    model: { tr: "Önce sakin ve saygılı bir tonla kişiyi bekleme salonundaki kalabalıktan ayırır ve dinlerim; çoğu zaman öfkenin arkasında bir ihtiyaç ya da bilgi eksikliği olur. Kararı değiştirme yetkim olmasa bile gerekçeyi kurallar çerçevesinde açıklar, yeniden başvuru ya da itiraz için hangi belgelerin gerektiğini net olarak anlatırım. Kimseye söz vermem ve ayrıcalık tanımam; davranış güvenliği tehdit ederse kurumun güvenlik prosedürünü uygularım. Amaç, kişinin kararı beğenmese bile adil muamele gördüğünü hissetmesi.",
             en: "First, in a calm and respectful tone, I would take the person away from the crowd in the waiting area and listen; there is often a need or missing information behind the anger. Even if I cannot change the decision, I would explain its grounds within the rules and clearly describe which documents are needed to reapply or appeal. I would make no promises and grant no privileges; if the behaviour threatened security, I would follow the mission's security procedures. The aim is for the person to feel treated fairly, even if they dislike the decision." } },
  { tur: "konsolosluk", iskelet: "politika",
    soru: { tr: "Diplomatik ve konsüler dokunulmazlık arasındaki fark nedir?", en: "What is the difference between diplomatic and consular immunity?" },
    ipucu: { tr: "1961 Viyana Diplomatik İlişkiler ile 1963 Viyana Konsolosluk İlişkileri Sözleşmesi. Diplomatik dokunulmazlık daha geniştir (cezai yargı bağışıklığı tam); konsüler dokunulmazlık esas olarak görev eylemleriyle sınırlıdır.", en: "The 1961 Vienna Convention on Diplomatic Relations vs the 1963 Vienna Convention on Consular Relations. Diplomatic immunity is broader (full immunity from criminal jurisdiction); consular immunity is mainly limited to official acts." },
    ek: [{ tr: "Persona non grata ne demektir ve hangi maddede düzenlenir?", en: "What does persona non grata mean, and which article governs it?" }],
    model: { tr: "Kısaca diplomatik dokunulmazlık daha geniş, konsüler dokunulmazlık daha sınırlıdır. 1961 Viyana Diplomatik İlişkiler Sözleşmesi'ne göre diplomatik ajanlar kabul eden devletin cezai yargısından tamamen bağışıktır ve şahısları dokunulmazdır. 1963 Viyana Konsolosluk İlişkileri Sözleşmesi ise konsolosluk memurlarına esas olarak görevleriyle ilgili eylemler için bağışıklık tanır; ağır suçlarda yargı kararıyla tutuklanabilirler. İki rejimde de kabul eden devlet, bir görevliyi gerekçe göstermeden istenmeyen kişi ilan edebilir.",
             en: "In short, diplomatic immunity is broader and consular immunity more limited. Under the 1961 Vienna Convention on Diplomatic Relations, diplomatic agents enjoy full immunity from the receiving state's criminal jurisdiction and their persons are inviolable. The 1963 Vienna Convention on Consular Relations grants consular officers immunity mainly for acts performed in their official functions; for grave crimes they can be detained by judicial decision. Under both regimes, the receiving state may declare an official persona non grata without giving reasons." } },
  { tur: "konsolosluk", iskelet: "politika",
    soru: { tr: "Mütekabiliyet ilkesini vize politikası örneğiyle açıklayınız.", en: "Explain the principle of reciprocity with an example from visa policy." },
    ipucu: { tr: "Tanım → vize rejimlerinde karşılıklılık → esneklik örnekleri (tek taraflı vize muafiyetleri, turizm veya ekonomi gerekçesi).", en: "Definition → reciprocity in visa regimes → examples of flexibility (unilateral visa exemptions on tourism or economic grounds)." },
    ek: [{ tr: "Türkiye mütekabiliyet olmadan vize muafiyeti tanıyor mu? Neden?", en: "Does Türkiye grant visa exemptions without reciprocity? Why?" }],
    model: { tr: "Mütekabiliyet, devletlerin birbirlerine karşılıklı olarak eşit muamele etmesi ilkesidir. Vize politikasında bu, bir ülke vatandaşlarımıza vize uyguluyorsa bizim de o ülke vatandaşlarına benzer bir rejim uygulamamız anlamına gelir. Ancak ilke mutlak değildir; devletler turizm, ticaret ya da ilişkileri geliştirme gibi gerekçelerle tek taraflı muafiyet tanıyabilir. Yani mütekabiliyet bir başlangıç noktası, dış politika ve ekonomik çıkarlar ise uygulamadaki esnekliği belirler.",
             en: "Reciprocity is the principle that states grant each other mutually equal treatment. In visa policy, this means that if a country imposes visas on our citizens, we apply a similar regime to its citizens. However, the principle is not absolute; states may grant unilateral exemptions for reasons such as tourism, trade or developing relations. In other words, reciprocity is a starting point, while foreign policy and economic interests determine flexibility in practice." } },

  // ----- BASKI -----
  { tur: "baski", iskelet: "baski",
    soru: { tr: "Jüri itiraz ediyor: \"Ama Türkiye'nin tutumu çelişkili değil mi?\"", en: "The panel objects: \"But isn't Türkiye's position contradictory?\"" },
    ipucu: { tr: "Savunmaya geçme. Gerilimi kabul et, çıkar temelli açıkla ve resmî gerekçeyi aktar. Sakin, yapılandırılmış ve kısa ol.", en: "Don't become defensive. Acknowledge the tension, explain it in terms of interests and convey the official rationale. Stay calm, structured and brief." },
    ek: [{ tr: "Yani siz de bir çelişki olduğunu kabul ediyorsunuz?", en: "So you admit there is a contradiction?" }],
    model: { tr: "Haklı bir noktaya değindiniz; dışarıdan bakıldığında bazı tutumlar çelişkili görünebilir. Ancak konuya çıkarlar açısından bakarsak tablo netleşiyor: Türkiye aynı anda birden fazla güvenlik ve ekonomik çıkarı korumak zorunda ve bu, farklı aktörlerle farklı düzeylerde ilişki kurmayı gerektiriyor. Resmî tutum da tutarlılığı ilkelerde arıyor: toprak bütünlüğü, uluslararası hukuk ve diyalog. Bence bu bir çelişki değil, karmaşık bir bölgede bilinçli bir denge politikası.",
             en: "You raise a fair point; from the outside some positions may look contradictory. But if we look at it in terms of interests, the picture becomes clearer: Türkiye must protect several security and economic interests at once, which requires relations at different levels with different actors. The official position looks for consistency in principles: territorial integrity, international law and dialogue. In my view this is not a contradiction but a deliberate balancing policy in a complex region." } },
  { tur: "baski", iskelet: "baski",
    soru: { tr: "Bu cevabınız yüzeysel kaldı. Biraz daha derinleştirebilir misiniz?", en: "That answer was rather superficial. Could you go deeper?" },
    ipucu: { tr: "Bozulma. Teşekkür et, bir önceki cevaptan tek bir noktayı seç ve onu bir somut örnek, bir rakam ya da bir kısıtla derinleştir. Yeni konuya geçme.", en: "Don't get flustered. Thank them, pick one point from your previous answer and deepen it with a concrete example, a figure or a constraint. Don't change the subject." },
    ek: [{ tr: "Hâlâ ikna olmadım.", en: "I'm still not convinced." }],
    model: { tr: "Teşekkür ederim, haklısınız. Bir noktayı derinleştireyim: … konusunda asıl belirleyici olan … Somut bir örnek vermem gerekirse … Bu, Türkiye'nin … konusundaki seçeneklerini de sınırlıyor. Dolayısıyla bence meselenin özü …",
             en: "Thank you, you are right. Let me go deeper on one point: what is really decisive in … is … To give a concrete example, … This also limits Türkiye's options regarding … So in my view, the core of the issue is …" } },
  { tur: "baski", iskelet: "baski",
    soru: { tr: "Sizce Türkiye son yıllarda dış politikada bir hata yaptı mı?", en: "Do you think Türkiye has made a foreign policy mistake in recent years?" },
    ipucu: { tr: "Tuzağa düşme: ne körü körüne savun ne de sert eleştir. Bir konuyu seç, koşulları ve kısıtları anlat, \"bugünden bakınca\" diye dengeli bir değerlendirme yap, Türkiye'nin sonradan nasıl uyum sağladığını göster.", en: "Don't fall into the trap: neither defend blindly nor criticise harshly. Pick one issue, explain the conditions and constraints, give a balanced \"with hindsight\" assessment, and show how Türkiye later adapted." },
    ek: [{ tr: "Bu görüşünüzü Bakanlıkta bir amirinize de söyler miydiniz?", en: "Would you say this to a superior at the Ministry too?" }],
    model: { tr: "Her dış politika kararı, alındığı dönemin koşulları ve bilgileriyle değerlendirilmeli. Bugünden bakınca bazı dönemlerde bölgedeki gelişmelerin hızı, beklentileri aştı ve politikaların yeniden ayarlanması gerekti; Türkiye de son yıllarda Körfez ülkeleri ve bölgedeki diğer ülkelerle normalleşme adımları attı. Ben bunu bir hata kabulünden çok, değişen koşullara uyum sağlayabilen bir dış politika olarak görüyorum. Bir kamu görevlisi olarak görüşlerimi kurum içinde, uygun kanallardan ve yapıcı bir dille ifade etmem gerektiğine inanıyorum.",
             en: "Every foreign policy decision should be judged by the conditions and information of its time. With hindsight, in some periods the pace of developments in the region exceeded expectations and policies had to be recalibrated; in recent years Türkiye has taken normalisation steps with the Gulf states and other countries in the region. I see this less as an admission of error than as a foreign policy able to adapt to changing conditions. As a public servant, I believe I should express my views within the institution, through the proper channels and constructively." } },

  // ----- İNGİLİZCE -----
  { tur: "ingilizce", iskelet: "kisisel",
    soru: { tr: "Could you introduce yourself in English and tell us which foreign policy issue interests you most?", en: "Could you introduce yourself in English and tell us which foreign policy issue interests you most?" },
    ipucu: { tr: "Kısa cümleler kur, düzgün telaffuza öncelik ver. Present → past → future, sonra tek bir konu ve neden ilgini çektiği. Özne-yüklem uyumuna ve \"the\" kullanımına dikkat et.", en: "Use short sentences and prioritise clear pronunciation. Present → past → future, then one issue and why it interests you. Watch subject–verb agreement and the use of \"the\"." },
    ek: [{ tr: "What is Türkiye's position on that issue?", en: "What is Türkiye's position on that issue?" },
         { tr: "How would you explain that position to someone who disagrees?", en: "How would you explain that position to someone who disagrees?" }],
    model: { tr: "I recently completed a master's degree in international relations, and I am preparing for a career at the Ministry of Foreign Affairs. Studying abroad and working on international events taught me how to communicate across cultures. The issue that interests me most is energy security in the Eastern Mediterranean, because it connects maritime law, regional relations and Türkiye's role as an energy corridor. I would like to contribute to this field in my career.",
             en: "I recently completed a master's degree in international relations, and I am preparing for a career at the Ministry of Foreign Affairs. Studying abroad and working on international events taught me how to communicate across cultures. The issue that interests me most is energy security in the Eastern Mediterranean, because it connects maritime law, regional relations and Türkiye's role as an energy corridor. I would like to contribute to this field in my career." } },
  { tur: "ingilizce", iskelet: "politika",
    soru: { tr: "In your view, what is the biggest challenge facing multilateralism today?", en: "In your view, what is the biggest challenge facing multilateralism today?" },
    ipucu: { tr: "Tek bir ana zorluk seç (ör. Güvenlik Konseyi'nin veto kaynaklı tıkanması), iki örnek ver (Gazze, Ukrayna) ve Türkiye'nin reform tutumuna bağla.", en: "Pick one main challenge (e.g. Security Council paralysis due to the veto), give two examples (Gaza, Ukraine) and link to Türkiye's reform position." },
    ek: [{ tr: "Is UN Security Council reform realistic?", en: "Is UN Security Council reform realistic?" }],
    model: { tr: "In my view, the biggest challenge is the loss of trust in multilateral institutions, especially the UN Security Council. Because of the veto, the Council has been unable to act effectively on crises such as Gaza and Ukraine. This weakens the credibility of the whole system. Türkiye argues that \"the world is bigger than five\" and calls for a more representative and effective Council. Reform will be difficult, but regional and issue-based cooperation, such as mediation initiatives, can help keep multilateralism alive.",
             en: "In my view, the biggest challenge is the loss of trust in multilateral institutions, especially the UN Security Council. Because of the veto, the Council has been unable to act effectively on crises such as Gaza and Ukraine. This weakens the credibility of the whole system. Türkiye argues that \"the world is bigger than five\" and calls for a more representative and effective Council. Reform will be difficult, but regional and issue-based cooperation, such as mediation initiatives, can help keep multilateralism alive." } }
];

// Jüri simülasyonu seviyeleri: düşünme süresi, ipucu, ek soru olasılığı, soru sayısı
const MULAKAT_SEVIYE = [
  { ad: { tr: "1 · Isınma", en: "1 · Warm-up" }, acik: { tr: "30 sn düşünme, iskelet açık, ek soru yok, 3 soru", en: "30 s thinking time, framework shown, no follow-ups, 3 questions" }, dusunme: 30, iskelet: true, ek: 0, sayi: 3 },
  { ad: { tr: "2 · Standart", en: "2 · Standard" }, acik: { tr: "15 sn düşünme, iskelet kapalı, ara sıra ek soru, 4 soru", en: "15 s thinking time, framework hidden, occasional follow-ups, 4 questions" }, dusunme: 15, iskelet: false, ek: 0.4, sayi: 4 },
  { ad: { tr: "3 · Gerçekçi jüri", en: "3 · Realistic panel" }, acik: { tr: "10 sn düşünme, sık ek soru, baskı sorusu dahil, 5 soru", en: "10 s thinking time, frequent follow-ups, includes a pressure question, 5 questions" }, dusunme: 10, iskelet: false, ek: 0.7, sayi: 5 },
  { ad: { tr: "4 · Zor jüri", en: "4 · Tough panel" }, acik: { tr: "Düşünme süresi yok, her soruya ek soru, İngilizce soru dahil, 6 soru", en: "No thinking time, a follow-up to every question, includes an English question, 6 questions" }, dusunme: 0, iskelet: false, ek: 1, sayi: 6 }
];
