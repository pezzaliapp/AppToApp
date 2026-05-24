# 💡 30 prompt di esempio testati

Tutti i prompt qui sotto sono testati con Groq (Llama 3.3 70B) e funzionano.
Per usarli: vai su AppToApp, lascia selezionato "AI libera" (o usa il
template più adatto), copia il prompt, premi "Genera app".

## 🗂️ Categorie

- **🎮 Giochi e simulatori** — esempi 1-5
- **🧮 Calcolatori utili** — esempi 6-10
- **⏱️ Timer e contatori** — esempi 11-14
- **🏪 Per artigiani e PMI** — esempi 15-19
- **🍴 Cucina e casa** — esempi 20-23
- **📊 Produttività e pratiche** — esempi 24-27
- **🎨 Gadget creativi** — esempi 28-30

_30 esempi in 7 categorie; conteggi invariati dopo l'audit di accessibilità._

## 📐 Regole grafiche applicate a tutti gli esempi

Tutti i 30 prompt qui sotto includono automaticamente queste regole in coda.
Non devi copiarle, sono già nel testo che incolli in AppToApp.

```
REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

---

## 🎮 Giochi e simulatori

### 1. Tennis Score Tracker

```
Un contatore di punteggio tennis per due giocatori.
Pulsanti per assegnare punti seguendo il punteggio reale (0, 15, 30, 40,
gioco, set, match). Mostra set vinti per ciascuno. Pulsante reset partita.
Salvataggio automatico in localStorage. Dark mode con il verde usato solo
come accento (non come sfondo del testo).

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

### 2. Tennis Pong giocabile

```
Mini gioco stile Pong su canvas HTML5, responsive (scala alla larghezza
dello schermo mantenendo le proporzioni ~16:10, riferimento 800x500 pixel).
Due racchette bianche verticali ai lati. Pallina che rimbalza.

Racchetta sinistra: tasto W (su) e S (giù)
Racchetta destra: freccia su e freccia giù
Controlli touch (OLTRE alla tastiera): un tap a sinistra o a destra del
canvas muove la rispettiva racchetta verso il punto toccato; il drag dà
movimento continuo. Mantieni ANCHE i controlli da tastiera.
Limita il movimento dentro il campo (no fuori dai bordi).
Punteggio mostrato in alto al centro del canvas.
NESSUN movimento automatico delle racchette: solo controlli tastiera/touch.
Usa window.addEventListener keydown e keyup, mappa keys con stato true/false,
eventi touchstart/touchmove per il tocco, loop con requestAnimationFrame.
Dark mode.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

### 3. Statistiche partita tennis

```
App per registrare statistiche di una partita di tennis durante il gioco.
Per ogni giocatore registra: ace, doppi falli, prime di servizio %,
vincenti, errori non forzati, palle break vinte.
Pulsanti +/- per ogni voce. Salvataggio in localStorage.
Esporta riepilogo in JSON e testo copiabile. Dark mode sportivo.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

### 4. Generatore dadi RPG

```
Tiradadi virtuale per giochi di ruolo.
Pulsanti per D4, D6, D8, D10, D12, D20, D100.
Mostra risultato grande con animazione di tiro.
Storia ultimi 10 tiri visibile.
Suono di dado che rotola al click (sintetizzato con Web Audio API).
Tema fantasy con colori scuri e accenti dorati (l'oro solo come accento,
non come colore del testo lungo).

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

### 5. Indovina il numero

```
Gioco "indovina il numero" tra 1 e 100.
Il computer pensa un numero, l'utente prova a indovinarlo.
Dopo ogni tentativo dice "troppo alto" o "troppo basso".
Conta i tentativi. Record migliore in localStorage.
Pulsante nuova partita. Dark mode minimal.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

---

## 🧮 Calcolatori utili

### 6. Calcolatore percentuali

