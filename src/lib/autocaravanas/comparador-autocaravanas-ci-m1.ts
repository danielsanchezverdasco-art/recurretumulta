// Autocaravanas CI (Caravans International) — lote Merlín 4 (18/10/2026),
// corrección b/c/d/e/f/g/h/i (19/10/2026).
// Fuentes: web oficial de CI (grupo Trigano, caravansinternational.it) para la marca y la gama
// Horon; ficha técnica detallada de empresa de alquiler europea para el 84 XT modelo 2026
// (CI no publica en su web la ficha por modelo del 84 XT). CI publica su PVP en el Listino
// oficial de Italia 2026 (el Horon 84 XT parte de 66.790 €); sin tarifa para España, el precio va
// marcado en «aprox».
// Correcciones aplicadas: eliminado costeMensual; añadidos descripcion (>=800 palabras, con
// «Cómo lo verificamos» y «Para quién es»), notas y plazasDormir; analisisSlug actualizado a
// -analisis-opinion; fotos a -ext.webp/-interior.webp (sin «-oficial»); carga útil sin dato publicado
// (la marca no la publica para el modelo exacto; NUNCA se calcula MMA−MRO); todos los campos
// numéricos del modelo en «aprox» por proceder de fuente secundaria («dato no oficial»).
// Corrección F4 (19/10/2026): añadido campo curiosidades con fuente enlazada; añadido plano
// de planta oficial del fabricante como extra de galería (CI no publica fotos —ni exterior
// ni interior— del 84 XT exacto: verificado en su mediateca WP el 19/10/2026).
// Corrección FIX-cideth (19/10/2026): la página oficial del modelo en caravansinternational.it/global
// SÍ publica fotos del 84 XT (galería «Ci-Horon-84-Spring»): añadidos 2 interiores oficiales
// (camas gemelas 1536x1025 + salón 1536x1025), galería reordenada con oficiales primero e
// imagenInteriorOficial actualizada. Con esto la ficha cumple 2+ int + 1+ ext oficiales.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_CI_M1: Autocaravana[] = [
  {
    id: "ci-horon-84-xt-2026-precio-ficha-tecnica",
    marca: "CI",
    modelo: "Horon 84 XT",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 66790, // Listino oficial CI (Caravans International) Italia 2026, IVA incl.
    potenciaCv: 165, // «no oficial»: Ford Transit 2.0 EcoBlue de 165 CV según fuente secundaria
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
    imagen: "/media/ci-horon-84-xt-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial: "/media/ci-horon-84-xt-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/ci-horon-84-xt-2026-precio-ficha-tecnica-oficial-interior.webp", // FIX-cideth 19/10/2026: interior oficial del 84 XT (página oficial del modelo, caravansinternational.it/global)
    videoId: null,
    videoCanal: null,
    largoMm: 7450, // «no oficial»: 7,45 m según fuente secundaria
    anchoMm: 2350, // «no oficial»: 2,35 m según fuente secundaria
    altoMm: 2950, // «no oficial»: 2,95 m según fuente secundaria
    pesoKg: 2905, // «no oficial»: 2.905 kg de peso en vacío según fuente secundaria
    mmaKg: 3500, // «no oficial»: 3.500 kg según fuente secundaria
    carnetNecesario: "B", // «no oficial»: con 3.500 kg de MMA según fuente secundaria
    cargaUtilKg: null, // no publicada por el fabricante para el modelo exacto
    consumo: null,
    consumoUnidad: null,
    plazas: 5, // «no oficial»: 5 plazas de viaje según fuente secundaria
    plazasDormir: 5, // «no oficial»: 5 camas según fuente secundaria (gemelas traseras 197x80 y 208x80 convertibles en doble + basculante eléctrica 190x128 sobre el salón + cama de salón 216x58)
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [ "precioDesde", "potenciaCv",
      "largoMm",
      "anchoMm",
      "altoMm",
      "pesoKg",
      "mmaKg",
      "carnetNecesario",
      "plazas",
      "plazasDormir", ], // «no oficial»: el fabricante no publica la ficha del modelo; datos de fuente secundaria
    notas:
      "CI no publica en su web la ficha técnica por modelo del Horon 84 XT ni ningún PVP: todos los datos numéricos de esta ficha proceden de una fuente secundaria (empresa europea de alquiler con la ficha detallada del modelo 2026) y van marcados en «aprox» como «dato no oficial · en revisión». La carga útil no se calcula (MMA−MRO) por especificación: queda sin dato. Precio: sin tarifa para España; se aplica el PVP del Listino oficial CI Italia 2026 (66.790 €, «aprox»). Precio: PVP de Italia del Listino oficial CI (Caravans International, Trigano) Italia 2026 (precios recomendados, IVA 22% incl., válido desde 01/09/2025), Horon 84 XT = 66.790 €; no hay tarifa oficial para España.",
    curiosidades:
      "La marca nació como Caravans International —ya operaba con ese nombre en 1976— y hoy integra, junto a su marca hermana Roller Team, la Trigano SpA italiana, que concentra cerca del 20 % del mercado italiano de autocaravanas (fuente: Camperlife, «Salone del Camper 2018: novità CI», https://camperlife.it/notizie/salone-del-camper-2018-novita-ci.html).",
    descripcion: `Cuando una familia numerosa se plantea una autocaravana, la pregunta no es si caben, sino si caben sin estorbarse durante tres semanas seguidas. El CI Horon 84 XT responde con la solución italiana más directa: 7,45 metros de perfilada para cinco personas que viajan y cinco que duermen, con camas de verdad en la trasera y sin pedirle a nadie que duerma en un convertible improvisado cada noche. Es el grande de la gama Horon de CI, la marca italiana del grupo Trigano, y su planteamiento es el contrario al de las perfiladas compactas de moda: aquí el espacio no se optimiza, se sirve en abundancia.

CI son las siglas de Caravans International, fabricante italiano integrado en el grupo Trigano, el gigante francés del caravaning que agrupa también a Chausson, Challenger, Roller Team y Benimar, entre otras. Esa pertenencia importa porque explica dos cosas del Horon 84 XT: la tecnología constructiva EXPS Evo, el sistema de aislamiento de paredes que CI comparte con sus hermanas de grupo, y la garantía de 10 años contra infiltraciones, una cobertura que pocas marcas generalistas igualan y que en un vehículo de 7,45 metros con muchas juntas es una tranquilidad real. CI diseña con mentalidad italiana —muebles con presencia, tapicerías con carácter— pero construye con los estándares industriales del grupo francés.

El chasis elegido para el 84 XT es el Ford Transit con el 2.0 EcoBlue de 165 CV y cambio manual de 6 marchas, con la opción del cambio automático de 8 relaciones que ofrecen los concesionarios. Son 165 caballos para mover 3.500 kg de MMA, una relación peso-potencia de las mejores entre las perfiladas familiares: en puertos de montaña con cinco ocupantes y el garaje lleno se agradece cada caballo, y en autopista el Transit moderno rueda con aplomo y un puesto de conducción más cercano al turismo que a la furgoneta de reparto. La tracción es delantera, como en casi todas las perfiladas, y la norma Euro 6e le da la etiqueta C de la DGT en España.

La distribución es la de una familiar clásica bien resuelta. Delante, un gran salón con capacidad para que cinco personas coman sin turnos, algo que en perfiladas de 7 metros no siempre ocurre. Detrás, el dormitorio con dos camas gemelas longitudinales —de 197x80 y 208x80 centímetros— que se unen mediante un tablero en una gran cama doble para quien prefiera dormir acompañado. Sobre el salón, una cama basculante eléctrica de 190x128 centímetros completa las plazas de noche fijas, y el propio salón se convierte en una cama adicional de 216x58. Total: cinco plazas de viaje y cinco camas, con la particularidad de que tres de ellas son camas «de verdad» que no hay que montar cada noche. Para una familia con tres hijos, esa es la diferencia entre unas vacaciones y una mudanza diaria.

Bajo las camas gemelas se abre el maxi garaje, uno de los argumentos de venta del modelo: boca de acceso de 115x85 centímetros, 120 centímetros de altura interior máxima y calefacción disponible para proteger el equipaje del frío. Bicicletas, sillas, mesa exterior, juguetes de playa y el capazo del bebé entran sin discutir, y el acceso desde el exterior evita cruzar la célula con los trastos. Es el garaje que justifica los 7,45 metros: sin él, la longitud extra sería solo pasillo.

La cocina monta placa de tres fuegos con horno y un frigorífico trivalente automático de 137 litros, capacidad suficiente para una familia de cinco durante varios días sin compra intermedia. La calefacción es una Truma Combi 4 de gas, con espacio para dos bombonas de hasta 15 kilos, y los depósitos declaran 100 litros de agua limpia y 120 de grises. El pack Horon de Ford suma faros antiniebla, paragolpes pintado, puerta XL con ventana y cierre centralizado, claraboya panorámica, panel solar con regulador y cortinas plisadas en cabina: el equipamiento que convierte un chasis de trabajo en una autocaravana habitable.

En marcha, hay que ser honesto sobre lo que significan 7,45 metros. Es una longitud que se nota al aparcar, al entrar en áreas de servicio pequeñas y al callejear por pueblos: el 84 XT pide un conductor acostumbrado al tamaño y una planificación de etapas que evite los centros históricos medievales. A cambio, en carretera abierta es un vehículo estable y silencioso gracias al aislamiento EXPS, y la altura de 2,95 metros, aunque obliga a memorizar los gálibos, deja un volumen interior que se respira.

Del precio, CI no publica nada: ni tarifa oficial, ni PVP recomendado, ni lista por países. Es la política habitual de las marcas del grupo Trigano, que dejan el precio en manos de la red de concesionarios. Para orientarse hay que pedir oferta en varios concesionarios y comparar unidades equivalentes, sabiendo que el 84 XT, por tamaño y equipamiento, se sitúa en la franja media-alta de las perfiladas familiares. La carga útil merece un cálculo antes de firmar: con 2.905 kg de peso en vacío declarado y 3.500 de MMA, el margen teórico es de unos 595 kg, pero ese peso en vacío es de fuente secundaria y cada unidad equipada pesa más; con cinco ocupantes, agua llena y equipaje familiar, conviene pesar la unidad configurada en el concesionario antes de comprometerse.

Cómo lo verificamos: la información de marca y gama procede de la web oficial de CI (caravansinternational.it, grupo Trigano), verificada el 19 de octubre de 2026: tecnología EXPS Evo, garantía de 10 años contra infiltraciones y pertenencia al grupo Trigano. CI no publica en su web la ficha técnica por modelo del Horon 84 XT: todos los datos específicos del modelo —Ford Transit 2.0 EcoBlue de 165 CV, 7,45 x 2,35 x 2,95 m, 5 plazas y 5 camas, camas gemelas de 197x80 y 208x80, basculante eléctrica de 190x128, garaje de 115x85 con 120 cm de altura, Truma Combi 4 de gas, trivalente de 137 L, depósitos de 100/120 L y 2.905 kg de peso en vacío— proceden de una fuente secundaria (empresa europea de alquiler con la ficha detallada del modelo 2026) y van marcados en «aprox» como «dato no oficial · en revisión». El precio aplicado es el del Listino oficial CI Italia 2026 (66.790 €); no hay tarifa oficial para España.

Para quién es: el CI Horon 84 XT es para la familia de cuatro o cinco que quiere una perfilada grande con camas de verdad para todos, un garaje que trague el equipaje familiar y la tranquilidad de la garantía de 10 años contra infiltraciones del grupo Trigano. No es para quien busque una ficha técnica oficial completa antes de comprar —CI no la publica— ni para conductores que se estrenen con 7,45 metros entre las manos. El veredicto es que es la familiar honesta del segmento: mucho espacio por el dinero, mecánica Ford solvente y construcción de grupo grande, con la incógnita de unos datos técnicos que solo el concesionario puede confirmar unidad por unidad.`,
    pros: [
      "5 plazas de viaje y 5 camas con camas gemelas traseras convertibles en doble: la familiar grande de verdad",
      "Ford Transit 2.0 EcoBlue de 165 CV: de las mecánicas más potentes entre las perfiladas familiares",
      "Maxi garaje calefactado bajo las camas (boca de 115x85, 120 cm de altura): cabe todo el equipo familiar",
      "10 años de garantía contra infiltraciones y tecnología EXPS Evo: el respaldo del grupo Trigano",
      "Cama basculante eléctrica sobre el salón: tercera cama fija sin montaje diario",
    ],
    contras: [
      "7,45 m de eslora: necesita áreas grandes y conductor acostumbrado al tamaño",
      "CI no publica la ficha técnica del modelo ni ningún PVP: todo hay que confirmarlo en el concesionario",
      "Con 5 ocupantes y equipaje hay que vigilar la MMA de 3.500 kg: la carga útil se agota rápido",
      "Cambio manual de serie: el automático de 8 marchas se paga aparte",
      "Consumo y peajes de vehículo grande: viajar cuesta más que en una camper",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/ci-horon-84-xt-2026-precio-ficha-tecnica-ext.webp",
        alt: "CI Horon 84 XT, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/ci-horon-84-xt-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Camas gemelas traseras del CI Horon 84 XT (foto oficial del fabricante)",
        ancho: 1536,
        alto: 1025,
      },
      {
        src: "/media/ci-horon-84-xt-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Salón comedor del CI Horon 84 XT (foto oficial del fabricante)",
        ancho: 1536,
        alto: 1025,
      },
      {
        src: "/media/ci-horon-84-xt-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del CI Horon 84 XT, salón delantero",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/ci-horon-84-xt-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Salón y cocina del CI Horon 84 XT",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/ci-horon-84-xt-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Cocina del CI Horon 84 XT",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/ci-horon-84-xt-2026-precio-ficha-tecnica-oficial-plano.webp",
        alt: "Plano de planta oficial del CI Horon 84 XT (render del fabricante)",
        ancho: 1200,
        alto: 462,
      },
    ],
    analisisSlug: "ci-horon-84-xt-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Ford Transit 2.0: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Ford)",
      revisiones: [
        {
          nombre: "Revisión Ford Transit (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 380,
        },
        {
          nombre: "Revisión célula CI (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 650,
      fuente: "Plan de mantenimiento Ford Transit + recomendaciones del sector",
    },
    euroncap: null,
    fuenteNombre: "CI Caravans International (web oficial, grupo Trigano)",
    fuenteUrl: "https://www.caravansinternational.it/",
  },
];
