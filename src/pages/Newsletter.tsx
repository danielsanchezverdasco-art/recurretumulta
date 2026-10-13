// Página /newsletter — presentación y suscripción a "La semana del motor en 5 minutos".
import { type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Mail, Clock, Newspaper, Swords, Car, ShieldCheck, Gift, BellOff } from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import { DrawIcon } from "@/components/motion.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import NewsletterSignup from "@/components/NewsletterSignup.tsx";

const DOMAIN = "https://recurretumulta.online";

const FAQ_ITEMS = [
  {
    "@type": "Question",
    name: "¿Qué es La semana del motor en 5 minutos?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Nuestra newsletter semanal: un resumen con las noticias del motor, los duelos de la semana, los modelos nuevos que llegan a España y los cambios de normativa que te afectan como conductor. Se lee en 5 minutos.",
    },
  },
  {
    "@type": "Question",
    name: "¿Cuándo se envía y cuánto cuesta?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Cada domingo a las 18:00. Es completamente gratis y siempre lo será: solo necesitas tu email.",
    },
  },
  {
    "@type": "Question",
    name: "¿Vais a enviarme spam o a vender mi email?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Un email a la semana, sin spam, sin publicidad encubierta y sin ceder tus datos a terceros. Cumplimos el RGPD y puedes darte de baja en 1 clic desde cualquier email.",
    },
  },
  {
    "@type": "Question",
    name: "¿Cómo me doy de baja?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Cada email incluye un enlace de baja en 1 clic. También puedes escribirnos a soporte@recurretumulta.online y lo gestionamos.",
    },
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${DOMAIN}/newsletter`,
      name: "Newsletter: La semana del motor en 5 minutos",
      url: `${DOMAIN}/newsletter`,
      description:
        "Suscríbete gratis a La semana del motor en 5 minutos: noticias, duelos, modelos nuevos y normativa, cada domingo en tu email. Sin spam.",
      inLanguage: "es-ES",
    },
    {
      "@type": "FAQPage",
      "@id": `${DOMAIN}/newsletter#faq`,
      mainEntity: FAQ_ITEMS,
    },
  ],
};

const INCLUYE = [
  { icon: Newspaper, titulo: "Noticias de la semana", desc: "Lo importante del motor y la DGT, sin ruido: lo que de verdad te afecta." },
  { icon: Swords, titulo: "El duelo de la semana", desc: "Dos coches cara a cara con datos: precio, autonomía, consumo y veredicto." },
  { icon: Car, titulo: "Modelos nuevos", desc: "Los lanzamientos que llegan a España y las marcas chinas que nadie conoce aún." },
  { icon: ShieldCheck, titulo: "Normativa que te toca", desc: "Cambios de la DGT, ZBE, etiquetas y multas: explicado en cristiano." },
];

export default function Newsletter() {
  useSeo({
    title: "Newsletter motor: la semana en 5 minutos",
    description:
      "Suscríbete gratis a La semana del motor en 5 minutos: noticias, duelos, modelos nuevos y normativa de tráfico, cada domingo en tu email. Sin spam.",
    canonical: "/newsletter",
    keywords: ["newsletter motor", "noticias coches semanal", "newsletter coches eléctricos", "la semana del motor"],
    schema: SCHEMA,
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <SharedNavbar />
      <nav aria-label="Migas de pan" className="max-w-4xl mx-auto px-4 pt-6 text-sm text-slate-500">
        <Link to="/" className="hover:text-slate-800">Inicio</Link> {" > "}
        <span className="text-slate-800 font-medium">Newsletter</span>
      </nav>

      <main className="max-w-4xl mx-auto px-4 pb-12 pt-6">
        {/* Hero */}
        <header className="text-center space-y-3">
          <div
            className="rtm-hero-in mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 shadow-lg shadow-red-200"
            style={{ "--hero-delay": "60ms" } as CSSProperties}
          >
            <DrawIcon>
              <Mail className="h-7 w-7 text-white" />
            </DrawIcon>
          </div>
          <div className="rtm-hero-in space-y-3" style={{ "--hero-delay": "180ms" } as CSSProperties}>
            <p className="text-xs font-bold uppercase tracking-widest text-red-600">Newsletter semanal · Gratis</p>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
              La semana del motor<br />en 5 minutos
            </h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
              Cada domingo a las 18:00, un email con lo esencial del motor y de la carretera:
              noticias, duelos, modelos nuevos y normativa. Lo lees en 5 minutos y vas al día.
            </p>
            <p className="flex items-center justify-center gap-2 text-xs font-semibold text-gray-500">
              <Clock className="h-4 w-4" /> 5 min de lectura
              <span aria-hidden="true">·</span>
              <Gift className="h-4 w-4" /> 100 % gratis
              <span aria-hidden="true">·</span>
              <BellOff className="h-4 w-4" /> Sin spam
            </p>
          </div>
        </header>

              <figure className="my-8">
        <img src="/media/newsletter-buzon.webp" alt="Bandeja de entrada con la newsletter La semana del motor en un portátil" className="w-full rounded-3xl border border-slate-200" loading="lazy" />
      </figure>

{/* Qué incluye */}
        <section aria-label="Qué incluye la newsletter" className="mt-10 grid gap-3 sm:grid-cols-2">
          {INCLUYE.map(({ icon: Icon, titulo, desc }) => (
            <div key={titulo} className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50">
                <Icon className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm font-black text-gray-900">{titulo}</p>
                <p className="mt-0.5 text-xs text-gray-600 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Formulario */}
        <section
          aria-label="Suscribirse a la newsletter"
          className="rtm-hero-in mt-8 max-w-xl mx-auto"
          style={{ "--hero-delay": "300ms" } as CSSProperties}
        >
          <NewsletterSignup origen="newsletter-pagina" />
          <p className="mt-3 text-center text-xs text-gray-500 leading-relaxed">
            Al suscribirte aceptas la{" "}
            <Link to="/privacidad/" className="text-red-600 font-semibold hover:underline">
              política de privacidad
            </Link>
            . Tus datos solo se usan para enviarte la newsletter (RGPD): no los vendemos
            ni los cedemos a terceros, y puedes darte de baja en 1 clic desde cualquier email.
          </p>
        </section>

              <figure className="my-8">
        <img src="/media/newsletter-semana-motor.webp" alt="Resumen semanal de noticias del motor: volante, llaves y prensa sobre una mesa" className="w-full rounded-3xl border border-slate-200" loading="lazy" />
      </figure>

{/* FAQ */}
        <section aria-label="Preguntas frecuentes" className="mt-10 max-w-2xl mx-auto space-y-3">
          <h2 className="text-xl font-black text-gray-900 text-center">Preguntas frecuentes</h2>
          {FAQ_ITEMS.map((f) => (
            <div key={f.name} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-bold text-gray-900">{f.name}</p>
              <p className="mt-1 text-xs text-gray-600 leading-relaxed">{f.acceptedAnswer.text}</p>
            </div>
          ))}
        </section>
      </main>

      <SharedFooter />
    </div>
  );
}
