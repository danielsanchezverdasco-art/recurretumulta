// Fichas camper VW California 2026 (Beach, Coast, Ocean) — T7 (Multivan), batalla larga.
// Rama niky-campers. Datos: solo fuente oficial VW / concesionario oficial VW / prensa.
// La tarifa española oficial 2026 solo existe para el Beach (72.790 €); Coast y Ocean
// llevan precio aproximado (tarifa oficial Francia, marcada en `aprox`).
// Las fotos son del kit de prensa oficial de Volkswagen Vehículos Comerciales (T7 exacto),
// verificadas visualmente. NO registrar en COCHES_COMPARADOR (lo hace el coordinador).
import type { CocheComparador } from "../comparador-coches-data.ts";

export interface CamperVW extends CocheComparador {
  /** Descripción larga propia (≥800 palabras). */
  descripcion: string;
}

export const CAMPERS_VW: CamperVW[] = [
  {
    id: "vw-california-beach-2026-precio-ficha-tecnica",
    marca: "Volkswagen",
    modelo: "California Beach",
    tipo: "Diésel",
    categoria: "Camper",
    precioDesde: 72790,
    potenciaCv: 150,
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
    largoMm: 5173,
    anchoMm: 1941,
    altoMm: 1972,
    pesoKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: 360,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["mmaKg"],
    pros: [
      "Precio oficial España 72.790 €: la puerta de entrada más barata a la California T7",
      "5 plazas y 4 camas: la California más familiar y la única pensada para el día a día",
      "Mini-cocina extraíble trasera: cocinas al aire libre sin sacrificar interior",
      "Techo elevable manual con cama doble: montar el campamento lleva minutos",
      "Etiqueta C y 150 CV TDI: viaja por toda Europa sin restricciones de ZBE",
    ],
    contras: [
      "Sin cocina interior completa: el Beach exige cocinar fuera o en el portón",
      "72.790 € por la versión más básica: el salto desde un Multivan normal es grande",
      "Etiqueta C: en ZBE futuras el diésel es el más expuesto",
      "El techo elevable es manual, no eléctrico como en el Ocean",
      "MMA de 2.800 kg aprox.: la carga útil se agota rápido con 5 personas y equipaje",
    ],
    imagen: "/media/vw-california-beach-2026-precio-ficha-tecnica-oficial-1.webp",
    imagenOficial: "/media/vw-california-beach-2026-precio-ficha-tecnica-oficial-1.webp",
    imagenInteriorOficial: "/media/vw-california-beach-2026-precio-ficha-tecnica-interior-oficial-1.webp",
    analisisSlug: "vw-california-beach-2026-analisis-opinion",
    videoId: null,
    videoCanal: null,
    opiniones: [],
    costeMensual: null,
    galeria: [
      {
        src: "/media/vw-california-beach-2026-precio-ficha-tecnica-oficial-1.webp",
        alt: "Volkswagen California Beach 2026 naranja con techo elevable, vista tres cuartos delantera",
        ancho: 1280,
        alto: 800,
      },
      {
        src: "/media/vw-california-beach-2026-precio-ficha-tecnica-interior-oficial-1.webp",
        alt: "Mini-cocina extraíble trasera del California Beach con fogón de gas",
        ancho: 1280,
        alto: 854,
      },
      {
        src: "/media/vw-california-beach-2026-precio-ficha-tecnica-interior-oficial-2.webp",
        alt: "Pantalla táctil del pilar C con el control de las funciones camper",
        ancho: 1200,
        alto: 1800,
      },
      {
        src: "/media/vw-california-beach-2026-precio-ficha-tecnica-oficial-3.webp",
        alt: "Volkswagen California Beach desde atrás con el módulo de cocina y el campamento montado",
        ancho: 1280,
        alto: 800,
      },
    ],
    euroncap: {
      estrellas: null,
      ano: null,
      url: null,
      nota: "Sin datos EuroNCAP: la California no tiene prueba propia. El VW Multivan T7, sobre el que se basa, obtuvo 5 estrellas Euro NCAP en 2022.",
    },
    planMantenimiento: {
      intervalo: "Cambio de aceite cada 2 años o 30.000 km; servicio de inspección cada 2 años (MY21+)",
      revisiones: [
        {
          nombre: "Mantenimiento oficial (anual o 15.000 km)",
          queSeCambia: "Inspección general, niveles, frenos, alumbrado y diagnóstico electrónico",
          costeAproxEur: 120,
        },
        {
          nombre: "Cambio de aceite y filtros (2 años o 30.000 km)",
          queSeCambia: "Aceite, filtro de aceite y filtro de polvo y polen",
          costeAproxEur: 280,
        },
      ],
      costeAnualAproxEur: 200,
      fuente: "Volkswagen — Libro de mantenimiento oficial",
    },
    confianza: "alta",
    fuenteNombre: "Volkswagen / coches.net",
    fuenteUrl:
      "https://www.coches.net/noticias/nuevos-volkswagen-multivan-california-actualizacion-2026",
    mmaKg: 2800,
    carnetNecesario: "B",
    descripcion: `El **Volkswagen California Beach 2026** es la versión de acceso a la nueva generación T7 de la camper más famosa de Europa, y la única que Volkswagen ya vende con **precio oficial en España: 72.790 €** impuestos incluidos, con el motor 2.0 TDI de 150 CV y cambio DSG de 7 velocidades. Es la California pensada para quien quiere una furgoneta para el día a día que los fines de semana se convierte en casa: **5 plazas para viajar y 4 camas para dormir**, techo elevable y una mini-cocina que se usa desde fuera. Si buscas el icono camper sin pagar el sobreprecio de las versiones equipadas, este es tu punto de partida.

La nueva California ya no deriva del Transporter sino del **Multivan T7**, y eso se nota en todo: mide **5.173 mm de largo, 1.941 mm de ancho y 1.972 mm de alto**, con una batalla de 3.124 mm que regala un interior mucho más amplio que el de la generación anterior. Solo se vende en batalla larga, y por primera vez todas las California llevan de serie **dos puertas laterales deslizantes** (izquierda y derecha), un detalle que cambia por completo la vida a bordo: puedes cargar la compra, acceder a la nevera o ventilar por el lado que te convenga. El techo elevable es **manual**, con un mecanismo de apertura sencillo, y esconde una cama doble con ventanas laterales con mosquitera.

El Beach es el California más **minimalista y familiar**. En lugar de la cocina fija lateral de sus hermanos mayores, lleva un **módulo de mini-cocina extraíble en el maletero**: un fogón de gas de un fuego, cajón para cubiertos y espacio de almacenaje, con toma de corriente de 230 V. Se desliza hacia fuera con el portón abierto para cocinar al aire libre y se guarda dentro para protegerlo. Los asientos delanteros son giratorios, la banqueta trasera se convierte en cama y el techo suma la segunda cama doble. Además, de serie trae **mesa y dos sillas plegables** que se guardan en el portón, así que el campamento se monta en minutos sin comprar nada más.

En marcha, el 2.0 TDI de **150 CV y 360 Nm** con DSG mueve con soltura los cerca de 2.400 kg del conjunto, con una entrega de par muy aprovechable en carretera y consumos contenidos para su tamaño. La tracción es delantera y la **etiqueta C de la DGT** le permite circular sin restricciones por las Zonas de Bajas Emisiones actuales. Con **5 plazas** homologadas es el único California que puede llevar a toda la familia a diario: entre semana hace de monovolumen grande y el fin de semana, de camper. Esa dualidad es su gran argumento frente a autocaravanas y furgonetas transformadas.

La actualización 2026 (Model Year 2026) que Volkswagen presentó en verano trae un frontal rediseñado con faros LED más grandes, una **pantalla táctil de 12,9 pulgadas** con menús renovados, Digital Cockpit de serie con tres vistas, carga inalámbrica de 25 W y USB-C de 60 W. En seguridad suma el **Travel Assist** capaz de reconocer semáforos y hacer cambios de carril asistidos en autopista, además del Emergency Assist. Todo ello con la garantía oficial de Volkswagen de 36 meses que ofrecen los concesionarios de la red.

En dimensiones prácticas: con **2.800 kg de MMA aproximada** (dato de concesionario oficial, en revisión) se conduce con el **carnet B** sin problemas, pero ojo con la carga útil: con 5 ocupantes y equipaje de camping el margen se estrecha, así que conviene repartir bien el peso y no cargar el techo más de lo necesario. La altura con el techo cerrado (unos 1,99 m) le permite entrar en la mayoría de parkings subterráneos, algo imposible para una autocaravana.

Frente a sus hermanos, el Beach es el más barato y el más versátil como coche diario, pero también el más espartano: si quieres cocinar dentro, fregadero y nevera fija, tendrás que subir al Coast; si quieres techo eléctrico, asientos calefactados y Climatronic, al Ocean. Su rival natural fuera de la casa es el **Mercedes Marco Polo Horizon**, aunque la red y el precio de partida del Beach juegan a favor del alemán de Hannover. Y frente a una camperización de un tercero, el Beach gana en garantía oficial, reventa y homologación de fábrica: es una California de verdad, no una furgoneta transformada.

En resumen: el California Beach 2026 es **la forma más asequible de entrar en el mundo California** con la nueva generación T7, con precio oficial español confirmado de 72.790 €. Ideal para familias activas que quieren un coche para todo el año y una camper para las escapadas, sin renunciar a la garantía y la ingeniería de Volkswagen Vehículos Comerciales. Si tu plan es dormir dentro y cocinar fuera, no necesitas más.

Un último consejo práctico: como toda camper de techo elevable, el Beach agradece un mantenimiento específico del fuelle del techo (limpieza y revisión de las cremalleras una vez al año) y vigilar la batería auxiliar si montas nevera eléctrica portátil. Son cuidados menores que alargan mucho la vida del módulo camper y que cualquier servicio oficial Volkswagen conoce bien.`,
    curiosidad: {
      texto:
              "El restyling 2026 de los Multivan y California toma como referencia rasgos de diseño del Volkswagen T1, el Bulli original de 1950: los nuevos faros LED y el frontal reinterpretan al icono que empezó la leyenda camper.",
      fuenteNombre: "Fuente oficial / prensa especializada",
      fuenteUrl:
        "https://www.coches.net/noticias/nuevos-volkswagen-multivan-california-actualizacion-2026",
    },
  },
  {
    id: "vw-california-coast-2026-precio-ficha-tecnica",
    marca: "Volkswagen",
    modelo: "California Coast",
    tipo: "Diésel",
    categoria: "Camper",
    precioDesde: 76850,
    potenciaCv: 150,
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
    largoMm: 5173,
    anchoMm: 1941,
    altoMm: 1972,
    pesoKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: 360,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde", "mmaKg"],
    pros: [
      "Cocina completa lateral: fregadero, fogón de gas y nevera cajón extraíble de serie",
      "4 plazas para viajar y 4 camas: la camper de verdad para parejas viajeras",
      "Batería camper de 80 Ah y depósito de 28 l: autonomía real fuera de la red",
      "Todo se controla desde la pantalla táctil del pilar C o la app del móvil",
      "Doble puerta deslizante de serie: acceso y ventilación por ambos lados",
    ],
    contras: [
      "Sin tarifa oficial en España (2026): el precio ≈76.850 € es la tarifa oficial de Francia",
      "4 plazas: pierde un asiento frente al Beach si viajas con tres niños",
      "La cama inferior es más estrecha (1,06 m) por el módulo de cocina lateral",
      "Etiqueta C: el diésel es el más expuesto en futuras ZBE",
      "MMA de 2.850 kg aprox.: vigila la carga útil con 4 personas y equipaje completo",
    ],
    imagen: "/media/vw-california-coast-2026-precio-ficha-tecnica-oficial-1.webp",
    imagenOficial: "/media/vw-california-coast-2026-precio-ficha-tecnica-oficial-1.webp",
    imagenInteriorOficial: "/media/vw-california-coast-2026-precio-ficha-tecnica-interior-oficial-1.webp",
    analisisSlug: "vw-california-coast-2026-analisis-opinion",
    videoId: null,
    videoCanal: null,
    opiniones: [],
    costeMensual: null,
    galeria: [
      {
        src: "/media/vw-california-coast-2026-precio-ficha-tecnica-oficial-1.webp",
        alt: "Volkswagen California Coast 2026 plateado con techo elevable junto al Beach y el Ocean",
        ancho: 1280,
        alto: 670,
      },
      {
        src: "/media/vw-california-coast-2026-precio-ficha-tecnica-interior-oficial-1.webp",
        alt: "Kitchenette lateral del California Coast con fregadero, fogón y nevera cajón",
        ancho: 1280,
        alto: 854,
      },
      {
        src: "/media/vw-california-coast-2026-precio-ficha-tecnica-interior-oficial-2.webp",
        alt: "Cama inferior del California Coast junto al bloque de cocina",
        ancho: 1280,
        alto: 854,
      },
      {
        src: "/media/vw-california-coast-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Volkswagen California Beach y Ocean de la gama T7 2026",
        ancho: 1280,
        alto: 670,
      },
    ],
    euroncap: {
      estrellas: null,
      ano: null,
      url: null,
      nota: "Sin datos EuroNCAP: la California no tiene prueba propia. El VW Multivan T7, sobre el que se basa, obtuvo 5 estrellas Euro NCAP en 2022.",
    },
    planMantenimiento: {
      intervalo: "Cambio de aceite cada 2 años o 30.000 km; servicio de inspección cada 2 años (MY21+)",
      revisiones: [
        {
          nombre: "Mantenimiento oficial (anual o 15.000 km)",
          queSeCambia: "Inspección general, niveles, frenos, alumbrado y diagnóstico electrónico",
          costeAproxEur: 120,
        },
        {
          nombre: "Cambio de aceite y filtros (2 años o 30.000 km)",
          queSeCambia: "Aceite, filtro de aceite y filtro de polvo y polen",
          costeAproxEur: 280,
        },
      ],
      costeAnualAproxEur: 200,
      fuente: "Volkswagen — Libro de mantenimiento oficial",
    },
    confianza: "media",
    fuenteNombre: "Volkswagen / larevueautomobile.com",
    fuenteUrl:
      "https://www.larevueautomobile.com/actualites/vw-california-finitions-et-tarifs-le-decryptage-de-l-offre-co-de-volkswagen.html",
    mmaKg: 2850,
    carnetNecesario: "B",
    descripcion: `El **Volkswagen California Coast 2026** es el punto medio perfecto de la gama California T7: la primera versión con **cocina completa de verdad** —fregadero, fogón de gas y nevera tipo cajón extraíble— en un mueble lateral rediseñado que no se mete en el habitáculo como antes. Con **4 plazas para viajar y 4 camas para dormir**, es la California pensada para parejas (o familias pequeñas) que quieren cocinar dentro, ducharse fuera y vivir a bordo varios días seguidos. Ojo al precio: Volkswagen aún no ha publicado la **tarifa oficial en España** para 2026 (solo Beach y Ocean están en el configurador español), así que el precio de referencia es la **tarifa oficial en Francia: desde ≈76.850 €**, marcada como aproximada hasta que la marca la confirme aquí.

La base es la misma que en toda la gama: la plataforma del **Multivan T7 en batalla larga**, con **5.173 mm de largo, 1.941 mm de ancho y 1.972 mm de alto** y una batalla de 3.124 mm. El Coast comparte con sus hermanos el techo elevable con cama doble y mosquiteras, las **dos puertas laterales deslizantes de serie** (una primicia en la California) y los asientos individuales traseros, más ligeros y desmontables: puedes sacarlos para meter bicicletas caras dentro, algo que los camperos agradecen muchísimo. La cocina va en el lado del conductor, con armarios, fregadero, un fuego de gas y la **nevera cajón extraíble** accesible desde dentro y desde fuera, además de **mesa plegable exterior** que se guarda en el portón.

La dotación camper es seria: **batería auxiliar de 80 Ah**, **depósito de agua limpia de 28 litros**, toma de 230 V con conexión exterior, **calefacción auxiliar** alimentada por el propio combustible del vehículo e iluminación ambiental LED. Todo se gestiona desde la **pantalla táctil de 5 pulgadas del pilar C**, desde la app del sistema de infoentretenimiento o desde la app California del móvil: nivel de agua, batería, luz y calefacción, sin levantarte de la cama. La cama inferior, eso sí, es más estrecha que la del Beach (**unos 1,06 m**) porque el mueble de cocina ocupa el lateral; la del techo es doble y completa las 4 plazas de pernocta.

Mecánicamente, el Coast de referencia monta el **2.0 TDI de 150 CV y 360 Nm** con cambio DSG de 7 velocidades y tracción delantera, el mismo que Volkswagen anuncia para España en el Beach. Es un motor probado, con par de sobra para mover el conjunto cargado y consumos razonables en ruta. La **etiqueta C de la DGT** le abre hoy todas las ZBE. Con **2.850 kg de MMA aproximada** se conduce con el **carnet B**, aunque con 4 ocupantes, agua, gas y equipaje conviene hacer números: la carga útil real ronda los 400-450 kg según equipamiento, así que el reparto del peso y no pasarse con los extras es parte del aprendizaje camper.

La actualización 2026 suma el frontal inspirado en el T1, la **pantalla de 12,9 pulgadas**, el Digital Cockpit de serie, carga inalámbrica de 25 W y el **Travel Assist** con reconocimiento de semáforos. Y la garantía oficial de Volkswagen de 36 meses cubre también el módulo camper al ser una transformación de fábrica, una ventaja enorme frente a las camperizaciones de terceros.

¿Dónde se coloca? Por encima del Beach (más barato, 5 plazas, cocina exterior) y por debajo del Ocean (techo eléctrico, asientos calefactados, Climatronic, materiales premium). Si tu plan es **vivir a bordo varios días** —cocinar dentro cuando llueve, fregar sin salir, dormir cuatro—, el Coast es el equilibrio: todo lo esencial de una camper sin el sobreprecio del lujo del Ocean. Su rival directo es el **Mercedes Marco Polo** (el otro agente lo está fichando en paralelo), con filosofía parecida y precio similar; la California juega la baza de la red VW, la reventa y una comunidad de propietarios enorme en España.

En resumen: el California Coast 2026 es **la camper completa sin lujos innecesarios**, con cocina interior de verdad, 4+4 plazas y toda la tecnología camper de la T7. A la espera de la tarifa española oficial, la referencia es la francesa (≈76.850 €): si el precio español se confirma en esa órbita, será la opción más racional de la gama para quien viaja en pareja y quiere autonomía real.

Y un apunte para quien dude entre el Coast y una camperización a medida: la California de fábrica homologa todo el módulo camper con la carrocería, mantiene intacta la garantía oficial de 36 meses y conserva un valor de reventa que ninguna transformación artesanal iguala. En el mercado de ocasión, un Coast con historial oficial se vende en días; una camperizada, en semanas y con regateo. Si además equipas el toldo lateral y una segunda batería, el Coast se convierte en una base perfecta para escapadas largas sin depender de campings en absoluto.`,
    curiosidad: {
      texto:
              "La nueva California T7 es la primera camper de la historia en llevar de serie dos puertas laterales deslizantes (izquierda y derecha): puedes acceder a la nevera, ventilar o cargar desde el lado que prefieras.",
      fuenteNombre: "Fuente oficial / prensa especializada",
      fuenteUrl:
        "https://paultan.org/2024/05/08/2024-volkswagen-california-debuts/",
    },
  },
  {
    id: "vw-california-ocean-2026-precio-ficha-tecnica",
    marca: "Volkswagen",
    modelo: "California Ocean",
    tipo: "Diésel",
    categoria: "Camper",
    precioDesde: 84000,
    potenciaCv: 150,
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
    largoMm: 5173,
    anchoMm: 1941,
    altoMm: 1972,
    pesoKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: 360,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde", "mmaKg"],
    pros: [
      "El tope de gama: techo elevable eléctrico, asientos calefactados y Climatronic",
      "Materiales exclusivos: tapicería de tejido reciclado con el bordado California",
      "Faros Matrix LED, Park Assist y Discover Pro: tecnología de turismo premium",
      "Cocina completa + calefacción auxiliar: confort total en invierno",
      "La California con mejor reventa: el Ocean es el más buscado de segunda mano",
    ],
    contras: [
      "Sin tarifa oficial en España (2026): el precio ≈84.000 € es la tarifa oficial de Francia",
      "El más caro de la gama con diferencia: el salto desde el Coast es importante",
      "4 plazas y cama inferior de 1,06 m: el lujo no da más espacio",
      "Etiqueta C: el diésel es el más expuesto en futuras ZBE",
      "MMA de 2.850 kg aprox.: con todo el equipamiento, la carga útil se queda justa",
    ],
    imagen: "/media/vw-california-ocean-2026-precio-ficha-tecnica-oficial-1.webp",
    imagenOficial: "/media/vw-california-ocean-2026-precio-ficha-tecnica-oficial-1.webp",
    imagenInteriorOficial: "/media/vw-california-ocean-2026-precio-ficha-tecnica-interior-oficial-1.webp",
    analisisSlug: "vw-california-ocean-2026-analisis-opinion",
    videoId: null,
    videoCanal: null,
    opiniones: [],
    costeMensual: null,
    galeria: [
      {
        src: "/media/vw-california-ocean-2026-precio-ficha-tecnica-oficial-1.webp",
        alt: "Volkswagen California Ocean 2026 bicolor con toldo lateral y techo elevable",
        ancho: 1280,
        alto: 800,
      },
      {
        src: "/media/vw-california-ocean-2026-precio-ficha-tecnica-interior-oficial-1.webp",
        alt: "Cama inferior y bloque de cocina del California Ocean",
        ancho: 1280,
        alto: 854,
      },
      {
        src: "/media/vw-california-ocean-2026-precio-ficha-tecnica-interior-oficial-2.webp",
        alt: "Kitchenette lateral del California Ocean con fregadero y fogón",
        ancho: 1280,
        alto: 854,
      },
      {
        src: "/media/vw-california-ocean-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Gama Volkswagen California T7 2026: Beach, Ocean y Coast en la playa",
        ancho: 1280,
        alto: 670,
      },
    ],
    euroncap: {
      estrellas: null,
      ano: null,
      url: null,
      nota: "Sin datos EuroNCAP: la California no tiene prueba propia. El VW Multivan T7, sobre el que se basa, obtuvo 5 estrellas Euro NCAP en 2022.",
    },
    planMantenimiento: {
      intervalo: "Cambio de aceite cada 2 años o 30.000 km; servicio de inspección cada 2 años (MY21+)",
      revisiones: [
        {
          nombre: "Mantenimiento oficial (anual o 15.000 km)",
          queSeCambia: "Inspección general, niveles, frenos, alumbrado y diagnóstico electrónico",
          costeAproxEur: 120,
        },
        {
          nombre: "Cambio de aceite y filtros (2 años o 30.000 km)",
          queSeCambia: "Aceite, filtro de aceite y filtro de polvo y polen",
          costeAproxEur: 280,
        },
      ],
      costeAnualAproxEur: 200,
      fuente: "Volkswagen — Libro de mantenimiento oficial",
    },
    confianza: "media",
    fuenteNombre: "Volkswagen / larevueautomobile.com",
    fuenteUrl:
      "https://www.larevueautomobile.com/actualites/vw-california-finitions-et-tarifs-le-decryptage-de-l-offre-co-de-volkswagen.html",
    mmaKg: 2850,
    carnetNecesario: "B",
    descripcion: `El **Volkswagen California Ocean 2026** es el buque insignia de la gama camper de Volkswagen: la California más equipada, más lujosa y —también— más cara. Sobre la base del **Multivan T7 en batalla larga** (5.173 mm de largo, 1.941 mm de ancho, 1.972 mm de alto), el Ocean añade a la ya completa dotación del Coast el **techo elevable eléctrico**, los **asientos delanteros calefactados**, el climatizador **Air Care Climatronic** de tres zonas, la tapicería exclusiva de tejido reciclado con el bordado California y los **faros Matrix LED**. Importante: Volkswagen aún no ha publicado la **tarifa oficial en España** para 2026, así que la referencia es la **tarifa oficial en Francia: desde ≈84.000 €**, marcada como aproximada.

El Ocean comparte con el Coast la **cocina lateral completa** del lado del conductor —fregadero, fogón de gas de un fuego, armarios y **nevera tipo cajón extraíble** accesible desde dentro y desde fuera—, la **mesa plegable exterior**, el **depósito de agua de 28 litros**, la **batería camper de 80 Ah** (el Ocean puede llevar dos), la toma de 230 V con conexión exterior y la **calefacción auxiliar** alimentada por el combustible del vehículo. Todo se controla desde la pantalla táctil de 5 pulgadas del pilar C, la app del infoentretenimiento o la app California del móvil. Son **4 plazas para viajar y 4 para dormir**: dos en la cama inferior (de unos 1,06 m de ancho por el mueble lateral) y dos en la cama doble del techo elevable, con ventanas y mosquiteras.

Lo que distingue al Ocean es el **confort de turismo premium**. El techo se abre y se cierra con solo pulsar un botón; los asientos delanteros, además de giratorios, son calefactados; el Climatronic mantiene la temperatura en tres zonas con mando adicional para las plazas traseras; la iluminación ambiental LED crea ambiente en la cocina y el habitáculo; y el asistente de aparcamiento **Park Assist con cámara trasera**, el regulador de distancia con Stop & Go, el asistente de salida del aparcamiento y el **Side Assist** de ángulo muerto hacen que mover 5,17 metros sea mucho menos intimidante. El sistema de navegación **Discover Pro** con pantalla de 10 pulgadas, streaming e internet, y la carga inalámbrica para el móvil completan un equipamiento que no desentonaría en un SUV de 80.000 €. Porque eso es, en el fondo, lo que es: un premium con cocina.

Mecánicamente, la referencia es el **2.0 TDI de 150 CV y 360 Nm** con DSG de 7 velocidades y tracción delantera, con **etiqueta C de la DGT**. Existe además la variante **1.5 eHybrid de 245 CV con tracción total 4Motion** y etiqueta Cero —que ya tiene ficha propia en esta web—, para quien quiera hibridación enchufable y circular sin restricciones por cualquier ZBE. Con **2.850 kg de MMA aproximada** se conduce con el **carnet B**, pero es la versión que más pesa de la gama: entre el techo eléctrico, el equipamiento y 4 ocupantes con equipaje, la carga útil hay que calcularla con cuidado.

La actualización 2026 le sienta especialmente bien al Ocean: el frontal inspirado en el T1 con la banda luminosa entre los faros, los nuevos colores (Sunset Red, Reed Green, Gris Indio mate) y las combinaciones bicolor le dan una presencia que justifica en parte el precio. Dentro, la **pantalla de 12,9 pulgadas**, el Digital Cockpit con tres vistas y el **Travel Assist** con reconocimiento de semáforos lo ponen al día frente a cualquier turismo. Y como toda California, es una transformación **de fábrica con garantía oficial de Volkswagen de 36 meses**, lo que también explica su excelente reventa: el Ocean es la California más buscada de segunda mano.

¿Merece la pena frente al Coast? Depende de tu uso. Si vas a dormir en invierno (la calefacción auxiliar y los asientos calefactados se agradecen de verdad), si aparcas a diario en ciudad (Park Assist, cámaras, sensores) o si simplemente quieres **la mejor California posible**, el Ocean es tu versión. Si la cocina completa te basta y el techo manual no te molesta, el Coast te da casi lo mismo por bastante menos. Y frente al **Mercedes Marco Polo** —su gran rival—, el Ocean juega con mejor red de servicio en España, una comunidad enorme y esa reventa que protege la inversión.

En resumen: el California Ocean 2026 es **la camper definitiva de Volkswagen**, el máximo confort y tecnología que la marca sabe meter en 5,17 metros. A la espera de la tarifa española oficial, la referencia francesa (≈84.000 €) lo sitúa como un capricho caro pero con una lógica aplastante para quien vive la furgoneta a diario y quiere hacerlo con todos los lujos.

Para sacarle todo el partido, merece la pena pedir en el concesionario la explicación completa del sistema camper (pantalla del pilar C, app California y gestión de la calefacción auxiliar) el día de la entrega: son diez minutos que evitan muchas dudas en la primera escapada. Y si viajas en invierno, la combinación de calefacción auxiliar + buen aislamiento del techo elevable es lo que convierte al Ocean en una camper de cuatro estaciones de verdad.`,
    curiosidad: {
      texto:
              "El VW Multivan T7, la base sobre la que se construye la California, obtuvo 5 estrellas Euro NCAP en 2022, con un 90 % en protección de adultos y un 89 % en protección infantil: la camper parte de una de las furgonetas más seguras probadas.",
      fuenteNombre: "Fuente oficial / prensa especializada",
      fuenteUrl:
        "https://www.PARKERS.CO.UK/volkswagen/multivan/mpv-2022/15-tsi-life-5dr-lwb-dsg/specs/",
    },
  },
];
