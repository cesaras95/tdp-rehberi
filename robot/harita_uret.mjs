import fs from "node:fs";
import * as d3 from "/opt/npm-tools/node_modules/d3-geo/src/index.js";
const [,, giris, cikis] = process.argv;
const gj = JSON.parse(fs.readFileSync(giris, "utf8"));
const W = 1000, H = 760;
const proj = d3.geoAzimuthalEqualArea().rotate([-32, -36]);
const kutu = { type: "Polygon", coordinates: [[[-20, -35], [80, -35], [80, 62], [-20, 62], [-20, -35]].reverse()] };
proj.fitExtent([[6, 6], [W - 6, H - 6]], { type: "MultiPoint", coordinates: [[-18, 36], [78, 40], [30, -35], [35, 64], [60, 56], [-12, 10]] });
proj.clipExtent([[0, 0], [W, H]]);
const yol = d3.geoPath(proj).digits(1);
const AB = ["AUT","BEL","BGR","HRV","CZE","DNK","EST","FIN","FRA","DEU","HUN","IRL","ITA","LVA","LTU","LUX","MLT","NLD","POL","PRT","ROU","SVK","SVN","ESP","SWE"];
const NATO = ["GBR","NOR","ISL","USA","CAN"];
const harita = {};
AB.forEach(k => harita[k] = "ab"); NATO.forEach(k => harita[k] = "nato-abd");
["CYP","CYN"].forEach(k => harita[k] = "kibris");
["GRC","LBY","EGY"].forEach(k => harita[k] = "ege-akdeniz");
["RUS","UKR","MDA","BLR"].forEach(k => harita[k] = "rusya-ukrayna");
["SYR","LBN"].forEach(k => harita[k] = "suriye");
["ISR","PSX","JOR"].forEach(k => harita[k] = "filistin");
["IRN","IRQ","SAU","QAT","ARE","KWT","OMN","YEM","PAK","AFG"].forEach(k => harita[k] = "iran-korfez");
["AZE","ARM","GEO","KAZ","KGZ","UZB","TKM","TJK"].forEach(k => harita[k] = "turk-dunyasi");
["ALB","MNE","MKD","BIH","SRB","KOS"].forEach(k => harita[k] = "balkanlar");
["CHN","MNG","IND","BGD","BTN","NPL","LKA","THA","LAO","MMR","VNM","KHM","MYS","IDN","PHL","KOR","PRK","JPN","TWN"].forEach(k => harita[k] = "cin-asya");
["BRA","ARG","CHL","PER","COL","VEN","MEX","CUB","ECU","BOL","URY","PRY"].forEach(k => harita[k] = "latin-amerika");
const sonuc = [];
for (const f of gj.features) {
  const p = f.properties; const k = p.ADM0_A3;
  if (k === "ATA") continue;
  let pol = harita[k] || (p.CONTINENT === "Africa" ? "afrika" : "");
  if (k === "TUR") pol = "tr";
  const d = yol(f);
  if (!d) continue;
  const b = yol.bounds(f);
  if (b[1][0] < 0 || b[0][0] > W || b[1][1] < 0 || b[0][1] > H) continue;
  const c = proj(d3.geoCentroid(f)) || [0, 0];
  const ADLAR = { TUR: ["Türkiye", "Türkiye"], CYP: ["Güney Kıbrıs Rum Yönetimi", "Greek Cypriot Administration"], CYN: ["Kuzey Kıbrıs Türk Cumhuriyeti", "Turkish Republic of Northern Cyprus"] };
  const [adTr, adEn] = ADLAR[k] || [p.NAME_TR || p.NAME, p.NAME_EN || p.NAME];
  sonuc.push([k, adTr, adEn, pol, d, Math.round(c[0]), Math.round(c[1])]);
}
const ust = `// OTOMATİK ÜRETİLDİ: Natural Earth 1:110m ülke sınırları (kamu malı), Türkiye merkezli eşit alanlı projeksiyon.
// Biçim: [kod, ad (TR), ad (EN), politika id ("" = bağlantısız, "tr" = Türkiye), SVG yolu, merkez x, merkez y]
// Bu dosyayı elle düzenleme; haritadaki ülke-politika eşleşmesini değiştirmek için robot/harita_uret.mjs'i kullan.
`;
fs.writeFileSync(cikis, ust + "const HARITA = { genislik: " + W + ", yukseklik: " + H + ", ulkeler: " + JSON.stringify(sonuc) + " };\n");
console.log(sonuc.length, "ülke", (fs.statSync(cikis).size / 1024).toFixed(0) + " KB");
