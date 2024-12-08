'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "72169473e8f0002e49f413481a52a25e",
"assets/AssetManifest.bin.json": "17aebb8f1dbaad7977b455700b75b969",
"assets/AssetManifest.json": "0bc1eff2a3407f8ced8624eaaad5bc59",
"assets/FontManifest.json": "8e2e4718745c757bbd978fca262044b4",
"assets/fonts/Comfortaa-VariableFont_wght.ttf": "b14da82fd326fb23ada0b4df443cda25",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/images/1.jpeg": "072305e902da0cf0cc398de4f1512373",
"assets/images/10-min.jpg": "6544cffa73908aec57d70f2f09de8d50",
"assets/images/11-min.jpg": "b419058fd2fc81d107087699d4035fa8",
"assets/images/12-min.jpg": "1584e1d522bdbf6b3cc81472819ca754",
"assets/images/13-min.jpg": "eeee6ec92ef472dab60f9241aafdfff2",
"assets/images/14-min.jpg": "ae5ccccb074b6a98a35199b263befff2",
"assets/images/15-min.jpg": "532b98072529117319165f55d9f0aa32",
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
"assets/images/26.jpg": "5db8e26034206fde2d66f48172c76725",
"assets/images/27.jpg": "71ddbcd1f0dc6ca2b20ba47efa40eb5d",
"assets/images/28.jpg": "b5617d908e227fec279a4ab06e759bcd",
"assets/images/29.jpg": "59fe05e3ee6f565aa83f1f5df47cc03b",
"assets/images/3-min.jpg": "25a1feee3b072b8ad9027ad389a21af9",
"assets/images/30.jpg": "da5832e3ac1fcfca3987f381184bde41",
"assets/images/31.jpg": "630638e477e074c0a8fb50eb6f9b2af5",
"assets/images/32.jpg": "ce7d960cdb2201b9ae4cce1145c2f73d",
"assets/images/33.jpg": "3cd269176b71bbfa665ce827f8b9baed",
"assets/images/34.jpg": "5c424b543a567de7695589097291e351",
"assets/images/4-min.jpg": "1427b6d682c62dc5cbb2dad9e15b4ebb",
"assets/images/5-min.jpg": "e7b2816588a76327c2fd3078623df017",
"assets/images/6-min.jpg": "bcd0f05f7919cbf7abe81997fffcd028",
"assets/images/7-min.jpg": "d312b283e04b57409911928b7d45a318",
"assets/images/8-min.jpg": "aa5ae3cff6c6c2b439ef1e338de9884a",
"assets/images/9-min.jpg": "8c3de1d12e946bfaf113939aba285f88",
"assets/images/bcg1.jpg": "410189d65e18a7aacb480c954800fb2f",
"assets/images/bcg10.jpg": "fc708c639d8ddb10cc701de216ccb30b",
"assets/images/bcg11.jpg": "74674f342cdbf4be3e5d20c4ffde2dcf",
"assets/images/bcg12.jpg": "ccc81c507b3cf6e3a9fb26c0f8482b5d",
"assets/images/bcg13.jpg": "8d92a32219d0c0bcb416d0170f992cb2",
"assets/images/bcg14.jpg": "2f08b626bc5c84bdd001fa1868730db7",
"assets/images/bcg15.jpg": "6da811b6ce6a1d11e3f4693f4c82cf47",
"assets/images/bcg2.jpg": "dfd1eacba95f93cb3b58f1956f38de8b",
"assets/images/bcg3.jpg": "7a560bc19a4068bcc387980d8cda0adc",
"assets/images/bcg4.jpg": "5187f7cd169e08c5ded4c5acfe52d83f",
"assets/images/bcg5.jpg": "97a9bf9cc18058690cc50a5d7b62af23",
"assets/images/bcg6.jpg": "54874bb82df1f1262143a2c52c76a97b",
"assets/images/bcg7.jpg": "833cded9e5dfe39593bbb893af0a09cf",
"assets/images/bcg8.jpg": "20e331b98c295ab604f00aaed72084af",
"assets/images/bcg9.jpg": "5a4c226f80d1d09fabb410963942f743",
"assets/images/gender.jpg": "ac4ce6271a2108d141d2cf6530f8356e",
"assets/images/Logo.jpg": "1d96e218988ef29eb79704de2cd6dab8",
"assets/images/party1.jpg": "55dd4b3fb5ff5587b1dfb9a067a0e484",
"assets/images/Party2.jpg": "caf34f30dca743bcd4a5c2a965e4ec0d",
"assets/images/party3.jpg": "a6ca76c47f4ef10ad49d97dedfd3c015",
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
"flutter_bootstrap.js": "c484e392a9cebf55de045b29049f8e3d",
"icons/Icon-192.png": "7eddaf2747eaa85c8f9759c8dcbbc5d9",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b275eefe54ea86afa8fab4b784d6fff5",
"/": "b275eefe54ea86afa8fab4b784d6fff5",
"main.dart.js": "0b005531be2ad87a05ad6055c099922a",
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
