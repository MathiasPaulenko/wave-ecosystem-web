export interface Tool {
  name: string;
  tagline: string;
  description: string;
  repo: string;
  repoName: string;
  docs: string;
  status: 'published' | 'design';
  install?: string;
  icon: string;
  accent: 'wave' | 'foam' | 'coral';
  features: string[];
  stats: { label: string; value: string }[];
}

export const tools: Tool[] = [
  {
    name: 'cdpwave',
    tagline: 'Chrome DevTools Protocol para Python',
    description:
      'Librería Python que habla con Chrome vía WebSocket directo. Sin Node.js, sin ChromeDriver, sin descargas de Chromium. 60 dominios CDP, 689 métodos tipados, async-first con mypy --strict.',
    repo: 'https://github.com/MathiasPaulenko/cdpwave',
    repoName: 'MathiasPaulenko/cdpwave',
    docs: 'https://mathiaspaulenko.github.io/cdpwave/',
    status: 'published',
    install: 'pip install cdpwave',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48"><defs><linearGradient id="cdp-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#2196F3"/><stop offset="100%" stop-color="#0D47A1"/></linearGradient></defs><rect x="32" y="32" width="448" height="448" rx="96" ry="96" fill="url(#cdp-bg)"/><path d="M 112 240 Q 176 180 240 240 T 368 240 T 400 240" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" opacity="0.35"/><path d="M 112 290 Q 176 230 240 290 T 368 290 T 400 290" fill="none" stroke="#FFFFFF" stroke-width="12" stroke-linecap="round"/><path d="M 196 370 L 168 386 L 196 402" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/><path d="M 316 370 L 344 386 L 316 402" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/><line x1="296" y1="362" x2="216" y2="410" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity="0.5"/></svg>',
    accent: 'wave',
    features: ['60 dominios CDP', '689 métodos tipados', 'WebSocket directo', 'mypy --strict', 'Async-first', 'Detección de navegador'],
    stats: [
      { label: 'Dominios', value: '60' },
      { label: 'Métodos', value: '689' },
      { label: 'Tests', value: '1424' },
    ],
  },
  {
    name: 'bidiwave',
    tagline: 'WebDriver BiDi (W3C) para Python',
    description:
      'Implementación Python del estándar W3C WebDriver BiDi (WD 2025-07-28). Cross-browser: Chrome, Firefox y Edge. 27 tipos de eventos, modelos Pydantic v2, interceptación de red, emulación, preload scripts y CDP bridge.',
    repo: 'https://github.com/MathiasPaulenko/bidiwave',
    repoName: 'MathiasPaulenko/bidiwave',
    docs: 'https://mathiaspaulenko.github.io/bidiwave/',
    status: 'published',
    install: 'pip install bidiwave',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48"><defs><linearGradient id="bidi-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3F51B5"/><stop offset="100%" stop-color="#1A237E"/></linearGradient></defs><rect x="32" y="32" width="448" height="448" rx="96" ry="96" fill="url(#bidi-bg)"/><path d="M 112 240 Q 176 180 240 240 T 368 240 T 400 240" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" opacity="0.35"/><path d="M 112 290 Q 176 230 240 290 T 368 290 T 400 290" fill="none" stroke="#FFFFFF" stroke-width="12" stroke-linecap="round"/><line x1="196" y1="386" x2="316" y2="386" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity="0.85"/><path d="M 208 374 L 194 386 L 208 398" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/><path d="M 304 374 L 318 386 L 304 398" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/></svg>',
    accent: 'foam',
    features: ['W3C WD 2025-07-28', 'Chrome + Firefox + Edge', '27 tipos de eventos', 'Pydantic v2', 'CDP bridge', 'Reconexión auto'],
    stats: [
      { label: 'Eventos', value: '27' },
      { label: 'Navegadores', value: '3' },
      { label: 'Estándar', value: 'W3C' },
    ],
  },
  {
    name: 'wavexis',
    tagline: 'CLI de automatización de navegador',
    description:
      'CLI que envuelve cdpwave y bidiwave. 130+ comandos top-level, 480+ sub-comandos, 743 métodos backend. REPL interactivo, serve mode HTTP, stealth, CI assertions, Core Web Vitals, record & replay, Lighthouse, multi-action YAML.',
    repo: 'https://github.com/MathiasPaulenko/wavexis',
    repoName: 'MathiasPaulenko/wavexis',
    docs: 'https://mathiaspaulenko.github.io/wavexis/',
    status: 'published',
    install: 'pip install wavexis[cdp]',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48"><defs><linearGradient id="wxs-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3F51B5"/><stop offset="100%" stop-color="#1A237E"/></linearGradient></defs><rect x="32" y="32" width="448" height="448" rx="96" ry="96" fill="url(#wxs-bg)"/><path d="M 112 256 Q 176 196 240 256 T 368 256 T 400 256" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" opacity="0.4"/><path d="M 112 320 Q 176 260 240 320 T 368 320 T 400 320" fill="none" stroke="#FFFFFF" stroke-width="12" stroke-linecap="round"/></svg>',
    accent: 'coral',
    features: ['130+ comandos CLI', 'REPL interactivo', 'Serve mode HTTP', 'Stealth anti-bot', 'CI assertions', 'Record & replay'],
    stats: [
      { label: 'Comandos', value: '130+' },
      { label: 'Sub-comandos', value: '480+' },
      { label: 'Métodos', value: '743' },
    ],
  },
  {
    name: 'wavexis-mcp',
    tagline: 'Servidor MCP — 220 tools para LLMs',
    description:
      'Servidor MCP que expone wavexis a LLMs. 220 tools en 13 tiers de capacidades. Chrome + Firefox, CDP + BiDi. ~5MB install vs ~400MB de Playwright MCP. Stealth, errores estructurados con suggestions, multi-action YAML, wavexis_act para NL.',
    repo: 'https://github.com/MathiasPaulenko/wavexis-mcp',
    repoName: 'MathiasPaulenko/wavexis-mcp',
    docs: 'https://mathiaspaulenko.github.io/wavexis-mcp/',
    status: 'published',
    install: 'uvx wavexis-mcp',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48"><defs><linearGradient id="mcp-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3F51B5"/><stop offset="100%" stop-color="#1A237E"/></linearGradient></defs><rect x="32" y="32" width="448" height="448" rx="96" ry="96" fill="url(#mcp-bg)"/><path d="M 112 240 Q 176 180 240 240 T 368 240 T 400 240" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" opacity="0.4"/><path d="M 112 300 Q 176 240 240 300 T 368 300 T 400 300" fill="none" stroke="#FFFFFF" stroke-width="12" stroke-linecap="round"/><circle cx="160" cy="380" r="14" fill="#FFFFFF" opacity="0.9"/><circle cx="256" cy="380" r="14" fill="#FFFFFF" opacity="0.9"/><circle cx="352" cy="380" r="14" fill="#FFFFFF" opacity="0.9"/><line x1="174" y1="380" x2="242" y2="380" stroke="#FFFFFF" stroke-width="4" opacity="0.5"/><line x1="270" y1="380" x2="338" y2="380" stroke="#FFFFFF" stroke-width="4" opacity="0.5"/></svg>',
    accent: 'wave',
    features: ['220 MCP tools', '13 capability tiers', 'Chrome + Firefox', 'Stealth mode', 'Errores con suggestion', 'wavexis_act (NL)'],
    stats: [
      { label: 'Tools', value: '220' },
      { label: 'Tiers', value: '13' },
      { label: 'Coverage', value: '90%' },
    ],
  },
];

