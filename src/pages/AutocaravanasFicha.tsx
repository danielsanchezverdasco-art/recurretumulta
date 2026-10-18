// Ficha de autocaravana /autocaravanas/<id>/ (18/10/2026).
// Espejo funcional de CochesFicha: carga el dominio "autocaravana"
// (scripts/gen-data-loaders.mjs), tabla con las filas propias de la sección
// (MMA, carnet necesario, carga útil), bloque de herramientas, E-E-A-T
// (autor, fechas reales, fuentes, «cómo lo verificamos») y JSON-LD con
// BreadcrumbList. NOINDEX hasta completar la sección (orden de Grok 20:03).
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSeo } from "@/hooks/use-seo.ts";
import { useFichaFechas } from "@/hooks/use-ficha-fechas.ts";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import { loadArrayItem } from "@/lib/data-loader-utils.ts";
import { cargarFichaExtra, type FichaExtra } from "@/lib/ficha-extra.ts";
import type { Autocaravana } from "@/lib/autocaravanas-tipos.ts";
import { fmtEur, fmtMiles } from "@/lib/formato.ts";
import { productoFicha } from "@/lib/schema-ficha.ts";
import RivalesCarrusel from "@/components/ficha/RivalesCarrusel.tsx";

const ETIQUETA_TIPO: Record<string, string> = {
  perfilada: "Perfilada",
  capuchina: "Capuchina",
  integral: "Integral",
  camper: "Camper",
};
const etiquetaTipo = (t: string | null) => (t && ETIQUETA_TIPO[t]) || t || "No publicado";

const fmtKg = (v: number | null | undefined) => (v == null ? "—" : fmtMiles(v) + " kg");
const fmtPlazas = (v: number | null | undefined) => (v == null ? "—" : String(v));
const fmtDimensiones = (a: Autocaravana) =>
  a.largoMm == null || a.anchoMm == null || a.altoMm == null
    ? "—"
    : `${fmtMiles(a.largoMm)} × ${fmtMiles(a.anchoMm)} × ${fmtMiles(a.altoMm)} mm`;

type Fila = { label: string; valor: string };
function filasFicha(a: Autocaravana): Fila[] {
  return [
    { label: "Precio desde", valor: fmtEur(a.precioDesde, "No publicado oficialmente") },
    { label: "Tipo", valor: etiquetaTipo(a.tipo) },
    { label: "MMA (masa máxima autorizada)", valor: fmtKg(a.mmaKg) },
    { label: "Carnet necesario", valor: a.carnetNecesario ?? "—" },
    { label: "Carga útil", valor: fmtKg(a.cargaUtilKg ?? null) },
    { label: "Plazas", valor: fmtPlazas(a.plazas) },
    { label: "Dimensiones (L×An×Al)", valor: fmtDimensiones(a) },
    { label: "Peso", valor: fmtKg(a.pesoKg) },
    { label: "Potencia", valor: a.potenciaCv != null ? `${a.potenciaCv} CV` : "—" },
    { label: "Tracción", valor: a.traccion ?? "—" },
    { label: "Etiqueta DGT", valor: a.etiquetaDgt || "—" },
    {
      label: "Consumo",
      valor:
        a.consumo != null
          ? `${String(a.consumo).replace(".", ",")} ${a.consumoUnidad ?? ""}`.trim()
          : "—",
    },
  ];
}

