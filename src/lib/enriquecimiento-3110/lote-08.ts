// Lote 08 — Hyundai Tucson 2027 (31/10/2026). Nota de prensa y tabla técnica de Hyundai Motor (presentación mundial del 1 de octubre de 2026).
import type { MapaEnriquecimiento } from "./tipos";

const HY = "https://www.hyundai.com/worldwide/en/newsroom/detail/0000001280";
const F = "Hyundai Motor, nota de prensa mundial del nuevo Tucson";

export const LOTE_08: MapaEnriquecimiento = {
  "nuevo-hyundai-tucson-2027-presentacion-precio-ficha-tecnica": {
    titulo: "Nuevo Tucson: datos oficiales de la presentación mundial de Hyundai",
    parrafos: [
      "Hyundai presentó la quinta generación del Tucson el 1 de octubre de 2026 en Nueva York. La marca anuncia lanzamiento en Corea a finales de este año y llegada a Norteamérica, Europa y otros mercados en 2027, así que ningún dato de equipamiento ni de precio para España está confirmado todavía. La ficha de arriba recoge las cotas y las mecánicas de la tabla oficial; el precio, el peso y las prestaciones siguen siendo estimaciones sin confirmar.",
      "La carrocería de batalla larga mide 4.700 mm de largo (60 mm más que antes), 1.905 mm de ancho (40 mm más), 1.685 mm de alto (20 mm más; 1.700 con barras) y 2.785 mm de distancia entre ejes (30 mm más). Los voladizos son de 915 mm delante y 1.000 mm detrás, la altura libre es de 180 mm y los neumáticos máximos son 235/50 R20, con llantas de 17 a 20 pulgadas. La versión XRT PRO sube a 210 mm de altura libre, que son 30 mm más.",
      "Hyundai publica tres familias mecánicas. La de gasolina usa un 1.6 T-GDI o un 2.0 MPI, con entre 150 y 193 PS en Corea. La híbrida combina dos motores eléctricos de 13 kW y 47,7 kW, entrega de 236 a 245 PS, 38,7 kgf·m y una batería de 1,49 kWh y 270 V, con transmisión automática de seis relaciones. La enchufable, con motores de 13 kW y 79 kW, rinde 292 PS y lleva 17,1 kWh y 351 V. La nota de prensa le asigna 81 km de autonomía eléctrica y un cargador de 7,2 kW.",
      "Las emisiones que la tabla da para Europa son de 142 g/km de CO₂ en la gasolina, 119 g/km en la híbrida y 91 g/km en la enchufable. En los remolques europeos, Hyundai afirma que la versión de gasolina gana hasta 350 kg, la híbrida hasta 260 kg y la enchufable hasta 450 kg respecto a la generación anterior; la tabla recoge 1.910 kg para la enchufable. El objetivo de seguridad que declara para Europa es de cinco estrellas Euro NCAP, todavía por ensayar.",
      "En el habitáculo, la altura libre sobre la cabeza es de 1.036 mm en la primera fila (990 mm con techo solar) y de 1.031 mm en la segunda (1.003 mm). El espacio para las piernas es de 1.052 mm delante y 1.064 mm detrás, y el ancho a la altura de los hombros es de 1.470 mm y 1.428 mm. Las puertas abren hasta 83°, 10° más que en el modelo anterior.",
    ],
    filas: [
      { etiqueta: "Presentación", valor: "1 de octubre de 2026 (Nueva York); Corea a finales de 2026; Europa en 2027", fuente: F, url: HY, anio: "2026" },
      { etiqueta: "Dimensiones (batalla larga)", valor: "4.700 × 1.905 × 1.685 mm; batalla 2.785 mm; altura libre 180 mm (210 mm en XRT PRO)", fuente: F, url: HY, anio: "2026" },
      { etiqueta: "Híbrido (HEV)", valor: "Motores de 13 kW y 47,7 kW; 236–245 PS; batería de 1,49 kWh y 270 V; transmisión automática de seis relaciones", fuente: F, url: HY, anio: "2026" },
      { etiqueta: "Híbrido enchufable (PHEV)", valor: "Motores de 13 kW y 79 kW; 292 PS; batería de 17,1 kWh y 351 V; 81 km eléctricos; cargador de 7,2 kW", fuente: F, url: HY, anio: "2026" },
      { etiqueta: "Gasolina", valor: "1.6 T-GDI o 2.0 MPI; 150–193 PS (cifras de Corea)", fuente: F, url: HY, anio: "2026" },
      { etiqueta: "CO₂ en Europa", valor: "142 g/km (gasolina); 119 g/km (híbrido); 91 g/km (enchufable)", fuente: F, url: HY, anio: "2026" },
      { etiqueta: "Espacio interior", valor: "Altura libre 1.036 mm delante y 1.031 mm detrás; piernas 1.052 mm y 1.064 mm; hombros 1.470 mm y 1.428 mm", fuente: F, url: HY, anio: "2026" },
      { etiqueta: "Remolque", valor: "Enchufable 1.910 kg (tabla); mejoras europeas anunciadas de hasta 350, 260 y 450 kg", fuente: F, url: HY, anio: "2026" },
    ],
  },
};
