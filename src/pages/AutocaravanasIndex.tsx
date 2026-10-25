// src/pages/AutocaravanasIndex.tsx
// Índice /autocaravanas/ — listado de todas las autocaravanas publicadas.
// Patrón visual de src/pages/FichasTecnicas.tsx: hero con foto + degradado,
// pestañas por tipo, buscador, filtros (marca, precio, plazas), tarjetas con
// foto, contador y «Cargar más». Enlaces con barra final (router-barra).
// Cada tarjeta enlaza a /autocaravanas/<slug>/.
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
import {
  AUTOCARAVANAS_LITE,
  type AutocaravanaLite,
} from "@/lib/autocaravanas-lite.generated.ts";

// Los datos de src/lib/autocaravanas-lite.generated.ts existen en la rama
// merlin-rutas-cableadas (export AUTOCARAVANAS_LITE, 41 fichas). No hay un
// módulo src/lib/autocaravanas con export AUTOCARAVANAS: el fichero «lite»
// dice literalmente en su cabecera que es el subconjunto para el hub
// /autocaravanas/, así que es la fuente correcta.

const TIPOS = ["camper", "perfilada", "integral", "capuchina"] as const;
type TipoTab = "todas" | (typeof TIPOS)[number];
const ETIQUETA_TIPO: Record<(typeof TIPOS)[number], string> = {
  camper: "Camper",
  perfilada: "Perfilada",
  integral: "Integral",
  capuchina: "Capuchina",
};
const TABS: Array<{ id: TipoTab; label: string }> = [
  { id: "todas", label: "Todas" },
  { id: "camper", label: "Campers" },
  { id: "perfilada", label: "Perfiladas" },
  { id: "integral", label: "Integrales" },
  { id: "capuchina", label: "Capuchinas" },
];

const HERO_IMG =
  AUTOCARAVANAS_LITE[0]?.imagenOficial ?? AUTOCARAVANAS_LITE[0]?.imagen ?? null;

const SELECT_CLASE =
  "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-[#cd001d] focus:outline-none focus:ring-2 focus:ring-[#cd001d]/20";

const fmtPrecio = (v: number | null) =>
  v == null ? "Precio no disponible" : fmtMiles(v) + " €";
const fmtNum = (v: number | null, suf: string) =>
  v == null ? "—" : `${String(v).replace(".", ",")} ${suf}`;