function Ficha({ ficha, extra }: { ficha: Autocaravana; extra: FichaExtra }) {
  const nombre = `${ficha.marca} ${ficha.modelo}`;
  const fechas = useFichaFechas(ficha.id);
  const hero = ficha.imagenOficial || ficha.imagen || "";
  const seoImage = hero ? `https://recurretumulta.online${hero}` : undefined;
  const filas = filasFicha(ficha);
  const analisisSlug = ficha.analisisSlug ?? ficha.id;
  const tieneBlog = extra.b === 1;

  const descripcionSeo =
    `${nombre}: ficha técnica con ` +
    (ficha.precioDesde != null ? `precio desde ${fmtEur(ficha.precioDesde)}, ` : "precio no publicado oficialmente, ") +
    (ficha.mmaKg != null ? `MMA de ${fmtMiles(ficha.mmaKg)} kg` : "MMA no publicada") +
    (ficha.carnetNecesario ? ` (carnet ${ficha.carnetNecesario})` : "") +
    (ficha.plazas != null ? `, ${ficha.plazas} plazas` : "") +
    ".";

  const FAQS = [
    {
      q: `¿Cuánto cuesta ${nombre}?`,
      a:
        ficha.precioDesde != null
          ? `${nombre} parte de ${fmtEur(ficha.precioDesde)}${ficha.aprox.includes("precioDesde") ? " (precio aproximado, no oficial)" : ""}.`
          : `El fabricante no publica un precio oficial para ${nombre}: pide oferta en concesionario.`,
    },
    {
      q: `¿Qué carnet se necesita para conducir ${nombre}?`,
      a:
        ficha.carnetNecesario && ficha.mmaKg != null
          ? `El carnet ${ficha.carnetNecesario}: su MMA es de ${fmtMiles(ficha.mmaKg)} kg.`
          : ficha.carnetNecesario
            ? `El carnet ${ficha.carnetNecesario}.`
            : `Depende de su MMA, aún no publicada oficialmente para este modelo.`,
    },
    {
      q: `¿Cuántas plazas tiene ${nombre}?`,
      a: ficha.plazas != null ? `${ficha.plazas} plazas.` : `Plazas no publicadas oficialmente.`,
    },
    {
      q: `¿Qué tipo de autocaravana es ${nombre}?`,
      a: `Es una ${etiquetaTipo(ficha.tipo).toLowerCase()}.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Car",
        ...productoFicha({
          nombre,
          marca: ficha.marca,
          modelo: ficha.modelo,
          slug: ficha.id,
          image: seoImage,
          url: `https://recurretumulta.online/autocaravanas/${ficha.id}/`,
          descripcion: descripcionSeo,
          precio: ficha.precioDesde,
          precioAprox: ficha.aprox.includes("precioDesde"),
          precioOrigen: null,
        }),
        manufacturer: { "@type": "Organization", name: ficha.marca },
        bodyType: "Autocaravana",
        ...(ficha.plazas != null && { numberOfSeats: ficha.plazas }),
        ...(ficha.pesoKg != null && {
          weight: { "@type": "QuantitativeValue", value: ficha.pesoKg, unitText: "kg" },
        }),
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://recurretumulta.online/" },
          { "@type": "ListItem", position: 2, name: "Autocaravanas", item: "https://recurretumulta.online/autocaravanas/" },
          { "@type": "ListItem", position: 3, name: nombre, item: `https://recurretumulta.online/autocaravanas/${ficha.id}/` },
        ],
      },
    ],
  };

  useSeo({
    // 18/10/2026: la sección queda en noindex hasta completarla (orden de Grok).
    noindex: true,
    datePublished: fechas.publicado,
    dateModified: fechas.actualizado,
    title: `${nombre}: ficha técnica, precio y carnet`,
    description: descripcionSeo,
    canonical: `/autocaravanas/${ficha.id}/`,
    image: seoImage,
    type: "article",
    keywords: [nombre, `${nombre} ficha técnica`, `${nombre} precio`, `${nombre} MMA`, `${nombre} carnet`],
    schema: jsonLd,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <SharedNavbar />
      <main className="mx-auto max-w-4xl px-4 pb-16 pt-[81px]">
        <nav className="text-xs text-gray-500" aria-label="Migas de pan">
          <Link to="/" className="hover:underline">Inicio</Link> ·{" "}
          <Link to="/autocaravanas/" className="hover:underline">Autocaravanas</Link> ·{" "}
          <span className="text-gray-700">{nombre}</span>
        </nav>

        <article className="mt-4 space-y-8">
          <header>
            <h1 className="text-3xl font-black text-gray-900">{nombre}</h1>
            <p className="mt-1 text-sm text-gray-600">
              Ficha técnica 2026: {etiquetaTipo(ficha.tipo).toLowerCase()}
              {ficha.plazas != null && ` · ${ficha.plazas} plazas`}
              {ficha.mmaKg != null && ` · MMA ${fmtMiles(ficha.mmaKg)} kg`}
              {ficha.carnetNecesario && ` · carnet ${ficha.carnetNecesario}`}
            </p>
            {hero && (
              <img
                src={hero}
                alt={`Foto de ${nombre}`}
                className="mt-4 aspect-video w-full rounded-2xl object-cover"
                loading="eager"
              />
            )}
          </header>

          <section aria-label="Ficha técnica">
            <h2 className="text-xl font-black text-gray-900">Ficha técnica</h2>
            <dl className="mt-3 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
              {filas.map((f) => (
                <div key={f.label} className="flex items-baseline justify-between gap-4 px-4 py-2.5">
                  <dt className="text-sm text-gray-500">{f.label}</dt>
                  <dd className="text-sm font-semibold text-gray-900 text-right">{f.valor}</dd>
                </div>
              ))}
            </dl>
          </section>

          {ficha.galeria && ficha.galeria.length > 0 && (
            <section aria-label="Galería">
              <h2 className="text-xl font-black text-gray-900">Galería</h2>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {ficha.galeria.map((g, i) => (
                  <img
                    key={i}
                    src={g.src}
                    alt={g.alt || `Foto ${i + 1} de ${nombre}`}
                    loading="lazy"
                    className="aspect-video w-full rounded-xl object-cover"
                  />
                ))}
              </div>
            </section>
          )}

          <RivalesCarrusel tipo="autocaravanas" id={ficha.id} nombre={nombre} rivales={extra.r} />

          <section aria-label="Herramientas para esta autocaravana" className="rounded-2xl border border-gray-200 bg-white p-4">
            <h2 className="text-xl font-black text-gray-900">Herramientas para esta autocaravana</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link to="/calculadora-consumo-camper/" className="font-semibold text-red-700 hover:underline">
                  Calculadora de consumo camper
                </Link>
                <span className="text-gray-500"> — estima lo que gastarás en gasóleo por cada 100 km.</span>
              </li>
              <li>
                <Link to="/autocaravanas/" className="font-semibold text-red-700 hover:underline">
                  Todas las fichas de autocaravanas
                </Link>
                <span className="text-gray-500"> — compara con otras 49: perfiladas, capuchinas, integrales y campers.</span>
              </li>
              {tieneBlog && (
                <li>
                  <Link to={`/blog/${analisisSlug}/`} className="font-semibold text-red-700 hover:underline">
                    Leer el análisis completo de {nombre}
                  </Link>
                  <span className="text-gray-500"> — prueba, rivales, lo bueno y lo mejorable, preguntas frecuentes.</span>
                </li>
              )}
            </ul>
          </section>

          <section aria-label="Cómo lo verificamos" className="rounded-2xl border border-gray-200 bg-white p-4">
            <h2 className="text-xl font-black text-gray-900">Cómo lo verificamos</h2>
            <p className="mt-2 text-sm text-gray-600">
              Los datos de esta ficha salen de la documentación oficial del fabricante
              {ficha.fuenteNombre ? (
                <>
                  {" "}(<a href={ficha.fuenteUrl ?? undefined} className="text-red-700 hover:underline" target="_blank" rel="noopener noreferrer">{ficha.fuenteNombre}</a>)
                </>
              ) : (
                ""
              )}
              : MMA, carnet necesario y plazas se contrastan con la ficha técnica homologada, y el
              precio solo se publica si la marca lo anuncia oficialmente. Los campos sin fuente
              oficial se omiten en vez de estimarse.
            </p>
          </section>
        </article>
      </main>
      <SharedFooter
        editorial={{
          ambito: "autocaravanas",
          tipo: "ficha",
          publicado: fechas.publicado,
          actualizado: fechas.actualizado,
          fuentePrincipal:
            ficha.fuenteNombre && ficha.fuenteUrl
              ? { nombre: ficha.fuenteNombre, url: ficha.fuenteUrl }
              : null,
          sinHerramientas: true,
        }}
      />
    </div>
  );
}

