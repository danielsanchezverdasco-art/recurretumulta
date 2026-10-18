// 18/10/2026 (rediseño fichas): datos extra por ficha generados en build
// (scripts/gen-ficha-extra.mjs): rivales y si existe el análisis del blog.
// Trozos pequeños por las 2 primeras letras del slug; la página los espera
// antes de marcar pageReady, así el prerender los incluye.
export type Rival = [id: string, nombre: string, precio: number | null, foto: string];
export type TipoFicha = "coches" | "motos" | "patinetes";
export interface FichaExtra { r?: Rival[]; b?: 1 }

const PREF: Record<TipoFicha, string> = { coches: "c", motos: "m", patinetes: "p" };
const TROZOS = import.meta.glob<{ default: Record<string, FichaExtra> }>("./ficha-extra-gen/*.json");

export async function cargarFichaExtra(tipo: TipoFicha, id: string): Promise<FichaExtra> {
  const ini = /^[a-z0-9]{2}/.test(id) ? id.slice(0, 2) : "__";
  const load = TROZOS[`./ficha-extra-gen/${PREF[tipo]}-${ini}.json`];
  if (!load) return {};
  try {
    return (await load()).default[id] ?? {};
  } catch {
    return {};
  }
}
