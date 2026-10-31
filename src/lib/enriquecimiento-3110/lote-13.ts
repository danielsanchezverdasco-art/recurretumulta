// Lote 13 — Renault Captur full hybrid (catálogos de Renault España: febrero de 2026 y mayo de 2024).
import type { MapaEnriquecimiento } from "./tipos";

const C26 = "https://catalogo.renault.es/es/mobile/captur/ct_renault_captur_es_february_2026.pdf";
const C24 = "https://catalogo.renault.es/es/mobile/captur/ct_captur_ph2_es_mai_2024.pdf";
const F26 = "Renault España, catálogo del Captur (febrero de 2026), apartado de motorizaciones";
const F24 = "Renault España, catálogo del Captur (mayo de 2024), apartado de motorizaciones";

const SRC1 = { fuente: F26, url: C26, anio: "2026" };
const SRC2 = { fuente: F24, url: C24, anio: "2024" };

export const LOTE_13: MapaEnriquecimiento = {
  "renault-captur-2026-e-tech-160-precio-ficha-tecnica": {
    titulo: "Captur full hybrid de 160 CV: la tabla del catálogo de Renault",
    parrafos: [
      "El catálogo español de febrero de 2026 describe el nuevo Captur full hybrid E-Tech como una mecánica con un cuatro cilindros de 1.789 cm³ de gasolina, con 80 kW (109 CV) en el motor térmico y 116 kW (160 CV) de potencia combinada, entre 5.250 y 5.500 rpm. El par es de 170 Nm a 3.500 rpm en el térmico, más 205 Nm del eléctrico entre 0 y 1.630 rpm. La caja es automática multimodo y la batería de iones de litio tiene 1,4 kWh y 280 V.",
      "Renault anota 8,9 s de 0 a 100 km/h, 7,7 s en la recuperación de 80 a 120 km/h, 30,9 s en el kilómetro con salida parada y 180 km/h de punta. La homologación WLTP, con norma Euro 6 E bis, da de 4,4 a 4,5 l/100 km y de 99 a 100 g/km de CO₂, con un depósito de 48 litros.",
      "En masas, el catálogo da 1.366 kg en orden de marcha, 1.890 kg de máximo autorizado y 2.890 kg de peso total rodante, con 1.000 kg de remolque frenado. Es el peso en orden de marcha que figura también en la ficha de arriba. Los neumáticos disponibles van de 215/60 R17 a 225/45 R19.",
    ],
    filas: [
      { etiqueta: "Conjunto híbrido (potencia)", valor: "Térmico 80 kW (109 CV); sistema 116 kW (160 CV) entre 5.250 y 5.500 rpm", ...SRC1 },
      { etiqueta: "Pares", valor: "170 Nm del térmico a 3.500 rpm; 205 Nm del eléctrico de 0 a 1.630 rpm", ...SRC1 },
      { etiqueta: "Motor de gasolina", valor: "1.789 cm³, 4 cilindros, 16 válvulas, gasolina E10", ...SRC1 },
      { etiqueta: "Acumulador", valor: "Iones de litio, 1,4 kWh, 280 V", ...SRC1 },
      { etiqueta: "Prestaciones (Renault)", valor: "0-100 km/h en 8,9 s; 80-120 km/h en 7,7 s; 1.000 m en 30,9 s; 180 km/h", ...SRC1 },
      { etiqueta: "Homologación WLTP", valor: "4,4-4,5 l/100 km; 99-100 g/km; Euro 6 E bis; depósito de 48 l", ...SRC1 },
      { etiqueta: "Masas y remolque", valor: "En orden de marcha 1.366 kg; MMAC 1.890 kg; MTR 2.890 kg; remolque frenado 1.000 kg", ...SRC1 },
      { etiqueta: "Neumáticos disponibles", valor: "215/60 R17, 215/55 R18 y 225/45 R19", ...SRC1 },
    ],
  },
  "renault-captur-e-tech-145": {
    titulo: "Captur full hybrid de 145 CV: cifras oficiales del catálogo de 2024",
    parrafos: [
      "En su catálogo de mayo de 2024, Renault España define el Captur E-Tech full hybrid 145 como un cuatro cilindros de gasolina de 1.598 cm³ más un motor eléctrico. La potencia es de 69 kW a 5.600 rpm en el térmico y 105 kW (145 CV) acumulados, y el par es de 148 Nm entre 3.200 y 3.600 rpm, más 205 Nm del eléctrico. La caja es automática inteligente multimodo.",
      "La batería de iones de litio tiene entre 150 y 285 V y 1,26 kWh. El catálogo da 10,6 segundos en la aceleración de cero a cien, 32,6 s en 1.000 metros, 8 s en recuperaciones de 80 a 120 km/h y 170 km/h de velocidad máxima. El ciclo WLTP mixto marca de 4,6 a 4,8 l/100 km y de 105 a 108 g/km, con depósito de 48 litros y norma Euro 6.",
      "Estas son también las cifras de la ficha de arriba: 145 CV, 1,26 kWh y 1.370 kg en orden de marcha, con un máximo autorizado de 1.900 kg. El remolque frenado admite 750 kg, y el peso total rodante es de 2.650 kg.",
    ],
    filas: [
      { etiqueta: "Potencia del full hybrid 145", valor: "Térmico 69 kW a 5.600 rpm; sistema 105 kW (145 CV)", ...SRC2 },
      { etiqueta: "Pares del 145", valor: "148 Nm de 3.200 a 3.600 rpm (térmico) + 205 Nm (eléctrico)", ...SRC2 },
      { etiqueta: "Cilindrada del 145", valor: "1.598 cm³, 4 cilindros y 16 válvulas, gasolina E10", ...SRC2 },
      { etiqueta: "Batería del 145", valor: "Iones de litio, 150-285 V, 1,26 kWh", ...SRC2 },
      { etiqueta: "Rendimiento declarado (145)", valor: "10,6 s hasta los 100 km/h; 32,6 s en 1.000 m; 8 s de 80 a 120; 170 km/h", ...SRC2 },
      { etiqueta: "Consumo y CO₂ (145)", valor: "4,6-4,8 l/100 km; 105-108 g/km; Euro 6; WLTP", ...SRC2 },
      { etiqueta: "Pesos y remolque (145)", valor: "1.370 kg en orden de marcha; 1.900 kg autorizados; 2.650 kg rodantes; 750 kg remolcables", ...SRC2 },
    ],
  },
};
