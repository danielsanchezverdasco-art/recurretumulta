// Autocaravanas Benimar — lote Merlín 2 (19/10/2026), agente L.
// Datos de la página oficial de Benimar (gama Tessoro 2027): fuenteNombre/fuenteUrl
// con la URL exacta. Benimar no publica PVP: sin precio oficial publicado, sin cifras sueltas.
// Fotos: 2 exteriores + 2 interiores oficiales de benimar.es (ver creditos.txt).
// Curiosidad con fuente en `curiosidades`. noindex lo gestiona Grok al integrar.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_BENIMAR_M2: Autocaravana[] = [
  {
    id: "benimar-tessoro-t481-2026-precio-ficha-tecnica",
    marca: "Benimar",
    modelo: "Tessoro T481",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Benimar no publica PVP oficial; no inventar
    potenciaCv: 130, // Ford Transit 2.0 Euro 6 de 130 CV, de serie (opcional 165 CV)
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
    imagen:
      "/media/benimar-tessoro-t481-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/benimar-tessoro-t481-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/benimar-tessoro-t481-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990, // página oficial del modelo (gama Tessoro 2027)
    anchoMm: 2320, // página oficial del modelo
    altoMm: 2890, // página oficial del modelo
    pesoKg: null, // masa en orden de marcha no publicada por la marca
    mmaKg: 3500, // página oficial del modelo
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil de este modelo
    consumo: null,
    consumoUnidad: null,
    plazas: null, // Benimar no publica las plazas de viaje homologadas de la T481
    plazasDormir: 4, // cama basculante eléctrica de 2 plazas + cama de salón de 2 plazas
    parNm: null,
    traccion: "Delantera", // Ford Transit, tracción delantera
    emisionesCo2: null,
    aprox: [],
    notas:
      "Benimar no publica PVP: el precio es null y no hay cifras sueltas en el texto. Datos técnicos de la página oficial de Benimar para la Tessoro T481 (gama 2027, actualizada 19/08/2026). Las plazas de viaje no están publicadas por la marca.",
    descripcion: `La Benimar Tessoro T481 es una autocaravana perfilada de 5,99 metros que concentra en menos de seis metros una habitabilidad que la propia marca compara con la de un modelo de 7,40 m. Pertenece a la gama Tessoro, la perfilada más vendida de Benimar —la marca que más autocaravanas vende en España—, y representa la apuesta grande de la gama 2027: el cambio de chasis a Ford Transit. Donde las Tessoro de años anteriores montaban el ubicuo Fiat Ducato, la T481 equipa de serie el Ford Transit 2.0 Euro 6 de 130 CV con cambio manual de 6 velocidades, con opción de 165 CV y cambio automático en el Pack Northautokapp. Es un giro notable para una marca española que fabrica en Peñíscola (Castellón) y que durante años identificó sus perfiladas con el motor italiano; ahora juega la carta del óvalo americano, con su red de servicio y su reputación de robustez en furgoneta.

El dato que define a la T481 está en el techo: una cama basculante eléctrica de dos plazas que baja sobre el salón y a la que, según Benimar, se sube sin escalera. Es la solución que permite dormir a cuatro en 5,99 m sin robar ni un centímetro al salón durante el día. La cama mide 140/122 × 190 cm y soporta hasta 230 kg, y el salón se convierte además en una segunda cama de 150/121 × 206 cm. El salón es en L, amplio y luminoso, con la mesa de pata telescópica eléctrica multiposición y los asientos de cabina giratorios y reclinables que se integran en la zona de estar. El mobiliario es el nuevo ambiente «Málaga», con LED ambiental en los altos, cajones de cierre suave y fundas de cojín desenfundables, un nivel de acabado que sitúa a la T481 en la parte alta de las perfiladas generalistas.

La cocina también es en L y está pensada para cocinar de verdad: fregadero empotrado, cocina de dos fuegos con encendido eléctrico, frigorífico de compresor de 150 litros con hueco para nueve botellas de 1,5 l, botellero vertical, especiero iluminado y encimera extensible. El baño apuesta por la ducha separada extragrande con espejo retroiluminado, cesta para neceseres y toallero, una configuración que en este tamaño suele sacrificarse y que aquí se mantiene. Los depósitos son de 100 litros de aguas limpias y 105 de grises, cifras correctas para una perfilada de uso familiar, y la calefacción es una Webasto diésel de 4.000 W con caldera de gas para el agua caliente, ampliable a 5.500 W con el Pack Winter para quien quiera esquiar con ella.

Datos aún no publicados por la marca, Benimar mantiene su seña de identidad: carrocería 100 % poliéster, paredes y techo sin madera —«imposible que se pudra», dice la marca—, la respuesta española al eterno problema de las humedades estructurales. La puerta de acceso es la XL de la marca, con dos puntos de cierre, ventana, oscurecedor, mosquitera y papelera, y las puertas del garaje llevan cerraduras de estilo automoción. El chasis Ford aporta de serie un equipamiento de seguridad que hace unos años era impensable en una perfilada de este precio: asistente inteligente de velocidad, reconocimiento de señales, alerta de circulación en sentido contrario, mantenimiento de carril, aviso de colisión y asistente de aparcamiento delantero, además de TPMS, control de crucero con limitador y cámara trasera con pantalla táctil de 12 pulgadas y DAB.

Con 5,99 m de largo, 2,32 m de ancho y 2,89 m de alto, la T481 se mueve en la franja de las perfiladas compactas: cabe en la mayoría de las áreas, aparca sin dramas y con sus 3.500 kg de MMA se conduce con el carnet B. La anchura de vía trasera aumentada (1.980 mm) y la distancia entre ejes de 3.750 mm buscan estabilidad en autovía, el punto débil tradicional de las perfiladas cortas y altas. Los 130 CV del Transit son suficientes en llano y autovía; con la célula cargada y cuatro ocupantes, en puertos largos se agradecerá el opcional de 165 CV con cambio automático, que además abre la puerta al chasis Heavy de 4.100 kg para quien necesite más carga útil.

Del precio no hay cifra oficial: Benimar no publica PVP y cada concesionario fija el suyo, así que la negociación forma parte de la compra y las diferencias entre provincias pueden ser de miles de euros. Como referencia de posicionamiento, la Tessoro es la gama de acceso a las perfiladas de Benimar por debajo de la Mileo, y compite con la Dethleffs Trend, la Chausson Titanium y la Bürstner Lyseo TD en distribuciones equivalentes. Sus rivales naturales son las perfiladas compactas de 6 metros con cama basculante: la Chausson 640 Titanium y la Roller Team Kronos son las alternativas más directas en el mercado español.

Verificación de fuentes: todos los datos técnicos de esta ficha proceden de la página oficial de Benimar para el modelo (gama Tessoro 2027, actualizada el 19/08/2026): medidas, MMA, motorización Ford, equipamiento, depósitos y dimensiones de camas. Benimar advierte que las fotos están tomadas con prototipos y pueden diferir del producto final. La marca no publica PVP ni plazas de viaje homologadas para la T481: esos campos quedan sin dato y no se inventan. Benimar fabrica en España (Peñíscola) y forma parte del grupo Trigano.

Perfil de comprador: la Tessoro T481 encaja con parejas o familias jóvenes que quieren una perfilada compacta de menos de 6 metros con cuatro plazas reales para dormir, valoran la red de servicio de Ford y de Benimar en España, y prefieren una marca nacional con recambios sin esperas. No encaja con quien necesite una ficha con PVP cerrado de fábrica ni con quien busque una integral de gran volumen. Balance: una perfilada honesta y muy bien equipada de serie, con el argumento diferencial de la cama basculante sin escalera y el salto al chasis Ford, lastrada únicamente por la opacidad de precios habitual en la marca.`,
    pros: [
      "Menos de 6 metros con 4 plazas para dormir: cama basculante eléctrica a la que se sube sin escalera",
      "Chasis Ford Transit 2.0 de 130 CV con asistentes de conducción de serie (mantenimiento de carril, aviso de colisión, reconocimiento de señales)",
      "Construcción 100 % poliéster sin madera en paredes ni techo: adiós a las humedades estructurales",
      "Cocina en L de verdad: frigorífico de compresor de 150 l, encimera extensible y botellero vertical",
      "Marca española que más vende en España, fabricada en Peñíscola: recambios y servicio sin esperas",
    ],
    contras: [
      "Sin PVP oficial publicado: cada concesionario da su precio y negociar lleva tiempo",
      "130 CV justos en puertos con la célula cargada; el 165 CV automático es opcional con sobreprecio",
      "La marca no publica las plazas de viaje homologadas ni la masa en orden de marcha",
      "Fotos oficiales tomadas con prototipos: pueden diferir del producto final",
      "Con cuatro ocupantes, la cama del salón hay que hacerla y deshacerla a diario",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/benimar-tessoro-t481-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Benimar Tessoro T481, vista trasera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/benimar-tessoro-t481-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Benimar Tessoro T481, vista delantera con chasis Ford Transit",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/benimar-tessoro-t481-2026-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Interior de la Benimar Tessoro T481, salón en L con cama basculante",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/benimar-tessoro-t481-2026-precio-ficha-tecnica-interior-oficial-2.webp",
        alt: "Cocina en L de la Benimar Tessoro T481 con frigorífico de 150 litros",
        ancho: 1200,
        alto: 1797,
      },
    ],
    analisisSlug: "benimar-tessoro-t481-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Ford Transit 2.0: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Ford)",
      revisiones: [
        {
          nombre: "Revisión Ford Transit (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Benimar (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Ford Transit + recomendaciones Benimar",
    },
    euroncap: null,
    curiosidades:
      "La gama Tessoro 2027 supone el regreso de Benimar al chasis Ford Transit: la T481 monta de serie el Ford 2.0 Euro 6 de 130 CV con cambio manual de 6 velocidades (con opción de 165 CV y automático), tras años en los que la marca identificaba sus perfiladas con el Fiat Ducato. Fuente: página oficial de Benimar para la Tessoro T481 (https://www.benimar.es/en/tessoro/t481/).",
    fuenteNombre: "Benimar — web oficial",
    fuenteUrl: "https://www.benimar.es/en/tessoro/t481/",
  },
];
