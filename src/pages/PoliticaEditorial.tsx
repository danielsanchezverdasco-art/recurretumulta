// Política editorial y metodología de contenidos (E-E-A-T 17/10/2026).
// Solo describe cómo se trabaja de verdad en la web (reglas del repo y de /sobre-nosotros/).
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/use-seo.ts";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import { AUTOR_DANIEL, DOMAIN, FUENTES, PUBLISHER } from "@/lib/eeat.ts";

const ACTUALIZADO = "2026-10-17";

const SECCIONES: { id: string; titulo: string; puntos: ReactNode[] }[] = [
  {
    id: "quien",
    titulo: "Quién hace los contenidos",
    puntos: [
      <>
        <strong>Daniel</strong>, fundador de RecurreTuMulta.online, es el responsable de los contenidos: define las reglas
        editoriales y supervisa el proyecto. Más sobre él en{" "}
        <Link to="/sobre-nosotros/" className="text-red-600 underline">Quiénes somos</Link>.
      </>,
      "Cosa, la inteligencia artificial de la web, redacta los artículos, mantiene las fichas técnicas y publica siguiendo esas reglas. Lo decimos abiertamente: es contenido elaborado con IA bajo supervisión humana.",
      "No somos abogados ni un despacho: somos una herramienta de análisis y divulgación. Cuando un caso necesita un abogado, lo decimos.",
    ],
  },
  {
    id: "fichas",
    titulo: "Cómo verificamos las fichas técnicas (coches, motos y patinetes)",
    puntos: [
      "Fuente principal: la web oficial de la marca en España. Si no publica un dato, usamos prensa especializada o tiendas, y la fuente queda citada en la ficha.",
      "Lo que no está confirmado se marca con ≈ o «dato no oficial · en revisión». Lo que no encontramos se deja vacío o como «No publicado»: nunca inventamos cifras.",
      "Seguridad: solo mostramos estrellas Euro NCAP si existe un test oficial del modelo; si no lo hay, lo indicamos y no penaliza la nota.",
      "Precios: precio de partida publicado. Los modelos que solo se venden fuera de España muestran el precio de origen convertido y marcado como aproximado. El historial de precios solo registra cambios con fecha y fuente.",
      "Fotos: del modelo exacto, sin marcas de agua. Solo las de prensa del fabricante se presentan como oficiales.",
    ],
  },
  {
    id: "normativa",
    titulo: "Cómo verificamos la normativa y las multas",
    puntos: [
      "Contrastamos con el BOE (Ley de Tráfico RDL 6/2015, Ley 39/2015, Reglamento General de Circulación y Reglamento General de Conductores) y la información pública de la DGT, y enlazamos la fuente en cada artículo.",
      <>
        El analizador de multas con IA y sus límites se explican en{" "}
        <Link to="/metodologia/" className="text-red-600 underline">Metodología del análisis</Link>.
      </>,
    ],
  },
  {
    id: "fechas",
    titulo: "Fechas de publicación y actualización",
    puntos: [
      "«Publicado» es la fecha en que la página entró en nuestro registro de publicaciones; «Actualizado», la del último cambio de contenido registrado.",
      "De las fichas publicadas antes del 12/10/2026 no conservamos la fecha exacta de publicación, así que solo mostramos la de actualización.",
    ],
  },
  {
    id: "correcciones",
    titulo: "Errores y correcciones",
    puntos: [
      <>
        Si ves un dato erróneo, escríbenos a{" "}
        <a href="mailto:soporte@recurretumulta.online" className="text-red-600 underline">soporte@recurretumulta.online</a> o desde{" "}
        <Link to="/contacto/" className="text-red-600 underline">contacto</Link>. Lo revisamos contra la fuente y, si procede, lo
        corregimos y actualizamos la fecha.
      </>,
    ],
  },
  {
    id: "publicidad",
    titulo: "Publicidad e independencia",
    puntos: [
      "La web puede mostrar anuncios de Google AdSense. Los anunciantes no deciden ni revisan el contenido.",
      "Si algún día incluimos enlaces de afiliado, irán marcados como tales.",
    ],
  },
];

export default function PoliticaEditorial() {
  useSeo({
    title: "Política editorial: cómo verificamos fichas y normativa",
    description:
      "Quién hace los contenidos de RecurreTuMulta.online, de dónde salen los datos de las fichas técnicas y la normativa, cómo marcamos lo no confirmado y cómo corregimos errores.",
    canonical: "/politica-editorial/",
    dateModified: ACTUALIZADO,
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${DOMAIN}/politica-editorial/#about`,
      name: "Política editorial de RecurreTuMulta.online",
      url: `${DOMAIN}/politica-editorial/`,
      inLanguage: "es-ES",
      author: AUTOR_DANIEL,
      publisher: PUBLISHER,
      dateModified: ACTUALIZADO,
    },
  });
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SharedNavbar />
      <main className="mx-auto max-w-3xl space-y-8 px-4 pt-[96px] pb-12">
        <nav aria-label="Migas de pan" className="text-xs text-gray-500">
          <Link to="/">Inicio</Link> / <span>Política editorial</span>
        </nav>
        <header className="space-y-2">
          <h1 className="text-3xl font-black">Política editorial y metodología</h1>
          <p className="text-sm text-gray-600">
            Cómo elaboramos y verificamos lo que publicamos en RecurreTuMulta.online.{" "}
            <time dateTime={ACTUALIZADO}>{"Actualizado: 17 de octubre de 2026"}</time>.
          </p>
        </header>
        {SECCIONES.map((s) => (
          <section key={s.id} id={s.id} className="space-y-2">
            <h2 className="text-xl font-black">{s.titulo}</h2>
            <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-gray-700">
              {s.puntos.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </section>
        ))}
        <section className="space-y-2">
          <h2 className="text-xl font-black">Fuentes oficiales de referencia</h2>
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
            {Object.values(FUENTES).map((f) => (
              <li key={f.url}>
                <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-red-600 underline">
                  {f.nombre}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SharedFooter editorial={{ tipo: "pagina", actualizado: ACTUALIZADO }} />
    </div>
  );
}
