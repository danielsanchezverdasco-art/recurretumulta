import NOINDEX_JSON from "@/lib/noindex.generated.json";
// 31/10/2026: regla de Daniel, sin noindex añadido por nosotros; la lista queda vacía.
const NOINDEX: string[] = NOINDEX_JSON as string[];
// 14/10/2026: noindex fijado en el HTML estático (data-fijo, scripts/adsense-dist.py) para la URL de entrada.
const NOINDEX_FIJO: string | null =
  typeof document !== "undefined" && document.querySelector('meta[name="robots"][data-fijo]')
    ? location.pathname.replace(/\/?$/, "/")
    : null;
// Hook para inyectar meta tags SEO dinámicos en cada página
// Fundamental para SPA SEO: actualiza <title>, description, canonical, OG y Twitter por ruta
//
// Sitio solo en español: la canonical es siempre la URL española absoluta
// (https://recurretumulta.online + ruta) y NO se emiten etiquetas hreflang.

import { useEffect } from "react";
import { AUTOR_DANIEL, PUBLISHER, isoDia } from "@/lib/eeat.ts";

const DOMAIN = "https://recurretumulta.online";
const DEFAULT_IMG = "https://recurretumulta.online/media/og-recurretumulta-online.png";

type SeoProps = {
  title: string;
  description: string;
  /** Ruta española, ej. "/", "/multas", "/multas/madrid" */
  canonical?: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string[];
  /** Si es true, emite robots "noindex, nofollow" (perfil, 404, páginas privadas) */
  noindex?: boolean;
  /** Schema.org JSON-LD object (or array) to inject */
  schema?: Record<string, unknown> | Record<string, unknown>[];
  /** E-E-A-T 17/10/2026: fechas reales de la página (AAAA-MM-DD o ISO). Sin fecha conocida, se omiten. */
  datePublished?: string | null;
  dateModified?: string | null;
};

/**
 * E-E-A-T 17/10/2026: el JSON-LD estático de index.html trae el WebPage de la HOME
 * (#webpage, url "/") y acababa en todas las páginas. Fuera de "/" se quita ese nodo
 * (se conservan Organization, WebSite y SoftwareApplication).
 */
