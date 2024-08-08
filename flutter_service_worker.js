'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6706f70322badb10d38d1994ae90899c",
"assets/AssetManifest.bin.json": "e85dc64681c45877d3c087ab3a9136e0",
"assets/AssetManifest.json": "d50d8226129c3c67d6f04ade970ec24e",
"assets/FontManifest.json": "8e2e4718745c757bbd978fca262044b4",
"assets/fonts/Comfortaa-VariableFont_wght.ttf": "b14da82fd326fb23ada0b4df443cda25",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/images/1.jpeg": "072305e902da0cf0cc398de4f1512373",
"assets/images/10-min.jpg": "6544cffa73908aec57d70f2f09de8d50",
"assets/images/10x15cm%2520Nani-min.jpg": "8b7bd1b3b69cb6882e9a800a593ed900",
"assets/images/10x15cm-min.jpg": "b10f28c5ccbe88b7abbd389345800c78",
"assets/images/11-min.jpg": "b419058fd2fc81d107087699d4035fa8",
"assets/images/12-min.jpg": "1584e1d522bdbf6b3cc81472819ca754",
"assets/images/13-min.jpg": "eeee6ec92ef472dab60f9241aafdfff2",
"assets/images/14-min.jpg": "ae5ccccb074b6a98a35199b263befff2",
"assets/images/15-min.jpg": "532b98072529117319165f55d9f0aa32",
"assets/images/15x21cm-min.jpg": "3eacda77d0c575291697c61d8315c8f0",
"assets/images/15x21Nani-min.jpg": "c813120ddc738ab1cdda4689740c61fb",
"assets/images/16-min.jpg": "5fb770f40455b190e195f843535f1124",
"assets/images/17-min.jpg": "09b185af57f8e6b4c6c0ee0a0c986088",
"assets/images/18-min.jpg": "5a3025fbe20458c011d3586ffa63f58a",
"assets/images/19-min.jpg": "0d2dbdbf4d6b9bcc2bcc827f3fbb47d8",
"assets/images/2.jpg": "e960bc9ca8536c26c484f70d6b4b7bc8",
"assets/images/20.jpeg": "5ae9c9aca748d75d32bd1fc507fb2046",
"assets/images/21-min.jpg": "1bcc30fbaab129e4b2ced3751bf2c873",
"assets/images/22-min.jpg": "16f4bdae673a7b615f450b15e8875c5a",
"assets/images/23-min.jpg": "d68fae20dfc6cde142f2ad382ff50a73",
"assets/images/24-min.jpg": "f06d798e58cc86184a07dc7aae2b517d",
"assets/images/25-min.jpg": "0a78be6e0b8bf59a5afd2f796ac56a07",
"assets/images/3-min.jpg": "25a1feee3b072b8ad9027ad389a21af9",
"assets/images/4-min.jpg": "1427b6d682c62dc5cbb2dad9e15b4ebb",
"assets/images/5-min.jpg": "e7b2816588a76327c2fd3078623df017",
"assets/images/6-min.jpg": "bcd0f05f7919cbf7abe81997fffcd028",
"assets/images/7,5x5cm%2520Nani-min.jpg": "625bc913a38c35a44aa2386f5973bb42",
"assets/images/7,5x5cm-min.jpg": "468dcc1013d5ad5ef1f29dd1e73cd66b",
"assets/images/7-min.jpg": "d312b283e04b57409911928b7d45a318",
"assets/images/8-min.jpg": "aa5ae3cff6c6c2b439ef1e338de9884a",
"assets/images/9-min.jpg": "8c3de1d12e946bfaf113939aba285f88",
"assets/images/Logo.jpg": "1d96e218988ef29eb79704de2cd6dab8",
"assets/NOTICES": "27d5bc3ec8b77b7edaf14b20057188bb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "45157fbc9fa1329c2524971b955546d8",
"icons/Icon-192.png": "7eddaf2747eaa85c8f9759c8dcbbc5d9",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b275eefe54ea86afa8fab4b784d6fff5",
"/": "b275eefe54ea86afa8fab4b784d6fff5",
"main.dart.js": "b61bc383bf50c427776c19096f44eb5f",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
