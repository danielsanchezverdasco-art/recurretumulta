// Calendario de lanzamientos 2026-2027 — DATOS SEMILLA + FALLBACK LOCAL.
//
// Este fichero es la "semilla" que alimenta la tabla `lanzamientos` de Convex
// (ver convex/lanzamientos.ts) y el fallback que usa la página
// src/pages/CalendarioLanzamientos.tsx cuando la consulta remota no devuelve
// datos (por ejemplo durante el prerender, que bloquea convex.cloud).
//
// REGLA DE HONESTIDAD: no inventar fechas concretas. Si la fecha no es
// oficial, `fechaConfirmada: false` y `fechaPrevista` como trimestre o
// "por confirmar". Actualización mensual: editar solo este fichero y
// re-sembrar con `npx convex run lanzamientos:upsert` (ver
// docs/calendario-lanzamientos.md).

export interface LanzamientoSeed {
  marca: string;
  modelo: string;
  segmento: string;
  /** Trimestre o "por confirmar" si no hay fecha oficial */
  fechaPrevista: string;
  /** true solo si la fecha es oficial del fabricante */
  fechaConfirmada: boolean;
  fuenteUrl?: string;
  notas?: string;
  /** Ruta de la imagen de la tarjeta, p. ej. "/media/calendario-kia-ev2.webp" */
  imagen?: string;
  orden: number;
}

