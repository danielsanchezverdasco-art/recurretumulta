// Lote 14 — Peugeot E-Rifter (nota de prensa de Stellantis Media Alemania, marzo de 2025).
import type { MapaEnriquecimiento } from "./tipos";

const PR = "https://www.media.stellantis.com/de-de/peugeot/press/der-peugeot-e-rifter-vielseitig-fuer-alltag-und-freizeit";
const F = "Stellantis Media (Alemania), nota de prensa del Peugeot E-Rifter, 6 de marzo de 2025";

const SRC1 = { fuente: F, url: PR, anio: "2025" };

export const LOTE_14: MapaEnriquecimiento = {
  "peugeot-e-rifter-2026-precio-ficha-tecnica": {
    titulo: "E-Rifter: lo que cuenta la nota de prensa oficial de Peugeot",
    parrafos: [
      "La nota de prensa que Stellantis publicó en Alemania el 6 de marzo de 2025 recoge para el E-Rifter una autonomía WLTP de hasta 339 km, un consumo de 18,3 a 19,1 kWh/100 km en el L1 y emisiones locales nulas. El motor entrega 100 kW (136 PS) y 270 Nm, y la ficha de arriba recoge ese mismo par. Mantiene 132 km/h de punta y 11,5 s de 0 a 100 km/h.",
      "La batería es de 50 kWh y se carga a hasta 100 kW en corriente continua, con una estimación de unos 30 minutos para pasar del 0 al 80 % en un cargador público de esa potencia. Con el cargador de 7,4 kW de serie, o el trifásico de 11 kW que en Alemania equipa de serie, la carga completa en un wallbox de 11 kW lleva unas 5 horas y 5 minutos, y conectado a un enchufe doméstico de 2,3 kW unas 23 horas y 25 minutos. Hay tres modos de conducción (Eco, Normal y Power), tres niveles de regeneración con levas tras el volante y bomba de calor.",
      "En cuanto a carrocería, Peugeot ofrece 5 y 7 plazas y dos longitudes, estándar de 4,40 m y larga de 4,70 m, con dos puertas laterales correderas y luneta practicable por separado. La nota cita 775 litros de maletero en el estándar de cinco plazas y hasta 4.000 litros con los asientos traseros abatidos y llenando hasta el techo en la larga, una definición de volumen distinta de los 597 L de la ficha. Entre las ayudas a la conducción, la nota cita la frenada de emergencia, el regulador adaptativo (ACC) con función Stop & Go y, en el aparcamiento, una cámara trasera con vista de 180 grados.",
    ],
    filas: [
      { etiqueta: "Motor eléctrico", valor: "100 kW (136 PS); par máximo de 270 Nm", ...SRC1 },
      { etiqueta: "Autonomía y consumo (L1)", valor: "Hasta 339 km WLTP; 18,3-19,1 kWh/100 km", ...SRC1 },
      { etiqueta: "Velocidad y aceleración", valor: "punta de 132 km/h; 0-100 km/h en 11,5 s", ...SRC1 },
      { etiqueta: "Carga rápida en CC", valor: "Hasta 100 kW; unos 30 min de 0 a 80 %", ...SRC1 },
      { etiqueta: "Carga en casa", valor: "Wallbox de 11 kW: 5 h 5 min; enchufe de 2,3 kW: 23 h 25 min", ...SRC1 },
      { etiqueta: "Carrocerías ofrecidas", valor: "5 o 7 plazas; largo estándar de 4,40 m o largo de 4,70 m", ...SRC1 },
      { etiqueta: "Volumen de maletero citado", valor: "775 l (estándar, 5 plazas); hasta 4.000 l con asientos abatidos (versión larga)", ...SRC1 },
    ],
  },
};
