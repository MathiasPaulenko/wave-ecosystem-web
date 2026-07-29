<div align="center">

<!-- Animated header banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:050d1c,50:22d3ee,100:34d399&height=180&section=header&text=Wave%20Ecosystem&fontSize=42&fontColor=f1f5f9&animation=fadeIn&fontAlignY=35" alt="Wave Ecosystem header" />

<!-- Logo -->
<img src="docs/assets/images/logo-wide.svg" alt="Wave Ecosystem" width="320">

<!-- Tagline -->
<h3>Browser automation — 100% Python, zero Node.js, zero Chromium download</h3>

<!-- Typing animation -->
<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=18&duration=3000&pause=1000&color=22D3EE&center=true&vCenter=true&width=500&lines=cdpwave+%C2%B7+CDP+for+Python;bidiwave+%C2%B7+WebDriver+BiDi+W3C;wavexis+%C2%B7+130%2B+CLI+commands;wavexis-mcp+%C2%B7+220+MCP+tools+for+LLMs" alt="Wave Ecosystem tools" />
</a>

<br/>

<!-- Badges -->
[![Live Site](https://img.shields.io/badge/%F0%9F%8C%90_Live-mathiaspaulenko.github.io-22d3ee?style=for-the-badge&labelColor=050d1c)](https://mathiaspaulenko.github.io/wave-ecosystem-web/)
[![Deploy](https://img.shields.io/github/actions/workflow/status/MathiasPaulenko/wave-ecosystem-web/deploy.yml?style=for-the-badge&label=deploy&labelColor=050d1c&color=34d399)](https://github.com/MathiasPaulenko/wave-ecosystem-web/actions)
[![License](https://img.shields.io/badge/license-MIT-34d399?style=for-the-badge&labelColor=050d1c)](./LICENSE)

</div>

---

## ⚡ About

The Wave Ecosystem is a suite of Python tools for browser automation covering the full spectrum — from low-level Chrome DevTools Protocol control to autonomous AI agents via MCP.

| Tool | Type | Description |
|------|------|-------------|
| [**cdpwave**](https://github.com/MathiasPaulenko/cdpwave) | Async library | Chrome DevTools Protocol for Python. 60 domains, 689 typed methods. |
| [**bidiwave**](https://github.com/MathiasPaulenko/bidiwave) | Async library | WebDriver BiDi (W3C) for Python. Chrome, Firefox & Edge. 27 event types. |
| [**wavexis**](https://github.com/MathiasPaulenko/wavexis) | CLI + REPL + HTTP | 130+ CLI commands, serve mode, stealth, CI assertions, Core Web Vitals. |
| [**wavexis-mcp**](https://github.com/MathiasPaulenko/wavexis-mcp) | MCP Server | 220 tools in 13 tiers for LLMs. Chrome + Firefox, structured errors. |

### Key features

- **No Node.js** — pure Python, no JS runtime needed
- **No Chromium download** — uses your existing browser
- **W3C WebDriver BiDi** — open standard, not proprietary
- **220 MCP tools** — native LLM integration
- **Stealth mode** — anti-bot detection evasion

---

## 🛠️ Tech Stack

<div align="center">

![Astro](https://img.shields.io/badge/Astro_5-FF5D01?style=flat-square&logo=astro&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222?style=flat-square&logo=github&logoColor=white)

</div>

| Layer | Tech |
|------|------|
| **Framework** | Astro 5 |
| **Styling** | Tailwind CSS v4 |
| **Fonts** | Unbounded · DM Sans · JetBrains Mono |
| **Deploy** | GitHub Pages (Actions) |

---

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/MathiasPaulenko/wave-ecosystem-web.git
cd wave-ecosystem-web

# Install
npm install

# Dev server → http://localhost:4321
npm run dev -- --host
```

---

## 📦 Build & Deploy

```bash
# Production build
npm run build

# Preview locally
npm run preview
```

Every push to `main` triggers the GitHub Actions workflow:

```text
push → checkout → npm ci → astro build → upload artifact → deploy to Pages
```

The site is published at **https://mathiaspaulenko.github.io/wave-ecosystem-web/**

---

## 📁 Project Structure

```text
.
├── .github/workflows/   # CI/CD deploy pipeline
├── docs/assets/         # Logo and images
├── public/              # Favicon and static assets
├── src/
│   ├── components/      # Astro components (Nav, Hero, ToolGrid, etc.)
│   ├── data/            # Centralized tool data (content.ts)
│   ├── layouts/         # Base layout
│   ├── pages/           # Main page (index.astro)
│   └── styles/          # Global styles and design tokens
├── ref/                 # Project context and references
├── astro.config.mjs     # Astro configuration
├── package.json
└── tsconfig.json
```

---

## 📄 License

MIT © [Mathias Paulenko](https://github.com/MathiasPaulenko)

---

<div align="center">

<!-- Animated footer banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:34d399,50:22d3ee,100:050d1c&height=100&section=footer" alt="footer" />

</div>
