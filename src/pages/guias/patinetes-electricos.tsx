import { useSeo } from "@/hooks/use-seo.ts";
import { DriveInImage } from "@/components/motion.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://recurretumulta.online/guias/patinetes-electricos#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Necesito carnet de conducir para llevar un patinete eléctrico?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No se exige permiso de conducción para los VMP. Pero sí debes tener al menos 15 años (RD 518/2026, en vigor desde el 1 de octubre de 2026) y cumplir la ordenanza municipal de tu ciudad, que puede añadir requisitos.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Es obligatorio el casco en patinete eléctrico?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Desde el 1 de octubre de 2026 el casco es obligatorio para circular en patinete eléctrico en toda España (RD 518/2026).",
          },
        },
        {
          "@type": "Question",
          "name": "¿Puedo circular por la acera con el patinete?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Está prohibido circular con VMP por aceras y zonas peatonales. Debes usar el carril bici cuando exista y, si no, la calzada urbana según indique la ordenanza municipal. Tampoco puedes circular por vías interurbanas.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Qué pasa si mi patinete no tiene certificado de la DGT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Circular sin certificado de circulación VMP se sanciona con 200 euros (Instrucción SANC 2026/13). Además, hay un periodo transitorio hasta el 22 de enero de 2027: a partir de esa fecha solo podrán circular los patinetes con certificado.",
          },
        },
        {
          "@type": "Question",
          "name": "¿El seguro del patinete es obligatorio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Desde el 2 de enero de 2026 el seguro de responsabilidad civil es obligatorio para los VMP (Ley 5/2025). Circular sin seguro se sanciona con multas de hasta 1.000 euros.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Me pueden multar por llevar a otra persona en el patinete?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Los patinetes eléctricos son vehículos de una sola plaza: llevar pasajero está prohibido y es sancionable.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://recurretumulta.online/" },
        { "@type": "ListItem", position: 2, name: "Guías", item: "https://recurretumulta.online/guias/patinetes-electricos" },
      ],
    },
  ],
};

