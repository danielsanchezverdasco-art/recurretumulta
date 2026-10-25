import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { DriveInImage } from "@/components/motion.tsx";
import { Wrench, ArrowRight } from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import { HERRAMIENTAS, CATEGORIAS_HERRAMIENTAS } from "@/lib/herramientas-data.ts";
import MonoEscondido from "@/components/caza-monos/MonoEscondido.tsx";
import { fijoId } from "@/components/caza-monos/CazaMonosContext.tsx";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";
const IMAGENES_HERRAMIENTAS: Record<string, { src: string; alt: string }> = { "calculadora-kw-a-cv": { src: "/media/file_tgzAeLTWo9YUmREyFcFY7KUO.webp", alt: "Motor de coche con el capó abierto en un taller" }, "calculadora-consumo-camper": { src: "/media/file_I4VpdmABZm54OdZBdh1QX85P.webp", alt: "Furgoneta camper con paneles solares en la montaña" }, "equivalencia-neumaticos-itv": { src: "/media/file_8AtiQzEjtKs50s0TAGCRawfJ.webp", alt: "Neumático de coche en un taller" }, "valor-venal-vehiculo": { src: "/media/file_9Jr33mXoLjt87lZ03yH1rnnq.webp", alt: "Tasador inspeccionando un coche de segunda mano" }, "buscador-codigo-multa": { src: "/media/buscador-infracciones.webp", alt: "Denuncia de tráfico sobre el salpicadero de un coche con una lupa señalando el código de la infracción" }, "calculadora-autonomia-real": { src: "/media/calculadora-autonomia-real.webp", alt: "Coche eléctrico cargando en un cargador rápido de autopista" }, "calculadora-etiqueta-dgt": { src: "/media/calculadora-etiqueta-dgt.webp", alt: "Etiqueta medioambiental de la DGT pegada en el parabrisas de un coche" }, "senales-trafico": { src: "/media/senales-trafico.webp", alt: "Señales de tráfico españolas junto a una carretera" }, "mejor-coche-por-presupuesto": { src: "/media/mejor-coche-por-presupuesto.webp", alt: "Fila de coches nuevos con etiquetas de precio en un concesionario" }, "comparador-coches": { src: "/media/comparador-coches.webp", alt: "Dos coches frente a frente en una comparativa" }, "comparador-motos": { src: "/media/comparador-motos.webp", alt: "Dos motos eléctricas una junto a la otra en comparativa" }, "comparador-patinetes": { src: "/media/comparador-patinetes.webp", alt: "Patinetes eléctricos alineados en fila" }, "comparador-garantia-bateria": { src: "/media/comparador-garantia-bateria.webp", alt: "Coche eléctrico en un elevador mostrando los bajos con la batería" }, "rankings": { src: "/media/rankings.webp", alt: "Coches en fila sobre un podio de clasificación" }, "calendario-lanzamientos-2026-2027": { src: "/media/calendario-lanzamientos.webp", alt: "Coches tapados con lonas en la presentación de un salón del automóvil" }, "el-dato-del-dia": { src: "/media/el-dato-del-dia.webp", alt: "Primer plano del cuadro de instrumentos de un coche con el velocímetro destacado" }, "la-pregunta-del-dia": { src: "/media/la-pregunta-del-dia.webp", alt: "Conductor pensativo apoyado en el techo de su coche" }, "calculadora-alcoholemia": { src: "/media/calculadora-alcoholemia.webp", alt: "Control de alcoholemia de la Guardia Civil de Tráfico por la noche" }, "herramientas/contrato-compraventa-vehiculo": { src: "/media/contrato-compraventa-vehiculo.webp", alt: "Dos personas firmando un contrato de compraventa de coche con las llaves del vehículo sobre la mesa" } };
// Zona de imagen de la tarjeta: siempre ocupa el mismo alto (h-40) para que todas las
// tarjetas queden uniformes. Si una herramienta aún no tiene foto, se muestra un
// bloque degradado con icono en lugar de dejar un hueco vacío.
function TarjetaImagenHerramienta({ slug }: { slug: string }) {
  const img = IMAGENES_HERRAMIENTAS[slug];
  if (img) {
    return <img src={img.src} alt={img.alt} className="w-full h-40 object-cover rounded-xl mb-4" loading="lazy" />;
  }
  return (
    <div className="w-full h-40 rounded-xl mb-4 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center" aria-hidden="true">
      <Wrench className="w-10 h-10 text-red-500/70" />
    </div>
  );
}
export default function HerramientasIndexPage() {
  useSeo({
    title: "Herramientas gratis para conductores 2026",
    description: "20 herramientas gratuitas para conductores: calculadoras (potencia, consumo, etiqueta DGT, alcoholemia), comparadores de coches, motos y patinetes, contrato de compraventa y buscador de multas.",
    canonical: "/herramientas",
    keywords: [
      "herramientas para conductores",
      "calculadora kw a cv",
      "calculadora consumo camper",
      "equivalencia neumaticos itv",
      "valor venal vehiculo",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Herramientas gratuitas para conductores",
      itemListElement: HERRAMIENTAS.map((h, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: h.nombre,
        url: `https://recurretumulta.online/${h.slug}`,
      })),
    },
  });

  return (
    <div className="min-h-screen bg-white">
      <SharedNavbar />
      <main className="pt-[57px]">
        <div className="relative overflow-hidden">
          <DriveInImage
            src="/media/hero-herramientas.webp"
            alt="Capó abierto de un coche en un taller mecánico, con un juego de herramientas de mecánico ordenadas junto al motor"
            eager={true}
            className="absolute inset-0"
            imgClassName="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
          {/* Banner corto: Cosa reducido para no tapar el titular */}
          <CosaEnBanner imgClassName="h-28 w-auto" />
          <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 text-center space-y-4">
            <motion.nav initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} aria-label="Migas de pan" className="flex items-center justify-center gap-1.5 text-xs text-white/60">
              <Link to="/" className="hover:text-white">Inicio</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/80">Herramientas</span>
            </motion.nav>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}>
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1.5">
                <Wrench className="w-3.5 h-3.5 text-red-400" />
                <span className="text-xs text-red-300 font-bold uppercase tracking-widest">Herramientas gratis</span>
              </div>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
              Herramientas para <span className="text-red-400">conductores</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }} className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              Calculadoras y utilidades gratuitas relacionadas con tu vehículo y la normativa de tráfico.
            </motion.p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-10">           <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
            Herramientas gratuitas para conductores
            {/* Caza de monos: obrero entre las herramientas */}
            <MonoEscondido
              id={fijoId("herramientas")}
              pose="mono-trepando"
              size={32}
              titulo="¡Un mono trepando entre las herramientas! Haz clic para cazarlo 🦍"
            />
          </h2>           <p className="text-gray-600 text-sm leading-relaxed mb-4">             Además del análisis gratuito de multas con IA, aquí tienes calculadoras y herramientas gratuitas para el día a día del conductor: convertir la potencia de tu coche entre kW y CV, calcular el consumo energético de tu camper y saber qué batería necesitas, comprobar si unos neumáticos son equivalentes para pasar la ITV, estimar el valor venal de un vehículo, buscar cualquier infracción por su código para conocer su importe, puntos y base legal, estimar la autonomía real de un eléctrico, averiguar la etiqueta DGT que le corresponde a tu coche, encontrar el mejor coche según tu presupuesto, comparar coches y motos lado a lado con el ranking de garantías de batería, consultar qué coches llegan en 2026-2027 y repasar el dato y la pregunta del día. Todas son gratuitas, funcionan al instante y no requieren registro.           </p>           <p className="text-gray-600 text-sm leading-relaxed mb-8">             Cada herramienta incluye una explicación breve, preguntas frecuentes y enlaces a la normativa aplicable. Úsalas junto al <Link to="/" className="text-red-600 hover:underline font-medium">análisis gratuito de multas</Link> para tener toda la información antes de decidir si recurrir una sanción.           </p>
          <div className="space-y-10">
            {CATEGORIAS_HERRAMIENTAS.map((cat) => (
              <section key={cat}>
                <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-red-600 rounded-full inline-block" />
                  {cat}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {HERRAMIENTAS.filter((h) => h.categoria === cat).map((h) => (
              <Link
                key={h.slug}
                to={`/${h.slug}`}
                className="block group border border-gray-200 rounded-2xl p-5 hover:border-red-300 hover:shadow-sm transition-all bg-white"
              >
              <TarjetaImagenHerramienta slug={h.slug} />
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <p className="font-black text-gray-900 group-hover:text-red-600 transition-colors">{h.nombre}</p>
                    <p className="text-sm text-gray-500">{h.descripcionCorta}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-red-500 shrink-0 mt-1 transition-colors" />
                </div>
              </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

                <figure className="mb-8">
  <video src="/media/herramientas.mp4" className="w-full rounded-3xl border border-slate-200" muted autoPlay loop playsInline preload="metadata" aria-label="Vídeo: coche circulando por una autopista española al atardecer" />
  <figcaption className="text-sm text-slate-500 mt-2 text-center">Vídeo ilustrativo: herramientas gratuitas para el día a día del conductor.</figcaption>
</figure>
<div className="mt-12">           <h2 className="text-2xl font-black text-gray-900 mb-4">Guías y contenido relacionado</h2>           <p className="text-gray-600 text-sm leading-relaxed mb-6">             Para sacarles más partido, combínalas con nuestras guías: la <Link to="/guias/itv-documentacion/" className="text-red-600 hover:underline font-medium">guía de ITV, neumáticos y documentación</Link> (equivalencia y multas por neumáticos), la <Link to="/guias/radares/" className="text-red-600 hover:underline font-medium">guía de multas de radar</Link> (para usar junto al buscador de infracciones) y el <Link to="/blog/" className="text-red-600 hover:underline font-medium">blog</Link> con más de 60 artículos sobre multas de tráfico. Si estás pensando en cambiar de coche o de moto, mírate también el <Link to="/comparador-coches/" className="text-red-600 hover:underline font-medium">comparador de coches</Link>, el <Link to="/mejor-coche-por-presupuesto/" className="text-red-600 hover:underline font-medium">recomendador por presupuesto</Link>, el <Link to="/comparador-garantia-bateria/" className="text-red-600 hover:underline font-medium">ranking de garantías de batería</Link> y el <Link to="/comparador-motos/" className="text-red-600 hover:underline font-medium">comparador de motos eléctricas</Link>.           </p>           <h2 className="text-2xl font-black text-gray-900 mb-6">Preguntas frecuentes</h2>           <div className="space-y-4">             <div className="border border-gray-200 rounded-2xl p-5 bg-white">               <h3 className="font-bold text-gray-900 mb-2">¿Las herramientas de RecurreTuMulta son gratis?</h3>               <p className="text-sm text-gray-600 leading-relaxed">Sí, todas las herramientas de esta página son gratuitas y no requieren registro: el conversor de kW a CV, la calculadora de consumo para camper, la equivalencia de neumáticos para la ITV, la estimación del valor venal del vehículo, el buscador de infracciones por código, la calculadora de autonomía real, la calculadora de etiqueta DGT, el recomendador por presupuesto, los comparadores de coches y de motos, el ranking de garantías de batería, los rankings de coches, el calendario de lanzamientos 2026-2027, el dato del día y la pregunta del día.</p>             </div>             <div className="border border-gray-200 rounded-2xl p-5 bg-white">               <h3 className="font-bold text-gray-900 mb-2">¿Para qué sirve el conversor de kW a CV?</h3>               <p className="text-sm text-gray-600 leading-relaxed">El conversor de kW a CV traduce la potencia de tu vehículo entre kilovatios (la unidad oficial en la ficha técnica) y caballos de vapor (la unidad coloquial). Es útil para entender la documentación del coche y para comprobar datos en una denuncia.</p>             </div>             <div className="border border-gray-200 rounded-2xl p-5 bg-white">               <h3 className="font-bold text-gray-900 mb-2">¿Cómo sé si unos neumáticos son equivalentes para la ITV?</h3>               <p className="text-sm text-gray-600 leading-relaxed">Un neumático es equivalente si su diámetro exterior no varía más de un 3 % respecto al neumático homologado en la ficha técnica. La herramienta de equivalencia de neumáticos calcula esa diferencia al instante para que sepas si pasarás la ITV sin problemas.</p>             </div>             <div className="border border-gray-200 rounded-2xl p-5 bg-white">               <h3 className="font-bold text-gray-900 mb-2">¿Qué es el valor venal de un vehículo?</h3>               <p className="text-sm text-gray-600 leading-relaxed">El valor venal es el valor de mercado de un vehículo usado según las tablas oficiales de Hacienda, que se publica cada año en el BOE. Se usa para calcular impuestos como el de transmisiones patrimoniales y como referencia en indemnizaciones. La herramienta te da una estimación orientativa.</p>             </div>           </div>         </div>         <script type="application/ld+json">           {JSON.stringify({             "@context": "https://schema.org",             "@type": "FAQPage",             "mainEntity": [               { "@type": "Question", "name": "¿Las herramientas de RecurreTuMulta son gratis?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, todas las herramientas de esta página son gratuitas y no requieren registro: el conversor de kW a CV, la calculadora de consumo para camper, la equivalencia de neumáticos para la ITV, la estimación del valor venal del vehículo, el buscador de infracciones por código, la calculadora de autonomía real, la calculadora de etiqueta DGT, el recomendador por presupuesto, los comparadores de coches y de motos, el ranking de garantías de batería, los rankings de coches, el calendario de lanzamientos 2026-2027, el dato del día y la pregunta del día." } },               { "@type": "Question", "name": "¿Para qué sirve el conversor de kW a CV?", "acceptedAnswer": { "@type": "Answer", "text": "El conversor de kW a CV traduce la potencia de tu vehículo entre kilovatios (la unidad oficial en la ficha técnica) y caballos de vapor (la unidad coloquial). Es útil para entender la documentación del coche y para comprobar datos en una denuncia." } },               { "@type": "Question", "name": "¿Cómo sé si unos neumáticos son equivalentes para la ITV?", "acceptedAnswer": { "@type": "Answer", "text": "Un neumático es equivalente si su diámetro exterior no varía más de un 3 % respecto al neumático homologado en la ficha técnica. La herramienta de equivalencia de neumáticos calcula esa diferencia al instante para que sepas si pasarás la ITV sin problemas." } },               { "@type": "Question", "name": "¿Qué es el valor venal de un vehículo?", "acceptedAnswer": { "@type": "Answer", "text": "El valor venal es el valor de mercado de un vehículo usado según las tablas oficiales de Hacienda, que se publica cada año en el BOE. Se usa para calcular impuestos como el de transmisiones patrimoniales y como referencia en indemnizaciones. La herramienta te da una estimación orientativa." } }             ]           })}         </script><SharedFooter />
      </main>
    </div>
  );
}
