# Aronne Zanichelli - Static Bilingual Portfolio (EN/IT)

Professional static portfolio/CV site, optimized for technical applications (junior developer, game dev, digital creative), with English default and Italian toggle.

## Project structure

```text
.
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── profile.jpg
    ├── cv_en.pdf
    └── cv_it.pdf
```

## Local test (2-3 steps)

1. Run a local static server:
   ```bash
   python3 -m http.server 8080
   ```
2. Open `http://localhost:8080`.
3. Verify language toggle (EN|IT), theme toggle, form validation, and CV download buttons.

## Publish

### GitHub Pages
1. Push repo to GitHub.
2. Go to **Settings → Pages** and set source to your branch root.
3. Save and open generated URL.

### Netlify
1. Connect the repository in Netlify.
2. Build command: none. Publish directory: `/`.
3. Deploy site and optionally enable Netlify Forms.

## Where to edit content

- Bio and all text translations: `script.js` inside `translations.en.about.bio` and `translations.it.about.bio`.
- Education timeline entries: `index.html` timeline section + labels in `script.js` under `timeline`.
- Portfolio cards and in-progress project description: `script.js` under `portfolio`.

## Contact form integration snippets

### Formspree
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

### Netlify Forms
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

## CV PDF generation

Two methods are already supported:

1. Direct files in `assets/cv_en.pdf` and `assets/cv_it.pdf` (download buttons are linked).
2. In-browser print mode via `Print / Save as PDF` button (`window.print()` + print CSS in `style.css`).

## Performance notes

- Replace `assets/profile.jpg` with optimized image (`.webp` recommended under 250 KB).
- Keep PDFs lightweight (< 1 MB each).
- Use compressed media for portfolio screenshots/videos.

## EU4 Assistant + Bot design

- Initial design document: `EU4_ASSISTANT_BOT_DESIGN.md`.


## EU4 Assistant + Bot bootstrap (M1)

A minimal Python foundation now exists under `eu4_assistant_bot/` with:
- mode presets (`assist`, `semi-bot`, `full-bot`),
- logging + event telemetry,
- snapshot serialization,
- parser PoC for `common/units`, `common/ideas`, `common/event_modifiers`.

Run bootstrap:

```bash
python -m eu4_assistant_bot.main --mode assist --install-path /path/to/eu4
```

Run tests:

```bash
python -m pytest -q
```


## EU4 Assistant + Bot decision layer (M2 in progress)

Implemented now:
- `DecisionEngine` with explainable top-3 recommendations.
- Configurable risk thresholds from `AppConfig.decision`.
- Risk profiles (`safe`, `balanced`, `aggressive`) to quickly tune decision thresholds.
- Structured risk reason codes (`coalition.high`, `debt.over_ratio`, `debt.negative_balance`, `manpower.low`, `rebels.high`).
- Action plans strutturati (`ActionPlan`) derivati dalle raccomandazioni per preparare il layer bot operativo.
- Simulated executor pipeline che processa i piani (`skipped` in assist se serve conferma, `simulated_executed` in modalità bot).
- `SnapshotReader` for normalized JSON game snapshots, now usable directly via CLI adapter (`--snapshot-json`) with fallback on invalid payloads.
- Save extract adapter (`--snapshot-save`) for lightweight local save ingestion.

Current milestone status:
- M1 ✅ bootstrap/package/parser/telemetry
- M2 🟡 in progress (decision + alert engine with configurable thresholds and reason codes)
