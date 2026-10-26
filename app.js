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
let politikaFiltre = "hepsi";
function politikaCiz() {
  const liste = politikaFiltre === "hepsi" ? POLITIKALAR : POLITIKALAR.filter(p => p.oncelik === politikaFiltre);
  document.getElementById("politika-liste").innerHTML = liste.map(p => `
    <article class="kutu pol-kart" id="pol-${p.id}">
      <div class="pol-ust">
        <span class="pol-bolge">${guvenli(t(p.bolge))}</span>
        <span class="etiket ${p.oncelik}">${a("oncelik_" + p.oncelik)}</span>
      </div>
      <h3>${guvenli(t(p.baslik))}</h3>
      <div class="pol-blok resmi"><span class="etiket resmi">${a("resmiTutum")}</span><p>${guvenli(t(p.resmi))}</p></div>
      <div class="pol-blok analiz"><span class="etiket analiz">${a("analiz")}</span><p>${guvenli(t(p.analiz))}</p></div>
      <details>
        <summary>${a("kavramVeSoru")}</summary>
        <div class="kavramlar">${kavramCiz(p.kavramlar)}</div>
        <p class="pol-soru">${guvenli(t(p.soru))}</p>
      </details>
    </article>
  `).join("");
}

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

// Duyurudaki konu linkine tıklanınca ilgili politika kartına git
document.getElementById("duyuru-liste").addEventListener("click", e => {
  const link = e.target.closest("[data-pol]");
  if (!link) return;
  e.preventDefault();
  location.hash = "politikalar";
  setTimeout(() => {
    const kart = document.getElementById("pol-" + link.dataset.pol);
    if (kart) kart.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 50);
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
const kartDurum = { liste: [...KARTLAR], sira: 0 };

function kartCiz() {
  const k = kartDurum.liste[kartDurum.sira];
  const diger = dil === "tr" ? "en" : "tr";
  document.getElementById("kart").classList.remove("cevrildi");
  document.getElementById("kart-on").textContent = k.on[dil];
  document.getElementById("kart-arka").innerHTML =
    `<span>${guvenli(k.arka[dil])}<br><br><small><b>${a("karsiligi")}:</b> ${guvenli(k.on[diger])}</small></span>`;
  document.getElementById("kart-sayac").textContent = `${kartDurum.sira + 1} / ${kartDurum.liste.length}`;
  document.getElementById("kart-geri").disabled = kartDurum.sira === 0;
  document.getElementById("kart-ileri").disabled = kartDurum.sira === kartDurum.liste.length - 1;
}

document.getElementById("kart").onclick = () => document.getElementById("kart").classList.toggle("cevrildi");
document.getElementById("kart-geri").onclick = () => { if (kartDurum.sira > 0) { kartDurum.sira--; kartCiz(); } };
document.getElementById("kart-ileri").onclick = () => { if (kartDurum.sira < kartDurum.liste.length - 1) { kartDurum.sira++; kartCiz(); } };
document.getElementById("kart-karistir").onclick = () => { kartDurum.liste = karistir(KARTLAR); kartDurum.sira = 0; kartCiz(); };

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
  quizFiltreCiz();
  if (quiz.sorular.length) {
    // Cevaplanmış bir soru varsa aynı soruyu yeni dilde baştan göster
    soruCiz();
  }
  kartCiz();
  mulakatFiltreCiz();
  if (mulakat.soru) mulakatSoruYaz();
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
