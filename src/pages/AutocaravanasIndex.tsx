// Índice de autocaravanas (19/10/2026): fichas agrupadas por marca.
// Fuente: comparador-autocaravanas-*.ts de las 5 ramas merlin-autocaravanas-*
// (final=m1, lote-2=m2, lote-3=m3, lote-4=m4, lote-5=m5); datos generados en
// src/lib/hub-autocaravanas.generated.json. Enlaces siempre con barra final.
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/use-seo.ts";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";

type Ficha = { slug: string; modelo: string; tipo: string };
type Marca = { slug: string; nombre: string; fichas: Ficha[] };
type Datos = { total: number; marcas: Marca[] };

const TIPO: Record<string, string> = {
  perfilada: "Perfilada",
  camper: "Camper",
  integral: "Integral",
  capuchina: "Capuchina",
  van: "Van",
};
const DOMAIN = "https://recurretumulta.online";
const ancla = (s: string) => `marca-${s}`;

export default function AutocaravanasIndex() {
  const [datos, setDatos] = useState<Datos | null>(null);
  useEffect(() => {
    let ok = true;
    import("@/lib/hub-autocaravanas.generated.json").then(
      (m) => ok && setDatos(m.default as Datos),
    );
    return () => {
      ok = false;
    };
  }, []);

  const schema = useMemo(() => {
    const fichas = (datos?.marcas ?? []).flatMap((m) =>
      m.fichas.map((f) => ({
        marca: m.nombre,
        slug: f.slug,
        modelo: f.modelo,
      })),
    );
    return [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: `${DOMAIN}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Autocaravanas",
            item: `${DOMAIN}/autocaravanas/`,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Fichas técnicas de autocaravanas por marca y modelo",
        numberOfItems: fichas.length,
        itemListElement: fichas.map((f, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `${f.marca} ${f.modelo}`,
          item: `${DOMAIN}/autocaravanas/${f.slug}/`,
        })),
      },
    ];
  }, [datos]);

  useSeo({
    title: "Fichas técnicas de autocaravanas por marca y modelo",
    description:
      "Índice de todas las fichas técnicas de autocaravanas: perfiladas, integrales, capuchinas y campers, ordenadas por marca y modelo con precio, medidas y plazas.",
    canonical: "/autocaravanas/",
    schema,
    datePublished: "2026-10-19",
  });

  const marcas = datos?.marcas ?? [];
  return (
    <div className="min-h-screen bg-slate-50">
      <SharedNavbar />
      <main className="max-w-5xl mx-auto px-4 pt-[81px] pb-16 space-y-6">
        <nav aria-label="Migas de pan" className="text-xs text-gray-500">
          <Link to="/">Inicio</Link> / <span>Autocaravanas</span>
        </nav>
        <h1 className="text-3xl font-black text-gray-900">
          Fichas técnicas de autocaravanas
        </h1>
        <p className="text-sm text-gray-600 max-w-2xl">
          Todas las fichas técnicas de autocaravanas publicadas, ordenadas por
          marca y modelo: perfiladas, integrales, capuchinas y campers, con
          precio, medidas, plazas y opiniones de propietarios.
        </p>
        {datos && (
          <p className="text-xs text-gray-500">
            {datos.total} fichas · {marcas.length} marcas
          </p>
        )}
        <div className="flex flex-wrap gap-1.5">
          {marcas.map((m) => (
            <a
              key={m.slug}
              href={`#${ancla(m.slug)}`}
              className="text-xs rounded-full border border-gray-200 bg-white px-2.5 py-1 hover:border-red-400"
            >
              {m.nombre}
            </a>
          ))}
        </div>
        {marcas.map((m) => (
          <section key={m.slug} id={ancla(m.slug)} className="space-y-2">
            <h2 className="text-lg font-black text-gray-900">
              {m.nombre}{" "}
              <span className="text-sm font-normal text-gray-500">
                ({m.fichas.length})
              </span>
            </h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1">
              {m.fichas.map((f) => (
                <li key={f.slug}>
                  <Link
                    to={`/autocaravanas/${f.slug}/`}
                    className="text-sm text-gray-700 hover:text-red-600"
                  >
                    {m.nombre} {f.modelo}
                    {TIPO[f.tipo] && (
                      <span className="text-gray-400"> · {TIPO[f.tipo]}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
      <SharedFooter editorial={{ ambito: "autocaravanas", tipo: "listado" }} />
    </div>
  );
}
