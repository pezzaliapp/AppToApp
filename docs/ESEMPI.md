# 💡 24 prompt di esempio testati

Tutti i prompt qui sotto sono testati con i modelli AI gratuiti supportati.
Per usarli: vai su AppToApp, lascia selezionato "AI libera" (o usa il template
più adatto), copia il prompt, premi "Genera app".

> ⚠️ I modelli AI generativi non sono deterministici: lo stesso prompt può dare
> risultati diversi. Se un'app non esce completa, premi 🔄 Rigenera o cambia
> modello (Groq è in genere il più affidabile per il JSON).

## 🗂️ Categorie

- **🎮 Giochi e simulatori** — esempi 1-5
- **🧮 Calcolatori utili** — esempi 6-10
- **⏱️ Timer e contatori** — esempi 11-13
- **🏪 Per artigiani e PMI** — esempi 14-17
- **🍴 Cucina e casa** — esempi 18-21
- **📊 Produttività e pratiche** — esempi 22-23
- **🎨 Gadget creativi** — esempio 24

_24 esempi in 7 categorie._

## 📐 Regole applicate a tutti gli esempi

Tutti i 24 prompt qui sotto includono automaticamente, in coda, questi due
blocchi standard. Non devi copiarli: sono già nel testo che incolli in AppToApp.

```
REGOLE FUNZIONALI OBBLIGATORIE:
- Ogni sezione dell'app deve avere un TITOLO o ETICHETTA visibile che spiega cosa fa
- Ogni input deve avere un <label> sopra che descrive cosa inserire
- Ogni pulsante di azione deve avere un event listener esplicito in JavaScript che produce un risultato visibile
- Ogni output (risultato di calcolo, lista, valore generato) deve essere in un elemento HTML con etichetta visibile (es: 'Risultato:', 'Password generata:', 'Consumo: X km/l')
- L'app deve essere AUTO-ESPLICATIVA: aprendola senza istruzioni, un utente capisce cosa fa in meno di 5 secondi
```

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

REGOLE FUNZIONALI OBBLIGATORIE:
- Ogni sezione dell'app deve avere un TITOLO o ETICHETTA visibile che spiega cosa fa
- Ogni input deve avere un <label> sopra che descrive cosa inserire
- Ogni pulsante di azione deve avere un event listener esplicito in JavaScript che produce un risultato visibile
- Ogni output (risultato di calcolo, lista, valore generato) deve essere in un elemento HTML con etichetta visibile (es: 'Risultato:', 'Password generata:', 'Consumo: X km/l')
- L'app deve essere AUTO-ESPLICATIVA: aprendola senza istruzioni, un utente capisce cosa fa in meno di 5 secondi

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
Mini gioco stile Pong su canvas HTML5 responsive (scala alla larghezza
schermo, proporzioni ~16:10). Due racchette bianche ai lati, pallina che
rimbalza, punteggio in alto al centro del canvas.
Controlli: racchetta sinistra W/S, destra frecce su/giù. ANCHE touch: tap a
sinistra/destra del canvas muove la racchetta verso il punto toccato, drag =
movimento continuo. NESSUN movimento automatico: solo tastiera/touch.
Usa keydown/keyup con mappa stato true/false, touchstart/touchmove, loop con
requestAnimationFrame, movimento limitato dentro il campo. Dark mode.

REGOLE FUNZIONALI OBBLIGATORIE:
- Ogni sezione dell'app deve avere un TITOLO o ETICHETTA visibile che spiega cosa fa
- Ogni input deve avere un <label> sopra che descrive cosa inserire
- Ogni pulsante di azione deve avere un event listener esplicito in JavaScript che produce un risultato visibile
- Ogni output (risultato di calcolo, lista, valore generato) deve essere in un elemento HTML con etichetta visibile (es: 'Risultato:', 'Password generata:', 'Consumo: X km/l')
- L'app deve essere AUTO-ESPLICATIVA: aprendola senza istruzioni, un utente capisce cosa fa in meno di 5 secondi

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

