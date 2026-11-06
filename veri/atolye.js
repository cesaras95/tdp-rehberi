// ATÖLYE: Kitaptan (Oran, TDP Cilt I–III) beslenen etkileşimli çalışma araçları.
// Benzetme: Ana ders kitabının yanındaki "uygulama defteri". Bilgi aynı, ama bu kez
// konuyu izleyerek, karar vererek ve harita üzerinde göstererek çalışıyorsun.
// Tüm metinler kendi ifademizdir; kitaptan alıntı yoktur. Sayfa numaraları yalnızca kaynak gösterir.

// ---------- 1) ARAYÜZ METİNLERİ ----------
Object.assign(ARAYUZ.tr, {
  menuKarar: "Karar Anı",
  ikiBakis: "Aynı olaya iki bakış",
  bakisResmi: "Türkiye'nin tutumu",
  bakisKarsi: "Karşı tarafın anlatısı",
  bakisCevap: "Sınavda/mülakatta:",
  etiketAcik: "Oran'ın kitabındaki dönem adı",
  etiketOnek: "Kitapta",
  izlekDonem: "Dönemler",
  izlekKonu: "Konu izleği",
  izlekGiris: "Bir konu seç; 1919'dan bugüne o konudaki olaylar tek bir zaman çizgisinde sıralanır.",
  izlekOlay: "olay",
  izlekDonemi: "Dönem",
  kararBaslik: "Karar Anı",
  kararUst: "Simülasyon",
  kararGiris: "Türk dış politikasının kritik anlarında karar vericinin yerine geç. Seçeneği seç; sonra gerçekte ne yapıldığını ve nedenini gör.",
  kararSoru: "Ne yapardın?",
  kararGercek: "Gerçekte yapılan",
  kararSonuc: "Sonuç",
  kararNeden: "Neden bu yol seçildi?",
  kararDogru: "Karar vericiyle aynı yolu seçtin.",
  kararFarkli: "Karar verici farklı bir yol seçti.",
  kararSonraki: "Sonraki senaryo →",
  kararBastan: "Baştan başla",
  kararSkor: "{d} / {n} senaryoda gerçek kararla aynı yolu seçtin.",
  kararKaynak: "Kaynak",
  kararSecildi: "Seçimin",
  bakanOlaylar: "Bu görev süresindeki olaylar ({n})",
  oyunBaslik: "Bakanı bul",
  oyunGiris: "Olay gerçekleştiğinde Dışişleri Bakanı kimdi?",
  oyunBasla: "Oyunu başlat",
  oyunSonraki: "Sonraki olay →",
  oyunDogru: "Doğru!",
  oyunYanlis: "Doğru cevap: {ad}",
  oyunSkor: "Skor: {d} / {n}",
  antlasmaBaslik: "Antlaşmalar ve sınırlar haritası",
  antlasmaAcik: "Türkiye'nin sınırlarını ve deniz/boğaz rejimini belirleyen başlıca antlaşmalar. Bir işarete ya da listedeki bir antlaşmaya gel.",
  antlasmaKunye: "Şematik gösterim; işaretler antlaşmanın ilgilendirdiği bölgeyi gösterir, kesin sınır çizgisi değildir. Sınırlar: Natural Earth (kamu malı).",
  antlasmaTarihte: "Tarih sekmesinde aç →"
});
Object.assign(ARAYUZ.en, {
  menuKarar: "Decision Point",
  ikiBakis: "Two perspectives on the same event",
  bakisResmi: "Türkiye's position",
  bakisKarsi: "The other side's narrative",
  bakisCevap: "In the exam/interview:",
  etiketAcik: "Period name used in Oran's book",
  etiketOnek: "In the book",
  izlekDonem: "Periods",
  izlekKonu: "Topic thread",
  izlekGiris: "Choose a topic; events on that topic from 1919 to the present are arranged on a single timeline.",
  izlekOlay: "events",
  izlekDonemi: "Period",
  kararBaslik: "Decision Point",
  kararUst: "Simulation",
  kararGiris: "Step into the shoes of the decision-maker at critical moments of Turkish foreign policy. Choose an option, then see what was actually done and why.",
  kararSoru: "What would you do?",
  kararGercek: "What was actually done",
  kararSonuc: "Outcome",
  kararNeden: "Why was this course chosen?",
  kararDogru: "You chose the same course as the decision-maker.",
  kararFarkli: "The decision-maker chose a different course.",
  kararSonraki: "Next scenario →",
  kararBastan: "Start again",
  kararSkor: "You matched the actual decision in {d} of {n} scenarios.",
  kararKaynak: "Source",
  kararSecildi: "Your choice",
  bakanOlaylar: "Events during this term of office ({n})",
  oyunBaslik: "Find the Minister",
  oyunGiris: "Who was Minister of Foreign Affairs when the event took place?",
  oyunBasla: "Start the game",
  oyunSonraki: "Next event →",
  oyunDogru: "Correct!",
  oyunYanlis: "Correct answer: {ad}",
  oyunSkor: "Score: {d} / {n}",
  antlasmaBaslik: "Map of treaties and borders",
  antlasmaAcik: "The principal treaties that determined Türkiye's borders and its maritime and Straits regime. Hover over a marker or a treaty in the list.",
  antlasmaKunye: "Schematic representation; markers indicate the region concerned by each treaty, not exact boundary lines. Borders: Natural Earth (public domain).",
  antlasmaTarihte: "Open in the History tab →"
});

// Kitabın ciltleri dönemlere göre (TARIH dizisindeki sıraya göre)
const TARIH_CILT = ["I", "I", "I", "I", "I", "II", "II", "III", "III"];

// ---------- 2) KİTAPTAKİ DÖNEM ADLARI ----------
// Oran'ın dönemlendirmesi: ithal ikameci dönemler "Göreli Özerklik", dışa açılma dönemleri "Batı Bloku Ekseninde".
[
  { tr: "Kurtuluş Yılları", en: "The Years of Liberation" },
  { tr: "Göreli Özerklik-1", en: "Relative Autonomy-1" },
  { tr: "Savaş Kaosunda, Göreli Özerklik-2", en: "In the Chaos of War, Relative Autonomy-2" },
  { tr: "Batı Bloku Ekseninde-1", en: "On the Axis of the Western Bloc-1" },
  { tr: "Göreli Özerklik-3", en: "Relative Autonomy-3" },
  { tr: "Batı Bloku Ekseninde-2", en: "On the Axis of the Western Bloc-2" },
  { tr: "Küreselleşme Ekseninde", en: "On the Axis of Globalisation" },
  { tr: "Cilt III: 2001–2012", en: "Volume III: 2001–2012" }
].forEach((e, i) => { if (TARIH[i]) TARIH[i].etiket = e; });

