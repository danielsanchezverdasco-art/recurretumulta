// Autocaravanas Pilote — lote 2 Merlín (19/10/2026).
// Fotos oficiales (prensa/web de marca); créditos en public/media-creditos.md.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_PILOTE_M2: Autocaravana[] = [
{
    id: "pilote-v630j-2026-precio-ficha-tecnica",
    marca: "Pilote",
    modelo: "V630J",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: 63900,
    potenciaCv: 140, // Fiat Ducato 2.2 de 140 CV (de serie; 180 CV opcional)
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
    imagen: "/media/pilote-v630j-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/pilote-v630j-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/pilote-v630j-2026-precio-ficha-tecnica-interior.webp",
    curiosidades:
      "Curiosidad: el V630J monta de serie la Truma Combi D4 diésel —calefacción sin bombonas— y publica una carga útil oficial de 555 kg, una transparencia poco habitual en el segmento (fuente: https://www.pilote.fr/fourgon/v630j/).",
    videoId: null,
    videoCanal: null,
    largoMm: 6360, // web oficial Pilote
    anchoMm: 2050, // web oficial Pilote
    altoMm: 2670, // web oficial Pilote
    pesoKg: null, // Pilote no publica la masa en orden de marcha en la ficha
    mmaKg: 3500, // web oficial Pilote (chasis 3,5 t)
    carnetNecesario: "B",
    cargaUtilKg: 555, // «Charge utile», publicada por Pilote en su web oficial
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // web oficial Pilote
    plazasDormir: 2, // camas gemelas traseras de 77×200 cm
    parNm: null,
    traccion: "delantera", // Fiat Ducato: tracción delantera
    emisionesCo2: null,
    aprox: ["Precio de tarifa en Francia: 63.900 €"],
    notas:
      "Dimensiones (6.360/2.050/2.670 mm), 4 plazas, 2 plazas para dormir (camas gemelas de 77×200 cm, unibles en cama de 190 cm de ancho), carga útil (555 kg), chasis de 3,5 t, motor Fiat Ducato 2.2 de 140 CV (180 CV opcional, automático opcional), calefacción Truma Combi D4 diésel, agua limpia de 110 l y aguas grises de 90 l, de la web oficial de Pilote (pilote.fr, ficha del V630J), consultada el 19 de octubre de 2026. Precio «desde 63.900 €» (Francia), de prensa especializada (itransports.fr): se consigna con aprox de país al no ser tarifa oficial de la marca. Pilote no publica la masa en orden de marcha: campo sin dato. Sustituye al Giottiline Therry 34 asignado, descatalogado en 2026 (ver CHECKS-A.md).",
    descripcion: `El Pilote V630J es la camper francesa que ha entendido algo que muchas marcas tardan años en aprender: en un furgón de 6,36 metros, dormir bien es más importante que casi todo lo demás. Por eso su seña de identidad son las camas gemelas traseras de 77×200 centímetros, dos lechos individuales generosos que, con el complemento opcional, se unen en una cama doble de 190 centímetros de ancho. Es la distribución de los grandes ruteros aplicada al formato furgón, y funciona especialmente bien para parejas que valoran su espacio nocturno —o que simplemente no quieren pelear por la manta.

    Pilote —marca francesa del grupo Trigano, fabricada en Francia— plantea el V630J como un furgón «de largo recorrido»: 6,36 metros que se notan en la zona de noche y en la soute, el garaje bajo las camas gemelas que traga bicicletas, sillas y material voluminoso con acceso exterior. Una de las camas puede elevarse parcialmente para ampliar ese garaje, un detalle práctico que multiplica los usos del vehículo según el viaje: modo «dormir» o modo «cargar».

    La cocina está pensada para cocinar de verdad: cuatro cajones con freno, mueble alto, placa de dos fuegos con encendido piezoeléctrico y una encimera ampliable con la tapa del fregadero y una extensión en el extremo del mueble. No es la cocina testimonial de muchas campers; es un puesto de trabajo para quien viaja cocinando. El baño es un 3 en 1 de 79×86 centímetros con WC Thetford sobre guías, lavabo escamoteable que libera la ducha y claraboya de ventilación: compacto pero bien resuelto, con soluciones ingeniosas en cada centímetro.

    La calefacción es la Truma Combi D4 diésel, que calienta la célula y el agua usando el propio gasóleo del depósito: adiós a las bombonas para la calefacción, una ventaja enorme en invierno y en viajes largos por zonas sin suministro de gas. El agua limpia es de 110 litros y las grises, de 90: cifras generosas para el formato. Y la carga útil oficial es de 555 kilos sobre un chasis de 3,5 toneladas, un dato que Pilote publica con transparencia poco habitual y que permite calcular el equipaje real sin adivinanzas.

    El precio de referencia en Francia parte de unos 63.900 euros según la prensa especializada: un posicionamiento medio para un 6,36 metros francés con camas gemelas y calefacción diésel de serie. No es la camper más barata del formato, pero el equipamiento de serie —Traction+, neumáticos de cuatro estaciones, depósito de 90 litros, packs de seguridad— justifica la diferencia frente a las propuestas más peladas.

    En el debe, lo primero es la longitud: 6,36 metros se aparcan peor que 5,99 y se notan en los pueblos con calles estrechas; es el peaje de las camas gemelas. Lo segundo, solo dos plazas para dormir de serie: las camas gemelas son magníficas para dos, pero no hay tercera cama fácil. Lo tercero, la masa en orden de marcha no la publica la marca, así que el peso real en báscula de cada unidad equipada conviene verificarlo antes de firmar, aunque la carga útil oficial de 555 kg da un marco fiable.

    Fabricar en Francia no es un detalle menor: la planta de Pilote en La Limouzinière lleva décadas produciendo furgones, y eso se traduce en una red de concesionarios densa, repuestos sin aduanas y un servicio posventa que habla tu idioma —literalmente—. El grupo Trigano, al que pertenece, es el mayor grupo europeo del sector: la solidez industrial está garantizada, y el valor de reventa en el mercado francés —el mayor de Europa— protege la inversión mejor que en marcas minoritarias.

    Cómo lo verificamos: las dimensiones (6.360/2.050/2.670 mm), las 4 plazas, las 2 plazas para dormir, las camas gemelas (77×200 cm, unibles a 190 cm), la carga útil (555 kg), el chasis de 3,5 t, el motor Fiat Ducato 2.2 de 140 CV (180 CV y automático opcionales), la calefacción Truma Combi D4 diésel, el agua limpia (110 l) y las aguas grises (90 l) proceden de la web oficial de Pilote (pilote.fr, ficha del V630J), consultada el 19 de octubre de 2026. El precio «desde 63.900 €» (Francia) procede de prensa especializada (itransports.fr) y se consigna con aprox de país. Pilote no publica la masa en orden de marcha: campo sin dato.

    Para quién es: el V630J es para la pareja rutera que prioriza dormir bien —camas gemelas de 77×200, unibles— y viajar en invierno sin depender del gas, con la calefacción diésel y los 110 litros de agua. Es para quien hace kilómetros, carga bicis en la soute y valora la fabricación francesa del grupo Trigano. No es para quien necesite aparcar en 5,99 metros justos, ni para familias que requieran más de dos camas, ni para quien busque el precio más bajo del formato: aquí se paga el confort nocturno, y se nota cada noche.`,
    pros: [
      "Camas gemelas de 77×200 cm, unibles en 190 cm: dormir de verdad",
      "Truma Combi D4 diésel de serie: calefacción sin depender de bombonas",
      "Carga útil oficial de 555 kg: transparencia poco habitual",
      "Soute XXL bajo las camas: garaje para bicis y material voluminoso",
      "Cocina de verdad: 4 cajones, encimera ampliable y mueble alto",
    ],
    contras: [
      "6,36 m de largo: peor aparcamiento y maniobra que un 5,99",
      "Solo 2 plazas para dormir: sin tercera cama fácil",
      "Sin masa en orden de marcha oficial: pesar la unidad antes de firmar",
      "Precio medio-alto: por encima de las campers de acceso",
      "Baño 3 en 1 compacto (79×86 cm): funcional, no espacioso",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/pilote-v630j-2026-precio-ficha-tecnica-ext.webp",
        alt: "Pilote V630J, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/pilote-v630j-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Pilote V630J, salón",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/pilote-v630j-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Interior del Pilote V630J, camas gemelas",
        ancho: 1200,
        alto: 800,
      },
      
    ],
    analisisSlug: "pilote-v630j-2026-precio-ficha-tecnica-analisis-opinion",
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
          nombre: "Revisión célula Pilote (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones del sector",
    },
    euroncap: null,
    fuenteNombre: "Pilote (web oficial, ficha del V630J)",
    fuenteUrl: "https://www.pilote.fr/fourgon/v630j/",
  }
];
