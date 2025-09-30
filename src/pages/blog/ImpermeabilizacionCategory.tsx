// src/pages/blog/ImpermeabilizacionCategory.tsx
import CategoryPageLayout from "@/components/CategoryPageLayout";
import { blogCategories } from "@/lib/blogCategories";
import NotFound from "@/pages/NotFound";

export default function ImpermeabilizacionCategory() {
  const category = blogCategories.find(cat => cat.slug === "impermeabilizacion");
  
  if (!category) {
    return <NotFound />;
  }
  
  return <CategoryPageLayout category={category} />;
}
