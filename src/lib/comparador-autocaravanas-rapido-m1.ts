// Autocaravanas Rapido — lote Merlín 1 (18/10/2026). Corrección (b)(c)(d) 22:15 — textos lote 3.
// V55: ficha FUERA del primer lote (orden Grok): solo cambios mecánicos (puntos 2, 5, 6), sin
// descripcion. La web oficial solo confirma la pertenencia a la serie especial OPTIMUM LINE y el
// sistema MODUL'SPACE®; NO publica ficha técnica del V55: todos los datos numéricos «no oficial»
// en "aprox" (fuente: fichas coincidentes de concesionarios FR).
// 606F: ficha oficial del modelo + guide technique de la colección 2026 (perfilada Serie 6F,
// «4 couchages» oficial, 6,69 m, PTAC 3,5/3,65 T, carga útil oficial 520 kg, Peugeot Boxer 2,2
// 140 CV, cama de techo eléctrica, Truma Combi 4 diésel). Rapido NO publica precios por modelo
// en su web pública: sin precio oficial publicado (no inventar).
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_RAPIDO_M1: Autocaravana[] = [
  {
    id: "rapido-606f-2026-precio-ficha-tecnica",
    marca: "Rapido",
    modelo: "606F",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Rapido no publica ningún precio por modelo; solo franjas orientativas genéricas por tipo
    potenciaCv: 140,
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
    imagen: "/media/rapido-606f-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/rapido-606f-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/rapido-606f-2026-precio-ficha-tecnica-oficial-interior.webp", // foto oficial Rapido (visita virtual 360 del fabricante)
    videoId: null,
    videoCanal: null,
    largoMm: 6690,
    anchoMm: 2350, // 2.760 mm con retrovisores abiertos
    altoMm: 2900, // +45 mm con llantas de 16"
    pesoKg: 2980, // masa en orden de marcha según el guide technique oficial 2026
    mmaKg: 3500, // PTAC 3,65 T disponible; versión HEAVY de 4,25 T en opción (exige carnet C1)
    carnetNecesario: "B",
    cargaUtilKg: 520, // cifra oficial publicada por Rapido
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4, // oficial («4 couchages»): cama de techo + transformación del salón
    parNm: null, // no publicado por el fabricante
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["etiquetaDgt"],
    pros: [
      "Cama de techo eléctrica de serie (150/130x195 cm, somier de láminas y colchón Bultex®): 4 camas en 6,69 m sin robar ni un metro a la zona de día, porque no hay cama fija trasera",
      "Garaje transversal calefactado de 85x217x120 cm con acceso desde el interior y por ambos lados, más vestidor/dressing XXL en la trasera: dos bicis y el equipaje viajan sin tocar el salón",
      "Calefacción Truma Combi 4 diésel con mando CP Plus de serie: tira del depósito de gasóleo, así que el frío no depende de las dos bombonas de propano",
      "ADAS completo de serie en el portador: frenada de emergencia, mantenimiento de carril, detección de somnolencia, Traction+ con control de descenso y neumáticos all season 3PMSF",
      "Salón cara a cara abierto sin estrado, con mesa de pie telescópico eléctrico y techo panorámico Skyview con descongelación: la zona de día de una compacta con sensación de integral",
    ],
    contras: [
      "Sin cama fija: la segunda cama es la transformación del salón (115x208 cm), que hay que montar cada noche si viajan cuatro",
      "Rapido no publica el precio del 606F: la franja orientativa genérica de su web para perfiladas nuevas (75.000–95.000 € TTC) no es el precio de este modelo",
      "Carga útil de 520 kg con 2.980 kg en orden de marcha: con cuatro personas, 120 l de agua y el garaje lleno, el margen se agota rápido",
      "PTAC variable según versión (3,5 o 3,65 T; HEAVY de 4,25 T opcional que ya exige el C1): hay que confirmar el de la unidad concreta antes de firmar",
      "Discrepancia en la propia documentación oficial sobre el frigorífico (la ficha web dice compresión de 174 l, el guide technique 2026 dice absorción de 156 l): conviene confirmarlo con el concesionario",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/rapido-606f-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Rapido 606F, vista exterior tres cuartos (imagen oficial Rapido)",
        ancho: 1199,
        alto: 754,
      },
      {
        src: "/media/rapido-606f-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Interior del Rapido 606F, salón cara a cara (imagen oficial Rapido)",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/rapido-606f-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Cocina del Rapido 606F (imagen oficial Rapido)",
        ancho: 1200,
        alto: 800,
      },
    ],
    descripcion: "El Rapido 606F parte de una decisión valiente: renunciar a la cama fija trasera. En un mundo de perfiladas donde todas compiten por ver quién mete el dormitorio más grande detrás, Rapido ha dibujado una de 6,69 metros donde la noche se resuelve con una cama de techo eléctrica y la transformación del salón, y ha dedicado el espacio liberado a lo que de verdad se usa cada día: un salón cara a cara abierto y luminoso, un vestidor trasero de tamaño XXL y un garaje transversal calefactado. Es una apuesta por la vida diurna que merece entenderse antes de juzgarse. La ficha oficial de Rapido la presenta como «profilé 4 couchages», y el desglose es claro: la cama principal es la de techo, eléctrica, de 150/130 × 195 cm con somier de láminas y colchón Bultex, que baja sobre el salón por la noche y desaparece de día; la segunda es la dinette, de 115 × 208 cm, que hay que montar cada noche si viajan cuatro. Cuatro plazas para dormir oficiales, cuatro para viajar, y una zona de día que no está hipotecada por un dormitorio que solo se usa ocho horas. El garaje es uno de los puntos fuertes: transversal, calefactado, de 85 × 217 × 120 cm, con acceso desde el interior y por ambos laterales, más un dressing trasero XXL que hace las veces de vestidor. Dos bicis y el equipaje de cuatro viajan sin tocar el salón, que es exactamente lo que se le pide a una perfilada familiar. La calefacción es la Truma Combi 4 diésel con mando CP Plus de serie: tira del depósito de gasóleo, así que el invierno no depende de las bombonas de propano, un argumento de peso para quien viaja en temporada fría. En medidas, 6,69 m de largo, 2,35 m de ancho —2,76 m con los retrovisores abiertos— y 2,90 m de alto la colocan en el corazón del segmento de las perfiladas compactas: se maneja mejor que una integral y cabe en más sitios que las de 7,4 m. La base es el Peugeot 2.2 de 140 CV en Francia —en exportación monta Fiat Ducato—, con tracción delantera y un paquete de ayudas a la conducción de serie que pocas rivales igualan sin pasar por caja: frenada de emergencia, mantenimiento de carril, detección de somnolencia, Traction+ con control de descenso y neumáticos all season 3PMSF. La MMA es de 3.500 kg —con 3.650 kg disponibles y una versión HEAVY de 4.250 kg en opción que ya exige el carnet C1—, la masa en orden de marcha oficial es de 2.980 kg y la carga útil oficial de 520 kg: cifras las tres publicadas por Rapido en su guide technique, sin cálculos caseros. Con cuatro personas, 120 litros de agua y el garaje lleno, esos 520 kg se agotan rápido, así que el comprador familiar hará bien en pesar la unidad equipada. El salón merece capítulo aparte: cara a cara sin estrado —se entra sin subir escalón—, mesa con pie telescópico eléctrico, techo panorámico Skyview con descongelación eléctrica y un ambientación cuidada con tapicerías TEP acolchadas. La cocina monta frigorífico grande —aquí hay que ser honestos: la ficha web oficial habla de compresión de 174 litros mientras el guide technique 2026 indica absorción de 156 litros, una discrepancia en la propia documentación de la marca que conviene confirmar con el concesionario antes de firmar— y placa de dos fuegos. En precio, Rapido no publica PVP por modelo en su web pública, solo franjas orientativas genéricas por tipo de vehículo que no son el precio de este modelo: no hay cifra oficial que dar. Sus rivales son las perfiladas compactas francesas y alemanas de 6,6 a 7 m con cuatro camas, frente a las que el 606F ofrece un planteamiento distinto —más salón y garaje, menos dormitorio fijo— y un ADAS de serie poco común. Es para parejas o familias de cuatro que priorizan la vida de día, que viajan con bicis o material voluminoso y que aceptan montar la cama del salón a cambio de un garaje y un vestidor enormes. No es para quien exige cama fija trasera ni para quien viaja siempre a plena carga sin querer mirar la báscula. La red Rapido en España, aunque menos densa que la de las generalistas alemanas, cubre las principales provincias a través de sus concesionarios del grupo. Cómo lo verificamos: las «4 couchages», las medidas de las camas, el garaje calefactado, la Truma Combi 4 diésel, el PTAC de 3,5/3,65 T, la masa en orden de marcha de 2.980 kg y la carga útil de 520 kg proceden de la ficha oficial del modelo y del guide technique de la colección 2026 en rapido-camping-car.fr, revisados el 18/10/2026; la discrepancia del frigorífico entre ambos documentos oficiales se señala tal cual; Rapido no publica precios por modelo, por eso la ficha no incluye PVP.",
    analisisSlug: "rapido-606f-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Peugeot Boxer 2.2 (Francia; Fiat Ducato en exportación): revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan del fabricante del portador)",
      revisiones: [
        {
          nombre: "Revisión del portador (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Rapido (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente:
        "Plan de mantenimiento Peugeot Boxer / Fiat Ducato + recomendaciones Rapido",
    },
    euroncap: null,
    notas:
      "606F: la etiqueta ambiental DGT «C» es una inferencia editorial (diésel Euro 6), no un dato publicado por el fabricante: dato no oficial · en revisión. V55: «dato no oficial · en revisión» en todos los valores numéricos (fichas coincidentes de concesionarios franceses del modelo exacto; la web oficial no publica ficha técnica del V55).",
    curiosidades:
      "La prensa francesa lo recibió con nota alta: Esprit Camping-Car le dio un 8,5/10 y auguró que podía convertirse en «un véritable best-seller» del constructor de Mayenne, destacando una relación calidad-precio impropia de una marca premium. Fuente: https://espritcampingcar.com/rapido-606f-raffinement-et-elegance/",
    fuenteNombre:
      "Rapido (ficha oficial del modelo + guide technique colección 2026)",
    fuenteUrl:
      "https://www.rapido-camping-car.fr/reisemobil_teilintegrierte_serie-6f_606f.chtml",
  },
];
