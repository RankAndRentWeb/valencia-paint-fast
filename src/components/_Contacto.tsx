import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type Status = "idle" | "success" | "error";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  // Ocultar mensaje a los pocos segundos
  useEffect(() => {
    if (status === "idle") return;
    const t = setTimeout(() => setStatus("idle"), 4000);
    return () => clearTimeout(t);
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Error enviando el formulario");
      }

      setStatus("success");
      setStatusMessage("Solicitud enviada. Te contactaremos en menos de 24 horas.");
      setFormData({ nombre: "", telefono: "", email: "", mensaje: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setStatusMessage("Ha habido un error al enviar. Prueba de nuevo en unos minutos.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Label htmlFor="nombre" className="block text-sm font-medium mb-1">
            Nombre *
          </Label>
          <Input
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <Label htmlFor="telefono" className="block text-sm font-medium mb-1">
            Teléfono *
          </Label>
          <Input
            id="telefono"
            name="telefono"
            type="tel"
            value={formData.telefono}
            onChange={handleChange}
            required
            placeholder="+34 6XX XXX XXX"
          />
        </div>

        <div>
          <Label htmlFor="email" className="block text-sm font-medium mb-1">
            Email (opcional)
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tucorreo@email.com"
          />
        </div>

        <div>
          <Label htmlFor="mensaje" className="block text-sm font-medium mb-1">
            Tu mensaje *
          </Label>
          <Textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            required
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Cuéntanos qué necesitas pintar"
          />
        </div>

        <div className="text-[11px] text-muted-foreground">
          Al enviar, aceptas el tratamiento de datos para responder a tu
          solicitud.
        </div>

        {status !== "idle" && (
          <div
            className={`text-sm ${
              status === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {statusMessage}
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center rounded-md bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-3 text-lg shadow-md hover:shadow-lg disabled:opacity-60"
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </div>
  );
};

export default Contacto;