export interface ComparisonRow {
  feature: string;
  cdp: string;
  bidi: string;
  cli: string;
  mcp: string;
}

export const comparison: ComparisonRow[] = [
  { feature: 'Nivel de abstracción', cdp: 'Bajo (protocolo)', bidi: 'Bajo (estándar W3C)', cli: 'Medio (comandos)', mcp: 'Alto (LLM tools)' },
  { feature: 'Navegadores', cdp: 'Chrome/Edge/Brave', bidi: 'Chrome/Firefox/Edge', cli: 'Vía cdpwave/bidiwave', mcp: 'Chrome + Firefox' },
  { feature: 'Node.js requerido', cdp: 'No', bidi: 'No', cli: 'No', mcp: 'No' },
  { feature: 'Descarga Chromium', cdp: 'No', bidi: 'No', cli: 'No', mcp: 'No (~5MB)' },
  { feature: 'Ideal para', cdp: 'Control fino CDP', bidi: 'Multi-navegador W3C', cli: 'Tareas rápidas y scripts', mcp: 'Agentes IA autónomos' },
  { feature: 'Estándar', cdp: 'Propietario Google', bidi: 'W3C WD 2025-07-28', cli: 'Propio', mcp: 'Anthropic MCP' },
  { feature: 'Tipo', cdp: 'Librería async', bidi: 'Librería async', cli: 'CLI + REPL + HTTP server', mcp: 'MCP server (220 tools)' },
];

