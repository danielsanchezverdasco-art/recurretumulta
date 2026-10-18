// Autocaravanas Rapido — lote Merlín 1 (18/10/2026).
// Datos verificados: rapido-camping-car.fr (web oficial del fabricante: confirma para el
// V55 la pertenencia a la serie especial OPTIMUM LINE y el sistema patentado
// MODUL'SPACE®; Rapido NO publica fichas técnicas detalladas por modelo ni precios en
// su web pública). Los datos técnicos proceden de fichas de la red de concesionarios
// franceses de unidades 2026 (datos coincidentes), claramente identificados como tales.
// Precio "desde" no publicado por el fabricante en ningún mercado → null (no inventar).
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const AUTOCARAVANAS_RAPIDO_M1: CocheComparador[] = [
  {
    id: "rapido-v55-2026-precio-ficha-tecnica",
    marca: "Rapido",
    modelo: "V55 Optimum Line",
    tipo: "Camper (furgoneta camper)",
    categoria: "Autocaravana",
    precioDesde: null, // Rapido no publica ningún precio oficial; solo existen precios de concesionarios
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
    imagen: "/media/rapido-v55-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/rapido-v55-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/rapido-v55-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990,
    anchoMm: 2050,
    altoMm: 2590,
    pesoKg: null, // no publicado por el fabricante; una ficha de concesionario de unidad 2026 indica 3.040 kg en vacío
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Menos de 6 m con 3 plazas de dormir y 4 de viaje: formato muy compacto y maniobrable, ideal para uso diario y ciudad",
      "Sistema patentado MODUL'SPACE®: en un van de menos de 6 m consigue ducha y WC separados de verdad, algo único en su categoría",
      "Cama transversal trasera de 195x132 cm con soute modulable debajo (caben 2 bicis) y colchón Bultex",
      "Buenas autonomías de serie: 110 l de agua limpia y 85 l de residuales, por encima de muchos rivales de 6 m",
      "Serie especial OPTIMUM LINE sobre-equipada de serie: multimedia con Apple CarPlay/Android Auto, cámara de marcha atrás, Traction+ y construcción XHP",
    ],
    contras: [
      "El fabricante no publica ningún precio oficial: imposible comparar sin pasar por concesionario y los precios de red varían mucho",
      "La tercera plaza de dormir es una cama auxiliar de dinette estrecha (185x63-97 cm), poco cómoda para un adulto",
      "La cama transversal mide 195 cm de largo: personas altas dormirán justas",
      "El armario MODUL'SPACE hay que moverlo cada vez que se quiere duchar o usar la cama: operativa diaria obligada",
      "Con unos 3.040 kg en vacío según ficha de concesionario, la carga útil real queda en unos 460 kg: con 4 personas, agua llena y equipaje se agota rápido",
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
        src: "/media/rapido-v55-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Rapido V55 Optimum Line, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/rapido-v55-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Rapido V55, sistema Modul'Space",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "rapido-v55-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Peugeot Boxer 2.2: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Peugeot)",
      revisiones: [
        {
          nombre: "Revisión Peugeot Boxer (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Rapido (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Peugeot Boxer + recomendaciones Rapido",
    },
    euroncap: null,
    fuenteNombre:
      "Rapido (web oficial: OPTIMUM LINE y MODUL'SPACE®) + red de concesionarios FR (datos técnicos de unidades 2026)",
    fuenteUrl:
      "https://www.rapido-camping-car.fr/inc/rapido_nouveautes_les-fourgons_camping-car-serie-vans.phtml",
  },
];
