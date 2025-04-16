const CACHE_NAME = "Copyer-cache-v1";

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        "/Copyer/",
        "/Copyer/index.html",
        "/Copyer/manifest.json",
        "/Copyer/sw.js",
        "/Copyer/icon192.png",
        "/Copyer/icon512.png"
      ]);
    })
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
