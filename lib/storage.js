/* ==========================================================================
   lib/storage.js · Cronologia delle app generate (IndexedDB)
   Tutto resta sul dispositivo dell'utente. Nessun dato esce dal browser.
   ========================================================================== */

const DB_NOME = 'apptoapp';
const DB_VERSIONE = 1;
const STORE = 'cronologia';

let promessaDB = null;

// Apre (o crea) il database una sola volta.
function apriDB() {
  if (promessaDB) return promessaDB;

  promessaDB = new Promise((risolvi, rifiuta) => {
    if (!('indexedDB' in window)) {
      rifiuta(new Error('IndexedDB non disponibile in questo browser.'));
      return;
    }
    const richiesta = indexedDB.open(DB_NOME, DB_VERSIONE);

    richiesta.onupgradeneeded = () => {
      const db = richiesta.result;
      if (!db.objectStoreNames.contains(STORE)) {
        const store = db.createObjectStore(STORE, { keyPath: 'id' });
        store.createIndex('creata', 'creata', { unique: false });
      }
    };
    richiesta.onsuccess = () => risolvi(richiesta.result);
    richiesta.onerror = () => rifiuta(richiesta.error);
  });
  return promessaDB;
}

// Promisifica una IDBRequest eseguita dentro una transazione.
async function conStore(modo, azione) {
  const db = await apriDB();
  return new Promise((risolvi, rifiuta) => {
    const tx = db.transaction(STORE, modo);
    const store = tx.objectStore(STORE);
    const richiesta = azione(store);
    tx.oncomplete = () => risolvi(richiesta ? richiesta.result : undefined);
    tx.onerror = () => rifiuta(tx.error);
    tx.onabort = () => rifiuta(tx.error);
  });
}

/**
 * Salva (o aggiorna) un'app in cronologia.
 * @param {Object} app  { nome, descrizione, html, css, js }
 * @returns {Promise<Object>} la voce salvata, con id e data.
 */
export async function salvaApp(app) {
  const voce = {
    id: app.id || generaId(),
    nome: app.nome || 'App',
    descrizione: app.descrizione || '',
    html: app.html || '',
    css: app.css || '',
    js: app.js || '',
    promptOrigine: app.promptOrigine || '',
    creata: app.creata || Date.now()
  };
  await conStore('readwrite', (store) => store.put(voce));
  return voce;
}

/**
 * Elenca le app in cronologia, dalla più recente.
 * @returns {Promise<Array>}
 */
export async function elencoApp() {
  const tutte = await conStore('readonly', (store) => store.getAll());
  return (tutte || []).sort((a, b) => b.creata - a.creata);
}

// Elimina una voce per id.
export async function eliminaApp(id) {
  await conStore('readwrite', (store) => store.delete(id));
}

// Svuota tutta la cronologia.
export async function svuotaCronologia() {
  await conStore('readwrite', (store) => store.clear());
}

// ID univoco con fallback per browser senza crypto.randomUUID.
function generaId() {
  if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
  return 'id-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);
}
