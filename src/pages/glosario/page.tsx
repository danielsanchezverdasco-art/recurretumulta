import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { BookOpen, ArrowRight, Gauge } from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import { DriveInImage } from "@/components/motion.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import { TERMINOS } from "@/lib/glosario-motor-data.ts";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://recurretumulta.online/glosario#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué significa kWh en un coche eléctrico?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "El kWh (kilovatio-hora) mide la energía que almacena la batería: es el «tamaño del depósito» del eléctrico. No lo confundas con el kW, que mide potencia.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Qué diferencia hay entre WLTP y CLTC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "WLTP es el protocolo europeo de homologación de autonomía; CLTC es el chino, con un ciclo más benévolo. Las cifras CLTC son siempre más altas y no son comparables con las WLTP.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Qué etiqueta DGT lleva un coche eléctrico?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Todos los eléctricos puros llevan la etiqueta CERO de la DGT, y también los híbridos enchufables con suficiente autonomía eléctrica. La etiqueta CERO permite entrar en las ZBE y acceder a las ayudas del Plan Auto+.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://recurretumulta.online/" },
        { "@type": "ListItem", "position": 2, "name": "Glosario del coche eléctrico", "item": "https://recurretumulta.online/glosario" },
      ],
    },
  ],
};

export default function GlosarioMotorIndexPage() {
  useSeo({
    title: "Glosario coche eléctrico 2026",
    description: "¿Qué significa kWh, WLTP, par motor o etiqueta CERO? Diccionario claro de los 10 términos que verás en cualquier ficha de un coche eléctrico, con ejemplos de modelos reales.",
    canonical: "/glosario",
    schema: FAQ_SCHEMA,
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <SharedNavbar />
      <div className="pt-[57px]">
        {/* Hero animado estilo C3: DriveInImage + gradientes oscuros + toque rojo */}
        <div className="relative overflow-hidden">
          <DriveInImage src="/media/hero-glosario-coche-electrico.webp" alt="Coche eléctrico blanco cargando en un punto de recarga urbano de una ciudad española al atardecer" eager={true} className="absolute inset-0" imgClassName="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
          <CosaEnBanner />
          <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 space-y-4">
            <motion.nav initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-white/60">
              <Link to="/" className="hover:text-white">Inicio</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/40">Glosario del coche eléctrico</span>
            </motion.nav>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}>
              <span className="inline-flex items-center gap-2 bg-red-600 border-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-red-950/50">
                <BookOpen className="w-3.5 h-3.5" /> Glosario motor
              </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
              Glosario del coche eléctrico: <span className="text-red-400">qué significa cada término</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }} className="text-white/80 text-sm md:text-base leading-relaxed">
              ¿Qué significa kWh? ¿Y WLTP, par motor o V2L? Las fichas de los coches eléctricos están llenas de siglas que parecen diseñadas para confundir. Aquí tienes los 10 términos que de verdad importan, explicados en lenguaje claro, con ejemplos de modelos reales de nuestro comparador.
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.34 }} className="text-xs text-white/60 pt-1">
              Glosario redactado por <strong className="text-white/80">Daniel</strong>, fundador y responsable de contenidos · Revisado en octubre de 2026
            </motion.p>
          </div>
        </div>
        <main className="max-w-4xl mx-auto px-4 pt-8 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {TERMINOS.map((t) => (
            <Link
              key={t.slug}
              to={`/glosario/${t.slug}/`}
              className="group bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 hover:border-red-400 hover:shadow-md transition"
            >
              <h2 className="text-lg font-bold flex items-center gap-2 mb-2 group-hover:text-red-700">
                <BookOpen className="h-5 w-5 text-red-600 shrink-0" />
                ¿Qué es {t.nombre}?
              </h2>
              <p className="text-sm text-slate-600 line-clamp-3 mb-3">{t.definicion[0]}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-red-600">
                Ver definición <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
              </span>
            </Link>
          ))}
        </div>

              <figure className="my-8">
        <img src="/media/glosario-electrico-listado.webp" alt="Batería, enchufe de carga y tarjetas de vocabulario: glosario del coche eléctrico" className="w-full rounded-3xl border border-slate-200" loading="lazy" />
      </figure>

<h2 className="text-2xl font-bold mt-10 mb-4">Del glosario al garaje: pon los términos a prueba</h2>
        <p className="text-slate-600 mb-6">
          Ya sabes qué significa cada sigla. Ahora aplícalo: en el comparador tienes los 26 modelos analizados con
          batería, autonomía WLTP, carga rápida y etiqueta DGT, ficha por ficha.
        </p>
        <Link
          to="/comparador-coches/"
          className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-xl transition mb-12"
        >
          <Gauge className="h-5 w-5" /> Comparar los 26 coches eléctricos <ArrowRight className="h-5 w-5" />
        </Link>

        <div className="bg-slate-900 text-white rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">¿Y si el coche que te interesa es el que ya tienes?</h2>
          <p className="text-slate-300 mb-6">Antes de cambiar de coche, revisa las multas que tengas pendientes: analiza tu denuncia gratis.</p>
          <Link to="/" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition">
            Analizar mi multa gratis <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </main>
      </div>
      <SharedFooter />
    </div>
  );
}