REGOLE FUNZIONALI OBBLIGATORIE:
- Ogni sezione dell'app deve avere un TITOLO o ETICHETTA visibile che spiega cosa fa
- Ogni input deve avere un <label> sopra che descrive cosa inserire
- Ogni pulsante di azione deve avere un event listener esplicito in JavaScript che produce un risultato visibile
- Ogni output (risultato di calcolo, lista, valore generato) deve essere in un elemento HTML con etichetta visibile (es: 'Risultato:', 'Password generata:', 'Consumo: X km/l')
- L'app deve essere AUTO-ESPLICATIVA: aprendola senza istruzioni, un utente capisce cosa fa in meno di 5 secondi

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
Tiradadi virtuale per giochi di ruolo, con un titolo che spiega l'app.
Una fila di pulsanti: D4, D6, D8, D10, D12, D20, D100. Al click su un dado,
un event listener tira quel dado e mostra il risultato in un riquadro grande
etichettato "Risultato del tiro:" con una breve animazione.
Sotto, una sezione etichettata "Ultimi 10 tiri:" con l'elenco (tipo di dado e
valore ottenuto). Suono di dado che rotola al click (Web Audio API).
Tema fantasy scuro con accenti dorati (oro solo come accento, non sul testo lungo).

REGOLE FUNZIONALI OBBLIGATORIE:
- Ogni sezione dell'app deve avere un TITOLO o ETICHETTA visibile che spiega cosa fa
- Ogni input deve avere un <label> sopra che descrive cosa inserire
- Ogni pulsante di azione deve avere un event listener esplicito in JavaScript che produce un risultato visibile
- Ogni output (risultato di calcolo, lista, valore generato) deve essere in un elemento HTML con etichetta visibile (es: 'Risultato:', 'Password generata:', 'Consumo: X km/l')
- L'app deve essere AUTO-ESPLICATIVA: aprendola senza istruzioni, un utente capisce cosa fa in meno di 5 secondi

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

REGOLE FUNZIONALI OBBLIGATORIE:
- Ogni sezione dell'app deve avere un TITOLO o ETICHETTA visibile che spiega cosa fa
- Ogni input deve avere un <label> sopra che descrive cosa inserire
- Ogni pulsante di azione deve avere un event listener esplicito in JavaScript che produce un risultato visibile
- Ogni output (risultato di calcolo, lista, valore generato) deve essere in un elemento HTML con etichetta visibile (es: 'Risultato:', 'Password generata:', 'Consumo: X km/l')
- L'app deve essere AUTO-ESPLICATIVA: aprendola senza istruzioni, un utente capisce cosa fa in meno di 5 secondi

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
Calcolatrice di percentuali con 4 modalità selezionabili da tab, ognuna con
un titolo che spiega cosa calcola:
- "Percentuale di un numero" (es: 22% di 350 = 77)
- "Sconto su prezzo" (prezzo originale meno lo sconto%)
- "Calcolo IVA 22%" (imponibile + IVA)
- "Variazione percentuale tra due valori"
Ogni campo ha la sua <label>. Il risultato compare in un riquadro etichettato
"Risultato:" e si aggiorna a ogni modifica degli input.
Dark mode con l'arancione SOLO come accento (tab attiva, CTA), mai come sfondo.
Font grande, mobile-first.

REGOLE FUNZIONALI OBBLIGATORIE:
- Ogni sezione dell'app deve avere un TITOLO o ETICHETTA visibile che spiega cosa fa
- Ogni input deve avere un <label> sopra che descrive cosa inserire
- Ogni pulsante di azione deve avere un event listener esplicito in JavaScript che produce un risultato visibile
- Ogni output (risultato di calcolo, lista, valore generato) deve essere in un elemento HTML con etichetta visibile (es: 'Risultato:', 'Password generata:', 'Consumo: X km/l')
- L'app deve essere AUTO-ESPLICATIVA: aprendola senza istruzioni, un utente capisce cosa fa in meno di 5 secondi

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
Calcolatore rata mensile mutuo. Tre input con <label>: "Importo capitale €",
"Tasso annuo %", "Durata in anni".
Calcolo in tempo reale con la formula rata = C × (i/12) / (1 - (1 + i/12)^-n).
Mostra TRE output etichettati uno per uno: "Rata mensile: € X",
"Interessi totali: € X", "Totale rimborsato: € X".
Tabella dei primi 12 mesi (quota interessi, quota capitale, residuo); su mobile
la tabella diventa una lista di card (etichetta + valore affiancati).
Dark mode finanziario.

