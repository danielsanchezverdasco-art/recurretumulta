// Punto de integración para la pestaña Caravanas de /fichas-tecnicas/.
// Los datos de caravanas los trabaja Niky en su rama `caravanas-final`
// (módulos comparador-caravanas-*.ts); la integración la hace Grok.
// Mientras este array esté vacío, la pestaña Caravanas se oculta sola
// (regla: nunca una página vacía) y el contador es 0 real, no un literal.
import type { CocheComparador } from "./comparador-coches-data.ts";

export type Caravana = CocheComparador;

export const CARAVANAS_COMPARADOR: Caravana[] = [];
