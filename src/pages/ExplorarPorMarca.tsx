// 24/10/2026 (fix-no-indexadas-2410): hub de fichas y artículos con pocos enlaces internos,
// agrupados por tipo y marca. Datos: src/lib/hub-poco-enlazadas.json (títulos = H1 de cada página).
import { Link } from "react-router-dom";
import Navbar from "@/components/shared-navbar.tsx";
import Footer from "@/components/shared-footer.tsx";
import { useSeo } from "@/hooks/use-seo.ts";
import items from "@/lib/hub-poco-enlazadas.json";

type Item = { url: string; titulo: string; tipo: string; marca: string };
const ORDEN = ["Coches", "Motos", "Patinetes", "Guías y normativa", "Herramientas"];
const BASE = "https://recurretumulta.online";

function agrupar(lista: Item[]) {
  const porTipo = new Map<string, Map<string, Item[]>>();
  for (const it of lista) {
    if (!porTipo.has(it.tipo)) porTipo.set(it.tipo, new Map());
    const m = porTipo.get(it.tipo)!;
    const k = it.marca || "General";
    if (!m.has(k)) m.set(k, []);
    m.get(k)!.push(it);
  }
  return ORDEN.filter((t) => porTipo.has(t)).map((t) => ({
    tipo: t,
    marcas: [...porTipo.get(t)!.entries()]
      .sort((a, b) => a[0].localeCompare(b[0], "es"))
      .map(([marca, l]) => ({ marca, l: l.sort((a, b) => a.titulo.localeCompare(b.titulo, "es")) })),
  }));
}

export default function ExplorarPorMarca() {
  const grupos = agrupar(items as Item[]);
  useSeo({
    title: "Explorar por marca: fichas, pruebas y guías ordenadas",
    description: "Índice de fichas de coches, motos y patinetes, más guías de normativa, ordenadas por tipo de vehículo y por fabricante para encontrarlas de un vistazo.",
    canonical: "/explorar-por-marca",
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: "Explorar por marca", item: `${BASE}/explorar-por-marca/` },
      ],
    },
  });
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 pt-24 pb-12 space-y-8">
        <nav aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-gray-500">
          <Link to="/" className="hover:text-red-600">Inicio</Link>
          <span aria-hidden="true">/</span>
          <span className="text-gray-400">Explorar por marca</span>
        </nav>
        <header className="space-y-3">
          <h1 className="text-3xl font-black">Explorar por marca</h1>
          <p className="text-sm text-gray-700 leading-relaxed">
            Algunas de nuestras fichas y artículos quedan lejos de los menús habituales. Aquí los reunimos en un
            único índice: primero eliges el tipo de vehículo, luego el fabricante, y llegas directo a la página.
            Las guías sobre normas y multas tienen su propio apartado al final.
          </p>
        </header>
        <div className="flex flex-wrap gap-2 text-sm">
          {grupos.map((g) => (
            <a key={g.tipo} href={`#${g.tipo.toLowerCase().replace(/\s+/g, "-")}`} className="rounded-full border border-gray-200 px-3 py-1 hover:border-red-300">{g.tipo}</a>
          ))}
        </div>
        {grupos.map((g) => (
          <section key={g.tipo} id={g.tipo.toLowerCase().replace(/\s+/g, "-")} className="space-y-4">
            <h2 className="text-xl font-black">{g.tipo}</h2>
            {g.marcas.map(({ marca, l }) => (
              <div key={marca} className="space-y-1">
                <h3 className="text-sm font-bold text-gray-900">{marca}</h3>
                <ul className="list-disc pl-5 text-sm space-y-0.5">
                  {l.map((it) => (
                    <li key={it.url}><Link to={it.url} className="text-red-600 hover:underline">{it.titulo}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ))}
      </main>
      <footer className="border-t border-gray-100 py-6"><Footer /></footer>
    </div>
  );
}
