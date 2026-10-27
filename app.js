// =============================================================
// app.js — Sitenin çalışma mantığı (JavaScript)
// Benzetme: Evin elektrik tesisatı. Butona basınca ışığın yanmasını,
// yani bir şeyin olmasını sağlar. İçerikleri veri/ klasöründen okur.
//
// İKİ DİL NASIL ÇALIŞIYOR?
// Benzetme: Bir müzedeki iki dilli tabelalar. Her tabelada hem Türkçe hem
// İngilizce yazı var; dil butonu hangi yazının görüneceğini seçer.
// Veri dosyalarında her metin { tr: "...", en: "..." } şeklindedir.
// =============================================================

// ---------- DİL AYARI ----------
// Seçilen dili tarayıcıya not ederiz ki site bir dahaki açılışta hatırlasın.
let dil = "tr";
try { dil = localStorage.getItem("tdp-dil") === "en" ? "en" : "tr"; } catch (e) { /* hatırlayamazsa Türkçe başlar */ }

// t(): Bir { tr, en } nesnesinden seçili dildeki metni verir
function t(metin) {
  if (metin && typeof metin === "object" && !Array.isArray(metin)) return metin[dil] ?? metin.tr;
  return metin;
}
// a(): Arayüz tabelalarından (veri/arayuz.js) bir metni verir
function a(anahtar) {
  return ARAYUZ[dil][anahtar] ?? ARAYUZ.tr[anahtar] ?? anahtar;
}

// ---------- KÜÇÜK YARDIMCILAR ----------

