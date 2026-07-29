# 🌊 Wave Ecosystem

> Landing page del ecosistema **Wave** — automatización de navegador 100% Python, sin Node.js, sin descargas de Chromium.

[![Deploy to GitHub Pages](https://github.com/MathiasPaulenko/wave-ecosystem-web/actions/workflows/deploy.yml/badge.svg)](https://github.com/MathiasPaulenko/wave-ecosystem-web/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-22d3ee.svg)](https://opensource.org/licenses/MIT)

## Sobre el proyecto

El ecosistema Wave es un conjunto de herramientas Python para automatización de navegador que cubre todo el espectro: desde control a bajo nivel del Chrome DevTools Protocol hasta agentes IA autónomos vía MCP.

| Herramienta | Tipo | Descripción |
|-------------|------|-------------|
| [**cdpwave**](https://github.com/MathiasPaulenko/cdpwave) | Librería async | Chrome DevTools Protocol para Python. 60 dominios, 689 métodos tipados. |
| [**bidiwave**](https://github.com/MathiasPaulenko/bidiwave) | Librería async | WebDriver BiDi (W3C) para Python. Chrome, Firefox y Edge. 27 tipos de eventos. |
| [**wavexis**](https://github.com/MathiasPaulenko/wavexis) | CLI + REPL + HTTP | 130+ comandos CLI, serve mode HTTP, stealth, CI assertions, Core Web Vitals. |
| [**wavexis-mcp**](https://github.com/MathiasPaulenko/wavexis-mcp) | MCP Server | 220 tools en 13 tiers para LLMs. Chrome + Firefox, errores estructurados. |

### Características clave

- **Sin Node.js** — todo es Python puro
- **Sin descargas de Chromium** — usa tu navegador existente
- **W3C WebDriver BiDi** — estándar abierto, no propietario
- **220 MCP tools** — integración nativa con LLMs
- **Stealth mode** — evita detección anti-bot

## Tech stack

- [Astro 5](https://astro.build) — framework web
- [Tailwind CSS v4](https://tailwindcss.com) — estilos
- [GitHub Pages](https://pages.github.com) — hosting
- [GitHub Actions](https://github.com/features/actions) — CI/CD

## Estructura

```
.
├── .github/workflows/   # Workflow de despliegue a GitHub Pages
├── public/              # Favicon y assets estáticos
├── src/
│   ├── components/      # Componentes Astro (Nav, Hero, ToolGrid, etc.)
│   ├── data/            # Datos centralizados de herramientas (content.ts)
│   ├── layouts/         # Layout base
│   ├── pages/           # Página principal (index.astro)
│   └── styles/          # Estilos globales y design tokens
├── ref/                 # Contexto y referencias del proyecto
├── astro.config.mjs     # Configuración de Astro
├── package.json
└── tsconfig.json
```

## Desarrollo

```bash
npm install
npm run dev -- --host
```

Abre `http://localhost:4321` en tu navegador.

## Despliegue

El despliegue es automático via GitHub Actions al hacer push a `main`. El sitio se publica en:

**https://mathiaspaulenko.github.io/wave-ecosystem-web/**

## Licencia

MIT © [Mathias Paulenko](https://github.com/MathiasPaulenko)
