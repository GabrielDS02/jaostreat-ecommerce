// ============================================================
// JÃOStreat - SERVICE WORKER
// PWA / Cache / Funcionamento Offline
// ============================================================

const CACHE_VERSION = "jaostreat-v1.0.0";

const STATIC_CACHE = `${CACHE_VERSION}-static`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;

// ============================================================
// ARQUIVOS PRINCIPAIS DO SITE
// ============================================================

const STATIC_FILES = [
    "./index.html",
    "./feedbacks.html",
    "./lookbook.html",
    "./sobre.html",

    // CSS
    "./css/index.css",
    "./css/feedbacks.css",
    "./css/lookbook.css",
    "./css/sobre.css",
    "./css/whatsapp_global.css",

    // Ícones PWA
    "./icons/icon-192x192.png",
    "./icons/icon-512x512.png",

    // Favicon
    "./favicon/favicon-192x192.png",
    "./favicon/favicon-512x512.png",

    // Manifest
    "./js/manifest_aplicativo_PWA/manifest.json"
];


// ============================================================
// INSTALAÇÃO
// ============================================================

self.addEventListener("install", (event) => {
    console.log("[JãoStreat SW] Instalando Service Worker...");

    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then((cache) => {
                console.log("[JãoStreat SW] Armazenando arquivos principais...");

                return cache.addAll(
                    STATIC_FILES.map((file) => {
                        return new URL(file, self.registration.scope).href;
                    })
                );
            })
            .then(() => {
                console.log("[JãoStreat SW] Instalação concluída.");

                // Ativa imediatamente a nova versão
                return self.skipWaiting();
            })
            .catch((error) => {
                console.error(
                    "[JãoStreat SW] Erro ao armazenar arquivos:",
                    error
                );
            })
    );
});


// ============================================================
// ATIVAÇÃO
// ============================================================

self.addEventListener("activate", (event) => {
    console.log("[JãoStreat SW] Ativando Service Worker...");

    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter((cacheName) => {
                            return (
                                cacheName.startsWith("jaostreat-") &&
                                cacheName !== STATIC_CACHE &&
                                cacheName !== RUNTIME_CACHE
                            );
                        })
                        .map((cacheName) => {
                            console.log(
                                "[JãoStreat SW] Removendo cache antigo:",
                                cacheName
                            );

                            return caches.delete(cacheName);
                        })
                );
            })
            .then(() => {
                console.log(
                    "[JãoStreat SW] Service Worker ativado."
                );

                // Assume o controle das páginas abertas
                return self.clients.claim();
            })
    );
});


// ============================================================
// FETCH
// ============================================================

self.addEventListener("fetch", (event) => {
    const request = event.request;

    // Só trabalha com requisições GET
    if (request.method !== "GET") {
        return;
    }

    const requestURL = new URL(request.url);

    // Não intercepta outros domínios
    if (requestURL.origin !== self.location.origin) {
        return;
    }

    // ========================================================
    // PÁGINAS HTML
    // Estratégia: Cache First + Network Fallback
    // ========================================================

    if (request.mode === "navigate") {
        event.respondWith(
            caches.match(request)
                .then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }

                    return fetch(request)
                        .then((networkResponse) => {
                            if (
                                !networkResponse ||
                                networkResponse.status !== 200
                            ) {
                                return networkResponse;
                            }

                            const responseClone =
                                networkResponse.clone();

                            caches.open(RUNTIME_CACHE)
                                .then((cache) => {
                                    cache.put(
                                        request,
                                        responseClone
                                    );
                                });

                            return networkResponse;
                        })
                        .catch(() => {
                            // Se estiver offline e a página não estiver
                            // no cache, tenta retornar a index.
                            return caches.match(
                                new URL(
                                    "./index.html",
                                    self.registration.scope
                                ).href
                            );
                        });
                })
        );

        return;
    }


    // ========================================================
    // CSS / JS / IMAGENS / FONTES
    // Estratégia: Cache First
    // ========================================================

    event.respondWith(
        caches.match(request)
            .then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }

                return fetch(request)
                    .then((networkResponse) => {
                        if (
                            !networkResponse ||
                            networkResponse.status !== 200
                        ) {
                            return networkResponse;
                        }

                        const responseClone =
                            networkResponse.clone();

                        caches.open(RUNTIME_CACHE)
                            .then((cache) => {
                                cache.put(
                                    request,
                                    responseClone
                                );
                            });

                        return networkResponse;
                    });
            })
            .catch(() => {
                // Retorna erro normal caso o recurso não exista
                return new Response(
                    "Recurso indisponível no modo offline.",
                    {
                        status: 503,
                        statusText: "Service Unavailable",
                        headers: {
                            "Content-Type": "text/plain; charset=UTF-8"
                        }
                    }
                );
            })
    );
});


// ============================================================
// MENSAGEM PARA ATUALIZAÇÃO DO SERVICE WORKER
// ============================================================

self.addEventListener("message", (event) => {
    if (!event.data) {
        return;
    }

    if (event.data.type === "SKIP_WAITING") {
        self.skipWaiting();
    }
});


// ============================================================
// LOG
// ============================================================

console.log(
    `[JãoStreat SW] Service Worker carregado - ${CACHE_VERSION}`
);
