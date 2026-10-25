// ── comparadorDatos: datos y tipos puros compartidos ─────────────────────────
// Módulo sin directiva "use node": lo importan tanto la action (Node) como
// las funciones internas (isolate). No definir aquí funciones de Convex.

/** Normaliza para comparar y para la clave de caché: minúsculas, sin tildes. */
export function normalizar(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

// ── Índice mínimo de la base local (26 modelos) para detectar matches ────────
export const BASE_INDEX: Array<{ id: string; marca: string; modelo: string; tipo: string; categoria: string }> = [
  { id: "lepas-l8-chery-hibrido-enchufable-precio-espana", marca: "Lepas", modelo: "L8", tipo: "Híbrido enchufable", categoria: "SUV" },
  { id: "skoda-peaq-suv-electrico-7-plazas-precio", marca: "Skoda", modelo: "Peaq", tipo: "Eléctrico", categoria: "SUV" },
  { id: "renault-5-e-tech-2026-precio-autonomia", marca: "Renault", modelo: "5 E-Tech", tipo: "Eléctrico", categoria: "Urbano" },
  { id: "tesla-roadster-2026-retraso-precio-ficha-tecnica", marca: "Tesla", modelo: "Roadster", tipo: "Eléctrico", categoria: "Deportivo" },
  { id: "zeekr-9x-2026-precio-ficha-tecnica", marca: "Zeekr", modelo: "9X", tipo: "Híbrido enchufable", categoria: "SUV" },
  { id: "renault-twingo-e-tech-2026-precio-ficha-tecnica", marca: "Renault", modelo: "Twingo E-Tech", tipo: "Eléctrico", categoria: "Urbano" },
  { id: "omoda-9-shs-precio-ficha-tecnica", marca: "Omoda", modelo: "9 SHS", tipo: "Híbrido enchufable", categoria: "SUV" },
  { id: "jaecoo-5-precio-ficha-tecnica", marca: "Jaecoo", modelo: "5", tipo: "Gasolina", categoria: "SUV" },
  { id: "leapmotor-b10-electrico-precio-espana", marca: "Leapmotor", modelo: "B10", tipo: "Eléctrico", categoria: "SUV" },
  { id: "byd-atto-2-precio-ficha-tecnica", marca: "BYD", modelo: "Atto 2", tipo: "Eléctrico", categoria: "SUV" },
  { id: "ebro-s700-precio-ficha-tecnica", marca: "Ebro", modelo: "S700", tipo: "Gasolina", categoria: "SUV" },
  { id: "xpeng-g6-2026-restyling-precio-espana", marca: "XPeng", modelo: "G6 2026", tipo: "Eléctrico", categoria: "SUV" },
  { id: "xiaomi-yu7-suv-electrico-llegada-europa", marca: "Xiaomi", modelo: "YU7", tipo: "Eléctrico", categoria: "SUV" },
  { id: "deepal-s07-precio-espana-ficha-tecnica", marca: "Deepal", modelo: "S07", tipo: "Eléctrico", categoria: "SUV" },
  { id: "nio-firefly-precio-espana-ficha-tecnica", marca: "NIO", modelo: "Firefly", tipo: "Eléctrico", categoria: "Urbano" },
  { id: "dacia-bigster-hybrid-precio-espana", marca: "Dacia", modelo: "Bigster Hybrid 155", tipo: "Híbrido", categoria: "SUV" },
  { id: "li-auto-l6-ficha-tecnica-precio", marca: "Li Auto", modelo: "L6", tipo: "Autonomía extendida (EREV)", categoria: "SUV" },
  { id: "aito-m9-huawei-ficha-tecnica-precio", marca: "Aito", modelo: "M9", tipo: "Autonomía extendida (EREV)", categoria: "SUV" },
  { id: "hongqi-e-hs9-ficha-tecnica-precio", marca: "Hongqi", modelo: "E-HS9", tipo: "Eléctrico", categoria: "SUV" },
  { id: "voyah-dream-ficha-tecnica-precio", marca: "Voyah", modelo: "Dream", tipo: "Eléctrico", categoria: "Monovolumen" },
  { id: "smart-5-electrico-ficha-tecnica-precio", marca: "Smart", modelo: "#5", tipo: "Eléctrico", categoria: "SUV" },
  { id: "alpine-a390-precio-ficha-tecnica", marca: "Alpine", modelo: "A390", tipo: "Eléctrico", categoria: "Fastback" },
  { id: "renault-4-e-tech-precio-autonomia", marca: "Renault", modelo: "4 E-Tech", tipo: "Eléctrico", categoria: "SUV" },
  { id: "peugeot-e-5008-electrico-7-plazas-precio", marca: "Peugeot", modelo: "E-5008", tipo: "Eléctrico", categoria: "SUV" },
  { id: "dacia-spring-2026-nueva-generacion-precio", marca: "Dacia", modelo: "Spring 2026", tipo: "Eléctrico", categoria: "Urbano" },
  { id: "seres-5-electrico-precio-ficha-tecnica", marca: "Seres", modelo: "5", tipo: "Eléctrico", categoria: "SUV" },
];

// ── Tipos ───────────────────────────────────────────────────────────────────
export type Confianza = "alta" | "media" | "baja";

export type FichaIA = {
  marca: string;
  modelo: string;
  version: string | null;
  tipo: string | null;
  categoria: string | null;
  precioDesde: number | null;
  potenciaCv: number | null;
  autonomiaKm: number | null;
  bateriaKwh: number | null;
  cargaRapidaKw: number | null;
  ceroCien: number | null;
  velocidadMax: number | null;
  maleteroL: number | null;
  largoMm: number | null;
  anchoMm: number | null;
  altoMm: number | null;
  pesoKg: number | null;
  consumo: number | null;
  consumoUnidad: string | null;
  plazas: number | null;
  parNm: number | null;
  traccion: string | null;
  emisionesCo2: number | null;
  etiquetaDgt: string | null;
  videoYtId: string | null;
  videoYtCanal: string | null;
  fuenteNombre: string | null;
  fuenteUrl: string | null;
  pros: string[];
  contras: string[];
  curiosidades: string[];
  confianza: Confianza;
  camposEstimados: string[];
};
