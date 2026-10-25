import { useParams, Link } from "react-router-dom";
import { MapPin, Camera, ArrowRight, Shield } from "lucide-react";
import { getProvinciaBySlug, PROVINCIAS } from "@/lib/provincias-data.ts";
import { useSeo } from "@/hooks/use-seo.ts";
import { destinoRadar } from "@/lib/radar-a-multas.generated.ts";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import { CCAA_SLUG, radaresDeProvincia } from "./page.tsx";

// 22/10/2026 (v4.5.5, frente E): página de provincia con SUS radares dentro —
// el camino principal del usuario: menú → Provincias → provincia → ficha-mapa
// de cada radar (/radares/<id>/). Datos: listado oficial (radares-por-provincia).
const CIUDAD_A_PROVINCIA: Record<string, string> = { vigo: "pontevedra", "santiago-compostela": "a-coruna" };

export default function ProvinciaRadaresPage() {
  const { provincia: slug = "" } = useParams<{ provincia: string }>();
  const p = getProvinciaBySlug(slug);
  const slugRadares = CIUDAD_A_PROVINCIA[slug] ?? slug;
  const esCiudad = slugRadares !== slug;
  const nombreRadares = getProvinciaBySlug(slugRadares)?.nombre ?? p?.nombre ?? "";
  const radares = p ? radaresDeProvincia(slug) : [];
  const ccaaSlug = p ? CCAA_SLUG[p.ccaa] : undefined;
  const hermanas = p
    ? PROVINCIAS.filter((x) => x.ccaa === p.ccaa && x.slug !== p.slug).slice(0, 8)
    : [];

  useSeo(
    !p
      ? {
          title: "Provincia no encontrada",
          description: "La provincia que buscas no existe. Consulta los radares por provincias de España.",
          canonical: "/provincias",
          noindex: true,
        }
      : {
          title: `Radares en ${p.nombre}: ${radares.length} radares fijos y de tramo con mapa`,
          description: `Todos los radares con ficha propia en ${p.nombre}: carretera, punto kilométrico, sentido, límite y municipio, con enlace a su ficha con mapa y Street View.`,
          canonical: `/provincias/${p.slug}`,
          keywords: [`radares ${p.nombre}`, `radares fijos ${p.nombre}`, "radares DGT", "multas radar"],
          schema: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://recurretumulta.online/" },
              { "@type": "ListItem", position: 2, name: "Provincias", item: "https://recurretumulta.online/provincias/" },
              { "@type": "ListItem", position: 3, name: p.nombre, item: `https://recurretumulta.online/provincias/${p.slug}/` },
            ],
          },
        }
  );

  if (!p) {
    return (
      <div className="min-h-screen bg-gray-50">
        <SharedNavbar />
        <main className="mx-auto max-w-xl px-4 pb-16 pt-24 text-center">
          <h1 className="text-2xl font-extrabold text-gray-900">Provincia no encontrada</h1>
          <p className="mt-3 text-gray-600">
            No hay ninguna provincia con esa dirección. Revisa el{" "}
            <Link to="/provincias/" className="font-semibold text-red-600 hover:underline">
              listado de provincias
            </Link>
            .
          </p>
        </main>
        <SharedFooter />
      </div>
    );
  }

  const carreteras = [...new Set(radares.map((r) => r.carretera))].slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      <SharedNavbar />
      <main className="mx-auto max-w-4xl px-4 pb-16 pt-24">
        <nav aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-gray-500">
          <Link to="/" className="hover:text-gray-900">Inicio</Link>
          <span aria-hidden="true">/</span>
          <Link to="/provincias/" className="hover:text-gray-900">Provincias</Link>
          <span aria-hidden="true">/</span>
          <span className="text-gray-800 font-semibold">{p.nombre}</span>
        </nav>

        <h1 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
          Radares en {p.nombre}
        </h1>
        {esCiudad ? (
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            {p.nombre} forma parte de la provincia de {nombreRadares}: estos son los radares con
            ficha propia de toda la provincia, incluidos los del entorno de {p.nombre}.
          </p>
        ) : null}
        {radares.length > 0 ? (
          <>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              En {p.nombre} tenemos fichados <strong>{radares.length} radares</strong> del listado
              oficial{carreteras.length > 0 ? <> — entre otras vías, en la {carreteras.join(", la ")} —</> : null}.
              Cada uno enlaza a su ficha con mapa, Street View y los datos exactos: carretera, punto
              kilométrico, sentido de la marcha, tipo de radar, límite de velocidad y municipio.
            </p>
            <p className="mt-3 text-base leading-relaxed text-gray-700">
              Si tu multa viene de uno de ellos, abre su ficha antes de pagar: allí verás qué
              revisar (verificación metrológica en vigor, señalización del límite y foto que
              identifique tu vehículo) y cómo analizar la denuncia gratis con nuestra IA.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {radares.map((r) => (
                <Link
                  key={r.id}
                  to={destinoRadar(r.id)}
                  className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-800 transition hover:border-red-400 hover:text-red-600"
                >
                  <Camera className="h-4 w-4 shrink-0 text-red-500" />
                  <span>
                    {r.carretera} · pk {r.pk}
                    {r.sentido ? ` · ${r.sentido}` : ""}
                    {r.tipo ? ` · ${r.tipo}` : ""}
                    {r.municipio ? ` · ${r.municipio}` : ""}
                    {r.limite ? ` · límite ${r.limite} km/h` : ""}
                  </span>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            En el listado oficial con el que trabajamos no consta ningún radar fijo, de tramo o de
            cabina con ficha propia en {p.nombre}. No significa que no puedas recibir una multa de
            radar aquí: los radares móviles no se publican en ningún listado. Si te ha llegado una
            denuncia, analízala gratis con nuestra IA antes de pagarla.
          </p>
        )}

        <section className="mt-10 rounded-3xl border border-gray-200 bg-white p-5">
          <h2 className="flex items-center gap-2 text-lg font-black text-gray-900">
            <Shield className="h-5 w-5 text-red-600" /> ¿Una multa en {p.nombre}?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-700">
            En la página de{" "}
            <Link to={`/multas/${p.slug}/`} className="font-semibold text-red-600 hover:underline">
              multas en {p.nombre}
            </Link>{" "}
            tienes el organismo que tramita las sanciones en la provincia, los plazos de alegaciones
            y dónde presentar el recurso.
            {ccaaSlug ? (
              <>
                {" "}Y en{" "}
                <Link to={`/comunidades/${ccaaSlug}/`} className="font-semibold text-red-600 hover:underline">
                  {p.ccaa}
                </Link>{" "}
                verás el marco completo de la comunidad autónoma.
              </>
            ) : null}
          </p>
        </section>

        {hermanas.length > 0 ? (
          <section className="mt-10">
            <h2 className="flex items-center gap-2 text-lg font-black text-gray-900">
              <MapPin className="h-5 w-5 text-red-600" /> Otras provincias de {p.ccaa}
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {hermanas.map((h) => (
                <Link
                  key={h.slug}
                  to={`/multas/${h.slug}/`}
                  className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-semibold text-gray-700 transition hover:border-red-400 hover:text-red-600"
                >
                  {h.nombre} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <SharedFooter />
    </div>
  );
}
