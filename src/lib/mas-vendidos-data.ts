// Datos de matriculaciones 2026 para la sección "Más vendidos" (/comparador/mas-vendidos).
// SOLO cifras reales publicadas. Fuentes en:
// ~/workspace/goals/recurretumulta-online-daily-blog-publishing/hidden_files/fuentes-matriculaciones-2026.md
// Si un mes no tiene cifras por modelo publicadas, el ranking queda vacío y la
// página muestra "datos no disponibles". NUNCA inventar cifras.
// Mantenimiento: cron semanal `recurretumulta-mas-vendidos-update` (cada lunes).

export type CategoriaMasVendidos = "coches" | "motos" | "patinetes";

export interface ModeloVendido {
  /** Nombre del modelo tal como lo publican ANFAC/ANESDOR */
  modelo: string;
  /** Unidades matriculadas en el periodo. null = cifra no publicada */
  unidades: number | null;
  /** ID de la ficha (/coches/<id> o /motos/<id>) cuando existe. Si no hay, la fila no enlaza. */
  fichaId?: string;
}

export interface PeriodoVentas {
  /** "2026-01" … "2026-12" */
  periodo: string;
  etiqueta: string;
  /** Total de matriculaciones del periodo (turismos o vehículos L). null si no publicado */
  totalMercado: number | null;
  ranking: ModeloVendido[];
  fuente: string;
}

