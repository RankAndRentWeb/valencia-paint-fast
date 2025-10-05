// src/pages/blog/FachadasExteriorCategory.tsx
import CategoryPageLayout from "@/components/CategoryPageLayout";
import { blogCategories } from "@/lib/blogCategories";
import NotFound from "@/pages/NotFound";

export default function FachadasExteriorCategory() {
  const category = blogCategories.find(cat => cat.slug === "fachadas-exterior");
  
  if (!category) {
    return <NotFound />;
  }
  
  return <CategoryPageLayout category={category} />;
}
