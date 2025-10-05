// src/pages/blog/ColoresInteriorCategory.tsx
import CategoryPageLayout from "@/components/CategoryPageLayout";
import { blogCategories } from "@/lib/blogCategories";
import NotFound from "@/pages/NotFound";

export default function ColoresInteriorCategory() {
  const category = blogCategories.find(cat => cat.slug === "colores-interior");
  
  if (!category) {
    return <NotFound />;
  }
  
  return <CategoryPageLayout category={category} />;
}
