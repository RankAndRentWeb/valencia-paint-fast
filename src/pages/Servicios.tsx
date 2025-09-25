import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Brush, Home, Building, Shield, Palette, Wrench } from "lucide-react";

const Servicios = () => {
  const services = [
    {
      title: "Quitar gotelé y alisar paredes",
      description: "Eliminamos el gotelé de forma profesional y dejamos las paredes completamente lisas y preparadas para pintar.",
      link: "/quitar-gotele-alisar-paredes",
      icon: <Brush className="w-8 h-8" />,
      features: ["Sin polvo", "Acabado perfecto", "Rápido y limpio"]
    },
    {
      title: "Pintura interior de pisos y casas",
      description: "Renovamos completamente el interior de tu hogar con pinturas de primera calidad y acabados profesionales.",
      link: "/pintura-interior-pisos-casas",
      icon: <Home className="w-8 h-8" />,
      features: ["Pinturas premium", "Limpieza incluida", "Garantía 3 años"]
    },
    {
      title: "Pintura exterior y fachadas",
      description: "Protegemos y embellecemos fachadas con pinturas resistentes a la intemperie y técnicas especializadas.",
      link: "/pintura-exterior-fachadas",
      icon: <Building className="w-8 h-8" />,
      features: ["Resistente al clima", "Andamiaje incluido", "Seguro RC"]
    },
    {
      title: "Impermeabilización",
      description: "Protegemos terrazas, balcones y fachadas contra filtraciones de agua con sistemas de impermeabilización avanzados.",
      link: "/impermeabilizacion-terrazas-y-fachadas",
      icon: <Shield className="w-8 h-8" />,
      features: ["Garantía 10 años", "Sin obras", "Secado rápido"]
    },
    {
      title: "Pintura locales comerciales",
      description: "Damos imagen profesional a tu negocio con trabajos rápidos y de calidad que no interrumpan tu actividad.",
      link: "/pintura-locales-comerciales",
      icon: <Building className="w-8 h-8" />,
      features: ["Horarios flexibles", "Trabajo nocturno", "Mínimas molestias"]
    },
    {
      title: "Pintura comunidades",
      description: "Servicios especializados para comunidades de propietarios con gestión completa del proyecto.",
      link: "/pintura-comunidades",
      icon: <Building className="w-8 h-8" />,
      features: ["Gestión completa", "Presupuesto detallado", "Coordinación vecinos"]
    },
    {
      title: "Lacado de puertas y carpintería",
      description: "Renovamos puertas, ventanas y elementos de madera con lacados de alta calidad y acabados duraderos.",
      link: "/lacar-puertas-y-carpinteria",
      icon: <Wrench className="w-8 h-8" />,
      features: ["Sin quitar puertas", "Lacas premium", "Acabado perfecto"]
    },
    {
      title: "Papel pintado y vinilos",
      description: "Instalación profesional de papel pintado y vinilos decorativos para personalizar cualquier espacio.",
      link: "/papel-pintado-y-vinilos",
      icon: <Palette className="w-8 h-8" />,
      features: ["Diseños únicos", "Instalación perfecta", "Asesoramiento"]
    }
  ];

  return (
    <>
      <SEOHead
        title="Servicios de pintura profesional en Valencia"
        description="Descubre todos nuestros servicios de pintura: interior, exterior, quitar gotelé, fachadas, impermeabilización y más. Presupuesto gratis en Valencia."
        keywords="servicios pintura valencia, pintura interior, fachadas, gotele, impermeabilizacion, locales comerciales"
        canonicalUrl="https://pintores-valencia.com/servicios"
      />

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "Servicios" }]} />
        
        <div className="py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Servicios de pintura profesional
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ofrecemos servicios completos de pintura en Valencia con más de 10 años de experiencia. 
              Trabajos garantizados y materiales de primera calidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 mx-auto text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild className="w-full bg-gradient-cta shadow-cta">
                    <Link to={service.link}>Ver detalles y precios</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">¿No encuentras lo que buscas?</h2>
            <p className="text-xl mb-6 text-primary-foreground/90">
              Contáctanos y te preparamos un presupuesto personalizado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/presupuesto">Pedir presupuesto gratis</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/contacto">Contactar</Link>
              </Button>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Preguntas frecuentes sobre nuestros servicios</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">¿Qué incluyen los presupuestos?</h3>
                  <p className="text-muted-foreground">
                    Todos nuestros presupuestos incluyen materiales, mano de obra, limpieza posterior y garantía escrita. 
                    Sin sorpresas ni costes ocultos.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">¿Cuánto tiempo tardan los trabajos?</h3>
                  <p className="text-muted-foreground">
                    Depende del tipo y envergadura del trabajo. En el presupuesto especificamos los plazos exactos. 
                    Siempre cumplimos con las fechas acordadas.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">¿Ofrecen garantía en todos los trabajos?</h3>
                  <p className="text-muted-foreground">
                    Sí, todos nuestros trabajos incluyen garantía escrita. La duración varía según el tipo de servicio, 
                    desde 3 años en interiores hasta 10 años en impermeabilizaciones.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicios;