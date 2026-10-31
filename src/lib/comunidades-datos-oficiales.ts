// Datos oficiales por comunidad autónoma para la sección «Datos oficiales» de
// /comunidades/<ccaa>. Todas las cifras proceden de fuentes públicas citadas en la
// propia página y fueron contrastadas el 31/10/2026:
//  - Fallecidos en vías interurbanas (a 24 h, provisional): nota de prensa DGT 08/01/2026.
//  - Parque de vehículos y denuncias formuladas 2024: Anuario Estadístico General 2024
//    de la DGT (tablas 64 y 113).
//  - Radares: fichero abierto «Radares fijos DGT» del Punto de Acceso Nacional
//    (publicación 18/12/2025; no incluye Cataluña ni País Vasco) y fichero «Radars fixos
//    de Catalunya» del Servei Català de Trànsit (radars.txt).
//  - Radares en servicio desde el 27/02/2026: nota de prensa DGT del 27/02/2026.
// Las ratios (fallecidos por 100.000 vehículos, denuncias por 1.000 vehículos) son
// cálculo propio con estas mismas cifras.

export type DatosOficialesCcaa = {
  /** Fallecidos interurbanos a 24 h: 2019, 2023, 2024, 2025 */
  fallecidos: [number, number, number, number];
  denuncias2024: number | null;
  parque: number;
  turismos: number;
  motos: number;
  vehPorMilHab: number;
  puestoVehPorMilHab: number;
  radaresFijos: number | null;
  radaresTramo: number | null;
  /** Párrafos de análisis, redactados con las cifras de arriba */
  analisis: string[];
};

