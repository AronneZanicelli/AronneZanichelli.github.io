# EU4 Assistant + Bot — Progettazione Iniziale

## 1) Obiettivo del progetto
Realizzare un software desktop locale che supporti **Europa Universalis IV** in tre modalità:

1. **Assistente**: suggerisce strategie e prossime azioni in tempo reale.
2. **Semi-bot**: prepara ed esegue azioni su conferma utente.
3. **Full-bot**: esegue autonomamente task selezionati con guardrail di sicurezza.

Il sistema deve supportare partita vanilla, DLC e mod attive.

---

## 2) Ambito funzionale (MVP → esteso)

### Assistente (decisionale)
- Raccomandazioni contestuali (guerra, economia, diplomazia, colonie).
- Alert rischio (AE, coalizione, collasso manpower, debito).
- Planner a obiettivi campagna (early/mid/late game).

### Bot (esecuzione)
- **Army manager**: composizione stack, reclutamento, rally, movement routing.
- **Colonial manager**: scelta province, invio coloni, ottimizzazione upkeep/ROI.
- Macro operative future: claim cycle, improve relations, gestione diplomatica base.

---

## 3) Architettura logica

```text
┌──────────────────────────────────────────────────────────┐
│                    Desktop UI (Overlay/App)             │
│   - dashboard stato      - suggerimenti      - comandi  │
└──────────────────────────────────────────────────────────┘
                │                           │
                ▼                           ▼
┌──────────────────────────┐      ┌──────────────────────────┐
│   Decision Engine        │      │   Action Executor        │
│ - scoring mosse          │      │ - macro UI controllate   │
│ - planner obiettivi      │      │ - verify post-azione     │
│ - what-if simulator      │      │ - fallback / retry       │
└──────────────────────────┘      └──────────────────────────┘
                ▲                           ▲
                │                           │
┌──────────────────────────────────────────────────────────┐
│                 State + Rules Layer                     │
│ - parser save/autosave/OCR         - parser vanilla/DLC │
│ - merge regole da mod              - cache stato         │
└──────────────────────────────────────────────────────────┘
                ▲
                │
┌──────────────────────────────────────────────────────────┐
│                Data Sources (EU4 + Mods)                │
│ install dir, savegame, config, workshop/local mods      │
└──────────────────────────────────────────────────────────┘
```

---

## 4) Componenti e responsabilità

### 4.1 `eu4_parser`
- Carica regole vanilla + DLC + override mod.
- Espone API coerenti (`units`, `ideas`, `missions`, `modifiers`, `trade`).

### 4.2 `state_reader`
- Acquisisce snapshot partita da save/autosave.
- Opzionale OCR per dati non immediati dal save.

### 4.3 `decision_engine`
- Produce raccomandazioni ordinate con score.
- Include logica explainable (“perché questa scelta”).

### 4.4 `bot_executor`
- Trasforma azioni ad alto livello in sequenze operative UI.
- Verifica effetti attesi e attiva fallback in caso mismatch.

### 4.5 `safety_policy`
- Limiti e blocchi: spesa max, reclutamenti max, pause su condizioni critiche.
- Distinzione regole per modalità Assist / Semi-bot / Full-bot.

### 4.6 `telemetry`
- Event log strutturato.
- Report sessione e timeline decisioni/azioni.

---

## 5) Modello dati minimo (prima iterazione)

### Snapshot stato
```json
{
  "timestamp": "ISO-8601",
  "country": "TAG",
  "economy": {"treasury": 0, "income": 0, "expenses": 0, "debt": 0},
  "military": {"force_limit": 0, "manpower": 0, "armies": []},
  "diplomacy": {"truce": [], "alliances": [], "ae_map": {}},
  "colonial": {"colonists_free": 0, "active_colonies": []},
  "risk": {"coalition": 0, "rebels": 0}
}
```

### Azione proposta/eseguita
```json
{
  "id": "action-uuid",
  "type": "recruit_army|move_army|send_colonist|diplomacy",
  "priority": 0.0,
  "confidence": 0.0,
  "expected_outcome": {},
  "requires_confirmation": true
}
```

---

## 6) Algoritmi iniziali

### 6.1 Army composition score (v0)
Score composizione stack =
- + aderenza a combat width
- + capacità d'assedio (artiglieria minima)
- + sostenibilità economica (maintenance ratio)
- + resilienza manpower
- - penalità attrition prevista nel teatro operativo

### 6.2 Colony target score (v0)
Score provincia coloniale =
- + valore commerciale atteso
- + sinergia trade node / steering
- + sicurezza area (nemici/rivali bassi)
- + bassa ostilità nativi
- - costo mantenimento relativo
- - rischio contestazione geopolitica

---

## 7) Roadmap di implementazione

## Milestone M1 — Fondazioni tecniche
- Scheletro package + config profili modalità.
- Logging strutturato e serializzazione snapshot.
- Parser file base (proof of concept).

## Milestone M2 — Assistente MVP
- 3 raccomandazioni contestuali con explainability.
- Alert principali (AE, coalition risk, debt).

## Milestone M3 — Bot militare MVP
- Calcolo stack + queue reclutamento + rally point.
- Verifica post-azione e stop di sicurezza.

## Milestone M4 — Bot coloniale MVP
- Ranking province + invio colono + policy budget.

## Milestone M5 — Simulatore e report
- What-if essenziale.
- Report sessione (decisioni, azioni, outcome).

---

## 8) Rischi tecnici e mitigazioni
- **Patch EU4 / cambi UI** → layer adapter UI versionato + test regressione.
- **Mod conflittuali** → sistema priorità override e validazione parsing.
- **Affidabilità automazione** → checkpoint frequenti + fallback + conferma umana in semi-bot.
- **Prestazioni** → cache snapshot e calcolo incrementale.

---

## 9) Definizione di “Done” (prima release utile)
- Assistente in tempo quasi reale con suggerimenti leggibili.
- Bot in modalità semi-automatica per eserciti e colonie.
- Guardrail configurabili funzionanti.
- Log azioni consultabile a fine sessione.

---

## 10) Stato attuale progetto
- ✅ Progettazione iniziale completata (architettura, moduli, roadmap, rischi).
- ⏳ Prossimo step: avvio implementazione M1 (struttura codice e parser PoC).
