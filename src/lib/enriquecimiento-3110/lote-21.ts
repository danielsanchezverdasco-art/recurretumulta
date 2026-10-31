// Lote 21 — Chery Tiggo 8 (Euro NCAP 2025, reevaluado en octubre).
import type { MapaEnriquecimiento } from "./tipos";

const T8 = "https://www.euroncap.com/assessments/chery/tiggo+8/1223ra/";
const T8_JULIO = "https://www.euroncap.com/assessments/1190/";

export const LOTE_21: MapaEnriquecimiento = {
  "chery-tiggo-8-csh-2025-precio-ficha-tecnica": {
    titulo: "Chery Tiggo 8: de cuatro a cinco estrellas en Euro NCAP en tres meses",
    parrafos: [
      "La seguridad del Tiggo 8 tiene dos fechas. El 9 de julio de 2025 Euro NCAP le dio cuatro estrellas (adultos 81 %, niños 77 %, vulnerables 80 %, asistencias 78 %), porque la cortina lateral se soltó del larguero del techo en el choque lateral y dejó sin protección la cabeza del maniquí de diez años. El 15 de octubre de 2025 el organismo repitió la valoración y subió a cinco estrellas, con un 82 %, un 85 %, un 80 % y un 78 % en las mismas áreas.",
      "El motivo del cambio, según el propio informe, es que Chery corrigió los problemas de fabricación que impedían el despliegue correcto de esa cortina. Esta valoración se apoya en el Tiggo 7 PHEV, tratado como modelo gemelo, con 1.790 kg en vacío; para el Tiggo 8 se hicieron pruebas adicionales en la tercera fila de asientos.",
      "La lista de variantes cubiertas incluye el 1.5 híbrido enchufable en acabados Comfort y Premium, de tracción delantera. Es la familia mecánica de esta ficha, aunque la lista no usa la sigla CSH ni da la potencia, de modo que los 315 CV de esta página no se pueden contrastar con ella. Quedan dos reservas fijadas por el organismo: la bolsa de rodilla no se desplegó del todo en el frontal, y el detector de niños olvidados no se puntuó.",
    ],
    filas: [
      { etiqueta: "Estrellas del Tiggo 8 tras la repetición", valor: "Cinco; reevaluado el 15 de octubre de 2025", fuente: "Euro NCAP, ficha del CHERY TIGGO 8 (reevaluación de octubre de 2025)", url: T8, anio: "2025" },
      { etiqueta: "Porcentajes de la repetición", valor: "82 % adultos; 85 % niños; 80 % vulnerables; 78 % asistencias", fuente: "Euro NCAP, desglose del Tiggo 8 reevaluado", url: T8, anio: "2025" },
      { etiqueta: "Primera nota del Tiggo 8", valor: "Cuatro estrellas el 9 de julio de 2025; 81, 77, 80 y 78 %", fuente: "Euro NCAP, primera ficha del Tiggo 8 (julio de 2025)", url: T8_JULIO, anio: "2025" },
      { etiqueta: "Base de la valoración del Tiggo 8", valor: "Tiggo 7 PHEV Premium, volante a la izquierda; 1.790 kg", fuente: "Euro NCAP, modelo probado en la ficha del Tiggo 8", url: T8, anio: "2025" },
      { etiqueta: "Variantes híbridas cubiertas del Tiggo 8", valor: "1.5 enchufable Comfort y Premium, ambas 4x2", fuente: "Euro NCAP, variantes enchufables del Tiggo 8", url: T8, anio: "2025" },
    ],
  },
};