```
Calcolatrice di percentuali con 4 modalità in tab:

Percentuale di un numero (es: 22% di 350 = 77)
Sconto su prezzo (prezzo originale - sconto%)
Calcolo IVA 22% (imponibile + IVA)
Variazione percentuale tra due valori
Dark mode con l'arancione usato SOLO come colore di accento (pulsanti CTA,
tab attiva, evidenziazioni), MAI come sfondo principale. Font grande.
Mobile-first.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

### 7. Calcolatore rata mutuo

```
Calcolatore rata mensile mutuo. Input:

Importo capitale €
Tasso annuo %
Durata in anni
Output:
Rata mensile
Interessi totali pagati
Totale rimborsato
Formula: rata = C × (i/12) / (1 - (1 + i/12)^-n)
Mostra tabella primi 12 mesi (quota interessi, quota capitale, residuo).
Su mobile la tabella diventa una lista verticale di card invece di righe con
scroll orizzontale: ogni card mostra etichetta + valore affiancati.
Ricalcola in tempo reale. Dark mode finanziario.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

### 8. Calcolatore consumo carburante

```
Calcolatore consumo medio veicolo. Input:

Km percorsi
Litri consumati
Prezzo al litro €
Output:
Consumo km/litro
Costo per km
Costo per 100 km
Storico ultimi 10 rifornimenti in localStorage con data automatica.
Media consumo storica. Dark mode automotive.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

### 9. Convertitore valute (cambio fisso)

```
Convertitore valute con cambi fissi configurabili dall'utente.
Input: importo + valuta di partenza + valuta di arrivo.
Valute predefinite: EUR, USD, GBP, CHF, JPY.
Cambi modificabili dall'utente, salvati in localStorage.
Conversione in tempo reale. Dark mode pulito.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

### 10. Calcolatore mancia ristorante

```
Calcolatore mancia per ristorante. Input:

Totale conto €
Percentuale mancia (slider 0-25%)
Numero persone
Output:
Importo mancia
Totale con mancia
Totale per persona
Pulsanti rapidi 10%, 15%, 20%. Dark mode elegante.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

---

## ⏱️ Timer e contatori

### 11. Timer Pomodoro classico

```
Timer Pomodoro. Cicli 25 minuti lavoro + 5 minuti pausa.
Dopo 4 cicli completi, pausa lunga 15 minuti.
Display grande mm:ss su sfondo dark mode con testo chiaro (il rosso è solo
un accento, non lo sfondo del display). Pulsanti Start, Pausa, Reset.
Beep sonoro a fine sessione con Web Audio API.
Contatore cicli completati oggi (salvato localStorage).
Dark mode con accento rosso pomodoro.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

### 12. Cronometro con giri

```
Cronometro a tre pulsanti: Start, Stop, Lap, Reset.
Display grande in formato hh:mm:ss.cc.
Lista dei giri con tempo parziale e cumulativo.
Evidenzia il giro più veloce e il più lento usando TESTO colorato (verde e
rosso) su sfondo scuro, non sfondo colorato con testo chiaro.
Salvataggio sessione in localStorage. Dark mode sportivo.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

### 13. Timer HIIT allenamento

```
Timer interval training HIIT. Configurabili:

Durata fase lavoro (default 30 secondi)
Durata fase pausa (default 10 secondi)
Numero round (default 10)
La fase corrente NON colora tutto lo schermo: mostrala in un pannello
centrale su sfondo dark mode standard, con un bordo colorato spesso e
un'icona che identifica la fase:
- Fase lavoro: bordo rosso e icona 🔥
- Fase pausa: bordo verde e icona 🧘
Il timer (mm:ss) è SEMPRE su sfondo dark mode con testo chiaro, grande e
leggibile. Mostra round corrente / round totali.
Beep diversi per inizio/fine fase con Web Audio API.
Pulsanti grandi mobile-friendly (Start, Pausa, Reset). Dark mode fitness.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

### 14. Sveglia personalizzata

