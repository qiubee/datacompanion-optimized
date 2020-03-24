// from example: https://serviceworke.rs/strategy-cache-and-update_service-worker_doc.html
const CACHE = "datacompanion-v1";
const assets = ["./css/index.css", "./js/index.js", "./images/oba-logo.jpg"];

self.addEventListener("install", function(event) {
    console.log("The service worker is being installed...");
    // add assets to cache
    event.waitUntil(addToCache());
  });

self.addEventListener("fetch", function(event) {
  console.log("The service worker is serving assets...");

  // block requests that are not GET
  if (event.request.method !== "GET") {
    console.log("Stopped serving assets", event.request.method, event.request.url);
    return;
  }

  // respond with (give back) cache assets
  event.respondWith(fromCache(event.request));
  // add updated assets to cache
  event.waitUntil(updateCache(event.request));
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