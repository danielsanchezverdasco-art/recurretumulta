// Lote 06 — Škoda Kodiaq RS (31/10/2026). Ficha técnica oficial de Škoda Auto Deutschland (2025).
import type { MapaEnriquecimiento } from "./tipos";

const KRS = "https://www.skoda-media.de/model_motor/genpdf/27121/full";
const F = "Škoda Auto Deutschland, datos técnicos del Kodiaq RS 2025";

const SRC1 = { fuente: F, url: KRS, anio: "2025" };

export const LOTE_06: MapaEnriquecimiento = {
  "skoda-kodiaq-rs-2026-precio-ficha-tecnica": {
    titulo: "Kodiaq RS: datos técnicos de la ficha oficial de Škoda Alemania",
    parrafos: [
      "El departamento de prensa de Škoda Auto Deutschland publica los datos técnicos del Kodiaq RS 2025 en dos columnas: cinco plazas y, entre llaves, siete. El motor es un gasolina 2.0 TSI de 1.984 cm³ (82,5 × 92,8 mm), turboalimentado y con relación de compresión de 9,6:1. Rinde 195 kW (265 PS) entre 5.000 y 6.500 rpm y 400 Nm de 1.650 a 4.350 rpm. Exige gasolina sin plomo de 95 octanos o más y cumple Euro 6 EB.",
      "La tracción es integral, con reparto electrónico del par mediante un embrague multidisco viscoso, y el cambio es un DSG automático de siete marchas con función Tiptronic. Delante monta columnas MacPherson con triángulos inferiores y estabilizadora; detrás, un eje multibrazo con un brazo longitudinal y tres transversales. Los frenos son discos ventilados en ambos ejes, con pinza flotante de un pistón delante, y la dirección es eléctrica con desmultiplicación variable.",
      "La homologación de Škoda marca entre 8,2 y 8,5 l/100 km y entre 186 y 192 g/km de CO₂, con clase G. La ficha da 6,3 s de 0 a 100 km/h, o 6,4 s en la versión de siete plazas, y 231 km/h de punta. El depósito es de 58 litros y el diámetro de giro de 11,2 m. El coeficiente aerodinámico va de 0,295 a 0,323, o de 0,305 a 0,313 con siete plazas.",
      "Respecto a pesos y cargas, en orden de marcha con conductor el coche pesa de 1.859 a 1.966 kg con cinco plazas y de 1.903 a 2.010 kg con siete; la carga útil es de 529 a 614 kg o de 565 a 672 kg. El peso máximo autorizado es de 2.390 a 2.420 kg, o de 2.500 kg con siete. El remolque frenado puede llegar a 2.300 kg, o a 2.500 kg con siete plazas, el no frenado a 750 kg y el techo admite 75 kg.",
      "Sobre el espacio, Škoda da 1.503 mm de ancho de codos delante y 1.492 mm detrás con cinco plazas, y 1.497 mm con 1.272 mm en la tercera fila de la versión de siete. La altura interior es de 1.063 mm delante y de 1.015 mm en la segunda fila. El maletero con asientos traseros abatidos es de 910 a 2.105 l en cinco plazas y de 340 a 845 l en siete, y para la versión de siete plazas la ficha cita 340 l. El umbral de carga está a 763 mm. Todo esto es de Alemania y puede variar en España.",
    ],
    filas: [
      { etiqueta: "Motor", valor: "2.0 TSI de 1.984 cm³, 82,5 × 92,8 mm, compresión 9,6:1; 195 kW (265 PS) y 400 Nm", ...SRC1 },
      { etiqueta: "Combustible", valor: "Gasolina sin plomo de 95 octanos o más; Euro 6 EB", ...SRC1 },
      { etiqueta: "Transmisión", valor: "DSG de 7 marchas; tracción integral con embrague multidisco viscoso", ...SRC1 },
      { etiqueta: "Aceleración y velocidad", valor: "6,3 s hasta 100 km/h (6,4 s con 7 plazas); máxima de 231 km/h", ...SRC1 },
      { etiqueta: "Consumo y CO₂ (Alemania)", valor: "8,2–8,5 l/100 km; 186–192 g/km; clase G; depósito de 58 l", ...SRC1 },
      { etiqueta: "Dimensiones", valor: "4.761 × 1.864 × 1.663 mm; batalla 2.791 mm; altura libre 194 mm; vías 1.580/1.570 mm", ...SRC1 },
      { etiqueta: "Pesos", valor: "En vacío con conductor 1.859–1.966 kg (1.903–2.010 con 7 plazas); autorizado 2.390–2.420 kg", ...SRC1 },
      { etiqueta: "Remolque", valor: "Frenado 2.300 kg (2.500 con 7 plazas); sin frenos 750 kg; apoyo 100 kg", ...SRC1 },
      { etiqueta: "Maletero (asientos abatidos)", valor: "910–2.105 l con 5 plazas; 340–845 l con 7 plazas", ...SRC1 },
      { etiqueta: "Revisiones y garantía (Alemania)", valor: "Primera revisión a los 2 años o 30.000 km; garantía de 2 años sin límite de km, 3 en pintura y 12 contra la perforación por óxido", ...SRC1 },
    ],
  },
};
