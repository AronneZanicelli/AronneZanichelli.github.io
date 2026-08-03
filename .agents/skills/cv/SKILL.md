---
name: cv
description: Rubrica di qualità per cv.html (checklist ATS, regola CAR, delta italiano) e analisi di un annuncio con match score. Invoca con /cv.
disable-model-invocation: true
---

# CV — rubrica di qualità + analisi annuncio

Inventario di riferimento: `cv.html` (contenuti attuali) + `projects.html` (dettaglio tecnico
dei progetti). Nessun JSON, nessuno step di build — `cv.html` resta la sorgente unica statica.

## 1. Rubrica di qualità

Checklist ATS (niente colonne/tabelle/header-footer, intestazioni standard, font di sistema,
PDF, keyword in contesto):

- Nessun `<table>`, text-box, header/footer di stampa con dati di contatto.
- Nessuna icona decorativa, nessuna barra/indicatore grafico per le competenze.
- Nessuna spaziatura ottenuta con `<br>`/invii ripetuti.
- Ordine DOM = ordine di lettura: nome → titolo → contatti → sezioni → privacy.
- `h3` con titolo e date sempre separati da uno spazio/separatore esplicito nel testo estratto
  (mai `"…ContentOttobre 2025"` incollato).
- Font di sistema (Helvetica/Arial), non web font — un ATS deve poter estrarre il testo del PDF.

**Regola CAR, riqualificata per un lettore non tecnico.** ≥60% dei bullet deve avere un
risultato misurabile — ma la metrica deve essere valutabile da chi seleziona, non solo da uno
sviluppatore. `Electron 33 · React 19 · TS 5.7` è un inventario, non una metrica.
`Pipeline adottata dall'azienda su ~50 video` lo è. Il dettaglio tecnico (versioni, righe di
test, stack) vive su `projects.html` e GitHub — non nel CV.

**Verbi d'azione** (apertura bullet): Sviluppato, Progettato, Gestito, Automatizzato,
Implementato, Ottimizzato, Ridotto, Aumentato, Costruito, Guidato.

**Blacklist aperture deboli** — mai iniziare un bullet con: *Responsabile di*, *Aiutato con*,
*Supportato in* (l'unica eccezione già nel CV, "Supporto allo sviluppo interno", resta perché
descrive accuratamente un ruolo di affiancamento, non va generalizzata).

**Da omettere sempre:** "referenze disponibili su richiesta", obiettivi generici, hobby non
pertinenti al ruolo.

**Formula del summary:** `[identità] + [anni/dominio] + [risultato distintivo] + [cosa cerchi]`.

## 2. Delta italiano

- **Consenso privacy**: non obbligatorio per legge alla prima candidatura (D.Lgs. 101/2018), ma
  prassi HR che scarta i CV senza — di fatto necessario. Formula già in `cv.html`.
- **Foto**: dato sensibile che *impone* il consenso, non un optional stilistico. Mantenuta in
  blocco nel flusso normale dell'header — mai `float`/`position:absolute` (vietati dall'ATS).
- **EQF**: livelli di qualifica europei (es. IFTS = IV livello) — vanno citati per titoli non
  universitari, un recruiter italiano li riconosce.
- **Europass**: solo per bandi e concorsi pubblici espliciti. Mai nel privato — formato
  riconoscibile come "da studente", penalizza un profilo che si presenta come tecnico.
- **Una pagina** per un profilo neodiplomato/junior — non due.
- **Data di nascita/domicilio**: prassi normale in Italia, segnala idoneità a fasce agevolate
  (es. apprendistato under 30) — un vantaggio economico per chi assume, non un rischio privacy
  se il candidato lo sceglie.

## 3. Analisi annuncio

Prima di adattare il CV a un ruolo, analizza l'annuncio:

1. Estrai requisiti **obbligatori** vs **preferenziali**.
2. Estrai keyword (hard skill / soft skill / dominio).
3. Calcola il match score: `(obbligatori soddisfatti × 0.7) + (preferenziali soddisfatti × 0.3)`,
   in percentuale sui requisiti totali di ciascuna categoria.
   - **75-89%** → candidati subito, CV as-is o con piccoli riordini di enfasi.
   - **60-74%** → candidati, ma serve una lettera di accompagnamento che colmi i gap.
   - **<50%** → lascia perdere, o candidati solo se il ruolo è comunque un salto voluto.
4. Triage dei gap: **critico** (requisito obbligatorio mancante) / **maggiore** (preferenziale
   importante mancante) / **minore** (nice-to-have).
5. Segnala eventuali red flag dell'annuncio (stipendio non dichiarato, requisiti irrealistici per
   il livello, linguaggio vago).
6. Proponi modifiche concrete al CV: quale bullet promuovere/riformulare, quali keyword mancanti
   inserire (solo se vere — mai inventare esperienza).

**Non fare:** riscrivere il CV in registro executive/C-suite per un profilo con <3 anni di
esperienza — è controproducente. Non candidare automaticamente a più annunci senza questa
analisi — il match score è un gate prima dell'invio, non un dettaglio a posteriori.

→ **Verifica della skill:** invocala su un annuncio reale — deve produrre match score, gap
triage e una lista concreta di modifiche al CV, non una riscrittura generica.
