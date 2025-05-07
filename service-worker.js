const CACHE_NAME = 'ort-montreuil-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/home.html',
    '/recharge.html',
    '/history.html',
    '/cafeteria.html',
    '/balance.html',
    '/styles.css',
    '/app.js',
    'https://cdn.tailwindcss.com',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
    'https://via.placeholder.com/100?text=ORT',
    'https://via.placeholder.com/50',
    'https://via.placeholder.com/100x100'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});