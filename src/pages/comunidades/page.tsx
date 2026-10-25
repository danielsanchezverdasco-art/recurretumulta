import { Link } from "react-router-dom";
import {
  MapPin, ArrowRight, Check, Sparkles, UserRound, Camera, Landmark,
} from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { COMUNIDADES } from "@/lib/comunidades-data.ts";
import { getRadaresComunidad } from "@/lib/comunidades-radares.ts";
import { useSeo } from "@/hooks/use-seo.ts";
import AdBanner, { AD_SLOTS } from "@/components/ads/AdBanner.tsx";
import { DriveInImage } from "@/components/motion.tsx";

import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";

// Índice de /comunidades/: creado el 21/10/2026 (el censo completo del borrador
// v4.2 detectó que /comunidades/ devolvía 404 con las 19 comunidades vivas).
// La ruta se registra en App.tsx y en scripts/routes.json (staticRoutes).

const QUE_INCLUYE: [string, string][] = [
  [
    "Quién tramita tu multa",
    "No todas las multas las gestiona la DGT: Cataluña (Servei Català de Trànsit), el País Vasco (Gobierno Vasco) y Navarra (Gobierno de Navarra) tienen competencia propia. Cada guía indica el organismo exacto y dónde presentar el recurso.",
  ],
  [
    "Radares con ficha propia",
    "Los radares fijos, de tramo y de cabina de cada comunidad, con carretera, punto kilométrico, sentido, límite y municipio, y qué revisar en su multa: verificación metrológica, señalización y foto.",
  ],
  [
    "Zonas de bajas emisiones",
    "Las ZBE activas de cada comunidad y por qué sus multas se anulan con frecuencia: señalización defectuosa o error en la etiqueta ambiental registrada.",
  ],
  [
    "Provincias y preguntas frecuentes",
    "Acceso directo a la guía de multas de cada provincia de la comunidad y respuestas a lo que más se pregunta: plazos, pronto pago y qué pasa si no pagas ni recurres.",
  ],
];

