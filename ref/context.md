# Contexto — Wave Ecosystem Web

## Propósito
Landing page central para presentar todas las herramientas del ecosistema Wave y reducir la fricción para nuevos usuarios.

## Ecosistema Wave

| Herramienta | Rol | Repo | Estado |
| ----------- | --- | ---- | ------ |
| cdpwave | Librería CDP (Chrome DevTools Protocol) para Python | https://github.com/MathiasPaulenko/cdpwave | Publicado |
| bidiwave | Librería WebDriver BiDi (W3C) para Python | https://github.com/MathiasPaulenko/bidiwave | Publicado |
| wavexis | Framework de automatización que envuelve cdpwave/bidiwave | https://github.com/MathiasPaulenko/wavexis | Publicado |
| wavexis-mcp | Servidor MCP para control de navegador desde LLMs | https://github.com/MathiasPaulenko/wavexis-mcp | Publicado |
| browsix | CLI de automatización de navegador que envuelve cdpwave/bidiwave | (repo por crear) | En diseño |

## Secciones sugeridas para la landing
1. Hero con tagline y CTAs (instalación, docs, GitHub).
2. Grid de herramientas con tarjetas (ícono, descripción, repo, docs, instalación).
3. Comparativa: CDP vs BiDi vs MCP vs CLI.
4. Casos de uso comunes (scraping, testing, screenshots, automatización).
5. Diagrama de relaciones entre herramientas.
6. Roadmap del ecosistema.
7. Link a contribuir y a unirse al ecosistema.

## Stack candidato
- Astro / Vite / Next.js (SSG para rendimiento y SEO).
- Tailwind CSS.
- MDX para páginas de docs y casos de uso.
- Despliegue en GitHub Pages / Vercel.

## Referencias
- `brainstorming/app/ecosystems.yaml` — definición del ecosistema Wave.
- `brainstorming/ideas/web-apps/README.md` — idea original "Wave Landing".
