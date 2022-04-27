'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "16cd8de81c0a658e05b6ad6b2bc4b966",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/images/altf-image.png": "3f0ca19104b8ac255723e46e5b4cca29",
"assets/images/bell.png": "a24d370824f2593eebcbc8f4977256ae",
"assets/images/charles-michel.jpg": "120845a547d8d7047c603a4040986316",
"assets/images/discord-logo.png": "1c76c4eaeca00d328be00bca7d4a3432",
"assets/images/discord.png": "09016d4d7dc5ac3c995199a3d15a9879",
"assets/images/euro-statue.jpg": "383a523636c27f9b2247c124c32adafa",
"assets/images/european-commission.jpg": "086d966b9e8a8d0a3d46a5b464f602b2",
"assets/images/eu_flag.jpg": "d7e458af1f2791d1d7c5092a8cfcb855",
"assets/images/facebook.png": "bd713b9ae0e8ebe7093173634c909558",
"assets/images/final_logo_nobg.png": "97b940f39c8f723af550366ee51204ab",
"assets/images/forest.jpg": "e4cb962ba3a5fd3fd4215ff855062831",
"assets/images/gmail.png": "2c1a7560c88ea83e6b2593cd07af8ad8",
"assets/images/he-logo-with-text.png": "e9d84cf76771f54dade9300777df42cb",
"assets/images/heart.png": "b505295a0697292ba99313f32be1feb1",
"assets/images/heyeurope-banner.png": "52210fb6cb5ab73581881c63c7caa312",
"assets/images/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"assets/images/lamp-idea.png": "31ef7d55e841fcce4fb0d22779335601",
"assets/images/logo-withtext-nobg.png": "e231f4872f21d31e4f7ba0cb53a7578f",
"assets/images/medal.png": "d7f07a95fb586e1835da364239193141",
"assets/images/sassoli.jpg": "0a4a72b5648e170f966b29b04e6ceee5",
"assets/images/sign-petition.jpg": "a0f7a10a46e335f01b0cabc2249f613a",
"assets/images/spread-ideas.jpg": "12f2503394288c21f6c72c510d49da49",
"assets/images/three_eu_flags.jpg": "28491dc5170c97acd1b02cb250510e71",
"assets/images/trophy.png": "c79335a36fff65ab85f026d2e9792726",
"assets/images/undraw_building_blocks.png": "80cb5ecdb1b68ac9082c62783ff56665",
"assets/images/undraw_information_tab_ocka.png": "bd19546e64bf634771d31ea0c34bde96",
"assets/images/undraw_Online_learning.png": "8dafcaf07694ef16538bbd47e011827f",
"assets/images/volunteer_girls.jpg": "df0219c0eaabd74c7b9b462743ec2aca",
"assets/images/von-der-leyen.jpg": "aaf51b9ce718c2b6fc5d7785b3836855",
"assets/images/vote_into_box.jpg": "ca0b0e1a5fe67ecf3fae0a95ccff900a",
"assets/images/work_above_desk.jpg": "98771ecb04fc71cc10ff70d7718424fa",
"assets/images/world-war-ruins.jpg": "2c8c64f67e32103b4c2a3d8e08027f61",
"assets/NOTICES": "b109157c2e981aa4cd637ee59b12543c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_earth/assets/google_map_north_pole.png": "eaf3b4c37cb1ca979b802b4f32c378c8",
"assets/packages/flutter_earth/assets/google_map_south_pole.png": "bc1f3fc8afc5455ece9b0f426ac528ea",
"assets/packages/flutter_login/assets/images/ecorp.png": "24e80e9441acf073076893cebbe60ac0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/timezone/data/2020a.tzf": "84285f1f81b999f1de349a723574b3e5",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "97b940f39c8f723af550366ee51204ab",
"favicon2.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c967c1dfc583a7bb4cb2fe0c51a1a00f",
"/": "c967c1dfc583a7bb4cb2fe0c51a1a00f",
"main.dart.js": "1248b0d2a038be706bbb8e7dde983781",
"manifest.json": "0bc11264a384aa0e64fcabd6d3001b78",
"version.json": "ae3e376af53b28bac06ee0e0b841be60"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
