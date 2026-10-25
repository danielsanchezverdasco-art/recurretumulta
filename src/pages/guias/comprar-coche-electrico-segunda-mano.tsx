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
      "@id": "https://recurretumulta.online/guias/comprar-coche-electrico-segunda-mano#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué es el SOH de la batería de un coche eléctrico?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "El SOH (State of Health) es el porcentaje de capacidad útil que conserva la batería respecto a cuando el coche era nuevo. Es la cifra más importante al comprar un eléctrico de segunda mano, porque determina la autonomía real que te queda.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Qué estado de salud de la batería es aceptable en un eléctrico usado?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No hay un umbral universal: depende de la edad, el kilometraje y el modelo. Lo importante es comparar coches de la misma edad y comprobar que la autonomía real en una prueba se acerca a la homologada de origen. Además, la mayoría de garantías de batería cubren la sustitución si la capacidad cae por debajo de un mínimo (Tesla, por ejemplo, garantiza un 70 %).",
          },
        },
        {
          "@type": "Question",
          "name": "¿Cómo se mide la degradación de la batería antes de comprar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hay tres vías: un informe de diagnóstico oficial del concesionario de la marca, una empresa independiente de certificación de baterías que genera un informe del SOH, o un adaptador OBD con una app compatible con el modelo. Desconfía si el vendedor no facilita ninguna medición.",
          },
        },
        {
          "@type": "Question",
          "name": "¿La garantía de la batería se mantiene al cambiar de dueño?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí: la garantía de la batería acompaña al coche, no al propietario. Suele rondar los 8 años o 160.000 km, así que comprueba la fecha de primera matriculación y el kilometraje para saber cuánta garantía te queda por delante.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Qué pasa si la batería falla fuera de garantía?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La reparación más cara de un eléctrico es la batería. Fuera de garantía, a menudo se pueden reparar o sustituir módulos concretos sin cambiar el pack entero, pero el coste sigue siendo elevado. Por eso el SOH y la garantía restante son los dos puntos decisivos de la compra.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://recurretumulta.online/" },
        { "@type": "ListItem", "position": 2, "name": "Guías", "item": "https://recurretumulta.online/guias/comprar-coche-electrico-segunda-mano" },
      ],
    },
  ],
};

