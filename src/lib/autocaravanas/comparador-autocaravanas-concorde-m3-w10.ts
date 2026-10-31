// Autocaravanas Concorde — lote Merlín 3 (19/10/2026).
// Fuentes: https://www.concorde.eu/en/models/charisma/ (página oficial de la gama Charisma:
// equipamiento, calefacción Alde, suelo radiante bizona, baño de ancho completo);
// https://www.schaffer-mobil.de/en/motorhomes/brands/concorde/charisma/ (concesionario oficial:
// rango de la gama 8,77–9,27 m, 7.490 kg, 4–5 plazas); listados técnicos de TruckScout24 para el
// chasis Iveco Daily 70C 207 CV (152 kW, 470 Nm, ZF 8v). Verificado el 19/10/2026.
// NOTA DE SUSTITUCIÓN: el layout asignado "Charisma 890 M" pertenece a la generación anterior
// (Charisma III) y no figura en la gama oficial actual (910 LI, 910 LSI, 915 LSI, 920 G...).
// Se sustituye por el Concorde Charisma 910 LI, layout vigente y documentado oficialmente.
// Notas honestas: Concorde publica su tarifa en el Listino Prezzi oficial para Italia (el Charisma
// 910 LI parte de 308.450 €); la longitud exacta del 910 LI no se
// publica en concorde.eu (rango de gama 8,77–9,27 m); la altura total no está publicada.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_CONCORDE_M3: Autocaravana[] = [
  {
    id: "concorde-charisma-910-li-2026-precio-ficha-tecnica",
    marca: "Concorde",
    modelo: "Charisma 910 LI",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: 308450, // Listino oficial Concorde Italia 2026 (PDF del fabricante)
    potenciaCv: 207, // Iveco Daily C21: 152 kW, Euro VI E (listados técnicos oficiales de la gama)
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: null, // Euro VI E; etiqueta no declarada por la marca
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/concorde-charisma-910-li-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/concorde-charisma-910-li-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/concorde-charisma-910-li-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: null, // no publicado por layout en concorde.eu; rango oficial de la gama: 8,77–9,27 m
    anchoMm: 2400, // 2,40 m (documentación de la gama)
    altoMm: null, // no publicado
    pesoKg: null,
    mmaKg: 7490, // 7.490 kg (gama Charisma, concesionario oficial)
    carnetNecesario: "C1",
    cargaUtilKg: null, // no publicada por la marca
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // homologación CL-Lounge de 4 plazas (listados de la gama)
    plazasDormir: 4, // camas gemelas + cama abatible delantera opcional
    parNm: 470, // Iveco Daily C21 3.0 (listados técnicos)
    traccion: "trasera", // Iveco Daily: propulsión trasera
    emisionesCo2: null,
    aprox: ["precioDesde"],
    notas:
      "Datos de la página oficial de la gama Charisma (concorde.eu), del concesionario oficial " +
      "Schaffer-Mobil y de las fichas técnicas del chasis publicadas en listados de la gama, verificados " +
      "el 19/10/2026. Sustitución documentada: el 'Charisma 890 M' asignado es un layout de la generación " +
      "anterior (Charisma III) que ya no figura en la gama oficial actual (910 LI, 910 LSI, 915 LSI, 920 G); " +
      "se sustituye por el Charisma 910 LI, vigente y documentado. Chasis Iveco Daily 70C: motor C21 3.0 de " +
      "152 kW (207 CV) y 470 Nm, cambio automático ZF de 8 relaciones, MMA 7.490 kg. Concorde no publica " +
      "precios (el PVP aplicado, 308.450 €, es el del Listino Prezzi oficial Concorde 2026 para Italia); la longitud exacta del layout 910 LI no se publica en la web oficial " +
      "no hay tarifa oficial para España." +
      "emisiones. Carnet C1 obligatorio.",
    curiosidades:
      "El Charisma lleva de serie suelo radiante en dos zonas independientes: el salón y el baño se calientan " +
      "por separado con dos circuitos de agua caliente, para tener los pies calientes en el baño sin achicharrar " +
      "el salón. Fuente: https://www.concorde.eu/en/models/charisma/",
    descripcion: `El Concorde Charisma 910 LI es el clásico entre los yates terrestres: la gama con la que la
manufactura de Schlüsselfeld-Aschbach lleva décadas definiendo lo que significa viajar en una integral
de lujo de verdad. El layout 910 LI —unos 9,1 metros sobre chasis Iveco Daily 70C— combina el salón
delantero con camas gemelas traseras y el baño de ancho completo que es seña de identidad de la casa.
Con 7.490 kg de MMA exige el carnet C1, y Concorde publica su tarifa en el Listino Prezzi oficial para Italia (el Charisma 910 LI parte de 308.450 €): cada unidad se
configura a medida y un Charisma equipado se mueve
habitualmente muy por encima de los 400.000 euros.

La base es el Iveco Daily 70C con el motor C21 de 3,0 litros, 152 kW (207 CV) y 470 Nm, unido al
cambio automático ZF de 8 relaciones con convertidor de par. El paquete de chasis incluye bloqueo de
diferencial en el eje trasero, paquete de suspensiones Concorde para ambos ejes, suspensión neumática
de 4 canales con función de autonivelación, ESP con ABS, ASR y Hillholder, y llantas de 16 pulgadas
con vías ensanchadas. Es un camión ligero vestido de salón, y se nota en la aplomo con el que mueve
sus siete toneladas y media.

La célula es donde Concorde justifica su fama: paredes con 38 mm de aislamiento XPS de serie y 70 mm
en el suelo, calefacción central de agua caliente Alde de serie en todos sus yates terrestres —sin
turbulencias de polvo, con humedad natural conservada—, y el suelo radiante en dos zonas
independientes para salón y baño. El baño ocupa todo el ancho del vehículo, con encimera de
composite mineral blanco con lavabo moldeado integrado, ducha separada con puerta de cristal real,
inodoro de porcelana y toallero calefactado. La cocina es un "estudio" con armarios boticario, placa
de gas de dos fuegos combinada con inducción, grifo gastro y detalles como el elevador para la
cafetera o la regleta de enchufes escamoteable. El dormitorio monta el sistema de descanso Concorde
con colchón deluxe y somier estable, y en opción hay cama abatible eléctrica sobre el salón.

El puesto de conducción es ergonómico y está pensado para el uso diario: volante multifunción
extraíble para ganar espacio habitable, asientos de cabina con suspensión neumática, climatización y
calefacción, parabrisas panorámico laminado calefactado con filtro UV, y el paquete de confort y
seguridad con control de crucero adaptativo con función de atasco, asistente de frenada de
emergencia, mantenimiento activo de carril y sensor de lluvia y luz. El sistema BirdView opcional da
vista de pájaro para maniobrar nueve metros de vehículo. Quien quiera ir más allá tiene los
paquetes de la casa: el Centurion Style, disponible para todas las integrales de la marca, con
estética exterior Centurion, muebles en acabado Noce, cristales tintados, estores de madera en el
salón e iluminación LED ambiental; y las series especiales como la EDITION 70 Shadow Line, que
añade faros LED Shadow Line con luz de curva, ensanche de vías, volante multifunción de cuero,
tapicería Vanilla y colchón EDITION 70 de espuma fría de 9 zonas con funda Comfy-Cool. Son paquetes
que en los listados de unidades nuevas se traducen en decenas de miles de euros, pero también en un
valor de reventa muy sólido: un Charisma de ocasión con pocos años mantiene precios altos porque la
demanda de liners alemanes de este nivel supera con creces la oferta. La red de servicio incluye
fábrica en Schlüsselfeld-Aschbach con visitas guiadas, portal de propietarios y servicio de
emergencia en alemán e inglés, un respaldo que en este segmento pesa tanto como el propio vehículo.

Cómo lo verificamos: el equipamiento, la calefacción Alde, el suelo radiante bizona y el baño de
ancho completo proceden de la página oficial de la gama Charisma en concorde.eu, consultada el
19/10/2026; el rango de longitudes (8,77–9,27 m), la MMA de 7.490 kg y las plazas, del concesionario
oficial Schaffer-Mobil; el chasis y el motor, de las fichas técnicas publicadas en los listados de
la gama. El "890 M" asignado no existe en la gama actual, por lo que se sustituyó por el 910 LI. La
longitud exacta del layout, la altura, la carga útil, el consumo y el precio quedan sin dato por no
estar publicados.

Para quién es: para quien busca el máximo nivel de acabado y personalización en una integral y
tiene tanto el carnet C1 como el presupuesto para moverse en el medio millón de euros. Encaja si
viajas en pareja durante meses, valoras la calefacción por agua caliente, el silencio de rodadura y
los materiales nobles, y quieres un vehículo para diez o quince años. No encaja si tu límite es el
carnet B, si te asusta maniobrar 9 metros y 2,40 de ancho por carreteras secundarias, o si esperas
una tarifa cerrada en la web: aquí todo pasa por el concesionario y la factura final depende de la
configuración.`,
    pros: [
      "Acabado de referencia: Alde de serie, suelo radiante bizona, baño de ancho completo",
      "Chasis Iveco Daily 70C con 207 CV, ZF de 8v, bloqueo de diferencial y neumática autonivelante",
      "Aislamiento serio: 38 mm de XPS en paredes y 70 mm en suelo",
      "Personalización extrema: tres líneas de mobiliario, versiones bar y lounge, paquetes Edition 70",
      "Seguridad: crucero adaptativo, frenada de emergencia, mantenimiento de carril, BirdView opcional",
    ],
    contras: [
      "Sin precio público: todo se cotiza en concesionario y supera con holgura los 400.000 € equipado",
      "Obliga al carnet C1 y a asumir costes de camión ligero (neumáticos, seguro, revisiones)",
      "9 metros de eslora: aparcar y maniobrar exige experiencia y planificación",
      "Concorde no publica longitud exacta por layout, altura ni carga útil en su web",
      "El peso de tanto equipamiento deja la carga útil real en manos de la configuración elegida",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/concorde-charisma-910-li-2026-precio-ficha-tecnica-oficial.webp", alt: "Concorde Charisma 910 LI, vista exterior", ancho: 1600, alto: 900 },
      { src: "/media/concorde-charisma-910-li-2026-precio-ficha-tecnica-interior1.webp", alt: "Concorde Charisma 910 LI, salón interior", ancho: 1600, alto: 900 },
      { src: "/media/concorde-charisma-910-li-2026-precio-ficha-tecnica-interior2.webp", alt: "Concorde Charisma 910 LI, cocina", ancho: 1600, alto: 900 },
      { src: "/media/concorde-charisma-910-li-2026-precio-ficha-tecnica-detalle.webp", alt: "Concorde Charisma 910 LI, dormitorio", ancho: 1600, alto: 900 },
    ],
    analisisSlug: "concorde-charisma-910-li-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Iveco Daily 70C: revisión anual o cada 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Iveco Daily 3.0)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 500 },
        { nombre: "Revisión célula Concorde (anual recomendada)", queSeCambia: "Estanqueidad, Alde, gas, electricidad, humedades", costeAproxEur: 400 },
      ],
    },
  },
];
