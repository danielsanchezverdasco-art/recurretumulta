// Lote 03 — Tesla Roadster, Haval Jolion Pro y Dongfeng Shine / Shine GS (31/10/2026). Cada fila con fuente y año.
import type { MapaEnriquecimiento } from "./tipos";

const CNBC = "https://www.cnbc.com/2026/10/15/tesla-roadster-reveal-what-to-know-about-the-delayed-ev.html";
const TC = "https://techcrunch.com/2026/10/15/tesla-reveals-spacex-powered-roadster-that-flies-and-falls-with-style/";

const GWM_ZA = "https://www.gwm.co.za/content/dam/gwm/pages/za/en/models/jolion-pro/gwm_jolion_pro_new2025.pdf";
const TG_JOL = "https://www.topgear.com/car-reviews/gwm/jolion-pro/specs";

const DF_MX = "https://www.dongfengmexico.com.mx/recursos/ficha-tecnica/ft-shine.pdf";
const DF_PE = "https://dongfengmotor.pe/dongfeng/wp-content/uploads/2024/03/ficha-Shine-Gs-E2-web.pdf";

const SRC1 = { fuente: "TechCrunch", url: TC, anio: "2026" };
const SRC2 = { fuente: "GWM Sudáfrica, folleto Haval Jolion", url: GWM_ZA, anio: "2025" };
const SRC3 = { fuente: "Dongfeng México, ficha técnica Shine 2025", url: DF_MX, anio: "2025" };
const SRC4 = { fuente: "Dongfeng Perú, ficha Shine GS E2", url: DF_PE, anio: "2024" };

