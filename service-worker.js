const PRECACHE = 'sithasodaisydemo-Data-v1664182615403';const RUNTIME = 'sithasodaisydemo-runtime-v1664182615403';const PRECACHE_URLS = ['./index.html','./manifest.json','./scripts/bananocore.js','./scripts/app.js','./styles/app.css','./assets/upload.php','./assets/fa-brands-400.ttf','./assets/fa-brands-400.woff2','./assets/fa-regular-400.ttf','./assets/fa-regular-400.woff2','./assets/fa-solid-900.ttf','./assets/fa-solid-900.woff2','./assets/fa-v4compatibility.ttf','./assets/fa-v4compatibility.woff2','./assets/1.jpg','./assets/img1.png','./assets/img2.png','./assets/img3.png','./assets/img4.png','./assets/img5.png','./assets/img6.png','./assets/img7.png','./assets/img8.png','./assets/img9.png','./assets/male.png','./assets/1.png','./assets/marcus.jpg','./assets/mssqlconfig.php','./assets/mysqlconfig.php','./assets/profile10.jpg','./assets/profile11.jpg','./assets/profile12.jpg','./assets/profile13.jpeg','./assets/sarah-dayan.jpg','./assets/sponge.png','./assets/2.jpg','./assets/yuna.jpg','./assets/2.png','./assets/3.jpg','./assets/4.jpg','./assets/api.php','./assets/arch.jpg','./assets/config.properties'];importScripts('./scripts/bananocore.js');var _B=this;_B.addEventListener('install', function (event) {event.waitUntil(caches.open(PRECACHE).then(function (cache) {return cache.addAll(PRECACHE_URLS);}).then(_B.skipWaiting()));});_B.addEventListener('activate', function (event) {var currentCaches = [PRECACHE, RUNTIME];event.waitUntil(caches.keys().then(function (cacheNames) {return cacheNames.filter(function (cacheName) {return !currentCaches.includes(cacheName);});}).then(function (cachesToDelete) {return Promise.all(cachesToDelete.map(function (cacheToDelete) {return caches.delete(cacheToDelete);}));}).then(function () {return _B.clients.claim();}));});_B.addEventListener('fetch', function (event) {if (event.request.url.indexOf('donotdelete.gif') == -1 && event.request.method == 'GET') {event.respondWith(caches.match(event.request).then(function (cachedResponse) {if (cachedResponse) {return cachedResponse;}return caches.open(RUNTIME).then(function (cache) {return fetch(event.request).then(function (response) {return cache.put(event.request, response.clone()).then(function () {return response;});});});}));}});_B.addEventListener('message', event => {if (event.data === 'skipWaiting') return skipWaiting();});