// ---------- 3) AYNI OLAYA İKİ BAKIŞ ----------
// [dönem sırası, olay sırası, {resmi, karsi, cevap}]
[
  [0, 11, {
    resmi: { tr: "Lozan, Türkiye'nin kurucu belgesidir: Sevr'i geçersiz kılmış, kapitülasyonları kaldırmış, Ege'de adalar arasındaki dengeyi ve azınlık rejimini karşılıklılık temelinde kurmuştur. Türkiye, Ege'deki statükonun Lozan ve 1947 Paris Antlaşması'na dayandığını, doğu Ege adalarının silahsızlandırılmış statüsünün de bu dengenin parçası olduğunu vurgular.", en: "Lausanne is Türkiye's founding instrument: it superseded Sèvres, abolished the capitulations and established, on the basis of reciprocity, the balance among the Aegean islands and the minority regime. Türkiye emphasises that the status quo in the Aegean rests on Lausanne and the 1947 Treaty of Paris, and that the demilitarised status of the eastern Aegean islands is an integral part of this balance." },
    karsi: { tr: "Yunanistan da Lozan'ı Ege'deki düzenin temeli sayar; ancak bazı adaların silahlandırılmasını meşru müdafaa hakkıyla açıklar ve Limni ile Semadirek'in statüsünün Montrö ile değiştiğini savunur.", en: "Greece also regards Lausanne as the basis of the Aegean order, but justifies the militarisation of certain islands by reference to the right of legitimate defence and argues that the status of Limnos and Samothrace was altered by Montreux." },
    cevap: { tr: "Silahsızlandırma yükümlülüğünün antlaşmadan doğduğunu ve tek taraflı yorumla değiştirilemeyeceğini; Montrö'nün yalnızca Boğazlar bölgesini düzenlediğini belirt.", en: "State that the demilitarisation obligation derives from treaty and cannot be altered by unilateral interpretation, and that Montreux regulates only the Straits zone." }
  }],
  [3, 1, {
    resmi: { tr: "Boğazların savunması yalnızca kıyı devleti Türkiye'nin sorumluluğudur. Montrö çok taraflı bir sözleşmedir ve ancak taraflarının katılımıyla gözden geçirilebilir; ikili bir düzenlemeyle ortak üs kurulması egemenlikle bağdaşmaz.", en: "The defence of the Straits is the sole responsibility of Türkiye as the littoral state. Montreux is a multilateral convention that may be revised only with the participation of its parties; establishing joint bases through a bilateral arrangement is incompatible with sovereignty." },
    karsi: { tr: "SSCB, Montrö'nün savaş sırasında Karadeniz devletlerinin güvenliğini korumadığını ileri sürdü; Boğazlar rejiminin Karadeniz'e kıyısı olan devletlerce belirlenmesini ve ortak savunma düzeni kurulmasını önerdi.", en: "The USSR contended that Montreux had failed to protect the security of the Black Sea states during the war, and proposed that the Straits regime be determined by the Black Sea littoral states and that a joint defence arrangement be established." },
    cevap: { tr: "Türkiye'nin savaş boyunca Montrö'yü titizlikle uyguladığını ve bu tutumun 1947 Truman Doktrini ile uluslararası destek gördüğünü vurgula.", en: "Emphasise that Türkiye applied Montreux scrupulously throughout the war and that this position gained international support with the 1947 Truman Doctrine." }
  }],
  [4, 3, {
    resmi: { tr: "Türkiye, 1960 Garanti Antlaşması'ndan doğan haklarını kullanma iradesini korudu. İnönü'nün yanıt mektubu, ittifak dayanışmasının karşılıklı olduğunu ve bir müttefikin meşru güvenlik kaygılarının göz ardı edilemeyeceğini açıkça ortaya koydu.", en: "Türkiye maintained its resolve to exercise its rights under the 1960 Treaty of Guarantee. İnönü's reply made clear that Alliance solidarity is reciprocal and that an Ally's legitimate security concerns cannot be disregarded." },
    karsi: { tr: "ABD, iki NATO müttefiki arasında çatışma çıkmasını ve bunun Sovyet müdahalesine yol açmasını önlemek istedi; ABD'den sağlanan silahların yalnızca savunma amacıyla kullanılabileceğini hatırlattı.", en: "The United States sought to prevent a conflict between two NATO Allies that might invite Soviet intervention, and recalled that arms supplied by the United States could be used for defensive purposes only." },
    cevap: { tr: "Mektubu, Türkiye'de dış politikayı çeşitlendirme arayışının başlangıç noktası olarak ele al; SSCB ile yakınlaşmaya ve Bağlantısızlarla temaslara bağla.", en: "Treat the letter as the starting point of Türkiye's search for a more diversified foreign policy, linking it to the rapprochement with the USSR and contacts with the Non-Aligned countries." }
  }],
  [4, 10, {
    resmi: { tr: "15 Temmuz 1974'te Yunan cuntasının desteklediği darbe, Kıbrıs'ı Yunanistan'a bağlama (Enosis) amacını taşıyordu. Türkiye, İngiltere ile ortak hareket önerisi sonuçsuz kalınca 1960 Garanti Antlaşması'nın IV. maddesine dayanarak müdahale etti; amaç Kıbrıs Türklerinin can güvenliğini sağlamak ve adanın bağımsızlığını korumaktı.", en: "The coup of 15 July 1974, backed by the Greek junta, aimed at the union of Cyprus with Greece (Enosis). When its proposal for joint action with the United Kingdom produced no result, Türkiye intervened on the basis of Article IV of the 1960 Treaty of Guarantee, with the aim of ensuring the safety of the Turkish Cypriots and preserving the independence of the island." },
    karsi: { tr: "Rum tarafı ve Yunanistan, özellikle ikinci aşamayı garanti hakkının sınırlarını aşan bir işgal olarak niteler; BM Güvenlik Konseyi'nin 353 sayılı kararına ve yabancı askerlerin çekilmesi çağrısına atıf yapar.", en: "The Greek Cypriot side and Greece characterise the operation, particularly its second phase, as an occupation exceeding the limits of the right of guarantee, and refer to Security Council resolution 353 and its call for the withdrawal of foreign troops." },
    cevap: { tr: "Sıralamayı koru: 1963–74 dönemi, 15 Temmuz darbesi, garanti hakkı, iki aşama. Annan Planı'nı Kıbrıs Türklerinin kabul edip Rumların reddettiğini ekle.", en: "Keep the sequence: the 1963–74 period, the coup of 15 July, the right of guarantee and the two phases. Add that the Turkish Cypriots accepted and the Greek Cypriots rejected the Annan Plan." }
  }],
  [5, 4, {
    resmi: { tr: "KKTC'nin ilanı, iki toplumlu ortaklık devletinin 1963'te Rum tarafınca fiilen sona erdirilmesinden sonra Kıbrıs Türklerinin eşit statü ve kendi kaderini tayin hakkının ifadesidir. Türkiye KKTC'yi ilan edildiği gün tanıdı.", en: "The proclamation of the TRNC expressed the equal status and right of self-determination of the Turkish Cypriots after the bi-communal partnership state had been de facto terminated by the Greek Cypriot side in 1963. Türkiye recognised the TRNC on the day of its proclamation." },
    karsi: { tr: "Rum tarafı bu adımı ayrılıkçı bir girişim olarak gördü; BM Güvenlik Konseyi 541 sayılı kararla ilanı hukuken geçersiz sayıp devletleri tanımamaya çağırdı.", en: "The Greek Cypriot side regarded the step as a secessionist act; in resolution 541 the Security Council deemed the proclamation legally invalid and called on states not to recognise it." },
    cevap: { tr: "Tanınmanın siyasi bir tercih olduğunu ve ilanın müzakere masasını kapatmadığını; KKTC'nin sonraki BM süreçlerine katıldığını vurgula.", en: "Stress that recognition is a political choice and that the proclamation did not close the negotiating table; the TRNC participated in subsequent UN processes." }
  }],
  [6, 4, {
    resmi: { tr: "Türkiye, Ermenistan'ın Azerbaycan topraklarını işgal etmesi ve Kelbecer'e saldırması üzerine sınırını kapattı; ilişkilerin normalleşmesini bölgesel barışa ve Azerbaycan'ın toprak bütünlüğüne saygıya bağladı.", en: "Türkiye closed its border following Armenia's occupation of Azerbaijani territory and the attack on Kalbajar, linking the normalisation of relations to regional peace and respect for Azerbaijan's territorial integrity." },
    karsi: { tr: "Ermenistan, sınırın kapatılmasını bir ekonomik abluka olarak niteledi ve ilişkilerin önkoşulsuz kurulmasını savundu.", en: "Armenia described the closure of the border as an economic blockade and advocated the establishment of relations without preconditions." },
    cevap: { tr: "Kararın gerekçesini bölgesel bağlamda anlat; 2009 protokollerine ve 2021 sonrası normalleşme sürecindeki özel temsilciler mekanizmasına bağla.", en: "Explain the rationale in its regional context and link it to the 2009 protocols and the special envoys mechanism of the normalisation process since 2021." }
  }],
  [6, 7, {
    resmi: { tr: "Türkiye'ye göre Ege'de Lozan ve 1947 Paris Antlaşması ile egemenliği açıkça devredilmemiş ada, adacık ve kayalıklar vardır ('gri bölgeler'). Yunanistan'ın dayandığı 1932 İtalya-Türkiye tutanağı ise usulüne uygun bir antlaşma niteliği taşımaz.", en: "In Türkiye's view, there are islands, islets and rocks in the Aegean whose sovereignty was not explicitly ceded by Lausanne or the 1947 Treaty of Paris ('grey zones'). The 1932 Italian-Turkish record on which Greece relies does not constitute a duly concluded treaty." },
    karsi: { tr: "Yunanistan, Kardak'ın 1932 düzenlemeleriyle İtalya'ya, 1947 Paris Antlaşması ile de Onikiadalar'la birlikte kendisine geçtiğini ve egemenliğinin tartışmasız olduğunu savunur.", en: "Greece maintains that Imia/Kardak passed to Italy under the 1932 arrangements and to Greece, together with the Dodecanese, under the 1947 Treaty of Paris, and that its sovereignty is indisputable." },
    cevap: { tr: "Krizin karşılıklı geri çekilmeyle, kriz öncesi duruma dönülerek yönetildiğini; Madrid Mutabakatı'nın (1997) ardından geldiğini belirt.", en: "Note that the crisis was managed through mutual withdrawal and a return to the status quo ante, and that it was followed by the Madrid Declaration (1997)." }
  }],
  [7, 3, {
    resmi: { tr: "Kıbrıs Türkleri Annan Planı'nı yüzde 65 oyla kabul ederek çözüm iradesini gösterdi; Rum tarafı yüzde 76 oyla reddetti. Buna karşın Rum Yönetimi AB'ye adanın tamamı adına üye oldu ve Kıbrıs Türklerine verilen yalıtılmışlığı sona erdirme taahhütleri yerine getirilmedi.", en: "By accepting the Annan Plan with 65 per cent of the vote, the Turkish Cypriots demonstrated their will for a settlement; the Greek Cypriot side rejected it with 76 per cent. Nevertheless, the Greek Cypriot Administration joined the EU on behalf of the whole island, and the commitments to end the isolation of the Turkish Cypriots were not fulfilled." },
    karsi: { tr: "Rum tarafı, planın garanti sistemi, Türk askerinin varlığı, mülkiyet ve yerleşim konularında kendi beklentilerini karşılamadığını ve fazla Kıbrıs Türk tarafına yakın olduğunu ileri sürdü.", en: "The Greek Cypriot side argued that the plan did not meet its expectations on the system of guarantees, the Turkish military presence, property and settlement, and that it leaned too far towards the Turkish Cypriot side." },
    cevap: { tr: "Referandum sonuçlarını rakamlarıyla ver; 2004 sonrası Türkiye'nin 'çözümün önünde olma' yaklaşımını ve 2017 Crans-Montana sonrasındaki iki devletli çözüm vizyonunu bağla.", en: "Give the referendum results with figures, then link Türkiye's post-2004 approach of 'being one step ahead in the search for a settlement' to its two-state vision after Crans-Montana (2017)." }
  }],
  [7, 15, {
    resmi: { tr: "İnsani yardım taşıyan sivil bir filoya uluslararası sularda yapılan saldırı uluslararası hukukun açık ihlalidir; Türkiye özür, tazminat ve Gazze ablukasının kaldırılmasını talep etti.", en: "The attack on a civilian flotilla carrying humanitarian aid in international waters was a clear violation of international law; Türkiye demanded an apology, compensation and the lifting of the blockade of Gaza." },
    karsi: { tr: "İsrail, Gazze'ye yönelik deniz ablukasının güvenlik gereği ve meşru olduğunu, askerlerinin gemide direnişle karşılaştığını savundu. BM Genel Sekreteri'nin kurduğu panel (Palmer Raporu) ablukayı hukuka uygun bulmakla birlikte müdahalenin aşırı ve makul olmayan biçimde yapıldığı sonucuna vardı.", en: "Israel argued that the naval blockade of Gaza was a legitimate security measure and that its soldiers had met resistance on board. The panel established by the Secretary General of the UN (the Palmer Report) found the blockade lawful but concluded that the boarding had been excessive and unreasonable." },
    cevap: { tr: "Türkiye'nin üç talebini say; 2013 özrü ve 2016 normalleşme anlaşmasıyla süreci tamamla.", en: "List Türkiye's three demands, then complete the account with the 2013 apology and the 2016 normalisation agreement." }
  }],
  [8, 5, {
    resmi: { tr: "Rus uçağı, angajman kuralları çerçevesinde yapılan uyarılara rağmen Türk hava sahasını ihlal ettiği için düşürüldü. Türkiye egemenlik hakkını kullandığını vurgularken gerilimin tırmanmasını önlemek için diyalog kanallarını açık tuttu.", en: "The Russian aircraft was shot down because it violated Turkish airspace despite warnings issued under the rules of engagement. While stressing that it had exercised its sovereign rights, Türkiye kept channels of dialogue open to prevent escalation." },
    karsi: { tr: "Rusya, uçağın Suriye hava sahasında olduğunu ileri sürdü ve olayı ağır biçimde kınayarak Türkiye'ye ekonomik yaptırımlar uyguladı.", en: "Russia claimed that the aircraft had been within Syrian airspace, strongly condemned the incident and imposed economic sanctions on Türkiye." },
    cevap: { tr: "Krizden Haziran 2016'da normalleşmeye ve ardından Astana sürecine geçişi, iki ülkenin 'rekabet içinde işbirliği' modeline örnek olarak sun.", en: "Present the shift from the crisis to normalisation in June 2016 and then to the Astana process as an example of the two countries' model of 'cooperation amid competition'." }
  }],
  [9, 1, {
    resmi: { tr: "Türkiye, hava savunma ihtiyacını müttefiklerinden uygun koşullarla karşılayamayınca S-400 sistemini satın aldı; bunu egemenlik yetkisi kapsamında bir savunma tedariki kararı olarak görür ve F-35 programından çıkarılmayı haksız bulur.", en: "Having been unable to meet its air defence requirements from its Allies on suitable terms, Türkiye purchased the S-400 system; it regards this as a defence procurement decision within its sovereign competence and considers its removal from the F-35 programme unjustified." },
    karsi: { tr: "ABD, sistemin NATO altyapısıyla uyumsuz olduğunu ve F-35'in güvenliğini tehlikeye atacağını savundu; Aralık 2020'de CAATSA kapsamında Savunma Sanayii Başkanlığı'na yaptırım uyguladı.", en: "The United States argued that the system was incompatible with NATO infrastructure and would jeopardise the security of the F-35; in December 2020 it imposed sanctions on the Presidency of Defence Industries under CAATSA." },
    cevap: { tr: "Konuyu ittifak içi bir anlaşmazlık olarak çerçevele; çözüm için teknik çalışma grubu önerisini ve F-16 sürecini an.", en: "Frame the issue as an intra-Alliance disagreement and mention the proposal for a technical working group and the F-16 process as avenues for resolution." }
  }],
  [9, 2, {
    resmi: { tr: "Mutabakat, iki kıyıdaş devlet arasında hakkaniyet ilkesine göre yapılmış bir sınırlandırmadır. Türkiye'ye göre ana karaya göre ters tarafta kalan adalar kıta sahanlığı ve münhasır ekonomik bölge sınırlandırmasında tam etki doğuramaz.", en: "The Memorandum is a delimitation between two coastal states effected in accordance with equitable principles. In Türkiye's view, islands lying on the wrong side of the median line in relation to the mainland cannot generate full effect in the delimitation of the continental shelf and the exclusive economic zone." },
    karsi: { tr: "Yunanistan ve Mısır, mutabakatın Girit'in deniz yetki alanlarını yok saydığını ve BM Deniz Hukuku Sözleşmesi'nin 121. maddesine aykırı olduğunu savundu; Ağustos 2020'de kendi aralarında kısmi bir sınırlandırma anlaşması imzaladılar.", en: "Greece and Egypt argued that the Memorandum disregards Crete's maritime jurisdiction areas and contravenes Article 121 of the UN Convention on the Law of the Sea; in August 2020 they signed a partial delimitation agreement between themselves." },
    cevap: { tr: "Türkiye'nin UNCLOS'a taraf olmadığını ama hakkaniyet ilkesinin uluslararası yargı kararlarıyla desteklendiğini belirt; 2011 Türkiye-KKTC anlaşmasıyla bağlantı kur.", en: "Note that Türkiye is not a party to UNCLOS but that the principle of equity is supported by international jurisprudence, and link it to the 2011 Türkiye–TRNC agreement." }
  }]
].forEach(([d, o, b]) => { if (TARIH[d] && TARIH[d].olaylar[o]) TARIH[d].olaylar[o].bakis = b; });

