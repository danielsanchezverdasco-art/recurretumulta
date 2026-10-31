// 31/10/2026 (velocidad): el análisis editorial (5,4 MB de texto, 52 lotes) se importaba
// ESTÁTICO desde las fichas y acababa en un chunk único de 5,4 MB (1,6 MB comprimido) que
// bloqueaba el hilo principal (TBT ~450 ms) en cada ficha. Ahora el plugin de Vite
// (scripts/vite/analisis-shards.ts) reparte el mapa slug → análisis en N_SHARDS módulos
// virtuales por hash del slug; cada ficha descarga solo el suyo (~100 KB, ~25 KB gzip).
// El texto es EXACTAMENTE el mismo (sale de los mismos lotes vía ANALISIS_EDITORIAL).
export const N_SHARDS = 48;

/** Hash estable (FNV-1a 32 bit) del slug → nº de shard. Mismo código en el plugin y en el cliente. */
export function shardDe(slug: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < slug.length; i++) {
    h ^= slug.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h % N_SHARDS;
}