export const PERIODOS_COCHES: PeriodoVentas[] = [
  {
    periodo: "2026-01",
    etiqueta: "Enero 2026",
    totalMercado: 73103,
    fuente: "ANFAC vía EFE/diariofinanciero.com",
    ranking: [
      { modelo: "Peugeot 208", unidades: 2055, fichaId: "peugeot-208-hibrido-110-2026-precio-ficha-tecnica" },
      { modelo: "SEAT Ibiza", unidades: null, fichaId: "seat-ibiza-10-tsi-2026-precio-ficha-tecnica" },
      { modelo: "SEAT Arona", unidades: null, fichaId: "seat-arona-15-tsi-2026-precio-ficha-tecnica" },
    ],
  },
  {
    periodo: "2026-02",
    etiqueta: "Febrero 2026",
    totalMercado: 97082,
    fuente: "ANFAC vía coches.net",
    ranking: [
      { modelo: "SEAT Ibiza", unidades: 2601, fichaId: "seat-ibiza-10-tsi-2026-precio-ficha-tecnica" },
      { modelo: "Dacia Sandero", unidades: 2591, fichaId: "dacia-sandero-tce-90-2026-precio-ficha-tecnica" },
      { modelo: "Toyota C-HR", unidades: 2439, fichaId: "toyota-c-hr-200h-2025-precio-ficha-tecnica" },
      { modelo: "Renault Clio", unidades: 2089, fichaId: "renault-clio-vi-2025-e-tech-160-precio-ficha-tecnica" },
      { modelo: "Toyota Yaris Cross", unidades: 2046, fichaId: "toyota-yaris-cross-hybrid-2024-precio-ficha-tecnica" },
    ],
  },
  {
    periodo: "2026-03",
    etiqueta: "Marzo 2026",
    totalMercado: 130340,
    fuente: "ANFAC vía coches.net",
    ranking: [
      { modelo: "Dacia Sandero", unidades: 3317, fichaId: "dacia-sandero-tce-90-2026-precio-ficha-tecnica" },
      { modelo: "Toyota C-HR", unidades: 2913, fichaId: "toyota-c-hr-200h-2025-precio-ficha-tecnica" },
      { modelo: "Peugeot 208", unidades: 2815, fichaId: "peugeot-208-hibrido-110-2026-precio-ficha-tecnica" },
      { modelo: "Toyota Corolla", unidades: 2801, fichaId: "toyota-corolla-berlina-2025-precio-ficha-tecnica" },
      { modelo: "SEAT Ibiza", unidades: 2697, fichaId: "seat-ibiza-10-tsi-2026-precio-ficha-tecnica" },
    ],
  },
  {
    periodo: "2026-04",
    etiqueta: "Abril 2026",
    totalMercado: 106862,
    fuente: "ANFAC vía coches.net",
    ranking: [
      { modelo: "Dacia Sandero", unidades: 3511, fichaId: "dacia-sandero-tce-90-2026-precio-ficha-tecnica" },
      { modelo: "SEAT Ibiza", unidades: 2729, fichaId: "seat-ibiza-10-tsi-2026-precio-ficha-tecnica" },
      { modelo: "Peugeot 2008", unidades: 2594, fichaId: "peugeot-e-2008-electrico-2026-precio-ficha-tecnica" },
      { modelo: "Toyota Corolla", unidades: 2511, fichaId: "toyota-corolla-berlina-2025-precio-ficha-tecnica" },
      { modelo: "Peugeot 208", unidades: 2390, fichaId: "peugeot-208-hibrido-110-2026-precio-ficha-tecnica" },
    ],
  },
  {
    periodo: "2026-05",
    etiqueta: "Mayo 2026",
    totalMercado: 111984,
    fuente: "ANFAC vía carnovo.com",
    ranking: [
      { modelo: "Dacia Sandero", unidades: 3215, fichaId: "dacia-sandero-tce-90-2026-precio-ficha-tecnica" },
      { modelo: "Hyundai Tucson", unidades: 2561, fichaId: "hyundai-tucson-hibrido-2026-precio-ficha-tecnica" },
      { modelo: "SEAT Ibiza", unidades: 2451, fichaId: "seat-ibiza-10-tsi-2026-precio-ficha-tecnica" },
      { modelo: "Toyota Corolla", unidades: 2230, fichaId: "toyota-corolla-berlina-2025-precio-ficha-tecnica" },
      { modelo: "MG ZS", unidades: 2183, fichaId: "mg-zs-gasolina-2025-precio-ficha-tecnica" },
    ],
  },
  {
    periodo: "2026-06",
    etiqueta: "Junio 2026",
    totalMercado: 128426,
    fuente: "ANFAC vía Ganvam/autonocion.com",
    ranking: [
      { modelo: "Dacia Sandero", unidades: 4288, fichaId: "dacia-sandero-tce-90-2026-precio-ficha-tecnica" },
      { modelo: "SEAT Ibiza", unidades: 3404, fichaId: "seat-ibiza-10-tsi-2026-precio-ficha-tecnica" },
      { modelo: "Peugeot 2008", unidades: 2535, fichaId: "peugeot-e-2008-electrico-2026-precio-ficha-tecnica" },
      { modelo: "Toyota Corolla", unidades: 2449, fichaId: "toyota-corolla-berlina-2025-precio-ficha-tecnica" },
      { modelo: "MG ZS", unidades: 2381, fichaId: "mg-zs-gasolina-2025-precio-ficha-tecnica" },
    ],
  },
  {
    periodo: "2026-07",
    etiqueta: "Julio 2026",
    totalMercado: 101949,
    fuente: "ANFAC vía Faconauto/coches.net",
    ranking: [
      { modelo: "Dacia Sandero", unidades: 3192, fichaId: "dacia-sandero-tce-90-2026-precio-ficha-tecnica" },
      { modelo: "SEAT Ibiza", unidades: 2521, fichaId: "seat-ibiza-10-tsi-2026-precio-ficha-tecnica" },
      { modelo: "Toyota C-HR", unidades: 2111, fichaId: "toyota-c-hr-200h-2025-precio-ficha-tecnica" },
      { modelo: "Peugeot 2008", unidades: 2076, fichaId: "peugeot-e-2008-electrico-2026-precio-ficha-tecnica" },
      { modelo: "Toyota Yaris Cross", unidades: 2005, fichaId: "toyota-yaris-cross-hybrid-2024-precio-ficha-tecnica" },
    ],
  },
  {
    periodo: "2026-08",
    etiqueta: "Agosto 2026",
    totalMercado: 68544,
    fuente: "ANFAC vía coches.net/km77.com",
    ranking: [
      { modelo: "Dacia Sandero", unidades: 2037, fichaId: "dacia-sandero-tce-90-2026-precio-ficha-tecnica" },
      { modelo: "Toyota Corolla", unidades: 1762, fichaId: "toyota-corolla-berlina-2025-precio-ficha-tecnica" },
      { modelo: "Toyota Yaris", unidades: 1705, fichaId: "toyota-yaris-130h-2025-precio-ficha-tecnica" },
      { modelo: "SEAT Ibiza", unidades: 1530, fichaId: "seat-ibiza-10-tsi-2026-precio-ficha-tecnica" },
      { modelo: "SEAT Arona", unidades: 1330, fichaId: "seat-arona-15-tsi-2026-precio-ficha-tecnica" },
    ],
  },
  {
    periodo: "2026-09",
    etiqueta: "Septiembre 2026",
    totalMercado: 93858,
    fuente: "ANFAC vía coches.net/somoselectricos.com",
    ranking: [
      { modelo: "Tesla Model 3", unidades: 2528, fichaId: "tesla-model-3-gran-autonomia-traccion-trasera-2026-precio-ficha-tecnica" },
      { modelo: "SEAT Ibiza", unidades: 2183, fichaId: "seat-ibiza-10-tsi-2026-precio-ficha-tecnica" },
      { modelo: "Dacia Sandero", unidades: 2157, fichaId: "dacia-sandero-tce-90-2026-precio-ficha-tecnica" },
      { modelo: "Toyota Corolla", unidades: 2138, fichaId: "toyota-corolla-berlina-2025-precio-ficha-tecnica" },
      { modelo: "Toyota C-HR", unidades: 2121, fichaId: "toyota-c-hr-200h-2025-precio-ficha-tecnica" },
    ],
  },
  {
    periodo: "2026-10",
    etiqueta: "Octubre 2026",
    totalMercado: 98487,
    fuente: "ANFAC (nota de prensa 02/11/2026)",
    ranking: [
      { modelo: "Dacia Sandero", unidades: 3284, fichaId: "dacia-sandero-tce-90-2026-precio-ficha-tecnica" },
      { modelo: "Toyota Corolla", unidades: 2143, fichaId: "toyota-corolla-berlina-2025-precio-ficha-tecnica" },
      { modelo: "BYD Atto 2", unidades: 1911, fichaId: "byd-atto-2-precio-ficha-tecnica" },
      { modelo: "MG ZS", unidades: 1781, fichaId: "mg-zs-gasolina-2025-precio-ficha-tecnica" },
      { modelo: "Kia Sportage", unidades: 1769, fichaId: "kia-sportage-hev-2025-precio-ficha-tecnica" },
      { modelo: "Peugeot 2008", unidades: 1701, fichaId: "peugeot-e-2008-electrico-2026-precio-ficha-tecnica" },
      { modelo: "Volkswagen T-Roc", unidades: 1645, fichaId: "volkswagen-t-roc-15-etsi-2026-precio-ficha-tecnica" },
      { modelo: "SEAT Ibiza", unidades: 1644, fichaId: "seat-ibiza-10-tsi-2026-precio-ficha-tecnica" },
      { modelo: "Toyota C-HR", unidades: 1612, fichaId: "toyota-c-hr-200h-2025-precio-ficha-tecnica" },
      { modelo: "Volkswagen Tiguan", unidades: 1506, fichaId: "volkswagen-tiguan-15-etsi-2026-precio-ficha-tecnica" },
    ],
  },
];

