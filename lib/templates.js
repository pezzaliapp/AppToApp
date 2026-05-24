/* ==========================================================================
   lib/templates.js · Registro dei template di partenza
   Ogni template offre un "promptExtra" che orienta la generazione.
   I template "ai-libera" non aggiungono vincoli: massima libertà al modello.
   ========================================================================== */

export const TEMPLATES = [
  {
    id: 'ai-libera',
    nome: 'AI libera',
    icona: '✨',
    descrizione: 'Nessun vincolo: descrivi tu tutto.',
    promptExtra: ''
  },
  {
    id: 'calculator',
    nome: 'Calcolatrice',
    icona: '🧮',
    descrizione: 'Calcoli e conversioni.',
    promptExtra:
      'una calcolatrice con tastierino numerico, operazioni di base e visualizzazione chiara del risultato.'
  },
  {
    id: 'todo',
    nome: 'Lista cose da fare',
    icona: '✅',
    descrizione: 'To-do con salvataggio locale.',
    promptExtra:
      'una to-do list per aggiungere, completare ed eliminare attività, con salvataggio in localStorage.'
  },
  {
    id: 'pomodoro-timer',
    nome: 'Timer Pomodoro',
    icona: '🍅',
    descrizione: 'Cicli di lavoro e pausa.',
    promptExtra:
      'un timer Pomodoro con conto alla rovescia, cicli lavoro/pausa configurabili e un segnale acustico a fine sessione.'
  },
  {
    id: 'landing-page',
    nome: 'Landing page',
    icona: '🚀',
    descrizione: 'Pagina di presentazione.',
    promptExtra:
      'una landing page con sezione hero, elenco vantaggi, call-to-action e un form contatti (solo lato client).'
  },
  {
    id: 'dashboard',
    nome: 'Dashboard',
    icona: '📊',
    descrizione: 'Pannello con metriche.',
    promptExtra:
      'una dashboard con schede di metriche, una tabella di dati di esempio e grafici disegnati con canvas o SVG (senza librerie).'
  }
];

// Restituisce un template per id (o "AI libera" se non trovato).
export function templatePerId(id) {
  return TEMPLATES.find((t) => t.id === id) || TEMPLATES[0];
}
