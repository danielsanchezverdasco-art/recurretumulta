// src/pages/CaravanasIndex.tsx
// Índice /caravanas/ — listado de las 72 fichas de caravanas publicadas
// (src/lib/caravanas/index.ts, datos de comparador-caravanas-*.ts).
// Patrón visual de src/pages/CampersIndex.tsx: hero con foto + degradado,
// buscador, filtros (marca, precio, plazas para dormir), tarjetas con
// foto, contador y «Cargar más». Enlaces con barra final. Cada tarjeta
// enlaza a /caravanas/<slug>/.
// Sin noindex: página para publicar e indexar (antes de esta rama el
// índice no existía y las fichas enlazadas desde el blog daban 404).
import { useMemo, useState } from "react";
import { fmtMiles } from "@/lib/formato.ts";
import { Link } from "react-router-dom";
import { Search, SlidersHorizontal, ChevronDown, FileText } from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import { DriveInImage } from "@/components/motion.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";
import type { Caravana } from "@/lib/caravanas/tipos.ts";
import { CARAVANAS } from "@/lib/caravanas";

const HERO_IMG =
  CARAVANAS[0]?.imagenOficial || CARAVANAS[0]?.imagen || null;

const SELECT_CLASE =
  "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-[#cd001d] focus:outline-none focus:ring-2 focus:ring-[#cd001d]/20";

const fmtPrecio = (v: number | null) =>
  v == null ? "Precio no disponible" : fmtMiles(v) + " €";
const fmtNum = (v: number | null, suf: string) =>
  v == null ? "—" : `${String(v).replace(".", ",")} ${suf}`;

