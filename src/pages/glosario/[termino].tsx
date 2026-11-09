import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { BookOpen, ArrowRight, ArrowLeft, Car, Lightbulb } from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import { DriveInImage } from "@/components/motion.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import { TERMINOS } from "@/lib/glosario-motor-data.ts";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";

export default function GlosarioMotorDetallePage() {
  const { termino } = useParams<{ termino: string }>();
  const t = TERMINOS.find((x) => x.slug === termino);

  if (!t) {
    return (
      <div className="min-h-screen bg-slate-50">
        <SharedNavbar />
        <main className="max-w-4xl mx-auto px-4 pt-16 pb-16 text-center">
          <h1 className="text-3xl font-extrabold mb-4">Ese término no existe</h1>
          <p className="text-slate-600 mb-8">No tenemos ese término en el glosario. Estos son los 10 que explicamos:</p>
          <Link to="/glosario/" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-xl transition">
            <ArrowLeft className="h-5 w-5" /> Volver al glosario
          </Link>
        </main>
        <SharedFooter />
      </div>
    );
  }

  const relacionados = TERMINOS.filter((x) => t.relacionados.includes(x.slug));
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": `https://recurretumulta.online/glosario/${t.slug}#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": `¿Qué es ${t.nombre}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": t.definicion.join(" "),
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://recurretumulta.online/" },
          { "@type": "ListItem", "position": 2, "name": "Glosario del coche eléctrico", "item": "https://recurretumulta.online/glosario" },
          { "@type": "ListItem", "position": 3, "name": t.nombre, "item": `https://recurretumulta.online/glosario/${t.slug}` },
        ],
      },
    ],
  };

  return <TerminoPage key={t.slug} t={t} schema={schema} relacionados={relacionados} />;
}

function TerminoPage({
  t,
  schema,
  relacionados,
}: {
  t: (typeof TERMINOS)[number];
  schema: Record<string, unknown>;
  relacionados: (typeof TERMINOS)[number][];
}) {
  // Description recortada a ~150 car.: la definición completa ya está en el H1/contenido.
  const defCorta =
    t.definicion[0].length > 105
      ? t.definicion[0].slice(0, 105).replace(/\s+\S*$/, "") + "…"
      : t.definicion[0];
  useSeo({
    title: `¿Qué es ${t.nombre}?`,
    description: `${t.nombre}: ${defCorta}`,
    canonical: `/glosario/${t.slug}/`,
    schema,
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <SharedNavbar />
      <div className="pt-[57px]">
        {/* Hero animado estilo C3: DriveInImage + gradientes oscuros + toque rojo */}
        <div className="relative overflow-hidden">
          <DriveInImage src="/media/hero-glosario-termino.webp" alt="Conector de carga enchufado en un coche eléctrico en una calle española" eager={true} className="absolute inset-0" imgClassName="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
          <CosaEnBanner />
          <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 space-y-4">
            <motion.nav initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-white/60">
              <Link to="/" className="hover:text-white">Inicio</Link>
              <span aria-hidden="true">/</span>
              <Link to="/glosario/" className="hover:text-white">Glosario del coche eléctrico</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/40">{t.nombre}</span>
            </motion.nav>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}>
              <span className="inline-flex items-center gap-2 bg-red-600 border-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-red-950/50">
                <BookOpen className="w-3.5 h-3.5" /> Definición
              </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
              ¿Qué es <span className="text-red-400">{t.nombre}</span>?
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.24 }} className="text-xs text-white/60 pt-1">
              Por <strong className="text-white/80">Daniel</strong>, fundador y responsable de contenidos · Revisado en octubre de 2026
            </motion.p>
          </div>
        </div>
        <main className="max-w-4xl mx-auto px-4 pt-8 pb-16">
          <article className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 mb-8">
          <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
            <BookOpen className="h-5 w-5 text-red-600 shrink-0" />
            Definición
          </h2>
          <div className="space-y-3 text-slate-600">
            {t.definicion.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>

        <article className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 mb-8">
          <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
            <Car className="h-5 w-5 text-red-600 shrink-0" />
            Ejemplo con coches reales
          </h2>
          <p className="text-slate-600 mb-4">
            {t.ejemplo.texto}{" "}
            <Link to={`/coches/${t.ejemplo.cocheId}/`} className="text-red-600 font-semibold hover:underline">
              Ver ficha del {t.ejemplo.cocheNombre}
            </Link>
          </p>
          {t.ejemplo2 && (
            <p className="text-slate-600">
              {t.ejemplo2.texto}{" "}
              <Link to={`/coches/${t.ejemplo2.cocheId}/`} className="text-red-600 font-semibold hover:underline">
                Ver ficha del {t.ejemplo2.cocheNombre}
              </Link>
            </p>
          )}
        </article>

        <p className="bg-amber-50 border border-amber-200 rounded-2xl p-5 sm:p-6 mb-8 flex gap-3">
          <Lightbulb className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
          <span><strong className="text-slate-800">Por qué te importa: </strong><span className="text-slate-600">{t.porQueImporta}</span></span>
        </p>

        {relacionados.length > 0 && (
          <div className="mb-10">
                  <figure className="my-8">
        <img src="/media/glosario-termino-detalle.webp" alt="Conector de carga de coche eléctrico enchufado, con iconos de definiciones" className="w-full rounded-3xl border border-slate-200" loading="lazy" />
      </figure>

<h2 className="text-xl font-bold mb-4">Términos relacionados</h2>
            <div className="flex flex-wrap gap-2">
              {relacionados.map((r) => (
                <Link
                  key={r.slug}
                  to={`/glosario/${r.slug}/`}
                  className="inline-flex items-center gap-1 bg-white border border-slate-200 hover:border-red-400 rounded-full px-4 py-2 text-sm font-semibold text-slate-700 hover:text-red-700 transition"
                >
                  ¿Qué es {r.nombre}? <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="bg-slate-100 border border-slate-200 rounded-2xl p-5 sm:p-6 mb-10">
          <h2 className="text-base font-bold mb-2 flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-red-600 shrink-0" />
            Fuentes y verificación
          </h2>
          <p className="text-sm text-slate-600 mb-2">
            Este término lo ha redactado y revisado Daniel, fundador y responsable de contenidos de RecurreTuMulta.online,
            contrastando las definiciones con fuentes oficiales y las cifras de ejemplo con las fichas de nuestro comparador.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
            <li><a href="https://www.dgt.es" target="_blank" rel="noopener noreferrer" className="text-red-600 font-semibold hover:underline">DGT</a>: etiquetas ambientales y normativa de vehículos.</li>
            <li><a href="https://www.boe.es" target="_blank" rel="noopener noreferrer" className="text-red-600 font-semibold hover:underline">BOE</a>: reglamentos y normativa aplicable.</li>
            <li><Link to="/comparador-coches/" className="text-red-600 font-semibold hover:underline">Comparador de coches</Link>: fichas técnicas de las que salen los ejemplos de cada término.</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <Link to="/glosario/" className="inline-flex items-center justify-center gap-2 border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 font-bold py-3 px-6 rounded-xl transition">
            <ArrowLeft className="h-5 w-5" /> Todo el glosario
          </Link>
          <Link to="/comparador-coches/" className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-xl transition">
            Comparar los 26 coches <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </main>
      </div>
      <SharedFooter />
    </div>
  );
}
