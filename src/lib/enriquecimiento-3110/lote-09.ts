// Lote 09 — Dacia Jogger (Eco-G 120, Hybrid 155, TCe 110 de 5 y 7 plazas). Folleto de Dacia Portugal (nov. 2025) y web de Dacia España.
import type { MapaEnriquecimiento } from "./tipos";

const BRO = "https://e-brochure.dacia.pt/jogger/mobile/m_ebro_dacia_jogger_pt_november_2025.pdf";
const MOT = "https://www.dacia.es/modelos/jogger/motores.html";
const FT = "https://www.dacia.es/modelos/jogger/ficha-tecnica.html";

const SRC1 = { fuente: "Folleto Dacia PT Eco-G 120, motorizaciones", url: BRO, anio: "2025" };
const SRC2 = { fuente: "Folleto Dacia PT Eco-G 120, consumos", url: BRO, anio: "2025" };
const SRC3 = { fuente: "Folleto Dacia PT Hybrid 155, pesos", url: BRO, anio: "2025" };
const SRC4 = { fuente: "Folleto Dacia PT 7 pl., volúmenes de carga", url: BRO, anio: "2025" };
const SRC5 = { fuente: "Folleto Dacia PT 7 pl., pesos", url: BRO, anio: "2025" };

export const LOTE_09: MapaEnriquecimiento = {
  "dacia-jogger-eco-g-120-2026-precio-ficha-tecnica": {
    titulo: "Jogger Eco-G 120: motor, depósitos y homologación según Dacia",
    parrafos: [
      "El Eco-G 120 monta un tricilíndrico de 1.199 cm³ que puede funcionar con gasolina o con GLP, con inyección indirecta en modo gas y directa en modo gasolina. Según la tabla del folleto de Dacia Portugal de noviembre 2025, con GLP rinde 90 kW (unos 122 CV) y 197 Nm entre 1.750 y 3.750 rpm. Con gasolina baja a 84 kW (unos 114 CV) y 190 Nm entre 2.000 y 4.000 rpm. Cumple Euro 6e bis. Son datos del folleto portugués, no del catálogo español, y pueden diferir ligeramente.",
      "Para el cambio manual, el mismo folleto anota con GLP un gasto de 7,4 litros cada 100 km y 121 gramos de CO₂ por kilómetro, y con gasolina 5,9 litros y 134 gramos (ciclo WLTP). El coche lleva un depósito de gasolina de 50 l y otro de GLP de 50 l de volumen total y 40 l de llenado. En su web española, Dacia habla de «más de 1.400 km» de autonomía combinada y de emisiones desde 119 g/km, que es el alcance que ahora recoge la ficha de arriba.",
      "En la versión de cinco plazas con cambio manual, el sprint hasta 100 km/h lleva 10,9 s en modo GLP y 11,9 s en gasolina, y la elasticidad en cuarta entre 80 y 120 km/h es de 8,1 s y 9,1 s respectivamente. La tara va de 1.292 a 1.312 kg, y un remolque con frenos puede pesar hasta 1.200 kg.",
    ],
    filas: [
      { etiqueta: "Motor con GLP", valor: "1.199 cm³, 3 cilindros; 90 kW (≈122 CV); 197 Nm de 1.750 a 3.750 rpm", ...SRC1 },
      { etiqueta: "Motor con gasolina", valor: "84 kW (≈114 CV); 190 Nm de 2.000 a 4.000 rpm", ...SRC1 },
      { etiqueta: "Consumo y CO₂ (GLP)", valor: "7,4 litros cada 100 km y 121 g de CO₂ por km (WLTP, manual)", ...SRC2 },
      { etiqueta: "Consumo y CO₂ (gasolina)", valor: "5,9 litros cada 100 km y 134 g de CO₂ por km (WLTP, manual)", ...SRC2 },
      { etiqueta: "Depósitos", valor: "Gasolina 50 l; GLP 50 l totales y 40 l de llenado", ...SRC2 },
      { etiqueta: "Autonomía anunciada", valor: "Más de 1.400 km combinados", fuente: "Dacia España, página de motores del Jogger", url: MOT, anio: "2025" },
      { etiqueta: "Aceleración hasta 100 km/h (5 plazas, manual)", valor: "10,9 s con GLP; 11,9 s con gasolina", fuente: "Folleto Dacia PT Eco-G 120, prestaciones", url: BRO, anio: "2025" },
      { etiqueta: "Masa remolcable frenada (Eco-G 120)", valor: "1.200 kg", fuente: "Folleto Dacia PT Eco-G 120, pesos", url: BRO, anio: "2025" },
    ],
  },
  "dacia-jogger-hybrid-155-2026-precio-ficha-tecnica": {
    titulo: "Jogger Hybrid 155: datos del sistema híbrido según Dacia",
    parrafos: [
      "El Jogger Hybrid 155 combina un 1.8 de gasolina de 1.789 cm³ y cuatro cilindros con dos motores eléctricos y un cambio automático multimodo. Dacia España indica una potencia combinada de 158 CV, aunque el modelo se vende con el nombre 155. El folleto de Dacia Portugal da 172 Nm para el motor térmico entre 3.000 y 4.000 rpm y 205 Nm para el eléctrico.",
      "La batería de tracción es de iones de litio, de 230 V y 1,4 kWh, es decir, 1,4 kWh y no los 1,7 kWh que se citan en algunas descripciones antiguas. Dacia no recarga este híbrido por enchufe: la batería se regenera con la frenada y las deceleraciones, y la marca asegura que hasta un 80 % de la marcha urbana puede hacerse sin gasolina.",
      "El folleto homologa 4,6 litros cada 100 km y 104 g de CO₂ por kilómetro, las mismas cifras que muestra ahora la ficha de arriba. Con cinco plazas, el sprint hasta 100 km/h cuesta 8,9 s y con siete 9,0 s; en cuarta, pasar de 80 a 120 km/h cuesta 6,4 s y 6,5 s. Sin carga pero listo para rodar, pesa entre 1.359 y 1.373 kg con cinco plazas y entre 1.388 y 1.405 kg con siete.",
      "Son cifras del folleto portugués y no del catálogo español. Puede arrastrar un remolque con frenos de 1.200 kg con cinco plazas y de 1.000 kg con siete. Esta versión comparte con el resto de la gama los neumáticos 205/60 R16 92H, un diámetro de giro entre aceras de 11,39 m, tren delantero pseudo-MacPherson y eje trasero semirrígido, y un depósito de 50 l.",
    ],
    filas: [
      { etiqueta: "Sistema híbrido", valor: "1.8 de 1.789 cm³ y 4 cilindros; 2 motores eléctricos; potencia combinada de 158 CV según Dacia España", fuente: "Dacia España, página de motores del Jogger Hybrid 155", url: MOT, anio: "2025" },
      { etiqueta: "Par motor", valor: "172 Nm térmico (3.000–4.000 rpm) y 205 Nm eléctrico", fuente: "Folleto Dacia PT Hybrid 155, motorizaciones", url: BRO, anio: "2025" },
      { etiqueta: "Batería de tracción", valor: "Iones de litio, 230 V, 1,4 kWh", fuente: "Folleto Dacia PT Hybrid 155, batería", url: BRO, anio: "2025" },
      { etiqueta: "Consumo y CO₂", valor: "4,6 litros cada 100 km y 104 g de CO₂ por km (WLTP)", fuente: "Folleto Dacia PT Hybrid 155, consumos", url: BRO, anio: "2025" },
      { etiqueta: "Aceleración hasta 100 km/h", valor: "8,9 s con 5 plazas; 9,0 s con 7 plazas", fuente: "Folleto Dacia PT Hybrid 155, prestaciones", url: BRO, anio: "2025" },
      { etiqueta: "Tara del Hybrid 155", valor: "1.359–1.373 kg (5 plazas); 1.388–1.405 kg (7 plazas)", ...SRC3 },
      { etiqueta: "Masa remolcable frenada (Hybrid 155)", valor: "1.200 kg (5 plazas); 1.000 kg (7 plazas)", ...SRC3 },
      { etiqueta: "Neumáticos y giro", valor: "205/60 R16 92H; 11,39 m entre aceras", fuente: "Folleto Dacia PT Hybrid 155, chasis", url: BRO, anio: "2025" },
    ],
  },
  "dacia-jogger-tce-110-2026-precio-ficha-tecnica": {
    titulo: "Jogger TCe 110 de 5 plazas: motor, maletero y medidas según Dacia",
    parrafos: [
      "El TCe 110 usa un tricilíndrico turbo de 999 cm³ con inyección directa y 12 válvulas, 81 kW (110 CV) entre 5.000 y 5.250 rpm y 200 Nm entre 2.900 y 3.500 rpm. Va unido a un cambio manual. Según el folleto de Dacia Portugal, el gasto homologado es de 6,0 litros cada 100 km y las emisiones son de 136 g de CO₂ por kilómetro, las mismas que recoge ahora la ficha de arriba.",
      "La versión de cinco plazas necesita 10,5 s para llegar a 100 km/h desde parado. Su masa en vacío va de 1.193 a 1.230 kg, y el depósito es de 50 l.",
      "El maletero de la variante de cinco plazas mide 708 dm³ medidos con la norma VDA (829 l en la columna de litros) con la fila trasera en uso, y llega a 1.819 dm³ VDA (2.094 l) con los asientos abatidos. La tabla es del mercado portugués, y esas son las cifras que usa la ficha de arriba.",
      "Las cotas del folleto son 4.550 mm de largo, 2.898 mm de distancia entre ejes, 833 mm de voladizo delantero, 819 mm de voladizo trasero y 195 mm de altura libre. Con el portón abierto la altura es de 2.012 mm, la misma cifra que da la ficha española de Dacia.",
    ],
    filas: [
      { etiqueta: "Motor TCe 110", valor: "999 cm³, 3 cilindros, turbo, inyección directa; 81 kW (110 CV); 200 Nm", fuente: "Folleto Dacia PT TCe 110 5 pl., motorizaciones", url: BRO, anio: "2025" },
      { etiqueta: "Consumo y CO₂", valor: "6,0 litros cada 100 km y 136 g de CO₂ por km (WLTP)", fuente: "Folleto Dacia PT TCe 110 5 pl., consumos", url: BRO, anio: "2025" },
      { etiqueta: "Aceleración (5 plazas)", valor: "10,5 s hasta 100 km/h", fuente: "Folleto Dacia PT TCe 110 5 pl., prestaciones", url: BRO, anio: "2025" },
      { etiqueta: "Masa en vacío (TCe 110, 5 plazas)", valor: "1.193–1.230 kg", fuente: "Folleto Dacia PT TCe 110 5 pl., pesos", url: BRO, anio: "2025" },
      { etiqueta: "Maletero (5 plazas)", valor: "708 dm³ VDA (829 l) mínimo; 1.819 dm³ VDA (2.094 l) máximo", fuente: "Folleto Dacia PT TCe 110 5 pl., volúmenes", url: BRO, anio: "2025" },
      { etiqueta: "Cotas de carrocería", valor: "Largo 4.550 mm; batalla 2.898 mm; voladizos 833 mm y 819 mm; altura libre 195 mm", fuente: "Folleto Dacia PT TCe 110 5 pl., esquema de dimensiones", url: BRO, anio: "2025" },
      { etiqueta: "Altura con portón abierto", valor: "2.012 mm", fuente: "Dacia España, ficha técnica del Jogger TCe 110 Essential", url: FT, anio: "2026" },
    ],
  },
  "dacia-jogger-tce-110-7-plazas-2026-precio-ficha-tecnica": {
    titulo: "Jogger TCe 110 de 7 plazas: volúmenes de carga y pesos según Dacia",
    parrafos: [
      "En la variante de siete plazas, el folleto de Dacia Portugal recoge 160 dm³ VDA (212 l) de maletero con las tres filas ocupadas, 565 dm³ (699 l) con la tercera fila plegada y 696 dm³ (820 l) con esa fila desmontada. Con todos los asientos traseros fuera, el máximo es de 1.807 dm³ VDA (2.085 l).",
      "Con siete plazas, el TCe 110 emplea 11,2 s en alcanzar los 100 km/h, siete décimas más que la configuración de cinco. La masa en vacío es de 1.221 a 1.261 kg, y el tope de remolque con frenos coincide con el de cinco plazas, 1.200 kg.",
      "El folleto anota además 3.055 kg de peso total rodante autorizado para esta variante. Es una cifra del folleto portugués que no hemos podido contrastar con el catálogo español, y las cifras españolas pueden variar algo.",
    ],
    filas: [
      { etiqueta: "Maletero con 7 asientos", valor: "160 dm³ VDA (212 l) con 3 filas; 565 dm³ (699 l) con la 3.ª plegada; 696 dm³ (820 l) con la 3.ª desmontada", ...SRC4 },
      { etiqueta: "Maletero máximo con 7 plazas", valor: "1.807 dm³ VDA (2.085 l)", ...SRC4 },
      { etiqueta: "Aceleración (7 plazas)", valor: "11,2 s hasta 100 km/h", fuente: "Folleto Dacia PT 7 pl., prestaciones", url: BRO, anio: "2025" },
      { etiqueta: "Masa en vacío (TCe 110, 7 plazas)", valor: "1.221–1.261 kg", ...SRC5 },
      { etiqueta: "Peso total rodante autorizado", valor: "3.055 kg", ...SRC5 },
      { etiqueta: "Masa remolcable frenada (7 plazas)", valor: "1.200 kg", ...SRC5 },
    ],
  },
};