export default function GuiaElectricoSegundaManoPage() {
  useSeo({
    title: "Eléctrico segunda mano: qué mirar 2026",
    description: "Guía para comprar un eléctrico usado sin sorpresas: degradación de la batería (SOH), garantía, historial, checklist de inspección y preguntas al vendedor.",
    canonical: "/guias/comprar-coche-electrico-segunda-mano",
    schema: FAQ_SCHEMA,
  });

  return (
    <div
      className="bg-slate-50 text-slate-900 antialiased min-h-screen"
      style={{ fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,sans-serif' }}
    >
            {/* Hero animado estilo blog */}
      <div className="relative overflow-hidden">
        <DriveInImage src="/media/renault-5-e-tech-2026-precio-autonomia-hero.webp" alt="Coche eléctrico urbano cargando en un punto de carga" eager={true} className="absolute inset-0" imgClassName="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
        <CosaEnBanner />
        <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 space-y-4">
          <motion.nav initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-white/60">
            <a href="https://recurretumulta.online/" className="hover:text-white">Inicio</a>
            <span aria-hidden="true">/</span>
            <span className="text-white/40">Guía: eléctrico de segunda mano</span>
          </motion.nav>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}>
            <Badge className="bg-red-600 border-red-500 text-white text-xs font-bold shadow-lg shadow-red-950/50">Guía 2026</Badge>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
            Comprar un coche eléctrico de segunda mano: qué mirar (2026)
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }} className="text-white/80 text-sm md:text-base leading-relaxed">
            El mercado de eléctricos usados está lleno de oportunidades… y de riesgos que no existen en un gasolina. La batería lo es casi todo: aquí tienes qué comprobar punto por punto antes de pagar.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.34 }} className="text-xs text-white/60 pt-1">
            Por <strong className="text-slate-700">Daniel</strong>, fundador y responsable de contenidos · Revisada en octubre de 2026
          </motion.p>
        </div>
      </div>
      <main className="max-w-4xl mx-auto px-4 pt-6 pb-16">
        <h2 className="text-2xl font-bold mt-10 mb-4">El SOH: el dato que manda</h2>
        <p className="text-slate-600 mb-4">El <strong>SOH (State of Health)</strong> es el porcentaje de capacidad útil que conserva la batería respecto a cuando el coche salió del concesionario. Un SOH del 92 % significa que la batería almacena el 92 % de la energía original, y por tanto la autonomía real será menor que la homologada. Es la cifra más importante de toda la compra: un eléctrico con buen SOH es un buen coche; con mal SOH, es un problema caro.</p>
        <p className="text-slate-600 mb-4">La degradación es un proceso natural de las baterías de litio: suele ser más rápida en los primeros años y después se estabiliza. Lo aceleran el calor extremo, el uso muy frecuente de carga rápida y pasar mucho tiempo con la batería al 100 %. Por eso dos coches de la misma edad pueden tener salud de batería muy distinta.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Cómo medir la degradación antes de comprar</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
          <li><strong>Informe de diagnóstico oficial:</strong> el concesionario de la marca puede generar un informe del estado de la batería. Es la prueba más fiable.</li>
          <li><strong>Certificación independiente:</strong> existen empresas que emiten un informe del SOH del coche; úsalo como argumento de negociación.</li>
          <li><strong>Adaptador OBD + app:</strong> en muchos modelos se puede leer el estado de la batería con un adaptador OBD y una aplicación compatible. Útil como comprobación rápida, menos riguroso que un informe oficial.</li>
        </ul>
        <p className="text-slate-600 mb-4">Desconfía si el vendedor no puede facilitar ninguna medición: un propietario cuidadoso de un eléctrico suele conocer el estado de su batería.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4">La garantía de la batería: tu red de seguridad</h2>
        <p className="text-slate-600 mb-4">En la mayoría de marcas la garantía de la batería <strong>suele rondar los 8 años o 160.000 km</strong>, y acompaña al coche, no al propietario: se transmite al nuevo dueño. Tesla, por ejemplo, garantiza la batería y la unidad motriz durante 8 años (160.000 km en las versiones de acceso y 192.000 km en las de gran autonomía) con un mínimo del 70 % de capacidad retenida, según su garantía oficial.</p>
        <p className="text-slate-600 mb-4">Antes de comprar, calcula con la fecha de primera matriculación y el kilometraje cuánta garantía te queda. Si la batería cae por debajo del umbral que cubre la garantía, el fabricante la repara o la sustituye.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Historial del coche: qué pedir</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
          <li><strong>Libro de revisiones sellado:</strong> aunque un eléctrico tiene menos mantenimiento, las revisiones deben estar al día.</li>
          <li><strong>Informe de la DGT:</strong> cargas, embargos, kilometraje registrado en ITV y número de titulares. Se pide en la <a href="https://sede.dgt.gob.es" target="_blank" rel="noopener noreferrer" className="text-red-700 font-semibold hover:underline">sede electrónica de la DGT</a>.</li>
          <li><strong>Historial de cargas y uso:</strong> algunas marcas muestran en su app el historial de carga rápida; un coche cargado casi siempre en rápida se ha degradado más.</li>
          <li><strong>Facturas de reparaciones:</strong> golpes, sustitución de piezas de la electrónica o del sistema de carga deben estar documentados.</li>
        </ul>

              <figure className="my-8">
        <img src="/media/segunda-mano-inspeccion-bateria.webp" alt="Comprador inspeccionando un coche eléctrico de ocasión mientras un técnico muestra el informe de la batería en una tablet" className="w-full rounded-3xl border border-slate-200" loading="lazy" />
      </figure>

