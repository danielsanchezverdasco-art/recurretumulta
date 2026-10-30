import { useState } from "react";
import { motion } from "motion/react";
import {
  Building2, Zap, Shield, Clock, CheckCircle, ArrowRight,
  PhoneCall, Users, FileText, Headphones, ChevronDown, ChevronUp,
  BadgeCheck, Infinity as InfinityIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { toast } from "sonner";
import { useSeo } from "@/hooks/use-seo.ts";
import { PageHero } from "@/components/motion.tsx";
import { api } from "@/convex/_generated/api.js";
import { Link } from "react-router-dom";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";

/* ─── DATA ──────────────────────────────────────────────────────────────── */
const FEATURES = [
  {
    icon: <InfinityIcon className="w-6 h-6" />,
    title: "Recursos ilimitados",
    desc: "Genera todos los recursos de reposición que necesites. Sin límite de PDFs, sin créditos, sin restricciones.",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Asistencia prioritaria",
    desc: "Acceso directo al equipo de soporte. Sin colas, sin esperas. Respuesta prioritaria: nuestro objetivo es contestar en menos de 2 horas laborables (sin compromiso contractual).",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Sin colas de análisis IA",
    desc: "Tus multas se analizan con prioridad absoluta. Cola separada para empresas, sin esperar detrás de usuarios individuales.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Múltiples vehículos y conductores",
    desc: "Gestiona multas de toda tu flota desde una sola cuenta. Ideal para empresas con 2 o más vehículos.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Historial completo de expedientes",
    desc: "Acceso a todos los recursos generados, con estado actualizado de cada expediente en un panel centralizado.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Detección rigurosa de defectos",
    desc: "La misma IA que analiza multas particulares, ahora con foco total en tus expedientes empresariales.",
  },
];

const FAQS = [
  {
    q: "¿Cuántos usuarios puede usar el plan empresas?",
    a: "El plan empresas es por cuenta. Una persona de la empresa gestiona todas las multas. Puedes gestionar multas de diferentes vehículos y conductores desde esa única cuenta.",
  },
  {
    q: "¿Cuándo empiezo a tener acceso ilimitado?",
    a: "Inmediatamente después de completar el pago. El acceso se activa en segundos y los recursos son ilimitados desde ese mismo momento.",
  },
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: "Sí. Sin permanencia. Puedes cancelar desde el portal de facturación en cualquier momento. El acceso se mantiene hasta el final del período pagado.",
  },
  {
    q: "¿Qué significa 'asistencia prioritaria sin colas'?",
    a: "Las empresas tienen una línea de soporte separada con respuesta prioritaria (objetivo: menos de 2 horas laborables, sin compromiso contractual). No compartes cola con los miles de usuarios individuales.",
  },
  {
    q: "¿Vale la pena para una empresa con solo 2-3 coches?",
    a: "Con 2-3 vehículos en circulación diaria, una o dos multas anuales ya justifican el coste mensual. A partir de 4-5 vehículos el ahorro es evidente desde el primer mes.",
  },
  {
    q: "¿Se puede facturar el plan empresas para deducirlo?",
    a: "Sí. Recibirás factura con los datos de tu empresa. El plan empresas es un gasto de gestoría/asesoría legalmente deducible en el Impuesto de Sociedades.",
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */

function PricingCard() {
  const [empresaNombre, setEmpresaNombre] = useState("");

  return (
    <Card className="border-2 border-gray-900 shadow-2xl rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gray-900 px-6 py-5 text-white text-center">
        <Badge className="bg-red-600 text-white text-xs font-black mb-3 px-3 py-1">
          PLAN EMPRESAS
        </Badge>
        <div className="flex items-end justify-center gap-1">
          <span className="text-5xl font-black">70</span>
          <span className="text-xl font-bold mb-2">€</span>
          <span className="text-gray-400 mb-2">/mes</span>
        </div>
        <p className="text-gray-300 text-sm mt-1">Sin permanencia · Cancela cuando quieras</p>
        <p className="text-sm mt-2">
          <span className="bg-red-600 text-white font-bold rounded-full px-3 py-1 text-xs">
            o 700€ pagando el año completo
          </span>
        </p>
      </div>

      <CardContent className="p-6 space-y-4">
        {/* Feature list */}
        <ul className="space-y-3">
          {[
            "Recursos PDF ilimitados",
            "Asistencia prioritaria (< 2h)",
            "Sin colas de análisis IA",
            "Gestión de toda la flota",
            "Panel centralizado de expedientes",
            "Factura deducible para tu empresa",
            "Análisis IA de vicios de forma",
          ].map((f) => (
            <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
              <span className="font-medium">{f}</span>
            </li>
          ))}
        </ul>

        <div className="border-t border-gray-100 pt-4 space-y-3">
          <Label htmlFor="empresa-nombre" className="text-xs font-bold text-gray-500 uppercase tracking-wide">
            Nombre de tu empresa (opcional)
          </Label>
          <Input
            id="empresa-nombre"
            placeholder="Transportes García S.L."
            value={empresaNombre}
            onChange={(e) => setEmpresaNombre(e.target.value)}
            className="rounded-xl text-sm"
          />
        </div>

        {/* Auth states */}
        <div className="space-y-2">
          <a
            href={`https://wa.me/34711292174?text=${encodeURIComponent(
              `Hola, me interesa el Plan Empresas de RecurreTuMulta${empresaNombre ? ` para ${empresaNombre}` : ""}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-black text-base rounded-xl py-3 cursor-pointer flex items-center justify-center"
          >
            Solicitar Plan Empresas
          </a>
          <p className="text-center text-xs text-gray-500">Te contactamos por WhatsApp en minutos</p>
        </div>

        <p className="text-center text-xs text-gray-400">
          Pago seguro · Facturas automáticas · Cancela en cualquier momento
        </p>
      </CardContent>
    </Card>
  );
}

export default function EmpresasPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useSeo({
    title: "Multas para flotas: plan empresas 70€/mes",
    description: "Plan empresas para recurrir multas DGT: recursos ilimitados, asistencia prioritaria y panel de flota. 70€/mes o 700€/año.",
    canonical: "/empresas",
    keywords: [
      "plan empresas multas trafico",
      "recurrir multas flota empresas",
      "gestion multas flota",
      "multas trafico empresas",
      "recurso multa empresa sin abogado",
      "software gestion multas empresas",
      "asesor multas trafico empresas",
    ],
    // 17/10/2026: sin Product/Offer (es un servicio, no una ficha de producto; GSC Fichas de comerciantes).
    schema: [
    {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
],
});

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SharedNavbar />
      <main>

      {/* ── HERO ── */}
      <PageHero
        rounded={false}
        image="/media/file_CoM5iUjFsU53eF8l0A72S4hZ.webp"
        imageAlt="Flota de furgonetas de reparto"
        badge="🏢 Plan Empresas"
        title={
          <>
            Recursos de multas<br />
            <span className="text-red-500">ilimitados</span> para tu empresa
          </>
        }
        subtitle={
          <>
            Flotas, despachos, autónomos con vehículo. Analiza y recurre todas las multas que
            necesites. Asistencia prioritaria sin esperas.{" "}
            <strong className="text-white">70€/mes · 700€/año.</strong>
          </>
        }
      >
        <div className="flex flex-wrap gap-4 text-sm text-gray-300">
          {["Sin límite de PDFs", "Soporte < 2 horas", "Sin colas de IA", "Cancela cuando quieras"].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <BadgeCheck className="w-4 h-4 text-green-400" />
              {item}
            </span>
          ))}
        </div>
      </PageHero>

      {/* ── PARA QUIÉN ES ── */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-3">¿Para quién es el Plan Empresas?</h2>
          <p className="text-gray-500 mb-10 text-sm">Cualquier empresa que tenga vehículos y reciba multas es candidata a ahorrar con este plan.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🚚", label: "Empresas de transporte y logística" },
              { icon: "🏢", label: "Despachos y asesorías" },
              { icon: "🚗", label: "Flotas de empresa (2+ vehículos)" },
              { icon: "👷", label: "Autónomos con furgoneta" },
              { icon: "🏨", label: "Hoteles con traslados" },
              { icon: "🛒", label: "Distribuidores y repartidores" },
              { icon: "🔧", label: "Empresas de mantenimiento" },
              { icon: "📦", label: "Mensajería y paquetería" },
            ].map((item) => (
              <Card key={item.label} className="rounded-xl border border-gray-200 text-center p-4 shadow-none">
                <span className="text-2xl block mb-2">{item.icon}</span>
                <p className="text-xs font-semibold text-gray-700">{item.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES + PRICING ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Features */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-8">Todo lo que incluye el plan</h2>
            <div className="space-y-6">
              {FEATURES.map((f) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-black text-gray-900 text-sm">{f.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pricing card */}
          <div className="sticky top-6">
            <PricingCard />
            <div className="mt-4 flex items-center gap-2 justify-center">
              <PhoneCall className="w-4 h-4 text-gray-400" />
              <p className="text-xs text-gray-400">¿Necesitas más de una cuenta? <a href="mailto:soporte@recurretumulta.online" className="text-gray-700 font-semibold underline">Contáctanos</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* ── AHORRO CALCULADO ── */}
      <section className="py-14 px-4 bg-gray-950 text-white">
        <div className="max-w-3xl mx-auto text-center">
                <figure className="my-8">
        <img src="/media/empresas-flota-gestion.webp" alt="Responsable revisando con una tablet una flota de furgonetas de reparto en un polígono industrial" className="w-full rounded-3xl border border-slate-200" loading="lazy" />
      </figure>

<h2 className="text-2xl font-black mb-3">Cuánto puede ahorrar una empresa con 5 vehículos</h2>
          <p className="text-gray-400 text-sm mb-10">Ejemplo orientativo. El ahorro real depende del número de multas y de si tienen defectos que las hagan recurribles.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Multas anuales (flota 5 vehículos)", value: "~18*" },
              { label: "Importe medio por multa", value: "280 €*" },
              { label: "Coste del análisis con IA", value: "Gratis" },
              { label: "Coste por recurso en PDF", value: "4,99 €" },
            ].map((stat) => (
              <Card key={stat.label} className="bg-gray-800 border-gray-700 rounded-xl p-4 text-center">
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
              </Card>
            ))}
          </div>
          <p className="text-[11px] text-gray-500 -mt-4 mb-8">*Cifras de ejemplo ilustrativo, no un dato estadístico verificado.</p>
          <div className="bg-gray-800 rounded-2xl p-6 text-left space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Coste anual del Plan Empresas</span>
              <span className="font-bold text-white">1.800 €</span>
            </div>
            <p className="text-xs text-gray-500 pt-1">
              El plan se amortiza si el importe de las multas recurridas con éxito supera su coste anual. Al ser
              el análisis siempre gratuito, puedes comprobar antes de suscribirte qué defectos detecta la IA en
              tus expedientes reales.
            </p>
          </div>
        </div>
      </section>

      {/* ── POR QUÉ CONFIAR EN NOSOTROS ── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 text-center mb-8">Por qué elegir RecurreTuMulta.online para tu flota</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Análisis siempre gratuito", desc: "Revisa cualquier expediente sin coste antes de decidir si vale la pena presentar el recurso." },
              { title: "Basado en normativa vigente", desc: "Cada argumento generado se apoya en la Ley de Tráfico y Seguridad Vial y la Ley 39/2015 del Procedimiento Administrativo Común." },
              { title: "Sin permanencia", desc: "El Plan Empresas es de suscripción mensual sin compromiso de permanencia; puedes cancelarlo cuando quieras." },
            ].map((f) => (
              <Card key={f.title} className="rounded-2xl border border-gray-100 shadow-sm p-5">
                <p className="font-black text-gray-900 text-sm mb-2">{f.title}</p>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECURSOS ÚTILES ── */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 text-center mb-3">Recursos gratuitos para tu flota</h2>
          <p className="text-gray-500 text-sm text-center mb-8 max-w-xl mx-auto">Antes de suscribirte, prueba gratis lo que la IA detecta en tus expedientes reales.</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { to: "/#analizador", t: "Analizar una multa gratis con IA" },
              { to: "/buscador-codigo-multa", t: "Buscador de infracciones por código" },
              { to: "/guias/vicios-forma", t: "Guía: defectos de forma que anulan multas" },
              { to: "/guias/prescripcion", t: "Guía: prescripción y caducidad" },
              { to: "/blog", t: "Blog: guías sobre multas de tráfico" },
              { to: "/multas", t: "Guías por provincia" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="flex items-center justify-between gap-2 bg-white border border-gray-200 hover:border-red-300 rounded-2xl px-5 py-4 font-bold text-gray-900 hover:text-red-600 transition-colors text-sm">
                {l.t}
                <ArrowRight className="w-4 h-4 text-gray-300 shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 text-center mb-8">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <Card key={i} className="rounded-xl border border-gray-200 overflow-hidden shadow-none">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-black text-gray-900 text-sm pr-4">{faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" />
                    : <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-gray-600">{faq.a}</div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-16 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-xl mx-auto space-y-4">
          <Building2 className="w-10 h-10 text-red-500 mx-auto" />
          <h2 className="text-3xl font-black">Empieza hoy, cancela cuando quieras</h2>
          <p className="text-gray-400 text-sm">Sin permanencia. Sin sorpresas. Acceso ilimitado desde el primer segundo.</p>
          <div className="flex items-end justify-center gap-1 py-2">
            <span className="text-5xl font-black">70€</span>
            <span className="text-gray-400 mb-2">/mes</span>
          </div>
          <p className="text-gray-400 text-sm -mt-2">o <span className="text-white font-bold">700€/año</span> con pago anual</p>
          <a
            href={`https://wa.me/34711292174?text=${encodeURIComponent(
              "Hola, me interesa el Plan Empresas de RecurreTuMulta (70€/mes)."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs mx-auto bg-red-600 hover:bg-red-700 text-white font-black text-base rounded-xl py-3 cursor-pointer flex items-center justify-center"
          >
            Solicitar Plan Empresas
          </a>
          <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
            <Clock className="w-3 h-3" /> Acceso inmediato tras el pago
          </p>
        </div>
      </section>

      </main>
      <SharedFooter />
    </div>
  );
}
