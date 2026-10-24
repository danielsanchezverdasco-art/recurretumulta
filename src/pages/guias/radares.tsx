import { useSeo } from "@/hooks/use-seo.ts";
import { DriveInImage } from "@/components/motion.tsx";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge.tsx";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";
import SharedFooter from "@/components/shared-footer.tsx";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://recurretumulta.online/guias/radares#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Cuál es el margen de error de los radares?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Los radares fijos aplican 5 km/h hasta 100 km/h y 5% por encima de 100 km/h; los móviles, 7 km/h o 7%. Si la denuncia no descuenta ese margen, la medición puede ser recurrible.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Tienen que avisar de que hay un radar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Los radares fijos deben estar señalizados con antelación. Los móviles no requieren señalización previa. Si un radar fijo no estaba señalizado, es un motivo de recurso.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Qué es la verificación metrológica de un radar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Es el control periódico que certifica que el cinemómetro mide correctamente. Si no estaba en vigor el día de la denuncia, la medición no es válida.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Puedo recurrir si ya pagué la multa con descuento?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. El pronto pago del 50% implica aceptar la sanción y renunciar al recurso.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://recurretumulta.online/" },
        { "@type": "ListItem", "position": 2, "name": "Guías", "item": "https://recurretumulta.online/guias/radares" },
      ],
    },
  ],
};

export default function GuiaRadaresPage() {
  useSeo({
    title: "Multas de radar 2026: recúrrelas gratis",
    description: "Guía completa sobre multas de radar de la DGT: tipos de radares, márgenes de error, cómo saber si estaba bien señalizado y motivos para recurrir.",
    canonical: "/guias/radares",
    image: "https://recurretumulta.online/media/pilar-radares.webp",
    schema: FAQ_SCHEMA,
  });

  return (
    <div
      className="bg-slate-50 text-slate-900 antialiased min-h-screen"
      style={{ fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,sans-serif' }}
    >
      {/* Hero animado estilo blog */}
      <div className="relative overflow-hidden">
        <DriveInImage src="/media/pilar-radares.webp" alt="Radar de velocidad en un pórtico de una autopista española al atardecer" eager={true} className="absolute inset-0" imgClassName="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
        <CosaEnBanner />
        <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 space-y-4">
          <motion.nav initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-white/60">
            <a href="https://recurretumulta.online/" className="hover:text-white">Inicio</a>
            <span aria-hidden="true">/</span>
            <span className="text-white/40">Guía: multas de radar</span>
          </motion.nav>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}>
            <Badge className="bg-red-600 border-red-500 text-white text-xs font-bold shadow-lg shadow-red-950/50">Guía DGT 2026</Badge>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
            Multas de radar en España: la guía completa (2026)
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }} className="text-white/80 text-sm md:text-base leading-relaxed">
            Todo lo que necesitas saber si te ha pillado un radar de la DGT: qué tipos hay, qué márgenes de error se aplican, cómo comprobar si la medición es válida y qué motivos reales existen para recurrir.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.34 }} className="text-xs text-white/60 pt-1">
            Por <strong className="text-white/80">Daniel</strong>, fundador y responsable de contenidos · Revisada en octubre de 2026
          </motion.p>
        </div>
      </div>
      <main className="max-w-4xl mx-auto px-4 pt-6 pb-16">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 md:p-5 mb-8">
          <p className="text-sm text-slate-700 leading-relaxed"><strong className="text-slate-900">Qué es una multa de radar:</strong> una multa de radar es la sanción que se impone cuando un cinemómetro (el aparato que mide la velocidad) detecta que un vehículo supera el límite permitido en esa vía. En España la DGT gestiona unos 3.400 cinemómetros entre fijos, móviles y aéreos, y en 2024 se registraron 3.440.655 sanciones por exceso de velocidad. La multa depende del exceso medido según el Anexo IV del texto refundido de la Ley de Tráfico (de 100 € sin puntos a 600 € con 6 puntos), y es recurrible si el aparato no tenía la verificación metrológica en vigor o no se descontó su margen de error.</p>
        </div>
        <h2 className="text-2xl font-bold mt-10 mb-4">Qué tipos de radares multa en España</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
          <li><strong>Radares fijos:</strong> instalados en cabinas o pórticos. Deben estar señalizados con antelación.</li>
          <li><strong>Radares móviles:</strong> en vehículos parados o en movimiento. No requieren aviso previo.</li>
          <li><strong>Radares de tramo:</strong> miden tu velocidad media entre dos puntos. Se les aplica el mismo régimen de márgenes que a los fijos.</li>
          <li><strong>Cámaras de móvil y cinturón:</strong> no miden velocidad, pero generan denuncias de 200 € con foto como prueba.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Márgenes de error: la tabla que te protege</h2>
        <p className="text-slate-600 mb-4">Todo radar tiene un margen de error que debe descontarse de la medición antes de denunciar:</p>
        <div className="rounded-2xl border border-slate-200 mb-4">
        <table className="w-full text-xs sm:text-sm text-left bg-white">
        <thead><tr className="bg-slate-900 text-white"><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Tipo de radar</th><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Hasta 100 km/h</th><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Por encima de 100 km/h</th></tr></thead>
        <tbody>
        <tr className="bg-white"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">Fijos (cabinas, pórticos, tramo)</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">5 km/h</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">5 %</td></tr>
        <tr className="bg-slate-50"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">Móviles</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">7 km/h</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">7 %</td></tr>
        </tbody>
        </table>
        </div>
        <p className="text-slate-600 mb-4">Si la denuncia no descuenta ese margen, la medición puede ser recurrible.</p>

                <figure className="mb-8">
          <video src="/media/guia-radares.mp4" className="w-full rounded-3xl border border-slate-200" muted autoPlay loop playsInline preload="metadata" aria-label="Vídeo: circulación por una autopista española al atardecer" />
          <figcaption className="text-sm text-slate-500 mt-2 text-center">Vídeo ilustrativo: así se ve un pórtico de control de velocidad en una autopista española.</figcaption>
        </figure>
