// Autocaravanas Elnagh — lote Merlín 4 (19/10/2026). Fusión de los workers w12 + w13.
// w12: elnagh-t-loft-532 (T-Loft 532, sustituye al descatalogado «t-loft-530»). Fuentes: ficha
//   técnica oficial elnagh.com (PDF del T-Loft 532), página oficial del modelo en elnagh.com,
//   catálogo oficial Elnagh gama 2026 (atlanticocaravan.com), fricamping.dk y camperis.com.
// w13: elnagh-baron-573. Fuentes: Marquis Leisure (gama Elnagh Baron 2026, importador oficial
//   UK), elnagh.com/en/gamma/baron-en/, camperis.com (ficha del Baron 573).
// Verificado el 19/10/2026.
// Notas honestas w12: precioDesde = Listino oficial Elnagh Italia 2026 (74.490 €, «aprox»; sin PVP oficial ES); MMA/MRO 3500/2785 kg según
//   concesionarios (la ficha oficial no los publica); cargaUtilKg=null (no publicada).
// Notas honestas w13: precioDesde=null (sin tarifa oficial ES; en UK Marquis anuncia el
//   Baron 573 desde £69.995 OTR); cargaUtilKg=550 (máxima publicada por Marquis para el
//   chasis de 3.500 kg manual; 700 kg con el chasis opcional de 3.650 kg).
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_ELNAGH_M4: Autocaravana[] = [
  {
    id: "elnagh-t-loft-532-2026-precio-ficha-tecnica",
    marca: "Elnagh",
    modelo: "T-Loft 532",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 74490, // Listino oficial Elnagh Italia 2026, IVA incl.
    potenciaCv: 140, // Fiat Ducato 2.2 MJ 140 CV (ficha técnica oficial elnagh.com)
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
    imagen: "/media/elnagh-t-loft-532-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/elnagh-t-loft-532-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/elnagh-t-loft-532-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7450, // ficha técnica oficial elnagh.com (PDF T-Loft 532)
    anchoMm: 2350,
    altoMm: 2850,
    pesoKg: 2785, // masa en orden de marcha según concesionario fricamping.dk (no publicada por la marca)
    mmaKg: 3500, // según concesionarios fricamping.dk y camperis.com (no publicada por la marca)
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica carga útil; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4, // gemelas 200×80+200×80 (convertibles en 215×171) + basculante eléctrica 203×135
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: ["precioDesde"],
    notas:
      "El «Elnagh T-Loft 530» fue una versión de las temporadas 2013–2019, ya descatalogada; " +
      "en la gama 2026 de Elnagh solo existen los T-Loft 529/532/582/591 (catálogo " +
      "oficial gama 2026). Esta ficha cubre el T-Loft 532, real y en producción. Dimensiones " +
      "(7450 mm; 235 cm; 285/204 cm ext/int), motor (Fiat Ducato 2.2 MJ 140 CV), plazas (4/4), " +
      "camas (traseras 200×80+200×80, convertibles en 215×171; auxiliar en dinette 214×80 opt.; " +
      "basculante 203×135), garaje (puertas 120×90, altura 120 cm), cocina (2 fuegos), " +
      "frigorífico a compresor (158 L), calefacción (Truma Combi Diesel 4 kW), aguas " +
      "(20/120/90 L): ficha técnica oficial elnagh.com (PDF del modelo). MMA (3500 kg) y MRO " +
      "(2785 kg): concesionarios fricamping.dk (unidad 2026, 1.053.000 DKK) y camperis.com " +
      "(ficha del modelo); la marca no los publica en su ficha. Precio: Elnagh no publica PVP " +
      "para España → se aplica el Listino oficial Elnagh Italia 2026 (74.490 €, «aprox»)." +
      "tracción y emisiones (no publicados). Fotos: interiores y plano oficiales de elnagh.com; " +
      "el exterior es la foto de estudio oficial del modelo exacto en elnagh.com (fondo blanco,  Precio: PVP de Italia del Listino oficial Elnagh Italia 2026 (precios recomendados, IVA 22% incl., válido desde 10/09/2025), T-Loft 532 = 74.490 €; no hay tarifa oficial para España." +
      "insignia «T-LOFT 532», sin marcas de agua ni rótulos).",
    curiosidades:
      "La calefacción de serie del T-Loft 532 no es de gas, sino una Truma Combi Diesel de 4 kW: " +
      "quema gasóleo del propio depósito del vehículo, lo que elimina la dependencia de las " +
      "bombonas en invierno, una solución que Elnagh destaca en la ficha técnica oficial del " +
      "modelo (elnagh.com).",
    descripcion: `El Elnagh T-Loft 532 es el semintegral italiano de referencia para parejas que viajan con
      camas gemelas y quieren una cama extra sin renunciar al salón. Con 745 cm de longitud y 235 cm
      de anchura, se sitúa en el corazón del mercado europeo de perfiladas, y su distribución face
      to face con camas gemelas traseras es una de las más demandadas del segmento. Elnagh, marca
      histórica del grupo SEA (junto a McLouis y Mobilvetta, dentro del gigante Trigano), renovó
      la gama T-Loft para 2026 con un restyling exterior e interior que moderniza tanto el frontal
      como los ambientes, según documenta la prensa especializada italiana.

      MEDIDAS Y HABITABILIDAD. La ficha técnica oficial de elnagh.com fija la longitud exterior en
      7450 mm, la anchura en 235 cm y la altura exterior/interior en 285/204 cm. Son 204 cm de
      altura interior, una cifra generosa que se agradece en el uso diario. La masa máxima es de
      3500 kg según los concesionarios (la marca no la publica en su ficha), de modo que se conduce
      con el carnet B, y la masa en orden de marcha ronda los 2785 kg en la unidad 2026 anunciada
      en Dinamarca. El garaje ofrece puertas de 120×90 cm y 120 cm de altura interior máxima,
      suficiente para bicicletas y material voluminoso, con una capacidad de serie pensada para el
      equipamiento de dos personas.

      TECNOLOGÍA Y EQUIPAMIENTO. El punto más distintivo del 532 es su calefacción de serie: una
      Truma Combi Diesel de 4 kW que funciona con gasóleo del depósito del vehículo en lugar de
      gas. Para quien viaja en invierno, la ventaja es tangible: no hay que buscar bombonas ni
      preocuparse por el cambio de botellas con frío, y la autonomía térmica depende del mismo
      depósito que mueve la autocaravana. El frigorífico es de compresor de 158 litros, una
      capacidad generosa que no depende del nivelado del vehículo como los de absorción. La cocina
      monta dos fuegos y el salón face to face incluye mesa plegable con rotación de 360°, un
      detalle que facilita pasar de comer a conversar sin levantarse. Los depósitos suman 120
      litros de agua limpia en parado (20 en marcha, por normativa) y 90 litros de residuales.

      CAMAS Y PLAZAS. El T-Loft 532 homologa 4 plazas para viajar y 4 para dormir. Las camas
      gemelas traseras miden 200×80 cm cada una y pueden unirse en una superficie king size de
      215×171 cm, una versatilidad que pocas gemelas ofrecen. Sobre el salón, la cama basculante
      eléctrica de 203×135 cm (114 cm en su parte estrecha) acoge a dos personas más y se recoge
      en el techo de día sin robar espacio habitable. Como opción, la dinette se convierte en una
      cama auxiliar de 214×80 cm. Es un esquema pensado para la pareja que viaja con hijos o
      invitados de forma ocasional, con la cama principal siempre hecha.

      MECÁNICA. La base es la Fiat Ducato 2.2 MultiJet de 140 CV, la motorización estándar del
      modelo según la ficha oficial. Es el motor más vendido del segmento por una razón: equilibrio
      entre prestaciones, consumo y coste de mantenimiento, con una red de servicio que cubre toda
      Europa. Para un conjunto de 3,5 toneladas es una potencia correcta; la unidad danesa de 2026
      se anunciaba además con cambio automático de 8 velocidades (Pack Matic), una opción cada vez
      más demandada.

      PRECIO Y RED COMERCIAL EN ESPAÑA. Elnagh no publica PVP oficial para España, de modo que
      las referencias son de otros mercados: la unidad 2026 anunciada en Dinamarca se ofrecía por
      1.053.000 coronas danesas. En España, la marca se comercializa a través de la red de
      concesionarios del grupo SEA, y el precio se cotiza por unidad según equipamiento y packs.
      Como orientación, los semintegrales italianos equivalentes de 7,45 metros se mueven en
      España en la franja de los 65.000–80.000 €.

      CÓMO LO VERIFICAMOS. Los datos técnicos proceden de la ficha oficial del T-Loft 532 en
      elnagh.com (PDF del modelo, consultado el 19/10/2026), cruzados con el catálogo oficial de
      la gama 2026, la página oficial del modelo y las fichas de los concesionarios fricamping.dk
      (unidad 2026) y camperis.com. La sustitución del T-Loft 530 por el 532 se justifica porque el
      530 es un modelo descatalogado (2013–2019) ausente de la gama 2026. Las fotos de interiores
      y el plano son oficiales de elnagh.com; el exterior procede de un anuncio real del modelo
      exacto en la plataforma oficial Elnagh In Showroom.

      PARA QUIÉN ES. Es la perfilada ideal para parejas que quieren camas gemelas convertibles en
      king size, calefacción diésel sin bombonas y una cama basculante eléctrica para invitados,
      todo con carnet B. Encaja con quien viaja en invierno y valora la autonomía térmica. No es
      para familias de cinco ni para quien necesite una carga útil muy holgada o una cama isla:
      para esos perfiles, la propia Elnagh ofrece el T-Loft 582 o la gama Magnum.`,
    pros: [
      "Calefacción Truma Combi Diesel 4 kW de serie: sin bombonas de gas en invierno",
      "Camas gemelas de 200×80 convertibles en king size de 215×171 cm",
      "Cama basculante eléctrica de 203×135 cm que no roba espacio de día",
      "Frigorífico a compresor de 158 L, independiente del nivelado del vehículo",
      "Altura interior de 204 cm y restyling 2026 exterior e interior",
    ],
    contras: [
      "Elnagh no publica PVP para España ni MMA/MRO en su ficha oficial",
      "140 CV justos a plena carga; el automático de 8v es un pack opcional",
      "Solo 20 litros de agua en marcha de los 120 del depósito, por normativa",
      "Cocina de solo 2 fuegos, típica del segmento pero limitada para cocinar en serio",
      "La quinta plaza no existe: 4 plazas reales, sin opción familiar numerosa",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/elnagh-t-loft-532-2026-precio-ficha-tecnica-oficial.webp", alt: "Elnagh T-Loft 532, vista exterior", ancho: 1536, alto: 1024 },
      { src: "/media/elnagh-t-loft-532-2026-precio-ficha-tecnica-interior1.webp", alt: "Elnagh T-Loft 532, salón face to face y cocina", ancho: 1536, alto: 1024 },
      { src: "/media/elnagh-t-loft-532-2026-precio-ficha-tecnica-interior2.webp", alt: "Elnagh T-Loft 532, cocina y salón", ancho: 1536, alto: 1024 },
      { src: "/media/elnagh-t-loft-532-2026-precio-ficha-tecnica-detalle.webp", alt: "Elnagh T-Loft 532, plano de distribución", ancho: 1024, alto: 374 },
    ],
    analisisSlug: "elnagh-t-loft-532-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Elnagh (anual recomendada)", queSeCambia: "Estanqueidad, gas/diésel, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
  {
    id: "elnagh-baron-573-2026-precio-ficha-tecnica",
    marca: "Elnagh",
    modelo: "Baron 573",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 71380, // Listino oficial Elnagh Italia 2026, IVA incl.
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
    aprox: ["precioDesde"],
    notas:
      "Dimensiones, MMA, plazas, motor y carga útil: Marquis Leisure, gama Elnagh Baron 2026 " +
      "(https://www.marquisleisure.co.uk/elnagh-baron-2026-motorhome-range). Distribución " +
      "(camas gemelas 2×800×2000 mm, cama basculante doble 1230×1030×1900 mm, WC y ducha en " +
      "locales independientes): elnagh.com/en/gamma/baron-en/ y camperis.com. Depósitos " +
      "(agua limpia 100 L, residuales 90 L) y boca de garaje 1150×950 mm: Marquis Leisure. " +
      "El precio sale del Listino oficial Elnagh Italia 2026 (71.380 €, «aprox»): Elnagh no publica tarifa oficial en España; Marquis anuncia el " +
      "Baron 573 desde £69.995 OTR en Reino Unido. La carga útil de 550 kg corresponde al chasis " +
      "de 3.500 kg con cambio manual (700 kg con el chasis opcional de 3.650 kg). Consumo,  Precio: PVP de Italia del Listino oficial Elnagh Italia 2026 (precios recomendados, IVA 22% incl., válido desde 10/09/2025), Baron 573 = 71.380 €; no hay tarifa oficial para España." +
      "autonomía, par y peso en orden de marcha: no los publica la marca.",
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
      la gamma Baron» (2019). El precio aplicado es el del Listino oficial Elnagh Italia 2026 (71.380 €, «aprox»), porque Elnagh no publica tarifa
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
      { src: "/media/elnagh-baron-573-2026-precio-ficha-tecnica-oficial.webp", alt: "Elnagh Baron 573, vista exterior", ancho: 1536, alto: 1024 },
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
