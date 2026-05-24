/* ==========================================================================
   lib/templates.js · Registro dei template di partenza
   Ogni template (tranne "AI libera") porta un blocco di "istruzioni" che
   arricchisce in modo forte e specifico il prompt inviato all'LLM.
   "AI libera" non aggiunge vincoli: massima libertà al modello.
   ========================================================================== */

export const TEMPLATES = [
  {
    id: 'ai-libera',
    nome: 'AI libera',
    icona: '✨',
    descrizione: 'Nessun vincolo: descrivi tu tutto.',
    istruzioni: ''
  },
  {
    id: 'calculator',
    nome: 'Calcolatrice',
    icona: '🧮',
    descrizione: 'Calcoli e conversioni.',
    istruzioni:
`L'utente vuole una CALCOLATRICE. Genera un'app di calcolo con:
- layout a griglia tipico: display dei numeri in alto, tastierino sotto
- operazioni: somma, sottrazione, moltiplicazione, divisione e percentuale
- tasti grandi e mobile-friendly, con feedback visivo al tap
- supporto da tastiera fisica e gestione degli errori (es. divisione per zero)
- dark mode coerente`
  },
  {
    id: 'todo',
    nome: 'Lista cose da fare',
    icona: '✅',
    descrizione: 'To-do con salvataggio locale.',
    istruzioni:
`L'utente vuole una LISTA DI COSE DA FARE (to-do). Genera un'app con:
- campo di input per aggiungere una nuova attività
- elenco delle attività con possibilità di completarle ed eliminarle
- contatore delle attività rimanenti
- salvataggio persistente in localStorage
- stato vuoto curato quando non ci sono attività
- dark mode coerente`
  },
  {
    id: 'pomodoro-timer',
    nome: 'Timer Pomodoro',
    icona: '🍅',
    descrizione: 'Cicli di lavoro e pausa.',
    istruzioni:
`L'utente vuole un TIMER POMODORO. Genera un'app con:
- conto alla rovescia ben visibile (formato mm:ss) con avvio, pausa e reset
- cicli configurabili di lavoro e pausa (durate impostabili)
- indicatore chiaro della fase corrente (lavoro/pausa) e del numero di ciclo
- un segnale acustico a fine sessione usando la Web Audio API (nessun file esterno)
- dark mode coerente`
  },
  {
    id: 'landing-page',
    nome: 'Landing page',
    icona: '🚀',
    descrizione: 'Pagina di presentazione.',
    istruzioni:
`L'utente vuole una LANDING PAGE (ottima per officine e PMI). Genera una pagina con:
- sezione hero con titolo forte, sottotitolo e call-to-action
- sezione servizi/offerta con schede
- elenco dei punti di forza ("perché sceglierci")
- un form contatti funzionante SOLO lato client (nessun invio a server), con messaggio di conferma a video
- navigazione e footer con i recapiti
- dark mode coerente e layout responsive`
  },
  {
    id: 'dashboard',
    nome: 'Dashboard',
    icona: '📊',
    descrizione: 'Pannello con metriche.',
    istruzioni:
`L'utente vuole una DASHBOARD. Genera un pannello con:
- schede KPI in alto, ciascuna con valore e variazione (trend in su/giù)
- un grafico semplice disegnato con canvas o SVG (NESSUNA libreria esterna)
- una tabella di dati di esempio realistici con stati/etichette
- un selettore di periodo o un filtro
- dark mode coerente e layout responsive`
  }
];

// Restituisce un template per id (o "AI libera" se non trovato).
export function templatePerId(id) {
  return TEMPLATES.find((t) => t.id === id) || TEMPLATES[0];
}

/**
 * Costruisce la richiesta da inviare all'LLM combinando le istruzioni del
 * template selezionato con la descrizione libera dell'utente.
 * Con "AI libera" (o template senza istruzioni) restituisce il solo testo utente.
 * @param {Object} template  Il template selezionato.
 * @param {string} testoUtente  La descrizione scritta dall'utente.
 * @returns {string}
 */
export function costruisciPromptUtente(template, testoUtente) {
  const t = (testoUtente || '').trim();
  if (!template || template.id === 'ai-libera' || !template.istruzioni) {
    return t;
  }
  return `${template.istruzioni}\n\nAdatta l'app alla descrizione specifica dell'utente: "${t}"`;
}
