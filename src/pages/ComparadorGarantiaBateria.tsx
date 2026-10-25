// Comparador de garantías de batería — ranking editorial auto-actualizable.
// Se calcula desde src/lib/comparador-coches-data.ts (campos garantiaBateriaAnos,
// garantiaBateriaKm, garantiaBateriaDegradacionPct): al cambiar los datos de un
// modelo, el ranking cambia solo. Cero cifras inventadas: solo datos verificados
// en web oficial de la marca o km77; lo no publicado se marca como tal.

import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftRight, BadgeCheck, ShieldAlert, Trophy } from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import { PageHero } from "@/components/motion.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import {
  COCHES_COMPARADOR,
  type CocheComparador,
} from "@/lib/comparador-coches-data.ts";

const DOMAIN = "https://recurretumulta.online";
const CANONICAL = "/comparador-garantia-bateria";

const TITULO = "Garantía de batería: qué marca da más años y km en 2026";
const DESCRIPCION =
  "Ranking de garantías de batería de coches eléctricos e híbridos enchufables: años, kilómetros y degradación mínima garantizada, con datos verificados de cada marca.";

type Fila = CocheComparador & { tieneDato: boolean };

function ordenar(a: Fila, b: Fila): number {
  if (a.tieneDato !== b.tieneDato) return a.tieneDato ? -1 : 1;
  if ((a.garantiaBateriaAnos ?? 0) !== (b.garantiaBateriaAnos ?? 0))
    return (b.garantiaBateriaAnos ?? 0) - (a.garantiaBateriaAnos ?? 0);
  return (b.garantiaBateriaKm ?? 0) - (a.garantiaBateriaKm ?? 0);
}

const FAQS = [
  {
    q: "¿Cómo se ordena este ranking?",
    a: "Por años de garantía de la batería de tracción y, a igualdad de años, por kilómetros. Los modelos sin dato publicado por la marca aparecen al final, marcados como «no publicado».",
  },
  {
    q: "¿La garantía de la batería es la misma que la del coche?",
    a: "No. La garantía general del vehículo (normalmente 2-5 años según la marca) es distinta de la garantía específica de la batería de tracción, que por regulación europea suele ser de 8 años o 160.000 km como mínimo en la práctica comercial, aunque cada marca fija sus condiciones.",
  },
  {
    q: "¿Qué significa el «70 % de degradación» garantizado?",
    a: "Que la marca se compromete a que la batería conserve al menos el 70 % de su capacidad original durante el periodo de garantía. Si baja de ese umbral por causas cubiertas, la reparan o la sustituyen. La pérdida de capacidad hasta ese 70 % se considera degradación natural y no está cubierta.",
  },
  {
    q: "¿La garantía cubre si la batería se degrada con el uso normal?",
    a: "Solo si la degradación supera el umbral garantizado (normalmente el 70 % de capacidad). La degradación natural por uso, paso del tiempo y ciclos de carga hasta ese límite no la cubre ninguna marca.",
  },
  {
    q: "¿Puedo ampliar la garantía de la batería?",
    a: "Algunas marcas ofrecen extensiones de garantía de pago que incluyen la batería; también existen seguros específicos que cubren la batería del eléctrico. Compara condiciones y letra pequeña antes de contratar: pregunta siempre por el umbral de degradación cubierto y las exclusiones.",
  },
];

const MEDALLAS = ["🥇", "🥈", "🥉"];

function fmtKm(km: number | null): string {
  if (km == null) return "km no publicados";
  return km.toLocaleString("es-ES") + " km";
}

