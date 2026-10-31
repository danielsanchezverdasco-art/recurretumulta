// Lote 01 — enriquecimiento con datos reales y fuente (31/10/2026). Prioridad por impresiones.
import type { MapaEnriquecimiento } from "./tipos";

const SK_TD = "https://cdn.skoda-storyboard.com/2024/04/TD_Kodiaq_PHEV_EN_ca44c6d3.pdf";
const SK_PK = "https://www.skoda-storyboard.com/en/press-kits/skoda-kodiaq-press-kit/powertrains-more-efficient-than-ever-with-plug-in-and-mild-hybrid-technology-a-first-for-the-kodiaq/";
const SK_AT = "https://www.skoda.at/kodiaq/kodiaq-iv";
const SK_LK = "https://www.skoda-storyboard.com/en/press-releases/skoda-kodiaq-range-expands-with-new-laurin-klement-trimand-200-kw-plug-in-hybrid-powertrain/";
const SK_DE = "https://www.skoda-media.de/press/detail/4691/";
const NC_KOD = "https://www.euroncap.com/assessments/skoda/kodiaq/1074/";

const XP_SPEC = "https://a-cdn.heyxpeng.com/www/public/static/pdf/NL-P7-Specsheet-min.15be9c8b.pdf";
const XP_PR23 = "https://www.xpeng.com/news/0186161f6fd585aab2752c9e85ce02f4";
const NC_P7 = "https://www.euroncap.com/assessments/xpeng/p7/1034/";
const NC_P7_PR = "https://www.euroncap.com/press-media/chinese-manufacturers-create-waves-in-the-european-market/";
const XP_NCAP = "https://www.xpeng.com/news/018b6ab42ecd8a694f052c9e8c4e0439";
const ADAC_P7 = "https://www.adac.de/rund-ums-fahrzeug/autokatalog/marken-modelle/xpeng/p7/1generation/329598/";

const MX_CN = "https://cnevpost.com/2026/08/05/maextro-launches-v680-v800-mpvs/";
const MX_CNC = "https://carnewschina.com/2026/08/05/huaweis-maextro-takes-on-toyota-alphard-with-1-million-yuan-v800-mpv/";

const SRC1 = { fuente: "Škoda, ficha técnica Kodiaq iV", url: SK_TD, anio: "2024" };
const SRC2 = { fuente: "Škoda Storyboard, dossier de motores", url: SK_PK, anio: "2024" };
const SRC3 = { fuente: "XPeng, hoja de especificaciones Europa", url: XP_SPEC, anio: "sin fecha en el PDF" };
const SRC4 = { fuente: "CnEVPost, citando a Maextro", url: MX_CN, anio: "2026" };
const SRC5 = { fuente: "CarNewsChina", url: MX_CNC, anio: "2026" };

