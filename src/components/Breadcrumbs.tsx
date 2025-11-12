
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center flex-wrap gap-x-1 text-sm text-muted-foreground">
        <li className="flex items-center">
          <a href="/" className="flex items-center hover:text-primary transition-colors gap-1">
            <Home className="w-4 h-4" />
            <span className="sr-only">Inicio</span>
          </a>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground/70" />
            {item.href && index < items.length - 1 ? (
              <a
                href={item.href}
                className="hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-foreground font-semibold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
