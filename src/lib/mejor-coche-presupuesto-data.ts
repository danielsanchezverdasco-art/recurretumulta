// Herramienta "Mejor coche por menos de X €".
// Precios PVP verificados el 02/10/2026 en web oficial de la marca, km77,
// carwow, autonocion, topventascoches o carnovo (ver fuentePrecio en cada modelo).
// REGLA: ningún precio inventado. Si un dato técnico no está verificado, el campo es null.
// Mantenimiento: ver docs/mejor-coche-presupuesto.md (cron recurretumulta-radar-precios).

export type TipoMotor = "Electrico" | "Gasolina" | "Diesel" | "PHEV" | "Microhibrido";

export const TIPOS_MOTOR: { id: TipoMotor | "Todos"; nombre: string; descripcion: string }[] = [
  { id: "Todos", nombre: "Todos", descripcion: "Todos los tipos de motor" },
  { id: "Electrico", nombre: "Eléctrico", descripcion: "Etiqueta Cero" },
  { id: "Gasolina", nombre: "Gasolina", descripcion: "Etiqueta C" },
  { id: "Diesel", nombre: "Diésel", descripcion: "Etiqueta C" },
  { id: "PHEV", nombre: "Híbrido enchufable", descripcion: "Etiqueta Cero" },
  { id: "Microhibrido", nombre: "Microhíbrido", descripcion: "Etiqueta ECO" },
];

export interface CochePresupuesto {
  id: string;
  marca: string;
  modelo: string;
  tipoMotor: TipoMotor;
  precioDesde: number;          // euros, PVP verificado
  fuentePrecio: string;         // dónde se verificó (corto)
  notaPrecio?: string;          // matiz del precio (promoción, PVP recomendado...)
  potenciaCv: number | null;
  consumo: number | null;       // l/100 km (combustión/PHEV) o kWh/100 km (eléctrico)
  consumoUnidad: "l/100 km" | "kWh/100 km";
  etiquetaDgt: "Cero" | "ECO" | "C" | "B";
  maleteroL: number | null;
  imagen: string | null;        // "/media/..." foto oficial; null = bloque "foto pendiente"
  pros: string[];
  contras: string[];
  fichaUrl: string | null;      // enlace a /coches si existe la ficha
  comparadorSlug: string | null; // slug del comparador v2 (botón "Comparar")
}

