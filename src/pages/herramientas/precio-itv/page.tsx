import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";
import { useSeo } from "@/hooks/use-seo.ts";
import { DriveInImage } from "@/components/motion.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import {
  PRECIOS_ITV_2026,
  ANO_TARIFAS_ITV,
  TASA_TRAFICO_2026,
  formatoEuros,
  type TarifaITVTerritorio,
} from "@/lib/precios-itv.ts";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Precio de la ITV por comunidad autónoma 2026",
      url: "https://recurretumulta.online/herramientas/precio-itv",
      applicationCategory: "UtilityApplication",
      operatingSystem: "All",
      offers: { "@type": "Offer", price: "0", "priceCurrency": "EUR", availability: "https://schema.org/InStock" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Por qué la ITV no cuesta lo mismo en toda España?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La inspección está regulada a nivel estatal por el Real Decreto 920/2017, pero las tarifas son competencia de cada comunidad autónoma. Por eso el mismo turismo puede pagar 21,19 € en Mallorca y 59,46 € en Euskadi.",
          },
        },
        {
          "@type": "Question",
          name: "¿Los precios incluyen la tasa de Tráfico?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Los precios mostrados son finales en caja: incluyen el IVA y la tasa de la DGT (4,18 € en 2026).",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo pasar la ITV en otra comunidad autónoma?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. La normativa reconoce la libertad para elegir cualquier estación ITV del territorio nacional, sea cual sea tu domicilio o dónde se matriculó el vehículo.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cada cuánto tiene que pasar la ITV un turismo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Los turismos están exentos los primeros 4 años, la pasan cada 2 años entre los 4 y los 10 años, y cada año a partir de los 10 años de antigüedad.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué multa hay por circular sin la ITV en vigor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Circular con la ITV caducada o desfavorable es una infracción grave sancionada con 200 € (100 € con pronto pago) y puede conllevar la inmovilización del vehículo.",
          },
        },
        {
          "@type": "Question",
          name: "¿La segunda inspección es gratis si suspendo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende de la comunidad y del plazo: en muchas estaciones la reinspección es gratuita si vuelves a la misma estación dentro del plazo fijado; en otras se aplica un descuento o se cobra de nuevo.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://recurretumulta.online/" },
        { "@type": "ListItem", position: 2, name: "Herramientas", item: "https://recurretumulta.online/herramientas" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Precio de la ITV por comunidad",
          item: "https://recurretumulta.online/herramientas/precio-itv",
        },
      ],
    },
  ],
};

function precioTexto(t: TarifaITVTerritorio, comb: "gasolina" | "diesel"): string {
  const rango = comb === "gasolina" ? t.rangoGasolina : t.rangoDiesel;
  const v = comb === "gasolina" ? t.gasolina : t.diesel;
  if (rango) return `${formatoEuros(rango[0])} – ${formatoEuros(rango[1])}`;
  if (v == null) return "Consultar";
  return formatoEuros(v);
}

