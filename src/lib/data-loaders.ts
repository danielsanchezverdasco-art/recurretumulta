// Dispatcher de loaders de datos por página (rendimiento 05/10/2026).
// Los mapas slug->import() están partidos por primera letra en
// src/lib/data-loaders/<letra>.ts (generados por scripts/gen-data-loaders.mjs).
// Cada página carga solo el chunk de su letra (~8KB gzip) en vez del mapa
// completo de 8.156 entradas.

export type DataDomain =
  | "blog"
  | "coche"
  | "moto"
  | "patinete"
  | "historia"
  | "euroncap"
  | "galeria"
  | "cat";

export type DataLoader = () => Promise<unknown>;

type LetterModule = {
  LOADERS: Record<string, Record<string, DataLoader>>;
};

const letterCache = new Map<string, Promise<LetterModule["LOADERS"]>>();

// Glob explícito: Vite genera un chunk por letra de forma fiable,
// también durante el prerender (el import con template literal no
// se resolvía bien en el contexto de vite preview).
const letterModules = import.meta.glob<LetterModule>("./data-loaders/*.ts");

function bucketOf(key: string): string {
  const c = (key[0] || "_").toLowerCase();
  return /[0-9a-z]/.test(c) ? c : "_";
}

/** Carga el módulo de la letra y devuelve su mapa de loaders (cacheado). */
function letterLoaders(key: string): Promise<LetterModule["LOADERS"]> {
  const b = bucketOf(key);
  let p = letterCache.get(b);
  if (!p) {
    const importer = letterModules[`./data-loaders/${b}.ts`];
    p = (importer
      ? importer().then((m) => m.LOADERS ?? {})
      : Promise.resolve({} as LetterModule["LOADERS"])
    ).catch(() => ({} as LetterModule["LOADERS"]));
    letterCache.set(b, p);
  }
  return p;
}

/** Devuelve el loader () => import() para (dominio, clave), o undefined. */
export async function getDataLoader(
  domain: DataDomain,
  key: string,
): Promise<DataLoader | undefined> {
  const loaders = await letterLoaders(key);
  return loaders[domain]?.[key];
}
