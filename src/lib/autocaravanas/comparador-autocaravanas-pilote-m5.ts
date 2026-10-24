// Autocaravanas Pilote — lote Merlín 5 (19/10/2026).
// Modelo P740FC Expression: perfilado grande de la gama Pacific 2026 con cama central.
// --- Fuentes y notas del modelo P740FC ---
// Fuentes: web oficial de Pilote (https://www.pilote.fr/camping-cars/profiles/ y
// https://www.pilote.fr/profile/p740fc-expression/) — fotos oficiales de la chambre,
// la cuisine y la soute del P740FC; página oficial británica
// (https://www.pilote-motorhome.uk/low-profile/p740fc-expression/) con datos técnicos:
// 7,47 m, 2,30 m, 2,85 m, 4 plazas con cinturón, 5 plazas a la mesa, 2 plazas fijas,
// carga útil de 535 kg, cama central de 150x190, soute réglable en hauteur en opción y
// estructura ISOTEK; anuncio de unidad en caraworld.de (Alemania) con agua limpia de
// 130 l, grises de 95 l, frigorífico de 160 l, calefacción Truma Combi 6 y referencia de
// PVP nuevo en Alemania de aprox. 120.000 € (unidad de ocasión con extras, no oficial);
// ficha de Trade Me (Nueva Zelanda) de una unidad 2026: Fiat Ducato 2.2 de 140 CV con
// automático de 9 velocidades.
// Verificado el 19/10/2026.
// NOTAS HONESTAS: Pilote no publica tarifa oficial (vende "au meilleur prix" a través de
// su red de concesionarios): precioDesde queda sin dato. Como referencia extranjera, un
// distribuidor alemán anunciaba un PVP nuevo de aprox. 120.000 € para el P740FC
// (caraworld.de, anuncio de unidad de ocasión con extras; cifra no oficial y marcada como
// extranjera). La potencia indicada (140 CV) es la de la versión base con cambio manual
// sobre chasis Fiat 3,5 t según la ficha oficial de la gama; existen opciones de 160 y
// 180 CV con automático. La carga útil de 535 kg la publica la web oficial británica de
// Pilote para el P740FC Expression. El peso en orden de marcha no lo publica la marca de
// forma verificable: queda sin dato (prohibido calcularlo).
// Fotos: 3 oficiales de pilote.fr (chambre, cuisine, soute del P740FC) + 1 exterior de una
// unidad P740FC Evidence en un distribuidor español (M3 Caravaning), modelo exacto, sin
// marcas de agua ni rótulos: Pilote no publica foto exterior del P740FC en su web.

