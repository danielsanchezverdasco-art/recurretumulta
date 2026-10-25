import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Search, BookOpen, ArrowRight, AlertTriangle } from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import { DriveInImage } from "@/components/motion.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";

interface Termino {
  termino: string;
  definicion: string;
  porQueImporta: string;
  queRevisar: string;
}

const TERMINOS: Termino[] = [
  {
    termino: "Denuncia",
    definicion: "Es el documento que inicia el procedimiento sancionador. No es la sanción en sí: es la comunicación oficial de que, según el agente o el sistema automático, has cometido una infracción.",
    porQueImporta: "Todo recurso se dirige contra la denuncia. Si la denuncia tiene defectos de forma, el procedimiento puede anularse antes de llegar a la sanción.",
    queRevisar: "Que la denuncia exista como tal y esté firmada o registrada por el órgano competente (DGT, ayuntamiento o comunidad autónoma).",
  },
  {
    termino: "Agente denunciante",
    definicion: "La persona (policía local, Guardia Civil de Tráfico) o el sistema (radar, cámara) que formula la denuncia.",
    porQueImporta: "Si la denuncia la formula un agente, sus declaraciones tienen presunción de veracidad, pero solo si la denuncia es completa y coherente.",
    queRevisar: "Que conste quién denuncia. En denuncias de agentes debe aparecer su identificación; en las automatizadas, el sistema y su certificado.",
  },
  {
    termino: "TIP del agente",
    definicion: "Tarjeta de Identidad Profesional: el número que identifica al agente que te denuncia. Es obligatorio que figure en la denuncia.",
    porQueImporta: "Es una de las búsquedas más habituales («qué significa TIP en una multa»). Sin TIP, la denuncia pierde la presunción de veracidad del agente y es recurrible por defecto de forma.",
    queRevisar: "Busca el número de TIP en tu denuncia. Si falta o es ilegible, anótalo como motivo de recurso.",
  },
  {
    termino: "Hechos denunciados",
    definicion: "La descripción de lo que supuestamente hiciste: qué infracción, dónde, cuándo y cómo. Es el corazón de la denuncia.",
    porQueImporta: "Si los hechos están mal descritos, son genéricos («circulaba de forma antirreglamentaria» sin más detalle) o no se corresponden con la realidad, la denuncia no se sostiene.",
    queRevisar: "Que los hechos sean concretos: conducta exacta, lugar preciso, fecha y hora. Las descripciones vagas o copiadas son recurribles.",
  },
  {
    termino: "Precepto infringido",
    definicion: "El artículo concreto de la norma que supuestamente has vulnerado (por ejemplo, «Art. 18.1 RGC» o «Art. 50 LSV»). Suele aparecer como «artículo» o «precepto».",
    porQueImporta: "Otra de las búsquedas top («precepto infringido qué es»). El precepto citado debe existir y corresponderse con los hechos descritos. Un precepto erróneo o inexistente anula la denuncia.",
    queRevisar: "Copia el precepto en nuestro buscador de infracciones para ver qué dice la norma y comprobar que encaja con lo que te imputan.",
  },
  {
    termino: "Calificación: leve, grave o muy grave",
    definicion: "La gravedad legal de la infracción. Las leves se sancionan con hasta 100 €, las graves con 200 € y las muy graves con 500 €, salvo que la ley fije otro importe (por ejemplo, 1.000 € por alcohol o drogas).",
    porQueImporta: "La calificación determina el importe, los puntos y el plazo de prescripción (3 meses las leves, 6 meses las graves y muy graves).",
    queRevisar: "Que la calificación sea coherente con el precepto citado. Una infracción leve no puede sancionarse con 200 €.",
  },
  {
    termino: "Importe de la sanción",
    definicion: "La cantidad en euros que te exigen. Aparece el importe íntegro y, normalmente, el importe con el descuento del 50 % por pronto pago.",
    porQueImporta: "El importe debe corresponderse con lo que la ley fija para esa infracción y esa calificación. Un importe incorrecto es motivo de recurso.",
    queRevisar: "Compara el importe con la tabla oficial de la infracción. Si no coincide, la sanción es recurrible.",
  },
  {
    termino: "Lugar de los hechos",
    definicion: "El punto exacto donde se cometió la supuesta infracción: calle, kilómetro, término municipal.",
    porQueImporta: "Un lugar impreciso o erróneo («vía urbana» sin más, o un punto kilométrico que no existe) debilita la denuncia y puede indicar que el agente no estaba presente.",
    queRevisar: "Que el lugar sea preciso y real. Si la vía es municipal, la competencia es del ayuntamiento, no de la DGT.",
  },
  {
    termino: "Fecha y hora",
    definicion: "Cuándo se cometió la infracción según la denuncia. Debe ser una fecha y hora concretas.",
    porQueImporta: "Sin fecha y hora no hay forma de contrastar la denuncia (por ejemplo, con el tacógrafo, el GPS o testigos). Además, la fecha marca el inicio de los plazos de prescripción.",
    queRevisar: "Que la fecha sea coherente (no futura, no imposible) y que la hora permita verificar dónde estabas.",
  },
  {
    termino: "Matrícula",
    definicion: "La matrícula del vehículo supuestamente infractor. En denuncias con foto, debe coincidir con la de la imagen.",
    porQueImporta: "Una matrícula errónea o ilegible invalida la identificación del vehículo. Es un defecto de forma clásico.",
    queRevisar: "Que tu matrícula esté bien escrita, letra por letra. Un solo carácter erróneo basta para recurrir.",
  },
  {
    termino: "Titular del vehículo",
    definicion: "La persona a cuyo nombre está registrado el vehículo en la DGT. Es quien recibe la notificación si no se identifica al conductor.",
    porQueImporta: "El titular tiene la obligación de identificar al conductor cuando se lo requieren. Si no lo hace, le cae una multa propia e independiente: el doble de la original si esta era leve, y el triple si era grave o muy grave (art. 81.2 de la Ley de Tráfico).",
    queRevisar: "Si no eras tú quien conducía, el requerimiento de identificación debe llegarte correctamente y en plazo.",
  },
  {
    termino: "Identificación del conductor",
    definicion: "El trámite por el que el titular del vehículo comunica quién conducía en el momento de la infracción. La Administración lo requiere por carta con un plazo de 20 días naturales.",
    porQueImporta: "No identificar al conductor es una infracción independiente y grave. Pero el requerimiento debe estar bien notificado: si no te llegó, no te pueden sancionar por no identificar.",
    queRevisar: "Que el requerimiento te llegara de verdad (no vale un intento fallido sin más) y que el plazo de 20 días se respetara.",
  },
  {
    termino: "Notificación",
    definicion: "El acto por el que la Administración te comunica oficialmente la denuncia. Puede ser en mano (si te paran), por correo certificado, en tu DEV o por edictos en el TEU si no te localizan.",
    porQueImporta: "Una notificación defectuosa es uno de los motivos de recurso más potentes: si no te notificaron bien, los plazos no empiezan a contar y el procedimiento puede caducar.",
    queRevisar: "Cómo te notificaron, cuándo y si se cumplieron los intentos legales antes de pasar a edictos.",
  },
  {
    termino: "Plazo de alegaciones (20 días naturales)",
    definicion: "El tiempo que tienes para presentar alegaciones o pruebas desde que te notifican la denuncia: 20 días naturales (cuentan fines de semana y festivos).",
    porQueImporta: "Es tu primera y mejor oportunidad para defenderte. Si se te pasa el plazo sin alegar ni pagar, el procedimiento sigue y pierdes la opción del descuento.",
    queRevisar: "Calcula bien los 20 días desde la fecha de notificación efectiva, no desde la fecha de la infracción.",
  },
  {
    termino: "Pronto pago (descuento del 50 %)",
    definicion: "Si pagas dentro de los 20 días naturales desde la notificación, la multa se reduce a la mitad. Pero ojo: pagar implica aceptar la sanción y renunciar a recurrir.",
    porQueImporta: "Es la trampa más cara del sistema: el descuento te ahorra dinero a corto plazo, pero cierra para siempre la puerta al recurso, incluso si la multa era anulable.",
    queRevisar: "Antes de pagar, analiza si la multa tiene defectos. Si es recurrible, el recurso te puede salir gratis; el pago, nunca se devuelve.",
  },
  {
    termino: "Recurso de reposición",
    definicion: "El recurso administrativo que se presenta ante el mismo órgano que impuso la sanción, en el plazo de un mes desde la resolución sancionadora.",
    porQueImporta: "Es la vía ordinaria para impugnar la multa una vez dictada la resolución. Es gratuito y no necesitas abogado.",
    queRevisar: "Que presentes el recurso en plazo y ante el órgano correcto (Jefatura de Tráfico, ayuntamiento u organismo que sancionó).",
  },
  {
    termino: "Vía ejecutiva y apremio",
    definicion: "Si no pagas ni recurres, la deuda pasa a vía ejecutiva: se añade un recargo (del 5 % al 20 %) y la Administración puede embargarte cuentas, nómina o bienes.",
    porQueImporta: "Ignorar una multa no la hace desaparecer: la hace más cara. Pero la vía ejecutiva también tiene plazos y requisitos que deben cumplirse.",
    queRevisar: "Si te llega una providencia de apremio, comprueba que la notificación original fue correcta: un defecto ahí anula todo lo posterior.",
  },
  {
    termino: "Prescripción",
    definicion: "El tiempo máximo que tiene la Administración para sancionarte desde que se cometió la infracción: 3 meses para las leves y 6 meses para las graves y muy graves.",
    porQueImporta: "Si la Administración tarda más de ese plazo en notificarte la denuncia, la infracción prescribe y no te pueden sancionar.",
    queRevisar: "Cuenta los meses desde la fecha de la infracción hasta la fecha de la primera notificación válida.",
  },
  {
    termino: "Caducidad del procedimiento",
    definicion: "El procedimiento sancionador debe resolverse en un año desde su inicio. Si la Administración no dicta resolución en ese plazo, el procedimiento caduca.",
    porQueImporta: "Es distinto de la prescripción: aquí el procedimiento ya empezó, pero la Administración se durmió. La caducidad no impide que inicien otro procedimiento si la infracción no ha prescrito.",
    queRevisar: "La fecha de inicio del procedimiento y si hubo resolución expresa antes del año.",
  },
  {
    termino: "DEV (Dirección Electrónica Vial)",
    definicion: "El buzón electrónico obligatorio para personas jurídicas y voluntario para personas físicas, donde la DGT notifica las multas.",
    porQueImporta: "Si tienes DEV activada, las notificaciones te llegan ahí y los plazos empiezan a contar aunque no abras el correo. Mucha gente no lo sabe y se le pasan los plazos.",
    queRevisar: "Si eres autónomo o empresa, casi seguro tienes DEV obligatoria. Revísala periódicamente en la sede electrónica de la DGT.",
  },
];

