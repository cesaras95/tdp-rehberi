// ATÖLYE ARAYÜZÜ: veri/atolye.js'deki verileri ekrana çizer.
// app.js'den SONRA yüklenir; app.js'deki yardımcıları (t, a, guvenli, dil, balonGoster...) kullanır.
// Benzetme: Mevcut evin duvarlarını yıkmadan yeni odalar eklemek. Eski fonksiyonları
// sarmalayıp (wrap) üstüne kendi işimizi ekliyoruz.

// ---------- Ortak yardımcılar ----------
const AYLAR = ["ocak", "şubat", "mart", "nisan", "mayıs", "haziran", "temmuz", "ağustos", "eylül", "ekim", "kasım", "aralık"];
// "30 Ekim 1918", "Haziran 1940", "1946", "2 Eylül 1938 – 29 Haziran 1939" gibi yazıları tarihe çevirir.
// Aralıklarda ilk tarih alınır. kesinlik: "gun" | "ay" | "yil"
function olayTarihi(yazi) {
  const s = String(yazi).toLocaleLowerCase("tr");
  const yil = (s.match(/\b(1[89]\d\d|20\d\d)\b/) || [])[1];
  if (!yil) return null;
  const ilk = s.split(/[–-]/)[0];
  const g = ilk.match(/^\s*(\d{1,2})\s+([a-zçğıöşü]+)/);
  if (g && AYLAR.includes(g[2])) {
    const y = (ilk.match(/\b(1[89]\d\d|20\d\d)\b/) || [, yil])[1];
    return { t: new Date(+y, AYLAR.indexOf(g[2]), +g[1]), kesin: "gun" };
  }
  const m = ilk.match(/([a-zçğıöşü]+)\s+(1[89]\d\d|20\d\d)/);
  if (m && AYLAR.includes(m[1])) return { t: new Date(+m[2], AYLAR.indexOf(m[1]), 15), kesin: "ay" };
  // "4–7 Aralık 1943" gibi: gün aralığı + ay
  const ga = s.match(/^\s*(\d{1,2})\s*[–-]\s*\d{1,2}\s+([a-zçğıöşü]+)\s+(1[89]\d\d|20\d\d)/);
  if (ga && AYLAR.includes(ga[2])) return { t: new Date(+ga[3], AYLAR.indexOf(ga[2]), +ga[1]), kesin: "gun" };
  return { t: new Date(+yil, 6, 1), kesin: "yil" };
}
// Bir TARIH olayının sayfa künyesi: "Cilt I, s. 446"
function atolyeSayfa(p, o) {
  const ol = TARIH[p] && TARIH[p].olaylar[o];
  if (!ol || !ol.s || !TARIH_CILT[p]) return "";
  const s = String(ol.s).replace(/, Cilt III$/, "");
  return dil === "en" ? `Türk Dış Politikası vol. ${TARIH_CILT[p]}, p. ${s}` : `Türk Dış Politikası Cilt ${TARIH_CILT[p]}, s. ${s}`;
}
// Tarih sekmesinde belirli bir olaya git (dönemi açar, olayı vurgular)
function olayaGit(p, o) {
  izlekGorunum = "donem"; izlekCiz();
  const donem = document.querySelectorAll("#tarih-liste .donem")[p];
  if (!donem) return;
  const det = donem.querySelector("details"); det.open = true;
  const hedef = donem.querySelectorAll(".olay")[o] || donem;
  const git = () => { hedef.scrollIntoView({ behavior: "smooth", block: "center" }); hedef.classList.remove("isik"); void hedef.offsetWidth; hedef.classList.add("isik"); };
  if (location.hash !== "#tarih") { bekleyenIs = git; location.hash = "#tarih"; } else git();
}

