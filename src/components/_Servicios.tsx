// src/pages/Servicios.tsx

import { Button } from "@/components/ui/button";
import { CustomButton } from "@/components/ui/custom-button";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Brush, Home, Building, Shield, Palette, Wrench, Euro, Clock, ShieldCheck, Star, Phone } from "lucide-react";

const Servicios = () => {
  // === NUEVO: servicios con info que empuja al clic ===
  const services = [
    {
      badge: "Más solicitado",
      title: "Quitar gotelé en Valencia (sin polvo)",
      description:
        "Eliminamos el gotelé y dejamos tus paredes lisas y listas para pintar. Control de polvo y limpieza final.",
      link: "/quitar-gotele-alisar-paredes",
      icon: <Brush className="w-8 h-8" />,
      highlights: ["Sin polvo", "Listas para pintar", "Garantía escrita"],
      priceFrom: "14 €/m²",
      time: "3–5 días",
      guarantee: "3 años",
      cta: "Ver método, precios y fotos →",
    },
    {
      badge: "Ideal para pisos",
      title: "Pintura interior de pisos y casas",
      description:
        "Renovación completa con pinturas premium y acabados limpios. Trabajamos por estancias si vives en la vivienda.",
      link: "/pintura-interior-pisos-casas",
      icon: <Home className="w-8 h-8" />,
      highlights: ["Pinturas premium", "Limpieza incluida", "Protecciones"],
      priceFrom: "Desde 7 €/m²",
      time: "1–3 días",
      guarantee: "3 años",
      cta: "Ver colores, calidades y precios →",
    },
    {
      badge: "Fachadas",
      title: "Pintura exterior y fachadas",
      description:
        "Protección y estética con sistemas resistentes al clima. Gestión de medios auxiliares y seguridad.",
      link: "/pintura-exterior-fachadas",
      icon: <Building className="w-8 h-8" />,
      highlights: ["Resistente al clima", "Andamiaje", "Seguro RC"],
      priceFrom: "A medida",
      time: "Según m²",
      guarantee: "Hasta 5 años",
      cta: "Ver sistema y plazo orientativo →",
    },
    {
      badge: "Garantía 10 años",
      title: "Impermeabilización",
      description:
        "Sistemas líquidos sin obras para terrazas, balcones y cubiertas. Solución rápida y duradera.",
      link: "/impermeabilizacion-terrazas-y-fachadas",
      icon: <Shield className="w-8 h-8" />,
      highlights: ["Sin obras", "Secado rápido", "Ensayo de estanqueidad"],
      priceFrom: "A medida",
      time: "1–2 días",
      guarantee: "10 años",
      cta: "Ver sistema y casos reales →",
    },
    {
      badge: "Negocios",
      title: "Pintura locales comerciales",
      description:
        "Imagen profesional sin parar tu actividad: horarios flexibles, nocturnos y fines de semana.",
      link: "/pintura-locales-comerciales",
      icon: <Building className="w-8 h-8" />,
      highlights: ["Trabajo nocturno", "Plazos cortos", "Mínimas molestias"],
      priceFrom: "A medida",
      time: "Express",
      guarantee: "3 años",
      cta: "Ver plan de trabajo y acabados →",
    },
    {
      badge: "Comunidades",
      title: "Pintura comunidades",
      description:
        "Gestión integral para zonas comunes: memoria técnica, coordinación y limpieza diaria.",
      link: "/pintura-comunidades",
      icon: <Building className="w-8 h-8" />,
      highlights: ["Gestión completa", "Presupuesto detallado", "Coordinación"],
      priceFrom: "A medida",
      time: "Según alcance",
      guarantee: "3 años",
      cta: "Ver alcance, colores y fases →",
    },
    {
      badge: "Sin desmontar",
      title: "Lacado de puertas y carpintería",
      description:
        "Renovamos puertas y muebles con lacas premium. Acabado uniforme y duradero.",
      link: "/lacado-puertas-carpinteria",
      icon: <Wrench className="w-8 h-8" />,
      highlights: ["Sin quitar puertas", "Lacas premium", "Acabado perfecto"],
      priceFrom: "Desde 70 €/ud",
      time: "24–48 h",
      guarantee: "2 años",
      cta: "Ver proceso y carta de colores →",
    },
    {
      badge: "Decoración",
      title: "Papel pintado y vinilos",
      description:
        "Instalación profesional y sin burbujas. Te asesoramos en diseño y mantenimiento.",
      link: "/papel-pintado-vinilos",
      icon: <Palette className="w-8 h-8" />,
      highlights: ["Cortes invisibles", "Colas adecuadas", "Asesoramiento"],
      priceFrom: "Desde 20 €/m²",
      time: "En el día",
      guarantee: "1 año",
      cta: "Ver catálogos y precios →",
    },
  ];

  // === JSON-LD (igual que tienes; podrías añadir priceRange si quieres)
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Servicios de pintura en Valencia",
    "itemListElement": services.map((s, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `https://pintores-valencia.com${s.link}`,
      "name": s.title,
      "priceRange": s.priceFrom ? s.priceFrom : "A medida"
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué incluyen los presupuestos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Incluyen mano de obra, materiales, protecciones, limpieza final y garantía escrita. Sin costes ocultos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo tardan los trabajos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende del tipo y tamaño del proyecto. Indicamos plazos por escrito en el presupuesto y los cumplimos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Ofrecen garantía en todos los trabajos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. 3 años en interiores y hasta 10 años en impermeabilizaciones, con garantía por escrito."
        }
      }
    ]
  };

  // Pequeño subcomponente para la info rápida
  const MiniInfo = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center">{icon}</div>
      <div className="leading-tight">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  );

  return (
    <>
      <SEOHead
        title="Servicios de pintura profesional en Valencia"
        description="Descubre todos nuestros servicios de pintura: interior, exterior, quitar gotelé, fachadas, impermeabilización y más. Presupuesto gratis en Valencia."
        keywords="servicios pintura valencia, pintura interior, fachadas, gotele, impermeabilizacion, locales comerciales"
        canonicalUrl="https://pintores-valencia.com/servicios"
        schema={[itemListSchema, faqSchema]}
      />

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "Servicios" }]} />
        
        <div className="py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Servicios de pintura profesional
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Más de 10 años renovando hogares y fachadas en Valencia. Protección, limpieza y garantía por escrito.
            </p>
          </div>

          {/* === NUEVO: Tarjetas con info que empuja al clic === */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((s, i) => (
              <Card key={i} className="hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  {s.badge && (
                    <div className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary mb-4">
                      <Star className="w-3.5 h-3.5" /> {s.badge}
                    </div>
                  )}

                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 mx-auto text-primary">
                    {s.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-center">{s.title}</h3>
                  <p className="text-muted-foreground mb-4 text-center">{s.description}</p>

                  {/* Chips de valor */}
                  <div className="flex flex-wrap gap-2 justify-center mb-5">
                    {s.highlights.map((h, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 rounded-full bg-accent/20 text-foreground/80">
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Info rápida: precio/plazo/garantía */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <MiniInfo icon={<Euro className="w-4 h-4" />} label="Desde" value={s.priceFrom} />
                    <MiniInfo icon={<Clock className="w-4 h-4" />} label="Plazo" value={s.time} />
                    <MiniInfo icon={<ShieldCheck className="w-4 h-4" />} label="Garantía" value={s.guarantee} />
                  </div>

                  <Button
                    asChild
                    className="w-full bg-gradient-cta shadow-cta"
                  >
                    <a href={s.link} aria-label={`${s.title}: ${s.cta}`} data-analytics={`cta-${s.link}`}>
                      {s.cta}
                    </a>
                  </Button>

                  <p className="text-xs text-muted-foreground mt-3 text-center">
                    Presupuesto en 24 h • Limpieza incluida
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Espacio de separación */}
        <div className="py-8"></div>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              ¿Necesitas un presupuesto?
            </h2>
            <p className="text-xl mb-8 text-white">
              Te respondemos en menos de 24 horas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CustomButton
                variant="orange"
                size="lg"
                asChild
                href="/presupuesto"
              >
                Pedir presupuesto gratis
              </CustomButton>
              <CustomButton
                variant="blue"
                size="lg"
                asChild
                href="tel:+34722208131"
                className="flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>+34 722 208 131</span>
              </CustomButton>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Preguntas frecuentes
                </h2>
              </div>

              <div className="max-w-3xl mx-auto space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">
                      ¿Qué incluyen los presupuestos?
                    </h3>
                    <p className="text-muted-foreground">
                      Mano de obra, materiales, protecciones de suelos y muebles, limpieza final y garantía escrita. Sin costes ocultos.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">
                      ¿Cómo se protege la zona de trabajo?
                    </h3>
                    <p className="text-muted-foreground">
                      Protegemos con plásticos, cintas y barreras de polvo. Lijado con aspiración y limpieza al finalizar cada jornada.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">
                      ¿Ofrecen garantía?
                    </h3>
                    <p className="text-muted-foreground">
                      Sí. 3 años en trabajos interiores y hasta 10 años en impermeabilizaciones, todo por escrito.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>

        {/* === NUEVO: Barra fija de CTA en móvil (mejora conversión) === */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur border-t p-3 z-40">
          <div className="flex gap-3">
            <CustomButton variant="orange" size="lg" asChild href="/presupuesto" >
              Pedir presupuesto
            </CustomButton>
            <CustomButton variant="blue" size="lg" asChild href="tel:+34722208131">
              Llamar
            </CustomButton>
          </div>
        </div>
    </>
  );
};

export default Servicios;
