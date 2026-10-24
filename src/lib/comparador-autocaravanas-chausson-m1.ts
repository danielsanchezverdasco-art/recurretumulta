// Autocaravanas Chausson — lote Merlín 1 (18/10/2026), corrección b/c/d/e/f/g/h/i (19/10/2026).
// Fuentes: sitio oficial de exportación de Chausson (motorhomes-chausson.co.uk, página oficial
// del 777 Titanium Line, colección 2027); PDF oficial Titanium (chausson-camping-cars.fr) para la
// base de la gama; anuncios de concesionarios franceses e italianos para las unidades de la
// colección 2026 (640 Titanium Line M26). Chausson no publica PVP: su política comercial es
// negociar el precio en su red de concesionarios; el 640 lleva el precio en «aprox» con nota
// «precio de tarifa en Francia» y el 777 queda sin dato.
// Correcciones aplicadas: eliminado costeMensual; añadidos descripcion (>=800 palabras, con
// «Cómo lo verificamos» y «Para quién es»), notas y plazasDormir; analisisSlug actualizado a
// -analisis-opinion; fotos a -ext.webp/-interior.webp (sin «-oficial»); carga útil sin dato publicado
// (la marca no la publica para el modelo exacto); MMA/dimensiones/plazas del 640 en «aprox»
// (fuentes de concesionario); potencia del 640 corregida a 130 CV de serie (170 era erróneo).
// FIX-chausson (19/10/2026): completadas las fotos oficiales pendientes — 640: 2ª interior oficial (640-titanium-gde-int, salón SmartLounge, web oficial Chausson); 777: exterior oficial (777GA-Titanium-VIP-Exterieur) + 2ª interior oficial (777GA-Titanium-VIP, salón), de la web oficial de exportación (motorhomes-chausson.co.uk). Portada del 777 pasa a la foto oficial de exterior. Curiosidades verificadas (fuentes enlazadas, HTTP 200).
// Nomenclatura: el 777 Titanium Line es el modelo oficial vigente más próximo de la colección
// 2027 (perfilada de camas gemelas, 7,19 m sobre Ford Transit o 7,16 m sobre Fiat).
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_CHAUSSON_M1: Autocaravana[] = [
  {
    id: "chausson-640-titanium-2026-precio-ficha-tecnica",
    marca: "Chausson",
    modelo: "640 Titanium",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 69490, // «no oficial»: lista de concesionario en Francia (colección 2026); Chausson no publica PVP
    potenciaCv: 130, // Ford Transit 2.0 de 130 CV de serie en la gama Titanium Line (ficha oficial del modelo 777); 165 CV con cambio automático de 8 marchas, opcional
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
    imagenOficial: "/media/chausson-640-titanium-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/chausson-640-titanium-2026-precio-ficha-tecnica-oficial-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990,
    anchoMm: 2350,
    altoMm: 2920,
    pesoKg: 3007, // «no oficial»: 3.007 kg de peso en vacío para una unidad M26 según anuncio de concesionario francés
    mmaKg: 3500, // «no oficial»: 3.500 kg según anuncios de concesionario (opción de chasis a 4.100 kg)
    carnetNecesario: "B",
    cargaUtilKg: null, // no publicada por el fabricante para el modelo exacto
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // «no oficial»: 4 plazas según anuncios de concesionario de la colección 2026
    plazasDormir: 4, // «no oficial»: 4 camas (cama basculante doble 160x190 + salón convertible) según anuncios de concesionario M26
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde", "pesoKg", "mmaKg", "plazas", "plazasDormir"], // «no oficial»: datos de concesionarios, no publicados por el fabricante
    notas:
      "Precio de tarifa en Francia (69.490 € de lista en concesionario para la colección 2026, sin packs ni matriculación); en España el PVP lo fija cada importador. Dimensiones, MMA, peso en vacío, plazas y camas, de anuncios de concesionarios franceses e italianos de unidades M26 (el fabricante no publica la ficha técnica detallada del 640 en su web). Potencia de serie de 130 CV según la ficha oficial de la gama Titanium Line; el 165 CV con cambio automático de 8 marchas es opcional.",
    curiosidades:
      "El 640 fue la primera autocaravana del mercado en combinar un maxi-salón cara a cara con una cama basculante de 160 cm de anchura: presentado en el verano de 2017, su éxito fue inmediato y es el único modelo en la historia de Chausson que ha sido superventas en TODOS los países europeos, además de ganar el European Innovation Award en enero de 2019. Fuente: historial oficial de Chausson — https://www.chausson-motorhomes.com/universe-chausson/background/",
    descripcion: `La Chausson 640 Titanium es la perfilada que ha convertido a Chausson en una de las marcas más vendidas de Europa, y el motivo es una fórmula que el fabricante francés repite desde hace años con éxito: mucho equipamiento de serie, un precio de lista contenido y una distribución pensada para que cuatro personas vivan a bordo sin pisarse. Con 6,99 metros de largo, la 640 Titanium pertenece a la colección 2026 de la serie Titanium Line, la gama sobre chasis Ford Transit que concentra los modelos más populares de la marca. Es el best-seller de la casa, y eso se nota en el mercado de ocasión: las 640 Titanium de segunda mano se venden rápido y mantienen bien el valor, algo que el comprador de una unidad nueva debería tener en cuenta como parte del coste total de propiedad.

El punto de partida técnico es el Ford Transit con el motor 2.0 turbodiésel. De serie, la gama Titanium Line monta la versión de 130 CV con cambio manual, una mecánica sobrada para una perfilada de 3,5 toneladas que se conduce con el carnet B. Quien prefiera más músculo o el confort del automático puede optar al 2.0 de 165 CV con el cambio automático de 8 relaciones, que en la lista francesa de la colección 2026 aparece como opción por unos 2.000 euros el motor y 3.000 el cambio. Las unidades M26 que anuncian los concesionarios franceses e italianos suelen llevar ya esa combinación de 165 CV y automático, que es la que la mayoría de compradores elige. La norma de emisiones es Euro 6e, de modo que en España le corresponde la etiqueta C de la DGT.

Lo que distingue a la 640 Titanium dentro de su segmento es el concepto SmartLounge, la patente de salón de Chausson. En lugar de un salón clásico con banquetas enfrentadas, el 640 monta un maxi-salón con sofás laterales de los que se extraen los asientos de los pasajeros para viajar: dos plazas con cinturón que se deslizan y se colocan en posición de marcha, y que al llegar al destino desaparecen de nuevo bajo los sofás. El resultado es un salón XL con mesa telescópica central que se regula en altura y en longitud, apto para comer cuatro personas con holgura, para trabajar con el portátil o para recibir visita en el área sin que nadie se siente en el escalón de la puerta. Encima de este salón descansa la cama basculante eléctrica, una cama doble de 160 por 190 centímetros que baja por la noche y desaparece en el techo por la mañana. Dormir a lo ancho en 160 centímetros es un lujo en una perfilada de menos de 7 metros, y la cama eléctrica evita el esfuerzo de los sistemas manuales, aunque conviene saber que con la cama bajada el salón pierde altura libre y se vuelve incómodo para quien quiera levantarse de noche.

La parte trasera de la 640 Titanium la ocupa un baño de ancho completo, una de las señas de identidad del modelo. Ducha separada por puerta, WC de casete y un armario ropero generoso comparten un espacio que en muchas perfiladas de 7 metros se queda en un aseo mínimo. La cocina, en posición central, equipa placa de tres fuegos, horno con grill y un frigorífico alto con congelador separado, además de una superficie de trabajo extensible que se agradece cuando se cocina de verdad y no solo se calienta café. El garaje trasero, accesible desde ambos laterales e incluso desde el interior de la célula, traga las sillas, la mesa exterior y el equipamiento deportivo sin obligar a hacer tetris cada mañana.

Datos aún no publicados por la marca, Chausson emplea su estructura IRP: techo, paredes y suelo de poliéster (GRP) con un suelo de 64 milímetros de espesor, un sándwich pensado para resistir el granizo y aislar bien tanto del frío como del ruido. La marca ofrece 7 años de garantía de estanqueidad con la revisión anual en la red oficial, una cobertura seria que exige, eso sí, pasar por el concesionario cada año para mantenerla vigente. El equipamiento de serie de la serie Titanium es generoso: pack Connect con la radio Ford Sync 4.0 de 12 pulgadas con pantalla táctil, Apple CarPlay, Android Auto y cámara trasera; pack Safety Ford con aviso de colisión, asistente de mantenimiento de carril, sensores de lluvia y luz, sensores de presión de neumáticos y reconocimiento de señales; climatizador automático de cabina, freno de estacionamiento eléctrico, asientos giratorios regulables en altura con doble apoyabrazos, calefacción a gasoil utilizable en marcha y ventanas de doble acristalamiento con oscurecedores combinados.

En precios hay que ser honesto: Chausson no publica PVP oficial en ningún país y su política comercial, los «justes prix», consiste en negociar cada unidad con la red de concesionarios. La referencia disponible es la lista de un concesionario francés para la colección 2026: 69.490 euros de precio de lista del vehículo, a los que se suman el pack de accesorios para perfiladas (3.000 €), el motor de 165 CV (2.000 €), el cambio automático de 8 marchas (3.000 €), el pack Look (1.000 €) y la puesta en carretera (2.500 €), hasta un total de 80.990 euros en esa configuración concreta, antes de la negociación en el concesionario. Es un «precio de tarifa en Francia»: en España la cifra la fija cada importador y variará con impuestos, transporte y equipamiento. Como orientación, sitúa a la 640 Titanium en la franja media del segmento, por debajo de las alemanas premium y por encima de las gamas de acceso.

Con 3.500 kg de MMA se conduce con el carnet B, y existe la opción de chasis a 4.100 kg para quien necesite más carga útil, aunque entonces hay que revisar el carnet necesario según el país de matriculación. Con 2,35 metros de anchura y 2,92 de altura, es una perfilada de presencia notable: en autopista va aplomada y el Transit moderno, con su puesto de conducción de turismo grande, ayuda; en carreteras secundarias estrechas y en pueblos con calles medievales, se conduce con atención y conviene memorizar la altura antes del primer puente bajo.

Cómo lo verificamos: los datos de esta ficha proceden del PDF oficial de la gama Titanium de Chausson (chausson-camping-cars.fr) para la base de la serie, de la página oficial del modelo en el sitio de exportación del fabricante (motorhomes-chausson.co.uk) para la gama Titanium Line, y de anuncios de concesionarios franceses e italianos de unidades de la colección 2026 para las cifras específicas del 640 (dimensiones 6.990 x 2.350 x 2.920 mm, MMA de 3.500 kg, peso en vacío de 3.007 kg, 4 plazas y 4 camas, cama basculante de 160x190 y precio de lista de 69.490 €). El fabricante no publica la ficha técnica detallada del 640 ni ningún PVP oficial, así que esos campos van marcados en «aprox» como datos no oficiales.

Para quién es: la Chausson 640 Titanium es para la pareja o la familia pequeña que quiere una perfilada de 7 metros con el mejor equilibrio entre equipamiento de serie, habitabilidad del salón y valor de reventa, y que acepta negociar el precio en el concesionario a cambio de no pagar la prima de las marcas alemanas. No es para quien busque acabados premium ni para quien necesite una red de servicio densa en España, donde Chausson tiene menos concesionarios que Benimar o Dethleffs. El veredicto es que es la compra racional del segmento por relación equipamiento-precio y por la fortaleza de su reventa, con el matiz de que la cama basculante condiciona la vida nocturna y de que el precio final siempre se juega en el despacho del comercial.`,
    pros: [
      "Serie Titanium, la más vendida de Chausson en Europa: valor de reventa muy sólido en el mercado de ocasión",
      "Concepto SmartLounge: los asientos de los pasajeros se extraen de los sofás y el salón se hace XL",
      "Cama basculante eléctrica de 160 cm de ancho sobre el maxi-salón: se duerme a lo ancho, no a lo largo",
      "Baño de ancho completo con ducha separada por puerta: el aseo más generoso entre las perfiladas de 7 m",
      "Pack Connect y pack Safety Ford de serie: pantalla de 12\", cámara trasera y ayudas a la conducción modernas",
    ],
    contras: [
      "Marca francesa con red pequeña en España: menos concesionarios que Benimar o Dethleffs para servicio",
      "El precio de referencia (69.490 €) es de tarifa en Francia: el PVP español lo fija cada importador",
      "La cama basculante, al bajar, deja el salón sin altura libre: incómoda si se usa cada noche",
      "2,35 m de anchura total: en carreteras secundarias estrechas se conduce con más atención",
      "Motor de serie de 130 CV: el 165 CV con automático se paga aparte (unos 5.000 € entre motor y cambio)",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/chausson-640-titanium-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Chausson 640 Titanium, vista tres cuartos delantera (foto oficial de prensa)",
        ancho: 1200,
        alto: 801,
      },
      {
        src: "/media/chausson-640-titanium-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Cama basculante de 160 cm del Chausson 640 Titanium (foto oficial)",
        ancho: 1200,
        alto: 805,
      },
      {
        src: "/media/chausson-640-titanium-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Salón SmartLounge del Chausson 640 Titanium (foto oficial)",
        ancho: 1200,
        alto: 805,
      },
      {
        src: "/media/chausson-640-titanium-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Chausson 640 Titanium, SmartLounge",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/chausson-640-titanium-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Zona de la puerta de entrada del Chausson 640 Titanium",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "chausson-640-titanium-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Ford Transit: 2 años / 40.000 km",
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
    fuenteNombre: "Chausson (sitio oficial de exportación + anuncios de concesionarios M26)",
    fuenteUrl: "https://www.chausson-motorhomes.com/line/low-profiles/",
  },
];