REGOLE FUNZIONALI OBBLIGATORIE:
- Ogni sezione dell'app deve avere un TITOLO o ETICHETTA visibile che spiega cosa fa
- Ogni input deve avere un <label> sopra che descrive cosa inserire
- Ogni pulsante di azione deve avere un event listener esplicito in JavaScript che produce un risultato visibile
- Ogni output (risultato di calcolo, lista, valore generato) deve essere in un elemento HTML con etichetta visibile (es: 'Risultato:', 'Password generata:', 'Consumo: X km/l')
- L'app deve essere AUTO-ESPLICATIVA: aprendola senza istruzioni, un utente capisce cosa fa in meno di 5 secondi

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
Calcolatore consumo medio veicolo. Tre input con <label>: "Km percorsi",
"Litri consumati", "Prezzo al litro €".
Un pulsante "Calcola" con event listener esplicito calcola e mostra TRE output,
ognuno etichettato in modo visibile:
- "Consumo: X km/litro"
- "Costo per km: € X"
- "Costo per 100 km: € X"
Sezione "Storico rifornimenti" (ultimi 10) salvata in localStorage con data
automatica e media consumo. Dark mode automotive.

REGOLE FUNZIONALI OBBLIGATORIE:
- Ogni sezione dell'app deve avere un TITOLO o ETICHETTA visibile che spiega cosa fa
- Ogni input deve avere un <label> sopra che descrive cosa inserire
- Ogni pulsante di azione deve avere un event listener esplicito in JavaScript che produce un risultato visibile
- Ogni output (risultato di calcolo, lista, valore generato) deve essere in un elemento HTML con etichetta visibile (es: 'Risultato:', 'Password generata:', 'Consumo: X km/l')
- L'app deve essere AUTO-ESPLICATIVA: aprendola senza istruzioni, un utente capisce cosa fa in meno di 5 secondi

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
Convertitore di valute con cambi fissi configurabili dall'utente.
Input con <label>: "Importo", "Valuta di partenza", "Valuta di arrivo"
(EUR, USD, GBP, CHF, JPY).
La conversione si aggiorna in tempo reale (listener sugli input) e il risultato
compare in un riquadro etichettato "Convertito:" con importo e valuta.
Sezione "Tassi di cambio" modificabili dall'utente e salvati in localStorage.
Dark mode pulito.

REGOLE FUNZIONALI OBBLIGATORIE:
- Ogni sezione dell'app deve avere un TITOLO o ETICHETTA visibile che spiega cosa fa
- Ogni input deve avere un <label> sopra che descrive cosa inserire
- Ogni pulsante di azione deve avere un event listener esplicito in JavaScript che produce un risultato visibile
- Ogni output (risultato di calcolo, lista, valore generato) deve essere in un elemento HTML con etichetta visibile (es: 'Risultato:', 'Password generata:', 'Consumo: X km/l')
- L'app deve essere AUTO-ESPLICATIVA: aprendola senza istruzioni, un utente capisce cosa fa in meno di 5 secondi

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
Calcolatore mancia per ristorante. Input con <label>: "Totale conto €",
"Percentuale mancia" (slider 0-25% con valore mostrato), "Numero persone".
Aggiornamento in tempo reale, con TRE output etichettati singolarmente:
- "Mancia: € X"
- "Totale con mancia: € X"
- "Per persona: € X"
Pulsanti rapidi 10%, 15%, 20% che impostano lo slider. Dark mode elegante.

