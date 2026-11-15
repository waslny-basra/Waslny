// V10: caching disabled to avoid stale versions.
self.addEventListener("install",()=>self.skipWaiting());self.addEventListener("activate",event=>event.waitUntil(self.clients.claim()));