/** Acumulado 2026 turismos (ene–oct), publicado por ANFAC en la nota de octubre (02/11/2026). */
export const ACUMULADO_COCHES_2026: ModeloVendido[] = [
  { modelo: "Dacia Sandero", unidades: 29210, fichaId: "dacia-sandero-tce-90-2026-precio-ficha-tecnica" },
  { modelo: "SEAT Ibiza", unidades: 23664, fichaId: "seat-ibiza-10-tsi-2026-precio-ficha-tecnica" },
  { modelo: "Toyota Corolla", unidades: 21400, fichaId: "toyota-corolla-berlina-2025-precio-ficha-tecnica" },
  { modelo: "Toyota C-HR", unidades: 19663, fichaId: "toyota-c-hr-200h-2025-precio-ficha-tecnica" },
  { modelo: "MG ZS", unidades: 18489, fichaId: "mg-zs-gasolina-2025-precio-ficha-tecnica" },
  { modelo: "Peugeot 208", unidades: 17548, fichaId: "peugeot-208-hibrido-110-2026-precio-ficha-tecnica" },
  { modelo: "SEAT Arona", unidades: 17508, fichaId: "seat-arona-15-tsi-2026-precio-ficha-tecnica" },
  { modelo: "Toyota Yaris Cross", unidades: 17117, fichaId: "toyota-yaris-cross-hybrid-2024-precio-ficha-tecnica" },
  { modelo: "Peugeot 2008", unidades: 16990, fichaId: "peugeot-e-2008-electrico-2026-precio-ficha-tecnica" },
  { modelo: "Hyundai Tucson", unidades: 15535, fichaId: "hyundai-tucson-hibrido-2026-precio-ficha-tecnica" },
];

