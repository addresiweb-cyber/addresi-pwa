// Minimal service worker for PWA fullscreen — no caching
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => clients.claim());
