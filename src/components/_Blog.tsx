// src/pages/Blog.tsx
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, ArrowRight, TrendingUp, Brush, Shield, Palette, Building, Hammer } from "lucide-react";
import { blogPosts, getPostsByCategory } from "@/lib/blogPosts";
import { blogCategories } from "@/lib/blogCategories";

const Blog = () => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Función para obtener el icono correcto según el slug
  const getCategoryIcon = (slug: string) => {
    switch (slug) {
      case "gotele":
        return <Hammer className="w-6 h-6" />;
      case "impermeabilizacion":
        return <Shield className="w-6 h-6" />;
      case "colores-interior":
        return <Palette className="w-6 h-6" />;
      case "fachadas-exterior":
        return <Building className="w-6 h-6" />;
      case "barnices-madera":
        return <Brush className="w-6 h-6" />;
      default:
        return <Brush className="w-6 h-6" />;
    }
  };

  // Posts destacados
  const featuredPosts = blogPosts
    .filter(post => post.priority && post.priority <= 3)
    .sort((a, b) => (a.priority || 99) - (b.priority || 99))
    .slice(0, 2);

  // Posts recientes
  const recentPosts = blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  return (
    <>
      <SEOHead
        title="Blog de Pintura - Consejos, Precios y Trucos | Pintores Valencia"
        description="Guías de precios, consejos profesionales y trucos para pintar. Información actualizada sobre pintura interior, exterior, gotelé e impermeabilización en Valencia."
        keywords="blog pintura valencia, precios pintura, consejos pintar casa, quitar gotele precio, impermeabilizar terraza"
        canonicalUrl="https://pintores-valencia.com/blog"
      />

      <div className="min-h-screen bg-background">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { label: "Blog" }
            ]} 
          />
        </div>

        {/* Header Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Blog de Pintura Valencia
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Precios actuales, consejos profesionales y guías paso a paso para todos tus proyectos de pintura
              </p>
            </div>
          </div>
        </section>

        {/* Categorías del Blog */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Categorías de Contenido</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Encuentra artículos especializados sobre el tema que necesitas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {blogCategories.map((category) => {
                const categoryPosts = getPostsByCategory(category.slug);
                
                return (
                  <Card key={category.slug} className="hover:shadow-card transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                          {getCategoryIcon(category.slug)}
                        </div>
                        <h3 className="text-lg font-semibold">{category.name}</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {category.description}
                      </p>
                      <Button
                        asChild
                        size="sm"
                        className="bg-white text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white transition-colors"
                      >
                        <a href={`/blog/${category.slug}`}>Ver artículos</a>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Posts Destacados */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-8">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Artículos Más Buscados</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.slug} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img
                        src={post.cover}
                        alt={post.coverAlt}
                        className="w-full h-48 md:h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="md:w-3/5 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="border-orange-200 text-orange-700">
                          Trending
                        </Badge>
                        {post.tags.slice(0, 1).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3">
                        <a href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                          {post.title}
                        </a>
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formatDate(post.date)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime} min
                          </span>
                        </div>
                        
                        <a
                          href={`/blog/${post.slug}`}
                          className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1"
                        >
                          Leer más <ArrowRight className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Artículos Recientes */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Artículos Recientes</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <Card key={post.slug} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.cover}
                      alt={post.coverAlt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                      <a
                        href={`/blog/${post.slug}`}
                        className="hover:text-accent transition-colors"
                      >
                        {post.title}
                      </a>
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime} min</span>
                        </div>
                      </div>
                    </div>

                    <a
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 font-medium transition-colors text-sm"
                    >
                      <span>Leer más</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary/90 rounded-lg p-8 text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                ¿Prefieres que lo hagamos nosotros?
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Los consejos están bien, pero un trabajo profesional es mejor. 
                Presupuesto detallado en 24h y garantía de calidad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/presupuesto"
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md font-semibold transition-colors"
                >
                  Presupuesto 24h Gratis
                </a>
                <a
                  href="tel:722208131"
                  className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors"
                >
                  Llamar: 722 208 131
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
