import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Scale, CheckCircle2, XCircle, AlertTriangle, FileSearch, Sparkles } from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import { DriveInImage } from "@/components/motion.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";

const FAQS = [
  {
    q: "¿El análisis con IA sustituye a un abogado?",
    a: "No. El análisis con IA es una primera criba rápida y barata: detecta si tu multa tiene defectos de forma o argumentos para recurrir. Si el caso es complejo (vía penal, contencioso-administrativo, accidente con daños), un abogado es la opción correcta. Piensa en la IA como el filtro que te evita pagar un recurso imposible o un abogado innecesario.",
  },
  {
    q: "¿Cuándo merece la pena pagar un abogado para una multa?",
    a: "Cuando hay mucho en juego: retirada del carné, multas muy graves (alcohol, drogas, exceso grave de velocidad), o cuando vas a la vía judicial (contencioso-administrativo). Para una multa de 200 € con un posible defecto de forma, el coste del abogado suele superar el beneficio: cada profesional fija sus honorarios, así que pide siempre un presupuesto cerrado antes de decidir.",
  },
  {
    q: "¿Qué hace un gestor con una multa?",
    a: "El gestor tramita el papeleo: presenta alegaciones o recursos que tú le lleves preparados, o redacta escritos estándar. No suele analizar a fondo la viabilidad jurídica del caso. Es útil si quieres delegar el trámite pero ya sabes qué quieres alegar.",
  },
  {
    q: "¿Puedo analizar gratis y luego decidir?",
    a: "Sí, y es lo que recomendamos: analiza tu multa gratis con la IA, mira los motivos que detecta, y con esa información decides si generas el recurso (4,99 €), si vas a un abogado, o si te compensa pagar con descuento. La información primero, el dinero después.",
  },
  {
    q: "¿Cuánto cobra un abogado o un gestor por recurrir una multa?",
    a: "Depende del profesional y de la complejidad del caso: no hay tarifa oficial ni cifras universales. Cada despacho y cada gestoría fija sus propios honorarios, así que pide siempre un presupuesto cerrado antes de encargar nada. Aquí el análisis con IA es gratis y generar el recurso cuesta 4,99 €.",
  },
];

const COMPARATIVA = [
  {
    aspecto: "Coste",
    ia: "Análisis gratis · Recurso 4,99 €",
    abogado: "Presupuesto variable según el profesional y la complejidad del caso",
    gestor: "Presupuesto variable según el profesional y la complejidad del caso",
  },
  {
    aspecto: "Tiempo hasta tener el recurso",
    ia: "Minutos",
    abogado: "Días (cita + estudio)",
    gestor: "1–3 días",
  },
  {
    aspecto: "Analiza si es viable antes de pagar",
    ia: "Sí, gratis y al instante",
    abogado: "Sí, pero pagando la consulta",
    gestor: "Normalmente no lo analiza",
  },
  {
    aspecto: "Multas leves y graves (hasta 500 €)",
    ia: "Ideal: rápido y barato",
    abogado: "Sobredimensionado salvo casos límite",
    gestor: "Válido si delegas el trámite",
  },
  {
    aspecto: "Vía penal o contencioso-administrativo",
    ia: "No sirve: necesitas abogado",
    abogado: "La única opción válida",
    gestor: "No puede actuar en juicio",
  },
  {
    aspecto: "Disponibilidad",
    ia: "24/7, desde el móvil",
    abogado: "Horario de despacho",
    gestor: "Horario de oficina",
  },
];

