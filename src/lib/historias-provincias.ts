// Historias reales con fuente por provincia (fusión radares↔provincias, 24/10/2026).
// Curaduría de Merlín: noticias reales verificadas 1x1 (URL abierta y titular
// comprobado el 24/10/2026). Si una provincia queda sin historias verificables,
// queda con lista vacía (no se inventa ninguna).
export type HistoriaProvincia = {
  titulo: string;
  resumen: string;
  fuente: string; // nombre del medio
  url: string; // URL exacta verificada
  fecha: string; // AAAA-MM-DD o "" si no visible
};

export const HISTORIAS_PROVINCIA: Record<string, HistoriaProvincia[]> = {
  // (rellenado por tandas; ver commits de la rama merlin-fusion-provincias-20261024)
};

export const FECHA_VERIFICACION_HISTORIAS = "2026-10-24";
