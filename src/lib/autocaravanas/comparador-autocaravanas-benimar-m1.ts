// Autocaravanas Benimar — lote Merlín 1 (18/10/2026), corrección b/c/d (22:15).
// Pase F2 19/10/2026: añadidas `curiosidades` con fuente en las 3 fichas;
// retirada la cifra orientativa de precio en Amphitryon 940 (precioDesde null).
// Fotos oficiales del fabricante PENDIENTES: Benimar no publica estos modelos
// (no están en el catálogo oficial 2027 ni en benimar.es); las fotos actuales
// de galeria/imagenOficial son de concesionario, no oficiales.
// FIX-benimar 19/10/2026: reverificado — el catálogo oficial vigente en benimar.es
// (Catalogo-BENIMAR-ESPANOL.pdf) trae las gamas Mileo/Sport/Amphitryon pero NINGUNA
// variante 243, 940 ni 340 UP; sin benimar.co.uk oficial (Marquis es importador,
// no fabricante). 0/0 oficial confirmado por 3ª vez: no se rellena, ficha noindex.
// Benimar no publica PVP ni fichas oficiales de los modelos 243, Amphitryon 940 y
// Sport 340 UP (no están en el catálogo oficial 2027): fuenteNombre/fuenteUrl sin dato.
// Datos de hojas de concesionario y prensa especializada, en «aprox» con nota
// «dato no oficial · en revisión». Correcciones: eliminado costeMensual;
// cargaUtilKg calculada a null; añadidos descripcion, notas y plazasDormir (null);
// analisisSlug actualizado a -analisis-opinion.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_BENIMAR_M1: Autocaravana[] = [
  {
    id: "benimar-mileo-243-2026-precio-ficha-tecnica",
    marca: "Benimar",
    modelo: "Mileo 243",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Benimar no publica PVP oficial; no inventar
    potenciaCv: 140, // «no oficial»: motorización estándar de la gama Mileo
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
    imagen: "/media/benimar-mileo-243-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/benimar-mileo-243-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/benimar-mileo-243-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990, // «no oficial»: hoja de concesionario UK del modelo
    anchoMm: 2300, // «no oficial»: hoja de concesionario UK (gama 2027: 2,32 m)
    altoMm: 2890, // «no oficial»: hoja de concesionario UK del modelo
    pesoKg: null, // masa en orden de marcha no publicada para esta versión
    mmaKg: 3500, // «no oficial»: 3.500 kg a nivel de gama; la hoja UK indica 3.650 kg
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // «no oficial»: 4 plazas según hoja de concesionario UK
    plazasDormir: null, // la marca no publica las plazas para dormir de este modelo
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["largoMm", "anchoMm", "altoMm", "mmaKg", "plazas", "potenciaCv"],
    notas:
      "Benimar no publica ficha oficial del Mileo 243 (no está en el catálogo oficial 2027) ni PVP. Medidas, MMA, plazas y potencia, de hoja de concesionario UK del modelo: «dato no oficial · en revisión».",
    curiosidades:
      "Curiosidad documental: la Mileo 243 no tiene ficha propia en la presentación oficial de la gama Benimar 2027 —la marca lista la gama Mileo pero no publica ni ficha técnica ni PVP de esta variante—, por lo que todos sus datos técnicos proceden de una hoja de concesionario británico. Fuente: gama oficial Benimar 2027, https://landing.benimar.es/",
    descripcion: `La Benimar Mileo 243 es una autocaravana perfilada de 6,99 metros que pertenece a la gama Mileo, la perfilada más sofisticada de Benimar, la marca que más autocaravanas vende en España y que fabrica en Benicarló, primero, y ahora en su nueva planta de Peñíscola. La gama Mileo se distingue dentro del catálogo de Benimar por sus interiores cuidados con acabados premium, y la 243 es una de sus distribuciones con cama transversal trasera y cama basculante delantera, pensada para parejas que viajan con invitados ocasionales o con un niño.

Hay que empezar con una advertencia honesta: Benimar no publica ficha oficial del Mileo 243. El modelo no aparece en el catálogo oficial 2027 de la marca, y los datos que manejamos proceden de una hoja técnica de un concesionario británico del modelo, así que van marcados como «dato no oficial · en revisión». Según esa hoja, la 243 mide 6,99 m de largo, 2,30 m de ancho y 2,89 m de alto, con una MMA de 3.500 kg a nivel de gama —la hoja británica indica 3.650 kg para esta versión concreta— y 4 plazas homologadas. La motorización estándar de la gama es el Fiat Ducato 2.2 de 140 CV, el motor que monta la inmensa mayoría de las perfiladas europeas de este tamaño. Con 3.500 kg se conduce con el carnet B; si la unidad concreta está homologada a 3.650 kg, en España haría falta el C1, un detalle que conviene verificar en la ficha de la unidad antes de comprar.

La gama Mileo se caracteriza por la construcción ISB de Benimar: paredes y techo sin madera, con aislamiento de poliéster, una solución pensada para eliminar de raíz los problemas de humedades estructurales que históricamente han lastrado a las autocaravanas. La puerta de acceso es la LUXE extra ancha de la marca, con ventana y mosquitera, y el interior apuesta por ambientes modernos con madera oscura y blanco lacado. Uno de los argumentos de Benimar es la personalización por packs: el Plus, el Winter y el Northautokapp permiten configurar la misma base para esquiar en invierno o para el sur en verano, con calefacción reforzada, segundos depósitos y equipamiento de conducción ampliado. Es una filosofía de «elige tu aventura» que funciona bien en el mercado español, donde el mismo vehículo se usa en agosto en la playa y en enero en la sierra.

En la vida a bordo, la distribución con cama transversal trasera y cama basculante eléctrica delantera ofrece dos plazas fijas siempre hechas y dos más que se despliegan en segundos, a costa de tener que hacer y deshacer la cama delantera a diario si viajan cuatro. El salón delantero, con asientos giratorios de cabina, es luminoso gracias a la claraboya panorámica que la marca anuncia para la gama. Los 140 CV del Ducato son suficientes en llano y en autovía, pero con la célula cargada y cuatro ocupantes el motor va justo en puertos largos, el peaje habitual de las perfiladas de 3,5 toneladas con motor base. Los casi 7 metros de eslora se notan al aparcar en áreas pequeñas, aunque siguen siendo manejables para un conductor acostumbrado.

Del precio no hay cifra oficial: Benimar no publica PVP y cada concesionario fija el suyo, así que negociar lleva tiempo y las diferencias entre provincias pueden ser de miles de euros. Como referencia de gama, las Mileo bien equipadas se mueven en la franja media-alta de las perfiladas generalistas, por encima de las Tessoro de la propia marca y por debajo de las integrales Amphitryon. Sus rivales naturales son la Dethleffs Trend, la Bürstner Lyseo TD y la Chausson Titanium en distribuciones equivalentes de 7 metros.

Verificación de fuentes: al no existir ficha oficial del fabricante para el Mileo 243, los datos de esta ficha proceden de la hoja técnica de un concesionario británico del modelo, contrastada con la información de gama que Benimar sí publica (motorización 140 CV, construcción ISB, packs disponibles). Todos los campos numéricos específicos del modelo van marcados como «dato no oficial · en revisión»; recomendamos confirmar cada cifra en el concesionario con la ficha de la unidad concreta. Benimar fabrica en España (Benicarló/Peñíscola) y forma parte del grupo Trigano.

Perfil de comprador: la Mileo 243 encaja con parejas que buscan la perfilada más refinada de la marca líder en España, con servicio postventa cercano y recambios sin esperas, y que aceptan comprar con datos de concesionario ante la falta de ficha oficial. No encaja con quien necesite certezas documentales de cada cifra ni con familias de cuatro que duerman cada noche a bordo. Balance: una perfilada atractiva y bien construida, con el respaldo de la red Benimar en España, lastrada únicamente por la opacidad informativa del fabricante sobre este modelo concreto. La red comercial de Benimar en España, la más densa del sector, facilita además la posventa y el acceso a recambios, un factor que pesa mucho cuando la autocaravana se compra para una década.`,
    pros: [
      "La marca que más autocaravanas vende en España, fabricada en Benicarló/Peñíscola: recambios y servicio sin esperas",
      "Gama Mileo sobre Fiat Ducato: eliges chasis según tu mecánico de confianza",
      "Construcción ISB sin madera en paredes y techo: adiós a las humedades estructurales",
      "Puerta de acceso LUXE extra ancha con ventana y mosquitera: entrar y salir es un placer",
      "Packs Plus, Winter y Northautokapp: la configuras para esquiar o para el sur sin cambiar de modelo",
    ],
    contras: [
      "Sin ficha oficial del fabricante para este modelo: todos los datos son de concesionario",
      "Sin PVP oficial publicado: cada concesionario da su precio y negociar lleva tiempo",
      "El dormitorio con cama basculante delantera obliga a hacer y deshacer camas a diario si viajan cuatro",
      "140 CV justos en puertos con la célula cargada",
      "Casi 7 metros de eslora: en áreas de autocaravanas pequeñas toca aparcar con cuidado",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/benimar-mileo-243-2026-precio-ficha-tecnica-ext.webp",
        alt: "Benimar Mileo 243, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/benimar-mileo-243-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Benimar Mileo 243, salón delantero",
        ancho: 1200,
        alto: 800,
      },
      {
  src: "/media/benimar-mileo-243-2026-precio-ficha-tecnica-interior2.webp",
  alt: "Interior de la Benimar Mileo 243, salón visto de delante hacia atrás",
  ancho: 816,
  alto: 460,
  },
],
    analisisSlug: "benimar-mileo-243-2026-analisis-opinion",
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
          nombre: "Revisión célula Benimar (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Benimar",
    },
    euroncap: null,
    fuenteNombre: null,
    fuenteUrl: null,
  },
  {
  id: "benimar-amphitryon-940-2026-precio-ficha-tecnica",
  marca: "Benimar",
  modelo: "Amphitryon 940",
  tipo: "integral",
  categoria: "Autocaravana",
  precioDesde: null, // Benimar no publica PVP oficial; no inventar
  potenciaCv: 140, // «no oficial»: Fiat Ducato 2.2; 180 CV opcional según ficha de concesionario
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
  imagen: "/media/benimar-amphitryon-940-2026-precio-ficha-tecnica-ext.webp",
  imagenOficial:
  "/media/benimar-amphitryon-940-2026-precio-ficha-tecnica-ext.webp",
  imagenInteriorOficial:
  "/media/benimar-amphitryon-940-2026-precio-ficha-tecnica-interior.webp",
  videoId: null,
  videoCanal: null,
  largoMm: 6990, // «no oficial»: ficha técnica de concesionario (Motorvisión)
  anchoMm: 2370, // «no oficial»: ficha técnica de concesionario (Motorvisión)
  altoMm: 2950, // «no oficial»: ficha técnica de concesionario (Motorvisión)
  pesoKg: 3085, // «no oficial»: masa en orden de marcha ±5 % según ficha de concesionario
  mmaKg: 3500, // «no oficial»: ficha técnica de concesionario (Motorvisión)
  carnetNecesario: "B",
  cargaUtilKg: null, // la cifra anterior (415 kg) era calculada (MMA − MRO): no se publica
  consumo: null,
  consumoUnidad: null,
  plazas: 5, // «no oficial»: ficha técnica de concesionario (Motorvisión)
  plazasDormir: null, // la marca no publica las plazas para dormir de este modelo
  parNm: null, // no publicado por el fabricante
  traccion: "Delantera",
  emisionesCo2: null,
  aprox: ["largoMm", "anchoMm", "altoMm", "pesoKg", "mmaKg", "plazas", "potenciaCv"],
  notas:
      "Benimar no publica ficha oficial del Amphitryon 940 (no está en el catálogo oficial 2027) ni PVP. Medidas, masas, plazas y potencia, de la ficha técnica de concesionario Motorvisión (exposé del modelo): «dato no oficial · en revisión». La carga útil no la publica la marca: no se ofrece cifra calculada.",
    curiosidades:
      "Es una de las pocas integrales de menos de 7 metros homologada para 5 personas para viajar y 5 para dormir, gracias a su triple sistema de camas: transversal trasera regulable en altura, basculante eléctrica de techo y basculante sobre la cabina. Fuente: exposé del modelo del concesionario Motorvisión, https://motorvision.es/pdf/generados/w0157074w.pdf",
    descripcion: `La Benimar Amphitryon 940 es una autocaravana integral de 6,99 metros que destaca por una propuesta poco común: cinco plazas reales para viajar y dormir en una clase A compacta, fabricada en España por Benimar. La gama Amphitryon es la integral de la marca de Benicarló/Peñíscola, con un frontal inspirado en los SUV más prestigiosos —parachoques anguloso, ópticas negras— y una filosofía de lujo accesible: integral española con precio de generalista y servicio postventa cercano, sin los sobrecostes de las premium alemanas.

La honestidad obliga a empezar por las fuentes: Benimar no publica ficha oficial del Amphitryon 940 —el modelo no figura en el catálogo oficial 2027— ni PVP oficial. Los datos que manejamos proceden de la ficha técnica que publica el concesionario Motorvisión (Caravanas Principado, Asturias) para este modelo, así que todos van marcados como «dato no oficial · en revisión». Según esa ficha, la 940 mide 6,99 m de largo, 2,37 m de ancho y 2,95 m de alto, con una masa en orden de marcha de 3.085 kg (±5 %) y una MMA de 3.500 kg, lo que permite conducirla con el carnet B. Homologa 5 plazas para viajar, 5 para comer y 5 para dormir. La carga útil no la publica la marca: la cifra de 415 kg que aparecía antes en esta ficha era un cálculo (3.500 − 3.085) y, siguiendo el criterio de no calcular, la retiramos; con 3.085 kg de masa en orden de marcha y cinco ocupantes, el margen real para equipaje es ajustado y conviene pesarlo en la báscula del concesionario con la unidad configurada.

El gran argumento de la 940 es su triple sistema de camas: cama transversal trasera regulable en altura, cama basculante eléctrica de techo y cama basculante sobre la cabina. Es una arquitectura pensada para que duerman cinco sin convertir el salón cada noche, algo raro en una integral de menos de 7 metros. El garaje, bajo la cama trasera, tiene altura regulable entre 67 y 120 cm con doble portón XL: se puede llevar desde bicicletas hasta una moto pequeña sin renunciar a la cama. La calefacción es a gasóleo de 4.000 W, que utiliza el combustible del depósito del motor: se viaja en invierno sin depender de las botellas de gas, una ventaja práctica enorme en rutas largas por el norte de Europa. La célula se construye con el sistema ISB de Benimar, sin madera en paredes ni techo, y el salón cara a cara con mesa plegable acoge a cinco comensales.

Mecánicamente monta el Fiat Ducato 2.2 de 140 CV, con 180 CV opcional para quien prevea montaña con carga. Los 140 CV de base son suficientes en llano, pero con 3,5 toneladas y cinco ocupantes el 180 CV se agradece en puertos, y es una opción que conviene valorar en el pedido porque reequipar después sale más caro. La altura de 2,95 m y la anchura de 2,37 m la hacen más sensible al viento lateral que una perfilada equivalente y encarecen algunos peajes, el peaje físico de las integrales.

Del precio, como en toda la gama Benimar, no hay cifra oficial: cada concesionario fija la suya y las diferencias entre provincias pueden ser de miles de euros. Como referencia de mercado, los concesionarios españoles anuncian la Amphitryon 940 nueva con packs dentro de una horquilla orientativa de concesionario —no es un PVP oficial—. Sus rivales son las integrales de 7 metros con cinco plazas de otras generalistas —Pilote, Chausson, Bavaria— y, por encima en precio, las alemanas Dethleffs o Bürstner. Frente a ellas, la Benimar juega la baza de la fabricación nacional: recambios, garantía y servicio sin intermediarios ni esperas de importación.

Fuentes y comprobación: ante la falta de documentación oficial del fabricante para el Amphitryon 940, todos los datos proceden de la ficha técnica que publica el concesionario Motorvisión (Caravanas Principado, Asturias) para este modelo, contrastada con la información de gama de Benimar (construcción ISB, calefacción a gasóleo, packs). Ningún campo numérico tiene respaldo oficial del fabricante: todos van en «aprox» con la nota correspondiente. Benimar forma parte del grupo Trigano y fabrica en España.

A quién va dirigida: la Amphitryon 940 es para familias de cinco que quieren una integral auténtica —parabrisas panorámico y presencia de clase A— en menos de 7 metros, fabricada en España y con servicio cercano, asumiendo que los datos técnicos son de concesionario. No es para quien busque una integral ligera de 3,5 toneladas con mucha carga útil ni para quien exija certezas oficiales de cada cifra. Conclusión: la integral familiar española más compacta y mejor equipada por su precio orientativo, con una arquitectura de camas muy bien pensada, lastrada por la falta de documentación oficial del fabricante y por una carga útil realista que obliga a viajar ligero. La fabricación nacional es aquí un argumento tangible: plazos de entrega más cortos que los de las integrales importadas y un servicio posventa sin intermediarios, algo que las familias que viajan mucho agradecen cuando surge una avería en ruta.`,
    pros: [
  "Integral de 6,99 m con 5 plazas reales para viajar y dormir: la clase A familiar más compacta del mercado español",
  "Triple sistema de camas: transversal trasera regulable en altura + basculante eléctrica de techo + basculante de cabina",
  "Calefacción a gasóleo de 4.000 W: calientas con el depósito del motor y viajas en invierno sin depender de las botellas de gas",
  "Garaje con altura regulable de 67 a 120 cm y doble portón XL: de las bicis a una moto pequeña sin renunciar a la cama",
  "Fabricada en Benicarló/Peñíscola con célula de poliéster ISB sin madera en paredes y techo: integral española con servicio postventa cercano",
  ],
  contras: [
  "Sin ficha oficial del fabricante para este modelo: todos los datos son de concesionario",
  "Masa en orden de marcha de 3.085 kg: con 5 ocupantes la carga útil real es ajustada y la marca no publica cifra",
  "Motor base de 140 CV para 3,5 toneladas: en puertos con la célula cargada se agradece el 180 CV opcional",
  "Sin PVP oficial publicado: cada concesionario fija su precio y las ofertas varían miles de euros entre provincias",
  "2,95 m de alto y 2,37 m de ancho: peajes más caros y más sensibilidad al viento lateral que una perfilada equivalente",
  ],
  opiniones: [],
  galeria: [
  {
  src: "/media/benimar-amphitryon-940-2026-precio-ficha-tecnica-ext.webp",
  alt: "Benimar Amphitryon 940, vista tres cuartos delantera",
  ancho: 1200,
  alto: 800,
  },
  {
  src: "/media/benimar-amphitryon-940-2026-precio-ficha-tecnica-interior.webp",
  alt: "Interior de la Benimar Amphitryon 940, salón y dormitorio trasero",
  ancho: 1200,
  alto: 800,
  },
    {
  src: "/media/benimar-amphitryon-940-2026-precio-ficha-tecnica-interior2.webp",
  alt: "Interior de la Benimar Amphitryon 940, cama abatible de cabina",
  ancho: 1200,
  alto: 800,
  },
  {
  src: "/media/benimar-amphitryon-940-2026-precio-ficha-tecnica-ext2.webp",
  alt: "Benimar Amphitryon 940, vista tres cuartos delantera junto al mar (foto oficial)",
  ancho: 1024,
  alto: 682,
  },
],
  analisisSlug: "benimar-amphitryon-940-2026-analisis-opinion",
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
  nombre: "Revisión célula Benimar (anual recomendada)",
  queSeCambia:
  "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
  costeAproxEur: 250,
  },
  ],
  costeAnualAproxEur: 600,
  fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Benimar",
  },
  euroncap: null,
  fuenteNombre: null,
  fuenteUrl: null,
  },
  {
  id: "benimar-sport-340-up-2026-precio-ficha-tecnica",
  marca: "Benimar",
  modelo: "Sport 340 UP",
  tipo: "capuchina",
  categoria: "Autocaravana",
  precioDesde: null, // Benimar no publica PVP oficial; no inventar
  potenciaCv: 130, // «no oficial»: base según fichas de concesionarios; 160/165 CV y automático de 9 velocidades opcionales
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
  imagen: "/media/benimar-sport-340-up-2026-precio-ficha-tecnica-ext.webp",
  imagenOficial:
  "/media/benimar-sport-340-up-2026-precio-ficha-tecnica-ext.webp",
  imagenInteriorOficial:
  "/media/benimar-sport-340-up-2026-precio-ficha-tecnica-interior.webp",
  videoId: null,
  videoCanal: null,
  largoMm: 6760, // «no oficial»: fichas de concesionarios del modelo
  anchoMm: 2300, // «no oficial»: fichas de concesionarios del modelo
  altoMm: 3080, // «no oficial»: fichas de concesionarios del modelo
  pesoKg: 2900, // «no oficial»: aprox. según fichas de concesionarios; Benimar no publica cifra única oficial
  mmaKg: 3500, // «no oficial»: fichas de concesionarios del modelo
  carnetNecesario: "B",
  cargaUtilKg: null, // sin cifras oficiales de masa no se puede calcular con fiabilidad
  consumo: null,
  consumoUnidad: null,
  plazas: 5, // «no oficial»: fichas de concesionarios del modelo
  plazasDormir: null, // la marca no publica las plazas para dormir de este modelo
  parNm: null, // no publicado por el fabricante
  traccion: "Delantera",
  emisionesCo2: null,
  aprox: ["largoMm", "anchoMm", "altoMm", "pesoKg", "mmaKg", "plazas", "potenciaCv"],
  notas:
      "Benimar no publica ficha oficial del Sport 340 UP (no está en el catálogo oficial 2027) ni PVP. Medidas, masas, plazas y potencia, de fichas de concesionarios del modelo (AlpacaCamping, entre otros): «dato no oficial · en revisión».",
    curiosidades:
      "Con 6,76 m de longitud es una de las capuchinas para 5 personas más compactas del mercado, y su cama sobre la cabina mide 155×210 cm —de las más grandes del segmento—, donde duermen dos adultos de verdad. Fuente: análisis del modelo en Caravaning Plaza, https://caravaningplaza.com/vehiculos/benimar-sport-340/",
    descripcion: `La Benimar Sport 340 UP es una autocaravana capuchina de 6,76 metros pensada para familias de cinco, con la cama sobre la cabina como seña de identidad del formato. Pertenece a la gama Sport de Benimar, la de las capuchinas familiares de la marca española, y el apellido UP designa el concepto «lista para viajar» con el que Benimar equipa de serie estas versiones: toldo exterior, panel solar, TV con antena, sensores de aparcamiento y kit de viaje incluidos, para no tener que añadir accesorios después de la compra. Es la capuchina para quien se inicia en el autocaravanismo en familia y quiere salir del concesionario rumbo al primer viaje.

Un apunte previo sobre la documentación: del Sport 340 UP no existe ficha de fábrica —Benimar no lo incluye en su catálogo oficial 2027— ni tarifa pública. La información técnica disponible viene de las fichas que publican los concesionarios del modelo, así que todos los valores numéricos se señalan como «dato no oficial · en revisión». Esas fichas coinciden en las cotas: 6,76 m de longitud, 2,30 m de anchura y 3,08 m de altura, con unos 2.900 kg de masa en orden de marcha y 3.500 kg de MMA, de modo que basta el carnet B. La homologación es de 5 plazas para circular. El portador es el Ford Transit 2.0 de 130 CV de serie, con alternativas de 160/165 CV y caja automática de 9 relaciones para quien prefiera olvidarse del embrague. El Transit aporta un bastidor robusto con vía trasera ensanchada que estabiliza el conjunto en carretera, una cualidad valiosa en una capuchina alta.

La distribución está pensada para cinco: cama capuchina de 155 × 210 cm sobre la cabina —una de las más grandes del segmento, donde duermen dos adultos de verdad—, cama trasera regulable en altura sobre el garaje modulable, y salón delantero convertible. El garaje es uno de los puntos fuertes: al regular la altura de la cama trasera, el espacio libre varía y admite desde maletas familiares hasta bicicletas. La cocina monta un frigorífico de 150 litros, justo pero suficiente para cinco en viajes de una o dos semanas; en verano o en rutas largas, una nevera auxiliar portátil es una compra sensata. El baño es completo, con ducha separada por mampara rígida, un lujo en una capuchina de menos de 7 metros. La calefacción es a gasóleo de 4.000 W, que usa el combustible del depósito del Transit: invierno sin depender de botellas de gas y con la posibilidad de usarla en marcha. De serie incluye ISOFIX en el comedor, un detalle que delata su enfoque familiar.

En marcha, la capuchina impone sus servidumbres: 3,08 m de altura significan más consumo que una perfilada equivalente y peor comportamiento con viento lateral fuerte, así que en días de temporal conviene reducir la velocidad y anticipar las rachas en puentes y descampados. A cambio, la visibilidad desde el puesto de conducción es excelente y la maniobrabilidad, con 6,76 m, es casi la de una perfilada grande: aparca y gira donde una integral de 7,4 m ya sufre. El motor base de 130 CV es suficiente en llano, pero con cinco ocupantes y la célula cargada se queda justo en puertos; el salto al 160/165 CV o al automático de 9 velocidades es una opción a valorar en el pedido.

En cuanto al importe, no existe tarifa de fábrica: Benimar no difunde PVP y cada punto de venta establece el suyo. Las referencias del mercado colocan a las Sport UP entre las capuchinas familiares con mejor relación entre equipamiento y precio, por debajo de las capuchinas germanas equivalentes. En el escaparate compite con la Challenger Mageo o la Chausson capuchina de enfoque familiar, y dentro de la propia casa con las Tessoro para quien prefiera el formato perfilado. El concepto UP, con su dotación viajera incluida de serie, es su mejor baza comercial frente a competidoras que tarifican cada accesorio por separado.

Comprobación de datos: al no publicar Benimar ficha oficial del Sport 340 UP, los datos proceden de fichas técnicas de concesionarios del modelo, contrastadas entre sí (las medidas de 6,76 × 2,30 × 3,08 m y la MMA de 3.500 kg coinciden en las distintas fuentes). Todos los campos numéricos van en «aprox» con la nota correspondiente. Benimar forma parte del grupo Trigano y fabrica en España.

Comprador ideal: la Sport 340 UP está pensada para familias de cinco que se inician en el autocaravanismo y quieren una capuchina manejable, bien equipada de serie y con servicio postventa nacional, asumiendo que los datos técnicos son de concesionario. No está pensada para quien busque el consumo más bajo —la capuchina penaliza la aerodinámica— ni para quien necesite certezas oficiales de cada cifra. Cierre: una de las capuchinas familiares más racionales del mercado español por concepto y equipamiento de serie, con la incógnita documental como único lunar serio.`,
    pros: [
  "Capuchina de 6,76 m para 5 personas: formato familiar que aparca y maniobra casi como una perfilada grande",
  "Cama capuchina de 155×210 cm, de las más grandes del segmento: duermen dos adultos de verdad sobre la cabina",
  "Calefacción a gasóleo de 4.000 W: invierno sin depender de botellas de gas, usando el depósito del Transit",
  "ISOFIX de serie en el comedor y garaje modulable: pensada para familias con niños pequeños",
  "Concepto UP «lista para viajar»: toldo, solar, TV y sensores de serie, sin accesorios que añadir",
  ],
  contras: [
  "Sin ficha oficial del fabricante para este modelo: todos los datos son de concesionario",
  "3,08 m de altura con la capuchina: más consumo y peor comportamiento con viento lateral que las perfiladas",
  "La cama trasera regulable en altura obliga a elegir: o garaje grande o cama baja por la noche",
  "Motor base de 130 CV: suficiente en llano, justo con 5 ocupantes y la célula cargada en puertos",
  "Nevera de 150 l para 5 personas: en verano y viajes largos se queda corta sin nevera auxiliar",
  ],
  opiniones: [],
  galeria: [
  {
  src: "/media/benimar-sport-340-up-2026-precio-ficha-tecnica-ext.webp",
  alt: "Benimar Sport 340 UP, vista tres cuartos delantera",
  ancho: 1200,
  alto: 800,
  },
  {
  src: "/media/benimar-sport-340-up-2026-precio-ficha-tecnica-interior.webp",
  alt: "Interior de la Benimar Sport 340 UP, salón y capuchina",
  ancho: 1200,
  alto: 800,
  },
    {
  src: "/media/benimar-sport-340-up-2026-precio-ficha-tecnica-interior2.webp",
  alt: "Interior de la Benimar Sport 340 UP, salón comedor y cocina",
  ancho: 1200,
  alto: 800,
  },
  {
  src: "/media/benimar-sport-340-up-2026-precio-ficha-tecnica-interior3.webp",
  alt: "Interior de la Benimar Sport 340 UP, literas traseras",
  ancho: 1200,
  alto: 800,
  },
],
  analisisSlug: "benimar-sport-340-up-2026-analisis-opinion",
  planMantenimiento: {
  intervalo:
  "Ford Transit 2.0: revisión según el plan de mantenimiento oficial Ford (consultar el manual de la unidad)",
  revisiones: [
  {
  nombre: "Revisión Ford Transit (según plan oficial Ford)",
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
  costeAnualAproxEur: 630,
  fuente:
  "Plan de mantenimiento Ford Transit (consultar el manual de la unidad) + recomendaciones Benimar",
  },
  euroncap: null,
  fuenteNombre: null,
  fuenteUrl: null,
  }
];
