// Rankings auto-actualizables de Novedades Motor.
// Se calculan desde src/lib/comparador-coches-data.ts: al cambiar los datos
// de un modelo (o al añadirse uno nuevo), el ranking cambia solo.

import { useMemo } from "react";
import { fmtMiles } from "@/lib/formato.ts";
import { Link, useParams } from "react-router-dom";
import { ArrowLeftRight, Trophy } from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import { MorphCard, PageHero } from "@/components/motion.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import {
  COCHES_COMPARADOR,
  type CocheComparador,
} from "@/lib/comparador-coches-data.ts";

const DOMAIN = "https://recurretumulta.online";

const fmtPrecio = (v: number | null) =>
  // 20/10/2026 (fix plantilla): fmtMiles agrupa siempre (toLocaleString no agrupaba 4 cifras).
  v == null ? "—" : fmtMiles(v) + " €";
const fmtAutonomia = (v: number | null) =>
  v == null ? "—" : v.toLocaleString("es-ES") + " km";
const fmtConsumo = (c: CocheComparador) =>
  c.consumo == null
    ? "—"
    : `${c.aprox.includes("consumo") ? "≈" : ""}${String(c.consumo).replace(
        ".",
        ","
      )} ${c.consumoUnidad ?? ""}`.trim();

type Ranking = {
  slug: string;
  titulo: string;
  descripcion: string;
  intro: string;
  /** Etiqueta corta del dato clave del criterio (se muestra en cada fila) */
  datoLabel: string;
  /** Texto del dato clave de un coche para este ranking */
  dato: (c: CocheComparador) => string;
  /** Selección y ordenación: opera sobre los datos reales, nada inventado */
  seleccionar: (coches: CocheComparador[]) => CocheComparador[];
  /** Respuesta a "¿cómo se ordena este ranking?" (para FAQ y schema) */
  comoSeOrdena: string;
  /** Qué mide el ranking */
  queMide: string;
  /** Qué NO mide y limitaciones honestas */
  queNoMide: string;
};

