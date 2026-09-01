// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://code-extreme.com',
  vite: { plugins: [tailwindcss()] },
});
