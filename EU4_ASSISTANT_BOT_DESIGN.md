# EU4 Assistant + Bot — Progettazione v1.0

## 1. Obiettivo del progetto

Realizzare un'**applicazione desktop Windows** che si affianca a Europa Universalis IV in tempo quasi-reale, supportando il giocatore in tre modalità progressive:

| Modalità | Comportamento |
|---|---|
| **Assist** | Legge lo stato di gioco e mostra raccomandazioni + alert. Nessuna azione automatica. |
| **Semi-bot** | Propone azioni specifiche che il giocatore conferma prima dell'esecuzione. |
| **Full-bot** | Esegue autonomamente task configurati entro guardrail di sicurezza. |

Supporto completo a campagne **vanilla**, **tutti i DLC** e **mod attive**, in modalità **normale**.

> **Scope v1.0:** Ironman è escluso. L'obiettivo primario è un'applicazione stabile dall'inizio alla fine di una campagna normale, senza crash o comportamenti inattesi, su qualsiasi combinazione di DLC attivi.

---

## 2. Vincoli tecnici e scelte progettuali

### 2.1 Sorgente dati: autosave file watching

EU4 non espone API esterne. L'unico canale di lettura affidabile è il **file autosave**.

**Approccio adottato:**
- Un file watcher (`watchdog`) monitora `autosave.eu4` nella cartella documenti di Paradox.
- Una **mod leggera** forza il salvataggio mensile (ogni mese in-game), che su velocità normale corrisponde a pochi secondi reali.
- Ad ogni modifica del file, viene avviata una pipeline di parsing → extraction → decision.

**Perché non OCR:**
- L'OCR richiede risoluzione stabile, layout fisso, e overhead CPU significativo.
- Il save file contiene dati più completi e strutturati di qualsiasi schermata.
- OCR rimane fallback opzionale per versioni future su dati non presenti nel save.

### 2.2 Formato save EU4

I save file EU4 sono in formato **Clausewitz** in due varianti:

| Tipo | Formato interno |
|---|---|
| Campagna normale | ZIP contenente testo Clausewitz |

**Parser:** implementazione custom Python per testo Clausewitz completo (M3).
Ironman (binary Clausewitz) è fuori scope per v1.0.


### 2.3 Compatibilità DLC

I DLC di EU4 aggiungono meccaniche (es. Dharma, Emperor, Leviathan) che modificano la struttura del save file. La strategia di compatibilità è:

- **Parsing difensivo:** ogni campo estratto da `StateExtractor` ha un valore di default safe se assente.
- **Nessuna assunzione su sezioni opzionali:** le sezioni introdotte da DLC specifici (es. `estates`, `parliaments`, `fervor`) vengono estratte se presenti, ignorate se assenti.
- **Test su sample save:** la suite di test include save campione generati con diverse combinazioni DLC attivi.
- **Graceful degradation:** se una sezione DLC non è parsata, l'advisor mostra i dati disponibili senza crashare.

### 2.3 UI: overlay separato (PyQt6)

Finestra separata sempre in primo piano, posizionabile liberamente. PyQt6 scelto per:
- Controllo completo su trasparenza e stay-on-top su Windows
- Widget nativi e rendering fluido
- Packaging agevole con PyInstaller

### 2.4 Esecuzione azioni (Semi/Full-bot)

Azioni via simulazione input mouse/tastiera (`pyautogui` + `win32api`). Ogni azione include:
- Verifica pre-esecuzione (template matching screenshot)
- Verifica post-esecuzione (conferma effetto atteso)
- Fallback automatico con log dell'errore

---

## 3. Architettura v1.0

