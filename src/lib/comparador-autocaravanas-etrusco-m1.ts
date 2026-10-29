// Autocaravanas Etrusco — lote Merlín 1 (18/10/2026).
// Datos verificados: etrusco.com (web oficial; el T 7400 SB figura en la gama
// perfilada Fiat 2026: £72,799 PVP recomendado Reino Unido, 2-5 plazas para dormir,
// 3.500 kg de MMA) + catálogo oficial Etrusco (743 x 233 x 291 cm, 3.495/3.850 kg)
// + fichas de unidades 2026 de la red oficial (7.400 x 2.320 x 2.950 mm, Fiat Ducato
// 2.2 140 CV, masa 2.801 kg, carga útil 699 kg).
// Etrusco es marca del grupo Erwin Hymer, fabricada en la Toscana (Italia).
// Precio "desde" en EUR no publicado por el fabricante → null (no inventar);
// se documenta el PVP oficial británico (£72,799) en el comentario.
// CORRECCIÓN 5 (18/10/2026, cambios mecánicos): eliminado el bloque `costeMensual`;
// `cargaUtilKg` a null (era calculada: 3.500 − 2.801); `analisisSlug` nuevo;
// añadidos `plazasDormir` y `notas`.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_ETRUSCO_M1: Autocaravana[] = [
  {
    id: "etrusco-t-7400-sb-2026-precio-ficha-tecnica",
    marca: "Etrusco",
    modelo: "T 7400 SB",
    tipo: "perfilada",
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
    cargaUtilKg: null, // era 699 kg calculada (3.500 − 2.801); Etrusco no publica la carga útil del modelo
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas con cinturón; 2-5 plazas para dormir según configuración (etrusco.com)
    plazasDormir: null, // etrusco.com publica 2-5 plazas para dormir según configuración; sin cifra única
    parNm: null, // no publicado en la documentación oficial consultada
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["largoMm", "anchoMm", "altoMm", "pesoKg", "mmaKg"], // «no oficial»: cifras de fichas de unidades 2026 de la red oficial, no de etrusco.com
    pros: [
      "Camas gemelas traseras de 217 x 80 cm que se unen en una doble gigante: el dormitorio más flexible de su precio",
      "Baño con ducha separada e independiente al otro lado del pasillo: ducharse sin plegar ni reconfigurar nada",
      "Gran garaje trasero bajo las camas con portones exteriores: bicis y muebles de camping sin desmontar el dormitorio",
      "MMA de 3.500 kg: se conduce con el carnet B y queda margen para equipaje sin cambiar de permiso",
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
    descripcion: `Etrusco es la marca italiana del grupo Erwin Hymer, fabricada en la Toscana, y el T 7400 SB es su perfilada grande: 7,40 metros con camas gemelas traseras, el formato que las parejas viajeras europeas llevan décadas eligiendo cuando quieren dormir cada noche en camas hechas sin renunciar al salón. No es la Etrusco más equipada ni la más cara del grupo: es la puerta de entrada a las perfiladas de 7,4 metros del gigante Hymer, con una relación tamaño-precio que pocas rivales igualan. Si el plan es viajar a dos con comodidad y garaje grande, este es el formato.

Los datos oficiales de etrusco.com sitúan la gama: el T 7400 SB figura en la familia de perfiladas Fiat 2026 con 3.500 kg de MMA, de 2 a 5 plazas para dormir según configuración y un PVP recomendado en el Reino Unido de £72.799 —Etrusco no publica precio en euros, así que no hay cifra oficial en EUR que dar—. Las medidas y masas detalladas proceden de fichas de unidades 2026 de la red oficial y van marcadas como «dato no oficial»: 7.400 mm de largo, 2.320 mm de ancho y 2.950 mm de alto —el catálogo oficial de la serie indica 743 × 233 × 291 cm—, con una MMA de 3.500 kg ampliable a 3.650 kg en opción que permite conducirla con el carnet B. La masa en orden de marcha de las unidades 2026 ronda los 2.801 kg según la red oficial; la carga útil no consta en esta ficha, porque Etrusco no la publica. Homologa 4 plazas para viajar con cinturón.

La distribución SB —camas gemelas traseras— es el corazón del modelo: dos camas individuales de 217 × 80 cm que se unen en una doble gigante con la prolongación, el dormitorio más flexible de su precio, porque cada ocupante tiene su acceso sin molestar al otro y de día las camas quedan hechas. Debajo, un gran garaje trasero con portones exteriores admite bicicletas y muebles de camping sin desmontar el dormitorio. Delante, el salón con asientos giratorios de cabina; en el centro, la cocina equipada; y el baño, con ducha separada e independiente al otro lado del pasillo: ducharse sin plegar ni reconfigurar nada, un punto que no todas las perfiladas de este precio ofrecen. La cama abatible delantera es opcional: de serie duermen dos y las plazas tercera a quinta se pagan aparte, un detalle a tener claro antes de imaginar a cinco durmiendo de serie.

La base es el Fiat Ducato 2.2 Multijet de 140 CV con cambio manual de serie y automático en opción, tracción delantera. Son 140 CV para mover 3,5 toneladas: suficientes en llano y autovía, justos en puertos con la célula cargada, el peaje habitual del motor base. La calefacción es la Truma Combi 6 de gas: en invierno se depende de las bombonas, sin versión diésel de serie, algo a valorar si el plan incluye mucha temporada fría. Los acabados son los de una marca de acceso del grupo: mobiliario correcto y funcional, sin el refinamiento de una Hymer, que es exactamente lo que permite su precio.

En precio, la transparencia es parcial: Etrusco publica £72.799 como PVP recomendado en el Reino Unido, pero no hay tarifa oficial en euros y en España cada concesionario fija el suyo, así que comparar exige pedir presupuestos. Sus rivales son las perfiladas de 7,4 metros de las generalistas europeas —Dethleffs, Bürstner, Chausson— frente a las que el T 7400 SB compite con el precio más ajustado del grupo Hymer y con unas camas gemelas de 217 cm difíciles de igualar. Es para parejas que quieren una perfilada grande con camas siempre hechas, garaje de verdad y ducha separada, sin saltar al precio de las premium alemanas, y que aceptan acabados de acceso a cambio. No es para quien necesite cinco camas de serie sin opcionales ni para quien viaje mucho en invierno sin querer depender del gas. Cómo lo verificamos: la pertenencia a la gama de perfiladas Fiat 2026, la MMA de 3.500 kg, las 2-5 plazas para dormir según configuración y el PVP británico de £72.799 proceden de etrusco.com, revisada el 18/10/2026; las medidas (7.400 × 2.320 × 2.950 mm), el motor Fiat Ducato 2.2 de 140 CV, la masa de 2.801 kg, las camas gemelas de 217 × 80 cm, el garaje trasero, la ducha separada y la Truma Combi 6 proceden del catálogo oficial Etrusco y de fichas de unidades 2026 de la red oficial, y van marcados como «dato no oficial» al no estar publicados en la web del fabricante; la carga útil no consta, porque la marca no la publica. El veredicto es que es la perfilada grande más asequible del grupo Hymer con argumentos sólidos —camas gemelas de verdad, ducha separada, garaje grande—, lastrada por la falta de tarifa en euros y por unos acabados que recuerdan en cada detalle por qué cuesta menos que una Hymer.`,
    analisisSlug: "etrusco-t-7400-sb-2026-analisis-opinion",
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
    notas:
      "Carga útil sin dato: Etrusco no la publica. Medidas, MMA y masa marcadas con ≈: proceden de fichas de unidades 2026 de la red oficial, no de etrusco.com. Plazas para dormir: 2–5 según configuración (etrusco.com), sin cifra única.",
    curiosidades:
      "El nombre Etrusco viene del pueblo etrusco de la Italia prerromana, famoso por su arte elegante y duradero; los vehículos se fabrican en la Toscana, cerca de Florencia, en una de las plantas más modernas del grupo Erwin Hymer. Fuente: https://www.firmenpresse.de/pressrelease689729/etrusco-brand-portrait-motorhomes-for-those-italian-moments-in-life.html",
  },
];
