// src/pages/Index.tsx
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  MessageCircle,
  CheckCircle,
  Star,
  Shield,
  Brush,
  Home,
  Building,
} from "lucide-react";
import heroImage from "@/assets/hero-pintores-valencia.jpg";

// ⭐ Estrellas accesibles sin ARIA prohibido
const RatingStars = ({ value = 5 }: { value?: number }) => (
  <div className="flex items-center space-x-1 mb-3">
    <span className="sr-only">Valoración {value} de 5</span>
    {Array.from({ length: value }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-accent text-accent" aria-hidden="true" />
    ))}
  </div>
);

const Index = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    name: "Pintores en Valencia",
    url: "https://pintores-valencia.com",
    image: "https://pintores-valencia.com/hero-pintores-valencia.jpg",
    telephone: "+34722208131",
    email: "edgarberriojimenez@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Valencia",
      addressCountry: "ES",
    },
    openingHours: ["Mo-Sa 08:00-20:00"],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 39.4699,
        longitude: -0.3763,
      },
      geoRadius: "50000",
    },
    priceRange: "€€",
    areaServed: [{ "@type": "City", name: "Valencia" }],
  };

  const services = [
    {
      title: "Quitar gotelé",
      description: "Eliminamos el gotelé y alisamos paredes",
      link: "/quitar-gotele-alisar-paredes",
      icon: <Brush className="w-6 h-6" />,
    },
    {
      title: "Pintura interior",
      description: "Renovamos el interior de tu hogar",
      link: "/pintura-interior-pisos-casas",
      icon: <Home className="w-6 h-6" />,
    },
    {
      title: "Fachadas",
      description: "Pintamos exteriores con garantía",
      link: "/pintura-exterior-fachadas",
      icon: <Building className="w-6 h-6" />,
    },
    {
      title: "Impermeabilización",
      description: "Protegemos terrazas y fachadas",
      link: "/impermeabilizacion-terrazas-y-fachadas",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Locales comerciales",
      description: "Pintamos tu negocio profesionalmente",
      link: "/pintura-locales-comerciales",
      icon: <Building className="w-6 h-6" />,
    },
    {
      title: "Comunidades",
      description: "Servicios para comunidades de propietarios",
      link: "/pintura-comunidades",
      icon: <Building className="w-6 h-6" />,
    },
  ];

  const testimonials = [
    {
      name: "María García",
      location: "Russafa, Valencia",
      text: "Excelente trabajo. Terminaron en el plazo acordado y dejaron todo impecable.",
      rating: 5,
    },
    {
      name: "José Martínez",
      location: "Benimaclet, Valencia",
      text: "Muy profesionales. El presupuesto fue ajustado y cumplieron con todo lo prometido.",
      rating: 5,
    },
    {
      name: "Ana López",
      location: "Centro, Valencia",
      text: "Recomiendo totalmente. Trabajo de calidad y atención excelente.",
      rating: 5,
    },
  ];

  const homeTitle =
    "Pintores en Valencia (capital y provincia) - Rápidos, limpios y con garantía";
  const homeDesc =
    "Empresa de pintores profesionales en Valencia. Presupuesto en 24h, limpieza incluida, seguro RC y garantía escrita. ☎️ 722 208 131";
  const homeCanon = "https://pintores-valencia.com/";

  return (
    <>
      <SEOHead
        title={homeTitle}
        description={homeDesc}
        keywords="pintores valencia, pintura interior, fachadas valencia, quitar gotele, pintores profesionales"
        canonicalUrl={homeCanon}
        schema={localBusinessSchema}
        preloadImages={[heroImage]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/50" /> {/* contraste reforzado */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        >
          <img 
            src={heroImage} 
            alt="" 
            className="w-full h-full object-cover opacity-0" 
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Pintores en Valencia <br />
              <span className="text-accent">(capital y provincia)</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Rápidos, limpios y con garantía
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {/* Botón teléfono con contraste alto */}
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white shadow-cta"
              >
                <a
                  href="tel:722208131"
                  aria-label="Llamar ahora al 722 208 131"
                  className="flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  <span>Llamar ahora</span>
                </a>
              </Button>
              {/* Botón WhatsApp outline azul reforzado */}
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white transition-colors"
              >
                <a
                  href="https://wa.me/34722208131"
                  aria-label="Abrir WhatsApp para escribir al 722 208 131"
                  className="flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
              </Button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-accent" aria-hidden="true" />
                <span className="text-sm">Presupuesto 24h</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-accent" aria-hidden="true" />
                <span className="text-sm">Limpieza incluida</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-accent" aria-hidden="true" />
                <span className="text-sm">Seguro RC</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-accent" aria-hidden="true" />
                <span className="text-sm">Garantía escrita</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestros servicios
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios de pintura profesional en
              Valencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-card transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="bg-white text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white transition-colors"
                  >
                    <Link to={service.link}>Ver más</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-cta shadow-cta">
              <Link to="/servicios">Ver todos los servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <RatingStars value={testimonial.rating} />
                  <p className="text-foreground mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Necesitas un presupuesto?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Te respondemos en menos de 24 horas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white shadow-cta"
            >
              <Link to="/presupuesto" aria-label="Solicitar presupuesto">
                Pedir presupuesto gratis
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white transition-colors"
            >
              <a href="tel:722208131" aria-label="Llamar al 722 208 131" className="flex items-center space-x-2">
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>722 208 131</span>
              </a>
            </Button>
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
                  ¿En cuánto tiempo dan el presupuesto?
                </h3>
                <p className="text-muted-foreground">
                  Nos comprometemos a enviar el presupuesto en menos de 24 horas
                  tras recibir la solicitud.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">¿Qué incluye el servicio?</h3>
                <p className="text-muted-foreground">
                  Incluimos materiales, mano de obra, limpieza posterior y
                  garantía escrita. Todo transparente en el presupuesto.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">
                  ¿Trabajan en toda Valencia?
                </h3>
                <p className="text-muted-foreground">
                  Sí, trabajamos en Valencia capital y en toda la provincia.
                  Consultanos tu zona específica.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
