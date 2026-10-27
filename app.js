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
  // Aramadan gelindiyse: sekme açıldıktan sonra ilgili öğeye git
  if (bekleyenIs) { const is = bekleyenIs; bekleyenIs = null; is(); }
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
    <a href="#arsiv"><b>${ARSIV.length}</b><span>${a("ozetArsiv")}</span></a>
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
    document.getElementById("harita-kutu").hidden = true;
    dosyaEl.innerHTML = dosyaCiz(p);
    return;
  }
  listeEl.hidden = false; filtreEl.hidden = false; dosyaEl.hidden = true;
  document.getElementById("harita-kutu").hidden = typeof HARITA === "undefined";
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
function haberKarti(d, ekBlok, kimlik) {
  const p = tarihParcala(d.tarih);
  return `
    <article class="kutu duyuru" id="${kimlik}">
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
    }, "duyuru-" + DUYURULAR.indexOf(d));
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
  }, "dunya-" + DUNYA.indexOf(d))).join("");
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
// ozel: Çıkmış Sorular arşivinden açılan sorunun sırası (yoksa null)
const yazili = { mod: "kompozisyon", komp: 0, cev: 0, ozel: null, kalan: 0, saat: null, sureDk: 45, ipucu: false, kontrol: false };
const taslakAnahtar = () => yazili.mod === "kompozisyon" && yazili.ozel !== null
  ? `tdp-taslak-arsiv-${ARSIV[yazili.ozel].yil}-${sade(ARSIV[yazili.ozel].konu.tr).slice(0, 40)}`
  : `tdp-taslak-${yazili.mod}-${yazili.mod === "kompozisyon" ? yazili.komp : yazili.cev}`;
// Arşivdeki bir soruyu kompozisyon görevine çevirir
function ozelKompozisyon(i) {
  const s = ARSIV[i];
  const pol = s.politika ? POLITIKALAR.find(p => p.id === s.politika) : null;
  const ipucu = d => [ARAYUZ[d].arsivOzelIpucu,
    ARAYUZ[d].arsivTemaIpucu + ": " + s.temalar.map(k => ARSIV_TEMALAR[k][d]).join(", "),
    ...(pol ? [pol.sinavIpucu[d]] : [])];
  return {
    konu: s.politika || "",
    soru: { tr: s.konu.tr + ". " + ARAYUZ.tr.arsivOzelGorev, en: s.konu.en + ". " + ARAYUZ.en.arsivOzelGorev },
    ipuclari: { tr: ipucu("tr"), en: ipucu("en") }
  };
}
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
    const k = yazili.ozel !== null ? ozelKompozisyon(yazili.ozel) : KOMPOZISYON[yazili.komp];
    const pol = POLITIKALAR.find(p => p.id === k.konu);
    const ozelSecenek = yazili.ozel !== null
      ? `<option value="ozel" selected>★ ${a("arsivOzelSecenek")} (${guvenli(arsivYil(ARSIV[yazili.ozel].yil))} · ${a("arsiv_" + ARSIV[yazili.ozel].sinav)})</option>` : "";
    alan.innerHTML = `
      <label class="secim-satir">${a("kompSec")}: <select id="komp-sec">${ozelSecenek}${KOMPOZISYON.map((x, i) => `<option value="${i}" ${yazili.ozel === null && i === yazili.komp ? "selected" : ""}>${i + 1}. ${guvenli(t(POLITIKALAR.find(p => p.id === x.konu).baslik))}</option>`).join("")}</select></label>
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
            ${pol ? `<p><a class="kaynak" href="#politikalar" data-dosya-ac="${pol.id}">${a("ilgiliDosya")}</a></p>` : ""}</div>
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
  if (e.target.id === "komp-sec" && e.target.value !== "ozel") { yazili.komp = Number(e.target.value); yazili.ozel = null; yazili.ipucu = false; yaziliCiz(); }
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

// ---------- ORTAK: sekmeye git, sonra bir iş yap ----------
// Benzetme: Asansöre binip kata çıkınca ilgili odanın kapısını açmak.
// Sekme değişince sayfa en üste kayar; "sonra" işi bu kaydırmadan sonra çalışır.
let bekleyenIs = null;
function sekmeyeGit(ad, sonra) {
  if (location.hash === "#" + ad) { sekmeGoster(); if (sonra) sonra(); return; }
  bekleyenIs = sonra || null;
  location.hash = ad;
}
// Bir öğeyi görünür yapıp kısa süre parlatır (aramadan gelince nereye bakacağını gösterir)
function isikla(el) {
  if (!el) return;
  el.scrollIntoView({ block: "center", behavior: "instant" });
  el.classList.remove("isik"); void el.offsetWidth; el.classList.add("isik");
}

// Ortak açıklama balonu (tooltip): harita ve grafik kullanır
const balon = document.getElementById("balon");
function balonGoster(html, x, y) {
  balon.innerHTML = html; balon.hidden = false;
  const g = balon.offsetWidth, y2 = balon.offsetHeight;
  const sol = Math.min(window.innerWidth - g - 8, Math.max(8, x + 14));
  const ust = y - y2 - 12 < 8 ? y + 18 : y - y2 - 12;
  balon.style.left = sol + "px"; balon.style.top = ust + "px";
}
function balonGizle() { balon.hidden = true; }

// ---------- HARİTA (Politikalar sekmesinin üstü) ----------
// Benzetme: Bir büyükelçiliğin duvarındaki harita; her renkli ülkenin üstünde bir klasör numarası var.
// Veri: veri/harita.js (Natural Earth sınırlarından otomatik üretildi).
function haritaCiz() {
  const kutu = document.getElementById("harita-kutu");
  if (typeof HARITA === "undefined") { kutu.hidden = true; return; }
  const ulkeAdi = u => dil === "tr" ? u[1] : u[2];
  const yollar = HARITA.ulkeler.map(u => {
    const [kod, , , pol, d] = u;
    const sinif = pol === "tr" ? "ulke tr" : pol ? "ulke bagli" : "ulke";
    const ek = pol && pol !== "tr" ? ` data-dosya="${pol}" data-pol="${pol}"` : "";
    return `<path d="${d}" class="${sinif}" data-kod="${kod}"${ek}><title>${guvenli(ulkeAdi(u))}</title></path>`;
  }).join("");
  // Türkiye'nin etiketi
  const tr = HARITA.ulkeler.find(u => u[3] === "tr");
  const trEtiket = tr ? `<text x="${tr[5]}" y="${tr[6] + 5}" class="harita-tr-yazi" text-anchor="middle">${guvenli(a("haritaTurkiye"))}</text>` : "";
  kutu.innerHTML = `
    <div class="harita-ust"><h2>${a("haritaBaslik")}</h2><p class="pol-bolge">${a("haritaAcik")}</p></div>
    <div class="harita-izgara">
      <svg class="harita" viewBox="0 0 ${HARITA.genislik} ${HARITA.yukseklik}" role="img" aria-label="${guvenli(a("haritaBaslik"))}">
        <g>${yollar}</g>${trEtiket}
      </svg>
      <ul class="harita-liste">${POLITIKALAR.map(p => {
        const n = HARITA.ulkeler.filter(u => u[3] === p.id).length;
        return `<li><button class="harita-pol" data-dosya="${p.id}" data-harita-pol="${p.id}"><span>${guvenli(t(p.baslik))}</span>${n ? `<small>${n}</small>` : ""}</button></li>`;
      }).join("")}</ul>
    </div>
    <p class="kunye">${a("haritaKunye")}</p>`;
}

const haritaKutu = document.getElementById("harita-kutu");
haritaKutu.addEventListener("mousemove", e => {
  const yol = e.target.closest(".ulke");
  if (!yol) { balonGizle(); return; }
  const u = HARITA.ulkeler.find(x => x[0] === yol.dataset.kod);
  const ad = guvenli(dil === "tr" ? u[1] : u[2]);
  const pol = u[3] && u[3] !== "tr" ? POLITIKALAR.find(p => p.id === u[3]) : null;
  const alt = u[3] === "tr" ? "" : pol ? `${guvenli(t(pol.baslik))}<br><small>${a("haritaDosya")} →</small>` : `<small>${a("haritaBagsiz")}</small>`;
  balonGoster(`<b>${ad}</b>${alt ? "<br>" + alt : ""}`, e.clientX, e.clientY);
});
haritaKutu.addEventListener("mouseleave", balonGizle);
// Listedeki bir politikanın üzerine gelince (ya da klavyeyle odaklanınca) ülkeleri parlat
function haritaParlat(id) {
  haritaKutu.querySelectorAll(".ulke").forEach(p => p.classList.toggle("parla", !!id && p.dataset.pol === id));
  haritaKutu.classList.toggle("parlatiyor", !!id);
}
haritaKutu.addEventListener("mouseover", e => { const b = e.target.closest("[data-harita-pol]"); haritaParlat(b ? b.dataset.haritaPol : null); });
haritaKutu.addEventListener("focusin", e => { const b = e.target.closest("[data-harita-pol]"); haritaParlat(b ? b.dataset.haritaPol : null); });
haritaKutu.addEventListener("focusout", () => haritaParlat(null));

// ---------- ÇIKMIŞ SORULAR ARŞİVİ ----------
// Benzetme: Eski sınav kâğıtlarının konu fişleri. Hangi konunun kaç kez geldiğini sayınca
// sınavı hazırlayanların neye önem verdiği görünür.
const arsiv = { sinav: "hepsi", bolum: "hepsi", tema: "hepsi" };
const SINAV_SIRA = { kim: 0, mm: 1 };

// "2025-08" → "Ağu 2025", "2014" → "2014"
function arsivYil(y) {
  const [yil, ay] = y.split("-");
  return ay ? a("aylar")[Number(ay) - 1] + " " + yil : yil;
}

function arsivSecili() {
  return ARSIV.map((s, i) => ({ s, i })).filter(({ s }) =>
    (arsiv.sinav === "hepsi" || s.sinav === arsiv.sinav) &&
    (arsiv.bolum === "hepsi" || s.bolum === arsiv.bolum));
}

function arsivCiz() {
  const cip = (deger, secili, veri, metin) =>
    `<button class="cip ${deger === secili ? "aktif" : ""}" data-${veri}="${deger}">${metin}</button>`;
  document.getElementById("arsiv-sinav").innerHTML =
    cip("hepsi", arsiv.sinav, "sinav", a("arsivSinavHepsi")) +
    cip("kim", arsiv.sinav, "sinav", `${a("arsiv_kim")} <small>· ${a("arsivKimUzun")}</small>`) +
    cip("mm", arsiv.sinav, "sinav", `${a("arsiv_mm")} <small>· ${a("arsivMmUzun")}</small>`);
  const bolumler = ["yd", "tr", "cev"].filter(b => ARSIV.some(s => s.bolum === b && (arsiv.sinav === "hepsi" || s.sinav === arsiv.sinav)));
  if (arsiv.bolum !== "hepsi" && !bolumler.includes(arsiv.bolum)) arsiv.bolum = "hepsi";
  document.getElementById("arsiv-bolum").innerHTML =
    cip("hepsi", arsiv.bolum, "bolum", a("bolumHepsi")) + bolumler.map(b => cip(b, arsiv.bolum, "bolum", a("bolum_" + b))).join("");

  const secili = arsivSecili();
  arsivGrafikCiz(secili);

  // Tema seçimi (açılır liste)
  document.getElementById("arsiv-tema").innerHTML =
    `<option value="hepsi">${a("temaHepsi")}</option>` +
    Object.keys(ARSIV_TEMALAR).map(k => `<option value="${k}" ${k === arsiv.tema ? "selected" : ""}>${guvenli(t(ARSIV_TEMALAR[k]))}</option>`).join("");

  const liste = secili.filter(({ s }) => arsiv.tema === "hepsi" || s.temalar.includes(arsiv.tema))
    .sort((x, y) => y.s.yil.localeCompare(x.s.yil) || SINAV_SIRA[x.s.sinav] - SINAV_SIRA[y.s.sinav]);
  document.getElementById("arsiv-sayi").textContent = a("arsivSonuc").replace("{sayi}", liste.length);
  document.getElementById("arsiv-liste").innerHTML = liste.length ? `<div class="kutu arsiv-tablo">${liste.map(({ s, i }) => `
    <article class="arsiv-satir" id="arsiv-${i}">
      <div class="arsiv-yil"><b>${guvenli(arsivYil(s.yil))}</b><span class="etiket ${s.sinav === "kim" ? "resmi" : "yuksek"}">${a("arsiv_" + s.sinav)}</span></div>
      <div>
        <p class="arsiv-konu">${guvenli(t(s.konu))}</p>
        <p class="arsiv-meta">${a("bolum_" + s.bolum)} · ${s.temalar.map(k => `<button class="tema-etiket" data-tema-sec="${k}">${guvenli(t(ARSIV_TEMALAR[k]))}</button>`).join(" ")}
          ${s.kaynak === "aday" ? `<span class="etiket analiz" title="${guvenli(a("arsivAdayAcik"))}">${a("arsivAday")}</span>` : ""}</p>
        <p class="arsiv-dugmeler">
          <button class="dugme ikincil kucuk" data-arsiv-pratik="${i}">${a("arsivPratik")}</button>
          ${s.politika ? `<a class="kaynak" href="#politikalar" data-dosya-ac="${s.politika}">${a("arsivDosya")}: ${guvenli(konuAdi(s.politika))}</a>` : ""}
        </p>
      </div>
    </article>`).join("")}</div>` : `<p class="pol-bolge">${a("arsivYok")}</p>`;

  document.getElementById("arsiv-kaynak").innerHTML = a("arsivKaynakNot")
    .replace("{kim}", guvenli(ARSIV_KAYNAK.kim)).replace("{mm}", guvenli(ARSIV_KAYNAK.mm)).replace("{ornek}", guvenli(ARSIV_KAYNAK.ornek));
}

// Tema sıklığı grafiği: yatay yığılmış çubuklar (KİM + MM), toplamı en yüksek tema en üstte
function arsivGrafikCiz(secili) {
  const sayim = {};
  Object.keys(ARSIV_TEMALAR).forEach(k => { sayim[k] = { kim: 0, mm: 0 }; });
  secili.forEach(({ s }) => s.temalar.forEach(k => { sayim[k][s.sinav]++; }));
  const satirlar = Object.entries(sayim).map(([k, v]) => ({ k, ...v, top: v.kim + v.mm }))
    .filter(r => r.top > 0).sort((x, y) => y.top - x.top || x.k.localeCompare(y.k));
  const enCok = Math.max(1, ...satirlar.map(r => r.top));
  const goster = { kim: arsiv.sinav !== "mm", mm: arsiv.sinav !== "kim" };
  const lejant = ["kim", "mm"].filter(s => goster[s]).map(s =>
    `<span class="lejant-oge"><i class="renk-${s}"></i>${a("arsiv_" + s)} · ${a(s === "kim" ? "arsivKimUzun" : "arsivMmUzun")}</span>`).join("");
  const kutu = document.getElementById("arsiv-grafik");
  kutu.innerHTML = `
    <div class="oto-ust"><h2>${a("arsivGrafik")}</h2><div class="lejant">${lejant}</div></div>
    <p class="pol-bolge">${a("arsivGrafikNot")}</p>
    <div class="grafik ${arsiv.tema !== "hepsi" ? "secimli" : ""}">${satirlar.map(r => `
      <button class="g-satir ${r.k === arsiv.tema ? "aktif" : ""}" data-tema-sec="${r.k}" aria-label="${guvenli(t(ARSIV_TEMALAR[r.k]))}: ${r.top}">
        <span class="g-ad">${guvenli(t(ARSIV_TEMALAR[r.k]))}</span>
        <span class="g-cubuk">
          ${goster.kim && r.kim ? `<span class="g-kim" style="width:${r.kim / enCok * 100}%" data-balon="${a("arsiv_kim")}: ${r.kim}"></span>` : ""}
          ${goster.mm && r.mm ? `<span class="g-mm" style="width:${r.mm / enCok * 100}%" data-balon="${a("arsiv_mm")}: ${r.mm}"></span>` : ""}
          <b class="g-sayi">${r.top}</b>
        </span>
      </button>`).join("")}</div>
    <details class="g-tablo"><summary>${a("arsivTablo")}</summary>
      <table><thead><tr><th>${a("arsivTema")}</th>${goster.kim ? `<th>${a("arsiv_kim")}</th>` : ""}${goster.mm ? `<th>${a("arsiv_mm")}</th>` : ""}<th>${a("arsivToplam")}</th></tr></thead>
      <tbody>${satirlar.map(r => `<tr><td>${guvenli(t(ARSIV_TEMALAR[r.k]))}</td>${goster.kim ? `<td>${r.kim}</td>` : ""}${goster.mm ? `<td>${r.mm}</td>` : ""}<td><b>${r.top}</b></td></tr>`).join("")}</tbody></table>
    </details>`;
}

const arsivBolum = document.getElementById("arsiv");
arsivBolum.addEventListener("click", e => {
  const s = e.target.closest("[data-sinav]");
  if (s) { arsiv.sinav = s.dataset.sinav; arsivCiz(); return; }
  const b = e.target.closest("[data-bolum]");
  if (b) { arsiv.bolum = b.dataset.bolum; arsivCiz(); return; }
  const tm = e.target.closest("[data-tema-sec]");
  if (tm) { arsiv.tema = arsiv.tema === tm.dataset.temaSec ? "hepsi" : tm.dataset.temaSec; arsivCiz(); return; }
  const d = e.target.closest("[data-dosya-ac]");
  if (d) { e.preventDefault(); dosyaAc(d.dataset.dosyaAc); return; }
  const p = e.target.closest("[data-arsiv-pratik]");
  if (p) arsivPratik(Number(p.dataset.arsivPratik));
});
arsivBolum.addEventListener("change", e => { if (e.target.id === "arsiv-tema") { arsiv.tema = e.target.value; arsivCiz(); } });
arsivBolum.addEventListener("mousemove", e => {
  const seg = e.target.closest("[data-balon]");
  if (!seg) { balonGizle(); return; }
  const satir = seg.closest(".g-satir");
  balonGoster(`<b>${guvenli(satir.querySelector(".g-ad").textContent)}</b><br>${guvenli(seg.dataset.balon)}`, e.clientX, e.clientY);
});
arsivBolum.addEventListener("mouseleave", balonGizle);

// Arşivdeki bir soruyla Yazılı Pratik'i aç
function arsivPratik(i) {
  const s = ARSIV[i];
  yaziSaatDurdur(); yazili.kalan = 0; yazili.ipucu = false; yazili.kontrol = false;
  if (s.bolum === "cev") { yazili.mod = "ceviri"; yazili.ozel = null; }
  else { yazili.mod = "kompozisyon"; yazili.ozel = i; }
  yaziliCiz();
  sekmeyeGit("yazili");
}

// ---------- SİTE GENELİ ARAMA ----------
// Benzetme: Kütüphanenin kart kataloğu. Kitapları tek tek gezmek yerine kataloğa bakıp rafı bulursun.
// Dizin (index) arama paneli ilk açıldığında ve dil değişince yeniden kurulur.
let aramaDizini = null;
function aramaDiziniKur() {
  const iki = x => (x && typeof x === "object" && !Array.isArray(x)) ? (x.tr || "") + " " + (x.en || "") : (x || "");
  const d = [];
  const ekle = (grup, baslik, ozet, metin, ac) => d.push({ grup, baslik, ozet, sade: sade(metin), sadeBaslik: sade(iki(baslik)), ac });
  TARIH.forEach((don, di) => don.olaylar.forEach(o =>
    ekle("menuTarih", yilYaz(o.yil) + " · " + t(o.olay), t(don.baslik), [o.yil, iki(o.olay), iki(o.onem), iki(don.baslik)].join(" "),
      () => sekmeyeGit("tarih", () => { const el = document.querySelectorAll("#tarih-liste details")[di]; if (el) { el.open = true; isikla(el.closest(".donem")); } }))));
  POLITIKALAR.forEach(p =>
    ekle("menuPolitikalar", t(p.baslik), t(p.bolge), [iki(p.baslik), iki(p.resmi), iki(p.analiz), ...p.olgular.map(iki), ...p.kavramlar.map(iki)].join(" "), () => dosyaAc(p.id)));
  DUYURULAR.forEach((h, i) =>
    ekle("menuGuncel", t(h.baslik), tarihYazisi(h), iki(h.baslik) + " " + iki(h.ozet), () => sekmeyeGit("guncel", () => isikla(document.getElementById("duyuru-" + i)))));
  DUNYA.forEach((h, i) =>
    ekle("menuDunya", t(h.baslik), tarihYazisi(h), iki(h.baslik) + " " + iki(h.ozet), () => { dunyaBolge = "hepsi"; dunyaCiz(); sekmeyeGit("dunya", () => isikla(document.getElementById("dunya-" + i))); }));
  QUIZ.forEach(q =>
    ekle("menuQuiz", t(q.soru), t(KONULAR[q.konu]), iki(q.soru) + " " + iki(q.aciklama), () => {
      quizBaslat(q.konu);
      quiz.sorular = [q, ...quiz.sorular.filter(x => x !== q)].slice(0, 10); soruCiz();
      sekmeyeGit("quiz");
    }));
  KARTLAR.forEach((k, i) =>
    ekle("menuKartlar", t(k.on), t(k.arka).slice(0, 90) + "…", iki(k.on) + " " + iki(k.arka), () => {
      kartDurum.liste = [...KARTLAR]; kartDurum.sadece = false; kartDurum.sira = i;
      document.getElementById("kart-sadece").checked = false; kartCiz(); sekmeyeGit("kartlar");
    }));
  MULAKAT.forEach(m =>
    ekle("menuMulakat", t(m.soru), t(MULAKAT_TURLERI[m.tur]), iki(m.soru) + " " + iki(m.ipucu), () => {
      mulakat.tur = "hepsi"; mulakatFiltreCiz(); mulakat.soru = m; sayacDurdur(); mulakat.kalan = 90; sayacYaz();
      document.getElementById("mulakat-ipucu").hidden = true; mulakatSoruYaz(); sekmeyeGit("mulakat");
    }));
  ARSIV.forEach((s, i) =>
    ekle("menuArsiv", t(s.konu), arsivYil(s.yil) + " · " + a("arsiv_" + s.sinav) + " · " + a("bolum_" + s.bolum), iki(s.konu) + " " + s.temalar.map(k => iki(ARSIV_TEMALAR[k])).join(" "), () => {
      arsiv.sinav = "hepsi"; arsiv.bolum = "hepsi"; arsiv.tema = "hepsi"; arsivCiz();
      sekmeyeGit("arsiv", () => isikla(document.getElementById("arsiv-" + i)));
    }));
  KOMPOZISYON.forEach((k, i) =>
    ekle("menuYazili", t(k.soru), a("modKompozisyon"), iki(k.soru), () => {
      yazili.mod = "kompozisyon"; yazili.komp = i; yazili.ozel = null; yazili.ipucu = false; yaziliCiz(); sekmeyeGit("yazili");
    }));
  CEVIRI.forEach((c, i) =>
    ekle("menuYazili", t(c.baslik), a("modCeviri"), iki(c.baslik) + " " + c.tr + " " + c.model, () => {
      yazili.mod = "ceviri"; yazili.cev = i; yazili.kontrol = false; yaziliCiz(); sekmeyeGit("yazili");
    }));
  aramaDizini = d;
}

const araPanel = document.getElementById("ara-panel");
const araGirdi = document.getElementById("ara-girdi");
let araSonAc = [];
function aramaAc() {
  if (!aramaDizini) aramaDiziniKur();
  araPanel.hidden = false;
  document.body.classList.add("panel-acik");
  araGirdi.focus(); araGirdi.select();
  aramaCiz();
}
function aramaKapat() {
  araPanel.hidden = true;
  document.body.classList.remove("panel-acik");
  document.getElementById("ara-dugme").focus({ preventScroll: true });
}
function aramaCiz() {
  const q = sade(araGirdi.value.trim());
  const durum = document.getElementById("ara-durum");
  const sonucEl = document.getElementById("ara-sonuc");
  araSonAc = [];
  if (q.length < 2) { durum.textContent = a("araIpucu"); sonucEl.innerHTML = ""; return; }
  // Birden çok kelime yazılırsa hepsi geçmeli (ör. "kıbrıs 1974")
  const kelimeler = q.split(/\s+/);
  const bulunan = aramaDizini.filter(x => kelimeler.every(k => x.sade.includes(k)))
    .map(x => ({ x, p: x.sadeBaslik.includes(q) ? 0 : kelimeler.every(k => x.sadeBaslik.includes(k)) ? 1 : 2 }))
    .sort((m, n) => m.p - n.p).slice(0, 60).map(m => m.x);
  // Sözlük yüklüyse orada kaç terim var, onu da söyle
  let sozlukSatir = "";
  if (sozluk.yuklendi) {
    if (!sozluk.sadeListe) sozluk.sadeListe = SOZLUK.map(r => sade(r[0]) + "|" + sade(r[1]));
    const n = sozluk.sadeListe.reduce((t2, s) => t2 + (s.includes(q) ? 1 : 0), 0);
    if (n) sozlukSatir = `<button class="ara-oge sozluk-git" data-sozluk-git>${a("araSozluk").replace("{sayi}", n.toLocaleString(dil === "tr" ? "tr-TR" : "en-GB"))}</button>`;
  } else {
    sozlukSatir = `<button class="ara-oge sozluk-git" data-sozluk-git>${a("araSozlukYukle")}</button>`;
  }
  durum.textContent = bulunan.length ? a("araSonuc").replace("{sayi}", bulunan.length) : a("araYok");
  // Sonuçları bölümlere göre grupla
  const gruplar = new Map();
  bulunan.forEach(x => { if (!gruplar.has(x.grup)) gruplar.set(x.grup, []); gruplar.get(x.grup).push(x); });
  let html = "";
  gruplar.forEach((liste, grup) => {
    html += `<h3 class="ara-grup">${a(grup)}</h3>` + liste.map(x => {
      araSonAc.push(x.ac);
      return `<button class="ara-oge" data-ara-i="${araSonAc.length - 1}"><b>${guvenli(x.baslik)}</b><small>${guvenli(x.ozet)}</small></button>`;
    }).join("");
  });
  sonucEl.innerHTML = html + sozlukSatir;
}
document.getElementById("ara-dugme").onclick = aramaAc;
document.getElementById("ara-kapat").onclick = aramaKapat;
araGirdi.addEventListener("input", aramaCiz);
araPanel.addEventListener("click", e => {
  if (e.target === araPanel) { aramaKapat(); return; } // panelin dışına tıklanınca kapan
  const oge = e.target.closest("[data-ara-i]");
  if (oge) { const is = araSonAc[Number(oge.dataset.araI)]; aramaKapat(); is(); return; }
  if (e.target.closest("[data-sozluk-git]")) {
    sozluk.sorgu = araGirdi.value.trim();
    document.getElementById("sozluk-ara").value = sozluk.sorgu;
    aramaKapat(); sekmeyeGit("sozluk");
  }
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !araPanel.hidden) { aramaKapat(); return; }
  const yaziyor = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
  if (e.key === "/" && !yaziyor && araPanel.hidden) { e.preventDefault(); aramaAc(); }
  // Enter: ilk sonucu aç
  if (e.key === "Enter" && document.activeElement === araGirdi && araSonAc.length) { const is = araSonAc[0]; aramaKapat(); is(); }
});

