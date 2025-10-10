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
      filter: (page) => !page.includes('/404'),
      customPages: [],
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
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