// ---------- 1) KONU İZLEĞİ ----------
let izlekGorunum = "donem"; // "donem" | "konu"
let izlekKonu = IZLEK[0].id;
function izlekCiz() {
  const gecis = document.getElementById("izlek-gecis");
  const kutu = document.getElementById("izlek");
  const liste = document.getElementById("tarih-liste");
  const sekmeBtn = (g, metin) => `<button class="cip ${izlekGorunum === g ? "aktif" : ""}" data-izlek-gorunum="${g}" aria-pressed="${izlekGorunum === g}">${metin}</button>`;
  gecis.innerHTML = sekmeBtn("donem", a("izlekDonem")) + sekmeBtn("konu", a("izlekKonu"));
  liste.hidden = izlekGorunum !== "donem";
  kutu.hidden = izlekGorunum !== "konu";
  if (izlekGorunum !== "konu") return;
  const konu = IZLEK.find(k => k.id === izlekKonu) || IZLEK[0];
  const olaylar = konu.olaylar
    .map(([p, o]) => ({ p, o, d: TARIH[p], ol: TARIH[p] && TARIH[p].olaylar[o] }))
    .filter(x => x.ol)
    .map(x => ({ ...x, tarih: olayTarihi(x.ol.yil) }))
    .sort((x, y) => (x.tarih ? x.tarih.t : 0) - (y.tarih ? y.tarih.t : 0));
  kutu.innerHTML = `
    <p class="giris">${a("izlekGiris")}</p>
    <div class="filtre izlek-konular">${IZLEK.map(k => `<button class="cip ${k.id === konu.id ? "aktif" : ""}" data-izlek-konu="${k.id}">${guvenli(t(k.ad))} <small>${k.olaylar.length}</small></button>`).join("")}</div>
    <h2 class="izlek-baslik">${guvenli(t(konu.ad))} <small>${olaylar.length} ${a("izlekOlay")}</small></h2>
    <ol class="izlek-cizgi">${olaylar.map(x => {
      const sayfa = atolyeSayfa(x.p, x.o);
      return `<li class="izlek-oge">
        <div class="izlek-yil">${guvenli(yilYaz(x.ol.yil))}</div>
        <div class="izlek-metin">
          <p><strong>${guvenli(t(x.ol.olay))}</strong></p>
          <p class="onem">${guvenli(t(x.ol.onem))}</p>
          <p class="izlek-alt"><button class="izlek-donem" data-olaya-git="${x.p},${x.o}">${a("izlekDonemi")}: ${guvenli(x.d.donem)} · ${guvenli(t(x.d.baslik))}</button>${sayfa ? ` <span class="sayfa">(${guvenli(sayfa)})</span>` : ""}</p>
        </div></li>`;
    }).join("")}</ol>`;
}
document.getElementById("tarih").addEventListener("click", e => {
  const g = e.target.closest("[data-izlek-gorunum]");
  if (g) { izlekGorunum = g.dataset.izlekGorunum; izlekCiz(); return; }
  const k = e.target.closest("[data-izlek-konu]");
  if (k) { izlekKonu = k.dataset.izlekKonu; izlekCiz(); return; }
  const o = e.target.closest("[data-olaya-git]");
  if (o) { const [p, i] = o.dataset.olayaGit.split(",").map(Number); olayaGit(p, i); }
});

