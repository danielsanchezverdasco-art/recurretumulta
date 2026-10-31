import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, XCircle, Scale, FileSearch, BrainCircuit, ShieldCheck } from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import { DriveInImage } from "@/components/motion.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";

const TABLA_REVISION: { campo: string; queBusca: string; porQueImporta: string }[] = [
  { campo: "Identificación del agente (TIP)", queBusca: "Si el número de TIP existe y es legible", porQueImporta: "Sin TIP no hay presunción de veracidad: defecto de forma directo" },
  { campo: "Hechos denunciados", queBusca: "Si la descripción es concreta o genérica/copiada", porQueImporta: "Los hechos vagos no sostienen una sanción" },
  { campo: "Precepto infringido", queBusca: "Si el artículo citado existe y encaja con los hechos", porQueImporta: "Un precepto erróneo o inexistente anula la denuncia" },
  { campo: "Fecha, hora y lugar", queBusca: "Coherencia y precisión de los datos", porQueImporta: "Datos imposibles o imprecisos debilitan la prueba" },
  { campo: "Matrícula", queBusca: "Transcripción exacta, letra por letra", porQueImporta: "Un carácter erróneo invalida la identificación del vehículo" },
  { campo: "Calificación e importe", queBusca: "Que la gravedad y los euros cuadren con la norma", porQueImporta: "Una leve no puede costar 200 €; el importe erróneo es recurrible" },
  { campo: "Notificación", queBusca: "Cómo y cuándo te comunicaron la denuncia", porQueImporta: "La notificación defectuosa es el defecto que más multas anula" },
  { campo: "Plazos", queBusca: "Prescripción de la infracción y caducidad del procedimiento", porQueImporta: "Si la Administración llegó tarde, no puede sancionarte" },
];

const TABLA_ABOGADO: { situacion: string; recomendacion: string; motivo: string }[] = [
  { situacion: "Multa de tráfico estándar (velocidad, móvil, cinturón…)", recomendacion: "Analizar con IA", motivo: "Los defectos de forma se detectan en el documento; no necesitas pagar un abogado para eso" },
  { situacion: "Dudas sobre si la multa es recurrible", recomendacion: "Analizar con IA", motivo: "El análisis es gratis y te da una valoración orientativa honesta (con sus motivos) antes de gastar un euro" },
  { situacion: "Quieres el modelo de recurso redactado", recomendacion: "Analizar con IA", motivo: "La IA genera la carta de alegaciones o el recurso adaptado a los defectos encontrados" },
  { situacion: "Delito contra la seguridad vial (alcohol muy alto, conducción temeraria…)", recomendacion: "Ir a un abogado", motivo: "Hay consecuencias penales: necesitas defensa jurídica profesional, no un análisis documental" },
  { situacion: "Ya agotaste la vía administrativa y vas al juzgado", recomendacion: "Ir a un abogado", motivo: "El contencioso-administrativo exige procurador y letrado; la IA no litiga" },
  { situacion: "La empresa te sanciona como conductor y hay despido de por medio", recomendacion: "Ir a un abogado", motivo: "Hay derechos laborales en juego además de la multa: un abogado laboralista es lo correcto" },
];

const FAQS = [
  {
    q: "¿El análisis de la IA sustituye a un abogado?",
    a: "No. Nuestra IA revisa tu denuncia buscando defectos de forma y vicios de procedimiento, que es donde se gana la mayoría de los recursos de multas de tráfico. Pero no es un abogado, no te representa y no puede actuar en un juzgado. Para delitos contra la seguridad vial o para la vía contencioso-administrativa, necesitas un letrado.",
  },
  {
    q: "¿Cómo sabe la IA si mi multa es recurrible?",
    a: "Lee tu documento con un modelo de visión artificial, extrae los campos clave (agente, hechos, precepto, fechas, matrícula, importe) y los cruza con la normativa vigente: Reglamento General de Circulación, Ley de Tráfico y los plazos de prescripción y caducidad. Después valora si hay motivos para recurrir (alta, media, baja o «no valorable» si faltan datos), te explica por qué y te muestra los defectos concretos que ha encontrado. No usa porcentajes.",
  },
  {
    q: "¿La valoración es una garantía?",
    a: "No, y quien te garantice un resultado miente. La valoración es cualitativa y se apoya solo en los datos leídos del documento y en la normativa; no es una probabilidad de éxito. Si falta algún dato, te lo indicamos en lugar de suponerlo. La decisión final siempre la toma la Administración (y, en su caso, el juez). Lo que sí garantizamos es honestidad: si no vemos motivos, te lo decimos.",
  },
  {
    q: "¿Qué datos utilizáis para entrenar o mejorar la IA?",
    a: "No entrenamos modelos con tus documentos. Utilizamos modelos de lenguaje de propósito general (vía la API de Groq) configurados con temperatura 0, lo que significa que son deterministas: ante el mismo documento, el análisis es siempre el mismo. Tus documentos se procesan para generarte el análisis y no se venden ni se ceden a terceros.",
  },
  {
    q: "¿Por qué analizar antes de recurrir ahorra dinero?",
    a: "Porque la mayoría de la gente hace una de estas dos cosas caras: pagar con descuento una multa que era anulable (pierde el 50 % que podría no haber pagado), o pagar a un profesional por recurrir una multa sin defectos (pierde los honorarios y la multa). El análisis gratuito te dice en qué caso estás antes de gastar nada.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "Metodología: cómo analiza la IA tu multa de tráfico",
      "url": "https://recurretumulta.online/metodologia",
      "description": "Transparencia total: cómo funciona nuestro análisis con IA de multas de tráfico, qué revisa, qué no hace y cuáles son sus límites honestos.",
      "inLanguage": "es-ES",
      "isPartOf": { "@type": "WebSite", "url": "https://recurretumulta.online/" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://recurretumulta.online/" },
        { "@type": "ListItem", "position": 2, "name": "Metodología", "item": "https://recurretumulta.online/metodologia" },
      ],
    },
  ],
};