export const LOTE_03: MapaEnriquecimiento = {
  "tesla-roadster-2026-retraso-precio-ficha-tecnica": {
    titulo: "Lo que Tesla ha anunciado del Roadster: acabados, autonomía, reserva y fecha",
    parrafos: [
      "La segunda generación del Roadster se vio por fin el 15 de octubre de 2026, durante un acto cerca de Waco (Texas), casi nueve años después de la primera presentación de 2017. Según TechCrunch, Elon Musk dijo que se fabricará en 2028 y no dio precio. En la demostración el coche usó ventiladores y propulsores para subir por una rampa invertida, girar sobre sí mismo y aterrizar, y para saltar por encima de otros modelos de la marca en marcha.",
      "TechCrunch cuenta tres acabados. «Performance», descrito por Tesla como listo para carretera, es biplaza, con aerodinámica activa y un sistema de succión multimodo. «Thrust», para circuito, también es biplaza y añade propulsores traseros de gas frío que permiten bajar de un segundo en el 0 a 60 mph. «Rocket», pensado para el aire, es monoplaza y lleva diez propulsores repartidos por la carrocería. Según el vicepresidente de ingeniería Lars Moravy, esos diez propulsores se alimentan de 600 litros de aire comprimido recargable.",
      "Para los tres acabados, Tesla anuncia 300 millas de autonomía (unos 483 km tras la conversión) y velocidades por encima de 230 mph (unos 370 km/h). Son cifras de la marca en un acto de presentación: no hay homologación ni prueba independiente, y ninguna de las dos fuentes habla de ciclo WLTP. Por eso la ficha de arriba ya no muestra esa autonomía como dato homologado y la deja en el texto como cifra anunciada.",
      "En cuanto a la aceleración, la marca mostró el 0 a 60 mph en un segundo en la demostración, y el acabado Thrust declara menos de uno. La ficha de arriba ya no da un 0-100 propio, porque esa cifra no está medida ni homologada. CNBC recuerda además que Musk retrasó este coche en 2020, 2021, 2023 y 2024, así que cualquier fecha de entrega conviene leerla como intención.",
      "Las reservas abrieron ese mismo día. TechCrunch recoge 50.000 dólares para reservar el Performance y 250.000 para el Thrust, mientras que el Rocket se ofrece solo por invitación. CNBC añade que Tesla aceptaba depósitos de 50.000 dólares en Estados Unidos, Canadá y China. La ficha de arriba habla de 5.000 dólares más 45.000 por transferencia: no hemos encontrado ese desglose en las fuentes citadas aquí.",
    ],
    filas: [
      { etiqueta: "Presentación", valor: "15 de octubre de 2026, cerca de Waco (Texas)", ...SRC1 },
      { etiqueta: "Producción anunciada", valor: "2028 (sin precio oficial)", ...SRC1 },
      { etiqueta: "Acabados", valor: "Performance (2 plazas), Thrust (2 plazas, propulsores traseros), Rocket (1 plaza, 10 propulsores)", ...SRC1 },
      { etiqueta: "Autonomía anunciada", valor: "300 millas (≈483 km), en los tres acabados; dato de la marca, no homologado", ...SRC1 },
      { etiqueta: "Velocidad máxima anunciada", valor: "Más de 230 mph (≈370 km/h), en los tres acabados; dato de la marca", ...SRC1 },
      { etiqueta: "0–60 mph", valor: "1 s en la demostración; menos de 1 s con los propulsores del Thrust (dato de la marca)", ...SRC1 },
      { etiqueta: "Aire comprimido", valor: "600 litros para 10 propulsores, recargable", ...SRC1 },
      { etiqueta: "Reserva", valor: "50.000 USD (Performance); 250.000 USD (Thrust); Rocket solo por invitación", ...SRC1 },
      { etiqueta: "Depósitos abiertos en", valor: "Estados Unidos, Canadá y China", fuente: "CNBC", url: CNBC, anio: "2026" },
      { etiqueta: "Retrasos previos", valor: "2020, 2021, 2023 y 2024", ...SRC1 },
    ],
  },
  "haval-jolion-pro-2025-precio-ficha-tecnica": {
    titulo: "Jolion Pro: gamas de motor del folleto de GWM y datos del híbrido en el Reino Unido",
    parrafos: [
      "El folleto de GWM Sudáfrica de 2025 lista siete versiones del Haval Jolion. Las cinco primeras, de City a Pro Ultra, montan un gasolina 1.5 turbo de 105 kW (143 CV) y 210 Nm, con consumo combinado de 7,8 l/100 km en la manual de seis marchas y de 8,1 en las automáticas de doble embrague de siete. Es el motor básico; la ficha de arriba describe la variante de más potencia con gasolina.",
      "La variante de 177 CV de esa ficha existe en el folleto: es el Pro 1.5T S Ultra, con 130 kW (177 CV), 270 Nm, caja DCT de siete marchas y 7,5 l/100 km. La séptima versión es el Pro 1.5 HEV Ultra, híbrido de transmisión dedicada DHT con 140 kW (190 CV), 375 Nm y 5,1 l/100 km. Todos los datos son de ese mercado y pueden cambiar en otros países.",
      "Las versiones Pro, de 4.470 × 1.898 × 1.625 mm, coinciden con las dimensiones de la ficha de arriba; las dos primeras, más bajas, miden 4.472 × 1.874 × 1.581 mm. En seguridad, las cortinas laterales solo llegan desde la versión Luxury, igual que el frenado automático de emergencia con aviso de colisión frontal y la asistencia en cruces. Las seis versiones de gasolina llevan rueda de repuesto T135/90 R17; el híbrido, kit de reparación.",
      "Top Gear, en una prueba del 29 de mayo de 2025, recoge para el Reino Unido solo el híbrido 1.5 eHEV: 186,4 bhp, batería de 1,69 kWh, 9 s de 0 a 62 mph y precios de 23.380 a 29.380 libras según acabado Premium, Lux o Ultra. Los 7,9 s de la ficha de arriba tampoco aparecen en esa tabla.",
      "La garantía del folleto sudafricano es de siete años o 200.000 km para todo el modelo, y la de la batería de alto voltaje figura solo en el híbrido. Ninguna de las dos fuentes indica la oferta española, así que el precio de 27.500 € y la garantía de la ficha superior deben confirmarse con un concesionario Haval antes de decidir.",
    ],
    filas: [
      { etiqueta: "Gasolina 1.5T (City, City Plus, Pro Premium, Pro Super, Pro Ultra)", valor: "105 kW (143 CV); 210 Nm; 7,8 l/100 km (manual) u 8,1 l/100 km (DCT 7)", ...SRC2 },
      { etiqueta: "Pro 1.5T S Ultra", valor: "130 kW (177 CV); 270 Nm; DCT de 7 marchas; 7,5 l/100 km", ...SRC2 },
      { etiqueta: "Pro 1.5 HEV Ultra", valor: "140 kW (190 CV); 375 Nm; transmisión DHT; 5,1 l/100 km", ...SRC2 },
      { etiqueta: "Dimensiones Pro", valor: "4.470 × 1.898 × 1.625 mm (City: 4.472 × 1.874 × 1.581 mm)", ...SRC2 },
      { etiqueta: "Frenado automático de emergencia", valor: "De serie desde la versión Luxury (Pro Super, Ultra, S Ultra y HEV)", ...SRC2 },
      { etiqueta: "Garantía (Sudáfrica)", valor: "7 años o 200.000 km; batería de alto voltaje solo en el HEV", ...SRC2 },
      { etiqueta: "Reino Unido, 1.5 eHEV", valor: "186,4 bhp; 1,69 kWh; 0–62 mph en 9 s; 23.380–29.380 £", fuente: "Top Gear, GWM Jolion Pro", url: TG_JOL, anio: "2025" },
    ],
  },
  "dongfeng-shine-2025-precio-ficha-tecnica": {
    titulo: "Dongfeng Shine 2025 según la ficha de Dongfeng México: motor, medidas y equipamiento",
    parrafos: [
      "La ficha técnica de Dongfeng México para el Shine 2025 declara un motor 1.5 litros de cuatro cilindros atmosférico con inyección directa, de 149 HP y 221 lb-pie de par (unos 300 Nm). Va con caja de doble embrague de seis velocidades, tracción delantera y modos Normal y Sport. Anuncia 200 km/h y un consumo WLTC de 6,13 l/100 km (5,82 en NEDC). La ficha de arriba recoge estos mismos valores: unos 151 CV, 300 Nm y 200 km/h.",
      "Las medidas son 4.670 mm de largo, 1.812 mm de ancho y 1.490 mm de alto, con 2.680 mm entre ejes, un radio de giro mínimo de 5.750 mm y 454 litros de maletero. El peso en vacío es de 1.203 kg y el bruto de 1.616 kg, con cinco plazas y un depósito de 50 litros. Las llantas son de aluminio de 17 pulgadas con neumáticos 205/50 R17 y rueda de repuesto de emergencia 125/85 R16.",
      "En chasis, delante lleva suspensión McPherson independiente con barra estabilizadora y detrás un eje semiindependiente de barra de torsión, con dirección asistida eléctrica, freno delantero de disco ventilado y trasero de disco sólido. El equipamiento de seguridad de la tabla incluye ABS, EBD, control de estabilidad y de tracción, ayuda en pendiente, control de presión de neumáticos, Autohold, cámara trasera y vista panorámica de 540°.",
      "También figuran cuatro airbags (frontales y laterales para conductor y acompañante), cinturones delanteros con limitador de fuerza, anclajes Latch/Isofix y seguros para niños en las puertas traseras. En el interior hay pantalla HD de 13 pulgadas y asientos de piel sintética, y fuera, faros delanteros LED con luz diurna. Es la versión de México, y no la de Cuba ni la europea.",
    ],
    filas: [
      { etiqueta: "Motor", valor: "1.5 L, 4 cilindros, atmosférico, inyección directa; 149 HP; 221 lb-pie", ...SRC3 },
      { etiqueta: "Transmisión", valor: "DCT de 6 velocidades; tracción delantera (FWD)", ...SRC3 },
      { etiqueta: "Consumo y velocidad", valor: "WLTC 6,13 l/100 km; NEDC 5,82 l/100 km; 200 km/h", ...SRC3 },
      { etiqueta: "Dimensiones", valor: "4.670 × 1.812 × 1.490 mm; batalla 2.680 mm; giro 5.750 mm", ...SRC3 },
      { etiqueta: "Maletero y depósito", valor: "454 L; depósito 50 L", ...SRC3 },
      { etiqueta: "Pesos", valor: "En vacío 1.203 kg; bruto 1.616 kg; 5 plazas", ...SRC3 },
      { etiqueta: "Neumáticos", valor: "205/50 R17; repuesto 125/85 R16", ...SRC3 },
    ],
  },
  "dongfeng-shine-gs-2025-precio-ficha-tecnica": {
    titulo: "Dongfeng Shine GS E2 según la ficha de Dongfeng Perú: motor 1.5T, maletero y equipamiento",
    parrafos: [
      "La ficha de Dongfeng Perú para el Shine GS E2 describe un 1.5 turbo «Mach Power» de 1.476 cc con 194 hp de potencia nominal a 5.200 rpm (187 hp netos) y 300 Nm entre 2.000 y 4.000 rpm. Lo une a un doble embrague húmedo de seis velocidades con tracción delantera. Declara 190 km/h y un consumo WLTC de 6,33 l/100 km, bajo la norma de emisiones china VI-B.",
      "Las dimensiones publicadas son 4.630 × 1.830 × 1.610 mm, con 2.680 mm de batalla y un giro mínimo de 5,7 m. La masa en vacío es de 1.330 kg y el maletero va de 474 litros en configuración base a 1.109 con el asiento trasero abatido. Monta neumáticos 215/55 R17. La ficha de arriba usa estos valores de Perú: unos 190 CV, 190 km/h y 1.330 kg.",
      "En el chasis, McPherson delante y barra de torsión detrás, frenos de disco ventilado delante y de disco detrás, dirección eléctrica y un selector ECO/SPORT. La seguridad incluye ABS con EBD, control de estabilidad, tracción y dinámico de la carrocería, ayuda en pendiente, asistente de frenada, Autohold, control de crucero y cámara 360° con vista del chasis transparente.",
      "Entre el equipamiento figuran faros LED, techo solar panorámico de 1,08 m² con función antipinzamiento, asiento del conductor con ajuste eléctrico en cuatro direcciones, respaldo trasero abatible 4/6, climatizador automático, purificador de aire PM2.5 y retrovisores eléctricos con calefacción y plegado automático. Es la especificación de Perú, no una cifra de homologación europea.",
    ],
    filas: [
      { etiqueta: "Motor", valor: "1.5 turbo Mach Power, 1.476 cc; 194 hp nominales a 5.200 rpm (187 hp netos); 300 Nm a 2.000–4.000 rpm", ...SRC4 },
      { etiqueta: "Transmisión", valor: "Doble embrague húmedo de 6 velocidades; tracción delantera", ...SRC4 },
      { etiqueta: "Consumo y velocidad", valor: "WLTC 6,33 l/100 km; 190 km/h; norma China VI-B", ...SRC4 },
      { etiqueta: "Dimensiones", valor: "4.630 × 1.830 × 1.610 mm; batalla 2.680 mm; giro 5,7 m", ...SRC4 },
      { etiqueta: "Maletero", valor: "474 L (base) y 1.109 L (asiento trasero abatido)", ...SRC4 },
      { etiqueta: "Masa en vacío", valor: "1.330 kg; neumáticos 215/55 R17", ...SRC4 },
    ],
  },
};