export const COCHES_PRESUPUESTO: CochePresupuesto[] = [
  // ───────────── ELÉCTRICOS (precios de las fichas verificadas del comparador) ─────────────
  {
    id: "dacia-spring-2026",
    marca: "Dacia", modelo: "Spring 2026", tipoMotor: "Electrico",
    precioDesde: 17045, fuentePrecio: "dacia.es (tarifa, precio al contado)",
    potenciaCv: 80, consumo: 12.7, consumoUnidad: "kWh/100 km",
    etiquetaDgt: "Cero", maleteroL: 337,
    imagen: "/media/dacia-spring-2026-nueva-generacion-precio-oficial.webp",
    pros: ["El eléctrico nuevo más barato del mercado", "Etiqueta Cero: entra en todas las ZBE"],
    contras: ["250 km de autonomía: solo ciudad y alrededores", "4 plazas y 80 CV, justo para carretera"],
    fichaUrl: "/coches/dacia-spring-2026-nueva-generacion-precio",
    comparadorSlug: "dacia-spring-2026-nueva-generacion-precio",
  },
  {
    id: "byd-atto-2",
    marca: "BYD", modelo: "Atto 2", tipoMotor: "Electrico",
    precioDesde: 24796, fuentePrecio: "campaña oficial BYD (financiado)", notaPrecio: "precio financiado con adelanto Plan Auto+ y CAE (campaña oficial); al contado 29.990 €",
    potenciaCv: 177, consumo: 16.0, consumoUnidad: "kWh/100 km",
    etiquetaDgt: "Cero", maleteroL: 400,
    imagen: "/media/byd-atto-2-precio-ficha-tecnica-oficial.webp",
    pros: ["177 CV con batería Blade LFP y etiqueta Cero", "Equipamiento de serie muy completo (cámara 360°, techo panorámico)"],
    contras: ["Consumo alto en autopista (~20 kWh/100 km en pruebas)", "Software mejorable frente al hardware"],
    fichaUrl: "/coches/byd-atto-2-precio-ficha-tecnica",
    comparadorSlug: "byd-atto-2-precio-ficha-tecnica",
  },
  {
    id: "renault-twingo-e-tech",
    marca: "Renault", modelo: "Twingo E-Tech", tipoMotor: "Electrico",
    precioDesde: 19500, fuentePrecio: "ficha verificada de la web (tarifa Renault)",
    potenciaCv: 82, consumo: 13.1, consumoUnidad: "kWh/100 km",
    etiquetaDgt: "Cero", maleteroL: 305,
    imagen: "/media/renault-twingo-e-tech-2026-precio-ficha-tecnica-oficial.webp",
    pros: ["Eléctrico europeo más barato, ideal para ciudad", "Consumo bajísimo: 13,1 kWh/100 km homologado"],
    contras: ["263 km de autonomía: solo ciudad y cercanías", "82 CV y 130 km/h de máxima, justo fuera de ciudad"],
    fichaUrl: "/coches/renault-twingo-e-tech-2026-precio-ficha-tecnica",
    comparadorSlug: "renault-twingo-e-tech-2026-precio-ficha-tecnica",
  },
  {
    id: "renault-5-e-tech",
    marca: "Renault", modelo: "5 E-Tech", tipoMotor: "Electrico",
    precioDesde: 20170, fuentePrecio: "web oficial Renault (financiado con campañas)",
    notaPrecio: "20.170 € financiando con promociones, CAE y Auto+; tarifa limpia desde 28.085 €",
    potenciaCv: 120, consumo: 14.5, consumoUnidad: "kWh/100 km",
    etiquetaDgt: "Cero", maleteroL: null,
    imagen: "/media/renault-5-e-tech-2026-precio-autonomia-oficial.webp",
    pros: ["430 km WLTP en la versión de 52 kWh", "Etiqueta Cero con el eléctrico más carismático"],
    contras: ["Sin ayudas el precio sube a ~28.000 €", "Versión más barata aún no disponible para pedir"],
    fichaUrl: "/coches/renault-5-e-tech-2026-precio-autonomia",
    comparadorSlug: "renault-5-e-tech-2026-precio-autonomia",
  },
  {
    id: "leapmotor-b10",
    marca: "Leapmotor", modelo: "B10", tipoMotor: "Electrico",
    precioDesde: 29900, fuentePrecio: "km77 (tarifa oficial 02/2026)",
    notaPrecio: "27.000 € con descuento oficial vigente",
    potenciaCv: 218, consumo: 17.2, consumoUnidad: "kWh/100 km",
    etiquetaDgt: "Cero", maleteroL: 430,
    imagen: "/media/leapmotor-b10-electrico-precio-espana-oficial.webp",
    pros: ["218 CV y 434 km WLTP desde 27.000 €", "Carga rápida de hasta 168 kW con batería LFP"],
    contras: ["Marca nueva: valor de reventa incierto", "Maletero de 430 L, justo para un SUV de 4,52 m"],
    fichaUrl: "/coches/leapmotor-b10-electrico-precio-espana",
    comparadorSlug: "leapmotor-b10-electrico-precio-espana",
  },
  {
    id: "renault-4-e-tech",
    marca: "Renault", modelo: "4 E-Tech", tipoMotor: "Electrico",
    precioDesde: 27954, fuentePrecio: "ficha verificada de la web (tarifa Renault)",
    potenciaCv: 122, consumo: 14.7, consumoUnidad: "kWh/100 km",
    etiquetaDgt: "Cero", maleteroL: 375,
    imagen: "/media/renault-4-e-tech-precio-autonomia-oficial.webp",
    pros: ["Hasta 408 km de autonomía con estética retro", "Más espacio y maletero (375 L) que el R5"],
    contras: ["122 CV algo justos (0-100 en 9,2 s)", "Plazas traseras justas para adultos"],
    fichaUrl: "/coches/renault-4-e-tech-precio-autonomia",
    comparadorSlug: "renault-4-e-tech-precio-autonomia",
  },

  // ───────────── GASOLINA ─────────────
  {
    id: "dacia-sandero-tce-100",
    marca: "Dacia", modelo: "Sandero TCe 100", tipoMotor: "Gasolina",
    precioDesde: 14490, fuentePrecio: "oferta oficial Dacia (octubre 2026, contado)",
    potenciaCv: 100, consumo: 5.6, consumoUnidad: "l/100 km",
    etiquetaDgt: "C", maleteroL: 328,
    imagen: "/media/dacia-sandero-tce-100-oficial.webp",
    pros: ["El coche nuevo más barato del mercado", "Etiqueta ECO con 5,6 l/100 km homologados"],
    contras: ["Acabados espartanos", "Sin asistentes avanzados de serie"],
    fichaUrl: null, comparadorSlug: null,
  },
  {
    id: "seat-ibiza-mpi-80",
    marca: "Seat", modelo: "Ibiza 1.0 MPI 80", tipoMotor: "Gasolina",
    precioDesde: 15390, fuentePrecio: "km77 (tarifa 05/2026, con descuento oficial)",
    potenciaCv: 80, consumo: 5.5, consumoUnidad: "l/100 km",
    etiquetaDgt: "C", maleteroL: 355,
    imagen: "/media/seat-ibiza-10-mpi-oficial.webp",
    pros: ["Urbano probado y fiable", "Precio PVP oficial sin letra pequeña"],
    contras: ["80 CV justos fuera de ciudad", "Etiqueta C"],
    fichaUrl: null, comparadorSlug: null,
  },
  {
    id: "renault-clio-tce-115",
    marca: "Renault", modelo: "Clio TCe 115", tipoMotor: "Gasolina",
    precioDesde: 18900, fuentePrecio: "km77 (topventascoches)",
    potenciaCv: 115, consumo: 5.1, consumoUnidad: "l/100 km",
    etiquetaDgt: "C", maleteroL: 391,
    imagen: "/media/renault-clio-tce-115-oficial.webp",
    pros: ["115 CV con turbo y solo 5,1 l/100 km", "Maletero de 391 L, el mayor de su segmento"],
    contras: ["Etiqueta C", "Precio de versión de acceso (evolution)"],
    fichaUrl: null, comparadorSlug: null,
  },
  {
    id: "skoda-fabia-mpi-80",
    marca: "Skoda", modelo: "Fabia 1.0 MPI 80", tipoMotor: "Gasolina",
    precioDesde: 21690, fuentePrecio: "km77 (topventascoches)",
    potenciaCv: 80, consumo: 5.2, consumoUnidad: "l/100 km",
    etiquetaDgt: "C", maleteroL: 380,
    imagen: "/media/skoda-fabia-10-mpi-oficial.webp",
    pros: ["Calidad de construcción Škoda", "Habitabilidad y maletero de 380 L"],
    contras: ["80 CV justos", "Más caro que un Sandero ECO"],
    fichaUrl: null, comparadorSlug: null,
  },
  {
    id: "hyundai-i20-12",
    marca: "Hyundai", modelo: "i20 1.2", tipoMotor: "Gasolina",
    precioDesde: 20910, fuentePrecio: "km77 (topventascoches)", notaPrecio: "versión de acceso 79 CV (tarifa 01/2026)",
    potenciaCv: 79, consumo: 5.7, consumoUnidad: "l/100 km",
    etiquetaDgt: "C", maleteroL: 352,
    imagen: "/media/hyundai-i20-12-oficial.webp",
    pros: ["Garantía Hyundai de 5 años", "Urbano fiable y bien equipado de serie"],
    contras: ["Etiqueta C", "79 CV justos en carretera"],
    fichaUrl: null, comparadorSlug: null,
  },

  // ───────────── DIÉSEL (quedan pocos nuevos a la venta: el mercado se ha estrechado) ─────────────
  {
    id: "opel-astra-15d",
    marca: "Opel", modelo: "Astra 1.5D 130 CV", tipoMotor: "Diesel",
    precioDesde: 26100, fuentePrecio: "auto10.com (precios Opel Astra 2026)",
    notaPrecio: "precio con las promociones de la marca",
    potenciaCv: 130, consumo: 4.9, consumoUnidad: "l/100 km",
    etiquetaDgt: "C", maleteroL: 422,
    imagen: "/media/opel-astra-15d-oficial.webp",
    pros: ["El diésel nuevo más barato", "4,9 l/100 km y 422 L de maletero"],
    contras: ["Etiqueta C: problemas en ZBE estrictas", "Precio condicionado a campañas"],
    fichaUrl: null, comparadorSlug: null,
  },
  {
    id: "vw-golf-20-tdi",
    marca: "Volkswagen", modelo: "Golf 2.0 TDI 150", tipoMotor: "Diesel",
    precioDesde: 38283, fuentePrecio: "quécochemecompro (PVP tarifa)", notaPrecio: "PVP oficial de tarifa",
    potenciaCv: 150, consumo: 5.4, consumoUnidad: "l/100 km",
    etiquetaDgt: "C", maleteroL: 381,
    imagen: "/media/volkswagen-golf-20-tdi-oficial.webp",
    pros: ["150 CV con consumo contenido (5,4 l/100 km)", "Calidad de rodadura del Golf"],
    contras: ["Etiqueta C", "Los diésel pierden valor de reventa"],
    fichaUrl: null, comparadorSlug: null,
  },
  {
    id: "skoda-octavia-20-tdi",
    marca: "Skoda", modelo: "Octavia 2.0 TDI 150", tipoMotor: "Diesel",
    precioDesde: 38600, fuentePrecio: "km77 (tarifa 01/2026)", notaPrecio: "versión 2.0 TDI 150 CV",
    potenciaCv: 150, consumo: 4.4, consumoUnidad: "l/100 km",
    etiquetaDgt: "C", maleteroL: 600,
    imagen: "/media/skoda-octavia-20-tdi-oficial.webp",
    pros: ["Maletero gigante de 600 L", "El diésel que menos consume de la lista (4,4 l/100 km)"],
    contras: ["Etiqueta C", "38.242 €: solo compensa si haces muchos km"],
    fichaUrl: null, comparadorSlug: null,
  },

  // ───────────── HÍBRIDOS ENCHUFABLES (PHEV) ─────────────
  {
    id: "lepas-l8",
    marca: "Lepas", modelo: "L8", tipoMotor: "PHEV",
    precioDesde: 33990, fuentePrecio: "web oficial Lepas (lepas.es)",
    notaPrecio: "33.990 € en oferta de lanzamiento; 41.700 € PVP recomendado",
    potenciaCv: 279, consumo: null, consumoUnidad: "l/100 km",
    etiquetaDgt: "Cero", maleteroL: 507,
    imagen: "/media/lepas-l8-chery-hibrido-enchufable-precio-espana-oficial.webp",
    pros: ["279 CV con etiqueta CERO por menos de 34.000 €", "90 km eléctricos y 507 L de maletero"],
    contras: ["Marca nueva: valor de reventa incierto", "Precio final de 40.890 € cuando acabe la oferta"],
    fichaUrl: "/coches/lepas-l8-chery-hibrido-enchufable-precio-espana",
    comparadorSlug: "lepas-l8-chery-hibrido-enchufable-precio-espana",
  },
  {
    id: "byd-seal-u-dm-i",
    marca: "BYD", modelo: "Seal U DM-i", tipoMotor: "PHEV",
    precioDesde: 35790, fuentePrecio: "web oficial BYD (byd.com)",
    notaPrecio: "PVPR al contado sin campañas",
    potenciaCv: 218, consumo: null, consumoUnidad: "l/100 km",
    etiquetaDgt: "Cero", maleteroL: null,
    imagen: "/media/byd-seal-u-dm-i-oficial.webp",
    pros: ["SUV grande con etiqueta CERO por 35.790 €", "Precio oficial al contado, sin letra pequeña"],
    contras: ["Marca china: red de talleres aún creciendo", "Con batería agotada el consumo sube"],
    fichaUrl: null, comparadorSlug: null,
  },
  {
    id: "mg-hs-phev",
    marca: "MG", modelo: "HS PHEV", tipoMotor: "PHEV",
    precioDesde: 37340, fuentePrecio: "km77 (topventascoches, tarifa MG)",
    notaPrecio: "precio de tarifa; la promoción vigente lo baja a 24.540 € (hasta 31/10/2026)",
    potenciaCv: 307, consumo: null, consumoUnidad: "l/100 km",
    etiquetaDgt: "Cero", maleteroL: 441,
    imagen: "/media/mg-hs-phev-oficial.webp",
    pros: ["307 CV, el PHEV con más potencia por este precio", "Etiqueta CERO y 441 L de maletero"],
    contras: ["Las promociones varían: el precio real baila", "Marca aún consolidándose en España"],
    fichaUrl: null, comparadorSlug: null,
  },
  {
    id: "cupra-formentor-e-hybrid",
    marca: "Cupra", modelo: "Formentor e-Hybrid", tipoMotor: "PHEV",
    precioDesde: 47300, fuentePrecio: "lista oficial de precios CUPRA (julio 2026)",
    notaPrecio: "PVP orientativo",
    potenciaCv: 272, consumo: null, consumoUnidad: "l/100 km",
    etiquetaDgt: "Cero", maleteroL: 345,
    imagen: "/media/cupra-formentor-e-hybrid-oficial.webp",
    pros: ["272 CV con el diseño más deportivo de la lista", "Etiqueta CERO"],
    contras: ["Maletero de 345 L, justo para un SUV", "Precio orientativo: confirmar en concesionario"],
    fichaUrl: null, comparadorSlug: null,
  },
  {
    id: "kia-sportage-phev",
    marca: "Kia", modelo: "Sportage PHEV", tipoMotor: "PHEV",
    precioDesde: 47500, fuentePrecio: "topventascoches (PVP recomendado por el fabricante)",
    notaPrecio: "PVP orientativo",
    potenciaCv: 288, consumo: null, consumoUnidad: "l/100 km",
    etiquetaDgt: "Cero", maleteroL: 526,
    imagen: "/media/kia-sportage-phev-oficial.webp",
    pros: ["288 CV y 526 L de maletero: el PHEV más familiar", "7 años de garantía Kia"],
    contras: ["Precio orientativo: confirmar en concesionario", "Por este precio roza eléctricos puros"],
    fichaUrl: null, comparadorSlug: null,
  },
  {
    id: "omoda-9-shs",
    marca: "Omoda", modelo: "9 SHS", tipoMotor: "PHEV",
    precioDesde: 50900, fuentePrecio: "km77 (tarifa 02/2026)",
    potenciaCv: 537, consumo: null, consumoUnidad: "l/100 km",
    etiquetaDgt: "Cero", maleteroL: 471,
    imagen: "/media/omoda-9-shs-precio-ficha-tecnica-oficial.webp",
    pros: ["537 CV: prestaciones de deportivo con etiqueta CERO", "145 km eléctricos, la mayor autonomía eléctrica por debajo de 50.000 €"],
    contras: ["2.270 kg: el peso se nota", "Marca nueva con reventa incierta"],
    fichaUrl: "/coches/omoda-9-shs-precio-ficha-tecnica",
    comparadorSlug: "omoda-9-shs-precio-ficha-tecnica",
  },

  // ───────────── MICROHÍBRIDOS (MHEV, etiqueta ECO) ─────────────
  {
    id: "fiat-500-hybrid",
    marca: "Fiat", modelo: "500 Hybrid", tipoMotor: "Microhibrido",
    precioDesde: 19140, fuentePrecio: "km77 (nueva generación Hybrid)",
    notaPrecio: "PVP sin descuentos",
    potenciaCv: 65, consumo: null, consumoUnidad: "l/100 km",
    etiquetaDgt: "ECO", maleteroL: 185,
    imagen: "/media/fiat-500-hybrid-oficial.webp",
    pros: ["Etiqueta ECO desde 19.140 €", "65 CV con el 500 híbrido de nueva generación"],
    contras: ["Maletero de 185 L, solo para ciudad", "PVP sin descuentos: el precio real puede bajar"],
    fichaUrl: "/coches/fiat-500-hibrido-2025-precio-ficha-tecnica", comparadorSlug: "fiat-500-hibrido-2025-precio-ficha-tecnica",
  },
  {
    id: "suzuki-swift",
    marca: "Suzuki", modelo: "Swift", tipoMotor: "Microhibrido",
    precioDesde: 19305, fuentePrecio: "suzuki.es (promo oficial)", notaPrecio: "promoción oficial al contado hasta 31/12/2026; financiando 17.816 €",
    potenciaCv: 83, consumo: 4.4, consumoUnidad: "l/100 km",
    etiquetaDgt: "ECO", maleteroL: 265,
    imagen: "/media/suzuki-swift-oficial.webp",
    pros: ["4,4 l/100 km: el que menos consume con etiqueta ECO", "Ligero y fiable, ideal para ciudad"],
    contras: ["83 CV justos en carretera", "Maletero de 265 L"],
    fichaUrl: null, comparadorSlug: null,
  },
  {
    id: "kia-stonic-mhev",
    marca: "Kia", modelo: "Stonic MHEV", tipoMotor: "Microhibrido",
    precioDesde: 25290, fuentePrecio: "km77 (autonocion, PVP con campaña)",
    notaPrecio: "precio con campaña de la marca (25.290 €)",
    potenciaCv: 115, consumo: null, consumoUnidad: "l/100 km",
    etiquetaDgt: "ECO", maleteroL: 352,
    imagen: "/media/kia-stonic-mhev-oficial.webp",
    pros: ["SUV urbano con etiqueta ECO", "115 CV con buen equipamiento de serie"],
    contras: ["Precio condicionado a la campaña", "El Sandero ECO es mucho más barato"],
    fichaUrl: null, comparadorSlug: null,
  },
  {
    id: "seat-leon-15-etsi",
    marca: "Seat", modelo: "León 1.5 eTSI 115", tipoMotor: "Microhibrido",
    precioDesde: 29400, fuentePrecio: "lista oficial SEAT (mayo 2026)",
    potenciaCv: 115, consumo: 5.1, consumoUnidad: "l/100 km",
    etiquetaDgt: "ECO", maleteroL: 380,
    imagen: "/media/seat-leon-15-etsi-oficial.webp",
    pros: ["Compacto con etiqueta ECO y 380 L de maletero", "Precio PVP oficial de la lista de la marca"],
    contras: ["25.490 €: el ECO más caro de la lista", "Por ese precio hay eléctricos puros"],
    fichaUrl: null, comparadorSlug: null,
  },
];

