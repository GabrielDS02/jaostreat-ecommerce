const CACHE_VERSION = "jaostreat-v2.0.0";
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;

const STATIC_FILES = [
    "/index.html", "/produtos.html", "/lookbook.html", "/sobre.html", "/feedbacks.html",
    "/assets/css/global.css", "/assets/css/whatsapp_global.css", "/assets/css/index.css",
    "/assets/css/produtos.css", "/assets/css/lookbook.css", "/assets/css/sobre.css", "/assets/css/feedbacks.css",
    "/assets/js/shared.js", "/assets/js/index.js", "/assets/js/produtos.js", "/assets/js/lookbook.js",
    "/assets/js/sobre.js", "/assets/js/feedback.js",
    "/assets/favicon/favicon_192x192/favicon_192x192_fundo_preto.png",
    "/assets/favicon/favicon_512x512/favicon_512x512_fundo_preto.png",
    "/assets/Logos/Logos_Grandes_Orig/logo_grande_jaostreat_sem_fundo.png",
    "/assets/js/manifest_aplicativo_PWA/manifest_archive.json"
];

self.addEventListener("install", (event) => {
    event.waitUntil(caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys()
            .then((names) => Promise.all(names.filter((name) => name.startsWith("jaostreat-") && ![STATIC_CACHE, RUNTIME_CACHE].includes(name)).map((name) => caches.delete(name))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", (event) => {
    const { request } = event;
    if (request.method !== "GET") return;
    const url = new URL(request.url);
    if (url.origin !== self.location.origin) return;

    if (request.mode === "navigate") {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    const clone = response.clone();
                    caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, clone));
                    return response;
                })
                .catch(() => caches.match(request).then((cached) => cached || caches.match("/index.html")))
        );
        return;
    }

    event.respondWith(
        caches.match(request).then((cached) => cached || fetch(request).then((response) => {
            if (response.ok) {
                const clone = response.clone();
                caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, clone));
            }
            return response;
        }))
    );
});

self.addEventListener("message", (event) => {
    if (event.data?.type === "SKIP_WAITING") self.skipWaiting();
});