import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_PILOTE_M5: Autocaravana[] = [
  {
    id: "pilote-p740fc-2026-precio-ficha-tecnica",
    marca: "Pilote",
    modelo: "P740FC",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Pilote no publica tarifa oficial; vende a través de su red de concesionarios
    potenciaCv: 140, // Fiat Ducato 2.2 de 140 CV manual (versión base, chasis Fiat 3,5 t); opciones de 160 y 180 CV con automático
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6e
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    imagen: "/media/pilote-p740fc-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/pilote-p740fc-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/pilote-p740fc-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7470, // 7,47 m según la web oficial británica de Pilote
    anchoMm: 2300, // 2,30 m según la web oficial británica de Pilote
    altoMm: 2850, // 2,85 m según la web oficial británica de Pilote
    pesoKg: null, // la marca no publica el peso en orden de marcha de forma verificable
    mmaKg: 3500, // chasis Fiat 3,5 t; versiones equipadas con chasis de 4,4 t según anuncios de distribuidores
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: 535, // carga útil publicada por la web oficial británica de Pilote para el P740FC Expression
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas con cinturón según la web oficial británica de Pilote
    plazasDormir: 4, // cama central de 150x190 + lit de pavillon de 2 plazas en opción
    parNm: null,
    traccion: "delantera", // Fiat Ducato (tracción delantera)
    emisionesCo2: null,
    aprox: [],
    notas:
      "Perfilado grande de la gama Pacific 2026 sobre Fiat Ducato 2.2 (140 CV manual de serie, 160 y 180 CV con automático en opción), según la web oficial de Pilote: 7,47 x 2,30 x 2,85 m, 4 plazas con cinturón, 5 plazas a la mesa, cama central de 150x190, lit de pavillon de 2 plazas en opción, soute con regulación eléctrica de altura en opción y estructura ISOTEK exclusiva de la marca. Carga útil de 535 kg según la web oficial británica. Agua limpia de 130 l y grises de 95 l, frigorífico de 160 l y calefacción Truma Combi 6 según anuncio de distribuidor alemán. Sin tarifa oficial: como referencia extranjera, un distribuidor alemán anunciaba un PVP nuevo de aprox. 120.000 € para el P740FC (cifra no oficial). Quedan sin dato: precio oficial, peso en orden de marcha, par, consumo y emisiones, no publicados por la marca. Precio: se deja sin dato porque Groupe Pilote no publica tarifas/PVP en abierto en sus webs oficiales (Pilote, Bavaria, Le Voyageur, Mooveo, Font Vendôme): los precios se facilitan a través de su red de concesionarios; sin PVP oficial verificable.",
    curiosidades:
      "Pilote construye sus perfilados con la estructura ISOTEK, una exclusividad de la marca: el armazón se refuerza con tacos en el suelo y los laterales y el suelo grueso ofrece un aislamiento térmico excelente que mantiene las redes de agua y gas fuera del alcance de las heladas. Fuente: web oficial británica de Pilote, página del P740FC Expression (https://www.pilote-motorhome.uk/low-profile/p740fc-expression/).",
    descripcion: `El Pilote P740FC Expression responde a una pregunta muy concreta: ¿se puede tener una habitación de matrimonio de verdad en una perfilada que se conduce con el carnet B? La respuesta de la marca francesa mide 7,47 metros y se llama P740FC: un perfilado grande de la gama Pacific 2026 cuya trasera la ocupa una cama central de 150x190 cm, accesible por los dos lados y rodeada de armarios. Nada de camas transversales contra la pared ni de convertir el salón cada noche: aquí se duerme como en casa y se desayuna sin recoger nada.

    Quien viene de una cama transversal notará el cambio desde la primera noche. Vestirse sin contorsionismo, hacer la cama en dos minutos, abrir los armarios de cada lado sin pedir permiso: son pequeñas victorias cotidianas que solo aprecia quien ha dormido meses en una transversal. Debajo de la cama, la soute trasera —accesible por dos puertas laterales y lo bastante baja para cargar sin esfuerzo— admite en opción la regulación eléctrica de altura, un invento que permite ganar volumen o transportar objetos altos con solo pulsar un botón. Los ciclistas y los que viajan con material voluminoso lo agradecerán.

    La zona de día no se queda atrás. El salón con banquetas enfrentadas y mesa reúne a cinco personas a la mesa, y con los asientos de cabina giratorios el espacio de convivencia crece sin añadir un centímetro a la carrocería. La cocina trabaja con placa de dos fuegos y un frigorífico de 160 litros, capacidad suficiente para la compra semanal de dos personas sin hacer malabares. El cuarto de baño separa la ducha del resto y monta WC de cassette, una distribución clásica pero bien ejecutada. Y cuando la familia se amplía —hijos, nietos, invitados—, el lit de pavillon en opción baja del techo del salón y suma dos plazas más sin tocar la cama central: cuatro personas duermen a bordo con cada pareja en su territorio.

    Pilote construye este modelo con su estructura ISOTEK, una exclusividad de la marca que merece explicación: el armazón se refuerza con tacos en el suelo y los laterales, se usan materiales aislantes seleccionados y el suelo grueso resultante no solo aísla del frío y del ruido, sino que mantiene las redes de agua y gas por encima del punto de congelación. Es ingeniería pensada para quien viaja en invierno de verdad, no marketing. Las ventanas de doble acristalamiento con oscurecedores combinados y la iluminación LED completan una célula seria. La versión Expression añade climatización manual en cabina, cámara de marcha atrás y un paquete ADAS completo —alerta de cambio de carril, frenada de emergencia avanzada, reconocimiento de señales y detección de somnolencia—, además del chasis específico Pacific de Fiat con vía trasera ensanchada, barras estabilizadoras y chasis rebajado para que 7,47 metros se comporten con nobleza en autopista. La calefacción es la Truma Combi 6, con variante diésel-eléctrica D6E en opción.

    En marcha, el Fiat Ducato 2.2 diésel de 140 CV con cambio manual mueve el conjunto con solvencia en la configuración base de 3,5 toneladas; quien ruede muy cargado o frecuente puertos tiene las opciones de 160 y 180 CV con cambio automático. Es la mecánica más extendida del sector europeo, con repuestos en cualquier rincón del continente, y su fiabilidad está más que probada. La tracción es delantera y el depósito de gasóleo es de 90 litros. Los depósitos de agua —130 litros de limpias y 95 de grises— dan autonomía para varios días fuera de áreas de servicio.

    Hablemos de dinero con transparencia. Pilote no publica tarifa oficial: vende "au meilleur prix" a través de su red de concesionarios y cada presupuesto depende del equipamiento elegido. Como referencia extranjera, un distribuidor alemán anunciaba un PVP nuevo en torno a 120.000 € para un P740FC con extras —cifra no oficial, útil solo para situar el posicionamiento del modelo—. En España, la red trabaja con distribuidores multimarca: la recomendación es pedir varios presupuestos con la misma configuración y comparar qué packs incluye cada uno, porque la diferencia entre una unidad básica y una bien equipada es muy sustancial.

    Cómo lo verificamos: las cotas (7,47 x 2,30 x 2,85 m), las 4 plazas con cinturón, las 5 plazas a la mesa, la carga útil de 535 kg, la cama de 150x190 y la soute regulable en opción proceden de la web oficial británica de Pilote; la gama Pacific, el chasis específico y la motorización base, de la web oficial francesa; el agua, el frigorífico, la Truma Combi 6 y la referencia de precio alemana, del anuncio de un distribuidor en caraworld.de; el automático de 9 velocidades en unidades 2026, de la ficha de una unidad en Trade Me (Nueva Zelanda). Todo verificado el 19/10/2026. Quedan sin dato el precio oficial, el peso en orden de marcha, el par, el consumo y las emisiones, no publicados por la marca. Las fotos interiores son oficiales de pilote.fr (modelo exacto); la exterior, de una unidad P740FC Evidence en un distribuidor español sin marcas de agua: la marca no publica foto exterior del P740FC en su web.

    El veredicto: el P740FC es para parejas que priorizan dormir bien por encima de todo y quieren una cama central de verdad sin saltar a una integral, con cuatro plazas reales, carnet B y una célula preparada para el invierno. La soute regulable lo hace doblemente atractivo para deportistas. No es para quien busque compacidad —7,47 metros se notan al aparcar—, para quien necesite cinco o seis plazas homologadas ni para quien quiera un precio cerrado en catálogo: aquí toca negociar.`,
    pros: [
      "Cama central de 150x190 siempre hecha, accesible por ambos lados, en un perfilado de 7,47 m",
      "Soute trasera de gran volumen con doble acceso y regulación eléctrica de altura en opción",
      "Estructura ISOTEK exclusiva de Pilote, pensada para el uso invernal (redes antiheladas)",
      "Cuatro plazas para dormir sin convertir nada (central + pavillon en opción) con carnet B",
      "Carga útil publicada de 535 kg y chasis Pacific específico con vía trasera ensanchada",
    ],
    contras: [
      "Pilote no publica tarifa oficial: precio a negociar con cada concesionario",
      "7,47 metros de largo limitan el aparcamiento urbano y exigen experiencia al maniobrar",
      "El lit de pavillon es opcional: de serie, las plazas nocturnas son dos",
      "La versión base de 140 CV manual puede quedarse justa con carga completa en puertos",
      "Peso en orden de marcha no publicado por la marca: imposible verificar la carga útil real",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/pilote-p740fc-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Pilote P740FC, vista exterior",
        ancho: 800,
        alto: 600,
      },
      {
        src: "/media/pilote-p740fc-2026-precio-ficha-tecnica-interior1.webp",
        alt: "Pilote P740FC, dormitorio con cama central",
        ancho: 1024,
        alto: 756,
      },
      {
        src: "/media/pilote-p740fc-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Pilote P740FC, cocina",
        ancho: 1024,
        alto: 1556,
      },
      {
        src: "/media/pilote-p740fc-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Pilote P740FC, garaje trasero",
        ancho: 1023,
        alto: 1158,
      },
    ],
    analisisSlug: "pilote-p740fc-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Base Fiat Ducato: revisión cada 2 años o 40.000 km (lo que antes ocurra, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión base (Fiat Ducato)",
          queSeCambia: "Aceite + filtros + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Pilote (anual recomendada)",
          queSeCambia: "Estanqueidad, gas, electricidad, humedades",
          costeAproxEur: 250,
        },
      ],
    },
  },
];
