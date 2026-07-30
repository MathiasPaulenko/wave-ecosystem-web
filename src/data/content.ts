type L = { en: string; es: string };

export interface Tool {
  name: string;
  tagline: L;
  description: L;
  repo: string;
  repoName: string;
  docs: string;
  status: 'published' | 'design';
  install?: string;
  icon: string;
  accent: 'wave' | 'foam' | 'coral';
  features: L[];
  stats: { label: L; value: string }[];
}

export const tools: Tool[] = [
  {
    name: 'cdpwave',
    tagline: { en: 'Chrome DevTools Protocol for Python', es: 'Chrome DevTools Protocol para Python' },
    description: {
      en: 'Python library that talks to Chrome via direct WebSocket. No Node.js, no ChromeDriver, no Chromium downloads. 60 CDP domains, 689 typed methods, async-first with mypy --strict.',
      es: 'Librería Python que habla con Chrome vía WebSocket directo. Sin Node.js, sin ChromeDriver, sin descargas de Chromium. 60 dominios CDP, 689 métodos tipados, async-first con mypy --strict.',
    },
    repo: 'https://github.com/MathiasPaulenko/cdpwave',
    repoName: 'MathiasPaulenko/cdpwave',
    docs: 'https://mathiaspaulenko.github.io/cdpwave/',
    status: 'published',
    install: 'pip install cdpwave',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48"><defs><linearGradient id="cdp-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#2196F3"/><stop offset="100%" stop-color="#0D47A1"/></linearGradient></defs><rect x="32" y="32" width="448" height="448" rx="96" ry="96" fill="url(#cdp-bg)"/><path d="M 112 240 Q 176 180 240 240 T 368 240 T 400 240" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" opacity="0.35"/><path d="M 112 290 Q 176 230 240 290 T 368 290 T 400 290" fill="none" stroke="#FFFFFF" stroke-width="12" stroke-linecap="round"/><path d="M 196 370 L 168 386 L 196 402" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/><path d="M 316 370 L 344 386 L 316 402" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/><line x1="296" y1="362" x2="216" y2="410" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity="0.5"/></svg>',
    accent: 'wave',
    features: [
      { en: '60 CDP domains', es: '60 dominios CDP' },
      { en: '689 typed methods', es: '689 métodos tipados' },
      { en: 'Direct WebSocket', es: 'WebSocket directo' },
      { en: 'mypy --strict', es: 'mypy --strict' },
      { en: 'Async-first', es: 'Async-first' },
      { en: 'Browser detection', es: 'Detección de navegador' },
    ],
    stats: [
      { label: { en: 'Domains', es: 'Dominios' }, value: '60' },
      { label: { en: 'Methods', es: 'Métodos' }, value: '689' },
      { label: { en: 'Tests', es: 'Tests' }, value: '1424' },
    ],
  },
  {
    name: 'bidiwave',
    tagline: { en: 'WebDriver BiDi (W3C) for Python', es: 'WebDriver BiDi (W3C) para Python' },
    description: {
      en: 'Python implementation of the W3C WebDriver BiDi standard (WD 2025-07-28). Cross-browser: Chrome, Firefox and Edge. 27 event types, Pydantic v2 models, network interception, emulation, preload scripts and CDP bridge.',
      es: 'Implementación Python del estándar W3C WebDriver BiDi (WD 2025-07-28). Cross-browser: Chrome, Firefox y Edge. 27 tipos de eventos, modelos Pydantic v2, interceptación de red, emulación, preload scripts y CDP bridge.',
    },
    repo: 'https://github.com/MathiasPaulenko/bidiwave',
    repoName: 'MathiasPaulenko/bidiwave',
    docs: 'https://mathiaspaulenko.github.io/bidiwave/',
    status: 'published',
    install: 'pip install bidiwave',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48"><defs><linearGradient id="bidi-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3F51B5"/><stop offset="100%" stop-color="#1A237E"/></linearGradient></defs><rect x="32" y="32" width="448" height="448" rx="96" ry="96" fill="url(#bidi-bg)"/><path d="M 112 240 Q 176 180 240 240 T 368 240 T 400 240" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" opacity="0.35"/><path d="M 112 290 Q 176 230 240 290 T 368 290 T 400 290" fill="none" stroke="#FFFFFF" stroke-width="12" stroke-linecap="round"/><line x1="196" y1="386" x2="316" y2="386" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity="0.85"/><path d="M 208 374 L 194 386 L 208 398" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/><path d="M 304 374 L 318 386 L 304 398" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/></svg>',
    accent: 'foam',
    features: [
      { en: 'W3C WD 2025-07-28', es: 'W3C WD 2025-07-28' },
      { en: 'Chrome + Firefox + Edge', es: 'Chrome + Firefox + Edge' },
      { en: '27 event types', es: '27 tipos de eventos' },
      { en: 'Pydantic v2', es: 'Pydantic v2' },
      { en: 'CDP bridge', es: 'CDP bridge' },
      { en: 'Auto-reconnect', es: 'Reconexión auto' },
    ],
    stats: [
      { label: { en: 'Events', es: 'Eventos' }, value: '27' },
      { label: { en: 'Browsers', es: 'Navegadores' }, value: '3' },
      { label: { en: 'Standard', es: 'Estándar' }, value: 'W3C' },
    ],
  },
  {
    name: 'wavexis',
    tagline: { en: 'Browser automation CLI', es: 'CLI de automatización de navegador' },
    description: {
      en: 'CLI that wraps cdpwave and bidiwave. 130+ top-level commands, 480+ sub-commands, 743 backend methods. Interactive REPL, HTTP serve mode, stealth, CI assertions, Core Web Vitals, record & replay, Lighthouse, multi-action YAML.',
      es: 'CLI que envuelve cdpwave y bidiwave. 130+ comandos top-level, 480+ sub-comandos, 743 métodos backend. REPL interactivo, serve mode HTTP, stealth, CI assertions, Core Web Vitals, record & replay, Lighthouse, multi-action YAML.',
    },
    repo: 'https://github.com/MathiasPaulenko/wavexis',
    repoName: 'MathiasPaulenko/wavexis',
    docs: 'https://mathiaspaulenko.github.io/wavexis/',
    status: 'published',
    install: 'pip install wavexis[cdp]',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48"><defs><linearGradient id="wxs-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3F51B5"/><stop offset="100%" stop-color="#1A237E"/></linearGradient></defs><rect x="32" y="32" width="448" height="448" rx="96" ry="96" fill="url(#wxs-bg)"/><path d="M 112 256 Q 176 196 240 256 T 368 256 T 400 256" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" opacity="0.4"/><path d="M 112 320 Q 176 260 240 320 T 368 320 T 400 320" fill="none" stroke="#FFFFFF" stroke-width="12" stroke-linecap="round"/></svg>',
    accent: 'coral',
    features: [
      { en: '130+ CLI commands', es: '130+ comandos CLI' },
      { en: 'Interactive REPL', es: 'REPL interactivo' },
      { en: 'HTTP serve mode', es: 'Serve mode HTTP' },
      { en: 'Stealth anti-bot', es: 'Stealth anti-bot' },
      { en: 'CI assertions', es: 'CI assertions' },
      { en: 'Record & replay', es: 'Record & replay' },
    ],
    stats: [
      { label: { en: 'Commands', es: 'Comandos' }, value: '130+' },
      { label: { en: 'Sub-commands', es: 'Sub-comandos' }, value: '480+' },
      { label: { en: 'Methods', es: 'Métodos' }, value: '743' },
    ],
  },
  {
    name: 'wavexis-mcp',
    tagline: { en: 'MCP server — 220 tools for LLMs', es: 'Servidor MCP — 220 tools para LLMs' },
    description: {
      en: 'MCP server that exposes wavexis to LLMs. 220 tools in 13 capability tiers. Chrome + Firefox, CDP + BiDi. ~5MB install vs ~400MB for Playwright MCP. Stealth, structured errors with suggestions, multi-action YAML, wavexis_act for NL.',
      es: 'Servidor MCP que expone wavexis a LLMs. 220 tools en 13 tiers de capacidades. Chrome + Firefox, CDP + BiDi. ~5MB install vs ~400MB de Playwright MCP. Stealth, errores estructurados con suggestions, multi-action YAML, wavexis_act para NL.',
    },
    repo: 'https://github.com/MathiasPaulenko/wavexis-mcp',
    repoName: 'MathiasPaulenko/wavexis-mcp',
    docs: 'https://mathiaspaulenko.github.io/wavexis-mcp/',
    status: 'published',
    install: 'uvx wavexis-mcp',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48"><defs><linearGradient id="mcp-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3F51B5"/><stop offset="100%" stop-color="#1A237E"/></linearGradient></defs><rect x="32" y="32" width="448" height="448" rx="96" ry="96" fill="url(#mcp-bg)"/><path d="M 112 240 Q 176 180 240 240 T 368 240 T 400 240" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" opacity="0.4"/><path d="M 112 300 Q 176 240 240 300 T 368 300 T 400 300" fill="none" stroke="#FFFFFF" stroke-width="12" stroke-linecap="round"/><circle cx="160" cy="380" r="14" fill="#FFFFFF" opacity="0.9"/><circle cx="256" cy="380" r="14" fill="#FFFFFF" opacity="0.9"/><circle cx="352" cy="380" r="14" fill="#FFFFFF" opacity="0.9"/><line x1="174" y1="380" x2="242" y2="380" stroke="#FFFFFF" stroke-width="4" opacity="0.5"/><line x1="270" y1="380" x2="338" y2="380" stroke="#FFFFFF" stroke-width="4" opacity="0.5"/></svg>',
    accent: 'wave',
    features: [
      { en: '220 MCP tools', es: '220 MCP tools' },
      { en: '13 capability tiers', es: '13 capability tiers' },
      { en: 'Chrome + Firefox', es: 'Chrome + Firefox' },
      { en: 'Stealth mode', es: 'Stealth mode' },
      { en: 'Errors with suggestions', es: 'Errores con suggestion' },
      { en: 'wavexis_act (NL)', es: 'wavexis_act (NL)' },
    ],
    stats: [
      { label: { en: 'Tools', es: 'Tools' }, value: '220' },
      { label: { en: 'Tiers', es: 'Tiers' }, value: '13' },
      { label: { en: 'Coverage', es: 'Coverage' }, value: '90%' },
    ],
  },
];

