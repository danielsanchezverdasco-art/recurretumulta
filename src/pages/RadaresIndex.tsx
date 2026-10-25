// src/pages/RadaresIndex.tsx
// Índice /radares/ — radares agrupados por comunidad autónoma.
// Como aún no hay páginas por comunidad, el índice lista directamente los
// radares agrupados por comunidad, cada uno con enlace DIRECTO a su página
// canónica /multas/<slug>/ (barrido 24/10/2026: cero enlaces internos que pasen por un 301).
// CARGA DE DATOS: igual que src/pages/RadarPage.tsx (agente 3/6), los datos
// viven en docs/radares/indice.json y se sirven bajo /docs/radares/; se
// cargan con fetch en cliente. Interfaz esperada:
//   { id_unico, comunidad, carretera, pk, sentido, tipo, velocidad_limite, municipio, lat, lon }[]
// Mientras el agente de datos no publique el índice, la página muestra el
// estado «en preparación» (sin inventar radares).
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, SlidersHorizontal, ChevronDown, FileText, Camera, AlertTriangle } from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import { destinoRadar } from "@/lib/radar-a-multas.generated.ts";
import { DriveInImage } from "@/components/motion.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";

// Base pública donde el sitio sirve los datos de radares (igual que RadarPage).
const RADARES_INDICE_URL = "/docs/radares/indice.json";

type Radar = {
  id_unico: string;
  comunidad: string;
  carretera: string;
  pk: string | number | null;
  sentido: string | null;
  tipo: string | null;
  velocidad_limite: number | null;
  municipio: string | null;
  lat: number | null;
  lon: number | null;
};

type EstadoCarga = "cargando" | "listo" | "error";

const SELECT_CLASE =
  "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-[#cd001d] focus:outline-none focus:ring-2 focus:ring-[#cd001d]/20";

const fmtPk = (pk: string | number | null): string => {
  if (pk == null || String(pk).trim() === "") return "—";
  return `pk ${String(pk).trim()}`;
};