export default function MetodologiaPage() {
  useSeo({
    title: "¿Tu multa se puede recurrir? Nuestra IA",
    description: "Te explicamos sin letra pequeña cómo funciona nuestro análisis con IA: qué revisa en tu denuncia, qué modelos usa, qué no hace y cuáles son sus límites.",
    canonical: "/metodologia",
    schema: jsonLd,
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <SharedNavbar />
      <div className="pt-[57px]">
        {/* Hero animado estilo C3: DriveInImage + gradientes oscuros + toque rojo */}
        <div className="relative overflow-hidden">
          <DriveInImage src="/media/metodologia-ia.webp" alt="Red neuronal de inteligencia artificial analizando una denuncia de tráfico en un portátil" eager={true} className="absolute inset-0" imgClassName="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
          {/* Banner corto: Cosa reducido para no tapar el titular */}
          <CosaEnBanner imgClassName="h-28 w-auto" />
          <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 space-y-4">
            <motion.nav initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-white/60">
              <Link to="/" className="hover:text-white">Inicio</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/40">Metodología</span>
            </motion.nav>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}>
              <span className="inline-flex items-center gap-2 bg-red-600 border-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-red-950/50">
                <BrainCircuit className="w-3.5 h-3.5" /> Cómo funciona
              </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
              ¿Tu multa se puede recurrir? <span className="text-red-400">así la analiza nuestra IA</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }} className="text-white/80 text-sm md:text-base leading-relaxed">
              Esta página existe por un motivo: la confianza. Antes de subir tu denuncia a cualquier sitio,
              tienes derecho a saber exactamente qué va a pasar con ella, qué tecnología la analiza y, sobre todo,
              qué <strong className="text-white">no</strong> podemos hacer por ti. Sin letra pequeña.
            </motion.p>
          </div>
        </div>
        <main className="max-w-4xl mx-auto px-4 pt-8 pb-16">
          <h2 className="text-2xl font-bold mb-4">Cómo funciona, paso a paso</h2>
        <div className="space-y-4 mb-12">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 flex gap-4">
            <FileSearch className="h-8 w-8 text-red-600 shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1">1. Lectura del documento</h3>
              <p className="text-slate-600">Subes la foto o el PDF de tu denuncia. Un modelo de visión artificial lee el documento y extrae los campos clave: agente denunciante, TIP, hechos, precepto infringido, fecha, hora, lugar, matrícula, calificación e importe.</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 flex gap-4">
            <BrainCircuit className="h-8 w-8 text-red-600 shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1">2. Análisis jurídico-documental</h3>
              <p className="text-slate-600">Un segundo modelo cruza esos datos con la normativa vigente —Reglamento General de Circulación, Ley de Tráfico, plazos de prescripción y caducidad— buscando defectos de forma, vicios de procedimiento e incoherencias. Funciona con temperatura 0: es determinista, ante el mismo documento el análisis es siempre el mismo.</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 flex gap-4">
            <ShieldCheck className="h-8 w-8 text-red-600 shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1">3. Veredicto honesto y carta de recurso</h3>
              <p className="text-slate-600">Recibes una valoración orientativa (alta, media, baja o no valorable) con sus motivos, los defectos concretos encontrados (hasta los 4 más relevantes) y, si decides recurrir, la carta de alegaciones o el recurso redactado a partir de esos defectos.</p>
            </div>
          </div>
        </div>

              <figure className="my-8">
        <img src="/media/analizar-multa-ia-guia-legal.webp" alt="Lupa sobre un expediente de multa de tráfico junto a un portátil: revisión legal con inteligencia artificial" className="w-full rounded-3xl border border-slate-200" loading="lazy" />
      </figure>

