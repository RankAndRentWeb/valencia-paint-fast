import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Upload, CheckCircle, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Presupuesto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    servicio: "",
    metros: "",
    zona: "",
    descripcion: "",
    consentimiento: false
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consentimiento) {
      toast({
        title: "Error",
        description: "Debes aceptar el tratamiento de datos personales.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Solicitud enviada",
      description: "Te contactaremos en menos de 24 horas con tu presupuesto.",
    });
    setFormData({
      nombre: "",
      telefono: "",
      email: "",
      servicio: "",
      metros: "",
      zona: "",
      descripcion: "",
      consentimiento: false
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <SEOHead
        title="Presupuesto gratis - Pintores en Valencia"
        description="Solicita tu presupuesto gratuito de pintura en Valencia. Respuesta en 24h. Formulario con subida de fotos y sin compromiso."
        keywords="presupuesto pintura valencia, presupuesto gratis, precio pintar valencia"
        canonicalUrl="https://pintores-valencia.com/presupuesto"
      />

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "Presupuesto" }]} />
        
        <div className="py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Presupuesto gratuito y sin compromiso
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Recibe tu presupuesto personalizado en menos de 24 horas. 
              Rellena el formulario con los detalles de tu proyecto.
            </p>
            
            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">100% gratuito</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Respuesta en 24h</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Sin compromiso</span>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Formulario de presupuesto</CardTitle>
                <p className="text-center text-muted-foreground">
                  Cuanta más información nos proporciones, más preciso será el presupuesto
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre completo *</Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre y apellidos"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        placeholder="Tu número de teléfono"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com (opcional)"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2">
                    <Label htmlFor="servicio">Tipo de servicio *</Label>
                    <Select onValueChange={(value) => handleSelectChange("servicio", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el servicio que necesitas" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="quitar-gotele">Quitar gotelé</SelectItem>
                        <SelectItem value="pintura-interior">Pintura interior</SelectItem>
                        <SelectItem value="pintura-exterior">Pintura exterior/fachada</SelectItem>
                        <SelectItem value="impermeabilizacion">Impermeabilización</SelectItem>
                        <SelectItem value="local-comercial">Local comercial</SelectItem>
                        <SelectItem value="comunidad">Comunidad de propietarios</SelectItem>
                        <SelectItem value="lacado">Lacado de puertas</SelectItem>
                        <SelectItem value="papel-pintado">Papel pintado/vinilos</SelectItem>
                        <SelectItem value="otro">Otro servicio</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="metros">Metros cuadrados (aprox.)</Label>
                      <Input
                        id="metros"
                        name="metros"
                        value={formData.metros}
                        onChange={handleChange}
                        placeholder="Ej: 80 m²"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="zona">Zona de Valencia</Label>
                      <Input
                        id="zona"
                        name="zona"
                        value={formData.zona}
                        onChange={handleChange}
                        placeholder="Ej: Russafa, Centro, Paterna..."
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="descripcion">Describe tu proyecto *</Label>
                    <Textarea
                      id="descripcion"
                      name="descripcion"
                      value={formData.descripcion}
                      onChange={handleChange}
                      required
                      placeholder="Explica qué necesitas: habitaciones a pintar, estado actual, colores preferidos, urgencia, etc."
                      rows={5}
                    />
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label>Subir fotos (opcional)</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Arrastra las fotos aquí o haz clic para seleccionar
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Formatos: JPG, PNG (máx. 5MB por foto)
                      </p>
                      <Button type="button" variant="outline" size="sm" className="mt-2">
                        Seleccionar fotos
                      </Button>
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="consentimiento"
                      checked={formData.consentimiento}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consentimiento: !!checked }))}
                    />
                    <Label htmlFor="consentimiento" className="text-sm leading-relaxed">
                      Acepto el tratamiento de mis datos personales para recibir un presupuesto personalizado. 
                      Puedes consultar nuestra{" "}
                      <a href="/politica-privacidad" className="text-primary hover:underline">
                        política de privacidad
                      </a>.
                    </Label>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-cta shadow-cta" size="lg">
                    Solicitar presupuesto gratuito
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* WhatsApp Alternative */}
            <Card className="mt-6 bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-500 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">¿Prefieres WhatsApp?</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Envíanos fotos y detalles directamente por WhatsApp para un presupuesto más rápido
                    </p>
                    <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
                      <a href="https://wa.me/34722208131?text=Hola,%20me%20gustaría%20solicitar%20un%20presupuesto%20de%20pintura" className="flex items-center space-x-2">
                        <MessageCircle className="w-4 h-4" />
                        <span>Enviar por WhatsApp</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Process Info */}
            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold mb-4">¿Qué pasa después?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl mb-2">1️⃣</div>
                  <h4 className="font-medium mb-1">Revisamos tu solicitud</h4>
                  <p className="text-muted-foreground">Analizamos todos los detalles de tu proyecto</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl mb-2">2️⃣</div>
                  <h4 className="font-medium mb-1">Te contactamos</h4>
                  <p className="text-muted-foreground">En menos de 24h para aclarar dudas si es necesario</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl mb-2">3️⃣</div>
                  <h4 className="font-medium mb-1">Presupuesto detallado</h4>
                  <p className="text-muted-foreground">Recibes el presupuesto completo sin compromiso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Presupuesto;