// Autocaravanas Challenger — lote Merlín 3 (19/10/2026).
// Fuentes: ficha oficial de Challenger Suiza (PDF)
// (https://ch.challenger-motorhomes.com/pdf/7/328/de),
// página oficial del modelo (https://ch.challenger-motorhomes.com/modell/328/),
// anuncio de unidad 2026 en TruckScout24
// (https://www.truckscout24.fr/main/search/index?search-word=challenger+p+328+etape+arctic+paket+%2F+solaranlage+%2F+4%2C1t),
// ficha técnica de Groupe Jean (https://groupejean-auto.fr/fiche-technique-challenger-328/),
// artículo de Camprest sobre la gama (http://camprest.com/en/blog/motorhome-caravan-news/challenger-closer-than-you-think).
// Verificado el 19/10/2026.
// NOTAS HONESTAS: Challenger (grupo Trigano) no publica tarifa oficial para España:
// precioDesde queda en null. La potencia indicada (130 CV) es la de la versión base Break
// con cambio manual según la ficha oficial; la versión Etape monta el 2.0 de 165 CV con
// automático de 8 velocidades. El depósito de aguas limpias figura en 150 l en la ficha
// oficial, aunque distribuidores anuncian 105 l para unidades 2026 (discrepancia anotada).
// La carga útil no la publica la marca: queda en null (prohibido calcularla). Fotos de
// anuncios de unidades reales del modelo exacto (sin marcas de agua), ≥1600 px.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_CHALLENGER_M3: Autocaravana[] = [
  {
    id: "challenger-328-2026-precio-ficha-tecnica",
    marca: "Challenger",
    modelo: "328",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Challenger no publica tarifa oficial para España
    potenciaCv: 130, // Ford Transit 2.0 de 130 CV manual (versión Break); la Etape monta 165 CV automático
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6e
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/challenger-328-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/challenger-328-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/challenger-328-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7190, // 7,19 m según ficha oficial
    anchoMm: 2350,
    altoMm: 2920,
    pesoKg: 3069, // masa en vacío según ficha oficial
    mmaKg: 3500, // PTAC; ampliable a 4.100 kg en opción
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: null, // la marca no publica la carga útil
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4, // cama central 160x190 + cama abatible eléctrica 140x190
    parNm: null,
    traccion: "delantera", // Ford Transit (tracción delantera)
    emisionesCo2: null,
    aprox: [],
    notas:
      "Perfilada sobre Ford Transit 2.0 (130 CV manual en versión Break, 165 CV automático de 8 velocidades en versión Etape), según ficha oficial de Challenger Suiza: 7,19 x 2,35 x 2,92 m, 3.069/3.500 kg, 4 plazas, cama central de 160x190 y cama abatible de 140x190, calefacción de 4.000 W (6.000 W diésel en opción), agua limpia de 150 l. Distribuidores anuncian 105 l de agua limpia y 100 l de grises para unidades 2026 (discrepancia anotada). Cocina con 2 fuegos y frigorífico de 141 l, ducha independiente y garaje, según ficha de distribuidor. Quedan en null: precio oficial en España, carga útil, par, consumo y emisiones, no publicados por la marca.",
    curiosidades:
      "Challenger bautiza sus perfiladas solo con números, y cada número identifica una distribución: el 328 es la variante con cama central trasera y cama abatible eléctrica en 7,19 metros. Fuente: Camprest, «Challenger - closer than you think» (http://camprest.com/en/blog/motorhome-caravan-news/challenger-closer-than-you-think).",
    descripcion: `La Challenger 328 es la perfilada francesa que mejor resume la filosofía de la marca del grupo Trigano: mucho espacio útil, mecánica Ford probada y un precio que pone las cosas difíciles a las alemanas. Con 7,19 metros de largo, es la variante con cama central trasera de la gama de perfiladas Challenger, un formato que muchos viajeros consideran el ideal cuando se viaja en pareja: cada uno se levanta sin pasar por encima del otro y la cama está siempre hecha.

    En medidas, la 328 se sitúa en la zona media-alta de las perfiladas: 7,19 metros de largo, 2,35 de ancho y 2,92 de alto, con una masa en vacío de 3.069 kg y una MMA de 3.500 kg que permite conducirla con el carnet B. Son cotas generosas pero sin excesos: se nota el espacio dentro y no se sufre en exceso fuera, aunque aparcarla en ciudad sigue siendo una aventura que conviene evitar. Existe la opción de ampliar la MMA a 4.100 kg para quien necesite más carga útil, a costa de pasar al carnet C1.

    La distribución es su gran baza. Al fondo, una cama central de 160x190 cm —medida casi de cama de matrimonio doméstica— accesible por ambos lados y con armarios alrededor. Encima del salón, una cama abatible eléctrica de 140x190 cm que baja con solo pulsar un botón y que durante el día desaparece en el techo, dejando el salón despejado. El salón, con los asientos de cabina giratorios, acoge a cuatro personas para comer, y la cocina cumple con dos fuegos y un frigorífico de 141 litros con congelador. El baño, con ducha independiente, está bien resuelto para una perfilada de este precio, y el garaje trasero traga sillas, mesa y el equipamiento de exterior. Es, en suma, una cuatro plazas de verdad: cuatro para viajar y cuatro para dormir sin convertir nada cada noche, salvo que se quiera usar la dinette como cama supletoria.

    En tecnología y equipamiento, la 328 juega con las cartas de la gama 2026 de Challenger: estructura IRP de poliéster (suelo, paredes y techo) con 64 mm de grosor en el suelo, ventanas de doble acristalamiento con oscurecedores combinados, calefacción diésel de aire pulsado utilizable en marcha (4.000 W de serie, 6.000 W en opción), calentador de agua a gas de 10 litros, preinstalación solar y de cámara trasera, y los packs que caracterizan a la marca: Connect (radio Ford Sync con pantalla táctil, cámara trasera, FordPass), Safety (alerta de colisión, mantenimiento de carril, reconocimiento de señales) y, para los más frioleros, el Arctic con depósito de grises aislado y calefactado, calefacción reforzada y suelo radiante eléctrico. La versión Etape añade el cambio automático de 8 velocidades y los 165 CV, además de llantas negras y un acabado más cuidado.

    Mecánicamente, la base es el Ford Transit 2.0 diésel: 130 CV con cambio manual en la versión Break de acceso y 165 CV con automático de 8 relaciones en la Etape. Es una mecánica conocida, con repuestos en cualquier rincón de Europa y un comportamiento rutero sano, aunque con 3,5 toneladas y 130 CV no hay que esperar brío en los puertos: la Etape de 165 CV se agradece si se viaja cargado o por montaña. La tracción es delantera, como en todo Transit.

    En precio, Challenger no publica tarifa oficial para España, así que no hay cifra de catálogo: el precio lo fija cada concesionario. Como referencia, en Francia una unidad 328 Graphite Ultimate de 2024 con el 170 CV automático se anunciaba en torno a los 60.000 €, y las unidades nuevas 2026 Etape con packs rondan los 80.000 € de precio de catálogo alemán. En España, la red de Challenger —marca del gigante Trigano, con fábrica en Tournon-sur-Rhône— tiene presencia a través de distribuidores multimarca, por lo que conviene pedir presupuesto en varios y comparar el equipamiento incluido: los packs marcan mucha diferencia en el precio final.

    Cómo lo verificamos: dimensiones, pesos, potencias, camas y calefacción proceden de la ficha oficial de Challenger Suiza en PDF; el detalle del equipamiento de la versión Etape 2026 (packs, aguas, ampliación a 4,1 t), del anuncio de un distribuidor alemán en TruckScout24; la cocina, el frigorífico y el precio de referencia francés, de la ficha de Groupe Jean. Todo verificado el 19/10/2026. Quedan en null el precio oficial español, la carga útil, el par, el consumo y las emisiones, no publicados por la marca. La discrepancia en el depósito de agua limpia (150 l oficial frente a 105 l en anuncios 2026) queda anotada.

    Para quién es: la Challenger 328 encaja con parejas que quieren cama central siempre hecha, cuatro plazas reales y carnet B, con un presupuesto más ajustado que el de las premium alemanas. La versión Etape con Arctic es además una candidata seria para viajar todo el año. No es para quien necesite cinco o seis plazas, para quien busque una mecánica con mucho brío en la versión básica de 130 CV ni para quien quiera moverse con agilidad por ciudad: 7,19 metros mandan.`,
    pros: [
      "Cama central de 160x190 siempre hecha, accesible por ambos lados",
      "Cuatro plazas para dormir sin convertir el salón (central + abatible eléctrica)",
      "Se conduce con carnet B (3.500 kg de MMA)",
      "Estructura IRP de poliéster y packs de equipamiento muy completos",
      "Versión Etape con 165 CV, automático de 8 velocidades y pack Arctic invernal",
    ],
    contras: [
      "La versión básica de 130 CV puede quedarse justa con carga y en puertos",
      "Challenger no publica tarifa en España: precio a negociar con cada distribuidor",
      "7,19 metros limitan el aparcamiento urbano y las parcelas pequeñas",
      "Discrepancia sin aclarar en el depósito de agua limpia (150 l oficial / 105 l en anuncios)",
      "Acabados correctos pero un escalón por debajo de las premium alemanas",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/challenger-328-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Challenger 328, vista exterior",
        ancho: 4000,
        alto: 2252,
      },
      {
        src: "/media/challenger-328-2026-precio-ficha-tecnica-interior1.webp",
        alt: "Challenger 328, salón con cama abatible",
        ancho: 1600,
        alto: 1201,
      },
      {
        src: "/media/challenger-328-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Challenger 328, dormitorio con cama central",
        ancho: 1600,
        alto: 2133,
      },
      {
        src: "/media/challenger-328-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Challenger 328, vista trasera",
        ancho: 4000,
        alto: 2252,
      },
    ],
    analisisSlug: "challenger-328-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Base Ford Transit: revisión cada 2 años o 40.000 km (lo que antes ocurra, según plan Ford)",
      revisiones: [
        {
          nombre: "Revisión base (Ford Transit)",
          queSeCambia: "Aceite + filtros + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Challenger (anual recomendada)",
          queSeCambia: "Estanqueidad, gas, electricidad, humedades",
          costeAproxEur: 250,
        },
      ],
    },
  },
];
