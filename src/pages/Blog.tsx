// src/pages/Blog.tsx
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blogPosts";

const Blog = () => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <SEOHead
        title="Blog de Pintura - Consejos y Trucos | Pintores Valencia"
        description="Aprende técnicas de pintura, trucos profesionales y consejos para pintar tu casa. Guías completas de pintores expertos en Valencia."
        keywords="blog pintura, consejos pintar casa, trucos pintura, pintores valencia blog"
        canonicalUrl="https://pintores-valencia.com/blog"
      />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Blog de Pintura
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Consejos profesionales, trucos y técnicas para pintar tu casa como
            un experto
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card
              key={post.slug}
              className="hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.cover}
                  alt={post.coverAlt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="hover:text-accent transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta info */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} min</span>
                    </div>
                  </div>
                </div>

                {/* Read more link */}
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  <span>Leer más</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-16 bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Prefieres que lo hagamos nosotros?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Consejos gratis están bien, pero un trabajo profesional es mejor.
            Presupuesto sin compromiso en 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/presupuesto"
              className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Pedir presupuesto gratis
            </Link>
            <a
              href="tel:722208131"
              className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Llamar: 722 208 131
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
