/* ==========================================================================
   lib/generator.js · Orchestratore della generazione
   - Costruisce il prompt di sistema curato.
   - Chiama l'LLM.
   - Valida e normalizza l'output JSON (try/catch).
   - Assembla il documento per l'anteprima (tutto inline, sandbox-safe).
   ========================================================================== */

import { chiamaLLM, leggiConfig } from './llm.js';

/* --------------------------------------------------------------------------
   PROMPT DI SISTEMA
   Curato per ottenere SOLO JSON valido, app standalone, accessibili e dark.
   -------------------------------------------------------------------------- */
export const PROMPT_SISTEMA = `RISPONDI SOLO CON JSON VALIDO. NESSUN MARKDOWN, NESSUN PREAMBOLO, NESSUNA SPIEGAZIONE. INIZIA DIRETTAMENTE CON { E FINISCI CON }.

Sei un generatore esperto di applicazioni web. Produci app COMPLETE, eleganti e funzionanti.

REGOLA ASSOLUTA SULL'OUTPUT:
- Rispondi ESCLUSIVAMENTE con un singolo oggetto JSON valido.
- NIENTE testo prima o dopo, NIENTE markdown, NIENTE blocchi di codice con i backtick, NIENTE commenti fuori dal JSON.
- Il primo carattere della risposta deve essere "{" e l'ultimo "}".

SCHEMA JSON RICHIESTO (tutti i campi obbligatori, valori stringa):
{
  "nome": "Titolo breve e significativo dell'app",
  "descrizione": "Una frase che spiega cosa fa l'app",
  "html": "Markup che va DENTRO il <body> (NON includere <html>, <head>, <body>, <style> o <script>)",
  "css": "Tutto il CSS dell'app",
  "js": "Tutto il JavaScript dell'app"
}

VINCOLI TECNICI:
- App 100% standalone: solo HTML, CSS e JavaScript vanilla. NESSUNA libreria o framework esterno, nemmeno da CDN.
- Il codice deve funzionare aprendo semplicemente un file index.html, senza build e senza backend.
- Niente fetch verso server esterni, niente chiavi API, niente risorse remote: tutto autosufficiente.
- Usa solo JavaScript che gira nel browser; gestisci gli errori con grazia.

VINCOLI DI DESIGN:
- Design responsive e mobile-first.
- Dark mode coerente di default (sfondi scuri, buon contrasto, accenti viola/blu in stile Linear/Vercel).
- Accessibile (WCAG AA): contrasto adeguato, label sui controlli, focus visibile, HTML semantico, attributi aria dove servono.
- Curato e moderno: spaziature generose, angoli arrotondati, micro-interazioni discrete.
- Usa font di sistema (system-ui).

CONTENUTO:
- Inserisci nel JS, se utile all'app, dati di esempio realistici così che l'app sembri già "viva".
- Il CSS deve definire lo stile completo dell'app (non dare per scontato CSS esterno).

Ricorda: SOLO il JSON, nient'altro.`;

/* --------------------------------------------------------------------------
   Generazione
   -------------------------------------------------------------------------- */

/**
 * Genera un'app a partire dalla richiesta in linguaggio naturale.
 * @param {Object} opzioni
 * @param {string} opzioni.richiesta  Descrizione dell'app.
 * @param {Object} [opzioni.template] Template di partenza (con eventuale promptExtra).
 * @param {Object} [opzioni.config]   Config LLM esplicita.
 * @returns {Promise<Object>} app normalizzata { nome, descrizione, html, css, js }
 */
export async function generaApp({ richiesta, template, config } = {}) {
  const testo = (richiesta || '').trim();
  if (!testo) throw new Error('Descrivi l\'app che vuoi creare prima di generare.');

  let prompt = `Crea un'app web a partire da questa richiesta dell'utente:\n"""\n${testo}\n"""`;
  if (template && template.promptExtra) {
    prompt += `\n\nUsa come base concettuale: ${template.promptExtra}`;
  }
  prompt += '\n\nRispondi solo con il JSON richiesto.';

  const cfg = config || leggiConfig();
  // json:true → attiva il "JSON mode" nativo del provider (rinforzo).
  const grezzo = await chiamaLLM({ prompt, sistema: PROMPT_SISTEMA, config: cfg, json: true });

  try {
    return analizzaRisposta(grezzo);
  } catch (errore) {
    // Diagnostica sempre attiva: rende banale capire perché una generazione fallisce.
    const raw = String(grezzo || '');
    console.error('[AppToApp] Provider:', cfg.provider, 'Modello:', cfg.modello);
    console.error('[AppToApp] Raw response (primi 500 char):', raw.substring(0, 500));
    console.error('[AppToApp] Raw response (ultimi 200 char):', raw.slice(-200));
    throw errore;
  }
}

/**
 * Valida e normalizza la risposta grezza del modello.
 * @param {string} grezzo
 * @returns {Object} app normalizzata
 */
