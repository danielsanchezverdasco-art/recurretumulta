import { useParams, Link } from "react-router-dom";
import {
  Shield, MapPin, ArrowRight, Check, AlertTriangle, Clock,
  Sparkles, Tag, Phone, Mail, TrendingUp, BarChart2, Info, UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { getProvinciaBySlug, PROVINCIAS, PORTAL_PAGO_MULTAS_DGT, PLAZO_ALEGACIONES_MULTAS, TELEFONO_ATENCION_DGT } from "@/lib/provincias-data.ts";
import { useSeo } from "@/hooks/use-seo.ts";
import AdBanner, { AD_SLOTS } from "@/components/ads/AdBanner.tsx";
import { DriveInImage } from "@/components/motion.tsx";

import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";

// Cumplimiento 18/10/2026 (A2): en Cataluña y País Vasco las multas de las vías
// interurbanas NO las tramita la DGT. Webs oficiales verificadas el 18/10/2026.
const AUTONOMICO: Record<string, { nombre: string; url: string; urlTexto: string; texto: string }> = (() => {
  const sct = { nombre: "Servei Català de Trànsit (SCT)", url: "https://transit.gencat.cat/ca/inici/", urlTexto: "transit.gencat.cat",
    texto: "Cataluña tiene competencia propia en tráfico: las denuncias en carreteras y autopistas catalanas las formulan los Mossos d'Esquadra y las tramita el Servei Català de Trànsit, no la DGT. Las alegaciones y recursos de esas multas se dirigen al SCT. Las multas urbanas (zona azul, semáforos, ZBE) son del ayuntamiento." };
  const gv = { nombre: "Dirección de Tráfico del Gobierno Vasco", url: "https://www.trafikoa.euskadi.eus/inicio/", urlTexto: "trafikoa.euskadi.eus",
    texto: "Euskadi tiene competencia propia en tráfico: la Ertzaintza denuncia en las carreteras vascas y la Dirección de Tráfico del Gobierno Vasco tramita esas sanciones, no la DGT. Las alegaciones y recursos de multas interurbanas se dirigen al Gobierno Vasco. Las multas urbanas (OTA, ZBE, semáforos) son del ayuntamiento." };
  return { barcelona: sct, girona: sct, lleida: sct, tarragona: sct, bilbao: gv, "san-sebastian": gv, vitoria: gv };
})();
// A1 (doorway): Vigo y Santiago duplican a Pontevedra y A Coruña (75 % y 70 % de texto
// compartido). noindex,follow hasta tener contenido municipal propio.
// noindex,follow vía src/lib/noindex.generated.json (/multas/vigo/, /multas/santiago-compostela/).

export default function MultaProvinciaPage() {
  const { provincia: slug } = useParams<{ provincia: string }>();
  const p = getProvinciaBySlug(slug ?? "");
  // Overrides SEO solo para provincias con impresiones y 0 clics (05/10/2026):
  // el resto sigue usando la plantilla global que sí convierte (valencia, caceres…).
  const TITULOS_SEO: Record<string, { title: string; h1: string }> = {
    pamplona: { title: "Multa en Pamplona (AP-15, Sanfermines): recúrrela gratis", h1: "Multa en Pamplona: recúrrela gratis con IA" },
    madrid: { title: "Multa en Madrid: recúrrela gratis con IA (2026)", h1: "Multa en Madrid: recúrrela gratis con IA" },
    almeria: { title: "Multa en Almería: recúrrela gratis con IA (2026)", h1: "Multa en Almería: recúrrela gratis con IA" },
    valladolid: { title: "Multa en Valladolid: recúrrela gratis con IA (2026)", h1: "Multa en Valladolid: recúrrela gratis con IA" },
  };
  const seoOverride = TITULOS_SEO[slug ?? ""];
  // Datos rápidos 2026 (07/10/2026): tabla universal para las 54 provincias.
  // Fuente: directorio oficial de Jefaturas Provinciales y Oficinas Locales de la
  // DGT (Carta de Servicios, dgt.es), sede.dgt.gob.es y RDL 6/2015 (BOE).
  // Solo se muestran filas con dato verificado; si falta un campo, su fila se oculta.

  const FOTOS: Record<string, string> = { madrid: "/media/file_sG1QGXHmBmVNNxxkWkdoekLf.webp", barcelona: "/media/file_NwTcVnMEc6kvu0BEmGS06Dij.webp", sevilla: "/media/file_z7yQQQfi3BZBv84NP4DxRwbb.webp", malaga: "/media/file_z7yQQQfi3BZBv84NP4DxRwbb.webp", granada: "/media/file_z7yQQQfi3BZBv84NP4DxRwbb.webp", cordoba: "/media/file_z7yQQQfi3BZBv84NP4DxRwbb.webp", cadiz: "/media/file_z7yQQQfi3BZBv84NP4DxRwbb.webp", huelva: "/media/file_z7yQQQfi3BZBv84NP4DxRwbb.webp", jaen: "/media/file_z7yQQQfi3BZBv84NP4DxRwbb.webp", almeria: "/media/file_z7yQQQfi3BZBv84NP4DxRwbb.webp", pontevedra: "/media/file_leMADIEj9caf7aKJnih1DhqD.webp", "a-coruna": "/media/file_leMADIEj9caf7aKJnih1DhqD.webp", "santiago-compostela": "/media/file_leMADIEj9caf7aKJnih1DhqD.webp", vigo: "/media/file_leMADIEj9caf7aKJnih1DhqD.webp", lugo: "/media/file_leMADIEj9caf7aKJnih1DhqD.webp", ourense: "/media/file_leMADIEj9caf7aKJnih1DhqD.webp", oviedo: "/media/file_leMADIEj9caf7aKJnih1DhqD.webp", santander: "/media/file_leMADIEj9caf7aKJnih1DhqD.webp", bilbao: "/media/file_leMADIEj9caf7aKJnih1DhqD.webp", "san-sebastian": "/media/file_leMADIEj9caf7aKJnih1DhqD.webp", vitoria: "/media/file_leMADIEj9caf7aKJnih1DhqD.webp", valencia: "/media/file_Chq0vdQj5Bt009N6mRa3YgE3.webp", alicante: "/media/file_Chq0vdQj5Bt009N6mRa3YgE3.webp", murcia: "/media/file_Chq0vdQj5Bt009N6mRa3YgE3.webp", tarragona: "/media/file_Chq0vdQj5Bt009N6mRa3YgE3.webp", girona: "/media/file_Chq0vdQj5Bt009N6mRa3YgE3.webp", lleida: "/media/file_Chq0vdQj5Bt009N6mRa3YgE3.webp", castellon: "/media/file_Chq0vdQj5Bt009N6mRa3YgE3.webp", "palma-mallorca": "/media/file_Chq0vdQj5Bt009N6mRa3YgE3.webp" }; const FOTO_DEFAULT = "/media/file_Z8djfEFD5PFw1iuocMtty02V.webp"; const fotoProvincia = FOTOS[slug ?? ""] ?? FOTO_DEFAULT; const auto = AUTONOMICO[slug ?? ""]; const todasFaqs = (p?.faq ?? []).filter((f) => !/^¿Cuánto tarda en resolverse un recurso|^¿Las multas del Ayuntamiento de .* se recurren igual/.test(f.pregunta)).map((f) => auto ? { pregunta: f.pregunta, respuesta: /presento el recurso/i.test(f.pregunta) ? `Las multas de carretera en ${p?.nombre} las tramita el ${auto.nombre} (${auto.urlTexto}), no la DGT: las alegaciones y el recurso se presentan ante ese organismo. Las multas municipales, ante el ayuntamiento.` : f.respuesta.replace(/Las multas de la DGT \(carreteras\) se recurren ante la Jefatura Provincial de Tráfico/g, `Las multas de carretera se recurren ante el ${auto.nombre}`).replace(/Las multas de carretera estatal en el País Vasco siguen el mismo procedimiento DGT\./, "Las multas de carretera en Euskadi las tramita la Dirección de Tráfico del Gobierno Vasco, con el mismo procedimiento sancionador de la Ley de Tráfico.") } : f);


  // SEO dinámico por provincia. Se llama siempre (nunca condicionalmente antes
  // de un return) para evitar que una provincia inválida deje meta tags/canonical
  // "pegados" de la última página válida visitada.
  useSeo(!p ? {
    title: "Provincia no encontrada",
    description: "La provincia que buscas no existe. Consulta la guía de recursos de multas por provincia.",
    noindex: true,
  } : {
    title: seoOverride?.title ?? `Multas en ${p.nombre}: recúrrelas gratis 2026`,
    description: `¿Multa de la DGT o Policía Local en ${p.nombre}? Analízala gratis con IA: detecta vicios de forma y genera tu recurso en PDF.`,
    canonical: `/multas/${p.slug}/`,
    // E-E-A-T 17/10/2026: misma fecha que el JSON-LD de la página (fecha de publicación no registrada).
    dateModified: "2026-10-04",
    keywords: [
      ...p.keywords,
      `recurrir multa ${p.nombre}`,
      `multa tráfico ${p.nombre} 2026`,
      `recurso reposición ${p.nombre}`,
      `impugnar multa DGT ${p.nombre}`,
      `${p.dgtDelegacion}`,
      `anular multa ${p.nombre}`,
    ],
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `https://recurretumulta.online/multas/${p.slug}`,
          "url": `https://recurretumulta.online/multas/${p.slug}`,
          "name": `Recurrir multas de tráfico en ${p.nombre} — RecurreTuMulta.online`,
          "description": `Dónde y cómo recurrir multas de tráfico en ${p.nombre}: organismo competente, plazos, radares y zonas de bajas emisiones.`,
          "inLanguage": "es-ES",
          "author": {
            "@type": "Person",
            "name": "Daniel",
            "description": "Fundador y responsable de contenidos de RecurreTuMulta.online",
            "url": "https://recurretumulta.online/sobre-nosotros/",
          },
          "dateModified": "2026-10-04",
          "isPartOf": { "@id": "https://recurretumulta.online/#website" },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://recurretumulta.online/" },
              { "@type": "ListItem", "position": 2, "name": "Provincias", "item": "https://recurretumulta.online/multas" },
              { "@type": "ListItem", "position": 3, "name": `Multas ${p.nombre}`, "item": `https://recurretumulta.online/multas/${p.slug}` },
            ],
          },
        },
        {
          "@type": "GovernmentOffice",
          "name": p.dgtDelegacion,
          "description": AUTONOMICO[p.slug] ? `Jefatura de la DGT en ${p.nombre} (vehículos y permisos). Las multas interurbanas las tramita el ${AUTONOMICO[p.slug].nombre}.` : `Oficina oficial de la DGT para presentar recursos de multas en ${p.nombre}.`,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": (p as {direccionDgt?: string}).direccionDgt ?? "",
            "addressLocality": p.capital,
            "addressCountry": "ES"
          },
          "url": "https://sede.dgt.gob.es",
          "areaServed": { "@type": "AdministrativeArea", "name": p.nombre }
        },
        {
          "@type": "FAQPage",
          "mainEntity": todasFaqs.map((f) => ({
            "@type": "Question",
            "name": f.pregunta,
            "acceptedAnswer": { "@type": "Answer", "text": f.respuesta },
          })),
        },
      ],
    },
  });

  if (!p) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <div className="space-y-4">
          <AlertTriangle className="w-12 h-12 text-red-500 mx-auto" />
          <p className="text-lg font-black text-gray-900">Provincia no encontrada</p>
          <Link to="/multas/">
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-xl">Ver todas las provincias</Button>
          </Link>
        </div>
      </div>
    );
  }

  const otrasProvincias = PROVINCIAS.filter((x) => x.slug !== p.slug).sort((a, b) => Number(b.ccaa === p.ccaa) - Number(a.ccaa === p.ccaa)).slice(0, 8);

  return (
    <div className="min-h-screen bg-white">
      <SharedNavbar />
      <div className="pt-[57px]">
        {/* Hero estilo blog: DriveInImage + gradientes + contenido animado */}
        <div className="relative overflow-hidden">
          <DriveInImage
            src={fotoProvincia}
            alt={`Recurrir multas de tráfico en ${p.nombre}`}
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
              <Link to="/multas/" className="hover:text-white">Provincias</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/80">{p.nombre}</span>
            </nav>
            <div
              className="flex items-center gap-2 flex-wrap"
            >
              <Badge className="bg-red-600/20 border border-red-500/30 text-red-300 text-xs font-semibold">
                {p.ccaa}
              </Badge>
              <span className="flex items-center gap-1 text-xs text-white/60">
                <MapPin className="w-3 h-3" /> {p.capital}
              </span>
            </div>
            <h1
              className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg"
            >
              {seoOverride?.h1 ?? <>Recurrir multas de tráfico en {p.nombre}</>}
            </h1>
            <p
              className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl"
            >
              Quién tramita tu multa en {p.nombre}, dónde presentar el recurso, plazos, radares y zonas de bajas emisiones.
            </p>
            <div
              className="flex items-center gap-2 text-xs text-white/60 pt-1"
            >
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

          {/* Datos rápidos 2026: oficina DGT, teléfono, pago online y plazo.
              Solo filas con datos verificados (los campos vacíos se ocultan). */}
          <Card className="border border-gray-200">
            <CardContent className="p-4 space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Datos rápidos 2026</p>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-2 pr-3 font-semibold text-gray-700 align-top whitespace-nowrap">{auto ? "Oficina DGT (vehículos y permisos)" : "Oficina DGT"}</td>
                    <td className="py-2 text-gray-600">{p.dgtDelegacion} — {p.direccionDgt}</td>
                  </tr>
                  {p.telefonoDgt && (
                    <tr>
                      <td className="py-2 pr-3 font-semibold text-gray-700 align-top whitespace-nowrap">Teléfono</td>
                      <td className="py-2 text-gray-600">
                        <a href={`tel:+34${p.telefonoDgt.replace(/\s/g, "")}`} className="text-red-600 hover:underline font-semibold">{p.telefonoDgt}</a>
                        <span className="text-gray-400"> · {TELEFONO_ATENCION_DGT} (atención ciudadana DGT)</span>
                      </td>
                    </tr>
                  )}
                  {auto && (
                    <tr>
                      <td className="py-2 pr-3 font-semibold text-gray-700 align-top whitespace-nowrap">Multas de carretera</td>
                      <td className="py-2 text-gray-600">Las tramita el {auto.nombre}: <a href={auto.url} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">{auto.urlTexto}</a></td>
                    </tr>
                  )}
                  {!auto && <tr>
                    <td className="py-2 pr-3 font-semibold text-gray-700 align-top whitespace-nowrap">Pagar online</td>
                    <td className="py-2 text-gray-600"><a href={PORTAL_PAGO_MULTAS_DGT} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">sede.dgt.gob.es — Paga tu multa</a></td>
                  </tr>}
                  <tr>
                    <td className="py-2 pr-3 font-semibold text-gray-700 align-top whitespace-nowrap">Plazo para recurrir</td>
                    <td className="py-2 text-gray-600">Alegaciones: {PLAZO_ALEGACIONES_MULTAS} de la denuncia. Recurso de reposición: 1 mes desde la resolución sancionadora.</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* CTA Principal */}
          <div
            className="bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl p-5 text-white space-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="font-black text-sm">¿Tienes una multa de {p.nombre}?</p>
                <p className="text-white/80 text-xs">Nuestra herramienta puede detectar posibles defectos de forma. Gratis y sin garantía de resultado.</p>
              </div>
            </div>
            <Link to="/#analizador" className="block">
              <Button className="bg-white text-red-600 hover:bg-white/90 font-black rounded-xl w-full h-11 text-sm">
                Analizar mi multa de {p.nombre} gratis
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Tipos más frecuentes + Radares */}
          <AdBanner slotId={AD_SLOTS.rectangle} format="rectangle" className="rounded-xl overflow-hidden" />

          {/* Intro local única por provincia */}
          <div className="border-l-4 border-red-600 bg-red-50/60 rounded-r-2xl p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              {p.descripcionLocal}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border border-gray-200">
              <CardContent className="p-4 space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Multas más frecuentes</p>
                <ul className="space-y-2">
                  {p.multas.tiposMasFrecuentes.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-gray-700">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-4 space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Radares conocidos</p>
                {p.multas.radares.length > 0 ? (
                  <ul className="space-y-2">
                    {p.multas.radares.map((r) => (
                      <li key={r} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-gray-400">Sin radares fijos destacados</p>
                )}
                <p className="text-[11px] text-gray-400">Tramos donde la DGT suele colocar controles de velocidad fijos o móviles.</p>
              </CardContent>
            </Card>
          </div>

          {/* ZBE si existe */}
          {p.multas.zonasBajas.length > 0 && (
            <Card className="border border-amber-200 bg-amber-50">
              <CardContent className="p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-amber-600" />
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-700">Zonas de Bajas Emisiones / Restricciones</p>
                </div>
                <ul className="space-y-1.5">
                  {p.multas.zonasBajas.map((z) => (
                    <li key={z} className="flex items-center gap-2 text-sm text-amber-800">
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" /> {z}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-amber-700">Las multas de ZBE se anulan frecuentemente por falta de señalización o error en la etiqueta del vehículo.</p>
              </CardContent>
            </Card>
          )}

          {/* Organismo competente (Cataluña / País Vasco) */}
          {auto && (
            <Card className="border-2 border-amber-200 bg-amber-50">
              <CardContent className="p-4 space-y-2">
                <p className="text-sm font-black text-gray-900">¿Quién tramita tu multa en {p.nombre}?</p>
                <p className="text-xs text-gray-700 leading-relaxed">{auto.texto}</p>
                <a href={auto.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-red-600 font-semibold hover:underline">
                  {auto.urlTexto} <ArrowRight className="w-3 h-3" />
                </a>
                <p className="text-[11px] text-gray-500">La {p.dgtDelegacion} solo atiende trámites de vehículos y permisos de conducir.</p>
              </CardContent>
            </Card>
          )}
          {/* Cómo recurrir (A1/A3 18/10/2026: sin pasos de plantilla; plazos correctos) */}
          <section className="space-y-2">
            <h2 className="text-xl font-black text-gray-900">Dónde y en qué plazo recurrir en {p.nombre}</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {auto
                ? <>Si la denuncia es de carretera, preséntala ante el {auto.nombre} ({auto.urlTexto}).</>
                : <>Si la denuncia es de la DGT, preséntala ante la {p.dgtDelegacion} ({p.emailDgt}) o en sede.dgt.gob.es.</>}
              {" "}Si es del Ayuntamiento de {p.capital}, ante el propio ayuntamiento.
              {" "}<strong>Alegaciones:</strong> {PLAZO_ALEGACIONES_MULTAS} de la denuncia. <strong>Recurso de reposición:</strong> 1 mes desde la resolución sancionadora.
              {" "}Explicamos el procedimiento completo en la <Link to="/multas/" className="text-red-600 hover:underline">guía general para recurrir multas</Link>.
            </p>
          </section>

          {/* FAQ provincia */}
          {todasFaqs.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-xl font-black text-gray-900">Preguntas frecuentes sobre multas en {p.nombre}</h2>
              <div className="space-y-3">
                {todasFaqs.map((item, i) => (
                  <div key={i} className="border border-gray-200 rounded-2xl p-4 space-y-1.5">
                    <p className="text-sm font-black text-gray-900">{item.pregunta}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.respuesta}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

<p className="text-sm text-gray-600">Importes y puntos de cada infracción: <Link to="/buscador-codigo-multa/" className="text-red-700 underline">buscador de códigos de multa</Link>.</p> {/* Fuentes oficiales */} <p className="text-xs text-gray-500">Fuentes: <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722" target="_blank" rel="noopener noreferrer" className="underline">RDL 6/2015 (BOE)</a> · {auto ? <a href={auto.url} target="_blank" rel="noopener noreferrer" className="underline">{auto.nombre}</a> : <a href="https://sede.dgt.gob.es" target="_blank" rel="noopener noreferrer" className="underline">sede.dgt.gob.es</a>}</p> {/* Guías relacionadas (A1: reducidas) */} <section className="space-y-2"> <h2 className="text-lg font-black text-gray-900">Guías relacionadas</h2> <ul className="space-y-1 text-sm"> <li><Link to="/guias/vicios-forma/" className="text-red-700 underline">Vicios de forma que pueden anular una multa</Link></li> {p.multas.radares.length > 0 && (<li><Link to="/guias/radares/" className="text-red-700 underline">Radares y cómo recurrir sus multas</Link></li>)} {p.multas.zonasBajas.length > 0 && (<li><Link to="/blog/como-recurrir-multas-de-la-zbe-en-madrid-barcelona-y-toda-espana-guia-definitiva-y-modelos-con-ia/" className="text-red-700 underline">Cómo recurrir multas de la ZBE</Link></li>)} {slug === "madrid" && (<li><Link to="/blog/multa-trafico-madrid-recurrir/" className="text-red-700 underline">Multa de tráfico en Madrid: cómo recurrir</Link></li>)} {slug === "barcelona" && (<li><Link to="/blog/multa-trafico-barcelona-recurrir/" className="text-red-700 underline">Multa de tráfico en Barcelona: cómo recurrir</Link></li>)} </ul> </section>
          <Card className="border-2 border-red-200">
            <CardContent className="p-5 space-y-4">
              <p className="font-black text-gray-900">¿Tienes una multa en {p.nombre}?</p>
              
              <Link to="/#analizador" className="block">
                <Button className="w-full font-black h-12 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-lg shadow-red-200">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Analizar mi multa de {p.nombre} — Gratis
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Otras provincias */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Otras provincias</p>
            <div className="flex flex-wrap gap-2">
              {otrasProvincias.map((op) => (
                <Link key={op.slug} to={`/multas/${op.slug}/`}>
                  <button className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-600 text-gray-600 rounded-full px-3 py-1.5 font-semibold transition-colors cursor-pointer">
                    {op.nombre}
                  </button>
                </Link>
              ))}
              <Link to="/multas/">
                <button className="text-xs bg-red-600 text-white rounded-full px-3 py-1.5 font-semibold cursor-pointer hover:bg-red-700 transition-colors">
                  Ver todas →
                </button>
              </Link>
            </div>
          </div>

          {/* Footer */}
          <SharedFooter editorial={{ ambito: "multas", tipo: "articulo", actualizado: "2026-10-04", sinHerramientas: true }} />
        </div>
      </div>
    </div>
  );
}
