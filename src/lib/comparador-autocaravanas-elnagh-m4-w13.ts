// Autocaravanas Elnagh — lote Merlín 4 (19/10/2026).
// Fuentes: Marquis Leisure (gama Elnagh Baron 2026, importador oficial UK),
//   elnagh.com/en/gamma/baron-en/, camperis.com (ficha del Baron 573).
// Verificado el 19/10/2026.
// Notas honestas: precioDesde=null (Elnagh no publica tarifa oficial en España;
//   en Reino Unido Marquis anuncia el Baron 573 desde £69.995 OTR). cargaUtilKg=550
//   (carga máxima publicada por Marquis para el chasis de 3.500 kg con cambio manual;
//   700 kg con el chasis opcional de 3.650 kg). Consumo, autonomía y par: no publicados
//   por la marca → null.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_ELNAGH_M4: Autocaravana[] = [
  {
    id: "elnagh-baron-573-2026-precio-ficha-tecnica",
    marca: "Elnagh",
    modelo: "Baron 573",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // La marca no publica PVP en España; en UK: £69.995 OTR (Marquis)
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet 140 CV, cambio manual
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
    imagen: "/media/elnagh-baron-573-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/elnagh-baron-573-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/elnagh-baron-573-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7410, // Marquis Leisure, gama Baron 2026
    anchoMm: 2350, // Marquis Leisure, gama Baron 2026
    altoMm: 2950, // Marquis Leisure, gama Baron 2026
    pesoKg: null,
    mmaKg: 3500, // 3.500 kg de serie; 3.650 kg opcional
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: 550, // Publicada por Marquis: MAX USER PAYLOAD 550 kg (3.500 kg, manual)
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4, // 2 camas gemelas traseras + cama basculante doble sobre el salón
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: [],
    notas:
      "Dimensiones, MMA, plazas, motor y carga útil: Marquis Leisure, gama Elnagh Baron 2026 " +
      "(https://www.marquisleisure.co.uk/elnagh-baron-2026-motorhome-range). Distribución " +
      "(camas gemelas 2×800×2000 mm, cama basculante doble 1230×1030×1900 mm, WC y ducha en " +
      "locales independientes): elnagh.com/en/gamma/baron-en/ y camperis.com. Depósitos " +
      "(agua limpia 100 L, residuales 90 L) y boca de garaje 1150×950 mm: Marquis Leisure. " +
      "precioDesde=null: Elnagh no publica tarifa oficial en España; Marquis anuncia el " +
      "Baron 573 desde £69.995 OTR en Reino Unido. cargaUtilKg=550 corresponde al chasis " +
      "de 3.500 kg con cambio manual (700 kg con el chasis opcional de 3.650 kg). Consumo, " +
      "autonomía, par y peso en orden de marcha: no publicados por la marca → null.",
    curiosidades:
      "El Baron 573 combina camas gemelas traseras con un aseo articulado que separa el " +
      "WC y la ducha en dos locales independientes, una solución poco habitual en una " +
      "perfilada de 7,41 m. Fuente: CamperOnLine, «Anteprime 2020: Elnagh rinnova la " +
      "gamma Baron» (https://www.camperonline.it/magazine/2019/07/17/anteprime-2020-elnagh-rinnova-la-gamma-baron/print/).",
    descripcion: `El Elnagh Baron 573 es una perfilada italiana de 7,41 metros que condensa
      en un formato manejable la distribución más demandada del mercado europeo: camas
      gemelas traseras, salón delantero con cama basculante y un baño que separa el WC
      de la ducha en dos locales independientes. Pertenece a la gama Baron 2026 de Elnagh,
      la firma toscana del grupo SEA que lleva décadas construyendo autocaravanas con
      una filosofía muy mediterránea: muebles de madera cálida, tapicerías en tonos
      macaron y una atención al detalle que se nota al primer contacto. En el Reino
      Unido la distribuye Marquis Leisure, el mayor grupo de concesionarios británico,
      que la anuncia desde 69.995 libras OTR; en España la red de Elnagh la ofrece a
      través de su importador y de distribuidores multimarca, aunque sin tarifa pública
      oficial, de modo que el precio final hay que pedirlo por presupuesto.

      En medidas, el Baron 573 declara 7.410 mm de largo, 2.350 mm de ancho y 2.950 mm
      de alto, con una masa máxima autorizada de 3.500 kg de serie —conducible por tanto
      con el carnet B— y un chasis opcional de 3.650 kg para quien necesite más margen.
      La carga útil máxima publicada por Marquis es de 550 kg en la versión manual de
      3.500 kg, una cifra honesta que permite viajar a cuatro con equipaje, toldo y
      bicicletas sin ir al límite. El portador es el Fiat Ducato 2.2 Multijet de 140 CV
      con cambio manual de seis velocidades, una mecánica archiconocida, fiable y
      barata de mantener, con una red de servicio que cubre toda Europa. No hay datos
      oficiales de consumo, pero el conjunto de 140 CV moviendo 3,5 toneladas se mueve
      en la horquilla habitual de las perfiladas de este tamaño.

      La implantación es el gran argumento del 573. La zona de noche trasera ofrece dos
      camas gemelas de 800×2.000 mm que se unen en una cama doble mediante una
      extensión, con somieres elevables que dan acceso a los cofres inferiores. Delante
      de ellas, el aseo articulado merece mención propia: el WC y la ducha ocupan
      locales independientes a cada lado del pasillo, de modo que uno puede ducharse
      mientras otro usa el lavabo sin molestar a nadie, un lujo que normalmente exige
      saltar a integrales mucho más caras. El salón delantero combina una semidinette
      con banqueta enfrentada, mesa extensible y asientos de cabina giratorios; sobre
      él desciende la cama basculante doble de 1.230×1.030×1.900 mm, que se recoge en
      el techo durante el día sin robar espacio habitable. La cocina central en L
      equipa placa de dos fuegos, fregadero redondo de acero, frigorífico de 137
      litros y una práctica despensa extraíble entre el bloque de cocina y la columna
      del frigorífico, un detalle que los propietarios agradecen a diario.

      En equipamiento, la gama Baron 2026 incluye de serie el pack Adventure en las
      unidades británicas (radio Pioneer de 9 pulgadas con CarPlay y Android Auto,
      panel solar de 100 W, antena de TV y sensores de aparcamiento), calefacción
      Truma Combi con panel CP Plus, claraboyas con mosquitera, puerta de célula XL
      en dos hojas con ventana y cierre centralizado, y una carrocería integral de
      PRFV con techo anti-granizo. El garaje trasero, accesible por dos puertas
      laterales de 1.150×950 mm de boca, admite bicicletas y material voluminoso con
      una capacidad de carga de hasta 300 kg según la documentación de la gama. Los
      depósitos son de 100 litros de agua limpia y 90 de residuales, correctos para
      cuatro personas en ruta con paradas frecuentes.

      Cómo lo verificamos: las dimensiones, la MMA, las plazas, la motorización y la
      carga útil proceden de la página oficial de la gama Elnagh Baron 2026 de Marquis
      Leisure, importador exclusivo en el Reino Unido, consultada el 19/10/2026; la
      descripción de la distribución (camas gemelas, cama basculante, aseo con locales
      independientes, cocina en L) se contrastó con elnagh.com/en/gamma/baron-en/ y
      con la ficha del Baron 573 en camperis.com; la curiosidad sobre el aseo
      articulado procede del artículo de CamperOnLine «Anteprime 2020: Elnagh rinnova
      la gamma Baron» (2019). El precio queda en null porque Elnagh no publica tarifa
      oficial en España; la referencia de £69.995 OTR corresponde al mercado británico.

      Para quién es: el Baron 573 encaja con parejas que viajan con hijos o amigos y
      quieren dormir los cuatro en camas fijas sin montar nada cada noche, y con
      quienes valoran un baño de verdad separado en una perfilada de menos de 7,5
      metros. No es para quien busque una cama central fija (aquí las camas son
      gemelas), ni para quien necesite más de cuatro plazas homologadas, ni para
      conductores que quieran cambio automático, que en esta versión no se ofrece de
      serie en la documentación consultada.`,
    pros: [
      "Camas gemelas traseras de 2.000 mm que se convierten en cama doble, con somieres elevables y acceso a cofres",
      "Aseo con WC y ducha en locales independientes, insólito en una perfilada de 7,41 m",
      "Conducible con carnet B (3.500 kg) y carga útil publicada de 550 kg en la versión manual",
      "Cama basculante doble sobre el salón: cuatro plazas de noche sin montar la dinette",
      "Mecánica Fiat Ducato 140 CV probada, con red de servicio en toda Europa y mantenimiento asequible",
    ],
    contras: [
      "Precio sin publicar en España: hay que pedir presupuesto y comparar entre distribuidores",
      "Sin cama central fija: las gemelas no convencen a quien duerme abrazado sin la extensión puesta",
      "Cambio manual de serie; el automático no figura en la documentación consultada",
      "Depósitos de 100/90 litros justos para cuatro personas en autonomía prolongada",
      "Altura de 2,95 m: cuidado con parkings cubiertos y ramas bajas en áreas rurales",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/elnagh-baron-573-2026-precio-ficha-tecnica-oficial.webp", alt: "Elnagh Baron 573, vista exterior", ancho: 1200, alto: 800 },
      { src: "/media/elnagh-baron-573-2026-precio-ficha-tecnica-interior1.webp", alt: "Elnagh Baron 573, salón y cabina", ancho: 960, alto: 525 },
      { src: "/media/elnagh-baron-573-2026-precio-ficha-tecnica-interior2.webp", alt: "Elnagh Baron 573, camas gemelas", ancho: 1200, alto: 800 },
      { src: "/media/elnagh-baron-573-2026-precio-ficha-tecnica-detalle.webp", alt: "Elnagh Baron 573, detalle del salón", ancho: 960, alto: 525 },
    ],
    analisisSlug: "elnagh-baron-573-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato 2.2)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Elnagh (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