const RANKINGS: Ranking[] = [
  {
    slug: "mejores-electricos-baratos-2026",
    titulo: "Los coches eléctricos más baratos de 2026",
    descripcion:
      "Ranking de los coches eléctricos más baratos de 2026, ordenados de menor a mayor precio. Solo datos de nuestras fichas técnicas, sin patrocinios.",
    intro:
      "Los eléctricos con el precio de partida más bajo de nuestra base de datos, ordenados de barato a caro. Sin ayudas ni letra pequeña escondida: el precio es el «desde» publicado por cada marca.",
    datoLabel: "Precio desde",
    dato: (c) => fmtPrecio(c.precioDesde),
    seleccionar: (coches) =>
      coches
        .filter(
          (c) => c.tipo === "Eléctrico" && c.precioDesde != null && c.precioDesde <= 30000
        )
        .sort((a, b) => a.precioDesde! - b.precioDesde!),
    comoSeOrdena:
      "De menor a mayor precio de partida (PVP «desde» publicado por la marca), entre los eléctricos de nuestra base de datos con precio de 30.000 € o menos.",
    queMide:
      "El precio de partida publicado por cada marca («desde»), con las promociones que incluye la ficha técnica. Es el coste de entrada: cuánto cuesta empezar a hablar de ese coche.",
    queNoMide:
      "No incluye las ayudas del Plan Auto+ ni las de las comunidades autónomas (pueden bajar el precio miles de euros), y algunos «desde» exigen financiación o son precios promocionales temporales. Tampoco mide autonomía, equipamiento ni coste total de propiedad: un coche más barato puede salirte más caro de usar.",
  },
  {
    slug: "suv-electricos-mas-autonomia-2026",
    titulo: "SUV eléctricos con más autonomía 2026",
    descripcion:
      "Ranking de los SUV eléctricos con más autonomía de 2026, ordenados de mayor a menor. Cifras homologadas de nuestras fichas técnicas, sin patrocinios.",
    intro:
      "Los SUV eléctricos de nuestra base de datos ordenados por autonomía homologada, de mayor a menor. El dato que más importa cuando quieres viajar sin planificar cada parada.",
    datoLabel: "Autonomía",
    dato: (c) => fmtAutonomia(c.autonomiaKm),
    seleccionar: (coches) =>
      coches
        .filter((c) => c.tipo === "Eléctrico" && c.categoria === "SUV")
        .sort((a, b) => (b.autonomiaKm ?? -1) - (a.autonomiaKm ?? -1)),
    comoSeOrdena:
      "De mayor a menor autonomía homologada (WLTP en la mayoría de los casos), entre los SUV eléctricos de nuestra base de datos. Los modelos sin autonomía publicada van al final.",
    queMide:
      "La autonomía homologada publicada para cada modelo: en la mayoría de los casos el ciclo WLTP. Es la referencia oficial que permite comparar coches entre sí con la misma vara de medir.",
    queNoMide:
      "No mide la autonomía real: en autopista a 120 km/h la cifra cae entre un 20 y un 40 %, y más en invierno. Algunos modelos aún sin homologación europea muestran el ciclo chino CLTC, más optimista: lo avisamos en su artículo. Tampoco mide eficiencia, velocidad de carga ni tamaño de batería.",
  },
  {
    slug: "mejores-hibridos-2026",
    titulo: "Los mejores híbridos de 2026",
    descripcion:
      "Ranking de los híbridos de 2026 ordenados por consumo homologado, de menor a mayor. Solo datos de nuestras fichas técnicas, sin patrocinios.",
    intro:
      "Todos los modelos híbridos e híbridos enchufables de nuestra base de datos ordenados por consumo homologado WLTP, de menor a mayor. El «mejor» aquí significa el que menos gasta.",
    datoLabel: "Consumo WLTP",
    dato: (c) => fmtConsumo(c),
    seleccionar: (coches) =>
      coches
        .filter((c) => c.tipo.includes("Híbrido"))
        .sort((a, b) => (a.consumo ?? Infinity) - (b.consumo ?? Infinity)),
    comoSeOrdena:
      "De menor a mayor consumo homologado WLTP, entre los modelos cuyo tipo incluye «Híbrido» (híbridos e híbridos enchufables). Los modelos sin consumo publicado van al final.",
    queMide:
      "El consumo homologado WLTP publicado para cada modelo. Es la única cifra oficial comparable entre marcas, y en este ranking «mejor» significa literalmente «el que menos gasta».",
    queNoMide:
      "No mide el consumo real ni mezcla mecánicas iguales: el consumo homologado de un híbrido enchufable asume que lo cargas a diario (si no, gasta mucho más), y no incluye autonomía eléctrica, precio, maletero ni etiqueta DGT. Un híbrido «peor» en este ranking puede ser mejor compra según tu uso.",
  },
];

const FAQS_EXTRA = [
  {
    q: "¿Cada cuánto se actualiza el ranking?",
    a: "Se recalcula solo cada vez que actualizamos la ficha técnica de un modelo o añadimos uno nuevo a la base de datos: no hay ediciones manuales ni puestos reservados. La fecha de la última revisión la ves en el artículo de cada coche.",
  },
  {
    q: "¿Hay patrocinios o enlaces de compra en estos rankings?",
    a: "No. Es contenido 100 % editorial: ninguna marca puede pagar por aparecer ni por subir puestos, y no incluimos enlaces de afiliación ni botones de compra. Si algún día cambiamos esta política, lo diremos aquí mismo.",
  },
  {
    q: "¿Dónde puedo comparar dos modelos cara a cara?",
    a: "En nuestro comparador de coches puedes enfrentar cualquier par de modelos de la base de datos: ficha técnica completa, pros y contras, vídeo y qué coche «gana» en cada apartado.",
  },
];

const MEDALLAS = ["🥇", "🥈", "🥉"];

