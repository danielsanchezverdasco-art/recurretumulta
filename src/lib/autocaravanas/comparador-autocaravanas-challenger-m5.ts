// Autocaravanas Challenger — lote Merlín 5 (19/10/2026).
// Modelo 287: novedad 2026 de la gama de perfiladas Challenger (grupo Trigano).
// --- Fuentes y notas del modelo 287 ---
// Fuentes: página oficial del modelo (https://www.challenger-camping-cars.fr/modeles/287/)
// con ficha técnica completa y precio oficial en Francia (69.990 €, JSON-LD de la página);
// artículo de Esprit Camping-Car sobre las novedades Challenger 2026
// (https://espritcampingcar.com/challenger-le-retour-aux-sources/): el 287 es uno de los
// tres nuevos perfilados (287, 318, 317) y el único que solo se ofrece sobre Ford Transit;
// anuncio de unidad 2026 en caraworld.de con UVP del fabricante de 84.795 € (Alemania,
// versión Graphite Edition 165 CV automática 4,1 t) y 5 plazas con cinturón;
// ficha de Monzacamper (Italia): 699 cm, 5 plazas homologadas, Transit 165 CV.
// Verificado el 19/10/2026.
// NOTAS HONESTAS: Challenger no publica tarifa oficial para España: precioDesde recoge
// el precio oficial en Francia (69.990 €, web oficial de Challenger); en Alemania el UVP
// para la versión Graphite Edition 165 CV automática es de 84.795 € (fuente: caraworld.de).
// La potencia indicada (130 CV) es la de la versión base con cambio manual según la ficha
// oficial; la motorización superior de 165 CV con automático de 8 velocidades es opcional.
// La carga útil no la publica la marca: queda sin dato (prohibido calcularla).
// Plazas: 5 con cinturón según anuncio alemán de unidad 2026 (caraworld.de) y ficha italiana
// (Monzacamper); la página oficial francesa no declara las plazas.
// Fotos de una unidad nueva 287 Graphite Edition en un distribuidor italiano (modelo exacto,
// sin marcas de agua ni rótulos): Challenger no publica fotos del 287 en su web oficial.