function limpiarWebPageEstatico(path: string) {
  if (path === "/") return;
  for (const el of Array.from(document.querySelectorAll('script[type="application/ld+json"]:not([data-seo-id])'))) {
    const txt = el.textContent || "";
    if (!txt.includes('/#webpage"')) continue;
    try {
      const d = JSON.parse(txt);
      if (Array.isArray(d["@graph"])) {
        d["@graph"] = d["@graph"].filter((n: Record<string, unknown>) => !String(n["@id"] || "").endsWith("/#webpage"));
        el.textContent = JSON.stringify(d);
      }
    } catch {
      /* JSON-LD estático ilegible: no se toca */
    }
  }
}

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function injectSchema(schema: Record<string, unknown> | Record<string, unknown>[], id: string) {
  let el = document.querySelector(`script[data-seo-id="${id}"]`);
  if (!el) {
    el = document.createElement("script");
    el.setAttribute("type", "application/ld+json");
    el.setAttribute("data-seo-id", id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(Array.isArray(schema) ? schema.filter((s) => s["@type"] !== "Organization" && s["@type"] !== "WebSite") : schema);
}


// 17/10/2026 (GSC «Rutas de exploración»): exactamente UN BreadcrumbList por página.
// La plantilla global de index.html ya no lleva breadcrumb; si el schema de la
// página no trae uno propio, se añade aquí Inicio > página (URL absoluta).
const BC_NOMBRES: Record<string, string> = {
  "/blog/": "Blog",
  "/multas/": "Multas por provincia",
  "/empresas/": "Empresas",
  "/herramientas/": "Herramientas",
  "/contacto/": "Contacto",
  "/aviso-legal/": "Aviso legal",
  "/privacidad/": "Privacidad",
  "/cookies/": "Cookies",
  "/terminos/": "Términos",
  "/newsletter/": "Newsletter",
  "/juego-monos/": "Juego de los monos",
  "/reportar-carretera/": "Reportar carretera",
};
type Nodo = Record<string, unknown>;
function tieneBreadcrumb(o: unknown): boolean {
  if (Array.isArray(o)) return o.some(tieneBreadcrumb);
  if (o && typeof o === "object") {
    const n = o as Nodo;
    const t = n["@type"];
    if (t === "BreadcrumbList" || (Array.isArray(t) && t.includes("BreadcrumbList"))) return true;
    return Object.values(n).some(tieneBreadcrumb);
  }
  return false;
}
function breadcrumbEnDom(): boolean {
  // Otro bloque JSON-LD de la página (p. ej. <script> renderizado por el componente
  // o el «bc-static» de las páginas de marca) ya trae su BreadcrumbList.
  const otros = document.querySelectorAll('script[type="application/ld+json"]:not([data-seo-id="page-schema"])');
  for (const s of Array.from(otros)) {
    try {
      if (tieneBreadcrumb(JSON.parse(s.textContent || "null"))) return true;
    } catch {
      /* JSON inválido: se ignora */
    }
  }
  return false;
}
function conBreadcrumb(
  schema: Nodo | Nodo[] | undefined,
  canonPath: string,
  url: string,
  titulo: string,
): Nodo | Nodo[] | undefined {
  const ruta = canonPath.split("?")[0];
  if (ruta === "/" || tieneBreadcrumb(schema) || breadcrumbEnDom()) return schema;
  const nombre = BC_NOMBRES[ruta] || titulo.split(/\s[:|—–-]\s|:\s/)[0].trim() || titulo;
  const bc: Nodo = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${DOMAIN}/` },
      { "@type": "ListItem", position: 2, name: nombre, item: url.split("?")[0] },
    ],
  };
  if (!schema) return [bc];
  if (Array.isArray(schema)) return [...schema, bc];
  if (Array.isArray(schema["@graph"])) {
    const { "@context": _c, ...bcSinCtx } = bc;
    return { ...schema, "@graph": [...(schema["@graph"] as Nodo[]), bcSinCtx] };
  }
  return [schema, bc];
}

function removeSchema(id: string) {
  document.querySelector(`script[data-seo-id="${id}"]`)?.remove();
}

export function useSeo({
  title,
  description,
  canonical,
  image = DEFAULT_IMG,
  type = "website",
  keywords = [],
  noindex = false,
  schema,
  datePublished,
  dateModified,
}: SeoProps) {
  // SEO exprés 04/10/2026: Google corta las descriptions a ~155 caracteres en SERPs.
  // Truncar aquí (un solo punto) en vez de tocar los 89 textos largos en los datos.
  const desc =
    description.length > 155 ? description.slice(0, 152).trimEnd() + "…" : description;
  useEffect(() => {
    const basePath = canonical ?? "/";
    // Norma de títulos 11/10/2026 (orden de Daniel): el <title> contiene SOLO
    // lo que el usuario busca + la solución a su problema. PROHIBIDO el nombre
    // de la web/marca en títulos. Sin sufijo de marca en ninguna página.
    const fullTitle = title;
    // Canonical con barra final: el servidor sirve el contenido en la versión con /
    // y redirige 301 la versión sin /. El canonical debe apuntar a la URL que
    // devuelve 200 (Seobility 03/10/2026: 44 "loops" + 22 errores de canonical).
    // 13/10/2026: la query (?a=… de los comparadores) va después de la barra.
    const [rutaCanon, queryCanon = ""] = basePath.split(/(?=\?)/);
    const canonPath =
      (rutaCanon !== "/" && !rutaCanon.endsWith("/") && !/\.[a-z0-9]+$/i.test(rutaCanon)
        ? `${rutaCanon}/`
        : rutaCanon) + queryCanon;
    // Canonical española absoluta. Sitio solo en español: sin hreflang ni prefijos de idioma.
    const url = `${DOMAIN}${canonPath}`;

    // Título/meta finales fijados en el HTML por scripts/apply-seo.mjs
    // (fuente: src/content/seo/titulos.csv): en esa URL no se pisan.
    // 13/10/2026: también se conserva el título prerenderizado de la URL de entrada.
    const inicial = (window as unknown as { __SEO_INICIAL__?: { path: string; title: string; desc: string } }).__SEO_INICIAL__;
    const deEntrada = !!inicial && inicial.path === canonPath.split("?")[0] && location.pathname.replace(/\/?$/, "/") === inicial.path;
    const fijo = deEntrada || document.querySelector('meta[name="rtm-seo"]')?.getAttribute("data-path") === canonPath;
    const tituloFinal = deEntrada ? inicial!.title : fijo ? document.title : fullTitle;
    const descFinal = deEntrada
      ? inicial!.desc || desc
      : fijo
        ? document.querySelector('meta[name="description"]')?.getAttribute("content") || desc
        : desc;

    // Title
    document.title = tituloFinal;

    // Meta básicos
    setMeta("description", descFinal);
    
    setMeta(
      "robots",
      noindex
        ? "noindex, nofollow"
        : NOINDEX.includes(location.pathname.replace(/\/?$/, "/")) || location.pathname.replace(/\/?$/, "/") === NOINDEX_FIJO
        ? "noindex, follow"
        : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    );
    setMeta("author", "RecurreTuMulta.online");
    setMeta("publisher", "RecurreTuMulta.online");
    setMeta("copyright", `© ${new Date().getFullYear()} RecurreTuMulta.online`);
    setMeta("language", "es");
    document.documentElement.lang = "es";

    // Canonical
    setLink("canonical", url);

    // Open Graph
    setMeta("og:title", tituloFinal, "property");
    setMeta("og:description", descFinal, "property");
    setMeta("og:url", url, "property");
    setMeta("og:image", image, "property");
    setMeta("og:type", type, "property");
    setMeta("og:locale", "es_ES", "property");
    setMeta("og:site_name", "RecurreTuMulta.online", "property");

    // Twitter
    setMeta("twitter:title", tituloFinal, "name");
    setMeta("twitter:description", descFinal, "name");
    setMeta("twitter:image", image, "name");
    setMeta("twitter:card", "summary_large_image", "name");

    // E-E-A-T 17/10/2026: og:updated_time solo con la fecha real de actualización
    // (antes ponía la hora del prerender en todas las páginas: frescura falsa).
    const pub = isoDia(datePublished);
    const mod = isoDia(dateModified) ?? pub;
    if (mod) setMeta("og:updated_time", mod, "property");
    else document.querySelector('meta[property="og:updated_time"]')?.remove();

    // E-E-A-T 17/10/2026: WebPage propio de cada URL con autor (Daniel), editor y fechas reales.
    limpiarWebPageEstatico(canonPath.split("?")[0]);
    injectSchema(
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${url.split("?")[0]}#webpage`,
        url: url.split("?")[0],
        name: tituloFinal,
        inLanguage: "es-ES",
        isPartOf: { "@id": `${DOMAIN}/#website` },
        author: AUTOR_DANIEL,
        publisher: PUBLISHER,
        ...(pub ? { datePublished: pub } : {}),
        ...(mod ? { dateModified: mod } : {}),
      },
      "page-eeat",
    );

    // Schema
    const schemaFinal = noindex ? schema : conBreadcrumb(schema, canonPath, url, tituloFinal);
    if (schemaFinal) {
      injectSchema(schemaFinal, "page-schema");
    } else {
      removeSchema("page-schema");
    }

    return () => {
      removeSchema("page-schema");
      removeSchema("page-eeat");
    };
  }, [title, description, canonical, image, type, keywords, noindex, schema, datePublished, dateModified]);

  return null;
}

// 13/10/2026 (indexación): canonical autorreferente en los comparadores con ?a=<id>
// (también ?b= y ?c=, en ese orden). Sin parámetros -> la ruta base.
export function canonicalComparador(base: string): string {
  // Canonical autorreferente sin parámetros: /comparador-x/?a=... apunta a /comparador-x/.
  return base;
}