function TarjetaAutocaravana({ auto }: { auto: AutocaravanaLite }) {
  const [fotoRota, setFotoRota] = useState(false);
  const marca = auto.marca ?? "—";
  const modelo = auto.modelo ?? "—";
  const foto = auto.imagenOficial ?? auto.imagen;
  const mostrarFoto = foto != null && !fotoRota;
  const tipoEtiqueta =
    auto.tipo != null && (TIPOS as readonly string[]).includes(auto.tipo)
      ? ETIQUETA_TIPO[auto.tipo as (typeof TIPOS)[number]]
      : (auto.tipo ?? "—");
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[16/9] flex-none overflow-hidden bg-gray-100">
        {mostrarFoto ? (
          <img
            src={foto!}
            alt={`Foto oficial de la ${marca} ${modelo}`}
            className="h-full w-full object-cover"
            loading="lazy"
            onError={() => setFotoRota(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <span className="text-3xl font-black text-gray-300">
              {marca.charAt(0)}
            </span>
          </div>
        )}
        <span className="absolute left-2 top-2 rounded-full bg-black/80 px-2.5 py-1 text-[10px] font-semibold text-white">
          {tipoEtiqueta}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-2.5 sm:p-3">
        <p className="truncate text-[10px] font-semibold uppercase tracking-wider text-gray-500">
          {marca}
        </p>
        <h3 className="line-clamp-2 text-sm font-extrabold leading-tight text-gray-900 sm:text-base">
          {modelo}
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
              plazas
            </span>
          </div>
          <div className="border-l border-gray-300 px-1">
            <b className="block truncate text-xs text-gray-900 sm:text-[13px]">
              {tipoEtiqueta}
            </b>
            <span className="block text-[8px] font-medium uppercase tracking-wide text-gray-500 sm:text-[9px]">
              tipo
            </span>
          </div>
        </div>
        <div className="mt-auto pt-1">
          <Link
            to={`/autocaravanas/${auto.id}/`}
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
    q: "¿De dónde salen los datos de las autocaravanas?",
    a: "De las webs oficiales de las marcas y de medios especializados españoles. Cada ficha enlaza su fuente y, si la marca no publica un dato (algo habitual con los precios), no lo inventamos: la ficha lo dice claramente.",
  },
  {
    q: "¿Qué tipo de autocaravana me conviene: camper, perfilada, integral o capuchina?",
    a: "La camper (furgón) es la más manejable y discreta; la perfilada añade espacio sin capuchina; la integral es la más amplia y lujosa; la capuchina tiene la litera superior típica para familias. Filtra por tipo en las pestañas de arriba y compara.",
  },
  {
    q: "¿Necesito un carnet especial para conducir una autocaravana?",
    a: "La mayoría se conducen con el carnet B si no superan los 3.500 kg de MMA. Si la MMA es mayor necesitarás el C1. Cada ficha indica el carnet necesario.",
  },
  {
    q: "¿Esta página es contenido duplicado de las fichas?",
    a: "No. Esta página es un índice de navegación: te ayuda a encontrar la autocaravana que buscas entre todas las fichas publicadas. El contenido detallado (tabla técnica, descripción, curiosidades, fotos oficiales) vive en cada ficha individual, con su propia URL.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://recurretumulta.online/autocaravanas#pagina",
      name: "Autocaravanas: fichas técnicas por marca y modelo",
      description:
        "Índice de fichas técnicas de autocaravanas 2026: campers, perfiladas, integrales y capuchinas, ordenadas por marca y modelo con precio, plazas y carnet necesario.",
      url: "https://recurretumulta.online/autocaravanas",
      inLanguage: "es-ES",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://recurretumulta.online/" },
        { "@type": "ListItem", position: 2, name: "Autocaravanas", item: "https://recurretumulta.online/autocaravanas/" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://recurretumulta.online/autocaravanas#faq",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function AutocaravanasIndexPage() {
  useSeo({
    title: "Autocaravanas: fichas técnicas por marca y modelo",
    description:
      "Índice de todas las fichas técnicas de autocaravanas: campers, perfiladas, integrales y capuchinas con precio, plazas, tipo y carnet necesario. Datos verificados con las marcas.",
    canonical: "/autocaravanas",
    schema: jsonLd,
  });

  const [tab, setTab] = useState<TipoTab>("todas");
  const [q, setQ] = useState("");
  const [fMarca, setFMarca] = useState("todas");
  const [fPrecioMax, setFPrecioMax] = useState(0);
  const [fPlazasMin, setFPlazasMin] = useState(0);
  const [orden, setOrden] = useState("nombre");
  const [filtrosAbiertos, setFiltrosAbiertos] = useState(false);
  const PAGE_SIZE = 24;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const base = useMemo(
    () =>
      AUTOCARAVANAS_LITE.filter(
        (a) => tab === "todas" || a.tipo === tab
      ),
    [tab]
  );

  const marcas = useMemo(
    () =>
      [...new Set(base.map((a) => a.marca).filter((m): m is string => m != null))].sort(
        (a, b) => a.localeCompare(b, "es")
      ),
    [base]
  );

  const cambiarTab = (t: TipoTab) => {
    setTab(t);
    setFMarca("todas");
    setFPrecioMax(0);
    setFPlazasMin(0);
    setVisibleCount(PAGE_SIZE);
  };

  const filtradas = useMemo(() => {
    const query = q.trim().toLowerCase();
    const lista = base.filter(
      (a) =>
        (fMarca === "todas" || a.marca === fMarca) &&
        (fPrecioMax === 0 || (a.precioDesde != null && a.precioDesde <= fPrecioMax)) &&
        (fPlazasMin === 0 || (a.plazas != null && a.plazas >= fPlazasMin)) &&
        (query === "" ||
          `${a.marca ?? ""} ${a.modelo ?? ""}`.toLowerCase().includes(query))
    );
    if (orden === "nombre")
      lista.sort((a, b) =>
        `${a.marca ?? ""} ${a.modelo ?? ""}`.localeCompare(
          `${b.marca ?? ""} ${b.modelo ?? ""}`,
          "es"
        )
      );
    else if (orden === "precioAsc")
      lista.sort((a, b) => (a.precioDesde ?? Infinity) - (b.precioDesde ?? Infinity));
    else if (orden === "precioDesc")
      lista.sort((a, b) => (b.precioDesde ?? -Infinity) - (a.precioDesde ?? -Infinity));
    else if (orden === "plazasDesc")
      lista.sort((a, b) => (b.plazas ?? -Infinity) - (a.plazas ?? -Infinity));
    return lista;
  }, [base, q, fMarca, fPrecioMax, fPlazasMin, orden]);

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
            alt="Autocaravana oficial en carretera"
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
            <span className="text-white/40" aria-current="page">Autocaravanas</span>
          </nav>
          <div>
            <Badge className="bg-red-600 border-red-500 text-white text-xs font-bold shadow-lg shadow-red-950/50">
              Base de datos 2026 · {AUTOCARAVANAS_LITE.length} modelos
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
            Autocaravanas 2026: fichas técnicas por marca y modelo
          </h1>
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            Todas las fichas técnicas de autocaravanas en un solo lugar: campers,
            perfiladas, integrales y capuchinas con foto oficial, precio, plazas y
            carnet necesario. Busca por marca y modelo, filtra por lo que te importa
            y abre la ficha completa. Sin humo: si un dato no está publicado por una
            fuente fiable, lo verás como «—» en vez de inventado.
          </p>
          <p className="text-xs text-white/60 pt-1">
            Por <strong className="text-white/80">Daniel</strong>, fundador y responsable de contenidos · Actualizada en octubre de 2026
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 pb-24 pt-6 sm:px-6">
        {/* ── Pestañas por tipo ── */}
        <div className="flex gap-2" role="tablist" aria-label="Tipo de autocaravana">
          {TABS.map((t) => {
            const n =
              t.id === "todas"
                ? AUTOCARAVANAS_LITE.length
                : AUTOCARAVANAS_LITE.filter((a) => a.tipo === t.id).length;
            const activa = tab === t.id;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={activa}
                onClick={() => cambiarTab(t.id)}
                className={`flex-1 rounded-xl px-2 sm:px-3 py-2.5 text-sm font-extrabold transition cursor-pointer ${
                  activa
                    ? "bg-[#cd001d] text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-[#cd001d] hover:text-[#cd001d]"
                }`}
              >
                {t.label}
                <span className={`ml-1.5 text-xs font-bold ${activa ? "text-white/80" : "text-gray-400"}`}>
                  {n}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Buscador ── */}
        <div className="relative mt-4">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            value={q}
            onChange={(e) => { setQ(e.target.value); setVisibleCount(PAGE_SIZE); }}
            placeholder="Busca marca o modelo… (ej. Hymer, Benimar, Laika)"
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
              <option value={50000}>50.000 €</option>
              <option value={75000}>75.000 €</option>
              <option value={100000}>100.000 €</option>
              <option value={150000}>150.000 €</option>
            </select>
          </label>
          <label className="block text-xs font-bold text-gray-700">
            Plazas mínimas
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
          {filtradas.length === 1 ? "autocaravana" : "autocaravanas"}
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
            <section aria-label="Fichas de autocaravanas" className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
              {visibles.map((a) => (
                <TarjetaAutocaravana key={a.id} auto={a} />
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