```
Sveglia che suona a un'ora impostata. Input ora hh:mm.
Display grande dell'ora corrente in tempo reale.
Quando l'ora arriva, suono ripetuto con Web Audio API e popup.
Pulsante "Snooze" che rinvia di 5 minuti.
Salva ultima sveglia impostata in localStorage. Dark mode notturno.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

---

## 🏪 Per artigiani e PMI

### 15. Preventivo officina semplice

```
Calcolatore preventivo officina meccanica. Dark mode con l'arancione usato
SOLO come colore di accento (pulsanti, riga del TOTALE evidenziata), MAI come
sfondo principale.
Campi input:

Ore lavorazione
Tariffa oraria € (default 55)
Costo ricambi €
Output grande in fondo:
Manodopera = ore × tariffa
Imponibile = manodopera + ricambi
IVA 22%
TOTALE
Ricalcola in tempo reale ad ogni modifica. Font 18px, pulsanti grandi.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

### 16. Checklist tagliando auto

```
Checklist tagliando auto per officina. Voci da controllare:
olio motore, filtro olio, filtro aria, filtro abitacolo, candele,
pastiglie freni anteriori, pastiglie freni posteriori, liquido freni,
batteria, pressione gomme, profondità battistrada, luci, tergicristalli,
liquido refrigerante.
Ogni voce ha 3 stati selezionabili, ciascuno con sfondo pieno e testo bianco
(MAI giallo come sfondo):
- OK: sfondo verde scuro #1b5e20, testo bianco, icona ✅
- Da sostituire: sfondo arancione scuro #e65100, testo bianco, icona ⚠️
- Sostituito: sfondo verde acceso #2e7d32, testo bianco, icona ✓
Campo note (textarea) per ogni voce. Salvataggio in localStorage.
Pulsante stampa per la consegna al cliente. Dark mode officina.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

### 17. Registro presenze cantiere

```
Registro presenze cantiere edile.
Per ogni giornata: data (auto), lista operai con checkbox presenza,
ore lavorate (input number per ciascuno).
Aggiungi/rimuovi operai dinamicamente.
Aggiungi giornate (storico salvato in localStorage).
Totale ore per ciascun operaio nel mese.
Esporta riepilogo in JSON. Dark mode con accento arancione cantiere.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

### 18. Listino prezzi consultabile

```
Listino prezzi dinamico per piccola attività. Aggiungi voci con:
nome prodotto/servizio, categoria, prezzo €, descrizione breve, IVA %.
Ricerca per nome. Filtro per categoria.
Salvataggio in localStorage. Esporta listino in JSON.
Modalità "consultazione cliente" (vista pulita senza pulsanti modifica).
Dark mode professionale.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

### 19. Calcolatore margine

```
Calcolatore margine commerciale. Input:

Costo acquisto €
Prezzo vendita €
Output:
Margine assoluto €
Markup % (margine/costo)
Margine % (margine/prezzo)
Tabella con simulazione vari margini (10%, 20%, 30%, 50%, 100%).
Su mobile la tabella diventa una lista verticale di card invece di righe con
scroll orizzontale: ogni card mostra etichetta + valore affiancati.
Dark mode business.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

---

## 🍴 Cucina e casa

### 20. Lista spesa con categorie

```
Lista della spesa intelligente con categorie:
frutta/verdura, carne/pesce, latticini, pane/pasta, surgelati, bevande,
igiene, casa, altro.
Aggiungi articolo selezionando categoria. Checkbox per spuntare come preso.
Ordina mostrando non presi prima. Salvataggio localStorage.
Pulsante "Copia per WhatsApp" che genera testo lista formattato. Dark mode.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

### 21. Ricettario personale

```
Ricettario digitale personale. Aggiungi ricetta con:
nome, categoria (primi/secondi/dolci/altro),
tempo preparazione minuti, porzioni,
lista ingredienti (textarea uno per riga),
procedimento (textarea).
Ricerca per nome o ingrediente. Filtro per categoria.
Pulsante stampa ricetta singola. Salvataggio in localStorage. Dark mode.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

