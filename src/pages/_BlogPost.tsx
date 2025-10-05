// src/pages/BlogPost.tsx
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts, BLOG_BASE_URL } from "@/lib/blogPosts";
import Breadcrumbs from "@/components/Breadcrumbs";

interface BlogPostProps {
  slug?: string;
}

const BlogPost = ({ slug }: BlogPostProps) => {
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Artículo no encontrado</h1>
        <a href="/blog" className="text-accent hover:underline">
          Volver al blog
        </a>
      </div>
    );
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Get next and previous posts
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const nextPost = blogPosts[currentIndex + 1];
  const prevPost = blogPosts[currentIndex - 1];

  // Schema for blog post
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: `https://pintores-valencia.com${post.cover}`,
    author: {
      "@type": "Organization",
      name: "Pintores Valencia",
    },
    publisher: {
      "@type": "Organization",
      name: "Pintores Valencia",
      logo: {
        "@type": "ImageObject",
        url: "https://pintores-valencia.com/logo.png",
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BLOG_BASE_URL}/${post.slug}`,
    },
  };

  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: post.title }
  ];

  return (
    <>
      <SEOHead
        title={`${post.title} | Blog Pintores Valencia`}
        description={post.excerpt}
        keywords={`${post.tags.join(", ")}, pintores valencia`}
        canonicalUrl={`${BLOG_BASE_URL}/${post.slug}`}
        schema={articleSchema}
      />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center space-x-6 text-muted-foreground mb-6">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min de lectura</span>
              </div>
            </div>

            {/* Cover Image */}
            <div className="aspect-video md:aspect-[2/1] overflow-hidden rounded-lg mb-8">
              <img
                src={post.cover}
                alt={post.coverAlt}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            {post.content}
          </div>

          {/* Navigation */}
          <nav className="border-t pt-8">
            <div className="flex justify-between items-center">
              {prevPost ? (
                <Link
                  to={`/blog/${prevPost.slug}`}
                  className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground">Anterior</div>
                    <div className="font-medium">{prevPost.title}</div>
                  </div>
                </a>
              ) : (
                <div />
              )}

              {nextPost ? (
                <Link
                  to={`/blog/${nextPost.slug}`}
                  className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors text-right"
                >
                  <div>
                    <div className="text-sm text-muted-foreground">Siguiente</div>
                    <div className="font-medium">{nextPost.title}</div>
                  </div>
                  <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <div />
              )}
            </div>
          </nav>

          {/* Back to blog */}
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <a href="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al blog
              </a>
            </Button>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogPost;
