// add files to cache
const FILES_TO_CACHE = [
     "/", 
  "/index.html", 
  "/index.js", 
  "/favicon.ico", 
  "/styles.css", 
  "/icons/icon-192x192.png", 
  "/icons/icon-512x512.png"
];

const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

// install service worker
self.addEventListener("install", function (evt) {
    evt.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
        console.log("Your files were pre-cached successfully!");
        return cache.addAll(FILES_TO_CACHE);
        })
    );

    self.skipWaiting();
});

// activate service worker
self.addEventListener("activate", function (evt) {
    evt.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(
                keyList.map(key => {
                    if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
                        console.log("Removing old cache data", key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );

    self.clients.claim();
});

// listen for fetchs to the api
self.addEventListener("fetch", evt => {
    if (evt.request.url.includes("/api/")) {
        evt.respondWith(
            caches.open(DATA_CACHE_NAME).then(cache => {
                return fetch(evt.request)
                .then(response => {
                        if (response.status === 200) {
                            cache.put(evt.request.url, response.clone());
                    }
                    
                    return response;
                })
                .catch(err => {
                    return cache.match(evt.request);
                });
      }).catch(err => console.log(err))
    );
    
    return;
}

 evt.respondWith(
    fetch(evt.request).catch(function () {
      return caches.match(evt.request).then(function (response) {
        if (response) {
          return response;
        } else if (evt.request.headers.get("accept").includes("text/html")) {
          // return the cached home page for all requests for html pages
          return caches.match("/");
        }
      });
    })
  );
});