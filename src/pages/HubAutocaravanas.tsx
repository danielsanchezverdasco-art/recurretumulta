// Hub /autocaravanas/ — índice de las 50 fichas técnicas de autocaravanas (18/10/2026).
// Mismo diseño visual que HubFichas (SharedNavbar, migas, h1, descripción,
// píldoras de marca, listados agrupados por marca) + filtros que pidió Grok
// (marca, tipo: perfilada/capuchina/integral/camper, plazas).
// Datos: AUTOCARAVANAS_LITE (src/lib/autocaravanas-lite.generated.ts), generado
// por scripts/gen-data-loaders.mjs — el hub no carga las fichas completas.
// NOINDEX hasta completar la sección (orden de Grok 20:03 18/10/2026).
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/use-seo.ts";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import { AUTOCARAVANAS_LITE, type AutocaravanaLite } from "@/lib/autocaravanas-lite.generated.ts";
import { fmtEur } from "@/lib/formato.ts";

const TIPOS = [
  { id: "perfilada", etiqueta: "Perfilada" },
  { id: "capuchina", etiqueta: "Capuchina" },
  { id: "integral", etiqueta: "Integral" },
  { id: "camper", etiqueta: "Camper" },
] as const;
const ETIQUETA_TIPO: Record<string, string> = Object.fromEntries(TIPOS.map((t) => [t.id, t.etiqueta]));
const etiquetaTipo = (t: string | null) => (t && ETIQUETA_TIPO[t]) || t || "—";
const ancla = (m: string) => "m-" + m.toLowerCase().normalize("NFD").replace(/[^a-z0-9]+/g, "-");
const SELECT =
  "rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-red-600 focus:outline-none";

