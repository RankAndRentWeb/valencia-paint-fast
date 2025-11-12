// src/lib/blogCategories.ts

export type BlogCategory = {
  slug: string;
  name: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  icon: string;
  color: string;
};

export const blogCategories: BlogCategory[] = [
  {
    slug: "gotele",
    name: "Gotelé",
    description: "Todo sobre el gotelé: qué es, cómo quitarlo, precios y técnicas para alisar paredes perfectamente",
    metaTitle: "Quitar Gotelé Valencia - Precios, Métodos y Consejos 2025",
    metaDescription: "Guía completa para quitar gotelé en Valencia: precios por m², métodos sin polvo, mejores técnicas y presupuesto profesional en 24h.",
    icon: "🏠",
    color: "blue"
  },
  {
    slug: "impermeabilizacion",
    name: "Impermeabilización",
    description: "Impermeabilización de terrazas, tejados y fachadas. Productos, técnicas y precios para proteger tu hogar",
    metaTitle: "Impermeabilización Valencia - Terrazas, Tejados y Fachadas 2025",
    metaDescription: "Impermeabilización profesional en Valencia: precios por m², mejor impermeabilizante para terrazas, poliurea, caucho líquido. Presupuesto gratis 24h.",
    icon: "🛡️",
    color: "green"
  },
  {
    slug: "colores-interior",
    name: "Colores y Tendencias",
    description: "Colores para interiores, pintura blanca vs mate, colores para pisos pequeños y tendencias actuales",
    metaTitle: "Colores para Interiores Valencia - Tendencias y Consejos 2025",
    metaDescription: "Los mejores colores para pintar interiores en Valencia: tendencias 2025, colores para pisos pequeños, pintura blanca mate vs lavable.",
    icon: "🎨",
    color: "purple"
  },
  {
    slug: "fachadas-exterior",
    name: "Fachadas Exteriores",
    description: "Pintura de fachadas, colores exteriores, revestimientos y mantenimiento de casas",
    metaTitle: "Pintura de Fachadas Valencia - Colores y Precios Exterior 2025",
    metaDescription: "Pintura de fachadas en Valencia: mejores colores exteriores, tipos de pintura para clima mediterráneo, precios por m² y presupuesto gratis.",
    icon: "🏘️",
    color: "orange"
  },
  {
    slug: "barnices-madera",
    name: "Barnices y Lacados",
    description: "Barnices para madera, barnices al agua, colores y técnicas de barnizado profesional",
    metaTitle: "Barnices para Madera Valencia - Tipos, Colores y Aplicación 2025",
    metaDescription: "Guía completa de barnices para madera en Valencia: al agua vs disolvente, colores, técnicas de aplicación y mantenimiento profesional.",
    icon: "🪵",
    color: "amber"
  }
];

export const getCategoryBySlug = (slug: string): BlogCategory | undefined => {
  return blogCategories.find(cat => cat.slug === slug);
};
