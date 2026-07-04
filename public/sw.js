// Service worker Ruang Belajar — mode offline.
// Materi buku disimpan (cache-first) supaya bisa dibuka tanpa internet.
// Guru AI (/api/) selalu lewat internet.
const CACHE = "ruang-belajar-v1";
const CORE = ["/", "/manifest.json", "/icon-192.png", "/icon-512.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(CORE)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api/")) return; // Guru AI butuh internet
  if (url.pathname.includes("/_next/webpack-hmr")) return; // dev HMR

  if (url.pathname.startsWith("/materi/")) {
    event.respondWith(cacheFirst(req)); // gambar buku: simpan permanen
  } else {
    event.respondWith(networkFirst(req)); // halaman & aset: utamakan online, cadangan cache
  }
});

async function cacheFirst(req) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(req);
  if (cached) return cached;
  try {
    const res = await fetch(req);
    if (res.ok) cache.put(req, res.clone());
    return res;
  } catch (e) {
    return cached || Response.error();
  }
}

async function networkFirst(req) {
  const cache = await caches.open(CACHE);
  try {
    const res = await fetch(req);
    if (res.ok) cache.put(req, res.clone());
    return res;
  } catch (e) {
    const cached = await cache.match(req);
    if (cached) return cached;
    if (req.mode === "navigate") {
      const home = await cache.match("/");
      if (home) return home;
    }
    return new Response(
      "Sedang offline. Buka aplikasi ini saat ada internet dulu supaya materinya tersimpan.",
      { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } }
    );
  }
}
