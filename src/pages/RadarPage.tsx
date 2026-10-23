// src/pages/RadarPage.tsx
// 19/10/2026 (radares, agente 3/6): ficha individual de un radar DGT.
// Ruta: /radares/<id_unico>/ (canónica con barra final).
//
// CARGA DE DATOS — decisión documentada:
// El proyecto no usa `?raw` ni ningún loader de estáticos en src/; los datos de
// radares viven en docs/radares/ (indice.json + contenido/<id_unico>.md), así que
// la página los carga como texto crudo vía fetch en cliente:
//   /docs/radares/indice.json
//   /docs/radares/contenido/<id_unico>.md
// LIMITACIÓN / REQUISITO: para que el fetch funcione en dev y en el sitio
// publicado, docs/radares/ tiene que servirse bajo /docs/radares/. Vite solo
// copia a dist/ lo que hay en public/, así que el agente de datos (o el build)
// debe colocar los ficheros en public/docs/radares/ (o añadir un paso de copia
// docs/radares → dist/docs/radares en el build). Sin eso, la página muestra el
// estado de error "datos no disponibles".
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AlertTriangle, Camera, ExternalLink, Loader2, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { useSeo } from "@/hooks/use-seo.ts";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";

const DOMAIN = "https://recurretumulta.online";
// Base pública donde el sitio sirve los datos de radares (ver cabecera).
const RADARES_DATA_BASE = "/docs/radares";
// XML oficial de radares de la DGT (DATEX II, portal NAP), citado en los .md.
const URL_XML_DGT =
  "https://nap.dgt.es/datex2/dgt/PredefinedLocationsPublication/radares/content.xml";
// Dataset oficial de radares del SCT (Generalitat de Catalunya), datos.gob.es.
const URL_DATOS_SCT =
  "https://datos.gob.es/catalogo/a09002970-radares-fijos-de-cataluna";

type RadarIndice = {
  id_unico: string;
  comunidad: string;
  carretera: string;
  /** Puede llegar como "401,561" o 401.561 según el generador del índice. */
  pk: string | number;
  sentido: string;
  tipo: string;
  velocidad_limite: number | null;
  municipio: string;
  lat: number;
  lon: number;
};

