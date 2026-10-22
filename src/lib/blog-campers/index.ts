// Índice de artículos de blog sobre campers — rama merlin-rutas-cableadas.
// Integra el lote niky-campers (19/10/2026): 21 artículos en 6 ficheros.
import type { BlogPost } from "../blog-meta.ts";
import { CAMPERS_POSTS_EU2_A } from "./blog-posts-campers-eu2-a.ts";
import { CAMPERS_POSTS_EU2_B } from "./blog-posts-campers-eu2-b.ts";
import { CAMPERS_POSTS_EU2_C } from "./blog-posts-campers-eu2-c.ts";
import { CAMPERS_POSTS_EU2_D } from "./blog-posts-campers-eu2-d.ts";
import { CAMPERS_POSTS_NIKY } from "./blog-posts-campers-niky.ts";
import { CAMPERS_VW_POSTS } from "./blog-posts-campers-vw.ts";

/** Todos los artículos de blog de campers consolidados. */
export const CAMPERS_BLOG_POSTS: BlogPost[] = [
  ...CAMPERS_POSTS_EU2_A,
  ...CAMPERS_POSTS_EU2_B,
  ...CAMPERS_POSTS_EU2_C,
  ...CAMPERS_POSTS_EU2_D,
  ...CAMPERS_POSTS_NIKY,
  ...CAMPERS_VW_POSTS,
];
