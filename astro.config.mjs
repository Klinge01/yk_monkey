import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Always use base: '/' for builds
// Runtime base path detection handles GitHub Pages automatically
// This allows the same build to work on:
// - localhost (no base path)
// - GitHub Pages (with /yk_monkey/ base path detected at runtime)
// - Production (no base path)
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  base: '/', // Always use root - runtime detection handles GitHub Pages
  build: {
    assets: 'assets'
  },
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: true
    }
  }
});