REGOLE FUNZIONALI OBBLIGATORIE:
- Ogni sezione dell'app deve avere un TITOLO o ETICHETTA visibile che spiega cosa fa
- Ogni input deve avere un <label> sopra che descrive cosa inserire
- Ogni pulsante di azione deve avere un event listener esplicito in JavaScript che produce un risultato visibile
- Ogni output (risultato di calcolo, lista, valore generato) deve essere in un elemento HTML con etichetta visibile (es: 'Risultato:', 'Password generata:', 'Consumo: X km/l')
- L'app deve essere AUTO-ESPLICATIVA: aprendola senza istruzioni, un utente capisce cosa fa in meno di 5 secondi

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
Timer Pomodoro con durate CONFIGURABILI da input number (non valori fissi),
ognuno con la sua <label>: "Minuti lavoro" (default 25), "Minuti pausa"
(default 5), "Pausa lunga" (default 15), "Cicli prima della pausa lunga"
(default 4).
Display grande mm:ss su sfondo dark con testo chiaro (il rosso è solo accento).
Etichetta della fase corrente ("Lavoro" / "Pausa"). Pulsanti Start, Pausa,
Reset con event listener. Beep a fine fase (Web Audio API). Contatore cicli di
oggi salvato in localStorage. Dark mode con accento rosso pomodoro.

REGOLE FUNZIONALI OBBLIGATORIE:
- Ogni sezione dell'app deve avere un TITOLO o ETICHETTA visibile che spiega cosa fa
- Ogni input deve avere un <label> sopra che descrive cosa inserire
- Ogni pulsante di azione deve avere un event listener esplicito in JavaScript che produce un risultato visibile
- Ogni output (risultato di calcolo, lista, valore generato) deve essere in un elemento HTML con etichetta visibile (es: 'Risultato:', 'Password generata:', 'Consumo: X km/l')
- L'app deve essere AUTO-ESPLICATIVA: aprendola senza istruzioni, un utente capisce cosa fa in meno di 5 secondi

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
Cronometro con pulsanti Start, Stop, Lap, Reset (ognuno con event listener).
Display grande in formato hh:mm:ss.cc.
Ogni "Lap" aggiunge una riga alla lista dei giri: numero del giro + tempo
parziale + tempo cumulativo, in font monospace, su sfondo dark con bordo e
testo chiaro (MAI testo scuro su sfondo scuro).
Evidenzia con TESTO colorato il giro più veloce (verde) e il più lento (rosso).
Salvataggio sessione in localStorage. Dark mode sportivo.

REGOLE FUNZIONALI OBBLIGATORIE:
- Ogni sezione dell'app deve avere un TITOLO o ETICHETTA visibile che spiega cosa fa
- Ogni input deve avere un <label> sopra che descrive cosa inserire
- Ogni pulsante di azione deve avere un event listener esplicito in JavaScript che produce un risultato visibile
- Ogni output (risultato di calcolo, lista, valore generato) deve essere in un elemento HTML con etichetta visibile (es: 'Risultato:', 'Password generata:', 'Consumo: X km/l')
- L'app deve essere AUTO-ESPLICATIVA: aprendola senza istruzioni, un utente capisce cosa fa in meno di 5 secondi

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

### 13. Sveglia personalizzata

