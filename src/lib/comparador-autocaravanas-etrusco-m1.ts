// Autocaravanas Etrusco — lote Merlín 1 (18/10/2026).
// Datos verificados: etrusco.com (web oficial; el T 7400 SB figura en la gama
// perfilada Fiat 2026: £72,799 PVP recomendado Reino Unido, 2-5 plazas para dormir,
// 3.500 kg de MMA) + catálogo oficial Etrusco (743 x 233 x 291 cm, 3.495/3.850 kg)
// + fichas de unidades 2026 de la red oficial (7.400 x 2.320 x 2.950 mm, Fiat Ducato
// 2.2 140 CV, masa 2.801 kg, carga útil 699 kg).
// Etrusco es marca del grupo Erwin Hymer, fabricada en la Toscana (Italia).
// Precio "desde" en EUR no publicado por el fabricante → null (no inventar);
// se documenta el PVP oficial británico (£72,799) en el comentario.
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
// CORRECCIÓN 4 (18/10/2026, T 7400 SB): dimensiones, MMA, masa y carga útil proceden de
// fichas de unidades 2026 de la red oficial (no de etrusco.com) → marcados «no oficial» en
// "aprox". La web oficial solo confirma PVP británico, plazas y motor Fiat Ducato 2.2.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_ETRUSCO_M1: Autocaravana[] = [
  {
    id: "etrusco-t-7400-sb-2026-precio-ficha-tecnica",
    marca: "Etrusco",
    modelo: "T 7400 SB",
    tipo: "Autocaravana perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Etrusco no publica PVP en EUR; web oficial (Reino Unido): £72,799
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet (103 kW), Euro 6; manual de serie, automático opcional
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/etrusco-t-7400-sb-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/etrusco-t-7400-sb-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/etrusco-t-7400-sb-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7400, // «no oficial»: el catálogo oficial de la serie indica 743 cm; las unidades 2026 listan 7.400 mm
    anchoMm: 2320, // «no oficial»: el catálogo oficial indica 233 cm; las unidades 2026 listan 2.320 mm
    altoMm: 2950, // «no oficial»: el catálogo oficial indica 291 cm; las unidades 2026 listan 2.950 mm
    pesoKg: 2801, // «no oficial»: ficha de unidad 2026 de la red oficial; Etrusco no publica la masa en su web
    mmaKg: 3500, // «no oficial»: según fichas de unidades 2026 de la red oficial (opcional 3.650 kg; 3.850 kg en catálogo oficial)
    carnetNecesario: "B",
    cargaUtilKg: 699, // «no oficial»: calculada (3.500 − 2.801) desde cifras de la red oficial
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas con cinturón; 2-5 plazas para dormir según configuración (etrusco.com)
    parNm: null, // no publicado en la documentación oficial consultada
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["largoMm", "anchoMm", "altoMm", "pesoKg", "mmaKg", "cargaUtilKg"], // «no oficial»: cifras de fichas de unidades 2026 de la red oficial, no de etrusco.com
    pros: [
      "Camas gemelas traseras de 217 x 80 cm que se unen en una doble gigante: el dormitorio más flexible de su precio",
      "Baño con ducha separada e independiente al otro lado del pasillo: ducharse sin plegar ni reconfigurar nada",
      "Gran garaje trasero bajo las camas con portones exteriores: bicis y muebles de camping sin desmontar el dormitorio",
      "MMA de 3.500 kg con 699 kg de carga útil teórica: se conduce con el carnet B sin ir justo de peso",
      "La perfilada de 7,4 m más asequible del grupo Hymer: relación tamaño-precio difícil de igualar",
    ],
    contras: [
      "Sin PVP oficial publicado en euros: hay que pedir presupuesto a cada concesionario y comparar",
      "Motor de 140 CV con cambio manual de serie: el automático es opcional y encarece la compra",
      "Mobiliario y acabados de acceso para ajustar el precio: no esperes el refinamiento de una Hymer",
      "Calefacción Truma Combi 6 de gas: en invierno dependes de las bombonas, sin versión diésel de serie",
      "La cama abatible delantera es opcional: de serie duermen 2 y las plazas 3.ª a 5.ª se pagan aparte",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 17.6,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 600,
      seguroAmpliadoAnual: 1100,
      mantenimientoAnual: 550,
      costeMensualTotal: 315,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~11 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/etrusco-t-7400-sb-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Etrusco T 7400 SB, vista tres cuartos delantera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/etrusco-t-7400-sb-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Etrusco T 7400 SB, salón y camas gemelas",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "etrusco-t-7400-sb-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Etrusco (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones del fabricante",
    },
    euroncap: null,
    fuenteNombre: "Etrusco (web oficial) + catálogo oficial + fichas 2026 de la red oficial",
    fuenteUrl: "https://www.etrusco.com/gb/en/models/semi-integrated-fiat",
  },
];
