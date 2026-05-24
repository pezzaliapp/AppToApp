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
import { ESEMPI as PROMPT_ESEMPI, CATEGORIE as CATEGORIE_ESEMPI } from './lib/esempi.js';
import { salvaApp, elencoApp, eliminaApp, svuotaCronologia } from './lib/storage.js';

// Domande frequenti mostrate nella schermata "Esempi".
const FAQ = [
  { d: 'Quale provider conviene per iniziare?', r: 'Groq, gratis e velocissimo. Crea una chiave su console.groq.com/keys (no carta richiesta).' },
  { d: 'Quanto mi costa usare AppToApp?', r: 'Zero. Sempre. La chiave API che usi è gratuita dai provider supportati.' },
  { d: 'Gli esempi mostrati funzionano sempre?', r: 'Sì. Mostriamo solo esempi che producono app funzionanti con i modelli AI gratuiti supportati. Se aggiungiamo nuovi esempi più ambiziosi in futuro, saranno chiaramente marcati come "sperimentali" per gestire le aspettative.' },
  { d: 'Posso vendere le app che genero?', r: 'Sì, sono completamente tue. Licenza MIT su tutto il codice generato.' },
  { d: 'Le app funzionano offline?', r: 'Sì. Dopo aver esportato lo zip, l\'app gira aprendo index.html senza internet.' },
  { d: 'Cosa succede se l\'output ha bug?', r: 'Premi Rigenera, oppure scrivi un prompt più dettagliato. Vedi i suggerimenti in fondo.' },
  { d: 'Posso modificare il codice generato?', r: 'Certo. Apri i file nel tuo editor preferito (VS Code, Sublime, anche TextEdit).' }
];

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

    /* ---- Stato: schermata Esempi ---- */
    esempiPrompt: PROMPT_ESEMPI,
    categorieEsempi: CATEGORIE_ESEMPI,
    categoriaEsempi: 'tutti',
    faq: FAQ,
    guidaAperta: null,        // id della card "Come usare" con accordion aperto
    faqAperta: null,          // indice della FAQ aperta
    promptEvidenziato: false, // flash della textarea dopo "Usa questo prompt"

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

    /* ---- Template di partenza ---- */
    // Unico punto che scrive lo stato del template selezionato: lo stesso nome
    // (templateSelezionato) è dichiarato nello stato iniziale, letto da :class
    // per evidenziare il riquadro e da genera()/generaApp() per arricchire il prompt.
    selezionaTemplate(id) {
      this.templateSelezionato = id;
      console.log('[AppToApp] Template cliccato:', id, 'Stato dopo click:', this.templateSelezionato);
    },

    /* ---- Schermata Esempi ---- */
    // Esempi visibili in base alla categoria selezionata ("tutti" non filtra).
    esempiFiltrati() {
      if (this.categoriaEsempi === 'tutti') return this.esempiPrompt;
      return this.esempiPrompt.filter((e) => e.categoria === this.categoriaEsempi);
    },
    filtraEsempi(cat) { this.categoriaEsempi = cat; },

    // Accordion: una sola card "Come usare" aperta per volta; idem per le FAQ.
    togglaGuida(id) { this.guidaAperta = this.guidaAperta === id ? null : id; },
    togglaFaq(i) { this.faqAperta = this.faqAperta === i ? null : i; },

    // Preview di 2 righe del prompt per la card (testo compatto, con ellissi).
    anteprimaPrompt(testo, righe = 2) {
      const linee = String(testo || '').split('\n').map((l) => l.trim()).filter(Boolean);
      let estratto = linee.slice(0, righe).join(' ');
      if (estratto.length > 130) estratto = estratto.slice(0, 130).trimEnd();
      return estratto + (linee.length > righe || estratto.length >= 130 ? '…' : '');
    },

    // "Usa questo prompt": va su Genera, imposta AI libera, precompila il campo
    // e lo evidenzia (scroll + focus + flash). NON avvia la generazione.
    usaPrompt(testo) {
      this.templateSelezionato = 'ai-libera';
      this.prompt = testo;
      this.vai('genera');
      this.$nextTick(() => {
        const ta = document.getElementById('prompt');
        if (!ta) return;
        ta.scrollIntoView({ behavior: 'smooth', block: 'center' });
        ta.focus();
        ta.setSelectionRange(ta.value.length, ta.value.length);
        this.promptEvidenziato = true;
        setTimeout(() => { this.promptEvidenziato = false; }, 1500);
      });
    },

    /* ---- Generazione ---- */
    async genera() {
      console.log('[AppToApp] Generazione avviata. Template attivo:', this.templateSelezionato);
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
