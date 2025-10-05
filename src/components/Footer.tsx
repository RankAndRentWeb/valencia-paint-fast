
export default function SiteFooter() {
  return (
    <footer className="w-full border-t mt-12">
      <div className="mx-auto max-w-6xl p-6 grid gap-6 md:grid-cols-3">
        <div>
          <h4 className="font-semibold">Pintores en Valencia</h4>
          <p>Empresa profesional de pintores en Valencia capital y provincia. Trabajos de calidad con garantía escrita.</p>
        </div>
        <div>
          <h5 className="font-medium">Servicios</h5>
          <ul className="space-y-1">
            <li><a href="/quitar-gotele-valencia">Quitar gotelé</a></li>
            <li><a href="/pintura-interior-pisos-casas">Pintura Interior</a></li>
            <li><a href="/pintura-exterior-fachadas">Pintura Exterior</a></li>
            <li><a href="/presupuesto">Pedir presupuesto</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium">Contacto</h5>
          <p>Tel: 722 208 131</p>
          <p>Email: info@pintores-valencia.com</p>
          <p>Valencia, España</p>
          <p>Lun–Sáb 08:00–20:00</p>
        </div>
      </div>
      <div className="text-center py-4 text-sm">© 2025 Pintores en Valencia. Todos los derechos reservados.</div>
    </footer>
  );
}
