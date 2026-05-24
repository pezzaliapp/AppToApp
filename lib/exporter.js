/* ==========================================================================
   lib/exporter.js · Impacchettamento .zip dell'app generata
   Produce file statici eseguibili aprendo index.html (zero lock-in).
   JSZip viene caricato pigramente da CDN solo quando serve.
   ========================================================================== */

import { faviconInline, escapeHtml } from './generator.js';

const URL_JSZIP = 'https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js';

/**
 * Esporta l'app come archivio .zip e avvia il download.
 * @param {Object} app  { nome, descrizione, html, css, js }
 */
export async function esportaZip(app) {
  const JSZip = await caricaJSZip();
  const zip = new JSZip();

  const nomeBase = slug(app.nome);

  zip.file('index.html', costruisciIndex(app));
  zip.file('styles.css', app.css || '/* nessuno stile */\n');
  zip.file('app.js', app.js || '// nessuno script\n');
  zip.file('manifest.json', JSON.stringify(costruisciManifest(app), null, 2));
  zip.file('sw.js', costruisciSW(nomeBase));
  zip.file('icon.svg', costruisciIconaSVG(app.nome));
  zip.file('LEGGIMI.txt', costruisciLeggimi(app));

  const blob = await zip.generateAsync({ type: 'blob' });
  scaricaBlob(blob, `${nomeBase}.zip`);
}

/* --------------------------------------------------------------------------
   Costruzione dei singoli file
   -------------------------------------------------------------------------- */

// index.html che collega i file esterni (CSS, JS, manifest) e registra il SW.
function costruisciIndex(app) {
  const titolo = escapeHtml(app.nome || 'App');
  const descr = escapeHtml(app.descrizione || '');
  return `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${descr}">
  <meta name="theme-color" content="#7c5cff">
  <title>${titolo}</title>
  ${faviconInline(app.nome)}
  <link rel="manifest" href="manifest.json">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
${app.html || ''}
  <script src="app.js"></script>
  <script>
    // Registrazione del service worker (funziona via http/https, non da file://).
    if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js').catch(function () {});
      });
    }
  </script>
</body>
</html>
`;
}

// Manifest PWA per l'app generata.
function costruisciManifest(app) {
  return {
    name: app.nome || 'App',
    short_name: (app.nome || 'App').slice(0, 18),
    description: app.descrizione || '',
    start_url: './index.html',
    scope: './',
    display: 'standalone',
    background_color: '#0a0a0f',
    theme_color: '#7c5cff',
    lang: 'it',
    icons: [
      { src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }
    ]
  };
}

// Service worker minimale per l'app generata (cache app shell).
function costruisciSW(nomeBase) {
  return `/* Service worker generato da AppToApp */
const CACHE = '${nomeBase}-v1';
const RISORSE = ['./', './index.html', './styles.css', './app.js', './manifest.json', './icon.svg'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(RISORSE)).catch(() => {}).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((k) => Promise.all(k.filter((x) => x !== CACHE).map((x) => caches.delete(x)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});
`;
}

// Icona SVG (file vero, non data-URI) per il manifest dell'app esportata.
function costruisciIconaSVG(nome) {
  const iniziale = escapeHtml((String(nome || 'A').trim()[0] || 'A').toUpperCase());
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="112" fill="#7c5cff"/>
  <text x="256" y="350" font-size="300" font-family="system-ui,sans-serif" font-weight="700" fill="#ffffff" text-anchor="middle">${iniziale}</text>
</svg>
`;
}

// Istruzioni per l'utente finale dentro lo zip.
function costruisciLeggimi(app) {
  return `${app.nome || 'App'}
${'='.repeat((app.nome || 'App').length)}

${app.descrizione || ''}

COME USARLA
-----------
- Apri "index.html" con un doppio click: l'app funziona subito, senza installare nulla.
- Per installarla come PWA o usare il service worker, servila da un piccolo server:
    python3 -m http.server 8000
  e apri http://localhost:8000

PUBBLICARLA GRATIS SU GITHUB PAGES
----------------------------------
1. Crea un repository su GitHub e caricaci questi file.
2. Settings -> Pages -> Branch: main -> cartella /(root) -> Save.
3. Dopo qualche minuto l'app sara' online all'indirizzo indicato.

Generata con AppToApp (https://github.com/pezzaliapp/AppToApp) - costo zero.
`;
}

/* --------------------------------------------------------------------------
   Utilità
   -------------------------------------------------------------------------- */

// Carica JSZip da CDN una sola volta.
let promessaJSZip = null;
function caricaJSZip() {
  if (window.JSZip) return Promise.resolve(window.JSZip);
  if (promessaJSZip) return promessaJSZip;

  promessaJSZip = new Promise((risolvi, rifiuta) => {
    const s = document.createElement('script');
    s.src = URL_JSZIP;
    s.onload = () => (window.JSZip ? risolvi(window.JSZip) : rifiuta(new Error('JSZip non disponibile.')));
    s.onerror = () => rifiuta(new Error('Impossibile caricare JSZip (serve connessione la prima volta).'));
    document.head.appendChild(s);
  });
  return promessaJSZip;
}

// Avvia il download di un Blob.
function scaricaBlob(blob, nomeFile) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = nomeFile;
  document.body.appendChild(a);
  a.click();
  a.remove();
  // Libera la memoria dopo un attimo.
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

// Trasforma un nome in slug adatto a un file.
export function slug(nome) {
  return (String(nome || 'app')
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '') // rimuove gli accenti
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 50)) || 'app';
}
