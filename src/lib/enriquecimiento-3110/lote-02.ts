// Lote 02 — Renault Austral y Dacia Bigster (31/10/2026). Datos de fabricante y Euro NCAP, cada fila con fuente y año.
import type { MapaEnriquecimiento } from "./tipos";

const RN_UK = "https://www.renault.co.uk/hybrid-cars/austral-hhn-ph1/specifications.html";
const NC_AUS = "https://www.euroncap.com/assessments/renault/austral/0943/";

const DA_PDF = "https://media.dacia.com/wp-content/uploads/2025/04/b3e0c681657af5e1839ccc4fc06c962d.pdf";
const NC_BIG = "https://www.euroncap.com/assessments/dacia/bigster/1144/";
const NC_BIG_N = "https://news.euroncap.com/images/dacia-bigster---euro-ncap-2024-results---3-stars/s/b34fb983-368d-41ed-84fa-1e49ed6ddae9";

const SRC1 = { fuente: "Renault UK, especificaciones", url: RN_UK, anio: "2025" };
const SRC2 = { fuente: "Euro NCAP, Renault Austral", url: NC_AUS, anio: "2022" };
const SRC3 = { fuente: "Dacia, características técnicas Bigster", url: DA_PDF, anio: "2025" };

export const LOTE_02: MapaEnriquecimiento = {
  "renault-austral-2024-precio-ficha-tecnica": {
    titulo: "Datos del Austral E-Tech con fuente: medidas, maletero y ensayo de seguridad",
    parrafos: [
      "La web británica de Renault describe el Austral full hybrid E-Tech 200 con un motor 1.2 de tres cilindros y 1.199 cc con turbo e inyección directa, unido a dos motores eléctricos y a una caja de cuatro marchas más dos de apoyo. Declara 146 kW (200 CV) y 205 Nm, tracción delantera, 108 g/km de CO₂ en ciclo WLTP, 111 mph de punta y 8,4 s de 0 a 62 mph. Son cifras de la versión para el mercado del Reino Unido, así que pueden diferir de las españolas.",
      "En medidas, esa misma ficha da 4.533 mm de largo, 1.843 mm de ancho con los retrovisores plegados y 1.621 mm de alto sin barras, 1.645 mm con ellas, sobre una distancia entre ejes de 2.667 mm. La altura libre al suelo es de 180 mm, el diámetro de giro entre aceras de 11,4 m y el depósito de 55 litros. El maletero cubre de 527 a 657 litros en función de dónde se coloque la banqueta corredera y llega a 1.525 litros con ella abatida.",
      "El peso en vacío sin conductor es de 1.543 kg, la masa máxima autorizada de 2.090 kg y la carga útil, conductor incluido, de 529 kg. Puede arrastrar 1.500 kg con freno y 750 kg sin él. Esa tabla británica difiere de la cifra de 1.592 kg y de los 4.510 mm que aparecen en la ficha de arriba, por lo que conviene contrastar con el configurador español antes de comprar.",
      "Euro NCAP publicó el Austral el 16 de noviembre de 2022 y añadió la variante híbrida el 12 de mayo de 2023, de modo que su calificación cubre también el E-Tech. Ensayó un 1.3 TCe de 1.502 kg y puntuó 88 % en adultos, 83 % en niños, 69 % en peatones y ciclistas y 87 % en ayudas a la conducción. El organismo valoró como «marginal» el pecho de quien va al volante en el choque frontal desfasado y el del pasajero trasero en el de ancho completo.",
      "En el apartado infantil, el Austral sumó 23,5 de 24 puntos en el ensayo con muñecos de 6 y 10 años y 11,3 de 12 en la prueba de instalación de sillas, aunque el manual prohíbe las sillas universales en la plaza central trasera. Entre las asistencias, el frenado automático de emergencia obtuvo 5,5 de 6 puntos frente a otros coches y el mantenimiento de carril 3 de 4. La protección de la pelvis de los peatones fue desigual y se midió con 2,7 puntos en ese apartado.",
    ],
    filas: [
      { etiqueta: "Motor", valor: "1.2 turbo de 3 cilindros (1.199 cc) + 2 motores eléctricos; 146 kW (200 CV); 205 Nm; caja automática", fuente: "Renault UK, especificaciones Austral full hybrid E-Tech 200", url: RN_UK, anio: "2025" },
      { etiqueta: "Dimensiones", valor: "4.533 × 1.843 × 1.621 mm; batalla 2.667 mm; altura libre 180 mm", ...SRC1 },
      { etiqueta: "Maletero", valor: "527–657 l (mínimo) y 1.525 l (máximo)", ...SRC1 },
      { etiqueta: "Pesos", valor: "En vacío 1.543 kg; MMA 2.090 kg; carga útil 529 kg; conjunto 3.690 kg", ...SRC1 },
      { etiqueta: "Remolque", valor: "1.500 kg con freno; 750 kg sin freno", ...SRC1 },
      { etiqueta: "Depósito y giro", valor: "55 l; 11,4 m entre aceras", ...SRC1 },
      { etiqueta: "Euro NCAP", valor: "Adulto 88 %, niño 83 %, vulnerables 69 %, asistencias 87 %; ensayado con 1.3 TCe de 1.502 kg", ...SRC2 },
      { etiqueta: "Euro NCAP, desglose", valor: "Frontal 13,3/16; lateral 16/16; trasero 3,3/4; rescate 1/2", ...SRC2 },
      { etiqueta: "Euro NCAP, variantes cubiertas", valor: "E-Tech hybrid, 1.3 TCe 117 kW, 1.3 TCe 103 kW y 1.2 TCe 96 kW (4x2, volante a la izquierda)", fuente: "Euro NCAP, Renault Austral", url: NC_AUS, anio: "2023" },
    ],
  },
  "dacia-bigster-2025-precio-ficha-tecnica": {
    titulo: "Datos del Bigster mild hybrid 140 con fuente: ficha de Dacia y Euro NCAP",
    parrafos: [
      "La tabla técnica oficial de Dacia para el Bigster da para el mild hybrid 140 una potencia de 103 kW (140 CV) a 5.500 rpm y 230 Nm a 2.100 rpm. El motor es un tres cilindros de 1.199 cc con inyección directa y una caja manual de seis velocidades, con un pequeño acumulador de 48 V que guarda 0,84 kWh (química litio-ion). Hasta 100 km/h tarda 9,8 s y su techo de velocidad está en 180 km/h; el consumo declarado va de 5,4 a 5,5 litros por cada 100 km y las emisiones de 122 a 124 g/km de CO₂ medidas por WLTP.",
      "Esa misma tabla fija un par de datos de la ficha de arriba. Sin barras de techo el coche mide 1.662 mm de alto, y con barras longitudinales sube a 1.712 mm. El peso máximo en vacío del 140 de tracción delantera es de 1.439 kg. La longitud es de 4.570 mm, la batalla de 2.702 mm, el ancho de 1.813 mm sin retrovisores y de 2.069 mm con ellos desplegados.",
      "El maletero mide 667 dm³ según la norma VDA bajo la bandeja con kit de reparación, equivalentes a 702 litros por ISO 3832, y 1.937 dm³ (2.002 litros) con la banqueta abatida. Con rueda de repuesto baja a 624 dm³ y 1.894 dm³. La altura libre al suelo es de 220 mm, el depósito de 50 litros y el diámetro de giro de 10,97 m. La carga útil va de 451 a 540 kg y el remolque con freno admite 1.500 kg.",
      "Euro NCAP publicó el Bigster el 21 de mayo de 2025 con tres estrellas: 69 % en adultos (27,7 puntos), 85 % en niños, 60 % en usuarios vulnerables y 57 % en asistencias. El coche ensayado fue un 1.8 HEV de 1.513 kg, y la calificación se extiende al 1.2 mild hybrid 140 de tracción delantera y total. Es el resultado que recoge el apartado de seguridad de esta ficha.",
      "El informe es duro con el pecho del conductor, valorado como «débil» en el choque frontal, y como «marginal» en el de ancho completo para conductor y pasajero trasero. La protección ante el lado contrario fue «pobre» porque el Bigster no lleva contramedida contra el choque cabeza con cabeza. Los niños obtuvieron 24 de 24 puntos en los ensayos, pero no hay detector de niños olvidados. En asistencias, el aviso de cinturón trasero no puntuó por falta de detección de ocupantes.",
    ],
    filas: [
      { etiqueta: "Motor mild hybrid 140", valor: "1.199 cc, 3 cilindros, 103 kW (140 CV) a 5.500 rpm, 230 Nm a 2.100 rpm; caja manual de seis velocidades", ...SRC3 },
      { etiqueta: "Batería", valor: "Iones de litio; 48 V; 0,84 kWh de capacidad", ...SRC3 },
      { etiqueta: "Prestaciones", valor: "9,8 s para llegar a 100 km/h; tope de 180 km/h", ...SRC3 },
      { etiqueta: "Consumo y CO₂", valor: "5,4–5,5 l/100 km; 122–124 g/km (WLTP)", ...SRC3 },
      { etiqueta: "Dimensiones", valor: "4.570 × 1.813 × 1.662 mm (1.712 con barras); batalla 2.702 mm; altura libre 220 mm", ...SRC3 },
      { etiqueta: "Maletero", valor: "667 dm³ VDA (702 l ISO 3832) y 1.937 dm³ (2.002 l) abatido; con rueda de repuesto 624 y 1.894 dm³", ...SRC3 },
      { etiqueta: "Pesos", valor: "En vacío máximo 1.439 kg; carga útil 451–540 kg; remolque: 1.500 kg frenado, 710 kg sin frenos", ...SRC3 },
      { etiqueta: "Depósito y giro", valor: "50 l de gasolina; giro de 10,97 m entre aceras", ...SRC3 },
      { etiqueta: "Euro NCAP", valor: "3 estrellas: adulto 69 % (27,7/40), niño 85 % (42/49), vulnerables 60 %, asistencias 57 %", fuente: "Euro NCAP, Dacia Bigster y nota de prensa", url: NC_BIG_N, anio: "2025" },
      { etiqueta: "Euro NCAP, ensayo", valor: "1.8 HEV de 1.513 kg; aplica a 1.2 mild hybrid 140 (4x2 y 4x4) y 1.8 hybrid 155; publicado el 21/05/2025", fuente: "Euro NCAP, Dacia Bigster", url: NC_BIG, anio: "2025" },
    ],
  },
};
