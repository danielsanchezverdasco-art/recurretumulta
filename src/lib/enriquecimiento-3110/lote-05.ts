// Lote 05 — Lexus LC 500 coupé y LC 500 cabrio (31/10/2026). Hojas técnicas de Lexus Europa (2020) y dossier de prensa de Lexus UK (febrero de 2024).
import type { MapaEnriquecimiento } from "./tipos";

const LEX_EU = "https://newsroom.lexus.eu/download/924123/lcseriesspecificationsfinal.pdf";
const LEX_UK = "https://media.lexus.co.uk/wp-content/uploads/sites/3/pdf/240206-LC-Press-Pack.pdf";
const F_EU = "Lexus Europa, especificaciones de la gama LC (coupé)";
const F_EUC = "Lexus Europe, LC Series specifications, columna Convertible";
const F_UK = "Lexus UK, dossier de prensa LC (febrero de 2024)";

const SRC1 = { fuente: F_EU, url: LEX_EU, anio: "2020" };
const SRC2 = { fuente: F_UK, url: LEX_UK, anio: "2024" };
const SRC3 = { fuente: F_EUC, url: LEX_EU, anio: "2020" };

export const LOTE_05: MapaEnriquecimiento = {
  "lexus-lc-500-2024-precio-ficha-tecnica": {
    titulo: "LC 500 coupé según Lexus: dos potencias oficiales, cotas interiores y homologación",
    parrafos: [
      "La hoja técnica de Lexus Europa recoge para el LC 500 dos potencias: 351 kW (477 PS) a 7.100 rpm y 540 Nm a 4.800 rpm, o 341 kW (464 PS) y 530 Nm en los coches conformes con Euro 6d-EVAP, que llevan filtro de partículas de gasolina. El dossier de prensa de Lexus UK de febrero de 2024 solo cita la segunda: 457 bhp (341 kW) y 530 Nm. La cifra de 477 CV de la ficha de arriba es, por tanto, la de los coches sin filtro.",
      "El motor, el 2UR-GSE, es un V8 atmosférico de 4.969 cc con 32 válvulas, inyección D-4S y relación de compresión de 12,3:1. Pide gasolina de 98 octanos o más. Va unido a una caja automática de diez marchas, con la primera en 4,923 y la décima en 0,598, y a un diferencial trasero de 2,937. Lexus UK da 4,7 s de 0 a 62 mph y 168 mph de punta, cifras que equivalen a los 270 km/h de la hoja europea.",
      "Sobre la homologación, la hoja europea marca 11,55 l/100 km y 262,31 g/km de CO₂ en ciclo WLTP, y 11,60 l/100 km y 265,30 g/km en NEDC. El dossier británico redondea esos 262 g/km. El depósito es de 82 litros y el maletero de 197 litros según VDA. La masa en vacío oscila entre 1.930 y 1.965 kg y la autorizada es de 2.375 kg.",
      "Las cotas exteriores son 4.770 mm de largo, 1.345 mm de alto y 2.870 mm de batalla. La anchura es de 1.920 mm sin retrovisores y de 2.168 mm con ellos, y la vía es de 1.630 mm delante y 1.635 mm detrás. En el habitáculo, la altura efectiva sobre la cabeza es de 943,8 mm delante y 818,2 mm detrás, con 933,4 mm delante si lleva techo de fibra de carbono; el espacio para las piernas es de 1.066,9 mm y 825,7 mm. La altura libre mínima al suelo es de 133 mm y el coeficiente de arrastre de 0,33.",
    ],
    filas: [
      { etiqueta: "Motor", valor: "V8 2UR-GSE de 4.969 cc, 32 válvulas, D-4S; compresión 12,3:1; gasolina de 98 octanos o más", ...SRC1 },
      { etiqueta: "Potencia y par", valor: "351 kW (477 PS) y 540 Nm; con filtro de partículas, 341 kW (464 PS) y 530 Nm", ...SRC1 },
      { etiqueta: "Potencia (UK)", valor: "457 bhp / 341 kW a 7.100 rpm; 530 Nm a 4.800 rpm", ...SRC2 },
      { etiqueta: "Prestaciones", valor: "0–100 km/h en 4,7 s; 270 km/h (medidos por Toyota)", ...SRC1 },
      { etiqueta: "Consumo y CO₂", valor: "WLTP: 11,55 l/100 km, 262,31 g/km; NEDC: 11,60 l/100 km, 265,30 g/km", ...SRC1 },
      { etiqueta: "Dimensiones", valor: "4.770 × 1.920 (2.168 con retrovisores) × 1.345 mm; batalla 2.870 mm; Cd 0,33", ...SRC2 },
      { etiqueta: "Masas, maletero y depósito", valor: "Vacío 1.930–1.965 kg; autorizada 2.375 kg; maletero 197 l VDA; depósito 82 l", ...SRC1 },
      { etiqueta: "Altura efectiva a la cabeza", valor: "943,8 mm delante (933,4 con techo de carbono) y 818,2 mm detrás", ...SRC1 },
    ],
  },
  "lexus-lc-500-cabrio-2025-precio-ficha-tecnica": {
    titulo: "LC 500 cabrio según Lexus: diferencias de peso, maletero y espacio frente al coupé",
    parrafos: [
      "La hoja técnica de Lexus Europa incluye una columna propia para el LC 500 Convertible. Comparte con el coupé el V8 de 4.969 cc, con 477 PS (351 kW) y 540 Nm de par, o 464 PS (341 kW) y 530 Nm si lleva filtro de partículas, y también la caja de diez marchas. Lexus anuncia 270 km/h de punta y cinco segundos justos para pasar de parado a 100 km/h, tres décimas más que el coupé, que declara 4,7 s.",
      "La capota se paga en la báscula: la masa en vacío va de 2.035 a 2.055 kg, unos 105 kg más que los 1.930 a 1.965 kg del coupé, y la masa autorizada sube a 2.450 kg. El maletero se queda en 149 litros VDA, frente a 197 en el coupé, y el depósito sigue siendo de 82 litros. La altura es de 1.350 mm, cinco más que la del cerrado, y la altura libre mínima de 131 mm.",
      "En homologación, el cabrio marca 11,72 l/100 km y 275,17 g/km de CO₂ en WLTP, y 12,63 l/100 km y 288,32 g/km en NEDC. El coeficiente de arrastre es de 0,33 con llantas de aleación fundida y de 0,34 con las forjadas. Los neumáticos son 245/45 RF20 delante y 275/40 RF20 detrás, o 245/40 RF21 y 275/35 RF21 con las llantas forjadas de 21 pulgadas.",
      "Detrás se pierde sitio: la distancia entre filas es de 704 mm, frente a 850 mm en el coupé, y las plazas traseras ofrecen 712,2 mm para las piernas, frente a 825,7 mm. La altura efectiva delante es de 932,8 mm y detrás de 814,6 mm, con anchos de hombros de 1.438,6 mm y 1.172,4 mm. La hoja es de 2020 y el modelo ha cambiado desde entonces, así que conviene confirmar con el concesionario.",
    ],
    filas: [
      { etiqueta: "Motor", valor: "V8 de 4.969 cc, igual que el coupé; 477 PS y 540 Nm, o 464 PS y 530 Nm con filtro de partículas", ...SRC3 },
      { etiqueta: "Prestaciones", valor: "Hasta 100 km/h en 5,0 s; techo de 270 km/h", ...SRC3 },
      { etiqueta: "Masas", valor: "Vacío 2.035–2.055 kg; autorizada 2.450 kg", ...SRC3 },
      { etiqueta: "Maletero y altura", valor: "149 l VDA; altura 1.350 mm; altura libre mínima 131 mm", ...SRC3 },
      { etiqueta: "Consumo y CO₂", valor: "WLTP: 11,72 l/100 km, 275,17 g/km; NEDC: 12,63 l/100 km, 288,32 g/km", ...SRC3 },
      { etiqueta: "Coeficiente de arrastre", valor: "0,33 con llantas fundidas; 0,34 con llantas forjadas", ...SRC3 },
      { etiqueta: "Espacio trasero", valor: "Piernas 712,2 mm; altura efectiva 814,6 mm; distancia entre filas 704 mm", ...SRC3 },
      { etiqueta: "Neumáticos", valor: "245/45 RF20 y 275/40 RF20 (de serie); 245/40 RF21 y 275/35 RF21 (opcional)", ...SRC3 },
    ],
  },
};