const TABLA_RESUMEN: { pone: string; significa: string; revisar: string }[] = [
  { pone: "TIP 12345", significa: "Número del agente que te denuncia", revisar: "Que exista y sea legible; sin TIP no hay presunción de veracidad" },
  { pone: "Art. 18.1 RGC", significa: "El artículo concreto que supuestamente infringiste", revisar: "Que el artículo exista y encaje con los hechos descritos" },
  { pone: "Hechos: circulaba...", significa: "Lo que dice el agente que hiciste", revisar: "Que sean concretos (qué, dónde, cuándo); lo vago es recurrible" },
  { pone: "Calificación: grave", significa: "Gravedad legal: 200 € salvo importe específico", revisar: "Que la calificación cuadre con el precepto y el importe" },
  { pone: "Importe: 200 € (100 € pronto pago)", significa: "Lo que te exigen, y con descuento si pagas en 20 días", revisar: "Que el importe sea el legal; pagar cierra el recurso" },
  { pone: "Plazo: 20 días naturales", significa: "Tiempo para alegar o pagar con descuento", revisar: "Cuenta desde la notificación efectiva, no desde la infracción" },
  { pone: "Requerimiento de identificación", significa: "Te piden que digas quién conducía", revisar: "Que te llegara bien; si no, no te pueden sancionar por no identificar" },
  { pone: "Vía ejecutiva", significa: "No pagaste ni recurriste: ahora con recargo y posible embargo", revisar: "Que la notificación original fuera válida; si no, todo se anula" },
];