// ---------- 2) KARAR ANI ----------
const karar = { sira: 0, secim: null, sonuclar: {} };
function kararCiz() {
  const kutu = document.getElementById("karar-kutu");
  if (karar.sira >= KARAR.length) {
    const d = Object.values(karar.sonuclar).filter(Boolean).length;
    kutu.innerHTML = `<div class="kutu karar-son"><h2>${a("kararBaslik")}</h2>
      <p class="karar-skor">${a("kararSkor").replace("{d}", d).replace("{n}", KARAR.length)}</p>
      <button class="dugme" data-karar="bastan">${a("kararBastan")}</button></div>`;
    return;
  }
  const k = KARAR[karar.sira];
  const sayfa = k.ref ? atolyeSayfa(k.ref[0], k.ref[1]) : "";
  const secildi = karar.secim !== null;
  kutu.innerHTML = `
    <div class="karar-ilerleme" aria-label="${karar.sira + 1} / ${KARAR.length}">${KARAR.map((_, i) => `<span class="${i < karar.sira ? (karar.sonuclar[i] ? "tamam dogru" : "tamam") : i === karar.sira ? "simdi" : ""}"></span>`).join("")}</div>
    <article class="kutu karar-kart">
      <p class="ust-etiket">${guvenli(k.yil)} · ${karar.sira + 1} / ${KARAR.length}</p>
      <h2>${guvenli(t(k.baslik))}</h2>
      <p class="karar-durum">${guvenli(t(k.durum))}</p>
      <h3>${a("kararSoru")}</h3>
      <div class="karar-secenekler">${k.secenekler.map((s, i) => {
        const sinif = !secildi ? "" : i === k.gercek ? "gercek" : i === karar.secim ? "yanlis" : "soluk";
        return `<button class="karar-secenek ${sinif}" data-karar-sec="${i}" ${secildi ? "disabled" : ""}><b>${String.fromCharCode(65 + i)}</b><span>${guvenli(t(s))}</span>${secildi && i === karar.secim ? `<em>${a("kararSecildi")}</em>` : ""}</button>`;
      }).join("")}</div>
      ${secildi ? `
      <div class="karar-acilim" role="status">
        <p class="karar-hukum ${karar.secim === k.gercek ? "iyi" : "farkli"}">${karar.secim === k.gercek ? a("kararDogru") : a("kararFarkli")}</p>
        <h4>${a("kararGercek")}: ${String.fromCharCode(65 + k.gercek)}</h4>
        <h4>${a("kararSonuc")}</h4><p>${guvenli(t(k.sonuc))}</p>
        <h4>${a("kararNeden")}</h4><p>${guvenli(t(k.neden))}</p>
        ${sayfa ? `<p class="donem-kaynak">${a("kararKaynak")}: ${guvenli(sayfa)} · <button class="izlek-donem" data-olaya-git="${k.ref[0]},${k.ref[1]}">${a("antlasmaTarihte")}</button></p>` : `<p class="donem-kaynak"><button class="izlek-donem" data-olaya-git="${k.ref[0]},${k.ref[1]}">${a("antlasmaTarihte")}</button></p>`}
        <button class="dugme" data-karar="sonraki">${a("kararSonraki")}</button>
      </div>` : ""}
    </article>`;
}
document.getElementById("karar-kutu").addEventListener("click", e => {
  const s = e.target.closest("[data-karar-sec]");
  if (s && karar.secim === null) {
    karar.secim = +s.dataset.kararSec;
    karar.sonuclar[karar.sira] = karar.secim === KARAR[karar.sira].gercek;
    kararCiz();
    document.querySelector(".karar-acilim")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    return;
  }
  const b = e.target.closest("[data-karar]");
  if (b) {
    if (b.dataset.karar === "sonraki") { karar.sira++; karar.secim = null; }
    else { karar.sira = 0; karar.secim = null; karar.sonuclar = {}; }
    kararCiz(); document.getElementById("karar").scrollIntoView({ block: "start" });
    return;
  }
  const o = e.target.closest("[data-olaya-git]");
  if (o) { const [p, i] = o.dataset.olayaGit.split(",").map(Number); olayaGit(p, i); }
});

