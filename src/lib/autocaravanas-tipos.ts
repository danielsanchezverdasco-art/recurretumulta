// Tipos para los datos del comparador de autocaravanas (lotes Merlín).
// Extiende CocheComparador con los campos específicos de autocaravanas
// (MMA, carné necesario y carga útil), que no existen en el tipo base.
import type { CocheComparador } from "./comparador-coches-data.ts";

export type Autocaravana = CocheComparador & {
  mmaKg: number | null;
  carnetNecesario: string | null;
  cargaUtilKg?: number | null;
};
