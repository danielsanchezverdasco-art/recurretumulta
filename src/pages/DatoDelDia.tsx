// "El dato del día" — tarjeta diaria con una cifra del mundo del motor/multas,
// siempre con fuente oficial. Diseño HTML/CSS (sin imágenes IA con texto).
import { useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, Check, Copy, ExternalLink, ArrowRight } from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import { PageHero } from "@/components/motion.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import { DATOS_REALES, datoDeHoy, fechaLargaES, hoyES } from "@/lib/dato-del-dia.ts";

const DOMAIN = "https://recurretumulta.online";

const FAQ_ITEMS = [
  {
    "@type": "Question",
    name: "¿Qué es el dato del día?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Una cifra del mundo del motor o de las multas publicada cada día y explicada en dos frases: precios de coches, autonomía eléctrica, sanciones de tráfico o cambios normativos.",
    },
  },
  {
    "@type": "Question",
    name: "¿De dónde salen los datos?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Siempre de fuentes oficiales o con autoridad: DGT, BOE, Guardia Civil, ministerios, fabricantes o estadísticas públicas. Cada dato muestra su fuente con enlace.",
    },
  },
  {
    "@type": "Question",
    name: "¿Cada cuánto se actualiza?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Cada día se publica un dato nuevo. Los anteriores quedan guardados en el archivo de esta misma página.",
    },
  },
  {
    "@type": "Question",
    name: "¿Cómo se verifica cada dato?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Cada cifra se comprueba contra la fuente original antes de publicarse. Si un dato no se puede verificar, no se publica.",
    },
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${DOMAIN}/el-dato-del-dia`,
      name: "El dato del día: la cifra del motor que importa hoy",
      url: `${DOMAIN}/el-dato-del-dia`,
      description:
        "Cada día, una cifra del mundo del motor y de las multas explicada en dos frases, siempre con fuente oficial.",
      inLanguage: "es-ES",
    },
    {
      "@type": "FAQPage",
      "@id": `${DOMAIN}/el-dato-del-dia#faq`,
      mainEntity: FAQ_ITEMS,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: DOMAIN + "/" },
        { "@type": "ListItem", position: 2, name: "Herramientas", item: DOMAIN + "/herramientas" },
        { "@type": "ListItem", position: 3, name: "El dato del día", item: DOMAIN + "/el-dato-del-dia" },
      ],
    },
  ],
};