export default function HubAutocaravanas() {
  const [marca, setMarca] = useState("");
  const [tipo, setTipo] = useState("");
  const [plazas, setPlazas] = useState("");

  const marcas = useMemo(
    () => [...new Set(AUTOCARAVANAS_LITE.map((a) => a.marca).filter((m): m is string => !!m))].sort((a, b) => a.localeCompare(b, "es")),
    []
  );
  const plazasOpts = useMemo(
    () =>
      [...new Set(AUTOCARAVANAS_LITE.map((a) => a.plazas).filter((p): p is number => p != null))].sort((a, b) => a - b),
    []
  );
  const lista = useMemo(
    () =>
      AUTOCARAVANAS_LITE.filter(
        (a) =>
          (!marca || a.marca === marca) &&
          (!tipo || a.tipo === tipo) &&
          (!plazas || String(a.plazas) === plazas)
      ),
    [marca, tipo, plazas]
  );
  const grupos = useMemo(() => {
    const g = new Map<string, AutocaravanaLite[]>();
    for (const a of lista) {
      const k = a.marca || "Otras marcas";
      g.set(k, [...(g.get(k) ?? []), a]);
    }
    return [...g.entries()].sort((x, y) => x[0].localeCompare(y[0], "es"));
  }, [lista]);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://recurretumulta.online/autocaravanas/#coleccion",
        url: "https://recurretumulta.online/autocaravanas/",
        name: "Fichas técnicas de autocaravanas 2026: precios, MMA y carnet",
        description:
          "Todas las fichas técnicas de autocaravanas: perfiladas, capuchinas, integrales y campers, con precio, MMA, carnet necesario y plazas. Filtra por marca, tipo y plazas.",
        inLanguage: "es-ES",
        isPartOf: { "@id": "https://recurretumulta.online/#website" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://recurretumulta.online/" },
          { "@type": "ListItem", position: 2, name: "Autocaravanas", item: "https://recurretumulta.online/autocaravanas/" },
        ],
      },
    ],
  };

  useSeo({
    // 18/10/2026: la sección queda en noindex hasta completarla (orden de Grok).
    noindex: true,
    title: "Fichas técnicas de autocaravanas 2026: precios, MMA y carnet",
    description:
      "Todas las fichas técnicas de autocaravanas: perfiladas, capuchinas, integrales y campers, con precio, MMA, carnet necesario y plazas. Filtra por marca, tipo y plazas.",
    canonical: "/autocaravanas/",
    schema,
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <SharedNavbar />
      <main className="max-w-5xl mx-auto px-4 pt-[81px] pb-16 space-y-6">
        <nav aria-label="Migas de pan" className="text-xs text-gray-500">
          <Link to="/">Inicio</Link> / <span>Autocaravanas</span>
        </nav>
        <h1 className="text-3xl font-black text-gray-900">Fichas técnicas de autocaravanas</h1>
        <p className="text-sm text-gray-600 max-w-2xl">
          La guía completa para elegir tu casa sobre ruedas: 50 fichas técnicas de autocaravanas
          2026 con el dato que de verdad decide la compra —la MMA y el carnet que necesitas para
          conducirla—. Perfiladas ágiles para rutear, capuchinas familiares con camas para los
          niños, integrales premium y campers compactos para escapadas: cada ficha trae precio,
          plazas, dimensiones, carga útil y las fuentes oficiales donde lo verificamos.
        </p>
        <p className="text-xs text-gray-500">
          {lista.length} fichas · {grupos.length} marcas
        </p>

        {/* Filtros (orden de Grok 20:03): marca, tipo, plazas */}
        <section aria-label="Filtros" className="flex flex-wrap gap-2">
          <select aria-label="Filtrar por marca" className={SELECT} value={marca} onChange={(e) => setMarca(e.target.value)}>
            <option value="">Todas las marcas</option>
            {marcas.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
          <select aria-label="Filtrar por tipo" className={SELECT} value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="">Todos los tipos</option>
            {TIPOS.map((t) => (
              <option key={t.id} value={t.id}>{t.etiqueta}</option>
            ))}
          </select>
          <select aria-label="Filtrar por plazas" className={SELECT} value={plazas} onChange={(e) => setPlazas(e.target.value)}>
            <option value="">Todas las plazas</option>
            {plazasOpts.map((p) => (
              <option key={p} value={String(p)}>{p} plazas</option>
            ))}
          </select>
          {(marca || tipo || plazas) && (
            <button
              type="button"
              onClick={() => { setMarca(""); setTipo(""); setPlazas(""); }}
              className="text-xs font-semibold text-red-700 hover:underline px-2"
            >
              Limpiar filtros
            </button>
          )}
        </section>

        {marcas.length > 0 && (
          <section className="space-y-2">
            <h2 className="text-lg font-black text-gray-900">Marcas</h2>
            <ul className="flex flex-wrap gap-1.5">
              {marcas.map((m) => (
                <li key={m}>
                  <button
                    type="button"
                    onClick={() => setMarca(marca === m ? "" : m)}
                    className={`block text-xs rounded-full border px-2.5 py-1 transition-colors ${
                      marca === m ? "border-red-600 bg-red-50 text-red-800 font-bold" : "border-gray-200 bg-white hover:border-red-400"
                    }`}
                  >
                    {m}
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}

        {lista.length === 0 && (
          <p className="text-sm text-gray-600">Ninguna ficha coincide con esos filtros. Prueba a quitar alguno.</p>
        )}
        {grupos.map(([m, items]) => (
          <section key={m} id={ancla(m)} className="space-y-3">
            <h2 className="text-lg font-black text-gray-900">{m}</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((a) => {
                const foto = a.imagenOficial || a.imagen;
                return (
                  <li key={a.id}>
                    <Link
                      to={`/autocaravanas/${a.id}/`}
                      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-red-300 transition-all h-full"
                    >
                      {foto && (
                        <div className="aspect-video overflow-hidden bg-gray-100">
                          <img
                            src={foto}
                            alt={`${a.marca} ${a.modelo}`}
                            loading="lazy"
                            className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform"
                          />
                        </div>
                      )}
                      <div className="flex flex-col gap-1 p-3">
                        <p className="text-sm font-bold text-gray-900 group-hover:text-red-700">
                          {a.marca} {a.modelo}
                        </p>
                        <p className="text-xs text-gray-500">
                          {etiquetaTipo(a.tipo)}
                          {a.plazas != null && ` · ${a.plazas} plazas`}
                        </p>
                        <p className="text-sm font-extrabold text-gray-900">
                          {a.precioDesde != null ? `Desde ${fmtEur(a.precioDesde)}` : "Precio no publicado"}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </main>
      <SharedFooter editorial={{ ambito: "autocaravanas", tipo: "listado" }} />
    </div>
  );
}
