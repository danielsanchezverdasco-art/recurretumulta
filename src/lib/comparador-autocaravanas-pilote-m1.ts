// 21/10/2026 (dedupe campers, Niky): retirado el registro «pilote-v600g-2026-precio-ficha-tecnica» de este fichero.
// Era la copia en /autocaravanas/ de una furgoneta camperizada: la versión canónica
// vive en /campers/pilote-v600g-2026-precio-ficha-tecnica/ y la URL vieja redirige con 301 (public/_redirects).
// Autocaravanas Pilote — lote Merlín 1 (18/10/2026). Corrección (b)(c)(d) 22:15 — textos lote 3.
// Datos verificados: pilote.fr (web oficial: ficha del modelo V600G —«Places couchage, 2»,
// «Charge utile, 630 kg»— + catálogo oficial de la colección 2027, válida desde 01/07/2026;
// ficha oficial del G740FGJ ÉVIDENCE —«Places couchage, 4», «Charge utile, 376 kg»—).
// NOTA DE COLECCIÓN: las unidades 2026 montan calefacción Truma Combi 4; la colección 2027
// incorpora de serie la Truma Combi D4 diésel. Precio no publicado → null.
// NOTA DE NOMENCLATURA: «G740LJ Evidence» no existe en el catálogo oficial; la ficha corresponde
// al modelo oficial G740FGJ ÉVIDENCE (integral de camas gemelas, colección 2027).
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_PILOTE_M1: Autocaravana[] = [
  {
    id: "pilote-g740fgj-evidence-2026-precio-ficha-tecnica",
    marca: "Pilote",
    modelo: "G740FGJ ÉVIDENCE",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: null, // Pilote no publica ningún precio oficial; la compra es solo vía red de concesionarios
    potenciaCv: 160, // 180 CV en opción
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
    imagen: "/media/pilote-g740fgj-evidence-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/pilote-g740fgj-evidence-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/pilote-g740fgj-evidence-2026-precio-ficha-tecnica-oficial-interior2.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7560,
    anchoMm: 2300,
    altoMm: 2850,
    pesoKg: null, // Pilote no publica masa en orden de marcha; sí publica "carga útil: 376 kg"
    mmaKg: 3500, // chasis Fiat de 3,5 t
    carnetNecesario: "B",
    cargaUtilKg: 376, // cifra oficial publicada por Pilote («Charge utile, 376 kg»)
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // oficial («Places assise, 4»)
    plazasDormir: 4, // oficial («Places couchage, 4»)
    parNm: null, // no publicado por el fabricante
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["etiquetaDgt"],
    pros: [
      "Serie especial Evidence «lista para partir»: batería de litio de 200 Ah, panel solar TOPCon de 210 W y convertidor de 2.000 W de serie; autonomía eléctrica sin enganche ni grupo electrógeno",
      "Calefacción híbrida Truma D6E de 6.000 W (diésel + eléctrica a 230 V): invierno real sin quemar bombonas de gas, porque tira del depósito de gasóleo",
      "160 CV con caja automática de serie en el Fiat Ducato 2,2 (180 CV en opción): el automático ya no es un extra de pago en esta integral de 7,56 m",
      "Camas gemelas traseras con rallonge de serie: se unen en una cama doble king size; y existe la versión «lits bas» para quien no quiera subir por escalera",
      "Ducha independiente del WC y frigorífico de compresor eléctrico sin rejillas exteriores: mejor aislamiento y rendimiento con calor que una trivalente de absorción",
    ],
    contras: [
      "Carga útil de solo 376 kg: la más ajustada entre las integrales de su tamaño; con cuatro viajeros y el depósito lleno, cada kilo cuenta",
      "Camas gemelas elevadas sobre un garaje alto: se accede por escalera (salvo la versión lits bas) y cargar bultos pesados queda a altura incómoda",
      "Cofre de gas de una sola bombona de 2,75 kg con toma exterior: coherente con una autocaravana pensada para no usar gas, pero limita si se quiere cocinar solo con bombona",
      "Pilote no publica ningún precio oficial de la Evidence: sin PVP es imposible situarla frente a sus rivales sin pedir oferta en concesionario",
      "Carrocería integral de 2,85 m de alto con gran parabrisas panorámico: más superficie acristalada que calentar o refrigerar y mayor sensibilidad al viento lateral que una perfilada",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/pilote-g740fgj-evidence-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Pilote G740FGJ ÉVIDENCE, vista tres cuartos (foto oficial)",
        ancho: 768,
        alto: 467,
      },
      {
        src: "/media/pilote-g740fgj-evidence-2026-precio-ficha-tecnica-oficial-ext2.webp",
        alt: "Integral Pilote ÉVIDENCE en ruta (foto oficial)",
        ancho: 1200,
        alto: 621,
      },
      {
        src: "/media/pilote-g740fgj-evidence-2026-precio-ficha-tecnica-oficial-ext3.webp",
        alt: "Integral Pilote ÉVIDENCE con toldo desplegado (foto oficial)",
        ancho: 1024,
        alto: 1024,
      },
      {
        src: "/media/pilote-g740fgj-evidence-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Dormitorio de camas gemelas de la integral Pilote ÉVIDENCE (foto oficial de la serie)",
        ancho: 1024,
        alto: 683,
      },
      {
        src: "/media/pilote-g740fgj-evidence-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Salón face-face del Pilote G740FGJ ÉVIDENCE (foto oficial)",
        ancho: 768,
        alto: 512,
      },
      {
        src: "/media/pilote-g740fgj-evidence-2026-precio-ficha-tecnica-oficial-interior3.webp",
        alt: "Dormitorio de camas gemelas del Pilote G740FGJ ÉVIDENCE (foto oficial)",
        ancho: 735,
        alto: 512,
      },
    ],
    descripcion: `La serie Evidence de Pilote nace de una observación tan simple como acertada: la mayoría de los compradores de una integral acaba pidiendo los mismos extras —batería de litio grande, panel solar, inversor potente, calefacción diésel—, así que la marca francesa los ha metido todos de serie en una edición «lista para partir» y se ha ahorrado al cliente la peregrinación por la lista de opcionales. El G740FGJ Evidence es la materialización de esa idea en formato integral de 7,56 metros: un vehículo que sale del concesionario preparado para la autonomía real, no para volver al taller a equiparlo. Y es una integral de verdad, con frontal de una sola pieza y parabrisas panorámico, no una perfilada disfrazada.

Las medidas son las de una gran rutera europea: 7,56 m de largo, 2,30 m de ancho y 2,85 m de alto, con cuatro plazas de viaje y cuatro para dormir según la ficha oficial de Pilote. La distribución apuesta por las camas gemelas traseras, el formato favorito de las parejas que viajan mucho: cada uno tiene su cama, su mesilla y su acceso sin molestar al otro, y con la rallonge de serie ambas se unen en una cama doble de tamaño king size para las noches en que apetece dormir juntos. Existe además la versión «lits bas», con las camas a menor altura, pensada para quien no quiere subir por escalera cada noche —un detalle de accesibilidad que las marcas generalistas no suelen ofrecer—. Debajo de las camas, el garaje es alto y pasante, con portones a ambos lados y cerraduras de compresión de doble junta: admite bicis y material voluminoso, aunque cargar bultos pesados a esa altura pide brazos.

El salón cara a cara con mesa plegable para cinco comensales, la cocina con frigorífico de compresor eléctrico y la ducha independiente del WC —separados ambos de la zona de noche y del salón por tabiques correderos— completan una célula pensada para la vida a bordo prolongada, no para el fin de semana. El equipamiento de serie de la Evidence es su argumento de venta: batería de litio de 200 Ah, panel solar TOPCon de 210 W y convertidor de 2.000 W, una combinación que permite varios días de autonomía eléctrica sin enganche ni grupo electrógeno; y la calefacción híbrida Truma D6E de 6.000 W, que funciona con diésel del depósito y con electricidad a 230 V, para inviernos de verdad sin depender de las bombonas —el cofre de gas, de hecho, solo admite una bombona de 2,75 kg, porque esta autocaravana está pensada para no usar gas—.

En marcha, el Fiat Ducato 2.2 rinde 160 CV con cambio automático de serie, con opción de 180 CV: que el automático venga incluido en una integral de este tamaño es una declaración de intenciones, porque en este segmento el cambio manual ya es una antigualla. La tracción es delantera y con 3.500 kg de MMA basta el carnet B. Y aquí llega el pero que hay que contar sin paños calientes: la carga útil oficial es de solo 376 kg, la más ajustada entre las integrales de su tamaño. Con cuatro viajeros, el depósito de agua lleno y el garaje cargado, cada kilo cuenta, y este es el dato que el comprador debe sopesar con frialdad antes de enamorarse del equipamiento: una Evidence cargada hasta arriba viaja al límite de la báscula.

En precio, Pilote no publica PVP oficial de la Evidence —ni de ningún modelo—, así que situarla frente a sus rivales exige pedir oferta en concesionario; no hay cifra de fábrica que dar y no la vamos a inventar. Sus competidoras naturales son las integrales europeas de 7,4 a 7,6 m con camas gemelas, donde la Evidence se diferencia por venir «llena» de serie mientras las demás cobran cada extra por separado. Es para parejas viajeras experimentadas que hacen tiradas largas, que pernoctan fuera de camping y que quieren salir del concesionario sin una lista de opcionales pendiente. No es para quien viaja cargado hasta las trancas —esos 376 kg de carga útil son un techo bajo— ni para conductores que se estrenan con un vehículo de 7,56 m y 2,85 m de alto.

Origen de los datos: las medidas (7,56 × 2,30 × 2,85 m), las 4 plazas de viaje, las 4 para dormir y la carga útil de 376 kg proceden de la ficha oficial del modelo en pilote.fr, revisada el 18/10/2026; el equipamiento de la serie Evidence —litio de 200 Ah, solar de 210 W, inversor de 2.000 W, Truma D6E y camas gemelas con rallonge— sale de la misma página oficial; Pilote no publica precios, por eso la ficha no incluye PVP. Valoración final: la Evidence es la integral «llave en mano» más completa de su tamaño —autonomía eléctrica y calefacción diésel de serie—, a cambio de una carga útil de 376 kg que obliga a viajar ligero y a contar cada kilo antes de enamorarse del equipamiento.`,
    analisisSlug: "pilote-g740fgj-evidence-2026-analisis-opinion",
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
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Pilote",
    },
    euroncap: null,
    notas:
      "La etiqueta ambiental DGT «C» es una inferencia editorial (diésel Euro 6), no un dato publicado por el fabricante: dato no oficial · en revisión.",
    curiosidades:
      "En 1981 Pilote inventó el concepto de la autocaravana perfilada, un formato hoy omnipresente que entonces no existía en el mercado. Fuente: catálogo oficial Pilote 2024: https://docs.campingcar-infos.com/docs/Pilote/Pilote%202024%20Catalogue.pdf",
    fuenteNombre: "Pilote (web oficial, colección 2027)",
    fuenteUrl: "https://www.pilote.fr/integral/g740fgj-evidence/",
  },
];
