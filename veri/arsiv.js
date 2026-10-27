// =============================================================
// ÇIKMIŞ SORULAR ARŞİVİ (iki dilli) — konu düzeyinde
// Soru metinleri kopyalanmadı; her soru kısa bir konu başlığıyla özetlendi.
// Kaynak: Diplomat Reader blogunun derlediği listeler (KİM 2010–2026, MM 2005–2026).
// 2025 Ağustos ve 2026 Ekim sınavlarının bir kısmı blog yorumlarındaki aday
// aktarımlarına dayanır (kaynak: "aday"); resmî olarak yayımlanmamıştır.
//
// sinav: "kim" | "mm"
// bolum: "yd" (yabancı dilde kompozisyon) | "tr" (Türkçe kompozisyon) | "cev" (çeviri)
// temalar: aşağıdaki ARSIV_TEMALAR anahtarları
// konu: varsa ilgili politika dosyasının id'si (site içinde link verir)
// =============================================================

const ARSIV_KAYNAK = {
  kim: "http://diplomatreader.blogspot.com/2018/11/dsisleri-kim-snav-ckms-sorular-2010.html",
  mm: "http://diplomatreader.blogspot.com/2018/12/dsisleri-mm-snav-ckms-sorular-2005-2017.html",
  ornek: "https://kariyer.mfa.gov.tr/sinav/Ornek-Sinav-Sorulari.html"
};

const ARSIV_TEMALAR = {
  "tdp-genel": { tr: "TDP'nin genel ilkeleri ve öncelikleri", en: "General principles and priorities of TFP" },
  "vatandas": { tr: "Yurt dışındaki vatandaşlar ve konsolosluk", en: "Citizens abroad and consular services" },
  "kamu-dip": { tr: "Kamu ve kültürel diplomasi, yumuşak güç", en: "Public and cultural diplomacy, soft power" },
  "kuresel": { tr: "Küresel sorunlar (teknoloji, iklim, enerji, medya)", en: "Global issues (technology, climate, energy, media)" },
  "bolgesel": { tr: "Bölgesel politikalar (Orta Doğu, komşular, Avrasya)", en: "Regional policies (Middle East, neighbours, Eurasia)" },
  "guvenlik": { tr: "Güvenlik, terörle mücadele ve ittifaklar", en: "Security, counter-terrorism and alliances" },
  "ab": { tr: "Avrupa Birliği", en: "European Union" },
  "goc": { tr: "Göç ve sığınmacılar", en: "Migration and asylum seekers" },
  "insani": { tr: "İnsani ve kalkınma yardımları", en: "Humanitarian and development aid" },
  "ekonomi": { tr: "Ekonomi ve dış politika", en: "Economy and foreign policy" },
  "jeopolitik": { tr: "Jeopolitik konum, tarih ve coğrafya", en: "Geopolitical position, history and geography" },
  "cok-taraflilik": { tr: "Uluslararası sistem ve çok taraflılık", en: "The international system and multilateralism" }
};

