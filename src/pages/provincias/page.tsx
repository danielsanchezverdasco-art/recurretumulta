import { Link } from "react-router-dom";
import { MapPin, Radar, ArrowRight, Camera } from "lucide-react";
import { PROVINCIAS } from "@/lib/provincias-data.ts";
import { COMUNIDADES } from "@/lib/comunidades-data.ts";
import { RADARES_POR_PROVINCIA } from "@/lib/radares-por-provincia.generated.ts";
import { useSeo } from "@/hooks/use-seo.ts";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";

// 22/10/2026 (v4.5.5, frente E): /provincias/ es LA entrada geográfica principal
// (menú → Provincias → provincia con sus radares). Cada provincia enlaza a su
// página con el listado completo de radares oficiales enlazando a /radares/<id>/.
export const CCAA_SLUG: Record<string, string> = {
  "Andalucía": "andalucia",
  "Aragón": "aragon",
  "Canarias": "canarias",
  "Cantabria": "cantabria",
  "Castilla y León": "castilla-y-leon",
  "Castilla-La Mancha": "castilla-la-mancha",
  "Cataluña": "cataluna",
  "Ciudad Autónoma de Ceuta": "ceuta",
  "Ciudad Autónoma de Melilla": "melilla",
  "Comunidad Foral de Navarra": "navarra",
  "Comunidad de Madrid": "madrid",
  "Comunitat Valenciana": "comunidad-valenciana",
  "Extremadura": "extremadura",
  "Galicia": "galicia",
  "Islas Baleares": "baleares",
  "La Rioja": "la-rioja",
  "País Vasco": "pais-vasco",
  "Principado de Asturias": "asturias",
  "Región de Murcia": "murcia",
};

const CIUDAD_A_PROVINCIA: Record<string, string> = { vigo: "pontevedra", "santiago-compostela": "a-coruna" };

export function radaresDeProvincia(slug: string) {
  return RADARES_POR_PROVINCIA[CIUDAD_A_PROVINCIA[slug] ?? slug] ?? [];
}

export default function ProvinciasIndexPage() {
  const totalRadares = PROVINCIAS.reduce((n, p) => n + radaresDeProvincia(p.slug).length, 0);
  useSeo({
    title: "Radares por provincias: dónde están los radares fijos en España",
    description:
      "Elige tu provincia y consulta sus radares fijos, de tramo y de cabina con ficha propia: carretera, punto kilométrico, sentido, límite y municipio, con enlace a su ficha con mapa.",
    canonical: "/provincias",
    keywords: ["radares por provincias", "radares fijos España", "dónde están los radares", "radares DGT provincias"],
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://recurretumulta.online/" },
        { "@type": "ListItem", position: 2, name: "Provincias", item: "https://recurretumulta.online/provincias/" },
      ],
    },
  });

  const porCcaa = COMUNIDADES.map((c) => ({
    comunidad: c,
    provincias: PROVINCIAS.filter((p) => CCAA_SLUG[p.ccaa] === c.slug),
  })).filter((g) => g.provincias.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <SharedNavbar />
      <main className="mx-auto max-w-4xl px-4 pb-16 pt-24">
        <nav aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-gray-500">
          <Link to="/" className="hover:text-gray-900">Inicio</Link>
          <span aria-hidden="true">/</span>
          <span className="text-gray-800 font-semibold">Provincias</span>
        </nav>

        <h1 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
          Radares por provincias
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gray-700">
          Elige tu provincia y verás <strong>todos sus radares con ficha propia</strong>: los{" "}
          {totalRadares} radares fijos, de tramo y de cabina del listado oficial (DGT y organismos
          autonómicos de tráfico) que tenemos fichados en España, cada uno con su carretera, punto
          kilométrico, sentido, límite de velocidad y municipio, y con enlace directo a su ficha
          con mapa y Street View.
        </p>
        <p className="mt-3 text-base leading-relaxed text-gray-700">
          ¿Te ha llegado una multa y no sabes si venía de uno de estos radares? En la ficha de cada
          radar te contamos qué revisar antes de pagar: verificación metrológica en vigor,
          señalización del límite y si la foto identifica tu vehículo. Y si prefieres buscar por
          carretera o ver el mapa completo, tienes el{" "}
          <Link to="/provincias/" className="font-semibold text-red-600 hover:underline">
            índice general de radares
          </Link>
          .
        </p>

        {porCcaa.map(({ comunidad, provincias }) => (
          <section key={comunidad.slug} className="mt-10">
            <h2 className="flex items-center gap-2 text-xl font-black text-gray-900">
              <MapPin className="h-5 w-5 text-red-600" /> {comunidad.nombre}
            </h2>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {provincias.map((p) => {
                const n = radaresDeProvincia(p.slug).length;
                return (
                  <Link
                    key={p.slug}
                    to={`/multas/${p.slug}/`}
                    className="flex items-center justify-between gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 font-semibold text-gray-800 transition hover:border-red-400 hover:text-red-600"
                  >
                    <span className="flex items-center gap-2">
                      <Camera className="h-4 w-4 text-red-500" /> {p.nombre}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      {n > 0 ? `${n} radares` : "Sin radares fichados"} <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}

        <section className="mt-12 rounded-3xl border border-gray-200 bg-white p-5">
          <h2 className="flex items-center gap-2 text-lg font-black text-gray-900">
            <Radar className="h-5 w-5 text-red-600" /> Otras formas de consultar
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
            <li>
              <Link to="/provincias/" className="font-semibold text-red-600 hover:underline">
                Índice de radares
              </Link>
              : todos los radares con ficha, ordenados por comunidades.
            </li>
            <li>
              <Link to="/comunidades/" className="font-semibold text-red-600 hover:underline">
                Comunidades autónomas
              </Link>
              : quién tramita las multas en cada comunidad y sus radares.
            </li>
            <li>
              <Link to="/multas/" className="font-semibold text-red-600 hover:underline">
                Recurrir multas por provincia
              </Link>
              : organismo competente, plazos y dónde presentar el recurso en tu provincia.
            </li>
          </ul>
        </section>
      </main>
      <SharedFooter />
    </div>
  );
}