export default function ComunidadesIndexPage() {
  useSeo({
    title: "Multas por comunidad autónoma: guía para recurrirlas",
    description: "Guías de multas de tráfico de las 19 comunidades autónomas: quién tramita tu sanción, radares, ZBE y cómo recurrirla gratis con IA, paso a paso.",
    canonical: "/comunidades/",
    keywords: [
      "multas de tráfico por comunidad autónoma",
      "recurrir multa por comunidad autónoma",
      "guía autonómica de multas",
      "quién tramita las multas en mi comunidad",
      "radares por comunidad autónoma",
      "zonas de bajas emisiones por comunidad",
    ],
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://recurretumulta.online/comunidades/",
          "url": "https://recurretumulta.online/comunidades/",
          "name": "Multas por comunidad autónoma: guía para recurrirlas",
          "description": "Guías de multas de tráfico de las 19 comunidades autónomas: quién tramita tu sanción, radares, ZBE y cómo recurrirla gratis con IA, paso a paso.",
          "inLanguage": "es-ES",
          "isPartOf": { "@id": "https://recurretumulta.online/#website" },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://recurretumulta.online/" },
              { "@type": "ListItem", "position": 2, "name": "Comunidades", "item": "https://recurretumulta.online/comunidades/" },
            ],
          },
        },
        {
          "@type": "ItemList",
          "name": "Guías de multas por comunidad autónoma",
          "numberOfItems": COMUNIDADES.length,
          "itemListElement": COMUNIDADES.map((c, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": `Multas de tráfico en ${c.nombre}`,
            "url": `https://recurretumulta.online/comunidades/${c.slug}/`,
          })),
        },
      ],
    },
  });

  const fotoHero =
    COMUNIDADES.find((c) => c.slug === "madrid")?.foto ??
    COMUNIDADES[0].foto;

  return (
    <div className="min-h-screen bg-white">
      <SharedNavbar />
      <div className="pt-[57px]">
        {/* Hero estilo blog: DriveInImage + gradientes + contenido animado */}
        <div className="relative overflow-hidden">
          <DriveInImage
            src={fotoHero}
            alt="Carretera española con controles de velocidad por comunidades autónomas"
            eager={true}
            className="absolute inset-0"
            imgClassName="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
          <CosaEnBanner />
          <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 space-y-4">
            <nav
              aria-label="Migas de pan"
              className="flex items-center gap-1.5 text-xs text-white/60"
            >
              <Link to="/" className="hover:text-white">Inicio</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/80">Comunidades</span>
            </nav>
            <div className="flex items-center gap-2 flex-wrap">
              <Badge className="bg-red-600/20 border border-red-500/30 text-red-300 text-xs font-semibold">
                Guías autonómicas 2026
              </Badge>
              <span className="flex items-center gap-1 text-xs text-white/60">
                <MapPin className="w-3 h-3" /> 19 comunidades y ciudades autónomas
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
              Multas de tráfico por comunidad autónoma
            </h1>
            <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl">
              Cada comunidad tiene su guía: quién tramita tu multa (no siempre es la DGT),
              sus radares con ficha propia, sus zonas de bajas emisiones y cómo recurrirla
              paso a paso. Elige la tuya.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/60 pt-1">
              <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white shrink-0">
                <UserRound className="w-3.5 h-3.5" />
              </span>
              <span>Por <Link to="/sobre-nosotros/" rel="author" className="underline underline-offset-2">Daniel</Link>, fundador y responsable de contenidos de RecurreTuMulta.online</span>
              <span aria-hidden="true">·</span>
              <span>Actualizado: octubre 2026</span>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">

          {/* CTA Principal */}
          <div className="bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl p-5 text-white space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="font-black text-sm">¿Te han puesto una multa?</p>
                <p className="text-white/80 text-xs">La IA detecta en segundos si tu multa tiene defectos que la anulan. Gratis, vivas donde vivas.</p>
              </div>
            </div>
            <Link to="/#analizador" className="block">
              <Button className="bg-white text-red-600 hover:bg-white/90 font-black rounded-xl w-full h-11 text-sm">
                Analizar mi multa gratis
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <AdBanner slotId={AD_SLOTS.rectangle} format="rectangle" className="rounded-xl overflow-hidden" />

          {/* Qué incluye cada guía */}
          <div className="space-y-3">
            <h2 className="text-xl font-black text-gray-900">
              Qué incluye cada guía autonómica
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {QUE_INCLUYE.map(([titulo, texto]) => (
                <Card key={titulo} className="border border-gray-200">
                  <CardContent className="p-4 space-y-1.5">
                    <p className="flex items-start gap-2 text-sm font-black text-gray-900">
                      <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      {titulo}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">{texto}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Las 19 comunidades */}
          <div className="space-y-3">
            <h2 className="text-xl font-black text-gray-900">
              Elige tu comunidad autónoma
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {COMUNIDADES.map((c) => {
                const radares = getRadaresComunidad(c.slug);
                return (
                  <Link
                    key={c.slug}
                    to={`/comunidades/${c.slug}/`}
                    className="block rounded-2xl border border-gray-200 bg-white p-4 space-y-2 hover:border-red-400 transition-colors group"
                  >
                    <p className="flex items-center justify-between gap-2 text-base font-black text-gray-900 group-hover:text-red-600 transition-colors">
                      {c.nombre}
                      <ArrowRight className="w-4 h-4 text-red-500 shrink-0" />
                    </p>
                    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-gray-500">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-red-500" /> {c.capital}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Landmark className="w-3 h-3 text-red-500" /> {c.organismo === "DGT" ? "Tramita la DGT" : "Competencia propia"}
                      </span>
                      {radares.length > 0 && (
                        <span className="inline-flex items-center gap-1">
                          <Camera className="w-3 h-3 text-red-500" /> {radares.length} radares con ficha
                        </span>
                      )}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {c.descripcion.length > 180
                        ? `${c.descripcion.slice(0, 180).trimEnd()}…`
                        : c.descripcion}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Enlaces relacionados */}
          <section className="rounded-2xl border border-gray-200 bg-white p-4 md:p-6 space-y-3">
            <h2 className="text-lg md:text-xl font-black text-gray-900">También te puede interesar</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/multas/" className="text-red-700 underline">Multas por provincia: las 52 guías locales</Link></li>
              <li><Link to="/radares/" className="text-red-700 underline">Índice completo de radares de velocidad</Link></li>
              <li><Link to="/guias/radares/" className="text-red-700 underline">Guía: radares de tráfico y cómo recurrir sus multas</Link></li>
              <li><Link to="/guias/zbe/" className="text-red-700 underline">Guía: zonas de bajas emisiones y sus multas</Link></li>
              <li><Link to="/blog/recurrir-multa-radar-velocidad/" className="text-red-700 underline">Cómo recurrir una multa de radar de velocidad</Link></li>
              <li><Link to="/herramientas/" className="text-red-700 underline">Herramientas gratis: calculadoras y conversores</Link></li>
            </ul>
          </section>

        </div>
      </div>
      <SharedFooter editorial={{ ambito: "multas", tipo: "articulo", sinHerramientas: true }} />
    </div>
  );
}
