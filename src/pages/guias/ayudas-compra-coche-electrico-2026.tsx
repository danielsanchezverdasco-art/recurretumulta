import { useSeo } from "@/hooks/use-seo.ts";
import { DriveInImage } from "@/components/motion.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";
import SharedFooter from "@/components/shared-footer.tsx";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://recurretumulta.online/guias/ayudas-compra-coche-electrico-2026#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Cuánto me puede dar el Plan Auto+ por un coche eléctrico?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La ayuda máxima para un turismo (M1) es de 4.500 € para particulares y 6.000 € para autónomos y microempresas, que pueden subir a 7.000 € con la cofinanciación del Fondo Social para el Clima. La cuantía final se calcula con la fórmula EEE (tipo de vehículo, precio y fabricación europea), así que no todo el mundo cobra el máximo.",
          },
        },
        {
          "@type": "Question",
          "name": "¿El Plan Auto+ es compatible con la deducción del IRPF del 15 %?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. La deducción fiscal del 15 % en el IRPF por la compra de vehículos electrificados es una vía fiscal distinta y compatible con la ayuda directa del Plan Auto+. Consulta con un asesor las condiciones aplicables a tu caso.",
          },
        },
        {
          "@type": "Question",
          "name": "Compré el coche antes de que se abriera la ventanilla, ¿puedo pedir la ayuda?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. El Plan Auto+ tiene efecto retroactivo desde el 1 de enero de 2026: si matriculaste tu vehículo desde esa fecha y cumple los requisitos (etiqueta CERO, límite de precio), puedes solicitar la ayuda dentro del plazo de la convocatoria.",
          },
        },
        {
          "@type": "Question",
          "name": "¿El Plan MOVES III sigue abierto en 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. El Plan MOVES III está cerrado a nuevas solicitudes desde el 31 de diciembre de 2025. Los expedientes ya concedidos continúan su curso (justificación y pago), pero cualquier ayuda nueva a la compra se pide a través del Plan Auto+.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Mi comunidad autónoma da una ayuda extra para el coche eléctrico?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "En la mayoría de comunidades, la única ayuda a la compra de coche eléctrico en 2026 es el Plan Auto+ estatal. Hay pocas excepciones regionales: Navarra tuvo su Plan Tximista (agotado), Melilla mantiene su convocatoria MOVES III 2025 (en resolución de fases durante 2026), Murcia aplica una deducción autonómica del 30 % en el IRPF y Madrid tiene el Plan Mueve Madrid (2.000 € con achatarramiento para turismos M1 y furgonetas N1 con etiqueta ECO o Cero). Ojo con los 'planes renove' de Asturias o Andalucía: excluyen los coches eléctricos (etiqueta CERO o no enchufables), así que no sirven para comprar un EV.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Qué pasa si el presupuesto del Plan Auto+ se agota antes del 31 de diciembre?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Las ayudas se conceden por orden de presentación hasta agotar el crédito, así que la convocatoria puede cerrarse antes del 31 de diciembre de 2026 si se acaban los fondos. Conviene solicitar cuanto antes, porque los fondos se están consumiendo rápido.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://recurretumulta.online/" },
        { "@type": "ListItem", "position": 2, "name": "Guías", "item": "https://recurretumulta.online/guias/ayudas-compra-coche-electrico-2026" },
      ],
    },
  ],
};