function TarjetaCaravana({ auto }: { auto: Caravana }) {
  const [fotoRota, setFotoRota] = useState(false);
  const foto = auto.imagenOficial || auto.imagen || null;
  const mostrarFoto = foto != null && !fotoRota;
  const nombre = `${auto.marca} ${auto.modelo}`;
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[16/9] flex-none overflow-hidden bg-gray-100">
        {mostrarFoto ? (
          <img
            src={foto!}
            alt={`Foto de la caravana ${nombre}`}
            className="h-full w-full object-cover"
            loading="lazy"
            onError={() => setFotoRota(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <span className="text-3xl font-black text-gray-300">
              {auto.marca.charAt(0)}
            </span>
          </div>
        )}
        <span className="absolute left-2 top-2 rounded-full bg-black/80 px-2.5 py-1 text-[10px] font-semibold text-white">
          Caravana
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-2.5 sm:p-3">
        <p className="truncate text-[10px] font-semibold uppercase tracking-wider text-gray-500">
          {auto.marca}
        </p>
        <h3 className="line-clamp-2 text-sm font-extrabold leading-tight text-gray-900 sm:text-base">
          {auto.modelo}
        </h3>
        <p className="text-base font-extrabold tracking-tight text-[#cd001d] sm:text-lg">
          {fmtPrecio(auto.precioDesde)}
        </p>
        <div className="grid grid-cols-2 rounded-lg bg-gray-100 py-1.5 text-center">
          <div className="px-1">
            <b className="block truncate text-xs text-gray-900 sm:text-[13px]">
              {fmtNum(auto.plazas, "plazas")}
            </b>
            <span className="block text-[8px] font-medium uppercase tracking-wide text-gray-500 sm:text-[9px]">
              plazas dormir
            </span>
          </div>
          <div className="border-l border-gray-300 px-1">
            <b className="block truncate text-xs text-gray-900 sm:text-[13px]">
              {auto.carnetNecesario ? `Carnet ${auto.carnetNecesario}` : "—"}
            </b>
            <span className="block text-[8px] font-medium uppercase tracking-wide text-gray-500 sm:text-[9px]">
              carnet
            </span>
          </div>
        </div>
        <div className="mt-auto pt-1">
          <Link
            to={`/caravanas/${auto.id}/`}
            className="block rounded-lg bg-[#cd001d] px-2 py-2 text-center text-xs font-bold text-white transition hover:bg-[#a50018]"
          >
            Ver ficha completa →
          </Link>
        </div>
      </div>
    </article>
  );
}

const FAQS = [
  {
    q: "¿Qué es una caravana y en qué se diferencia de una autocaravana o una camper?",
    a: "La caravana es un remolque vivienda: no tiene motor y se engancha a un coche tractor. La autocaravana y la camper llevan la vivienda sobre un vehículo autopropulsado. La caravana permite dejar la casa en el camping y usar el coche libre durante el día, y su precio de partida suele ser menor; a cambio, hay que remolcarla y nadie puede viajar dentro durante la marcha.",
  },
  {
    q: "¿Qué carnet necesito para remolcar una caravana?",
    a: "Con el carnet B puedes remolcar un remolque de hasta 750 kg de MMA, o uno más pesado si el conjunto (coche + caravana) no supera los 3.500 kg. Si el conjunto queda entre 3.500 y 4.250 kg necesitas la ampliación B96, y con el BE puedes remolcar hasta 3.500 kg de remolque. Cada ficha indica el carnet necesario según los datos del fabricante, pero la última palabra la tiene la suma de las MMA del conjunto y la masa remolcable homologada de tu coche.",
  },
  {
    q: "¿Se puede dormir en la caravana en cualquier sitio en España?",
    a: "La DGT distingue entre pernoctar y acampar: dormir dentro de la caravana correctamente estacionada (sin desplegar toldo, mesas ni sillas fuera y sin apoyar patas fuera de lo permitido) se considera estacionamiento y está permitido donde lo esté aparcar. Acampar —desplegar elementos fuera— solo está permitido en campings y áreas autorizadas. Además, cada municipio puede tener su propia ordenanza y muchos limitan expresamente las caravanas, así que conviene revisarla antes de viajar.",
  },
  {
    q: "¿De dónde salen los datos de las caravanas?",
    a: "De las webs oficiales de las marcas y de medios especializados españoles. Cada ficha enlaza su fuente y, si la marca no publica un dato, no lo inventamos: la ficha lo dice claramente.",
  },
  {
    q: "¿Esta página es contenido duplicado de las fichas?",
    a: "No. Esta página es un índice de navegación: te ayuda a encontrar la caravana que buscas entre todas las fichas publicadas. El contenido detallado (tabla técnica, pros y contras, plan de mantenimiento y fotos) vive en cada ficha individual, con su propia URL.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://recurretumulta.online/caravanas#pagina",
      name: "Caravanas: fichas técnicas por marca y modelo",
      description:
        "Índice de fichas técnicas de caravanas 2026: remolques vivienda ordenados por marca y modelo con precio, MMA, plazas para dormir y carnet necesario para remolcarlas.",
      url: "https://recurretumulta.online/caravanas",
      inLanguage: "es-ES",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://recurretumulta.online/" },
        { "@type": "ListItem", position: 2, name: "Caravanas", item: "https://recurretumulta.online/caravanas/" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://recurretumulta.online/caravanas#faq",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function CaravanasIndexPage() {
  useSeo({
    title: "Caravanas: fichas técnicas por marca y modelo",
    description:
      "Índice de todas las fichas técnicas de caravanas: remolques vivienda con foto, precio, MMA, plazas para dormir y carnet necesario para remolcarlas. Datos verificados con las marcas.",
    canonical: "/caravanas",
    schema: jsonLd,
  });

  const [q, setQ] = useState("");
  const [fMarca, setFMarca] = useState("todas");
  const [fPrecioMax, setFPrecioMax] = useState(0);
  const [fPlazasMin, setFPlazasMin] = useState(0);
  const [orden, setOrden] = useState("nombre");
  const [filtrosAbiertos, setFiltrosAbiertos] = useState(false);
  const PAGE_SIZE = 24;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const marcas = useMemo(
    () =>
      [...new Set(CARAVANAS.map((a) => a.marca))].sort((a, b) =>
        a.localeCompare(b, "es")
      ),
    []
  );

  const filtradas = useMemo(() => {
    const query = q.trim().toLowerCase();
    const lista = CARAVANAS.filter(
      (a) =>
        (fMarca === "todas" || a.marca === fMarca) &&
        (fPrecioMax === 0 || (a.precioDesde != null && a.precioDesde <= fPrecioMax)) &&
        (fPlazasMin === 0 || (a.plazas != null && a.plazas >= fPlazasMin)) &&
        (query === "" ||
          `${a.marca} ${a.modelo}`.toLowerCase().includes(query))
    );
    if (orden === "nombre")
      lista.sort((a, b) =>
        `${a.marca} ${a.modelo}`.localeCompare(`${b.marca} ${b.modelo}`, "es")
      );
    else if (orden === "precioAsc")
      lista.sort((a, b) => (a.precioDesde ?? Infinity) - (b.precioDesde ?? Infinity));
    else if (orden === "precioDesc")
      lista.sort((a, b) => (b.precioDesde ?? -Infinity) - (a.precioDesde ?? -Infinity));
    else if (orden === "plazasDesc")
      lista.sort((a, b) => (b.plazas ?? -Infinity) - (a.plazas ?? -Infinity));
    return lista;
  }, [q, fMarca, fPrecioMax, fPlazasMin, orden]);

  const visibles = filtradas.slice(0, visibleCount);

  const hayFiltros =
    q !== "" || fMarca !== "todas" || fPrecioMax !== 0 || fPlazasMin !== 0;

  const limpiar = () => {
    setQ("");
    setFMarca("todas");
    setFPrecioMax(0);
    setFPlazasMin(0);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SharedNavbar />

      {/* Hero animado estilo guías: foto HD + degradado + entrada progresiva */}
      <div className="relative overflow-hidden">
        {HERO_IMG != null && (
          <DriveInImage
            src={HERO_IMG}
            alt="Caravana en un camping"
            eager={true}
            className="absolute inset-0"
            imgClassName="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
        <CosaEnBanner />
        <div className="relative max-w-3xl mx-auto px-4 pt-20 pb-12 sm:pt-24 space-y-4">
          <nav
            aria-label="Migas de pan"
            className="flex items-center gap-1.5 text-xs text-white/60"
          >
            <Link to="/" className="hover:text-white">Inicio</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/40" aria-current="page">Caravanas</span>
          </nav>
          <div>
            <Badge className="bg-red-600 border-red-500 text-white text-xs font-bold shadow-lg shadow-red-950/50">
              Base de datos 2026 · {CARAVANAS.length} modelos
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
            Caravanas 2026: fichas técnicas por marca y modelo
          </h1>
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            Todas las fichas técnicas de caravanas en un solo lugar: remolques
            vivienda con foto, precio, MMA, plazas para dormir y carnet
            necesario para remolcarlas. Busca por
            marca y modelo, filtra por lo que te importa y abre la ficha
            completa. Sin humo: si un dato no está publicado por una fuente
            fiable, lo verás como «—» en vez de inventado.
          </p>
          <p className="text-xs text-white/60 pt-1">
            Por <strong className="text-white/80">Daniel</strong>, fundador y responsable de contenidos · Actualizada en octubre de 2026
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 pb-24 pt-6 sm:px-6">
        {/* ── Buscador ── */}
        <div className="relative mt-4">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            value={q}
            onChange={(e) => { setQ(e.target.value); setVisibleCount(PAGE_SIZE); }}
            placeholder="Busca marca o modelo… (ej. Adria, Hobby, Knaus)"
            aria-label="Buscar por marca o modelo"
            className="w-full rounded-xl border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm shadow-sm focus:border-[#cd001d] focus:outline-none focus:ring-2 focus:ring-[#cd001d]/20"
          />
        </div>

        {/* ── Filtros (colapsables en móvil) ── */}
        <button
          type="button"
          onClick={() => setFiltrosAbiertos((v) => !v)}
          aria-expanded={filtrosAbiertos}
          className="mt-3 flex w-full items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-bold text-gray-700 sm:hidden cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" /> Filtros
            {hayFiltros && <span className="rounded-full bg-[#cd001d] px-2 py-0.5 text-[10px] font-bold text-white">•</span>}
          </span>
          <ChevronDown className={`h-4 w-4 transition-transform ${filtrosAbiertos ? "rotate-180" : ""}`} />
        </button>

        <section
          aria-label="Filtros"
          className={`mt-3 gap-x-3 gap-y-3 rounded-xl border border-gray-200 bg-white p-4 ${
            filtrosAbiertos ? "grid grid-cols-2" : "hidden"
          } sm:grid sm:grid-cols-3 lg:grid-cols-5`}
        >
          <label className="block text-xs font-bold text-gray-700">
            Marca
            <select value={fMarca} onChange={(e) => { setFMarca(e.target.value); setVisibleCount(PAGE_SIZE); }} className={`${SELECT_CLASE} mt-1`}>
              <option value="todas">Todas</option>
              {marcas.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </label>
          <label className="block text-xs font-bold text-gray-700">
            Precio máximo
            <select value={fPrecioMax} onChange={(e) => { setFPrecioMax(Number(e.target.value)); setVisibleCount(PAGE_SIZE); }} className={`${SELECT_CLASE} mt-1`}>
              <option value={0}>Sin límite</option>
              <option value={25000}>25.000 €</option>
              <option value={40000}>40.000 €</option>
              <option value={60000}>60.000 €</option>
              <option value={80000}>80.000 €</option>
              <option value={100000}>100.000 €</option>
            </select>
          </label>
          <label className="block text-xs font-bold text-gray-700">
            Plazas para dormir mínimas
            <select value={fPlazasMin} onChange={(e) => { setFPlazasMin(Number(e.target.value)); setVisibleCount(PAGE_SIZE); }} className={`${SELECT_CLASE} mt-1`}>
              <option value={0}>Indiferente</option>
              <option value={2}>2 plazas</option>
              <option value={4}>4 plazas</option>
              <option value={6}>6 plazas</option>
            </select>
          </label>
          <label className="block text-xs font-bold text-gray-700">
            Ordenar
            <select value={orden} onChange={(e) => { setOrden(e.target.value); setVisibleCount(PAGE_SIZE); }} className={`${SELECT_CLASE} mt-1`}>
              <option value="nombre">Nombre A–Z</option>
              <option value="precioAsc">Precio: menor a mayor</option>
              <option value="precioDesc">Precio: mayor a menor</option>
              <option value="plazasDesc">Plazas: más a menos</option>
            </select>
          </label>
          <div className="flex items-end">
            <button
              type="button"
              onClick={limpiar}
              disabled={!hayFiltros}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-bold text-gray-600 transition hover:border-[#cd001d] hover:text-[#cd001d] disabled:opacity-40 cursor-pointer"
            >
              Limpiar
            </button>
          </div>
        </section>

        {/* ── Contador + resultados ── */}
        <p className="mt-5 text-sm text-gray-600" role="status" aria-live="polite">
          <strong className="font-extrabold text-gray-900">{filtradas.length}</strong>{" "}
          {filtradas.length === 1 ? "caravana" : "caravanas"}
          {hayFiltros && " con los filtros aplicados"}
        </p>

        {filtradas.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-8 text-center">
            <FileText className="mx-auto h-8 w-8 text-gray-300" />
            <p className="mt-3 font-extrabold text-gray-900">Sin resultados</p>
            <p className="mt-1 text-sm text-gray-500">
              Prueba a quitar algún filtro o a buscar con menos palabras.
            </p>
            <button
              type="button"
              onClick={limpiar}
              className="mt-4 rounded-lg bg-[#cd001d] px-4 py-2 text-sm font-bold text-white hover:bg-[#a50018] cursor-pointer"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <>
            <section aria-label="Fichas de caravanas" className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
              {visibles.map((a) => (
                <TarjetaCaravana key={a.id} auto={a} />
              ))}
            </section>
            {filtradas.length > visibleCount && (
              <div className="mt-8 text-center">
                <p className="mb-3 text-sm text-gray-600">
                  Mostrando {visibles.length} de {filtradas.length} fichas
                </p>
                <button
                  type="button"
                  onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
                  className="rounded-xl bg-[#cd001d] px-8 py-3 text-sm font-extrabold text-white shadow-lg shadow-red-900/20 hover:bg-[#a50018] cursor-pointer"
                >
                  Cargar más fichas
                </button>
              </div>
            )}
          </>
        )}

        {/* ── FAQ ── */}
        <section className="mx-auto mt-12 max-w-3xl" aria-label="Preguntas frecuentes">
          <h2 className="text-xl font-extrabold text-gray-900">Preguntas frecuentes</h2>
          <div className="mt-4 space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="rounded-xl border border-gray-200 bg-white p-4">
                <summary className="cursor-pointer text-sm font-bold text-gray-900">{f.q}</summary>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <SharedFooter editorial={{ ambito: "general", tipo: "listado" }} />
    </div>
  );
}