export interface ComparisonRow {
  feature: L;
  cdp: L;
  bidi: L;
  cli: L;
  mcp: L;
}

export const comparison: ComparisonRow[] = [
  {
    feature: { en: 'Abstraction level', es: 'Nivel de abstracción' },
    cdp: { en: 'Low (protocol)', es: 'Bajo (protocolo)' },
    bidi: { en: 'Low (W3C standard)', es: 'Bajo (estándar W3C)' },
    cli: { en: 'Medium (commands)', es: 'Medio (comandos)' },
    mcp: { en: 'High (LLM tools)', es: 'Alto (LLM tools)' },
  },
  {
    feature: { en: 'Browsers', es: 'Navegadores' },
    cdp: { en: 'Chrome/Edge/Brave', es: 'Chrome/Edge/Brave' },
    bidi: { en: 'Chrome/Firefox/Edge', es: 'Chrome/Firefox/Edge' },
    cli: { en: 'Via cdpwave/bidiwave', es: 'Vía cdpwave/bidiwave' },
    mcp: { en: 'Chrome + Firefox', es: 'Chrome + Firefox' },
  },
  {
    feature: { en: 'Node.js required', es: 'Node.js requerido' },
    cdp: { en: 'No', es: 'No' },
    bidi: { en: 'No', es: 'No' },
    cli: { en: 'No', es: 'No' },
    mcp: { en: 'No', es: 'No' },
  },
  {
    feature: { en: 'Chromium download', es: 'Descarga Chromium' },
    cdp: { en: 'No', es: 'No' },
    bidi: { en: 'No', es: 'No' },
    cli: { en: 'No', es: 'No' },
    mcp: { en: 'No (~5MB)', es: 'No (~5MB)' },
  },
  {
    feature: { en: 'Ideal for', es: 'Ideal para' },
    cdp: { en: 'Fine CDP control', es: 'Control fino CDP' },
    bidi: { en: 'Multi-browser W3C', es: 'Multi-navegador W3C' },
    cli: { en: 'Quick tasks & scripts', es: 'Tareas rápidas y scripts' },
    mcp: { en: 'Autonomous AI agents', es: 'Agentes IA autónomos' },
  },
  {
    feature: { en: 'Standard', es: 'Estándar' },
    cdp: { en: 'Google proprietary', es: 'Propietario Google' },
    bidi: { en: 'W3C WD 2025-07-28', es: 'W3C WD 2025-07-28' },
    cli: { en: 'Custom', es: 'Propio' },
    mcp: { en: 'Anthropic MCP', es: 'Anthropic MCP' },
  },
  {
    feature: { en: 'Type', es: 'Tipo' },
    cdp: { en: 'Async library', es: 'Librería async' },
    bidi: { en: 'Async library', es: 'Librería async' },
    cli: { en: 'CLI + REPL + HTTP server', es: 'CLI + REPL + HTTP server' },
    mcp: { en: 'MCP server (220 tools)', es: 'MCP server (220 tools)' },
  },
];

