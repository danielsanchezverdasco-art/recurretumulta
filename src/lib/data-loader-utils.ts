// Utilidades para la carga perezosa de datos por página (rendimiento 05/10/2026).
// Cada página carga SOLO su módulo de datos vía import() dinámico, en vez de
// los agregados completos (blog-data 11.8MB, comparador-coches 3.7MB...).
// Los loaders viven partidos por letra en src/lib/data-loaders/<letra>.ts
// (generados por scripts/gen-data-loaders.mjs); este fichero los resuelve.

import { getDataLoader, type DataDomain } from "./data-loaders.ts";
import { sanearCoche, sanearMoto, sanearPatinete } from "./fotos-saneadas.ts";

/** 31/10/2026: las fichas leen sus módulos por marca (no los agregados): se sanean las fotos aquí también. */
function sanear<T>(domain: DataDomain, x: T): T {
  if (!x || typeof x !== "object") return x;
  if (domain === "coche") return sanearCoche(x as any);
  if (domain === "moto") return sanearMoto(x as any);
  if (domain === "patinete") return sanearPatinete(x as any);
  return x;
}

/** Busca una entrada dentro de un módulo que exporta Records (historia, euroncap, galerías). */
export async function loadRecordEntry<T>(
  domain: DataDomain,
  key: string,
): Promise<T | undefined> {
  const load = await getDataLoader(domain, key);
  if (!load) return undefined;
  const mod = (await load()) as Record<string, unknown>;
  for (const v of Object.values(mod)) {
    if (v && typeof v === "object" && !Array.isArray(v) && key in (v as Record<string, unknown>)) {
      return (v as Record<string, unknown>)[key] as T;
    }
  }
  return undefined;
}

/** Busca un item dentro de un módulo que exporta arrays (posts, fichas por marca). */
export async function loadArrayItem<T>(
  domain: DataDomain,
  key: string,
  pred: (item: any) => boolean,
): Promise<T | undefined> {
  const load = await getDataLoader(domain, key);
  if (!load) return undefined;
  const mod = (await load()) as Record<string, unknown>;
  for (const v of Object.values(mod)) {
    if (Array.isArray(v)) {
      const found = (v as any[]).find(pred);
      if (found) return sanear(domain, found) as T;
    }
  }
  return undefined;
}

/** Devuelve TODOS los items de los arrays exportados por el módulo (para relacionados del mismo fichero, sin coste extra). */
export async function loadModuleArray<T>(domain: DataDomain, key: string): Promise<T[]> {
  const load = await getDataLoader(domain, key);
  if (!load) return [];
  const mod = (await load()) as Record<string, unknown>;
  const out: T[] = [];
  for (const v of Object.values(mod)) {
    if (Array.isArray(v)) out.push(...(v as T[]).map((x) => sanear(domain, x)));
  }
  return out;
}

/** Extrae el primer array de posts lite de un módulo de categoría ya cargado. */
export function firstArrayOf<T>(mod: unknown): T[] {
  for (const v of Object.values(mod as Record<string, unknown>)) {
    if (Array.isArray(v)) return v as T[];
  }
  return [];
}
