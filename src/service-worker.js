/* eslint-disable no-restricted-globals */
// service-worker.js

const CACHE_NAME = 'my-video-cache';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (!response) {
        return fetch(event.request).then((res) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, res.clone());
            return res;
          });
        });
      }
      return response;
    })
  );
});