export const LOTE_01: MapaEnriquecimiento = {
  "skoda-kodiaq-iv-hibrido-enchufable-2026-precio-ficha-tecnica": {
    titulo: "Datos verificados del Kodiaq iV con fuente",
    parrafos: [
      "Škoda presentó el 8 de abril de 2024 el Kodiaq iV como el primer Kodiaq con tecnología híbrida enchufable. Un motor 1.5 TSI de 110 kW trabaja junto a un eléctrico de 85 kW integrado en el cambio DSG de seis marchas y mueve solo las ruedas delanteras con 150 kW (204 CV) y 350 Nm de potencia y par de sistema.",
      "La autonomía eléctrica depende de la versión. La nota de prensa de Škoda habla de «más de 100 km» en ciclo WLTP, su web austriaca publica una horquilla de 91 a 121 km y la ficha técnica de la variante Selection recoge de 109 a 125 km. Los 121 km de la ficha superior son por tanto el extremo alto de la horquilla de la web de la marca, no una cifra válida para todos los acabados.",
      "En carga, la marca anuncia 11 kW en corriente alterna, con 2 h 30 min para pasar del 0 al 100 %, y hasta 50 kW en continua. Un asterisco de Škoda aclara que el valor relevante para el cliente, medido según DIN 70080, es de 40 kW, con 26 minutos para ir del 10 al 80 % en la ficha técnica y 25 minutos en la nota de prensa.",
      "El peso que da Škoda en su ficha técnica incluye al conductor, con 75 kg, y va de 1.917 a 2.087 kg según equipamiento. La batería de 25,7 kWh brutos pesa 173 kg, y el depósito de gasolina es de 45 litros.",
      "Euro NCAP publicó la calificación del Kodiaq el 9 de julio de 2024. El coche ensayado fue un 2.0 TDI Selection de 1.928 kg, y el organismo comprobó después mediante pruebas adicionales que la nota de cinco estrellas también vale para el 1.5 TSI iV de tracción 4x2. Bajo la regla de seis años de vigencia de Euro NCAP, esta calificación sigue en vigor hasta finales de 2030.",
      "El 22 de octubre de 2026 Škoda anunció un Kodiaq plug-in de 200 kW (272 CV) para el acabado Laurin & Klement, con un 1.5 TSI de 130 kW, el mismo motor eléctrico de 85 kW y el mismo paquete de baterías, de 25,7 kWh en bruto y 19,7 kWh netos. Los consumos oficiales de esa versión se publicarán cuando termine su homologación; la de 150 kW sigue a la venta, y en Alemania Škoda le da de 14,1 a 14,5 kWh/100 km de consumo eléctrico ponderado y de 35 a 40 g/km de CO₂.",
    ],
    filas: [
      { etiqueta: "Motor de gasolina", valor: "1.5 TSI, 4 cilindros, 1.498 cm³, 110 kW a 5.000–6.000 rpm, 250 Nm", ...SRC1 },
      { etiqueta: "Motor eléctrico", valor: "85 kW y 330 Nm; sistema combinado de 150 kW y 350 Nm", ...SRC1 },
      { etiqueta: "Transmisión", valor: "DSG automático de 6 marchas, tracción delantera", ...SRC2 },
      { etiqueta: "Batería", valor: "25,7 kWh brutos, 173 kg", ...SRC2 },
      { etiqueta: "Autonomía eléctrica WLTP", valor: "Más de 100 km (nota de prensa); 91–121 km (web de Škoda Austria); 109–125 km (versión Selection)", fuente: "Škoda Austria", url: SK_AT, anio: "2026" },
      { etiqueta: "Consumo eléctrico WLTP", valor: "17,2–20,5 kWh/100 km con batería cargada; 0,4–0,5 l/100 km y 9–12 g/km de CO₂", ...SRC1 },
      { etiqueta: "Carga rápida CC", valor: "Hasta 50 kW; valor para el cliente 40 kW, del 10 al 80 % en 26 min", ...SRC1 },
      { etiqueta: "Dimensiones", valor: "4.758 × 1.864 × 1.656 mm (altura en orden de marcha), batalla 2.791 mm", ...SRC1 },
      { etiqueta: "Maletero", valor: "745 l hasta la bandeja; 1.945 l con los asientos traseros abatidos", ...SRC1 },
      { etiqueta: "Masa del coche con conductor", valor: "1.917–2.087 kg con conductor de 75 kg; masa máxima 2.432 kg", ...SRC1 },
      { etiqueta: "Remolque", valor: "1.800 kg con freno, 750 kg sin freno; carga sobre el techo 75 kg", ...SRC1 },
      { etiqueta: "Aerodinámica y giro", valor: "Cx de 0,295 a 0,323; diámetro de giro 11,2 m", ...SRC1 },
      { etiqueta: "Euro NCAP", valor: "5 estrellas: adulto 89 % (35,7 pts), niño 83 % (40,9 pts), usuarios vulnerables 82 % (51,7 pts), asistencias 78 % (14,2 pts)", fuente: "Euro NCAP, Škoda Kodiaq", url: NC_KOD, anio: "2024" },
      { etiqueta: "Nuevo PHEV 200 kW", valor: "272 CV con 1.5 TSI de 130 kW; batería 25,7 kWh brutos (19,7 netos); carga CC hasta 50 kW", fuente: "Škoda Storyboard, 22/10/2026", url: SK_LK, anio: "2026" },
      { etiqueta: "Consumo de la versión de 150 kW (Alemania)", valor: "1,5–1,8 l/100 km y 14,1–14,5 kWh/100 km ponderados; 5,7–6,1 l/100 km con la batería descargada", fuente: "Škoda Medien Alemania", url: SK_DE, anio: "2026" },
    ],
  },

  "xpeng-p7-2024-precio-ficha-tecnica": {
    titulo: "Datos verificados del XPeng P7 con fuente",
    parrafos: [
      "XPeng presentó el P7 para Europa el 3 de febrero de 2023 en el eCar Expo de Estocolmo y abrió los pedidos en Dinamarca, Noruega, Países Bajos y Suecia. La marca declaró entonces que el coche estaba diseñado para cumplir la homologación europea WVTA y la exigencia de cinco estrellas de Euro NCAP.",
      "El Euro NCAP publicó el 25 de octubre de 2023 los resultados del P7, ensayado en versión eléctrica de 80 kW, volante a la izquierda y 2.020 kg. Obtuvo 35,0 puntos en protección de adultos (87 %), 81 % en niños, 81 % en usuarios vulnerables y 78 % en asistencias, y la calificación se aplica a todos los P7.",
      "El informe señala tres puntos débiles. El pecho del conductor recibió valoración «marginal» en los choques frontales, el control del desplazamiento lateral en un impacto por el lado contrario fue «marginal», y Euro NCAP destaca que el P7 carecía entonces de detección de niños olvidados en el coche.",
      "La hoja de especificaciones europea de XPeng cubre datos que la ficha superior ya recoge. El P7 mide 4.888 mm de largo, 1.896 mm de ancho y 1.450 mm de alto, con 2.998 mm de distancia entre ejes, 440 litros de maletero y 2.020 kg en vacío en la versión RWD Long Range. La distancia de frenado de 100 a 0 km/h es de 33 metros y el coeficiente aerodinámico, de 0,236.",
      "La gama europea tenía tres versiones. La RWD Long Range ofrece 203 kW (276 CV), 440 Nm, 576 km WLTP y 16,8 kWh/100 km. La AWD Performance y la Wing Edition, esta última con puertas de apertura tipo tijera, suben a 348 kW (473 CV), 757 Nm, 505 km WLTP y una aceleración hasta los 100 km/h en 4,1 s, y un gasto de 19,2 kWh/100 km.",
      "En la hoja de Países Bajos los precios de lista eran 49.990 €, 59.990 € y 69.990 € respectivamente; no son tarifas de España. El ADAC cataloga la serie P7 como producida de mayo de 2024 a enero de 2026, con arquitectura de 400 V, y da 545 kg a la batería de la versión de tracción total.",
    ],
    filas: [
      { etiqueta: "Dimensiones", valor: "4.888 × 1.896 × 1.450 mm; batalla 2.998 mm; vías 1.615/1.621 mm", ...SRC3 },
      { etiqueta: "Maletero", valor: "440 l", ...SRC3 },
      { etiqueta: "Peso en vacío", valor: "2.020 kg (RWD LR), 2.140 kg (AWD), 2.180 kg (Wing Edition); carga máxima 430/420 kg", ...SRC3 },
      { etiqueta: "Motor RWD Long Range", valor: "Síncrono de imanes permanentes, 203 kW (276 CV), 440 Nm, 200 km/h", ...SRC3 },
      { etiqueta: "Batería", valor: "NCM, 86,2 kWh brutos y 82,7 kWh netos", ...SRC3 },
      { etiqueta: "Autonomía y consumo", valor: "RWD LR: 576 km WLTP, 16,8 kWh/100 km; AWD: 505 km, 19,2 kWh/100 km", ...SRC3 },
      { etiqueta: "Carga", valor: "CA 11 kW trifásica, 0–100 % en ≥10 h; CC hasta 175 kW, 10–80 % en ≥29 min; conector CCS2", ...SRC3 },
      { etiqueta: "0–100 km/h", valor: "RWD LR 6,7 s; AWD y Wing Edition 4,1 s", ...SRC3 },
      { etiqueta: "Lanzamiento en Europa", valor: "3/2/2023, pedidos en DK, NO, NL y SE; Cx 0,236; 175 kW y 576 km WLTP", fuente: "XPeng, nota de prensa", url: XP_PR23, anio: "2023" },
      { etiqueta: "Euro NCAP", valor: "5 estrellas: adulto 87 % (35,0 pts), niño 81 %, vulnerables 81 % (51,5 pts), asistencias 78 %", fuente: "Euro NCAP, XPENG P7", url: NC_P7, anio: "2023" },
      { etiqueta: "Detección de niños olvidados", valor: "Sin esta función cuando se hizo la prueba", fuente: "Euro NCAP, nota de prensa 25/10/2023", url: NC_P7_PR, anio: "2023" },
      { etiqueta: "Seguridad de serie", valor: "XPILOT Safety con 14 funciones activas, frenada tras impacto y AEB", fuente: "XPeng, nota sobre Euro NCAP", url: XP_NCAP, anio: "2023" },
      { etiqueta: "Precios de lista en Países Bajos", valor: "49.990 € / 59.990 € / 69.990 € (RWD LR / AWD / Wing Edition)", fuente: "XPeng, hoja de especificaciones Países Bajos", url: XP_SPEC, anio: "sin fecha en el documento" },
      { etiqueta: "Producción y batería (AWD)", valor: "Serie P7A/P7B de 05/2024 a 01/2026; batería de 545 kg; 400 V; 68 dB", fuente: "ADAC, Autokatalog", url: ADAC_P7, anio: "2026" },
    ],
  },

  "maextro-v800-huawei-precio-ficha-tecnica": {
    titulo: "Datos verificados del Maextro V800 con fuente",
    parrafos: [
      "Maextro lanzó el V800 en China el 5 de agosto de 2026, tras abrir la preventa a finales de junio. En China hay tres acabados: el Premium cuesta 766.000 yuanes, el Executive 866.000 y el Flagship 1,016 millones. Esos precios quedaron por debajo de la horquilla de preventa, que iba de 800.000 a 1,2 millones.",
      "Los datos de lanzamiento fijan varios puntos de la ficha superior. El V800 tiene siete plazas, distribuidas 2+2+3. Mide 5.495 mm de largo, 2.006 mm de ancho y 1.850 mm de alto con 3.430 mm entre ejes, y su autonomía eléctrica es de 340 km en ciclo chino CLTC para la versión Premium y 330 km para las otras dos, una medición más optimista que la WLTP europea.",
      "El tren motriz combina un 1.5 turbo de 127 kW que actúa como generador con dos motores eléctricos de 160 kW delante y 230 kW detrás, 390 kW en total (523 CV) y 208 + 396 Nm. La batería es de 65 kWh, de química ternaria y suministrada, según CarNewsChina, por CATL; trabaja a 800 V y admite carga 6C, con 10,5 minutos para pasar del 10 al 80 %.",
      "Con la batería y el depósito llenos, la autonomía combinada CLTC llega a 1.335 km en la Premium y de 1.300 km en las otras dos. El 0 a 100 km/h se anuncia en 5,7 s para las tres, y una punta de 200 km/h, que sube a 210 km/h en la Flagship.",
      "El peso en vacío declarado es de 3.120 kg para la Premium y de 3.190 kg para la Flagship. La dirección en las ruedas traseras gira hasta 12 grados y logra un círculo de giro de 5,4 metros de radio; el maletero pasa de 758 a 1.926 litros al plegar la tercera fila.",
      "Equipa el sistema de ayuda a la conducción Qiankun ADS 5 de Huawei con 40 sensores, entre ellos seis lidar, y una arquitectura preparada para conducción de nivel 3 sujeta a la aprobación regulatoria. Maextro lo posiciona frente al Toyota Alphard y al Lexus LM, y CarNewsChina apunta que mide 490 mm más que el Alphard. Las fuentes consultadas solo hablan del mercado chino: no hay precio ni homologación para España.",
    ],
    filas: [
      { etiqueta: "Lanzamiento y precios en China", valor: "5/8/2026: 766.000 / 866.000 / 1.016.000 yuanes (Premium / Executive / Flagship)", ...SRC4 },
      { etiqueta: "Plazas", valor: "7 (2+2+3)", ...SRC4 },
      { etiqueta: "Dimensiones", valor: "5.495 × 2.006 × 1.850 mm; batalla 3.430 mm", ...SRC4 },
      { etiqueta: "Peso en vacío", valor: "3.120 kg (Premium) y 3.190 kg (Flagship)", ...SRC4 },
      { etiqueta: "Motor de gasolina (generador)", valor: "1.5 turbo, 127 kW; depósito de 62 l", ...SRC4 },
      { etiqueta: "Motores eléctricos", valor: "160 kW delante + 230 kW detrás; 208 + 396 Nm; total 390 kW (523 CV)", ...SRC5 },
      { etiqueta: "Batería", valor: "65 kWh ternaria (NMC), de CATL; 800 V; recarga 6C de 10 a 80 % en 10,5 min", ...SRC5 },
      { etiqueta: "Autonomía CLTC", valor: "340 km eléctricos y 1.335 km combinados (Premium); 330 y 1.300 km (Executive y Flagship). CLTC no equivale a WLTP", ...SRC4 },
      { etiqueta: "Prestaciones", valor: "0–100 km/h en 5,7 s; máxima 200 km/h (210 km/h en la Flagship)", ...SRC4 },
      { etiqueta: "Maletero", valor: "758 l con tres filas; 1.926 l con la tercera plegada", ...SRC5 },
      { etiqueta: "Dirección y giro", valor: "Eje trasero direccional de ±12°; radio de giro 5,4 m", ...SRC4 },
      { etiqueta: "Conducción asistida", valor: "Qiankun ADS 5 de Huawei, 40 sensores y 6 lidar", ...SRC4 },
    ],
  },
};
