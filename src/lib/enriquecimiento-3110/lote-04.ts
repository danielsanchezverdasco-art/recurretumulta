// Lote 04 — Dacia Bigster: hybrid 155, TCe 140 y TCe 130 4x4 (31/10/2026). Facetas distintas de la ficha 2025; todas de la tabla técnica de Dacia.
import type { MapaEnriquecimiento } from "./tipos";

const DA_PDF = "https://media.dacia.com/wp-content/uploads/2025/04/b3e0c681657af5e1839ccc4fc06c962d.pdf";
const FUENTE = "Dacia, características técnicas Bigster";

export const LOTE_04: MapaEnriquecimiento = {
  "dacia-bigster-2026-hybrid-155-precio-ficha-tecnica": {
    titulo: "Bigster hybrid 155: datos de la tabla técnica de Dacia (motor 1.8, batería y maletero)",
    parrafos: [
      "A diferencia de las variantes mild hybrid de tres cilindros, el Bigster hybrid 155 monta un gasolina de 1.793 cc con cuatro cilindros y 16 válvulas e inyección directa. La tabla técnica de Dacia indica 115 kW (155 CV) a 5.300 rpm y 172 Nm a 3.000 rpm, con la nota de que la potencia es la suma del motor térmico y del eléctrico. La caja es automática multimodo de 4+2 marchas y la tracción solo va a las ruedas delanteras.",
      "El documento oficial de Dacia da 172 Nm y un acumulador litio-ion de 230 V con 1,4 kWh, y la ficha de arriba recoge esos mismos datos. Para el conjunto anuncia un 0 a 100 km/h de 9,7 s, una máxima de 180 km/h, un gasto de 4,6 a 4,7 l/100 km y entre 104 y 105 g/km de CO₂ según WLTP, además de un tanque de 50 litros y la norma E06X.",
      "En el maletero, la batería híbrida resta espacio: 546 dm³ VDA hasta la tapa con el kit antipinchazos y 488 con rueda de repuesto, y 1.851 o 1.791 dm³ con los respaldos traseros abatidos. Con el criterio ISO 3832, en litros, resultan 612 o 566 hasta la tapa y 1.912 o 1.866 abatido. El 140 de tres cilindros ofrece 667 dm³ en la primera medida, es decir 121 dm³ más.",
      "Dacia fija 1.487 kg como masa máxima en vacío y 1.940 kg como masa autorizada, con 2.940 kg permitidos para el coche más un remolque. En el acabado más sencillo, la carga útil oscila entre 453 y 521 kg, y un remolque sin frenos puede pesar 745 kg. Respecto a la altura, la ficha de arriba recoge los 1.662 mm de carrocería desnuda que da Dacia, y 1.712 mm con barras longitudinales.",
    ],
    filas: [
      { etiqueta: "Motor", valor: "1.793 cc, 4 cilindros, 16 válvulas, inyección directa; 115 kW (155 CV) combinados a 5.300 rpm; 172 Nm a 3.000 rpm", fuente: FUENTE, url: DA_PDF, anio: "2025" },
      { etiqueta: "Transmisión", valor: "Automática multimodo de 4+2 marchas; tracción delantera", fuente: FUENTE, url: DA_PDF, anio: "2025" },
      { etiqueta: "Batería", valor: "Iones de litio; 230 V; 1,4 kWh", fuente: FUENTE, url: DA_PDF, anio: "2025" },
      { etiqueta: "Prestaciones", valor: "0–100 km/h en 9,7 s; máxima de 180 km/h", fuente: FUENTE, url: DA_PDF, anio: "2025" },
      { etiqueta: "Consumo y CO₂", valor: "4,6–4,7 l/100 km; 104–105 g/km (WLTP); depósito 50 l", fuente: FUENTE, url: DA_PDF, anio: "2025" },
      { etiqueta: "Maletero bajo bandeja", valor: "546 dm³ VDA con kit antipinchazos (488 con repuesto); 612 l / 566 l ISO 3832", fuente: FUENTE, url: DA_PDF, anio: "2025" },
      { etiqueta: "Maletero abatido", valor: "1.851 dm³ VDA (1.791 con repuesto); 1.912 l / 1.866 l ISO 3832", fuente: FUENTE, url: DA_PDF, anio: "2025" },
      { etiqueta: "Pesos", valor: "Vacío máx. 1.487 kg; autorizado 1.940 kg; tren 2.940 kg; carga útil 453–521 kg; remolque sin frenos 745 kg", fuente: FUENTE, url: DA_PDF, anio: "2025" },
      { etiqueta: "Altura", valor: "1.662 mm sin barras; 1.712 mm con barras longitudinales", fuente: FUENTE, url: DA_PDF, anio: "2025" },
    ],
  },
  "dacia-bigster-2026-tce-140-precio-ficha-tecnica": {
    titulo: "Bigster TCe 140: cotas interiores, frenos y neumáticos según Dacia",
    parrafos: [
      "La tabla técnica de Dacia aporta cotas de habitabilidad que la ficha de arriba no recoge. El ancho a la altura de los codos es de 1.443 mm delante y 1.432 mm detrás, y el ancho de hombros de 1.396 mm y 1.378 mm. El espacio para las rodillas en la segunda fila es de 243 mm y la longitud interior de 1.742 mm.",
      "En la parte mecánica, el 1.2 de tres cilindros y 12 válvulas cumple la norma de emisiones E06X, lleva filtro de partículas y sistema Stop & Start. En el chasis, la dirección es eléctrica, los discos delanteros son ventilados y miden 296 × 26 mm, y en el eje trasero va un tambor de 9 pulgadas con freno de mano manual, o un disco macizo de 280 mm cuando el de estacionamiento es automático.",
      "Los neumáticos de referencia son 215/65 R17, 215/60 R18 y 205/55 R19, con llantas de 6,5 J en las dos primeras y de 7 J en la tercera. La masa autorizada del coche es de 1.890 kg y la de coche más remolque, de 3.390 kg. Con la carga máxima, la altura libre baja de 220 a 194 mm, con 24° de ataque y 25° de salida.",
      "La misma tabla incluye una versión de GLP, el mild hybrid-G 140, con 1.478 kg de peso máximo en vacío, 609 dm³ de maletero y depósito doble de 50 litros de gasolina y de GLP. Dacia marcaba entonces sus cifras de consumo y de emisiones como «homologación en curso», y 0 a 100 km/h como pendiente de confirmar.",
    ],
    filas: [
      { etiqueta: "Anchura interior", valor: "Codos 1.443 mm delante / 1.432 mm detrás; hombros 1.396 / 1.378 mm", fuente: FUENTE, url: DA_PDF, anio: "2025" },
      { etiqueta: "Espacio rodillas, 2.ª fila", valor: "243 mm; longitud interior 1.742 mm", fuente: FUENTE, url: DA_PDF, anio: "2025" },
      { etiqueta: "Frenos", valor: "Discos delanteros ventilados de 296 × 26 mm; trasero de tambor de 9 pulgadas (mano manual) o disco macizo de 280 mm (automático)", fuente: FUENTE, url: DA_PDF, anio: "2025" },
      { etiqueta: "Neumáticos", valor: "215/65 R17 (6,5 J), 215/60 R18 (6,5 J), 205/55 R19 (7 J)", fuente: FUENTE, url: DA_PDF, anio: "2025" },
      { etiqueta: "Normativa y equipo", valor: "E06X; filtro de partículas; Stop & Start; inyección directa", fuente: FUENTE, url: DA_PDF, anio: "2025" },
      { etiqueta: "Pesos autorizados", valor: "Autorizado 1.890 kg; coche más remolque 3.390 kg", fuente: FUENTE, url: DA_PDF, anio: "2025" },
      { etiqueta: "Ángulos a plena carga", valor: "Ataque 24°; ventral 21°; salida 25°; altura libre 194 mm", fuente: FUENTE, url: DA_PDF, anio: "2025" },
      { etiqueta: "Variante GLP en la misma tabla", valor: "mild hybrid-G 140: 1.478 kg en vacío; 609 dm³ de maletero; consumo y CO₂ en homologación", fuente: FUENTE, url: DA_PDF, anio: "2025" },
    ],
  },
  "dacia-bigster-tce-130-4x4-2025-precio-ficha-tecnica": {
    titulo: "Bigster mild hybrid 130 4x4: ángulos, alturas y pesos de la tabla de Dacia",
    parrafos: [
      "El Bigster de tracción total es el único del cuadro con 96 kW (130 CV) a 4.500 rpm y 230 Nm a 2.250 rpm, el mismo 1.2 de tres cilindros de 1.199 cc con 48 V de 0,84 kWh. Su norma es E06W, una letra anterior a las demás, y la caja es manual de seis marchas. Para acelerar hasta 100 km/h necesita 11,2 s; la velocidad máxima homologada es 180 km/h y el gasto anunciado de 6,0 a 6,1 l/100 km y entre 134 y 137 g/km de CO₂.",
      "El 4x4 cambia de forma notable el diseño bajo el suelo y por eso su depósito es de 55 litros en lugar de 50. La tabla da una altura libre de 219 mm en vacío y de 193 mm con carga máxima, una altura de elevación de 785 mm y ángulos de ataque y de salida de 24,2° y 28,7° en vacío. Con carga máxima son 23,9° de ataque, 20,1° ventrales y 25,8° de salida.",
      "La altura es de 1.657 mm sin barras de techo y de 1.706 mm con ellas, que es la cifra de la ficha de arriba. La masa máxima en vacío es de 1.515 kg, la autorizada de 1.970 kg y la del coche con remolque de 3.470 kg; la carga útil va de 455 a 542 kg y se admiten 750 kg de remolque sin frenos.",
      "Su maletero baja a 550 dm³ VDA con kit de reparación y a 510 con rueda de repuesto, y a 1.853 o 1.813 dm³ abatido. En litros según ISO 3832 son 629 o 556 bajo la bandeja y 1.929 o 1.856 abatido. Es decir, la pérdida respecto al 4x2 de 140 CV, de 667 dm³, es de 117 dm³ por el eje trasero motriz.",
    ],
    filas: [
      { etiqueta: "Motor", valor: "1.199 cc, 3 cilindros; 96 kW (130 CV) a 4.500 rpm; 230 Nm a 2.250 rpm; 48 V de 0,84 kWh; norma E06W", fuente: FUENTE, url: DA_PDF, anio: "2025" },
      { etiqueta: "Transmisión", valor: "Manual de 6 marchas; tracción total (4x4)", fuente: FUENTE, url: DA_PDF, anio: "2025" },
      { etiqueta: "Prestaciones", valor: "Tiempo de 0 a 100 km/h: 11,2 s; tope de 180 km/h", fuente: FUENTE, url: DA_PDF, anio: "2025" },
      { etiqueta: "Consumo y CO₂", valor: "6,0–6,1 l/100 km; 134–137 g/km (WLTP); depósito 55 l", fuente: FUENTE, url: DA_PDF, anio: "2025" },
      { etiqueta: "Altura libre", valor: "219 mm en vacío; 193 mm con carga máxima; elevación 785 mm", fuente: FUENTE, url: DA_PDF, anio: "2025" },
      { etiqueta: "Ángulos en vacío", valor: "Ataque 24,2°; salida 28,7°", fuente: FUENTE, url: DA_PDF, anio: "2025" },
      { etiqueta: "Ángulos con carga máxima", valor: "Ataque 23,9°; ventral 20,1°; salida 25,8°", fuente: FUENTE, url: DA_PDF, anio: "2025" },
      { etiqueta: "Altura total", valor: "1.657 mm sin barras; 1.706 mm con barras longitudinales", fuente: FUENTE, url: DA_PDF, anio: "2025" },
      { etiqueta: "Pesos", valor: "En vacío máx. 1.515 kg; MMA 1.970 kg; conjunto 3.470 kg; carga útil 455–542 kg; remolque sin freno 750 kg", fuente: FUENTE, url: DA_PDF, anio: "2025" },
      { etiqueta: "Maletero", valor: "550 dm³ VDA (510 con repuesto); 1.853 / 1.813 dm³ abatido; 629 l / 556 l y 1.929 l / 1.856 l ISO 3832", fuente: FUENTE, url: DA_PDF, anio: "2025" },
    ],
  },
};