// ---------- UYGULAMA OLARAK YÜKLE (PWA) ----------
// Benzetme: Siteyi telefonun ana ekranına "kısayol" değil, kendi kapısı olan bir oda olarak koymak.
// sw.js (service worker) bir "kapıcı" gibi çalışır: açılan sayfaları saklar, internet yoksa onları verir.
let kurulumOlayi = null;
const kurKutu = document.getElementById("kur-kutu");
const bagimsiz = window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => { /* kurulamazsa site yine çalışır */ }));
}
window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault(); kurulumOlayi = e;
  kurKutu.hidden = false; document.getElementById("kur-dugme").hidden = false;
});
document.getElementById("kur-dugme").onclick = async () => {
  if (!kurulumOlayi) return;
  kurulumOlayi.prompt();
  await kurulumOlayi.userChoice.catch(() => null);
  kurulumOlayi = null; kurKutu.hidden = true;
};
window.addEventListener("appinstalled", () => { kurKutu.hidden = true; });
// iPhone/iPad'de "yükle" olayı yoktur; elle nasıl ekleneceğini gösteririz
if (!bagimsiz && /iphone|ipad|ipod/i.test(navigator.userAgent)) {
  kurKutu.hidden = false;
  document.getElementById("kur-dugme").hidden = true;
  document.getElementById("kur-ios").hidden = false;
}
// İnternet kesilince küçük bir uyarı
function baglantiDurumu() {
  let uyari = document.getElementById("cevrimdisi");
  if (navigator.onLine) { if (uyari) uyari.remove(); return; }
  if (!uyari) { uyari = document.createElement("p"); uyari.id = "cevrimdisi"; uyari.className = "cevrimdisi"; document.querySelector("main").prepend(uyari); }
  uyari.textContent = a("cevrimdisi");
}
window.addEventListener("online", baglantiDurumu);
window.addEventListener("offline", baglantiDurumu);

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
  arsivCiz();
  haritaCiz();
  if (sozluk.yuklendi) sozlukCiz();
  // Arama dizini dile bağlı; dil değişince yeniden kurulur
  aramaDizini = null;
  if (!araPanel.hidden) { aramaDiziniKur(); aramaCiz(); }
  baglantiDurumu();
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
