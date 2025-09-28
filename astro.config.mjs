import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pintores-valencia.com',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // Mantener tus estilos existentes
    }),
    sitemap()
  ],
  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
}); 