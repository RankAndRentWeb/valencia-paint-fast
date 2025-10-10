import fs from 'fs';
import path from 'path';

const distDir = 'dist';

// Leer sitemap-index.xml
const sitemapIndexPath = path.join(distDir, 'sitemap-index.xml');
const sitemapPath = path.join(distDir, 'sitemap.xml');

if (fs.existsSync(sitemapIndexPath)) {
  // Copiar sitemap-index.xml a sitemap.xml
  fs.copyFileSync(sitemapIndexPath, sitemapPath);
  console.log('✅ Copiado sitemap-index.xml → sitemap.xml');
} else {
  console.log('❌ No se encontró sitemap-index.xml');
}