export const PERIODOS_MOTOS: PeriodoVentas[] = [
  {
    periodo: "2026-01",
    etiqueta: "Enero 2026",
    totalMercado: null,
    fuente: "Derivado de ANESDOR/MSI vía motorbikemag.es (ene–feb menos feb); orden verificado con publimotos.com",
    ranking: [
      { modelo: "Yamaha NMAX 125", unidades: 588, fichaId: "yamaha-nmax-125-2025-ficha-tecnica-precio" },
      { modelo: "Honda PCX 125", unidades: 585, fichaId: "honda-pcx125-2025-ficha-tecnica-precio" },
      { modelo: "Zontes 368 G", unidades: 543 },
      { modelo: "Voge 900 DSX", unidades: 420, fichaId: "voge-900dsx-2024-ficha-tecnica-precio" },
      { modelo: "SYM Symphony 125", unidades: 417, fichaId: "sym-symphony-st-125-2026-ficha-tecnica-precio" },
    ],
  },
  {
    periodo: "2026-02",
    etiqueta: "Febrero 2026",
    totalMercado: 18987,
    fuente: "ANESDOR vía motorbikemag.es/revistatumoto.com",
    ranking: [
      { modelo: "Yamaha NMAX 125", unidades: 822, fichaId: "yamaha-nmax-125-2025-ficha-tecnica-precio" },
      { modelo: "Voge DS 800 Rally", unidades: 760 },
      { modelo: "Honda PCX 125", unidades: 642, fichaId: "honda-pcx125-2025-ficha-tecnica-precio" },
      { modelo: "Zontes 368 G", unidades: 629 },
      { modelo: "Honda SH 125 Scoopy", unidades: 445 },
    ],
  },
  {
    periodo: "2026-03",
    etiqueta: "Marzo 2026",
    totalMercado: null,
    fuente: "ANESDOR/MSI vía motorbikemag.es",
    ranking: [
      { modelo: "Yamaha NMAX 125", unidades: 1111, fichaId: "yamaha-nmax-125-2025-ficha-tecnica-precio" },
      { modelo: "Honda PCX 125", unidades: 1071, fichaId: "honda-pcx125-2025-ficha-tecnica-precio" },
      { modelo: "Voge DS 800 Rally", unidades: 886 },
      { modelo: "Zontes 368 G", unidades: 819 },
      { modelo: "Honda SH 125 Scoopy", unidades: 477 },
    ],
  },
  {
    periodo: "2026-04",
    etiqueta: "Abril 2026",
    totalMercado: 26150,
    fuente: "ANESDOR vía motorbikemag.es",
    ranking: [
      { modelo: "Yamaha NMAX 125", unidades: 1216, fichaId: "yamaha-nmax-125-2025-ficha-tecnica-precio" },
      { modelo: "Honda PCX 125", unidades: 1041, fichaId: "honda-pcx125-2025-ficha-tecnica-precio" },
      { modelo: "Zontes 368 G", unidades: 813 },
      { modelo: "Voge DS 800 Rally", unidades: 617 },
      { modelo: "Rieju Rally 307", unidades: 571, fichaId: "rieju-aventura-rally-307-2026-ficha-tecnica-precio" },
    ],
  },
  {
    periodo: "2026-05",
    etiqueta: "Mayo 2026",
    totalMercado: null,
    fuente: "ANESDOR/MSI vía motorbikemag.es/mototaller.info",
    ranking: [
      { modelo: "Yamaha NMAX 125", unidades: 1343, fichaId: "yamaha-nmax-125-2025-ficha-tecnica-precio" },
      { modelo: "Honda PCX 125", unidades: 1046, fichaId: "honda-pcx125-2025-ficha-tecnica-precio" },
      { modelo: "Zontes 368 G", unidades: 1043 },
      { modelo: "SYM Symphony 125", unidades: 624, fichaId: "sym-symphony-st-125-2026-ficha-tecnica-precio" },
      { modelo: "Voge DS 800 Rally", unidades: 551 },
    ],
  },
  {
    periodo: "2026-06",
    etiqueta: "Junio 2026",
    totalMercado: 35210,
    fuente: "ANESDOR vía mototaller.info",
    ranking: [
      { modelo: "Zontes X 125", unidades: 1826 },
      { modelo: "Yamaha NMAX 125", unidades: 1512, fichaId: "yamaha-nmax-125-2025-ficha-tecnica-precio" },
      { modelo: "Honda PCX 125", unidades: 1263, fichaId: "honda-pcx125-2025-ficha-tecnica-precio" },
      { modelo: "Zontes 368 G", unidades: 1177 },
      { modelo: "SYM Symphony 125", unidades: 984, fichaId: "sym-symphony-st-125-2026-ficha-tecnica-precio" },
    ],
  },
  {
    periodo: "2026-07",
    etiqueta: "Julio 2026",
    totalMercado: null,
    fuente: "ANESDOR/MSI vía revistasmotos.cl",
    ranking: [
      { modelo: "Zontes X 125", unidades: 2035 },
      { modelo: "Yamaha NMAX 125", unidades: 1472, fichaId: "yamaha-nmax-125-2025-ficha-tecnica-precio" },
      { modelo: "Honda PCX 125", unidades: 1272, fichaId: "honda-pcx125-2025-ficha-tecnica-precio" },
      { modelo: "Zontes 368 G", unidades: 1145 },
      { modelo: "SYM Symphony 125", unidades: 900, fichaId: "sym-symphony-st-125-2026-ficha-tecnica-precio" },
    ],
  },
  {
    periodo: "2026-08",
    etiqueta: "Agosto 2026",
    totalMercado: 22440,
    fuente: "ANESDOR vía carwow.es (solo se publicaron los dos primeros puestos por modelo)",
    ranking: [
      { modelo: "Zontes 125X", unidades: 2095 },
      { modelo: "Yamaha NMAX 125", unidades: 1062, fichaId: "yamaha-nmax-125-2025-ficha-tecnica-precio" },
    ],
  },
  {
    periodo: "2026-09",
    etiqueta: "Septiembre 2026",
    totalMercado: 30696,
    fuente: "ANESDOR vía mototaller.info",
    ranking: [
      { modelo: "Zontes 125V", unidades: 1899 },
      { modelo: "Yamaha NMAX 125", unidades: 1408, fichaId: "yamaha-nmax-125-2025-ficha-tecnica-precio" },
      { modelo: "Zontes 125X", unidades: 1354 },
      { modelo: "Honda PCX 125", unidades: 1166, fichaId: "honda-pcx125-2025-ficha-tecnica-precio" },
      { modelo: "Zontes 368 G", unidades: 881 },
    ],
  },
  {
    periodo: "2026-10",
    etiqueta: "Octubre 2026",
    totalMercado: 27936,
    fuente: "ANESDOR vía motos.net (top 5); puestos 6–10 DGT vía loscochesmasvendidos.com",
    ranking: [
      { modelo: "Zontes X 125", unidades: 1701 },
      { modelo: "Zontes 125 V", unidades: 1594 },
      { modelo: "Yamaha NMAX 125", unidades: 1263, fichaId: "yamaha-nmax-125-2025-ficha-tecnica-precio" },
      { modelo: "Honda PCX 125", unidades: 921, fichaId: "honda-pcx125-2025-ficha-tecnica-precio" },
      { modelo: "Zontes 368 G", unidades: 671 },
      { modelo: "Honda Forza 125", unidades: 449, fichaId: "honda-forza-125-2025-ficha-tecnica-precio" },
      { modelo: "SYM Symphony 125", unidades: 430, fichaId: "sym-symphony-st-125-2026-ficha-tecnica-precio" },
      { modelo: "Kymco Agility NX 125", unidades: 410, fichaId: "kymco-agility-nx-125-2026-ficha-tecnica-precio" },
      { modelo: "Voge SR450X", unidades: 370, fichaId: "voge-sr450x-2026-ficha-tecnica-precio" },
      { modelo: "Yamaha XMAX 125", unidades: 367, fichaId: "yamaha-xmax-125-2025-ficha-tecnica-precio" },
    ],
  },
];

