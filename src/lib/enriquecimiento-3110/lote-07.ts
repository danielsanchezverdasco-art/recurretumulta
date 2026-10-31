// Lote 07 — Porsche Panamera (3 fichas) y Toyota Corolla 140H (31/10/2026). Datos técnicos oficiales de Porsche (EE. UU., año modelo 2025) y de Toyota Finlandia (2025).
import type { MapaEnriquecimiento } from "./tipos";

const PO = "https://newsroom.porsche.com/dam/jcr:6e513c19-3b43-4ef5-baa4-71add9ba1d27/2024_Panamera_TechSpecs.pdf";
const TO = "https://scene7.toyota.eu/is/content/toyotaeurope/toyota/nmsc/finland/pdf-files/tekniset-tiedot/Corolla_HB_TS_tekniset_tiedot_MV25_02012025.pdf";

const SRC1 = { fuente: "Porsche Newsroom, hoja técnica MY25, columna Panamera", url: PO, anio: "2025" };
const SRC2 = { fuente: "Porsche Newsroom, tabla MY25 del Panamera 4 E-Hybrid", url: PO, anio: "2025" };
const SRC3 = { fuente: "Porsche Newsroom, datos MY25 del Turbo E-Hybrid", url: PO, anio: "2025" };
const SRC4 = { fuente: "Toyota Auto Finland, Corolla Hatchback y Touring Sports MV25", url: TO, anio: "2025" };

