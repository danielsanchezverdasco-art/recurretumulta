// 25/10/2026 (arreglos-informe-2510): texto diferencial de las caravanas que el informe SEO
// marcó como casi duplicadas entre sí (gama Dethleffs c'joy 420/460/480 y Weinsberg
// CaraOne 390/400). Solo usa los datos de cada ficha (precio, medidas, tara, plazas,
// distribución) y la comparación con sus hermanas de gama; no añade cifras nuevas.
export const CARAVANAS_DIFERENCIAL: Record<string, { titulo: string; parrafos: string[] }> = {
  "dethleffs-cjoy-420-qsh-2026-precio-ficha-tecnica": {
    titulo: "Qué distingue a la c'joy 420 QSH del resto de la gama",
    parrafos: [
      "Es la puerta de entrada a la c'joy: 18.999 €, 2.000 € menos que la 460 LE y 3.000 € menos que la 480 QLK. A cambio es la más corta de las tres, con 6,25 m de largo total frente a los 6,75 m de la 460 y los 7,14 m de la 480, y la más ligera, con 927 kg en orden de marcha.",
      "Ese medio metro menos se nota al maniobrar marcha atrás en un camping estrecho, al buscar plaza en un guardamuebles y al calcular el coche tractor: con poco más de 900 kg de tara, la arrastra con holgura un compacto de gasolina o diésel bien homologado para remolque.",
      "El precio de esa compacidad es la capacidad de carga, la más baja de la familia (173 kg sobre una masa máxima de 1.100 kg). Agua, bombona de gas, toldo y equipaje de dos personas se comen ese margen enseguida, así que conviene viajar con el depósito vacío y pesar el conjunto antes de la primera escapada larga.",
    ],
  },
  "dethleffs-cjoy-460-le-2026-precio-ficha-tecnica": {
    titulo: "Qué distingue a la c'joy 460 LE de la 420 y la 480",
    parrafos: [
      "La clave está en las letras LE: camas individuales en lugar de una cama doble. Entre las tres c'joy de esta web es la pensada para que dos adultos duerman cada uno en su colchón, algo que muchas parejas valoran en viajes de varias semanas.",
      "Respecto a la 420 QSH crece 50 cm (6,75 m) y solo 26 kg de tara (953 kg), pero gana bastante margen de carga: 247 kg frente a 173 kg, gracias a una masa máxima de 1.200 kg. Es la que mejor equilibra peso en vacío y kilos disponibles para equipaje dentro de la serie.",
      "Frente a la 480 QLK es 1.000 € más barata y 39 cm más corta, pero se queda en tres plazas para dormir. Si no viajáis más de dos adultos y, como mucho, un niño, la 460 LE ofrece más comodidad nocturna que la 480 sin cargar con la longitud y los kilos de una caravana familiar.",
    ],
  },
  "dethleffs-cjoy-480-qlk-2026-precio-ficha-tecnica": {
    titulo: "Qué distingue a la c'joy 480 QLK de sus hermanas",
    parrafos: [
      "Es la familiar de la gama: duplica las plazas para dormir de la 420 y la 460 (seis frente a tres) gracias a la combinación de cama de matrimonio, literas traseras en altura y comedor abatible, todo sobre un solo eje.",
      "Ese salto se paga con tamaño y peso: 7,14 m de largo y 1.068 kg en orden de marcha, más de 100 kg por encima de la 460 LE. La masa máxima sube a 1.300 kg, lo que exige un coche tractor con capacidad de remolque suficiente y un conjunto que no pase de 3.500 kg si quieres seguir con el carnet B.",
      "Con 232 kg de carga útil para hasta seis personas, el margen por ocupante es mucho menor que en las versiones de pareja. Antes de comprarla para una familia numerosa merece la pena preguntar al concesionario por el aumento de masa máxima homologado y revisar qué viaja en el coche y qué en la caravana.",
    ],
  },
  "weinsberg-caraone-390-qd-2026-precio-ficha-tecnica": {
    titulo: "Qué distingue a la CaraOne 390 QD de la 400 LK",
    parrafos: [
      "La 390 QD y la 400 LK comparten carrocería (5,92 m de largo, 2,20 m de ancho y 2,57 m de alto) y prácticamente el mismo peso, así que la elección se hace por la distribución interior, no por el coche tractor.",
      "La 390 QD es la opción de pareja: también declara cuatro plazas para dormir, pero sin las literas fijas de la 400 LK, de modo que se orienta a dos adultos que solo de vez en cuando llevan invitados. Es además la CaraOne más barata, 16.650 € según la tarifa MJ 2027, 140 € menos que la 400 LK.",
      "Con 943 kg en orden de marcha es 5 kg más ligera que su hermana, una diferencia que en la práctica no cambia nada al remolcar. Lo que sí cambia es el uso diario: sin el mueble de literas, la parte trasera no queda ocupada por camas de niño, algo que una pareja agradece más que una familia.",
    ],
  },
  "weinsberg-caraone-400-lk-2026-precio-ficha-tecnica": {
    titulo: "Qué distingue a la CaraOne 400 LK de la 390 QD",
    parrafos: [
      "Las letras LK delatan su planteamiento: literas traseras en altura para niños. Es la CaraOne familiar más compacta, con la misma caja de 5,92 m que la 390 QD, y cuesta 16.790 €, solo 140 € más según la tarifa MJ 2027.",
      "La diferencia práctica es que los niños tienen su cama fija y no hay que montar y desmontar el comedor cada noche. Eso sí, las literas son de talla infantil y juvenil, así que no sirven para cuatro adultos.",
      "Pesa 948 kg en orden de marcha, 5 kg más que la 390 QD por el mueble de las literas. Con cuatro ocupantes y su equipaje, el margen de carga es el punto a vigilar: conviene pesar la caravana cargada en una báscula pública antes del primer viaje largo.",
    ],
  },
  // 31/10/2026 (contenido-cosa-3110): párrafos propios para fichas con poco texto. Solo usan datos de cada ficha
  // y de sus hermanas de gama (precio, medidas, pesos, plazas, carnet); no añaden cifras nuevas.
  "sterckeman-easy-460cp-2026-precio-ficha-tecnica": {
    titulo: "Qué distingue a la Easy 460CP dentro de la gama Sterckeman",
    parrafos: [
      "La Easy 460CP ocupa el segundo peldaño de precio de Sterckeman entre las fichas de esta web: 19.490 €, es decir, 3.500 € más que la Easy 366PE y 3.500 € menos que la Sport Edition 455CP. También es la más ligera de las caravanas medianas de la marca, con 970 kg en orden de marcha frente a 1.120 kg de la 455CP y 1.170 kg de la 496PE.",
      "Su rasgo más particular es la proporción: 6,95 m de largo con solo 2,10 m de ancho. Resulta 20 cm más estrecha que las Sport Edition (2,30 m), pese a ser 24 cm más larga que la 455CP. Entre el peso en vacío y la masa máxima (1.100 kg) quedan 130 kg, una diferencia que sirve de orientación pero que no equivale a una carga útil oficial, porque la marca no la publica.",
      "Si el tractor pasa de 2.400 kg de MMA, el conjunto supera los 3.500 kg del carnet B (con 1.100 kg de remolque) y la ficha indica entonces el B96. Dormir, duerme gente justa: tres plazas en una cama delantera de 140x195 y otra trasera de 100x170, así que quien necesite cuatro plazas tiene en la propia marca la Easy 366PE y la Sport Edition 455CP. En mantenimiento, la ficha calcula una revisión anual de unos 200 €.",
    ],
  },
  "sterckeman-easy-366pe-2026-precio-ficha-tecnica": {
    titulo: "Qué distingue a la Easy 366PE entre las Sterckeman",
    parrafos: [
      "La Easy 366PE es la puerta de entrada de la marca en esta web: 15.990 €, la tarifa más baja de Sterckeman, a 3.500 € de distancia de la Easy 460CP. Mide 5,30 m de largo, 1,65 m menos que esa hermana, y pesa 675 kg en orden de marcha, casi 295 kg menos que la 460CP.",
      "El dato que más pesa en la decisión es la masa máxima de 750 kg: con ese valor el conjunto con casi cualquier turismo cabe en el carnet B, algo que la ficha refleja y que no ocurre con ninguna otra Sterckeman de la tabla (las demás llegan de 1.100 kg hacia arriba y recurren al B96). A cambio, la caravana mide 2,10 m de ancho y reparte cuatro plazas con la cama delantera de 140x190 y, detrás, dos literas de 70x195 pensadas para niños.",
      "Conviene leerla como caravana de escapada. La ficha menciona un bidón de limpias de solo 12 l, un frigorífico de compresor de 84 l y la calefacción solo en paquetes opcionales, tres detalles que acortan la estancia cómoda. Como Sterckeman no publica tarifa oficial en España, el importe de la ficha procede de la lista alemana; el distribuidor español debe confirmar el total final. La ficha estima 200 € por revisión anual.",
    ],
  },
  "sterckeman-sport-edition-455cp-2026-precio-ficha-tecnica": {
    titulo: "Qué distingue a la Sport Edition 455CP de las otras Sterckeman",
    parrafos: [
      "Con 22.990 €, la Sport Edition 455CP queda entre la Easy 460CP (19.490 €) y la Sport Edition 496PE (24.990 €). Frente a la Easy 460CP aporta 150 kg más de tara pero también una masa máxima superior (1.250 kg frente a 1.100 kg) y cuatro plazas en lugar de tres.",
      "Duerme cuatro: dos camas dobles, una de 150/120x210 delante y otra de 140x200 detrás, algo distinto de la 496PE, que añade literas y llega a cinco plazas. Por dimensiones se queda en 6,71 m de largo y 2,30 m de ancho, justo 30 cm menos que la 496PE. En cocina lleva frigorífico de 150 l y la caldera Truma Therme de 5 l funciona a 230 V, con depósitos fijos de 50 l de agua limpia y 30 l de grises.",
      "El peso en orden de marcha, 1.120 kg, obliga a un tractor solvente: sumando la masa máxima de 1.250 kg, un coche de 2.250 kg de MMA deja el conjunto en 3.500 kg, el techo del carnet B, y cualquier vehículo mayor empuja al B96 o al BE. La masa máxima admite una ampliación oficial hasta 1.500 kg. La revisión anual de la ficha se estima en 200 €.",
    ],
  },
  "sterckeman-sport-edition-496pe-2026-precio-ficha-tecnica": {
    titulo: "Qué distingue a la Sport Edition 496PE: la familiar de la serie",
    parrafos: [
      "La Sport Edition 496PE es la más familiar de las Sterckeman de la web, con 5 plazas para dormir: cama doble delantera (140x205), una individual central (100x170) y dos literas de 85x185 detrás. Cuesta 24.990 €, 2.000 € más que la 455CP, y mide 7,01 m, es decir, 30 cm más que ella con el mismo ancho de 2,30 m.",
      "Pesa 1.170 kg en orden de marcha, con 1.300 kg de masa máxima que se pueden ampliar oficialmente a 1.500 kg. Eso la sitúa entre la 455CP (1.250 kg) y la Open Edition 540CP (1.500 kg). Una caravana monoeje con ese margen exige repartir bien la carga; la propia ficha señala el reparto de pesos como punto débil.",
      "Para familias merece la pena mirar el confort a bordo: colchones Comfort Plus de 15 cm de espesor y el mismo equipo de frío y agua caliente que la 455CP. Las dos literas de 85x185 se quedan cortas para adolescentes altos. El conjunto supera con facilidad los 3.500 kg, así que hay que contar con el B96 o el BE. Como mantenimiento anual orientativo, la ficha anota 200 €.",
    ],
  },
  "tabbert-senara-490-td-2026-precio-ficha-tecnica": {
    titulo: "Qué distingue a la Senara 490 TD entre las Tabbert",
    parrafos: [
      "La Senara 490 TD parte de 29.490 €, ligeramente por encima de la Senara 550 DMK (28.990 €) pese a ser 42 cm más corta: 7,33 m frente a 7,75 m. La explicación está en la ficha: esta cifra es de una unidad matriculada con paquetes, y la lista de precios (UPE) asciende a 34.891 €.",
      "Las cifras de peso son completas en la ficha: 1.333 kg en orden de marcha, 1.700 kg de masa máxima y 367 kg de carga útil. La Cazadora 460 E queda en 1.236 kg de tara, y la Pantiga 490 E, en 1.412 kg, de modo que la Senara 490 TD está entre ambas. Con 2,32 m de ancho es 18 cm más estrecha que la 550 DMK.",
      "El interior se organiza con cama francesa de 200x138 cm y un salón trasero convertible, con 4 plazas; el salón se monta cada noche. Incluye calefacción Truma S 3005, climatización ATC y 45 l de agua limpia, y la altura interior es de 1,96 m. Sin depósito de grises fijo de serie, hay que prever uno enrollable. Con 7,33 m de largo y masa máxima de 1.700 kg, el carnet indicado es B96. El mantenimiento anual orientativo es de 220 €.",
    ],
  },
  ["tabbert-senara-550-dmk-" /* ficha */ + "2026-precio-ficha-tecnica"]: {
    titulo: "Qué distingue a la Senara 550 DMK: la familiar grande de Tabbert",
    parrafos: [
      "La Senara 550 DMK es la más larga de las Tabbert de la web: 7,75 m, frente a 7,33 m de la Senara 490 TD y 7,30 m de la Da Vinci 495 HE. También es la más ancha, con 2,50 m, 18 cm más que la 490 TD. Su tarifa alemana de 28.990 € la deja como la Senara más económica de las dos, a 500 € de la 490 TD.",
      "Pensada para familias, combina literas traseras con cama de matrimonio, cocina en L y baño separado. La ficha habla de 4 plazas, y la reseña de la marca de 4 a 5; las literas están pensadas para niños o adolescentes por la altura del techo. La masa máxima es de 1.700 kg, igual que la Da Vinci 495 HE, y exige el B96 con la mayoría de tractores.",
      "Un dato que conviene saber antes de comprarla: Tabbert no publica la masa en orden de marcha de esta versión, por eso la ficha no da carga útil. Lo prudente es pesar la unidad concreta antes de calcular el tractor. Como su tarifa es la alemana, el precio final en España lo tiene que confirmar el distribuidor, y los packs de equipamiento suben varios miles de euros. Cuenta con 200 € al año de revisión, según la ficha.",
    ],
  },
  ["tabbert-da-vinci-495-he-" /* ficha */ + "2026-precio-ficha-tecnica"]: {
    titulo: "Qué distingue a la Da Vinci 495 HE dentro de Tabbert",
    parrafos: [
      "La Da Vinci 495 HE es la Tabbert más cara de la web entre las cuatro plazas: 39.220 € de tarifa alemana, 9.730 € más que la Senara 490 TD y 11.855 € más que la Cazadora 460 E. Es la gama media-alta de la marca, con acabados superiores a los de la Cazadora, y esa diferencia es lo que paga el sobreprecio.",
      "En dimensiones se queda en 7,30 m de largo, 2,32 m de ancho y 2,65 m de alto, 45 cm menos que la Senara 550 DMK, lo que la hace más sencilla de maniobrar que las familiares de 7,75 m. La masa máxima es de 1.700 kg, el mismo valor de las Senara, y se necesita B96.",
      "El salón circular delantero, con ventanales panorámicos, es su rasgo diferencial, junto con unas camas individuales que se convierten en doble. Dos advertencias de la ficha: el precio es la UPE alemana sin descuentos y los paquetes Premium suman entre 4.000 y 5.000 € al importe base. Tabbert no ha publicado el peso en orden de marcha para 2026, así que no se puede calcular una carga útil. La ficha anota 200 € de revisión anual.",
    ],
  },
  "kabe-royal-560-gle-2026-precio-ficha-tecnica": {
    titulo: "Qué distingue a la Royal 560 GLE en la gama Kabe",
    parrafos: [
      "La Royal 560 GLE ocupa el centro de la gama Kabe: 64.000 € de tarifa finlandesa, 10.450 € más que la Ametist 560 GLE y 12.050 € menos que la Royal 600 CXL. Comparte con la Ametist el mismo largo total de 7,80 m, de modo que el sobreprecio no compra metros, sino dotación y acabado.",
      "El peso confirma ese salto: 1.600 kg en orden de marcha, 80 kg más que la Ametist (1.520 kg). La masa máxima sube de 1.640 kg a 1.800 kg y la carga útil declarada pasa de 120 kg a 200 kg, la mejor entre las 560 de la marca.",
      "Con cuatro plazas en 7,80 m y 2,78 m de altura exterior, conviene medir el garaje antes de decidirse. El conjunto con un SUV medio pide el B96, como señala la ficha, y la tarifa finlandesa no equivale a un precio oficial para España. Para la revisión anual, la ficha prevé 200 €.",
    ],
  },
  "kabe-ametist-560-gle-2026-precio-ficha-tecnica": {
    titulo: "Qué distingue a la Ametist 560 GLE: la entrada a Kabe",
    parrafos: [
      "La Ametist 560 GLE es la caravana más económica de Kabe en esta web: 53.550 €, frente a los 64.000 € de la Royal 560 GLE, con la misma planta y tamaño. Esos 10.450 € de diferencia se explican, según la ficha, por un equipamiento más básico en la Ametist, la serie de entrada de Kabe, que el de las series Royal e Imperial.",
      "Como contrapartida, es la más ligera de las 560: 1.520 kg en orden de marcha y 1.640 kg de masa máxima, frente a 1.600 kg y 1.800 kg de la Royal. La carga útil declarada, 120 kg, es también la más justa del trío de 7,80 m, lo que obliga a dosificar el equipaje, el agua y el gas.",
      "Mide 7,80 m de largo, 2,30 m de ancho y 2,78 m de alto, una altura que complica los garajes y parkings cubiertos. Con cuatro plazas y lecho de matrimonio con comedor abatible, su planteamiento es el de caravana para rodar los doce meses. Con un SUV medio hace falta el B96, y el importe es la tarifa de Finlandia, sin precio oficial publicado para España. La ficha apunta unos 200 € de revisión anual.",
    ],
  },
  "kabe-royal-600-cxl-2026-precio-ficha-tecnica": {
    titulo: "Qué distingue a la Royal 600 CXL: una Kabe para dos",
    parrafos: [
      "La Royal 600 CXL es la única Kabe de la web pensada para dos plazas: toda su longitud de 8,20 m se dedica a la pareja, con la planta XV2 y un salón donde no hay que montar camas. Con 76.050 € es 12.050 € más cara que la Royal 560 GLE y 11.000 € más barata que la Imperial 630 TDL.",
      "En peso, la ficha da 1.710 kg en orden de marcha y 1.800 kg de masa máxima, lo que deja solo 90 kg de carga útil, el mínimo de la serie Royal (la 560 GLE declara 200 kg). Para una pareja que viaja todo el año, eso significa elegir con cuidado qué se lleva.",
      "Con un solo eje y 2,30 m de ancho, se maniobra mejor de lo que sugiere su talla, aunque los 2,78 m de altura y los 8,20 m de largo piden un lugar amplio para guardarla. Con el coche tractor habitual necesita el B96. El precio de tarifa finlandesa no es un PVP oficial para España. La ficha da 200 € de revisión anual.",
    ],
  },
  "kabe-imperial-630-tdl-2026-precio-ficha-tecnica": {
    titulo: "Qué distingue a la Imperial 630 TDL dentro de Kabe",
    parrafos: [
      "La Imperial 630 TDL abre la serie Imperial, la cumbre de Kabe: 87.050 € de tarifa finlandesa, 11.000 € más que la Royal 600 CXL y 17.300 € menos que la Imperial 780 TDL. Su largo de 8,50 m supera en 70 cm a las Royal 560.",
      "Lo más visible es la anchura King Size de 2,50 m, 20 cm más que las Royal y las Ametist, y que da el habitáculo más amplio de esta clase. El peso lo acompaña: 1.855 kg en orden de marcha, 2.000 kg de masa máxima y 145 kg de carga útil declarada, la menor de la serie Imperial.",
      "Sus 2.000 kg de masa máxima se mantienen en el B96, aunque con un todoterreno pesado como tractor podría pedirse el BE. A cambio, es la Imperial más manejable: la 780 TDL pasa a 9,40 m y a doble eje. Pesan los 2,50 m de ancho en carreteras estrechas y hace falta sitio donde guardarla. La ficha calcula 220 € de revisión anual.",
    ],
  },
  "kabe-imperial-780-tdl-2026-precio-ficha-tecnica": {
    titulo: "Qué distingue a la Imperial 780 TDL: la mayor de Kabe",
    parrafos: [
      "La Imperial 780 TDL es la caravana más grande y cara de la gama Kabe en la web: 9,40 m de largo y 104.350 €, 17.300 € más que la Imperial 630 TDL. Es la única de la marca con doble eje de serie, y su anchura King Size de 2,50 m coincide con la de la 630 TDL.",
      "Los números de peso son los más altos de toda la marca: 2.059 kg en orden de marcha, 2.650 kg de masa máxima y 591 kg de carga útil declarada, frente a 145 kg de la 630 TDL. Es, además, la única que sale del B96: con 2.650 kg, el conjunto solo puede llevarse con el carnet BE.",
      "Con ese tamaño necesita un tractor potente (SUV grande o pick-up) y un conductor con experiencia. Para aparcar 9,40 m por 2,50 m hará falta una nave o una parcela amplia, y los 2,78 m de altura limitan los accesos. El precio es la tarifa finlandesa, no un PVP español. Es también la revisión anual más cara de Kabe en la ficha: 250 €.",
    ],
  },
  "eriba-feeling-425-2026-precio-ficha-tecnica": {
    titulo: "Qué distingue a la Eriba Feeling 425 de las Touring",
    parrafos: [
      "La Feeling 425 es la Eriba de mayor capacidad de la web: 5 plazas en 6,03 m, frente a las 3 plazas de las Touring 542 y 530, ambas de 5,99 m. Su precio de 28.390 € (26.310 CHF en la lista suiza) queda a 7.100 € de la Touring 542 (21.290 €) y es similar al de la Touring 530 (29.370 €).",
      "Su gran seña es el techo elevable: con el techo bajado mide 2,25 m de alto, y al levantarlo la altura interior llega a 1,98 m. Eso rebaja la resistencia al aire y permite entrar en más aparcamientos, a costa de montarlo y desmontarlo en cada parada. Mide 2,16 m de ancho, por lo que el interior es compacto.",
      "Pesa 1.040 kg en orden de marcha y su masa máxima es de 1.200 kg, es decir, 160 kg de carga útil, que se quedan justos con cinco ocupantes. Con esa masa, casi cualquier turismo la remolca con el carnet B. El frigorífico es de 83 l, pequeño para estancias largas. Para la revisión, la ficha reserva unos 200 € al año.",
    ],
  },
  ["burstner-premio-life-415-tk-" /* ficha */ + "2026-precio-ficha-tecnica"]: {
    titulo: "Qué distingue a la Premio Life 415 TK entre las Bürstner",
    parrafos: [
      "La Premio Life 415 TK es la Bürstner más corta y económica de la web: 6,22 m y 20.070 €, frente a 7,00 m y 22.000 € de la Premio Life 480 TS, o 7,57 m y 29.360 € de la Premio Plus 510 TK. Aun así reparte 5 plazas, con literas y cama doble, dos más que las 3 de la 480 TS.",
      "Los datos de la unidad 2026 recogidos en la ficha son 1.023 kg en orden de marcha, 1.360 kg de masa máxima y 337 kg de carga útil. Con un coche de hasta 2.140 kg de MMA, el conjunto no pasa de los 3.500 kg que permite el carnet B. Con 337 kg de margen conviene no cargar de más cuando viajan cinco.",
      "Otro número que la define es la anchura: 2,12 m entre paredes, lo que la ficha presenta como la Bürstner más estrecha, de modo que el interior pide orden con cinco a bordo. En altura mide 2,61 m. Los remates son sencillos, como corresponde a una caravana de entrada. La revisión anual orientativa de la ficha es de 200 €.",
    ],
  },
  "swift-challenger-580-2026-precio-ficha-tecnica": {
    titulo: "Qué distingue a la Challenger 580 dentro de Swift",
    parrafos: [
      "La Challenger 580 se sitúa entre las Sprite y la Elegance: 35.717 € (30.095 £ en la tarifa británica) frente a 28.109 € de la Sprite Major 4 EB y 57.222 € de la Elegance Grande 860. Con 7,54 m es casi tan larga como la Sprite Major (7,63 m), pero las acabadas Challenger quedan un escalón por encima en equipamiento.",
      "Mide 2,25 m de ancho y no publica altura exterior. En peso, la ficha calcula 1.354 kg en orden de marcha y 1.510 kg de masa máxima, es decir, 156 kg de margen, una cifra deducida del folleto. La Sprite Major 4 EB queda en 1.378 kg de MMA, de modo que la Challenger 580 sube 132 kg de capacidad.",
      "Su distribución es la de cama isla transversal trasera con baño de ancho completo y ducha separada, y la calefacción Truma CombiNeo es una primicia de la gama 2026 británica. Detrás de un SUV grande el conjunto queda cerca de 3.500 kg, de modo que hay que sumar masas antes de fiarse del carnet B. Swift no tiene red oficial en España, de modo que el precio es el del distribuidor. En la ficha, la revisión anual cuesta 200 €.",
    ],
  },
  "swift-elegance-grande-860-2026-precio-ficha-tecnica": {
    titulo: "Qué distingue a la Elegance Grande 860: el buque insignia de Swift",
    parrafos: [
      "La Elegance Grande 860 es la mayor y más cara de las Swift de la web: 57.222 € (48.215 £ en la tarifa británica), casi el doble que la Challenger 580 (35.717 €) y más del doble que la Sprite Major 4 EB (28.109 €). Mide 7,98 m de largo, 44 cm más que la Challenger 580.",
      "Es también la más ancha: 2,45 m, ocho pies. Con 1.854 kg en orden de marcha, 2.055 kg de masa máxima y 201 kg de margen calculado, es la única de la lista con doble eje, lo que da aplomo pero suma neumáticos y frenos. Por masa exige un 4x4 potente y, como mínimo, el carnet B96.",
      "Su atractivo está en el confort: calefacción Alde con suelo radiante, nevera de 177 l, cama isla, salón en forma de L, cocina en el centro y baño de lado a lado. La construcción es SMART HT. Swift carece de red oficial en España y la ficha no recoge una carga útil publicada por la marca, así que conviene pesar la unidad. La revisión anual de referencia es de 220 €.",
    ],
  },
  "adria-altea-542-pk-2026-precio-ficha-tecnica": {
    titulo: "Qué distingue a la Altea 542 PK dentro de Adria",
    parrafos: [
      "La Altea 542 PK es la Adria más grande de la web: 7,43 m de largo y 6 plazas, frente a los 7,06 m de la Aviva 522 PT, que tiene las mismas 6 plazas, y a los 5,19 m de la Action 361 LH, de 2 plazas. Parte de 23.000 €, 500 € menos que la Aviva y el mismo importe que la Action, y ojo: sin IVA.",
      "En peso, la ficha da 1.180 kg orientativos en orden de marcha, 1.500 kg de masa máxima y 320 kg de carga útil, con bastidor AL-KO que admite 1.500 o 1.700 kg. La Aviva 522 PT queda en 1.350 kg de MMA, de modo que la Altea gana 150 kg de capacidad. Con esos valores el carnet B es suficiente.",
      "La Altea estrena generación, con habitáculo luminoso, cocina con horno y frigorífico de 140 l, y baño con ducha independiente, algo poco habitual en una caravana de seis plazas de este precio. Las literas quedan justas para chavales altos y el avance se cotiza aparte. El peso en vacío es una cifra orientativa y la carga útil real varía con el equipamiento montado. Cada año, la revisión supone 200 € según la ficha.",
    ],
  },
  ["knaus-sport-500-qdk-" /* ficha */ + "2026-precio-ficha-tecnica"]: {
    titulo: "Qué distingue a la Sport 500 QDK entre las Knaus",
    parrafos: [
      "La Sport 500 QDK es la Knaus más familiar de las tres de la web: litera doble trasera y cama transversal delantera para 4 plazas. Parte de 31.000 €, 6.000 € más que la Sport 450 FU y 3.000 € menos que la Südwind 500 FU, a la que se parece en largo (7,32 m frente a 7,30 m).",
      "Su ficha da 1.166 kg en orden de marcha, 1.600 kg de masa máxima y 434 kg de carga útil, frente a 1.079 kg y 1.400 kg de la Sport 450 FU. Con un tractor de hasta 1.900 kg de MMA quedarías dentro de los 3.500 kg del carnet B. Mide 2,32 m de ancho y 2,57 m de alto. Un matiz importante: los 1.600 kg de la ficha corresponden a una ampliación de masa sobre un bastidor de 1.800 kg, y la versión base figura con 1.400 kg en catálogos de distribuidores, así que la masa depende de la unidad concreta.",
      "De serie trae techo de GFK resistente al granizo, chapa de aluminio martilleado, nevera de 142 l y cocina de tres fuegos. Lo que no trae es mover eléctrico, algo que se echa en falta a mano, y el avance se cotiza aparte. Los acabados son más sobrios que los de la Hobby De Luxe. Son unos 200 € de revisión anual, dato de la ficha.",
    ],
  },
};
