// Autocaravanas Adria — lote Merlín 4 (19/10/2026).
// Fuentes: adria-mobil.com (gama Matrix y gama Compact, páginas oficiales),
//   anuncios de unidades 2026 (signaturemotorhomes.co.uk, truckscout24, mobile.de),
//   ficha MY2026 de findmyleisurevehicle.co.uk, guía Adria Matrix 2027 de
//   outandaboutlive.co.uk, alpacacamping.de. Verificado el 19/10/2026.
// Notas honestas: Adria no publica PVP para España (precioDesde=null en ambas).
//   La "Adria Compact SP Plus" asignada no existe en la gama 2026 (la gama Compact
//   actual ofrece distribuciones DL/SL en paquetes Select/Supreme/Max); se sustituye
//   por la Adria Compact Supreme SL, verificada en web oficial y distribuidores.
//   MMA de la Matrix Supreme 670 DL: 4.400 kg en las unidades 2026 documentadas
//   (chasis Fiat Maxi) → carnet C1; Adria ofrece la gama también en 3,5 t.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_ADRIA_M4: Autocaravana[] = [
  {
    id: "adria-matrix-supreme-670-dl-2026-precio-ficha-tecnica",
    marca: "Adria",
    modelo: "Matrix Supreme 670 DL",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Adria no publica PVP oficial para España
    potenciaCv: 140, // Fiat Ducato 2.2 140 CV de serie en acabado Supreme (adria-mobil.com)
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6E
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/adria-matrix-supreme-670-dl-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/adria-matrix-supreme-670-dl-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/adria-matrix-supreme-670-dl-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7490, // anuncios de unidades 2026 (Fiat); versión Mercedes: 7.690 mm
    anchoMm: 2300,
    altoMm: 2890,
    pesoKg: null, // la marca no publica MRO por distribución
    mmaKg: 4400, // unidades 2026 documentadas con chasis Fiat Maxi 4,4 t
    carnetNecesario: "C1", // 4.400 kg > 3.500 kg
    cargaUtilKg: null, // no publicada por la marca; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4, // cama transversal trasera + cama abatible delantera de serie
    parNm: null,
    traccion: "delantera", // Fiat Ducato
    emisionesCo2: null,
    aprox: [],
    notas:
      "Largo/ancho/alto y MMA (7.490/2.300/2.890 mm, 4.400 kg): anuncios de unidades " +
      "nuevas MY2026 (signaturemotorhomes.co.uk, truckscout24). Base Fiat Ducato 2.2 " +
      "140 CV manual de serie en Supreme, calefacción Alde y cama abatible delantera " +
      "de serie: adria-mobil.com/motorhomes/matrix (oficial). Variante Mercedes " +
      "Sprinter 150/170 CV automático: 7.690 mm, 3.880 kg (abacusmotorhomes, " +
      "outandaboutlive). Precio: Adria no publica tarifa para España (en Reino " +
      "Unido parte de £93.950 según findmyleisurevehicle, solo referencia). " +
      "Plazas: 4 para viajar y 4 para dormir (algunas configuraciones anuncian 5.ª " +
      "plaza). MRO, consumo y carga útil: la marca no los publica.",
    curiosidades:
      "En el acabado Supreme la cama abatible delantera es de serie en toda la gama " +
      "Matrix —no un opcional—, junto con la calefacción de agua caliente Alde, la " +
      "carrocería plateada y la batería de litio con booster de carga. " +
      "Fuente: https://www.adria-mobil.com/motorhomes/matrix (equipamiento standard " +
      "del paquete Supreme, consultado el 19/10/2026).",
    descripcion: `La Adria Matrix Supreme 670 DL es la perfilada con la que la marca eslovena juega en la liga premium sin llegar al precio de una integral. Pertenece a la nueva generación de la gama Matrix, que Adria vende en dos acabados —Select y Supreme— y sobre dos bases a elegir: Fiat Ducato o Mercedes-Benz Sprinter. La 670 DL que nos ocupa es la versión con cama transversal trasera (eso significa la D de DL: lit transversal) dentro del acabado Supreme, el más equipado, y con el año-modelo 2026 ya a la venta en los concesionarios europeos.

Empecemos por lo que se ve: mide 7,49 metros de largo sobre base Fiat (7,69 m si se elige la variante Mercedes), 2,30 m de ancho y 2,89 m de alto. Son las medidas de una perfilada grande, de las que se notan al aparcar en un pueblo pero que a cambio regalan un interior de verdad habitable. La carrocería plateada es seña del acabado Supreme, igual que la franja trasera de LED de ancho completo que Adria estrenó en esta generación y que le da un aire nocturno inconfundible. La construcción es la probada Comprex de Adria, con doble suelo funcional que no solo aísla, sino que esconde instalaciones y deja huecos de almacenaje protegidos de las heladas.

Dentro, la distribución 670 DL gira alrededor de tres ambientes. Delante, el salón con los asientos de cabina giratorios y la banqueta forma un estar luminoso coronado por el gran parabrisas panorámico y el techo solar SunRoof exclusivo de la marca. En el centro, cocina amplia con frigorífico grande y cuarto de aseo con ducha independiente. Y detrás, la cama transversal fija, alta, con el garaje debajo: el esquema clásico que mejor aprovecha cada centímetro para dos personas que viajan sin montar y desmontar camas cada noche. Pero aquí viene el detalle que cambia el uso del vehículo: la cama abatible delantera es de serie en el acabado Supreme. Baja eléctricamente sobre el salón y convierte la Matrix en una cuatro plazas reales para dormir sin tocar el salón trasero. Cuatro para viajar, cuatro para dormir: la cuenta sale para dos parejas o una familia con dos niños.

La mecánica depende de la base elegida. En Fiat Ducato, el Supreme monta de serie el 2.2 de 140 CV con cambio manual, con opción al 180 CV y al automático; en Mercedes Sprinter, el 150 CV automático de serie con posibilidad de subir a 170 CV. Las unidades 2026 documentadas en Europa circulan mayoritariamente con el chasis Fiat Maxi de 4.400 kg de MMA, y ese es un dato que hay que subrayar: con 4,4 toneladas hace falta el carnet C1. Adria también ofrece la gama en configuraciones de 3,5 t, así que quien solo tenga el B deberá pedir expresamente esa homologación al concesionario. La tracción es delantera en ambos casos.

En equipamiento, el apellido Supreme se nota en cosas que en otras marcas son opcionales: calefacción de agua caliente Alde (la de radiadores, silenciosa y homogénea, ideal para viajar en invierno), batería de litio para la célula con booster de carga desde el alternador, frigorífico compresor, sistema de sonido mejorado con altavoces en el dormitorio y subwoofer, iluminación ambiental por capas y la app MACH para controlar funciones y niveles desde el móvil. Todo pensado para el uso en las cuatro estaciones, que es donde Adria quiere diferenciarse.

¿Y el precio? Adria no publica tarifa oficial para España, así que la casilla queda sin dato por honestidad: cualquier cifra sería inventada. Como referencia de mercado, en Reino Unido la gama Matrix Supreme 670 parte de unas £93.950 (findmyleisurevehicle, MY2026), pero eso no es trasladable al mercado español con impuestos y equipamientos distintos. La red de concesionarios Adria en España —consultable en el localizador de adria-mobil.com— es quien da precio cerrado según configuración.

Cómo lo verificamos: la existencia del modelo y el acabado Supreme se comprobaron en la página oficial de la gama Matrix de adria-mobil.com el 19/10/2026; las medidas y la MMA salen de anuncios de unidades nuevas del año-modelo 2026 en signaturemotorhomes.co.uk y truckscout24 (7.490 × 2.300 × 2.890 mm, 4.400 kg); la variante Mercedes y sus 7,69 m, de abacusmotorhomes y la guía 2027 de outandaboutlive.co.uk; el precio de referencia británico, de findmyleisurevehicle.co.uk.

Para quién es: para parejas o familias de cuatro que quieren una perfilada premium para viajar todo el año, valoran la calefacción Alde y el doble suelo, y no les asusta —o ya tienen— el carnet C1. Encaja también con quien duda entre perfilada e integral y prefiere pagar menos que una integral a cambio de la misma calidad de vida a bordo. No es para quien solo tenga el carnet B y no quiera sacarse el C1 (salvo que configure la versión de 3,5 t), ni para quien busque una autocaravana ágil de menos de 7 metros para callejear: con 7,49 m la Matrix pide campings y áreas amplias.`,
    pros: [
      "Cama abatible delantera de serie en el acabado Supreme: 4 plazas reales sin montajes",
      "Calefacción de agua caliente Alde de serie, ideal para uso en las cuatro estaciones",
      "Doble suelo funcional con instalaciones protegidas de heladas y almacenaje extra",
      "Dos bases a elegir (Fiat Ducato o Mercedes Sprinter) con hasta 180 CV",
      "Batería de litio, booster de carga y app MACH incluidos en el Supreme",
    ],
    contras: [
      "Las unidades 2026 documentadas van en 4.400 kg: exigen carnet C1",
      "Adria no publica PVP para España: el precio solo se obtiene en concesionario",
      "Con 7,49 m no es la perfilada más manejable en pueblos y áreas pequeñas",
      "El acabado Supreme encarece notablemente frente al Select",
      "La cama transversal trasera obliga a uno de los dos a 'escalar' para salir de noche",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/adria-matrix-supreme-670-dl-2026-precio-ficha-tecnica-oficial.webp", alt: "Adria Matrix Supreme 670 DL, vista exterior (foto oficial Adria)", ancho: 1620, alto: 1080 },
      { src: "/media/adria-matrix-supreme-670-dl-2026-precio-ficha-tecnica-interior1.webp", alt: "Adria Matrix Supreme 670 DL, interior con salón y cocina (foto oficial Adria)", ancho: 1620, alto: 1080 },
      { src: "/media/adria-matrix-supreme-670-dl-2026-precio-ficha-tecnica-interior2.webp", alt: "Adria Matrix Supreme 670 DL, comedor (foto oficial Adria)", ancho: 1920, alto: 1280 },
      { src: "/media/adria-matrix-supreme-670-dl-2026-precio-ficha-tecnica-detalle.webp", alt: "Adria Matrix Supreme 670 DL, detalle de la insignia MATRIX y pilotos LED traseros (foto oficial Adria)", ancho: 1620, alto: 1080 },
    ],
    analisisSlug: "adria-matrix-supreme-670-dl-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Adria (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
  {
    id: "adria-compact-supreme-sl-2026-precio-ficha-tecnica",
    marca: "Adria",
    modelo: "Compact Supreme SL",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Adria no publica PVP oficial para España
    potenciaCv: 140, // Fiat Ducato 2.2 140 CV (base habitual de la gama Compact)
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6E
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/adria-compact-supreme-sl-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/adria-compact-supreme-sl-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/adria-compact-supreme-sl-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990, // distribución SL de la gama Compact (datos de distribuidor)
    anchoMm: 2120, // oficial adria-mobil.com: la más estrecha de su clase
    altoMm: 2780,
    pesoKg: null,
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // no publicada por la marca; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 3, // camas gemelas traseras (2) + conversión a gran superficie (3)
    parNm: null,
    traccion: "delantera", // Fiat Ducato
    emisionesCo2: null,
    aprox: [],
    notas:
      "La gama Compact 2026 ofrece las distribuciones DL/SL en los paquetes " +
      "Select/Supreme/Max (adria-mobil.com/motorhomes/compact). Esta ficha cubre la " +
      "Compact Supreme SL, verificada en la web oficial (imágenes 'COMPACT_SUPREME_SL') " +
      "y en distribuidores (p. ej. anuncio 'ADRIA Compact Sl Supreme'). Ancho 2.120 mm: " +
      "oficial Adria ('the narrowest in its class'). Largo 6,99 m y 3 plazas: datos de " +
      "distribuidor (alpacacamping.de); la marca no publica ficha técnica detallada " +
      "por distribución. Alto 2.780 mm coherente con la generación (Compact 60Y DL: " +
      "6.990/2.120/2.780 mm). MMA 3.500 kg, base Fiat Ducato 140 CV, tracción delantera. " +
      "Precio: Adria no publica tarifa para España.",
    curiosidades:
      "Con solo 2.120 mm de anchura exterior, Adria presenta la Compact como 'la más " +
      "estrecha de su clase' (the narrowest in its class): cabe por calles y caminos " +
      "donde una perfilada convencional de 2,30 m ya no pasa. " +
      "Fuente: https://www.adria-mobil.com/motorhomes/compact (consultado el 19/10/2026).",
    descripcion: `La Adria Compact Supreme SL es la respuesta de la marca eslovena a una pregunta muy concreta: ¿cuánto se puede estrechar una autocaravana sin que deje de ser una autocaravana? La respuesta oficial son 2.120 milímetros. Con esa anchura, Adria la presenta como la más estrecha de su clase, y no es un eslogan vacío: 18 centímetros menos que una perfilada convencional se notan muchísimo al enfilar la calle mayor de un pueblo medieval, al adelantar en una comarcal o al buscar hueco en un aparcamiento.

La Compact pertenece a la nueva generación que Adria lanzó para las gamas Compact, Coral y Matrix, con tres paquetes —Select, Supreme y Max— y tres bases posibles: Fiat Ducato, Citroën Jumper y, en el caso del paquete Max, el Volkswagen Crafter. La Supreme SL que nos ocupa combina el paquete intermedio-alto Supreme con la distribución SL, es decir, camas gemelas longitudinales en la parte trasera (S de separate, L de longitudinal). Mide 6,99 metros de largo y 2,78 de alto, y se queda en los 3.500 kg de MMA: carnet B y nada de C1.

El truco de la Compact está en que, pese a su estrechez, no renuncia a nada esencial. El salón delantero integra cabina, cocina y comedor en un espacio continuo que Adria diseña para que se perciba más grande de lo que es; la gran ventana panorámica delantera, que se puede abrir, inunda de luz el estar y refuerza esa sensación. La cocina es compacta pero completa, con placa de tres fuegos y frigorífico de compresor de serie —un detalle importante, porque el compresor enfría igual con 40 grados fuera, algo que los de absorción no siempre consiguen—. El baño usa el ingenioso concepto Vario de la marca: una pared giratoria que permite usar el mismo espacio como aseo o como ducha independiente, la solución clásica para no malgastar ni un centímetro.

Para dormir, las dos camas gemelas traseras son la gran baza de la distribución SL: cada uno tiene su cama, su mesilla y su ventana, sin tener que pasar por encima del otro por la noche. Con el suplemento tapizado opcional y el somier extensible, ambas se unen en una gran superficie continua que da cabida a una tercera persona; de ahí las 3 plazas para dormir. Los colchones son de espuma de alta calidad sobre somieres de lamas, y hay luces de lectura y USB en cada cama, porque Adria sabe que hoy se viaja con el móvil en la mesilla.

La base es el ubicuo Fiat Ducato 2.2 de 140 CV con cambio manual de seis velocidades, tracción delantera y todos los asistentes de conducción modernos. La calefacción es una Truma diésel, que bebe del propio depósito del vehículo y evita cargar con bombonas de gas para el invierno; el aire acondicionado es opcional. De serie trae cuatro plazas con ISOFIX, batería AGM de 100 Ah para la célula y la app MACH, que permite controlar funciones clave y ver los niveles en tiempo real desde el teléfono.

El precio, como en toda la gama Adria, no se publica para España: la casilla queda sin dato y el precio real lo da el concesionario según paquete y opcionales. Como orientación no oficial, distribuidores europeos sitúan la Supreme SL en el entorno de los 80.000 euros, pero es solo una referencia. La red española de Adria, consultable en adria-mobil.com, tiene la última palabra.

Cómo lo verificamos: la existencia del modelo y del paquete Supreme se comprobó el 19/10/2026 en la página oficial de la gama Compact (adria-mobil.com/motorhomes/compact), donde además constan la anchura de 2.120 mm, las longitudes disponibles (5,99/6,89/6,99 m) y las bases Fiat, Citroën y Volkswagen; la distribución SL con camas gemelas y sus 6,99 m, en datos de distribuidor (alpacacamping.de) y anuncios de unidades ("ADRIA Compact Sl Supreme"); la altura de 2,78 m es coherente con la misma generación (Compact 60Y DL: 6.990 × 2.120 × 2.780 mm según distribuidor).

Para quién es: para parejas que viajan mucho y valoran la agilidad por encima del espacio: escapadas de fin de semana, rutas por pueblos, viajes donde aparcar fácil vale más que un salón enorme. También para quien viene de una camper y quiere dar el salto a una autocaravana "de verdad" sin asustarse con las medidas. No es para familias de cuatro o más —con 3 plazas para dormir se queda corta— ni para quien necesite un garaje grande para bicis o moto: el garaje trasero existe, pero es comedido. En marcha, la Compact se conduce casi como una furgoneta grande: la dirección es directa, la visibilidad buena y los 2,12 m de anchura quitan el miedo a los cruces en carreteras estrechas. La calefacción diésel permite alargar la temporada hasta el invierno sin depender del gas, y el depósito de aguas residuales aislado y calefactable de esta generación evita sustos con las heladas nocturnas.`,
    pros: [
      "2,12 m de anchura: la más estrecha de su clase, ideal para pueblos y carreteras estrechas",
      "Camas gemelas traseras: cada uno duerme en la suya sin molestarse",
      "3.500 kg de MMA: se conduce con el carnet B",
      "Frigorífico de compresor y calefacción diésel Truma de serie",
      "Baño Vario con pared giratoria: aseo y ducha independiente en poco espacio",
    ],
    contras: [
      "Solo 3 plazas para dormir: insuficiente para familias de cuatro",
      "Adria no publica PVP para España: hay que pedir precio en concesionario",
      "El garaje trasero es comedido para llevar bicicletas o material voluminoso",
      "Con 140 CV y cambio manual, los puertos se suben con calma si va cargada",
      "La estrechez se nota en el pasillo cuando dos personas se cruzan",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/adria-compact-supreme-sl-2026-precio-ficha-tecnica-oficial.webp", alt: "Adria Compact Supreme SL, vista exterior", ancho: 720, alto: 1080 },
      { src: "/media/adria-compact-supreme-sl-2026-precio-ficha-tecnica-interior1.webp", alt: "Adria Compact Supreme SL, camas gemelas traseras", ancho: 1620, alto: 1080 },
      { src: "/media/adria-compact-supreme-sl-2026-precio-ficha-tecnica-interior2.webp", alt: "Adria Compact Supreme SL, interior del salón", ancho: 1620, alto: 1080 },
      { src: "/media/adria-compact-supreme-sl-2026-precio-ficha-tecnica-detalle.webp", alt: "Adria Compact Supreme SL, detalle de pilotos traseros", ancho: 720, alto: 1080 },
    ],
    analisisSlug: "adria-compact-supreme-sl-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Adria (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