export const LOTE_07: MapaEnriquecimiento = {
  "porsche-panamera-2026-precio-ficha-tecnica": {
    titulo: "Panamera de acceso: datos técnicos oficiales de Porsche (hoja del año modelo 2025)",
    parrafos: [
      "La hoja de datos técnicos del año modelo 2025 que Porsche aloja en su sala de prensa describe el Panamera de acceso con un V6 biturbo de 2.894 cc, 348 hp (353 PS) a 5.400 rpm y 368 lb-ft (unos 499 Nm) a 1.900 rpm. La relación de compresión es de 10,5:1 y el régimen máximo de 6.800 rpm. Esa potencia equivale a los 354 CV de la ficha de arriba. Es el único de los seis Panamera de la hoja con tracción trasera, y el cambio es un PDK de ocho marchas.",
      "Para frenar, Porsche monta pinzas monobloc fijas de seis pistones delante y cuatro detrás, con discos ventilados y ranurados de 360 × 36 mm y de 330 × 28 mm. Las llantas son de 19 pulgadas, de 9,0J delante y 10,5J detrás, con neumáticos 265/45 ZR19 y 295/40 ZR19. La suspensión es neumática adaptativa de dos válvulas y dos cámaras con PASM, sobre un eje delantero de doble triángulo de aluminio y un trasero multibrazo.",
      "La documentación indica 4.295 lb en vacío (unos 1.948 kg), con una carga útil de 1.228 lb (unos 557 kg), y un depósito de 23,7 galones (unos 90 litros). El maletero mide 17,6 pies cúbicos con los asientos en uso y 46,8 con ellos abatidos, unos 498 y 1.325 litros. Con neumáticos de verano opcionales llega a 169 mph (272 km/h) y acelera de 0 a 60 mph en 4,8 s (fila «con Sport Plus»), y el cuarto de milla lo hace en 13,5 s.",
      "Con la suspensión neumática en altura normal, la hoja anota una entrada de 12,6°, una rampa de 10,9° y una salida de 16,4°. Al ser una hoja estadounidense, los 5,3 s hasta 100 km/h de la ficha de arriba corresponden a otra medición.",
    ],
    filas: [
      { etiqueta: "Motor", valor: "V6 biturbo de 2.894 cc; 348 hp (353 PS) a 5.400 rpm; compresión 10,5:1", ...SRC1 },
      { etiqueta: "Par máximo", valor: "368 lb-ft (≈499 Nm) a 1.900 rpm", ...SRC1 },
      { etiqueta: "Transmisión", valor: "PDK de 8 marchas; tracción trasera", ...SRC1 },
      { etiqueta: "Frenos", valor: "Pinzas monobloc fijas 6/4 pistones; discos 360 × 36 mm delante y 330 × 28 mm detrás", ...SRC1 },
      { etiqueta: "Llantas y neumáticos", valor: "19 pulgadas; delante 265/45 ZR19 y detrás 295/40 ZR19", ...SRC1 },
      { etiqueta: "Peso y carga útil", valor: "4.295 lb (≈1.948 kg) en vacío; 1.228 lb (≈557 kg) de carga útil. " + "Medidas de EE. UU., pasadas aquí al sistema métrico.", ...SRC1 },
      { etiqueta: "Maletero", valor: "17,6 ft³ (≈498 l); 46,8 ft³ (≈1.325 l) con asientos abatidos", ...SRC1 },
      { etiqueta: "Prestaciones (EE. UU.)", valor: "0–60 mph en 4,8 s; ¼ de milla en 13,5 s; 169 mph (≈272 km/h)", ...SRC1 },
    ],
  },
  "porsche-panamera-4-e-hybrid-2026-precio-ficha-tecnica": {
    titulo: "Panamera 4 E-Hybrid: sistema híbrido, batería y pesos según Porsche (año modelo 2025)",
    parrafos: [
      "En el Panamera 4 E-Hybrid, la hoja técnica de Porsche suma al V6 biturbo de 2.894 cc, con 300 hp a 5.400 rpm, un motor eléctrico de 187 hp (140 kW) y 331 lb-ft (unos 449 Nm). La potencia conjunta es de 463 hp (469 PS) entre 5.350 y 6.800 rpm, y el par conjunto de 479 lb-ft (unos 649 Nm) entre 1.000 y 5.000 rpm. Cuadra con los 470 CV y 650 Nm de la ficha de arriba.",
      "La batería se anota como 25,9 kWh en la tabla. La hoja no separa la capacidad bruta de la neta, y por eso no se debe leer como cifra utilizable. Con ella, el coche pesa 5.016 lb en vacío (unos 2.275 kg), unos 327 kg más que el Panamera de acceso, y la carga útil baja a 937 lb (unos 425 kg). El depósito es de 21,1 galones (unos 80 litros).",
      "Respecto al modelo de acceso, crecen los discos: 390 × 38 mm en el eje delantero y 365 × 28 mm en el trasero. El maletero es de 15,1 pies cúbicos (unos 428 litros) y de 44,6 con los asientos abatidos (unos 1.263 litros); en la ficha de arriba figuran 430 l, una diferencia mínima de método.",
      "Las cifras de rendimiento que da Porsche son 174 mph de punta (unos 280 km/h), 3,9 s de 0 a 60 mph y 12,6 s en el cuarto de milla. El ángulo ventral es de 10,8°.",
    ],
    filas: [
      { etiqueta: "Motor térmico", valor: "V6 biturbo de 2.894 cc, 300 hp a 5.400 rpm; compresión 10,5:1", ...SRC2 },
      { etiqueta: "Motor eléctrico", valor: "187 hp (140 kW) y 331 lb-ft (≈449 Nm)", ...SRC2 },
      { etiqueta: "Sistema combinado", valor: "463 hp (≈469 PS) y 479 lb-ft (≈649 Nm)", ...SRC2 },
      { etiqueta: "Batería", valor: "25,9 kWh (la hoja no distingue bruta de neta)", ...SRC2 },
      { etiqueta: "Frenos", valor: "Discos de 390 × 38 mm delante y 365 × 28 mm detrás", ...SRC2 },
      { etiqueta: "Peso y carga útil", valor: "5.016 lb (≈2.275 kg); carga útil 937 lb (≈425 kg). " + "Libras convertidas aquí a kilogramos; la hoja es estadounidense.", ...SRC2 },
      { etiqueta: "Maletero", valor: "15,1 ft³ (≈428 l); 44,6 ft³ (≈1.263 l) con asientos abatidos", ...SRC2 },
      { etiqueta: "Prestaciones (EE. UU.)", valor: "174 mph (≈280 km/h); 0–60 mph en 3,9 s; ¼ de milla en 12,6 s", ...SRC2 },
    ],
  },
  "porsche-panamera-turbo-e-hybrid-2026-precio-ficha-tecnica": {
    titulo: "Panamera Turbo E-Hybrid: V8, frenos de diez pistones y peso según la hoja de Porsche",
    parrafos: [
      "El Turbo E-Hybrid es, en la hoja de Porsche, la única versión con V8 biturbo de 3.996 cc que lleva además motor eléctrico: el térmico da 512 hp a 6.000 rpm y 567 lb-ft (unos 769 Nm) entre 2.330 y 4.000 rpm, con compresión de 9,7:1. El eléctrico aporta 187 hp y 331 lb-ft. Juntos suman 670 hp (unos 679 PS) y 685 lb-ft (unos 929 Nm), cifras que concuerdan con los 680 CV y 930 Nm de la ficha de arriba.",
      "Los frenos son los mayores de la gama: pinzas monobloc de diez pistones delante y de cuatro detrás, con discos de 420 × 40 mm y de 380 × 30 mm. Las llantas Turbo de 20 pulgadas llevan neumáticos 275/40 R20 delante y 315/35 R20 detrás, con anchos de 9,5J y 10,5J. El peso en vacío es de 5.302 lb (unos 2.405 kg), con una relación peso/potencia de 8,2 lb por hp.",
      "Dentro, la carga útil es de 937 lb (unos 425 kg) y el maletero de 14,8 pies cúbicos (unos 419 litros), o 44,3 con los asientos abatidos (unos 1.254 litros). La velocidad máxima con neumáticos de verano opcionales es de 195 mph (unos 314 km/h), el 0 a 60 mph se hace en 3,0 s y el cuarto de milla en 11,3 s. Estos números corresponden a la unidad homologada en Estados Unidos.",
      "El depósito admite 21,1 galones (unos 80 litros), y en el nivel normal de la suspensión neumática la hoja da 12,7° de entrada, 10,9° de rampa y 16,4° de salida.",
    ],
    filas: [
      { etiqueta: "Motor térmico", valor: "V8 biturbo de 3.996 cc; 512 hp a 6.000 rpm; 567 lb-ft (≈769 Nm); compresión 9,7:1", ...SRC3 },
      { etiqueta: "Sistema combinado", valor: "670 hp (≈679 PS) y 685 lb-ft (≈929 Nm); eléctrico de 187 hp", ...SRC3 },
      { etiqueta: "Frenos", valor: "Pinzas monobloc de 10 pistones delante y 4 detrás; discos 420 × 40 mm y 380 × 30 mm", ...SRC3 },
      { etiqueta: "Llantas y neumáticos", valor: "20 pulgadas Turbo; 275/40 R20 delante y 315/35 R20 detrás", ...SRC3 },
      { etiqueta: "Peso", valor: "5.302 lb (≈2.405 kg) en vacío; 8,2 lb/hp. " + "Dato de la hoja de EE. UU.; kilos calculados a partir de libras.", ...SRC3 },
      { etiqueta: "Maletero", valor: "14,8 ft³ (≈419 l); 44,3 ft³ (≈1.254 l) con asientos abatidos", ...SRC3 },
      { etiqueta: "Prestaciones (EE. UU.)", valor: "195 mph (≈314 km/h); 0–60 mph en 3,0 s; ¼ de milla en 11,3 s", ...SRC3 },
      { etiqueta: "Ángulos", valor: "Entrada 12,7°; rampa 10,9°; salida 16,4°", ...SRC3 },
    ],
  },
  "toyota-corolla-140h": {
    titulo: "Corolla Hatchback 1.8 Hybrid: ficha técnica de Toyota (Europa, 2025)",
    parrafos: [
      "La ficha técnica de Toyota Auto Finland, fechada el 2 de enero de 2025 y válida para el mercado finlandés, describe el Corolla Hatchback 1.8 Hybrid con un cuatro cilindros en línea de 1.798 cm³, 16 válvulas, distribución DOHC con VVT-i y relación de compresión de 13,0:1. La potencia total del sistema híbrido es de 103 kW (140 CV), el acumulador es de litio-ion y el cambio, un automático continuo e-CVT. Pide gasolina de 95 octanos o más y el depósito es de 43 litros.",
      "Toyota publica 9,1 s para llegar a 100 km/h y un techo de 180 km/h, mientras que la ficha de arriba cifra 9,2 s. Las cotas son 4.370 mm de largo, 1.790 mm de ancho, 1.460 mm de alto y 2.640 mm de batalla, con voladizos de 935 mm delante y 795 mm detrás, vías de 1.530 mm en ambos ejes y 135 mm de altura libre al suelo.",
      "El maletero mide 361 litros VDA con los asientos traseros en uso y 1.052 con ellos abatidos. El habitáculo llega a 1.795 mm de largo máximo, 1.510 mm de ancho y 1.155 mm de alto. La masa total autorizada es de 1.820 kg y la del conjunto con remolque de 2.570 kg, con 750 kg de remolque con frenos y 450 kg sin ellos. El peso en vacío va de 1.420 a 1.485 kg según equipamiento, lo que respalda los 1.420 kg de la ficha de arriba, y el radio de giro entre neumáticos es de 5,2 a 5,4 m.",
      "La misma hoja recoge la carrocería Touring Sports, de 4.650 mm de largo y 2.700 mm de batalla, con 596 litros de maletero y 1.606 abatido, y una variante 2.0 Hybrid de 134 kW (182 CV) y 7,7 s, ambas cifras marcadas por Toyota como preliminares.",
    ],
    filas: [
      { etiqueta: "Motor", valor: "1.8 de 1.798 cm³, 4 cilindros, 16 válvulas, VVT-i; compresión 13,0:1", ...SRC4 },
      { etiqueta: "Potencia del sistema", valor: "103 kW (140 CV); acumulador de litio-ion", ...SRC4 },
      { etiqueta: "Transmisión", valor: "Automática continua e-CVT", ...SRC4 },
      { etiqueta: "Prestaciones", valor: "9,1 s para llegar a 100 km/h; techo de 180 km/h", ...SRC4 },
      { etiqueta: "Dimensiones", valor: "4.370 × 1.790 × 1.460 mm; batalla 2.640 mm; altura libre 135 mm; vías 1.530 mm", ...SRC4 },
      { etiqueta: "Maletero (VDA)", valor: "361 l; 1.052 l con asientos abatidos", ...SRC4 },
      { etiqueta: "Masas y remolque", valor: "En vacío 1.420–1.485 kg; autorizada 1.820 kg; con remolque 2.570 kg; remolque con frenos 750 kg; sin frenos 450 kg", ...SRC4 },
      { etiqueta: "Depósito", valor: "43 litros; gasolina de 95 octanos o más", ...SRC4 },
    ],
  },
};