const POR_CASO = [
  {
    caso: "Multa de 200 € con posible defecto de forma",
    recomendacion: "Analiza gratis con IA. Si detecta motivos para recurrir, genera el recurso por 4,99 €.",
  },
  {
    caso: "No sabes si la multa es recurrible",
    recomendacion: "Analiza gratis antes de pagar nada. La información primero.",
  },
  {
    caso: "Multa muy grave, alcohol o drogas",
    recomendacion: "Analiza para orientarte, pero valora un abogado: hay puntos y antecedentes en juego.",
  },
  {
    caso: "Te quitan el carné o vas a juicio",
    recomendacion: "Abogado, sin duda. La IA no sustituye la defensa letrada.",
  },
  {
    caso: "Quieres recurrir pero no quieres papeleos",
    recomendacion: "Genera el recurso con IA y que un gestor lo presente, o preséntalo tú online en minutos.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "Analizar tu multa con IA vs abogado vs gestor: comparativa honesta",
      "url": "https://recurretumulta.online/comparativa",
      "description": "Comparativa honesta: cuándo compensa analizar tu multa con IA (4,99 €), cuándo necesitas un abogado y cuándo un gestor. Costes, tiempos y casos reales.",
      "inLanguage": "es-ES",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", position: 1, "name": "Inicio", "item": "https://recurretumulta.online/" },
        { "@type": "ListItem", position: 2, "name": "Comparativa: IA vs abogado vs gestor", "item": "https://recurretumulta.online/comparativa" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
  ],
};

export default function ComparativaPage() {
  useSeo({
    title: "¿Abogado o IA para recurrir tu multa? Comparativa 2026",
    description:
      "¿Analizar tu multa con IA, ir a un abogado o a un gestor? Comparativa honesta con costes orientativos, tiempos y para qué caso sirve cada opción.",
    canonical: "/comparativa",
    keywords: [
      "recurrir multa abogado o gestor",
      "cuanto cuesta recurrir multa abogado",
      "analizar multa IA vs abogado",
    ],
    schema: jsonLd,
  });

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <SharedNavbar />

      {/* Hero animado estilo C3: DriveInImage + gradientes oscuros + toque rojo */}
      <div className="relative overflow-hidden">
        <DriveInImage src="/media/comparativa-abogado-ia.webp" alt="Comparativa entre analizar una multa con inteligencia artificial y acudir a un abogado o gestor: portátil junto a documentos legales sobre una mesa de despacho" eager={true} className="absolute inset-0" imgClassName="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
        <CosaEnBanner />
        <div className="relative max-w-3xl mx-auto px-4 pt-24 pb-12 space-y-4">
          <motion.nav initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-white/60">
            <Link to="/" className="hover:text-white">Inicio</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/40">Comparativa</span>
          </motion.nav>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}>
            <span className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1.5 text-xs text-red-300 font-bold uppercase tracking-widest">
              <Scale className="w-3.5 h-3.5 text-red-400" /> Comparativa honesta
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
            ¿Abogado o IA para recurrir tu multa? <span className="text-red-400">la comparativa honesta</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }} className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl">
            Sin letra pequeña: te decimos cuándo compensa cada opción, también cuando la respuesta no somos nosotros.
          </motion.p>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 pt-10 pb-12 space-y-10">

        {/* Intro */}
        <section className="space-y-3">
          <p className="text-sm text-gray-700 leading-relaxed">
            Te han multado y no sabes qué hacer. Las opciones son tres: <strong>analizarla con IA</strong> y
            generar el recurso tú mismo, <strong>contratar un abogado</strong> o <strong>encargarle el trámite
            a un gestor</strong>. Ninguna es siempre la mejor: depende de tu caso, de lo que esté en juego y
            de cuánto quieras gastar.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Esta comparativa es deliberadamente honesta. Hay casos en los que te diremos que necesitas un
            abogado y que nuestra herramienta no te sirve. Preferimos perder una venta que venderte un recurso
            inútil.
          </p>
        </section>

        {/* H2: tabla comparativa */}
        <section className="space-y-4">
          <h2 className="text-xl font-black text-gray-900">La comparativa, aspecto por aspecto</h2>
          <p className="text-xs text-gray-500">
            Los honorarios de abogados y gestores son variables: cada profesional fija los suyos según el caso. Pide siempre presupuesto cerrado antes de encargar nada.
          </p>
          <div className="-mx-4 px-4">
            <table className="w-full text-[11px] sm:text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-2 sm:p-3 font-bold rounded-tl-xl [overflow-wrap:anywhere]">Aspecto</th>
                  <th className="text-left p-2 sm:p-3 font-bold [overflow-wrap:anywhere]">
                    <span className="inline-flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> RecurreTuMulta (IA)</span>
                  </th>
                  <th className="text-left p-2 sm:p-3 font-bold [overflow-wrap:anywhere]">Abogado</th>
                  <th className="text-left p-2 sm:p-3 font-bold rounded-tr-xl">Gestor</th>
                </tr>
              </thead>
              <tbody>
                {COMPARATIVA.map((row, i) => (
                  <tr key={row.aspecto} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-2 sm:p-3 font-bold text-gray-900 border-t border-gray-200 align-top [overflow-wrap:anywhere]">{row.aspecto}</td>
                    <td className="p-2 sm:p-3 text-gray-700 border-t border-gray-200 font-semibold text-red-700 align-top [overflow-wrap:anywhere]">{row.ia}</td>
                    <td className="p-2 sm:p-3 text-gray-700 border-t border-gray-200 align-top [overflow-wrap:anywhere]">{row.abogado}</td>
                    <td className="p-2 sm:p-3 text-gray-700 border-t border-gray-200 align-top [overflow-wrap:anywhere]">{row.gestor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* H2: qué hacer según tu caso */}
        <section className="space-y-4">
                <figure className="my-8">
        <img src="/media/comparativa-abogado-gestor.webp" alt="Balanza de la justicia junto a un portátil y documentos legales: comparativa entre abogado e inteligencia artificial" className="w-full rounded-3xl border border-slate-200" loading="lazy" />
      </figure>

<h2 className="text-xl font-black text-gray-900">Qué hacer según tu caso</h2>
          <div className="space-y-3">
            {POR_CASO.map((item) => (
              <div key={item.caso} className="bg-gray-50 rounded-2xl border border-gray-200 p-4 space-y-1.5">
                <p className="flex items-start gap-2 text-sm font-bold text-gray-900">
                  <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  {item.caso}
                </p>
                <p className="flex items-start gap-2 text-sm text-gray-700 pl-6">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  {item.recomendacion}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* H2: cuándo NO somos la opción */}
        <section className="space-y-3 bg-red-50 border border-red-200 rounded-2xl p-5">
          <h2 className="text-xl font-black text-gray-900 flex items-center gap-2">
            <XCircle className="w-5 h-5 text-red-600" />
            Cuándo NO te servimos (y te lo decimos a la cara)
          </h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
              <span><strong>Vía penal</strong> (alcoholemia delito, conducción temeraria con juicio): necesitas abogado penalista.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
              <span><strong>Recurso contencioso-administrativo</strong> ante el juzgado: requiere procurador y abogado.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
              <span><strong>Accidentes con daños o lesionados</strong>: hay responsabilidades civiles que una IA no puede valorar.</span>
            </li>
          </ul>
          <p className="text-sm text-gray-600">
            En esos casos, el análisis gratuito aún te orienta, pero la defensa debe llevarla un profesional colegiado.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-gray-900 rounded-2xl p-6 text-center space-y-4">
          <h2 className="text-xl font-black text-white">Empieza por lo gratis: analiza tu multa</h2>
          <p className="text-sm text-gray-300">
            Sube tu denuncia y la IA te dice en minutos si es viable recurrirla. Sin compromiso, sin pagar nada.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              <FileSearch className="w-4 h-4" /> Analizar mi multa gratis
            </Link>
            <Link
              to="/buscador-codigo-multa/"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-bold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              Buscar mi infracción por código <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* H2: FAQ */}
        <section className="space-y-4">
          <h2 className="text-xl font-black text-gray-900">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="bg-gray-50 border border-gray-200 rounded-xl p-4 group">
                <summary className="text-sm font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between gap-2">
                  {f.q}
                  <span className="text-red-600 group-open:rotate-45 transition-transform text-lg leading-none">+</span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pt-2">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Fuentes */}
        <section className="space-y-2">
          <h2 className="text-base font-black text-gray-900">Fuentes oficiales</h2>
          <ul className="text-xs text-gray-500 space-y-1">
            <li>
              <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722" target="_blank" rel="noopener noreferrer" className="text-red-600 underline">
                Real Decreto Legislativo 6/2015, Ley sobre Tráfico, Circulación de Vehículos a Motor y Seguridad Vial (BOE)
              </a>
            </li>
            <li>
              <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565" target="_blank" rel="noopener noreferrer" className="text-red-600 underline">
                Ley 39/2015, del Procedimiento Administrativo Común (BOE)
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="border-t border-gray-100 py-6">
        <SharedFooter />
      </footer>
    </div>
  );
}
