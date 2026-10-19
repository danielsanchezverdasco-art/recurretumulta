// Índice de radares (19/10/2026): 16 comunidades con nº de radares + buscador por carretera.
// Fuente: docs/radares/radares-<comunidad>.csv de las 16 ramas merlin-radares-*;
// datos generados en src/lib/hub-radares.generated.json. Enlaces con barra final.
// Nota: el detalle de cada radar enlaza a /radares/<id>/ (pendiente de cableado
// de ruta; coordinador merlin-rutas-cableadas).
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/use-seo.ts";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";

type Comunidad = { slug: string; nombre: string; n: number };
type Radar = {
  id: string;
  carretera: string;
  pk: string;
  sentido: string;
  municipio: string;
  provincia: string;
  tipo: string;
  limite: string;
  comunidad: string;
  comunidadNombre: string;
};
type Datos = { total: number; comunidades: Comunidad[]; radares: Radar[] };

const DOMAIN = "https://recurretumulta.online";
const MAX_RESULTADOS = 40;
const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const etiquetaRadar = (r: Radar) =>
  `${r.carretera}${r.pk ? ` · km ${r.pk.replace(".", ",")}` : ""}${r.municipio ? ` · ${r.municipio}` : ""}`;

export default function RadaresIndex() {
  const [datos, setDatos] = useState<Datos | null>(null);
  const [q, setQ] = useState("");
  useEffect(() => {
    let ok = true;
    import("@/lib/hub-radares.generated.json").then(
      (m) => ok && setDatos(m.default as Datos),
    );
    return () => {
      ok = false;
    };
  }, []);

  const schema = useMemo(
    () => [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: `${DOMAIN}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Radares",
            item: `${DOMAIN}/radares/`,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Radares por comunidad autónoma",
        numberOfItems: datos?.comunidades.length ?? 0,
        itemListElement: (datos?.comunidades ?? []).map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `Radares en ${c.nombre}`,
          item: `${DOMAIN}/radares/comunidad/${c.slug}/`,
        })),
      },
    ],
    [datos],
  );

  useSeo({
    title: "Radares por comunidad autónoma y carretera",
    description:
      "Índice de radares fijos y de tramo por comunidad autónoma: consulta cuántos hay en cada comunidad y busca por carretera, punto kilométrico y municipio.",
    canonical: "/radares/",
    schema,
    datePublished: "2026-10-19",
  });

  const resultados = useMemo(() => {
    const query = norm(q.trim());
    if (!datos || query.length < 2) return [];
    return datos.radares
      .filter((r) =>
        norm(`${r.carretera} ${r.municipio} ${r.provincia} ${r.pk}`).includes(
          query,
        ),
      )
      .slice(0, MAX_RESULTADOS);
  }, [q, datos]);

  const comunidades = datos?.comunidades ?? [];
  return (
    <div className="min-h-screen bg-slate-50">
      <SharedNavbar />
      <main className="max-w-5xl mx-auto px-4 pt-[81px] pb-16 space-y-6">
        <nav aria-label="Migas de pan" className="text-xs text-gray-500">
          <Link to="/">Inicio</Link> / <span>Radares</span>
        </nav>
        <h1 className="text-3xl font-black text-gray-900">
          Radares por comunidad autónoma
        </h1>
        <p className="text-sm text-gray-600 max-w-2xl">
          Todos los radares fijos y de tramo publicados, organizados por
          comunidad autónoma. Entra en tu comunidad para ver el mapa completo o
          usa el buscador para encontrar los radares de una carretera concreta.
        </p>
        {datos && (
          <p className="text-xs text-gray-500">
            {datos.total} radares · {comunidades.length} comunidades
          </p>
        )}

        <section className="space-y-2">
          <h2 className="text-lg font-black text-gray-900">Comunidades</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {comunidades.map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/radares/comunidad/${c.slug}/`}
                  className="block rounded-lg border border-gray-200 bg-white px-4 py-3 hover:border-red-400"
                >
                  <span className="block text-sm font-bold text-gray-900">
                    {c.nombre}
                  </span>
                  <span className="block text-xs text-gray-500 mt-0.5">
                    {c.n > 0
                      ? `${c.n} ${c.n === 1 ? "radar" : "radares"}`
                      : "En preparación"}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-black text-gray-900">
            Buscador por carretera
          </h2>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ej.: A-2, AP-7, N-340…"
            aria-label="Buscar radares por carretera"
            className="w-full max-w-md rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-red-400 focus:outline-none"
          />
          {q.trim().length >= 2 && (
            <p className="text-xs text-gray-500">
              {resultados.length === 0
                ? "Sin resultados para esta búsqueda."
                : `${resultados.length}${resultados.length === MAX_RESULTADOS ? "+" : ""} resultados`}
            </p>
          )}
          {resultados.length > 0 && (
            <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1">
              {resultados.map((r) => (
                <li key={r.id}>
                  <Link
                    to={`/radares/${r.id}/`}
                    className="text-sm text-gray-700 hover:text-red-600"
                  >
                    {etiquetaRadar(r)}
                    <span className="text-gray-400">
                      {" "}
                      · {r.comunidadNombre}
                      {r.limite ? ` · ${r.limite} km/h` : ""}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
      <SharedFooter editorial={{ ambito: "radares", tipo: "listado" }} />
    </div>
  );
}
