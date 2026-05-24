# AppToApp

> Trasforma una frase in un'app web vera. Gratis, per sempre.

**AppToApp** è un generatore di applicazioni web che funziona nel tuo browser. 
Descrivi a parole l'app che vuoi e ottieni codice HTML/CSS/JS pronto da usare, 
scaricare e pubblicare. Nessun abbonamento, nessun backend, nessun costo.

🌐 **Provala subito:** https://pezzaliapp.github.io/AppToApp/

## ✨ Caratteristiche

- **Costo zero, per sempre.** Usi la tua chiave gratuita di Google Gemini, 
  Groq o OpenRouter. La chiave resta nel tuo browser, mai sui nostri server 
  (non abbiamo server).
- **Funziona offline dopo l'export.** Ogni app generata è scaricabile come 
  .zip standalone, eseguibile aprendo `index.html` senza internet.
- **PWA installabile.** Aggiungi AppToApp alla Home del telefono o al Dock 
  del Mac. Funziona come app nativa.
- **6 template pronti.** Calcolatrice, To-do, Timer Pomodoro, Landing page, 
  Dashboard, oppure AI libera per partire da zero.
- **Anteprima live.** Vedi subito l'app generata in un iframe sicuro. 
  Esporta, rigenera, modifica.
- **Open source MIT.** Il codice è tuo. Forkalo, modificalo, vendilo.

## 🚀 Come iniziare in 60 secondi

1. Apri https://pezzaliapp.github.io/AppToApp/
2. Vai su **Impostazioni** → incolla una chiave API gratuita
3. Torna su **Genera** → descrivi l'app che vuoi
4. Premi **Genera app** → in 10-20 secondi hai la tua app

### Dove prendere una chiave gratuita

| Provider | Limite gratuito | Velocità | Link |
|----------|-----------------|----------|------|
| **Groq** ⭐ consigliato | Generoso, mai esaurito in uso normale | Velocissimo | https://console.groq.com/keys |
| **Google Gemini** | 1.500 richieste/giorno | Medio | https://aistudio.google.com/apikey |
| **OpenRouter** | Modelli `:free` vari | Variabile | https://openrouter.ai/keys |

Nessun provider richiede carta di credito.

## 📦 Cosa puoi fare con un'app generata

### A) Provarla nell'anteprima
L'anteprima live nel riquadro sinistro è interattiva. Clicca, digita, prova.

### B) Scaricarla e usarla offline
1. Premi **📦 Esporta .zip**
2. Apri il file zip scaricato (doppio click)
3. Dentro la cartella estratta, doppio click su `index.html`
4. L'app si apre nel browser e funziona offline, senza internet
5. Puoi spostarla su chiavetta USB, Dropbox, mandarla via email

### C) Pubblicarla online gratis su GitHub Pages
1. Premi **🚀 Pubblica** in AppToApp per leggere le istruzioni
2. Crea un account gratuito su https://github.com
3. Crea una nuova repository (es: `mia-app`)
4. Carica i file della cartella estratta dallo zip
5. Vai su **Settings → Pages → Source: main branch → root → Save**
6. In 1-2 minuti la tua app è online su 
   `https://tuonome.github.io/mia-app/`
7. Condividi il link con chiunque. Gratis, senza scadenza.

## 💡 24 prompt di esempio testati

Vedi il file [docs/ESEMPI.md](docs/ESEMPI.md) per 24 prompt pronti, 
divisi per categoria, che producono app funzionanti.

I migliori per iniziare:
- 🧮 **Calcolatore percentuali** — sconti, IVA, variazioni
- ⏱️ **Timer Pomodoro** — cicli lavoro/pausa con suono
- 🎮 **Tennis Pong** — gioco classico canvas
- 🏪 **Preventivo officina** — manodopera + ricambi + IVA
- 📊 **Pomodoro tasks** — task di oggi con cicli Pomodoro
- 🍴 **Lista spesa intelligente** — con categorie e WhatsApp export

## 🛡️ Privacy e sicurezza

- La tua chiave API resta nel `localStorage` del tuo browser. Mai inviata 
  a server di AppToApp (non esistono).
- Le chiamate ai modelli AI vanno direttamente dal tuo browser al provider 
  che hai scelto.
- L'anteprima delle app generate gira in `iframe sandbox`, isolata dalla 
  pagina principale.
- L'output dei modelli viene validato prima di essere mostrato.

## 🧰 Tecnologie

HTML5, CSS3, JavaScript vanilla, Alpine.js per la reattività, JSZip per 
l'export, IndexedDB per la cronologia. Nessun framework pesante. 
Codice leggibile da un umano, commentato in italiano.

## 🤝 Contribuire

Le issue e le pull request sono benvenute. 
Per segnalazioni: https://github.com/pezzaliapp/AppToApp/issues

## 📜 Licenza

MIT © 2026 pezzaliAPP / Alessandro Pezzali

---

**AppToApp** è un progetto open source di **pezzaliAPP**. 
Scopri altri progetti su https://www.alessandropezzali.it