<h2 className="text-2xl font-bold mt-10 mb-4">Lo que la IA revisa en tu multa</h2>
        <p className="text-slate-600 mb-4">Cada análisis comprueba sistemáticamente estos puntos del documento:</p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 mb-12">
          <table className="w-full text-sm bg-white">
            <thead>
              <tr className="bg-slate-900 text-white text-left">
                <th className="p-3 font-bold">Campo de la denuncia</th>
                <th className="p-3 font-bold">Qué busca la IA</th>
                <th className="p-3 font-bold">Por qué importa</th>
              </tr>
            </thead>
            <tbody>
              {TABLA_REVISION.map((r, i) => (
                <tr key={r.campo} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="p-3 font-semibold text-slate-800">{r.campo}</td>
                  <td className="p-3 text-slate-600">{r.queBusca}</td>
                  <td className="p-3 text-slate-600">{r.porQueImporta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Lo que NO hacemos (límites honestos)</h2>
        <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 mb-12">
          <ul className="space-y-3 text-slate-600">
            <li className="flex gap-3"><XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" /><span><strong>No somos abogados.</strong> No te representamos, no actuamos en juzgados y nuestro análisis no es asesoramiento jurídico.</span></li>
            <li className="flex gap-3"><XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" /><span><strong>No garantizamos resultados.</strong> La valoración es orientativa, no una promesa. Quien te garantice ganar un recurso, miente.</span></li>
            <li className="flex gap-3"><XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" /><span><strong>No vemos lo que no está en el papel.</strong> Analizamos el documento que subes. Si hubo testigos, vídeos o circunstancias que no constan en la denuncia, no podemos valorarlas.</span></li>
            <li className="flex gap-3"><XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" /><span><strong>No decidimos por ti.</strong> Te damos los datos y los defectos encontrados; la decisión de recurrir o pagar es tuya.</span></li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Cuándo analizar con IA y cuándo ir a un abogado</h2>
        <p className="text-slate-600 mb-4">Ser honestos en esto es lo que nos diferencia de quien solo quiere venderte el recurso:</p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 mb-12">
          <table className="w-full text-sm bg-white">
            <thead>
              <tr className="bg-slate-900 text-white text-left">
                <th className="p-3 font-bold">Tu situación</th>
                <th className="p-3 font-bold">Recomendación</th>
                <th className="p-3 font-bold">Motivo</th>
              </tr>
            </thead>
            <tbody>
              {TABLA_ABOGADO.map((r, i) => (
                <tr key={r.situacion} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="p-3 font-semibold text-slate-800">{r.situacion}</td>
                  <td className="p-3">
                    <span className={`inline-flex items-center gap-1 font-semibold ${r.recomendacion === "Analizar con IA" ? "text-green-700" : "text-amber-700"}`}>
                      {r.recomendacion === "Analizar con IA" ? <CheckCircle2 className="h-4 w-4" /> : <Scale className="h-4 w-4" />}
                      {r.recomendacion}
                    </span>
                  </td>
                  <td className="p-3 text-slate-600">{r.motivo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Por qué analizar antes de recurrir te ahorra dinero</h2>
        <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 mb-12">
          <ul className="space-y-3 text-slate-600">
            <li><strong className="text-slate-800">Caso 1: pagas una multa anulable.</strong> Te llega una multa de 200 €, pagas 100 € con el descuento y descubres meses después que tenía un defecto de forma. Has regalado 100 €.</li>
            <li><strong className="text-slate-800">Caso 2: recurres una multa sin defectos.</strong> Pagas a un profesional por recurrir y la Administración desestima el recurso porque la denuncia estaba perfecta. Has perdido los honorarios y la multa.</li>
            <li><strong className="text-slate-800">Caso 3: analizas primero (gratis).</strong> En segundos sabes si hay defectos y qué motivos hay para recurrir. Solo entonces decides: recurrir con la carta generada o pagar con descuento. Sin apuestas a ciegas.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Fuentes oficiales que utilizamos</h2>
        <p className="text-slate-600 mb-4">Nuestro análisis se basa en normativa publicada en el BOE y en la información oficial de la DGT. Nada de interpretaciones inventadas:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-12">
          <li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2003-23514" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-medium">Reglamento General de Circulación (RD 1428/2003)</a> y su reforma por <a href="https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-13889" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-medium">RD 518/2026</a>, en vigor desde el 1 de octubre de 2026.</li>
          <li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-medium">Ley sobre Tráfico, Circulación de Vehículos a Motor y Seguridad Vial (RDL 6/2015)</a>.</li>
          <li><a href="https://sede.dgt.gob.es/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-medium">Sede electrónica de la DGT</a>: notificaciones, DEV y consulta de sanciones.</li>
          <li><Link to="/glosario-multa/" className="text-red-600 hover:underline font-medium">Glosario de tu multa</Link> y <Link to="/buscador-codigo-multa/" className="text-red-600 hover:underline font-medium">buscador de infracciones</Link>: nuestras herramientas para entender tu denuncia.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-6">Preguntas frecuentes</h2>
        <div className="space-y-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-10">
          {FAQS.map((f) => (
            <div key={f.q}>
              <h3 className="font-bold mb-1">{f.q}</h3>
              <p className="text-slate-600">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 text-white rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Pruébalo tú mismo, gratis</h2>
          <p className="text-slate-300 mb-6">Sube tu denuncia y comprueba en segundos si es recurrible. Sin registro, sin tarjeta.</p>
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