### 22. Cantina vini

```
Inventario vini personale. Aggiungi vino con:
nome, cantina, annata, tipo (rosso/bianco/rosato/bollicine),
regione, prezzo €, voto stelle 1-5, note di degustazione.
Lista filtrabile per tipo, regione, annata.
Ordina per voto o prezzo. Conta totale bottiglie.
Esporta in JSON. Dark mode enoteca.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

### 23. Calcolatore ricette (scaling)

```
Calcolatore per scalare le porzioni di una ricetta.
Input: ingredienti originali (lista nome + quantità + unità),
porzioni originali, porzioni desiderate.
Output: lista ingredienti con quantità ricalcolate proporzionalmente.
Esempio: 4 porzioni → 6 porzioni, tutte le quantità ×1.5.
Pulsante stampa ricetta scalata. Dark mode cucina.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

---

## 📊 Produttività e pratiche

### 24. Habit tracker mensile

```
Tracker di abitudini mensile multi-abitudine.
REGOLA FONDAMENTALE: ogni abitudine ha un NOME, mostrato come titolo sopra
la SUA griglia mensile dei giorni. Niente griglie anonime.
L'utente può aggiungere più abitudini (es: meditazione, sport, lettura,
no alcol), ognuna con la propria griglia e il proprio nome ben visibile.
Per ogni abitudine, una griglia con tutti i giorni del mese: si clicca un
giorno per segnarlo come completato.
Stati delle celle:
- Giorno futuro: sfondo #2a2d3a (grigio scuro neutro), testo grigio chiaro
- Oggi: bordo viola #7c3aed, sfondo trasparente
- Completata: sfondo verde #2e7d32, testo bianco
- Mancata (giorno passato non completato): sfondo trasparente, testo rosso tenue
DEFAULT iniziale di ogni cella: stato futuro/grigio, MAI rosso.
Per ogni abitudine mostra: completamento del mese in %, streak attuale
(giorni consecutivi) e streak record.
Salvataggio in localStorage. Possibilità di eliminare un'abitudine.
Dark mode minimal.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

### 25. Diario rapido

```
Diario personale veloce. Textarea per scrivere pensiero del momento.
Pulsante salva: aggiunge alla lista con timestamp automatico.
Lista pensieri ordinati per data più recente.
Ricerca testuale. Editor markdown semplice
(grassetto testo, corsivo testo, lista - voce).
Esporta tutto in JSON o file di testo.
Dark mode notturno gentile per gli occhi.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

### 26. Scadenzario

```
Scadenzario: lista di promemoria con scadenze. Per ogni voce:
titolo, data scadenza, priorità (alta/media/bassa), categoria, note.
NON usare note adesive colorate. Mostra ogni promemoria come una SCHEDA con
sfondo dark mode #1a1d2e e testo bianco, con a SINISTRA una barra verticale
spessa 6px che indica la priorità:
- Alta: rosso #d32f2f
- Media: arancione #f57c00
- Bassa: blu #1976d2
Lo stato della scadenza è un BADGE in alto a destra della scheda:
- Scaduto: badge rosso scuro, testo bianco
- Entro 7 giorni: badge arancione scuro, testo bianco
- Futuro: badge grigio scuro, testo chiaro
Schede ordinate per data. Notifica visiva all'apertura se ci sono scadenze
imminenti. Filtro per categoria. CRUD completo (aggiungi/modifica/elimina)
con salvataggio in localStorage. Dark mode.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

### 27. Pomodoro tasks

```
Combinazione Pomodoro + task list. Aggiungi task da fare oggi.
Seleziona un task, parti col Pomodoro (25 min).
A fine ciclo, il task ha +1 pomodoro completato.
Al termine della giornata, vedi quanti Pomodoro per ogni task.
Salvataggio storico in localStorage. Dark mode focus.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