// ───────────── Lógica de recomendación ─────────────

export interface Recomendacion {
  coche: CochePresupuesto;
  puntos: number;
  recomendado: boolean;   // true solo para el primero
  motivo: string | null;  // frase honesta con el porqué
}

const PUNTOS_ETIQUETA: Record<CochePresupuesto["etiquetaDgt"], number> = {
  Cero: 30, ECO: 20, C: 10, B: 0,
};

export const ETIQUETA_NOMBRE: Record<TipoMotor, string> = {
  Electrico: "Eléctrico", Gasolina: "Gasolina", Diesel: "Diésel",
  PHEV: "Híbrido enchufable", Microhibrido: "Microhíbrido",
};

export function filtrarPorPresupuesto(
  presupuesto: number,
  tipoMotor: TipoMotor | "Todos",
): CochePresupuesto[] {
  return COCHES_PRESUPUESTO.filter(
    (c) => c.precioDesde <= presupuesto && (tipoMotor === "Todos" || c.tipoMotor === tipoMotor),
  );
}

function calcularPuntos(coche: CochePresupuesto, presupuesto: number, grupo: CochePresupuesto[]): number {
  let puntos = PUNTOS_ETIQUETA[coche.etiquetaDgt];
  // Consumo: hasta 25 puntos, normalizado dentro del grupo (menos consumo = más puntos)
  const consumos = grupo.map((g) => g.consumo).filter((x): x is number => x !== null);
  if (coche.consumo !== null && consumos.length > 1) {
    const min = Math.min(...consumos), max = Math.max(...consumos);
    puntos += max > min ? 25 * (1 - (coche.consumo - min) / (max - min)) : 12;
  }
  // Margen de precio: hasta 20 puntos (más barato respecto al presupuesto = mejor)
  if (presupuesto > 0) {
    puntos += 20 * (1 - coche.precioDesde / presupuesto);
  }
  // Maletero: hasta 10 puntos
  const maleteros = grupo.map((g) => g.maleteroL).filter((x): x is number => x !== null);
  if (coche.maleteroL !== null && maleteros.length > 0) {
    puntos += 10 * (coche.maleteroL / Math.max(...maleteros));
  }
  return puntos;
}

