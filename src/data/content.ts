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
    icon: '⚡',
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
    icon: '🌊',
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
    icon: '🎯',
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
    icon: '🤖',
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