export const DATOS_OFICIALES_CCAA: Record<string, DatosOficialesCcaa> = {
  andalucia: {
    fallecidos: [197, 197, 232, 224],
    denuncias2024: 1425521,
    parque: 6377897,
    turismos: 4377255,
    motos: 849955,
    vehPorMilHab: 739,
    puestoVehPorMilHab: 11,
    radaresFijos: 148,
    radaresTramo: 9,
    analisis: [
      "En 2025 la DGT contó 224 fallecidos a 24 horas en las carreteras interurbanas andaluzas: uno de cada cinco de los 1.119 de toda España. Son 8 menos que en 2024, cuando se llegó a 232, el valor más alto de las cinco fechas que publica la DGT, pero 27 más que en 2019. Si se divide entre el parque de 2024, salen 3,5 víctimas por 100.000 vehículos (cálculo propio) y Andalucía queda por debajo de La Rioja o Extremadura aunque en cifras absolutas sea la comunidad con más víctimas.",
      "El volumen de sanciones acompaña al tamaño del parque: 6.377.897 vehículos, el 17,6 % del total nacional, y 1.425.521 denuncias formuladas en 2024, el 26 % de las 5.413.100 que recoge la DGT sin Cataluña ni País Vasco. Salen unas 224 denuncias por cada 1.000 vehículos, casi el doble que en la Comunidad de Madrid.",
      "El fichero abierto de la DGT lista 148 cabinas de radar fijo y 9 tramos de velocidad media en Andalucía. Sevilla (30), Málaga (28) y Cádiz (20) reúnen 78 de las 148 cabinas. Las carreteras con más cabinas son la A-7 (13), la A-4 (12) y la A-92 (10). La tanda del 27/02/2026 añadió un radar fijo en la A-8077 (Sevilla) y dos tramos en la A-355 (Málaga), uno por sentido.",
    ],
  },
  asturias: {
    fallecidos: [21, 38, 27, 28],
    denuncias2024: 96669,
    parque: 720409,
    turismos: 523414,
    motos: 71679,
    vehPorMilHab: 714,
    puestoVehPorMilHab: 13,
    radaresFijos: 22,
    radaresTramo: 1,
    analisis: [
      "Asturias cerró 2025 con 28 fallecidos a 24 horas en vías interurbanas, uno más que en 2024. El año de referencia más flojo fue 2023, con 38, y el mejor 2019, con 21. Repartidos entre sus vehículos, son 3,9 muertes por 100.000 (cálculo propio con datos de 2024), una proporción superior a la andaluza pese a que el principado tiene solo 720.409 vehículos.",
      "La actividad sancionadora es contenida: 96.669 denuncias formuladas en 2024, el 1,8 % del total que contabiliza la DGT, o 134 por cada 1.000 vehículos. Hay 523.414 turismos y 71.679 motocicletas, y el índice de 714 vehículos por 1.000 habitantes sitúa a la comunidad en el puesto 13 de 18.",
      "En el principado hay 22 cabinas fijas y un tramo de velocidad media en el fichero oficial. Casi la mitad, 10, están en la A-8, seguida de la A-66 con 4. Desde el 27/02/2026 la DGT también controla la velocidad en la AS-116 y la AS-377, dos carreteras autonómicas incorporadas en la última tanda de nuevos puntos.",
    ],
  },
  baleares: {
    fallecidos: [25, 41, 42, 31],
    denuncias2024: 153552,
    parque: 1107208,
    turismos: 735775,
    motos: 185727,
    vehPorMilHab: 899,
    puestoVehPorMilHab: 1,
    radaresFijos: 29,
    radaresTramo: 0,
    analisis: [
      "Baleares bajó de 42 fallecidos interurbanos en 2024 a 31 en 2025, 11 menos, un 26 % de descenso en un solo año. Aun así sigue seis por encima de los 25 de 2019. Medido contra el parque, el índice resultante es de 2,8 muertes por cada 100.000 vehículos (elaboración propia).",
      "Es la comunidad con más vehículos por habitante de España: 899 por cada 1.000, el puesto 1 de la tabla de la DGT. El parque suma 1.107.208 vehículos, con 735.775 turismos y 185.727 motocicletas, una de cada seis unidades. En 2024 se formularon 153.552 denuncias, unas 139 por cada 1.000 vehículos.",
      "Para Baleares el fichero oficial enumera 29 cabinas fijas y ningún tramo. Menorca (ME-1) y Mallorca (Ma-1, Ma-13) comparten el protagonismo con la EI-700 de Ibiza: cuatro cabinas en la primera y tres en cada una de las otras. Entre los 33 radares nuevos que Tráfico activó a finales de febrero de 2026 no hay ninguno balear.",
    ],
  },
  canarias: {
    fallecidos: [39, 34, 39, 53],
    denuncias2024: 214825,
    parque: 1878355,
    turismos: 1250325,
    motos: 187936,
    vehPorMilHab: 839,
    puestoVehPorMilHab: 3,
    radaresFijos: 17,
    radaresTramo: 2,
    analisis: [
      "Canarias es la comunidad donde más sube la mortalidad interurbana en 2025: de 39 a 53 fallecidos, 14 más, el segundo mayor aumento tras el de Navarra según la DGT. En las cuatro fechas anteriores que publica la DGT (2016, 2019, 2023 y 2024) el archipiélago se movió entre 34 y 39. Proporcionalmente, el dato de 2025 equivale a 2,8 víctimas por 100.000 vehículos matriculados (elaboración propia).",
      "Con 1.878.355 vehículos, entre ellos 1.250.325 turismos y 187.936 motocicletas, tiene 839 vehículos por 1.000 habitantes, tercer puesto nacional. Las 214.825 denuncias de 2024 equivalen a unas 114 por cada 1.000 vehículos: la cifra más baja de las nueve comunidades con dato de denuncias que repasamos.",
      "El fichero abierto de la DGT registra 17 cabinas fijas (11 en Las Palmas y 6 en Santa Cruz de Tenerife) y 2 tramos de velocidad media. La GC-1 concentra 5 de las cabinas. El 27/02/2026 se pusieron en marcha además un radar fijo en la GC-20, un tramo en la GC-23 y otro fijo en la TF-1 de Tenerife.",
    ],
  },
  cantabria: {
    fallecidos: [9, 14, 11, 14],
    denuncias2024: 77688,
    parque: 454529,
    turismos: 320914,
    motos: 50707,
    vehPorMilHab: 769,
    puestoVehPorMilHab: 9,
    radaresFijos: 10,
    radaresTramo: 2,
    analisis: [
      "Cantabria registró 14 fallecidos interurbanos en 2025, tres más que en 2024 y cinco más que en 2019. La DGT la cita, junto con La Rioja, entre las comunidades con menos víctimas mortales del año. Dividido por su flota, el resultado es 3,1 fallecidos por 100.000 vehículos (cálculo propio), por debajo de los 3,9 de Asturias.",
      "Es una de las flotas más reducidas del país: 454.529 vehículos, de ellos 320.914 turismos y 50.707 motos. Las 77.688 denuncias de 2024 son el volumen más bajo entre las comunidades con datos en el Anuario de la DGT (sin contar Ceuta y Melilla), y equivalen a 171 por cada 1.000 vehículos.",
      "El fichero abierto de la DGT contiene 10 cabinas fijas y 2 tramos de velocidad media. La A-67 y la A-8 tienen cuatro cabinas cada una y la S-10 dos. Esa misma tanda sumó en Cantabria tres radares fijos nuevos: en la N-611 (pk 194+330), en la CA-142 (pk 23+360) y en la CA-141 (pk 21+300).",
    ],
  },
  cataluna: {
    fallecidos: [175, 152, 136, 144],
    denuncias2024: null,
    parque: 5384692,
    turismos: 3451607,
    motos: 978679,
    vehPorMilHab: 672,
    puestoVehPorMilHab: 17,
    radaresFijos: null,
    radaresTramo: null,
    analisis: [
      "En 2025 Cataluña sumó 144 fallecidos a 24 horas en vías interurbanas, el 13 % del total español, 8 más que en 2024 pero 31 menos que en 2019 (-18 %). Es una de las pocas comunidades grandes con una cifra claramente inferior a la prepandemia. Dividida entre su parque, la cifra se queda en 2,7 víctimas por 100.000 vehículos (elaboración propia).",
      "Su parque es el tercero del país (5.384.692 vehículos, el 14,9 %) y tiene un rasgo propio: 978.679 motocicletas, más que ninguna otra comunidad y el 22,6 % de todas las de España. En vehículos por 1.000 habitantes marca 672, el puesto 17. El Anuario de la DGT no incluye las denuncias catalanas porque la competencia está transferida, así que no se puede comparar el volumen de sanciones con otras regiones.",
      "El Servei Català de Trànsit publica en su fichero de radares fijos de Cataluña 246 puntos de control en carretera, entre cabinas fijas y tramos. La A-2 encabeza la lista con 20, seguida de la C-31 y la N-340 con 13 cada una, y de la N-2 y la C-16 con 11. Los radares móviles y de remolque se publican en un fichero aparte.",
    ],
  },
  extremadura: {
    fallecidos: [36, 51, 32, 39],
    denuncias2024: 141639,
    parque: 888943,
    turismos: 628173,
    motos: 72681,
    vehPorMilHab: 843,
    puestoVehPorMilHab: 2,
    radaresFijos: 20,
    radaresTramo: 0,
    analisis: [
      "Extremadura terminó 2025 con 39 fallecidos interurbanos, siete más que en 2024 (32) y doce menos que en 2023 (51). Su proporción es de 4,4 muertes por 100.000 vehículos del parque (cálculo propio) y tiene una de las ratios más altas de la serie, solo superada aquí por La Rioja, porque reparte esas muertes entre apenas 888.943 vehículos.",
      "Es la segunda comunidad con más vehículos por habitante (843 por 1.000), un parque de 628.173 turismos y 72.681 motos. En 2024 se formularon 141.639 denuncias, unas 159 por cada 1.000 vehículos.",
      "Extremadura aparece con 20 cabinas fijas y ningún tramo en el fichero de la DGT: 11 en Badajoz y 9 en Cáceres. La A-5 reúne 5, la A-66 tiene 3 y la N-432 dos. Los 33 radares estrenados a finales de febrero de 2026 tampoco incluyen ningún punto extremeño.",
    ],
  },
  "la-rioja": {
    fallecidos: [16, 11, 7, 11],
    denuncias2024: 85436,
    parque: 228859,
    turismos: 157202,
    motos: 21402,
    vehPorMilHab: 706,
    puestoVehPorMilHab: 14,
    radaresFijos: 13,
    radaresTramo: 0,
    analisis: [
      "La Rioja fue en 2025, junto con Cantabria, una de las dos comunidades con menos fallecidos interurbanos: 11, cuatro más que en 2024, cuando registró 7, el mínimo de las cinco fechas publicadas. En 2019 habían sido 16. El dato engaña por el tamaño: sobre 228.859 vehículos supone 4,8 muertes por 100.000 vehículos, la proporción más alta de las once comunidades de esta serie (cálculo propio).",
      "Es el parque más pequeño de España, el 0,6 % del total, con 157.202 turismos y 21.402 motos. Las denuncias formuladas en 2024 fueron 85.436, es decir, unas 373 por cada 1.000 vehículos, más del triple que la Comunidad de Madrid y el nivel más alto de las comunidades analizadas.",
      "La Rioja figura con 13 cabinas fijas y sin tramos de velocidad media en el fichero oficial. La AP-68, la autopista de peaje entre Bilbao y Zaragoza, acumula 4, la N-232 tiene 3 y la A-12 dos.",
    ],
  },
  madrid: {
    fallecidos: [90, 77, 69, 59],
    denuncias2024: 657070,
    parque: 5490370,
    turismos: 4099529,
    motos: 464348,
    vehPorMilHab: 783,
    puestoVehPorMilHab: 8,
    radaresFijos: 39,
    radaresTramo: 1,
    analisis: [
      "Madrid es la comunidad donde más ha bajado la mortalidad interurbana respecto a 2019: de 90 fallecidos a 59 en 2025, un 34 % menos, tras 77 en 2023 y 69 en 2024. Es también la ratio más baja de las once comunidades de esta serie, 1,1 muertes por 100.000 vehículos (cálculo propio con el parque de 2024), algo que se explica en parte porque buena parte de la circulación madrileña es urbana y el recuento de la DGT solo cubre vías interurbanas.",
      "Su parque de 5.490.370 vehículos es el segundo de España. Tiene el mayor número de furgonetas (505.829) y de autobuses (12.100) del país, además de 4.099.529 turismos y 464.348 motos. Las 657.070 denuncias de 2024 salen a unas 120 por cada 1.000 vehículos, de las cifras más bajas.",
      "En la Comunidad de Madrid el fichero oficial contabiliza 39 cabinas fijas y un único tramo de velocidad media, sin incluir los radares municipales. La M-40 tiene 4 cabinas; la A-3 y la A-1, 3 cada una; la M-505, 2. El 27/02/2026 la DGT puso en servicio radares fijos en la M-601 y la M-100 y un tramo en la M-501, con control en los dos sentidos.",
    ],
  },
  murcia: {
    fallecidos: [34, 40, 49, 33],
    denuncias2024: 145843,
    parque: 1182438,
    turismos: 825578,
    motos: 137453,
    vehPorMilHab: 754,
    puestoVehPorMilHab: 10,
    radaresFijos: 14,
    radaresTramo: 4,
    analisis: [
      "La Región de Murcia pasó de 49 fallecidos interurbanos en 2024 a 33 en 2025: 16 menos, una de las mayores reducciones del país según la DGT, que la cita junto con la Comunitat Valenciana. Con eso volvió al nivel de 2019, cuando fueron 34. Su proporción con el parque es de 2,8 víctimas por 100.000 vehículos (elaboración propia).",
      "El parque suma 1.182.438 vehículos: 825.578 turismos y 137.453 motocicletas, con 754 vehículos por 1.000 habitantes (décimo puesto). En 2024 se formularon 145.843 denuncias, alrededor de 123 por cada 1.000 vehículos.",
      "El fichero abierto de la DGT registra 14 cabinas fijas y 4 tramos de velocidad media, contados por sentido. La A-30 reúne 5 cabinas y la RM-11 dos. En febrero de 2026 la DGT añadió un radar fijo en la RM-620 (pk 4+228).",
    ],
  },
  "pais-vasco": {
    fallecidos: [38, 32, 28, 36],
    denuncias2024: null,
    parque: 1416377,
    turismos: 1011282,
    motos: 163682,
    vehPorMilHab: 636,
    puestoVehPorMilHab: 18,
    radaresFijos: null,
    radaresTramo: null,
    analisis: [
      "El País Vasco tuvo 36 fallecidos a 24 horas en vías interurbanas en 2025, ocho más que en 2024 y dos menos que en 2019. En la serie de la DGT, 2024 con 28 fue su mejor año. Contra su flota de 2024 salen 2,5 muertes por 100.000 vehículos (cálculo propio), solo por encima de la de Madrid entre las once comunidades de esta serie.",
      "Tiene 1.416.377 vehículos, de ellos 1.011.282 turismos y 163.682 motos, y es la comunidad con menos vehículos por habitante de España: 636 por cada 1.000, el último de los 18 puestos de la tabla de la DGT. Como en Cataluña, el Anuario no recoge sus denuncias porque el tráfico es competencia autonómica.",
      "El fichero abierto de radares de la DGT excluye el País Vasco. Las cabinas de radar fijo de la comunidad las publica la Dirección de Tráfico del Gobierno Vasco en su portal Trafikoa (apps.trafikoa.euskadi.eus), por lo que aquí no damos un recuento propio.",
    ],
  },
};
