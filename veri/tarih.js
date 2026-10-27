// =============================================================
// TARİH VERİSİ — Türk Dış Politikası dönemleri (iki dilli)
// Her metin { tr: "Türkçe", en: "English" } şeklinde yazılır.
// İngilizce terimler Dışişleri Bakanlığı terminoloji listelerine göre seçildi.
// Yeni dönem eklemek için bir { ... } bloğunu kopyalayıp düzenle.
// =============================================================

const TARIH = [
  {
    donem: "1919–1923",
    baslik: { tr: "Kurtuluş Savaşı ve Lozan", en: "War of Independence and Lausanne" },
    ozet: {
      tr: "Yeni devletin uluslararası meşruiyetini kazandığı kuruluş dönemi. Misak-ı Millî hedef olarak belirlendi; Lozan ile bağımsızlık ve sınırlar büyük ölçüde tescil edildi.",
      en: "The founding period in which the new state gained international legitimacy. The National Pact set the objectives, and Lausanne largely confirmed independence and borders."
    },
    olaylar: [
      { yil: "1920", olay: { tr: "Misak-ı Millî'nin Son Osmanlı Mebusan Meclisi'nde kabulü", en: "Adoption of the National Pact by the last Ottoman Chamber of Deputies" }, onem: { tr: "Kurtuluş mücadelesinin sınır ve bağımsızlık hedeflerini belirleyen temel belge.", en: "The founding document setting the territorial and independence objectives of the national struggle." } },
      { yil: "1921", olay: { tr: "Moskova Antlaşması ve Ankara Antlaşması (Fransa ile)", en: "Treaty of Moscow and Treaty of Ankara (with France)" }, onem: { tr: "Ankara Hükümeti'nin büyük güçlerce muhatap alınmaya başlaması; doğu ve güney sınırlarının şekillenmesi.", en: "Great powers began to deal with the Ankara Government; the eastern and southern borders took shape." } },
      { yil: "1922", olay: { tr: "Mudanya Ateşkesi", en: "Armistice of Mudanya" }, onem: { tr: "Askerî zaferin diplomatik sonuca bağlanması; Doğu Trakya'nın savaşsız alınması.", en: "Military victory was translated into a diplomatic outcome; Eastern Thrace was recovered without fighting." } },
      { yil: "24 Temmuz 1923", olay: { tr: "Lozan Barış Antlaşması", en: "Treaty of Lausanne" }, onem: { tr: "Kapitülasyonların kaldırılması, sınırların ve azınlık rejiminin belirlenmesi. Musul ve Boğazlar meseleleri açık kaldı.", en: "Abolition of the capitulations; borders and the minority regime were defined. The Mosul and Straits questions remained open." } }
    ],
    kavramlar: [{ tr: "Misak-ı Millî", en: "National Pact" }, { tr: "Lozan Antlaşması", en: "Treaty of Lausanne" }, { tr: "Kapitülasyonlar", en: "Capitulations" }]
  },
  {
    donem: "1923–1939",
    baslik: { tr: "Atatürk Dönemi: Statükoculuk ve Barış", en: "The Atatürk Era: Status Quo and Peace" },
    ozet: {
      tr: "\"Yurtta sulh, cihanda sulh\" ilkesiyle revizyonist olmayan, Lozan'ın açık bıraktığı sorunları barışçıl yollarla çözen ve bölgesel paktlarla güvenlik arayan bir dış politika.",
      en: "Guided by \"Peace at home, peace in the world\", a non-revisionist foreign policy that settled the issues left open at Lausanne by peaceful means and sought security through regional pacts."
    },
    // İsteğe bağlı görsel: dönem açıldığında olayların üstünde görünür
    gorsel: {
      src: "gorseller/atamiz-var-tak.webp",
      alt: { tr: "Bayraklarla süslenmiş, yeşillikten bir takın önünde toplanmış kalabalık; pankartta 'Atamız var, öksüz değiliz' yazıyor", en: "A crowd gathered in front of a greenery arch decorated with flags; the banner reads 'Atamız var, öksüz değiliz'" },
      aciklama: { tr: "1930'lar: Bir Anadolu kasabasında halkın kurduğu tak. Pankart: \"Atamız var, öksüz değiliz.\"", en: "1930s: An arch built by townspeople in Anatolia. The banner reads \"We have our Ata, we are not orphans.\"" }
    },
    olaylar: [
      { yil: "1926", olay: { tr: "Ankara Antlaşması ile Musul meselesinin İngiltere lehine sonuçlanması", en: "The Mosul question settled in Britain's favour by the Treaty of Ankara" }, onem: { tr: "Barışçıl çözüm tercihi; Türkiye'nin yeni çatışma yerine istikrarı seçmesi.", en: "A preference for peaceful settlement; Türkiye chose stability over a new conflict." } },
      { yil: "1932", olay: { tr: "Milletler Cemiyeti'ne üyelik", en: "Membership of the League of Nations" }, onem: { tr: "Uluslararası sisteme ve kolektif güvenliğe katılım.", en: "Participation in the international system and collective security." } },
      { yil: "1934", olay: { tr: "Balkan Antantı", en: "Balkan Entente" }, onem: { tr: "Balkanlarda statükonun korunmasına yönelik bölgesel güvenlik işbirliği.", en: "Regional security cooperation aimed at preserving the status quo in the Balkans." } },
      { yil: "20 Temmuz 1936", olay: { tr: "Montrö Boğazlar Sözleşmesi", en: "Montreux Convention Regarding the Regime of the Straits" }, onem: { tr: "Boğazlarda Türk egemenliğinin güçlenmesi; bugün de yürürlükte ve Karadeniz güvenliği açısından kritik.", en: "Strengthened Turkish sovereignty over the Straits; still in force and critical for Black Sea security." } },
      { yil: "1937", olay: { tr: "Sadabat Paktı", en: "Saadabad Pact" }, onem: { tr: "Doğu sınırında (İran, Irak, Afganistan) güvenlik ve dostluk.", en: "Security and friendship on the eastern border (Iran, Iraq, Afghanistan)." } },
      { yil: "1939", olay: { tr: "Hatay'ın Türkiye'ye katılması", en: "Accession of Hatay to Türkiye" }, onem: { tr: "Diplomasi ve Milletler Cemiyeti süreçleriyle elde edilen toprak meselesi çözümü.", en: "A territorial question resolved through diplomacy and League of Nations procedures." } }
    ],
    kavramlar: [{ tr: "Yurtta sulh, cihanda sulh", en: "Peace at home, peace in the world" }, { tr: "Statüko politikası", en: "Status quo policy" }, { tr: "Montrö Sözleşmesi", en: "Montreux Convention" }]
  },
  {
    donem: "1939–1945",
    baslik: { tr: "İkinci Dünya Savaşı: Aktif Tarafsızlık", en: "Second World War: Active Neutrality" },
    ozet: {
      tr: "İnönü döneminde ülkeyi savaşın dışında tutmaya odaklanan, taraflar arasında denge kuran bir politika izlendi. Savaşın sonunda Müttefikler safında yer alındı.",
      en: "Under İnönü, policy focused on keeping the country out of the war by balancing between the belligerents. At the end of the war, Türkiye sided with the Allies."
    },
    olaylar: [
      { yil: "1939", olay: { tr: "İngiltere ve Fransa ile Üçlü İttifak", en: "Tripartite Alliance with Britain and France" }, onem: { tr: "Batı'ya yakınlık; ancak savaşa fiilen girilmemesi için çekinceler korundu.", en: "Closeness to the West, while reservations were kept to avoid actually entering the war." } },
      { yil: "1941", olay: { tr: "Almanya ile Saldırmazlık Paktı", en: "Non-Aggression Pact with Germany" }, onem: { tr: "Denge politikasının somut örneği.", en: "A concrete example of balancing policy." } },
      { yil: "1943", olay: { tr: "Adana Görüşmesi (Churchill–İnönü) ve Kahire Konferansı", en: "Adana Meeting (Churchill–İnönü) and Cairo Conference" }, onem: { tr: "Müttefiklerin Türkiye'yi savaşa sokma baskısı ve Türkiye'nin direnişi.", en: "Allied pressure to bring Türkiye into the war, and Türkiye's resistance." } },
      { yil: "Şubat 1945", olay: { tr: "Almanya ve Japonya'ya savaş ilanı", en: "Declaration of war on Germany and Japan" }, onem: { tr: "San Francisco Konferansı'na katılma ve BM'nin kurucu üyesi olma şartının yerine getirilmesi.", en: "Met the condition for attending the San Francisco Conference and becoming a founding member of the UN." } }
    ],
    kavramlar: [{ tr: "Aktif tarafsızlık", en: "Active neutrality" }, { tr: "Denge politikası", en: "Balancing policy" }]
  },
  {
    donem: "1945–1960",
    baslik: { tr: "Soğuk Savaş ve Batı İttifakı", en: "The Cold War and the Western Alliance" },
    ozet: {
      tr: "Sovyet talepleri karşısında Türkiye güvenliğini Batı ittifakına bağladı. NATO üyeliği bu dönemin ve bugünün dış politikasının temel taşlarından biri oldu.",
      en: "Facing Soviet demands, Türkiye anchored its security in the Western alliance. NATO membership became a cornerstone of foreign policy then and now."
    },
    olaylar: [
      { yil: "1945", olay: { tr: "SSCB'nin Boğazlar ve Kars-Ardahan talepleri", en: "Soviet demands on the Straits and on Kars–Ardahan" }, onem: { tr: "Türkiye'yi Batı'ya yönelten temel tehdit algısı.", en: "The core threat perception that turned Türkiye towards the West." } },
      { yil: "1947–1948", olay: { tr: "Truman Doktrini ve Marshall Planı", en: "Truman Doctrine and Marshall Plan" }, onem: { tr: "ABD'nin askerî ve ekonomik desteği; Batı bloğuna entegrasyon.", en: "US military and economic support; integration into the Western bloc." } },
      { yil: "1950", olay: { tr: "Kore Savaşı'na asker gönderilmesi", en: "Deployment of troops to the Korean War" }, onem: { tr: "NATO üyeliği yolunda ittifaka bağlılığın gösterilmesi.", en: "Demonstrated commitment to the alliance on the road to NATO membership." } },
      { yil: "18 Şubat 1952", olay: { tr: "NATO üyeliği", en: "NATO membership" }, onem: { tr: "Batı güvenlik sisteminin kalıcı bir parçası olunması.", en: "Türkiye became a permanent part of the Western security system." } },
      { yil: "1955", olay: { tr: "Bağdat Paktı (sonra CENTO)", en: "Baghdad Pact (later CENTO)" }, onem: { tr: "Orta Doğu'da Batı yanlısı bölgesel güvenlik yapılanması.", en: "A pro-Western regional security arrangement in the Middle East." } },
      { yil: "1959", olay: { tr: "AET'ye ortaklık başvurusu", en: "Application for association with the EEC" }, onem: { tr: "Avrupa entegrasyonu yolculuğunun başlangıcı.", en: "The start of the European integration journey." } }
    ],
    kavramlar: [{ tr: "Çevreleme", en: "Containment" }, { tr: "İttifak", en: "Alliance" }]
  },
  {
    donem: "1960–1980",
    baslik: { tr: "Çok Yönlülük Arayışı ve Kıbrıs", en: "The Search for Multi-Dimensionality and Cyprus" },
    ozet: {
      tr: "Kıbrıs krizleri ve ABD ile yaşanan gerginlikler, Türkiye'yi dış politikasını çeşitlendirmeye yöneltti. Sovyetler ve Üçüncü Dünya ile ilişkiler geliştirildi.",
      en: "The Cyprus crises and tensions with the US led Türkiye to diversify its foreign policy. Relations with the Soviet Union and the Third World were developed."
    },
    olaylar: [
      { yil: "12 Eylül 1963", olay: { tr: "Ankara Antlaşması (AET ile Ortaklık Anlaşması)", en: "Ankara Agreement (Association Agreement with the EEC)" }, onem: { tr: "AB ilişkilerinin hukuki temeli; Gümrük Birliği'ne giden yolun çerçevesi.", en: "The legal basis of EU relations and the framework leading to the Customs Union." } },
      { yil: "1964", olay: { tr: "Johnson Mektubu", en: "Johnson Letter" }, onem: { tr: "ABD'nin Kıbrıs müdahalesine karşı uyarısı; Türkiye'de ittifakın sınırlarının sorgulanması.", en: "A US warning against intervention in Cyprus; Türkiye began to question the limits of the alliance." } },
      { yil: "20 Temmuz 1974", olay: { tr: "Kıbrıs Barış Harekâtı", en: "Cyprus Peace Operation" }, onem: { tr: "Garantör güç sıfatıyla müdahale; Kıbrıs meselesinin bugünkü yapısının oluşması.", en: "Intervention in the capacity of a guarantor state; the present shape of the Cyprus question emerged." } },
      { yil: "1975–1978", olay: { tr: "ABD silah ambargosu", en: "US arms embargo" }, onem: { tr: "Türk-Amerikan ilişkilerinde derin güven krizi; savunma sanayii ihtiyacının fark edilmesi.", en: "A deep crisis of trust in Turkish–American relations; the need for a national defence industry became clear." } }
    ],
    kavramlar: [{ tr: "Garanti Antlaşması (1960)", en: "Treaty of Guarantee (1960)" }, { tr: "Garantör ülke", en: "Guarantor state" }, { tr: "Silah ambargosu", en: "Arms embargo" }]
  },
  {
    donem: "1980–1991",
    baslik: { tr: "Özal Dönemi: Ekonomi Odaklı Açılım", en: "The Özal Era: An Economy-Driven Opening" },
    ozet: {
      tr: "Dışa açık ekonomi modeliyle birlikte dış politikada ticaret ve ekonomi ön plana çıktı. AT'ye tam üyelik başvurusu yapıldı ve Körfez Savaşı'nda aktif bir tutum izlendi.",
      en: "With an outward-looking economic model, trade and the economy came to the fore in foreign policy. Türkiye applied for full EC membership and took an active stance in the Gulf War."
    },
    olaylar: [
      { yil: "1983", olay: { tr: "KKTC'nin ilanı", en: "Proclamation of the TRNC" }, onem: { tr: "Kıbrıs'ta iki ayrı yönetim gerçeğinin kurumsallaşması; KKTC'yi yalnızca Türkiye tanıyor.", en: "The reality of two separate administrations in Cyprus was institutionalised; only Türkiye recognises the TRNC." } },
      { yil: "14 Nisan 1987", olay: { tr: "AT'ye tam üyelik başvurusu", en: "Application for full membership of the EC" }, onem: { tr: "Avrupa hedefinin resmîleşmesi.", en: "The European objective became official." } },
      { yil: "1990–1991", olay: { tr: "Körfez Savaşı", en: "Gulf War" }, onem: { tr: "Koalisyona destek; Kuzey Irak'tan gelen göç ve güvenlik sorunlarının başlaması.", en: "Support for the coalition; migration and security problems from northern Iraq began." } }
    ],
    kavramlar: [{ tr: "Tanıma", en: "Recognition" }, { tr: "Aday ülke", en: "Candidate country" }]
  },
  {
    donem: "1991–2002",
    baslik: { tr: "Soğuk Savaş Sonrası: Yeni Coğrafyalar", en: "After the Cold War: New Geographies" },
    ozet: {
      tr: "Sovyetler'in dağılmasıyla Türkiye için Kafkasya ve Orta Asya'da yeni fırsatlar doğdu. Aynı dönemde Balkan krizleri, terörle mücadele ve AB adaylığı gündemi belirledi.",
      en: "The dissolution of the Soviet Union created new opportunities for Türkiye in the Caucasus and Central Asia. Balkan crises, counter-terrorism and EU candidacy shaped the agenda."
    },
    olaylar: [
      { yil: "1991", olay: { tr: "Bağımsızlığını ilan eden Türk cumhuriyetlerinin tanınması", en: "Recognition of the newly independent Turkic republics" }, onem: { tr: "Türkiye, Azerbaycan'ın bağımsızlığını ilk tanıyan ülke oldu; Türk dünyasıyla ilişkilerin kurumsallaşmasının başlangıcı.", en: "Türkiye was the first country to recognise Azerbaijan's independence; relations with the Turkic world began to be institutionalised." } },
      { yil: "1992", olay: { tr: "Karadeniz Ekonomik İşbirliği (KEİ) kuruluşu", en: "Founding of the Black Sea Economic Cooperation (BSEC)" }, onem: { tr: "Türkiye öncülüğünde bölgesel ekonomik işbirliği.", en: "Regional economic cooperation led by Türkiye." } },
      { yil: "1 Ocak 1996", olay: { tr: "AB ile Gümrük Birliği", en: "Customs Union with the EU" }, onem: { tr: "Tam üye olmadan derin ekonomik entegrasyon.", en: "Deep economic integration without full membership." } },
      { yil: "1998", olay: { tr: "Adana Mutabakatı (Suriye ile)", en: "Adana Agreement (with Syria)" }, onem: { tr: "Suriye'nin PKK'ya desteğini kesmesi; bugün de Suriye politikasında atıf yapılan belge.", en: "Syria ended its support for the PKK; the document is still referred to in Syria policy today." } },
      { yil: "Aralık 1999", olay: { tr: "Helsinki Zirvesi: AB adaylık statüsü", en: "Helsinki Summit: EU candidate status" }, onem: { tr: "Reform süreçlerinin hızlanması.", en: "Reform processes accelerated." } }
    ],
    kavramlar: [{ tr: "Aday ülke", en: "Candidate country" }, { tr: "Bölgesel işbirliği", en: "Regional cooperation" }, { tr: "Gümrük Birliği", en: "Customs Union" }]
  },
  {
    donem: "2002–2010",
    baslik: { tr: "AB Müzakereleri ve Bölgesel Açılım", en: "EU Negotiations and Regional Outreach" },
    ozet: {
      tr: "AB ile katılım müzakereleri başladı; komşularla ilişkileri geliştirme, arabuluculuk ve yumuşak güç vurgusu öne çıktı.",
      en: "Accession negotiations with the EU began; the emphasis shifted to improving relations with neighbours, mediation and soft power."
    },
    olaylar: [
      { yil: "1 Mart 2003", olay: { tr: "Irak tezkeresinin TBMM'de reddi", en: "Rejection of the Iraq deployment motion in the Grand National Assembly" }, onem: { tr: "ABD ile ilişkilerde kırılma; Meclis'in dış politikadaki rolü.", en: "A rupture in relations with the US; the role of Parliament in foreign policy." } },
      { yil: "2004", olay: { tr: "Annan Planı referandumu", en: "Annan Plan referendums" }, onem: { tr: "Kıbrıslı Türkler kabul, Kıbrıslı Rumlar ret oyu verdi; Rum tarafı buna rağmen AB'ye üye oldu.", en: "Turkish Cypriots voted yes and Greek Cypriots voted no; the Greek Cypriot side nonetheless joined the EU." } },
      { yil: "3 Ekim 2005", olay: { tr: "AB katılım müzakerelerinin başlaması", en: "Opening of EU accession negotiations" }, onem: { tr: "Üyelik sürecinin en ileri noktası; müzakereler bugün fiilen durmuş durumda.", en: "The most advanced point of the membership process; negotiations are de facto at a standstill today." } },
      { yil: "2005", olay: { tr: "Medeniyetler İttifakı girişimi (İspanya ile)", en: "Alliance of Civilizations initiative (with Spain)" }, onem: { tr: "BM çatısında kültürlerarası diyalog inisiyatifi.", en: "An intercultural dialogue initiative under the UN umbrella." } },
      { yil: "2009–2010", olay: { tr: "BM Güvenlik Konseyi geçici üyeliği", en: "Non-permanent membership of the UN Security Council" }, onem: { tr: "Küresel diplomaside görünürlüğün artması.", en: "Greater visibility in global diplomacy." } },
      { yil: "2010", olay: { tr: "Mavi Marmara olayı", en: "Mavi Marmara incident" }, onem: { tr: "Türkiye-İsrail ilişkilerinde uzun süreli kriz.", en: "A prolonged crisis in Türkiye–Israel relations." } }
    ],
    kavramlar: [{ tr: "Yumuşak güç", en: "Soft power" }, { tr: "Arabuluculuk", en: "Mediation" }, { tr: "Katılım müzakereleri", en: "Accession negotiations" }]
  },
  {
    donem: "2011–2016",
    baslik: { tr: "Arap Baharı ve Güvenlik Krizleri", en: "The Arab Spring and Security Crises" },
    ozet: {
      tr: "Arap Baharı, özellikle Suriye iç savaşı, Türkiye'nin güvenliğini doğrudan etkiledi. Göç, terör ve büyük güçlerle gerilimler gündemi belirledi.",
      en: "The Arab Spring, above all the Syrian civil war, directly affected Türkiye's security. Migration, terrorism and tensions with great powers dominated the agenda."
    },
    olaylar: [
      { yil: "2011", olay: { tr: "Suriye iç savaşının başlaması", en: "Outbreak of the Syrian civil war" }, onem: { tr: "Milyonlarca sığınmacı, sınır güvenliği ve terör tehditleri.", en: "Millions of asylum seekers, border security challenges and terrorist threats." } },
      { yil: "24 Kasım 2015", olay: { tr: "Rus uçağının düşürülmesi", en: "Downing of a Russian aircraft" }, onem: { tr: "Türkiye-Rusya ilişkilerinde ağır kriz; 2016'da normalleşme.", en: "A severe crisis in Türkiye–Russia relations, followed by normalisation in 2016." } },
      { yil: "18 Mart 2016", olay: { tr: "Türkiye-AB Mutabakatı (göç)", en: "Türkiye–EU Statement (migration)" }, onem: { tr: "Düzensiz göçle mücadelede işbirliği; AB'nin mali desteği.", en: "Cooperation on combating irregular migration; EU financial support." } },
      { yil: "15 Temmuz 2016", olay: { tr: "Darbe girişimi", en: "Attempted coup" }, onem: { tr: "Batılı müttefiklerle güven sorunları; FETÖ ile mücadele dış politikanın gündemine girdi.", en: "Problems of trust with Western allies; the fight against FETÖ entered the foreign policy agenda." } },
      { yil: "Ağustos 2016", olay: { tr: "Fırat Kalkanı Harekâtı", en: "Operation Euphrates Shield" }, onem: { tr: "Suriye'de sahada doğrudan askerî varlığın başlangıcı.", en: "The start of a direct military presence on the ground in Syria." } }
    ],
    kavramlar: [{ tr: "Geçici koruma", en: "Temporary protection" }, { tr: "Sınır ötesi", en: "Cross-border" }, { tr: "Düzensiz göç", en: "Irregular migration" }]
  },
  {
    donem: "2016–2022",
    baslik: { tr: "Stratejik Özerklik ve Çok Taraflı Denge", en: "Strategic Autonomy and Multilateral Balancing" },
    ozet: {
      tr: "Türkiye NATO üyesi kalırken Rusya ile Suriye ve savunma alanında işbirliği yaptı. Doğu Akdeniz, Libya ve Karabağ'da daha iddialı ve sahada etkili bir politika izlendi.",
      en: "While remaining a NATO member, Türkiye cooperated with Russia on Syria and defence. It pursued a more assertive policy with effect on the ground in the Eastern Mediterranean, Libya and Karabakh."
    },
    olaylar: [
      { yil: "2017", olay: { tr: "Astana süreci (Türkiye-Rusya-İran)", en: "Astana process (Türkiye–Russia–Iran)" }, onem: { tr: "Suriye'de garantör ülke formatı.", en: "A guarantor-state format for Syria." } },
      { yil: "2019", olay: { tr: "S-400 teslimatı ve F-35 programından çıkarılma", en: "S-400 delivery and removal from the F-35 programme" }, onem: { tr: "ABD ile savunma ilişkilerinde kriz; 2020'de CAATSA yaptırımları.", en: "A crisis in defence relations with the US; CAATSA sanctions followed in 2020." } },
      { yil: "27 Kasım 2019", olay: { tr: "Libya ile Deniz Yetki Alanları Mutabakatı", en: "Memorandum of Understanding with Libya on the Delimitation of Maritime Jurisdiction Areas" }, onem: { tr: "Doğu Akdeniz'de Türkiye'nin kıta sahanlığı tezinin somutlaşması.", en: "Türkiye's continental shelf position in the Eastern Mediterranean was given concrete form." } },
      { yil: "2020", olay: { tr: "İkinci Karabağ Savaşı", en: "Second Karabakh War" }, onem: { tr: "Azerbaycan'ın topraklarını geri alması; Türkiye'nin açık desteği.", en: "Azerbaijan recovered its territories with Türkiye's open support." } },
      { yil: "15 Haziran 2021", olay: { tr: "Şuşa Beyannamesi", en: "Shusha Declaration" }, onem: { tr: "Türkiye-Azerbaycan ilişkilerinin müttefiklik düzeyine çıkması.", en: "Türkiye–Azerbaijan relations were raised to the level of an alliance." } },
      { yil: "2022", olay: { tr: "Rusya-Ukrayna savaşı; İstanbul görüşmeleri ve Karadeniz Tahıl Girişimi", en: "Russia–Ukraine war; Istanbul talks and the Black Sea Grain Initiative" }, onem: { tr: "Montrö'nün uygulanması ve iki tarafla da konuşabilen kolaylaştırıcı rolü.", en: "Implementation of Montreux and a facilitation role based on dialogue with both sides." } }
    ],
    kavramlar: [{ tr: "Stratejik özerklik", en: "Strategic autonomy" }, { tr: "Kolaylaştırıcılık", en: "Facilitation" }, { tr: "Kıta sahanlığı", en: "Continental shelf" }]
  },
  {
    donem: "2023–2025",
    baslik: { tr: "Normalleşmeler ve Yeni Suriye", en: "Normalisations and a New Syria" },
    ozet: {
      tr: "Körfez ülkeleri, Mısır ve Ermenistan ile normalleşme adımları atıldı. Esad rejiminin çöküşüyle Suriye politikası yeni bir döneme girdi; Gazze savaşı ise İsrail ile ilişkileri belirledi.",
      en: "Normalisation steps were taken with the Gulf states, Egypt and Armenia. With the fall of the Assad regime, Syria policy entered a new era, while the Gaza war defined relations with Israel."
    },
    olaylar: [
      { yil: "Şubat 2023", olay: { tr: "Kahramanmaraş depremleri ve uluslararası dayanışma", en: "Kahramanmaraş earthquakes and international solidarity" }, onem: { tr: "Yunanistan dâhil birçok ülkeyle ilişkilerde yumuşama; 'deprem diplomasisi'.", en: "A thaw with many countries including Greece: 'earthquake diplomacy'." } },
      { yil: "Ocak 2024", olay: { tr: "İsveç'in NATO üyeliğinin TBMM'de onaylanması", en: "Ratification of Sweden's NATO accession by the Grand National Assembly" }, onem: { tr: "Güvenlik kaygılarının pazarlık konusu yapılması ve ittifak içi diplomasi.", en: "Security concerns used as leverage; intra-alliance diplomacy." } },
      { yil: "Aralık 2024", olay: { tr: "Esad rejiminin çöküşü", en: "Fall of the Assad regime" }, onem: { tr: "Suriye'de Türkiye'nin etkisinin artması; sığınmacı dönüşü ve terörle mücadele gündemi.", en: "Türkiye's influence in Syria grew; the return of asylum seekers and counter-terrorism moved up the agenda." } },
      { yil: "Mayıs 2025", olay: { tr: "Rusya-Ukrayna doğrudan görüşmelerinin İstanbul'da yapılması", en: "Direct Russia–Ukraine talks held in Istanbul" }, onem: { tr: "Türkiye'nin müzakere platformu rolünün teyidi.", en: "Confirmed Türkiye's role as a negotiation platform." } },
      { yil: "Ekim 2025", olay: { tr: "Gazze ateşkesi; Türkiye'nin garantör ülkeler arasında yer alması", en: "Gaza ceasefire; Türkiye among the guarantor states" }, onem: { tr: "Filistin meselesinde sahaya yönelik diplomatik rol.", en: "A diplomatic role with effect on the ground in the Palestinian question." } },
      { yil: "Ekim 2025", olay: { tr: "KKTC'de Tufan Erhürman'ın cumhurbaşkanı seçilmesi", en: "Election of Tufan Erhürman as President of the TRNC" }, onem: { tr: "Kıbrıs müzakerelerinde yeni dönem.", en: "A new period in the Cyprus negotiations." } }
    ],
    kavramlar: [{ tr: "Normalleşme", en: "Normalisation" }, { tr: "Ateşkes", en: "Ceasefire" }, { tr: "Garantör ülke", en: "Guarantor state" }]
  },
  {
    donem: "2026",
    baslik: { tr: "Zirveler Yılı ve Bölgesel Savaş Ortamı", en: "A Year of Summits amid Regional War" },
    ozet: {
      tr: "Türkiye NATO, COP31 ve Türk Devletleri Teşkilatı zirvelerine ev sahipliği yapıyor. İran'a yönelik savaş, Gazze, Suriye ve Rusya-Ukrayna gündemin ana başlıkları.",
      en: "Türkiye is hosting the NATO, COP31 and Organization of Turkic States summits. The war against Iran, Gaza, Syria and Russia–Ukraine top the agenda."
    },
    olaylar: [
      { yil: "Şubat–Mart 2026", olay: { tr: "İran savaşı; Türk hava sahasına giren İran füzelerinin NATO sistemlerince engellenmesi", en: "Iran war; Iranian missiles entering Turkish airspace intercepted by NATO systems" }, onem: { tr: "NATO hava savunmasının Türkiye için somut önemi; sivil savunma hazırlıkları.", en: "The tangible value of NATO air defence for Türkiye; civil defence preparations." } },
      { yil: "7–8 Temmuz 2026", olay: { tr: "NATO Ankara Zirvesi", en: "NATO Ankara Summit" }, onem: { tr: "Türkiye 2004 İstanbul'dan sonra ikinci kez NATO zirvesine ev sahipliği yaptı.", en: "Türkiye hosted a NATO summit for the second time, after Istanbul in 2004." } },
      { yil: "Ekim 2026", olay: { tr: "Kanada ile stratejik ortaklık; İstanbul'da R4 ve R4+E3 dışişleri bakanları toplantıları", en: "Strategic partnership with Canada; R4 and R4+E3 foreign ministers' meetings in Istanbul" }, onem: { tr: "Avrupa ve bölge ülkelerini bir araya getiren platform rolü.", en: "A platform role bringing European and regional states together." } },
      { yil: "9–20 Kasım 2026", olay: { tr: "COP31 İklim Konferansı (Antalya)", en: "COP31 Climate Change Conference (Antalya)" }, onem: { tr: "İklim diplomasisinde Türkiye'nin ev sahipliği; Avustralya ile yürütülen özel düzenleme.", en: "Türkiye hosts climate diplomacy under a special arrangement with Australia." } }
    ],
    kavramlar: [{ tr: "Zirve diplomasisi", en: "Summit diplomacy" }, { tr: "Stratejik ortaklık", en: "Strategic partnership" }, { tr: "İklim değişikliği", en: "Climate change" }]
  }
];
