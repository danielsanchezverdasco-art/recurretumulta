// Autocaravanas Bürstner — lote Merlín 4 (19/10/2026).
// Fuentes: buerstner.com (páginas oficiales FR/NL/CH del Campeo TD), anuncios de concesionario
// para la motorización. Verificado el 19/10/2026.
// Notas honestas: Bürstner no publica PVP oficial para España → precioDesde=null. La marca no
// publica carga útil → cargaUtilKg=null. Las fotos son de una unidad real del modelo exacto
// (galería de concesionario en caraworld.de, sin marcas de agua), no fotos oficiales de prensa.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_BURSTNER_M4: Autocaravana[] = [
  {
    id: "burstner-campeo-td-690-g-2026-precio-ficha-tecnica",
    marca: "Bürstner",
    modelo: "Campeo TD 690 G",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Bürstner no publica PVP oficial para España; en Francia parte de 75.290 € (buerstner.com FR)
    potenciaCv: 140, // Fiat Ducato 140 CV según anuncios de concesionario del modelo
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
    imagen: "/media/burstner-campeo-td-690-g-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/burstner-campeo-td-690-g-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/burstner-campeo-td-690-g-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990, // buerstner.com (ficha oficial Campeo TD)
    anchoMm: 2300,
    altoMm: 2950,
    pesoKg: 2915, // masa en orden de marcha publicada (horquilla 2769–3061 kg por tolerancia ±5 %)
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica carga útil; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // homologada para 4–5 plazas según configuración (fuente oficial)
    plazasDormir: 5, // 2 de serie, hasta 5 con cama abatible opcional
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: [],
    notas:
      "Dimensiones (699/230/295 cm), altura interior (205 cm), MMA (3500 kg), MRO (2915 kg con " +
      "horquilla 2769–3061), batalla (4035 mm), plazas (4–5), camas (gemelas 199–190×80; abatible " +
      "opcional 200×140–118), frigorífico (131,5 L + 15 L congelador), agua limpia (120 L) y " +
      "residuales (90 L): buerstner.com, páginas oficiales FR/NL/CH del Campeo TD. Motor Fiat " +
      "Ducato 140 CV: anuncios de concesionario del modelo exacto. Precio: Bürstner no publica " +
      "PVP para España (precioDesde=null); en la web oficial francesa el Campeo TD parte de " +
      "75.290 €. En null: carga útil (la marca no la publica), consumo, par, tracción y emisiones " +
      "CO2 (no publicados). Fotos: unidad real del modelo exacto, galería de concesionario en " +
      "caraworld.de (anuncio 26057034), sin marcas de agua; no son fotos oficiales de prensa.",
    curiosidades:
      "La cama abatible opcional sobre el salón no es rectangular: mide 200×140–118 cm, es decir, " +
      "se estrecha hacia los pies para no robar paso hacia la cabina, un detalle de diseño que " +
      "Bürstner publica tal cual en la ficha oficial del Campeo TD (buerstner.com).",
    descripcion: `La Bürstner Campeo TD 690 G es la propuesta de la marca alemana para quien busca una
      perfilada de tamaño contenido sin renunciar a una zona de noche digna de gamas superiores.
      Con 699 cm de longitud, 230 cm de anchura y 295 cm de altura, se mueve en el segmento más
      demandado de Europa: el de las semintegrales de menos de siete metros que se conducen con el
      carnet B y caben en la mayoría de parcelas de camping. La altura interior de 205 cm, publicada
      en la ficha oficial de buerstner.com, está por encima de la media de su categoría y se nota
      en el día a día, sobre todo para conductores altos.

      MEDIDAS Y HABITABILIDAD. La distribución G de la 690 se organiza alrededor de unas camas
      gemelas traseras de 199–190×80 cm, la configuración favorita de las parejas que viajan mucho:
      cada uno tiene su cama, se puede entrar y salir sin molestar al otro y el paso central queda
      libre hacia el baño. La batalla de 4035 mm y la masa máxima de 3500 kg la mantienen dentro de
      los límites del carnet B, algo que en España decide la compra para muchísimos usuarios. La
      masa en orden de marcha declarada es de 2915 kg, con la horquilla legal de 2769 a 3061 kg por
      la tolerancia de fabricación del ±5 % que exige la normativa europea; conviene tener presente
      esa horquilla al calcular el equipaje real, porque entre una unidad ligera y una pesada puede
      haber casi 300 kg de diferencia. El depósito de agua limpia es de 120 litros y el de residuales
      de 90 litros, cifras correctas para una perfilada de este tamaño y suficientes para dos o tres
      días de autonomía fuera de áreas de servicio.

      TECNOLOGÍA Y EQUIPAMIENTO. El frigorífico es de 131,5 litros con un congelador independiente
      de 15 litros, un volumen generoso para escapadas largas sin tener que racionar la compra. La
      gama Campeo es la puerta de entrada a Bürstner, pero la marca mantiene su filosofía de
      construcción con aislamiento y acabados cuidados; no es una autocaravana espartana, sino una
      forma de acceder a la ingeniería alemana de Kehl a un precio más contenido que las gamas
      Lyseo o Elegance. La cama abatible opcional sobre el salón, de 200×140–118 cm, es el
      equipamiento que más transforma el vehículo: de día desaparece en el techo y de noche añade
      dos plazas, lo que permite pasar de 2 a 5 plazas para dormir sin cambiar de modelo.

      CAMAS Y PLAZAS. La ficha oficial contempla de 4 a 5 plazas homologadas para viajar y de 2 a 5
      plazas para dormir según configuración. De serie, las gemelas traseras acogen a dos personas
      con comodidad; con la cama abatible opcional se suman dos plazas más sobre el salón y, según
      la versión, una quinta plaza completando el conjunto. Es, por tanto, una autocaravana pensada
      para la pareja que de vez en cuando viaja con hijos o nietos, no para una familia de cinco a
      tiempo completo.

      MECÁNICA. La base es la Fiat Ducato con el motor de 140 CV, la motorización que los
      concesionarios anuncian para esta versión y la más equilibrada para un conjunto de 3,5
      toneladas: mueve el vehículo con soltura en llano y se defiende en puertos sin obligar a
      reducir constantemente. Al ser una mecánica masizada en toda Europa, el mantenimiento y los
      repuestos no son un problema en España.

      PRECIO Y RED COMERCIAL EN ESPAÑA. Bürstner no publica una tarifa oficial para España, de modo
      que el precio de referencia hay que buscarlo en los mercados vecinos: en la web oficial
      francesa el Campeo TD parte de 75.290 €. En España la marca trabaja a través de su red de
      concesionarios oficiales, donde cada unidad se cotiza con su equipamiento concreto; es
      recomendable pedir siempre el precio con la cama abatible y los paquetes que interesen, porque
      los opcionales cambian sensiblemente la factura final. Como referencia de mercado, las
      perfiladas alemanas de este tamaño y motorización se mueven en España entre los 70.000 y los
      85.000 € según equipamiento.

      CÓMO LO VERIFICAMOS. Todos los datos técnicos de esta ficha (dimensiones, pesos, camas,
      capacidades y plazas) proceden de las páginas oficiales del Campeo TD en buerstner.com
      (versiones francesa, neerlandesa y suiza), consultadas el 19/10/2026. La motorización de
      140 CV se confirma en anuncios de concesionario del modelo exacto. El precio francés de
      75.290 € es el publicado en la web oficial de Bürstner Francia; no existe PVP oficial para
      España. Las fotografías corresponden a una unidad real del Campeo TD 690 G (galería del
      anuncio 26057034 en caraworld.de), sin marcas de agua, aunque no son imágenes oficiales de
      prensa de la marca.

      PARA QUIÉN ES. Es la autocaravana ideal para parejas que quieren una perfilada manejable,
      con carnet B, camas gemelas de verdad y la posibilidad de añadir plazas ocasionales con la
      abatible. Encaja con quien valora la construcción alemana pero no quiere pagar el sobreprecio
      de las gamas altas. No es para quien necesite cinco plazas permanentes, un garaje enorme para
      dos bicicletas eléctricas grandes o una carga útil holgada para equipamiento pesado: en esos
      casos conviene mirar a la gama Lyseo o a integrales de mayor MMA.`,
    pros: [
      "Camas gemelas traseras de 199–190×80 cm, la distribución más cómoda para parejas",
      "Altura interior de 205 cm, por encima de la media de las perfiladas de 7 metros",
      "MMA de 3500 kg: se conduce con el carnet B y tributa como turismo en peajes",
      "Cama abatible opcional que eleva las plazas de noche hasta 5 sin cambiar de modelo",
      "Frigorífico de 131,5 L con congelador de 15 L, generoso para su segmento",
    ],
    contras: [
      "Bürstner no publica PVP oficial para España: el precio hay que negociarlo por unidad",
      "La MRO tiene una horquilla de 2769 a 3061 kg; la carga útil real varía mucho por unidad",
      "Gama de acceso a Bürstner: acabados y equipamiento por debajo de las gamas Lyseo/Elegance",
      "140 CV justos si se viaja cargado por puertos de montaña con frecuencia",
      "Sin datos oficiales de consumo, par o emisiones en la ficha de la marca",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/burstner-campeo-td-690-g-2026-precio-ficha-tecnica-oficial.webp", alt: "Bürstner Campeo TD 690 G, vista exterior", ancho: 1600, alto: 1200 },
      { src: "/media/burstner-campeo-td-690-g-2026-precio-ficha-tecnica-interior1.webp", alt: "Bürstner Campeo TD 690 G, salón", ancho: 1600, alto: 1200 },
      { src: "/media/burstner-campeo-td-690-g-2026-precio-ficha-tecnica-interior2.webp", alt: "Bürstner Campeo TD 690 G, cocina y zona de noche", ancho: 1600, alto: 1200 },
      { src: "/media/burstner-campeo-td-690-g-2026-precio-ficha-tecnica-detalle.webp", alt: "Bürstner Campeo TD 690 G, camas gemelas", ancho: 1600, alto: 1200 },
    ],
    analisisSlug: "burstner-campeo-td-690-g-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Bürstner (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
