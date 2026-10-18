// Plantilla Maextro V800 — BLOG.
// (11/10/2026, orden de Daniel) Estructura obligatoria para blogs nuevos.
// Orden de secciones:
//   H1 (title V800) → H2 nombre del modelo → intro → "Ficha técnica: [Modelo]"
//   (resumen + enlace a la ficha) → "En cifras" → galería (3 fotos reales) →
//   explicador de la tecnología clave → "Curiosidades que lo hacen único" →
//   gancho comparativo → "Preguntas frecuentes" (5-6 con schema) → CTA analizador.
//
// Paquete obligatorio (MANDATOS-PERMANENTES.md §3): 3 fotos reales del modelo
// (verificadas, no genéricas, no IA salvo recreación marcada), enlace a la
// ficha técnica (<a href=/coches|motos|patinetes/<id>>), FAQ 5-6 con schema,
// tablas donde encaje, enlaces internos + fuentes oficiales, CTA al analizador,
// cero relleno.
//
// Uso (artículo nuevo, sin tocar los existentes):
//   import { BlogMaextro } from "@/components/maextro/BlogMaextro.tsx";
//   <BlogMaextro data={MI_ARTICULO} />
// donde MI_ARTICULO: MaextroBlogData (generar con scripts/scaffold-blog.mjs).

import { useSeo } from "@/hooks/use-seo.ts";
import type { MaextroBlogData } from "./tipos.ts";
import {
  faqSchema,
  tituloBlogMaextro,
  truncar60,
} from "./tipos.ts";
import { hrefDesdeBlog } from "@/lib/blog-redir.generated";
import {
  AcordeonFaq,
  CtaAnalizador,
  EnCifras,
  SeccionMaextro,
} from "./compartidos.tsx";

export function BlogMaextro({ data }: { data: MaextroBlogData }) {
  const d = data;
  // Title SIEMPRE según la plantilla V800 (mandato): "[Modelo]: [dato impactante] por [precio]", ≤60, sin marca.
  const title = truncar60(tituloBlogMaextro(d.nombreCompleto, d.datoImpactante, d.precioTitle));
  const canonical = hrefDesdeBlog(d.slug);

  useSeo({
    title,
    description: d.description,
    canonical,
    image: `https://recurretumulta.online${d.imagenHero}`,
    type: "article",
    schema: faqSchema(d.faqs),
  });

  return (
    <main className="mx-auto max-w-3xl px-3 sm:px-4">
      {/* H1 = title V800 */}
      <header className="rtm-card mt-4 overflow-hidden rounded-3xl border border-gray-200 bg-white">
        <div className="relative">
          <img
            src={d.imagenHero}
            alt={`${d.nombreCompleto} — ${d.datoImpactante}`}
            className="aspect-[16/9] w-full object-cover"
            width={1200}
            height={675}
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
            <h1 className="text-2xl font-black text-white sm:text-3xl">{title}</h1>
          </div>
        </div>
      </header>

      {/* H2: nombre del modelo (mandato) */}
      <section className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6" aria-label={d.nombreCompleto}>
        <h2 className="text-xl font-extrabold text-gray-900">{d.nombreCompleto}</h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-700">{d.intro}</p>
      </section>

      {/* En cifras */}
      <SeccionMaextro id="en-cifras" titulo="En cifras">
        <EnCifras cifras={d.enCifras} />
      </SeccionMaextro>

      {/* Ficha técnica: [Modelo] — resumen + enlace obligatorio a la ficha */}
      <SeccionMaextro id="ficha-tecnica-modelo" titulo={`Ficha técnica: ${d.nombreCompleto}`}>
        <dl className="divide-y divide-gray-100">
          {d.fichaResumen.map((s, i) => (
            <div key={i} className="flex items-baseline justify-between gap-3 py-2">
              <dt className="text-sm text-gray-600">{s.campo}</dt>
              <dd className="text-right text-sm font-bold text-gray-900">{s.valor}</dd>
            </div>
          ))}
        </dl>
        <a
          href={d.fichaHref}
          className="mt-4 inline-block rounded-full bg-red-700 px-6 py-3 text-sm font-extrabold text-white shadow-lg transition-transform hover:scale-105"
        >
          Ver la ficha técnica completa del {d.nombreCompleto}
        </a>
      </SeccionMaextro>

      {/* Galería: 3 fotos reales del modelo (paquete obligatorio) */}
      <SeccionMaextro id="galeria" titulo="Galería">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {d.imagenes.slice(0, 3).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${d.nombreCompleto} — foto real ${i + 1}`}
              className="aspect-[4/3] w-full rounded-xl object-cover"
              width={800}
              height={600}
              loading="lazy"
            />
          ))}
        </div>
      </SeccionMaextro>

      {/* Explicador de la tecnología clave */}
      <SeccionMaextro id="tecnologia" titulo={d.tecnologia.titulo}>
        <p className="text-sm leading-relaxed text-gray-700">{d.tecnologia.intro}</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
          {d.tecnologia.puntos.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
        {d.tecnologia.imagen && (
          <img
            src={d.tecnologia.imagen}
            alt={d.tecnologia.imagenAlt || `${d.nombreCompleto} — ${d.tecnologia.titulo}`}
            className="mt-3 aspect-[16/9] w-full rounded-xl object-cover"
            width={1200}
            height={675}
            loading="lazy"
          />
        )}
      </SeccionMaextro>

      {/* Curiosidades que lo hacen único */}
      <SeccionMaextro id="curiosidades" titulo="Curiosidades que lo hacen único">
        <div className="space-y-3">
          {d.curiosidades.map((c, i) => (
            <div key={i} className="rounded-2xl bg-gray-50 p-3">
              <h3 className="text-sm font-extrabold text-gray-900">
                {i + 1}. {c.titulo}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-700">{c.texto}</p>
            </div>
          ))}
        </div>
      </SeccionMaextro>

      {/* Gancho comparativo */}
      <SeccionMaextro id="comparativa" titulo={d.comparativo.titulo}>
        <p className="text-sm leading-relaxed text-gray-700">{d.comparativo.texto}</p>
        {d.comparativo.rivales.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {d.comparativo.rivales.map((r, i) =>
              r.href ? (
                <a
                  key={i}
                  href={r.href}
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm font-bold text-gray-900 transition-colors hover:bg-gray-200"
                >
                  {r.nombre}
                </a>
              ) : (
                <span key={i} className="rounded-full bg-gray-100 px-4 py-2 text-sm font-bold text-gray-900">
                  {r.nombre}
                </span>
              )
            )}
          </div>
        )}
      </SeccionMaextro>

      {/* Preguntas frecuentes (5-6 con schema FAQPage) */}
      <SeccionMaextro id="faq" titulo="Preguntas frecuentes">
        <AcordeonFaq faqs={d.faqs} />
      </SeccionMaextro>

      {/* Fuentes oficiales (paquete obligatorio §3) */}
      {d.fuentes.length > 0 && (
        <SeccionMaextro id="fuentes" titulo="Fuentes oficiales">
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
            {d.fuentes.map((f, i) => (
              <li key={i}>
                <a
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-red-700 underline"
                >
                  {f.titulo}
                </a>
              </li>
            ))}
          </ul>
        </SeccionMaextro>
      )}

      {/* CTA al analizador (paquete obligatorio) */}
      <CtaAnalizador />
    </main>
  );
}

export default BlogMaextro;
