import fs from 'fs/promises';
import path from 'path';

const clientDistDir = path.resolve(process.cwd(), 'dist', 'client');
const sourceSitemap = path.join(clientDistDir, 'sitemap-index.xml');
const destSitemap = path.join(clientDistDir, 'sitemap.xml');

try {
  await fs.rename(sourceSitemap, destSitemap);
  console.log('✅ Sitemap successfully renamed to sitemap.xml');
} catch (error) {
  if (error.code === 'ENOENT') {
    console.error('❌ No se encontró sitemap-index.xml en dist/client/');
  } else {
    console.error('❌ Error renaming sitemap:', error);
  }
  process.exit(1);
}
