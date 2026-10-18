// Autocaravanas Chausson — lote Merlín 1 (18/10/2026).
// Datos verificados: chausson-camping-cars.fr (PDF oficial de la gama Titanium),
// leboncoin.fr (precio «no oficial» de anuncio de concesionario en Francia, orientativo;
// Chausson no publica PVP: su política es negociar el precio en la red de concesionarios).
// Precio "desde" del 640 Titanium marcado en "aprox".
// NOTA DE NOMENCLATURA: «727 GA» no existe en las colecciones oficiales 2026/2027
// (fue un modelo de la colección 2019, descatalogado); la ficha corresponde al modelo
// oficial vigente más próximo: 777 Titanium Line (colección 2027, perfilada de camas
// gemelas, 7,19 m sobre Ford Transit; sitio oficial de exportación del fabricante).
// Muchos datos del 777 (potencia, MMA, carga útil, depósitos, anchura y altura exactas)
// no están publicados en el sitio oficial → null (no inventar).
// Precio no publicado por el fabricante → null.
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_CHAUSSON_M1: Autocaravana[] = [
  {
    id: "chausson-640-titanium-2026-precio-ficha-tecnica",
    marca: "Chausson",
    modelo: "640 Titanium",
    tipo: "Autocaravana perfilada",
    categoria: "Autocaravana",
    precioDesde: 68900, // «no oficial»: anuncio de concesionario en LeBonCoin (Francia); Chausson no publica PVP
    potenciaCv: 170,
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
    imagen: "/media/chausson-640-titanium-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/chausson-640-titanium-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/chausson-640-titanium-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990,
    anchoMm: 2350,
    altoMm: 2920,
    pesoKg: 2997, // masa en orden de marcha según PDF oficial Chausson (±5 %)
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde"],
    pros: [
      "Serie Titanium, la más vendida de Chausson en Europa: valor de reventa muy sólido en el mercado de ocasión",
      "Chasis Ford Transit con carrocería gris de poliéster: estética diferenciada que no pasa desapercibida",
      "Concepto SmartLounge: los asientos de los pasajeros se extraen de los sofás y el salón se hace XL",
      "Cama basculante eléctrica de 160 cm de ancho sobre el maxi-salón: se duerme a lo ancho, no a lo largo",
      "Baño de ancho completo con ducha separada por puerta: el aseo más generoso entre las perfiladas de 7 m",
    ],
    contras: [
      "Marca francesa con red pequeña en España: menos concesionarios que Benimar o Dethleffs para servicio",
      "El precio de referencia (68.900 €) es de Francia: el PVP español lo fija cada importador",
      "La cama basculante central, al bajar, deja el salón sin altura libre: incómoda si se usa cada noche",
      "2,35 m de anchura total: en carreteras secundarias estrechas se conduce con más atención",
      "Equipamiento Titanium muy completo, pero los acabados interiores son funcionales antes que premium",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 13.5,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 650,
      seguroAmpliadoAnual: 1200,
      mantenimientoAnual: 600,
      costeMensualTotal: 420,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~10 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/chausson-640-titanium-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Chausson 640 Titanium, vista tres cuartos delantera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/chausson-640-titanium-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Chausson 640 Titanium, SmartLounge",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "chausson-640-titanium-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Ford Transit: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Ford)",
      revisiones: [
        {
          nombre: "Revisión Ford Transit (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Chausson (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Ford Transit + recomendaciones Chausson",
    },
    euroncap: null,
    fuenteNombre: "Chausson (PDF oficial gama Titanium)",
    fuenteUrl:
      "https://www.chausson-camping-cars.fr/wp-content/uploads/chausson_titanium_2020_8pages-UK.pdf",
  },
  {
    id: "chausson-777-titanium-line-2026-precio-ficha-tecnica",
    marca: "Chausson",
    modelo: "777 Titanium Line",
    tipo: "Autocaravana perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Chausson no publica ningún precio oficial ("les justes prix" se negocian en su red de 165 concesionarios)
    potenciaCv: null, // no publicada en el sitio oficial (concesionarios 2027 indican 130 CV de serie, 165 CV opcional — no oficial)
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
    imagen: "/media/chausson-777-titanium-line-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/chausson-777-titanium-line-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/chausson-777-titanium-line-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7190, // sobre Ford Transit; 7.160 mm sobre Fiat
    anchoMm: null, // no publicado en el sitio oficial (concesionarios: 2.350 mm — no oficial)
    altoMm: null, // no publicado en el sitio oficial (concesionarios: 2.920 mm — no oficial)
    pesoKg: null, // no publicado por el fabricante
    mmaKg: null, // no publicado en el sitio oficial (concesionarios: 3.500 kg — no oficial)
    carnetNecesario: "B", // basado en la clase de 3,5 T típica de la gama; MMA oficial no publicado — confirmar en concesionario
    cargaUtilKg: null, // no publicada
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null, // no publicado por el fabricante
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Camas gemelas traseras de 90 cm de ancho cada una: más anchas que las gemelas habituales, con un gran garaje calefactado e iluminado debajo y doble portón de acceso",
      "Estructura IRP con techo, suelo y paredes de poliéster y suelo de 64 mm, más 7 años de garantía de estanqueidad con revisión anual: construcción pensada para durar",
      "Calefacción que usa el carburante del vehículo y funciona circulando: invierno sin depender de las bombonas de gas",
      "Salón Smart Lounge cara a cara con mesa central regulable en altura y longitud: el mismo salón sirve para comer, leer o recibir visita",
      "Pack Connect y preinstalación de cámara de marcha atrás y panel solar: la base para viajar bien equipado ya viene preparada de fábrica",
    ],
    contras: [
      "Solo 3 plazas de dormir de serie: la cuarta (cama basculante sobre el salón) es opcional, y sin ella no duerme una familia de cuatro",
      "Chausson no publica en su web potencia, MMA, carga útil ni dimensiones exactas del 777: la ficha técnica completa solo la tiene el concesionario",
      "Precio no publicado por el fabricante ('les justes prix' se negocian en sus 165 concesionarios europeos): imposible comparar la tarifa base sin oferta en mano",
      "7,19 m de longitud: aparcar y maniobrar en pueblos y áreas pequeñas exige más que con una perfilada de 6 m",
      "Las camas gemelas fijas ocupan toda la trasera: quien prefiera cama isla central o transversal no tiene esa opción en este modelo",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 13.5,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 650,
      seguroAmpliadoAnual: 1200,
      mantenimientoAnual: 600,
      costeMensualTotal: 420,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~10 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/chausson-777-titanium-line-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Chausson 777 Titanium Line, vista tres cuartos delantera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/chausson-777-titanium-line-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Chausson 777 Titanium Line, camas gemelas y Smart Lounge",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "chausson-777-titanium-line-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Ford Transit 2.0 diésel: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Ford)",
      revisiones: [
        {
          nombre: "Revisión Ford Transit (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Chausson (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Ford Transit + recomendaciones Chausson",
    },
    euroncap: null,
    fuenteNombre:
      "Chausson (sitio oficial de exportación, gama 2027 + catálogo oficial 2019)",
    fuenteUrl: "https://www.chausson-motorhomes.com/line/low-profiles/",
  },
];