import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_CHALLENGER_M5: Autocaravana[] = [
  {
    id: "challenger-287-2026-precio-ficha-tecnica",
    marca: "Challenger",
    modelo: "287",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 69990, // precio oficial en Francia según la web de Challenger (JSON-LD del modelo 287); sin tarifa publicada para España
    potenciaCv: 130, // Ford Transit 2.0 de 130 CV manual (versión base); 165 CV con automático de 8 velocidades en opción
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
    imagen: "/media/challenger-287-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/challenger-287-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/challenger-287-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990, // 6,99 m según anuncios de unidades 2026 (caraworld.de, Monzacamper)
    anchoMm: 2350, // 2,35 m según ficha oficial
    altoMm: 2920, // 2,92 m según ficha oficial
    pesoKg: 2898, // masa en orden de marcha según ficha oficial (+/- 5 %)
    mmaKg: 3500, // PTAC; ampliable a 4.100 kg en opción (requiere 165 CV y automático)
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: null, // la marca no publica la carga útil
    consumo: null,
    consumoUnidad: null,
    plazas: 5, // 5 plazas con cinturón según anuncio de unidad 2026 (caraworld.de) y ficha italiana (Monzacamper)
    plazasDormir: 4, // lits jumeaux 90x195 + 90x199 + lit de pavillon eléctrico 140x190 en opción
    parNm: null,
    traccion: "delantera", // Ford Transit (tracción delantera)
    emisionesCo2: null,
    aprox: [],
    notas:
      "Perfilada novedad 2026 sobre Ford Transit 2.0 (130 CV manual de serie, 165 CV con automático de 8 velocidades en opción), según ficha oficial de Challenger: 6,99 x 2,35 x 2,92 m, 2.898/3.500 kg, lits jumeaux de 90x195 y 90x199, lit de pavillon eléctrico de 140x190 en opción, dinette convertible de 116x195, calefacción Truma de 4.000 W utilizable en marcha (6.000 W en opción), agua limpia de 105 l y grises de 100 l, frigorífico de compresión de 140 l. Ampliación de MMA a 4.100 kg en opción. Precio oficial en Francia: 69.990 € (web oficial de Challenger); en Alemania el UVP para la versión Graphite Edition 165 CV automática es de 84.795 € (fuente: caraworld.de). Quedan sin dato: precio oficial en España, carga útil, par, consumo y emisiones, no publicados por la marca.",
    curiosidades:
      "El 287 es una de las tres grandes novedades de la gama Challenger 2026 —junto a los perfilados 318 y 317— y es el único de los tres que se ofrece exclusivamente sobre Ford Transit, mientras que sus hermanos también admiten el Fiat Ducato. Fuente: Esprit Camping-Car, «Challenger, en 2026, c'est le retour aux sources» (https://espritcampingcar.com/challenger-le-retour-aux-sources/).",
    descripcion: `La Challenger 287 llega a la gama 2026 de la marca francesa del grupo Trigano con una carta de presentación muy directa: camas gemelas en una perfilada que no llega a los siete metros. Es una de las tres grandes novedades del año para Challenger —junto a los perfilados 318 y 317—, y su planteamiento gustará a las parejas que duermen mejor cada uno en su cama: dos camas individuales de 90x195 y 90x199 cm sobre el garaje, separadas por un pasillo central que permite levantarse de noche sin despertar a nadie. Adiós a las discusiones sobre quién duerme contra la pared.

    Con 6,99 metros de largo, 2,35 de ancho y 2,92 de alto, la 287 se queda justo por debajo de la barrera psicológica de los siete metros, y eso se nota al volante: gira mejor, aparca más fácil y entra en parcelas y áreas de servicio donde sus hermanas mayores de 7,19 o 7,46 metros empiezan a sufrir. La masa en orden de marcha es de 2.898 kg y la MMA de 3.500 kg, así que el carnet B es suficiente; quien viaje muy cargado puede optar por la ampliación a 4.100 kg, que exige pasar al carnet C1 y montar obligatoriamente el motor de 165 CV con cambio automático. El garaje bajo las camas, con doble acceso lateral, traga bicicletas y todo el equipamiento voluminoso del viaje.

    De día, la 287 vive alrededor de su salón en L con banqueta, un espacio que con los asientos de cabina giratorios acoge sin apreturas a cuatro o cinco personas para comer y sobremesa. La cocina lateral resuelve con dos fuegos y un frigorífico de compresión de 140 litros que trabaja a 12 V y 230 V, y el cuarto de baño separa ducha y WC del lavabo con una distribución sensata para una perfilada de este tamaño. Cuando cae la noche, las opciones se multiplican: las gemelas quedan siempre hechas, el lit de pavillon eléctrico de 140x190 cm —en opción— desciende sobre el salón para dos plazas más, y la dinette se convierte en una cama de 116x195 cm. En configuración máxima, cinco personas duermen a bordo sin tener que desmontar nada por la mañana salvo la dinette.

    Bajo la célula, solo hay una opción de chasis: el Ford Transit 2.0 diésel, porque el 287 es el único de los tres nuevos perfilados que no se ofrece con Fiat Ducato. De serie monta el 130 CV con cambio manual, honesto para viajar tranquilo con la MMA de 3,5 toneladas, y en opción el 165 CV con el automático de 8 velocidades, la elección lógica si se rueda cargado, se frecuenta la montaña o se amplía la MMA. La tracción es delantera y el depósito de gasóleo es de 70 litros. La calefacción Truma de 4.000 W funciona con el carburante del vehículo y puede usarse en marcha; hay opción de 6.000 W para los más frioleros.

    La dotación de serie refleja la gama 2026 de Challenger: estructura IRP 360 de poliéster en suelo, paredes y techo, doble acristalamiento con oscurecedores combinados, preinstalación solar con regulador MPPT, predisposición para batería de litio, cámara de marcha atrás, multimedia con mandos en el volante y los packs de la casa —Connect con FordPass, Safety con alerta de colisión y mantenimiento de carril, y el Arctic con depósito de grises aislado y calefactado y suelo radiante para el invierno—. La Graphite Edition suma llantas negras de 16 pulgadas y una imagen más agresiva.

    Para situar el 287 dentro de la familia conviene mirar a sus hermanos de 2026. El 318 apuesta por la cama central con salón de banquetas enfrentadas y el 317 combina gemelas con baño central, y ambos se ofrecen también con el Fiat Ducato de 140 CV que la marca recupera esta temporada; el 287, en cambio, se mantiene fiel al Transit en exclusiva. Esa fidelidad tiene su lógica: el óvalo azul es el chasis histórico de Challenger, con una red de talleres densísima y un comportamiento que los técnicos de la marca conocen al milímetro. Quien dude entre los tres tiene el dilema servido: gemelas compactas y ágiles (287), cama central con salón cara a cara (318) o gemelas con baño independiente en el centro (317).

    En el día a día, los detalles de la 287 hablan el idioma de la gama 2026. La estructura IRP 360 —poliéster en suelo, paredes y techo— promete estanqueidad y resistencia al granizo sin el peso del aluminio; la Technibox concentra los fusibles y la toma de agua exterior en un punto accesible; la puerta de la célula trae ventana y cierre centralizado con el portador; y el interior suma tomas USB y USB-C, espejo en la entrada, colchón premium en la cama principal y preinstalación de TV. Son esos pequeños aciertos los que, sumados, hacen que una perfilada se sienta moderna o anticuada, y aquí Challenger ha hecho los deberes.

    Del precio hay que hablar con los datos en la mano. La web oficial de Challenger en Francia anuncia el 287 desde 69.990 €, una cifra de partida para la versión base que lo coloca en la zona competitiva del segmento. En Alemania, el UVP del fabricante para una unidad 287 Graphite Edition con el 165 CV automático y chasis de 4,1 toneladas es de 84.795 €, según el anuncio de un distribuidor. En España, Challenger no publica tarifa: cada concesionario fija su precio y conviene comparar el equipamiento incluido, porque los packs cambian mucho la factura final.

    Cómo lo verificamos: cotas, pesos, camas, aguas (105 l limpias, 100 l grises), calefacción y equipamiento de serie salen de la ficha oficial del modelo en challenger-camping-cars.fr; la condición de novedad 2026 y la exclusividad del chasis Ford, del artículo de Esprit Camping-Car; el UVP alemán de 84.795 € y las 5 plazas con cinturón, del anuncio de una unidad 2026 en caraworld.de; los 699 cm y las 5 plazas homologadas, de la ficha del distribuidor italiano Monzacamper. Todo verificado el 19/10/2026. Quedan sin dato el precio oficial español, la carga útil, el par, el consumo y las emisiones, no publicados por la marca. Las fotos son de una unidad nueva 287 Graphite Edition en un distribuidor italiano (modelo exacto, sin marcas de agua): la marca no publica fotos del 287 en su web oficial.

    El veredicto: la 287 es la perfilada para parejas que quieren gemelas en formato compacto, cinco plazas de viaje y carnet B, con la opción de dormir hasta cinco gracias al pavillon. La Graphite con pack Arctic aguanta el invierno sin complejos. No es la elección si se busca cama central —para eso están el 318 o el 328—, si hacen falta seis plazas o si se quiere la máxima agilidad urbana: 6,99 metros siguen siendo una perfilada de verdad.`,
    pros: [
      "Camas gemelas de 90x195 y 90x199 en solo 6,99 metros, con garaje de gran volumen debajo",
      "Novedad 2026 con la dotación más reciente de Challenger (IRP 360, Truma, packs Connect/Safety/Arctic)",
      "Hasta 5 plazas para dormir con el lit de pavillon eléctrico y la dinette convertible",
      "Se conduce con carnet B (3.500 kg de MMA) y es más manejable que sus hermanas mayores",
      "Versión Graphite Edition con 165 CV, automático de 8 velocidades y estética diferenciada",
    ],
    contras: [
      "Solo disponible sobre Ford Transit: no hay opción Fiat Ducato como en los 318 y 317",
      "La versión básica de 130 CV puede quedarse justa con carga completa o en puertos",
      "Challenger no publica tarifa en España: precio a negociar con cada distribuidor",
      "El lit de pavillon es opcional: sin él, la capacidad nocturna se queda en dos plazas",
      "Acabados correctos pero un escalón por debajo de las premium alemanas",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/challenger-287-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Challenger 287, vista exterior delantera",
        ancho: 1024,
        alto: 684,
      },
      {
        src: "/media/challenger-287-2026-precio-ficha-tecnica-interior1.webp",
        alt: "Challenger 287, cabina Ford Transit",
        ancho: 1024,
        alto: 684,
      },
      {
        src: "/media/challenger-287-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Challenger 287, lateral con garaje abierto",
        ancho: 1024,
        alto: 684,
      },
      {
        src: "/media/challenger-287-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Challenger 287, vista exterior trasera",
        ancho: 1024,
        alto: 684,
      },
    ],
    analisisSlug: "challenger-287-2026-analisis-opinion",
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
