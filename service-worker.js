const PRECACHE = 'sithasodaisydemo-Data-v1664420584300';const RUNTIME = 'sithasodaisydemo-runtime-v1664420584300';const PRECACHE_URLS = ['./index.html','./manifest.json','./scripts/bananocore.js','./scripts/app.js','./styles/app.css','./assets/upload.php','./assets/fa-brands-400.ttf','./assets/fa-brands-400.woff2','./assets/fa-regular-400.ttf','./assets/fa-regular-400.woff2','./assets/fa-solid-900.ttf','./assets/fa-solid-900.woff2','./assets/fa-v4compatibility.ttf','./assets/fa-v4compatibility.woff2','./assets/1.jpg','./assets/2.png','./assets/sarah-dayan.jpg','./assets/sponge.png','./assets/twitter-bg.svg','./assets/yuna.jpg','./assets/3.jpg','./assets/4.jpg','./assets/5.jpg','./assets/6.jpg','./assets/7.jpg','./assets/8.jpg','./assets/9.jpg','./assets/alipay.png','./assets/api.php','./assets/1.png','./assets/arch.jpg','./assets/banner_1.jpg','./assets/banner_10.jpg','./assets/banner_11.jpg','./assets/banner_12.jpg','./assets/banner_2.jpg','./assets/banner_3.jpg','./assets/banner_4.jpg','./assets/banner_5.jpg','./assets/banner_6.jpg','./assets/10.jpg','./assets/banner_7.jpg','./assets/banner_8.jpg','./assets/banner_9.jpg','./assets/circle.png','./assets/circle.svg','./assets/config.properties','./assets/face1.jpg','./assets/face10.jpg','./assets/face11.jpg','./assets/face12.jpg','./assets/11.jpg','./assets/face13.jpg','./assets/face14.jpg','./assets/face15.jpg','./assets/face16.jpg','./assets/face17.jpg','./assets/face18.jpg','./assets/face19.jpg','./assets/face2.jpg','./assets/face20.jpg','./assets/face21.jpg','./assets/12.jpg','./assets/face22.jpg','./assets/face23.jpg','./assets/face24.jpg','./assets/face25.jpg','./assets/face26.jpg','./assets/face27.jpg','./assets/face3.jpg','./assets/face4.jpg','./assets/face5.jpg','./assets/face6.jpg','./assets/13.jpg','./assets/face7.jpg','./assets/face8.jpg','./assets/face9.jpg','./assets/facebook-bg.svg','./assets/img_1.jpg','./assets/img_2.jpg','./assets/img_3.jpg','./assets/img_4.jpg','./assets/img1.png','./assets/img2.png','./assets/14.jpg','./assets/img3.png','./assets/img4.png','./assets/img5.png','./assets/img6.png','./assets/img7.png','./assets/img8.png','./assets/img9.png','./assets/instagram-bg.svg','./assets/lockscreen-bg.jpg','./assets/login-bg.jpg','./assets/15.jpg','./assets/male.png','./assets/marcus.jpg','./assets/mashy.jpg','./assets/mssqlconfig.php','./assets/mysqlconfig.php','./assets/nature_01.jpg','./assets/nature_02.jpg','./assets/nature_03.jpg','./assets/nature_04.jpg','./assets/nature_05.jpg','./assets/2.jpg','./assets/nature_06.jpg','./assets/nature_09.jpg','./assets/nature_11.jpg','./assets/nature_12.jpg','./assets/paypal.png','./assets/profile10.jpg','./assets/profile11.jpg','./assets/profile12.jpg','./assets/profile13.jpeg','./assets/register-bg.jpg'];importScripts('./scripts/bananocore.js');var _B=this;_B.addEventListener('install', function (event) {event.waitUntil(caches.open(PRECACHE).then(function (cache) {return cache.addAll(PRECACHE_URLS);}).then(_B.skipWaiting()));});_B.addEventListener('activate', function (event) {var currentCaches = [PRECACHE, RUNTIME];event.waitUntil(caches.keys().then(function (cacheNames) {return cacheNames.filter(function (cacheName) {return !currentCaches.includes(cacheName);});}).then(function (cachesToDelete) {return Promise.all(cachesToDelete.map(function (cacheToDelete) {return caches.delete(cacheToDelete);}));}).then(function () {return _B.clients.claim();}));});_B.addEventListener('fetch', function (event) {if (event.request.url.indexOf('donotdelete.gif') == -1 && event.request.method == 'GET') {event.respondWith(caches.match(event.request).then(function (cachedResponse) {if (cachedResponse) {return cachedResponse;}return caches.open(RUNTIME).then(function (cache) {return fetch(event.request).then(function (response) {return cache.put(event.request, response.clone()).then(function () {return response;});});});}));}});