const ARSIV = [
  // ---------- KİM: yabancı dilde kompozisyon ----------
  { yil: "2010", sinav: "kim", bolum: "yd", temalar: ["kamu-dip"], konu: { tr: "İstanbul'un 2010 Avrupa Kültür Başkenti olmasının anlamı", en: "Significance of Istanbul as 2010 European Capital of Culture" } },
  { yil: "2010", sinav: "kim", bolum: "yd", temalar: ["ekonomi", "tdp-genel"], konu: { tr: "Türkiye ekonomisindeki gelişmelerin dış politika boyutu", en: "The foreign policy dimension of Türkiye's economic development" } },
  { yil: "2010", sinav: "kim", bolum: "yd", temalar: ["jeopolitik"], konu: { tr: "Jeopolitik konumun dış politikaya avantaj ve dezavantajları", en: "Advantages and disadvantages of geopolitical position for foreign policy" } },
  { yil: "2010", sinav: "kim", bolum: "yd", temalar: ["ab"], konu: { tr: "AB üyelik perspektifi: lehte ve aleyhte görüşler", en: "The EU membership perspective: arguments for and against" }, politika: "ab" },
  { yil: "2010", sinav: "kim", bolum: "yd", temalar: ["vatandas"], konu: { tr: "Yurt dışındaki Türklerin bulundukları topluma entegrasyonu", en: "Integration of Turks abroad into their host societies" } },
  { yil: "2010", sinav: "kim", bolum: "yd", temalar: ["kamu-dip"], konu: { tr: "Uluslararası kamuoyunda etkin bir Türkiye algısı oluşturmak", en: "Building an image of an effective Türkiye in international opinion" } },
  { yil: "2011", sinav: "kim", bolum: "yd", temalar: ["kamu-dip"], konu: { tr: "Bir dünya şehri olarak İstanbul'un ülke tanıtımına katkısı", en: "Istanbul's contribution, as a world city, to promoting Türkiye" } },
  { yil: "2012", sinav: "kim", bolum: "yd", temalar: ["tdp-genel"], konu: { tr: "Çok boyutlu dış politika", en: "Multi-dimensional foreign policy" } },
  { yil: "2013", sinav: "kim", bolum: "yd", temalar: ["vatandas"], konu: { tr: "Yurt dışındaki vatandaşların siyasi ve sosyal hayata katılımı", en: "Participation of citizens abroad in political and social life" } },
  { yil: "2014", sinav: "kim", bolum: "yd", temalar: ["kamu-dip"], konu: { tr: "Kamu diplomasisi: tanımı, araçları ve dış politikadaki rolü", en: "Public diplomacy: definition, tools and role in foreign policy" } },
  { yil: "2015", sinav: "kim", bolum: "yd", temalar: ["tdp-genel"], konu: { tr: "Türkiye'nin başlıca güncel dış politika sorunları", en: "Türkiye's main current foreign policy problems" } },
  { yil: "2016", sinav: "kim", bolum: "yd", temalar: ["insani"], konu: { tr: "İnsani ve kalkınma yardımlarının dış politika aracı olarak önemi", en: "Humanitarian and development aid as a foreign policy tool" }, politika: "afrika" },
  { yil: "2017", sinav: "kim", bolum: "yd", temalar: ["ekonomi", "kamu-dip"], konu: { tr: "Yabancı yatırım çekmek için Türkiye'nin avantajlarını anlatan bir gazete yazısı", en: "A newspaper article presenting Türkiye's advantages to attract foreign investment" } },
  { yil: "2018", sinav: "kim", bolum: "yd", temalar: ["kuresel"], konu: { tr: "Teknolojik gelişmelerin dış politikaya etkileri", en: "Effects of technological developments on foreign policy" } },
  { yil: "2019", sinav: "kim", bolum: "yd", temalar: ["guvenlik"], konu: { tr: "Terörle mücadele ve yabancı terörist savaşçılar üzerine bir konferans konuşması", en: "A conference speech on counter-terrorism and foreign terrorist fighters" } },
  { yil: "2020", sinav: "kim", bolum: "yd", temalar: ["insani", "vatandas"], konu: { tr: "Covid-19 döneminde insani yardımlar ve yurt dışındaki vatandaşlara yönelik önlemler", en: "Humanitarian aid and measures for citizens abroad during Covid-19" } },
  { yil: "2025-01", sinav: "kim", bolum: "yd", temalar: ["bolgesel"], konu: { tr: "Orta Doğu'daki güncel gelişmelerin Türk dış politikasına etkileri", en: "Effects of current Middle East developments on Turkish foreign policy" }, politika: "suriye" },
  { yil: "2025-08", sinav: "kim", bolum: "yd", temalar: ["kuresel"], konu: { tr: "Sosyal medya ve kitle iletişim araçlarının dış politikaya etkileri", en: "Effects of social media and mass media on foreign policy" }, kaynak: "aday" },
  { yil: "2026-01", sinav: "kim", bolum: "yd", temalar: ["vatandas"], konu: { tr: "Yurt dışındaki vatandaşların bulundukları ülkelerdeki hayata katılımının Türkiye'ye etkileri", en: "How the participation of citizens abroad in their host countries affects Türkiye" } },
  { yil: "2026-10", sinav: "kim", bolum: "yd", temalar: ["kamu-dip", "cok-taraflilik"], konu: { tr: "Yumuşak, sert ve akıllı güç kavramları ve dış politikadaki rolleri", en: "Soft, hard and smart power and their roles in foreign policy" }, kaynak: "aday" },

  // ---------- KİM: Türkçe kompozisyon ----------
  { yil: "2010", sinav: "kim", bolum: "tr", temalar: ["tdp-genel", "jeopolitik"], konu: { tr: "Türkiye'nin doğu ile batı arasında köprü rolü", en: "Türkiye's role as a bridge between East and West" } },
  { yil: "2010", sinav: "kim", bolum: "tr", temalar: ["tdp-genel"], konu: { tr: "Cumhuriyet'in 100. yılı için dış politika vizyonu", en: "A foreign policy vision for the Republic's centenary" } },
  { yil: "2010", sinav: "kim", bolum: "tr", temalar: ["bolgesel"], konu: { tr: "Komşularla sıfır sorun politikası: katkıları ve sınamaları", en: "The 'zero problems with neighbours' policy: contributions and challenges" } },
  { yil: "2011", sinav: "kim", bolum: "tr", temalar: ["kuresel"], konu: { tr: "Küreselleşmenin uluslararası ilişkilere ve Türk dış politikasına etkileri", en: "Effects of globalisation on international relations and Turkish foreign policy" } },
  { yil: "2012", sinav: "kim", bolum: "tr", temalar: ["kuresel", "guvenlik"], konu: { tr: "21. yüzyılın küresel tehditleri ve çözüm yolları", en: "Global threats of the 21st century and ways to address them" } },
  { yil: "2013", sinav: "kim", bolum: "tr", temalar: ["goc"], konu: { tr: "Göç alan ülke hâline gelen Türkiye için göç politikası", en: "Migration policy for Türkiye as a country of destination" } },
  { yil: "2014", sinav: "kim", bolum: "tr", temalar: ["vatandas", "kamu-dip"], konu: { tr: "Yurt dışındaki vatandaşların 1915 olayları konusunda Türkiye'nin tezlerine katkısı", en: "How citizens abroad can support Türkiye's position on the events of 1915" } },
  { yil: "2015", sinav: "kim", bolum: "tr", temalar: ["kamu-dip"], konu: { tr: "Kültürel diplomasi ve Türkiye'nin bu alandaki politikaları", en: "Cultural diplomacy and Türkiye's policies in this field" } },
  { yil: "2016", sinav: "kim", bolum: "tr", temalar: ["vatandas", "kuresel"], konu: { tr: "Konsolosluk hizmetlerinin önemi ve bilişim teknolojilerinden yararlanma", en: "The importance of consular services and the use of digital technology" } },
  { yil: "2017", sinav: "kim", bolum: "tr", temalar: ["goc"], konu: { tr: "Düzensiz göçün nedenleri, etkileri ve uluslararası işbirliği", en: "Causes and effects of irregular migration and international cooperation" } },
  { yil: "2018", sinav: "kim", bolum: "tr", temalar: ["insani", "tdp-genel"], konu: { tr: "Girişimci ve insani dış politikanın ilkeleri ve uygulamaları", en: "Principles and practice of enterprising and humanitarian foreign policy" }, politika: "afrika" },
  { yil: "2019", sinav: "kim", bolum: "tr", temalar: ["tdp-genel", "kuresel"], konu: { tr: "Yeniden Asya ve Dijital Diplomasi girişimleri ışığında dış politika öncelikleri", en: "Foreign policy priorities in light of the Asia Anew and Digital Diplomacy initiatives" } },
  { yil: "2020", sinav: "kim", bolum: "tr", temalar: ["kamu-dip"], konu: { tr: "Türkiye'nin yumuşak güç unsurları", en: "Elements of Türkiye's soft power" } },
  { yil: "2025-01", sinav: "kim", bolum: "tr", temalar: ["vatandas"], konu: { tr: "Yurt dışındaki vatandaşların dış politika açısından önemi", en: "The importance of citizens abroad for foreign policy" } },
  { yil: "2025-08", sinav: "kim", bolum: "tr", temalar: ["ekonomi", "kuresel"], konu: { tr: "Bilim-teknoloji ve müteahhitlik kapasitesinin dış politikaya katkıları", en: "Contributions of science, technology and contracting capacity to foreign policy" }, kaynak: "aday" },
  { yil: "2026-01", sinav: "kim", bolum: "tr", temalar: ["kuresel"], konu: { tr: "İklim değişikliğinin küresel siyasi, ekonomik ve sosyal etkileri", en: "Global political, economic and social effects of climate change" }, politika: "enerji-iklim" },
  { yil: "2026-10", sinav: "kim", bolum: "tr", temalar: ["vatandas"], konu: { tr: "Yurt dışındaki vatandaşlara yönelik konsolosluk ve diğer hizmetlerin geliştirilmesi", en: "Improving consular and other services for citizens abroad" }, kaynak: "aday" },

  // ---------- KİM: çeviri (yalnızca aday aktarımları) ----------
  { yil: "2025-08", sinav: "kim", bolum: "cev", temalar: ["kuresel"], konu: { tr: "Su yönetimi ve su politikası üzerine bir metin", en: "A text on water management and water policy" }, kaynak: "aday" },
  { yil: "2026-10", sinav: "kim", bolum: "cev", temalar: ["tdp-genel"], konu: { tr: "\"Türkiye Yüzyılı\" vizyonunda milli dış politika üzerine bir metin", en: "A text on national foreign policy in the 'Century of Türkiye' vision" }, kaynak: "aday" },

  // ---------- MM: yabancı dilde kompozisyon ----------
  { yil: "2005", sinav: "mm", bolum: "yd", temalar: ["bolgesel"], konu: { tr: "Komşular, Orta Doğu ve Avrasya ile ilişkilerin geleceği", en: "The future of relations with neighbours, the Middle East and Eurasia" } },
  { yil: "2006", sinav: "mm", bolum: "yd", temalar: ["jeopolitik"], konu: { tr: "Jeopolitik konumun dış politikaya olumlu ve olumsuz yansımaları", en: "Positive and negative effects of geopolitical position on foreign policy" } },
  { yil: "2007", sinav: "mm", bolum: "yd", temalar: ["tdp-genel"], konu: { tr: "Temel dış politika öncelikleri", en: "Core foreign policy priorities" } },
  { yil: "2008", sinav: "mm", bolum: "yd", temalar: ["cok-taraflilik"], konu: { tr: "Tek kutupluluk ve çok kutupluluk tartışmaları", en: "The unipolarity versus multipolarity debate" } },
  { yil: "2009", sinav: "mm", bolum: "yd", temalar: ["tdp-genel"], konu: { tr: "Önemli görülen üç dış politika önceliği", en: "Three foreign policy priorities you consider important" } },
  { yil: "2010", sinav: "mm", bolum: "yd", temalar: ["tdp-genel", "bolgesel"], konu: { tr: "Ulusal çıkarlar açısından öncelikli bölgeler ve politikalar", en: "Priority regions and policies in terms of national interest" } },
  { yil: "2011", sinav: "mm", bolum: "yd", temalar: ["bolgesel"], konu: { tr: "ABD, İran ve Fransa'nın Arap Baharı politikaları", en: "US, Iranian and French policies on the Arab Spring" } },
  { yil: "2012", sinav: "mm", bolum: "yd", temalar: ["guvenlik"], konu: { tr: "Terörle mücadelede müttefiklerden alınan destek", en: "Support from allies in the fight against terrorism" }, politika: "nato-abd" },
  { yil: "2013", sinav: "mm", bolum: "yd", temalar: ["kamu-dip"], konu: { tr: "Uluslararası organizasyonlara ev sahipliğinin katkıları", en: "Benefits of hosting international events" } },
  { yil: "2014", sinav: "mm", bolum: "yd", temalar: ["goc", "ab"], konu: { tr: "Avrupa'da artan yabancı düşmanlığının nedenleri ve sonuçları", en: "Causes and consequences of rising xenophobia in Europe" } },
  { yil: "2015", sinav: "mm", bolum: "yd", temalar: ["bolgesel", "guvenlik"], konu: { tr: "Rusya'nın bölgedeki hamlelerinin Türkiye'ye etkileri ve seçenekler", en: "Effects of Russia's regional moves on Türkiye and policy options" }, politika: "rusya-ukrayna" },
  { yil: "2016", sinav: "mm", bolum: "yd", temalar: ["ab"], konu: { tr: "Türkiye ile AB'nin birbiri için önemini anlatan bir konferans konuşması", en: "A conference speech on the mutual importance of Türkiye and the EU" }, politika: "ab" },
  { yil: "2017", sinav: "mm", bolum: "yd", temalar: ["cok-taraflilik"], konu: { tr: "Uluslararası örgütlere ve çok taraflılığa neden ihtiyaç duyulduğu", en: "Why international organisations and multilateralism are needed" }, politika: "arabuluculuk" },
  { yil: "2018", sinav: "mm", bolum: "yd", temalar: ["guvenlik", "bolgesel"], konu: { tr: "Türkiye-ABD ilişkilerinde işbirliği alanları ve sınamalar", en: "Areas of cooperation and challenges in Türkiye–US relations" }, politika: "nato-abd" },
  { yil: "2026", sinav: "mm", bolum: "yd", temalar: ["guvenlik"], konu: { tr: "Ankara NATO Zirvesi'nin güvenlik politikalarına ve Avrupa güvenlik mimarisine etkisi", en: "Impact of the Ankara NATO Summit on security policy and the European security architecture" }, politika: "nato-abd" },

  // ---------- MM: Türkçe kompozisyon ----------
  { yil: "2005", sinav: "mm", bolum: "tr", temalar: ["kuresel", "guvenlik"], konu: { tr: "Önümüzdeki 50 yılın küresel tehditleri", en: "Global threats of the next 50 years" } },
  { yil: "2006", sinav: "mm", bolum: "tr", temalar: ["kamu-dip"], konu: { tr: "Kamuoyunun dış politikanın oluşumundaki etkisi", en: "The role of public opinion in shaping foreign policy" } },
  { yil: "2007", sinav: "mm", bolum: "tr", temalar: ["bolgesel"], konu: { tr: "Irak'ın işgalinden bu yana Türkiye'nin Irak politikası", en: "Türkiye's Iraq policy since the invasion of Iraq" } },
  { yil: "2008", sinav: "mm", bolum: "tr", temalar: ["ab"], konu: { tr: "Türkiye'nin AB üyeliğine yönelik itirazlar ve müzakere engelleri", en: "Objections to Türkiye's EU membership and obstacles in negotiations" }, politika: "ab" },
  { yil: "2009", sinav: "mm", bolum: "tr", temalar: ["tdp-genel", "bolgesel"], konu: { tr: "Türkiye'nin çevresinde barış ve düzen kurma sorumluluğu", en: "Türkiye's responsibility for building peace and order in its neighbourhood" } },
  { yil: "2010", sinav: "mm", bolum: "tr", temalar: ["ab", "bolgesel"], konu: { tr: "Orta Doğu, Balkanlar ve Kafkasya politikaları ile AB hedefi", en: "Middle East, Balkans and Caucasus policies and the EU goal" } },
  { yil: "2011", sinav: "mm", bolum: "tr", temalar: ["kuresel"], konu: { tr: "Alternatif enerji kaynaklarının uluslararası ilişkilere etkileri", en: "Effects of alternative energy sources on international relations" }, politika: "enerji-iklim" },
  { yil: "2012", sinav: "mm", bolum: "tr", temalar: ["ekonomi"], konu: { tr: "Ekonominin dış politika üzerindeki etkileri", en: "The effects of the economy on foreign policy" } },
  { yil: "2013", sinav: "mm", bolum: "tr", temalar: ["cok-taraflilik"], konu: { tr: "Küresel güç merkezinin Asya-Pasifik'e kayması", en: "The shift of the global centre of power to the Asia-Pacific" } },
  { yil: "2014", sinav: "mm", bolum: "tr", temalar: ["bolgesel"], konu: { tr: "Orta Doğu ve Kuzey Afrika'da kalıcı barışın önündeki engeller", en: "Obstacles to lasting peace in the Middle East and North Africa" } },
  { yil: "2015", sinav: "mm", bolum: "tr", temalar: ["goc", "guvenlik", "ab"], konu: { tr: "Suriye kaynaklı terör ve mülteci krizine yönelik politikalar ve AB'ye yansımaları", en: "Policies on the terrorism and refugee crisis stemming from Syria and effects on Türkiye–EU relations" }, politika: "suriye" },
  { yil: "2016", sinav: "mm", bolum: "tr", temalar: ["bolgesel"], konu: { tr: "\"Türk dünyası\" kavramı ve son 25 yılda yapılanlar", en: "The concept of the 'Turkic world' and what has been done in the past 25 years" }, politika: "turk-dunyasi" },
  { yil: "2017", sinav: "mm", bolum: "tr", temalar: ["tdp-genel", "ekonomi"], konu: { tr: "Siyasi ve ekonomik ilişkileri çeşitlendirme adımları", en: "Steps to diversify political and economic relations" } },
  { yil: "2018", sinav: "mm", bolum: "tr", temalar: ["jeopolitik"], konu: { tr: "Tarih ve coğrafyanın dış politikaya etkileri", en: "The effects of history and geography on foreign policy" } },
  { yil: "2026", sinav: "mm", bolum: "tr", temalar: ["guvenlik", "bolgesel"], konu: { tr: "Mevcut ittifaklar ile yeni ittifak ve işbirliği mekanizmalarının etkisi", en: "The impact of existing alliances and new alliance and cooperation mechanisms" }, politika: "iran-korfez" }
];
