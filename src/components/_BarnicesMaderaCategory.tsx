// src/pages/blog/BarnicesMaderaCategory.tsx
import CategoryPageLayout from "@/components/CategoryPageLayout";
import { blogCategories } from "@/lib/blogCategories";
import NotFound from "@/pages/NotFound";

export default function BarnicesMaderaCategory() {
  const category = blogCategories.find(cat => cat.slug === "barnices-madera");
  
  if (!category) {
    return <NotFound />;
  }
  
  return <CategoryPageLayout category={category} />;
}