export function analizzaRisposta(grezzo) {
  const dati = estraiJSON(grezzo);

  if (dati === null) {
    throw new Error(
      'Il modello non ha restituito un JSON valido. Riprova: spesso basta premere "Rigenera". ' +
      '(Suggerimento: i modelli più piccoli sbagliano più spesso il formato.)'
    );
  }

  if (typeof dati !== 'object' || Array.isArray(dati)) {
    throw new Error('La risposta del modello non è un oggetto JSON valido. Riprova.');
  }

  const app = {
    nome: pulisci(dati.nome, 'App generata').slice(0, 120),
    descrizione: pulisci(dati.descrizione, '').slice(0, 400),
    html: stringa(dati.html),
    css: stringa(dati.css),
    js: stringa(dati.js)
  };

  if (!app.html.trim()) {
    throw new Error('Output incompleto: manca l\'HTML dell\'app. Riprova a generare.');
  }
  return app;
}

/* --------------------------------------------------------------------------
   Assemblaggio del documento di ANTEPRIMA (tutto inline)
   Usato come `srcdoc` dell'iframe sandboxed.
   -------------------------------------------------------------------------- */
export function assemblaAnteprima(app) {
  const titolo = escapeHtml(app.nome || 'App');
  return `<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${titolo}</title>
${faviconInline(app.nome)}
<style>
:root { color-scheme: dark; }
html, body { margin: 0; }
${app.css || ''}
</style>
</head>
<body>
${app.html || ''}
<script>
// Mostra gli errori runtime dentro l'anteprima invece di fallire in silenzio.
window.addEventListener('error', function (e) {
  console.error(e.message);
});
${app.js || ''}
<\/script>
</body>
</html>`;
}

/**
 * Favicon SVG inline derivata dall'iniziale del nome dell'app.
 * Richiesto: ogni app generata ha "sempre" un favicon SVG inline.
 */
export function faviconInline(nome) {
  const iniziale = escapeHtml((String(nome || 'A').trim()[0] || 'A').toUpperCase());
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>` +
    `<rect width='64' height='64' rx='14' fill='%237c5cff'/>` +
    `<text x='32' y='44' font-size='38' font-family='system-ui,sans-serif' ` +
    `font-weight='700' fill='white' text-anchor='middle'>${iniziale}</text></svg>`;
  return `<link rel="icon" href="data:image/svg+xml,${svg}">`;
}

/* --------------------------------------------------------------------------
   Utilità interne
   -------------------------------------------------------------------------- */

/**
 * Sanitizzatore robusto: estrae e fa il parse del JSON dall'output grezzo del
 * modello, gestendo fence markdown, preamboli, trailing commas e caratteri di
 * controllo non escapati dentro le stringhe (causa più comune di fallimento
 * quando il modello scrive codice dentro un campo JSON).
 * @param {string} raw
 * @returns {Object|null} l'oggetto JSON, oppure null se irrecuperabile.
 */
export function estraiJSON(raw) {
  if (!raw || typeof raw !== 'string') return null;
  let s = raw.trim();

  // Rimuovi fence markdown anche multipli o annidati.
  s = s.replace(/^```(?:json|JSON)?\s*\n?/gm, '');
  s = s.replace(/\n?\s*```\s*$/gm, '');
  s = s.replace(/```(?:json|JSON)?/g, '');
  s = s.replace(/```/g, '');

  // Trova il primo { e l'ultimo } per isolare il JSON (rimuove i preamboli).
  const inizio = s.indexOf('{');
  const fine = s.lastIndexOf('}');
  if (inizio === -1 || fine === -1 || fine <= inizio) {
    console.error('[AppToApp] Nessun JSON trovato. Raw response:', raw);
    return null;
  }

  s = s.substring(inizio, fine + 1).trim();

  // Tentativo 1: parse diretto.
  try {
    return JSON.parse(s);
  } catch (e) {
    // Tentativo 2: rimuovi le trailing commas.
    const s2 = s.replace(/,(\s*[}\]])/g, '$1');
    try {
      return JSON.parse(s2);
    } catch (e2) {
      // Tentativo 3: ripara i caratteri di controllo non escapati nelle stringhe
      // (newline/tab/CR grezzi dentro html/css/js — il caso che faceva fallire tutto).
      const s3 = riparaCaratteriControllo(s2);
      try {
        return JSON.parse(s3);
      } catch (e3) {
        console.error('[AppToApp] JSON.parse fallito dopo tutti i tentativi.');
        console.error('[AppToApp] Tentativo finale (primi 500):', s3.substring(0, 500));
        console.error('[AppToApp] Errore:', e3.message);
        return null;
      }
    }
  }
}

/**
 * Escapa i caratteri di controllo grezzi (newline, CR, tab) che si trovano
 * DENTRO le stringhe JSON. JSON non ammette caratteri di controllo letterali
 * nelle stringhe: i modelli che scrivono codice spesso li lasciano grezzi.
 */
export function riparaCaratteriControllo(s) {
  let out = '';
  let inStringa = false;
  let escape = false;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (escape) { out += ch; escape = false; continue; }
    if (ch === '\\') { out += ch; escape = true; continue; }
    if (ch === '"') { inStringa = !inStringa; out += ch; continue; }
    if (inStringa) {
      if (ch === '\n') { out += '\\n'; continue; }
      if (ch === '\r') { out += '\\r'; continue; }
      if (ch === '\t') { out += '\\t'; continue; }
    }
    out += ch;
  }
  return out;
}

function stringa(v) {
  if (v == null) return '';
  if (typeof v === 'string') return v;
  // Se per errore il modello annida un oggetto, lo serializziamo.
  try { return String(v); } catch { return ''; }
}

function pulisci(v, predefinito) {
  const s = stringa(v).trim();
  return s || predefinito;
}

export function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
