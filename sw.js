const CACHE_NAME = "clipsync-cache-v1";
const FILES_TO_CACHE = [
     "/",
     "/index.html",
     "/manifest.json",
     "/script.js"
];

self.addEventListener("install", (event) => {
     event.waitUntil(
          caches.open(CACHE_NAME).then((cache) => {
               return cache.addAll(FILES_TO_CACHE);
          })
     );
});

self.addEventListener("fetch", (event) => {
     event.respondWith(
          caches.match(event.request).then((response) => {
               return response || fetch(event.request);
          })
     );
});
