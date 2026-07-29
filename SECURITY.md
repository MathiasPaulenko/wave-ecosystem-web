# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly.

**Do NOT open a public GitHub issue.**

Instead, email **mathias.paulenko@outlook.com** with:

1. A description of the vulnerability
2. Steps to reproduce
3. Potential impact
4. Suggested fix (if any)

You will receive a response within 48 hours. If the vulnerability is confirmed, a fix will be prioritized and a security advisory will be published.

## Scope

This is a static landing page (Astro SSG). Security considerations:

- **No backend**: The site is fully static. No server-side code, no databases, no user input processing.
- **Dependencies**: Keep npm dependencies updated. Run `npm audit` regularly.
- **GitHub Actions**: The deploy workflow uses `actions/checkout@v4`, `actions/setup-node@v4`, `actions/upload-pages-artifact@v3`, and `actions/deploy-pages@v4`. Keep them pinned to major versions.
- **Content**: All content is defined in `src/data/content.ts`. No user-generated content is accepted.

## Supported Versions

| Version | Supported |
|---------|-----------|
| latest  | Yes       |
