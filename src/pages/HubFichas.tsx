// Hubs de categoría /coches/, /motos/, /patinetes/ (13/10/2026).
// Lista generada desde las fichas publicadas (scripts/gen-hubs.py). Enlaces siempre con barra final.
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/use-seo.ts";
import MARCAS from "@/lib/hub-marcas.generated.json";
import CONTEOS from "@/lib/hub-conteos.generated.json";
// 18/10/2026 (sección /caravanas/): datos estructurados para filtros
// (scripts/gen-hub-caravanas.mjs, desde los datos — no desde dist/).
import FILTROS_CARAVANAS from "@/lib/hub-caravanas-filtros.generated.json";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";

export type Categoria = "coches" | "motos" | "patinetes" | "caravanas";
// Títulos neutros y descriptivos: pendientes de revisión por SEO.
export const HUB_META: Record<Categoria, { h1: string; title: string; description: string; nombre: string }> = {
  coches: { nombre: "Coches", h1: "Fichas técnicas de coches", title: "Fichas técnicas de coches por marca y modelo", description: "Índice de todas las fichas técnicas de coches: eléctricos, híbridos y de combustión, ordenadas por marca y modelo con precio, potencia y autonomía." },
  motos: { nombre: "Motos", h1: "Fichas técnicas de motos", title: "Fichas técnicas de motos por marca y modelo", description: "Índice de todas las fichas técnicas de motos y scooters, ordenadas por marca y modelo con cilindrada, potencia y precio." },
  patinetes: { nombre: "Patinetes", h1: "Fichas técnicas de patinetes eléctricos", title: "Fichas técnicas de patinetes eléctricos por marca", description: "Índice de todas las fichas técnicas de patinetes eléctricos, ordenadas por marca y modelo con autonomía, velocidad y precio." },
  // 18/10/2026 (sección /caravanas/): title ≤60 car., description 130-155 car., sin marca.
  caravanas: { nombre: "Caravanas", h1: "Fichas técnicas de caravanas", title: "Caravanas: fichas técnicas, precios y MMA 2026", description: "Fichas técnicas de caravanas por marca y modelo: precio, MMA, carnet necesario, dimensiones, plazas y carga útil, con datos verificados del fabricante." },
};
const CARGA = {
  coches: () => import("@/lib/hub-coches.generated.json"),
  motos: () => import("@/lib/hub-motos.generated.json"),
  patinetes: () => import("@/lib/hub-patinetes.generated.json"),
  caravanas: () => import("@/lib/hub-caravanas.generated.json"),
} as unknown as Record<Categoria, () => Promise<{ default: [string, string][] }>>;
const marca = (n: string) => n.split(" ")[0];
const ancla = (m: string) => "m-" + m.toLowerCase().normalize("NFD").replace(/[^a-z0-9]+/g, "-");

export default function HubFichas({ categoria }: { categoria: Categoria }) {
  // 18/10/2026: las caravanas tienen su propio hub con filtros y normativa.
  if (categoria === "caravanas") return <HubCaravanas />;
  const meta = HUB_META[categoria];
  useSeo({ title: meta.title, description: meta.description, canonical: `/${categoria}/` });
  const [lista, setLista] = useState<[string, string][] | null>(null);
  useEffect(() => { let ok = true; CARGA[categoria]().then((m) => ok && setLista(m.default)); return () => { ok = false; }; }, [categoria]);
  const grupos = useMemo(() => {
    const g = new Map<string, [string, string][]>();
    for (const it of lista ?? []) { const k = marca(it[1]); g.set(k, [...(g.get(k) ?? []), it]); }
    return [...g.entries()].sort((a, b) => a[0].localeCompare(b[0], "es"));
  }, [lista]);
  return (
    <div className="min-h-screen bg-slate-50">
      <SharedNavbar />
      <main className="max-w-5xl mx-auto px-4 pt-[81px] pb-16 space-y-6">
        <nav aria-label="Migas de pan" className="text-xs text-gray-500"><Link to="/">Inicio</Link> / <span>{meta.nombre}</span></nav>
        <h1 className="text-3xl font-black text-gray-900">{meta.h1}</h1>
        <p className="text-sm text-gray-600 max-w-2xl">{meta.description}</p>
        {lista && <p className="text-xs text-gray-500">{(CONTEOS as Record<string, number>)[categoria] ?? lista.length} fichas · {grupos.length} marcas</p>}
        {(MARCAS as unknown as Record<string, [string, string][]>)[categoria]?.length > 0 && (
          <section className="space-y-2"><h2 className="text-lg font-black text-gray-900">Marcas</h2>
            <ul className="flex flex-wrap gap-1.5">{(MARCAS as unknown as Record<string, [string, string][]>)[categoria].map(([s, n]) => <li key={s}><Link to={`/${categoria}/marca/${s}/`} className="block text-xs rounded-full border border-gray-200 bg-white px-2.5 py-1 hover:border-red-400">{n}</Link></li>)}</ul>
          </section>)}
        <div className="flex flex-wrap gap-1.5">{grupos.map(([m]) => <a key={m} href={`#${ancla(m)}`} className="text-xs rounded-full border border-gray-200 bg-white px-2.5 py-1 hover:border-red-400">{m}</a>)}</div>
        {grupos.map(([m, items]) => (
          <section key={m} id={ancla(m)} className="space-y-2">
            <h2 className="text-lg font-black text-gray-900">{m}</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1">
              {items.map(([s, n]) => <li key={s}><Link to={`/${categoria}/${s}/`} className="text-sm text-gray-700 hover:text-red-600">{n}</Link></li>)}
            </ul>
          </section>
        ))}
      </main>
      <SharedFooter editorial={{ ambito: categoria, tipo: "listado" }} />
    </div>
  );
}