function ShareButtons({ titulo }: { titulo: string }) {
  const [copiado, setCopiado] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : DOMAIN + "/el-dato-del-dia";
  const texto = encodeURIComponent(`${titulo} — El dato del día en RecurreTuMulta.online`);

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = url;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Compartir</span>
      <a
        href={`https://wa.me/?text=${texto}%20${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-sm font-bold text-white transition hover:brightness-95"
      >
        WhatsApp
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${texto}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-slate-700"
      >
        X
      </a>
      <button
        onClick={copiar}
        className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-slate-400"
      >
        {copiado ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
        {copiado ? "¡Copiado!" : "Copiar enlace"}
      </button>
    </div>
  );
}

export default function DatoDelDiaPage() {
  useSeo({
    title: "El dato del día del motor",
    description:
      "Cada día, una cifra del mundo del motor y las multas explicada en dos frases: precios, autonomía, sanciones y normativa. Siempre con fuente oficial.",
    canonical: "/el-dato-del-dia",
    keywords: ["dato del día motor", "cifras coches eléctricos", "estadísticas motor España", "datos DGT"],
    schema: SCHEMA,
  });

  const dato = datoDeHoy();
  const archivo = DATOS_REALES.filter((d) => d !== dato).slice(0, 30);

  return (
    <div className="min-h-screen bg-slate-50">
      <SharedNavbar />
      <nav aria-label="Migas de pan" className="max-w-4xl mx-auto px-4 pt-6 text-sm text-slate-500">
        <Link to="/" className="hover:text-slate-800">Inicio</Link> {" > "}
        <Link to="/herramientas/" className="hover:text-slate-800">Herramientas</Link> {" > "}
        <span className="text-slate-800 font-medium">El dato del día</span>
      </nav>

      <main className="max-w-4xl mx-auto px-4 pt-6 pb-16">
        {/* Hero */}
        <div className="mb-8">
          <PageHero
            image="/media/el-dato-del-dia.webp"
            imageAlt="Primer plano del cuadro de instrumentos digital de un coche con el velocímetro destacado"
            badge="📊 Micro-contenido diario"
            title="El dato del día"
            subtitle="Cada día, una cifra del motor o de las multas explicada en dos frases. Sin relleno, siempre con fuente oficial."
          />
        </div>

        {dato ? (
          <article className="overflow-hidden rounded-3xl border border-red-100 bg-white shadow-sm">
            <div className="bg-gradient-to-br from-red-600 to-rose-700 px-6 py-8 sm:px-10 sm:py-10 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-3">
                {fechaLargaES(dato.fecha)}
              </p>
              <p className="text-5xl sm:text-7xl font-black tracking-tight leading-none mb-4">
                {dato.cifra}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold leading-snug">{dato.titular}</h2>
            </div>
            <div className="px-6 py-6 sm:px-10">
              <p className="text-slate-700 leading-relaxed mb-4">{dato.contexto}</p>
              {dato.enlaceInterno && (
                <p className="mb-4">
                  <Link
                    to={dato.enlaceInterno.url}
                    className="inline-flex items-center gap-1 font-semibold text-red-600 hover:underline"
                  >
                    {dato.enlaceInterno.texto}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </p>
              )}
              <p className="text-sm text-slate-500 mb-5">
                Fuente:{" "}
                <a
                  href={dato.fuenteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-slate-700 underline decoration-red-300 underline-offset-2 hover:text-red-600"
                >
                  {dato.fuenteNombre}
                  <ExternalLink className="ml-1 inline h-3.5 w-3.5" />
                </a>
              </p>
              <ShareButtons titulo={dato.titular} />
            </div>
          </article>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            <CalendarDays className="mx-auto h-10 w-10 text-slate-300 mb-3" />
            <h2 className="text-xl font-bold text-slate-800 mb-2">El primer dato llega muy pronto</h2>
            <p className="text-slate-600 max-w-md mx-auto">
              Publicamos un dato nuevo cada día con su fuente oficial. Hoy ({fechaLargaES(hoyES())}) aún
              no hay ninguno: vuelve mañana.
            </p>
          </div>
        )}

        {/* Enlace cruzado */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
          <div>
            <p className="font-bold text-slate-900">¿Prefieres una duda resuelta en vez de una cifra?</p>
            <p className="text-sm text-slate-600">Cada día respondemos la pregunta que más busca la gente.</p>
          </div>
          <Link
            to="/la-pregunta-del-dia/"
            className="shrink-0 inline-flex items-center justify-center gap-1 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
          >
            La pregunta del día <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Archivo */}
        {archivo.length > 0 && (
          <section className="mt-10" aria-label="Archivo de datos anteriores">
                  <figure className="my-8">
        <img src="/media/balance-siniestralidad-septiembre-2026-dgt.webp" alt="Balance de siniestralidad de la DGT: datos oficiales de accidentes de tráfico en España" className="w-full rounded-3xl border border-slate-200" loading="lazy" />
      </figure>

<h2 className="text-xl font-extrabold text-slate-900 mb-4">Datos anteriores</h2>
            <ul className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white overflow-hidden">
              {archivo.map((d) => (
                <li key={d.fecha}>
                  <div className="flex items-center gap-4 px-5 py-4">
                    <span className="shrink-0 text-lg font-black text-red-600">{d.cifra}</span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-slate-800">{d.titular}</p>
                      <p className="text-xs text-slate-500">{fechaLargaES(d.fecha)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}
        {/* FAQ */}
        <section className="mt-10" aria-label="Preguntas frecuentes">
          <h2 className="text-xl font-extrabold text-slate-900 mb-4">Preguntas frecuentes</h2>
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
            <div>
              <h3 className="font-bold text-slate-900 mb-1">¿Qué es el dato del día?</h3>
              <p className="text-sm text-slate-600">Una cifra del mundo del motor o de las multas publicada cada día y explicada en dos frases: precios de coches, autonomía eléctrica, sanciones de tráfico o cambios normativos.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">¿De dónde salen los datos?</h3>
              <p className="text-sm text-slate-600">Siempre de fuentes oficiales o con autoridad: DGT, BOE, Guardia Civil, ministerios, fabricantes o estadísticas públicas. Cada dato muestra su fuente con enlace.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">¿Cada cuánto se actualiza?</h3>
              <p className="text-sm text-slate-600">Cada día se publica un dato nuevo. Los anteriores quedan guardados en el archivo de esta misma página.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">¿Cómo se verifica cada dato?</h3>
              <p className="text-sm text-slate-600">Cada cifra se comprueba contra la fuente original antes de publicarse. Si un dato no se puede verificar, no se publica.</p>
            </div>
          </div>
        </section>
      </main>
      <SharedFooter />
    </div>
  );
}
