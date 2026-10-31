// Bloques locales de las 7 páginas de ciudad de /multas/ (Bilbao, San Sebastián,
// Vitoria, Ceuta, Melilla, Vigo y Santiago de Compostela). Todos los datos se
// consultaron en fuentes oficiales el 31/10/2026 y cada bloque cita la suya.
// La cabecera, los datos de contacto y las preguntas frecuentes de cada ciudad
// están en provincias-data.ts; aquí solo viven la sección local, el listado de
// radares y las notas de zonas de bajas emisiones.

export type RadarLocal = { via: string; pk: string; sentido: string; limite: string; zona: string };
export type BloqueLocal = {
  titulo: string;
  parrafos: string[];
  enlaces?: { texto: string; url: string }[];
  fuente: string;
};
export type CiudadMultas = {
  altHero: string;
  municipal: string;
  radaresIntro?: string;
  radares?: RadarLocal[];
  radaresMunicipio?: string;
  radaresCercanos?: string;
  radaresFuente?: { texto: string; url: string; urlTexto: string };
  zbeNota?: string;
  bloques: BloqueLocal[];
};

const TRAFIKOA = {
  texto: "listado oficial de cabinas de radar fijo de Trafikoa (Gobierno Vasco), comprobado el 31/10/2026; si un radar falta en esa relación, eso no implica que no exista. Los controles móviles tampoco figuran en un listado público",
  url: "https://apps.trafikoa.euskadi.eus/lfr/web/trafikoa/cabinas-de-radar-fijo",
  urlTexto: "apps.trafikoa.euskadi.eus",
};
const DGT_LISTADO = {
  texto: "listado oficial de radares fijos de la DGT, datos verificados el 31/10/2026; que un punto falte en el listado no demuestra que no haya control. Los móviles, además, carecen de lista pública",
  url: "https://www.dgt.es/inicio/",
  urlTexto: "dgt.es",
};
const INTRO_TRAFIKOA = "Carreteras donde Trafikoa (Gobierno Vasco) tiene cabinas de radar fijo:";

