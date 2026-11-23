/**
 * Service Worker for Tilezy PWA
 * 100% Offline Gameplay & Persistent Cache Strategy (v3.5)
 */

const CACHE_NAME = 'tilezy-pastel-v3.6';
const CORE_ASSETS = [
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

// 1. INSTALL: Precache all essential game assets for offline play
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Tilezy SW] Precaching core assets for 100% offline play...');
      return cache.addAll(CORE_ASSETS);
    })
  );
});

// 2. ACTIVATE: Claim clients immediately and clean up any old cache versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Tilezy SW] Clearing obsolete cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. FETCH: Smart Network-First when online, Guaranteed Cache Fallback when offline
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // A. Navigation requests (Opening the app, refreshing, direct link, hash routes)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            const copy = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return networkRes;
        })
        .catch(async () => {
          // OFFLINE: Kembalikan index.html dari cache agar game tetap bisa dibuka saat tanpa internet!
          const match = await caches.match(event.request, { ignoreSearch: true });
          if (match) return match;
          const indexCached = await caches.match('./index.html', { ignoreSearch: true })
            || await caches.match('index.html', { ignoreSearch: true })
            || await caches.match('./');
          return indexCached;
        })
    );
    return;
  }

  // B. Google Fonts caching (agar font tetap estetik saat offline)
  if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request)
          .then((networkRes) => {
            if (networkRes && networkRes.status === 200) {
              const copy = networkRes.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
            }
            return networkRes;
          })
          .catch(() => cached);
      })
    );
    return;
  }

  // C. App Assets (CSS, JS, SVG, PNG, manifest, dll.)
  // Coba ambil versi online terbaru; jika offline, gunakan cache lokal (ignoreSearch: true)
  event.respondWith(
    fetch(event.request)
      .then((networkRes) => {
        if (networkRes && networkRes.status === 200) {
          const copy = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return networkRes;
      })
      .catch(async () => {
        // Fallback offline: abaikan parameter ?v=... agar selalu cocok dengan aset yang dicache
        const cached = await caches.match(event.request, { ignoreSearch: true });
        if (cached) return cached;
        return caches.match(url.pathname, { ignoreSearch: true });
      })
  );
});
