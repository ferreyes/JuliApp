const CACHE_NAME = 'drawapp-v6';
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
        // Delete ALL old caches first, then fetch fresh assets
        caches.keys()
            .then(keys => Promise.all(keys.map(k => caches.delete(k))))
            .then(() => caches.open(CACHE_NAME))
            .then(cache => cache.addAll(ASSETS.map(a => a + '?v=6')))
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
    // Strip cache-busting query params for matching
    const url = new URL(event.request.url);
    url.search = '';
    const cleanRequest = new Request(url.toString());

    event.respondWith(
        // Try network first for JS/CSS, fall back to cache
        fetch(event.request)
            .then(response => {
                // Cache the fresh response
                const clone = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(cleanRequest, clone));
                return response;
            })
            .catch(() => caches.match(cleanRequest).then(r => r || caches.match(event.request)))
    );
});
