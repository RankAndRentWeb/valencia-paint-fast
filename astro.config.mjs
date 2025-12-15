import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: 'https://pintores-valencia.com',
  trailingSlash: 'always',
  output: 'server',
  adapter: vercel(),
  redirects: {
    '/servicios/pintura-exterior/': '/servicios/pintura-exterior-fachadas/',
    '/servicios/impermeabilizacion/': '/servicios/impermeabilizacion-terrazas/',
    '/blog/': '/blogs/',
    '/blog/:category/': '/blogs/:category/',
    '/blog/:category/:slug/': '/blogs/:category/:slug/',
  },
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