export default function ComparadorGarantiaBateriaPage() {
  const filas = useMemo<Fila[]>(
    () =>
      COCHES_COMPARADOR.map((c) => ({
        ...c,
        tieneDato: c.garantiaBateriaAnos != null,
      })).sort(ordenar),
    []
  );
  const conDato = filas.filter((f) => f.tieneDato);
  const top3 = conDato.slice(0, 3);
  const resto = filas.slice(3);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        name: TITULO,
        description: DESCRIPCION,
        itemListElement: conDato.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `${c.marca} ${c.modelo} — ${c.garantiaBateriaAnos} años / ${fmtKm(c.garantiaBateriaKm)}`,
          url: `${DOMAIN}/coches/${c.id}`,
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
          { "@type": "ListItem", position: 2, name: "Novedades Motor", item: `${DOMAIN}/blog` },
          { "@type": "ListItem", position: 3, name: "Garantía de batería", item: `${DOMAIN}${CANONICAL}` },
        ],
      },
    ],
  };

  useSeo({ title: TITULO, description: DESCRIPCION, canonical: CANONICAL, schema });

  return (
    <>
      <SharedNavbar />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8">
        <nav className="text-xs text-gray-500" aria-label="Migas de pan">
          <Link to="/" className="hover:underline">Inicio</Link> ·{" "}
          <Link to="/fichas-tecnicas/" className="hover:underline">Fichas Técnicas</Link> ·{" "}
          <span className="text-gray-700">Garantía de batería</span>
        </nav>

        <div className="mt-4">
          <PageHero
            image="/media/comparador-garantia-bateria.webp"
            imageAlt="Mecánico inspeccionando los bajos y la batería de un coche eléctrico en un elevador"
            badge="🔋 Comparadores · Novedades Motor"
            title={TITULO}
            subtitle={
              <>
                La batería es el componente más caro de un eléctrico. Comparamos la garantía
                de la batería de tracción de los modelos de nuestra base de datos, ordenados
                por años y kilómetros. Solo datos verificados en la web oficial de cada marca
                o en km77: lo no publicado aparece como tal.{" "}
                <span className="mt-4 inline-block rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold text-gray-200">
                  Sin patrocinios ni enlaces de compra: contenido editorial.
                </span>
              </>
            }
            stats={[{ value: COCHES_COMPARADOR.length, label: "Modelos comparados", countUp: true }]}
          />
        </div>

        <section aria-label="Top 3" className="mt-8">
          <h2 className="flex items-center gap-2 text-xl font-extrabold text-gray-900">
            <Trophy size={22} className="text-red-700" /> Top 3: más garantía de batería
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {top3.map((c, i) => (
              <Link
                key={c.id}
                to={`/coches/${c.id}/`}
                className="overflow-hidden rounded-2xl border-2 border-red-100 bg-white shadow-sm transition hover:border-red-300 hover:shadow-md"
              >
                <img
                  src={c.imagenOficial}
                  alt={`Foto oficial del ${c.marca} ${c.modelo}`}
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <p className="text-2xl">{MEDALLAS[i]}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-widest text-red-700">
                    Puesto {i + 1}
                  </p>
                  <p className="font-extrabold text-gray-900">
                    {c.marca} {c.modelo}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-700">
                    {c.garantiaBateriaAnos} años / {fmtKm(c.garantiaBateriaKm)}
                  </p>
                  {c.garantiaBateriaDegradacionPct != null && (
                    <p className="text-xs text-gray-500">
                      Degradación mínima garantizada: {c.garantiaBateriaDegradacionPct} %
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section aria-label="Tabla completa" className="mt-10">
          <h2 className="text-xl font-extrabold text-gray-900">Tabla completa</h2>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {resto.map((c, i) => (
              <li key={c.id}>
                <Link
                  to={`/coches/${c.id}/`}
                  className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-3 transition hover:border-red-300"
                >
                  <span className="w-8 shrink-0 text-center text-sm font-black text-gray-400">
                    {i + 4}
                  </span>
                  <img
                    src={c.imagenOficial}
                    alt=""
                    aria-hidden="true"
                    className="h-12 w-20 shrink-0 rounded-lg object-cover"
                    loading="lazy"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-bold text-gray-900">
                      {c.marca} {c.modelo}
                    </span>
                    {c.tieneDato ? (
                      <span className="block text-sm text-gray-600">
                        {c.garantiaBateriaAnos} años / {fmtKm(c.garantiaBateriaKm)}
                        {c.garantiaBateriaDegradacionPct != null &&
                          ` · mín. ${c.garantiaBateriaDegradacionPct} %`}
                      </span>
                    ) : (
                      <span className="block text-sm text-gray-400">
                        Garantía de batería no publicada por la marca
                      </span>
                    )}
                  </span>
                  <BadgeCheck size={18} className="shrink-0 text-red-600" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-gray-500">
            «No publicado» significa que la marca no difunde oficialmente la garantía de
            la batería de tracción de ese modelo (o que el modelo no tiene batería de
            tracción, como los de gasolina). No lo rellenamos con estimaciones.
          </p>
        </section>

        <section aria-label="Qué cubre y qué no cubre" className="mt-10 max-w-3xl">
          <h2 className="flex items-center gap-2 text-xl font-extrabold text-gray-900">
            <ShieldAlert size={22} className="text-red-700" />
            Qué cubre la garantía de batería… y qué no
          </h2>
          <div className="mt-4 space-y-4 text-sm text-gray-700">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="font-bold text-emerald-900">Sí suele cubrir</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Defectos de fabricación de la batería y sus componentes.</li>
                <li>
                  Degradación excesiva: si la capacidad cae por debajo del umbral
                  garantizado (por ejemplo, el 70 % que publican Renault, Skoda o Tesla),
                  la marca la repara o la sustituye.
                </li>
                <li>Averías del sistema de gestión y refrigeración de la batería.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
              <p className="font-bold text-red-900">No cubre (exclusiones habituales)</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  La <strong>degradación natural</strong> hasta el umbral garantizado:
                  perder capacidad con el uso y el paso del tiempo hasta ese 70 % (o el
                  porcentaje que publique cada marca) se considera desgaste normal.
                </li>
                <li>Daños por mal uso o negligencia (p. ej., dejar el coche descargado durante meses).</li>
                <li>Daños por accidente, inundación o incendio externo.</li>
                <li>Modificaciones no autorizadas del sistema eléctrico o la batería.</li>
                <li>Falta de mantenimiento según el plan de la marca.</li>
              </ul>
              <p className="mt-2 text-xs text-red-800">
                Cada marca detalla sus exclusiones en el libro de garantía: léelo antes de
                comprar, porque varían de una a otra.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-4">
              <p className="font-bold text-gray-900">Tus opciones si quieres más cobertura</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  <strong>Ampliar la garantía con la marca:</strong> varios fabricantes
                  venden extensiones de garantía de pago que incluyen la batería. Pregunta
                  siempre por el umbral de degradación cubierto y las exclusiones.
                </li>
                <li>
                  <strong>Asegurar la batería por separado:</strong> existen seguros
                  específicos para la batería del eléctrico, además de la cobertura que
                  ya incluya tu seguro a todo riesgo. Compara qué cubren exactamente.
                </li>
              </ul>
              <p className="mt-2 text-xs text-gray-500">
                No vendemos garantías ni seguros: es información para que decidas con criterio.
              </p>
            </div>
          </div>
        </section>

        <figure className="mt-10 max-w-3xl">
          <video src="/media/garantia-bateria.mp4" className="w-full rounded-3xl border border-slate-200" muted autoPlay loop playsInline preload="metadata" aria-label="Vídeo: un técnico con guantes revisa la batería de un coche eléctrico en un taller" />
          <figcaption className="text-sm text-slate-500 mt-2 text-center">Vídeo ilustrativo: un técnico revisa la batería de un eléctrico en el taller.</figcaption>
        </figure>

        <section aria-label="Preguntas frecuentes" className="mt-10 max-w-3xl">
          <h2 className="text-xl font-extrabold text-gray-900">Preguntas frecuentes</h2>
          <div className="mt-4 space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="rounded-2xl border border-gray-200 bg-white p-4">
                <summary className="cursor-pointer font-semibold text-gray-900">{f.q}</summary>
                <p className="mt-2 text-sm text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/comparador-coches/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-700 px-5 py-3 font-bold text-white hover:bg-red-800"
          >
            <ArrowLeftRight size={18} /> Comparar los modelos cara a cara
          </Link>
          <Link
            to="/blog/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-5 py-3 font-bold text-gray-700 hover:border-red-300 hover:text-red-700"
          >
            Ver Novedades Motor
          </Link>
        </div>
      </main>
      <SharedFooter />
    </>
  );
}