---

## 🎨 Gadget creativi

### 28. Generatore palette colori

```
Generatore di palette di colori armonici.
Pulsante "Genera nuova palette" mostra 5 colori coordinati random (metodo
HSL con shift uniforme di tonalità).
VINCOLO ASSOLUTO: il codice HEX/RGB NON va MAI stampato SOPRA il campione di
colore. Ogni colore si presenta così:
- in alto, il campione di colore puro (height 80px)
- sotto, una piccola etichetta su sfondo dark mode con testo chiaro che mostra
  il codice HEX (es. #4f46e5) e, sotto, "RGB 79,70,229"
Così il codice resta leggibile qualunque sia il colore del campione.
Click sul campione: copia il codice negli appunti (con conferma visiva).
Pulsante "Esporta CSS variables" che genera
:root { --colore-1: #...; --colore-2: #...; }
Salva fino a 10 palette preferite in localStorage. Dark mode design.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

### 29. Generatore password sicure

```
Generatore password configurabile.
Slider lunghezza 8-32 caratteri.
Checkbox per includere: minuscole, maiuscole, numeri, simboli speciali.
Password generata in font monospace grande.
Pulsante "Copia" copia negli appunti.
Indicatore forza (debole/media/forte/fortissima) con barra colorata.
Storia ultime 5 password generate (solo in memoria, non salvate).
Dark mode security.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

### 30. Lavagna note adesive (kanban)

```
Lavagna kanban con 3 colonne: Da fare, In corso, Fatte.
Le note sono card con sfondo SATURO e testo bianco (niente pastelli, niente
sfondi chiari):
- Note "Da fare": sfondo #424242 (grigio scuro), testo bianco
- Note "In corso": sfondo #1565c0 (blu scuro), testo bianco
- Note "Fatte": sfondo #2e7d32 (verde scuro), testo bianco e barrato
Click su una nota per spostarla nella colonna successiva.
Drag visivo opzionale tra colonne. Doppio click per modificare il testo.
Cestino per eliminare. Salvataggio in localStorage. Dark mode bacheca legno.

REGOLE GRAFICHE OBBLIGATORIE:
- Sfondo principale dark mode #0f1419 (o simile).
- Testo principale chiaro #e8eaed (o simile).
- Contrasto minimo WCAG AA: il testo deve essere SEMPRE leggibile sullo sfondo.
- VIETATO testo bianco su sfondo giallo.
- VIETATO testo chiaro su sfondo chiaro.
- Card/note colorate: usa sfondo con colore TENUE (lightness 25-35%) e testo bianco, OPPURE sfondo brillante con testo nero/scuro.
- Font minimo: 16px per il body, 18px per i titoli.
- Pulsanti: padding 12px 20px, font 16px, altezza minima 44px.
- Spaziatura: padding 20px tra le sezioni, gap 12px tra gli elementi.
- Bordi arrotondati 8-12px su card e pulsanti.
- Hover leggeri (filter: brightness(1.1)).
```

---

## 🔑 Suggerimenti per scrivere prompt efficaci

1. **Sii specifico sui campi**: invece di "una calcolatrice", scrivi
   "calcolatrice con campi X, Y, Z e output A, B, C".

2. **Specifica il design**: dark mode? Colori specifici? Mobile-first?
   Dillo chiaramente.

3. **Indica le tecnologie**: "canvas HTML5", "Web Audio API", "localStorage"
   aiutano l'AI a scegliere bene.

4. **Vincoli importanti in maiuscolo**: scrivere "NESSUNA libreria esterna"
   o "OBBLIGATORIO controllo da tastiera" guida il modello.

5. **Per app complesse, dividi**: meglio 3 prompt piccoli e perfetti che
   1 grande con bug. Combina poi i pezzi a mano.

6. **Se il risultato non è perfetto, premi Rigenera** invece di scrivere
   un nuovo prompt: spesso al secondo tentativo viene meglio.
