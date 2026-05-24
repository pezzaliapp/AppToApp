/* ==========================================================================
   app.js · Stato e logica dell'interfaccia (Alpine.js)
   Carica Alpine da CDN in modo deterministico: prima registriamo il
   componente sull'evento `alpine:init`, poi iniettiamo lo script di Alpine.
   Così evitiamo qualsiasi race condition all'avvio.
   ========================================================================== */

import { PROVIDER, leggiConfig, salvaConfig, configDefault } from './lib/llm.js';
import { generaApp, assemblaAnteprima } from './lib/generator.js';
import { esportaZip } from './lib/exporter.js';
import { TEMPLATES, templatePerId } from './lib/templates.js';
import { salvaApp, elencoApp, eliminaApp, svuotaCronologia } from './lib/storage.js';

const URL_ALPINE = 'https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js';
const FLAG_ONBOARDING = 'apptoapp:onboarding-visto';

// Frasi d'esempio mostrate sotto il pulsante "Genera".
const ESEMPI = [
  'una calcolatrice per percentuali',
  'un timer Pomodoro con suoni',
  'una landing page per officina meccanica con form contatti'
];

// Factory del componente Alpine.
function creaApp() {
  return {
    /* ---- Stato: navigazione ---- */
    schermata: 'genera',
    onboardingVisibile: false,
    guidaPagesVisibile: false,

    /* ---- Stato: template e input ---- */
    templates: TEMPLATES,
    templateSelezionato: 'ai-libera',
    esempi: ESEMPI,
    prompt: '',

    /* ---- Stato: generazione ---- */
    inGenerazione: false,
    errore: '',
    appCorrente: null,
    srcAnteprima: '',
    tabEditor: 'html',
    modificaCodice: false,

    /* ---- Stato: configurazione ---- */
    PROVIDER,
    providerKeys: Object.keys(PROVIDER),
    config: leggiConfig(),
    configSalvata: false,

    /* ---- Stato: cronologia ---- */
    cronologia: [],

    /* ---- Avvio ---- */
    init() {
      // Mostra l'onboarding solo se non c'è una chiave e non è già stato visto.
      if (!this.config.chiave && !localStorage.getItem(FLAG_ONBOARDING)) {
        this.onboardingVisibile = true;
      }
      this.caricaCronologia();
      this.registraServiceWorker();
    },

    /* ---- Navigazione ---- */
    vai(schermata) {
      this.schermata = schermata;
      this.errore = '';
      if (schermata === 'cronologia') this.caricaCronologia();
    },

    apriOnboarding() { this.onboardingVisibile = true; },
    chiudiOnboarding() {
      this.onboardingVisibile = false;
      localStorage.setItem(FLAG_ONBOARDING, '1');
    },
    apriGuidaPages() { this.guidaPagesVisibile = true; },

    /* ---- Generazione ---- */
    async genera() {
      const richiesta = this.prompt.trim();
      if (!richiesta) return;

      if (!this.config.chiave) {
        this.apriOnboarding();
        return;
      }

      this.inGenerazione = true;
      this.errore = '';
      try {
        const template = templatePerId(this.templateSelezionato);
        const app = await generaApp({ richiesta, template, config: this.config });
        app.promptOrigine = richiesta;
        this.appCorrente = app;
        this.modificaCodice = false;
        this.tabEditor = 'html';
        this.aggiornaAnteprima();

        // Salva in cronologia e aggiorna l'elenco.
        const voce = await salvaApp(app).catch(() => null);
        if (voce) { this.appCorrente.id = voce.id; this.caricaCronologia(); }
      } catch (e) {
        this.errore = e.message || 'Si è verificato un errore durante la generazione.';
      } finally {
        this.inGenerazione = false;
      }
    },

    // Rigenera con lo stesso prompt d'origine (o quello attuale).
    async rigenera() {
      if (this.appCorrente && this.appCorrente.promptOrigine) {
        this.prompt = this.appCorrente.promptOrigine;
      }
      await this.genera();
    },

    // Ricostruisce l'HTML dell'anteprima dai campi correnti.
    aggiornaAnteprima() {
      if (!this.appCorrente) { this.srcAnteprima = ''; return; }
      this.srcAnteprima = assemblaAnteprima(this.appCorrente);
    },

    /* ---- Editor: evidenziazione con highlight.js ---- */
    codiceEvidenziato() {
      if (!this.appCorrente) return '';
      const codice = this.appCorrente[this.tabEditor] || '';
      const linguaggio = this.tabEditor === 'js' ? 'javascript' : (this.tabEditor === 'css' ? 'css' : 'xml');
      if (window.hljs) {
        try {
          return window.hljs.highlight(codice, { language: linguaggio }).value;
        } catch { /* fallback sotto */ }
      }
      return escapeHtml(codice);
    },

    /* ---- Esportazione ---- */
    async esporta() {
      if (!this.appCorrente) return;
      try {
        await esportaZip(this.appCorrente);
      } catch (e) {
        this.errore = e.message || 'Esportazione non riuscita.';
      }
    },

    /* ---- Impostazioni ---- */
    cambiaProvider(key) {
      this.config.provider = key;
      // Allinea il modello al default del provider scelto.
      this.config.modello = PROVIDER[key].modelloDefault;
    },

    salvaImpostazioni() {
      // Normalizza la temperatura.
      this.config.temperatura = Number(this.config.temperatura);
      salvaConfig(JSON.parse(JSON.stringify(this.config)));
      this.configSalvata = true;
      setTimeout(() => { this.configSalvata = false; }, 2500);
    },

    /* ---- Cronologia ---- */
    async caricaCronologia() {
      try { this.cronologia = await elencoApp(); }
      catch { this.cronologia = []; }
    },

    apriDaCronologia(voce) {
      this.appCorrente = {
        id: voce.id,
        nome: voce.nome,
        descrizione: voce.descrizione,
        html: voce.html,
        css: voce.css,
        js: voce.js,
        promptOrigine: voce.promptOrigine || ''
      };
      this.modificaCodice = false;
      this.tabEditor = 'html';
      this.aggiornaAnteprima();
      this.vai('genera');
    },

    async eliminaVoce(id) {
      await eliminaApp(id).catch(() => {});
      this.caricaCronologia();
    },

    async svuotaTutto() {
      if (!confirm('Eliminare tutte le app dalla cronologia? L\'operazione non è reversibile.')) return;
      await svuotaCronologia().catch(() => {});
      this.caricaCronologia();
    },

    /* ---- Utilità ---- */
    formattaData(ts) {
      try {
        return new Date(ts).toLocaleString('it-IT', {
          day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
        });
      } catch { return ''; }
    },

    registraServiceWorker() {
      if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('sw.js').catch(() => { /* non bloccante */ });
        });
      }
    }
  };
}

// Piccola utilità di escaping (usata come fallback per l'editor).
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* --------------------------------------------------------------------------
   Avvio di Alpine in ordine deterministico.
   -------------------------------------------------------------------------- */
document.addEventListener('alpine:init', () => {
  window.Alpine.data('appToApp', creaApp);
});

// Inietta Alpine DOPO aver registrato il listener: nessuna race condition.
const scriptAlpine = document.createElement('script');
scriptAlpine.src = URL_ALPINE;
scriptAlpine.defer = true;
document.head.appendChild(scriptAlpine);