export default function PrecioItvPage() {
  useSeo({
    title: "Precio de la ITV por comunidad 2026",
    description:
      "Cuánto cuesta pasar la ITV de tu coche en 2026 según tu comunidad autónoma. Precios reales con IVA y tasa incluidos, tabla comparativa y preguntas frecuentes.",
    canonical: "/herramientas/precio-itv",
    image: "/media/itv-documentacion-revision.webp",
    keywords: ["precio ITV 2026", "cuánto cuesta la ITV", "ITV por comunidades", "tarifa ITV turismo"],
  });

  const [territorioId, setTerritorioId] = useState("madrid");
  const [combustible, setCombustible] = useState<"gasolina" | "diesel">("gasolina");
  const sel = PRECIOS_ITV_2026.find((t) => t.id === territorioId) ?? PRECIOS_ITV_2026[0];
  const valor = combustible === "gasolina" ? sel.gasolina : sel.diesel;

  return (
    <div className="min-h-screen bg-white">
      <SharedNavbar />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="pt-[57px]">
        <div className="relative overflow-hidden">
          <DriveInImage
            src="/media/itv-documentacion-revision.webp"
            alt="Coche pasando la inspección técnica de vehículos (ITV) en una estación"
            eager={true}
            className="absolute inset-0"
            imgClassName="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
          <CosaEnBanner />
          <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 space-y-4">
            <motion.nav
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              aria-label="Migas de pan"
              className="flex items-center gap-1.5 text-xs text-white/60"
            >
              <Link to="/" className="hover:text-white">Inicio</Link>
              <span aria-hidden="true">/</span>
              <Link to="/herramientas/" className="hover:text-white">Herramientas</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/40 truncate max-w-[200px]">Precio de la ITV</span>
            </motion.nav>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}>
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1.5">
                <span className="text-xs text-red-300 font-bold uppercase tracking-widest">Herramienta gratuita · Sin registro</span>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg"
            >
              Cuánto cuesta la ITV en tu comunidad ({ANO_TARIFAS_ITV})
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="text-white/80 text-sm md:text-base leading-relaxed"
            >
              El precio de la ITV lo fija cada comunidad autónoma y puede variar más de un 200 %.
              Elige la tuya y descubre lo que pagarás, con IVA y tasa de Tráfico incluidos.
            </motion.p>
          </div>
        </div>
      </div>

      <main className="pt-8 pb-16 px-4 max-w-2xl mx-auto space-y-4 sm:space-y-6">
        <section className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 sm:p-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="itv-ccaa" className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">
                Comunidad autónoma
              </label>
              <select
                id="itv-ccaa"
                value={territorioId}
                onChange={(e) => setTerritorioId(e.target.value)}
                className="w-full rounded-xl border border-slate-300 p-3 text-base font-semibold focus:ring-2 focus:ring-green-500 outline-none bg-white"
              >
                {PRECIOS_ITV_2026.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.nombre}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="itv-comb" className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">
                Combustible
              </label>
              <select
                id="itv-comb"
                value={combustible}
                onChange={(e) => setCombustible(e.target.value as "gasolina" | "diesel")}
                className="w-full rounded-xl border border-slate-300 p-3 text-base font-semibold focus:ring-2 focus:ring-green-500 outline-none bg-white"
              >
                <option value="gasolina">Turismo gasolina</option>
                <option value="diesel">Turismo diésel</option>
              </select>
            </div>
          </div>

          <div className="mt-6 bg-slate-50 rounded-2xl border border-slate-200 p-6 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">
              Precio en {sel.nombre} · {combustible === "gasolina" ? "gasolina" : "diésel"}
            </p>
            <p className="text-4xl font-black text-green-700 font-mono">{precioTexto(sel, combustible)}</p>
            {sel.nota && <p className="mt-3 text-sm text-slate-600 leading-relaxed">{sel.nota}</p>}
            {sel.fuente && <p className="mt-2 text-xs text-slate-400">Fuente: {sel.fuente}</p>}
            {valor == null && (
              <p className="mt-3 text-sm text-slate-600">
                No tenemos una tarifa oficial verificada para {sel.nombre} en {ANO_TARIFAS_ITV}.
              </p>
            )}
          </div>
          <p className="text-center text-xs text-slate-400 mt-4">
            Precios finales con IVA y tasa de Tráfico ({formatoEuros(TASA_TRAFICO_2026)}) incluidos.
            Pueden variar según la estación.
          </p>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-2">Tabla comparativa por comunidades ({ANO_TARIFAS_ITV})</h2>
          <p className="text-sm text-slate-500 mb-6">
            La misma inspección, facturas muy distintas: del mínimo al máximo hay más de un 200 % de diferencia.
          </p>
          <div className="overflow-x-auto -mx-2 px-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wide text-slate-500 border-b border-slate-200">
                  <th className="py-3 pr-3 font-bold">Territorio</th>
                  <th className="py-3 pr-3 font-bold text-right">Gasolina</th>
                  <th className="py-3 font-bold text-right">Diésel</th>
                </tr>
              </thead>
              <tbody>
                {PRECIOS_ITV_2026.map((t) => (
                  <tr key={t.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                    <td className="py-3 pr-3 font-semibold text-slate-800">{t.nombre}</td>
                    <td className="py-3 pr-3 text-right font-mono whitespace-nowrap">
                      {t.gasolina == null ? (
                        <span className="text-slate-400">Consultar</span>
                      ) : t.rangoGasolina ? (
                        <span title={t.nota}>desde {formatoEuros(t.gasolina)}</span>
                      ) : (
                        formatoEuros(t.gasolina)
                      )}
                    </td>
                    <td className="py-3 text-right font-mono whitespace-nowrap">
                      {t.diesel == null ? (
                        <span className="text-slate-400">Consultar</span>
                      ) : t.rangoDiesel ? (
                        <span title={t.nota}>desde {formatoEuros(t.diesel)}</span>
                      ) : (
                        formatoEuros(t.diesel)
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-4">
            Datos: estudio FACUA (sep-2026), BOA, BOPA, DOCV y comparativas de consejerías.
            Madrid y Murcia muestran precios medios (tarifas liberalizadas).
          </p>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-4">Por qué cambia tanto el precio</h2>
          <p className="text-slate-600 mb-4">
            La ITV está regulada a nivel estatal por el Real Decreto 920/2017: los controles
            (frenos, emisiones, luces, neumáticos) son los mismos en toda España. Lo que cambia
            es quién fija la tarifa: cada comunidad autónoma decide su modelo (gestión pública,
            concesiones o precios libres, como en Madrid y Murcia).
          </p>
          <p className="text-slate-600 mb-4">
            Recuerda que <strong>puedes pasar la ITV en cualquier estación del territorio nacional</strong>,
            aunque no sea la de tu domicilio. Si vives cerca de un límite autonómico, comparar
            tarifas puede ahorrarte unos cuantos euros.
          </p>
          <p className="text-slate-600">
            Más información en nuestra{" "}
            <Link to="/guias/itv-documentacion/" className="text-red-600 hover:underline font-medium">
              guía de ITV, neumáticos y documentación
            </Link>
            .
          </p>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-6">Preguntas frecuentes</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-bold mb-1">¿Por qué la ITV no cuesta lo mismo en toda España?</h3>
              <p className="text-slate-600">
                La inspección está regulada a nivel estatal por el Real Decreto 920/2017, pero las
                tarifas son competencia de cada comunidad autónoma. Por eso el mismo turismo puede
                pagar 21,19 € en Mallorca y 59,46 € en Euskadi.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-1">¿Los precios incluyen la tasa de Tráfico?</h3>
              <p className="text-slate-600">
                Sí. Los precios mostrados son finales en caja: incluyen el IVA y la tasa de la DGT
                ({formatoEuros(TASA_TRAFICO_2026)} en {ANO_TARIFAS_ITV}).
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-1">¿Puedo pasar la ITV en otra comunidad autónoma?</h3>
              <p className="text-slate-600">
                Sí. La normativa reconoce la libertad para elegir cualquier estación ITV del
                territorio nacional, sea cual sea tu domicilio o dónde se matriculó el vehículo.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-1">¿Cada cuánto tiene que pasar la ITV un turismo?</h3>
              <p className="text-slate-600">
                Los turismos están exentos los primeros 4 años, la pasan cada 2 años entre los 4 y
                los 10 años, y cada año a partir de los 10 años de antigüedad.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-1">¿Qué multa hay por circular sin la ITV en vigor?</h3>
              <p className="text-slate-600">
                Circular con la ITV caducada o desfavorable es una infracción grave sancionada con
                200 € (100 € con pronto pago) y puede conllevar la inmovilización del vehículo.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-1">¿La segunda inspección es gratis si suspendo?</h3>
              <p className="text-slate-600">
                Depende de la comunidad y del plazo: en muchas estaciones la reinspección es
                gratuita si vuelves a la misma estación dentro del plazo fijado; en otras se aplica
                un descuento o se cobra de nuevo.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-slate-900 text-white rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">¿Te ha llegado una multa?</h2>
          <p className="text-slate-300 mb-6">Analízala gratis con nuestra IA y descubre si tiene defectos recurribles.</p>
          <Link to="/" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition">
            Analizar mi multa
          </Link>
        </div>

        <nav className="bg-slate-100 rounded-3xl p-6 border border-slate-200">
          <h2 className="font-bold mb-4">Más herramientas y guías</h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <Link to="/herramientas/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">
              Todas las herramientas
            </Link>
            <Link to="/guias/itv-documentacion/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">
              Guía de ITV, neumáticos y documentación
            </Link>
            <Link to="/equivalencia-neumaticos-itv/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">
              Equivalencia de neumáticos e ITV
            </Link>
            <Link to="/buscador-codigo-multa/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">
              Buscador de infracciones por código
            </Link>
          </div>
        </nav>
      </main>
      <SharedFooter />
    </div>
  );
}
