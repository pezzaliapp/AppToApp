/* ==========================================================================
   lib/generator.js · Orchestratore della generazione
   - Costruisce il prompt di sistema curato.
   - Chiama l'LLM.
   - Valida e normalizza l'output JSON (try/catch).
   - Assembla il documento per l'anteprima (tutto inline, sandbox-safe).
   ========================================================================== */

import { chiamaLLM } from './llm.js';

/* --------------------------------------------------------------------------
   PROMPT DI SISTEMA
   Curato per ottenere SOLO JSON valido, app standalone, accessibili e dark.
   -------------------------------------------------------------------------- */
export const PROMPT_SISTEMA = `Sei un generatore esperto di applicazioni web. Produci app COMPLETE, eleganti e funzionanti.

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

  const grezzo = await chiamaLLM({ prompt, sistema: PROMPT_SISTEMA, config });
  return analizzaRisposta(grezzo);
}

/**
 * Valida e normalizza la risposta grezza del modello.
 * @param {string} grezzo
 * @returns {Object} app normalizzata
 */
export function analizzaRisposta(grezzo) {
  const json = estraiJSON(grezzo);

  let dati;
  try {
    dati = JSON.parse(json);
  } catch (e) {
    throw new Error(
      'Il modello non ha restituito un JSON valido. Riprova: spesso basta premere "Rigenera". ' +
      '(Suggerimento: i modelli più piccoli sbagliano più spesso il formato.)'
    );
  }

  if (typeof dati !== 'object' || dati === null || Array.isArray(dati)) {
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

// Estrae il blocco JSON anche se il modello ha aggiunto fence o testo.
function estraiJSON(testo) {
  let t = String(testo || '').trim();

  // Rimuove eventuali recinti markdown ```json ... ```
  t = t.replace(/^```(?:json|javascript)?\s*/i, '').replace(/\s*```$/i, '').trim();

  // Prende dal primo "{" all'ultimo "}".
  const inizio = t.indexOf('{');
  const fine = t.lastIndexOf('}');
  if (inizio !== -1 && fine !== -1 && fine > inizio) {
    return t.slice(inizio, fine + 1);
  }
  return t;
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