/**
 * Acumulado 2026 motos (ene–oct): suma de los meses publicados en PERIODOS_MOTOS.
 * Nota honesta: en agosto solo se publicaron los dos primeros puestos por modelo,
 * así que las cifras de agosto no están incluidas para el resto de modelos. Desde
 * octubre se publican los 10 primeros por mes; los meses anteriores solo aportan
 * su top 5. "Zontes X 125 / 125X" agrupa las dos grafías del mismo modelo.
 */
export const ACUMULADO_MOTOS_2026: ModeloVendido[] = [
  { modelo: "Yamaha NMAX 125", unidades: 11797, fichaId: "yamaha-nmax-125-2025-ficha-tecnica-precio" },
  { modelo: "Zontes X 125 / 125X", unidades: 9011 },
  { modelo: "Honda PCX 125", unidades: 9007, fichaId: "honda-pcx125-2025-ficha-tecnica-precio" },
  { modelo: "Zontes 368 G", unidades: 7721 },
  { modelo: "SYM Symphony 125", unidades: 5264, fichaId: "sym-symphony-st-125-2026-ficha-tecnica-precio" },
  { modelo: "Voge DS 800 Rally", unidades: 4145 },
  { modelo: "Honda Forza 125", unidades: 3964, fichaId: "honda-forza-125-2025-ficha-tecnica-precio" },
  { modelo: "Honda SH 125 Scoopy", unidades: 3758 },
  { modelo: "Zontes 125V", unidades: 3493 },
  { modelo: "Voge 900 DSX", unidades: 1746, fichaId: "voge-900dsx-2024-ficha-tecnica-precio" },
];
