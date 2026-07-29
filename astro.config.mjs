import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mathiaspaulenko.github.io',
  base: '/wave-ecosystem-web',
  vite: {
    plugins: [tailwindcss()],
  },
});
