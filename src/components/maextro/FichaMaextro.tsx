// Plantilla Maextro V800 — FICHA TÉCNICA.
// (11/10/2026, orden de Daniel) Estructura obligatoria para fichas nuevas.
// Orden de secciones:
//   H1 nombre del modelo → "La nota de Cosa" → "En cifras" → Ficha técnica
//   (animada) → "¿Puede entrar en la ZBE de Madrid?" → "Precio y versiones"
//   → Puntos fuertes/débiles → EuroNCAP → Historia del modelo →
//   Plan de mantenimiento → Garantía → "Preguntas frecuentes".
//
// Paquete obligatorio (MANDATOS-PERMANENTES.md §2): ficha técnica animada,
// EuroNCAP verificado (honesto si no hay prueba), mantenimiento verificable
// con fuente, historia con timeline y foto en cada hito, garantía oficial,
// precio obligatorio (real u orientativo marcado), FAQ 5-6 con schema.
//
// Uso (página nueva, sin tocar las existentes):
//   import { FichaMaextro } from "@/components/maextro/FichaMaextro.tsx";
//   <FichaMaextro data={MI_FICHA} />
// donde MI_FICHA: MaextroFichaData (generar con scripts/scaffold-ficha.mjs).

import { useSeo } from "@/hooks/use-seo.ts";
import type { MaextroFichaData } from "./tipos.ts";
import {
  faqSchema,
  textoPrecio,
  textoZbe,
  tituloFichaMaextro,
  truncar60,
} from "./tipos.ts";
import { hrefDesdeBlog } from "@/lib/blog-redir.generated";
import {
  AcordeonFaq,
  AnilloNota,
  EnCifras,
  EstrellasEuroNCAP,
  SeccionMaextro,
  TablaSpecsAnimada,
} from "./compartidos.tsx";
import { fmtMiles } from "@/lib/formato.ts";

// 20/10/2026 (fix plantilla): fmtMiles agrupa siempre (toLocaleString no agrupaba 4 cifras).
const fmtEur = (v: number) => fmtMiles(v) + " €";

