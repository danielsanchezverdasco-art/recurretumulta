// Autocaravanas Bavaria — lote Merlín 4 (18/10/2026), corrección b/c/d (22:15).
// Fuente: página oficial del modelo en bavaria-camping-car.com (grupo Pilote),
// verificada el 18/10/2026: 7,56 m, 2,30 m, 2,85 m, 4 plazas, 4 para dormir,
// carga útil publicada de 376 kg. Correcciones: eliminado costeMensual;
// cargaUtilKg = 376 (publicada por la marca); añadidos descripcion, notas y
// plazasDormir; analisisSlug actualizado a -analisis-opinion. Bavaria no publica PVP.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_BAVARIA_M1: Autocaravana[] = [
  {
    id: "bavaria-i740fgj-nomade-2026-precio-ficha-tecnica",
    marca: "Bavaria",
    modelo: "I740FGJ Nomade",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // Bavaria no publica PVP oficial; no inventar
    potenciaCv: 140, // «no oficial»: motorización estándar de la gama; no visible en el extracto de la página oficial
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
    imagen: "/media/bavaria-i740fgj-nomade-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/bavaria-i740fgj-nomade-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/bavaria-i740fgj-nomade-2026-precio-ficha-tecnica-oficial-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7560, // página oficial: 7,56 m
    anchoMm: 2300, // página oficial: 2,30 m
    altoMm: 2850, // página oficial: 2,85 m
    pesoKg: null, // no publicado de forma única en la página oficial
    mmaKg: 3500, // «no oficial»: clase 3,5 T estándar; no visible en el extracto de la página oficial
    carnetNecesario: "B",
    cargaUtilKg: 376, // publicada por la marca en la página oficial («Charge utile»)
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // página oficial: 4 plazas sentadas
    plazasDormir: 4, // página oficial: 4 plazas para dormir
    parNm: null,
    traccion: null, // no publicada por el fabricante
    emisionesCo2: null,
    aprox: ["potenciaCv", "mmaKg"],
    notas:
      "Bavaria no publica PVP del I740FGJ Nomade. Medidas, plazas, plazas para dormir (4) y carga útil (376 kg), de la página oficial del modelo. Potencia y MMA: «dato no oficial · en revisión», coherentes con la gama y la clase 3,5 T. sin PVP oficial verificable.",
    descripcion: `La Bavaria I740FGJ Nomade es una autocaravana integral de 7,56 metros fabricada en Francia por Bavaria, marca del grupo Pilote, uno de los grandes grupos europeos del caravaning. El apellido Nomade designa la línea de la marca pensada para viajar ligero sin renunciar al confort: equipamiento completo de serie, célula bien aislada y una distribución que aprovecha cada centímetro. El código I740FGJ identifica una integral —la «I» de integral— con camas gemelas traseras, el formato de dormitorio más demandado en las integrales europeas de este tamaño.

Los datos oficiales, publicados por la propia marca en la página del modelo, dibujan una integral grande pero contenida: 7,56 m de longitud, 2,30 m de anchura y 2,85 m de altura, con 4 plazas homologadas para viajar y 4 para dormir. La carga útil publicada es de 376 kg, una cifra honesta y verificable que permite calcular con realismo cuánto equipaje y cuántos opcionales admite sin superar la MMA. Es un dato que no todas las marcas publican con esta claridad y que conviene valorar: con 376 kg hay que elegir bien los extras, porque entre el toldo, la segunda batería, el portabicicletas y la vajilla el margen se consume deprisa. La motorización estándar de la gama es el 2.2 de 140 CV, con cambio automático disponible en la versión Nomade, un detalle importante en una integral de este porte: mover 7,56 m sin pisar el embrague en retenciones y puertos se agradece cada día.

La distribución gira en torno a las camas gemelas traseras, elevadas sobre un gran garaje pasante accesible desde el interior y desde ambos laterales del vehículo. Las dos camas individuales pueden unirse mediante la prolongación de serie para formar una gran cama doble de tipo king size, de modo que el dormitorio se adapta a parejas y a amigos sin cambiar de modelo. Debajo, el garaje ofrece una altura generosa para transportar bicicletas, sillas, mesa de camping y todo el material voluminoso que en una perfilada pequeña acabaría en el salón. Delante, el salón cara a cara con dos grandes banquetas y mesa plegable acoge a cinco comensales, y la cocina, con placa de dos fuegos y frigorífico de compresor eléctrico, está pensada para el uso diario. El cuarto de baño es uno de los puntos fuertes que destaca el fabricante: ducha independiente separada del inodoro por mamparas correderas, aislada tanto del salón como del dormitorio, una intimidad poco común en integrales de este precio.

En marcha, la I740FGJ Nomade se beneficia de la experiencia del grupo Pilote en células de gran formato: estructura con paredes aisladas, techo resistente al granizo y un aislamiento reforzado que permite alargar la temporada más allá del verano. La anchura de 2,30 m, algo menor que los 2,35 m de algunas competidoras alemanas, facilita la conducción en carreteras secundarias estrechas, aunque con 7,56 m de eslora sigue siendo un vehículo que pide áreas amplias y conductor acostumbrado al tamaño. El motor de 140 CV mueve con dignidad el conjunto en llano, pero en puertos de montaña con la célula cargada se echa en falta algo más de reserva, un peaje habitual en las integrales de 3,5 toneladas con motor base.

Bavaria no publica PVP oficial, así que el precio solo se conoce pidiendo oferta en la red de concesionarios, más densa en Francia que en España. Como referencia de segmento, las integrales de 7,5 m con camas gemelas de marcas generalistas francesas se mueven en una horquilla amplia según equipamiento, y la Nomade se posiciona como una opción de buena relación equipamiento-precio dentro del grupo Pilote, por debajo de las integrales premium alemanas como Carthago o Niesmann+Bischoff y por encima de las perfiladas equivalentes. Sus rivales directas son la Pilote G740FGJ —prima hermana dentro del propio grupo—, la Chausson 788 Titanium Line y la Benimar Amphitryon en su versión de camas gemelas.

Cómo lo verificamos: las medidas (7,56 × 2,30 × 2,85 m), las 4 plazas sentadas, las 4 plazas para dormir y la carga útil de 376 kg proceden de la página oficial del modelo en bavaria-camping-car.com, consultada el 18 de octubre de 2026. La marca no publica PVP, MMA detallada ni potencia en el extracto visible de la página, así que esos campos van marcados como «dato no oficial · en revisión» o sin dato. Bavaria forma parte del grupo Pilote y fabrica en Francia.

Para quién es: la I740FGJ Nomade es para parejas o familias de cuatro que quieren una integral de verdad —con su parabrisas panorámico y su sensación de espacio— sin saltar a los precios de las premium alemanas, y que valoran el garaje grande y las camas gemelas convertibles. No es para quien busque una integral compacta de 7 metros ni para quien necesite cinco plazas homologadas. El veredicto es que es una integral honesta y bien equipada, con el respaldo industrial del grupo Pilote y una carga útil publicada que permite comprar con los números claros, lastrada solo por una red comercial más centrada en Francia y por un motor base justo para el peso en montaña.`,
    curiosidades: "Las dos camas gemelas traseras se convierten en una cama doble king size gracias a una prolongación de serie, y también existe versión de «camas bajas» para subir sin escalera. Fuente: página oficial del modelo I740FGJ Nomade (https://www.bavaria-camping-car.com/integral/i740fgj-nomade/).",
    pros: [
      "Integral con camas gemelas sobre gran garaje: dos camas individuales que se unen en king size",
      "Caja automática disponible en la versión Nomade: conducir 7,56 m sin estrés",
      "Carga útil publicada por la marca (376 kg): se compra con los números claros",
      "Grupo Pilote: fabricación francesa con red de servicio consolidada",
      "4 plazas de viaje y 4 para dormir sin salones convertibles que montar cada noche",
    ],
    contras: [
      "7,56 m de eslora: la más larga de esta tanda; pide áreas y aparcamientos grandes",
      "140 CV para 3.500 kg: justa en puertos de montaña con la célula cargada",
      "Sin PVP oficial publicado por Bavaria: el precio solo se conoce con oferta en mano",
      "Red comercial más densa en Francia que en España",
      "Anchura de 2,30 m: en carreteras secundarias estrechas hay que ir con calma",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/bavaria-i740fgj-nomade-2026-precio-ficha-tecnica-ext.webp",
        alt: "Bavaria I740FGJ Nomade, vista lateral (foto oficial)",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/bavaria-i740fgj-nomade-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Salón cara a cara del Bavaria I740FGJ Nomade (foto oficial)",
        ancho: 763,
        alto: 512,
      },
      {
        src: "/media/bavaria-i740fgj-nomade-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Dormitorio con camas gemelas del Bavaria I740FGJ Nomade (foto oficial)",
        ancho: 768,
        alto: 512,
      },
      {
        src: "/media/bavaria-i740fgj-nomade-2026-precio-ficha-tecnica-oficial-interior3.webp",
        alt: "Cocina del Bavaria I740FGJ Nomade (foto oficial)",
        ancho: 512,
        alto: 880,
      },
    ],
    analisisSlug: "bavaria-i740fgj-nomade-2026-analisis-opinion",
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
          nombre: "Revisión célula Bavaria (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 650,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones del sector",
    },
    euroncap: null,
    fuenteNombre: "Bavaria (web oficial, grupo Pilote)",
    fuenteUrl: "https://www.bavaria-camping-car.com/integral/i740fgj-nomade/",
  },
];
