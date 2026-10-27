// Página de marca /{categoria}/marca/{slug}/ (13/10/2026). El HTML prerenderado
// (scripts/gen-marcas.py) lleva los datos en <script id="hub-marca-data">; en navegación
// SPA se leen del HTML de la propia URL.
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSeo } from "@/hooks/use-seo.ts";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import { useUltimaActualizacion } from "@/hooks/use-ficha-fechas.ts";

type Datos = { p: string; cat: string; catNombre: string; h1: string; title: string; description: string; intro: string; items: [string, string][]; tabla?: [string, string, string, string][] | null; resumen?: string | null; nombre?: string; editorial?: { historia?: string[]; gama?: string; destacados?: string; faq?: { q: string; a: string }[]; fuentes?: { nombre: string; url: string }[] } };
const leer = (doc: Document, p: string): Datos | null => {
  try { const d = JSON.parse(doc.getElementById("hub-marca-data")?.textContent || "null") as Datos | null; return d && d.p === p ? d : null; } catch { return null; }
};

export default function HubMarca() {
  const { pathname } = useLocation();
  const p = pathname.endsWith("/") ? pathname : pathname + "/";
  const [d, setD] = useState<Datos | null>(() => leer(document, p));
  const [error, setError] = useState(false);
  useEffect(() => {
    if (d?.p === p) return;
    let ok = true;
    fetch(p).then((r) => r.text()).then((t) => {
      const x = leer(new DOMParser().parseFromString(t, "text/html"), p);
      if (ok) { setD(x); setError(!x); }
    }).catch(() => ok && setError(true));
    return () => { ok = false; };
  }, [p, d]);
  // E-E-A-T 17/10/2026: actualizado = la ficha de la marca actualizada más recientemente
  // (mismo cálculo que scripts/gen-marcas.py en el HTML estático).
  const actualizado = useUltimaActualizacion(d?.items.map(([s]) => s) ?? []);
  useSeo({ title: d?.title ?? "Fichas técnicas por marca", description: d?.description ?? "", canonical: p, dateModified: actualizado });
  const ambito = d?.cat === "motos" ? "motos" : d?.cat === "patinetes" ? "patinetes" : "coches";
  const ed = d?.editorial;
  return (
    <div className="min-h-screen bg-slate-50">
      <SharedNavbar />
      <main className="max-w-5xl mx-auto px-4 pt-[81px] pb-16 space-y-6">
        {d ? (<>
          <nav aria-label="Migas de pan" className="text-xs text-gray-500"><Link to="/">Inicio</Link> / <Link to={`/${d.cat}/`}>{d.catNombre}</Link> / <span>{d.h1.replace(/^Fichas técnicas de [a-zé ]+ /i, "")}</span></nav>
          <h1 className="text-3xl font-black text-gray-900">{d.h1}</h1>
          <p className="text-sm text-gray-700 max-w-3xl leading-relaxed">{d.intro}</p>
          {ed?.historia && ed.historia.length > 0 && (
            <section className="space-y-2">
              <h2 className="text-lg font-black text-gray-900">Historia</h2>
              {ed.historia.map((p, i) => <p key={i} className="text-sm text-gray-700 leading-relaxed">{p}</p>)}
            </section>
          )}
          {ed?.gama && (
            <section className="space-y-2">
              <h2 className="text-lg font-black text-gray-900">Gama</h2>
              <p className="text-sm text-gray-700 leading-relaxed">{ed.gama}</p>
            </section>
          )}
          {ed?.destacados && (
            <section className="space-y-2">
              <h2 className="text-lg font-black text-gray-900">Modelos destacados</h2>
              <p className="text-sm text-gray-700 leading-relaxed">{ed.destacados}</p>
            </section>
          )}
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1">
            {d.items.map(([s, n]) => <li key={s}><Link to={`/${d.cat}/${s}/`} className="text-sm text-gray-700 hover:text-red-600">{n}</Link></li>)}
          </ul>
          {d.tabla && d.tabla.length > 0 && (
            <section className="space-y-2" data-hub-tabla>
              <h2 className="text-lg font-black text-gray-900">Comparativa rápida de {d.nombre}</h2>
              <p className="text-sm text-gray-700 max-w-3xl leading-relaxed">{d.resumen}</p>
              <div className="overflow-x-auto"><table className="text-sm text-gray-700"><thead><tr className="text-left text-xs text-gray-500"><th className="pr-3">Modelo</th><th className="pr-3">Precio desde</th><th>Dato clave</th></tr></thead><tbody>
                {d.tabla.map(([s, n, pr, dt]) => <tr key={s}><td className="py-1 pr-3"><Link to={`/${d.cat}/${s}/`} className="text-red-600 hover:underline">{n}</Link></td><td className="py-1 pr-3 whitespace-nowrap">{pr || "Sin precio oficial"}</td><td className="py-1">{dt || "—"}</td></tr>)}
              </tbody></table></div>
            </section>
          )}
          {ed?.faq && ed.faq.length > 0 && (
            <section className="space-y-2">
              <h2 className="text-lg font-black text-gray-900">Preguntas frecuentes</h2>
              {ed.faq.map((f, i) => (
                <div key={i} className="space-y-1">
                  <h3 className="text-sm font-bold text-gray-900">{f.q}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </section>
          )}
          {ed?.fuentes && ed.fuentes.length > 0 && (
            <p className="text-xs text-gray-500">Fuentes: {ed.fuentes.map((f, i) => (
              <span key={f.url}>{i > 0 ? " · " : ""}<a href={f.url} target="_blank" rel="noopener noreferrer" className="text-red-600 underline">{f.nombre}</a></span>
            ))}</p>
          )}
        </>) : <p className="text-sm text-gray-500">{error ? "No hemos podido cargar esta marca." : "Cargando…"}</p>}
      </main>
      <SharedFooter editorial={{ ambito, tipo: "listado", actualizado }} />
    </div>
  );
}
