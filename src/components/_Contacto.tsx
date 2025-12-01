import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Mensaje enviado",
      description: "Te contactaremos lo antes posible.",
    });
    setFormData({ nombre: "", telefono: "", email: "", mensaje: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <SEOHead
        title="Contacto - Pintores en Valencia"
        description="Contacta con Pintores en Valencia. Teléfono 722 208 131, email, WhatsApp. Horario L-S 8:00-20:00. Presupuesto gratis en Valencia."
        keywords="contacto pintores valencia, telefono pintores, presupuesto pintura valencia"
        canonicalUrl="https://pintores-valencia.com/contacto"
      />

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "Contacto" }]} />

        <div className="py-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Contacta con nosotros</h1>
            <p className="text-base text-muted-foreground">Teléfono, WhatsApp o formulario — respuesta &lt; 24h.</p>
          </div>

          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6 items-start">
                {/* Columna izquierda: canales compactos */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="p-2 rounded-md bg-blue-50 text-blue-600"><Phone className="w-5 h-5"/></span>
                      <div>
                        <div className="font-medium leading-tight">Teléfono</div>
                        <div className="text-sm text-muted-foreground">Consultas urgentes y coordinación</div>
                      </div>
                    </div>
                    <a href="tel:+34722208131" className="text-blue-600 font-medium hover:underline">722 208 131</a>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="p-2 rounded-md bg-green-50 text-green-600"><MessageCircle className="w-5 h-5"/></span>
                      <div>
                        <div className="font-medium leading-tight">WhatsApp</div>
                        <div className="text-sm text-muted-foreground">Envíanos fotos y medidas</div>
                      </div>
                    </div>
                    <a href="https://wa.me/34722208131" target="_blank" rel="noopener" className="text-green-600 font-medium hover:underline">Abrir chat</a>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="p-2 rounded-md bg-orange-50 text-orange-600"><Mail className="w-5 h-5"/></span>
                      <div>
                        <div className="font-medium leading-tight">Email</div>
                        <div className="text-sm text-muted-foreground">Consultas detalladas</div>
                      </div>
                    </div>
                    <a href="mailto:info@pintores-valencia.com" className="text-orange-600 font-medium hover:underline break-all">info@pintores-valencia.com</a>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="p-2 rounded-md bg-violet-50 text-violet-600"><MapPin className="w-5 h-5"/></span>
                      <div>
                        <div className="font-medium leading-tight">Zona</div>
                        <div className="text-sm text-muted-foreground">Valencia y provincia</div>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">Horarios: L-S 8:00-20:00</span>
                  </div>
                </div>

                {/* Columna derecha: formulario compacto */}
                <div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="nombre">Nombre *</Label>
                        <Input id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required placeholder="Ej: Laura Martínez" />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="telefono">Teléfono *</Label>
                        <Input id="telefono" name="telefono" type="tel" value={formData.telefono} onChange={handleChange} required placeholder="Ej: 722 000 000" />
                      </div>
                      <div className="space-y-1.5 md:col-span-2">
                        <Label htmlFor="email">Email (opcional)</Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="tucorreo@email.com" />
                      </div>
                      <div className="space-y-1.5 md:col-span-2">
                        <Label htmlFor="mensaje">Mensaje *</Label>
                        <Textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} required rows={5} placeholder="Cuéntanos brevemente qué necesitas" />
                      </div>
                    </div>
                    <div className="text-[11px] text-muted-foreground">Al enviar, aceptas el tratamiento de datos para responder a tu solicitud.</div>
                    <Button type="submit" className="w-full h-11 text-sm font-semibold bg-accent hover:bg-accent/90">Enviar solicitud</Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Contacto;