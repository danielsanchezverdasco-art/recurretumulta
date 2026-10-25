// COMPARADOR EXP-M29 — 1 ficha nueva de moto (SWM).
// Investigación verificada 08/10/2026. Datos verificados en fuentes oficiales y prensa
// especializada; null donde no hay dato verificado. Nada inventado.
// Esquema: MotoComparador (comparador-motos-data.ts).
import type { MotoComparador } from "./comparador-motos-data.ts";

export const MOTOS_EXP_M29: MotoComparador[] = [
  {
    id: "swm-superdual-650-2024-ficha-tecnica-precio",
    marca: "SWM Motorcycles",
    modelo: "Superdual 650",
    version: "Superdual 650 X",
    cilindradaCc: 600,
    categoria: "Trail",
    precioDesde: 5990,
    potenciaKw: 40,
    potenciaCv: 54,
    autonomiaKm: null,
    autonomiaCiclo: null,
    bateriaKwh: null,
    velocidadMax: null,
    ceroCincuenta: null,
    pesoKg: 169,
    plazas: 2,
    carnet: "A",
    carga: null,
    etiquetaDgt: "C",
    aprox: ["pesoKg"],
    pros: [
      "5.990 €: la trail monocilíndrica europea más asequible del segmento medio",
      "Monocilíndrico italiano de 600 cc con 54 CV: respuesta llena desde abajo y ADN Husqvarna TE 630",
      "169 kg en seco: ligera para su cilindrada, con llanta de 21\" delante y 18\" detrás",
      "Depósito de 18 litros: más de 300 km de autonomía real según la prueba de motorionline",
      "Componentes serios: frenos Brembo con ABS desconectable, horquilla invertida y amortiguador Sachs regulable",
      "De serie: defensas de motor, focos auxiliares, caballete central y soportes para maletas",
    ],
    contras: [
      "Asiento a 890 mm: alto para pilotos de talla baja",
      "Sillín poco cómodo en tiradas largas según la prueba de motorionline",
      "Red de concesionarios reducida en España: recambios y reventa más lentos",
      "Sin electrónica moderna: ni modos de conducción, ni control de tracción, ni pantalla TFT",
      "No incluye herramientas a bordo de serie",
      "Versión X campera: protección aerodinámica limitada para autopista",
    ],
    curiosidades: [
      "Su motor deriva de la Husqvarna TE 630 de la época BMW-Husqvarna; SWM produce en la antigua fábrica italiana de Varese",
      "Existe en dos versiones: la X (21\"/18\", roja y blanca, más campera) y la T (19\"/17\", negra y gris, más rutera)",
      "La versión GT se entrega con maletas rígidas Givi Trekker montadas de fábrica",
      "SWM ofrece 24 meses o 20.000 km de garantía en piezas y mano de obra",
    ],
    imagen: "/media/swm-superdual-650-2024-precio-hero.webp",
    galeria: [
      {
        src: "/media/swm-superdual-650-2024-precio-hero.webp",
        alt: "SWM Superdual 650 X 2024 roja y blanca, vista tres cuartos",
        ancho: 1600,
        alto: 1066,
      },
      {
        src: "/media/swm-superdual-650-2024-precio-galeria-1.webp",
        alt: "SWM Superdual 650 X 2024, detalle del frontal con faro LED y horquilla invertida",
        ancho: 1600,
        alto: 1066,
      },
      {
        src: "/media/swm-superdual-650-2024-precio-galeria-2.webp",
        alt: "SWM Superdual 650 X 2024 circulando por una pista de tierra",
        ancho: 1600,
        alto: 1066,
      },
    ],
    videoId: null,
    videoCanal: null,
    fuenteNombre: "sqem.es (PVP España) / ficha oficial SWM (folleto)",
    fuenteUrl: "https://www.sqem.es/swm-superdual-650-x_pr482891",
    analisisSlug: "swm-superdual-650-2024-precio",
    mantenimientoDIY: null,
    planMantenimiento: {
      intervalo: "Aceite cada ~4.800 km; reglaje de válvulas cada ~9.600 km (intervalos de la review de larga duración)",
      revisiones: [
        {
          nombre: "Cambio de aceite (cada ~4.800 km)",
          queSeCambia: "Aceite de motor cada 3.000 millas según el uso del propietario de la review",
          costeAproxEur: null,
        },
        {
          nombre: "Reglaje de válvulas (cada ~9.600 km)",
          queSeCambia: "Comprobación y ajuste de holguras cada 6.000 millas; el monocilíndrico permite hacerlo en casa con herramientas básicas",
          costeAproxEur: null,
        },
      ],
      costeAnualAproxEur: null,
      fuente: "Review de larga duración de la Superdual en defylife.com (intervalos del propietario, no del manual oficial)",
    },
  },
];
