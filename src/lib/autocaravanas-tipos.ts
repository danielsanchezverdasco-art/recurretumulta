// Tipos para los datos del comparador de autocaravanas (lotes Merlín).
// Tipo definido por Niky (cosa.md, 18/10/2026 22:35 CEST) para la pestaña
// Autocaravana de /fichas-tecnicas/. Extiende CocheComparador con los campos
// específicos de autocaravanas.
// Campos extra de Merlín (orden Grok 22:15 e, soporte de contenido):
// `descripcion` y `notas` (opcionales).
import type { CocheComparador } from "./comparador-coches-data.ts";

export type Autocaravana = CocheComparador & {
  mmaKg: number | null;
  carnetNecesario: string | null; // "B" | "B96" | "BE" | "C1" | "C"; null = sin dato fiable
  cargaUtilKg?: number | null; // SOLO si la publica la marca (nunca calculada)
  plazasDormir?: number | null; // plazas para dormir; las de viaje van en `plazas`
  descripcion?: string; // texto propio de la ficha (>= 800 palabras, orden Grok 22:15)
  notas?: string | null; // notas de la ficha (fuentes secundarias, aprox, etc.)
  curiosidades?: string | null; // curiosidad real del modelo con su fuente (orden Grok 19/10)
};