```
┌─────────────────────────────────────────────────────────────────┐
│                        UI Layer (PyQt6)                         │
│  ┌─────────────┐  ┌──────────────────┐  ┌───────────────────┐  │
│  │  Dashboard  │  │  Recommendations │  │  Alert + Log feed │  │
│  │  (snapshot) │  │  (top-3 + why)   │  │  (risk + events)  │  │
│  └─────────────┘  └──────────────────┘  └───────────────────┘  │
│              ↕ QSignals / event bus                             │
└─────────────────────────────────────────────────────────────────┘
                              ↕
┌─────────────────────────────────────────────────────────────────┐
│                      Core Pipeline                              │
│                                                                 │
│  FileWatcher → SaveParser → StateExtractor → GameSnapshot       │
│                                                    ↕            │
│                             DecisionEngine → Recommendations    │
│                                                    ↕            │
│                             ActionExecutor ← ConfirmDialog      │
└─────────────────────────────────────────────────────────────────┘
                              ↕
┌─────────────────────────────────────────────────────────────────┐
│                    Data + Config Layer                          │
│  AppConfig  |  SafetyLimits  |  Telemetry  |  RulesIndex (mod) │
└─────────────────────────────────────────────────────────────────┘
                              ↕
┌─────────────────────────────────────────────────────────────────┐
│                    EU4 File System                              │
│  autosave.eu4  |  dlc_load.json  |  mod/*.mod  |  common/...   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 4. Moduli e responsabilità

### 4.1 `eu4_assistant_bot.watcher` *(nuovo — M5)*
- `watchdog.observers.Observer` monitora la cartella savegame.
- Emette evento `SaveChanged` quando `autosave.eu4` viene modificato.
- Debounce 500ms (il file viene scritto in più chunk).
- Thread separato, comunica via queue thread-safe con il core.

### 4.2 `eu4_assistant_bot.parser` *(esteso — M3)*
- **M3** — `ClausewitzTextParser`: parser ricorsivo completo per save testuali.
  - Gestisce: blocchi annidati `key = { ... }`, liste, stringhe quotate, date `YYYY.MM.DD`.
  - Output: albero dizionario Python nativo.
- **`SaveUnzipper`**: decompressione ZIP pre-parsing.

### 4.3 `eu4_assistant_bot.extractor` *(nuovo — M5)*
- `StateExtractor`: mappa albero Clausewitz grezzo → `GameSnapshot` tipizzato.
- Estrae: tech levels, idea groups, province instabili, eserciti, trade nodes.
- Gestisce assenza di campi (mod che rimuovono sezioni, versioni EU4 diverse).
- M5: campi base. M7-M8: campi avanzati per military e colonial logic.

### 4.4 `eu4_assistant_bot.models` *(esteso — M5, M7)*

`GameSnapshot` ampliato:
```python
@dataclass
class GameSnapshot:
    # Esistenti
    timestamp: str
    country: str
    economy: EconomyState
    military: MilitaryState
    diplomacy: DiplomacyState
    colonial: ColonialState
    risk: RiskState
    # Nuovi M5
    eu4_date: str            # "1444.11.11"
    tech: TechState          # adm/dip/mil levels + costo prossimo
    ideas: IdeasState        # gruppi completati, in corso, punti liberi
    stability: int           # -3 → +3
    prestige: float
    legitimacy: float
    # Nuovi M7
    provinces: list[ProvinceState]     # unrest, owner, development
    trade_nodes: list[TradeNodeState]  # power, value, merchants
    armies: list[ArmyState]            # posizione, composizione, ordini
```

### 4.5 `eu4_assistant_bot.decision_engine` *(esteso — M7, M8)*
Arricchito con logica su dati reali:

- **Military (M7):** composizione stack vs combat width, eserciti sotto-dimensionati, assedi con forze insufficienti.
- **Colonial (M8):** ranking province per valore commerciale × sicurezza, reindirizzamento coloni.
- **Economy (M8):** steering mercanti per trade node, alert tech con MP insufficienti, alert admin efficiency.

### 4.6 `eu4_assistant_bot.executor` *(esteso reale — M9)*
- Sostituisce il simulatore con esecuzione reale via `pyautogui` + `win32api`.
- Ogni `ActionHandler` implementa: `pre_check() → execute() → post_check()`.
- `ExecutionSupervisor`: gestisce retry, fallback, stop di emergenza.
- Semi-bot: ogni azione passa per `ConfirmationQueue` → popup UI con dettagli.

### 4.7 `eu4_assistant_bot.ui` *(nuovo — M6)*
Costruito con PyQt6. Tre pannelli:

**Dashboard:** bandiera + tag + data in-game, barre economy, manpower, stability, prestige.

**Advisor:** top-3 recommendation cards (titolo, categoria, score, testo "perché"), badge alert visivi.

**Log:** feed eventi cronologico, filtro per tipo, export CSV fine sessione.

Comportamento finestra: `Qt.WindowStaysOnTopHint | Qt.Tool`, larghezza fissa ~360px, posizione persistente.

### 4.8 `eu4_assistant_bot.mod` *(nuovo — M3)*
Mod minimale che forza autosave mensile senza alterare gameplay né disabilitare achievement.

```
eu4_assistant_autosave/
├── eu4_assistant_autosave.mod
└── events/
    └── monthly_save.txt     ← on_monthly_pulse → save_game = yes
