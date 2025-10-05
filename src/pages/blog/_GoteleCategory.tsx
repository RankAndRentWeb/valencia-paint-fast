// src/pages/blog/GoteleCategory.tsx
import CategoryPageLayout from "@/components/CategoryPageLayout";
import { blogCategories } from "@/lib/blogCategories";
import NotFound from "@/pages/NotFound";

export default function GoteleCategory() {
  const category = blogCategories.find(cat => cat.slug === "gotele");
  
  if (!category) {
    return <NotFound />;
  }
  
  return <CategoryPageLayout category={category} />;
}
