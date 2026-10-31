// Lote 18 — SEAT León, SEAT Ibiza, BYD Seal y BYD Dolphin (Euro NCAP).
import type { MapaEnriquecimiento } from "./tipos";

const LEON = "https://www.euroncap.com/assessments/seat/leon/1122pm/";
const IBIZA = "https://www.euroncap.com/assessments/seat/ibiza/0932/";
const SEAL = "https://www.euroncap.com/assessments/byd/seal/1044/";
const DOLPHIN = "https://www.euroncap.com/assessments/byd/dolphin/1040/";

export const LOTE_18: MapaEnriquecimiento = {
  "seat-leon-15-etsi-115-2026-precio-ficha-tecnica": {
    titulo: "SEAT León: la nota de Euro NCAP de noviembre de 2025 y qué motores recoge",
    parrafos: [
      "Euro NCAP publicó el 19 de noviembre de 2025 su valoración del SEAT León, que obtuvo cinco estrellas. Las puntuaciones fueron el 88 % en protección de adultos, el 86 % en niños, 81 puntos entre peatones y ciclistas y 77 en asistencias a la seguridad. La variante que se estrelló en el laboratorio fue el 2.0 TDI de 110 kW.",
      "Sobre la versión de esta página, conviene leer la tabla de variantes con cuidado. Euro NCAP incluye un 1.5 eTSI de 110 kW, es decir, unos 150 CV, mientras que la ficha de arriba habla de 115 CV, que equivalen a unos 85 kW. Esa potencia no aparece como fila propia en la lista del organismo, así que la nota se atribuye al León en general y no se puede afirmar que figure con esa motorización concreta.",
      "La lista cubre también el 1.5 TSI de 110 kW, el 2.0 TSI de 150 kW con tracción total, el VZ de 221 kW y el de 245 kW con 4Drive, y dos híbridos enchufables 1.5 TSI e-Hybrid de 150 y 200 kW. Todas son de tracción delantera salvo las marcadas con 4Drive.",
    ],
    filas: [
      { etiqueta: "Calificación Euro NCAP del León", valor: "Cinco estrellas; publicada el 19/11/2025", fuente: "Euro NCAP, ficha del SEAT León (noviembre de 2025)", url: LEON, anio: "2025" },
      { etiqueta: "Puntuación por apartados (León)", valor: "88 % adultos; 86 % niños; 81 % usuarios vulnerables; 77 % asistencias", fuente: "Euro NCAP, apartados de puntuación del SEAT León", url: LEON, anio: "2025" },
      { etiqueta: "Variante ensayada (León)", valor: "2.0 TDI de 110 kW, tracción delantera", fuente: "Euro NCAP, variantes del León: fila ensayada", url: LEON, anio: "2025" },
      { etiqueta: "Motor eTSI en la lista", valor: "1.5 eTSI de 110 kW (aprox. 150 CV); falta la fila de unos 85 kW", fuente: "Euro NCAP, variantes del León: filas eTSI", url: LEON, anio: "2025" },
      { etiqueta: "Híbridos enchufables cubiertos (León)", valor: "1.5 TSI e-Hybrid de 150 kW y de 200 kW", fuente: "Euro NCAP, variantes del León: filas e-Hybrid", url: LEON, anio: "2025" },
    ],
  },
  "seat-ibiza-15-tsi-2026-precio-ficha-tecnica": {
    titulo: "SEAT Ibiza: valoración de Euro NCAP de 2022 y qué dice de un 1.5 TSI",
    parrafos: [
      "La nota de seguridad del SEAT Ibiza la fijó Euro NCAP el 12 de octubre de 2022: cinco estrellas, con un 83 % en adultos, un 82 % en niños, un 66 % en usuarios vulnerables y un 70 % en asistencias. Se ensayó un 1.0 de gasolina de 70 kW (EcoTSI) de tracción delantera. La ficha recoge además tres revisiones anuales, el 7 de diciembre de 2022 y el 4 de octubre y el 6 de diciembre de 2023.",
      "Aquí hay un matiz importante: esta página se ocupa del restyling de 2026, que estrena un 1.5 TSI de 150 CV. La tabla de variantes de Euro NCAP no contiene ningún motor de 1,5 litros; sus filas son todas 1.0 (59, 66 en GNC, 81, 110 y 70 kW). La nota de 2022 es, por tanto, la del Ibiza de entonces, y la ficha del organismo no recoge expresamente esta versión ni el cambio de imagen de 2026.",
    ],
    filas: [
      { etiqueta: "Estrellas del Ibiza", valor: "Cinco; publicadas el 12/10/2022", fuente: "Euro NCAP, ficha del SEAT Ibiza (2022)", url: IBIZA, anio: "2022" },
      { etiqueta: "Resultado por área (Ibiza)", valor: "83 % adultos, 82 % niños, 66 % usuarios vulnerables y 70 % asistencias", fuente: "Euro NCAP, resultados por área del SEAT Ibiza", url: IBIZA, anio: "2022" },
      { etiqueta: "Ibiza ensayado", valor: "1.0 gasolina de 70 kW EcoTSI, 4x2", fuente: "Euro NCAP, variantes del Ibiza: fila ensayada", url: IBIZA, anio: "2022" },
      { etiqueta: "Motores de la lista del Ibiza", valor: "1.0 de 59 kW (MPI), 66 kW (GNC), 70 kW, 81 kW y 110 kW; ninguno de 1,5 l", fuente: "Euro NCAP, variantes del Ibiza: lista completa", url: IBIZA, anio: "2022" },
      { etiqueta: "Revisiones anuales del Ibiza", valor: "07/12/2022, 04/10/2023 y 06/12/2023", fuente: "Euro NCAP, historial de revisiones del Ibiza", url: IBIZA, anio: "2023" },
    ],
  },
  "seat-ibiza-10-tsi-2026-precio-ficha-tecnica": {
    titulo: "SEAT Ibiza 1.0 TSI de 116 CV frente a la lista de Euro NCAP",
    parrafos: [
      "Euro NCAP clasificó al SEAT Ibiza con cinco estrellas el 12 de octubre de 2022, con el reparto de 83, 82, 66 y 70 puntos porcentuales (adultos, niños, usuarios vulnerables y asistencias). El dato que más importa a quien mira el 1.0 TSI es cuál fue el motor probado: un 1.0 de 70 kW, unos 95 CV.",
      "La versión de esta página declara 116 CV, que equivalen a unos 85 kW. La lista de Euro NCAP tiene filas de 81 kW y de 110 kW, pero no una de 85 kW, de modo que no se puede decir que esa potencia concreta venga nombrada. Lo único comprobado es que el organismo agrupa varios 1.0 bajo la misma calificación y que ninguna de sus filas supera los 110 kW.",
    ],
    filas: [
      { etiqueta: "Calificación del Ibiza 1.0", valor: "5 estrellas (octubre de 2022)", fuente: "Euro NCAP, nota global del Ibiza para los 1.0", url: IBIZA, anio: "2022" },
      { etiqueta: "Motor probado en el Ibiza 1.0", valor: "70 kW, aproximadamente 95 CV", fuente: "Euro NCAP, fila asterisco de las variantes del Ibiza 1.0", url: IBIZA, anio: "2022" },
      { etiqueta: "Filas de 81 y 110 kW", valor: "Presentes en la lista; ninguna fila de unos 85 kW", fuente: "Euro NCAP, filas EcoTSI del Ibiza 1.0", url: IBIZA, anio: "2022" },
    ],
  },
  "byd-seal-2024-precio-ficha-tecnica": {
    titulo: "BYD Seal Design: la valoración de Euro NCAP de octubre de 2023",
    parrafos: [
      "La calificación de cinco estrellas del BYD Seal lleva fecha de 25-10-2023 en Euro NCAP. Cosechó 89 puntos sobre 100 en ocupantes adultos, 87 en niños, 82 en peatones y ciclistas y 76 en asistencias. La variante analizada es precisamente la Design de tracción trasera, la misma que describe esta página.",
      "La calificación se publicó en el mismo acto que la del Dolphin, y en la ficha del organismo el Seal figura como berlina de cuatro puertas con dos entradas: la Design y la Excellence de tracción total.",
    ],
    filas: [
      { etiqueta: "Valoración del Seal", valor: "Cinco estrellas; 25/10/2023", fuente: "Euro NCAP, ficha del BYD Seal Design", url: SEAL, anio: "2023" },
      { etiqueta: "Porcentajes del Seal", valor: "89 % adultos; 87 % niños; 82 % usuarios vulnerables; 76 % asistencias", fuente: "Euro NCAP, puntuaciones del BYD Seal Design", url: SEAL, anio: "2023" },
      { etiqueta: "Seal ensayado", valor: "Eléctrico Design, 4x2, berlina de cuatro puertas", fuente: "Euro NCAP, fila ensayada del Seal Design", url: SEAL, anio: "2023" },
    ],
  },
  "byd-seal-excellence-2024-precio-ficha-tecnica": {
    titulo: "BYD Seal Excellence AWD: qué parte de la nota de Euro NCAP le corresponde",
    parrafos: [
      "Euro NCAP no ensayó el Seal Excellence de 530 CV: la calificación de cinco estrellas de octubre de 2023 se obtuvo con la versión Design de tracción trasera, y la ficha del organismo incluye la Excellence AWD, de tracción total, entre las variantes a las que se extiende. Es decir, la nota aplica a esta versión por cobertura de la lista, no porque se probara esta.",
      "Los resultados de la familia fueron del 89 % en protección de adultos, 87 % en niños, 82 % en usuarios vulnerables y 76 % en asistencias. La carga de datos de la ficha de arriba (potencia, 0 a 100 y peso) no procede de Euro NCAP y no se ha comprobado aquí contra otra fuente.",
    ],
    filas: [
      { etiqueta: "Excellence AWD en la lista", valor: "Incluido como variante cubierta, 4x4 (no es la ensayada)", fuente: "Euro NCAP, tabla de cobertura del Seal Excellence AWD", url: SEAL, anio: "2023" },
      { etiqueta: "Nota que se le aplica", valor: "Cinco estrellas (25/10/2023)", fuente: "Euro NCAP, calificación global aplicable al Excellence", url: SEAL, anio: "2023" },
      { etiqueta: "Notas por apartado (Excellence)", valor: "Adultos 89 %, niños 87 %, usuarios vulnerables 82 % y asistencias 76 %", fuente: "Euro NCAP, cuadro de porcentajes del Seal Excellence", url: SEAL, anio: "2023" },
    ],
  },
  "byd-dolphin-2025-precio-ficha-tecnica": {
    titulo: "BYD Dolphin: cinco estrellas de Euro NCAP en 2023 y qué acabados incluye",
    parrafos: [
      "El BYD Dolphin fue valorado por Euro NCAP el 25 de octubre de 2023 con cinco estrellas. Obtuvo un 89 % en adultos, un 87 % en niños, un 85 % en usuarios vulnerables y un 79 % en asistencias a la seguridad. Es un hatchback de cinco puertas y tracción delantera, y el modelo probado fue el acabado Design.",
      "La lista del organismo recoge cuatro acabados eléctricos: Active, Boost, Comfort y Design. La tabla no indica potencia ni batería de cada uno, por lo que ninguno de los datos de motor de la ficha de arriba (204 CV, 60,4 kWh) se puede contrastar con Euro NCAP.",
    ],
    filas: [
      { etiqueta: "Nota del Dolphin", valor: "Cinco estrellas; publicada el 25/10/2023", fuente: "Euro NCAP, ficha del BYD Dolphin (2023)", url: DOLPHIN, anio: "2023" },
      { etiqueta: "Puntos por área del Dolphin", valor: "89 % adultos; 87 % niños; 85 % usuarios vulnerables; 79 % asistencias", fuente: "Euro NCAP, resultados del BYD Dolphin por área", url: DOLPHIN, anio: "2023" },
      { etiqueta: "Acabados cubiertos del Dolphin", valor: "Active, Boost, Comfort y Design (este último, el ensayado)", fuente: "Euro NCAP, variantes del BYD Dolphin", url: DOLPHIN, anio: "2023" },
    ],
  },
};
