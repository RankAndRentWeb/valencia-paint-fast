import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

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
  
  const browser = await puppeteer.launch({ 
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Configurar viewport para mobile-first
  await page.setViewport({ width: 375, height: 667 });
  
  for (const route of routes) {
    try {
      console.log(`📄 Renderizando: ${route}`);
      
      const url = `${baseURL}${route}`;
      await page.goto(url, { 
        waitUntil: 'networkidle0',
        timeout: 30000 
      });
      
      // Esperar a que React se hidrate
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const html = await page.content();
      
      // Crear directorio si es necesario
      const routePath = route === '/' ? '' : route;
      const dirPath = path.join(distDir, routePath);
      
      if (routePath) {
        // Para rutas como /servicios -> dist/servicios/index.html
        fs.mkdirSync(dirPath, { recursive: true });
        fs.writeFileSync(path.join(dirPath, 'index.html'), html);
        console.log(`✅ Guardado: ${dirPath}/index.html`);
      } else {
        // Para home -> dist/index.html
        fs.writeFileSync(path.join(distDir, 'index.html'), html);
        console.log(`✅ Guardado: ${distDir}/index.html`);
      }
      
    } catch (error) {
      console.error(`❌ Error renderizando ${route}:`, error.message);
    }
  }
  
  await browser.close();
  console.log('🎉 Prerender completado');
}

prerender().catch(console.error);
