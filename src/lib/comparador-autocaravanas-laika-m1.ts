// Autocaravanas Laika — lote Merlín 1 (18/10/2026).
// Datos verificados: lista oficial de precios y fichas técnicas Laika 2026 (documento
// oficial de la marca, válido desde 01/08/2025; consultado vía mirror porque no se
// localizó el descargable en laika.it; la web oficial confirma la gama Ecovip).
// Precio "desde" publicado en la lista oficial (mercado francés), marcado en "aprox";
// en España puede diferir.
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const AUTOCARAVANAS_LAIKA_M1: CocheComparador[] = [
  {
    id: "laika-ecovip-600-2026-precio-ficha-tecnica",
    marca: "Laika",
    modelo: "Ecovip 600",
    tipo: "Camper (furgoneta camper)",
    categoria: "Autocaravana",
    precioDesde: 71314,
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
    imagen: "/media/laika-ecovip-600-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/laika-ecovip-600-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/laika-ecovip-600-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990,
    anchoMm: 2050,
    altoMm: 2650, // 2.750 mm con el techo elevable opcional
    pesoKg: 2862, // masa en orden de marcha, cifra única oficial con tolerancia publicada ±5% (2.719-3.005 kg)
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: 638, // calculada: 3.500 - 2.862 (MMA menos peso en orden de marcha)
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde"],
    pros: [
      "Precio público oficial (71.314 € en la lista 2026 de Francia): transparencia total de tarifa base, algo que su rival directo francés no ofrece",
      "Doble suelo real (delantero iluminado con almacenaje más trasero) con aislamiento XPS/Alu-Ecofiber: mejor confort térmico y más almacenaje protegido que un suelo simple",
      "Baño Vario con maxi-ducha separable y puerta corredera: ducha independiente de verdad en 5,99 m, sin cortinilla improvisada",
      "Cama trasera de 196x150-138 cm desmontable: se convierte en zona de carga para bultos grandes, y con el techo elevable opcional el modelo llega a 5 plazas",
      "Paquete de seguridad de serie muy completo: Traction+, Hill Descent, estabilización de remolque y frenada automática post-colisión; ayudas que en otros son opcionales",
    ],
    contras: [
      "Masa en orden de marcha de 2.862 kg (con tolerancia ±5%): con 4 ocupantes y opciones, los unos 638 kg de carga útil se consumen rápido y hay que vigilar el peso",
      "Nevera de compresor de solo 84 l: sensiblemente menor que los 138 l opcionales del Pilote V600G",
      "Cambio manual de serie y depósito de gasóleo de solo 60 l (frente a 90 l del Pilote): menos autonomía entre repostajes",
      "Dotación eléctrica modesta de serie: una sola toma de 230 V, una de 12 V y batería de 95 Ah sin litio",
      "El techo elevable (2,75 m de altura total) y la quinta plaza son opcionales de pago: la versatilidad familiar completa encarece el precio base publicado",
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
        src: "/media/laika-ecovip-600-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Laika Ecovip 600, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/laika-ecovip-600-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Laika Ecovip 600, baño Vario",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "laika-ecovip-600-2026-precio-ficha-tecnica",
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
          nombre: "Revisión célula Laika (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Laika",
    },
    euroncap: null,
    fuenteNombre: "Laika (lista oficial de precios y fichas técnicas 2026)",
    fuenteUrl: "https://www.laika.it/",
  },
];
