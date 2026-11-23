/**
 * Service Worker for Tilezy PWA
 * Auto-update & immediate refresh cache strategy
 */

const CACHE_NAME = 'tilezy-pastel-v2.4';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/style.css',
  './js/onet-engine.js',
  './js/icons.js',
  './js/audio.js',
  './js/app.js',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  // Langsung aktifkan Service Worker baru tanpa menunggu penutupan tab
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Menghapus cache lama:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Network First untuk HTML navigasi: Selalu ambil versi terbaru dari Vercel saat online
  if (event.request.mode === 'navigate' || url.pathname.endsWith('index.html') || url.pathname === '/') {
    event.respondWith(
      fetch(event.request)
        .then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            const copy = networkRes.clone();
            caches.open(CACHE_NAME).then((c) => c.put(event.request, copy));
          }
          return networkRes;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Network First untuk file CSS & JS: Selalu periksa update kode terbaru
  if (url.pathname.endsWith('.css') || url.pathname.endsWith('.js')) {
    event.respondWith(
      fetch(event.request)
        .then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            const copy = networkRes.clone();
            caches.open(CACHE_NAME).then((c) => c.put(event.request, copy));
          }
          return networkRes;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Cache First untuk aset gambar & font (hemat bandwidth)
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetchPromise = fetch(event.request).then((networkRes) => {
        if (networkRes && networkRes.status === 200) {
          const copy = networkRes.clone();
          caches.open(CACHE_NAME).then((c) => c.put(event.request, copy));
        }
        return networkRes;
      }).catch(() => cached);

      return cached || fetchPromise;
    })
  );
});