function generarMotivo(top: CochePresupuesto, grupo: CochePresupuesto[], presupuesto: number): string {
  const masBarato = grupo.reduce((a, b) => (a.precioDesde <= b.precioDesde ? a : b));
  const menosConsume = grupo.filter((g) => g.consumo !== null)
    .reduce((a, b) => ((a.consumo ?? 9) <= (b.consumo ?? 9) ? a : b), grupo[0]);
  const masMaletero = grupo.filter((g) => g.maleteroL !== null)
    .reduce((a, b) => ((a.maleteroL ?? 0) >= (b.maleteroL ?? 0) ? a : b), grupo[0]);

  if (top.id === masBarato.id && (top.etiquetaDgt === "ECO" || top.etiquetaDgt === "Cero")) {
    return `El más barato con etiqueta ${top.etiquetaDgt ?? "sin etiqueta"}: entra en tu presupuesto y en las ZBE.`;
  }
  if (top.id === masBarato.id) {
    return `El que más presupuesto deja en el bolsillo: ${top.precioDesde.toLocaleString("es-ES")} €.`;
  }
  if (menosConsume && top.id === menosConsume.id && top.consumo !== null) {
    return `El que menos consume: ${top.consumo} ${top.consumoUnidad}, ahorrarás cada día.`;
  }
  if (masMaletero && top.id === masMaletero.id && top.maleteroL !== null) {
    return `El más familiar: ${top.maleteroL} L de maletero por ${top.precioDesde.toLocaleString("es-ES")} €.`;
  }
  if (top.etiquetaDgt === "Cero") {
    const eurosLibres = presupuesto - top.precioDesde;
    return `Etiqueta Cero con ${eurosLibres.toLocaleString("es-ES")} € de margen en tu presupuesto.`;
  }
  if (top.potenciaCv !== null && top.potenciaCv >= 150) {
    return `${top.potenciaCv} CV con etiqueta ${top.etiquetaDgt ?? "sin etiqueta"}: potencia y eficiencia sin salirte del presupuesto.`;
  }
  return `La mejor combinación de precio, consumo y etiqueta por debajo de ${presupuesto.toLocaleString("es-ES")} €.`;
}

