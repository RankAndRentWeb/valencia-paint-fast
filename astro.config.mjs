import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  site: 'https://pintores-valencia.com',
  trailingSlash: 'always',
  output: 'static',
  adapter: vercel(),
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