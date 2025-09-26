import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const baseLink =
    "px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600";
  const active =
    "text-primary bg-primary/10 aria-[current=page]:underline underline-offset-4";
  const idle = "text-foreground hover:text-primary";

  return (
    <header role="banner" className="sticky top-0 z-40 w-full bg-background/90 backdrop-blur border-b">
      {/* Skip link accesible */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute left-4 top-2 bg-white px-3 py-2 rounded shadow">
        Saltar al contenido principal
      </a>

      <div className="container mx-auto px-4 h-16 flex items-center justify-between" aria-label="Cabecera">
        {/* Logo / marca */}
        <Link to="/" className="flex items-center gap-2" aria-label="Ir al inicio">
          <img
            src="/pintores-valencia-logo.png"
            alt="Pintores en Valencia"
            width={28}
            height={28}
            className="rounded-md"
          />
          <span className="font-semibold">Pintores en Valencia</span>
        </Link>

        {/* Navegación principal */}
        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `${baseLink} ${isActive ? active : idle}`}
                aria-current={({ isActive }) => (isActive ? "page" : undefined) as any}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/servicios"
                className={({ isActive }) => `${baseLink} ${isActive ? active : idle}`}
                aria-current={({ isActive }) => (isActive ? "page" : undefined) as any}
              >
                Servicios
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/precios"
                className={({ isActive }) => `${baseLink} ${isActive ? active : idle}`}
                aria-current={({ isActive }) => (isActive ? "page" : undefined) as any}
              >
                Precios
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/zonas"
                className={({ isActive }) => `${baseLink} ${isActive ? active : idle}`}
                aria-current={({ isActive }) => (isActive ? "page" : undefined) as any}
              >
                Zonas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/presupuesto"
                className={({ isActive }) => `${baseLink} ${isActive ? active : idle}`}
                aria-current={({ isActive }) => (isActive ? "page" : undefined) as any}
              >
                Presupuesto
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                className={({ isActive }) => `${baseLink} ${isActive ? active : idle}`}
                aria-current={({ isActive }) => (isActive ? "page" : undefined) as any}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* CTA Tel – alto contraste accesible */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:722208131"
            className="inline-flex items-center gap-2 rounded-md border border-blue-600 text-blue-600 px-3 py-2 text-sm font-medium hover:bg-blue-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-colors"
            aria-label="Llamar por teléfono al 722 208 131"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            722 208 131
          </a>
        </div>

        {/* Botón menú móvil */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          aria-controls="menu-movil"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menú móvil, preserva las rutas existentes */}
      {open && (
        <nav id="menu-movil" aria-label="Navegación móvil" className="md:hidden border-t">
          <ul className="p-2 space-y-1">
            {[
              { to: "/", label: "Inicio" },
              { to: "/servicios", label: "Servicios" },
              { to: "/precios", label: "Precios" },
              { to: "/zonas", label: "Zonas" },
              { to: "/presupuesto", label: "Presupuesto" },
              { to: "/contacto", label: "Contacto" },
            ].map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block ${baseLink} w-full text-left ${isActive ? active : idle}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="tel:722208131"
                className="inline-flex items-center gap-2 w-full justify-center rounded-md border border-blue-600 text-blue-600 px-3 py-2 text-sm font-medium hover:bg-blue-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-colors"
                aria-label="Llamar por teléfono al 722 208 131"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Llamar ahora
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
