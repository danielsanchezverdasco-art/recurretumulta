import type { CocheComparador } from "./comparador-coches-data.ts";

/**
 * Fichas Changan — equipo Changan, 05/10/2026.
 * Modelos REALES de la marca Changan con presencia europea verificable (2024+):
 * - E06 (el Nevo Q05 con denominación europea): confirmado por Changan Europe
 *   (nota de prensa oficial, noviembre 2025), llegada a Europa a finales de 2026.
 *   NO duplicar: el Nevo Q06 ya existe en comparador-coches-nuevos.ts
 *   ("changan-nevo-q06-suv-electrico-paris-2026") y Deepal la cubre otro equipo
 *   (deepal-s07-precio-espana-ficha-tecnica, deepal-s09-2026-precio-ficha-tecnica,
 *   deepal-s05-precio-espana-2026 en el blog).
 * Excluidos tras verificación: Nevo Q07 (sin confirmación oficial de llegada a
 *   Europa), Nevo A05 (sin planes europeos confirmados), Nevo A06 y Nevo E07
 *   (solo China por ahora), Avatr (marca aparte, la cubre otro equipo).
 * Fuentes: nota de prensa oficial de Changan Europe (prezly/Changan Automobile
 *   Deutschland GmbH), testcoches.es, autocar.co.uk, fleetworld.co.uk,
 *   evpowered.co.uk, todosobreautos.com, elcarrocolombiano.com.
 */
export const COCHES_CHANGAN: CocheComparador[] = [
  {
    id: "changan-e06-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 200000,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/changan-e06-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: "gYXONlxir-Y",
    videoCanal: "Autos de Primera",
    marca: "Changan",
    modelo: "E06",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: null, // sin precio oficial publicado (estimaciones no oficiales ~30.000 €)
    potenciaCv: 274, // 200 kW / 274 PS oficiales
    autonomiaKm: 450, // WLTP oficial
    maleteroL: 545,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: 61.7, // LFP oficial
    cargaRapidaKw: 162, // continua oficial
    etiquetaDgt: "Cero",
    pros: [
      "450 km de autonomía WLTP con batería LFP de 61,7 kWh: rango usable para el día a día",
      "274 CV y carga rápida de 162 kW en continua (11 kW en alterna)",
      "Maletero de 545 L y 800 mm de espacio para las rodillas: el más amplio de su segmento",
      "Diseño adaptado a Europa: botones físicos, pantalla de 15,6\" y cuadro digital de 10,17\"",
      "Garantía de 7 años/160.000 km (8 años/200.000 km la batería): por encima de la media",
    ],
    contras: [
      "Precio aún sin confirmar: llegará a Europa a finales de 2026 sin tarifa oficial",
      "Marca casi desconocida en España: la red comercial está en despliegue",
      "Autonomía algo por detrás de los mejores del segmento (el Deepal S05 llega a 485 km)",
      "Compite en casa con el Deepal S05: 485 km, 200 kW de carga y 5 estrellas Euro NCAP desde 37.390 €",
      "Carga en alterna limitada a 11 kW: sin opción de carga doméstica más rápida",
    ],
    largoMm: 4435,
    anchoMm: 1860,
    altoMm: null,
    pesoKg: null,
    consumo: 16.0,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: null,
    traccion: "Delantera", // motor delantero (fuentes británicas)
    emisionesCo2: 0,
    aprox: [],
    imagen: "/media/changan-e06-2026-precio-ficha-tecnica-hero.webp",
    opiniones: [], // aún no hay propietarios en Europa: llega a finales de 2026
    costeMensual: {
      "costeEnergia100km": 2.9,
      "seguroTercerosAnual": 550,
      "seguroAmpliadoAnual": 1000,
      "mantenimientoAnual": 400,
      "costeMensualTotal": 153,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "estimación orientativa para 15.000 km/año: 16,0 kWh/100 km WLTP y 0,18 €/kWh; precio orientativo de gasolina incluido por requisito del formato (no aplica: es eléctrico puro)",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/changan-e06-2026-precio-ficha-tecnica-oficial.webp",
        "alt": "Changan E06, SUV eléctrico compacto, vista lateral tres cuartos",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "",
        "alt": "Changan E06, vista trasera tres cuartos con pilotos LED unidos",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "",
        "alt": "Interior del Changan E06: pantalla de 15,6 pulgadas y cuadro digital",
        "ancho": 1920,
        "alto": 1280
      }
    ],
  }
];
