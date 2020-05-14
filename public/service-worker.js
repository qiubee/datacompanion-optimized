// from example: https://serviceworke.rs/strategy-cache-and-update_service-worker_doc.html
const CACHE = "datacompanion-v1";
const assets = ["./css/index.css", "./js/index.min.js", "./images/oba-logo.jpg"];

self.addEventListener("install", function(event) {
    console.log("The service worker is installing...");
    // add assets to cache
    event.waitUntil(addToCache());
    console.info("The service worker has been installed.");
  });

// remove old caches: https://css-tricks.com/serviceworker-for-offline/
self.addEventListener("active", function(event) {
  console.log("The service worker is active...");

  // delete old caches
  event.waitUntil(removeObseleteCaches());

  console.info("The service worker is idle.");
});

self.addEventListener("fetch", function(event) {
  console.log("The service worker is serving the asset...");

  // block requests that are not GET
  if (event.request.method !== "GET") {
    console.log("Stopped serving assets", event.request.method, event.request.url);
    return;
  }

  // respond with (give back) cache assets
  event.respondWith(fromCache(event.request));
  // add updated assets to cache
  event.waitUntil(updateCache(event.request));

  console.info("The service worker served the asset.");
});
  
async function addToCache() {
  const cache = await openCache(CACHE);
  return cache.addAll(assets);
}

async function fromCache(request) {
  const cache = await openCache(CACHE);
  const matching = await cache.match(request);
  return matching || Promise.reject("no-match");
}

async function updateCache(request) {
  try {
    const cache = await openCache(CACHE);
    const response = await fetch(request);
    return cache.put(request, response);
  } catch (error) {
    console.log(error);
  }
}

async function openCache(cacheName) {
  return await caches.open(cacheName);
}

async function removeObseleteCaches() {
  const keys = caches.keys();
  keys.filter(function (key) {
    return !key.startsWith(CACHE);
  })
  .map(function (key) {
    return caches.delete(key);
  });
}