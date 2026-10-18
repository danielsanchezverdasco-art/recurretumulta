// Autocaravanas McLouis — lote Merlín 1 (18/10/2026).
// Datos verificados: catálogo oficial McLouis 2022 (última tabla técnica oficial publicada con el MC4 231;
// la web de McLouis indica que las fichas 2026 estarán disponibles próximamente y el listino Italia 2026
// ya no incluye el 231) + camperlife.it (prensa especializada, prueba del modelo).
// Sin PVP oficial de fábrica: precioDesde en null.
// Corrección 4 (18/10/2026): el catálogo oficial de 2022 es la última fuente de fábrica disponible y el
// 231 no figura en el listino 2026, por lo que su continuidad en gama es dudosa (ver contras).
// Precios "desde" orientativos para España marcados en "aprox".
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_MCLOUIS_M1: Autocaravana[] = [
  {
    id: "mclouis-mc4-231-2026-precio-ficha-tecnica",
    marca: "McLouis",
    modelo: "MC4 231",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // el fabricante no publica PVP del 231 (no figura en el listino 2026)
    potenciaCv: 120,
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
    imagen: "/media/mclouis-mc4-231-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/mclouis-mc4-231-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/mclouis-mc4-231-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990,
    anchoMm: 2350,
    altoMm: 2950,
    pesoKg: 2758, // catálogo oficial: 2758–2898 kg según equipamiento
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: 742, // catálogo oficial: 602–742 kg según equipamiento
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null, // no publicado por el fabricante
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Perfilada de menos de 6 m con carga útil de hasta 742 kg: de las más generosas en kilos de su tamaño",
      "Garaje trasero con dos portones simétricos y 300 kg de carga: entran bicis eléctricas sin desmontar nada",
      "Cama doble trasera de 216 × 130 cm sobre el garaje: longitud de cama de gama superior en formato compacto",
      "Motor Fiat de 120 CV con mecánica sencilla y probada: consumo contenido y mantenimiento barato",
      "Posicionamiento económico dentro de las perfiladas europeas: mucho vehículo por el dinero",
    ],
    contras: [
      "120 CV: el motor menos potente del lote; con la auto cargada a tope se nota en las subidas",
      "El fabricante aún no publica la ficha 2026 y el 231 no está en el listino Italia 2026: su continuidad está en duda",
      "Acabados sencillos acordes a su precio: no esperes materiales de gama alta en muebles y tapicerías",
      "Frigorífico trivalente de 137 l: la absorción tarda más en enfriar que un compresor con calor",
      "Con 2,95 m de alto y solo 5,99 m de largo, sufre con el viento lateral en autopista como toda perfilada alta",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 13.0,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 625,
      seguroAmpliadoAnual: 1150,
      mantenimientoAnual: 575,
      costeMensualTotal: 410,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~9,5 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/mclouis-mc4-231-2026-precio-ficha-tecnica-oficial.webp",
        alt: "McLouis MC4 231, vista tres cuartos delantera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/mclouis-mc4-231-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del McLouis MC4 231, salón en L y cocina",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "mclouis-mc4-231-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato: revisión cada 2 años o 48.000 km (lo que ocurra antes, según plan Fiat Professional)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 48.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de aire + filtro de gasóleo + inspección general",
          costeAproxEur: 400,
        },
        {
          nombre: "Revisión célula McLouis (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 650,
      fuente: "Plan de mantenimiento Fiat Professional Ducato + recomendaciones McLouis",
    },
    euroncap: null,
    fuenteNombre: "McLouis (catálogo oficial 2022) + camperlife.it (prensa especializada)",
    fuenteUrl:
      "https://www.jollycaravan.it/engine/public/base/dwl.php?co=1962&F=108200_CatalogoCAMPER_McLouis2022_ITA_Low-Res.pdf",
  },
];
