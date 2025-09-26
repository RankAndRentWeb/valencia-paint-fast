import { Link, NavLink } from "react-router-dom";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    // Header semántico con landmark
    <header className="border-b bg-background sticky top-0 z-50" role="banner">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo + marca (logo decorativo para evitar redundancia con el texto) */}
        <Link
          to="/"
          aria-label="Pintores en Valencia — ir al inicio"
          className="flex items-center gap-2"
        >
          <img
            src="/pintores-valencia-logo.png"
            width={40}
            height={40}
            alt=""
            aria-hidden="true"
            className="rounded-md"
            decoding="async"
            fetchPriority="high"
          />
          <span className="font-semibold">Pintores en Valencia</span>
        </Link>

        {/* Navegación principal */}
        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `hover:text-primary transition-colors ${isActive ? "text-primary" : ""}`
                }
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#servicios"
                className={({ isActive }) =>
                  `hover:text-primary transition-colors ${isActive ? "text-primary" : ""}`
                }
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              >
                Servicios
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/zonas"
                className={({ isActive }) =>
                  `hover:text-primary transition-colors ${isActive ? "text-primary" : ""}`
                }
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              >
                Zonas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/precios"
                className={({ isActive }) =>
                  `hover:text-primary transition-colors ${isActive ? "text-primary" : ""}`
                }
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              >
                Precios
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/trabajos"
                className={({ isActive }) =>
                  `hover:text-primary transition-colors ${isActive ? "text-primary" : ""}`
                }
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              >
                Trabajos
              </NavLink>
            </li>

            {/* CTA Presupuesto en el menú */}
            <li>
              <NavLink
                to="/presupuesto"
                className="inline-flex items-center rounded-md px-3 py-2 bg-accent text-accent-foreground hover:bg-accent/90 shadow-cta"
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              >
                Presupuesto
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contacto"
                className={({ isActive }) =>
                  `hover:text-primary transition-colors ${isActive ? "text-primary" : ""}`
                }
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Botón de llamada con contraste AA */}
        <a
          href="tel:722208131"
          className="inline-flex items-center gap-2 rounded-md px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          aria-label="Llamar al 722 208 131"
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          <span className="hidden sm:inline">722 208 131</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
