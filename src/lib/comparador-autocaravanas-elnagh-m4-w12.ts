// Autocaravanas Elnagh — lote Merlín 4 (19/10/2026).
// SUSTITUCIÓN: el modelo asignado «elnagh-t-loft-530» corresponde a una versión descatalogada
// (gama 2013–2019); en la gama 2026 solo existen los T-Loft 529/532/582/591. Se sustituye por el
// Elnagh T-Loft 532, modelo real y en producción en 2026.
// Fuentes: ficha técnica oficial elnagh.com (PDF del modelo T-Loft 532), página oficial del
// modelo en elnagh.com, catálogo oficial Elnagh gama 2026 (atlanticocaravan.com), anuncios de
// fricamping.dk (unidad 2026) y camperis.com (ficha del modelo). Verificado el 19/10/2026.
// Notas honestas: Elnagh no publica PVP oficial para España → precioDesde=null. La ficha oficial
// no publica MMA/MRO (3500/2785 kg según concesionarios, anotado como tal). La marca no publica
// carga útil → cargaUtilKg=null. Fotos: 3 oficiales de la marca (interiores y plano) + 1 exterior
// de un anuncio real del modelo exacto (plataforma oficial Elnagh In Showroom), sin marcas de agua.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_ELNAGH_M4: Autocaravana[] = [
  {
    id: "elnagh-t-loft-532-2026-precio-ficha-tecnica",
    marca: "Elnagh",
    modelo: "T-Loft 532",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Elnagh no publica PVP oficial para España
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
    aprox: [],
    notas:
      "Modelo SUSTITUIDO: el asignado «elnagh-t-loft-530» es una versión descatalogada (gama " +
      "2013–2019); en la gama 2026 de Elnagh solo existen los T-Loft 529/532/582/591 (catálogo " +
      "oficial gama 2026). Se sustituye por el T-Loft 532, real y en producción. Dimensiones " +
      "(7450 mm; 235 cm; 285/204 cm ext/int), motor (Fiat Ducato 2.2 MJ 140 CV), plazas (4/4), " +
      "camas (traseras 200×80+200×80, convertibles en 215×171; auxiliar en dinette 214×80 opt.; " +
      "basculante 203×135), garaje (puertas 120×90, altura 120 cm), cocina (2 fuegos), " +
      "frigorífico a compresor (158 L), calefacción (Truma Combi Diesel 4 kW), aguas " +
      "(20/120/90 L): ficha técnica oficial elnagh.com (PDF del modelo). MMA (3500 kg) y MRO " +
      "(2785 kg): concesionarios fricamping.dk (unidad 2026, 1.053.000 DKK) y camperis.com " +
      "(ficha del modelo); la marca no los publica en su ficha. Precio: Elnagh no publica PVP " +
      "para España → precioDesde=null. En null: carga útil (no publicada), consumo, par, " +
      "tracción y emisiones (no publicados). Fotos: interiores y plano oficiales de elnagh.com; " +
      "el exterior es de un anuncio real del modelo exacto en la plataforma oficial Elnagh In " +
      "Showroom (foto en showroom de concesionario, sin marcas de agua ni rótulos).",
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
      { src: "/media/elnagh-t-loft-532-2026-precio-ficha-tecnica-oficial.webp", alt: "Elnagh T-Loft 532, vista exterior", ancho: 1400, alto: 1050 },
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
];
