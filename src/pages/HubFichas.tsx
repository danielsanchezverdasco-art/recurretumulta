// Hubs de categoría /coches/, /motos/, /patinetes/ (13/10/2026).
// Lista generada desde las fichas publicadas (scripts/gen-hubs.py). Enlaces siempre con barra final.
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/use-seo.ts";
import MARCAS from "@/lib/hub-marcas.generated.json";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";

export type Categoria = "coches" | "motos" | "patinetes";
// Títulos neutros y descriptivos: pendientes de revisión por SEO.
export const HUB_META: Record<Categoria, { h1: string; title: string; description: string; nombre: string }> = {
  coches: { nombre: "Coches", h1: "Fichas técnicas de coches", title: "Fichas técnicas de coches por marca y modelo", description: "Índice de todas las fichas técnicas de coches: eléctricos, híbridos y de combustión, ordenadas por marca y modelo con precio, potencia y autonomía." },
  motos: { nombre: "Motos", h1: "Fichas técnicas de motos", title: "Fichas técnicas de motos por marca y modelo", description: "Índice de todas las fichas técnicas de motos y scooters, ordenadas por marca y modelo con cilindrada, potencia y precio." },
  patinetes: { nombre: "Patinetes", h1: "Fichas técnicas de patinetes eléctricos", title: "Fichas técnicas de patinetes eléctricos por marca", description: "Índice de todas las fichas técnicas de patinetes eléctricos, ordenadas por marca y modelo con autonomía, velocidad y precio." },
};
const CARGA = {
  coches: () => import("@/lib/hub-coches.generated.json"),
  motos: () => import("@/lib/hub-motos.generated.json"),
  patinetes: () => import("@/lib/hub-patinetes.generated.json"),
} as unknown as Record<Categoria, () => Promise<{ default: [string, string][] }>>;
const marca = (n: string) => n.split(" ")[0];
const ancla = (m: string) => "m-" + m.toLowerCase().normalize("NFD").replace(/[^a-z0-9]+/g, "-");

export default function HubFichas({ categoria }: { categoria: Categoria }) {
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
        {lista && <p className="text-xs text-gray-500">{lista.length} fichas · {grupos.length} marcas</p>}
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