export interface UseCase {
  title: L;
  description: L;
  icon: string;
  tools: string[];
}

export const useCases: UseCase[] = [
  {
    title: { en: 'Web Scraping', es: 'Web Scraping' },
    description: {
      en: 'Extract data from dynamic pages with rendered JavaScript. Intercept network requests, block domains, mock responses.',
      es: 'Extrae datos de páginas dinámicas con JavaScript renderizado. Intercepta peticiones de red, bloquea dominios, mockea respuestas.',
    },
    icon: '🕷️',
    tools: ['cdpwave', 'bidiwave', 'wavexis'],
  },
  {
    title: { en: 'Screenshots & PDF', es: 'Screenshots & PDF' },
    description: {
      en: 'Capture full-page screenshots, specific elements or generate PDFs. A single command from the CLI.',
      es: 'Captura screenshots de página completa, elementos específicos o genera PDFs. Un solo comando desde la CLI.',
    },
    icon: '📸',
    tools: ['wavexis', 'cdpwave'],
  },
  {
    title: { en: 'AI Agents', es: 'Agentes IA' },
    description: {
      en: 'LLMs that navigate websites autonomously: fill forms, click, extract data. 220 MCP tools with structured errors.',
      es: 'LLMs que navegan webs de forma autónoma: rellenar formularios, clicking, extracción de datos. 220 tools MCP con errores estructurados.',
    },
    icon: '🤖',
    tools: ['wavexis-mcp'],
  },
  {
    title: { en: 'Testing & CI', es: 'Testing & CI' },
    description: {
      en: 'CI assertions, Core Web Vitals scoring, Lighthouse audits and visual diff. Integration with CI/CD pipelines.',
      es: 'CI assertions, Core Web Vitals scoring, Lighthouse audits y visual diff. Integración con pipelines CI/CD.',
    },
    icon: '🧪',
    tools: ['wavexis'],
  },
  {
    title: { en: 'HTTP Serve Mode', es: 'Serve Mode HTTP' },
    description: {
      en: 'Expose wavexis as a REST API with WebSocket streaming. Screenshots, eval, scrape via HTTP from any language.',
      es: 'Expón wavexis como API REST con WebSocket streaming. Screenshots, eval, scrape vía HTTP desde cualquier lenguaje.',
    },
    icon: '🌐',
    tools: ['wavexis'],
  },
  {
    title: { en: 'Performance & Monitoring', es: 'Performance & Monitoring' },
    description: {
      en: 'Measure LCP, CLS, INP, FCP, TTFB. CPU traces, heap snapshots, code coverage. Core Web Vitals with scoring and budgets.',
      es: 'Mide LCP, CLS, INP, FCP, TTFB. CPU traces, heap snapshots, code coverage. Core Web Vitals con scoring y budgets.',
    },
    icon: '📊',
    tools: ['cdpwave', 'wavexis'],
  },
];

