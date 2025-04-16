const CACHE_NAME = "Copyer-cache-v1";

self.addEventListener("install", (e) => {
     e.waitUntil(
          caches.open(CACHE_NAME).then((cache) => {
               return cache.addAll([
                    "https://https://www.github.com/Kwshal/Copyer/",
                    "https://https://www.github.com/Kwshal/Copyer/index.html",
                    "https://https://www.github.com/Kwshal/Copyer/manifest.json",
                    "https://https://www.github.com/Kwshal/Copyer/sw.js",
                    "https://https://www.github.com/Kwshal/Copyer/icon-256.png"
               ]);
          })
     );
});
console.log("url changed");

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
