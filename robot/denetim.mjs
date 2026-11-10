// =============================================================
// denetim.mjs — Yayın öncesi emniyet kontrolü
//
// Benzetme: Uçak kalkmadan önce pilotun okuduğu kontrol listesi.
// Site yayına alınmadan hemen önce çalışır. Ciddi bir hata bulursa
// "dur" der (çıkış kodu 1) ve yeni sürüm YAYINLANMAZ; ziyaretçiler
// sitenin son sağlam hâlini görmeye devam eder.
//
// Elle çalıştırmak için (proje klasöründe):  node robot/denetim.mjs
// HATA  = yayını durdurur (site bozulur ya da yanlış bilgi gösterir)
// UYARI = yayını durdurmaz, ama bakılması iyi olur
// =============================================================
import fs from "node:fs";
import vm from "node:vm";
import { execFileSync } from "node:child_process";

const hatalar = [], uyarilar = [];
const hata = m => hatalar.push(m), uyari = m => uyarilar.push(m);

// 1) Bütün kod dosyaları sözdizimi (syntax) açısından geçerli mi?
const html = fs.readFileSync("index.html", "utf8");
const veriDosyalari = [...html.matchAll(/src="(veri\/[a-z_]+\.js)/g)].map(m => m[1]);
const kodDosyalari = [...veriDosyalari, "veri/sozluk.js", "app.js", "atolye_ui.js", "sw.js"];
for (const f of kodDosyalari) {
  if (!fs.existsSync(f)) { hata(`${f}: dosya yok`); continue; }
  try { execFileSync(process.execPath, ["--check", f], { stdio: "pipe" }); }
  catch (e) { hata(`${f}: sözdizimi hatası — ${String(e.stderr).split("\n").slice(0, 3).join(" ")}`); }
}

// 2) Veri dosyalarını tarayıcıdaki sırayla yükle
const ortam = vm.createContext({ window: {}, console });
for (const f of [...veriDosyalari, "veri/sozluk.js"]) {
  if (!fs.existsSync(f)) continue;
  try { vm.runInContext(fs.readFileSync(f, "utf8").replace(/^(const|let) /gm, "var "), ortam, { filename: f }); }
  catch (e) { hata(`${f}: yüklenemedi — ${e.message}`); }
}
const V = ad => ortam[ad];
const gerekli = ["ARAYUZ", "TARIH", "POLITIKALAR", "DUYURULAR", "DUNYA", "QUIZ", "KARTLAR", "MULAKAT", "BAKANLAR", "TEMELLER", "OTOMATIK", "IZLEK", "KARAR", "ANTLASMALAR", "SOZLUK"];
for (const ad of gerekli) if (V(ad) === undefined) hata(`${ad} verisi tanımlı değil`);

if (!hatalar.length) {
  // 3) Her iki dilli metinde hem Türkçe hem İngilizce dolu mu?
  let ikili = 0;
  (function gez(o, yol) {
    if (!o || typeof o !== "object") return;
    const anahtarlar = Object.keys(o);
    if (!Array.isArray(o) && anahtarlar.length <= 2 && ("tr" in o || "en" in o)) {
      ikili++;
      for (const d of ["tr", "en"]) if (o[d] === undefined || o[d] === null || o[d] === "") hata(`${yol}: "${d}" metni boş`);
    }
    for (const k of anahtarlar) gez(o[k], `${yol}.${k}`);
  })(Object.fromEntries(gerekli.filter(a => !["ARAYUZ", "SOZLUK", "OTOMATIK"].includes(a)).map(a => [a, V(a)])), "");

  // 4) Arayüz metinleri: iki dilde aynı anahtarlar var mı, koddaki her anahtar tanımlı mı?
  const A = V("ARAYUZ");
  for (const k of Object.keys(A.tr)) if (!(k in A.en)) hata(`ARAYUZ.en içinde "${k}" yok`);
  for (const k of Object.keys(A.en)) if (!(k in A.tr)) hata(`ARAYUZ.tr içinde "${k}" yok`);
  const kod = fs.readFileSync("app.js", "utf8") + fs.readFileSync("atolye_ui.js", "utf8");
  const kullanilan = new Set([...kod.matchAll(/\ba\("([A-Za-z0-9_]+)"\)/g)].map(m => m[1])
    .concat([...html.matchAll(/data-t(?:-[a-z]+)?="([A-Za-z0-9_]+)"/g)].map(m => m[1])));
  for (const k of kullanilan) if (!(k in A.tr)) hata(`Arayüz anahtarı tanımsız: "${k}"`);

  // 5) Quiz: cevap anahtarı geçerli mi, iki dilde şık sayısı eşit mi, soru yineleniyor mu?
  const gorulen = new Set();
  V("QUIZ").forEach((q, i) => {
    const tr = q.secenekler && q.secenekler.tr, en = q.secenekler && q.secenekler.en;
    if (!Array.isArray(tr) || !Array.isArray(en) || tr.length !== en.length) return hata(`QUIZ[${i}]: şıklar eksik ya da iki dilde sayısı farklı`);
    if (!Number.isInteger(q.dogru) || q.dogru < 0 || q.dogru >= tr.length) hata(`QUIZ[${i}]: doğru cevap sırası geçersiz (${q.dogru})`);
    if (gorulen.has(q.soru.tr)) hata(`QUIZ[${i}]: aynı soru iki kez var — ${q.soru.tr.slice(0, 50)}`);
    gorulen.add(q.soru.tr);
  });

  // 6) Çapraz bağlantılar: konu izleği, Karar Anı, antlaşma haritası ve "iki bakış" var olan olaylara mı gidiyor?
  const T = V("TARIH");
  const olayVar = r => Array.isArray(r) && T[r[0]] && T[r[0]].olaylar[r[1]];
  V("IZLEK").forEach(k => k.olaylar.forEach(r => { if (!olayVar(r)) hata(`IZLEK ${k.id}: olay bulunamadı [${r}]`); }));
  V("KARAR").forEach(k => { if (!olayVar(k.ref)) hata(`KARAR ${k.yil}: olay bulunamadı [${k.ref}]`); if (!(k.gercek >= 0 && k.gercek < k.secenekler.length)) hata(`KARAR ${k.yil}: gerçek seçenek sırası geçersiz`); });
  V("ANTLASMALAR").liste.forEach(n => { if (n.ref && !olayVar(n.ref)) hata(`ANTLASMA ${n.yil}: olay bulunamadı [${n.ref}]`); });
  // Tarih listesine araya olay eklenirse sıra numaraları kayar; bağlantı var olan ama YANLIŞ bir olaya
  // gidebilir. Bunu yakalamak için yılları karşılaştırıyoruz.
  const ayniYil = (yilYazi, r) => String(T[r[0]].olaylar[r[1]].yil).includes(String(yilYazi).slice(0, 4));
  V("KARAR").forEach(k => { if (olayVar(k.ref) && !ayniYil(k.yil, k.ref)) hata(`KARAR ${k.yil}: bağlantı başka bir yılın olayına gidiyor (${T[k.ref[0]].olaylar[k.ref[1]].yil})`); });
  V("ANTLASMALAR").liste.forEach(n => { if (n.ref && olayVar(n.ref) && !ayniYil(n.yil, n.ref)) hata(`ANTLASMA ${n.yil}: bağlantı başka bir yılın olayına gidiyor (${T[n.ref[0]].olaylar[n.ref[1]].yil})`); });

  // 7) Güncel içerik: tarih, konu ve kaynak adresi düzgün mü?
  const polIdler = new Set(V("POLITIKALAR").map(p => p.id));
  V("DUYURULAR").forEach((d, i) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(d.tarih || "")) hata(`DUYURULAR[${i}]: tarih biçimi YYYY-AA-GG olmalı`);
    if (!/^https:\/\//.test(d.kaynak || "")) hata(`DUYURULAR[${i}]: kaynak https:// ile başlamalı`);
    if (d.konu && !polIdler.has(d.konu)) uyari(`DUYURULAR[${i}]: konu "${d.konu}" politikalar listesinde yok`);
  });
  V("DUNYA").forEach((d, i) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(d.tarih || "")) hata(`DUNYA[${i}]: tarih biçimi YYYY-AA-GG olmalı`);
    if (!/^https:\/\//.test(d.kaynak || "")) hata(`DUNYA[${i}]: kaynak https:// ile başlamalı`);
  });
  const O = V("OTOMATIK");
  if (!O || !Array.isArray(O.kaynaklar)) hata("OTOMATIK.kaynaklar bir liste değil");
  else O.kaynaklar.forEach(k => (k.haberler || []).forEach(h => { if (h.link && !/^https?:\/\//.test(h.link)) hata(`OTOMATIK: geçersiz link — ${String(h.link).slice(0, 60)}`); }));

  // 8) Uyarılar: tarih sırası, bakan listesindeki boşluklar
  const yil = s => +((String(s).match(/\b(1[89]\d\d|20\d\d)\b/) || [])[1]);
  T.forEach(d => { let onceki = 0; d.olaylar.forEach(o => { const y = yil(o.yil); if (!y) uyari(`TARIH ${d.donem}: yıl okunamadı — ${o.yil}`); else { if (y < onceki) uyari(`TARIH ${d.donem}: sıra bozuk — ${o.yil}`); onceki = y; } }); });
  const gun = s => { const [g, m, y] = s.split(".").map(Number); return new Date(y, m - 1, g); };
  const B = V("BAKANLAR").map(b => ({ ad: b.ad, b: gun(b.bas), s: b.son ? gun(b.son) : null })).sort((x, y) => x.b - y.b);
  for (let i = 1; i < B.length; i++) { const fark = (B[i].b - (B[i - 1].s || B[i].b)) / 864e5; if (fark > 45) uyari(`BAKANLAR: ${B[i - 1].ad} → ${B[i].ad} arasında ${Math.round(fark)} gün boşluk`); }

  // 9) Service worker'ın önbellek listesindeki dosyalar gerçekten var mı?
  const sw = fs.readFileSync("sw.js", "utf8");
  const temel = (sw.match(/const TEMEL = \[([\s\S]*?)\];/) || [, ""])[1];
  for (const m of temel.matchAll(/"([^"]+)"/g)) if (m[1] !== "./" && !fs.existsSync(m[1])) hata(`sw.js önbellek listesinde olmayan dosya: ${m[1]}`);

  console.log(`Denetlenen: ${kodDosyalari.length} kod dosyası, ${ikili} iki dilli metin, ${V("QUIZ").length} soru, ${T.reduce((s, d) => s + d.olaylar.length, 0)} tarih olayı.`);
}

if (uyarilar.length) console.log(`\nUYARILAR (${uyarilar.length}) — yayını durdurmaz:\n` + uyarilar.map(u => "  • " + u).join("\n"));
if (hatalar.length) {
  console.error(`\nHATALAR (${hatalar.length}) — YAYIN DURDURULDU:\n` + hatalar.map(h => "  ✗ " + h).join("\n"));
  process.exit(1);
}
console.log("\n✓ Denetim geçti. Yayına alınabilir.");
