import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://pintores-valencia.com',
  trailingSlash: 'always',
  output: 'static',
  integrations: [tailwind(), sitemap(), react()],
  markdown: {
    remarkPlugins: [
      (await import('./src/plugins/remark-callouts.ts')).default
    ]
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
});