const FAQS = [
  {
    q: "¿De dónde salen los datos de los radares?",
    a: "Del listado oficial de la DGT (XML PredefinedLocationsPublication del portal NAP, en formato DATEX II), contrastado con las publicaciones de los organismos autonómicos (Servei Català de Trànsit en Cataluña y Gobierno Vasco en el País Vasco). Cada ficha de radar cita su fuente y la fecha de verificación.",
  },
  {
    q: "¿El mapa incluye todos los radares de España?",
    a: "Incluye los radares fijos publicados por la DGT y los organismos autonómicos competentes. Los radares móviles y los tramos con controles temporales no siempre están publicados, así que respeta siempre los límites aunque no veas el radar en el mapa.",
  },
  {
    q: "¿Cada cuánto se actualiza la información?",
    a: "La DGT publica su listado con periodicidad regular y cada ficha muestra su fecha de verificación. Si detectas un radar que ha cambiado de ubicación o de límite, puedes avisarnos desde la ficha correspondiente.",
  },
  {
    q: "¿Me pueden multar si el radar no aparece aquí?",
    a: "Sí. Este índice es una guía informativa: la ausencia de un radar en la lista no significa que no exista ni que el límite no aplique. La señalización en la vía y los límites legales son lo único que cuenta.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://recurretumulta.online/radares#pagina",
      name: "Mapa de radares de tráfico por comunidad autónoma",
      description:
        "Índice de radares fijos de la DGT en España, agrupados por comunidad autónoma: carretera, punto kilométrico, sentido, tipo y límite de velocidad de cada radar.",
      url: "https://recurretumulta.online/radares",
      inLanguage: "es-ES",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://recurretumulta.online/" },
        { "@type": "ListItem", position: 2, name: "Radares", item: "https://recurretumulta.online/radares/" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://recurretumulta.online/radares#faq",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function RadaresIndexPage() {
  useSeo({
    title: "Radares de tráfico en España por comunidad autónoma",
    description:
      "Mapa de radares fijos de la DGT agrupados por comunidad autónoma: carretera, punto kilométrico, sentido, tipo y límite de velocidad de cada radar, con datos oficiales verificados.",
    canonical: "/radares",
    schema: jsonLd,
  });

  const [estado, setEstado] = useState<EstadoCarga>("cargando");
  const [radares, setRadares] = useState<Radar[]>([]);
  const [q, setQ] = useState("");
  const [fComunidad, setFComunidad] = useState("todas");
  const [filtrosAbiertos, setFiltrosAbiertos] = useState(false);

  useEffect(() => {
    let ok = true;
    fetch(RADARES_INDICE_URL, { headers: { Accept: "application/json" } })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<unknown>;
      })
      .then((datos: unknown) => {
        if (!ok) return;
        const lista = Array.isArray(datos) ? datos : [];
        const validos = lista.filter(
          (r): r is Radar =>
            typeof r === "object" &&
            r !== null &&
            typeof (r as { id_unico?: unknown }).id_unico === "string" &&
            typeof (r as { comunidad?: unknown }).comunidad === "string"
        );
        setRadares(validos);
        setEstado("listo");
      })
      .catch(() => {
        if (ok) setEstado("error");
      });
    return () => {
      ok = false;
    };
  }, []);

  const comunidades = useMemo(
    () =>
      [...new Set(radares.map((r) => r.comunidad))].sort((a, b) =>
        a.localeCompare(b, "es")
      ),
    [radares]
  );

  const grupos = useMemo(() => {
    const query = q.trim().toLowerCase();
    const g = new Map<string, Radar[]>();
    for (const r of radares) {
      if (fComunidad !== "todas" && r.comunidad !== fComunidad) continue;
      if (
        query !== "" &&
        !`${r.carretera} ${r.municipio ?? ""} ${r.pk ?? ""}`.toLowerCase().includes(query)
      )
        continue;
      g.set(r.comunidad, [...(g.get(r.comunidad) ?? []), r]);
    }
    return [...g.entries()]
      .sort((a, b) => a[0].localeCompare(b[0], "es"))
      .map(
        ([comunidad, items]) =>
          [
            comunidad,
            [...items].sort((a, b) =>
              `${a.carretera} ${a.pk ?? ""}`.localeCompare(
                `${b.carretera} ${b.pk ?? ""}`,
                "es"
              )
            ),
          ] as [string, Radar[]]
      );
  }, [radares, q, fComunidad]);

  const totalVisibles = grupos.reduce((n, [, items]) => n + items.length, 0);
  const hayFiltros = q !== "" || fComunidad !== "todas";
  const limpiar = () => {
    setQ("");
    setFComunidad("todas");
  };
  const ancla = (c: string) =>
    "c-" + c.toLowerCase().normalize("NFD").replace(/[^a-z0-9]+/g, "-");

  return (
    <div className="min-h-screen bg-gray-50">
      <SharedNavbar />

      {/* Hero animado estilo guías: foto HD + degradado + entrada progresiva */}
      <div className="relative overflow-hidden">
        <DriveInImage
          src="/media/pilar-radares.webp"
          alt="Radar de tráfico en una carretera española"
          eager={true}
          className="absolute inset-0"
          imgClassName="w-full h-full object-cover"
        />
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
            <span className="text-white/40" aria-current="page">Radares</span>
          </nav>
          <div>
            <Badge className="bg-red-600 border-red-500 text-white text-xs font-bold shadow-lg shadow-red-950/50">
              Datos oficiales DGT · {comunidades.length > 0 ? `${comunidades.length} comunidades` : "toda España"}
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
            Radares de tráfico en España por comunidad autónoma
          </h1>
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            El mapa de radares fijos de la DGT, agrupado por comunidad autónoma:
            carretera, punto kilométrico, sentido, tipo de radar y límite de
            velocidad. Datos oficiales verificados: la ausencia de un radar en
            esta lista no significa que no exista.
          </p>
          <p className="text-xs text-white/60 pt-1">
            Por <strong className="text-white/80">Daniel</strong>, fundador y responsable de contenidos · Actualizada en octubre de 2026
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 pb-24 pt-6 sm:px-6">
        {estado === "cargando" && (
          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-8 text-center">
            <Camera className="mx-auto h-8 w-8 animate-pulse text-gray-300" />
            <p className="mt-3 font-extrabold text-gray-900">Cargando el mapa de radares…</p>
          </div>
        )}

        {estado === "error" && (
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-8 text-center">
            <AlertTriangle className="mx-auto h-8 w-8 text-amber-500" />
            <p className="mt-3 font-extrabold text-gray-900">El índice de radares se está preparando</p>
            <p className="mt-1 text-sm text-gray-600">
              Estamos terminando de verificar los datos oficiales de la DGT y de
              los organismos autonómicos. Vuelve en unas horas: esta página se
              actualizará sola cuando el índice esté listo.
            </p>
            <p className="mt-4 text-sm">
              <Link to="/guias/radares/" className="font-bold text-[#cd001d] hover:underline">
                Mientras tanto, lee la guía de radares →
              </Link>
            </p>
          </div>
        )}

        {estado === "listo" && (
          <>
            {/* ── Buscador ── */}
            <div className="relative mt-4">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Busca por carretera o municipio… (ej. A-4, Zaragoza)"
                aria-label="Buscar por carretera o municipio"
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
              } sm:grid sm:grid-cols-3`}
            >
              <label className="block text-xs font-bold text-gray-700">
                Comunidad autónoma
                <select value={fComunidad} onChange={(e) => setFComunidad(e.target.value)} className={`${SELECT_CLASE} mt-1`}>
                  <option value="todas">Todas</option>
                  {comunidades.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
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

            {/* ── Contador + anclas por comunidad ── */}
            <p className="mt-5 text-sm text-gray-600" role="status" aria-live="polite">
              <strong className="font-extrabold text-gray-900">{totalVisibles}</strong>{" "}
              {totalVisibles === 1 ? "radar" : "radares"} en{" "}
              <strong className="font-extrabold text-gray-900">{grupos.length}</strong>{" "}
              {grupos.length === 1 ? "comunidad" : "comunidades"}
              {hayFiltros && " con los filtros aplicados"}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {grupos.map(([c]) => (
                <a key={c} href={`#${ancla(c)}`} className="text-xs rounded-full border border-gray-200 bg-white px-2.5 py-1 hover:border-red-400">{c}</a>
              ))}
            </div>

            {totalVisibles === 0 ? (
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
              grupos.map(([comunidad, items]) => (
                <section key={comunidad} id={ancla(comunidad)} className="mt-8 space-y-3 scroll-mt-24">
                  <h2 className="text-xl font-black text-gray-900">
                    Radares en {comunidad}{" "}
                    <span className="ml-1 align-middle text-xs font-bold text-gray-400">{items.length}</span>
                  </h2>
                  <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((r) => (
                      <li key={r.id_unico}>
                        <Link
                          to={destinoRadar(r.id_unico)}
                          className="flex h-full flex-col gap-1.5 rounded-xl border border-gray-200 bg-white p-3.5 shadow-sm transition hover:border-[#cd001d] hover:shadow-md"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-sm font-extrabold text-gray-900">
                              {r.carretera} <span className="font-bold text-gray-500">{fmtPk(r.pk)}</span>
                            </p>
                            {r.velocidad_limite != null && (
                              <span className="shrink-0 rounded-full bg-[#cd001d] px-2.5 py-0.5 text-[11px] font-extrabold text-white">
                                {r.velocidad_limite} km/h
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-600">
                            {r.sentido ?? "—"}
                            {r.municipio ? ` · ${r.municipio}` : ""}
                          </p>
                          <p className="mt-auto pt-1 text-[11px] font-bold uppercase tracking-wide text-gray-400">
                            {r.tipo ?? "Radar"} <span className="normal-case font-medium text-[#cd001d]">→ Ver ficha</span>
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))
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