export const CIUDADES_MULTAS: Record<string, CiudadMultas> = {
  bilbao: {
    altHero: "Recurrir multas de tráfico en Bilbao: OTA, ZBE y radares de la A-8",
    municipal: "Si procede de la OTA o de la Policía Municipal, el escrito va al Ayuntamiento de Bilbao.",
    radaresIntro: INTRO_TRAFIKOA,
    radaresFuente: TRAFIKOA,
    radares: [
      { via: "A-8", pk: "120,530", sentido: "Donostia", limite: "80", zona: "Zorroza" },
      { via: "A-8", pk: "120,031", sentido: "Cantabria", limite: "80", zona: "Zorroza" },
      { via: "A-8", pk: "119,560", sentido: "Donostia", limite: "80", zona: "Salida Balmaseda" },
      { via: "A-8", pk: "119,430", sentido: "Cantabria", limite: "80", zona: "Monolito" },
      { via: "A-8", pk: "117,990", sentido: "Cantabria", limite: "70", zona: "Sabino Arana" },
      { via: "A-8", pk: "116,670", sentido: "Cantabria", limite: "80", zona: "Errekalde" },
      { via: "A-8", pk: "114,880", sentido: "Donostia", limite: "80", zona: "Miraflores" },
      { via: "AP-68", pk: "0,270", sentido: "Bilbao", limite: "80", zona: "Buia" },
    ],
    radaresCercanos: "En municipios vecinos, Trafikoa lista además Max Center y Cruces (Barakaldo, A-8 pk 123,500 y 121,480) y Kukularra (Erandio, N-637 pk 11,475).",
    zbeNota: "La ZBE de Bilbao afecta sobre todo a Abando e Indautxu y se aplica entre las 07:00 y las 20:00 de los días laborables (El Correo, 18/05/2026; ordenanza en vigor, verificada el 21/10/2026).",
    bloques: [
      {
        titulo: "Multas municipales en Bilbao",
        parrafos: [
          "Una misma calle de Bilbao puede darte tres tipos de sanción. La Policía Municipal denuncia las infracciones urbanas, la OTA controla las zonas azul y verde de estacionamiento regulado, y la Ertzaintza formula las denuncias de las carreteras vascas, entre ellas la A-8 cuando cruza el municipio. Las dos primeras dependen del Ayuntamiento y se contestan desde su sede electrónica; la tercera la instruye Trafikoa. Antes de redactar nada, mira qué organismo firma la notificación.",
          "Las cabinas de la A-8 en Bilbao no comparten límite. Según el listado de Trafikoa, la de Sabino Arana (pk 117,990, sentido Cantabria) está fijada en 70 km/h, mientras que Zorroza, Monolito, Errekalde y Miraflores aparecen con 80 km/h. Si la denuncia indica una velocidad máxima distinta de la que figura para ese punto y sentido, conviene señalarlo en las alegaciones.",
          "Para las multas de la OTA, la sede ofrece el trámite «Multas OTA: Alegaciones, recursos y otros actos de trámite». Allí eliges entre alegar contra la denuncia o presentar reposición contra la sanción. La oficina presencial está en el Edificio San Agustín, plaza Ernesto Erkoreka, planta baja, 48007 Bilbao. El pago con descuento de la denuncia pone fin al expediente, de modo que decide primero si vas a alegar.",
          "Si la notificación procede de la Ertzaintza en carretera, el escrito se dirige a Trafikoa, que es quien instruye, y no a la DGT ni al Ayuntamiento. La Jefatura Provincial de Tráfico de Bizkaia, en la calle Barroeta Aldamar, 1, solo gestiona vehículos y permisos de conducir.",
        ],
        enlaces: [
          { texto: "Sede electrónica del Ayuntamiento de Bilbao (bilbao.eus)", url: "https://www.bilbao.eus/" },
          { texto: "Trafikoa, Dirección de Tráfico del Gobierno Vasco", url: "https://www.trafikoa.euskadi.eus/inicio/" },
        ],
        fuente: "sede electrónica del Ayuntamiento de Bilbao y relación de cabinas de Trafikoa (consulta del 31/10/2026)",
      },
    ],
  },

  "san-sebastian": {
    altHero: "Recurrir multas de tráfico en San Sebastián: ZBE de Donostia, GI-20 y A-15",
    municipal: "Si la firma la Policía Municipal, se resuelve en el Ayuntamiento donostiarra.",
    radaresIntro: "Cabinas fijas del listado de Trafikoa (Gobierno Vasco) en Donostia / San Sebastián y la de Villabona que figura con sentido Donostia:",
    radaresFuente: TRAFIKOA,
    radares: [
      { via: "GI-20-9-2-S", pk: "0,675", sentido: "Donostia", limite: "50", zona: "Carlos I" },
      { via: "GI-20", pk: "4,000", sentido: "Bilbao", limite: "100", zona: "Pasaia" },
      { via: "GI-20", pk: "4,200", sentido: "Behobia", limite: "100", zona: "Pasaia" },
      { via: "GI-20", pk: "8,100", sentido: "Bilbao", limite: "80", zona: "La Salle" },
      { via: "GI-20", pk: "10,800", sentido: "Bilbao", limite: "80", zona: "Túnel de Aiete" },
      { via: "GI-11", pk: "1,370", sentido: "Madrid", limite: "80", zona: "Usurbil" },
      { via: "GI-11", pk: "1,700", sentido: "Irun", limite: "80", zona: "Usurbil" },
      { via: "GI-636", pk: "1,220", sentido: "Irun", limite: "80", zona: "Túnel de Molinao" },
      { via: "A-15", pk: "155,525", sentido: "Donostia", limite: "80", zona: "Curva de Billabona (Villabona)" },
    ],
    zbeNota: "La ZBE de Donostia-San Sebastián está activa las 24 horas del día (ordenanza publicada en el BOG nº 241 de 16/12/2024, verificada el 20/10/2026).",
    bloques: [
      {
        titulo: "Multas y ZBE en Donostia-San Sebastián",
        parrafos: [
          "Donostia reparte sus sanciones entre dos administraciones. En la GI-20, la A-15 y los túneles de acceso, la Ertzaintza denuncia y Trafikoa instruye; dentro de las calles, la Policía Municipal denuncia y el Ayuntamiento resuelve. El listado oficial de Trafikoa recoge ocho cabinas fijas en el municipio de Donostia / San Sebastián, más la de Villabona (A-15, pk 155,525), que figura con sentido Donostia. Entre las ocho, la de Carlos I (GI-20-9-2-S, pk 0,675), tiene un límite de 50 km/h, muy inferior al de las circunvalaciones.",
          "La zona de bajas emisiones merece atención aparte. El trámite «Acceso a Zona de Bajas Emisiones (ZBE)» de la sede municipal obliga a los vehículos sin distintivo ambiental a presentar antes una declaración responsable, por internet con identificación electrónica (B@kQ) o en las oficinas Udalinfo. Según Diario Vasco, las sanciones se aplican desde el 14/03/2025 y son de 200 euros. Si te multan, comprueba si tu vehículo tenía esa declaración registrada antes de pasar.",
          "Los escritos contra una multa municipal se presentan con los trámites «Multas de tráfico. Alegaciones» y «Recursos de reposición a la sanción». Es posible hacerlo con certificado electrónico o en persona en la Oficina de Recaudación, calle Ijentea 1, 20003 Donostia. El pago reducido cierra el procedimiento administrativo y solo deja abierta la vía contencioso-administrativa.",
        ],
        enlaces: [
          { texto: "Sede del Ayuntamiento de Donostia-San Sebastián", url: "https://www.donostia.eus/" },
          { texto: "Trafikoa, listado de cabinas de radar fijo", url: "https://apps.trafikoa.euskadi.eus/lfr/web/trafikoa/cabinas-de-radar-fijo" },
        ],
        fuente: "sede del Ayuntamiento donostiarra, Diario Vasco y cabinas fijas de Trafikoa (revisadas el 31/10/2026)",
      },
    ],
  },

  vitoria: {
    altHero: "Recurrir multas de tráfico en Vitoria-Gasteiz: ZBE del Casco Medieval y radares de Álava",
    municipal: "Cuando la denuncia viene de la Policía Local vitoriana, contesta el Ayuntamiento.",
    radaresIntro: "Cabina de radar fija de Trafikoa (Gobierno Vasco) dentro del término municipal de Vitoria-Gasteiz:",
    radaresFuente: TRAFIKOA,
    radares: [
      { via: "N-104", pk: "356,080", sentido: "Vitoria-Gasteiz", limite: "70", zona: "Arkaute (concejo de Vitoria-Gasteiz)" },
    ],
    radaresCercanos: "El resto de las cabinas alavesas de Trafikoa, como Altube, Egino y Subijana, están fuera del término municipal; se resumen en las preguntas frecuentes de esta misma ficha.",
    zbeNota: "La ZBE de Vitoria-Gasteiz está en vigor desde el 15/09/2025 y sanciona desde el 15/12/2025: 200 euros, o 100 con pago anticipado (web municipal, consultada el 31/10/2026).",
    bloques: [
      {
        titulo: "Radares, ZBE y alegaciones en Vitoria-Gasteiz",
        parrafos: [
          "En Álava, Trafikoa publica veinte puntos de cabina fija, casi todos en autopistas y carreteras convencionales del territorio histórico; el más cercano a la capital es el de Arkaute, en la N-104 (pk 356,080, límite de 70 km/h). Los radares urbanos de Vitoria-Gasteiz, en cambio, pertenecen al Ayuntamiento y no figuran en esa lista. Según Cadena SER (27/03/2026), el consistorio renovó los equipos y sumó cuatro puntos nuevos: avenida del Cantábrico, Zadorra-Donostia, Zumabide y Urartea. El Correo (06/09/2026) añadía que la puesta a punto final buscaba que empezaran a funcionar en otoño.",
          "La zona de bajas emisiones, de la ordenanza publicada en el BOTHA nº 48 del 02/05/2025, cubre en su primera fase el Casco Medieval y parte del Ensanche, 0,64 km² vigilados por más de treinta cámaras de lectura de matrícula. Pueden entrar los vehículos con etiqueta B, C, ECO y Cero; los que no tienen distintivo, no. La B quedará restringida desde el 01/01/2030. La fase 2, de 0,82 km² y con OTA ambiental, empezará el 15/09/2027, y los residentes cuentan con una exención hasta esa fecha.",
          "El baremo municipal fija las sanciones leves en hasta 100 euros, las graves en 200 y las muy graves en 500. Para contestar una denuncia local, la sede ofrece el trámite «Alegaciones contra la denuncia» (Hacienda y Recaudación), con 20 días naturales de plazo, por internet con certificado o en las Oficinas de Atención Ciudadana. Las multas interurbanas de la Ertzaintza siguen otro camino: las tramita Trafikoa.",
        ],
        enlaces: [
          { texto: "Ayuntamiento de Vitoria-Gasteiz", url: "https://www.vitoria-gasteiz.org/" },
          { texto: "Trafikoa, listado de cabinas de radar fijo", url: "https://apps.trafikoa.euskadi.eus/lfr/web/trafikoa/cabinas-de-radar-fijo" },
        ],
        fuente: "web y sede del Ayuntamiento de Vitoria-Gasteiz, Cadena SER (27/03/2026), El Correo (06/09/2026) y lista oficial de Trafikoa, verificada ese mismo 31/10/2026",
      },
    ],
  },

  ceuta: {
    altHero: "Recurrir multas de tráfico en Ceuta: Ciudad Autónoma, Policía Local y Jefatura de Tráfico",
    municipal: "Las denuncias de la Policía Local de Ceuta las resuelve la Ciudad Autónoma.",
    bloques: [
      {
        titulo: "Multas de la Ciudad Autónoma de Ceuta",
        parrafos: [
          "Ceuta no tiene ayuntamiento: la Ciudad Autónoma ejerce las funciones municipales y también las de comunidad autónoma. Por eso las denuncias de la Policía Local por estacionamiento o infracciones en las calles se tramitan dentro de su propia administración. Las instruye la Unidad de Sanciones de la Jefatura de Policía Local, y los descargos, comparecencias y recursos los recibe el Negociado de Circulación de la Consejería de Presidencia y Gobernación.",
          "La sede electrónica sede.ceuta.es tiene un trámite específico, «Alegaciones, comparecencias, pliegos de descargo y recursos sanciones de tráfico», al que se accede con certificado electrónico o Cl@ve; también puede presentarse el escrito en una oficina de registro. El plazo de alegaciones es de 20 días naturales y el del recurso de reposición, de un mes. La sede incluye además una reclamación para el servicio de estacionamiento regulado (ORA).",
          "Las multas de la DGT son otro asunto. Si no se logra entregar una notificación, la DGT la publica en el Tablón Edictal Único del BOE, según recogió El Faro de Ceuta el 13/05/2026; el edicto indica el órgano y el plazo para contestar. La Jefatura de Tráfico de Ceuta, en el Paseo de las Palmeras, 8, 51001, es una Jefatura Local: atiende permisos y vehículos, y los recursos de reposición de multas de la DGT se dirigen a ella o a la sede dgt.gob.es.",
        ],
        enlaces: [{ texto: "Sede electrónica de la Ciudad Autónoma de Ceuta", url: "https://sede.ceuta.es/" }],
        fuente: "sede.ceuta.es, BOE (Tablón Edictal Único) y El Faro de Ceuta (13/05/2026), consultados el 31/10/2026",
      },
    ],
  },

  melilla: {
    altHero: "Recurrir multas de tráfico en Melilla: Ciudad Autónoma, Foto Rojo y Jefatura de Tráfico",
    municipal: "Las sanciones urbanas de Melilla las gestiona la Ciudad Autónoma, no un ayuntamiento.",
    bloques: [
      {
        titulo: "Multas de la Ciudad Autónoma de Melilla",
        parrafos: [
          "Melilla también es Ciudad Autónoma y sus multas urbanas se rigen por la ordenanza municipal de tráfico de la propia Ciudad. La sede electrónica sede.melilla.es tiene un trámite titulado «Multas», que exige Cl@ve o certificado electrónico. Allí se presentan las alegaciones en el plazo de 20 días naturales, con reducción del 50 % si se paga dentro de ese plazo, y el recurso de reposición contra la resolución sancionadora.",
          "El sistema Foto Rojo es la novedad más concreta. El Faro de Melilla informó el 16/06/2026 de su activación en dos cruces: General Polavieja con Alfonso Gurrea y Álvaro de Bazán con General Ordóñez. Saltarse el semáforo en rojo supone 200 euros y la pérdida de 4 puntos. Durante el periodo de prueba se detectaron entre 800 y 900 saltos semanales, con unos 2.500 vehículos al día, según esa información.",
          "Hay una diferencia entre fuentes que conviene conocer. La ficha de la sede señala como órgano gestor la Consejería de Presidencia y Administración Pública, a través de la Dirección General de Presidencia y Universidades y de la Policía Local, mientras que el portal melilla.es atribuye las sanciones de la Policía Local a la Consejería de Seguridad Ciudadana. La notificación que recibas indica el órgano concreto, y es ante ese donde se presenta el escrito.",
          "Las multas de carretera de la DGT se alegan en la Jefatura de Tráfico de Melilla (Pablo Vallescá, 9, 52071) o en sede.dgt.gob.es.",
        ],
        enlaces: [
          { texto: "Sede electrónica de la Ciudad Autónoma de Melilla", url: "https://sede.melilla.es/" },
          { texto: "El Faro de Melilla: Melilla activa el sistema de Foto Rojo", url: "https://elfarodemelilla.es/melilla-activa-el-sistema-de-foto-rojo-con-multas-de-200-euros-y-retirada-de-cuatro-puntos/" },
        ],
        fuente: "sede.melilla.es, melilla.es y El Faro de Melilla (16/06/2026), consultados el 31/10/2026",
      },
    ],
  },

  vigo: {
    altHero: "Recurrir multas de tráfico en Vigo: radares de la DGT y multas del Concello",
    municipal: "Una denuncia de la Policía Local viguesa se contesta ante el Concello.",
    radaresIntro: "Radares fijos oficiales dentro del municipio de Vigo:",
    radaresMunicipio: "Vigo",
    radaresFuente: DGT_LISTADO,
    radaresCercanos: "Los radares de los municipios próximos de Mos y Redondela figuran en la ficha de",
    bloques: [
      {
        titulo: "Multas del Concello de Vigo",
        parrafos: [
          "Dentro del término de Vigo, el listado de la DGT contiene cinco puntos de control de velocidad: dos cabinas en la A-55 (pk 5,6 y 7,7, ambas en sentido decreciente y a 120 km/h), un tramo en la AP-9 (pk 155, decreciente, sin límite publicado) y dos cabinas en la AP-9V (pk 1,7 decreciente y pk 2,8 creciente, a 120 km/h). Las denuncias de esos radares son de la DGT, no del Concello.",
          "Las del Concello provienen de la Policía Local y se alegan por el trámite «Alegacións a Multas de Tráfico do Concello de Vigo» de la sede electrónica, abierto durante 20 días naturales desde el día siguiente a la notificación. Puede iniciarse por internet o en el Registro General. Contra la resolución sancionadora cabe reposición durante un mes. La atención presencial de Seguridad y Movilidad está en la Praza do Rei, 1, sótano 1, teléfono 986 810 291, de 9:00 a 13:30.",
          "Para pagar existe el trámite «Pagamento das Multas de Tráfico da Policía Local», en una entidad bancaria colaboradora o por internet, y la sede ofrece también una «Consulta das multas de tráfico» desde la Carpeta del Ciudadano. Abonar con el 50 % en 20 días naturales implica renunciar a alegar, así que esa decisión debe tomarse antes de pagar.",
        ],
        enlaces: [{ texto: "Sede electrónica del Concello de Vigo", url: "https://sede.vigo.org/" }],
        fuente: "sede.vigo.org y listado oficial de radares de la DGT, consultados el 31/10/2026",
      },
    ],
  },

  "santiago-compostela": {
    altHero: "Recurrir multas de tráfico en Santiago de Compostela: casco histórico, zona ORA y radares de la N-550",
    municipal: "En una sanción municipal compostelana, el destinatario es el Concello.",
    radaresIntro: "Radares fijos oficiales dentro del municipio de Santiago de Compostela:",
    radaresMunicipio: "Santiago de Compostela",
    radaresFuente: DGT_LISTADO,
    radaresCercanos: "Cerca, en el municipio de Teo, la DGT lista la cabina de la AP-9 pk 83,5 (sentido creciente, 120 km/h). El resto de radares de la provincia están en la ficha de",
    zbeNota: "En el casco histórico de Santiago vigilan bolardos y cámaras de matrícula: solo pasan los vehículos autorizados, y la etiqueta ambiental no da acceso (santiago.es, actualizado el 15/10/2026).",
    bloques: [
      {
        titulo: "Denuncias municipales y casco histórico en Santiago",
        parrafos: [
          "Las denuncias de tráfico municipales en Santiago las instruye la unidad de sanciones del departamento de tráfico de la Policía Local, y la autoridad sancionadora es el Concejal delegado de Tráfico. La oficina de Gestión de Multas está en la rúa Galeras, 13, bajo, teléfono 981 542 323. Las alegaciones se presentan en el Registro de las oficinas municipales dentro de los 20 días naturales siguientes a la notificación, y quien paga con la reducción del 50 % renuncia a alegar.",
          "El casco histórico entró en la ordenanza de circulación mediante su Anexo II (BOP da Coruña nº 192, de 04/10/2024) y, según santiago.es, una modificación del 10/11/2025 lo reconoció como zona de bajas emisiones. El acceso lo cierran 11 bolardos y 5 cámaras de lectura de matrícula. Solo pasan los vehículos autorizados; los no residentes disponen como máximo de 20 minutos. Una multa por entrar sin permiso puede revisarse comprobando si el vehículo figuraba en la lista de autorizados.",
          "La zona ORA, gestionada por Tussa, tiene tres áreas: corta duración, general y larga duración. Funciona de lunes a viernes de 10:00 a 14:00 y de 16:30 a 20:30, y los sábados de 10:00 a 14:00. Si el tique estaba caducado, la denuncia puede anularse pagando 2,90 euros cuando el exceso no llega a 30 minutos, o 6,00 euros en el resto de casos, en el parquímetro o con la aplicación Moviltik. El teléfono de la ORA es el 981 568 106.",
        ],
        enlaces: [
          { texto: "Concello de Santiago de Compostela (santiagodecompostela.gal)", url: "https://www.santiagodecompostela.gal/" },
        ],
        fuente: "web de la Policía Local, santiago.es, BOP da Coruña y Tussa, consultados el 31/10/2026",
      },
    ],
  },
};
