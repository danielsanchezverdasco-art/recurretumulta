// Página de marca /{categoria}/marca/{slug}/ (13/10/2026). El HTML prerenderado
// (scripts/gen-marcas.py) lleva los datos en <script id="hub-marca-data">; en navegación
// SPA se leen del HTML de la propia URL.
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSeo } from "@/hooks/use-seo.ts";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import { useUltimaActualizacion } from "@/hooks/use-ficha-fechas.ts";

type Datos = { p: string; cat: string; catNombre: string; h1: string; title: string; description: string; intro: string; items: [string, string][] };
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
  return (
    <div className="min-h-screen bg-slate-50">
      <SharedNavbar />
      <main className="max-w-5xl mx-auto px-4 pt-[81px] pb-16 space-y-6">
        {d ? (<>
          <nav aria-label="Migas de pan" className="text-xs text-gray-500"><Link to="/">Inicio</Link> / <Link to={`/${d.cat}/`}>{d.catNombre}</Link> / <span>{d.h1.replace(/^Fichas técnicas de [a-zé ]+ /i, "")}</span></nav>
          <h1 className="text-3xl font-black text-gray-900">{d.h1}</h1>
          <p className="text-sm text-gray-700 max-w-3xl leading-relaxed">{d.intro}</p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1">
            {d.items.map(([s, n]) => <li key={s}><Link to={`/${d.cat}/${s}/`} className="text-sm text-gray-700 hover:text-red-600">{n}</Link></li>)}
          </ul>
        </>) : <p className="text-sm text-gray-500">{error ? "No hemos podido cargar esta marca." : "Cargando…"}</p>}
      </main>
      <SharedFooter editorial={{ ambito, tipo: "listado", actualizado }} />
    </div>
  );
}
