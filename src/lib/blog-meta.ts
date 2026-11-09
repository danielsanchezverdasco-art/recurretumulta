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
