// V6: unregister stale caches and service worker; no offline caching of personal data.
self.addEventListener('install',e=>self.skipWaiting());self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const k of await caches.keys())await caches.delete(k);await self.registration.unregister();await self.clients.claim()})()));