export interface UseCase {
  title: string;
  description: string;
  icon: string;
  tools: string[];
}

export const useCases: UseCase[] = [
  {
    title: 'Web Scraping',
    description: 'Extrae datos de páginas dinámicas con JavaScript renderizado. Intercepta peticiones de red, bloquea dominios, mockea respuestas.',
    icon: '🕷️',
    tools: ['cdpwave', 'bidiwave', 'wavexis'],
  },
  {
    title: 'Screenshots & PDF',
    description: 'Captura screenshots de página completa, elementos específicos o genera PDFs. Un solo comando desde la CLI.',
    icon: '📸',
    tools: ['wavexis', 'cdpwave'],
  },
  {
    title: 'Agentes IA',
    description: 'LLMs que navegan webs de forma autónoma: rellenar formularios, clicking, extracción de datos. 220 tools MCP con errores estructurados.',
    icon: '🤖',
    tools: ['wavexis-mcp'],
  },
  {
    title: 'Testing & CI',
    description: 'CI assertions, Core Web Vitals scoring, Lighthouse audits y visual diff. Integración con pipelines CI/CD.',
    icon: '🧪',
    tools: ['wavexis'],
  },
  {
    title: 'Serve Mode HTTP',
    description: 'Expón wavexis como API REST con WebSocket streaming. Screenshots, eval, scrape vía HTTP desde cualquier lenguaje.',
    icon: '🌐',
    tools: ['wavexis'],
  },
  {
    title: 'Performance & Monitoring',
    description: 'Mide LCP, CLS, INP, FCP, TTFB. CPU traces, heap snapshots, code coverage. Core Web Vitals con scoring y budgets.',
    icon: '📊',
    tools: ['cdpwave', 'wavexis'],
  },
];

export interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  status: 'done' | 'active' | 'planned';
}

export const roadmap: RoadmapItem[] = [
  {
    phase: 'Q1 2025',
    title: 'Fundaciones del ecosistema',
    description: 'Publicación de cdpwave (60 dominios CDP, 689 métodos) y bidiwave (W3C WebDriver BiDi) como librerías independientes.',
    status: 'done',
  },
  {
    phase: 'Q2 2025',
    title: 'CLI unificada',
    description: 'Lanzamiento de wavexis: 130+ comandos CLI, REPL interactivo, serve mode HTTP, stealth y multi-action YAML.',
    status: 'done',
  },
  {
    phase: 'Q3 2025',
    title: 'Integración con LLMs',
    description: 'wavexis-mcp: servidor MCP con 220 tools en 13 tiers. Chrome + Firefox, errores estructurados con suggestions.',
    status: 'done',
  },
  {
    phase: 'Q1 2026',
    title: 'Ecosistema expandido',
    description: 'Plugins comunitarios, marketplace de recetas YAML, integraciones con CI/CD y más navegadores.',
    status: 'planned',
  },
];
