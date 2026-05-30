# Rathaus Oberägeri — Custom Astro Site

A custom static site built with Astro for the carbon-reduction research project.
Pages, animations, smooth scroll, view transitions, sticky navigation.

## What's inside

- `src/pages/index.astro` — landing page (hero, chapter cards, chapters 1–3, CTA)
- `src/pages/chapter-4.astro` — scrollable literature review (4.1, 4.2, 4.4, 4.5, 4.6)
- `src/pages/chapter-5.astro` — energy & carbon baseline (2025) with all 5 tables
- `src/pages/chapter-6.astro` — calculator explainer + embedded live tool
- `src/components/` — Hero, Nav, Footer, Section, KpiStrip, DataTable, Formula, ProConCards
- `src/layouts/Base.astro` — shared layout with view transitions + scroll-reveal
- `src/styles/global.css` — design tokens, reveal animations, view-transition keyframes

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
npm run preview  # serves dist/ locally
```

## Deploy to Vercel — 5 minutes

### Option A — via the Vercel website (easiest)

1. **Create a free Vercel account** at https://vercel.com/signup (use GitHub if you have one).
2. Push this folder to a new GitHub repo (or skip step 2 and use option B).
3. On Vercel, click **Add New → Project**, pick the repo.
4. Vercel auto-detects Astro. Leave all settings default. Click **Deploy**.
5. ~30 seconds later you get a URL like `rathaus-oberaegeri.vercel.app`.

### Option B — via the Vercel CLI (no GitHub needed)

```bash
npm install -g vercel
cd rathaus-site
vercel        # follow prompts, log in, deploy
vercel --prod # promote to production
```

### Custom domain

In the Vercel project dashboard: **Settings → Domains → Add**. Point your DNS A record to `76.76.21.21` and CNAME to `cname.vercel-dns.com`. SSL is automatic.

## Filling in chapters 1–3

Chapters 1, 2, and 3 currently have placeholder text. Open `src/pages/index.astro` and replace the content inside the three `<Section>` blocks marked with `Chapter 01`, `Chapter 02`, `Chapter 03`. Each accepts plain HTML inside (`<p>`, `<h3>`, `<ul class="dashed">`, etc.).

## Editing chapter content

Each chapter page is a single `.astro` file in `src/pages/`. The file is mostly plain HTML — you can edit paragraphs and tables directly without knowing Astro.

## Animation system

- **Scroll-reveal:** add `class="reveal"` (or `reveal-fade`, `reveal-scale`) to any element. It fades in when 12 % visible. Stagger with `reveal-delay-1` … `reveal-delay-4`.
- **Page transitions:** automatic — Astro's `<ViewTransitions />` handles cross-page fades.
- **Smooth scroll:** `html { scroll-behavior: smooth }` plus the sticky in-page nav on Chapter 4.
- **Hover micro-interactions:** cards lift, links underline-grow, buttons translate on `:hover`.
- **Respects `prefers-reduced-motion`** — everything switches off for users who request it.

## Tech

- **Astro 4** — static site generator, zero JS by default
- **View Transitions API** — native page transitions
- **Intersection Observer** — scroll-reveal animations
- **Cormorant Garamond + Inter** — same font pairing as your existing pages
- **No build dependencies beyond Astro** — no Tailwind, no React, easy to maintain

## License

Internal academic project.