// ---------- 4) KONU İZLEĞİ ----------
// Her konu: [dönem, olay] referansları. Olaylar TARIH'ten okunur; böylece metin tek yerde kalır.
const IZLEK = [
  { id: "bogazlar", ad: { tr: "Boğazlar ve Montrö", en: "The Straits and Montreux" },
    olaylar: [[0, 3], [0, 11], [1, 6], [2, 8], [2, 11], [3, 1], [3, 2], [9, 5]] },
  { id: "kibris", ad: { tr: "Kıbrıs", en: "Cyprus" },
    olaylar: [[3, 9], [3, 11], [4, 2], [4, 3], [4, 6], [4, 10], [4, 11], [4, 13], [5, 4], [7, 3], [8, 3], [10, 5]] },
  { id: "yunanistan", ad: { tr: "Yunanistan ve Ege", en: "Greece and the Aegean" },
    olaylar: [[0, 1], [0, 11], [1, 3], [1, 5], [3, 7], [4, 4], [4, 12], [5, 0], [5, 7], [5, 11], [6, 7], [6, 9], [6, 12], [9, 2]] },
  { id: "ab", ad: { tr: "Avrupa ve AB", en: "Europe and the EU" },
    olaylar: [[3, 12], [4, 1], [4, 14], [5, 8], [5, 9], [6, 6], [6, 10], [6, 14], [7, 0], [7, 5], [8, 6]] },
  { id: "abd-nato", ad: { tr: "ABD ve NATO", en: "The US and NATO" },
    olaylar: [[3, 0], [3, 2], [3, 3], [3, 5], [3, 6], [3, 13], [4, 0], [4, 3], [4, 8], [4, 9], [4, 11], [5, 1], [5, 14], [7, 2], [7, 4], [7, 16], [9, 1], [10, 1], [11, 0], [11, 1]] },
  { id: "rusya", ad: { tr: "Rusya / SSCB", en: "Russia / USSR" },
    olaylar: [[0, 6], [0, 7], [0, 8], [1, 0], [2, 0], [2, 11], [3, 1], [4, 5], [5, 5], [7, 9], [8, 5], [9, 0], [9, 1], [9, 5], [10, 3]] },
  { id: "ortadogu", ad: { tr: "Orta Doğu: Irak ve Suriye", en: "The Middle East: Iraq and Syria" },
    olaylar: [[1, 1], [1, 7], [1, 8], [1, 9], [3, 8], [3, 10], [5, 6], [5, 10], [5, 14], [6, 11], [7, 1], [7, 2], [7, 8], [8, 0], [8, 4], [8, 8], [9, 0], [10, 2]] },
  { id: "filistin", ad: { tr: "Filistin ve İsrail", en: "Palestine and Israel" },
    olaylar: [[3, 4], [4, 7], [5, 2], [5, 12], [6, 8], [7, 15], [8, 2], [10, 4]] },
  { id: "kafkasya", ad: { tr: "Kafkasya ve Türk dünyası", en: "The Caucasus and the Turkic world" },
    olaylar: [[0, 4], [0, 8], [6, 0], [6, 3], [6, 4], [6, 13], [7, 9], [7, 11], [7, 12], [9, 3], [9, 4]] },
  { id: "balkanlar", ad: { tr: "Balkanlar", en: "The Balkans" },
    olaylar: [[1, 5], [3, 7], [5, 13], [6, 1], [6, 5]] },
  { id: "cok-tarafli", ad: { tr: "Çok taraflı diplomasi ve BM", en: "Multilateral diplomacy and the UN" },
    olaylar: [[1, 4], [1, 8], [3, 5], [6, 2], [6, 13], [7, 6], [7, 7], [7, 10], [7, 14], [8, 1], [9, 5], [11, 2], [11, 3]] }
];

