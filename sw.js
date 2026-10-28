// =============================================================
// sw.js — Service worker (çevrimdışı çalışma)
// Benzetme: Binanın kapıcısı. Ziyaretçi (tarayıcı) bir sayfa isteyince önce
// dışarıdan (internetten) taze olanı getirmeye çalışır, getiremezse depodaki
// (önbellek, cache) kopyayı verir. Böylece internet yokken de site açılır.
//
// Siteyi güncelledikten sonra eski kopyalar silinsin diye SURUM'u değiştir.
// =============================================================
const SURUM = "tdp-v9";

// İlk kurulumda depoya konacak temel dosyalar (büyük sözlük dosyası hariç;
// o, Sözlük sekmesi ilk açıldığında depoya girer)
const TEMEL = [
  "./", "index.html", "style.css", "app.js", "manifest.webmanifest",
  "veri/arayuz.js", "veri/erisim.js", "veri/tarih.js", "veri/politikalar.js", "veri/duyurular.js", "veri/dunya.js",
  "veri/sorular.js", "veri/mulakat.js", "veri/quiz_ek.js", "veri/arsiv.js", "veri/harita.js", "veri/sinav.js", "veri/otomatik.js",
  "gorseller/ikon-192.png", "gorseller/turquie-kamaliste-afis.webp", "gorseller/turquie-kemaliste-bust.webp", "gorseller/bayrak.webp"
];

self.addEventListener("install", olay => {
  olay.waitUntil(caches.open(SURUM).then(depo => depo.addAll(TEMEL)).then(() => self.skipWaiting()));
});

// Eski sürümlerin depolarını temizle
self.addEventListener("activate", olay => {
  olay.waitUntil(
    caches.keys().then(adlar => Promise.all(adlar.filter(ad => ad !== SURUM).map(ad => caches.delete(ad))))
      .then(() => self.clients.claim())
  );
});

// Önce internet, olmazsa depo: sayfanın kendisi ve sık güncellenen veri dosyaları için
async function onceInternet(istek) {
  const depo = await caches.open(SURUM);
  try {
    const cevap = await fetch(istek);
    if (cevap.ok) depo.put(istek, cevap.clone());
    return cevap;
  } catch (hata) {
    return (await depo.match(istek)) || (await depo.match(istek, { ignoreSearch: true })) ||
      (istek.mode === "navigate" ? depo.match("index.html") : Response.error());
  }
}

// Önce depo, arkada tazele: stil, görsel, yazı tipi gibi az değişen dosyalar için
async function onceDepo(istek) {
  const depo = await caches.open(SURUM);
  // Tam eşleşme: "app.js?v=4" ile "app.js?v=5" farklı dosya sayılır (yeni sürüm eskiyle karışmasın)
  const kayitli = await depo.match(istek);
  const taze = fetch(istek).then(cevap => {
    if (cevap.ok || cevap.type === "opaque") depo.put(istek, cevap.clone());
    return cevap;
  }).catch(async () => kayitli || (await depo.match(istek, { ignoreSearch: true })) || Response.error());
  return kayitli || taze;
}

self.addEventListener("fetch", olay => {
  const istek = olay.request;
  if (istek.method !== "GET") return;
  const url = new URL(istek.url);
  const kendi = url.origin === self.location.origin;
  const yaziTipi = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (!kendi && !yaziTipi) return; // dış linklere (Bakanlık, BM...) dokunma

  if (istek.mode === "navigate" || (kendi && url.pathname.includes("/veri/"))) {
    olay.respondWith(onceInternet(istek));
  } else {
    olay.respondWith(onceDepo(istek));
  }
});
