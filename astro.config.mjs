import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://pintores-valencia.com',
  trailingSlash: 'always',
  output: 'static',
  integrations: [
    tailwind(), 
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('404'),
      serialize: (item) => item,
      entryLimit: 45000
    }), 
    react()
  ],
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