export interface RoadmapItem {
  phase: string;
  title: L;
  description: L;
  status: 'done' | 'active' | 'planned';
}

export const roadmap: RoadmapItem[] = [
  {
    phase: 'Q1 2025',
    title: { en: 'Ecosystem foundations', es: 'Fundaciones del ecosistema' },
    description: {
      en: 'Release of cdpwave (60 CDP domains, 689 methods) and bidiwave (W3C WebDriver BiDi) as standalone libraries.',
      es: 'Publicación de cdpwave (60 dominios CDP, 689 métodos) y bidiwave (W3C WebDriver BiDi) como librerías independientes.',
    },
    status: 'done',
  },
  {
    phase: 'Q2 2025',
    title: { en: 'Unified CLI', es: 'CLI unificada' },
    description: {
      en: 'Launch of wavexis: 130+ CLI commands, interactive REPL, HTTP serve mode, stealth and multi-action YAML.',
      es: 'Lanzamiento de wavexis: 130+ comandos CLI, REPL interactivo, serve mode HTTP, stealth y multi-action YAML.',
    },
    status: 'done',
  },
  {
    phase: 'Q3 2025',
    title: { en: 'LLM integration', es: 'Integración con LLMs' },
    description: {
      en: 'wavexis-mcp: MCP server with 220 tools in 13 tiers. Chrome + Firefox, structured errors with suggestions.',
      es: 'wavexis-mcp: servidor MCP con 220 tools en 13 tiers. Chrome + Firefox, errores estructurados con suggestions.',
    },
    status: 'done',
  },
  {
    phase: 'Q1 2026',
    title: { en: 'Expanded ecosystem', es: 'Ecosistema expandido' },
    description: {
      en: 'Community plugins, YAML recipe marketplace, CI/CD integrations and more browsers.',
      es: 'Plugins comunitarios, marketplace de recetas YAML, integraciones con CI/CD y más navegadores.',
    },
    status: 'planned',
  },
];

