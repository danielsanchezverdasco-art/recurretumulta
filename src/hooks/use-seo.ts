// Hook para inyectar meta tags SEO dinámicos en cada página
// Fundamental para SPA SEO: actualiza <title>, description, canonical, OG y Twitter por ruta
//
// Sitio solo en español: la canonical es siempre la URL española absoluta
// (https://recurretumulta.online + ruta) y NO se emiten etiquetas hreflang.

import { useEffect } from "react";

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
};

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
    const canonPath =
      basePath !== "/" && !basePath.endsWith("/") && !/\.[a-z0-9]+$/i.test(basePath)
        ? `${basePath}/`
        : basePath;
    // Canonical española absoluta. Sitio solo en español: sin hreflang ni prefijos de idioma.
    const url = `${DOMAIN}${canonPath}`;

    // Título/meta finales fijados en el HTML por scripts/apply-seo.mjs
    // (fuente: src/content/seo/titulos.csv): en esa URL no se pisan.
    const fijo = document.querySelector('meta[name="rtm-seo"]')?.getAttribute("data-path") === canonPath;
    const tituloFinal = fijo ? document.title : fullTitle;
    const descFinal = fijo
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

    // Freshness signal for search/AI engines
    setMeta("og:updated_time", new Date().toISOString(), "property");

    // Schema
    if (schema) {
      injectSchema(schema, "page-schema");
    } else {
      removeSchema("page-schema");
    }

    return () => {
      removeSchema("page-schema");
    };
  }, [title, description, canonical, image, type, keywords, noindex, schema]);

  return null;
}