export function FichaMaextro({ data }: { data: MaextroFichaData }) {
  const d = data;
  // Title SIEMPRE según la plantilla V800 (mandato): "[Modelo]: [dato clave] [Ficha AÑO]", ≤60, sin marca.
  const title = truncar60(tituloFichaMaextro(d.nombreCompleto, d.datoClave, d.ano));
  const canonical = `/${d.seccion}/${d.slug}/`;
  const zbe = d.zbeTexto || textoZbe(d.nombreCompleto, d.etiquetaDgt);

  useSeo({
    title,
    description: d.description,
    canonical,
    image: `https://recurretumulta.online${d.imagenHero}`,
    schema: faqSchema(d.faqs),
  });

  return (
    <main className="mx-auto max-w-3xl px-3 sm:px-4">
      {/* H1: nombre del modelo (mandato) */}
      <header className="rtm-card mt-4 overflow-hidden rounded-3xl border border-gray-200 bg-white">
        <div className="relative">
          <img
            src={d.imagenHero}
            alt={`${d.nombreCompleto} — ${d.categoria.toLowerCase()} ${d.tipo.toLowerCase()}`}
            className="aspect-[16/9] w-full object-cover"
            width={1200}
            height={675}
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
            <h1 className="text-2xl font-black text-white sm:text-3xl">{d.nombreCompleto}</h1>
            <p className="mt-1 text-sm font-semibold text-white/90">
              {d.tipo} · {d.categoria} · {d.marca}
            </p>
          </div>
        </div>
      </header>

      {/* La nota de Cosa */}
      <SeccionMaextro id="nota-cosa" titulo="La nota de Cosa">
        <div className="flex items-start gap-4">
          <AnilloNota nota={d.notaCosa.nota} />
          <p className="text-sm leading-relaxed text-gray-700">{d.notaCosa.texto}</p>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-emerald-50 p-3">
            <h3 className="text-sm font-extrabold text-emerald-800">Puntos fuertes</h3>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-gray-700">
              {d.notaCosa.pros.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-red-50 p-3">
            <h3 className="text-sm font-extrabold text-red-800">Puntos débiles</h3>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-gray-700">
              {d.notaCosa.contras.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </SeccionMaextro>

      {/* En cifras */}
      <SeccionMaextro id="en-cifras" titulo="En cifras">
        <EnCifras cifras={d.enCifras} />
      </SeccionMaextro>

      {/* Ficha técnica animada */}
      <SeccionMaextro id="ficha-tecnica" titulo="Ficha técnica">
        <TablaSpecsAnimada specs={d.specs} />
      </SeccionMaextro>

      {/* ZBE de Madrid */}
      <SeccionMaextro id="zbe-madrid" titulo="¿Puede entrar en la ZBE de Madrid?">
        <p className="text-sm leading-relaxed text-gray-700">{zbe}</p>
        {d.etiquetaDgt && (
          <p className="mt-2 inline-block rounded-full bg-gray-900 px-3 py-1 text-xs font-bold text-white">
            Etiqueta DGT {d.etiquetaDgt}
          </p>
        )}
      </SeccionMaextro>

      {/* Precio y versiones */}
      <SeccionMaextro id="precio-versiones" titulo="Precio y versiones">
        <div className="rounded-2xl bg-gray-50 p-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-2xl font-black text-gray-900">{textoPrecio(d.precio)}</span>
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                d.precio.tipo === "real"
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-amber-100 text-amber-800"
              }`}
            >
              {d.precio.tipo === "real" ? "Precio real" : "Precio orientativo"}
            </span>
          </div>
          {d.precio.texto && <p className="mt-1 text-sm text-gray-600">{d.precio.texto}</p>}
          {d.precio.fuente && (
            <p className="mt-1 text-xs text-gray-500">Fuente: {d.precio.fuente}</p>
          )}
        </div>
        {d.versiones.length > 0 && (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-left text-gray-500">
                  <th className="py-2 pr-2 font-semibold">Versión</th>
                  <th className="py-2 pr-2 font-semibold">Precio</th>
                  <th className="py-2 font-semibold">Detalle</th>
                </tr>
              </thead>
              <tbody>
                {d.versiones.map((v, i) => (
                  <tr key={i} className="border-b border-gray-100 last:border-0">
                    <td className="py-2 pr-2 font-bold text-gray-900">{v.nombre}</td>
                    <td className="py-2 pr-2 whitespace-nowrap text-gray-900">
                      {v.precioEur == null
                        ? "—"
                        : `${v.precioOrientativo ? "≈" : ""}${fmtEur(v.precioEur)}`}
                    </td>
                    <td className="py-2 text-gray-600">{v.texto ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </SeccionMaextro>

      {/* Galería: fotos reales del modelo */}
      {d.imagenes.length > 0 && (
        <SeccionMaextro id="galeria" titulo="Galería">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {d.imagenes.slice(0, 6).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${d.nombreCompleto} — foto ${i + 1}`}
                className="aspect-[4/3] w-full rounded-xl object-cover"
                width={800}
                height={600}
                loading="lazy"
              />
            ))}
          </div>
        </SeccionMaextro>
      )}

      {/* Seguridad EuroNCAP */}
      <SeccionMaextro id="euroncap" titulo="Seguridad EuroNCAP">
        <EstrellasEuroNCAP estrellas={d.euroncap.estrellas} />
        {d.euroncap.estrellas != null && (
          <p className="mt-2 text-sm text-gray-600">
            Prueba de {d.euroncap.ano ?? "año no indicado"}.
            {d.euroncap.url && (
              <>
                {" "}
                <a
                  href={d.euroncap.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-red-700 underline"
                >
                  Ver resultado oficial en EuroNCAP
                </a>
              </>
            )}
          </p>
        )}
      </SeccionMaextro>

      {/* Historia del modelo: timeline con foto en cada hito */}
      <SeccionMaextro id="historia" titulo="Historia del modelo">
        <ol className="relative space-y-6 border-l-2 border-gray-200 pl-0">
          {d.historia.map((h, i) => (
            <li key={i} className="ml-4">
              <span className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-red-600" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-wide text-red-700">{h.ano}</p>
              <h3 className="text-sm font-extrabold text-gray-900">{h.titulo}</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-700">{h.texto}</p>
              <img
                src={h.foto}
                alt={h.fotoAlt || `${d.nombreCompleto} — ${h.titulo}`}
                className="mt-2 aspect-[16/9] w-full rounded-xl object-cover"
                width={1200}
                height={675}
                loading="lazy"
              />
            </li>
          ))}
        </ol>
      </SeccionMaextro>

      {/* Plan de mantenimiento verificable */}
      <SeccionMaextro id="mantenimiento" titulo="Plan de mantenimiento oficial">
        <p className="text-sm text-gray-600">
          Intervalo: <strong className="text-gray-900">{d.mantenimiento.intervalo}</strong>
        </p>
        {d.mantenimiento.revisiones.length > 0 && (
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-left text-gray-500">
                  <th className="py-2 pr-2 font-semibold">Revisión</th>
                  <th className="py-2 pr-2 font-semibold">Qué se cambia</th>
                  <th className="py-2 font-semibold">Coste aprox.</th>
                </tr>
              </thead>
              <tbody>
                {d.mantenimiento.revisiones.map((r, i) => (
                  <tr key={i} className="border-b border-gray-100 last:border-0">
                    <td className="py-2 pr-2 font-bold text-gray-900">{r.nombre}</td>
                    <td className="py-2 pr-2 text-gray-600">{r.queSeCambia}</td>
                    <td className="py-2 whitespace-nowrap text-gray-900">
                      {r.costeAproxEur == null ? "—" : `≈${fmtEur(r.costeAproxEur)}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {d.mantenimiento.costeAnualAproxEur != null && (
          <p className="mt-2 text-sm text-gray-700">
            Coste anual aproximado de mantenimiento:{" "}
            <strong className="text-gray-900">≈{fmtEur(d.mantenimiento.costeAnualAproxEur)}</strong>
          </p>
        )}
        {d.mantenimiento.fuente && (
          <p className="mt-1 text-xs text-gray-500">Fuente: {d.mantenimiento.fuente}</p>
        )}
      </SeccionMaextro>

      {/* Garantía oficial */}
      <SeccionMaextro id="garantia" titulo={`Garantía oficial ${d.marca}`}>
        <p className="text-sm leading-relaxed text-gray-700">{d.garantia.texto}</p>
        {d.garantia.bateria && (
          <p className="mt-2 text-sm text-gray-700">
            Batería de tracción: <strong className="text-gray-900">{d.garantia.bateria}</strong>
          </p>
        )}
        {d.garantia.fuente && (
          <p className="mt-1 text-xs text-gray-500">Fuente: {d.garantia.fuente}</p>
        )}
      </SeccionMaextro>

      {/* Preguntas frecuentes (5-6 con schema FAQPage) */}
      <SeccionMaextro id="faq" titulo="Preguntas frecuentes">
        <AcordeonFaq faqs={d.faqs} />
      </SeccionMaextro>

      {/* Enlace al artículo del blog (paquete obligatorio, si existe) */}
      {d.blogSlug && (
        <div className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6">
          <h2 className="text-xl font-extrabold text-gray-900">Análisis completo en el blog</h2>
          <a
            href={hrefDesdeBlog(d.blogSlug)}
            className="mt-3 inline-block rounded-full bg-red-700 px-6 py-3 text-sm font-extrabold text-white shadow-lg transition-transform hover:scale-105"
          >
            Leer el análisis del {d.nombreCompleto}
          </a>
        </div>
      )}
    </main>
  );
}

export default FichaMaextro;