// ── Hub /caravanas/ (18/10/2026) ─────────────────────────────────────────────
// Filtros por marca, longitud y plazas sobre los datos estructurados
// (hub-caravanas-filtros.generated.json). JSON-LD: CollectionPage + ItemList
// de fichas + BreadcrumbList explícito. Sin cifras inventadas.
type FiltroCaravana = {
  id: string;
  marca: string;
  modelo: string;
  largoMm: number | null;
  plazas: number | null;
  precioDesde: number | null;
  precioAprox: boolean;
  mmaKg: number | null;
  carnetNecesario: string | null;
  imagen: string | null;
};

const SELECT_CARAVANA =
  "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20";

const fmtM = (mm: number | null) =>
  mm == null ? "—" : `${(mm / 1000).toLocaleString("es-ES", { maximumFractionDigits: 2 })} m`;
const fmtPrecio = (v: number | null, aprox = false) =>
  v == null ? "Precio no disponible" : `${aprox ? "≈ " : ""}${v.toLocaleString("es-ES")} €`;

function HubCaravanas() {
  const meta = HUB_META.caravanas;
  const datos = FILTROS_CARAVANAS as FiltroCaravana[];
  const [fMarca, setFMarca] = useState("todas");
  const [fLong, setFLong] = useState("todas");
  const [fPlazas, setFPlazas] = useState("todas");

  const marcas = useMemo(
    () => [...new Set(datos.map((d) => d.marca))].sort((a, b) => a.localeCompare(b, "es")),
    [datos],
  );

  const filtradas = useMemo(
    () =>
      datos.filter(
        (d) =>
          (fMarca === "todas" || d.marca === fMarca) &&
          (fLong === "todas" ||
            (fLong === "menos6" && d.largoMm != null && d.largoMm < 6000) ||
            (fLong === "6a7" && d.largoMm != null && d.largoMm >= 6000 && d.largoMm <= 7000) ||
            (fLong === "mas7" && d.largoMm != null && d.largoMm > 7000)) &&
          (fPlazas === "todas" ||
            (fPlazas === "2" && d.plazas === 2) ||
            (fPlazas === "4" && d.plazas === 4) ||
            (fPlazas === "5mas" && d.plazas != null && d.plazas >= 5)),
      ),
    [datos, fMarca, fLong, fPlazas],
  );

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://recurretumulta.online/caravanas/#pagina",
        name: `${meta.h1} 2026`,
        description: meta.description,
        url: "https://recurretumulta.online/caravanas/",
        inLanguage: "es-ES",
      },
      {
        "@type": "ItemList",
        // 18/10/2026: la lista completa (estable para SEO), no la filtrada.
        itemListElement: datos.map((d, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `https://recurretumulta.online/caravanas/${d.id}/`,
          name: `${d.marca} ${d.modelo}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://recurretumulta.online/" },
          { "@type": "ListItem", position: 2, name: "Caravanas", item: "https://recurretumulta.online/caravanas/" },
        ],
      },
    ],
  };
  useSeo({ title: meta.title, description: meta.description, canonical: "/caravanas/", schema });

  return (
    <div className="min-h-screen bg-slate-50">
      <SharedNavbar />
      <main className="max-w-5xl mx-auto px-4 pt-[81px] pb-16 space-y-6">
        <nav aria-label="Migas de pan" className="text-xs text-gray-500"><Link to="/">Inicio</Link> / <span>{meta.nombre}</span></nav>
        <h1 className="text-3xl font-black text-gray-900">{meta.h1}</h1>
        <p className="text-sm text-gray-600 max-w-2xl">{meta.description}</p>
        <p className="text-xs text-gray-500">{datos.length} fichas · {marcas.length} marcas</p>

        {/* ── Filtros ── */}
        <section aria-label="Filtros" className="grid gap-3 rounded-2xl border border-gray-200 bg-white p-4 sm:grid-cols-3">
          <label className="block text-xs font-bold text-gray-700">
            Marca
            <select value={fMarca} onChange={(e) => setFMarca(e.target.value)} className={`${SELECT_CARAVANA} mt-1`}>
              <option value="todas">Todas</option>
              {marcas.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </label>
          <label className="block text-xs font-bold text-gray-700">
            Longitud
            <select value={fLong} onChange={(e) => setFLong(e.target.value)} className={`${SELECT_CARAVANA} mt-1`}>
              <option value="todas">Todas</option>
              <option value="menos6">Menos de 6 m</option>
              <option value="6a7">De 6 a 7 m</option>
              <option value="mas7">Más de 7 m</option>
            </select>
          </label>
          <label className="block text-xs font-bold text-gray-700">
            Plazas
            <select value={fPlazas} onChange={(e) => setFPlazas(e.target.value)} className={`${SELECT_CARAVANA} mt-1`}>
              <option value="todas">Todas</option>
              <option value="2">2 plazas</option>
              <option value="4">4 plazas</option>
              <option value="5mas">5 o más</option>
            </select>
          </label>
        </section>

        {/* ── Tarjetas ── */}
        {filtradas.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
            <p className="font-extrabold text-gray-900">Sin resultados</p>
            <p className="mt-1 text-sm text-gray-500">Prueba a quitar algún filtro.</p>
            <button
              type="button"
              onClick={() => { setFMarca("todas"); setFLong("todas"); setFPlazas("todas"); }}
              className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700 cursor-pointer"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtradas.map((d) => (
              <li key={d.id}>
                <Link
                  to={`/caravanas/${d.id}/`}
                  className="group block h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:border-red-300 hover:shadow-md"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                    {d.imagen ? (
                      <img
                        src={d.imagen}
                        alt={`${d.marca} ${d.modelo}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                        <span className="text-3xl font-black text-gray-300">{d.marca.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">{d.marca}</p>
                    <p className="mt-0.5 font-extrabold text-gray-900 group-hover:text-red-700">{d.modelo}</p>
                    <p className="mt-1 text-base font-extrabold text-red-700">{fmtPrecio(d.precioDesde, d.precioAprox)}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {d.largoMm != null && (
                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-700">{fmtM(d.largoMm)}</span>
                      )}
                      {d.plazas != null && (
                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-700">{d.plazas} plazas</span>
                      )}
                      {d.mmaKg != null && (
                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-700">{d.mmaKg.toLocaleString("es-ES")} kg MMA</span>
                      )}
                      {d.carnetNecesario && (
                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-700">Carnet {d.carnetNecesario}</span>
                      )}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* ── Normativa para remolcar caravanas ── */}
        <section className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-6" aria-label="Normativa para remolcar caravanas">
          <h2 className="text-xl font-extrabold text-gray-900">Normativa para remolcar caravanas</h2>
          <div className="mt-3 space-y-2 text-sm text-gray-700">
            <p>
              <strong className="text-gray-900">Carnet:</strong> con el <strong>B</strong> puedes remolcar
              hasta 750 kg de MMA del remolque, o un conjunto coche + caravana que no supere los
              3.500 kg. Entre 3.501 y 4.250 kg necesitas el <strong>B96</strong>; por encima,
              el <strong>BE</strong>.
            </p>
            <p>
              <strong className="text-gray-900">Velocidad:</strong> los conjuntos están limitados a{" "}
              <strong>90 km/h</strong> en autopistas y autovías (80 km/h en el resto de vías fuera
              de poblado), aunque el turismo solo pueda ir más rápido.
            </p>
            <p>
              <strong className="text-gray-900">ITV y seguro:</strong> las caravanas de más de 750 kg de
              MMA pasan su propia ITV y necesitan un seguro propio, independiente del coche.
            </p>
            <p className="text-xs text-gray-500">
              Fuente:{" "}
              <a href="https://www.dgt.es" target="_blank" rel="noopener noreferrer" className="font-medium text-red-600 underline">
                Dirección General de Tráfico (DGT)
              </a>
              . Herramientas:{" "}
              <Link to="/calculadora-consumo-camper/" className="font-medium text-red-600 underline">
                calculadora de consumo camper
              </Link>
              {" · "}
              <Link to="/herramientas/" className="font-medium text-red-600 underline">
                todas las herramientas
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <SharedFooter editorial={{ ambito: "caravanas", tipo: "listado" }} />
    </div>
  );
}
