/* ==========================================================================
   AppToApp · Service Worker
   Strategia: "app shell" in cache + network-first per le richieste di rete.
   Le chiamate alle API LLM NON vengono mai intercettate né messe in cache.
   ========================================================================== */

const VERSIONE = 'apptoapp-v3';

// Risorse statiche che compongono la "shell" dell'app.
const RISORSE_SHELL = [
  './',
  './index.html',
  './app.js',
  './styles.css',
  './manifest.json',
  './lib/llm.js',
  './lib/generator.js',
  './lib/exporter.js',
  './lib/templates.js',
  './lib/esempi.js',
  './lib/storage.js',
  './assets/icons/icon.svg'
];

// Installazione: pre-cache della shell.
self.addEventListener('install', (evento) => {
  evento.waitUntil(
    caches.open(VERSIONE)
      .then((cache) => cache.addAll(RISORSE_SHELL))
      .catch(() => { /* se una risorsa manca, non bloccare l'installazione */ })
      .then(() => self.skipWaiting())
  );
});

// Attivazione: pulizia delle cache vecchie.
self.addEventListener('activate', (evento) => {
  evento.waitUntil(
    caches.keys()
      .then((chiavi) => Promise.all(
        chiavi.filter((c) => c !== VERSIONE).map((c) => caches.delete(c))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch.
self.addEventListener('fetch', (evento) => {
  const richiesta = evento.request;

  // Intercetta solo richieste GET dello stesso dominio.
  if (richiesta.method !== 'GET') return;

  const url = new URL(richiesta.url);

  // Non toccare MAI le chiamate alle API esterne (LLM, CDN dinamiche): lasciale passare.
  if (url.origin !== self.location.origin) return;

  // Network-first con fallback alla cache (così gli aggiornamenti arrivano subito,
  // ma l'app funziona anche offline).
  evento.respondWith(
    fetch(richiesta)
      .then((risposta) => {
        const copia = risposta.clone();
        caches.open(VERSIONE).then((cache) => cache.put(richiesta, copia)).catch(() => {});
        return risposta;
      })
      .catch(() => caches.match(richiesta).then((c) => c || caches.match('./index.html')))
  );
});
