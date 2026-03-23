const CACHE_NAME = 'drawapp-v3';
const ASSETS = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/js/utils.js',
    '/js/sounds.js',
    '/js/templates.js',
    '/js/coloring-pages.js',
    '/js/guide.js',
    '/js/coloring.js',
    '/js/app.js',
    '/manifest.json'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(r => r || fetch(event.request))
    );
});