export function recomendarPorPresupuesto(
  presupuesto: number,
  tipoMotor: TipoMotor | "Todos",
): Recomendacion[] {
  const grupo = filtrarPorPresupuesto(presupuesto, tipoMotor);
  const ordenados = grupo
    .map((c) => ({ coche: c, puntos: calcularPuntos(c, presupuesto, grupo) }))
    .sort((a, b) => b.puntos - a.puntos);
  return ordenados.map((r, i) => ({
    ...r,
    recomendado: i === 0,
    motivo: i === 0 ? generarMotivo(r.coche, grupo, presupuesto) : null,
  }));
}

export interface SugerenciaVacia {
  texto: string;
  presupuestoMinimo: number | null;
  tipoAlternativo: { id: TipoMotor; nombre: string; desde: number } | null;
}

/** Mensaje útil cuando ningún modelo entra en el presupuesto. */
export function sugerenciaPresupuestoInsuficiente(
  presupuesto: number,
  tipoMotor: TipoMotor | "Todos",
): SugerenciaVacia {
  const delTipo = COCHES_PRESUPUESTO.filter((c) => tipoMotor === "Todos" || c.tipoMotor === tipoMotor);
  const masBaratoTipo = delTipo.reduce((a, b) => (a.precioDesde <= b.precioDesde ? a : b));
  // Tipo alternativo más barato que sí tenga modelos en presupuesto
  const porTipo = (TIPOS_MOTOR.filter((t) => t.id !== "Todos" && t.id !== tipoMotor) as { id: TipoMotor; nombre: string }[])
    .map((t) => {
      const coches = COCHES_PRESUPUESTO.filter((c) => c.tipoMotor === t.id && c.precioDesde <= presupuesto);
      const min = Math.min(...COCHES_PRESUPUESTO.filter((c) => c.tipoMotor === t.id).map((c) => c.precioDesde));
      return { id: t.id, nombre: t.nombre, desde: min, encajan: coches.length };
    })
    .filter((t) => t.encajan > 0)
    .sort((a, b) => a.desde - b.desde)[0] ?? null;

  const nombreTipo =
    tipoMotor === "Todos"
      ? "coche nuevo"
      : tipoMotor === "Electrico"
        ? "eléctrico nuevo"
        : tipoMotor === "Gasolina"
          ? "gasolina nuevo"
          : tipoMotor === "Diesel"
            ? "diésel nuevo"
            : tipoMotor === "PHEV"
              ? "híbrido enchufable nuevo"
              : "microhíbrido nuevo";
  let texto = `Con ${presupuesto.toLocaleString("es-ES")} € no entra ningún ${nombreTipo}: el más barato (${masBaratoTipo.marca} ${masBaratoTipo.modelo}) cuesta ${masBaratoTipo.precioDesde.toLocaleString("es-ES")} €.`;
  if (porTipo) {
    texto += ` Prueba con ${porTipo.nombre.toLowerCase()} (desde ${porTipo.desde.toLocaleString("es-ES")} €) o sube el presupuesto a ${masBaratoTipo.precioDesde.toLocaleString("es-ES")} €.`;
  } else {
    texto += ` Sube el presupuesto a ${masBaratoTipo.precioDesde.toLocaleString("es-ES")} € para ver el primer modelo.`;
  }
  return {
    texto,
    presupuestoMinimo: masBaratoTipo.precioDesde,
    tipoAlternativo: porTipo,
  };
}