// ---------- 5) KARAR ANI SENARYOLARI ----------
// ref: TARIH'teki ilgili olay (sayfa numarası oradan okunur). gercek: doğru seçeneğin sırası (0'dan).
const KARAR = [
  { ref: [0, 5], yil: "1921",
    baslik: { tr: "Londra'dan dönen anlaşmalar", en: "The agreements brought back from London" },
    durum: { tr: "Londra Konferansı'nda Dışişleri Bakanı Bekir Sami Bey, İngiltere, Fransa ve İtalya ile ayrı ayrı anlaşmalar imzaladı. Anlaşmalar bazı çatışmaları sona erdiriyor, ama karşılığında bu devletlere Anadolu'da ekonomik ayrıcalıklar tanıyordu. Ankara Hükümeti ne yapmalı?", en: "At the London Conference, Minister of Foreign Affairs Bekir Sami Bey signed separate agreements with the United Kingdom, France and Italy. The agreements would end some hostilities but grant those Powers economic privileges in Anatolia in return. What should the Ankara Government do?" },
    secenekler: [
      { tr: "Anlaşmaları onaylamak: cephe sayısını azaltmak her şeyden önemli.", en: "Ratify the agreements: reducing the number of fronts matters above all." },
      { tr: "Anlaşmaları onaylamamak; Misak-ı Millî'den taviz vermeden her devletle ayrı ve eşit koşullarda pazarlık etmek.", en: "Decline to ratify the agreements and negotiate with each Power separately on equal terms, without compromising the National Pact." },
      { tr: "Diplomasiyi tümüyle bırakıp yalnızca askerî sonuca odaklanmak.", en: "Abandon diplomacy altogether and focus solely on a military outcome." }
    ], gercek: 1,
    sonuc: { tr: "TBMM anlaşmaları onaylamadı ve Bekir Sami Bey görevden ayrıldı. Ekim 1921'de Fransa ile imzalanan Ankara Anlaşması, ekonomik ayrıcalık vermeden güney cephesini kapattı.", en: "The Grand National Assembly did not ratify the agreements, and Bekir Sami Bey left office. The Ankara Agreement signed with France in October 1921 closed the southern front without granting economic privileges." },
    neden: { tr: "Misak-ı Millî tam bağımsızlığı esas alıyordu; ekonomik ayrıcalıklar kapitülasyonların yeni bir biçimi olacaktı. Ankara, İtilaf Devletleri arasındaki ayrılıklardan yararlanarak daha iyi koşulları ayrı ayrı elde edebileceğini gördü.", en: "The National Pact was predicated on full independence; economic privileges would have amounted to a new form of capitulations. Ankara saw that it could obtain better terms separately by taking advantage of the differences among the Entente Powers." } },
  { ref: [2, 6], yil: "1943",
    baslik: { tr: "Adana'da Churchill", en: "Churchill at Adana" },
    durum: { tr: "Ocak 1943. Stalingrad'da savaşın yönü değişiyor. İngiltere Başbakanı Churchill Adana'ya gelir ve Türkiye'nin Müttefikler safında savaşa girmesini ister; karşılığında silah ve teçhizat vaat eder. Türk ordusu modern silahlardan yoksundur, Bulgaristan'da Alman birlikleri bulunmaktadır.", en: "January 1943. The tide of war is turning at Stalingrad. British Prime Minister Churchill comes to Adana and asks Türkiye to enter the war on the Allied side, promising arms and equipment in return. The Turkish army lacks modern weapons, and German forces are stationed in Bulgaria." },
    secenekler: [
      { tr: "Hemen savaşa girmek: kazanan tarafın yanında yer almak savaş sonrası masada güç sağlar.", en: "Enter the war immediately: siding with the winners will bring influence at the post-war table." },
      { tr: "Savaş dışılığı sürdürmek; Müttefiklere yakınlığı korurken savaşa girmeyi yeterli silah ve hazırlık koşuluna bağlamak.", en: "Maintain non-belligerency; preserve closeness to the Allies while making entry into the war conditional on adequate arms and preparation." },
      { tr: "Almanya ile yakınlaşmayı derinleştirmek.", en: "Deepen the rapprochement with Germany." }
    ], gercek: 1,
    sonuc: { tr: "Türkiye savaş dışı kaldı; silah yardımı istenen düzeyde gelmedi. Türkiye ancak Şubat 1945'te, San Francisco Konferansı'na katılabilmek için Almanya ve Japonya'ya savaş ilan etti.", en: "Türkiye remained non-belligerent; arms deliveries never reached the level requested. Only in February 1945 did Türkiye declare war on Germany and Japan, in order to take part in the San Francisco Conference." },
    neden: { tr: "Karar vericiler 1941'de Yunanistan ve Yugoslavya'nın, Ağustos 1941'de İran'ın yaşadıklarını görmüştü. Hazırlıksız bir savaş Trakya ve İstanbul'u riske atabilir, ayrıca SSCB'nin 'kurtarıcı' olarak Türkiye'ye girmesine yol açabilirdi.", en: "The decision-makers had witnessed the fate of Greece and Yugoslavia in 1941 and of Iran in August 1941. An unprepared entry into the war could have put Thrace and İstanbul at risk and opened the way for the USSR to enter Türkiye as a 'liberator'." } },
  { ref: [3, 1], yil: "1946",
    baslik: { tr: "Sovyet notaları", en: "The Soviet notes" },
    durum: { tr: "SSCB, 1925 antlaşmasını feshetmiş, Boğazlar'da ortak savunma ve üs istemektedir. Ağustos 1946 notası, Boğazlar rejiminin yalnızca Karadeniz devletlerince belirlenmesini önerir. Türkiye savaştan yorgun ve yalnızdır.", en: "The USSR has denounced the 1925 treaty and is demanding joint defence of and bases on the Straits. Its note of August 1946 proposes that the Straits regime be determined solely by the Black Sea states. Türkiye is exhausted by the war and isolated." },
    secenekler: [
      { tr: "SSCB ile ikili bir düzenleme yaparak ortak üsse razı olmak.", en: "Accept joint bases through a bilateral arrangement with the USSR." },
      { tr: "Talepleri reddetmek; Boğazlar savunmasının yalnızca Türkiye'ye ait olduğunu, Montrö'nün ancak çok taraflı bir konferansta gözden geçirilebileceğini bildirmek.", en: "Reject the demands, stating that the defence of the Straits belongs to Türkiye alone and that Montreux can be reviewed only at a multilateral conference." },
      { tr: "Montrö'yü tek taraflı feshedip Boğazları tüm savaş gemilerine kapatmak.", en: "Denounce Montreux unilaterally and close the Straits to all warships." }
    ], gercek: 1,
    sonuc: { tr: "Türkiye talepleri reddetti. ABD ve İngiltere bu tutumu destekledi; 1947 Truman Doktrini ve ardından 1952 NATO üyeliği Türkiye'nin Batı ittifakına bağlanmasını sağladı.", en: "Türkiye rejected the demands. The United States and the United Kingdom supported this position; the Truman Doctrine of 1947 and NATO membership in 1952 anchored Türkiye in the Western alliance." },
    neden: { tr: "Ortak üs egemenliğin fiilen paylaşılması anlamına geliyordu. Montrö'nün çok taraflı yapısı, Türkiye'ye Batılı devletlerin desteğini arkasına alma imkânı verdi.", en: "Joint bases would have meant a de facto sharing of sovereignty. The multilateral character of Montreux enabled Türkiye to secure the backing of the Western Powers." } },
  { ref: [4, 3], yil: "1964",
    baslik: { tr: "Johnson Mektubu", en: "The Johnson Letter" },
    durum: { tr: "Haziran 1964. Kıbrıs'ta Kıbrıs Türklerine yönelik saldırılar sürerken Türkiye adaya müdahaleye hazırlanır. ABD Başkanı Johnson, Başbakan İnönü'ye sert bir mektup gönderir: ABD silahları bu amaçla kullanılamaz ve Sovyet müdahalesi hâlinde NATO'nun Türkiye'yi koruması sorgulanabilir.", en: "June 1964. With attacks on the Turkish Cypriots continuing, Türkiye prepares to intervene on the island. US President Johnson sends Prime Minister İnönü a stern letter: US arms may not be used for this purpose, and NATO's protection of Türkiye could be called into question in the event of Soviet intervention." },
    secenekler: [
      { tr: "Mektuba rağmen müdahaleyi gerçekleştirmek.", en: "Proceed with the intervention despite the letter." },
      { tr: "Müdahaleyi ertelemek, ama yazılı yanıtla tutumu açıkça savunmak ve dış politikayı çeşitlendirmeye başlamak.", en: "Postpone the intervention, but defend the position firmly in a written reply and begin to diversify foreign policy." },
      { tr: "NATO'nun askerî kanadından çekilmek.", en: "Withdraw from NATO's military structure." }
    ], gercek: 1,
    sonuc: { tr: "Müdahale ertelendi. İnönü'nün yanıtı ittifak ilişkisinin karşılıklılığını vurguladı. Ardından SSCB ile yakınlaşma, Arap ve Bağlantısız ülkelerle temaslar başladı; Türkiye BM'de destek arayışına girdi.", en: "The intervention was postponed. İnönü's reply underlined the reciprocal nature of the Alliance relationship. A rapprochement with the USSR and contacts with Arab and Non-Aligned countries followed, and Türkiye sought support at the UN." },
    neden: { tr: "Türkiye'nin o dönemde çıkarma kapasitesi sınırlıydı ve ABD'ye askerî bağımlılık yüksekti. Ertelenen karar, Türkiye'ye kendi askerî ve diplomatik kapasitesini geliştirme gerekliliğini gösterdi; bu birikim 1974'te sonuç verdi.", en: "Türkiye's amphibious capacity was limited at the time and its military dependence on the US was high. The deferred decision showed the need to build up its own military and diplomatic capacity, and this effort bore fruit in 1974." } },
  { ref: [4, 10], yil: "1974",
    baslik: { tr: "15 Temmuz darbesinden sonra", en: "After the coup of 15 July" },
    durum: { tr: "15 Temmuz 1974'te Atina'daki cuntanın desteklediği darbeyle Makarios devrilir, Enosis yanlısı Nikos Sampson iş başına getirilir. Kıbrıs Türklerinin güvenliği ciddi tehlike altındadır. Türkiye garantör devlettir.", en: "On 15 July 1974 a coup backed by the junta in Athens overthrows Makarios and installs the pro-Enosis Nikos Sampson. The security of the Turkish Cypriots is in grave danger. Türkiye is a guarantor power." },
    secenekler: [
      { tr: "Yalnızca diplomatik protesto ve BM'ye başvuru.", en: "Diplomatic protest and recourse to the UN only." },
      { tr: "Önce İngiltere'ye Garanti Antlaşması çerçevesinde ortak hareket önermek; sonuç alınamazsa IV. madde uyarınca tek başına müdahale etmek.", en: "First propose joint action to the United Kingdom under the Treaty of Guarantee; if this produces no result, intervene alone under Article IV." },
      { tr: "Yunanistan'a doğrudan savaş ilan etmek.", en: "Declare war on Greece directly." }
    ], gercek: 1,
    sonuc: { tr: "Başbakan Ecevit Londra'da ortak hareket önerdi; İngiltere kabul etmedi. Türkiye 20 Temmuz'da müdahale etti. Atina'daki cunta çöktü, Kıbrıs'ta darbe sona erdi. Cenevre görüşmeleri sonuçsuz kalınca 14 Ağustos'ta ikinci aşama başladı.", en: "Prime Minister Ecevit proposed joint action in London; the United Kingdom declined. Türkiye intervened on 20 July. The junta in Athens collapsed and the coup in Cyprus came to an end. When the Geneva talks failed, the second phase began on 14 August." },
    neden: { tr: "Garanti Antlaşması'nın IV. maddesi, ortak eylem mümkün olmazsa her garantörün anayasal düzeni yeniden kurmak amacıyla tek başına hareket hakkını öngörüyordu. Önce İngiltere'ye başvurmak, müdahalenin hukuki zeminini güçlendirdi.", en: "Article IV of the Treaty of Guarantee provided that, if concerted action proved impossible, each guarantor reserved the right to act alone with the sole aim of re-establishing the constitutional order. Approaching the United Kingdom first strengthened the legal basis of the intervention." } },
  { ref: [6, 7], yil: "1996",
    baslik: { tr: "Kardak kayalıkları", en: "The Kardak rocks" },
    durum: { tr: "Aralık 1995'te Kardak'ta karaya oturan bir Türk gemisinin ardından iki ülke arasında egemenlik tartışması başlar. Ocak 1996'da kayalıklara karşılıklı bayrak dikilir, iki ülkenin deniz kuvvetleri bölgede karşı karşıya gelir.", en: "After a Turkish vessel ran aground on Kardak in December 1995, a dispute over sovereignty arises between the two countries. In January 1996 flags are planted on the rocks by both sides, and the naval forces of the two countries face each other in the area." },
    secenekler: [
      { tr: "Askerî üstünlüğü kullanarak kayalıkları kalıcı olarak kontrol altına almak.", en: "Use military superiority to take permanent control of the rocks." },
      { tr: "Karşılıklı geri çekilmeyi kabul edip kriz öncesine dönmek; ama 'gri bölgeler' sorununu uluslararası gündeme taşımak.", en: "Accept mutual withdrawal and a return to the situation before the crisis, while placing the issue of 'grey zones' on the international agenda." },
      { tr: "Tüm Ege sorunlarını derhal Uluslararası Adalet Divanı'na götürmek.", en: "Refer all Aegean issues to the International Court of Justice immediately." }
    ], gercek: 1,
    sonuc: { tr: "ABD'nin girişimiyle taraflar askerlerini ve bayraklarını çekti; kriz öncesine dönüldü. Türkiye, egemenliği belirsiz ada ve kayalıklar sorununu ikili gündemin parçası hâline getirdi. 1997'de Madrid Mutabakatı imzalandı.", en: "Through the initiative of the United States, the parties withdrew their troops and flags, and the status quo ante was restored. Türkiye made the question of islands and rocks of undetermined sovereignty part of the bilateral agenda. The Madrid Declaration was signed in 1997." },
    neden: { tr: "İki NATO müttefiki arasında silahlı çatışma her iki ülkeye de ağır bedel yükleyecekti. Türkiye, krizin sağladığı görünürlükle Ege'deki sorunların bütüncül olduğu ve müzakereyle çözülmesi gerektiği tezini güçlendirdi.", en: "An armed clash between two NATO Allies would have imposed heavy costs on both. Türkiye used the visibility generated by the crisis to reinforce its view that the Aegean issues are interrelated and should be resolved through negotiation." } },
  { ref: [7, 2], yil: "2003",
    baslik: { tr: "1 Mart tezkeresi", en: "The motion of 1 March" },
    durum: { tr: "ABD, Irak'a kuzeyden ikinci bir cephe açmak için askerlerinin Türkiye üzerinden geçmesini istiyor. Hükümet, yabancı askerlerin Türkiye'de bulunmasına ve Türk askerinin yurt dışına gönderilmesine izin veren tezkereyi TBMM'ye sunar. Kamuoyunda savaşa karşı güçlü bir eğilim vardır. TBMM üyesi olsan ne yapardın?", en: "The United States wants its troops to transit Türkiye in order to open a second front in Iraq from the north. The Government submits to the Grand National Assembly a motion authorising the presence of foreign troops in Türkiye and the deployment of Turkish troops abroad. Public opinion is strongly opposed to the war. As a member of the Assembly, what would you do?" },
    secenekler: [
      { tr: "Tezkereyi kabul etmek: müttefik ilişkisi ve Kuzey Irak'taki gelişmeler üzerinde söz hakkı için.", en: "Approve the motion, for the sake of the Alliance relationship and a say in developments in northern Iraq." },
      { tr: "Tezkereyi kabul etmemek: BM Güvenlik Konseyi'nin açık yetkisi olmayan bir savaşa katılmamak.", en: "Withhold approval: do not join a war without an explicit authorisation from the Security Council." },
      { tr: "Oylamayı belirsiz bir tarihe ertelemek.", en: "Postpone the vote indefinitely." }
    ], gercek: 1,
    sonuc: { tr: "Tezkere 264 kabul, 250 ret ve 19 çekimser oyla, Anayasa'nın aradığı salt çoğunluğa ulaşamadığı için kabul edilmedi. ABD kuzey cephesini açamadı; ilişkilerde bir süre gerginlik yaşandı. Türkiye daha sonra hava sahasının kullanımına izin verdi.", en: "The motion received 264 votes in favour, 250 against and 19 abstentions; as it failed to reach the absolute majority required by the Constitution, it was not adopted. The United States was unable to open the northern front, and relations were strained for some time. Türkiye later permitted the use of its airspace." },
    neden: { tr: "Karar, dış politika kararlarında TBMM'nin anayasal rolünü ve demokratik meşruiyetin önemini öne çıkardı. Uluslararası hukuki zeminin zayıflığı ve bölgesel istikrara ilişkin kaygılar belirleyici oldu.", en: "The decision highlighted the constitutional role of the Grand National Assembly in foreign policy decisions and the importance of democratic legitimacy. Concerns over the weakness of the legal basis under international law and over regional stability proved decisive." } },
  { ref: [9, 5], yil: "2022",
    baslik: { tr: "Boğazlar ve Ukrayna savaşı", en: "The Straits and the war in Ukraine" },
    durum: { tr: "24 Şubat 2022'de Rusya Ukrayna'ya saldırır. Ukrayna Boğazların Rus savaş gemilerine kapatılmasını ister; bazı Batılı çevreler ise NATO gemilerinin Karadeniz'e girebilmesini tartışır. Montrö'nün uygulanması Türkiye'nin elindedir.", en: "On 24 February 2022 Russia attacks Ukraine. Ukraine asks for the Straits to be closed to Russian warships, while some Western circles discuss allowing NATO vessels into the Black Sea. The implementation of Montreux rests with Türkiye." },
    secenekler: [
      { tr: "Durumu 'savaş' olarak nitelemeden her şeyi olduğu gibi sürdürmek.", en: "Continue as before without characterising the situation as a 'war'." },
      { tr: "Durumu savaş olarak nitelemek, Montrö'nün ilgili hükümlerini uygulamak ve tüm devletleri Boğazlardan savaş gemisi geçirmemeleri konusunda uyarmak.", en: "Characterise the situation as a war, apply the relevant provisions of Montreux and advise all states not to send warships through the Straits." },
      { tr: "Montrö'yü askıya alıp Boğazları yalnızca müttefik gemilerine açmak.", en: "Suspend Montreux and open the Straits to Allied ships only." }
    ], gercek: 1,
    sonuc: { tr: "28 Şubat 2022'de Türkiye durumu savaş olarak niteledi ve Montrö'nün 19. maddesini uyguladı; kıyıdaş olan ve olmayan tüm devletleri savaş gemisi geçirmemeleri konusunda uyardı. Sözleşmenin üslerine dönüş istisnası korundu. Türkiye ardından İstanbul görüşmelerine ve Karadeniz Tahıl Girişimi'ne ev sahipliği yaptı.", en: "On 28 February 2022 Türkiye characterised the situation as a war and applied Article 19 of Montreux, advising all littoral and non-littoral states not to send warships through the Straits. The Convention's exception for return to base was preserved. Türkiye subsequently hosted the İstanbul talks and the Black Sea Grain Initiative." },
    neden: { tr: "Montrö'nün harfiyen uygulanması, Türkiye'yi taraf olmaktan korurken Karadeniz'in savaş alanının genişlemesini önledi. Sözleşmenin bütünlüğünü korumak, Türkiye'nin uzun vadeli çıkarı olarak görüldü.", en: "Strict application of Montreux kept Türkiye from becoming a party to the conflict and prevented the expansion of the theatre of war in the Black Sea. Preserving the integrity of the Convention was regarded as Türkiye's long-term interest." } }
];

