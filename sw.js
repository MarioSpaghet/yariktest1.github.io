const CACHE_NAME = 'yarik-game-cache-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/Index.html',
    // Изображения
    '/vis/0b103c82b7a0b82e.png',
    '/vis/circle@Фон.png',
    '/vis/1.png',
    '/vis/testtest.png',
    '/vis/aaah.webp',
    '/vis/yap1-1.webp',
    '/vis/yap2.gif',
    '/vis/britva.png',
    '/vis/ham1.png',
    '/vis/ham2.png',
    '/vis/ham3.png',
    '/vis/yap-animation.gif',
    '/vis/fan-tokens-icon.png',
    '/vis/staking-icon.png',
    '/vis/btc-pairs-icon.png',
    '/vis/eth-pairs-icon.png',
    '/vis/cmc-pairs-icon.png',
    '/vis/vbuck.png',
    '/vis/pyaterochka-icon.png',
    '/vis/perekrestok-icon.png',
    '/vis/diksi-icon.png',
    '/vis/fixprice-icon.png',
    '/vis/investment-shit-icon.png',
    '/vis/europe-license-icon.png',
    '/vis/africa-license-icon.png',
    '/vis/usa-license-icon.png',
    '/vis/goool-landia-license-icon.png',
    '/vis/anime-country-license-icon.png',
    '/vis/kon-chen-yi-license-icon.png',
    '/vis/sili-billi-license-icon.png',
    '/vis/finger.png',
    '/vis/battery.png',
    '/vis/logo-hc-50-50-1.png',
    '/game-icon.png',
    '/mine-icon.png',
    '/friends-icon.png',
    '/earn-icon.png',
    '/airdrop-icon.png',
    '/lightning-icon.png',
    '/turbo-icon.png',
    '/energy-icon.png',
    '/vis/BOOM_BOOM.gif',
    '/vis/yap1-1.webp',
    '/vis/yap2.gif',
    '/vis/aaah.webp',
    '/vis/testtest.png',
    // Аудио
    '/audio/boom.mp3',
    '/audio/yap1.mp3',
    '/audio/sbr1.mp3',
    '/audio/sbr2.mp3',
    '/audio/sbr3.mp3',
    '/audio/yap2.mp3',
    // Добавьте пути к другим ассетам, если необходимо
];

// Установка Service Worker и кэширование ассетов
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

// Обработка запросов и возврат кэшированных ресурсов
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});

// Активация Service Worker и очистка старых кэшей
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cache => {
                        if (!cacheWhitelist.includes(cache)) {
                            return caches.delete(cache);
                        }
                    })
                );
            })
    );
});
