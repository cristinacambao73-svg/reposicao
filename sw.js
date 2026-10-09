// Ativa o Service Worker básico para permitir a instalação da PWA
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Mantém a app funcional online
  event.respondWith(fetch(event.request));
});
