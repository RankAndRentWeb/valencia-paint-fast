// scripts/generate-sitemap.mjs
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { resolve } from "path";

const BASE = "https://pintores-valencia.com";
const ROUTES = [
  "/", "/servicios", "/precios", "/presupuesto", "/contacto",
  "/pintura-interior-pisos-casas",
  "/pintura-exterior-fachadas",
  "/quitar-gotele-alisar-paredes",
  // añade aquí más rutas cuando existan (impermeabilización, locales, comunidades, etc.)
];

const sm = new SitemapStream({ hostname: BASE });
const out = createWriteStream(resolve("dist", "sitemap.xml"));
sm.pipe(out);
ROUTES.forEach((url) => sm.write({ url, changefreq: "weekly", priority: url === "/" ? 1.0 : 0.8 }));
sm.end();
await streamToPromise(sm);
console.log("✔ sitemap.xml generado en dist/");