```

### 4.9 `eu4_assistant_bot.config` *(esteso — M5)*
- Configurazione UI (posizione, pannelli visibili, tema chiaro/scuro).
- Persistenza su `~/.eu4-assistant/config.json`.
- Setup wizard al primo avvio: rilevamento automatico percorso EU4 e Documents.

---

## 5. Modello dati snapshot completo

```json
{
  "timestamp": "2026-03-11T10:00:00+00:00",
  "eu4_date": "1460.06.01",
  "country": "POR",
  "stability": 1,
  "prestige": 45.2,
  "legitimacy": 82.0,
  "economy": {
    "treasury": 120.5,
    "income": 18.3,
    "expenses": 14.1,
    "debt": 0,
    "merchants_deployed": 3
  },
  "tech": {
    "adm": 4, "dip": 4, "mil": 4,
    "adm_cost": 100, "dip_cost": 100, "mil_cost": 100
  },
  "ideas": {
    "completed_groups": ["exploration"],
    "in_progress": "expansion",
    "free_ideas": 2
  },
  "military": {
    "force_limit": 28,
    "manpower": 22000,
    "armies": [
      {
        "id": "army_1",
        "location": "Lisboa",
        "troops": 18000,
        "composition": {"infantry": 12, "cavalry": 3, "artillery": 3}
      }
    ]
  },
  "diplomacy": {
    "truces": [{"tag": "CAS", "expires": "1462.03.01"}],
    "alliances": ["ENG"],
    "ae_map": {"CAS": 12, "FRA": 5}
  },
  "colonial": {
    "colonists_free": 1,
    "active_colonies": [{"province": "Azores", "progress": 400}]
  },
  "trade_nodes": [
    {"id": "Sevilla", "our_power": 35.2, "total_value": 12.8, "merchants": 1}
  ],
  "risk": {
    "coalition": 0.12,
    "rebels": 0.05,
    "ae_max": 12
  }
}
```

---

## 6. Pipeline live update (flusso completo)

```
[EU4 scrive autosave.eu4]
        ↓
[FileWatcher rileva modifica → attende stabilizzazione ~500ms]
        ↓
[SaveUnzipper → estrae contenuto ZIP]
        ↓
[ClausewitzTextParser / BinaryDecoder → albero raw]
        ↓
[StateExtractor → GameSnapshot tipizzato]
        ↓
[DecisionEngine.evaluate_risks() + recommend()]
        ↓
[UI.update_signal → pannelli aggiornati]
        ↓ (solo semi/full-bot)
[ActionExecutor → esecuzione o coda conferma]
```

**Latenza attesa:** 1–3 secondi dal file scritto all'UI aggiornata.

---

## 7. Roadmap milestone v1.0

| Milestone | Contenuto | Dipendenze |
|---|---|---|
| **M1** ✅ | Foundation: config, models, telemetry, parser PoC, CLI | — |
| **M2** ✅ | Decision engine + risk alerts + simulated executor | M1 |
| **M3** | ClausewitzTextParser completo + SaveUnzipper + mod autosave | M1 |
| **M4** | FileWatcher + StateExtractor + GameSnapshot v2 + DLC compat | M3 |
| **M5** | UI PyQt6 (Dashboard + Advisor, dati live) | M4 |
| **M6** | Military logic reale (stack scoring, army advisor) | M4, M5 |
| **M7** | Colonial + Economy logic reale | M4, M5 |
| **M8** | ActionExecutor reale (pyautogui) + semi-bot confirm | M5, M6 |
| **M9** | QA: test end-to-end, stabilità, crash hardening | tutti |
| **M10** | Packaging PyInstaller + setup wizard + docs | M9 |
| **v1.0** | Release stabile | M10 |

---

## 8. Rischi tecnici e mitigazioni

| Rischio | Probabilità | Mitigazione |
|---|---|---|
| Patch EU4 cambia formato save | Alta | Layer adapter versionato, test su sample save reali |
| Mod non compatibile con patch EU4 | Bassa | `supported_version` aggiornabile, fallback a autosave standard |
| pyautogui perde posizione UI dopo patch | Alta | Template matching con confidence threshold, fallback + log |
| Parsing lento su save >30MB | Media | Parsing selettivo per sezioni (lazy extraction) |
| False positive raccomandazioni | Media | Thresholds configurabili, modalità safe di default |

---

## 9. Definizione di "Done" per v1.0

- [ ] Save file parsato correttamente (campagna normale, tutti i DLC)
- [ ] Mod autosave mensile inclusa e documentata
- [ ] File watcher live con aggiornamento ~mensile
- [ ] UI overlay funzionante con dati reali
- [ ] Top-3 raccomandazioni con spiegazione leggibile
- [ ] Alert attivi: AE, coalition, debt, manpower, rebels
- [ ] Military advisor: stack scoring + alert eserciti
- [ ] Colonial advisor: ranking province + coloni
- [ ] Semi-bot: almeno 3 azioni eseguibili con conferma
- [ ] Guardrail configurabili e funzionanti
- [ ] Log sessione esportabile
- [ ] Eseguibile Windows standalone (no Python richiesto)

---

## 10. Stato progetto

| Milestone | Stato |
|---|---|
| M1 — Foundation | ✅ Completato |
| M2 — Decision engine + simulated executor | ✅ Completato |
| M3 — Parser Clausewitz completo + mod autosave | ⏳ Prossimo |
| M4 — FileWatcher + StateExtractor + DLC compat | 🔜 Pianificato |
| M5 — UI PyQt6 | 🔜 Pianificato |
| M6 — Military logic | 🔜 Pianificato |
| M7 — Colonial + Economy logic | 🔜 Pianificato |
| M8 — ActionExecutor reale (semi-bot) | 🔜 Pianificato |
| M9 — QA / stabilità / crash hardening | 🔜 Pianificato |
| M10 — Packaging | 🔜 Pianificato |
