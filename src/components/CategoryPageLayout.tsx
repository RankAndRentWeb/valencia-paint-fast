// src/components/CategoryPageLayout.tsx

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, ArrowRight, Hammer, Shield, Palette, Building, Brush } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BlogPost, getPostsByCategory } from "@/lib/blogPosts";
import { type BlogCategory } from "@/lib/blogCategories";

interface CategoryPageLayoutProps {
  category: BlogCategory;
}

export default function CategoryPageLayout({ category }: CategoryPageLayoutProps) {
  const categoryPosts = getPostsByCategory(category.slug);
  
  // Posts de esta categoría ordenados por prioridad y fecha
  const sortedPosts = categoryPosts.sort((a, b) => {
    if (a.priority && b.priority) return a.priority - b.priority;
    if (a.priority && !b.priority) return -1;
    if (!a.priority && b.priority) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const categoryIcon = () => {
    switch (category.slug) {
      case 'gotele': return <Hammer className="w-8 h-8 text-primary" />;
      case 'impermeabilizacion': return <Shield className="w-8 h-8 text-primary" />;
      case 'colores-interior': return <Palette className="w-8 h-8 text-primary" />;
      case 'fachadas-exterior': return <Building className="w-8 h-8 text-primary" />;
      case 'barnices-madera': return <Brush className="w-8 h-8 text-primary" />;
      default: return <Brush className="w-8 h-8 text-primary" />;
    }
  };

  return (
    <>
      <SEOHead
        title={`${category.name} - ${category.metaTitle || 'Artículos y Guías'} | Pintores Valencia`}
        description={category.metaDescription || category.description}
        keywords={`${category.name.toLowerCase()}, ${category.slug}, valencia, pintores`}
  canonicalUrl={`https://pintores-valencia.com/blog/${category.slug}`}
      />

      <div className="min-h-screen bg-background">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
                { label: "Blog", href: "/blog/" },
                { label: category.name, href: `/blog/${category.slug}/` }
            ]} 
          />
        </div>

        {/* Header Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                {categoryIcon()}
                <h1 className="text-4xl md:text-5xl font-bold">
                  {category.name}
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {category.description}
              </p>
            </div>
          </div>
        </section>

        {/* Contenido principal */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div>
              {/* Lista de artículos */}
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">
                    Artículos sobre {category.name}
                  </h2>
                  <span className="text-muted-foreground">
                    {sortedPosts.length} artículo{sortedPosts.length !== 1 ? 's' : ''}
                  </span>
                </div>

                {sortedPosts.length > 0 ? (
                  <div className="grid gap-4 max-w-4xl mx-auto">
                    {sortedPosts.map((post) => (
                      <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-all duration-200 border border-gray-200">
                        <a href={`/blog/${post.slug}`} className="block">
                          <div className="p-5 md:p-6">
                            <div className="flex flex-col sm:flex-row gap-4 items-start">
                              {/* Mini imagen - Lado izquierdo en desktop, arriba en móvil */}
                              <div className="w-full sm:w-16 md:w-20 sm:h-16 md:h-20 h-40 flex-shrink-0">
                                <div className="w-full h-full rounded-lg overflow-hidden bg-gray-100">
                                  <img
                                    src={post.cover || post.image || "/_blog/gotele-grueso-primer-plano-textura-pared.jpg"}
                                    alt={post.coverAlt || post.title}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              </div>
                              
                              {/* Contenido */}
                              <div className="flex-1 min-w-0">
                                {/* Badges */}
                                <div className="flex items-center gap-2 mb-2">
                                  {post.priority && post.priority <= 3 && (
                                    <Badge variant="default" className="bg-orange-500 hover:bg-orange-600 text-white text-xs">
                                      ⭐ Destacado
                                    </Badge>
                                  )}
                                </div>
                                
                                {/* Título */}
                                <h3 className="text-lg md:text-xl font-bold hover:text-primary transition-colors leading-tight mb-2 line-clamp-2">
                                  {post.title}
                                </h3>
                                
                                {/* Descripción */}
                                <p className="text-muted-foreground text-sm md:text-base mb-3 leading-relaxed line-clamp-2">
                                  {post.excerpt}
                                </p>
                                
                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 mb-3">
                                  {post.tags.slice(0, 3).map((tag) => (
                                    <Badge key={tag} variant="secondary" className="text-xs bg-blue-50 text-blue-700">
                                      #{tag}
                                    </Badge>
                                  ))}
                                </div>
                                
                                {/* Meta información */}
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="h-3.5 w-3.5" />
                                    <span>{formatDate(post.date)}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-3.5 w-3.5" />
                                    <span>{post.readTime} min</span>
                                  </div>
                                  <div className="flex items-center gap-1 text-primary font-medium ml-auto">
                                    Leer más
                                    <ArrowRight className="h-3.5 w-3.5" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-muted-foreground mb-4">
                      Próximamente habrá artículos sobre {category.name.toLowerCase()}.
                    </p>
                    <a
                      href="/blog/"
                      className="text-primary hover:text-primary/80 font-medium"
                    >
                      Ver todos los artículos del blog
                    </a>
                  </div>
                )}
              </div>

              {/* CTA Section */}
              <div className="mt-16 p-8 bg-muted/30 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">
                  ¿Necesitas ayuda profesional?
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Especialistas en pintura profesional en Valencia. Presupuesto sin compromiso en 24h.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/presupuesto"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Solicitar Presupuesto Gratis
                  </a>
                  <a
                    href="tel:722208131"
                    className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Llamar: 722 208 131
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
