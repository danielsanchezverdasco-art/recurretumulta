// Registro de páginas Maextro V800 (plantilla obligatoria 11/10/2026).
//
// Cada ficha/blog nuevo se genera con scripts/scaffold-ficha.mjs o
// scripts/scaffold-blog.mjs, que escriben el fichero de datos en
// src/data/maextro/fichas/<slug>.ts (o blogs/<slug>.ts) y añaden aquí
// su entrada con import() dinámico: cada página viaja en su propio chunk
// (rendimiento: no se carga el resto de fichas).
//
// NO editar a mano: las entradas las mantiene scripts/maextro-registro.mjs
// (marcas de anclaje dentro de cada objeto).
//
// Cableado (ver docs/PLANTILLA-MAEXTRO.md, sección "Integración"): las páginas
// genéricas src/pages/MaextroFichaPage.tsx y src/pages/MaextroBlogPage.tsx
// resuelven el slug contra este registro; si el slug no está, delegan en la
// página existente (CochesFicha/MotosFicha/PatinetesFicha o blog/[slug]).

import type {
  MaextroBlogData,
  MaextroFichaData,
} from "@/components/maextro/tipos.ts";

/** slug → cargador perezoso de la ficha. */
export const FICHAS_MAEXTRO: Record<string, () => Promise<MaextroFichaData>> = {
// __SCAFFOLD_FICHAS__
};

/** slug → cargador perezoso del artículo. */
export const BLOGS_MAEXTRO: Record<string, () => Promise<MaextroBlogData>> = {
// __SCAFFOLD_BLOGS__
};