<h2 className="text-2xl font-bold mt-10 mb-4">Sanciones por exceso de velocidad</h2>
        <div className="rounded-2xl border border-slate-200 mb-4">
        <table className="w-full text-xs sm:text-sm text-left bg-white">
        <thead><tr className="bg-slate-900 text-white"><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Gravedad</th><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Multa</th><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Puntos</th></tr></thead>
        <tbody>
        <tr className="bg-white"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-700">Grave</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">100–400 €</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">2–4</td></tr>
        <tr className="bg-slate-50"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-700">Muy grave</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">500–600 €</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">6</td></tr>
        </tbody>
        </table>
        </div>
        <p className="text-slate-600 mb-4">Importes y puntos según el Anexo IV del texto refundido de la Ley de Tráfico. El tramo exacto depende del límite de la vía y del exceso medido: consúltalo en el <a href="https://recurretumulta.online/buscador-codigo-multa" className="text-green-700 font-semibold hover:underline">buscador de infracciones por código</a> y en <a href="https://recurretumulta.online/blog/recurrir-multa-radar-velocidad" className="text-green-700 font-semibold hover:underline">cómo recurrir una multa de radar</a>.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Cómo recurrir una multa de radar paso a paso</h2>
        <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-4">
          <li><strong>Revisa la denuncia:</strong> fecha, hora, lugar, velocidad medida y límite del tramo.</li>
          <li><strong>Comprueba la señalización:</strong> si era un radar fijo, debía estar avisado.</li>
          <li><strong>Pide el certificado de verificación:</strong> el cinemómetro debe tener la verificación metrológica en vigor.</li>
          <li><strong>Presenta alegaciones</strong> en 20 días naturales ante la Jefatura Provincial de Tráfico (o el ayuntamiento si la vía es municipal).</li>
        </ol>

        <h2 className="text-2xl font-bold mt-10 mb-4">Fuentes oficiales</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
          <li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">Texto refundido de la Ley de Tráfico (RDL 6/2015, BOE)</a>: infracciones y sanciones por velocidad (Anexo IV, arts. 76, 77 y 80).</li>
          <li><a href="https://sede.dgt.gob.es" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">Sede electrónica de la DGT</a>: consulta y pago de sanciones, identificación del conductor.</li>
        </ul>
        <p className="text-slate-600 mb-4">Si tu multa de radar tiene además un problema de plazos, revisa la <a href="https://recurretumulta.online/guias/prescripcion" className="text-green-700 font-semibold hover:underline">guía de prescripción y caducidad</a>; y si la denuncia está mal tramitada, la <a href="https://recurretumulta.online/guias/vicios-forma" className="text-green-700 font-semibold hover:underline">guía de defectos de forma</a>.</p>

        <img src="/media/radar-recurso.webp" alt="Vista desde el coche al acercarse a un pórtico de radar" className="w-full rounded-3xl border border-slate-200 my-8" loading="lazy" />
        <h2 className="text-2xl font-bold mt-10 mb-6">Preguntas frecuentes</h2>
        <div className="space-y-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-10">
          <div>
            <h3 className="font-bold mb-1">¿Cuál es el margen de error de los radares?</h3>
            <p className="text-slate-600">Fijos: 5 km/h o 5%. Móviles: 7 km/h o 7%.</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">¿Tienen que avisar de que hay un radar?</h3>
            <p className="text-slate-600">Los fijos sí deben estar señalizados; los móviles no requieren aviso.</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">¿Qué es la verificación metrológica?</h3>
            <p className="text-slate-600">El control periódico que certifica que el radar mide bien. Sin ella en vigor, la medición no vale.</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">¿Puedo recurrir si ya pagué con descuento?</h3>
            <p className="text-slate-600">No: el pronto pago implica aceptar la sanción.</p>
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">¿Te ha multado un radar?</h2>
          <p className="text-slate-300 mb-6">Analiza tu denuncia gratis y descubre si es recurrible.</p>
          <a href="https://recurretumulta.online/" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition">Analizar mi multa</a>
        </div>
      </main>
      <SharedFooter />
    </div>
  );
}
