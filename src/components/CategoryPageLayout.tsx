// src/components/CategoryPageLayout.tsx

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, ArrowRight } from "lucide-react";
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
              { label: "Blog", href: "/blog" },
              { label: category.name, href: `/blog/${category.slug}` }
            ]} 
          />
        </div>

        {/* Header Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {category.name}
              </h1>
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
                  <div className="grid gap-8">
                    {sortedPosts.map((post) => (
                      <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="md:flex">
                          {/* Imagen */}
                          <div className="md:w-1/3">
                            <img
                              src={post.cover}
                              alt={post.coverAlt}
                              className="w-full h-48 md:h-full object-cover"
                            />
                          </div>
                          
                          {/* Contenido */}
                          <div className="md:w-2/3 p-6">
                            <CardHeader className="p-0 mb-4">
                              <div className="flex items-center gap-2 mb-3">
                                {post.priority && post.priority <= 3 && (
                                  <Badge variant="outline" className="border-orange-200 text-orange-700">
                                    Destacado
                                  </Badge>
                                )}
                              </div>
                              
                              <CardTitle className="text-xl hover:text-primary transition-colors">
                                <a href={`/blog/${post.slug}`}>
                                  {post.title}
                                </a>
                              </CardTitle>
                            </CardHeader>
                            
                            <CardContent className="p-0">
                              <p className="text-muted-foreground mb-4 leading-relaxed">
                                {post.excerpt}
                              </p>
                              
                              {/* Meta información */}
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    {formatDate(post.date)}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    {post.readTime} min
                                  </div>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                  <a
                                    to={`/blog/${post.slug}`}
                                    className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
                                  >
                                    Leer más <ArrowRight className="h-4 w-4" />
                                  </a>
                                </div>
                              </div>
                              
                              {/* Tags */}
                              <div className="flex flex-wrap gap-2 mt-4">
                                {post.tags.map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </CardContent>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-muted-foreground mb-4">
                      Próximamente habrá artículos sobre {category.name.toLowerCase()}.
                    </p>
                    <a
                      to="/blog"
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
                    to="/presupuesto"
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
