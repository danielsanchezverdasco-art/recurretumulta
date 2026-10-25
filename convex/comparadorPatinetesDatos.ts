// ── comparadorPatinetesDatos: datos y tipos puros compartidos ────────────────
// Módulo sin directiva "use node": lo importan tanto la action (Node) como
// las funciones internas (isolate). No definir aquí funciones de Convex.
// Réplica del patrón de comparadorDatos.ts para el vertical de patinetes.

/** Normaliza para comparar y para la clave de caché: minúsculas, sin tildes. */
export function normalizar(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

// ── Índice mínimo de la base local para detectar matches ────────────────────
// TODO: rellenar con los slugs reales de src/lib/comparador-patinetes-data.ts
// cuando el worker del comparador entregue el fichero. Formato:
// { id: "<slug>", marca: "<Marca>", modelo: "<Modelo>" }
export const BASE_INDEX_PATINETES: Array<{ id: string; marca: string; modelo: string }> = [
  { id: "xiaomi-electric-scooter-5", marca: "Xiaomi", modelo: "Electric Scooter 5" },
  { id: "xiaomi-electric-scooter-4", marca: "Xiaomi", modelo: "Electric Scooter 4" },
  { id: "xiaomi-electric-scooter-4-pro", marca: "Xiaomi", modelo: "Electric Scooter 4 Pro" },
  { id: "segway-ninebot-max-g2", marca: "Segway-Ninebot", modelo: "Max G2 E" },
  { id: "segway-ninebot-f2-plus", marca: "Segway-Ninebot", modelo: "F2 Plus E" },
  { id: "segway-ninebot-f2", marca: "Segway-Ninebot", modelo: "F2 E" },
  { id: "cecotec-bongo-serie-a", marca: "Cecotec", modelo: "Bongo Serie A" },
  { id: "cecotec-bongo-serie-z-power-mountain", marca: "Cecotec", modelo: "Bongo Serie Z Power Mountain" },
  { id: "niu-kqi3-pro", marca: "NIU", modelo: "KQi3 Pro" },
  { id: "navee-s65", marca: "Navee", modelo: "S65" },
];

export function buscarEnBasePatinetes(marca: string, modelo: string): string | null {
  const m = normalizar(marca);
  const mo = normalizar(modelo);
  const combo = `${m} ${mo}`;
  for (const b of BASE_INDEX_PATINETES) {
    if (normalizar(b.marca) === m && normalizar(b.modelo) === mo) return b.id;
  }
  for (const b of BASE_INDEX_PATINETES) {
    const base = `${normalizar(b.marca)} ${normalizar(b.modelo)}`;
    if (combo === base || combo.includes(base) || base.includes(combo)) return b.id;
  }
  return null;
}

// ── Tipos ───────────────────────────────────────────────────────────────────
export type Confianza = "alta" | "media" | "baja";

export type FichaPatineteIA = {
  marca: string;
  modelo: string;
  version: string | null;
  precioEur: number | null;
  potenciaNominalW: number | null;
  potenciaPicoW: number | null;
  autonomiaKm: number | null;
  autonomiaRealKm: number | null;
  velocidadMaxKmh: number | null;
  pesoKg: number | null;
  cargaMaxKg: number | null;
  tiempoCargaH: number | null;
  bateriaWh: number | null;
  frenos: string | null;
  neumaticos: string | null;
  certificadoDgt: boolean | null;
  videoYtId: string | null;
  videoYtCanal: string | null;
  fuenteNombre: string | null;
  fuenteUrl: string | null;
  pros: string[];
  contras: string[];
  confianza: Confianza;
  camposEstimados: string[];
};