export const LANZAMIENTOS_SEED: LanzamientoSeed[] = [
  {
    marca: "Kia",
    modelo: "EV2",
    imagen: "/media/calendario-kia-ev2.webp",
    segmento: "Urbano",
    fechaPrevista: "2026 (por confirmar)",
    fechaConfirmada: false,
    fuenteUrl: "https://www.motor.com.co/seccion/lanzamientos/kia-ev2-el-carro-electrico-de-entrada-debutara-el-9-de-enero-de-2026_20918",
    notas: "Presentado el 9 de enero de 2026 en el Salón de Bruselas; se fabricará en Europa. Venta prevista durante 2026.",
    orden: 1,
  },
  {
    marca: "Skoda",
    modelo: "Epiq",
    imagen: "/media/calendario-skoda-epiq.webp",
    segmento: "SUV",
    fechaPrevista: "Finales de 2026 (por confirmar)",
    fechaConfirmada: false,
    fuenteUrl: "http://vw-navarra.es/wp-content/uploads/2026/05/20260504_Skoda-Epiq.pdf",
    notas: "Estreno mundial el 19 de mayo de 2026 en Zúrich. El SUV eléctrico más asequible de Skoda.",
    orden: 2,
  },
  {
    marca: "Volkswagen",
    modelo: "ID.Polo (ID.2)",
    imagen: "/media/calendario-vw-id-polo.webp",
    segmento: "Urbano",
    fechaPrevista: "2026 (por confirmar)",
    fechaConfirmada: false,
    notas: "Eléctrico de acceso de VW por unos 25.000 €, fabricado en España.",
    orden: 3,
  },
  {
    marca: "Nissan",
    modelo: "Juke eléctrico",
    imagen: "/media/calendario-nissan-juke-electrico.webp",
    segmento: "SUV",
    fechaPrevista: "Finales de 2026 (por confirmar)",
    fechaConfirmada: false,
    notas: "Nueva generación del Juke, 100 % eléctrica.",
    orden: 4,
  },
  {
    marca: "BMW",
    modelo: "i3 (Neue Klasse)",
    imagen: "/media/bmw-i3-neue-klasse-2027-pedidos-912-km-autonomia-hero.webp",
    segmento: "Berlina",
    fechaPrevista: "Finales de 2026 (por confirmar)",
    fechaConfirmada: false,
    notas: "Berlina eléctrica de la nueva plataforma Neue Klasse, hermana del iX3.",
    orden: 5,
  },
  {
    marca: "Mercedes-Benz",
    modelo: "GLA eléctrico",
    imagen: "/media/calendario-mercedes-gla-electrico.webp",
    segmento: "SUV",
    fechaPrevista: "Finales de 2026 (por confirmar)",
    fechaConfirmada: false,
    notas: "Nueva generación del GLA sobre la plataforma MMA, con versión eléctrica.",
    orden: 6,
  },
  {
    marca: "Range Rover",
    modelo: "Range Rover Electric",
    imagen: "/media/calendario-range-rover-electric.webp",
    segmento: "SUV",
    fechaPrevista: "Finales de 2026 (por confirmar)",
    fechaConfirmada: false,
    notas: "Primer Range Rover 100 % eléctrico.",
    orden: 7,
  },
  {
    marca: "Alpine",
    modelo: "A110 eléctrico",
    imagen: "/media/calendario-alpine-a110-electrico.webp",
    segmento: "Deportivo",
    fechaPrevista: "Finales de 2026 (por confirmar)",
    fechaConfirmada: false,
    notas: "Sucesor eléctrico del A110 de combustión.",
    orden: 8,
  },
  {
    marca: "Dacia",
    modelo: "Striker",
    imagen: "/media/calendario-dacia-striker.webp",
    segmento: "SUV",
    fechaPrevista: "Finales de 2026 (por confirmar)",
    fechaConfirmada: false,
    notas: "Nuevo SUV eléctrico de Dacia.",
    orden: 9,
  },
  {
    marca: "Kia",
    modelo: "Niro (nueva generación)",
    imagen: "/media/calendario-kia-niro-2027.webp",
    segmento: "SUV",
    fechaPrevista: "Finales de 2026 (por confirmar)",
    fechaConfirmada: false,
    notas: "Nueva generación del Niro con versiones electrificadas.",
    orden: 10,
  },
  {
    marca: "Lepas",
    modelo: "L4",
    imagen: "/media/calendario-lepas-l4.webp",
    segmento: "SUV",
    fechaPrevista: "2026 (por confirmar)",
    fechaConfirmada: false,
    notas: "Segundo modelo de Lepas (Chery) tras el L8.",
    orden: 11,
  },
  {
    marca: "Li Auto",
    modelo: "L6",
    imagen: "/media/li-auto-l6-ficha-tecnica-precio-oficial.webp",
    segmento: "SUV",
    fechaPrevista: "2026 (por confirmar)",
    fechaConfirmada: false,
    notas: "El SUV de autonomía extendida chino prepara su llegada a Europa.",
    orden: 12,
  },
  {
    marca: "Deepal",
    modelo: "S07",
    imagen: "/media/deepal-s07-precio-espana-ficha-tecnica-oficial.webp",
    segmento: "SUV",
    fechaPrevista: "Por confirmar",
    fechaConfirmada: false,
    notas: "SUV eléctrico de Deepal (Changan) pendiente de fecha oficial para España.",
    orden: 13,
  },
  {
    marca: "Hyundai",
    modelo: "Ioniq 3",
    imagen: "/media/calendario-hyundai-ioniq-3.webp",
    segmento: "Berlina",
    fechaPrevista: "2027 (por confirmar)",
    fechaConfirmada: false,
    fuenteUrl: "https://www.motor.com.co/seccion/lanzamientos/hyundai-three-concept-el-proximo-automovil-electrico-ioniq_20521",
    notas: "Modelo de producción del concepto Three: compacto eléctrico del tamaño de un Golf, fabricado en Europa.",
    orden: 14,
  },
  {
    marca: "Xiaomi",
    modelo: "YU7",
    imagen: "/media/xiaomi-yu7-suv-electrico-llegada-europa-oficial.webp",
    segmento: "SUV",
    fechaPrevista: "2027",
    fechaConfirmada: true,
    fuenteUrl: "https://mundocontact.com/xiaomi-llegara-a-europa-con-autos-electricos-en-2027/",
    notas: "Xiaomi confirmó oficialmente que venderá sus eléctricos en Europa a partir de 2027.",
    orden: 15,
  },
  {
    marca: "Volkswagen",
    modelo: "ID.Every1",
    imagen: "/media/calendario-vw-id-every1.webp",
    segmento: "Urbano",
    fechaPrevista: "2027 (por confirmar)",
    fechaConfirmada: false,
    notas: "Eléctrico de acceso de VW por unos 20.000 €.",
    orden: 16,
  },
  {
    marca: "Dacia",
    modelo: "Eléctrico de entrada (plataforma Twingo)",
    imagen: "/media/calendario-dacia-electrico-entrada.webp",
    segmento: "Urbano",
    fechaPrevista: "2.º trimestre de 2027 (por confirmar)",
    fechaConfirmada: false,
    notas: "Segundo eléctrico de acceso del grupo Renault sobre la plataforma AmpR Small del Twingo; en Europa se venderá como Dacia.",
    orden: 17,
  },
  {
    marca: "Audi",
    modelo: "Nuvolari",
    imagen: "/media/calendario-audi-nuvolari.webp",
    segmento: "SUV",
    fechaPrevista: "Principios de 2027 (por confirmar)",
    fechaConfirmada: false,
    notas: "Nuevo crossover eléctrico de Audi.",
    orden: 18,
  },
  {
    marca: "Omoda",
    modelo: "4",
    imagen: "/media/calendario-omoda-4.webp",
    segmento: "SUV",
    fechaPrevista: "Principios de 2027 (por confirmar)",
    fechaConfirmada: false,
    notas: "SUV compacto por debajo del Omoda 5.",
    orden: 19,
  },
  {
    marca: "Leapmotor",
    modelo: "B05",
    imagen: "/media/calendario-leapmotor-b05.webp",
    segmento: "Urbano",
    fechaPrevista: "2027 (por confirmar)",
    fechaConfirmada: false,
    fuenteUrl: "https://testcoches.es/noticias/leapmotor-ya-vende-el-62-que-byd-en-espana-y-el-b10-de-zaragoza-le-adelanta-en-la-carrera-por-fabricar-en-europa/",
    notas: "Leapmotor prevé fabricar el B05 (y el B03X) en Figueruelas (Zaragoza) en 2027.",
    orden: 20,
  },
  {
    marca: "MG",
    modelo: "GO!",
    imagen: "/media/calendario-mg-go.webp",
    segmento: "Urbano",
    fechaPrevista: "2027 (por confirmar)",
    fechaConfirmada: false,
    notas: "Urbano eléctrico de acceso de MG.",
    orden: 21,
  },
  {
    marca: "Jaguar",
    modelo: "Type 01",
    imagen: "/media/calendario-jaguar-type-01.webp",
    segmento: "Deportivo",
    fechaPrevista: "Mediados de 2027 (por confirmar)",
    fechaConfirmada: false,
    notas: "Primer modelo de la nueva era 100 % eléctrica de Jaguar.",
    orden: 22,
  },
];