export default function GuiaAyudasCocheElectricoPage() {
  useSeo({
    title: "Ayudas coche eléctrico 2026: Plan Auto+",
    description: "Ayudas para comprar coche eléctrico en 2026: Plan Auto+ (hasta 4.500 €), requisitos, plazos y cómo solicitarlas. Guía verificada.",
    canonical: "/guias/ayudas-compra-coche-electrico-2026",
    image: "/media/hero-guia-ayudas-coche-electrico-2026.webp",
    schema: FAQ_SCHEMA,
  });

  return (
    <div
      className="bg-slate-50 text-slate-900 antialiased min-h-screen"
      style={{ fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,sans-serif' }}
    >
            {/* Hero animado estilo blog */}
      <div className="relative overflow-hidden">
        <DriveInImage src="/media/hero-guia-ayudas-coche-electrico-2026.webp" alt="Coche eléctrico nuevo en un concesionario español con etiqueta de oferta" eager={true} className="absolute inset-0" imgClassName="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
        <CosaEnBanner />
        <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 space-y-4">
          <nav aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-white/60">
            <a href="https://recurretumulta.online/" className="hover:text-white">Inicio</a>
            <span aria-hidden="true">/</span>
            <span className="text-white/40">Guía: ayudas coche eléctrico 2026</span>
          </nav>
          <div>
            <Badge className="bg-red-600 border-red-500 text-white text-xs font-bold shadow-lg shadow-red-950/50">Guía 2026</Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
            Ayudas para comprar coche eléctrico en España (2026): la guía verificada
          </h1>
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            El Plan MOVES III murió el 31 de diciembre de 2025 y su sucesor es el <strong className="text-white">Programa Auto+</strong>, regulado por el Real Decreto 609/2026: ayudas directas de hasta 4.500 € para particulares (hasta 6.000-7.000 € para autónomos y microempresas). Aquí tienes, solo con datos verificados en el BOE, qué ayudas existen de verdad, cuánto dan, qué piden y cómo pedirlas.
          </p>
          <p className="text-xs text-white/60 pt-1">
            Por <strong className="text-slate-700">Daniel</strong>, fundador y responsable de contenidos · Revisada en octubre de 2026 con el BOE del RD 609/2026 · Radar autonómico: 06/10/2026
          </p>
        </div>
      </div>
      <main className="max-w-4xl mx-auto px-4 pt-6 pb-16">
        <h2 className="text-2xl font-bold mt-10 mb-4">Qué ayudas existen de verdad en 2026</h2>
        <div className="rounded-2xl border border-slate-200 mb-4">
        <table className="w-full text-xs sm:text-sm text-left bg-white">
        <thead><tr className="bg-slate-900 text-white"><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Ayuda</th><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Para quién</th><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Estado en 2026</th></tr></thead>
        <tbody>
        <tr className="bg-white"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">Plan Auto+ Línea 1</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Particulares (sin actividad económica)</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Abierta: 4 de agosto – 31 de diciembre de 2026</td></tr>
        <tr className="bg-slate-50"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">Plan Auto+ Línea 2</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Autónomos y empresas</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Abierta: 1 de octubre – 31 de diciembre de 2026 (50 millones €: 42 M para empresas, 8 M para autónomos)</td></tr>
        <tr className="bg-white"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">Deducción IRPF 15 %</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Compra de vehículo electrificado (y punto de recarga)</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Vigente hasta el 31/12/2026 (vía fiscal, distinta a la ayuda directa)</td></tr>
        <tr className="bg-slate-50"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">Plan MOVES III</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">—</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Cerrado a nuevas solicitudes desde el 31/12/2025 (los expedientes ya concedidos siguen su curso)</td></tr>
        </tbody>
        </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Cuánto dan: las cuantías máximas del Plan Auto+</h2>
        <p className="text-slate-600 mb-4">La ayuda no es una cifra fija: lo que veas aquí es el <strong className="text-slate-800">máximo</strong> de cada caso, y la cuantía final se calcula con la fórmula EEE que explicamos justo debajo.</p>
        <div className="rounded-2xl border border-slate-200 mb-4">
        <table className="w-full text-xs sm:text-sm text-left bg-white">
        <thead><tr className="bg-slate-900 text-white"><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Perfil</th><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Turismo M1</th><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Furgoneta N1</th><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Moto L3e-L5e</th><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Cuadriciclo L6e-L7e</th></tr></thead>
        <tbody>
        <tr className="bg-white"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">Particulares</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">4.500 €</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">5.000 €</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">1.100 €</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">1.500 €</td></tr>
        <tr className="bg-slate-50"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">Autónomos y microempresas</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">6.000 €</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">7.500 €</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">1.100 €</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">1.500 €</td></tr>
        <tr className="bg-white"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">Autónomos y microempresas (Fondo Social para el Clima)</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">7.000 €</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">12.000 €</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">2.000 €</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">2.000 €</td></tr>
        <tr className="bg-slate-50"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">Otras empresas</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">4.500 €</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">5.000 €</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">1.100 €</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-bold text-slate-900 whitespace-nowrap">1.500 €</td></tr>
        </tbody>
        </table>
        </div>
        <p className="text-slate-600 mb-4">Además, el punto de venta está obligado a aplicar un <strong className="text-slate-800">descuento adicional mínimo de 1.000 €</strong> sobre el precio de factura para turismos (M1) y furgonetas (N1).</p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Cómo se calcula la ayuda final: la fórmula EEE</h2>
        <p className="text-slate-600 mb-4">La cuantía real se obtiene aplicando tres criterios sobre el máximo. Son acumulables hasta llegar al tope:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
          <li><strong>Tipo de vehículo:</strong> eléctrico puro (BEV), 50 % del máximo; híbrido enchufable (PHEV) o de autonomía extendida (EREV), 25 %.</li>
          <li><strong>Precio:</strong> en turismos, hasta 35.000 €, 25 % del máximo; entre 35.001 y 45.000 €, 15 %. En furgonetas (sin límite de precio), 25 %.</li>
          <li><strong>Fabricación europea:</strong> montaje final en la UE, 15 % adicional; si parte del proceso de fabricación de la batería también se hace en la UE, 10 % más.</li>
        </ul>
        <p className="text-slate-600 mb-4">La ayuda concedida nunca puede superar el máximo de su categoría ni el coste de adquisición (precio de factura sin impuestos).</p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Requisitos para pedirla</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
          <li><strong>Etiqueta CERO:</strong> el vehículo debe tener la etiqueta ambiental CERO de la DGT. Se incluyen eléctricos puros (BEV), híbridos enchufables (PHEV), eléctricos de autonomía extendida (EREV) y pila de combustible (FCEV).</li>
          <li><strong>Vehículo nuevo,</strong> matriculado por primera vez en España a nombre del beneficiario desde el 1 de enero de 2026 (efecto retroactivo). También pueden entrar determinados vehículos seminuevos cuya primera matriculación no diste más de 12 meses de la fecha de factura.</li>
          <li><strong>Límite de precio:</strong> 45.000 € sin impuestos para turismos M1; 10.000 € para motos; sin límite para furgonetas N1 ni cuadriciclos.</li>
          <li><strong>Beneficiario:</strong> Línea 1 para particulares sin actividad económica (1 vehículo con ayuda); Línea 2 para autónomos (hasta 3 vehículos) y empresas (hasta 10). Hay que estar al corriente de las obligaciones tributarias y con la Seguridad Social; los concesionarios y puntos de venta están excluidos.</li>
          <li>En Línea 2 también valen compra, leasing y renting (con contrato mínimo de tres años).</li>
        </ul>

              <figure className="my-8">
        <img src="/media/ayudas-coche-electrico-plan-auto.webp" alt="Coche eléctrico nuevo en un concesionario español con cartel de ayuda a la compra" className="w-full rounded-3xl border border-slate-200" loading="lazy" />
      </figure>

<h2 className="text-2xl font-bold mt-10 mb-4">Cómo solicitarlas, paso a paso</h2>
        <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-4">
          <li><strong>Compra el vehículo</strong> cumpliendo los requisitos (etiqueta CERO, nuevo, dentro del límite de precio). Vale aunque lo hayas comprado desde el 1 de enero de 2026: la convocatoria es retroactiva.</li>
          <li><strong>Comprueba el descuento de 1.000 €</strong> en la factura: el punto de venta está obligado a aplicarlo.</li>
          <li><strong>Prepara la documentación:</strong> factura, ficha de matriculación, DNI y certificados de estar al corriente con Hacienda y la Seguridad Social.</li>
          <li><strong>Presenta la solicitud telemáticamente</strong> en el sistema de gestión del Ministerio de Industria y Turismo, dentro del plazo de tu línea (Línea 1: hasta el 31 de diciembre de 2026; Línea 2: del 1 de octubre a las 10:00 hasta el 31 de diciembre a las 14:00).</li>
          <li><strong>No lo dejes para el final:</strong> las ayudas se conceden por orden de presentación hasta agotar el crédito, y la convocatoria puede cerrarse antes del 31 de diciembre si se acaban los fondos.</li>
          <li><strong>Declara la ayuda</strong> en tu IRPF del año en que la cobres: tributa como ganancia patrimonial (casilla 0301).</li>
        </ol>

        <h2 className="text-2xl font-bold mt-10 mb-4">Compatibilidades: qué se puede combinar y qué no</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
          <li><strong>Compatible</strong> con la deducción del 15 % en el IRPF por compra de vehículo electrificado: es una vía fiscal distinta a la ayuda directa.</li>
          <li><strong>No compatible</strong> con el programa MOVES FLOTAS PLUS.</li>
          <li>El Plan MOVES III está cerrado a nuevas solicitudes: no se puede acumular con el Auto+ para la misma compra.</li>
          <li>El Plan Auto+ <strong>no</strong> incluye ayudas para puntos de recarga; para el cargador solo está la deducción fiscal del 15 % (base máxima 4.000 €).</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Ayudas por comunidades autónomas</h2>
        <p className="text-slate-600 mb-4">Radar semanal de fuentes oficiales, actualizado el <strong className="text-slate-800">6 de octubre de 2026</strong>. El Plan Auto+ estatal es la vía general en las 17 comunidades y en Ceuta y Melilla; estos son los programas autonómicos propios que existen o han existido en 2026. Ojo: varios "planes renove" regionales <strong className="text-slate-800">excluyen los coches eléctricos</strong>; lo indicamos donde aplica para que nadie se confunda.</p>

        <div className="rounded-2xl border border-amber-300 bg-amber-50 p-4 mb-6">
          <p className="text-sm font-bold text-amber-900 mb-2">Novedades de la semana (29/09 – 06/10/2026)</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-amber-900">
            <li><strong>Asturias:</strong> publica su Plan Renove 2026 (1 M€, 2.400 € por vehículo, solicitudes del 30/09 al 30/11/2026). Excluye la etiqueta CERO: no sirve para comprar un eléctrico. <a href="https://actualidad.asturias.es/-/renove179" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">Nota oficial del Principado</a>.</li>
            <li><strong>Andalucía:</strong> amplía su Plan Renove hasta el 15/11/2026 (BOJA 18/09/2026) y prepara subir la ayuda de 3.000 a 4.000 € abriéndola a ciudadanos y empresas. Financia vehículos nuevos <strong>no enchufables</strong>: tampoco aplica al eléctrico. <a href="https://www.juntadeandalucia.es/organismos/universidadindustriaenergiaeinnovacion/servicios/actualidad/noticias/detalle/684109.html" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">Nota oficial de la Junta</a>.</li>
            <li><strong>Galicia:</strong> cierra su Plan Renueva Tu Vehículo 2026 (IN421U) el 30/09/2026, por plazo previsto (DOG n.º 247, 23/12/2025).</li>
          </ul>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-3">Programas autonómicos que sí aplican a la compra de eléctrico</h3>
        <div className="rounded-2xl border border-slate-200 mb-4">
        <table className="w-full text-xs sm:text-sm text-left bg-white">
        <thead><tr className="bg-slate-900 text-white"><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Comunidad</th><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Programa</th><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Estado a 06/10/2026</th></tr></thead>
        <tbody>
        <tr className="bg-white"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">Navarra</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Plan Tximista Auto 2026 (BON 30/04/2026): hasta 5.000 € en M1 con ensamblaje UE</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600"><strong className="text-slate-800">Agotado</strong> (830 ayudas; incompatible con el Auto+ estatal)</td></tr>
        <tr className="bg-slate-50"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">Melilla</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Convocatoria MOVES III 2025 (BOME n.º 6334, 09/12/2025): 2.500–7.000 € según caso</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Convocatoria en resolución de fases durante 2026</td></tr>
        <tr className="bg-white"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">Ceuta</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Convocatoria MOVES III-2025 (BOCCE)</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Sin programa propio en 2026; continúa la resolución de expedientes</td></tr>
        <tr className="bg-slate-50"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">Murcia</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Deducción autonómica en el IRPF: 30 % del coste del EV (máx. 7.000 €)</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Medida fiscal autonómica vigente (anuncio del consejero, 10/04/2026)</td></tr>
        <tr className="bg-white"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">Madrid</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Plan Mueve Madrid (BOCM n.º 281, 25/11/2024): 2.000 € con achatarramiento para turismos M1 y furgonetas N1 con etiqueta ECO o Cero</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Abierto hasta el 31/12/2026 (ampliación +5 M€, BOCM 01/04/2026)</td></tr>
        </tbody>
        </table>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-3">Planes renove autonómicos que excluyen el eléctrico</h3>
        <p className="text-slate-600 mb-4">Son programas de renovación eficiente con achatarramiento: complementan al Auto+ estatal, pero <strong className="text-slate-800">no sirven para comprar un coche eléctrico</strong>.</p>
        <div className="rounded-2xl border border-slate-200 mb-4">
        <table className="w-full text-xs sm:text-sm text-left bg-white">
        <thead><tr className="bg-slate-900 text-white"><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Comunidad</th><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Programa</th><th className="px-2 sm:px-4 py-2 sm:py-3 font-bold break-words">Estado a 06/10/2026</th></tr></thead>
        <tbody>
        <tr className="bg-white"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">Asturias</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Plan Renove 2026: 2.400 €/vehículo, achatarramiento obligatorio</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Abierto 30/09–30/11/2026 (BOPA 29/09/2026). Excluye etiqueta CERO</td></tr>
        <tr className="bg-slate-50"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">Andalucía</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Plan Renove Vehículos: 3.000 € (prepara subida a 4.000 €), achatarramiento obligatorio</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Abierto hasta el 15/11/2026. Solo vehículos no enchufables</td></tr>
        <tr className="bg-white"><td className="px-2 sm:px-4 py-2 sm:py-3 break-words font-semibold text-slate-800">La Rioja</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Línea ADER de renovación (excluía etiqueta CERO)</td><td className="px-2 sm:px-4 py-2 sm:py-3 break-words text-slate-600">Cerrada el 17/07/2026 (BOR 23/04/2026)</td></tr>
        </tbody>
        </table>
        </div>
        <p className="text-slate-600 mb-4">En el resto de comunidades (Galicia, Castilla y León, Aragón, Cataluña, Castilla-La Mancha, Extremadura, Comunidad Valenciana, País Vasco, Cantabria, Baleares y Canarias) <strong className="text-slate-800">no hay en 2026 programa autonómico propio de compra de vehículo eléctrico</strong>: la vía general es el Plan Auto+ estatal. La C. Valenciana y otras continúan resolviendo expedientes de convocatorias anteriores (MOVES III).</p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Fuentes oficiales</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
          <li><a href="https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-16010" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">Real Decreto 609/2026, de 22 de julio (BOE)</a>: bases reguladoras del Programa Auto+ (líneas, cuantías, requisitos y fórmula EEE).</li>
          <li><a href="https://actualidad.asturias.es/-/renove179" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">Principado de Asturias (nota oficial, 17/09/2026)</a>: Plan Renove 2026 (1 M€, 2.400 € por vehículo; excluye etiqueta CERO).</li>
          <li><a href="https://www.juntadeandalucia.es/organismos/universidadindustriaenergiaeinnovacion/servicios/actualidad/noticias/detalle/684109.html" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">Junta de Andalucía (nota oficial, 18/09/2026)</a>: ampliación del Plan Renove Vehículos hasta el 15/11/2026 y preparación de la subida a 4.000 € (solo vehículos no enchufables).</li>
          <li><a href="https://sede.dgt.gob.es" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:underline">Sede electrónica de la DGT</a>: para comprobar la etiqueta ambiental CERO de tu vehículo.</li>
        </ul>
        <p className="text-slate-600 mb-4">Si estás dudando entre eléctricos, revisa nuestro <a href="https://recurretumulta.online/comparador-coches" className="text-green-700 font-semibold hover:underline">comparador de coches</a> y el <a href="https://recurretumulta.online/glosario" className="text-green-700 font-semibold hover:underline">glosario del coche eléctrico</a> para entender cada sigla de la ficha.</p>

        <h2 className="text-2xl font-bold mt-10 mb-6">Preguntas frecuentes</h2>
        <div className="space-y-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-10">
          <div>
            <h3 className="font-bold mb-1">¿Cuánto me puede dar el Plan Auto+ por un coche eléctrico?</h3>
            <p className="text-slate-600">Hasta 4.500 € para particulares y hasta 6.000 € (7.000 € con Fondo Social para el Clima) para autónomos y microempresas. La cuantía final depende de la fórmula EEE.</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">¿El Plan Auto+ es compatible con la deducción del IRPF del 15 %?</h3>
            <p className="text-slate-600">Sí: son vías distintas (ayuda directa + deducción fiscal) y se pueden combinar.</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">¿Puedo pedir la ayuda si compré el coche antes de que se abriera la ventanilla?</h3>
            <p className="text-slate-600">Sí, si lo matriculaste desde el 1 de enero de 2026 y cumple los requisitos: la convocatoria es retroactiva.</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">¿El Plan MOVES III sigue abierto en 2026?</h3>
            <p className="text-slate-600">No: está cerrado a nuevas solicitudes desde el 31 de diciembre de 2025. Las ayudas nuevas se piden por el Plan Auto+.</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">¿Mi comunidad autónoma da una ayuda extra para el coche eléctrico?</h3>
            <p className="text-slate-600">En la mayoría, no: la única ayuda en 2026 es el Plan Auto+ estatal. Excepciones: Melilla (convocatoria MOVES III 2025, en resolución de fases durante 2026), Navarra (Plan Tximista, ya agotado), Murcia (deducción autonómica del 30 % en el IRPF) y Madrid (Plan Mueve Madrid: 2.000 € con achatarramiento para M1/N1 con etiqueta ECO o Cero). Los "planes renove" de Asturias o Andalucía excluyen el eléctrico, así que no sirven para comprar un EV.</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">¿Qué pasa si el presupuesto se agota antes del 31 de diciembre?</h3>
            <p className="text-slate-600">Se conceden por orden de presentación hasta agotar el crédito, así que la convocatoria puede cerrarse antes. Solicita cuanto antes.</p>
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">¿Dudas con un coche concreto?</h2>
          <p className="text-slate-300 mb-6">Compara los 26 modelos analizados: autonomía, precio, batería y carga rápida.</p>
          <a href="https://recurretumulta.online/comparador-coches" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition">Ir al comparador</a>
        </div>
      </main>
      <SharedFooter />
    </div>
  );
}