<h2 className="text-2xl font-bold mt-10 mb-4">Checklist de inspección: los 7 puntos</h2>
        <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-4">
          <li><strong>Batería y autonomía real:</strong> haz una prueba de conducción y compara el consumo y la autonomía con la cifra homologada del modelo.</li>
          <li><strong>Carga rápida:</strong> prueba el coche en un punto de carga rápida (CCS) y comprueba que negocia la potencia con normalidad.</li>
          <li><strong>Puertos de carga:</strong> revisa el estado del conector Tipo 2/CCS y que la tapa y el bloqueo funcionen.</li>
          <li><strong>Neumáticos:</strong> los eléctricos gastan más neumático por el par instantáneo y el peso; mide el dibujo y mira la fecha de fabricación.</li>
          <li><strong>Frenos:</strong> se usan poco por la frenada regenerativa, pero los discos pueden corroerse por falta de uso. Frena fuerte un par de veces en la prueba.</li>
          <li><strong>Electrónica y pantalla:</strong> comprueba cámaras, sensores, climatización y que el sistema multimedia no tenga fallos ni pantallas quemadas.</li>
          <li><strong>Software:</strong> verifica que el coche recibe actualizaciones y que la app del fabricante permite vincular un nuevo propietario.</li>
        </ol>

        <h2 className="text-2xl font-bold mt-10 mb-4">Preguntas directas al vendedor</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
          <li>¿Cuál es el SOH de la batería y me das el informe?</li>
          <li>¿Cómo lo cargabas habitualmente: en casa, en el trabajo o en carga rápida?</li>
          <li>¿A qué porcentaje solías cargar y descargar la batería?</li>
          <li>¿Ha tenido algún aviso o fallo relacionado con la batería o la carga?</li>
          <li>¿Queda garantía de la batería? ¿Hasta cuándo y con qué kilometraje?</li>
          <li>¿Por qué lo vendes?</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Eléctricos populares de ocasión: compáralos</h2>
        <p className="text-slate-600 mb-4">Estos son algunos de los eléctricos más buscados de segunda mano en España. Revisa sus fichas técnicas para saber qué autonomía y qué batería esperar de cada uno:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
          <li><a href="https://recurretumulta.online/coches/renault-5-e-tech-2026-precio-autonomia" className="text-red-700 font-semibold hover:underline">Renault 5 E-Tech</a>: el urbano eléctrico de moda, muy demandado de ocasión.</li>
          <li><a href="https://recurretumulta.online/coches/dacia-spring-2026-nueva-generacion-precio" className="text-red-700 font-semibold hover:underline">Dacia Spring</a>: el eléctrico más barato del mercado; ideal para ciudad.</li>
          <li><a href="https://recurretumulta.online/coches/byd-atto-2-precio-ficha-tecnica" className="text-red-700 font-semibold hover:underline">BYD Atto 2</a>: SUV compacto chino con buena relación precio/equipamiento.</li>
          <li><a href="https://recurretumulta.online/coches/renault-4-e-tech-precio-autonomia" className="text-red-700 font-semibold hover:underline">Renault 4 E-Tech</a>: SUV urbano con estética retro y etiqueta Cero.</li>
        </ul>
        <p className="text-slate-600 mb-4">Ponlos cara a cara en nuestro <a href="https://recurretumulta.online/comparador-coches" className="text-red-700 font-semibold hover:underline">comparador de coches</a>: autonomía, batería, carga rápida y precio, lado a lado.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Fuentes oficiales</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
          <li><a href="https://www.tesla.com/es_pr/support/vehicle-warranty" target="_blank" rel="noopener noreferrer" className="text-red-700 font-semibold hover:underline">Garantía del vehículo Tesla (página oficial)</a>: 8 años de garantía de batería y unidad motriz, con un mínimo del 70 % de capacidad.</li>
          <li><a href="https://sede.dgt.gob.es" target="_blank" rel="noopener noreferrer" className="text-red-700 font-semibold hover:underline">Sede electrónica de la DGT</a>: informe del vehículo con cargas, kilometraje e historial de titulares.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-6">Preguntas frecuentes</h2>
        <div className="space-y-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-10">
          <div>
            <h3 className="font-bold mb-1">¿Qué es el SOH de la batería?</h3>
            <p className="text-slate-600">El porcentaje de capacidad útil que conserva respecto a nueva. Es el dato clave al comprar un eléctrico usado.</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">¿Qué SOH es aceptable en un eléctrico de segunda mano?</h3>
            <p className="text-slate-600">No hay un umbral universal: depende de la edad y el kilometraje. Compara coches de la misma edad y comprueba la autonomía real en una prueba.</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">¿Cómo se mide la degradación de la batería?</h3>
            <p className="text-slate-600">Con un informe de diagnóstico oficial, una certificación independiente o un adaptador OBD con app compatible.</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">¿La garantía de la batería se mantiene al cambiar de dueño?</h3>
            <p className="text-slate-600">Sí, acompaña al coche. Suele rondar los 8 años o 160.000 km: comprueba cuánto queda con la fecha de matriculación.</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">¿Qué pasa si la batería falla fuera de garantía?</h3>
            <p className="text-slate-600">Se pueden reparar módulos concretos, pero el coste es elevado. Por eso el SOH y la garantía restante deciden la compra.</p>
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">¿Vas a comprar un eléctrico?</h2>
          <p className="text-slate-300 mb-6">Compara autonomía, batería y carga rápida de los modelos más buscados antes de decidir.</p>
          <a href="https://recurretumulta.online/comparador-coches" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition">Comparar coches eléctricos</a>
        </div>
      </main>
      <SharedFooter />
    </div>
  );
}
