import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://pintores-valencia.com',
  trailingSlash: 'always',
  output: 'static',
  adapter: vercel(),
  integrations: [tailwind(), sitemap(), react()],
  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
});