const FAQS = [
  {
    q: "¿Qué significa TIP en una multa?",
    a: "TIP son las siglas de Tarjeta de Identidad Profesional: el número que identifica al agente que formula la denuncia. Es obligatorio que aparezca en la denuncia. Si falta o es ilegible, la denuncia pierde la presunción de veracidad de las declaraciones del agente y es recurrible por defecto de forma.",
  },
  {
    q: "¿Qué es el precepto infringido?",
    a: "Es el artículo concreto de la norma que supuestamente has vulnerado (por ejemplo, «Art. 18.1 RGC»). Debe existir y corresponderse con los hechos descritos en la denuncia. Puedes copiarlo en nuestro buscador de infracciones para ver qué dice la norma, el importe y los puntos.",
  },
  {
    q: "¿Qué hago si los hechos descritos en la denuncia no son correctos?",
    a: "Es uno de los motivos de recurso más sólidos. Presenta alegaciones dentro de los 20 días naturales explicando qué parte de los hechos es incorrecta y aporta pruebas (fotos, testigos, tickets, GPS). Las descripciones genéricas o copiadas también son impugnables.",
  },
  {
    q: "¿Me conviene el pronto pago del 50 %?",
    a: "Depende. El descuento te ahorra la mitad, pero pagar implica aceptar la sanción y renunciar para siempre al recurso. Antes de pagar, analiza la multa: si tiene defectos de forma, recurrir te puede salir gratis y anular la sanción completa.",
  },
  {
    q: "No me llegó la notificación de la multa, ¿qué pasa?",
    a: "Si la notificación fue defectuosa (no se hicieron los intentos legales, no se publicó correctamente en el TEU), los plazos no empezaron a contar y el procedimiento puede ser nulo. Revisa cómo te notificaron: es uno de los defectos que más multas anula.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "Glosario de tu multa: qué significa cada término de la denuncia",
      "url": "https://recurretumulta.online/glosario-multa",
      "description": "Diccionario en lenguaje claro de todos los términos de una multa de tráfico: TIP, precepto infringido, hechos denunciados, pronto pago, recurso de reposición y más.",
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
        { "@type": "ListItem", "position": 2, "name": "Glosario de tu multa", "item": "https://recurretumulta.online/glosario-multa" },
      ],
    },
  ],
};

