// Service Worker para La Felicidá
const CACHE_NAME = 'cafe-felicida-cache-v2';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/src/index.css',
  '/images/LaFelicidA_transparente_ALPHA_2x.png',
  '/images/coffee-beans-bg.jpg',
];

const CACHE_STRATEGIES = {
  images: 'cache-first',
  fonts: 'cache-first',
  static: 'cache-first',
  dynamic: 'network-first',
};

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        STATIC_ASSETS.map(url => {
          return fetch(url)
            .then(response => {
              if (!response.ok) {
                throw new Error(`Failed to fetch ${url}`);
              }
              return cache.put(url, response);
            })
            .catch(error => {
              console.error(`Failed to cache ${url}:`, error);
              // Continue even if one file fails
              return Promise.resolve();
            });
        })
      );
    })
  );
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
});

// Función para determinar la estrategia de cache basada en el tipo de recurso
const getStrategy = (request) => {
  const url = new URL(request.url);
  
  if (url.pathname.match(/\.(jpg|jpeg|png|gif|svg|webp)$/)) {
    return CACHE_STRATEGIES.images;
  }
  
  if (url.pathname.match(/\.(woff|woff2|ttf|eot)$/)) {
    return CACHE_STRATEGIES.fonts;
  }
  
  if (url.pathname.match(/\.(js|css|json)$/)) {
    return CACHE_STRATEGIES.static;
  }
  
  return CACHE_STRATEGIES.dynamic;
};

// Manejo de peticiones
self.addEventListener('fetch', (event) => {
  // Ignorar peticiones que no sean HTTP/HTTPS (como chrome-extension://)
  if (!event.request.url.startsWith('http')) {
    return;
  }
  
  // Ignorar peticiones a extensiones del navegador
  if (event.request.url.includes('chrome-extension://')) {
    return;
  }
  
  const strategy = getStrategy(event.request);
  
  switch (strategy) {
    case 'cache-first':
      event.respondWith(
        caches.match(event.request)
          .then((response) => {
            return response || fetch(event.request)
              .then((fetchResponse) => {
                // Solo cachear respuestas exitosas
                if (fetchResponse && fetchResponse.status === 200) {
                  return caches.open(CACHE_NAME)
                    .then((cache) => {
                      cache.put(event.request, fetchResponse.clone());
                      return fetchResponse;
                    });
                }
                return fetchResponse;
              })
              .catch((error) => {
                console.log('Fetch failed for:', event.request.url);
                return caches.match(event.request);
              });
          })
      );
      break;
      
    case 'network-first':
      event.respondWith(
        fetch(event.request)
          .then((response) => {
            // Solo cachear respuestas exitosas
            if (response && response.status === 200) {
              return caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, response.clone());
                  return response;
                });
            }
            return response;
          })
          .catch(() => {
            return caches.match(event.request);
          })
      );
      break;
  }
});