export default function Rankings() {
  const { slug } = useParams<{ slug: string }>();
  const ranking = RANKINGS.find((r) => r.slug === slug);
  const coches = useMemo(
    () => (ranking ? ranking.seleccionar(COCHES_COMPARADOR) : []),
    [ranking]
  );

  const faqs = useMemo(
    () =>
      ranking
        ? [
            { q: "¿Cómo se ordena este ranking?", a: ranking.comoSeOrdena },
            ...FAQS_EXTRA,
          ]
        : [],
    [ranking]
  );

  const schema = ranking
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "ItemList",
            name: ranking.titulo,
            description: ranking.descripcion,
            itemListElement: coches.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: `${c.marca} ${c.modelo}`,
              url: `${DOMAIN}/coches/${c.id}`,
            })),
          },
          {
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: `${DOMAIN}/` },
              { "@type": "ListItem", position: 2, name: "Novedades Motor", item: `${DOMAIN}/blog` },
              {
                "@type": "ListItem",
                position: 3,
                name: ranking.titulo,
                item: `${DOMAIN}/rankings/${ranking.slug}`,
              },
            ],
          },
        ],
      }
    : undefined;

  useSeo(
    ranking
      ? {
          title: ranking.titulo,
          description: ranking.descripcion,
          canonical: `/rankings/${ranking.slug}/`,
          schema,
        }
      : {
          title: "Ranking no encontrado",
          description: "Este ranking no existe. Vuelve al comparador de coches.",
          canonical: "/comparador-coches",
          noindex: true,
        }
  );

  if (!ranking) {
    return (
      <>
        <SharedNavbar />
        <main className="mx-auto max-w-3xl px-4 pb-16 pt-8">
          <h1 className="text-2xl font-extrabold text-gray-900">
            Este ranking no existe
          </h1>
          <p className="mt-3 text-gray-700">
            El ranking que buscas no está disponible. Puedes comparar todos los
            modelos de nuestra base de datos en el comparador.
          </p>
          <Link
            to="/comparador-coches/"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-red-700 px-5 py-3 font-bold text-white hover:bg-red-800"
          >
            <ArrowLeftRight size={18} /> Ir al comparador de coches
          </Link>
        </main>
        <SharedFooter editorial={{ ambito: "coches", tipo: "listado" }} />
      </>
    );
  }

  const top3 = coches.slice(0, 3);
  const resto = coches.slice(3);

  return (
    <>
      <SharedNavbar />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8">
        <nav className="text-xs text-gray-500" aria-label="Migas de pan">
          <Link to="/" className="hover:underline">Inicio</Link> ·{" "}
          <Link to="/fichas-tecnicas/" className="hover:underline">Fichas Técnicas</Link> ·{" "}
          <span className="text-gray-700">{ranking.titulo}</span>
        </nav>

        <div className="mt-4">
          <PageHero
            image="/media/bmw-ix4-electrico-2026-hero.webp"
            imageAlt="Coches eléctricos en un ranking del motor"
            badge="🏆 Rankings · Novedades Motor"
            title={ranking.titulo}
            subtitle={
              <>
                {ranking.intro}{" "}
                <span className="mt-4 inline-block rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold text-gray-200">
                  Sin patrocinios ni enlaces de compra: contenido editorial.
                </span>
              </>
            }
          />
        </div>

        <section aria-label="Top 3" className="mt-8">
          <h2 className="flex items-center gap-2 text-xl font-extrabold text-gray-900">
            <Trophy size={22} className="text-red-700" /> Top 3
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {top3.map((c, i) => (
              <MorphCard
                key={c.id}
                href={`/coches/${c.id}/`}
                label={`${c.marca} ${c.modelo}`}
                className="block overflow-hidden rounded-2xl border-2 border-red-100 bg-white shadow-sm transition hover:border-red-300 hover:shadow-md"
              >
                <div className="relative">
                  <img
                    src={c.imagenOficial}
                    alt={`${c.marca} ${c.modelo}`}
                    className="aspect-[16/9] w-full object-cover"
                    loading="lazy"
                  />
                  <span
                    className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xl shadow"
                    aria-hidden="true"
                  >
                    {MEDALLAS[i]}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-700">
                    Puesto {i + 1}
                  </p>
                  <h3 className="mt-1 text-lg font-extrabold text-gray-900">
                    {c.marca} {c.modelo}
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    <span className="font-semibold">{ranking.datoLabel}:</span>{" "}
                    <span className="font-extrabold text-gray-900">
                      {ranking.dato(c)}
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {c.tipo} · {c.categoria} · {c.etiquetaDgt}
                  </p>
                </div>
              </MorphCard>
            ))}
          </div>
        </section>

        {resto.length > 0 && (
          <section aria-label="Resto del ranking" className="mt-10">
            <h2 className="text-xl font-extrabold text-gray-900">
              El resto del ranking
            </h2>
            <ol className="mt-4 space-y-3">
              {resto.map((c, i) => (
                <li
                  key={c.id}
                  className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm"
                >
                  <span className="w-8 shrink-0 text-center text-lg font-extrabold text-gray-400">
                    {i + 4}
                  </span>
                  <img
                    src={c.imagenOficial}
                    alt={`${c.marca} ${c.modelo}`}
                    className="h-12 w-20 shrink-0 rounded-lg object-cover"
                    loading="lazy"
                  />
                  <div className="min-w-0 flex-1">
                    <Link
                      to={`/coches/${c.id}/`}
                      className="block truncate font-bold text-gray-900 hover:text-red-700"
                    >
                      {c.marca} {c.modelo}
                    </Link>
                    <p className="text-xs text-gray-500">
                      {c.tipo} · {c.categoria}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-xs text-gray-500">{ranking.datoLabel}</p>
                    <p className="text-sm font-extrabold text-gray-900">
                      {ranking.dato(c)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        <section className="mt-12 max-w-3xl">
          <h2 className="text-xl font-extrabold text-gray-900">
            Cómo hacemos este ranking
          </h2>
          <div className="mt-3 space-y-3 text-gray-700">
            <p>
              <strong className="text-gray-900">Qué mide.</strong>{" "}
              {ranking.queMide}
            </p>
            <p>
              <strong className="text-gray-900">Qué NO mide.</strong>{" "}
              {ranking.queNoMide}
            </p>
            <p className="text-sm text-gray-600">
              El ranking se recalcula solo con los datos de nuestra base
              técnica: si añadimos un modelo o corregimos una cifra, los puestos
              cambian sin intervención editorial. Las cifras marcadas con ≈ son
              aproximadas.
            </p>
          </div>
        </section>

        <section className="mt-10 max-w-3xl">
          <h2 className="text-xl font-extrabold text-gray-900">
            Preguntas frecuentes
          </h2>
          <div className="mt-4 space-y-4">
            {faqs.map((f) => (
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
            <ArrowLeftRight size={18} /> Comparar modelos cara a cara
          </Link>
          <p className="mt-3 text-sm text-gray-700">
            Si el coche que te interesa lo quieres de segunda mano, el <Link to="/buscador-coches/" className="font-semibold text-red-600 underline">buscador de coches usados</Link> lo rastrea en Coches.net, Wallapop, Milanuncios y Autoscout24 con tu presupuesto, kilómetros y zona.
          </p>
          <Link
            to="/blog/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-300 px-6 py-3 font-bold text-gray-900 hover:border-red-400"
          >
            Ver todos los análisis de Novedades Motor
          </Link>
        </div>
      </main>
      <SharedFooter editorial={{ ambito: "coches", tipo: "listado" }} />
    </>
  );
}

/** Índice /rankings: lista todos los rankings disponibles. */
export function RankingsIndex() {
  // 25/10/2026 (informe SEO rev25): resumen propio del índice, calculado con los mismos datos
  // que cada ranking (podio actual y número de modelos), en vez de repetir sus descripciones.
  const podios = useMemo(
    () => RANKINGS.map((r) => ({ r, lista: r.seleccionar(COCHES_COMPARADOR) })),
    [],
  );
  useSeo({
    title: "Rankings de coches 2026",
    description:
      "Rankings de coches calculados con datos reales de nuestra base de datos: los eléctricos más baratos de 2026, los SUV con más autonomía y los mejores híbridos.",
    canonical: "/rankings",
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: DOMAIN },
        { "@type": "ListItem", position: 2, name: "Fichas Técnicas", item: `${DOMAIN}/fichas-tecnicas` },
        { "@type": "ListItem", position: 3, name: "Rankings", item: `${DOMAIN}/rankings` },
      ],
    },
  });

  return (
    <>
      <SharedNavbar />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8">
        <nav className="text-xs text-gray-500" aria-label="Migas de pan">
          <Link to="/" className="hover:underline">Inicio</Link> ·{" "}
          <Link to="/fichas-tecnicas/" className="hover:underline">Fichas Técnicas</Link> ·{" "}
          <span className="text-gray-700">Rankings</span>
        </nav>

        <div className="mt-4">
          <PageHero
            image="/media/bmw-ix4-electrico-2026-hero.webp"
            imageAlt="Coches eléctricos en un ranking del motor"
            badge="🏆 Rankings · Novedades Motor"
            title="Rankings de coches"
            subtitle="Ordenados de forma automática desde nuestra base de datos de modelos: si añadimos un coche o corregimos una cifra, los puestos cambian solos. Sin patrocinios ni enlaces de compra."
          />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RANKINGS.map((r) => (
            <Link
              key={r.slug}
              to={`/rankings/${r.slug}/`}
              className="block rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-red-300 hover:shadow-md"
            >
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-700">
                <Trophy size={14} /> Ranking
              </p>
              <h2 className="mt-2 text-lg font-extrabold text-gray-900">{r.titulo}</h2>
              <p className="mt-2 text-sm text-gray-600">{r.descripcion}</p>
              {(() => {
                const l = podios.find((x) => x.r.slug === r.slug)?.lista ?? [];
                if (l.length === 0) return null;
                return (
                  <p className="mt-2 text-sm text-gray-700">
                    Ahora mismo entran {l.length} modelos. Podio: {l.slice(0, 3).map((c, i) => `${i + 1}.º ${c.marca} ${c.modelo} (${r.dato(c)})`).join(", ")}.
                  </p>
                );
              })()}
              <p className="mt-3 text-sm font-bold text-red-600">Ver ranking →</p>
            </Link>
          ))}
        </div>

        <section className="mt-10 max-w-3xl space-y-3 text-sm text-gray-700">
          <h2 className="text-lg font-extrabold text-gray-900">Cómo leer estos rankings</h2>
          <p>
            Cada lista aplica un único criterio y lo dice en su ficha: precio de partida, autonomía homologada o consumo. Eso la hace fácil de comprobar, pero también limitada: un coche puede ganar en autonomía y perder en maletero, garantía o red de talleres, así que el ranking sirve para hacer una primera criba, no para decidir solo con él.
          </p>
          <p>
            Las autonomías son cifras WLTP, que en uso real suelen quedarse por debajo, sobre todo en autopista y con frío. Los precios son los «desde» que publica cada marca en España y no restan ayudas como el Plan Auto+ o las de tu comunidad autónoma. Los consumos que no son oficiales llevan delante el signo «≈».
          </p>
        </section>

        <div className="mt-10 max-w-3xl">
          <Link
            to="/comparador-coches/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-700 px-6 py-3 font-bold text-white hover:bg-red-800"
          >
            <ArrowLeftRight size={18} /> Comparar modelos cara a cara
          </Link>
        </div>
      </main>
      <SharedFooter editorial={{ ambito: "coches", tipo: "listado" }} />
    </>
  );
}
