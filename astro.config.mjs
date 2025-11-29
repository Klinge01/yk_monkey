import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Get base path from environment variable (for GitHub Pages) or use default
// If deploying to GitHub Pages with a repo name like 'YAK_Site', set BASE_PATH=/YAK_Site/
// If your repo is 'username.github.io', leave BASE_PATH empty or unset
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  base: base,
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


