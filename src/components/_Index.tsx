// src/pages/Index.tsx
import SEOHead from "@/components/SEOHead";

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
  Clock,
} from "lucide-react";
import trabajadoresImage from "../assets/madre-hijo-salon-pequeno.jpg";

interface IndexProps {
  heroImage?: any;
  featureImage?: any;
}

// ⭐ Estrellas accesibles sin ARIA prohibido
const RatingStars = ({ value = 5 }: { value?: number }) => (
  <div className="flex items-center space-x-1 mb-3">
    <span className="sr-only">Valoración {value} de 5</span>
    {Array.from({ length: value }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-accent text-accent" aria-hidden="true" />
    ))}
  </div>
);

const Index = ({ heroImage, featureImage }: IndexProps = {}) => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    "@id": "https://pintores-valencia.com/#business",
    name: "Pintores en Valencia",
    url: "https://pintores-valencia.com",
    image: "https://pintores-valencia.com/og-home.jpg",
    telephone: "+34722208131",
    email: "info@pintores-valencia.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Valencia",
      addressRegion: "Comunitat Valenciana",
      postalCode: "46000",
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
      geoRadius: { "@type": "Distance", value: 50, unitText: "km" },
    },
    priceRange: "€€",
    areaServed: [
      { "@type": "City", name: "Valencia" },
      { "@type": "AdministrativeArea", name: "Comunitat Valenciana" }
    ],
    contactPoint: [{
      "@type": "ContactPoint",
      "telephone": "+34722208131",
      "contactType": "customer service",
      "areaServed": "Valencia"
    }],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Pintura en Valencia",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Pintura Interior",
          description: "Pintura completa de interiores con materiales premium y garantía",
          url: "https://pintores-valencia.com/servicios/pintura-interior/"
        },
        {
          "@type": "Offer", 
          name: "Quitar Gotelé",
          description: "Eliminación de gotelé y alisado de paredes sin polvo",
          url: "https://pintores-valencia.com/servicios/quitar-gotele/"
        },
        {
          "@type": "Offer",
          name: "Pintura Exterior y Fachadas",
          description: "Pintura exterior resistente al clima con andamiaje incluido",
          url: "https://pintores-valencia.com/servicios/pintura-exterior/"
        },
        {
          "@type": "Offer",
          name: "Impermeabilización",
          description: "Impermeabilización de terrazas y fachadas",
          url: "https://pintores-valencia.com/servicios/impermeabilizacion/"
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿En cuánto tiempo dan el presupuesto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nos comprometemos a enviar el presupuesto en menos de 24 horas tras recibir la solicitud."
        }
      },
      {
        "@type": "Question", 
        name: "¿Qué incluye el servicio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Incluimos materiales, mano de obra, limpieza posterior y garantía escrita. Todo transparente en el presupuesto."
        }
      },
      {
        "@type": "Question",
        name: "¿Trabajan en toda Valencia?", 
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, trabajamos en Valencia capital y en toda la provincia. Consultanos tu zona específica."
        }
      }
    ]
  };

  const services = [
    {
      title: "Quitar gotelé",
      description: "Eliminamos el gotelé y alisamos paredes",
      link: "/servicios/quitar-gotele/",
      icon: <Brush className="w-6 h-6" />,
    },
    {
      title: "Pintura interior",
      description: "Renovamos el interior de tu hogar",
      link: "/servicios/pintura-interior/",
      icon: <Home className="w-6 h-6" />,
    },
    {
      title: "Fachadas",
      description: "Pintamos exteriores con garantía",
      link: "/servicios/pintura-exterior/",
      icon: <Building className="w-6 h-6" />,
    },
    {
      title: "Impermeabilización",
      description: "Protegemos terrazas y fachadas",
      link: "/servicios/impermeabilizacion/",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Locales comerciales",
      description: "Pintamos tu negocio profesionalmente",
      link: "/servicios/pintura-locales-comerciales/",
      icon: <Building className="w-6 h-6" />,
    },
    {
      title: "Comunidades",
      description: "Servicios para comunidades de propietarios",
      link: "/servicios/pintura-comunidades/",
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

  const homeTitle = "Pintores en Valencia · Presupuesto 24h | Garantía";
  const homeDesc =
    "Empresa de pintores profesionales en Valencia. Presupuesto en 24h, limpieza incluida, seguro RC y garantía escrita. ☎️ 722 208 131";
  const homeCanon = "https://pintores-valencia.com";

  return (
    <>
      <SEOHead
        title={homeTitle}
        description={homeDesc}
        canonicalUrl={homeCanon}
        schema={[localBusinessSchema, faqSchema]}
        preloadImages={heroImage ? [heroImage.src] : []}
        ogImage="https://pintores-valencia.com/og-home.jpg"
      />

      {/* Hero Section - Background image with overlay */}
      <section className="relative min-h-[56vh] overflow-clip">
        {heroImage && (
          <>
            <img 
              src={heroImage.src} 
              alt="Pintor profesional trabajando en Valencia" 
              fetchPriority="high"
              loading="eager"
              width={heroImage.width}
              height={heroImage.height}
              className="absolute inset-0 -z-10 w-full h-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/35 via-black/15 to-transparent"></div>
          </>
        )}
        <div className="relative z-10 container mx-auto px-4 py-20 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Pintores en Valencia
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-medium">
              Presupuesto gratis en 24h
            </p>
            <p className="text-xl mb-12 text-white/90">
              Rápidos, limpios y con garantía
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {/* Botón Presupuesto Gratis naranja */}
              <Button
                asChild
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg font-bold text-lg py-4 px-8"
              >
                <a href="/presupuesto/" className="flex items-center justify-center">
                  Presupuesto Gratis
                </a>
              </Button>
              
              {/* Botón Llamar azul */}
              <Button
                asChild
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg font-bold text-lg py-4 px-8"
              >
                <a
                  href="tel:+34722208131"
                  className="flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>722 208 131</span>
                </a>
              </Button>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="font-medium">Presupuesto 24h</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="font-medium">Limpieza incluida</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="font-medium">Seguro RC</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="font-medium">Garantía escrita</span>
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
                    <a href={service.link}>{service.title}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-cta shadow-cta">
              <a href="/servicios/">Ver todos los servicios</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Excellence Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Los mejores pintores de Valencia
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transformamos tu hogar con la máxima calidad profesional. Garantía escrita, 
              materiales premium y resultados que superan expectativas.
            </p>
          </div>

          {/* Content layout - Image left, Text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            
            {/* Left side - Image */}
            <div className="order-2 lg:order-1">
              {featureImage ? (
                <figure className="relative rounded-3xl overflow-hidden shadow-lg">
                  <img
                    src={featureImage.src}
                    alt="Pintor aplicando pintura de interior"
                    loading="lazy"
                    width={featureImage.width}
                    height={featureImage.height}
                    className="w-full h-auto object-cover"
                  />
                  <figcaption className="absolute top-3 left-3 bg-white/90 rounded-full px-3 py-1 text-sm shadow">
                    +15 años de experiencia
                  </figcaption>
                </figure>
              ) : (
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  {/* Badge encima de la imagen */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-white/95 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-xl text-sm font-semibold shadow-lg border border-gray-100 flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-blue-600" />
                      <span>+15 años de experiencia</span>
                    </div>
                  </div>
                  <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] bg-gradient-to-r from-orange-400 to-orange-600"></div>
                </div>
              )}
            </div>

            {/* Right side - Text content */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 h-[300px] sm:h-[400px] md:h-[450px] flex flex-col justify-center">
                <div className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed space-y-3 sm:space-y-4 md:space-y-6">
                  <p>
                    Si buscas <strong>pintores de confianza en Valencia capital y provincia</strong>, somos tu mejor opción. Realizamos trabajos de <a href="/servicios/pintura-interior/" className="text-blue-600 hover:underline"><strong>pintura en viviendas</strong></a>, <a href="/servicios/pintura-exterior/" className="text-blue-600 hover:underline"><strong>fachadas</strong></a>, <a href="/servicios/pintura-locales-comerciales/" className="text-blue-600 hover:underline"><strong>locales comerciales</strong></a> y comunidades, además de ofrecer <a href="/servicios/impermeabilizacion/" className="text-blue-600 hover:underline"><strong>impermeabilización</strong></a> de terrazas y superficies exteriores para protegerlas del desgaste.
                  </p>
                  
                  <p>
                    Usamos <strong>materiales de alta calidad</strong> y ofrecemos <strong>garantía escrita</strong> en cada proyecto. <strong>Pide tu presupuesto gratuito en menos de 24 horas</strong> y descubre un servicio profesional, cercano y con la mejor relación calidad-precio. Mira ejemplos de nuestro trabajo en <a href="/trabajos/" className="text-blue-600 hover:underline"><strong>proyectos realizados</strong></a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
            {/* Título de la sección */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Por qué elegirnos?
              </h2>
            </div>
            
            {/* Servicios con diseño de tarjetas separadas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-card transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Servicios completos</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Quitar gotelé, pintura interior y exterior, fachadas, impermeabilización y locales comerciales.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-card transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Garantía total</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Limpieza incluida, pinturas de primeras marcas y seguro de responsabilidad civil.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-card transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Presupuesto rápido</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Llámanos al 722 208 131 y obtén tu presupuesto gratuito sin compromiso.
                  </p>
                </CardContent>
              </Card>
            </div>
        </div>
      </section>

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
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white shadow-cta font-semibold"
            >
              <a href="/presupuesto" aria-label="Solicitar presupuesto">
                Pedir presupuesto gratis
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary border-2 border-white hover:bg-primary hover:text-white transition-colors font-semibold"
            >
              <a href="tel:+34722208131" aria-label="Llamar al +34 722 208 131" className="flex items-center space-x-2">
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>+34 722 208 131</span>
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
