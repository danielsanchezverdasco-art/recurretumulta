// Tipos para los datos de caravanas (remolques vivienda).
// Los 15 módulos src/lib/comparador-caravanas-*.ts tipan sus fichas como
// CocheComparador, pero TODAS (72/72, verificado 20/10/2026) traen además
// los campos de remolque mmaKg, carnetNecesario y —cuando la marca lo
// publica— cargaUtilKg. Este tipo los hace obligatorios para que la ficha
// /caravanas/<slug> los pinte sin campos inventados:
//   - plazas en una caravana = plazas para DORMIR (no hay plazas de viaje:
//     durante la marcha todos viajan en el vehículo tractor).
//   - Sin motor: potenciaCv, consumo, autonomiaKm, bateriaKwh, traccion,
//     emisionesCo2, etiquetaDgt… son null en las 72 fichas y la ficha NO
//     los muestra.
import type { CocheComparador } from "../comparador-coches-data.ts";

export type Caravana = CocheComparador & {
  mmaKg: number | null;
  carnetNecesario: string | null; // "B" | "B96" | "BE" | "C1" | "C"; null = sin dato fiable
  cargaUtilKg?: number | null; // SOLO si la publica la marca (nunca calculada)
};
