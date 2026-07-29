# AGENTS.md — Wave Ecosystem Web

Instructions for AI coding agents working on the Wave Ecosystem landing page.

---

## Project Overview

Single-page static landing page for the Wave Ecosystem — a suite of Python browser automation tools (cdpwave, bidiwave, wavexis, wavexis-mcp). Built with Astro 5 (SSG) + Tailwind CSS v4. Deployed to GitHub Pages at `https://mathiaspaulenko.github.io/wave-ecosystem-web/`.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| SSG | Astro 5 |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite`) |
| Fonts | Unbounded (display) · DM Sans (body) · JetBrains Mono (mono) |
| Deploy | GitHub Pages (GitHub Actions) |

---

## Build & Dev Commands

```bash
# Install dependencies
npm install

# Dev server → http://localhost:4321
npm run dev -- --host

# Production build → ./dist/
npm run build

# Preview build locally
npm run preview
```

**Always run `npm run build` before committing.** Astro's SSG catches errors that `dev` might miss.

---

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| **Abyss** | `#050d1c` | Darkest backgrounds |
| **Wave** | `#22d3ee` | Primary accent (CDP, cdpwave) |
| **Foam** | `#34d399` | Secondary accent (BiDi, bidiwave) |
| **Coral** | `#fb7185` | Tertiary accent (CLI, MCP) |
| **Amber** | `#fbbf24` | Warnings, roadmap labels |

### Fonts

- **Unbounded** — display headings, logos, stats
- **DM Sans** — body text, descriptions
- **JetBrains Mono** — code blocks, monospace labels

### Visual Style

- Dark "Deep Tech Ocean" theme
- Glassmorphism cards (`glass` class)
- Animated SVG waves and gradient meshes
- Noise overlay and grid pattern backgrounds
- Scroll-reveal animations (`reveal` class)

---

## Content Source

All tool data lives in `src/data/content.ts`. This is the single source of truth for:
- Tool names, descriptions, features, stats
- Repository and docs links
- Comparison table data
- Use cases
- Roadmap

When updating tool information, **edit only `content.ts`** — components read from it automatically.

---

## File Structure

```text
src/
├── components/
│   ├── Nav.astro           # Sticky navbar with mobile menu
│   ├── Hero.astro          # Hero section with stats
│   ├── ToolGrid.astro      # Tool cards with stats and features
│   ├── Comparison.astro    # Comparison table (CDP vs BiDi vs CLI vs MCP)
│   ├── UseCases.astro      # Use case cards
│   ├── Architecture.astro  # SVG architecture diagram
│   ├── Roadmap.astro       # Vertical timeline
│   └── Footer.astro        # CTA, repo links, community
├── data/
│   └── content.ts          # All tool data (single source of truth)
├── layouts/
│   └── Layout.astro        # HTML skeleton, SEO, fonts, scroll-reveal script
├── pages/
│   └── index.astro         # Single page composition
└── styles/
    └── global.css          # Tailwind + design tokens + animations

public/
└── favicon.svg             # Wave logo

docs/assets/images/
└── logo-wide.svg           # README logo
```

---

## Deployment

- `site`: `https://mathiaspaulenko.github.io`
- `base`: `/wave-ecosystem-web`
- Workflow: `.github/workflows/deploy.yml`
- Triggers on push to `main`
- Pages source: GitHub Actions (not branch)

---

## Commit Message Format

```text
<type>: <description>

Types:
- feat: new feature or section
- fix: bug fix
- refactor: code cleanup without behavior change
- docs: README, comments, documentation
- style: CSS, Tailwind, visual changes
- chore: build, deps, config
- ci: GitHub Actions, deployment
```