export default function GlosarioMultaPage() {
  const [busqueda, setBusqueda] = useState("");

  useSeo({
    title: "Glosario de multas 2026",
    description: "¿Qué significa TIP, precepto infringido o pronto pago en tu multa? Diccionario en lenguaje claro de todos los términos de una denuncia de tráfico y qué revisar en cada uno.",
    canonical: "/glosario-multa",
    schema: jsonLd,
  });

  const filtrados = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    if (!q) return TERMINOS;
    return TERMINOS.filter(
      (t) =>
        t.termino.toLowerCase().includes(q) ||
        t.definicion.toLowerCase().includes(q)
    );
  }, [busqueda]);

  return (
    <div className="min-h-screen bg-slate-50">
      <SharedNavbar />
      <div className="pt-[57px]">
        {/* Hero animado estilo C3: DriveInImage + gradientes oscuros + toque rojo */}
        <div className="relative overflow-hidden">
          <DriveInImage src="/media/glosario-multa.webp" alt="Lupa sobre una denuncia de tráfico con términos legales resaltados" eager={true} className="absolute inset-0" imgClassName="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
          <CosaEnBanner />
          <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 space-y-4">
            <motion.nav initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-white/60">
              <Link to="/" className="hover:text-white">Inicio</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/40">Glosario de tu multa</span>
            </motion.nav>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}>
              <span className="inline-flex items-center gap-2 bg-red-600 border-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-red-950/50">
                <BookOpen className="w-3.5 h-3.5" /> Glosario DGT
              </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
              Glosario de tu multa: <span className="text-red-400">qué significa cada término</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }} className="text-white/80 text-sm md:text-base leading-relaxed">
              Las multas están escritas en jerga administrativa a propósito: cuanto menos entiendas, antes pagas.
              Aquí tienes cada término de la denuncia explicado en lenguaje claro, por qué importa para recurrir y qué debes revisar en cada uno.
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.34 }} className="text-xs text-white/60 pt-1">
              Por <strong className="text-white/80">Daniel</strong>, fundador y responsable de contenidos · Revisado en octubre de 2026
            </motion.p>
          </div>
        </div>
        <main className="max-w-4xl mx-auto px-4 pt-8 pb-16">
          <h2 className="text-2xl font-bold mb-4">Busca cualquier término de tu multa</h2>
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="search"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Ej: TIP, precepto, pronto pago…"
            aria-label="Buscar término del glosario"
            className="w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="space-y-4 mb-12">
          {filtrados.map((t) => (
            <article key={t.termino} className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6">
              <h3 className="text-lg font-bold flex items-center gap-2 mb-2">
                <BookOpen className="h-5 w-5 text-red-600 shrink-0" />
                {t.termino}
              </h3>
              <p className="text-slate-600 mb-3">{t.definicion}</p>
              <p className="text-sm mb-2"><strong className="text-slate-800">Por qué importa para recurrir: </strong><span className="text-slate-600">{t.porQueImporta}</span></p>
              <p className="text-sm bg-amber-50 border border-amber-200 rounded-xl p-3 flex gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Qué revisar: </strong>{t.queRevisar}</span>
              </p>
            </article>
          ))}
          {filtrados.length === 0 && (
            <p className="text-slate-500 text-center py-8">No hemos encontrado ese término. Prueba con otra palabra, o usa el análisis gratuito: sube tu multa y te explicamos cada campo.</p>
          )}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Tu multa, traducida: lo que pone, lo que significa y qué revisar</h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 mb-12">
          <table className="w-full text-sm bg-white">
            <thead>
              <tr className="bg-slate-900 text-white text-left">
                <th className="p-3 font-bold">Lo que pone en tu multa</th>
                <th className="p-3 font-bold">Lo que significa</th>
                <th className="p-3 font-bold">Qué revisar</th>
              </tr>
            </thead>
            <tbody>
              {TABLA_RESUMEN.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="p-3 font-semibold text-slate-800">{r.pone}</td>
                  <td className="p-3 text-slate-600">{r.significa}</td>
                  <td className="p-3 text-slate-600">{r.revisar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Sigue aprendiendo</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-12">
          <li><Link to="/buscador-codigo-multa/" className="text-red-600 hover:underline font-medium">Buscador de infracciones por código</Link>: copia el precepto de tu multa y descubre el importe, los puntos y la base legal.</li>
          <li><Link to="/guias/vicios-forma/" className="text-red-600 hover:underline font-medium">Guía de vicios de forma</Link>: los defectos que más multas anulan.</li>
          <li><Link to="/guias/prescripcion/" className="text-red-600 hover:underline font-medium">Guía de prescripción y caducidad</Link>: cuándo la Administración llega tarde.</li>
          <li><Link to="/metodologia/" className="text-red-600 hover:underline font-medium">Nuestra metodología</Link>: cómo analiza la IA tu denuncia, con total transparencia.</li>
        </ul>

              <figure className="my-8">
        <img src="/media/glosario-multa-faq.webp" alt="Persona consultando con una lupa los términos legales de una denuncia de tráfico" className="w-full rounded-3xl border border-slate-200" loading="lazy" />
      </figure>

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
          <h2 className="text-2xl font-bold mb-3">¿Ya entiendes tu multa? Ahora analízala</h2>
          <p className="text-slate-300 mb-6">Sube tu denuncia y nuestra IA buscará defectos de forma en segundos. Gratis.</p>
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