// ---------- 3) BAKANLAR: görev süresindeki olaylar + "Bakanı bul" oyunu ----------
// Tüm olayları bir kez tarihleriyle listele (yalnızca gün ya da ay kesinliğinde olanlar)
const TARIHLI_OLAYLAR = [];
TARIH.forEach((d, p) => d.olaylar.forEach((ol, o) => {
  const tr = olayTarihi(ol.yil);
  if (tr && tr.kesin !== "yil") TARIHLI_OLAYLAR.push({ p, o, ol, t: tr.t });
}));
const bakanAraligi = b => [tarihOku(b.bas), b.son ? tarihOku(b.son) : new Date(8.64e15)];
function bakanOlaylari(b) {
  const [bas, son] = bakanAraligi(b);
  return TARIHLI_OLAYLAR.filter(x => x.t >= bas && x.t <= son);
}
const _bakanlarCizEski = bakanlarCiz;
bakanlarCiz = function () {
  _bakanlarCizEski();
  const kutu = document.getElementById("bakanlar");
  if (kutu.hidden) return;
  kutu.querySelectorAll(".bakan-satir[id^='bakan-']").forEach(satir => {
    const b = BAKANLAR[+satir.id.replace("bakan-", "")];
    const ol = bakanOlaylari(b);
    if (!ol.length) return;
    const yer = satir.querySelector(".bakan-not");
    yer.insertAdjacentHTML("beforeend", `<details class="bakan-olaylar"><summary>${a("bakanOlaylar").replace("{n}", ol.length)}</summary><ul>${ol.map(x =>
      `<li><button class="izlek-donem" data-olaya-git="${x.p},${x.o}"><b>${guvenli(yilYaz(x.ol.yil))}</b> ${guvenli(t(x.ol.olay))}</button></li>`).join("")}</ul></details>`);
  });
  // Oyun alanı başlığın altına
  kutu.querySelector(".filtre").insertAdjacentHTML("beforebegin", `<div class="bakan-oyun" id="bakan-oyun"></div>`);
  oyunCiz();
};
const oyun = { soru: null, secim: null, d: 0, n: 0 };
function oyunSoruUret() {
  // Tek bir bakanın görev süresine düşen olaylar arasından rastgele seç
  const adaylar = TARIHLI_OLAYLAR.map(x => ({ x, b: BAKANLAR.filter(b => { const [s, e] = bakanAraligi(b); return x.t >= s && x.t <= e; }) }))
    .filter(y => y.b.length === 1);
  const { x, b: [dogru] } = adaylar[Math.floor(Math.random() * adaylar.length)];
  const adlar = [...new Set(BAKANLAR.map(b => b.ad))];
  const i = adlar.indexOf(dogru.ad);
  // Çeldiriciler: kronolojik olarak yakın dönemlerin bakanları
  const yakin = adlar.filter((ad, j) => ad !== dogru.ad && Math.abs(j - i) <= 6);
  const celdirici = karistir(yakin).slice(0, 3);
  oyun.soru = { x, dogru: dogru.ad, secenekler: karistir([dogru.ad, ...celdirici]) };
  oyun.secim = null;
}
function oyunCiz() {
  const yer = document.getElementById("bakan-oyun");
  if (!yer) return;
  if (!oyun.soru) {
    yer.innerHTML = `<div class="oyun-bas"><div><h3>${a("oyunBaslik")}</h3><p>${a("oyunGiris")}</p></div><button class="dugme" data-oyun="basla">${a("oyunBasla")}</button></div>`;
    return;
  }
  const { x, dogru, secenekler } = oyun.soru;
  const bitti = oyun.secim !== null;
  yer.innerHTML = `
    <div class="oyun-bas"><h3>${a("oyunBaslik")}</h3><span class="oyun-skor">${a("oyunSkor").replace("{d}", oyun.d).replace("{n}", oyun.n)}</span></div>
    <p class="oyun-olay"><b>${guvenli(yilYaz(x.ol.yil))}</b> · ${guvenli(t(x.ol.olay))}</p>
    <p class="giris">${a("oyunGiris")}</p>
    <div class="oyun-secenekler">${secenekler.map(ad => {
      const s = !bitti ? "" : ad === dogru ? "gercek" : ad === oyun.secim ? "yanlis" : "soluk";
      return `<button class="karar-secenek ${s}" data-oyun-sec="${guvenli(ad)}" ${bitti ? "disabled" : ""}><span>${guvenli(ad)}</span></button>`;
    }).join("")}</div>
    ${bitti ? `<p class="karar-hukum ${oyun.secim === dogru ? "iyi" : "farkli"}" role="status">${oyun.secim === dogru ? a("oyunDogru") : a("oyunYanlis").replace("{ad}", guvenli(dogru))}</p>
    <button class="dugme" data-oyun="sonraki">${a("oyunSonraki")}</button>` : ""}`;
}
document.getElementById("bakanlar").addEventListener("click", e => {
  const s = e.target.closest("[data-oyun-sec]");
  if (s && oyun.secim === null) {
    oyun.secim = s.dataset.oyunSec; oyun.n++; if (oyun.secim === oyun.soru.dogru) oyun.d++;
    oyunCiz(); return;
  }
  const b = e.target.closest("[data-oyun]");
  if (b) { oyunSoruUret(); oyunCiz(); return; }
  const o = e.target.closest("[data-olaya-git]");
  if (o) { const [p, i] = o.dataset.olayaGit.split(",").map(Number); olayaGit(p, i); }
});

