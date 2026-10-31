// Autocaravanas Etrusco — lote Merlín 2 (19/10/2026).
// Datos de la ficha oficial de la serie T-Model Fiat y del comunicado oficial
// del CV 600 SB (etrusco.com, versiones DE/GB/IT): fuenteNombre/fuenteUrl con
// las URLs exactas. Precios: tarifa oficial en Alemania (UVP) para los T y
// tarifa oficial europea del comunicado para el CV 600 SB; Etrusco España no
// publica PVP. SUSTITUCIÓN: el "T 6900 DB" asignado no existe en el catálogo
// 2025/2026 (la serie T-Model Fiat actual solo ofrece SB/SBC/QBC); se sustituye
// por el T 6900 SB, misma serie y misma plataforma. 4 fotos webp por ficha
// inspeccionadas visualmente (sin marcas de agua); la trasera del T 6900 SB
// muestra la insignia del modelo. Curiosidades con fuente en `curiosidades`.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_ETRUSCO_M2: Autocaravana[] = [
  {
    id: "etrusco-t-6900-sb-2026-precio-ficha-tecnica",
    marca: "Etrusco",
    modelo: "T 6900 SB",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 68999, // tarifa oficial en Alemania (UVP); promo otoño 66.499 € hasta 31.10.2026; Etrusco España no publica PVP
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet de 140 CV (103 kW), de serie
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
    imagen: "/media/etrusco-t-6900-sb-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/etrusco-t-6900-sb-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/etrusco-t-6900-sb-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6950, // ficha oficial serie T-Model Fiat (6,95 m)
    anchoMm: 2320, // ficha oficial serie T-Model Fiat (2,32 m)
    altoMm: 2950, // ficha oficial serie T-Model Fiat (2,95 m)
    pesoKg: 2890, // masa en orden de marcha, ficha oficial DE (tolerancia ±5 %)
    mmaKg: 3500, // ficha oficial
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil de esta distribución
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // ficha oficial: 4 plazas de viaje
    plazasDormir: 5, // ficha oficial: de 2 a 5 plazas para dormir (camas gemelas + basculante y salón opcionales)
    parNm: 350, // Fiat Ducato 2.2 Multijet 140: 350 Nm (dato oficial Fiat)
    traccion: "Delantera", // Fiat Ducato, tracción delantera
    emisionesCo2: null,
    aprox: ["Precio de tarifa en Alemania: desde 68.999 € (UVP)"],
    notas:
      "El precio (68.999 €) es la tarifa oficial «desde» (UVP, precio recomendado no vinculante) en Alemania que publica Etrusco para la serie T-Model Fiat; Etrusco España no publica PVP y el precio final lo fija cada concesionario. Hasta el 31.10.2026 está vigente una promoción de otoño que deja la T 6900 SB en 66.499 € (contratos firmados entre el 14.09.2026 y el 31.10.2026). Medidas, plazas, MMA, masa en orden de marcha y equipamiento proceden de la ficha oficial de la serie.",
    descripcion: `Menos de siete metros: esa es la medida que lo explica todo en la Etrusco T 6900 SB. Dentro de la serie T-Model Fiat para 2026 —cuatro distribuciones sobre el Fiat Ducato—, esta es la única que se queda en 6,95 metros, y Etrusco la coloca además como la puerta de entrada a la gama, con una tarifa oficial en Alemania desde 68.999 euros. Su público está claro: parejas que duermen en camas separadas y no quieren arrastrar metros de más por pueblos, áreas y parkings.

Empecemos por lo que se ve al abrir la puerta trasera: dos lechos individuales de 200 x 80 y 195 x 80 centímetros, elevados sobre una bodega pasante con acceso por los dos laterales. Es la distribución SB —Single Beds— en estado puro, y admite la unión de ambos lechos en una gran superficie de 210 centímetros de ancho para quien prefiera dormir en compañía. La bodega, con portezuelas de 95 x 110 cm a la derecha y 75 x 80 cm a la izquierda, se traga dos bicicletas, las sillas plegables y la mesa sin discusiones. Hacia adelante, el salón reúne los asientos de cabina —giratorios— alrededor de la mesa; ese conjunto se convierte en una cama individual de 200 x 60, y si se pide la cama abatible sobre el salón (200 x 140-123 cm), la T 6900 SB acoge hasta cinco personas para pasar la noche. La cocina lateral equipa pila, fuegos y un frigorífico de 137 litros más 15 de congelador; el servicio, compacto, reúne ducha, inodoro con cassette y lavabo.

El habitáculo ofrece 2,10 metros de altura libre, luz ambiental LED, armarios y cajones con freno amortiguado, varias tomas USB y la puerta de acceso ancha con el escalón rebajado típico de la marca, que se agradece al entrar y salir a diario. En autonomía, el depósito de limpias cubica 110 litros (20 en orden de marcha, como exige la norma) y el de grises 90; el gas se resuelve con dos botellas de 11 kilos. La instalación eléctrica reparte cuatro bases de 230 V, una de 12 V y cuatro USB por todo el interior.

El ambiente interior sigue el lenguaje actual de Etrusco, con el mundo Sicilia de tonos grises como propuesta de serie y otras tapicerías en opción: muebles altos en blanco brillo, encimera de cocina de fácil limpieza y un suelo de aspecto madera que aguanta bien el trote diario.

Por fuera, la T 6900 SB luce el lenguaje Type X de la marca: frontal del Ducato con paragolpes pintado en opción, adhesivos laterales en antracita y el característico canguro de Etrusco en el portón trasero. Los faros con luz diurna LED y las llantas de aleación de 16 pulgadas en negro —opcionales— le dan un aire más moderno que el de las perfiladas de hace cinco años, sin perder la discreción que buscan muchos compradores.

Bajo el habitáculo late el Fiat Ducato 2.2 Multijet de 140 CV (103 kW) y 350 Nm de par, con caja manual de seis relaciones y ruedas delanteras motrices, en norma Euro 6e. Es el motor de serie de toda la familia T-Model Fiat: un diésel veterano en el caravaning europeo, de mantenimiento sencillo y recambios hasta en el último rincón. En opción figuran la caja automática de nueve velocidades y el mismo 2.2 con 180 CV. El capítulo de seguridad de serie cubre ABS con reparto electrónico, control de estabilidad con ayuda en pendiente, antipatinaje, regulador de velocidad, climatizador en cabina y los asientos de cabina regulables en altura.

De medidas, la T 6900 SB declara 6,95 m de eslora, 2,32 m de manga y 2,95 m de puntal, con 2.890 kg en orden de marcha (tolerancia de producción de ±5 %) y 3.500 kg de MMA: carnet B y un margen de carga razonable para dos personas con equipaje completo, toldo y bici. Quedarse por debajo de los siete metros se nota en peajes, ferris y maniobras, donde cada palmo cuenta.

En cuanto al precio, en España no hay tarifa publicada —Etrusco deja el PVP en manos de cada concesionario—, así que la referencia es la UVP alemana: 68.999 euros, con una acción de otoño que la rebaja a 66.499 € para contratos firmados entre el 14 de septiembre y el 31 de octubre de 2026. Es la T-Model Fiat más económica; las tres de 7,40 m arrancan en 69.999 €.

Verificación de fuentes: eslora, manga y puntal (6,95 x 2,32 x 2,95 m), altura libre (2,10 m), motor (2.2 Multijet 140 CV), peso en orden de marcha (2.890 kg), MMA (3.500 kg), plazas (4 en ruta, 2-5 en noche), medidas de lechos, frigorífico (137+15 l), aguas (110/90 l) y tarifas proceden de la ficha oficial de la serie T-Model Fiat en etrusco.com (edición alemana). Los 350 Nm son el dato oficial de Fiat para el Ducato 2.2 de 140 CV. La carga útil no figura publicada para esta distribución: queda sin dato, sin estimaciones. Las imágenes muestran una Etrusco T 6900 SB auténtica; la trasera deja ver la insignia del modelo.

Perfil de comprador: viajeros en pareja que pernoctan en lechos separados, ruedan mucho y prefieren no superar los siete metros, y que valoran entrar en la serie T-Model Fiat por su precio más bajo con el respaldo del grupo Erwin Hymer. No es para quien necesite cinco plazas en ruta —solo hay cuatro— ni para amantes del lecho doble fijo trasero. Balance: la perfilada comedida y bien resuelta de Etrusco, con la baza de ser la única sub-7 m de la serie, penalizada por la ausencia de PVP oficial en España.`,
    pros: [
      "La única T-Model Fiat por debajo de 7 m (6,95 m): más manejable en pueblos, peajes y áreas",
      "Camas gemelas traseras de 200 x 80 / 195 x 80 cm sobre gran garaje con doble acceso",
      "Hasta 5 plazas para dormir con la cama basculante opcional (200 x 140-123 cm)",
      "Fiat Ducato 2.2 de 140 CV con 350 Nm: mecánica probada y red de servicio en toda Europa",
      "3.500 kg de MMA: se conduce con el carnet B",
    ],
    contras: [
      "Sin PVP oficial en España: cada concesionario fija su precio y comparar cuesta",
      "Solo 4 plazas de viaje: no sirve para familias de 5",
      "La marca no publica la carga útil de esta distribución",
      "El cambio automático y el motor de 180 CV son opcionales con sobreprecio",
      "El baño es compacto: ducha y WC en poco espacio",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/etrusco-t-6900-sb-2026-precio-ficha-tecnica-ext.webp",
        alt: "Etrusco T 6900 SB, perfil lateral",
        ancho: 1024,
        alto: 768,
      },
      {
        src: "/media/etrusco-t-6900-sb-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Etrusco T 6900 SB, vista trasera tres cuartos con la insignia del modelo",
        ancho: 1400,
        alto: 1050,
      },
      {
        src: "/media/etrusco-t-6900-sb-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Etrusco T 6900 SB, salón con ventana panorámica sobre la cabina",
        ancho: 1600,
        alto: 1067,
      },
      {
        src: "/media/etrusco-t-6900-sb-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Dormitorio de la Etrusco T 6900 SB con las dos camas individuales",
        ancho: 1024,
        alto: 683,
      },
    ],
    analisisSlug: "etrusco-t-6900-sb-2026-precio-ficha-tecnica-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 48.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 48.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Etrusco (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Etrusco",
    },
    euroncap: null,
    curiosidades:
      "La T 6900 SB es la única distribución de la serie T-Model Fiat 2026 que baja de los 7 metros (6,95 m) y, a la vez, la más económica de la serie: parte de 68.999 € en Alemania, 1.000 € menos que las versiones de 7,40 m. Fuente: ficha oficial de la serie T-Model Fiat (https://www.etrusco.com/de/de/modelle/teilintegriert-fiat).",
    fuenteNombre: "Etrusco — ficha oficial de la serie T-Model Fiat (DE)",
    fuenteUrl: "https://www.etrusco.com/de/de/modelle/teilintegriert-fiat",
  },
  {
    id: "etrusco-t-7400-sbc-2026-precio-ficha-tecnica",
    marca: "Etrusco",
    modelo: "T 7400 SBC",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 69999, // tarifa oficial en Alemania (UVP); promo otoño 67.499 € hasta 31.10.2026; Etrusco España no publica PVP
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet de 140 CV (103 kW), de serie
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
    imagen: "/media/etrusco-t-7400-sbc-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/etrusco-t-7400-sbc-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/etrusco-t-7400-sbc-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7400, // ficha oficial serie T-Model Fiat (7,40 m)
    anchoMm: 2320, // ficha oficial serie T-Model Fiat (2,32 m)
    altoMm: 2950, // ficha oficial serie T-Model Fiat (2,95 m)
    pesoKg: 2972, // masa en orden de marcha, ficha oficial DE (tolerancia ±5 %)
    mmaKg: 3500, // ficha oficial
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil de esta distribución
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // ficha oficial: 4 plazas de viaje
    plazasDormir: 5, // ficha oficial: de 2 a 5 plazas para dormir
    parNm: 350, // Fiat Ducato 2.2 Multijet 140: 350 Nm (dato oficial Fiat)
    traccion: "Delantera", // Fiat Ducato, tracción delantera
    emisionesCo2: null,
    aprox: ["Precio de tarifa en Alemania: desde 69.999 € (UVP)"],
    notas:
      "El precio (69.999 €) es la tarifa oficial «desde» (UVP) en Alemania para la serie T-Model Fiat; Etrusco España no publica PVP. Hasta el 31.10.2026 hay una promoción de otoño que la deja en 67.499 €. En la tarifa británica es la distribución de 7,40 m más económica de la serie (desde £68.399).",
    descripcion: `La denominación T 7400 SBC esconde una pista: la C de central. Entre las 4 variantes de la serie T-Model Fiat 2026, esta es la que sitúa el cuarto de baño en el centro del vehículo, entre el dormitorio posterior y el living delantero. El resultado es una semiintegrada de 7,40 metros con la zona de pernocta separada de la zona de día: quien se levanta al baño durante la pernocta no despierta a nadie, y por la mañana pueden asearse y desayunar por turnos sin estorbarse. Para una familia de 4, esa independencia vale más que cualquier extra del catálogo.

El importe acompaña a la idea: en Alemania arranca en 69.999 € —la misma cifra que sus hermanas SB y QBC de 7,40 m—, con una acción otoñal que la sitúa en 67.499 € para contratos firmados entre el 14 de septiembre y el 31 de octubre de 2026. Y en el Reino Unido la SBC presume de ser la 7,40 m más económica de la serie: desde 68.399 libras frente a las 72.799 de las otras 2. En España, como de costumbre en Etrusco, no existe PVP publicado y cada distribuidor fija el importe final.

Para dormir, la SBC despliega en la parte posterior dos somieres individuales de 204 x 80 y 208 x 80 centímetros —unos centímetros más generosos que los de la versión corta—, convertibles en una gran superficie para dos de 204-208 x 210. Bajo ellas, el garaje posterior con portón de dos hojas (95 x 110 cm a la derecha, 75 x 80 cm a la izquierda) admite bicicletas, sillas y mesa de camping. El living delantero, con las butacas delanteras giradas, se transforma en un diván de 195 x 90, y la litera elevable opcional sobre el living (200 x 140-123 cm) permite pernoctar a 5 ocupantes. La cocina, dispuesta en el lateral, combina pila, quemadores de gas y un refrigerador de 137 litros con compartimento de congelación de 15; el baño central distribuye ducha, lavabo y WC de cassette con una lógica muy conseguida.

La vida a bordo se desarrolla con un techo a 2,10 metros, con alumbrado LED, armarios elevados y gavetas de cierre suave, conectores USB en varios puntos y la amplia puerta de entrada con el peldaño rebajado característico de la marca. La autonomía la firman un tanque de agua dulce de 110 litros (20 en circulación por homologación) , 90 de residuales y alojamiento para 2 bombonas de 11 kg. La red eléctrica ofrece 4 tomas de 230 V, una de 12 V y 3 USB.

El baño central merece capítulo propio: al situarse en el eje del vehículo, reparte el peso de forma equilibrada y mantiene despejado el pasillo hacia el dormitorio incluso con el baño abierto. El plato de ducha con dos desagües, el armario con espejo y el WC giratorio de cassette conforman un conjunto que en otras marcas solo se ve en gamas superiores. Es, en el fondo, la traducción a semiintegrada de una idea propia de las integrales.

El bastidor es el Fiat Ducato con el 2.2 Multijet de 140 CV (103 kW) y 350 Nm, caja manual de seis velocidades, tracción al tren delantero y homologación Euro 6e: la mecánica de serie de toda la línea, probada durante años en furgones y autocaravanas por media Europa. En el configurador esperan la automática de nueve relaciones y la variante de 180 CV. La dotación de seguridad de serie abarca ABS con EBD, ESP con asistente en pendiente, control de tracción, programador de velocidad, climatización delantera y butacas giratorias multirregulables para conductor y acompañante.

En báscula, la SBC anuncia 2.972 kg en orden de marcha (con un ±5 % de tolerancia industrial) para una MMA de 3.500 kg: el permiso B basta, aunque con 4 adultos a bordo conviene distribuir el equipaje con criterio y no llenar el tanque de agua dulce hasta la bandera si se viaja con toldo y portabicis. Los 7,40 metros de longitud piden respeto en giros cerrados y travesías, peaje aparte: es el coste de llevar una casa de 2,32 x 2,95 metros a cuestas.

Verificación de fuentes: longitud, anchura y cota vertical (7,40 x 2,32 x 2,95 m), despeje interior (2,10 m), propulsor (2.2 Multijet 140 CV), peso en orden de marcha (2.972 kg), MMA (3.500 kg), homologación (4 en viaje, 2-5 en pernocta), cotas de los somieres, refrigerador (137+15 l), aguas (110/90 l) y los precios de Alemania y Reino Unido figuran en la ficha de la línea T-Model Fiat en etrusco.com (ediciones alemana y británica). Los 350 Nm corresponden al dato facilitado por Fiat para el Ducato 2.2 de 140 CV. El fabricante no difunde la carga disponible de dicha variante: el campo permanece sin dato, sin estimaciones. Las fotografías pertenecen a una Etrusco T 7400 SBC auténtica difundida por distribuidores europeos.

Perfil de comprador: familias de 4 que priorizan el espacio interior sin dar el salto a una integral, valoran un baño central que independiza el dormitorio y buscan la 7,40 m mejor tarificada de la línea. No es su vehículo si el uso cotidiano incluye callejear por centros históricos —ahí manda la T 6900 SB— ni si se viaja con 5 a bordo. Balance: la semiintegrada familiar más desahogada y equilibrada de la línea T-Model Fiat, con el baño central como baza y la falta de PVP en España como único punto débil.`,
    pros: [
      "7,40 m con baño en posición central: la zona de noche queda independizada del salón",
      "Camas individuales traseras de 204 x 80 / 208 x 80 cm, unibles en doble de hasta 210 cm de ancho",
      "Hasta 5 plazas para dormir con la cama basculante opcional sobre el salón",
      "En Reino Unido es la 7,40 m más económica de la serie (desde £68.399)",
      "3.500 kg de MMA: carnet B suficiente",
    ],
    contras: [
      "7,40 m de largo: menos ágil que la T 6900 SB en pueblos y áreas pequeñas",
      "Sin PVP oficial en España: el precio final lo fija cada concesionario",
      "La marca no publica la carga útil de esta distribución",
      "Automático y motor de 180 CV, solo como opción con sobreprecio",
      "Con cuatro ocupantes y equipaje, el margen de carga hay que vigilarlo",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/etrusco-t-7400-sbc-2026-precio-ficha-tecnica-ext.webp",
        alt: "Etrusco T 7400 SBC, vista trasera tres cuartos",
        ancho: 1600,
        alto: 1200,
      },
      {
        src: "/media/etrusco-t-7400-sbc-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Etrusco T 7400 SBC, vista delantera tres cuartos",
        ancho: 1600,
        alto: 1120,
      },
      {
        src: "/media/etrusco-t-7400-sbc-2026-precio-ficha-tecnica-interior.webp",
        alt: "Salón de la Etrusco T 7400 SBC con asientos de cabina giratorios",
        ancho: 1400,
        alto: 933,
      },
      {
        src: "/media/etrusco-t-7400-sbc-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Cama basculante de la Etrusco T 7400 SBC sobre el salón",
        ancho: 1400,
        alto: 933,
      },
    ],
    analisisSlug: "etrusco-t-7400-sbc-2026-precio-ficha-tecnica-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 48.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 48.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Etrusco (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Etrusco",
    },
    euroncap: null,
    curiosidades:
      "En la tarifa británica, la T 7400 SBC es la distribución de 7,40 m más económica de la serie T-Model Fiat: parte de £68.399 frente a las £72.799 de las T 7400 SB y T 7400 QBC. Fuente: ficha oficial de la serie T-Model Fiat (https://www.etrusco.com/gb/en/models/semi-integrated-fiat).",
    fuenteNombre: "Etrusco — ficha oficial de la serie T-Model Fiat (GB)",
    fuenteUrl: "https://www.etrusco.com/gb/en/models/semi-integrated-fiat",
  },
  {
    id: "etrusco-cv-600-sb-2026-precio-ficha-tecnica",
    marca: "Etrusco",
    modelo: "CV 600 SB",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: 57990, // tarifa oficial europea del comunicado Etrusco (desde 57.990 €); UK desde £59.290; Etrusco España no publica PVP
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet de 140 CV (103 kW), de serie
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
    imagen: "/media/etrusco-cv-600-sb-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/etrusco-cv-600-sb-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/etrusco-cv-600-sb-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990, // exposé de concesionario según ficha del fabricante (5,99 m)
    anchoMm: 2050, // exposé de concesionario según ficha del fabricante (2,05 m)
    altoMm: 2700, // exposé de concesionario según ficha del fabricante (2,70 m)
    pesoKg: 2817, // masa en orden de marcha, exposé de concesionario (unidad 2026)
    mmaKg: 3500, // ficha del fabricante
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil de esta distribución
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas de viaje
    plazasDormir: 2, // dos camas individuales traseras
    parNm: 350, // Fiat Ducato 2.2 Multijet 140: 350 Nm (dato oficial Fiat)
    traccion: "Delantera", // Fiat Ducato, tracción delantera
    emisionesCo2: null,
    aprox: ["Precio de tarifa en Europa: desde 57.990 € (comunicado oficial Etrusco)"],
    notas:
      "El precio (desde 57.990 €) es la tarifa oficial europea del comunicado de prensa de Etrusco para la temporada 2026 (en Reino Unido, desde £59.290); Etrusco España no publica PVP y el precio final lo fija cada concesionario. Las medidas y la masa en orden de marcha proceden del exposé de un concesionario alemán de una unidad 2026 elaborado según la ficha del fabricante; los datos de camas, agua, frigorífico y equipamiento, del comunicado oficial.",
    descripcion: `Hay campers de seis metros con cama transversal y campers de seis metros con cama a lo largo. Y desde la temporada 2026 hay, además, un camper de seis metros con dos camas individuales de tamaño completo: el Etrusco CV 600 SB. Presentado en el Caravan Salon de Düsseldorf de 2025, es la gran novedad de la serie CV-Model sobre Fiat Ducato y responde a una demanda que no dejaba de crecer: un furgón válido para el día a día —entra en un aparcamiento normal, se mueve por ciudad sin dramas— que por la noche ofrezca el descanso de una autocaravana grande. Las siglas SB lo dicen todo: Single Beds, camas individuales.

La clave está en la zona trasera. Etrusco ha encajado dos camas individuales longitudinales de hasta 191 centímetros de largo en apenas seis metros de vehículo, una primicia en su categoría según la propia marca: hasta ahora, ese nivel de confort nocturno estaba reservado a campers más largos. Pero lo ingenioso no es solo la medida, sino el mecanismo: uno de los somieres se abate en segundos y libera un espacio de carga variable de hasta 180 centímetros de alto en la parte trasera, perfecto para meter las bicicletas de pie. Quien prefiera el portabicis exterior, en cambio, aprovecha hasta 1.208 litros de volumen bajo las camas para todo el equipo. Es la flexibilidad que piden los que viajan con material deportivo.

Delante de las camas, el CV 600 SB organiza un salón compacto con asientos de cabina giratorios y mesa con extensión opcional —vale para cenar, para una partida de cartas o para teletrabajar—, una cocina funcional con fregadero, cocina de dos fuegos y un frigorífico de 84 litros con congelador de 6 litros, y un baño práctico con estantes bien pensados para el uso diario. El depósito de agua limpia es de 100 litros, suficiente para varios días sin repostar. Etrusco ofrece el interior en cinco ambientes distintos, todos con el lenguaje de diseño actual de la marca: muebles claros, iluminación LED indirecta y muchos puertos USB. Y para quien lo quiera todo hecho, el paquete Complete Selection añade de una tacada las ventanas con marco, el toldo en antracita, la cámara trasera y la pantalla multimedia con Apple CarPlay y Android Auto.

La base es el Fiat Ducato 2.2 Multijet de 140 CV (103 kW) con 350 Nm, cambio manual y tracción delantera, en norma Euro 6e: el furgón más camperizado de Europa, con una red de talleres que cubre hasta el último pueblo. La dirección es la de un vehículo comercial moderno —asistida, con radio de giro contenido para sus 5,99 metros— y el equipamiento de serie incluye lo esencial para viajar tranquilo: ABS con EBD, ESP, asistente de arranque en pendiente, control de crucero, aire acondicionado en cabina y espejos eléctricos y calefactados. La batalla de 4,04 metros y los 2,05 metros de anchura lo mantienen ágil; la altura total de 2,70 metros permite entrar en la mayoría de parkings cubiertos con límite de 2,80.

En cifras, el CV 600 SB mide 5,99 m de largo, 2,05 m de ancho y 2,70 m de alto, con 1,90 m de altura interior. La masa en orden de marcha de una unidad 2026 ronda los 2.817 kg y la MMA es de 3.500 kg, así que se conduce con el carnet B y queda margen de sobra para cuatro ocupantes, agua y equipaje. Homologa cuatro plazas de viaje y dos para dormir —es un camper para dos, sin pretensiones familiares—, con una batería de 95 Ah, tres enchufes de 230 V, uno de 12 V y un USB de serie. Como opcionales interesantes figuran la preinstalación de placa solar y de aire acondicionado de techo.

El precio oficial europeo de lanzamiento es de 57.990 euros, una cifra que lo sitúa en la parte competitiva del segmento de campers de 6 metros con camas longitudinales, donde compite con los Carado CV 602 o Sunlight Cliff 602. En España, como siempre con Etrusco, no hay PVP publicado: el concesionario pone el precio final.

Verificación de fuentes: la novedad para la temporada 2026, las camas individuales de hasta 191 cm, el mecanismo abatible (180 cm de carga / 1.208 litros), el depósito de 100 litros, el frigorífico de 84 litros, los cinco ambientes interiores, el paquete Complete Selection y el precio de 57.990 € proceden del comunicado oficial de Etrusco (mayo de 2025). Las medidas (5,99 x 2,05 x 2,70 m), la masa en orden de marcha (2.817 kg), la MMA (3.500 kg), las plazas y el resto del equipamiento, del exposé de un concesionario alemán de una unidad 2026 elaborado según la ficha del fabricante. El par de 350 Nm es el dato oficial de Fiat para el Ducato 2.2 de 140 CV. La carga útil no está publicada: sin dato, sin cálculos. Dos de las fotos son imágenes oficiales de Etrusco del CV 600 SB (año modelo 2026); las exteriores, fotos de prensa del modelo.

Perfil de comprador: el CV 600 SB encaja con parejas activas que usan el camper a diario y en escapadas, viajan con bicis o material voluminoso y quieren dormir en camas de verdad sin pasar a los 6,36 m. No encaja con familias —solo duermen dos— ni con quien necesite un baño separado amplio. Balance: la novedad más interesante de Etrusco para 2026, con una idea brillante (dos camas individuales en 6 metros) ejecutada con el precio contenido habitual de la marca, lastrada solo por la falta de PVP oficial en España.`,
    pros: [
      "Primicia en su clase: dos camas individuales de hasta 191 cm en un camper de 5,99 m",
      "Somier abatible: hasta 180 cm de altura de carga para bicis o 1.208 litros bajo las camas",
      "5,99 m de largo y 2,70 m de alto: válido para el día a día y la mayoría de parkings",
      "Fiat Ducato 2.2 de 140 CV con 350 Nm: mecánica ubicua y barata de mantener",
      "Precio oficial europeo desde 57.990 €: competitivo en su segmento",
    ],
    contras: [
      "Solo 2 plazas para dormir: no es un camper familiar",
      "Sin PVP oficial en España: el precio final lo pone el concesionario",
      "La marca no publica la carga útil de esta distribución",
      "Baño compacto de camper: funcional pero sin ducha separada",
      "El cambio automático y el motor de 180 CV son opcionales con sobreprecio",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/etrusco-cv-600-sb-2026-precio-ficha-tecnica-ext.webp",
        alt: "Etrusco CV 600 SB, vista delantera tres cuartos en carretera",
        ancho: 1024,
        alto: 683,
      },
      {
        src: "/media/etrusco-cv-600-sb-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Etrusco CV 600 SB, vista delantera tres cuartos al atardecer",
        ancho: 1600,
        alto: 1067,
      },
      {
        src: "/media/etrusco-cv-600-sb-2026-precio-ficha-tecnica-interior.webp",
        alt: "Zona de descanso del Etrusco CV 600 SB con las dos camas individuales",
        ancho: 900,
        alto: 563,
      },
      {
        src: "/media/etrusco-cv-600-sb-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Salón del Etrusco CV 600 SB con mesa y cocina",
        ancho: 900,
        alto: 563,
      },
    ],
    analisisSlug: "etrusco-cv-600-sb-2026-precio-ficha-tecnica-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 48.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 48.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Etrusco (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Etrusco",
    },
    euroncap: null,
    curiosidades:
      "Para la temporada 2026, Etrusco montó por primera vez dos camas individuales de tamaño completo —de hasta 191 cm de largo— en un camper de solo 6 metros: según la propia marca, es una primicia en este segmento, donde ese confort nocturno estaba reservado a vehículos más largos. Fuente: comunicado oficial de Etrusco (https://www.etrusco.com/it/it/stampa/articolo-2025/cv-600-sb).",
    fuenteNombre: "Etrusco — comunicado oficial CV 600 SB (temporada 2026)",
    fuenteUrl: "https://www.etrusco.com/it/it/stampa/articolo-2025/cv-600-sb",
  },
];
