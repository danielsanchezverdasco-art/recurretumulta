// Autocaravanas Pössl — lote Merlín 1 (18/10/2026).
// Datos verificados: ADAC Wohnmobilmarkt (prensa especializada) + fichas de catálogo
// reproducidas por múltiples concesionarios (datos coincidentes en medidas, pesos y
// equipamiento). TRANSPARENCIA: poessl-mobile.de actualmente sirve contenido de Roadcar
// (marca hermana del grupo Pössl) y no se pudo extraer la ficha oficial del 2Win Plus.
// Precio "desde" no publicado → null (no inventar).
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_POSSL_M1: Autocaravana[] = [
  {
    id: "possl-2win-plus-2026-precio-ficha-tecnica",
    marca: "Pössl",
    modelo: "2Win Plus",
    tipo: "Camper (furgoneta camper)",
    categoria: "Autocaravana",
    precioDesde: null, // la lista oficial de Pössl existe, pero no se pudo verificar la cifra "desde" del 2Win Plus
    potenciaCv: 140,
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
    imagen: "/media/possl-2win-plus-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/possl-2win-plus-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/possl-2win-plus-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990,
    anchoMm: 2050,
    altoMm: 2580,
    pesoKg: 2860, // cifra única consistente en fichas de concesionarios; no disponible el PDF oficial
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: 640, // calculada: 3.500 - 2.860 (MMA menos peso en orden de marcha)
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Cama transversal de 196x148/142 cm: 12 cm más larga que la del Knaus BoxLife y sin estrechamientos acusados, apta para personas altas",
      "Carga útil de unos 640 kg: de las mejores del segmento en 6 m; admite 4 ocupantes, toldo y bicis sin rozar la MMA",
      "La mesa alternativa del comedor se convierte en cama de 180x70 cm con pieza dedicada de serie: sin tablas sueltas que guardar",
      "Paquete D-Line Plus de serie muy completo: Traction+, asientos Captain Chair giratorios, oscurecimiento total y cierre Softlock sin pagar extras",
      "Precios de lista sensiblemente menores que el rival directo alemán: unidades 'Last Edition' sobre 66.800-70.200 € en concesionarios",
    ],
    contras: [
      "Calefacción Truma Combi 4 a gas: calefacción y agua caliente dependen de dos bombonas de 11 kg, menos autonomía invernal que un diésel",
      "Nevera de compresor de 84 l más 8 l de congelador: justa para 4 personas en viajes largos",
      "El depósito de aguas grises (92 l) es menor que el de limpias (100 l): obliga a vaciar con más frecuencia",
      "140 CV justos a plena carga: con 3.500 kg y 4 ocupantes el motor base va servido en puertos; la versión de 165 CV con chasis Heavy encarece notablemente",
      "Cama transversal de acceso lateral único: como en todas, uno de los dos debe trepar sobre el otro para salir",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 12.6,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 600,
      seguroAmpliadoAnual: 1100,
      mantenimientoAnual: 550,
      costeMensualTotal: 390,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~9 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/possl-2win-plus-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Pössl 2Win Plus, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/possl-2win-plus-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Pössl 2Win Plus, cama transversal",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "possl-2win-plus-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Citroën Jumper 2.2: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Citroën)",
      revisiones: [
        {
          nombre: "Revisión Citroën Jumper (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Pössl (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Citroën Jumper + recomendaciones Pössl",
    },
    euroncap: null,
    fuenteNombre:
      "ADAC Wohnmobilmarkt + fichas de concesionarios (la web oficial del fabricante no publica ficha del modelo)",
    fuenteUrl:
      "https://wohnmobilmarkt.adac.de/campervans/poessl/d-line/19752477/poessl-d-line-2win-plus-heavy-chassis-140ps-duo-cs.bilder.html",
  },
];