export default function AutocaravanasFichaPage() {
  const { slug = "" } = useParams<{ slug: string }>();
  const [extra, setExtra] = useState<FichaExtra>({});
  const [ficha, setFicha] = useState<Autocaravana | null | undefined>(undefined);

  useEffect(() => {
    let alive = true;
    delete document.body.dataset.pageReady;
    (async () => {
      const [f, ex] = await Promise.all([
        loadArrayItem<Autocaravana>("autocaravana", slug, (x) => x.id === slug),
        cargarFichaExtra("autocaravanas", slug),
      ]);
      if (!alive) return;
      setExtra(ex);
      setFicha(f ?? null);
      if (alive) document.body.dataset.pageReady = "1";
    })();
    return () => {
      alive = false;
      delete document.body.dataset.pageReady;
    };
  }, [slug]);

  if (ficha === undefined) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin" aria-label="Cargando ficha" />
      </div>
    );
  }

  if (!ficha) {
    return (
      <div className="min-h-screen bg-gray-50">
        <SharedNavbar />
        <main className="mx-auto max-w-2xl px-4 py-24 text-center">
          <h1 className="text-2xl font-black text-gray-900">Ficha no encontrada</h1>
          <p className="mt-2 text-sm text-gray-600">
            No hay ninguna ficha de autocaravana con ese identificador.
          </p>
          <Link to="/autocaravanas/" className="mt-4 inline-block rounded-full bg-red-700 px-5 py-2 text-sm font-bold text-white hover:bg-red-800">
            Ver todas las autocaravanas
          </Link>
        </main>
        <SharedFooter editorial={{ ambito: "autocaravanas", tipo: "pagina" }} />
      </div>
    );
  }

  return <Ficha ficha={ficha} extra={extra} />;
}