```
Sveglia che suona a un'ora impostata. Input ora hh:mm.
Display grande dell'ora corrente in tempo reale.
Quando l'ora arriva, suono ripetuto con Web Audio API e popup.
Pulsante "Snooze" che rinvia di 5 minuti.
Salva ultima sveglia impostata in localStorage. Dark mode notturno.

REGOLE FUNZIONALI OBBLIGATORIE:
- Ogni sezione dell'app deve avere un TITOLO o ETICHETTA visibile che spiega cosa fa
- Ogni input deve avere un <label> sopra che descrive cosa inserire
- Ogni pulsante di azione deve avere un event listener esplicito in JavaScript che produce un risultato visibile
- Ogni output (risultato di calcolo, lista, valore generato) deve essere in un elemento HTML con etichetta visibile (es: 'Risultato:', 'Password generata:', 'Consumo: X km/l')
- L'app deve essere AUTO-ESPLICATIVA: aprendola senza istruzioni, un utente capisce cosa fa in meno di 5 secondi

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

### 14. Preventivo officina semplice

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

REGOLE FUNZIONALI OBBLIGATORIE:
- Ogni sezione dell'app deve avere un TITOLO o ETICHETTA visibile che spiega cosa fa
- Ogni input deve avere un <label> sopra che descrive cosa inserire
- Ogni pulsante di azione deve avere un event listener esplicito in JavaScript che produce un risultato visibile
- Ogni output (risultato di calcolo, lista, valore generato) deve essere in un elemento HTML con etichetta visibile (es: 'Risultato:', 'Password generata:', 'Consumo: X km/l')
- L'app deve essere AUTO-ESPLICATIVA: aprendola senza istruzioni, un utente capisce cosa fa in meno di 5 secondi

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

### 15. Registro presenze cantiere

```
Registro presenze cantiere edile.
Per ogni giornata: data (auto), lista operai con checkbox presenza,
ore lavorate (input number per ciascuno).
Aggiungi/rimuovi operai dinamicamente.
Aggiungi giornate (storico salvato in localStorage).
Totale ore per ciascun operaio nel mese.
Esporta riepilogo in JSON. Dark mode con accento arancione cantiere.

REGOLE FUNZIONALI OBBLIGATORIE:
- Ogni sezione dell'app deve avere un TITOLO o ETICHETTA visibile che spiega cosa fa
- Ogni input deve avere un <label> sopra che descrive cosa inserire
- Ogni pulsante di azione deve avere un event listener esplicito in JavaScript che produce un risultato visibile
- Ogni output (risultato di calcolo, lista, valore generato) deve essere in un elemento HTML con etichetta visibile (es: 'Risultato:', 'Password generata:', 'Consumo: X km/l')
- L'app deve essere AUTO-ESPLICATIVA: aprendola senza istruzioni, un utente capisce cosa fa in meno di 5 secondi

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

### 16. Listino prezzi consultabile

```
Listino prezzi dinamico per piccola attività. Aggiungi voci con:
nome prodotto/servizio, categoria, prezzo €, descrizione breve, IVA %.
Ricerca per nome. Filtro per categoria.
Salvataggio in localStorage. Esporta listino in JSON.
Modalità "consultazione cliente" (vista pulita senza pulsanti modifica).
Dark mode professionale.

REGOLE FUNZIONALI OBBLIGATORIE:
- Ogni sezione dell'app deve avere un TITOLO o ETICHETTA visibile che spiega cosa fa
- Ogni input deve avere un <label> sopra che descrive cosa inserire
- Ogni pulsante di azione deve avere un event listener esplicito in JavaScript che produce un risultato visibile
- Ogni output (risultato di calcolo, lista, valore generato) deve essere in un elemento HTML con etichetta visibile (es: 'Risultato:', 'Password generata:', 'Consumo: X km/l')
- L'app deve essere AUTO-ESPLICATIVA: aprendola senza istruzioni, un utente capisce cosa fa in meno di 5 secondi

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

### 17. Calcolatore margine

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

REGOLE FUNZIONALI OBBLIGATORIE:
- Ogni sezione dell'app deve avere un TITOLO o ETICHETTA visibile che spiega cosa fa
- Ogni input deve avere un <label> sopra che descrive cosa inserire
- Ogni pulsante di azione deve avere un event listener esplicito in JavaScript che produce un risultato visibile
- Ogni output (risultato di calcolo, lista, valore generato) deve essere in un elemento HTML con etichetta visibile (es: 'Risultato:', 'Password generata:', 'Consumo: X km/l')
- L'app deve essere AUTO-ESPLICATIVA: aprendola senza istruzioni, un utente capisce cosa fa in meno di 5 secondi

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

### 18. Lista spesa con categorie

```
Lista della spesa intelligente con categorie:
frutta/verdura, carne/pesce, latticini, pane/pasta, surgelati, bevande,
igiene, casa, altro.
Aggiungi articolo selezionando categoria. Checkbox per spuntare come preso.
Ordina mostrando non presi prima. Salvataggio localStorage.
Pulsante "Copia per WhatsApp" che genera testo lista formattato. Dark mode.

