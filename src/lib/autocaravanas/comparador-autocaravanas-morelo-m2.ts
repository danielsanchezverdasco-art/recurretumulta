// Autocaravanas Morelo — lote Merlín 2 (19/10/2026).
// Datos de la lista oficial de precios Morelo 2026: fuenteNombre/fuenteUrl con
// la URL exacta del PDF oficial.
// Precio: tarifa oficial en Alemania (desde 293.900 €, IVA 19 % incl.), marcado
// en `aprox`; Morelo España no publica PVP. Sin portada+3 no entra: 4 fotos webp
// de anuncios reales de un Palace 88 LB (morelo.nl, caraworld.de, caravana.de,
// mobile.de). Curiosidad con fuente en `curiosidades`. noindex lo gestiona Grok.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_MORELO_M2: Autocaravana[] = [
  {
    id: "morelo-palace-88-lb-2026-precio-ficha-tecnica",
    marca: "Morelo",
    modelo: "Palace 88 LB",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: 293900, // tarifa oficial en Alemania (desde 293.900 €, IVA 19 % incl.); Morelo España no publica PVP
    potenciaCv: 175, // Iveco Daily 70 C 18 3.0 de 175 CV (129 kW), de serie
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
    imagen:
      "/media/morelo-palace-88-lb-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/morelo-palace-88-lb-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/morelo-palace-88-lb-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 8990, // lista oficial de precios Morelo 2026 (8,99 m)
    anchoMm: 2450, // lista oficial de precios Morelo 2026 (2,45 m)
    altoMm: 3580, // lista oficial de precios Morelo 2026 (3,58 m)
    pesoKg: 5680, // masa en orden de marcha, lista oficial de precios 2026
    mmaKg: 7490, // lista oficial de precios Morelo 2026
    carnetNecesario: "C1",
    cargaUtilKg: 1810, // Zuladung publicada en la lista oficial de precios 2026
    consumo: null,
    consumoUnidad: null,
    plazas: null, // la marca no publica las plazas de viaje de esta versión
    plazasDormir: 2, // camas individuales traseras de 2 x 2.000 x 1.060 mm; cama basculante opcional de 2.000 x 1.300 mm
    parNm: 430, // Iveco Daily 3.0: 430 Nm (dato oficial Morelo)
    traccion: "Trasera", // Iveco Daily, tracción trasera
    emisionesCo2: null,
    aprox: ["Precio de tarifa en Alemania: desde 293.900 € (IVA 19 % incluido)"],
    notas:
      "El precio (293.900 €) es la tarifa oficial «desde» en Alemania de la lista de precios Morelo 2026 para el Palace 88 LB (IVA del 19 % incluido); Morelo España no publica PVP, así que el precio final en España lo fija cada concesionario. Medidas, masas, motor y equipamiento proceden de la lista oficial de precios 2026. El cambio automático ZF de 8 velocidades con convertidor de par es de serie. Las plazas de viaje no están publicadas para esta versión: quedan sin dato.",
    descripcion: `El Morelo Palace 88 LB es el punto de partida de la gama Palace, la serie con la que el fabricante de Schlüsselfeld —vecino y rival de Concorde en la cuna alemana de los liners de lujo— democratiza, si es que esa palabra tiene sentido por encima de los 290.000 euros, el acceso a su idea de la primera clase sobre ruedas. Con 8,99 metros de largo sobre el chasis del Iveco Daily 70 C 18, el 88 LB es el Palace más corto y manejable del catálogo, una integral de gran formato que mantiene intacto el ADN de la marca: construcción de bastidor de largueros galvanizado en caliente, módulo frontal de fibra de vidrio desarrollado con Fahrzeugbau Meier y un interior donde cada detalle —desde los interruptores de cristal con sensor de proximidad hasta la pantalla táctil giratoria del sistema Morelo Connect— está pensado para que la tecnología se note lo menos posible.

La distribución 88 LB es la clásica de camas individuales longitudinales traseras: dos camas de 2.000 x 1.060 mm sobre un garaje pasante de generosas dimensiones, con puertas de 1.230 x 1.120 mm a ambos lados y portón trasero eléctrico. Es el layout favorito de las parejas que viajan largo y tendido: cada uno tiene su cama, su mesilla y su armario, y el garaje traga bicicletas eléctricas, sillas y la mesa de camping sin desmontar nada. Delante, el salón en L con la banqueta de 1.740 x 1.000 mm y la couch lateral de 1.250 x 650 mm forma un espacio de convivencia amplio para un vehículo de menos de nueve metros, y la cama basculante opcional de 2.000 x 1.300 mm sobre la cabina añade dos plazas para dormir cuando viajan invitados. La cocina apuesta por electrodomésticos domésticos Bosch y Siemens —horno con función microondas y frigorífico de 172 litros con congelador de 15 litros—, encimera de superficie sólida y el práctico armario despensa extraíble. El baño, con ducha de cristal real, inodoro de cerámica premium y la opción de aseo separado con puerta propia, está a la altura de lo que promete el precio.

La base es el Iveco Daily 70 C 18 con el motor de 3,0 litros y cuatro cilindros: 129 kW (175 CV) y 430 Nm de par, homologado Euro VI e. Y aquí llega uno de los argumentos diferenciales del Palace: el cambio automático ZF de 8 velocidades con convertidor de par, de serie, el mismo tipo de transmisión que montan las berlinas premium alemanas en lugar del cambio robotizado o manual habitual en el mundo camper. La conducción gana una suavidad impropia de un vehículo de 7.490 kg de MMA, y el paquete de seguridad del chasis incluye frenada de emergencia, control de crucero adaptativo, asistente de carril activo, detector de fatiga y el sistema Traction Plus con ayuda al descenso. La masa en orden de marcha declarada es de 5.680 kg y la carga útil oficial alcanza los 1.810 kg, una cifra extraordinaria que deja margen de sobra para el equipamiento —aire acondicionado de techo, generador, placas solares— sin acercarse al límite legal. Con 7.490 kg de MMA, en España se conduce con el carnet C1, y el remolque puede llegar a los 3.500 kg.

El precio de tarifa en Alemania parte de 293.900 euros con el IVA del 19 % incluido, según la lista oficial de 2026, lo que sitúa al 88 LB como el Palace más asequible sin renunciar a nada esencial: el doble suelo técnico, la calefacción por suelo radiante, el techo de construcción sándwich de fibra-aluminio y la conectividad Morelo Connect con control por app vienen de serie en la gama. Quien quiera más motor puede optar por la variante C 21 de 152 kW (207 CV), y el catálogo de opciones —suspensión neumática VB ActiveAir, retarder Telma, MirrorCam, enganche de remolque— permite configurar el vehículo casi como un traje a medida, que es exactamente la filosofía de la marca: cada Morelo se adapta a los deseos de su comprador.

Con 8,99 m de largo, 2,45 m de ancho y 3,58 m de alto, el Palace 88 LB se sitúa en la franja de los liners «compactos» de lujo, donde compite con el Concorde Credo 791 LI, el Carthago chic e-line y el Niesmann+Bischoff Arto 88: frente al Credo, el Morelo ofrece más anchura interior y el cambio ZF de serie; frente al Arto, una carga útil muy superior. Los 360 litros de agua limpia, 250 de grises y 250 de negras —más el depósito de gas de 120 litros— dan una autonomía de varios días sin depender de áreas de servicio, y el garaje para scooter integrado en el concepto («mit Rollergarage» en la ficha oficial) resuelve el eterno problema del vehículo auxiliar en destino.

Verificación de fuentes: medidas (8,99 x 2,45 x 3,58 m), batalla (4,90 m), masas (7.490 kg de MMA, 5.680 kg en orden de marcha, 1.810 kg de carga útil), motor Iveco Daily 70 C 18 de 129 kW/175 CV y 430 Nm, camas traseras de 2 x 2.000 x 1.060 mm, cama basculante opcional de 2.000 x 1.300 mm, depósitos (360/250/250 l) y precio de 293.900 € (IVA alemán del 19 % incluido) proceden de la lista oficial de precios Morelo 2026. El cambio ZF de 8 velocidades, el sistema Morelo Connect y el equipamiento de la gama se han contrastado con la página oficial del modelo. La marca no publica tarifa para España: el precio final lo fija cada concesionario. Las fotos corresponden a un Morelo Palace 88 LB real anunciado en Europa.

Perfil de comprador: el Palace 88 LB encaja con parejas viajeras de alto poder adquisitivo que hacen del vehículo su casa durante meses —los «full-timers» europeos— y que valoran la suavidad del cambio automático ZF, la enorme carga útil y la personalización casi total del interior. No encaja con quien busque discreción presupuestaria ni con quien necesite carnet B: los 7.490 kg exigen el C1. Tampoco con quien priorice la reventa rápida en España, donde el mercado de liners de este nivel es estrecho. Balance: el liner de acceso a Morelo sin complejos de hermano pequeño —misma construcción, misma tecnología y una carga útil de referencia—, a cambio de asumir que cada opción del catálogo acerca el precio final a los 350.000 euros.`,
    pros: [
      "Cambio automático ZF de 8 velocidades con convertidor de par, de serie",
      "Carga útil oficial de 1.810 kg: la mejor del segmento en este tamaño",
      "Iveco Daily 70 C 18 de 175 CV y 430 Nm con paquete completo de seguridad",
      "Garaje pasante con portón eléctrico y puertas de 1.230 x 1.120 mm",
      "Calefacción por suelo radiante y Morelo Connect con control por app",
    ],
    contras: [
      "7.490 kg de MMA: exige carnet C1, no vale el B",
      "293.900 € de tarifa base; equipado se acerca a los 350.000 €",
      "Sin PVP oficial en España: el precio final lo fija cada concesionario",
      "8,99 m: necesita áreas y parcelas de tamaño generoso",
      "La marca no publica las plazas de viaje de esta versión",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/morelo-palace-88-lb-2026-precio-ficha-tecnica-ext.webp",
        alt: "Morelo Palace 88 LB, vista lateral",
        ancho: 1920,
        alto: 1440,
      },
      {
        src: "/media/morelo-palace-88-lb-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Morelo Palace 88 LB, vista trasera tres cuartos",
        ancho: 2560,
        alto: 1920,
      },
      {
        src: "/media/morelo-palace-88-lb-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Morelo Palace 88 LB, salón y cocina",
        ancho: 1499,
        alto: 998,
      },
      {
        src: "/media/morelo-palace-88-lb-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Salón del Morelo Palace 88 LB con asientos de cabina giratorios",
        ancho: 1599,
        alto: 1065,
      },
    ],
    analisisSlug: "morelo-palace-88-lb-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Iveco Daily: revisión cada 1 año o 40.000 km (lo que ocurra antes, según plan Iveco)",
      revisiones: [
        {
          nombre: "Revisión Iveco Daily (1 año / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de combustible + inspección general",
          costeAproxEur: 450,
        },
        {
          nombre: "Revisión célula Morelo (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 350,
        },
      ],
      costeAnualAproxEur: 800,
      fuente: "Plan de mantenimiento Iveco Daily + recomendaciones Morelo",
    },
    euroncap: null,
    curiosidades:
      "El Palace monta de serie el cambio automático ZF de 8 velocidades con convertidor de par —el mismo tipo de transmisión de las berlinas premium alemanas— en lugar del cambio manual o robotizado habitual en las autocaravanas. Fuente: página oficial del modelo (https://www.morelo-reisemobile.de/en/models/palace).",
    fuenteNombre: "MORELO Reisemobile — Lista de precios oficial 2026",
    fuenteUrl:
      "https://www.morelo.pl/wp-content/uploads/2026/02/morelo_preisliste_2026-2_260130_DE.pdf",
  },
];
