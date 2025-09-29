// scripts/prerender.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chromium from '@sparticuz/chromium';
import puppeteer from 'puppeteer-core';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, '../dist');
const baseURL = 'http://localhost:4173'; // URL del preview de Vite

// Rutas a pre-renderizar
const routes = [
  '/',
  '/servicios',
  '/precios',
  '/presupuesto',
  '/contacto',
  '/trabajos',
  '/quienes-somos',
  '/quitar-gotele-alisar-paredes',
  '/pintura-interior-pisos-casas',
  '/pintura-exterior-fachadas',
  '/impermeabilizacion-terrazas-y-fachadas',
  '/pintura-locales-comerciales',
  '/pintura-comunidades',
  '/lacado-puertas-carpinteria',
  '/papel-pintado-vinilos',
  '/aviso-legal',
  '/politica-privacidad'
];

async function prerender() {
  console.log('🚀 Iniciando prerender...');

  // Recomendado para entornos serverless
  chromium.setHeadlessMode = true;
  chromium.setGraphicsMode = false;

  const browser = await puppeteer.launch({
    executablePath: await chromium.executablePath(),
    args: [...chromium.args, '--no-sandbox', '--disable-setuid-sandbox'],
    headless: chromium.headless,
    defaultViewport: { width: 375, height: 667 }
  });

  const page = await browser.newPage();

  for (const route of routes) {
    try {
      console.log(`📄 Renderizando: ${route}`);
      const url = `${baseURL}${route}`;
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
      await page.waitForTimeout(1500); // pequeña espera para hidratación

      const html = await page.content();

      const routePath = route === '/' ? '' : route;
      const dirPath = routePath ? path.join(distDir, routePath) : distDir;

      if (routePath) fs.mkdirSync(dirPath, { recursive: true });
      fs.writeFileSync(path.join(dirPath, 'index.html'), html);

      console.log(`✅ Guardado: ${routePath || '/'} -> ${path.join(dirPath, 'index.html')}`);
    } catch (error) {
      console.error(`❌ Error renderizando ${route}:`, error?.message || error);
      // No rompemos el build por una ruta fallida
    }
  }

  await browser.close();
  console.log('🎉 Prerender completado');
}

prerender().catch(err => {
  console.error('❌ Prerender falló:', err?.message || err);
  // No tumbamos el build en CI
  process.exit(0);
});
