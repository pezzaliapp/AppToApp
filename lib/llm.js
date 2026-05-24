/* ==========================================================================
   lib/llm.js · Adattatore LLM multi-provider
   Espone un'interfaccia unificata `chiamaLLM({prompt, sistema, config})` che
   nasconde le differenze tra Gemini, Groq e OpenRouter.

   PRIVACY: la chiave API viene letta da localStorage e usata SOLO per la
   chiamata diretta dal browser al provider. Non passa mai da server di
   AppToApp e non viene mai inserita nell'URL.
   ========================================================================== */

// Chiave usata in localStorage per salvare le impostazioni dell'utente.
export const CHIAVE_STORAGE = 'apptoapp:config';

// Registro dei provider supportati (tutti con piano gratuito).
export const PROVIDER = {
  gemini: {
    nome: 'Google Gemini 2.5 Flash',
    descrizione: '1.500 richieste/giorno gratis, nessuna carta richiesta.',
    modelloDefault: 'gemini-2.5-flash',
    modelli: ['gemini-2.5-flash', 'gemini-2.5-flash-lite', 'gemini-2.0-flash'],
    linkChiave: 'https://aistudio.google.com/apikey',
    // L'endpoint dipende dal modello scelto.
    endpoint: (modello) =>
      `https://generativelanguage.googleapis.com/v1beta/models/${modello}:generateContent`
  },
  groq: {
    nome: 'Groq · Llama 3.3 70B',
    descrizione: 'Velocissimo, free tier generoso.',
    modelloDefault: 'llama-3.3-70b-versatile',
    modelli: ['llama-3.3-70b-versatile', 'llama-3.1-8b-instant'],
    linkChiave: 'https://console.groq.com/keys',
    endpoint: () => 'https://api.groq.com/openai/v1/chat/completions'
  },
  openrouter: {
    nome: 'OpenRouter · modelli :free',
    descrizione: 'Tanti modelli gratuiti (suffisso :free).',
    modelloDefault: 'deepseek/deepseek-r1:free',
    modelli: [
      'deepseek/deepseek-r1:free',
      'meta-llama/llama-4-maverick:free',
      'google/gemini-2.0-flash-exp:free'
    ],
    linkChiave: 'https://openrouter.ai/keys',
    endpoint: () => 'https://openrouter.ai/api/v1/chat/completions'
  }
};

// Configurazione di default: Gemini gratuito.
export function configDefault() {
  return {
    provider: 'gemini',
    chiave: '',
    modello: 'gemini-2.5-flash',
    temperatura: 0.7
  };
}

// Legge la configurazione salvata, con fallback ai valori di default.
export function leggiConfig() {
  const base = configDefault();
  try {
    const raw = localStorage.getItem(CHIAVE_STORAGE);
    if (!raw) return base;
    return { ...base, ...JSON.parse(raw) };
  } catch {
    return base;
  }
}

// Salva la configurazione (chiave inclusa) SOLO nel browser.
export function salvaConfig(config) {
  try {
    localStorage.setItem(CHIAVE_STORAGE, JSON.stringify(config));
    return true;
  } catch {
    return false;
  }
}

const TIMEOUT_MS = 60000; // 60 secondi

/**
 * Interfaccia unificata. Restituisce SEMPRE una stringa di testo normalizzata.
 * @param {Object} opzioni
 * @param {string} opzioni.prompt   Messaggio utente.
 * @param {string} [opzioni.sistema] Istruzione di sistema.
 * @param {Object} [opzioni.config] Config esplicita (altrimenti letta da storage).
 * @param {boolean} [opzioni.json] Se true, attiva il "JSON mode" nativo del provider.
 * @returns {Promise<string>}
 */
export async function chiamaLLM({ prompt, sistema, config, json } = {}) {
  const cfg = config || leggiConfig();

  if (!PROVIDER[cfg.provider]) {
    throw new Error(`Provider sconosciuto: "${cfg.provider}".`);
  }
  if (!cfg.chiave || !cfg.chiave.trim()) {
    throw new Error(
      'Nessuna chiave API configurata. Apri le Impostazioni e incolla la tua chiave gratuita.'
    );
  }

  // Timeout di 60 secondi tramite AbortController.
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    if (cfg.provider === 'gemini') {
      return await chiamaGemini(prompt, sistema, cfg, controller.signal, json);
    }
    // Groq e OpenRouter condividono il formato OpenAI.
    return await chiamaOpenAICompat(prompt, sistema, cfg, controller.signal, json);
  } catch (errore) {
    if (errore.name === 'AbortError') {
      throw new Error(
        'Tempo scaduto (60s): il modello non ha risposto. Riprova o cambia provider nelle Impostazioni.'
      );
    }
    throw errore;
  } finally {
    clearTimeout(timer);
  }
}

