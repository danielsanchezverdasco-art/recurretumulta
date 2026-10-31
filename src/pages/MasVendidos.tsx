// Sección "Más vendidos" (/comparador/mas-vendidos).
// Rankings mensuales de matriculaciones en España con CIFRAS REALES publicadas.
// Turismos: ANFAC/Faconauto/Ganvam. Motos: ANESDOR (vía MSI).
// Patinetes: sin registro oficial → aviso honesto, sin estimaciones.
// Datos en src/lib/mas-vendidos-data.ts. Si un periodo no tiene cifras, se muestra
// "datos no disponibles". Nunca se inventan cifras.

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftRight, Bike, Car, Trophy, Zap } from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import { fmtMiles } from "@/lib/formato.ts";
import { PageHero } from "@/components/motion.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import {
  ACUMULADO_COCHES_2026,
  ACUMULADO_MOTOS_2026,
  PERIODOS_COCHES,
  PERIODOS_MOTOS,
  type CategoriaMasVendidos,
  type ModeloVendido,
  type PeriodoVentas,
} from "@/lib/mas-vendidos-data.ts";

const DOMAIN = "https://recurretumulta.online";
const RUTA = "/comparador/mas-vendidos";


// Lectura del año calculada solo con las cifras de mas-vendidos-data.ts (sin datos añadidos).
const sumaMercado = (ps: PeriodoVentas[]) =>
  ps.reduce((a, p) => a + (p.totalMercado ?? 0), 0);
const mesesConTotal = (ps: PeriodoVentas[]) => ps.filter((p) => p.totalMercado != null);
const extremos = (ps: PeriodoVentas[]) => {
  const ordenados = [...mesesConTotal(ps)].sort(
    (x, y) => (y.totalMercado ?? 0) - (x.totalMercado ?? 0)
  );
  return { alto: ordenados[0], bajo: ordenados[ordenados.length - 1] };
};
const lideresPorModelo = (ps: PeriodoVentas[]) => {
  const cuenta: Record<string, number> = {};
  for (const p of ps) {
    const l = p.ranking[0]?.modelo;
    if (l) cuenta[l] = (cuenta[l] ?? 0) + 1;
  }
  return Object.entries(cuenta).sort((x, y) => y[1] - x[1]);
};
const mes = (p: PeriodoVentas) => p.etiqueta.split(" ")[0].toLowerCase();
const pct1 = (n: number) => (Math.round(n * 10) / 10).toFixed(1).replace(".", ",");

const MEDALLAS = ["🥇", "🥈", "🥉"];

const fmtUnidades = (u: number | null) =>
  u == null ? "n.d." : fmtMiles(u);

const CATEGORIAS: { id: CategoriaMasVendidos; etiqueta: string; icono: typeof Car }[] = [
  { id: "coches", etiqueta: "Coches", icono: Car },
  { id: "motos", etiqueta: "Motos", icono: Bike },
  { id: "patinetes", etiqueta: "Patinetes", icono: Zap },
];

function fichaUrl(cat: CategoriaMasVendidos, m: ModeloVendido): string | null {
  if (!m.fichaId) return null;
  if (cat === "coches") return `/coches/${m.fichaId}/`;
  if (cat === "motos") return `/motos/${m.fichaId}/`;
  return null;
}

const FAQS = [
  {
    q: "¿De dónde salen las cifras de este ranking?",
    a: "De las notas de prensa oficiales: ANFAC (junto a Faconauto y Ganvam) para turismos, y ANESDOR a través de MSI para motos y vehículos ligeros. Cada periodo indica su fuente concreta. No hay estimaciones ni cifras inventadas.",
  },
  {
    q: "¿Por qué algunos meses muestran «n.d.» o faltan puestos?",
    a: "Porque las patronales no siempre publican el desglose por modelo de todos los meses. Cuando no hay cifra oficial publicada, lo decimos claramente en lugar de rellenar con estimaciones.",
  },
  {
    q: "¿Por qué no hay ranking de patinetes más vendidos?",
    a: "Porque en España no existe un registro oficial de matriculaciones de patinetes eléctricos: ni la DGT, ni ANFAC ni ANESDOR publican cifras por modelo. Presentar un ranking sería inventar datos, y eso no lo hacemos.",
  },
  {
    q: "¿Cada cuánto se actualiza?",
    a: "Cada lunes revisamos si ANFAC o ANESDOR han publicado un mes nuevo y lo incorporamos con su fuente. Las patronales publican a primeros del mes siguiente.",
  },
];

