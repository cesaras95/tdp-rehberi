// =============================================================
// EK İÇERİK (iki dilli): yeni politika dosyaları, temel UI konuları ve
// Dışişleri Bakanları için quiz soruları ve kompozisyon soruları.
// sorular.js, quiz_ek.js ve sinav.js'ten SONRA yüklenmelidir (S() yardımcısını kullanır).
// =============================================================

Object.assign(KONULAR, {
  kuram: { tr: "UI Kuramları ve Kavramları", en: "IR Theories and Concepts" },
  balkan: { tr: "Balkanlar", en: "The Balkans" },
  asya: { tr: "Çin ve Asya-Pasifik", en: "China and the Asia-Pacific" },
  latin: { tr: "Latin Amerika", en: "Latin America" }
});

QUIZ.push(
  // ---------- KURAMLAR VE KAVRAMLAR ----------
  S("kuram", 2, ["\"Anarchy is What States Make of It\" (1992) makalesi kime aittir?", "Who wrote the article 'Anarchy is What States Make of It' (1992)?"],
    ["Kenneth Waltz", "Hans Morgenthau", "Alexander Wendt", "Robert Keohane"],
    ["Kenneth Waltz", "Hans Morgenthau", "Alexander Wendt", "Robert Keohane"],
    ["Makale Alexander Wendt'e aittir ve konstrüktivizmin temel metinlerindendir: anarşinin anlamı devletlerin etkileşimine bağlıdır.", "The article is by Alexander Wendt and is a key constructivist text: the meaning of anarchy depends on how states interact."]),
  S("kuram", 1, ["\"Yumuşak güç\" kavramını ortaya atan düşünür kimdir?", "Which thinker coined the concept of 'soft power'?"],
    ["Henry Kissinger", "Joseph Nye", "Zbigniew Brzezinski", "John Mearsheimer"],
    ["Henry Kissinger", "Joseph Nye", "Zbigniew Brzezinski", "John Mearsheimer"],
    ["Joseph Nye kavramı 1990'da Bound to Lead'de ortaya attı, 2004'te Soft Power kitabında geliştirdi. Sonradan \"akıllı güç\" kavramını da kullandı.", "Joseph Nye coined the concept in Bound to Lead (1990) and developed it in Soft Power (2004). He later also used the concept of 'smart power'."]),
  S("kuram", 0, ["Yapısal realizmin (neorealizm) kurucu eseri Theory of International Politics (1979) kimindir?", "Who wrote Theory of International Politics (1979), the founding work of structural realism (neorealism)?"],
    ["Kenneth Waltz", "Hans Morgenthau", "Hedley Bull", "Stephen Walt"],
    ["Kenneth Waltz", "Hans Morgenthau", "Hedley Bull", "Stephen Walt"],
    ["Waltz, devlet davranışını insan doğasından değil uluslararası sistemin anarşik yapısından açıkladı. Morgenthau klasik realizmin temsilcisidir.", "Waltz explained state behaviour by the anarchic structure of the international system rather than human nature. Morgenthau represents classical realism."]),
  S("kuram", 3, ["Demokratik barış kuramı neyi savunur?", "What does democratic peace theory argue?"],
    ["Demokrasiler hiç savaşa girmez", "Barış için hegemon bir güç gerekir", "Ticaret savaşları önler", "Demokrasiler birbirleriyle savaşmama eğilimindedir"],
    ["Democracies never go to war", "Peace requires a hegemonic power", "Trade prevents wars", "Democracies tend not to fight each other"],
    ["Kuram, demokrasilerin genel olarak değil birbirleriyle savaşmama eğiliminde olduğunu ileri sürer. Kökeni Kant'ın Ebedî Barış (1795) eserine dayanır.", "The theory argues that democracies tend not to fight each other, not that they never go to war. Its roots go back to Kant's Perpetual Peace (1795)."]),
  S("kuram", 1, ["NATO aşağıdakilerden hangisinin örneğidir?", "NATO is an example of which of the following?"],
    ["Kolektif güvenlik", "Kolektif savunma", "Uluslarüstü bütünleşme", "Bölgesel ekonomik örgüt"],
    ["Collective security", "Collective defence", "Supranational integration", "Regional economic organisation"],
    ["NATO, dışarıdan gelen tehdide karşı üyelerin birlikte savunulmasına dayanan bir kolektif savunma ittifakıdır (md. 5). Kolektif güvenliğe örnek BM ve Milletler Cemiyeti'dir.", "NATO is a collective defence alliance based on defending its members together against an external threat (Art. 5). The UN and the League of Nations are examples of collective security."]),
  S("kuram", 2, ["BM Şartı'nda kuvvet kullanma ve kuvvet kullanma tehdidi yasağı hangi maddede düzenlenir?", "Which article of the UN Charter prohibits the threat or use of force?"],
    ["md. 1", "md. 2(1)", "md. 2(4)", "md. 51"],
    ["Art. 1", "Art. 2(1)", "Art. 2(4)", "Art. 51"],
    ["md. 2(4) kuvvet kullanma yasağını, md. 51 bu yasağın istisnası olan meşru müdafaa hakkını, md. 2(1) egemen eşitliği düzenler.", "Art. 2(4) sets the prohibition on the use of force, Art. 51 the right of self-defence as an exception to it, and Art. 2(1) sovereign equality."]),
  S("kuram", 3, ["1933 Montevideo Sözleşmesi'ne göre aşağıdakilerden hangisi devletin unsurlarından biri değildir?", "Under the 1933 Montevideo Convention, which of the following is not an element of statehood?"],
    ["Sürekli bir nüfus", "Belirli bir ülke", "Hükümet", "Diğer devletlerce tanınma"],
    ["A permanent population", "A defined territory", "A government", "Recognition by other states"],
    ["Montevideo'ya göre dördüncü unsur tanınma değil, diğer devletlerle ilişki kurma kapasitesidir. Bu, tanınmanın açıklayıcı olduğu görüşüyle uyumludur.", "Under Montevideo, the fourth element is not recognition but the capacity to enter into relations with other states. This fits the view that recognition is declaratory."]),
  S("kuram", 0, ["Ahde vefa (pacta sunt servanda) ilkesi hangi sözleşmenin 26. maddesinde düzenlenir?", "The principle of pacta sunt servanda is set out in Article 26 of which convention?"],
    ["1969 Viyana Antlaşmalar Hukuku Sözleşmesi", "1961 Viyana Diplomatik İlişkiler Sözleşmesi", "1963 Viyana Konsolosluk İlişkileri Sözleşmesi", "1982 BM Deniz Hukuku Sözleşmesi"],
    ["1969 Vienna Convention on the Law of Treaties", "1961 Vienna Convention on Diplomatic Relations", "1963 Vienna Convention on Consular Relations", "1982 UN Convention on the Law of the Sea"],
    ["md. 26: yürürlükteki her antlaşma taraflarını bağlar ve iyi niyetle uygulanır. Türkiye 1969 Sözleşmesi'ne taraf değildir, ancak ilke örf ve âdet hukukunun parçasıdır.", "Art. 26: every treaty in force is binding on its parties and must be performed in good faith. Türkiye is not a party to the 1969 Convention, but the principle is part of customary law."]),
  S("kuram", 2, ["\"Kamu diplomasisi\" kavramını 1965'te ortaya atan kimdir?", "Who coined the term 'public diplomacy' in 1965?"],
    ["Joseph Nye", "Harold Nicolson", "Edmund Gullion", "Henry Kissinger"],
    ["Joseph Nye", "Harold Nicolson", "Edmund Gullion", "Henry Kissinger"],
    ["Kavram, ABD'li diplomat Edmund Gullion'a atfedilir. Türkiye'de Kamu Diplomasisi Koordinatörlüğü 2010'da kuruldu.", "The term is attributed to the US diplomat Edmund Gullion. Türkiye's Office of Public Diplomacy was set up in 2010."]),
  S("kuram", 1, ["Koruma Sorumluluğu (R2P) hangi yıl BM Dünya Zirvesi Sonuç Belgesi'nde kabul edildi?", "In which year was the Responsibility to Protect (R2P) adopted in the UN World Summit Outcome Document?"],
    ["2001", "2005", "2011", "1994"],
    ["2001", "2005", "2011", "1994"],
    ["R2P 2005'te kabul edildi. 2001 ICISS raporunun, 1994 ise insan güvenliği kavramını yaygınlaştıran UNDP raporunun yılıdır.", "R2P was adopted in 2005. 2001 is the year of the ICISS report, and 1994 of the UNDP report that popularised human security."]),
  S("kuram", 0, ["Hedley Bull'un The Anarchical Society (1977) adlı eseri hangi yaklaşımın temel metnidir?", "Hedley Bull's The Anarchical Society (1977) is a key text of which approach?"],
    ["İngiliz Okulu", "Yapısal realizm", "Konstrüktivizm", "Bağımlılık kuramı"],
    ["The English School", "Structural realism", "Constructivism", "Dependency theory"],
    ["Bull, anarşiye rağmen devletlerin ortak kurallar ve kurumlarla bir \"uluslararası toplum\" oluşturduğunu savunur.", "Bull argues that despite anarchy, states form an 'international society' through common rules and institutions."]),
  S("kuram", 3, ["Güvenlik ikilemi en iyi hangisiyle tanımlanır?", "Which best defines the security dilemma?"],
    ["Bir ittifaktan çıkmanın maliyeti", "Nükleer silahların yayılmasının önlenmesi", "Ekonomik yaptırımların etkisizliği", "Bir devletin güvenliği için attığı adımların diğerlerince tehdit algılanıp karşılıklı silahlanmaya yol açması"],
    ["The cost of leaving an alliance", "Preventing the spread of nuclear weapons", "The ineffectiveness of economic sanctions", "Steps a state takes for its security being seen as a threat by others, leading to mutual arming"],
    ["Kavram John Herz'e (1950) aittir; sorunun özü niyet belirsizliğidir. Güven artırıcı önlemler ikilemi hafifletir.", "The concept is John Herz's (1950); the core of the problem is uncertainty of intentions. Confidence-building measures ease the dilemma."]),

  // ---------- BALKANLAR ----------
  S("balkan", 1, ["Türkiye-Bosna-Hersek-Sırbistan ve Türkiye-Bosna-Hersek-Hırvatistan Üçlü Danışma Mekanizmaları hangi dönemde kuruldu?", "When were the Türkiye–Bosnia and Herzegovina–Serbia and Türkiye–Bosnia and Herzegovina–Croatia Trilateral Consultation Mechanisms set up?"],
    ["1995–1996", "2009–2010", "2016–2017", "2023–2024"],
    ["1995–1996", "2009–2010", "2016–2017", "2023–2024"],
    ["Mekanizmalar 2009–2010'da kuruldu ve Türkiye'nin bölgedeki tüm taraflarla konuşabilen aktör rolünün temel araçları oldu.", "The mechanisms were set up in 2009–2010 and became key tools of Türkiye's role as an actor able to talk to all parties in the region."]),
  S("balkan", 2, ["Balkan Barış Platformu'nun ilk toplantısı ne zaman ve nerede yapıldı?", "When and where was the first meeting of the Balkan Peace Platform held?"],
    ["Mart 2024, Saraybosna", "Ocak 2026, Belgrad", "Temmuz 2025, İstanbul", "Ekim 2023, Priştine"],
    ["March 2024, Sarajevo", "January 2026, Belgrade", "July 2025, Istanbul", "October 2023, Pristina"],
    ["İlk toplantı 26 Temmuz 2025'te İstanbul'da yapıldı; altı Batı Balkan ülkesi katıldı. İkinci toplantı 23 Ocak 2026'da yine İstanbul'daydı.", "The first meeting was held in Istanbul on 26 July 2025 with six Western Balkan countries. The second was also held in Istanbul, on 23 January 2026."]),
  S("balkan", 0, ["Türkiye Kosova'nın bağımsızlığını ne zaman tanıdı?", "When did Türkiye recognise Kosovo's independence?"],
    ["Şubat 2008", "Haziran 1999", "Ekim 2010", "Temmuz 2013"],
    ["February 2008", "June 1999", "October 2010", "July 2013"],
    ["Türkiye, Kosova'nın 17 Şubat 2008'deki bağımsızlık ilanının ardından 18 Şubat 2008'de onu ilk tanıyan ülkeler arasında yer aldı.", "Türkiye was among the first countries to recognise Kosovo, on 18 February 2008, after its declaration of independence on 17 February 2008."]),

  // ---------- ÇİN VE ASYA-PASİFİK ----------
  S("asya", 2, ["Türkiye ile Çin Halk Cumhuriyeti arasında diplomatik ilişkiler hangi yıl kuruldu?", "In which year were diplomatic relations established between Türkiye and the People's Republic of China?"],
    ["1949", "1960", "1971", "1989"],
    ["1949", "1960", "1971", "1989"],
    ["İlişkiler 1971'de kuruldu ve 2010'da \"Stratejik İşbirliği\" düzeyine yükseltildi; 2026 ilişkilerin 55. yılı.", "Relations were established in 1971 and raised to 'Strategic Cooperation' in 2010; 2026 marks the 55th anniversary."]),
  S("asya", 1, ["\"Yeniden Asya\" Girişimi hangi tarihte açıklandı?", "When was the 'Asia Anew' Initiative announced?"],
    ["Ocak 2015", "Ağustos 2019", "Mart 2022", "Haziran 2024"],
    ["January 2015", "August 2019", "March 2022", "June 2024"],
    ["Girişim Ağustos 2019'da açıklandı. Aralık 2025 itibarıyla Türkiye'nin bu coğrafyada 30 büyükelçiliği ve 26 başkonsolosluğu var.", "The initiative was announced in August 2019. As of December 2025, Türkiye has 30 embassies and 26 consulates general in this region."]),
  S("asya", 0, ["TÜİK 2025 verilerine göre Türkiye'nin en çok ithalat yaptığı ülke hangisidir?", "According to TurkStat 2025 data, which country is Türkiye's largest source of imports?"],
    ["Çin", "Rusya", "Almanya", "ABD"],
    ["China", "Russia", "Germany", "United States"],
    ["2025'te Çin'den ithalat 49,6 milyar dolarla ilk sırada, Rusya (42,4 milyar dolar) ikinci sıradaydı. Çin'e ihracat çok daha düşük olduğu için büyük bir ticaret açığı var.", "In 2025, imports from China ranked first at $49.6 billion, with Russia ($42.4 billion) second. Because exports to China were far lower, there is a large trade deficit."]),

  // ---------- LATİN AMERİKA ----------
  S("latin", 3, ["Türkiye Cumhuriyeti'ni tanıyan ilk Latin Amerika ülkesi hangisidir (1926)?", "Which was the first Latin American country to recognise the Republic of Türkiye (1926)?"],
    ["Brezilya", "Arjantin", "Meksika", "Şili"],
    ["Brazil", "Argentina", "Mexico", "Chile"],
    ["Şili 1926'da Türkiye'yi tanıdı. Şili aynı zamanda Türkiye'nin bölgede serbest ticaret anlaşması yürürlükte olan ilk ülkesidir (2011).", "Chile recognised Türkiye in 1926. It is also the first country in the region with which Türkiye has a free trade agreement in force (2011)."]),
  S("latin", 1, ["Türkiye hangi yılı \"Latin Amerika ve Karayipler Yılı\" ilan etti?", "Which year did Türkiye declare the 'Year of Latin America and the Caribbean'?"],
    ["1998", "2006", "2013", "2017"],
    ["1998", "2006", "2013", "2017"],
    ["2006, Eylem Planı'nın güncellendiği yıldır. Eylem Planı 1998'de hazırlanmıştı; 2013 Pasifik İttifakı gözlemciliğinin, 2017 ECLAC üyeliğinin yılıdır.", "2006 is the year the Action Plan was updated. The Action Plan was prepared in 1998; 2013 is the year of Pacific Alliance observer status and 2017 of ECLAC membership."]),

  // ---------- DIŞİŞLERİ BAKANLARI ----------
  S("tarih", 0, ["En uzun süre görev yapan Türk Dışişleri Bakanı kimdir?", "Who is the longest-serving Turkish Minister of Foreign Affairs?"],
    ["Tevfik Rüştü Aras", "İsmail Cem", "Mevlüt Çavuşoğlu", "İhsan Sabri Çağlayangil"],
    ["Tevfik Rüştü Aras", "İsmail Cem", "Mevlüt Çavuşoğlu", "İhsan Sabri Çağlayangil"],
    ["Tevfik Rüştü Aras 1925–1938 arasında yaklaşık 13,5 yıl görev yaptı; Balkan Antantı, Montrö ve Sadabat Paktı bu dönemdedir. Mevlüt Çavuşoğlu toplamda yaklaşık 8,5 yıl görev yaptı.", "Tevfik Rüştü Aras served for about 13.5 years, 1925–1938; the Balkan Entente, Montreux and the Saadabad Pact fall in this period. Mevlüt Çavuşoğlu served about 8.5 years in total."]),
  S("tarih", 2, ["TBMM Hükümeti'nin ilk Hariciye Vekili kimdir?", "Who was the first Commissar for Foreign Affairs of the Grand National Assembly Government?"],
    ["Yusuf Kemal Tengirşenk", "İsmet Paşa", "Bekir Sami Bey", "Ahmet Muhtar Bey"],
    ["Yusuf Kemal Tengirşenk", "İsmet Pasha", "Bekir Sami Bey", "Ahmet Muhtar Bey"],
    ["Hariciye Vekâleti 2 Mayıs 1920'de kuruldu ve başına Bekir Sami Bey getirildi.", "The Commissariat for Foreign Affairs was set up on 2 May 1920, headed by Bekir Sami Bey."]),
  S("tarih", 1, ["Türkiye'nin NATO'ya katıldığı 1952'de Dışişleri Bakanı kimdi?", "Who was Minister of Foreign Affairs when Türkiye joined NATO in 1952?"],
    ["Necmettin Sadak", "Fuat Köprülü", "Fatin Rüştü Zorlu", "Hasan Saka"],
    ["Necmettin Sadak", "Fuat Köprülü", "Fatin Rüştü Zorlu", "Hasan Saka"],
    ["Fuat Köprülü 1950–1956 arasında görev yaptı; Kore'ye asker gönderilmesi ve NATO üyeliği bu dönemdedir.", "Fuat Köprülü served from 1950 to 1956; sending troops to Korea and NATO membership fall in this period."]),
  S("tarih", 3, ["Türkiye'nin AB adaylığının tanındığı 1999 Helsinki Zirvesi sırasında Dışişleri Bakanı kimdi?", "Who was Minister of Foreign Affairs at the 1999 Helsinki Summit, where Türkiye's EU candidacy was recognised?"],
    ["Hikmet Çetin", "Abdullah Gül", "Tansu Çiller", "İsmail Cem"],
    ["Hikmet Çetin", "Abdullah Gül", "Tansu Çiller", "İsmail Cem"],
    ["İsmail Cem 1997–2002 arasında görev yaptı; 1999 depremleri sonrası Yunanistan ile yakınlaşma da bu dönemdedir.", "İsmail Cem served from 1997 to 2002; rapprochement with Greece after the 1999 earthquakes also falls in this period."])
);