// ---------- 6) KİTAPTAN KAVRAM KARTLARI ----------
// Bilgi kartları destesine eklenir. Her kartın sonunda "Sınavda" önerisi vardır.
[
  { on: { tr: "Orta büyüklükte devlet (OBD)", en: "Middle-sized state" },
    arka: { tr: "Oran'ın Türkiye için kullandığı çerçeve: büyük güç olmayan, ama bölgesinde ağırlığı olan ve güç dengesini izleyerek hareket alanı açabilen devlet. İki ilke: dengeyi gözetmek; doğrudan tehdit yoksa başkalarının savaşına girmemek. Sınavda: 'Türkiye'nin dış politika davranışını açıklayan bir kavram' sorusunda ikinci ilkeyi II. Dünya Savaşı ile örnekle. (TDP Cilt I, s. 29 vd.)", en: "The framework Oran applies to Türkiye: a state that is not a great power but carries weight in its region and can create room for manoeuvre by monitoring the balance of power. Two principles: observe the balance; do not enter others' wars unless directly threatened. In the exam: when asked for a concept explaining Türkiye's foreign policy behaviour, illustrate the second principle with the Second World War. (Türk Dış Politikası vol. I, pp. 29 ff.)" } },
  { on: { tr: "Savaş dışılık (non-belligerency)", en: "Non-belligerency" },
    arka: { tr: "Tarafsızlıktan farklıdır: devlet savaşa girmez ama taraflardan birine yakınlığını açıkça korur. Türkiye II. Dünya Savaşı'nda tarafsız değil, Müttefiklerden yana savaş dışı kaldı (26 Haziran 1940 bildirisi). Sınavda: 'tarafsız kaldı' yerine 'savaş dışı kaldı' yazmak uzmanlık gösterir. (TDP Cilt I, s. 427)", en: "Distinct from neutrality: the state does not enter the war but openly maintains its closeness to one side. In the Second World War Türkiye was not neutral but a non-belligerent leaning towards the Allies (declaration of 26 June 1940). In the exam: writing 'remained non-belligerent' instead of 'remained neutral' demonstrates expertise. (Türk Dış Politikası vol. I, p. 427)" } },
  { on: { tr: "Göreli özerklik", en: "Relative autonomy" },
    arka: { tr: "Bir devletin dış politikada büyük güçlerin tercihinden bağımsız karar alabilme payı. Bu pay, uluslararası sistemin elverişliliğine ve iç ekonomik modele bağlıdır. Oran 1923–39, 1939–45 ve 1960–80'i 'Göreli Özerklik', 1945–60 ve 1980 sonrasını 'Batı Bloku Ekseninde' dönemleri olarak adlandırır. Sınavda: dönemleri karşılaştıran sorularda bu ayrımı çerçeve olarak kullan.", en: "A state's margin for taking foreign policy decisions independently of the preferences of the great powers. This margin depends on how permissive the international system is and on the domestic economic model. Oran labels 1923–39, 1939–45 and 1960–80 as periods of 'Relative Autonomy' and 1945–60 and post-1980 as periods 'On the Axis of the Western Bloc'. In the exam: use this distinction as a framework in questions comparing periods." } },
  { on: { tr: "Montrö md. 19–21", en: "Montreux, Articles 19–21" },
    arka: { tr: "Md. 19: Türkiye savaşta taraf değilse, savaşan devletlerin savaş gemileri Boğazlardan geçemez (üslerine dönüş istisnası saklıdır). Md. 20: Türkiye savaşta taraf ise geçiş tamamen Türkiye'nin takdirindedir. Md. 21: Türkiye kendini yakın bir savaş tehlikesi karşısında görürse md. 20'yi uygulayabilir. Sınavda: 2022'de md. 19'un uygulandığını ve üslerine dönüş istisnasını yaz.", en: "Art. 19: if Türkiye is not a belligerent, warships of belligerent states may not pass through the Straits (the exception for return to base is preserved). Art. 20: if Türkiye is a belligerent, passage is left entirely to Türkiye's discretion. Art. 21: if Türkiye considers itself threatened with imminent danger of war, it may apply Art. 20. In the exam: state that Art. 19 was applied in 2022 and mention the return-to-base exception." } },
  { on: { tr: "Yapıcı belirsizlik", en: "Constructive ambiguity" },
    arka: { tr: "Uzlaşmazlık bulunan bir konuda metnin tarafların farklı yorumlayabileceği biçimde kaleme alınması. Amacı anlaşmayı mümkün kılmaktır, ama uygulamada yeni anlaşmazlık riski taşır. Annan Planı'nda 1960 antlaşmalarının yeni yapıya uyarlanması bu yöntemle düzenlendi. Sınavda: müzakere tekniği sorularında artı ve eksisiyle birlikte an.", en: "Drafting a text on a contested issue in a way that allows the parties to interpret it differently. Its aim is to make agreement possible, but it carries the risk of new disputes during implementation. In the Annan Plan, the adaptation of the 1960 treaties to the new structure was handled in this way. In the exam: mention it, with its advantages and drawbacks, in questions on negotiating techniques." } },
  { on: { tr: "Statükoculuk ve Batıcılık", en: "Status quo orientation and Westernism" },
    arka: { tr: "Oran'a göre Türk dış politikasının iki temel ilkesi; aynı madalyonun iki yüzüdür. Statükoculuk, sınırların ve mevcut dengenin korunmasını; Batıcılık, modernleşmenin dış politikadaki karşılığını ifade eder. Sınavda: Atatürk dönemini anlatırken Hatay'ın Fransa'nın onayı ve Milletler Cemiyeti süreciyle çözülmesini statükoculuğun kurallara uyan uygulaması olarak örnekle.", en: "According to Oran, the two basic principles of Turkish foreign policy, two sides of the same coin. Status quo orientation denotes the preservation of borders and the existing balance; Westernism is the foreign policy counterpart of modernisation. In the exam: when discussing the Atatürk period, cite the settlement of Hatay through France's consent and the League of Nations process as a rule-abiding application of the status quo orientation." } },
  { on: { tr: "Ulusal güvenliğin üç halkası", en: "The three rings of national security" },
    arka: { tr: "Askerî, ekonomik ve siyasal-toplumsal halkalar; dördüncü halka olarak hepsini saran uluslararası sistem. Dış politikanın gücü yalnızca askerî kapasiteye değil, üç halkanın birlikte sağlıklı olmasına bağlıdır. Sınavda: 'dış politikanın iç dinamikleri' sorusunda bu şemayla giriş yap.", en: "The military, economic and socio-political rings, with the international system as a fourth ring encompassing them all. The strength of foreign policy depends not only on military capacity but on the soundness of all three rings together. In the exam: open a question on 'the domestic dynamics of foreign policy' with this scheme." } }
].forEach(k => KARTLAR.push(k));

