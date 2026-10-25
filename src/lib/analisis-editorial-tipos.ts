// Análisis editorial único por ficha (estándar AdSense 2026-10-19).
// Cada ficha con <300 palabras únicas recibe 2-3 párrafos de análisis propio.
// Generado por workers de Merlín — NO EDITAR A MANO.
export interface AnalisisEditorial {
  /** 2-3 párrafos de análisis único (150-220 palabras en total) */
  parrafos: string[];
  /** Veredicto en una frase: para quién es / no es */
  veredicto: string;
}
export type MapaAnalisis = Record<string, AnalisisEditorial>;