export default function GuiaPatinetesPage() {
  useSeo({
    title: "Patinete eléctrico 2026: normativa y multas",
    description: "Patinete eléctrico en 2026: VMP legal, certificado DGT, seguro, dónde circular, tabla de multas y cómo recurrirlas. Guía completa.",
    canonical: "/guias/patinetes-electricos",
    image: "https://recurretumulta.online/media/patinetes/guia-patinetes.webp",
    schema: FAQ_SCHEMA,
  });

  return (
    <div
      className="bg-slate-50 text-slate-900 antialiased min-h-screen"
      style={{ fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,sans-serif' }}
    >
            {/* Hero animado estilo blog */}
      <div className="relative overflow-hidden">
        <DriveInImage src="/media/patinetes/guia-patinetes.webp" alt="Dos personas con casco circulando en patinete eléctrico por un carril bici de una ciudad española" eager={true} className="absolute inset-0" imgClassName="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
        <CosaEnBanner />
        <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 space-y-4">
          <nav aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-white/60">
            <a href="https://recurretumulta.online/" className="hover:text-white">Inicio</a>
            <span aria-hidden="true">/</span>
            <span className="text-white/40">Guía: patinete eléctrico 2026</span>
          </nav>
          <div>
            <Badge className="bg-red-600 border-red-500 text-white text-xs font-bold shadow-lg shadow-red-950/50">Guía 2026</Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
            Patinete eléctrico en España 2026: normativa, multas y cómo recurrir
          </h1>
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            El patinete eléctrico ya no es un juguete sin reglas: en 2026 tiene seguro obligatorio, registro en la DGT, casco obligatorio y multas de hasta 1.000 €. Aquí tienes todo lo que necesitas para circular legal y para recurrir si te han multado.
          </p>
          <p className="text-xs text-white/60 pt-1">
            Por <strong className="text-slate-700">Daniel</strong>, fundador y responsable de contenidos · Revisada en octubre de 2026
          </p>
        </div>
      </div>
      <main className="max-w-4xl mx-auto px-4 pt-6 pb-16">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 md:p-5 mb-8">
          <p className="text-sm text-slate-700 leading-relaxed"><strong className="text-slate-900">Qué es un VMP:</strong> un vehículo de movilidad personal (VMP) es un vehículo de una o más ruedas dotado de una única plaza y propulsado exclusivamente por motores eléctricos, con velocidad máxima de 25 km/h (definición de la DGT). El patinete eléctrico es el VMP más común. Desde el 1 de octubre de 2026, el Real Decreto 518/2026 le aplica un régimen sancionador propio: las infracciones graves (acera, sin casco, móvil) se multan con 200 €.</p>
        </div>
        <h2 className="text-2xl font-bold mt-10 mb-4">Qué es un VMP legal en España</h2>
        <p className="text-slate-600 mb-4">Un patinete eléctrico es un <strong>vehículo de movilidad personal (VMP)</strong>. Para ser legal en España debe cumplir el manual de características de la DGT:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
          <li><strong>Certificado de circulación VMP</strong> de la DGT: acredita que el modelo cumple los requisitos técnicos. Pídelo al vendedor antes de comprar.</li>
          <li><strong>Velocidad máxima de 25 km/h</strong>: si corre más, no es un VMP y su régimen es otro.</li>
          <li><strong>Una sola plaza</strong>: prohibido llevar pasajero.</li>
          <li><strong>Sistema de frenado, luces y timbre</strong> en condiciones de funcionamiento.</li>
        </ul>
        <p className="text-slate-600 mb-4">Ojo con los patinetes potentísimos de 800 W o más que se venden online: verifica que el modelo concreto tiene certificado y que tu ayuntamiento lo trata como VMP. Si buscas uno legal, nuestro <a href="https://recurretumulta.online/comparador-patinetes" className="text-green-700 font-semibold hover:underline">comparador de patinetes eléctricos</a> solo incluye modelos con presencia oficial en España.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Normativa 2026: lo que ha cambiado</h2>
        <p className="text-slate-600 mb-4">En 2026 el patinete ha entrado de lleno en la ley. Estas son las normas que debes conocer:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
          <li><strong>Seguro obligatorio (Ley 5/2025):</strong> desde el 2 de enero de 2026 todo VMP necesita seguro de responsabilidad civil.</li>
          <li><strong>Registro DGT (RD 52/2026):</strong> desde el 30 de enero de 2026 los patinetes deben inscribirse en el Registro de Vehículos Personales Ligeros de la DGT (tasa de 8,67 €).</li>
          <li><strong>Reforma del Reglamento de Circulación (RD 518/2026):</strong> en vigor desde el 1 de octubre de 2026: edad mínima de 15 años, casco obligatorio, elemento luminoso visible a 150 metros de noche, prohibido circular por aceras y por vías interurbanas. El alumbrado diurno será obligatorio desde el 1 de octubre de 2027.</li>
          <li><strong>Periodo transitorio hasta el 22 de enero de 2027:</strong> a partir de esa fecha solo podrán circular los patinetes con certificado de circulación.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Dónde puedes circular (y dónde no)</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
          <li><strong>Sí:</strong> carril bici y vías ciclistas; calzada urbana donde lo permita la ordenanza municipal.</li>
          <li><strong>No:</strong> aceras, zonas peatonales y vías interurbanas (carreteras).</li>
          <li><strong>De noche:</strong> elemento luminoso visible a 150 metros obligatorio, además del alumbrado del patinete.</li>
        </ul>
        <p className="text-slate-600 mb-4">Cada ayuntamiento puede endurecer estas reglas en su ordenanza: antes de circular a diario en tu ciudad, revísala.</p>

              <figure className="my-8">
        <img src="/media/patinete-normativa.webp" alt="Persona con casco circulando en patinete eléctrico por un carril bici de una ciudad española" className="w-full rounded-3xl border border-slate-200" loading="lazy" />
      </figure>

<h2 className="text-2xl font-bold mt-10 mb-4">Tabla de multas de patinete en 2026</h2>
        <p className="text-slate-600 mb-4">Importes de la Instrucción SANC 2026/13 de la DGT para VMP:</p>
        <div className="rounded-2xl border border-slate-200 mb-4">
        <table className="w-full text-xs sm:text-sm text-left bg-white">
        <thead><tr className="bg-slate-900 text-white"><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Infracción</th><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Multa</th><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Base legal</th></tr></thead>
        <tbody>
        <tr className="bg-white"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">Circular sin certificado de circulación VMP</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">200 €</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">SANC 2026/13</td></tr>
        <tr className="bg-slate-50"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">Circular sin inscripción en el Registro DGT</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">100 €</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">SANC 2026/13</td></tr>
        <tr className="bg-white"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">Circular sin la etiqueta identificativa</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">80 €</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">SANC 2026/13</td></tr>
        <tr className="bg-slate-50"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">Circular sin seguro obligatorio</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">hasta 1.000 €</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Ley 5/2025 · SANC 2026/13</td></tr>
        </tbody>
        </table>
        </div>
        <p className="text-slate-600 mb-4">Además, te aplican las infracciones comunes a todo conductor: móvil al manillar, alcohol y drogas, o no respetar semáforos. Busca cualquier infracción por su importe o código en nuestro <a href="https://recurretumulta.online/buscador-codigo-multa" className="text-green-700 font-semibold hover:underline">buscador de infracciones</a>.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Cómo recurrir una multa de patinete paso a paso</h2>
        <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-4">
          <li><strong>Revisa la denuncia:</strong> fecha, hora, lugar, hechos descritos y norma infringida. Cualquier error (matrícula del patinete, identificación, lugar) puede ser un defecto de forma.</li>
          <li><strong>Comprueba la ordenanza municipal:</strong> muchas multas de patinete se ponen por ordenanza local; si el agente aplicó mal el precepto, es recurrible.</li>
          <li><strong>No pagues con descuento si vas a recurrir:</strong> el pronto pago del 50 % implica aceptar la sanción.</li>
          <li><strong>Presenta alegaciones</strong> en 20 días naturales ante el órgano que impuso la multa (Jefatura de Tráfico o ayuntamiento).</li>
          <li><strong>Analiza tu caso gratis</strong> con nuestra herramienta: te dice si la multa tiene visos de ser recurrible antes de que muevas un papel.</li>
        </ol>

        <h2 className="text-2xl font-bold mt-10 mb-4">Elige un patinete legal y sin sustos</h2>
        <p className="text-slate-600 mb-4">Si estás pensando en comprar uno, compara los 10 modelos con presencia oficial en España en nuestro <a href="https://recurretumulta.online/comparador-patinetes" className="text-green-700 font-semibold hover:underline">comparador de patinetes eléctricos</a>: precio, potencia, autonomía real, peso y certificado DGT, con búsqueda libre por IA si tu modelo no está en la lista. Cada modelo tiene además su <a href="https://recurretumulta.online/patinetes/xiaomi-electric-scooter-5" className="text-green-700 font-semibold hover:underline">ficha técnica completa</a>.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Sigue leyendo en el blog</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
          <li><a href="https://recurretumulta.online/blog/patinete-electrico-normativa-dgt-2026-multas" className="text-green-700 font-semibold hover:underline">Patinete eléctrico: normativa DGT 2026 y multas</a></li>
          <li><a href="https://recurretumulta.online/blog/patinetes-15-anos-casco-obligatorio" className="text-green-700 font-semibold hover:underline">Patinetes: 15 años y casco obligatorio</a></li>
          <li><a href="https://recurretumulta.online/blog/multa-patinete-octubre-2026-que-hacer-como-recurrir" className="text-green-700 font-semibold hover:underline">Multa en patinete: qué hacer y cómo recurrir</a></li>
          <li><a href="https://recurretumulta.online/blog/como-recurrir-multa-de-patinete-electrico-vmp-modelo-gratis" className="text-green-700 font-semibold hover:underline">Cómo recurrir una multa de patinete (VMP): modelo gratis</a></li>
          <li><a href="https://recurretumulta.online/blog/multas-a-patinetes-electricos-vmp-en-espana-2027-millones-en-recaudacion-normativa-de-seguros-preguntas-callejeras-y-como-recurrir" className="text-green-700 font-semibold hover:underline">Multas a patinetes: recaudación, seguros y cómo recurrir</a></li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Fuentes oficiales</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
          <li><a href="https://www.boe.es" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">Boletín Oficial del Estado (BOE)</a>: Ley 5/2025 (seguro obligatorio VMP), RD 52/2026 (Registro de Vehículos Personales Ligeros) y RD 518/2026 (reforma del Reglamento General de Circulación).</li>
          <li><a href="https://www.dgt.es" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">Dirección General de Tráfico (DGT)</a>: manual de características de los VMP, registro e Instrucción SANC 2026/13.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-6">Preguntas frecuentes</h2>
        <div className="space-y-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-10">
          <div>
            <h3 className="font-bold mb-1">¿Necesito carnet de conducir para llevar un patinete eléctrico?</h3>
            <p className="text-slate-600">No se exige permiso de conducción para los VMP, pero sí tener al menos 15 años y cumplir la ordenanza municipal.</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">¿Es obligatorio el casco en patinete eléctrico?</h3>
            <p className="text-slate-600">Sí, desde el 1 de octubre de 2026 en toda España.</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">¿Puedo circular por la acera con el patinete?</h3>
            <p className="text-slate-600">No: aceras, zonas peatonales y vías interurbanas están prohibidas para los VMP.</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">¿Qué pasa si mi patinete no tiene certificado de la DGT?</h3>
            <p className="text-slate-600">La multa es de 200 €, y desde el 22 de enero de 2027 solo podrán circular los patinetes certificados.</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">¿El seguro del patinete es obligatorio?</h3>
            <p className="text-slate-600">Sí, desde el 2 de enero de 2026. Sin seguro, multas de hasta 1.000 €.</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">¿Me pueden multar por llevar a otra persona en el patinete?</h3>
            <p className="text-slate-600">Sí: los VMP son de una sola plaza.</p>
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">¿Te han multado en patinete?</h2>
          <p className="text-slate-300 mb-6">Analiza tu denuncia gratis y descubre si es recurrible.</p>
          <a href="https://recurretumulta.online/" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition">Analizar mi multa</a>
        </div>
      </main>
      <SharedFooter />
    </div>
  );
}
