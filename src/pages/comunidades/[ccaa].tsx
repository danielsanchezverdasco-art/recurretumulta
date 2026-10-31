import { useParams, Link } from "react-router-dom";
import {
  Shield, MapPin, ArrowRight, Check, AlertTriangle, Clock,
  Sparkles, Tag, Info, UserRound, Landmark, Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { getComunidadBySlug, COMUNIDADES } from "@/lib/comunidades-data.ts";
import { getRadaresComunidad } from "@/lib/comunidades-radares.ts";
import { destinoRadar } from "@/lib/radar-a-multas.generated.ts";
import { getProvinciaBySlug } from "@/lib/provincias-data.ts";
import { useSeo } from "@/hooks/use-seo.ts";
import AdBanner, { AD_SLOTS } from "@/components/ads/AdBanner.tsx";
import { DriveInImage } from "@/components/motion.tsx";

import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";

const MULTAS_COMUNES: [string, string, string][] = [
  ["Exceso de velocidad leve", "100 €", "0"],
  ["Exceso de velocidad grave", "300 €", "2"],
  ["Exceso de velocidad muy grave", "400 €", "4"],
  ["Exceso de más de 60 km/h sobre el límite", "600 €", "6"],
  ["Saltarse un semáforo en rojo", "200 €", "4"],
  ["Usar el móvil al volante", "200 €", "6"],
  ["No usar el cinturón de seguridad", "200 €", "4"],
  ["Alcohol: 0,25–0,50 mg/l", "500 €", "4"],
  ["Alcohol: más de 0,60 mg/l", "1.000 €", "6"],
  ["Aparcar en lugar prohibido", "200 €", "0"],
  ["Circular sin la ITV en vigor", "200 €", "0"],
];

export default function ComunidadPage() {
  const { ccaa: slug } = useParams<{ ccaa: string }>();
  const c = getComunidadBySlug(slug ?? "");

  useSeo(!c ? {
    title: "Comunidad no encontrada",
    description: "La comunidad autónoma que buscas no existe. Consulta la guía de recursos de multas por comunidad autónoma.",
    noindex: true,
  } : {
    title: `Multas de tráfico en ${c.nombre}: cómo recurrirlas gratis 2026`,
    description: `¿Multa de tráfico en ${c.nombre}? Guía autonómica: quién la tramita (${c.organismoNombre}), cómo recurrirla y ZBE. Analiza tu multa gratis con IA.`,
    canonical: `/comunidades/${c.slug}`,
    keywords: [
      ...c.keywords,
      `normativa tráfico ${c.nombre} 2026`,
      `quién tramita multas ${c.nombre}`,
      `impugnar multa ${c.nombre}`,
    ],
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `https://recurretumulta.online/comunidades/${c.slug}`,
          "url": `https://recurretumulta.online/comunidades/${c.slug}`,
          "name": `Multas de tráfico en ${c.nombre}: guía autonómica — RecurreTuMulta.online`,
          "description": `Guía autonómica para recurrir multas de tráfico en ${c.nombre}. Organismo competente: ${c.organismoNombre}. Análisis IA gratis, recurso PDF por 4,99€.`,
          "inLanguage": "es-ES",
          "isPartOf": { "@id": "https://recurretumulta.online/#website" },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://recurretumulta.online/" },
              { "@type": "ListItem", "position": 2, "name": "Comunidades", "item": "https://recurretumulta.online/comunidades/" },
              { "@type": "ListItem", "position": 3, "name": c.nombre, "item": `https://recurretumulta.online/comunidades/${c.slug}` },
            ],
          },
        },
        {
          "@type": "GovernmentOffice",
          "name": c.organismoNombre,
          "description": `Organismo competente en materia de tráfico y sanciones en ${c.nombre}.`,
          "url": c.organismoWeb,
          "areaServed": { "@type": "AdministrativeArea", "name": c.nombre },
        },
        {
          "@type": "FAQPage",
          "mainEntity": c.faq.map((f) => ({
            "@type": "Question",
            "name": f.pregunta,
            "acceptedAnswer": { "@type": "Answer", "text": f.respuesta },
          })),
        },
      ],
    },
  });

  if (!c) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <div className="space-y-4">
          <AlertTriangle className="w-12 h-12 text-red-500 mx-auto" />
          <p className="text-lg font-black text-gray-900">Comunidad no encontrada</p>
          <Link to="/multas/">
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-xl">Ver todas las provincias</Button>
          </Link>
        </div>
      </div>
    );
  }

  const provincias = c.provincias
    .map((s) => getProvinciaBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const radares = getRadaresComunidad(c.slug);
  const otrasComunidades = COMUNIDADES.filter((x) => x.slug !== c.slug).slice(0, 8);

  return (
    <div className="min-h-screen bg-white">
      <SharedNavbar />
      <main className="pt-[57px]">
        {/* Hero estilo blog: DriveInImage + gradientes + contenido animado */}
        <div className="relative overflow-hidden">
          <DriveInImage
            src={c.foto}
            alt={`Multas de tráfico en ${c.nombre}`}
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
              <Link to="/comunidades/" className="hover:text-white">Comunidades</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/80">{c.nombre}</span>
            </nav>
            <div
              className="flex items-center gap-2 flex-wrap"
            >
              <Badge className="bg-red-600/20 border border-red-500/30 text-red-300 text-xs font-semibold">
                Guía autonómica 2026
              </Badge>
              <span className="flex items-center gap-1 text-xs text-white/60">
                <MapPin className="w-3 h-3" /> {c.capital}
              </span>
            </div>
            <h1
              className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg"
            >
              Multas de tráfico en {c.nombre}: cómo recurrirlas
            </h1>
            <p
              className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl"
            >
              Guía autonómica: quién tramita tu multa ({c.organismoNombre}), cómo recurrirla paso a paso y qué zonas de bajas emisiones te pueden sancionar. Análisis con IA gratis.
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
            <div
              className="flex flex-wrap gap-1.5 pt-1"
            >
              {c.keywords.slice(0, 5).map((kw) => (
                <span key={kw} className="inline-flex items-center gap-1 text-[10px] bg-white/10 text-white/70 rounded-full px-2 py-0.5">
                  <Tag className="w-2.5 h-2.5" />{kw}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">

          {/* CTA Principal */}
          <div
            className="bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl p-5 text-white space-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="font-black text-sm">¿Tienes una multa en {c.nombre}?</p>
                <p className="text-white/80 text-xs">La IA detecta en segundos si tu multa tiene defectos que la anulan. Gratis.</p>
              </div>
            </div>
            <Link to="/#analizador" className="block">
              <Button className="bg-white text-red-600 hover:bg-white/90 font-black rounded-xl w-full h-11 text-sm">
                Analizar mi multa en {c.nombre} gratis
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <AdBanner slotId={AD_SLOTS.rectangle} format="rectangle" className="rounded-xl overflow-hidden" />

          {/* Intro única por CCAA */}
          <div className="border-l-4 border-red-600 bg-red-50/60 rounded-r-2xl p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              {c.descripcion}
            </p>
          </div>

          {/* Particularidades de la CCAA */}
          <div className="space-y-3">
            <h2 className="text-xl font-black text-gray-900">
              Lo que debes saber sobre las multas en {c.nombre}
            </h2>
            <Card className="border border-gray-200">
              <CardContent className="p-4 space-y-3">
                <ul className="space-y-2.5">
                  {c.particularidades.map((part, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      {part}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Cómo recurrir step-by-step */}
          <div className="space-y-4">
            <h2 className="text-xl font-black text-gray-900">
              Cómo recurrir una multa de tráfico en {c.nombre}
            </h2>
            <div className="space-y-3">
              {[
                {
                  n: "1",
                  title: "Analiza tu multa con IA (gratis)",
                  desc: "Sube tu multa a RecurreTuMulta.online. La IA detecta en segundos los defectos legales, una valoración orientativa de los motivos para recurrir (sin porcentajes) y los argumentos exactos para tu recurso.",
                },
                {
                  n: "2",
                  title: "Revisa los argumentos detectados",
                  desc: "Verás una lista detallada de defectos: falta de señalización, prescripción, error en la identificación del conductor, verificación caducada del radar, etc.",
                },
                {
                  n: "3",
                  title: "Descarga el recurso PDF listo para enviar (4,99€)",
                  desc: "El PDF incluye todos los argumentos en lenguaje jurídico, con referencias exactas a la LTSV, el RPSANVI y la jurisprudencia del Tribunal Supremo.",
                },
                {
                  n: "4",
                  title: `Presenta ante ${c.organismoNombre}`,
                  desc: c.organismo === "DGT"
                    ? "Envíalo por correo certificado o en sede.dgt.gob.es. Plazo: 1 mes desde la notificación."
                    : `Envíalo según el procedimiento de ${c.organismoNombre} (${c.organismoWeb}). Plazo: 1 mes desde la notificación.`,
                },
              ].map((step) => (
                <div key={step.n} className="flex gap-3">
                  <div className="w-7 h-7 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    {step.n}
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-black text-gray-900">{step.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Organismo competente */}
          <div className="space-y-3">
            <h2 className="text-xl font-black text-gray-900">
              Normativa y organismo competente en {c.nombre}
            </h2>
            <Card className="border border-gray-200 bg-gray-50">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-red-100 rounded-xl flex items-center justify-center shrink-0">
                    <Landmark className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-gray-900">{c.organismoNombre}</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide font-semibold">Organismo competente en {c.nombre}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {c.organismo === "DGT" && (
                    <>En {c.nombre} las multas interurbanas las tramita la Dirección General de Tráfico. Los recursos de reposición se presentan ante la Jefatura Provincial de Tráfico correspondiente o telemáticamente.</>
                  )}
                  {c.organismo === "SCT" && (
                    <>Cataluña tiene competencia propia en tráfico. El Servei Català de Trànsit tramita las sanciones en vías interurbanas catalanas y los Mossos d'Esquadra ejercen como policía de tráfico. Los recursos se presentan ante el Servei Català de Trànsit, no ante la DGT.</>
                  )}
                  {c.organismo === "ERT" && (
                    <>El País Vasco tiene competencia propia en tráfico. La Ertzaintza denuncia en las vías vascas y el Gobierno Vasco tramita las sanciones. Los recursos se presentan ante el Gobierno Vasco (Departamento de Seguridad).</>
                  )}
                  {c.organismo === "PF" && (
                    <>Navarra tiene competencia propia en tráfico. La Policía Foral denuncia en las vías forales y el Gobierno de Navarra tramita las sanciones con procedimiento foral propio. Los recursos se presentan ante el Gobierno de Navarra.</>
                  )}
                </p>
                <a
                  href={c.organismoWeb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-red-600 font-semibold hover:underline"
                >
                  {c.organismoWeb.replace("https://", "")} <ArrowRight className="w-3 h-3" />
                </a>
              </CardContent>
            </Card>
          </div>

          {/* ZBE */}
          {c.zbe.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-xl font-black text-gray-900">
                Zonas de bajas emisiones en {c.nombre}
              </h2>
              <Card className="border border-amber-200 bg-amber-50">
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-amber-600" />
                    <p className="text-xs font-bold uppercase tracking-widest text-amber-700">ZBE / Restricciones de acceso</p>
                  </div>
                  <ul className="space-y-1.5">
                    {c.zbe.map((z) => (
                      <li key={z} className="flex items-center gap-2 text-sm text-amber-800">
                        <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" /> {z}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-amber-700">Las multas de ZBE se anulan frecuentemente por falta de señalización o error en la etiqueta ambiental del vehículo.</p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Radares de la CCAA: enlace DIRECTO a /multas/<slug>/ (datos en
              lib/comunidades-radares.ts, verificados contra el índice servido).
              Las CCAA sin radares en el índice enlazan al índice general.
              Barrido 24/10/2026: cero enlaces internos que pasen por un 301. */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-gray-900">
              Radares de velocidad en {c.nombre}
            </h2>
            {radares.length > 0 ? (
              <>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Estos son los radares fijos, de tramo y de cabina con ficha propia en {c.nombre}:
                  carretera, punto kilométrico, sentido, límite y municipio. Si tu multa viene de uno
                  de ellos, en su ficha verás qué revisar antes de pagar: verificación metrológica en
                  vigor, señalización del límite y foto que identifique tu vehículo.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {radares.map((r) => (
                    <Link
                      key={r.slug}
                      to={destinoRadar(r.slug)}
                      className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm font-semibold text-gray-700 hover:border-red-400 hover:text-red-600 transition-colors flex items-center gap-2"
                    >
                      <Camera className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span>
                        {r.carretera} · pk {r.pk} ({r.sentido}) · {r.municipio}
                        {r.limite ? ` · límite ${r.limite} km/h` : ""}
                      </span>
                    </Link>
                  ))}
                </div>
                <p className="text-xs text-gray-500">
                  ¿No está tu radar? Consulta el{" "}
                  <Link to="/provincias/" className="text-red-700 underline">índice completo de radares</Link>{" "}
                  o la{" "}
                  <Link to="/guias/radares/" className="text-red-700 underline">guía de radares y cómo recurrir sus multas</Link>.
                </p>
              </>
            ) : (
              <p className="text-sm text-gray-600 leading-relaxed">
                El listado de radares con ficha individual de {c.nombre} se está completando por
                comunidades. Mientras tanto, consulta el{" "}
                <Link to="/provincias/" className="text-red-700 underline">índice completo de radares</Link>{" "}
                y la{" "}
                <Link to="/guias/radares/" className="text-red-700 underline">guía de radares de tráfico</Link>:
                una multa de radar se puede recurrir si el cinemómetro no tenía la verificación
                metrológica en vigor, si la señalización del límite era incorrecta o si la foto no
                identifica tu vehículo con claridad.
              </p>
            )}
          </section>

          {/* Vídeo */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-gray-900">
              Vídeo: los defectos que pueden anular tu multa en {c.nombre}
            </h2>
            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-950">
              <video
                controls
                preload="metadata"
                className="w-full aspect-video"
                aria-label="Vídeo explicativo: defectos de forma que pueden anular una multa de tráfico"
              >
                <source src="/media/guia-vicios-forma.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de vídeo.
              </video>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Falta de señalización, errores en la notificación, radar sin verificación vigente o prescripción: estos son los
              defectos que más multas anulan en {c.nombre}. La IA de RecurreTuMulta.online los detecta automáticamente al analizar tu multa.
            </p>
          </section>

          {/* Tabla de multas comunes */}
          <section className="rounded-2xl border border-gray-200 bg-white p-4 md:p-6 space-y-3">
            <h2 className="text-lg md:text-xl font-black text-gray-900">Multas de tráfico más comunes: importe y puntos</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-gray-500 border-b border-gray-200">
                    <th className="py-2 pr-4">Infracción</th>
                    <th className="py-2 pr-4">Importe</th>
                    <th className="py-2">Puntos</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {MULTAS_COMUNES.map((r, i) => (
                    <tr key={i} className="text-gray-700">
                      <td className="py-2 pr-4">{r[0]}</td>
                      <td className="py-2 pr-4 font-bold text-gray-900">{r[1]}</td>
                      <td className="py-2">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500">Si pagas dentro de los primeros 20 días naturales obtienes un 50% de descuento por pronto pago, pero renuncias a recurrir la sanción.</p>
          </section>

          {/* FAQ */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-gray-900">
              Preguntas frecuentes sobre multas en {c.nombre}
            </h2>
            <div className="space-y-2">
              {c.faq.map((f, i) => (
                <details key={i} className="rounded-xl border border-gray-200 bg-white group">
                  <summary className="px-4 py-3 text-sm font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between gap-2">
                    {f.pregunta}
                    <span className="text-red-600 shrink-0 group-open:rotate-45 transition-transform text-lg leading-none">+</span>
                  </summary>
                  <p className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">{f.respuesta}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Fuentes oficiales */}
          <section className="rounded-2xl border border-gray-200 bg-gray-50 p-4 md:p-6 space-y-3">
            <h2 className="text-lg md:text-xl font-black text-gray-900">Fuentes oficiales</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722" target="_blank" rel="noopener noreferrer" className="text-red-700 underline">Real Decreto Legislativo 6/2015 — Ley sobre Tráfico (BOE)</a></li>
              <li><a href={c.organismoWeb} target="_blank" rel="noopener noreferrer" className="text-red-700 underline">{c.organismoNombre} — {c.organismoWeb.replace("https://", "")}</a></li>
              <li><a href="https://www.dgt.es" target="_blank" rel="noopener noreferrer" className="text-red-700 underline">Dirección General de Tráfico (DGT)</a></li>
            </ul>
          </section>

          {/* Provincias de la CCAA */}
          {provincias.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-xl font-black text-gray-900">
                Multas por provincia en {c.nombre}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {provincias.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/multas/${p.slug}/`}
                    className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm font-semibold text-gray-700 hover:border-red-400 hover:text-red-600 transition-colors flex items-center gap-2"
                  >
                    <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    {p.nombre}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Guías relacionadas */}
          <section className="rounded-2xl border border-gray-200 bg-white p-4 md:p-6 space-y-3">
            <h2 className="text-lg md:text-xl font-black text-gray-900">Guías relacionadas</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog/como-recurrir-multa-dgt-sin-abogado/" className="text-red-700 underline">Cómo recurrir una multa de la DGT sin abogado</Link></li>
              <li><Link to="/blog/defectos-forma-anulan-multa-dgt/" className="text-red-700 underline">Defectos de forma que pueden anular tu multa</Link></li>
              <li><Link to="/blog/recurrir-multa-radar-velocidad/" className="text-red-700 underline">Cómo recurrir una multa de radar de velocidad</Link></li>
              <li><Link to="/blog/prescripcion-y-caducidad-de-las-multas-de-trafico-cuando-expira-una-sancion-de-la-dgt-plazos-legales-mitos-y-como-anular-expedientes-fuera-de-plazo/" className="text-red-700 underline">Prescripción de multas de tráfico: plazos</Link></li>
              <li><Link to="/guias/vicios-forma/" className="text-red-700 underline">Guía: vicios de forma que pueden anular tu multa</Link></li>
              <li><Link to="/guias/radares/" className="text-red-700 underline">Guía: radares de tráfico y cómo recurrir sus multas</Link></li>
              <li><Link to="/herramientas/" className="text-red-700 underline">Herramientas gratis: calculadoras y conversores</Link></li>
            </ul>
          </section>

          {/* Otras comunidades */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Otras comunidades autónomas</p>
            <div className="flex flex-wrap gap-2">
              {otrasComunidades.map((o) => (
                <Link
                  key={o.slug}
                  to={`/comunidades/${o.slug}`}
                  className="text-xs bg-gray-100 hover:bg-red-50 text-gray-700 hover:text-red-700 rounded-full px-3 py-1.5 font-semibold transition-colors"
                >
                  {o.nombre}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>
      <SharedFooter editorial={{ ambito: "multas", tipo: "articulo", sinHerramientas: true }} />
    </div>
  );
}