export default function MasVendidos() {
  const [categoria, setCategoria] = useState<CategoriaMasVendidos>("coches");
  // "acumulado" o "2026-MM"
  const [periodoSel, setPeriodoSel] = useState<string>("acumulado");

  const periodos: PeriodoVentas[] =
    categoria === "coches" ? PERIODOS_COCHES : PERIODOS_MOTOS;
  const acumulado =
    categoria === "coches" ? ACUMULADO_COCHES_2026 : ACUMULADO_MOTOS_2026;

  const periodoActual: PeriodoVentas | null = useMemo(
    () =>
      periodoSel === "acumulado"
        ? null
        : periodos.find((p) => p.periodo === periodoSel) ?? null,
    [periodoSel, periodos]
  );

  const ranking: ModeloVendido[] =
    periodoSel === "acumulado" ? acumulado : periodoActual?.ranking ?? [];
  const etiquetaPeriodo =
    periodoSel === "acumulado" ? "Acumulado 2026" : periodoActual?.etiqueta ?? "";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        name: `Vehículos más vendidos en España — ${etiquetaPeriodo}`,
        description:
          "Ranking de modelos más matriculados en España con cifras oficiales de ANFAC y ANESDOR.",
        itemListElement: ranking
          .filter((m) => m.unidades != null)
          .map((m, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: m.modelo,
          })),
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: `${DOMAIN}/` },
          {
            // 20/10/2026 (fix plantilla): la miga de los listados de fichas es el hub de Fichas Técnicas.
            "@type": "ListItem",
            position: 2,
            name: "Fichas Técnicas",
            item: `${DOMAIN}/fichas-tecnicas/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Más vendidos",
            item: `${DOMAIN}${RUTA}/`,
          },
        ],
      },
    ],
  };

  useSeo({
    title: "Más vendidos 2026: ranking mensual",
    description:
      "Ranking mensual de los coches y motos más vendidos en España con cifras reales de matriculaciones ANFAC y ANESDOR. Top por mes y acumulado 2026.",
    canonical: RUTA,
    image: `${DOMAIN}/media/audi-a3-sedan-2025-hero.webp`,
    schema,
  });

  return (
    <>
      <SharedNavbar />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8">
        <nav className="text-xs text-gray-500" aria-label="Migas de pan">
          <Link to="/" className="hover:underline">Inicio</Link> ·{" "}
          <Link to="/fichas-tecnicas/" className="hover:underline">Fichas Técnicas</Link> ·{" "}
          <span className="text-gray-700">Más vendidos</span>
        </nav>

        <div className="mt-4">
          <PageHero
            image="/media/audi-a3-sedan-2025-hero.webp"
            imageAlt="Coches más vendidos en España en 2026"
            badge="🏆 Más vendidos · Comparadores"
            title="Los más vendidos en España"
            subtitle="El ranking mensual de matriculaciones con cifras oficiales: ANFAC para turismos y ANESDOR para motos. Sin estimaciones: si un dato no está publicado, lo decimos."
          />
        </div>

        {/* Pestañas de categoría */}
        <div className="mt-8 flex gap-2" role="tablist" aria-label="Categoría">
          {CATEGORIAS.map((c) => {
            const Icono = c.icono;
            const activa = categoria === c.id;
            return (
              <button
                key={c.id}
                role="tab"
                aria-selected={activa}
                onClick={() => {
                  setCategoria(c.id);
                  setPeriodoSel("acumulado");
                }}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 font-bold transition sm:flex-none sm:px-8 ${
                  activa
                    ? "bg-red-700 text-white shadow"
                    : "border border-gray-300 bg-white text-gray-700 hover:border-red-400"
                }`}
              >
                <Icono size={18} />
                {c.etiqueta}
              </button>
            );
          })}
        </div>

        {categoria === "patinetes" ? (
          <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="flex items-center gap-2 text-lg font-extrabold text-gray-900">
              <Zap size={20} className="text-amber-600" />
              Sin datos oficiales de patinetes
            </h2>
            <p className="mt-3 text-gray-700">
              En España <strong>no existe un registro oficial de
              matriculaciones de patinetes eléctricos</strong>: ni la DGT, ni
              ANFAC ni ANESDOR publican cifras por modelo. Cualquier ranking de
              "patinetes más vendidos" que veas por ahí son estimaciones, y
              nosotros no publicamos estimaciones como si fueran datos.
            </p>
            <p className="mt-3 text-gray-700">
              Lo que sí tenemos es el comparador de patinetes más completo,
              con ficha técnica de cada modelo:
            </p>
            <Link
              to="/comparador-patinetes/"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-red-700 px-6 py-3 font-bold text-white hover:bg-red-800"
            >
              <ArrowLeftRight size={18} /> Comparador de patinetes
            </Link>
          </section>
        ) : (
          <>
            {/* Selector de periodo */}
            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center">
              <label htmlFor="periodo" className="text-sm font-bold text-gray-700">
                Periodo:
              </label>
              <select
                id="periodo"
                value={periodoSel}
                onChange={(e) => setPeriodoSel(e.target.value)}
                className="rounded-xl border border-gray-300 bg-white px-4 py-2.5 font-semibold text-gray-900 shadow-sm focus:border-red-500 focus:outline-none"
              >
                <option value="acumulado">2026 acumulado</option>
                {[...periodos].reverse().map((p) => (
                  <option key={p.periodo} value={p.periodo}>
                    {p.etiqueta}
                  </option>
                ))}
              </select>
              {periodoActual?.totalMercado != null && (
                <p className="text-sm text-gray-600">
                  {`${fmtMiles(periodoActual.totalMercado)} ${categoria === "coches" ? "turismos" : "vehículos ligeros"} matriculados en ${periodoActual.etiqueta.toLowerCase()}`}
                </p>
              )}
            </div>

            {/* Top 3 */}
            {ranking.length > 0 ? (
              <>
                <section aria-label="Top 3" className="mt-8">
                  <h2 className="flex items-center gap-2 text-xl font-extrabold text-gray-900">
                    <Trophy size={22} className="text-red-700" /> {`Top 3 · ${etiquetaPeriodo}`}
                  </h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    {ranking.slice(0, 3).map((m, i) => {
                      const url = fichaUrl(categoria, m);
                      const card = (
                        <>
                          <div className="p-5">
                            <p className="flex items-center justify-between">
                              <span className="text-xs font-bold uppercase tracking-widest text-red-700">
                                Puesto {i + 1}
                              </span>
                              <span className="text-2xl" aria-hidden="true">
                                {MEDALLAS[i]}
                              </span>
                            </p>
                            <h3 className="mt-2 text-lg font-extrabold text-gray-900">
                              {m.modelo}
                            </h3>
                            <p className="mt-2 text-sm text-gray-700">
                              <span className="font-extrabold text-gray-900">
                                {fmtUnidades(m.unidades)}
                              </span>{" "}
                              matriculaciones
                            </p>
                            {url && (
                              <p className="mt-2 text-sm font-bold text-red-600">
                                Ver ficha técnica →
                              </p>
                            )}
                          </div>
                        </>
                      );
                      return url ? (
                        <Link
                          key={m.modelo}
                          to={url}
                          className="block rounded-2xl border-2 border-red-100 bg-white shadow-sm transition hover:border-red-300 hover:shadow-md"
                        >
                          {card}
                        </Link>
                      ) : (
                        <div
                          key={m.modelo}
                          className="block rounded-2xl border-2 border-red-100 bg-white shadow-sm"
                        >
                          {card}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* Resto del ranking */}
                {ranking.length > 3 && (
                  <section aria-label="Resto del ranking" className="mt-10">
                    <h2 className="text-xl font-extrabold text-gray-900">
                      El resto del ranking
                    </h2>
                    <ol className="mt-4 space-y-3">
                      {ranking.slice(3).map((m, i) => {
                        const url = fichaUrl(categoria, m);
                        return (
                          <li
                            key={m.modelo}
                            className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm"
                          >
                            <span className="w-8 shrink-0 text-center text-lg font-extrabold text-gray-400">
                              {i + 4}
                            </span>
                            <div className="min-w-0 flex-1">
                              {url ? (
                                <Link
                                  to={url}
                                  className="block truncate font-bold text-gray-900 hover:text-red-700"
                                >
                                  {m.modelo}
                                </Link>
                              ) : (
                                <span className="block truncate font-bold text-gray-900">
                                  {m.modelo}
                                </span>
                              )}
                              <p className="text-xs text-gray-500">
                                {categoria === "coches" ? "Turismo" : "Moto / vehículo ligero"}
                              </p>
                            </div>
                            <div className="shrink-0 text-right">
                              <p className="text-xs text-gray-500">Matriculaciones</p>
                              <p className="text-sm font-extrabold text-gray-900">
                                {fmtUnidades(m.unidades)}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ol>
                  </section>
                )}

                {/* Fuente y honestidad */}
                <p className="mt-8 max-w-3xl text-sm text-gray-600">
                  <strong className="text-gray-800">Fuente:</strong>{" "}
                  {periodoSel === "acumulado"
                    ? categoria === "coches"
                      ? "Cadena SER con datos de ANFAC, Faconauto y Ganvam (ene–sep 2026)."
                      : "Suma de los meses publicados por ANESDOR/MSI (ene–sep 2026). En agosto solo se publicaron los dos primeros puestos por modelo."
                    : periodoActual?.fuente ?? ""}
                  {" "}Las cifras marcadas como «n.d.» no fueron publicadas por
                  la fuente oficial: preferimos decirlo a inventarlas.
                </p>
              </>
            ) : (
              <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                <h2 className="text-lg font-extrabold text-gray-900">
                  Datos no disponibles
                </h2>
                <p className="mt-2 text-gray-700">
                  Aún no hay cifras oficiales publicadas para este periodo.
                  Las patronales publican a primeros del mes siguiente.
                </p>
              </section>
            )}
          </>
        )}

        {/* Lectura de los datos */}
        {categoria !== "patinetes" && (() => {
          const ps = periodos;
          const ext = extremos(ps);
          const lid = lideresPorModelo(ps);
          const totalAnio = sumaMercado(ps);
          const nTot = mesesConTotal(ps).length;
          const lider = acumulado[0];
          const esCoches = categoria === "coches";
          return (
            <section aria-label="Lectura de las cifras" className="mt-10 max-w-3xl rounded-2xl border border-gray-200 bg-white p-5">
              <h2 className="text-xl font-extrabold text-gray-900">
                {esCoches ? "Qué dicen las cifras de turismos de 2026" : "Qué dicen las cifras de motos de 2026"}
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                <li>
                  {esCoches
                    ? `Entre enero y septiembre se matricularon ${fmtMiles(totalAnio)} turismos en España, sumando los nueve totales mensuales de ANFAC.`
                    : `ANESDOR publicó el total de ${nTot} de los nueve meses: suman ${fmtMiles(totalAnio)} vehículos ligeros matriculados en esos ${nTot} meses.`}
                </li>
                <li>
                  {`El mes con más matriculaciones fue ${mes(ext.alto)} (${fmtMiles(ext.alto.totalMercado ?? 0)}) y el de menos, ${mes(ext.bajo)} (${fmtMiles(ext.bajo.totalMercado ?? 0)}), una diferencia de ${fmtMiles((ext.alto.totalMercado ?? 0) - (ext.bajo.totalMercado ?? 0))} unidades${esCoches ? "" : " entre los meses con total publicado"}.`}
                </li>
                <li>
                  {lid.length > 0 && `${lid[0][0]} encabezó el ranking mensual en ${lid[0][1]} de los ${ps.filter((p) => p.ranking.length > 0).length} meses con ranking publicado.`}
                  {lid.length > 1 && ` Le siguen ${lid.slice(1).map(([n, c]) => `${n} (${c})`).join(", ")}.`}
                </li>
                {lider?.unidades != null && esCoches && (
                  <li>
                    {`${lider.modelo} suma ${fmtMiles(lider.unidades)} unidades en el acumulado, un ${pct1((lider.unidades / totalAnio) * 100)} % del total de turismos matriculados de enero a septiembre.`}
                  </li>
                )}
                {lider?.unidades != null && !esCoches && (
                  <li>
                    {`${lider.modelo} lidera el acumulado con ${fmtMiles(lider.unidades)} unidades, ${fmtMiles(lider.unidades - (acumulado[1]?.unidades ?? 0))} más que ${acumulado[1]?.modelo}, el segundo de la tabla.`}
                  </li>
                )}
              </ul>
              <p className="mt-3 text-xs text-gray-500">
                Cálculo propio con las cifras de la tabla de esta página, consultadas el 31/10/2026. Los porcentajes y las diferencias son aritmética sobre datos de ANFAC o ANESDOR; no son cifras publicadas por ellos. Las cifras de octubre se publican a principios de noviembre. Redacción: Equipo editorial de RecurreTuMulta.
              </p>
            </section>
          );
        })()}

        {/* FAQ */}
        <section className="mt-12 max-w-3xl">
          <h2 className="text-xl font-extrabold text-gray-900">
            Preguntas frecuentes
          </h2>
          <div className="mt-4 space-y-4">
            {FAQS.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-gray-200 bg-white p-4"
              >
                <h3 className="font-bold text-gray-900">{f.q}</h3>
                <p className="mt-1 text-sm text-gray-700">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 flex flex-col items-stretch gap-3 sm:flex-row">
          <Link
            to="/comparador-coches/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-700 px-6 py-3 font-bold text-white hover:bg-red-800"
          >
            <ArrowLeftRight size={18} /> Comparador de coches
          </Link>
          <Link
            to="/comparador-motos/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-300 px-6 py-3 font-bold text-gray-900 hover:border-red-400"
          >
            Comparador de motos
          </Link>
        </div>
      </main>
      <SharedFooter />
    </>
  );
}