// ---------- YENİ KOMPOZİSYON SORULARI ----------
KOMPOZISYON.push(
  { konu: "balkanlar", soru: { tr: "Türkiye'nin Batı Balkanlar'daki istikrar arayışını, bölgesel sahiplenme ilkesi ve AB genişleme süreci çerçevesinde değerlendiriniz.", en: "Assess Türkiye's pursuit of stability in the Western Balkans within the framework of the principle of regional ownership and the EU enlargement process." },
    ipuclari: { tr: ["Kapsayıcılık ve bölgesel sahiplenme ilkeleri", "Üçlü danışma mekanizmaları (2009–2010)", "Balkan Barış Platformu (2025)", "KFOR ve EUFOR Althea katkısı", "Sırbistan ile ilişkiler ve dengeli yaklaşım"], en: ["The principles of inclusiveness and regional ownership", "The trilateral consultation mechanisms (2009–2010)", "The Balkan Peace Platform (2025)", "Contributions to KFOR and EUFOR Althea", "Relations with Serbia and a balanced approach"] } },
  { konu: "cin-asya", soru: { tr: "\"Yeniden Asya\" Girişimi'ni Türk dış politikasının çeşitlendirilmesi açısından, Çin ile ilişkilerin fırsat ve kısıtlarıyla birlikte değerlendiriniz.", en: "Assess the 'Asia Anew' Initiative in terms of diversifying Turkish foreign policy, together with the opportunities and constraints of relations with China." },
    ipuclari: { tr: ["1971 ilişkiler, 2010 stratejik işbirliği", "Orta Koridor ve Kuşak ve Yol (2015 mutabakatı)", "Ticaret açığı (2025: 49,6 milyar dolar ithalat)", "Uygur Türkleri konusundaki tutum", "ŞİÖ diyalog ortaklığı ve NATO üyeliği dengesi"], en: ["1971 relations, 2010 strategic cooperation", "The Middle Corridor and Belt and Road (2015 MoU)", "The trade deficit (2025: $49.6 billion of imports)", "Position on the Uyghur Turks", "Balancing SCO dialogue partnership and NATO membership"] } },
  { konu: "latin-amerika", soru: { tr: "Türkiye'nin Latin Amerika ve Karayipler açılımını, Afrika açılımıyla karşılaştırarak araçları ve sınırları açısından değerlendiriniz.", en: "Assess Türkiye's opening to Latin America and the Caribbean, comparing its tools and limits with the Africa opening." },
    ipuclari: { tr: ["1998 Eylem Planı ve 2006 \"Latin Amerika ve Karayipler Yılı\"", "Gözlemcilik statüleri (AÖÖ 1998, Pasifik İttifakı 2013)", "Ticaret: 2000'ler ~1 → 2024 15,6 milyar dolar", "Temsilcilik ağı (6 → 19 büyükelçilik)", "Coğrafi uzaklık ve ticaret dengesi"], en: ["The 1998 Action Plan and the 2006 'Year of Latin America and the Caribbean'", "Observer statuses (OAS 1998, Pacific Alliance 2013)", "Trade: ~$1bn in the 2000s → $15.6bn in 2024", "Diplomatic network (6 → 19 embassies)", "Geographical distance and trade balance"] } }
);
