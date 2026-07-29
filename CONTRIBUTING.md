# Contributing to Wave Ecosystem Web

Thank you for your interest in contributing! This document covers setup, development, and the PR process.

## Development Setup

```bash
git clone https://github.com/MathiasPaulenko/wave-ecosystem-web.git
cd wave-ecosystem-web
npm install
npm run dev -- --host
```

Open `http://localhost:4321` in your browser.

## Project Structure

```text
src/
├── components/          # Astro components (Nav, Hero, ToolGrid, etc.)
├── data/                # Centralized tool data (content.ts)
├── layouts/             # Base layout
├── pages/               # Main page (index.astro)
└── styles/              # Global styles and design tokens
```

All tool data (descriptions, features, stats, links) lives in `src/data/content.ts`. This is the single source of truth — components read from it. When updating tool information, **edit only `content.ts`**.

## Build & Verify

```bash
# Production build
npm run build

# Preview locally
npm run preview
```

**Always run `npm run build` before committing.** Astro's SSG catches errors that `dev` might miss.

## Pull Request Process

1. Fork the repo and create a feature branch
2. Run `npm run build` — must pass without errors
3. Write a clear PR description referencing any related issues
4. Ensure your commits follow [conventional commits](https://www.conventionalcommits.org/)

## Code Style

- TypeScript with strict typing
- Tailwind CSS v4 utility classes — no custom CSS in components
- Design tokens defined in `src/styles/global.css` (colors, fonts, animations)
- English for all code, variable names, and content
- No comments unless they explain **why**, not **what**

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