type EstadoCarga = "cargando" | "listo" | "no-encontrado" | "error";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Formato en línea: enlaces [t](url), URLs sueltas, **negrita**, *cursiva*. */
function formatoLinea(s: string): string {
  let out = escapeHtml(s);
  out = out.replace(
    /\[([^\]]+)\]\((https?:[^)\s]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-700 underline hover:text-blue-900">$1</a>',
  );
  // URLs sueltas (no las que ya están dentro de un href="...").
  out = out.replace(
    /(?<!href=")(https?:\/\/[^\s<)"']+)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-700 underline hover:text-blue-900 break-all">$1</a>',
  );
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return out;
}

// Pies de foto de la plantilla de los .md que acompañan a sus iframes: la página
// pinta sus propios mapa/Street View desde indice.json, así que se eliminan para
// no duplicarlos.
const PIES_MAPA_MD = new Set([
  "*Mapa: ubicación aproximada del radar según coordenadas DGT (WGS84).*",
  "*Vista 3D (Street View) del entorno del radar.*",
]);

/** Conversión simple de Markdown a HTML: #/##/###, **, *, enlaces, citas, listas. */
function mdAHtml(md: string): string {
  // Los iframes de mapa/Street View los pinta la página (mismas coordenadas):
  // se eliminan del contenido para no duplicarlos.
  const sinIframes = md.replace(/<iframe[\s\S]*?<\/iframe>/gi, "");
  const html: string[] = [];
  let lista: string[] = [];
  let parrafo: string[] = [];
  let cita: string[] = [];
  const vaciarLista = () => {
    if (lista.length > 0) {
      html.push(`<ul>${lista.map((li) => `<li>${formatoLinea(li)}</li>`).join("")}</ul>`);
      lista = [];
    }
  };
  const vaciarParrafo = () => {
    if (parrafo.length > 0) {
      html.push(`<p>${formatoLinea(parrafo.join(" "))}</p>`);
      parrafo = [];
    }
  };
  const vaciarCita = () => {
    if (cita.length > 0) {
      html.push(`<blockquote>${formatoLinea(cita.join(" "))}</blockquote>`);
      cita = [];
    }
  };
  for (const cruda of sinIframes.split("\n")) {
    const t = cruda.trim();
    if (t === "") {
      vaciarLista();
      vaciarParrafo();
      vaciarCita();
      continue;
    }
    if (PIES_MAPA_MD.has(t)) continue;
    if (t.startsWith("### ")) {
      vaciarLista(); vaciarParrafo(); vaciarCita();
      html.push(`<h3>${formatoLinea(t.slice(4).trim())}</h3>`);
      continue;
    }
    if (t.startsWith("## ")) {
      vaciarLista(); vaciarParrafo(); vaciarCita();
      html.push(`<h2>${formatoLinea(t.slice(3).trim())}</h2>`);
      continue;
    }
    if (t.startsWith("> ")) {
      vaciarLista(); vaciarParrafo();
      cita.push(t.slice(2).trim());
      continue;
    }
    if (t.startsWith("- ")) {
      vaciarParrafo(); vaciarCita();
      lista.push(t.slice(2).trim());
      continue;
    }
    if (/^---+$/.test(t)) {
      vaciarLista(); vaciarParrafo(); vaciarCita();
      html.push("<hr />");
      continue;
    }
    vaciarLista();
    vaciarCita();
    parrafo.push(t);
  }
  vaciarLista();
  vaciarParrafo();
  vaciarCita();
  return html.join("\n");
}

/** "verificado el AAAA-MM-DD" de la cabecera del .md; si no, "Fecha de redacción:". */
function fechaVerificacion(md: string): string | null {
  const v = md.match(/verificado el (\d{4}-\d{2}-\d{2})/);
  if (v) return v[1];
  const r = md.match(/Fecha de redacción:\s*(\d{4}-\d{2}-\d{2})/);
  return r ? r[1] : null;
}

function capitalizar(s: string): string {
  return s.length > 0 ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}

export default function RadarPage() {
  const { id } = useParams<{ id: string }>();
  const idUnico = (id ?? "").trim();
  const [estado, setEstado] = useState<EstadoCarga>("cargando");
  const [radar, setRadar] = useState<RadarIndice | null>(null);
  const [mdCrudo, setMdCrudo] = useState<string>("");

  useEffect(() => {
    if (!idUnico) {
      setEstado("no-encontrado");
      return;
    }
    let cancelado = false;
    (async () => {
      try {
        const resIndice = await fetch(`${RADARES_DATA_BASE}/indice.json`);
        if (!resIndice.ok) throw new Error(`indice.json: ${resIndice.status}`);
        const indice = (await resIndice.json()) as unknown;
        const lista = Array.isArray(indice) ? (indice as RadarIndice[]) : [];
        const encontrado = lista.find((r) => r.id_unico === idUnico) ?? null;
        if (!encontrado) {
          if (!cancelado) setEstado("no-encontrado");
          return;
        }
        const resMd = await fetch(
          `${RADARES_DATA_BASE}/contenido/${encodeURIComponent(idUnico)}.md`,
        );
        if (!resMd.ok) throw new Error(`md: ${resMd.status}`);
        const texto = await resMd.text();
        if (!cancelado) {
          setRadar(encontrado);
          setMdCrudo(texto);
          setEstado("listo");
        }
      } catch {
        if (!cancelado) setEstado("error");
      }
    })();
    return () => {
      cancelado = true;
    };
  }, [idUnico]);

  const limiteTxt =
    radar && radar.velocidad_limite != null
      ? `${radar.velocidad_limite} km/h`
      : "No publicado por la DGT (rige la señalización)";

  const titulo = radar
    ? `Radar ${radar.carretera}, pk ${radar.pk}${radar.sentido ? ` (${radar.sentido})` : ""} — ${radar.municipio}, ${radar.comunidad}`
    : "Radar de velocidad DGT";
  const descripcion = radar
    ? `Radar en la ${radar.carretera}, pk ${radar.pk}${radar.sentido ? ` (${radar.sentido})` : ""}, ${radar.municipio} (${radar.comunidad}). Límite: ${limiteTxt}. Datos oficiales ${radar.comunidad === "Cataluña" ? "del SCT" : "de la DGT"}.`
    : "Ficha de un radar de velocidad de la DGT: ubicación, límite de velocidad y datos oficiales.";

  // JSON-LD BreadcrumbList: Inicio > Radares > {comunidad} > Radar {carretera} pk {pk}.
  // useSeo() detecta que el schema ya trae BreadcrumbList y no añade otro.
  const schema = radar
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: `${DOMAIN}/` },
              { "@type": "ListItem", position: 2, name: "Radares", item: `${DOMAIN}/radares/` },
              { "@type": "ListItem", position: 3, name: radar.comunidad },
              {
                "@type": "ListItem",
                position: 4,
                name: `Radar ${radar.carretera} pk ${radar.pk}`,
                item: `${DOMAIN}/radares/${radar.id_unico}/`,
              },
            ],
          },
        ],
      }
    : undefined;

  useSeo({
    title: titulo,
    description: descripcion,
    canonical: idUnico ? `/radares/${idUnico}/` : "/radares",
    schema,
    datePublished: radar ? fechaVerificacion(mdCrudo) : null,
    dateModified: radar ? fechaVerificacion(mdCrudo) : null,
  });

  const mapSrc = radar
    ? `https://www.google.com/maps?q=${radar.lat},${radar.lon}&z=15&output=embed`
    : "";
  const svSrc = radar
    ? `https://maps.google.com/maps?q=&layer=c&cbll=${radar.lat},${radar.lon}&cbp=11,0,0,0,0&output=svembed`
    : "";
  const svExterno = radar
    ? `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${radar.lat},${radar.lon}`
    : "";

  // El .md trae su propio "# ..." como primera línea: la página ya pinta el h1.
  const mdSinTitulo = mdCrudo.replace(/^\s*#\s+.*(\r?\n|$)/, "");
  const contenidoHtml = mdSinTitulo.trim() !== "" ? mdAHtml(mdSinTitulo) : "";

  return (
    <div className="bg-slate-50 text-slate-900 antialiased min-h-screen">
      <SharedNavbar />
      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Migas de pan visuales */}
        <nav aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-slate-500 mb-5">
          <Link to="/" className="hover:text-slate-900">Inicio</Link>
          <span aria-hidden="true">/</span>
          <Link to="/radares/" className="hover:text-slate-900">Radares</Link>
          <span aria-hidden="true">/</span>
          {radar ? (
            <>
              <span>{radar.comunidad}</span>
              <span aria-hidden="true">/</span>
              <span className="text-slate-700 font-medium" aria-current="page">
                Radar {radar.carretera} pk {radar.pk}
              </span>
            </>
          ) : (
            <span className="text-slate-700 font-medium" aria-current="page">Radar</span>
          )}
        </nav>

        {estado === "cargando" && (
          <div className="flex items-center gap-2 text-slate-600 py-16 justify-center">
            <Loader2 className="animate-spin" size={20} aria-hidden="true" />
            <p>Cargando la ficha del radar…</p>
          </div>
        )}

        {estado === "no-encontrado" && (
          <div className="py-16 text-center space-y-4">
            <h1 className="text-2xl font-bold">Radar no encontrado</h1>
            <p className="text-slate-600">
              No hay ningún radar con el identificador «{idUnico}» en el índice de radares.
            </p>
            <Link to="/" className="inline-block text-blue-700 underline hover:text-blue-900">
              Volver al inicio
            </Link>
          </div>
        )}

        {estado === "error" && (
          <div className="py-16 text-center space-y-4">
            <AlertTriangle className="mx-auto text-amber-600" size={32} aria-hidden="true" />
            <h1 className="text-2xl font-bold">Datos no disponibles</h1>
            <p className="text-slate-600 max-w-md mx-auto">
              No se han podido cargar los datos de radares ({RADARES_DATA_BASE}/indice.json).
              Es necesario que los ficheros de datos estén publicados en el sitio.
            </p>
            <Link to="/" className="inline-block text-blue-700 underline hover:text-blue-900">
              Volver al inicio
            </Link>
          </div>
        )}

        {estado === "listo" && radar && (
          <article>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge className="bg-red-600 border-red-500 text-white text-xs font-bold">
                Radar DGT
              </Badge>
              <Badge variant="outline" className="text-xs">
                {capitalizar(radar.tipo)}
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-black mb-6">{titulo}</h1>

            {/* Ficha de datos */}
            <Card className="mb-8">
              <CardContent className="pt-6">
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                  <div>
                    <dt className="text-slate-500">Carretera</dt>
                    <dd className="font-semibold">{radar.carretera}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Punto kilométrico</dt>
                    <dd className="font-semibold">pk {radar.pk}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Sentido</dt>
                    <dd className="font-semibold">{radar.sentido || "No publicado por el SCT"}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Tipo de radar</dt>
                    <dd className="font-semibold">{capitalizar(radar.tipo)}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Límite de velocidad</dt>
                    <dd className="font-semibold">{limiteTxt}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Municipio</dt>
                    <dd className="font-semibold">{radar.municipio}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Fuente</dt>
                    <dd className="font-semibold">
                      {radar.comunidad === "Cataluña" ? (
                        <a
                          href={URL_DATOS_SCT}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-700 underline hover:text-blue-900"
                        >
                          SCT (Generalitat de Catalunya)
                        </a>
                      ) : (
                        <a
                          href={URL_XML_DGT}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-700 underline hover:text-blue-900"
                        >
                          DGT (DATEX II)
                        </a>
                      )}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Fecha de verificación</dt>
                    <dd className="font-semibold">{fechaVerificacion(mdCrudo) ?? "—"}</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            {/* Mapa 2D */}
            <section className="mb-8" aria-label="Mapa de ubicación del radar">
              <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                <MapPin size={20} aria-hidden="true" className="text-red-600" />
                Mapa de ubicación
              </h2>
              <iframe
                title={`Mapa: radar ${radar.id_unico}`}
                src={mapSrc}
                width="100%"
                height="380"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                className="rounded-lg shadow"
              />
              <p className="text-xs text-slate-500 mt-2">
                Ubicación aproximada según las coordenadas DGT (WGS84): {radar.lat}, {radar.lon}.
              </p>
            </section>

            {/* Street View 3D */}
            <section className="mb-8" aria-label="Vista Street View del entorno del radar">
              <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Camera size={20} aria-hidden="true" className="text-red-600" />
                Street View 3D
              </h2>
              <iframe
                title={`Street View: radar ${radar.id_unico}`}
                src={svSrc}
                width="100%"
                height="380"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                className="rounded-lg shadow"
              />
              <p className="text-sm mt-3">
                <a
                  href={svExterno}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-700 underline hover:text-blue-900"
                >
                  Abrir la vista 3D en Google Street View
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </p>
            </section>

            {/* Contenido del .md */}
            {contenidoHtml !== "" && (
              <div
                className="prose prose-slate max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: contenidoHtml }}
              />
            )}
          </article>
        )}
      </main>
      <SharedFooter />
    </div>
  );
}
