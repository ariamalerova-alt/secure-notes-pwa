// Простая заглушка Service Worker для офлайн PWA
self.addEventListener('install', event => {
  self.skipWaiting(); // сразу активировать SW
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim()); // брать контроль над всеми окнами
});

self.addEventListener('fetch', event => {
  // Стандартный fetch — просто пропускаем запрос дальше
  event.respondWith(fetch(event.request));
});