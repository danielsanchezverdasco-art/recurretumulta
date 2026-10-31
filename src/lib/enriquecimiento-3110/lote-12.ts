// Lote 12 — Xiaomi SU7 / SU7 Pro / SU7 Max (tabla oficial de la marca de marzo 2024; China; CLTC).
import type { MapaEnriquecimiento } from "./tipos";

const XM = "https://web.archive.org/web/20240329062834/https://www.xiaomiev.com/car-config";
const XM_F1 = "Xiaomi Auto, tabla de configuración del SU7 estándar (Wayback Machine, 29/03/2024)";
const XM_F2 = "Xiaomi Auto, columna Pro en el archivo web del 29 de marzo de 2024";
const XM_F3 = "Xiaomi Auto, apartado Max según la captura archivada (29-03-2024)";

const SRC1 = { fuente: XM_F1, url: XM, anio: "2024" };
const SRC2 = { fuente: XM_F2, url: XM, anio: "2024" };
const SRC3 = { fuente: XM_F3, url: XM, anio: "2024" };

export const LOTE_12: MapaEnriquecimiento = {
  "xiaomi-su7-2026-precio-ficha-tecnica": {
    titulo: "SU7 de acceso: lo que dice el cuadro oficial de Xiaomi",
    parrafos: [
      "El cuadro de parámetros que Xiaomi Auto publicó en marzo de 2024 para el mercado chino describe el SU7 de acceso con un único motor trasero síncrono de imanes permanentes, de 220 kW (299 PS) y 400 Nm, y con una batería de 73,6 kWh de química LFP (la «Blade» de FinDreams, la filial de BYD). El precio de lanzamiento fue de 215.900 yuanes, y la autonomía anunciada es de 700 km en ciclo chino CLTC, un ciclo menos exigente que el homologado en Europa (WLTP).",
      "Las medidas oficiales son 4.997 mm de largo, 1.963 mm de ancho, 1.455 mm de alto y 3.000 mm entre ejes, con un diámetro mínimo de giro de 5,7 m y un coeficiente aerodinámico de 0,195. El maletero trasero cubre 517 litros y hay un segundo hueco delantero de 105 litros. Xiaomi declara 5,28 s de 0 a 100 km/h, 210 km/h de punta y una recarga de 10 a 80 % en 25 minutos con sus cargadores propios.",
      "En el chasis, la suspensión delantera es de doble horquilla y la trasera de cinco brazos, con discos ventilados en los dos ejes y neumáticos Michelin e·Primacy 245/45 R19 de serie. El propio cuadro avisa de que los 700 km bajan a 628 km con la goma opcional de 20 pulgadas Pilot Sport EV. El cuadro no publica la masa del coche, así que los 2.055 kg de la ficha de arriba no se pueden contrastar con esta fuente y se dejan como dato no oficial.",
    ],
    filas: [
      { etiqueta: "Motor trasero", valor: "220 kW (299 PS); par de 400 Nm; síncrono de imanes permanentes", ...SRC1 },
      { etiqueta: "Batería de acceso", valor: "73,6 kWh LFP, celdas «Blade» de FinDreams (BYD)", ...SRC1 },
      { etiqueta: "Autonomía anunciada (CLTC)", valor: "700 km con Michelin e·Primacy; 628 km con el neumático Pilot Sport EV de 20\"", ...SRC1 },
      { etiqueta: "Aceleración y punta", valor: "0–100 km/h: 5,28 s; punta de 210 km/h", ...SRC1 },
      { etiqueta: "Recarga rápida (10-80 %)", valor: "25 min en cargador propio de Xiaomi, a temperatura ambiente", ...SRC1 },
      { etiqueta: "Medidas y giro", valor: "4.997 × 1.963 × 1.455 mm; batalla de 3.000 mm; giro mínimo de 5,7 m; Cd 0,195", ...SRC1 },
      { etiqueta: "Capacidad de carga", valor: "Maletero 517 L; hueco delantero 105 L", ...SRC1 },
      { etiqueta: "Suspensión y neumáticos", valor: "Doble horquilla delante; cinco brazos detrás; 245/45 R19 de serie", ...SRC1 },
      { etiqueta: "Precio de lanzamiento en China", valor: "215.900 yuanes", ...SRC1 },
    ],
  },
  "xiaomi-su7-pro-2026-precio-ficha-tecnica": {
    titulo: "SU7 Pro: batería, autonomía y carga según Xiaomi",
    parrafos: [
      "El escalón intermedio del cuadro oficial de Xiaomi (marzo de 2024, mercado chino) se llama Pro y cuesta 245.900 yuanes. Conserva el motor trasero de la versión de acceso, con 299 PS y 400 Nm, pero sustituye la batería por un paquete de 94,3 kWh (celdas Shenxing de CATL) y la autonomía CLTC sube de 700 a 830 km, que con llantas de 20 pulgadas se queda en 758.",
      "Con ese acumulador mayor, Xiaomi anuncia 5,7 segundos para llegar de parado a los cien por hora, más lentos que los 5,28 s del acceso, y una punta de 210 km/h. La recarga de 10 a 80 % tarda 30 minutos en cargadores de la marca. El motor eléctrico es el mismo que en el acceso, así que la potencia oficial es de 299 PS, la misma cifra de la ficha de arriba.",
      "Las medidas son las del acceso (4.997 × 1.963 × 1.455 mm y 3.000 mm de batalla), con 517 litros de maletero (la ficha de arriba da esa misma cifra) y delantero de 105. El Pro equipa dos chips NVIDIA Orin (508 TOPS), un lidar y tres radares de ondas milimétricas, frente al chip y al radar únicos del acceso.",
    ],
    filas: [
      { etiqueta: "Potencia y par (Pro)", valor: "Un motor trasero; 299 PS y 400 Nm", ...SRC2 },
      { etiqueta: "Acumulador del Pro", valor: "94,3 kWh con celdas CATL Shenxing", ...SRC2 },
      { etiqueta: "Autonomía CLTC del Pro", valor: "830 km (758 km con llanta de 20\")", ...SRC2 },
      { etiqueta: "0 a 100 y punta (Pro)", valor: "5,7 s; 210 km/h", ...SRC2 },
      { etiqueta: "Carga de 10 a 80 % (Pro)", valor: "30 min", ...SRC2 },
      { etiqueta: "Asistencia a la conducción", valor: "2 chips NVIDIA Orin (508 TOPS), 1 lidar y 3 radares milimétricos", ...SRC2 },
      { etiqueta: "Precio del Pro en China", valor: "245.900 yuanes", ...SRC2 },
    ],
  },
  "xiaomi-su7-max-2026-precio-ficha-tecnica": {
    titulo: "SU7 Max: motores, frenos y neumáticos del cuadro de Xiaomi",
    parrafos: [
      "En la tabla del lanzamiento de marzo de 2024, la cima de la gama de entonces se llama Max y costaba 299.900 yuanes. Es un bimotor: 220 kW y 338 Nm en el eje delantero (asíncrono) y 275 kW y 500 Nm en el trasero (síncrono). El total declarado es de 495 kW (673 PS) y 838 Nm, cifra que la ficha de arriba recoge como 673 CV.",
      "La batería es de 101 kWh con celdas Qilin de CATL, como anota la ficha. La autonomía CLTC es de 800 km con la goma de serie de 19 pulgadas, y baja a 725 km con las Pirelli P Zero de 21. De 0 a 100 km/h tarda 2,78 s, un dato que Xiaomi aclara que descuenta el tiempo de reacción de salida, y la punta es de 265 km/h. La carga de 10 a 80 % lleva 19 minutos.",
      "Solo el Max lleva suspensión neumática cerrada, amortiguadores CDC y reglaje de dureza y altura, frenos delanteros Brembo de cuatro pistones con discos perforados y un alerón eléctrico de serie, además de un head-up display de 56 pulgadas. Mide 1.440 mm de alto, 15 menos que el acceso, y su maletero baja a 493 litros, la misma cifra que da la ficha.",
    ],
    filas: [
      { etiqueta: "Motores del Max", valor: "Delantero 220 kW/338 Nm asíncrono; trasero 275 kW/500 Nm síncrono", ...SRC3 },
      { etiqueta: "Potencia total declarada", valor: "495 kW (673 PS); 838 Nm", ...SRC3 },
      { etiqueta: "Batería del Max", valor: "101 kWh, celdas CATL Qilin", ...SRC3 },
      { etiqueta: "Prestaciones del Max", valor: "2,78 s de 0 a 100 km/h (sin tiempo de reacción); 265 km/h", ...SRC3 },
      { etiqueta: "Autonomía CLTC del Max", valor: "800 km con la llanta de 19\"; 725 km con la de 21\"", ...SRC3 },
      { etiqueta: "Chasis exclusivo del Max", valor: "Suspensión neumática, amortiguadores CDC, frenos Brembo de 4 pistones", ...SRC3 },
      { etiqueta: "Altura y maletero (Max)", valor: "1.440 mm de alto; maletero de 493 L", ...SRC3 },
      { etiqueta: "Precio del Max en China", valor: "299.900 yuanes", ...SRC3 },
    ],
  },
};