// ---------- 7) ANTLAŞMALAR VE SINIRLAR HARİTASI ----------
// x, y: HARITA ile aynı Equal Earth projeksiyonunda hesaplanmış konum (robot/harita_uret.mjs ile aynı ayar).
const ANTLASMALAR = {
  kutu: [549, 89, 80, 40],
  liste: [
    { yil: "1920", ad: { tr: "Gümrü Antlaşması", en: "Treaty of Gyumri" }, x: 609.2, y: 100.4, ref: [0, 4],
      not: { tr: "Ermenistan ile; doğu sınırının ilk çizimi.", en: "With Armenia; first delineation of the eastern border." } },
    { yil: "1921", ad: { tr: "Moskova Antlaşması", en: "Treaty of Moscow" }, x: 602.1, y: 99.4, ref: [0, 6],
      not: { tr: "Sovyet Rusya ile; Kars ve Ardahan Türkiye'de, Batum Gürcistan'da kaldı.", en: "With Soviet Russia; Kars and Ardahan remained in Türkiye and Batumi in Georgia." } },
    { yil: "1921", ad: { tr: "Kars Antlaşması", en: "Treaty of Kars" }, x: 605.6, y: 103.8, ref: [0, 8],
      not: { tr: "Güney Kafkasya cumhuriyetleriyle; doğu sınırını kesinleştirdi.", en: "With the South Caucasus republics; finalised the eastern border." } },
    { yil: "1921", ad: { tr: "Ankara Anlaşması (Fransa)", en: "Ankara Agreement (France)" }, x: 596, y: 115.2, ref: [0, 9],
      not: { tr: "Güney sınırının büyük bölümü; İskenderun Sancağı için özel yönetim.", en: "Most of the southern border; a special regime for the Sanjak of Alexandretta." } },
    { yil: "1923", ad: { tr: "Lozan Barış Antlaşması", en: "Treaty of Peace of Lausanne" }, x: 565.1, y: 99.3, ref: [0, 11],
      not: { tr: "Batı (Meriç) sınırı, Ege adaları ve Boğazlar; Karaağaç Türkiye'ye bırakıldı.", en: "The western (Evros/Meriç) border, the Aegean islands and the Straits; Karaağaç was left to Türkiye." } },
    { yil: "1926", ad: { tr: "Ankara Antlaşması (Musul)", en: "Treaty of Ankara (Mosul)" }, x: 609.3, y: 116.8, ref: [1, 1],
      not: { tr: "İngiltere ve Irak ile; Musul Irak'ta kaldı, güneydoğu sınırı çizildi.", en: "With the United Kingdom and Iraq; Mosul remained in Iraq and the south-eastern border was drawn." } },
    { yil: "1932", ad: { tr: "Türkiye-İran sınır düzenlemesi", en: "Türkiye–Iran border arrangement" }, x: 610.1, y: 105.9, ref: null,
      not: { tr: "Karşılıklı toprak değişimiyle Küçük Ağrı bölgesi Türkiye'ye geçti.", en: "Through a mutual exchange of territory, the Little Ararat area passed to Türkiye." } },
    { yil: "1936", ad: { tr: "Montrö Boğazlar Sözleşmesi", en: "Montreux Convention" }, x: 571.5, y: 101.2, ref: [1, 6],
      not: { tr: "Boğazlar üzerinde tam Türk egemenliği; Lozan'ın uluslararası komisyonu kaldırıldı.", en: "Full Turkish sovereignty over the Straits; the international commission of Lausanne was abolished." } },
    { yil: "1939", ad: { tr: "Hatay'ın katılımı", en: "Accession of Hatay" }, x: 591.7, y: 117.3, ref: [1, 9],
      not: { tr: "Fransa ile anlaşmayla Hatay Türkiye'ye katıldı; güney sınırı bugünkü hâlini aldı.", en: "By agreement with France, Hatay joined Türkiye and the southern border took its present form." } },
    { yil: "1947", ad: { tr: "Paris Barış Antlaşması", en: "Treaty of Peace of Paris" }, x: 571.5, y: 116.5, ref: null,
      not: { tr: "Onikiadalar İtalya'dan Yunanistan'a, silahsızlandırılmış statüyle devredildi. Türkiye taraf değildir.", en: "The Dodecanese were transferred from Italy to Greece with demilitarised status. Türkiye is not a party." } },
    { yil: "1959–60", ad: { tr: "Zürih ve Londra Antlaşmaları", en: "Zurich and London Agreements" }, x: 585.1, y: 120.8, ref: [3, 11],
      not: { tr: "Kıbrıs Cumhuriyeti; Türkiye garantör devlet.", en: "The Republic of Cyprus; Türkiye a guarantor power." } },
    { yil: "2019", ad: { tr: "Türkiye-Libya Deniz Yetki Alanları Mutabakatı", en: "Türkiye–Libya Memorandum on Maritime Jurisdiction Areas" }, x: 568.1, y: 125.4, ref: [9, 2],
      not: { tr: "Doğu Akdeniz'de kıta sahanlığı ve MEB sınırlandırması.", en: "Delimitation of the continental shelf and EEZ in the Eastern Mediterranean." } }
  ]
};