REGOLE FUNZIONALI OBBLIGATORIE:
- Ogni sezione dell'app deve avere un TITOLO o ETICHETTA visibile che spiega cosa fa
- Ogni input deve avere un <label> sopra che descrive cosa inserire
- Ogni pulsante di azione deve avere un event listener esplicito in JavaScript che produce un risultato visibile
- Ogni output (risultato di calcolo, lista, valore generato) deve essere in un elemento HTML con etichetta visibile (es: 'Risultato:', 'Password generata:', 'Consumo: X km/l')
- L'app deve essere AUTO-ESPLICATIVA: aprendola senza istruzioni, un utente capisce cosa fa in meno di 5 secondi

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

### 19. Ricettario personale

```
Ricettario digitale personale. Aggiungi ricetta con:
nome, categoria (primi/secondi/dolci/altro),
tempo preparazione minuti, porzioni,
lista ingredienti (textarea uno per riga),
procedimento (textarea).
Ricerca per nome o ingrediente. Filtro per categoria.
Pulsante stampa ricetta singola. Salvataggio in localStorage. Dark mode.

REGOLE FUNZIONALI OBBLIGATORIE:
- Ogni sezione dell'app deve avere un TITOLO o ETICHETTA visibile che spiega cosa fa
- Ogni input deve avere un <label> sopra che descrive cosa inserire
- Ogni pulsante di azione deve avere un event listener esplicito in JavaScript che produce un risultato visibile
- Ogni output (risultato di calcolo, lista, valore generato) deve essere in un elemento HTML con etichetta visibile (es: 'Risultato:', 'Password generata:', 'Consumo: X km/l')
- L'app deve essere AUTO-ESPLICATIVA: aprendola senza istruzioni, un utente capisce cosa fa in meno di 5 secondi

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

### 20. Cantina vini

```
Inventario vini personale. Aggiungi vino con:
nome, cantina, annata, tipo (rosso/bianco/rosato/bollicine),
regione, prezzo €, voto stelle 1-5, note di degustazione.
Lista filtrabile per tipo, regione, annata.
Ordina per voto o prezzo. Conta totale bottiglie.
Esporta in JSON. Dark mode enoteca.

REGOLE FUNZIONALI OBBLIGATORIE:
- Ogni sezione dell'app deve avere un TITOLO o ETICHETTA visibile che spiega cosa fa
- Ogni input deve avere un <label> sopra che descrive cosa inserire
- Ogni pulsante di azione deve avere un event listener esplicito in JavaScript che produce un risultato visibile
- Ogni output (risultato di calcolo, lista, valore generato) deve essere in un elemento HTML con etichetta visibile (es: 'Risultato:', 'Password generata:', 'Consumo: X km/l')
- L'app deve essere AUTO-ESPLICATIVA: aprendola senza istruzioni, un utente capisce cosa fa in meno di 5 secondi

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

### 21. Calcolatore ricette (scaling)