// ---------- 4) ANTLAŞMALAR VE SINIRLAR HARİTASI ----------
function antlasmaCiz() {
  const kutu = document.getElementById("antlasma-kutu");
  if (typeof HARITA === "undefined") { kutu.hidden = true; return; }
  const [x0, y0, w, h] = ANTLASMALAR.kutu;
  // Yalnızca kutuya giren ülkeleri çiz (merkez noktası kutunun geniş çevresindeyse)
  const yollar = HARITA.ulkeler.filter(u => u[5] > x0 - 40 && u[5] < x0 + w + 40 && u[6] > y0 - 30 && u[6] < y0 + h + 30)
    .map(u => `<path d="${u[4]}" class="a-ulke ${u[3] === "tr" ? "tr" : ""}"><title>${guvenli(dil === "tr" ? u[1] : u[2])}</title></path>`).join("");
  const isaretler = ANTLASMALAR.liste.map((n, i) => `
    <g class="a-isaret" data-antlasma="${i}" tabindex="0" role="button" aria-label="${guvenli(n.yil + " " + t(n.ad))}">
      <circle cx="${n.x}" cy="${n.y}" r="1.25"></circle>
      <text x="${n.x}" y="${n.y + .45}" text-anchor="middle">${i + 1}</text>
    </g>`).join("");
  kutu.innerHTML = `
    <div class="harita-ust"><h2>${a("antlasmaBaslik")}</h2><p class="pol-bolge">${a("antlasmaAcik")}</p></div>
    <div class="antlasma-izgara">
      <svg class="harita antlasma-harita" viewBox="${x0} ${y0} ${w} ${h}" role="img" aria-label="${guvenli(a("antlasmaBaslik"))}">
        <g>${yollar}</g>${isaretler}
      </svg>
      <ol class="antlasma-liste">${ANTLASMALAR.liste.map((n, i) => `
        <li data-antlasma="${i}" tabindex="-1">
          <span class="a-no">${i + 1}</span>
          <div><b>${guvenli(t(n.ad))}</b> <small>${guvenli(n.yil)}</small><p>${guvenli(t(n.not))}</p>
          ${n.ref ? `<button class="izlek-donem" data-olaya-git="${n.ref[0]},${n.ref[1]}">${a("antlasmaTarihte")}</button>` : ""}</div>
        </li>`).join("")}</ol>
    </div>
    <p class="kunye">${a("antlasmaKunye")}</p>`;
}
const antlasmaKutu = document.getElementById("antlasma-kutu");
function antlasmaParlat(i) {
  antlasmaKutu.querySelectorAll("[data-antlasma]").forEach(el => el.classList.toggle("parla", i !== null && el.dataset.antlasma === String(i)));
}
antlasmaKutu.addEventListener("mouseover", e => { const el = e.target.closest("[data-antlasma]"); antlasmaParlat(el ? el.dataset.antlasma : null); });
antlasmaKutu.addEventListener("mouseleave", () => { antlasmaParlat(null); balonGizle(); });
antlasmaKutu.addEventListener("focusin", e => { const el = e.target.closest("[data-antlasma]"); antlasmaParlat(el ? el.dataset.antlasma : null); });
antlasmaKutu.addEventListener("mousemove", e => {
  const g = e.target.closest(".a-isaret");
  if (!g) { balonGizle(); return; }
  const n = ANTLASMALAR.liste[+g.dataset.antlasma];
  balonGoster(`<b>${guvenli(t(n.ad))}</b> (${guvenli(n.yil)})<br><small>${guvenli(t(n.not))}</small>`, e.clientX, e.clientY);
});
antlasmaKutu.addEventListener("click", e => {
  const o = e.target.closest("[data-olaya-git]");
  if (o) { const [p, i] = o.dataset.olayaGit.split(",").map(Number); olayaGit(p, i); return; }
  const g = e.target.closest(".a-isaret");
  if (g) { const li = antlasmaKutu.querySelector(`li[data-antlasma="${g.dataset.antlasma}"]`); li.scrollIntoView({ behavior: "smooth", block: "nearest" }); li.focus({ preventScroll: true }); }
});
antlasmaKutu.addEventListener("keydown", e => {
  const g = e.target.closest(".a-isaret");
  if (g && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); g.dispatchEvent(new MouseEvent("click", { bubbles: true })); }
});

// ---------- Dil değişince yeniden çiz ----------
function atolyeCiz() { izlekCiz(); kararCiz(); antlasmaCiz(); }
const _hepsiniCizEski = hepsiniCiz;
hepsiniCiz = function () { _hepsiniCizEski(); atolyeCiz(); };
atolyeCiz();
bakanlarCiz();
