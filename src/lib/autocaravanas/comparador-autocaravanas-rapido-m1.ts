// Autocaravanas Rapido — lote Merlín 1 (18/10/2026). Corrección (b)(c)(d) 22:15 — textos lote 3.
// V55: ficha FUERA del primer lote (orden Grok): solo cambios mecánicos (puntos 2, 5, 6), sin
// descripcion. La web oficial solo confirma la pertenencia a la serie especial OPTIMUM LINE y el
// sistema MODUL'SPACE®; NO publica ficha técnica del V55: todos los datos numéricos «no oficial»
// en "aprox" (fuente: fichas coincidentes de concesionarios FR).
// 606F: ficha oficial del modelo + guide technique de la colección 2026 (perfilada Serie 6F,
// «4 couchages» oficial, 6,69 m, PTAC 3,5/3,65 T, carga útil oficial 520 kg, Peugeot Boxer 2,2
// 140 CV, cama de techo eléctrica, Truma Combi 4 diésel). Rapido NO publica precios por modelo
// en su web pública: sin precio oficial publicado (no inventar).
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_RAPIDO_M1: Autocaravana[] = [
  {
    id: "rapido-v55-2026-precio-ficha-tecnica",
    marca: "Rapido",
    modelo: "V55 Optimum Line",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // Rapido no publica ningún precio oficial; solo existen precios de concesionarios
    potenciaCv: 140, // «no oficial»: según fichas coincidentes de concesionarios FR; la web oficial no publica ficha del V55
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
    imagen: "/media/rapido-v55-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/rapido-v55-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/rapido-v55-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990, // «no oficial»: según fichas coincidentes de concesionarios FR; la web oficial no publica ficha del V55
    anchoMm: 2050, // «no oficial»: ver nota anterior
    altoMm: 2590, // «no oficial»: ver nota anterior
    pesoKg: null, // no publicado por el fabricante; una ficha de concesionario de unidad 2026 indica 3.040 kg en vacío
    mmaKg: 3500, // «no oficial»: PTAC de 3.500 kg según fichas de concesionarios FR
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // «no oficial»: 4 plazas de circulación según fichas de concesionarios FR
    plazasDormir: null, // la web oficial no publica ficha del V55: sin dato oficial
    parNm: null,
    traccion: "Delantera", // «no oficial»: portador Peugeot Boxer (tracción delantera según fichas de concesionarios)
    emisionesCo2: null,
    aprox: ["potenciaCv", "largoMm", "anchoMm", "altoMm", "mmaKg", "plazas", "traccion", "etiquetaDgt"], // «no oficial»: web oficial sin ficha del V55
    pros: [
      "Menos de 6 m con 3 plazas de dormir y 4 de viaje: formato muy compacto y maniobrable, ideal para uso diario y ciudad",
      "Sistema patentado MODUL'SPACE®: en un van de menos de 6 m consigue ducha y WC separados de verdad, algo único en su categoría",
      "Cama transversal trasera de 195x132 cm con soute modulable debajo (caben 2 bicis) y colchón Bultex",
      "Buenas autonomías de serie: 110 l de agua limpia y 85 l de residuales, por encima de muchos rivales de 6 m",
      "Serie especial OPTIMUM LINE sobre-equipada de serie: multimedia con Apple CarPlay/Android Auto, cámara de marcha atrás, Traction+ y construcción XHP",
    ],
    contras: [
      "El fabricante no publica ningún precio oficial: imposible comparar sin pasar por concesionario y los precios de red varían mucho",
      "La tercera plaza de dormir es una cama auxiliar de dinette estrecha (185x63-97 cm), poco cómoda para un adulto",
      "La cama transversal mide 195 cm de largo: personas altas dormirán justas",
      "El armario MODUL'SPACE hay que moverlo cada vez que se quiere duchar o usar la cama: operativa diaria obligada",
      "Con unos 3.040 kg en vacío según ficha de concesionario, la carga útil real queda en unos 460 kg: con 4 personas, agua llena y equipaje se agota rápido",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/rapido-v55-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Rapido V55 Optimum Line, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/rapido-v55-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Rapido V55, sistema Modul'Space",
        ancho: 1200,
        alto: 800,
      },
    ],
    descripcion: `La serie especial OPTIMUM LINE es la forma que tiene Rapido de vender sus furgonetas sin letra pequeña: el V55 sale del distribuidor con todo lo que la mayoría de los compradores acaba pidiendo como opcional —pantalla multimedia con Apple CarPlay y Android Auto, cámara de visión trasera, Traction+, arquitectura XHP con protección térmica reforzada— ya montado de serie. Es la apuesta de la marca insignia del grupo galo por el «llave en mano»: se abona una vez y no se vuelve a pensar en extras. Y bajo esa dotación, el V55 esconde el mecanismo más ingenioso de la casa, el MODUL'SPACE registrado, un ropero basculante que convierte el aseo en una ducha autónoma dentro de un van de menos de 6 metros.

Empecemos por la transparencia informativa, porque aquí hay un matiz importante: la web oficial de Rapido confirma que el V55 pertenece a la serie especial OPTIMUM LINE y documenta el mecanismo registrado MODUL'SPACE, pero no publica la ficha técnica del modelo. Todas las cifras de esta ficha provienen, por tanto, de fichas concordantes de distribuidores galos del modelo exacto y se marcan como «dato no oficial · en revisión». Esas fichas coinciden en las cotas: 5,99 m de longitud, 2,05 m de anchura y 2,59 m de altura, con 3.500 kg de peso máximo autorizado que permiten llevarlo con el carné B. La base es el Peugeot Boxer 2.2 de 140 CV con tracción al tren delantero, la motorización habitual del segmento. La certificación contempla 4 plazas para rodar y 3 para dormir.

El habitáculo se articula en tres zonas. En la parte posterior, un lecho transversal de 195 × 132 cm con colchón Bultex sobre una bodega modulable con cabida para dos bicis: se duerme en lecho hecho cada noche sin montar ni desmontar nada. En el centro, el estar con butacas delanteras orientables y la cocina para el día a día. Y el aseo, donde el MODUL'SPACE marca la distinción: en su posición habitual es un ropero de gran cabida; al hacerlo girar, el aseo se convierte en una ducha privada e independiente del váter. Ducharse de pie, con privacidad y sin mojar el inodoro, en un van de menos de 6 metros, es algo que casi ningún rival propone, y es el motivo por el que este mecanismo aparece en todos los argumentarios del grupo. La tercera plaza es un lecho de comedor de 185 × 63-97 cm: estrecho, pensado para un niño o una noche suelta, no para un adulto en un viaje largo; interesa saberlo antes de contar con ella. Los tanques rondan los 110 litros de agua limpia y 85 de grises según las fichas de la red de ventas.

La gracia de la serie OPTIMUM LINE está en lo que evita: la lista de opcionales. Pantalla multimedia con CarPlay y Android Auto, cámara trasera, Traction+ con ayuda al descenso, neumáticos de cuatro estaciones y arquitectura XHP vienen de serie, de modo que el precio de salida incluye lo que en otras marcas se abona aparte. En carretera, el Boxer 2.2 de 140 CV mueve con dignidad los 3.500 kg: correcto en llano, pausado en puertos con carga, el comportamiento estándar del segmento. El MODUL'SPACE impone su propio ritual: hay que bascular el ropero cada vez que se quiere tomar una ducha o acceder al lecho en modo noche, una maniobra cotidiana que a unos encanta y a otros cansa; probarla en el punto de venta antes de firmar es casi obligado.

De tarifa oficial no hay nada que difundir: Rapido no publica PVP por modelo y cada punto de venta fija el suyo, con variaciones notables según variante y packs. Enfrente tiene a su primo el Campérêve Magellan 643 —misma casa matriz y gemelo sistema de aseo basculante—, al Chausson V594 y al Pilote V600G; ante ellos, el V55 defiende la serie OPTIMUM LINE sobre-equipada de serie. Papeles y orígenes: la pertenencia a la serie especial OPTIMUM LINE y el mecanismo registrado MODUL'SPACE están confirmados en la web oficial de Rapido; las cotas (5,99 × 2,05 × 2,59 m), la MMA de 3.500 kg, las 4 plazas de día y 3 de noche, la base Peugeot Boxer 2.2 de 140 CV con tracción delantera, el lecho transversal de 195 × 132 cm con colchón Bultex, el lecho de comedor de 185 × 63-97 cm, los tanques de 110/85 litros y la dotación de la serie OPTIMUM LINE se han extraído de fichas concordantes de distribuidores galos del modelo exacto, y se marcan como «dato no oficial · en revisión» porque la web oficial no publica la ficha técnica del V55. Cierre: el van galo más completo de salida en su medida —MODUL'SPACE más serie sobre-equipada—, a cambio de una tercera plaza testimonial y de comprar con la ficha del distribuidor sobre la mesa ante la ausencia de documentación oficial del modelo.`,
    analisisSlug: "rapido-v55-2026-precio-ficha-tecnica-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Peugeot Boxer 2.2: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Peugeot)",
      revisiones: [
        {
          nombre: "Revisión Peugeot Boxer (2 años / 40.000 km)",
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
      fuente: "Plan de mantenimiento Peugeot Boxer + recomendaciones Rapido",
    },
    euroncap: null,
    notas:
      "«dato no oficial · en revisión»: todos los valores numéricos proceden de fichas coincidentes de concesionarios franceses del modelo exacto; la web oficial de Rapido solo confirma la pertenencia a la serie especial OPTIMUM LINE y el sistema patentado MODUL'SPACE®, sin publicar ficha técnica del V55. La etiqueta ambiental DGT «C» es una inferencia editorial (diésel Euro 6), no un dato del fabricante. Rapido no publica tarifa oficial abierta verificable.",
    curiosidades:
      "El V55 monta el MODUL'SPACE®, un sistema patentado por el grupo Rapido: un armario que pivota sobre su eje y convierte el aseo en una ducha privada e independiente dentro de un van de menos de 6 metros. Fuente: https://www.rapido-camping-car.fr/inc/rapido_nouveautes_les-fourgons_camping-car-serie-vans.phtml",
    fuenteNombre:
      "Rapido (web oficial: OPTIMUM LINE y MODUL'SPACE®) + fichas de concesionarios FR («no oficial»: la web oficial no publica la ficha técnica del V55)",
    fuenteUrl:
      "https://www.rapido-camping-car.fr/inc/rapido_nouveautes_les-fourgons_camping-car-serie-vans.phtml",
  },
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
      "606F: la etiqueta ambiental DGT «C» es una inferencia editorial (diésel Euro 6), no un dato publicado por el fabricante: dato no oficial · en revisión. V55: «dato no oficial · en revisión» en todos los valores numéricos (fichas coincidentes de concesionarios franceses del modelo exacto; la web oficial no publica ficha técnica del V55). sin tarifa oficial abierta verificable.",
    curiosidades:
      "La prensa francesa lo recibió con nota alta: Esprit Camping-Car le dio un 8,5/10 y auguró que podía convertirse en «un véritable best-seller» del constructor de Mayenne, destacando una relación calidad-precio impropia de una marca premium. Fuente: https://espritcampingcar.com/rapido-606f-raffinement-et-elegance/",
    fuenteNombre:
      "Rapido (ficha oficial del modelo + guide technique colección 2026)",
    fuenteUrl:
      "https://www.rapido-camping-car.fr/reisemobil_teilintegrierte_serie-6f_606f.chtml",
  },
];
