import { useState } from "react";
import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/use-seo.ts";
import { Mail, MessageSquare, ArrowLeft, Send, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { toast } from "sonner";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";

export default function ContactoPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useSeo({
    title: "Contacto — Soporte y Consultas",
    description: "¿Tienes dudas sobre cómo recurrir tu multa de tráfico? Contacta con el equipo de RecurreTuMulta.online. Soporte rápido por email.",
    canonical: "/contacto",
    noindex: true,
    keywords: ["contacto RecurreTuMulta", "soporte recurrir multa DGT", "ayuda multa tráfico"],
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contacto — RecurreTuMulta.online",
      "url": "https://recurretumulta.online/contacto",
      "inLanguage": "es-ES",
      "mainEntity": {
        "@type": "Organization",
        "name": "RecurreTuMulta.online",
        "email": "soporte@recurretumulta.online",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "email": "soporte@recurretumulta.online",
          "availableLanguage": "Spanish",
          "areaServed": "ES",
        },
      },
    },
  });

  const handleSend = () => {
    if (!name || !email || !message) { toast.error("contacto.error.fillAll"); return; }
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nAsunto: ${subject}\n\n${message}`);
    const sub = encodeURIComponent(`[RecurreTuMulta] Contacto — ${subject || "Consulta"}`);
    window.location.href = `mailto:soporte@recurretumulta.online?subject=${sub}&body=${body}`;
    toast.success("contacto.toast.opening");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <SharedNavbar />

      <main className="max-w-2xl mx-auto px-4 pt-[73px] pb-12 space-y-8">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> {"backToHome"}
        </Link>

        <div className="space-y-2">
          <h1 className="text-3xl font-black text-gray-900">{"contacto.title"}</h1>
          <p className="text-gray-500">{"contacto.subtitle"}</p>
        </div>

        {/* Canales de contacto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Mail, label: "contacto.channel.email", value: "soporte@recurretumulta.online", href: "mailto:soporte@recurretumulta.online" },
            { icon: MessageCircle, label: "contacto.channel.whatsapp", value: "contacto.channel.whatsappValue", href: "https://wa.me/34711292174" },
            { icon: MessageSquare, label: "contacto.channel.legal", value: "legal@recurretumulta.online", href: "mailto:legal@recurretumulta.online" },
            { icon: MapPin, label: "contacto.channel.service", value: "contacto.channel.serviceValue", href: "/multas" },
          ].map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-2xl border border-gray-200 hover:border-red-200 hover:bg-red-50 transition-colors text-center"
            >
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-gray-200">
                <Icon className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">{label}</p>
                <p className="text-sm font-black text-gray-900">{value}</p>
              </div>
            </a>
          ))}
        </div>

<img src="/media/file_7Zw5rGkkW5lgB5y49KDY6Tub.webp" alt="Atención al cliente de RecurreTuMulta" className="w-full h-48 object-cover rounded-2xl" loading="lazy" />
        {/* Formulario de contacto */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 space-y-4">
          <h2 className="text-lg font-black text-gray-900 flex items-center gap-2">
            <Send className="w-4 h-4 text-red-600" />
            {"contacto.form.title"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-600">{"contacto.form.name"}</label>
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Juan García" className="bg-white" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-600">{"contacto.form.email"}</label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="juan@ejemplo.com" className="bg-white" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-600">{"contacto.form.subject"}</label>
            <Input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder={"contacto.form.subjectPlaceholder"} className="bg-white" />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-600">{"contacto.form.message"}</label>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={"contacto.form.messagePlaceholder"}
              className="bg-white min-h-[120px]"
            />
          </div>

          <Button onClick={handleSend} className="w-full bg-red-600 hover:bg-red-700 text-white font-black rounded-xl h-11">
            <Send className="w-4 h-4 mr-2" />
            {"contacto.form.send"}
          </Button>
          <p className="text-xs text-gray-400 text-center">{"contacto.form.responseTime"}</p>
        </div>

        {/* FAQ rápida */}
        <div className="space-y-3">
          <h2 className="text-lg font-black text-gray-900">{"contacto.faq.title"}</h2>
          {[
            { q: "¿Por qué no se lee mi PDF?", a: "Asegúrate de que el PDF no está protegido con contraseña. Si es un escaneo muy antiguo, prueba subiendo una foto directa del documento." },
            { q: "¿Cuándo recibiré mi PDF?", a: "El PDF se genera y descarga inmediatamente después del pago. Si no aparece, comprueba que el pago fue completado y recarga la página." },
            { q: "¿Puedo pedir factura?", a: "Sí. Stripe emite una factura automáticamente al email que usaste al pagar. También puedes solicitarla a soporte@recurretumulta.online." },
            { q: "¿El recurso tiene garantía de éxito?", a: "RecurreTuMulta.online genera argumentos jurídicos basados en el contenido de tu multa, pero el resultado depende de la administración. Si el análisis no encuentra ningún defecto, te devolvemos el importe." },
          ].map((f) => (
            <div key={f.q} className="bg-white border border-gray-200 rounded-xl p-4 space-y-1">
              <p className="text-sm font-bold text-gray-900">{f.q}</p>
              <p className="text-sm text-gray-600">{f.a}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-gray-100 py-6">
        <SharedFooter />
      </footer>
    </div>
  );
}