```
Calcolatore per scalare le porzioni di una ricetta.
Input con <label>: "Ingredienti" (una riga per ingrediente: nome + quantità +
unità), "Porzioni originali", "Porzioni desiderate".
Un pulsante "Scala ricetta" con event listener calcola il fattore
(desiderate / originali) e mostra, sotto l'etichetta "Ingredienti ricalcolati:",
la lista con le quantità moltiplicate per il fattore (es: 4 → 6 porzioni = ×1.5).
Pulsante stampa ricetta scalata. Dark mode cucina.

REGOLE FUNZIONALI OBBLIGATORIE:
- Ogni sezione dell'app deve avere un TITOLO o ETICHETTA visibile che spiega cosa fa
- Ogni input deve avere un <label> sopra che descrive cosa inserire
- Ogni pulsante di azione deve avere un event listener esplicito in JavaScript che produce un risultato visibile
- Ogni output (risultato di calcolo, lista, valore generato) deve essere in un elemento HTML con etichetta visibile (es: 'Risultato:', 'Password generata:', 'Consumo: X km/l')
- L'app deve essere AUTO-ESPLICATIVA: aprendola senza istruzioni, un utente capisce cosa fa in meno di 5 secondi

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

### 22. Diario rapido

```
Diario personale veloce. Textarea con <label> "Scrivi un pensiero".
Sopra la textarea, pulsanti di formattazione markdown (Grassetto, Corsivo,
Lista), ognuno con event listener esplicito che inserisce la sintassi nel testo
selezionato.
Pulsante "Salva" che aggiunge il pensiero a una lista etichettata "I tuoi
pensieri", ordinata per data più recente, con timestamp automatico.
Ricerca testuale. Esporta tutto in JSON o file di testo.
Dark mode notturno gentile per gli occhi.

REGOLE FUNZIONALI OBBLIGATORIE:
- Ogni sezione dell'app deve avere un TITOLO o ETICHETTA visibile che spiega cosa fa
- Ogni input deve avere un <label> sopra che descrive cosa inserire
- Ogni pulsante di azione deve avere un event listener esplicito in JavaScript che produce un risultato visibile
- Ogni output (risultato di calcolo, lista, valore generato) deve essere in un elemento HTML con etichetta visibile (es: 'Risultato:', 'Password generata:', 'Consumo: X km/l')
- L'app deve essere AUTO-ESPLICATIVA: aprendola senza istruzioni, un utente capisce cosa fa in meno di 5 secondi

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

### 23. Pomodoro tasks

```
Combinazione Pomodoro + task list. Aggiungi task da fare oggi.
Seleziona un task, parti col Pomodoro (25 min).
A fine ciclo, il task ha +1 pomodoro completato.
Al termine della giornata, vedi quanti Pomodoro per ogni task.
Salvataggio storico in localStorage. Dark mode focus.

REGOLE FUNZIONALI OBBLIGATORIE:
- Ogni sezione dell'app deve avere un TITOLO o ETICHETTA visibile che spiega cosa fa
- Ogni input deve avere un <label> sopra che descrive cosa inserire
- Ogni pulsante di azione deve avere un event listener esplicito in JavaScript che produce un risultato visibile
- Ogni output (risultato di calcolo, lista, valore generato) deve essere in un elemento HTML con etichetta visibile (es: 'Risultato:', 'Password generata:', 'Consumo: X km/l')
- L'app deve essere AUTO-ESPLICATIVA: aprendola senza istruzioni, un utente capisce cosa fa in meno di 5 secondi

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

### 24. Generatore password sicure

```
Generatore di password configurabile.
Controlli con <label>: slider "Lunghezza" (8-32, valore mostrato), checkbox
"Minuscole", "Maiuscole", "Numeri", "Simboli".
Un pulsante "Genera password" con event listener esplicito crea la password e
la mostra in un riquadro etichettato "Password generata:" in font monospace
grande. Pulsante "Copia" che copia negli appunti (con conferma).
Indicatore forza (debole/media/forte/fortissima) con barra colorata.
Storia delle ultime 5 password (solo in memoria). Dark mode security.

REGOLE FUNZIONALI OBBLIGATORIE:
- Ogni sezione dell'app deve avere un TITOLO o ETICHETTA visibile che spiega cosa fa
- Ogni input deve avere un <label> sopra che descrive cosa inserire
- Ogni pulsante di azione deve avere un event listener esplicito in JavaScript che produce un risultato visibile
- Ogni output (risultato di calcolo, lista, valore generato) deve essere in un elemento HTML con etichetta visibile (es: 'Risultato:', 'Password generata:', 'Consumo: X km/l')
- L'app deve essere AUTO-ESPLICATIVA: aprendola senza istruzioni, un utente capisce cosa fa in meno di 5 secondi

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