/* ---- Implementazione Gemini -------------------------------------------- */
async function chiamaGemini(prompt, sistema, cfg, signal, json) {
  const modello = cfg.modello || PROVIDER.gemini.modelloDefault;
  const url = PROVIDER.gemini.endpoint(modello);

  // Corpo base, senza generationConfig (usato anche come fallback "minimale").
  const corpoBase = { contents: [{ role: 'user', parts: [{ text: prompt }] }] };
  if (sistema) corpoBase.systemInstruction = { parts: [{ text: sistema }] };

  // generationConfig "ricca" per il primo tentativo.
  const generationConfig = {
    temperature: numero(cfg.temperatura, 0.7),
    maxOutputTokens: 8192
  };
  if (json) {
    // JSON mode nativo: forza un JSON valido e ben escapato.
    generationConfig.responseMimeType = 'application/json';
    // IMPORTANTE: Gemini 2.5 attiva il "thinking" di default e i token di
    // ragionamento consumano maxOutputTokens, troncando il JSON (causa tipica
    // del fallimento SOLO su Gemini). Lo disattiviamo.
    generationConfig.thinkingConfig = { thinkingBudget: 0 };
  }

  // Primo tentativo: con generationConfig.
  let res = await fetchGemini(url, cfg.chiave, { ...corpoBase, generationConfig }, signal);

  // Fallback: se è proprio la generationConfig a essere rifiutata (400 che cita
  // responseMimeType/responseSchema/thinkingConfig/generationConfig), riprova
  // senza di essa e affidati al sanitizzatore.
  if (res.status === 400 && /responseMimeType|responseSchema|thinkingConfig|generationConfig/i.test(res.bodyText)) {
    console.error('[AppToApp] Gemini: generationConfig rifiutata (400). Riprovo SENZA generationConfig, affidandomi al sanitizzatore.');
    res = await fetchGemini(url, cfg.chiave, corpoBase, signal);
  }

  if (!res.ok) {
    const dettaglio = res.dati?.error?.message || (res.bodyText || '').slice(0, 300);
    throw erroreHTTP(res.status, dettaglio);
  }

  // Gemini può restituire più parti: le concateniamo.
  const parti = res.dati?.candidates?.[0]?.content?.parts || [];
  const testo = parti.map((p) => p.text || '').join('').trim();

  if (!testo) {
    const motivo = res.dati?.candidates?.[0]?.finishReason;
    if (motivo === 'SAFETY') {
      throw new Error('Il modello ha bloccato la risposta per motivi di sicurezza. Riformula la richiesta.');
    }
    if (motivo === 'MAX_TOKENS') {
      throw new Error('Gemini ha esaurito il budget di output prima di completare il JSON. Riprova con una richiesta più breve.');
    }
    throw new Error('Risposta vuota da Gemini. Riprova.');
  }
  return testo;
}

/**
 * Esegue una chiamata a Gemini e logga SEMPRE status e body (diagnostica).
 * @returns {{status:number, ok:boolean, dati:Object|null, bodyText:string}}
 */
async function fetchGemini(url, chiave, corpo, signal) {
  // La chiave viaggia nell'header, MAI nell'URL.
  const risposta = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': chiave },
    body: JSON.stringify(corpo),
    signal
  });

  const bodyText = await risposta.text();

  // Logging diagnostico sempre attivo.
  console.error(`[AppToApp] Gemini HTTP status: ${risposta.status}, body: ${bodyText.slice(0, 600)}`);
  console.log('[AppToApp] Gemini body (prima riga):', (bodyText.split('\n')[0] || '').slice(0, 200));

  let dati = null;
  try { dati = JSON.parse(bodyText); } catch { /* body non JSON */ }

  return { status: risposta.status, ok: risposta.ok, dati, bodyText };
}

/* ---- Implementazione formato OpenAI (Groq, OpenRouter) ------------------ */
async function chiamaOpenAICompat(prompt, sistema, cfg, signal, json) {
  const def = PROVIDER[cfg.provider];
  const url = def.endpoint();

  const messaggi = [];
  if (sistema) messaggi.push({ role: 'system', content: sistema });
  messaggi.push({ role: 'user', content: prompt });

  const corpo = {
    model: cfg.modello || def.modelloDefault,
    messages: messaggi,
    temperature: numero(cfg.temperatura, 0.7)
  };
  // JSON mode nativo (formato OpenAI): la maggior parte dei modelli lo onora.
  if (json) corpo.response_format = { type: 'json_object' };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${cfg.chiave}`
  };
  // OpenRouter consiglia questi header identificativi (facoltativi).
  if (cfg.provider === 'openrouter') {
    headers['HTTP-Referer'] = location.origin;
    headers['X-Title'] = 'AppToApp';
  }

  const risposta = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(corpo),
    signal
  });

  await verificaErrori(risposta);
  const dati = await risposta.json();

  const testo = (dati?.choices?.[0]?.message?.content || '').trim();
  if (!testo) throw new Error('Risposta vuota dal modello. Riprova.');
  return testo;
}

/* ---- Gestione errori HTTP comune --------------------------------------- */

// Costruisce l'Error giusto a partire da status + dettaglio (riusabile).
function erroreHTTP(status, dettaglio) {
  if (status === 429) {
    return new Error(
      'Limite di richieste raggiunto (429). Con Gemini gratuito hai 1.500 richieste/giorno: ' +
      'attendi qualche istante e riprova, oppure cambia provider nelle Impostazioni.'
    );
  }
  if (status === 401 || status === 403) {
    return new Error('Chiave API non valida o non autorizzata. Controlla la chiave nelle Impostazioni.');
  }
  if (status === 400) {
    return new Error(`Richiesta rifiutata dal provider (400). ${dettaglio || 'Verifica il modello selezionato.'}`);
  }
  return new Error(`Errore dal provider (${status}). ${dettaglio}`.trim());
}

async function verificaErrori(risposta) {
  if (risposta.ok) return;

  let dettaglio = '';
  try {
    const j = await risposta.json();
    dettaglio = j?.error?.message || j?.message || '';
  } catch {
    /* corpo non JSON: ignora */
  }
  throw erroreHTTP(risposta.status, dettaglio);
}

/* ---- Utilità ------------------------------------------------------------ */
function numero(valore, predefinito) {
  const n = Number(valore);
  return Number.isFinite(n) ? n : predefinito;
}