// Metindeki özel karakterleri güvenli hâle getirir (sayfayı bozmasın diye)
function guvenli(metin) {
  return String(metin)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Bir listeyi rastgele karıştırır (kart ve quiz sırası için)
function karistir(liste) {
  const kopya = [...liste];
  for (let i = kopya.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [kopya[i], kopya[j]] = [kopya[j], kopya[i]];
  }
  return kopya;
}

// "2026-10-23" → { gun: "23", ay: "Eki 2026" } (seçili dilde)
function tarihParcala(tarih) {
  const [yil, ay, gun] = tarih.split("-");
  return { gun: String(Number(gun)), ay: a("aylar")[Number(ay) - 1] + " " + yil };
}
// Liste öğesi için tarih yazısı (tarihMetin varsa onu kullanır, ör. "Aralık 2026")
function tarihYazisi(oge) {
  if (oge.tarihMetin) return t(oge.tarihMetin);
  const p = tarihParcala(oge.tarih);
  return p.gun + " " + p.ay;
}
// Tarih sekmesindeki "24 Temmuz 1923" gibi yazılarda ay adını İngilizceye çevirir
const AY_ADLARI = { "Ocak": "January", "Şubat": "February", "Mart": "March", "Nisan": "April", "Mayıs": "May", "Haziran": "June", "Temmuz": "July", "Ağustos": "August", "Eylül": "September", "Ekim": "October", "Kasım": "November", "Aralık": "December" };
function yilYaz(metin) {
  if (dil === "tr") return metin;
  return metin.replace(/Ocak|Şubat|Mart|Nisan|Mayıs|Haziran|Temmuz|Ağustos|Eylül|Ekim|Kasım|Aralık/g, ay => AY_ADLARI[ay]);
}
const yeniden = (liste) => [...liste].sort((x, y) => y.tarih.localeCompare(x.tarih));

// Politika id'sinden başlığı bulur (duyurulardaki "konu" alanı için)
function konuAdi(id) {
  const p = POLITIKALAR.find(x => x.id === id);
  return p ? t(p.baslik) : "";
}

// ---------- SABİT TABELALARI ÇEVİR ----------
// HTML'de data-t="anahtar" yazan her yerin metnini seçili dile göre doldurur.
function tabelalariYaz() {
  document.documentElement.lang = dil;
  document.title = a("sayfaBasligi");
  document.querySelectorAll("[data-t]").forEach(el => { el.textContent = a(el.dataset.t); });
  document.querySelectorAll("[data-t-html]").forEach(el => { el.innerHTML = a(el.dataset.tHtml); });
  document.querySelectorAll("[data-ph]").forEach(el => { el.placeholder = a(el.dataset.ph); });
  // Görsellerin açıklama metinleri (alt): görme engelli kullanıcılar ve arama motorları için
  document.querySelectorAll("[data-alt]").forEach(el => { el.alt = a(el.dataset.alt); });
  const dd = document.getElementById("dil-dugme");
  dd.textContent = a("dilButon");
  dd.setAttribute("aria-label", a("dilButonAciklama"));
  dd.title = a("dilButonAciklama");
}

// ---------- SEKMELER (sayfalar arası geçiş) ----------
// Adres çubuğundaki # işaretinden sonrasına bakarak hangi sekmenin açılacağına karar verir.
function sekmeGoster() {
  const ad = location.hash.replace("#", "") || "ana";
  document.querySelectorAll(".sekme").forEach(s => { s.hidden = s.id !== ad; });
  document.querySelectorAll(".menu a").forEach(link => {
    link.classList.toggle("aktif", link.dataset.sekme === ad);
  });
  // Aktif menü öğesi telefonda görünür olsun
  const aktif = document.querySelector(".menu a.aktif");
  if (aktif) aktif.scrollIntoView({ block: "nearest", inline: "center" });
  if (ad === "sozluk") sozlukYukle();
  window.scrollTo({ top: 0, behavior: "instant" });
}
window.addEventListener("hashchange", sekmeGoster);

// ---------- ANA SAYFA ----------
function anaSayfa() {
  const olaySayisi = TARIH.reduce((top, d) => top + d.olaylar.length, 0);
  document.getElementById("ana-ozet").innerHTML = `
    <a href="#tarih"><b>${TARIH.length}</b><span>${a("ozetDonem")}, ${olaySayisi} ${a("ozetOlay")}</span></a>
    <a href="#politikalar"><b>${POLITIKALAR.length}</b><span>${a("ozetPolitika")}</span></a>
    <a href="#dunya"><b>${DUNYA.length}</b><span>${a("ozetDunya")}</span></a>
    <a href="#quiz"><b>${QUIZ.length}</b><span>${a("ozetQuiz")}</span></a>
    <a href="#kartlar"><b>${KARTLAR.length}</b><span>${a("ozetKart")}</span></a>
    <a href="#mulakat"><b>${MULAKAT.length}</b><span>${a("ozetMulakat")}</span></a>
  `;
  const mini = d => `<div class="mini"><small>${tarihYazisi(d)}</small><br><strong>${guvenli(t(d.baslik))}</strong></div>`;
  document.getElementById("ana-son").innerHTML = yeniden(DUYURULAR).slice(0, 3).map(mini).join("");
  document.getElementById("ana-dunya").innerHTML = yeniden(DUNYA).slice(0, 3).map(mini).join("");
}

// ---------- TARİH ----------
function tarihCiz() {
  document.getElementById("tarih-liste").innerHTML = TARIH.map(d => `
    <article class="donem">
      <details class="kutu">
        <summary data-goster="${guvenli(a("olaylariGoster"))}" data-gizle="${guvenli(a("gizle"))}">
          <span class="donem-yil">${guvenli(d.donem)}</span>
          <h3>${guvenli(t(d.baslik))}</h3>
          <p>${guvenli(t(d.ozet))}</p>
        </summary>
        <div class="olaylar">
          ${d.gorsel ? `
            <figure class="cerceve donem-gorsel">
              <img src="${guvenli(d.gorsel.src)}" alt="${guvenli(t(d.gorsel.alt))}" loading="lazy">
              <figcaption>${guvenli(t(d.gorsel.aciklama))}</figcaption>
            </figure>` : ""}
          ${d.olaylar.map(o => `
            <div class="olay">
              <div class="olay-yil">${guvenli(yilYaz(o.yil))}</div>
              <div><p><strong>${guvenli(t(o.olay))}</strong></p><p class="onem">${guvenli(t(o.onem))}</p></div>
            </div>`).join("")}
          <div class="kavramlar">${kavramCiz(d.kavramlar)}</div>
        </div>
      </details>
    </article>
  `).join("");
}

// Kavram etiketleri: seçili dildeki terim + diğer dildeki karşılığı
function kavramCiz(liste) {
  const diger = dil === "tr" ? "en" : "tr";
  return liste.map(k => `<span>${guvenli(k[dil])} <i>· ${guvenli(k[diger])}</i></span>`).join("");
}

// ---------- POLİTİKALAR ----------
// Liste görünümü (kartlar) + bir karta tıklanınca açılan ayrıntılı "dosya" görünümü.
// Benzetme: Arşiv dolabındaki klasör sırtları ve açılan klasörün kendisi.
let politikaFiltre = "hepsi";
let acikDosya = null; // açık politika dosyasının id'si

function politikaCiz() {
  const liste = politikaFiltre === "hepsi" ? POLITIKALAR : POLITIKALAR.filter(p => p.oncelik === politikaFiltre);
  const listeEl = document.getElementById("politika-liste");
  const dosyaEl = document.getElementById("politika-dosya");
  const filtreEl = document.getElementById("politika-filtre");

  if (acikDosya) {
    const p = POLITIKALAR.find(x => x.id === acikDosya);
    listeEl.hidden = true; filtreEl.hidden = true; dosyaEl.hidden = false;
    dosyaEl.innerHTML = dosyaCiz(p);
    return;
  }
  listeEl.hidden = false; filtreEl.hidden = false; dosyaEl.hidden = true;
  listeEl.innerHTML = liste.map(p => `
    <article class="kutu pol-kart" id="pol-${p.id}">
      <div class="pol-ust">
        <span class="pol-bolge">${guvenli(t(p.bolge))}</span>
        <span class="etiket ${p.oncelik}">${a("oncelik_" + p.oncelik)}</span>
      </div>
      <h3>${guvenli(t(p.baslik))}</h3>
      <div class="pol-blok resmi"><span class="etiket resmi">${a("resmiTutum")}</span><p>${guvenli(t(p.resmi))}</p></div>
      <p class="pol-sayi">${p.olgular.length} ${a("polOlgular").toLowerCase()} · ${p.belgeler.length} ${a("polBelgeler").toLowerCase()}</p>
      <button class="dugme" data-dosya="${p.id}">${a("polDosyaAc")}</button>
    </article>
  `).join("");
}

function dosyaCiz(p) {
  return `
    <button class="dugme metin geri" data-geri>${a("polGeri")}</button>
    <article class="dosya">
      <header class="dosya-ust">
        <span class="pol-bolge">${guvenli(t(p.bolge))}</span>
        <span class="etiket ${p.oncelik}">${a("oncelik_" + p.oncelik)}</span>
        <h2>${guvenli(t(p.baslik))}</h2>
      </header>
      <div class="dosya-izgara">
        <div>
          <div class="pol-blok resmi"><span class="etiket resmi">${a("resmiTutum")}</span><p>${guvenli(t(p.resmi))}</p></div>
          <div class="pol-blok analiz"><span class="etiket analiz">${a("analiz")}</span><p>${guvenli(t(p.analiz))}</p></div>
          <div class="pol-blok karsi"><span class="etiket haber">${a("polKarsiTez")}</span><p>${guvenli(t(p.karsiTez))}</p></div>
          <h3 class="ara-baslik">${a("polOlgular")}</h3>
          <ol class="olgu-liste">${p.olgular.map(o => `<li>${guvenli(t(o))}</li>`).join("")}</ol>
        </div>
        <aside>
          <div class="kutu ipucu-kutu"><h3>${a("polIpucu")}</h3><p>${guvenli(t(p.sinavIpucu))}</p></div>
          <div class="kutu"><h3>${a("polBelgeler")}</h3>
            <ul class="belge-liste">${p.belgeler.map(b => `<li><a href="${guvenli(b.url)}" target="_blank" rel="noopener">${guvenli(t(b.ad))} ↗</a></li>`).join("")}</ul>
          </div>
          <div class="kutu"><h3>${a("polKavram")}</h3><div class="kavramlar">${kavramCiz(p.kavramlar)}</div></div>
          <div class="kutu"><h3>${a("polSoru")}</h3><p class="pol-soru">${guvenli(t(p.soru))}</p>
            <a class="kaynak" href="#yazili" data-yaz="${p.id}">${a("polYaz")}</a></div>
        </aside>
      </div>
    </article>`;
}

function dosyaAc(id) {
  acikDosya = id;
  if (location.hash !== "#politikalar") location.hash = "politikalar";
  politikaCiz();
  window.scrollTo({ top: 0, behavior: "instant" });
}

document.getElementById("politikalar").addEventListener("click", e => {
  const ac = e.target.closest("[data-dosya]");
  if (ac) { dosyaAc(ac.dataset.dosya); return; }
  if (e.target.closest("[data-geri]")) { acikDosya = null; politikaCiz(); window.scrollTo({ top: 0, behavior: "instant" }); return; }
  const yaz = e.target.closest("[data-yaz]");
  if (yaz) { e.preventDefault(); yazili.mod = "kompozisyon"; const i = KOMPOZISYON.findIndex(k => k.konu === yaz.dataset.yaz); if (i >= 0) yazili.komp = i; location.hash = "yazili"; yaziliCiz(); }
});

document.getElementById("politika-filtre").addEventListener("click", e => {
  const btn = e.target.closest("button");
  if (!btn) return;
  document.querySelectorAll("#politika-filtre .cip").forEach(c => c.classList.remove("aktif"));
  btn.classList.add("aktif");
  politikaFiltre = btn.dataset.oncelik;
  politikaCiz();
});

// ---------- TÜRKİYE GÜNDEMİ ----------
function haberKarti(d, ekBlok) {
  const p = tarihParcala(d.tarih);
  return `
    <article class="kutu duyuru">
      <div class="duyuru-tarih"><b>${p.gun}</b><span>${p.ay}</span></div>
      <div>
        ${ekBlok.ust}
        <h3>${guvenli(t(d.baslik))}</h3>
        <p>${guvenli(t(d.ozet))}</p>
        ${ekBlok.not}
        <a class="kaynak" href="${guvenli(d.kaynak)}" target="_blank" rel="noopener">${a("kaynakAc")}</a>
      </div>
    </article>`;
}

function takvimSatiri(y) {
  const not = y.not ? ` <span class="pol-bolge">${guvenli(t(y.not))}</span>` : "";
  return `<li><strong>${tarihYazisi(y)}:</strong> ${guvenli(t(y.baslik))}.${not} <a class="kaynak" href="${guvenli(y.kaynak)}" target="_blank" rel="noopener">${a("kaynak")}</a></li>`;
}

function guncelCiz() {
  document.getElementById("guncel-giris").innerHTML = a("guncelGiris").replace("{tarih}", guvenli(t(SON_GUNCELLEME)));
  document.getElementById("yaklasan-liste").innerHTML = YAKLASAN.map(takvimSatiri).join("");
  document.getElementById("duyuru-liste").innerHTML = yeniden(DUYURULAR).map(d => {
    const turEtiket = d.tur === "resmi"
      ? `<span class="etiket resmi">${a("resmiAciklama")}</span>`
      : `<span class="etiket haber">${a("basinAnaliz")}</span>`;
    return haberKarti(d, {
      ust: `${turEtiket} <span class="pol-bolge">· <a href="#politikalar" data-pol="${d.konu}">${guvenli(konuAdi(d.konu))}</a></span>`,
      not: `<p class="sinav-notu"><b>${a("sinavNotu")}</b> ${guvenli(t(d.sinavNotu))}</p>`
    });
  }).join("");
}

// Duyurudaki konu linkine tıklanınca ilgili politika dosyasını aç
document.getElementById("duyuru-liste").addEventListener("click", e => {
  const link = e.target.closest("[data-pol]");
  if (!link) return;
  e.preventDefault();
  dosyaAc(link.dataset.pol);
});

// ---------- DÜNYA GÜNDEMİ ----------
let dunyaBolge = "hepsi";
function dunyaCiz() {
  document.getElementById("dunya-giris").innerHTML = a("dunyaGiris").replace("{tarih}", guvenli(t(DUNYA_GUNCELLEME)));
  document.getElementById("dunya-takvim").innerHTML = [...DUNYA_TAKVIM]
    .sort((x, y) => x.tarih.localeCompare(y.tarih)).map(takvimSatiri).join("");

  // Bölge filtreleri: listedeki bölgelerden otomatik üretilir
  const bolgeler = [...new Map(DUNYA.map(d => [d.bolge.tr, d.bolge])).values()];
  document.getElementById("dunya-filtre").innerHTML =
    `<button class="cip ${dunyaBolge === "hepsi" ? "aktif" : ""}" data-bolge="hepsi">${a("bolgeHepsi")}</button>` +
    bolgeler.map(b => `<button class="cip ${dunyaBolge === b.tr ? "aktif" : ""}" data-bolge="${guvenli(b.tr)}">${guvenli(t(b))}</button>`).join("");

  const liste = dunyaBolge === "hepsi" ? DUNYA : DUNYA.filter(d => d.bolge.tr === dunyaBolge);
  document.getElementById("dunya-liste").innerHTML = yeniden(liste).map(d => haberKarti(d, {
    ust: `<span class="etiket haber">${guvenli(t(d.bolge))}</span>`,
    not: `<p class="baglanti"><b>${a("turkiyeBaglantisi")}</b> ${guvenli(t(d.baglanti))}</p>`
  })).join("");
}

document.getElementById("dunya-filtre").addEventListener("click", e => {
  const btn = e.target.closest("button");
  if (!btn) return;
  dunyaBolge = btn.dataset.bolge;
  dunyaCiz();
});

// ---------- OTOMATİK BAŞLIKLAR (robotun her gün doldurduğu kutu) ----------
// veri/otomatik.js dosyası GitHub'daki robot tarafından her sabah yeniden yazılır.
// Bilgisayarında açtığında boştur; o zaman kutu hiç görünmez.
function otomatikCiz(kategori, kutuId) {
  const kutu = document.getElementById(kutuId);
  const veri = (typeof OTOMATIK !== "undefined") ? OTOMATIK : null;
  const kaynaklar = veri ? veri.kaynaklar.filter(k => k.kategori === kategori && k.haberler.length) : [];
  if (!kaynaklar.length) { kutu.hidden = true; return; }

  const zaman = new Date(veri.guncelleme.replace("Z", ":00Z"));
  const zamanYazi = isNaN(zaman) ? veri.guncelleme : zaman.toLocaleString(dil === "tr" ? "tr-TR" : "en-GB",
    { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit", timeZone: "Europe/Istanbul" });

  const kaynakCiz = k => `
    <div class="oto-kaynak">
      <h3>${guvenli(t(k.ad))} <a class="kaynak" href="${guvenli(k.site)}" target="_blank" rel="noopener">${a("otoKaynakSite")}</a></h3>
      <ul>${k.haberler.map(h => `
        <li><small>${h.tarih ? tarihYazisi(h) : ""}</small>
        <a href="${guvenli(h.link)}" target="_blank" rel="noopener">${guvenli(h.baslik)}</a></li>`).join("")}
      </ul>
    </div>`;

  // Önce seçili dildeki kaynaklar; diğer dildekiler açılır bir bölümde
  const ayniDil = kaynaklar.filter(k => k.dil === dil);
  const digerDil = kaynaklar.filter(k => k.dil !== dil);
  const ana = ayniDil.length ? ayniDil : digerDil;
  const ek = ayniDil.length ? digerDil : [];

  kutu.innerHTML = `
    <div class="oto-ust"><h2>${a("otoBaslik")}</h2><span class="etiket analiz">${a("otoEtiket")}</span></div>
    <p class="pol-bolge">${a("otoAciklama").replace("{zaman}", guvenli(zamanYazi))}</p>
    <div class="oto-izgara">${ana.map(kaynakCiz).join("")}</div>
    ${ek.length ? `<details class="oto-diger"><summary>${a("otoDigerDil")}</summary><div class="oto-izgara">${ek.map(kaynakCiz).join("")}</div></details>` : ""}`;
  kutu.hidden = false;
}

// ---------- QUIZ ----------
// "Durum" (state): quiz'in o anki hâlini tutan kutu. Hangi sorudayız, kaç doğru var...
const quiz = { sorular: [], sira: 0, dogru: 0, cevaplandi: false, konu: "hepsi" };

function quizFiltreCiz() {
  const konular = ["hepsi", ...new Set(QUIZ.map(q => q.konu))];
  document.getElementById("quiz-filtre").innerHTML = konular.map(k =>
    `<button class="cip ${k === quiz.konu ? "aktif" : ""}" data-konu="${k}">${k === "hepsi" ? a("filtreHepsi") : guvenli(t(KONULAR[k]))}</button>`
  ).join("");
}

function quizBaslat(konu) {
  quiz.konu = konu;
  const havuz = konu === "hepsi" ? QUIZ : QUIZ.filter(q => q.konu === konu);
  quiz.sorular = karistir(havuz).slice(0, 10); // her turda en fazla 10 soru
  quiz.sira = 0;
  quiz.dogru = 0;
  quizFiltreCiz();
  soruCiz();
}

function soruCiz() {
  const alan = document.getElementById("quiz-alan");
  const toplam = quiz.sorular.length;

  // Sorular bittiyse sonucu göster
  if (quiz.sira >= toplam) {
    const yuzde = Math.round((quiz.dogru / toplam) * 100);
    const yorum = yuzde >= 80 ? a("sonucIyi") : yuzde >= 50 ? a("sonucOrta") : a("sonucZayif");
    alan.innerHTML = `
      <div class="sonuc">
        <b>${quiz.dogru} / ${toplam}</b>
        <p>${yorum}</p>
        <button class="dugme" id="quiz-tekrar">${a("yeniTur")}</button>
      </div>`;
    document.getElementById("quiz-tekrar").onclick = () => quizBaslat(quiz.konu);
    return;
  }

  const q = quiz.sorular[quiz.sira];
  quiz.cevaplandi = false;
  alan.innerHTML = `
    <div class="quiz-ilerleme"><div style="width:${(quiz.sira / toplam) * 100}%"></div></div>
    <div class="quiz-bilgi"><span>${a("soru")} ${quiz.sira + 1} / ${toplam} · ${guvenli(t(KONULAR[q.konu]))}</span><span>${a("dogruSayisi")}: ${quiz.dogru}</span></div>
    <p class="quiz-soru">${guvenli(t(q.soru))}</p>
    <div id="secenekler">
      ${q.secenekler[dil].map((s, i) => `<button class="secenek" data-i="${i}"><b>${"ABCD"[i]}</b>${guvenli(s)}</button>`).join("")}
    </div>
    <div id="quiz-geri-bildirim"></div>`;
}

document.getElementById("quiz-alan").addEventListener("click", e => {
  const btn = e.target.closest(".secenek");
  if (!btn || quiz.cevaplandi) return;
  quiz.cevaplandi = true;
  const q = quiz.sorular[quiz.sira];
  const secilen = Number(btn.dataset.i);
  const butonlar = document.querySelectorAll(".secenek");
  butonlar.forEach(b => b.disabled = true);
  butonlar[q.dogru].classList.add("dogru");
  if (secilen === q.dogru) { quiz.dogru++; } else { btn.classList.add("yanlis"); }
  ilerlemeQuizKaydet(q.konu, secilen === q.dogru);
  const son = quiz.sira + 1 >= quiz.sorular.length;
  document.getElementById("quiz-geri-bildirim").innerHTML = `
    <p class="aciklama"><strong>${secilen === q.dogru ? a("dogru") : a("yanlis")}</strong> ${guvenli(t(q.aciklama))}</p>
    <button class="dugme" id="quiz-sonraki">${son ? a("sonucuGor") : a("sonrakiSoru")}</button>`;
  document.getElementById("quiz-sonraki").onclick = () => { quiz.sira++; soruCiz(); };
});

document.getElementById("quiz-filtre").addEventListener("click", e => {
  const btn = e.target.closest("button");
  if (btn) quizBaslat(btn.dataset.konu);
});

// ---------- BİLGİ KARTLARI ----------
// "Bildim" denen kartlar tarayıcıya kaydedilir; "Sadece bilmediklerim" ile tekrar edilir.
const kartDurum = { liste: [...KARTLAR], sira: 0, sadece: false };
const kartId = k => k.on.tr;

function kartListesi() {
  return kartDurum.sadece ? kartDurum.liste.filter(k => !ilerleme.kartlar.includes(kartId(k))) : kartDurum.liste;
}

function kartCiz() {
  const liste = kartListesi();
  const diger = dil === "tr" ? "en" : "tr";
  const kartEl = document.getElementById("kart");
  kartEl.classList.remove("cevrildi");
  if (!liste.length) {
    document.getElementById("kart-on").textContent = a("kartHepsiBilindi");
    document.getElementById("kart-arka").textContent = "";
    document.getElementById("kart-sayac").textContent = "0 / 0";
    ["kart-geri", "kart-ileri", "kart-bildim", "kart-tekrar"].forEach(id => document.getElementById(id).disabled = true);
    return;
  }
  if (kartDurum.sira >= liste.length) kartDurum.sira = liste.length - 1;
  const k = liste[kartDurum.sira];
  const bilindi = ilerleme.kartlar.includes(kartId(k));
  document.getElementById("kart-on").textContent = k.on[dil] + (bilindi ? " ✓" : "");
  document.getElementById("kart-arka").innerHTML =
    `<span>${guvenli(k.arka[dil])}<br><br><small><b>${a("karsiligi")}:</b> ${guvenli(k.on[diger])}</small></span>`;
  document.getElementById("kart-sayac").textContent = `${kartDurum.sira + 1} / ${liste.length}`;
  document.getElementById("kart-geri").disabled = kartDurum.sira === 0;
  document.getElementById("kart-ileri").disabled = kartDurum.sira === liste.length - 1;
  document.getElementById("kart-bildim").disabled = false;
  document.getElementById("kart-tekrar").disabled = false;
}

function kartIsaretle(bildi) {
  const liste = kartListesi();
  const k = liste[kartDurum.sira];
  if (!k) return;
  const id = kartId(k);
  ilerleme.kartlar = ilerleme.kartlar.filter(x => x !== id);
  if (bildi) ilerleme.kartlar.push(id);
  ilerlemeKaydet();
  // Sadece bilmediklerim açıkken "bildim" kartı listeden düşer; sıra aynı kalır
  if (!(kartDurum.sadece && bildi) && kartDurum.sira < kartListesi().length - 1) kartDurum.sira++;
  kartCiz();
  ilerlemeCiz();
}

document.getElementById("kart").onclick = () => document.getElementById("kart").classList.toggle("cevrildi");
document.getElementById("kart-geri").onclick = () => { if (kartDurum.sira > 0) { kartDurum.sira--; kartCiz(); } };
document.getElementById("kart-ileri").onclick = () => { if (kartDurum.sira < kartListesi().length - 1) { kartDurum.sira++; kartCiz(); } };
document.getElementById("kart-karistir").onclick = () => { kartDurum.liste = karistir(KARTLAR); kartDurum.sira = 0; kartCiz(); };
document.getElementById("kart-bildim").onclick = () => kartIsaretle(true);
document.getElementById("kart-tekrar").onclick = () => kartIsaretle(false);
document.getElementById("kart-sadece").onchange = e => { kartDurum.sadece = e.target.checked; kartDurum.sira = 0; kartCiz(); };

// ---------- MÜLAKAT ----------
const mulakat = { tur: "hepsi", soru: null, zamanlayici: null, kalan: 90 };

function mulakatFiltreCiz() {
  const turler = ["hepsi", ...new Set(MULAKAT.map(m => m.tur))];
  document.getElementById("mulakat-filtre").innerHTML = turler.map(tr =>
    `<button class="cip ${tr === mulakat.tur ? "aktif" : ""}" data-tur="${tr}">${tr === "hepsi" ? a("filtreHepsi") : guvenli(t(MULAKAT_TURLERI[tr]))}</button>`
  ).join("");
}

function sayacYaz() {
  const el = document.getElementById("mulakat-sayac");
  const dk = Math.floor(mulakat.kalan / 60);
  const sn = String(mulakat.kalan % 60).padStart(2, "0");
  el.textContent = `${dk}:${sn}`;
  el.classList.toggle("bitti", mulakat.kalan === 0);
}

function sayacDurdur() {
  clearInterval(mulakat.zamanlayici);
  mulakat.zamanlayici = null;
  document.getElementById("mulakat-basla").textContent = a("sureBaslat");
}

// Mevcut soruyu seçili dilde ekrana yazar (dil değişince de çağrılır)
function mulakatSoruYaz() {
  const s = mulakat.soru;
  document.getElementById("mulakat-tur").textContent = t(MULAKAT_TURLERI[s.tur]);
  document.getElementById("mulakat-soru").textContent = t(s.soru);
  const ipucu = document.getElementById("mulakat-ipucu");
  ipucu.textContent = t(s.ipucu);
  document.getElementById("mulakat-ipucu-btn").textContent = ipucu.hidden ? a("ipucuGoster") : a("ipucuGizle");
  document.getElementById("mulakat-basla").textContent = mulakat.zamanlayici ? a("durdur") : a("sureBaslat");
}

function yeniMulakatSorusu() {
  const havuz = mulakat.tur === "hepsi" ? MULAKAT : MULAKAT.filter(m => m.tur === mulakat.tur);
  let secim;
  do { secim = havuz[Math.floor(Math.random() * havuz.length)]; }
  while (havuz.length > 1 && secim === mulakat.soru); // aynı soru arka arkaya gelmesin
  mulakat.soru = secim;
  sayacDurdur();
  mulakat.kalan = 90;
  sayacYaz();
  document.getElementById("mulakat-ipucu").hidden = true;
  mulakatSoruYaz();
}

document.getElementById("mulakat-basla").onclick = () => {
  if (mulakat.zamanlayici) { sayacDurdur(); return; }
  if (mulakat.kalan === 0) { mulakat.kalan = 90; sayacYaz(); }
  document.getElementById("mulakat-basla").textContent = a("durdur");
  mulakat.zamanlayici = setInterval(() => {
    mulakat.kalan--;
    sayacYaz();
    if (mulakat.kalan <= 0) sayacDurdur();
  }, 1000);
};
document.getElementById("mulakat-ipucu-btn").onclick = () => {
  const ipucu = document.getElementById("mulakat-ipucu");
  ipucu.hidden = !ipucu.hidden;
  mulakatSoruYaz();
};
document.getElementById("mulakat-yeni").onclick = yeniMulakatSorusu;
document.getElementById("mulakat-filtre").addEventListener("click", e => {
  const btn = e.target.closest("button");
  if (!btn) return;
  mulakat.tur = btn.dataset.tur;
  mulakatFiltreCiz();
  yeniMulakatSorusu();
});

// ---------- İLERLEME (bu tarayıcıda saklanır) ----------
// Benzetme: Cebindeki not defteri. Sadece bu cihazda durur, kimse göremez.
let ilerleme = { quiz: {}, kartlar: [] };
try { ilerleme = Object.assign(ilerleme, JSON.parse(localStorage.getItem("tdp-ilerleme") || "{}")); } catch (e) { /* okunamazsa boş başla */ }
function ilerlemeKaydet() { try { localStorage.setItem("tdp-ilerleme", JSON.stringify(ilerleme)); } catch (e) { /* kaydedemezse sorun değil */ } }
function ilerlemeQuizKaydet(konu, dogruMu) {
  const k = ilerleme.quiz[konu] || { d: 0, t: 0 };
  k.t++; if (dogruMu) k.d++;
  ilerleme.quiz[konu] = k;
  ilerlemeKaydet();
  ilerlemeCiz();
}
function ilerlemeCiz() {
  const kutu = document.getElementById("ana-ilerleme");
  const konular = Object.keys(ilerleme.quiz);
  if (!konular.length && !ilerleme.kartlar.length) { kutu.hidden = true; return; }
  kutu.hidden = false;
  const satirlar = konular.map(k => {
    const v = ilerleme.quiz[k]; const y = Math.round(v.d / v.t * 100);
    return `<div class="cubuk-satir"><span>${guvenli(t(KONULAR[k] || { tr: k, en: k }))}</span>
      <span class="cubuk"><span style="width:${y}%"></span></span><b>%${y}</b><small>${v.d}/${v.t}</small></div>`;
  }).join("");
  kutu.innerHTML = `
    <div class="oto-ust"><h2>${a("ilerlemeBaslik")}</h2><button class="dugme metin" id="ilerleme-sifirla">${a("ilerlemeSifirla")}</button></div>
    <p class="pol-bolge">${a("ilerlemeAcik")}</p>
    <div class="ilerleme-izgara">
      <div><h3>${a("ilerlemeQuiz")}</h3>${satirlar || `<p class="pol-bolge">${a("ilerlemeYok")}</p>`}</div>
      <div class="kart-sayi"><h3>${a("ilerlemeKart")}</h3><b>${ilerleme.kartlar.length}</b><span>/ ${KARTLAR.length}</span></div>
    </div>`;
  document.getElementById("ilerleme-sifirla").onclick = () => { ilerleme = { quiz: {}, kartlar: [] }; ilerlemeKaydet(); ilerlemeCiz(); kartCiz(); };
}

// ---------- YAZILI PRATİK ----------
const yazili = { mod: "kompozisyon", komp: 0, cev: 0, kalan: 0, saat: null, sureDk: 45, ipucu: false, kontrol: false };
const taslakAnahtar = () => `tdp-taslak-${yazili.mod}-${yazili.mod === "kompozisyon" ? yazili.komp : yazili.cev}`;
function taslakOku() { try { return localStorage.getItem(taslakAnahtar()) || ""; } catch (e) { return ""; } }
function taslakYaz(v) { try { localStorage.setItem(taslakAnahtar(), v); } catch (e) { /* yoksay */ } }
const kelimeSay = v => (v.trim().match(/\S+/g) || []).length;
const sureYazi = sn => `${Math.floor(sn / 60)}:${String(sn % 60).padStart(2, "0")}`;

function yaziliCiz() {
  document.querySelectorAll("#yazili-mod .cip").forEach(c => c.classList.toggle("aktif", c.dataset.mod === yazili.mod));
  const alan = document.getElementById("yazili-alan");
  const sayac = `
    <div class="yazi-sayac">
      <label>${a("sure")}: <select id="yazi-sure">${[20, 30, 45, 60].map(d => `<option value="${d}" ${d === yazili.sureDk ? "selected" : ""}>${d} ${a("dk")}</option>`).join("")}</select></label>
      <span class="sayac kucuk" id="yazi-kalan">${sureYazi(yazili.kalan || yazili.sureDk * 60)}</span>
      <button class="dugme ikincil" id="yazi-basla">${yazili.saat ? a("durdur2") : a("baslat")}</button>
      <span class="pol-bolge" id="yazi-kelime"></span>
    </div>`;
  if (yazili.mod === "kompozisyon") {
    const k = KOMPOZISYON[yazili.komp];
    const pol = POLITIKALAR.find(p => p.id === k.konu);
    alan.innerHTML = `
      <label class="secim-satir">${a("kompSec")}: <select id="komp-sec">${KOMPOZISYON.map((x, i) => `<option value="${i}" ${i === yazili.komp ? "selected" : ""}>${i + 1}. ${guvenli(t(POLITIKALAR.find(p => p.id === x.konu).baslik))}</option>`).join("")}</select></label>
      <div class="yazi-izgara">
        <div class="kutu">
          <p class="quiz-soru">${guvenli(t(k.soru))}</p>
          ${sayac}
          <textarea id="yazi-metin" rows="16" placeholder="${guvenli(a("kompYaz"))}">${guvenli(taslakOku())}</textarea>
        </div>
        <aside>
          <div class="kutu"><h3>${a("kompCerceve")}</h3><ol class="cerceve-liste">${CERCEVE.map(c => `<li>${guvenli(t(c))}</li>`).join("")}</ol></div>
          <div class="kutu ipucu-kutu"><h3>${a("kompIpuclari")}</h3>
            ${yazili.ipucu ? `<ul>${k.ipuclari[dil].map(x => `<li>${guvenli(x)}</li>`).join("")}</ul>` : `<button class="dugme ikincil" id="komp-ipucu">${a("kompIpucuGoster")}</button>`}
            <p><a class="kaynak" href="#politikalar" data-dosya-ac="${pol.id}">${a("ilgiliDosya")}</a></p></div>
        </aside>
      </div>`;
  } else {
    const c = CEVIRI[yazili.cev];
    const metin = taslakOku();
    const kontrol = yazili.kontrol ? `
      <div class="kutu">
        <h3>${a("cevModel")}</h3><p class="model-ceviri">${guvenli(c.model)}</p>
        <h3>${a("cevTerim")}</h3>
        <ul class="terim-liste">${c.terimler.map(tm => { const var_ = metin.toLowerCase().includes(tm.toLowerCase());
          return `<li class="${var_ ? "var" : "yok"}">${var_ ? "✓" : "✗"} <b>${guvenli(tm)}</b> <small>${var_ ? a("cevBulundu") : a("cevYok")}</small></li>`; }).join("")}</ul>
        <p class="pol-bolge">${a("cevNot")}</p>
      </div>` : "";
    alan.innerHTML = `
      <label class="secim-satir">${a("cevSec")}: <select id="cev-sec">${CEVIRI.map((x, i) => `<option value="${i}" ${i === yazili.cev ? "selected" : ""}>${i + 1}. ${guvenli(t(x.baslik))}</option>`).join("")}</select></label>
      <div class="kutu">
        <h3>${a("cevKaynak")}</h3><p class="kaynak-metin">${guvenli(c.tr)}</p>
        ${sayac}
        <textarea id="yazi-metin" rows="7" placeholder="${guvenli(a("cevYaz"))}">${guvenli(metin)}</textarea>
        <button class="dugme" id="cev-kontrol">${a("cevKontrol")}</button>
      </div>
      ${kontrol}`;
  }
  const ta = document.getElementById("yazi-metin");
  const kelimeGuncelle = () => { document.getElementById("yazi-kelime").textContent = `${kelimeSay(ta.value)} ${a("kelime")}`; };
  kelimeGuncelle();
  ta.oninput = () => { taslakYaz(ta.value); kelimeGuncelle(); };
}

function yaziSaatDurdur() { clearInterval(yazili.saat); yazili.saat = null; }
document.getElementById("yazili").addEventListener("click", e => {
  const mod = e.target.closest("[data-mod]");
  if (mod) { yazili.mod = mod.dataset.mod; yazili.kontrol = false; yazili.ipucu = false; yaziSaatDurdur(); yazili.kalan = 0; yaziliCiz(); return; }
  if (e.target.id === "komp-ipucu") { yazili.ipucu = true; yaziliCiz(); return; }
  if (e.target.id === "cev-kontrol") { yazili.kontrol = true; yaziliCiz(); return; }
  const dosya = e.target.closest("[data-dosya-ac]");
  if (dosya) { e.preventDefault(); dosyaAc(dosya.dataset.dosyaAc); return; }
  if (e.target.id === "yazi-basla") {
    if (yazili.saat) { yaziSaatDurdur(); e.target.textContent = a("baslat"); return; }
    if (!yazili.kalan) yazili.kalan = yazili.sureDk * 60;
    e.target.textContent = a("durdur2");
    yazili.saat = setInterval(() => {
      yazili.kalan = Math.max(0, yazili.kalan - 1);
      const el = document.getElementById("yazi-kalan");
      if (el) { el.textContent = sureYazi(yazili.kalan); el.classList.toggle("bitti", yazili.kalan === 0); }
      if (!yazili.kalan) yaziSaatDurdur();
    }, 1000);
  }
});
document.getElementById("yazili").addEventListener("change", e => {
  if (e.target.id === "komp-sec") { yazili.komp = Number(e.target.value); yazili.ipucu = false; yaziliCiz(); }
  if (e.target.id === "cev-sec") { yazili.cev = Number(e.target.value); yazili.kontrol = false; yaziliCiz(); }
  if (e.target.id === "yazi-sure") { yazili.sureDk = Number(e.target.value); yaziSaatDurdur(); yazili.kalan = 0; yaziliCiz(); }
});

// ---------- SÖZLÜK ----------
// Büyük dosya (veri/sozluk.js) sadece bu sekme açılınca yüklenir: sayfa hızlı açılsın diye.
const sozluk = { yuklendi: false, alan: "hepsi", sorgu: "" };
function sozlukYukle() {
  if (sozluk.yuklendi || document.getElementById("sozluk-betik")) { sozlukCiz(); return; }
  document.getElementById("sozluk-durum").textContent = a("sozlukYukleniyor");
  const b = document.createElement("script");
  b.id = "sozluk-betik"; b.src = "veri/sozluk.js";
  b.onload = () => { sozluk.yuklendi = true; sozlukCiz(); };
  document.body.appendChild(b);
}
// Türkçe karakterleri sadeleştirerek arama (ı/i, ş/s gibi farklar sonuç kaçırmasın)
const sade = v => v.toLocaleLowerCase("tr").replace(/[ıi̇]/g, "i").replace(/ş/g, "s").replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ö/g, "o").replace(/ç/g, "c").replace(/[âà]/g, "a").replace(/[îí]/g, "i").replace(/[ûú]/g, "u");
function sozlukCiz() {
  const giris = document.querySelector("#sozluk .giris");
  if (!sozluk.yuklendi) return;
  if (!sozluk.sadeListe) sozluk.sadeListe = SOZLUK.map(r => sade(r[0]) + "|" + sade(r[1]));
  giris.textContent = a("sozlukGiris").replace("{sayi}", SOZLUK.length.toLocaleString(dil === "tr" ? "tr-TR" : "en-GB"));
  const alanlar = ["hepsi", "ui", "hukuk", "deniz", "goc", "ekonomi", "askeri", "kolluk", "vatandaslik", "kultur"];
  document.getElementById("sozluk-filtre").innerHTML = alanlar.map(x =>
    `<button class="cip ${x === sozluk.alan ? "aktif" : ""}" data-alan="${x}">${x === "hepsi" ? a("tumAlanlar") : a("alan_" + x)}</button>`).join("");
  const q = sade(sozluk.sorgu.trim());
  const durum = document.getElementById("sozluk-durum");
  const sonucEl = document.getElementById("sozluk-sonuc");
  if (q.length < 2) { durum.textContent = a("sozlukBos"); sonucEl.innerHTML = ""; return; }
  const bulunan = [];
  for (let i = 0; i < SOZLUK.length; i++) {
    if (sozluk.alan !== "hepsi" && SOZLUK[i][2] !== sozluk.alan) continue;
    if (sozluk.sadeListe[i].includes(q)) bulunan.push(SOZLUK[i]);
  }
  // Tam eşleşme ve baştan eşleşme üstte
  const puan = r => { const tr = sade(r[0]), en = sade(r[1]); return (tr === q || en === q) ? 0 : (tr.startsWith(q) || en.startsWith(q)) ? 1 : 2; };
  bulunan.sort((x, y) => puan(x) - puan(y) || x[0].length - y[0].length);
  const SINIR = 150;
  durum.textContent = bulunan.length > SINIR ? a("sozlukFazla").replace("{sayi}", SINIR) : a("sozlukSonuc").replace("{sayi}", bulunan.length);
  const vurgula = metin => {
    const sm = sade(metin); const i = sm.indexOf(q);
    if (i < 0) return guvenli(metin);
    return guvenli(metin.slice(0, i)) + "<mark>" + guvenli(metin.slice(i, i + q.length)) + "</mark>" + guvenli(metin.slice(i + q.length));
  };
  sonucEl.innerHTML = bulunan.slice(0, SINIR).map(r =>
    `<div class="sozluk-satir"><span class="tr">${vurgula(r[0])}</span><span class="en">${vurgula(r[1])}</span><small>${a("alan_" + r[2])}</small></div>`).join("");
}
document.getElementById("sozluk-ara").addEventListener("input", e => { sozluk.sorgu = e.target.value; sozlukCiz(); });
document.getElementById("sozluk-filtre").addEventListener("click", e => {
  const b = e.target.closest("[data-alan]"); if (!b) return;
  sozluk.alan = b.dataset.alan; sozlukCiz();
});

// ---------- SINAV REHBERİ ----------
function sinavCiz() {
  const S = SINAV_YAPISI;
  document.getElementById("sinav-alan").innerHTML = `
    <p class="giris"><b>${a("sinavKaynak")}:</b> ${guvenli(t(S.kaynakTarih))}</p>
    <div class="sinav-asamalar">
      ${S.asamalar.map(as => `<div class="kutu"><h2>${guvenli(t(as.baslik))}</h2><ul>${as.maddeler.map(m => `<li>${guvenli(t(m))}</li>`).join("")}</ul></div>`).join("")}
    </div>
    <div class="iki-sutun">
      <div class="kutu"><h2>${a("sinavKurallar")}</h2><ul>${S.kurallar.map(m => `<li>${guvenli(t(m))}</li>`).join("")}</ul></div>
      <div class="kutu"><h2>${a("sinavOrnek")}</h2><p>${guvenli(t(S.ornekSorular))}</p>
        <div class="dugmeler"><a class="dugme" href="#yazili">${a("sinavPratik")}: ${a("modKompozisyon")}</a><a class="dugme ikincil" href="#mulakat">${a("menuMulakat")}</a></div></div>
    </div>
    <div class="kutu"><h2>${a("sinavKaynaklar")}</h2><ul class="belge-liste">${S.kaynaklar.map(k => `<li><a href="${guvenli(k.url)}" target="_blank" rel="noopener">${guvenli(t(k.ad))} ↗</a></li>`).join("")}</ul>
      <p class="pol-bolge">${a("sinavUyari")}</p></div>`;
}

// ---------- HER ŞEYİ ÇİZ ----------
// Dil değişince bu fonksiyon tüm sayfayı yeni dilde yeniden yazar.
// Quiz'deki ilerleme, kart sırası ve mülakat sorusu korunur.
function hepsiniCiz() {
  tabelalariYaz();
  anaSayfa();
  tarihCiz();
  politikaCiz();
  guncelCiz();
  dunyaCiz();
  otomatikCiz("turkiye", "otomatik-turkiye");
  otomatikCiz("dunya", "otomatik-dunya");
  quizFiltreCiz();
  if (quiz.sorular.length) {
    // Cevaplanmış bir soru varsa aynı soruyu yeni dilde baştan göster
    soruCiz();
  }
  kartCiz();
  mulakatFiltreCiz();
  if (mulakat.soru) mulakatSoruYaz();
  ilerlemeCiz();
  yaziliCiz();
  sinavCiz();
  if (sozluk.yuklendi) sozlukCiz();
}

document.getElementById("dil-dugme").onclick = () => {
  dil = dil === "tr" ? "en" : "tr";
  try { localStorage.setItem("tdp-dil", dil); } catch (e) { /* kaydedemezse sorun değil */ }
  hepsiniCiz();
};

// ---------- BAŞLANGIÇ: sayfa açılınca ----------
quizBaslat("hepsi");
yeniMulakatSorusu();
hepsiniCiz();
sekmeGoster();

// Sayfa #tarih gibi bir adresle açıldığında tarayıcı o bölüme kendiliğinden kaydırır;
// üstteki menü başlığı örtmesin diye açılışta en üste dönüyoruz.
window.addEventListener("load", () => window.scrollTo({ top: 0, behavior: "instant" }));
