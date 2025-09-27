// src/lib/blogPosts.tsx
import { ReactNode } from "react";

// Importar las imágenes del blog
import pintarInteriorVentilacion from "@/assets/pintar-interior-casa-ventilacion.jpg";
import madreHijoSalon from "@/assets/madre-hijo-salon-pequeno.jpg";
import entregaLlaves from "@/assets/entrega-llaves-vivienda-pintada.jpg";
import propietarioCafeteria from "@/assets/propietario-cafeteria-local-pintado.jpg";
import erroresPintar from "@/assets/errores-pintar-paredes-mujer.jpg";
import parejaPaleta from "@/assets/pareja-paleta-colores.jpg";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;          // /blog/nombre.jpg en public
  coverAlt: string;
  date: string;           // ISO: 2025-09-27
  readTime: number;       // minutos
  tags: string[];
  content: ReactNode;     // JSX del artículo
};

export const BLOG_BASE_URL = "https://pintores-valencia.com/blog";

export const blogPosts: BlogPost[] = [
  {
    slug: "pintar-interior-tiempos-secado-trucos",
    title: "Pintar el interior de casa: tiempos de secado y trucos",
    excerpt:
      "Los tiempos de secado y la ventilación son clave para un acabado perfecto. Te contamos cuánto esperar entre manos, cómo ventilar y qué errores evitar.",
    cover: pintarInteriorVentilacion,
    coverAlt:
      "Pareja joven pintando el interior de su casa con cuidado y buena ventilación",
    date: "2025-09-27",
    readTime: 6,
    tags: ["pintura interior", "consejos", "Valencia"],
    content: (
      <>
        <p>
          Elegir el color es importante, pero el <strong>secado</strong> y la
          <strong> ventilación</strong> determinan el acabado. En Valencia,
          donde la humedad varía según la zona, conviene respetar los tiempos
          del fabricante y adaptar el flujo de aire.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Tiempos orientativos</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Plástica mate en interiores:</strong> 1–2 h al tacto, 4–6 h
            entre manos, curado total 7 días.
          </li>
          <li>
            <strong>Esmaltes al agua:</strong> 1–2 h al tacto, 6–12 h entre
            manos.
          </li>
          <li>
            <strong>Antihumedad / imprimaciones:</strong> respeta siempre la
            ficha técnica; forzar el repintado genera marcas.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">Ventilación correcta</h2>
        <p>
          Abre ventanas en <em>cruz</em> para renovar aire sin crear corrientes
          fuertes. Evita ventiladores directos sobre la pared recién pintada: la
          piel de la pintura seca antes que el interior y se producen cuarteos.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Errores a evitar</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Aplicar la segunda mano antes de tiempo.</li>
          <li>Pintar con humedad alta sin deshumidificar la estancia.</li>
          <li>No sellar manchas de humedad o nicotina antes de pintar.</li>
        </ol>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          Truco profesional en Valencia
        </h2>
        <p>
          En días húmedos, usa deshumidificador + ventilación cruzada suave y
          amplía 1–2 horas el tiempo entre manos. El acabado queda más liso y
          uniforme.
        </p>

        <div className="mt-10 p-4 bg-muted/50 rounded-lg">
          <p className="mb-3 font-medium">
            ¿Quieres que un profesional lo haga por ti?
          </p>
          <p className="mb-4">
            Presupuesto en 24 h para pintar interiores en Valencia capital y
            provincia.
          </p>
          <a
            href="/presupuesto"
            className="inline-flex items-center rounded-md px-4 py-2 bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Pedir presupuesto gratis
          </a>
        </div>
      </>
    ),
  },

  {
    slug: "colores-piso-pequeno-ganar-amplitud",
    title: "Colores para pintar un piso pequeño y ganar amplitud",
    excerpt:
      "Guía práctica para que tu vivienda parezca más grande: paletas, contraste, techos y trucos de luz que funcionan en pisos de Valencia.",
    cover: madreHijoSalon,
    coverAlt:
      "Madre e hijo en un salón pequeño y luminoso con paredes claras",
    date: "2025-09-26",
    readTime: 7,
    tags: ["color", "decoración", "pintura interior"],
    content: (
      <>
        <p>
          Un buen esquema de color puede <strong>ampliar visualmente</strong> un
          piso pequeño. Las claves: claridad, continuidad y contraste medido.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Paletas que abren el espacio
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Blancos cálidos (marfil, roto) para luz mediterránea.</li>
          <li>Grises muy claros (NCS S0502–S1000) para estilo moderno.</li>
          <li>
            Arena/desierto en zonas con menos luz: aportan calidez sin cargar.
          </li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-3">
          Techos y zócalos inteligentes
        </h2>
        <p>
          Pinta el techo <em>un tono más claro</em> que la pared (o totalmente
          blanco) y levanta visualmente la altura. Zócalos del color de la
          pared "desaparecen" y el suelo respira.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-3">Contraste útil</h2>
        <p>
          Introduce un <strong>muro acento suave</strong> (verde salvia, azul
          bruma) para dar profundidad sin encoger. Evita acentos oscuros si el
          salón es estrecho.
        </p>
        <div className="mt-10 p-4 bg-muted/50 rounded-lg">
          <p className="mb-3">
            ¿Necesitas asesoría de color en tu piso en Valencia?
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center rounded-md px-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            Habla con un pintor colorista
          </a>
        </div>
      </>
    ),
  },

  {
    slug: "pintura-casas-alquilar-rapido",
    title: "Cómo usar la pintura de casas para alquilar rápido",
    excerpt:
      "Estrategia de color, acabados lavables y pequeños detalles que aceleran el alquiler en Valencia.",
    cover: entregaLlaves,
    coverAlt:
      "Agente inmobiliario entregando llaves en vivienda recién pintada",
    date: "2025-09-20",
    readTime: 5,
    tags: ["alquiler", "pintura interior"],
    content: (
      <>
        <p>
          Colores neutros, alta lavabilidad y suelos limpios. Añade iluminación
          cálida y fotos profesionales. Resultado: más visitas y mejor precio.
        </p>
        <ul className="list-disc pl-6">
          <li>Gamas neutras + una pared acento suave.</li>
          <li>Acabados lavables en pasillos y salón.</li>
          <li>Revisión de marcos y puertas: repasar esmaltes.</li>
        </ul>
      </>
    ),
  },

  {
    slug: "pintar-bajo-comercial-que-debes-saber",
    title: "Todo lo que debes saber antes de pintar tu bajo comercial",
    excerpt:
      "Imagen de marca, durabilidad y normativa: guía rápida para negocios en Valencia.",
    cover: propietarioCafeteria,
    coverAlt:
      "Propietario de cafetería satisfecho con su local recién pintado",
    date: "2025-09-18",
    readTime: 6,
    tags: ["locales", "negocio"],
    content: (
      <>
        <p>
          La pintura comunica tu marca. Define paleta, usa productos
          transpirables y resistentes a limpieza frecuente. Coordina cierres
          para no perder ventas.
        </p>
      </>
    ),
  },

  {
    slug: "errores-antes-de-pintar-casa",
    title: "Errores que debes evitar antes de pintar tu casa",
    excerpt:
      "Preparación de superficies, cinta, tiempos y materiales: lo que más falla y cómo solucionarlo.",
    cover: erroresPintar,
    coverAlt:
      "Mujer preocupada por errores comunes al pintar paredes",
    date: "2025-09-12",
    readTime: 5,
    tags: ["consejos", "preparacion"],
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>No reparar fisuras ni sellar manchas.</li>
          <li>Usar rodillos gastados que dejan textura irregular.</li>
          <li>Quitar la cinta tarde y levantar pintura seca.</li>
        </ul>
      </>
    ),
  },

  {
    slug: "elegir-colores-ideales-hogar",
    title: "Cómo elegir colores ideales para tu hogar",
    excerpt:
      "Método sencillo en 4 pasos: luz, uso de la estancia, paleta base y acentos.",
    cover: parejaPaleta,
    coverAlt:
      "Pareja revisando paleta de colores antes de pintar",
    date: "2025-09-05",
    readTime: 6,
    tags: ["color", "decoracion"],
    content: (
      <>
        <p>
          Empieza con 3–4 tonos base, suma 1 acento por estancia y repite
          materiales para crear continuidad. La clave es la luz real de tu casa.
        </p>
      </>
    ),
  },
];
