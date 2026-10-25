// Metadatos ligeros del blog (sin contenido de posts).
// Separado de blog-data.ts (08/10/2026, optimización PageSpeed): importar
// BLOG_CATEGORIES desde blog-data.ts arrastraba ~2.5MB de posts inline
// al chunk de la página del blog. Este fichero es mínimo y tree-shakeable.
export type BlogPostLocale = "es" | "en" | "fr" | "de" | "pt" | "all";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  keywords: string[];
  content: string;
  locale?: BlogPostLocale;
  /** Textos opcionales que sustituyen los bloques comunes solo en este post. */
  textosPropios?: BlogTextosPropios;
};

export type BlogTextosPropios = {
  ctaTitulo?: string;
  ctaTexto?: string;
  cajaTitulo?: string;
  cajaTexto?: string;
  cajaPuntos?: string[];
  newsletterTitulo?: string;
  newsletterTexto?: string;
  newsletterBaja?: string;
  revision?: string;
};

export const BLOG_CATEGORIES = [
  "Vicios de Forma",
  "Radares y Velocidad",
  "Procedimiento",
  "Provincias",
  "Tipos de Multa",
  "Guías Prácticas",
  "Actualidad",
  "Extranjeros en España",
  "Normativa Vial",
  "Novedades Motor",
  "Modelos desconocidos",
];
