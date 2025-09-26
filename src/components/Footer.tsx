import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-background" role="contentinfo">
      <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <section aria-labelledby="ft-about">
          <h2 id="ft-about" className="text-base font-semibold mb-3">
            Pintores en Valencia
          </h2>
          <p className="text-sm text-muted-foreground">
            Empresa de pintores profesionales en Valencia capital y provincia. Presupuesto en 24h, limpieza incluida, seguro RC y garantía escrita.
          </p>
        </section>

        <nav aria-labelledby="ft-links">
          <h2 id="ft-links" className="text-base font-semibold mb-3">
            Enlaces
          </h2>
          <ul className="space-y-2">
            <li><Link to="/servicios" className="hover:underline">Servicios</Link></li>
            <li><Link to="/precios" className="hover:underline">Precios</Link></li>
            <li><Link to="/zonas" className="hover:underline">Zonas</Link></li>
            <li><Link to="/presupuesto" className="hover:underline">Presupuesto</Link></li>
          </ul>
        </nav>

        <nav aria-labelledby="ft-legal">
          <h2 id="ft-legal" className="text-base font-semibold mb-3">
            Legal
          </h2>
          <ul className="space-y-2">
            <li><Link to="/aviso-legal" className="hover:underline">Aviso legal</Link></li>
            <li><Link to="/politica-privacidad" className="hover:underline">Política de privacidad</Link></li>
            <li><Link to="/cookies" className="hover:underline">Política de cookies</Link></li>
          </ul>
        </nav>
      </div>

      <div className="border-t">
        <div className="container mx-auto px-4 py-4 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Pintores en Valencia. Todos los derechos reservados.</p>
          <a
            href="tel:722208131"
            className="rounded-md px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            aria-label="Llamar al 722 208 131"
          >
            Llamar: 722 208 131
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
