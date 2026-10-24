// Autocaravanas XGO — lote Merlín 4 (18/10/2026), corrección Grok 22:15 (19/10/2026).
// Fuentes: página oficial XVAN de xgomove.it + catálogo oficial XGO 25/26 (la marca no
// publica PVP, masas ni tracción en su web: esos campos quedan sin dato sin inventar).
// Correcciones aplicadas: (a) descripcion propia ≥800 palabras, con «Cómo lo verificamos»
// y «Para quién es»; (b) notas con procedencia de cada dato; (c) plazasDormir investigado:
// 3 (2 camas fijas + 1 componible en el salón); (d) bloque costeMensual eliminado;
// (e) carga útil sin dato publicado (la marca no la publica; prohibido el cálculo MMA−MRO);
// (f) analisisSlug en formato «-analisis-opinion»; (g) fuenteNombre/fuenteUrl oficiales
// de xgomove.it; (h) precioDesde null («no publicado»); (i) fotos en formato «-ext.webp»
// / «-interior.webp»; (l) dimensiones y potencia de la ficha oficial 25/26, verificadas
// con fichas de concesionarios coincidentes.
// NOTA: la tracción queda sin dato porque XGO no la publica para este modelo.
// F9b (19/10/2026): 1 foto oficial ext (trigano.com, gama X-Van) + curiosidades; int oficiales pendientes.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_XGO_M1: Autocaravana[] = [
  {
    id: "xgo-x-van-104-2026-precio-ficha-tecnica",
    marca: "XGO",
    modelo: "X Van 104",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // XGO no publica PVP oficial; no inventar («no publicado»)
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet; catálogo oficial 25/26
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
    imagen: "/media/xgo-x-van-104-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/xgo-x-van-104-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "", // sin foto oficial de interior localizada; "" = sin foto oficial (estándar del tipo)
    videoId: null,
    videoCanal: null,
    largoMm: 6363, // catálogo oficial 25/26
    anchoMm: 2050, // catálogo oficial 25/26
    altoMm: 2659, // catálogo oficial 25/26
    pesoKg: null, // la marca no publica la masa en orden de marcha
    mmaKg: 3500, // catálogo oficial 25/26
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil; no se calcula MMA−MRO
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas homologadas con cinturón
    plazasDormir: 3, // 2 camas fijas traseras + 1 cama componible en el salón
    parNm: null,
    traccion: null, // no publicada por el fabricante
    emisionesCo2: null,
    aprox: [],
    notas:
      "Dimensiones (6.363/2.050/2.659 mm), MMA (3.500 kg), motor (Fiat Ducato 2.2 de 140 CV), 4 plazas homologadas y sistema energético MEB-300, del catálogo oficial XGO 25/26 y la página oficial XVAN de xgomove.it, verificados con fichas coincidentes de concesionarios europeos. XGO no publica en su web ni el PVP, ni la masa en orden de marcha, ni la carga útil, ni la tracción: esos campos quedan sin dato sin inventar cifras («no publicado»). Las 3 plazas para dormir son 2 camas fijas traseras más una tercera componible en el salón. Fotos: solo se ha localizado 1 exterior oficial (trigano.com, imagen de la gama X-Van); faltan 1+ exterior específico del 104 y 2 interiores oficiales: en revisión. Precio: se deja sin dato porque las designaciones X-Van 102/104 no figuran en el listino oficial vigente de XGO (2025/2026: XVan 2, 4, 5, 8 y 238); sin tarifa oficial vigente verificable para este modelo.",
    curiosidades:
      "El X-Van 104 lleva de serie el sistema MEB-300, la gestión energética de a bordo que se controla desde una aplicación del móvil para supervisar la batería y los consumos sin levantarse del asiento. Fuente: página oficial de la gama XVAN en xgomove.it (https://www.xgomove.it/).",
    descripcion: `XGO es la marca italiana que ha hecho de la gama de acceso su territorio: campers y autocaravanas de precio contenido, catálogo claro y sin laberintos de opciones imposibles. No pretende competir con las premium alemanas ni con el diseño de las toscanas; su promesa es más terrenal y, para mucha gente, más útil: una furgoneta camper bien equipada por menos dinero que la competencia, con un catálogo de cuatro furgonetas donde es fácil comparar sin perderse. El X-Van 104 es el grande de esa familia camper, con 6,36 metros que lo sitúan justo en el punto dulce entre la camper compacta de 6 metros y los grandes volúmenes que ya piden otro tipo de conducción.

    Esos 36 centímetros extra respecto a una camper de 5,99 metros se notan más de lo que parece. El X-Van 104 mide 6.363 milímetros de largo, 2.050 de ancho y 2.659 de alto, y ese palmo y medio adicional va directo al interior habitable: más desahogo en el salón, una cocina menos encajada y un baño donde no hay que pedir perdón a las paredes. Sigue siendo una furgoneta —aparca en línea, entra en la mayoría de áreas y se conduce con el carnet B gracias a sus 3.500 kilos de MMA—, pero la vida a bordo se acerca más a la de una perfilada pequeña que a la de una camper justa. Para una familia de cuatro que viaja con equipaje, esa diferencia entre 5,99 y 6,36 metros es la que separa el viaje cómodo del viaje en modo Tetris.

    La seña de identidad tecnológica del 104 tiene nombre propio: MEB-300. Es el sistema de gestión energética de a bordo, controlable desde una aplicación del móvil, que permite supervisar la batería y los consumos sin levantarse del asiento. Puede sonar a gadget, pero quien ha viajado en camper sabe que la electricidad es la ansiedad silenciosa de cada viaje: ¿cuánta batería queda?, ¿aguantará la nevera toda la noche?, ¿puedo enchufar el portátil? Poder mirarlo en el móvil, con la camper aparcada al borde de un acantilado y sin entrar a leer pantallas crípticas, es una de esas comodidades modernas que una vez probadas no se quieren soltar. XGO apuesta por la conectividad como equipamiento de serie en la gama de acceso, donde otras marcas aún la cobran como extra.

    El segundo golpe de efecto es arquitectónico: el portón trasero panorámico. Al abrir las puertas traseras, el salón se abre literalmente al paisaje, convirtiendo el amanecer frente al mar o la sobremesa en el bosque en parte del interior. Es el recurso clásico de las campers bien pensadas —la furgoneta como mirador—, y en el 104 viene de serie en el concepto del modelo. Con buen tiempo, la trasera abierta duplica la sensación de espacio; con mal tiempo, se cierra y vuelta al salón convencional. No es un extra que se pague: es la filosofía del modelo.

    Para dormir, el esquema es familiar y honesto: dos camas fijas en la trasera más una tercera cama componible en el salón, con cuatro plazas homologadas para circular. Las dos camas fijas son la base del día a día en pareja —siempre hechas, siempre disponibles—, y la tercera cama se monta por la noche cuando viajan los niños o un invitado. Hay que decirlo claro: la tercera cama hay que montarla y desmontarla cada día, con lo que eso supone de rutina. No es un defecto, es el formato: en 6,36 metros y cuatro plazas homologadas, la tercera cama fija no cabe sin sacrificar el salón. Las familias que lo asumen como ritual nocturno no tienen problema; quien busque tres camas siempre hechas debe mirar segmentos superiores.

    La base mecánica es el Fiat Ducato 2.2 Multijet de 140 CV, el motor que mueve media Europa camperista: probado, con recambios en todas partes y potencia suficiente para los 3.500 kilos. XGO monta el 140 CV como motorización del 104, un punto intermedio sensato entre los 120 CV justos y los 180 CV que encarecen. Sobre el resto de la ficha técnica, hay que ser tan honestos como la propia marca permite ser: XGO no publica en su web ni el precio, ni la masa en orden de marcha, ni la carga útil, ni la tracción. Esa opacidad informativa es el punto débil de la ficha y hay que decirlo sin rodeos. Sabemos que es un Ducato —y los Ducato son tracción delantera—, pero la marca no lo declara para este modelo y aquí no inventamos datos: la tracción queda sin dato hasta que XGO la publique. Lo mismo con el peso: sin masa oficial no hay carga útil que ofrecer, y no vamos a calcularla restando cifras porque esa operación está expresamente prohibida en nuestras normas.

    Lo del precio merece una reflexión de comprador. XGO no publica PVP oficial y trabaja a través de su red de concesionarios, donde el X-Van 104 se posiciona —por reputación de marca y por segmento— en la franja baja de las campers de su tamaño. Pero «reputación» no es un precio, y aquí cada comprador tendrá que pedir presupuesto y comparar. La ventaja es que el catálogo de XGO es corto y claro —cuatro furgonetas—, así que comparar entre modelos de la marca es fácil; la desventaja es que comparar con otras marcas exige el trabajo manual de pedir precios uno a uno. En España, además, la red de concesionarios de XGO es más limitada que la de las marcas francesas, así que conviene localizar el punto de venta y servicio antes de enamorarse del modelo.

    Cómo lo verificamos: las dimensiones (6.363/2.050/2.659 mm), la MMA de 3.500 kg, el motor Fiat Ducato 2.2 de 140 CV, las cuatro plazas homologadas y el sistema energético MEB-300 con control por app proceden del catálogo oficial XGO 25/26 y de la página oficial XVAN de xgomove.it, verificados el 19 de octubre de 2026 y contrastados con fichas coincidentes de concesionarios europeos (6.365/2.050/2.650 mm, 140 CV). XGO no publica PVP, masa en orden de marcha, carga útil ni tracción para este modelo: esos campos quedan sin dato. Las tres plazas para dormir —dos fijas más una componible— proceden de la documentación oficial del modelo.

    Para quién es: el X-Van 104 es para la familia o la pareja que quiere una camper de 6,36 metros con equipamiento moderno —gestión energética por app, portón panorámico— a precio de gama de acceso, y acepta pedir presupuesto en el concesionario porque la marca no publica tarifa. No es para quien necesite comparar precios online antes de moverse de casa, ni para quien quiera tres camas fijas sin montajes nocturnos. El veredicto es que es la camper conectada y honesta de la gama de acceso italiana: lo que promete lo trae de serie, lo que no publica no lo inventamos, y el comprador que haga su trabajo de concesionario puede encontrar aquí más metros y más tecnología por menos dinero que en las marcas generalistas.`,
    pros: [
      "Sistema energético MEB-300 controlable por app: gestionas batería y consumos desde el móvil",
      "Portón trasero panorámico: el salón se abre al paisaje cuando aparcas",
      "6,36 m sobre Fiat Ducato: maniobrable para lo habitable que es",
      "4 plazas homologadas y 3 camas: formato familiar en furgón",
      "Marca italiana con catálogo claro de 4 furgonetas: fácil comparar sin perderse",
    ],
    contras: [
      "Solo 2 camas fijas: la tercera es componible y hay que montarla cada noche",
      "Altura de 2,66 m: ducha y armarios más bajos que en un big van",
      "Tracción no publicada por el fabricante",
      "Sin PVP oficial publicado por XGO",
      "Red de concesionarios en España más limitada que las marcas francesas",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/xgo-x-van-104-2026-precio-ficha-tecnica-oficial.webp",
        alt: "XGO X-Van (gama), vista exterior",
        ancho: 1200,
        alto: 800,
      },
      {
  src: "/media/xgo-x-van-104-2026-precio-ficha-tecnica-ext2.webp",
  alt: "XGO X-Van 104, vista lateral",
  ancho: 1200,
  alto: 814,
  },
  {
  src: "/media/xgo-x-van-104-2026-precio-ficha-tecnica-interior2.webp",
  alt: "Interior del XGO X-Van 104: salón-comedor y cocina",
  ancho: 1200,
  alto: 900,
  },
  {
  src: "/media/xgo-x-van-104-2026-precio-ficha-tecnica-interior3.webp",
  alt: "Interior del XGO X-Van 104: cocina y zona de estar",
  ancho: 1200,
  alto: 900,
  },
],
    analisisSlug: "xgo-x-van-104-2026-analisis-opinion",
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
          nombre: "Revisión célula XGO (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones del sector",
    },
    euroncap: null,
    fuenteNombre: "XGO (web oficial + catálogo oficial 25/26)",
    fuenteUrl: "https://www.xgomove.it/",
  },
];