export interface AIResource {
  name: string;
  url: string;
}

export interface AIResourceGroup {
  id: string;
  title: L;
  description: L;
  icon: string;
  accent: 'wave' | 'foam' | 'coral';
  resources: AIResource[];
}

export const aiResources: AIResourceGroup[] = [
  {
    id: 'skills',
    title: { en: 'Skills', es: 'Skills' },
    description: {
      en: 'Reusable AI skills for Claude, Cursor and Windsurf. Cover testing, scraping, debugging, performance, accessibility, CI/CD and more.',
      es: 'Skills reutilizables para Claude, Cursor y Windsurf. Cubren testing, scraping, debugging, performance, accesibilidad, CI/CD y más.',
    },
    icon: '⚡',
    accent: 'wave',
    resources: [
      { name: 'wave-ecosystem-guide', url: 'https://github.com/MathiasPaulenko/ai-toolkit/tree/main/skills/wave-ecosystem-guide' },
      { name: 'wavexis-cli-automation', url: 'https://github.com/MathiasPaulenko/ai-toolkit/tree/main/skills/wavexis-cli-automation' },
      { name: 'wavexis-mcp-agent-integration', url: 'https://github.com/MathiasPaulenko/ai-toolkit/tree/main/skills/wavexis-mcp-agent-integration' },
      { name: 'cdpwave-testing', url: 'https://github.com/MathiasPaulenko/ai-toolkit/tree/main/skills/cdpwave-testing' },
      { name: 'bidiwave-cross-browser', url: 'https://github.com/MathiasPaulenko/ai-toolkit/tree/main/skills/bidiwave-cross-browser' },
      { name: 'wavexis-web-scraping', url: 'https://github.com/MathiasPaulenko/ai-toolkit/tree/main/skills/wavexis-web-scraping' },
      { name: 'wavexis-performance-audit', url: 'https://github.com/MathiasPaulenko/ai-toolkit/tree/main/skills/wavexis-performance-audit' },
      { name: 'wavexis-accessibility', url: 'https://github.com/MathiasPaulenko/ai-toolkit/tree/main/skills/wavexis-accessibility' },
      { name: 'wavexis-ci-cd', url: 'https://github.com/MathiasPaulenko/ai-toolkit/tree/main/skills/wavexis-ci-cd' },
      { name: 'wavexis-network-testing', url: 'https://github.com/MathiasPaulenko/ai-toolkit/tree/main/skills/wavexis-network-testing' },
      { name: 'wavexis-session-recording', url: 'https://github.com/MathiasPaulenko/ai-toolkit/tree/main/skills/wavexis-session-recording' },
      { name: 'cdpwave-debugging', url: 'https://github.com/MathiasPaulenko/ai-toolkit/tree/main/skills/cdpwave-debugging' },
      { name: 'bidiwave-network-interception', url: 'https://github.com/MathiasPaulenko/ai-toolkit/tree/main/skills/bidiwave-network-interception' },
    ],
  },
  {
    id: 'agents',
    title: { en: 'Agents', es: 'Agentes' },
    description: {
      en: 'Pre-configured AI agents for autonomous browser automation, test architecture and MCP orchestration.',
      es: 'Agentes IA pre-configurados para automatización autónoma de navegador, arquitectura de tests y orquestación MCP.',
    },
    icon: '🤖',
    accent: 'foam',
    resources: [
      { name: 'wave-automation-engineer', url: 'https://github.com/MathiasPaulenko/ai-toolkit/tree/main/agents/wave-automation-engineer' },
      { name: 'wave-test-architect', url: 'https://github.com/MathiasPaulenko/ai-toolkit/tree/main/agents/wave-test-architect' },
      { name: 'wave-mcp-orchestrator', url: 'https://github.com/MathiasPaulenko/ai-toolkit/tree/main/agents/wave-mcp-orchestrator' },
    ],
  },
  {
    id: 'rules',
    title: { en: 'Rules', es: 'Reglas' },
    description: {
      en: 'Coding rules and conventions for Wave ecosystem projects. Enforce best practices across teams and AI agents.',
      es: 'Reglas de código y convenciones para proyectos del ecosistema Wave. Aplica best practices en equipos y agentes IA.',
    },
    icon: '📐',
    accent: 'coral',
    resources: [
      { name: 'wave-ecosystem-rules', url: 'https://github.com/MathiasPaulenko/ai-toolkit/blob/main/rules/coding/wave-ecosystem-rules.md' },
    ],
  },
  {
    id: 'workflows',
    title: { en: 'Workflows', es: 'Workflows' },
    description: {
      en: 'Pre-built workflows for cross-browser testing, CI visual regression and MCP setup. Ready to use in Windsurf.',
      es: 'Workflows pre-construidos para testing cross-browser, CI visual regression y setup de MCP. Listos para usar en Windsurf.',
    },
    icon: '🔄',
    accent: 'wave',
    resources: [
      { name: 'wave-cross-browser-test', url: 'https://github.com/MathiasPaulenko/ai-toolkit/blob/main/workflows/wave-cross-browser-test.md' },
      { name: 'wave-ci-visual-regression', url: 'https://github.com/MathiasPaulenko/ai-toolkit/blob/main/workflows/wave-ci-visual-regression.md' },
      { name: 'wave-mcp-setup', url: 'https://github.com/MathiasPaulenko/ai-toolkit/blob/main/workflows/wave-mcp-setup.md' },
    ],
  },
];
