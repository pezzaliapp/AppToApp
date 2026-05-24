<div align="center">

# A → A · AppToApp

**La meta-app che trasforma una frase in un'app web completa.**

Descrivi cosa vuoi → premi *Genera* → ottieni una web app pronta, elegante,
installabile come PWA e scaricabile in `.zip`. Tutto nel browser, **a costo zero**.

`HTML + CSS + JS vanilla` · `Alpine.js` · `PWA` · `Nessun backend`

</div>

---

## 💸 Costo: € 0, sempre

AppToApp non genera **nessun costo** né per chi la sviluppa né per chi la usa:

- Nessun server proprietario: gira **interamente nel browser**.
- Usa di default le API **gratuite** di Google AI Studio (Gemini 2.5 Flash):
  1.500 richieste/giorno, 1M token/min, **nessuna carta di credito richiesta**.
- La tua chiave API resta **solo nel tuo browser** (`localStorage`): non viene mai
  inviata a server di AppToApp, non finisce mai nel repository, mai negli URL.

## 🔑 Come ottenere gratis una chiave Gemini (3 click)

1. Apri **[aistudio.google.com/apikey](https://aistudio.google.com/apikey)**
2. Accedi con il tuo account Google e premi **"Create API key"**
3. Copia la chiave e incollala in **AppToApp → Impostazioni**

Fatto. Nessun pagamento, nessun abbonamento.

### Provider alternativi (opzionali)

Dalle Impostazioni puoi scegliere un altro provider gratuito:

| Provider | Modello consigliato | Chiave |
|---|---|---|
| **Google Gemini** *(default)* | `gemini-2.5-flash` | [aistudio.google.com/apikey](https://aistudio.google.com/apikey) |
| **Groq** | `llama-3.3-70b-versatile` | [console.groq.com/keys](https://console.groq.com/keys) |
| **OpenRouter** | `deepseek/deepseek-r1:free` | [openrouter.ai/keys](https://openrouter.ai/keys) |

## ✨ Funzionalità

- 📝 Input testuale: descrivi l'app che vuoi.
- 🧩 Template di partenza (calcolatrice, to-do, timer Pomodoro…) o **AI libera**.
- ⚡ Generazione one-shot → JSON `{nome, descrizione, html, css, js, manifest}`.
- 👀 Anteprima live in `iframe` **sandboxed** (`allow-scripts`, mai `allow-same-origin`).
- ✏️ Editor laterale con evidenziazione sintassi (highlight.js) e modifica live.
- 📦 **Esporta `.zip`**: file statici, si apre con doppio click su `index.html`.
- 🚀 Istruzioni guidate per **pubblicare su GitHub Pages**.
- 🕘 Cronologia delle app generate (IndexedDB, sul tuo dispositivo).
- ⚙️ Impostazioni: provider, chiave, modello, temperatura.

## 🏗️ Architettura

Frontend puro, zero build, zero dipendenze installate. Tutto da CDN.

```
/index.html          Shell PWA + interfaccia
/app.js              Stato e logica UI (Alpine.js)
/styles.css          Stile globale (dark, minimale)
/manifest.json       Manifest PWA
/sw.js               Service worker (offline shell)
/lib/
  llm.js             Adattatore multi-provider (Gemini / Groq / OpenRouter)
  generator.js       Orchestratore + prompt di sistema curato
  exporter.js        Impacchettamento .zip (JSZip da CDN)
  templates.js       Registro template
  storage.js         Wrapper IndexedDB (cronologia)
/templates/          App di esempio standalone (calculator, todo, pomodoro-timer)
/assets/icons/       Icone PWA (192, 512, maskable)
```

## 🚀 Avvio locale

Nessuna installazione. Serve solo un server statico (per il service worker e i moduli ES):

```bash
cd AppToApp
python3 -m http.server 8000
# apri http://localhost:8000
```

## 📸 Screenshot

> _Placeholder — sostituire con screenshot reali._

| Generazione | Anteprima + editor | Impostazioni |
|---|---|---|
| ![Genera](assets/screenshot-genera.png) | ![Anteprima](assets/screenshot-anteprima.png) | ![Impostazioni](assets/screenshot-impostazioni.png) |

## 🔒 Sicurezza e privacy

- La chiave API resta **nel tuo browser**, mai su server di AppToApp.
- L'anteprima gira in un `iframe` **sandboxed** senza accesso all'origine.
- L'output del modello viene **validato** (JSON `try/catch`) prima del rendering.

## 🗺️ Roadmap

- [ ] Generazione multi-file più ricca (più pagine, routing client-side).
- [ ] Galleria template ampliata (dashboard, landing, kanban, quiz…).
- [ ] Esportazione diretta su GitHub Pages via OAuth device-flow (opzionale).
- [ ] Modalità "rifinisci": prompt iterativi sulla stessa app.
- [ ] Temi chiari/scuri per le app generate.
- [ ] Import/export della cronologia.

## 📄 Licenza

[MIT](LICENSE) © 2026 **pezzaliAPP / Alessandro Pezzali**
