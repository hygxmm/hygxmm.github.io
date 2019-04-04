
var cacheName = 'bs-0-2-0';
var cacheFiles = [
    '/',
    './index.html',
    './index.js',
    './img/p30_1.webp',
    './img/p30_2.webp',
    './img/p30_3.webp',
    './img/p30_4.webp',
]


//监听install事件,安装完成后,进行文件缓存
self.addEventListener('install', function (e) {
    console.log("Server Worker 状态: install")
    var cacheOpenPromise = caches.open(cacheName)
        .then((res) => {
            return res.addAll(cacheFiles);
        })
    e.waitUntil(cacheOpenPromise);
})