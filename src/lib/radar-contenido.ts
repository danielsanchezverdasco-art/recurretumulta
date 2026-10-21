// src/lib/radar-contenido.ts
// 21/10/2026 (Niky): bloques editoriales de la ficha de radar generados SOLO
// desde los datos oficiales del propio radar (indice.json: carretera, pk,
// sentido, tipo, límite, municipio, comunidad, coordenadas) y del índice
// completo (conteos por vía/comunidad y radares cercanos reales).
//
// Motivo: el censo completo v4.2 midió 68–91 palabras por página de radar en
// el HTML estático (migas + tabla + mapa), porque el texto único de cada
// .md se carga en cliente y no siempre llega al HTML prerenderizado. Estos
// bloques se renderizan con la ficha (mismo pase que la tabla de datos) y
// garantizan contenido útil y distinto en cada página: ubicación explicada,
// cuadro oficial de sanciones de la DGT para el límite del punto, qué hacer
// si te caza, radares cercanos reales y FAQ con schema.
//
// PROHIBIDO INVENTAR: sin límite publicado (velocidad_limite null) no se
// afirma ningún límite: se dice que manda la señalización. El cuadro de
// sanciones es el general oficial (Ley de Tráfico y Seguridad Vial, cuadro
// de sanciones por exceso de velocidad difundido por la DGT) y solo se
// aplica a los límites presentes en el índice (80, 90 y 120 km/h).

export type RadarDatos = {
  id_unico: string;
  comunidad: string;
  carretera: string;
  pk: string | number;
  sentido: string;
  tipo: string;
  velocidad_limite: number | null;
  municipio: string;
  lat: number;
  lon: number;
};

export type FilaSancion = {
  rango: string;
  importe: number;
  puntos: number;
};

export type RadarCercano = {
  id_unico: string;
  texto: string;
};

export type FaqRadar = {
  pregunta: string;
  respuesta: string;
};

export type ContenidoRadar = {
  dondeEsta: string[];
  sancionIntro: string;
  sancionFilas: FilaSancion[] | null;
  sancionCierre: string;
  cazado: string[];
  cercanosIntro: string;
  cercanos: RadarCercano[];
  faq: FaqRadar[];
};

/** Cuadro oficial de sanciones por exceso de velocidad (DGT / Ley de Tráfico
 *  y Seguridad Vial): velocidad registrada → importe y puntos, por límite.
 *  Solo límites presentes en el índice de radares (80, 90, 120). */
const CUADRO_SANCIONES: Record<number, FilaSancion[]> = {
  80: [
    { rango: "81 a 110 km/h", importe: 100, puntos: 0 },
    { rango: "111 a 130 km/h", importe: 300, puntos: 2 },
    { rango: "131 a 140 km/h", importe: 400, puntos: 4 },
    { rango: "141 a 150 km/h", importe: 500, puntos: 6 },
    { rango: "151 km/h o más", importe: 600, puntos: 6 },
  ],
  90: [
    { rango: "91 a 120 km/h", importe: 100, puntos: 0 },
    { rango: "121 a 140 km/h", importe: 300, puntos: 2 },
    { rango: "141 a 150 km/h", importe: 400, puntos: 4 },
    { rango: "151 a 160 km/h", importe: 500, puntos: 6 },
    { rango: "161 km/h o más", importe: 600, puntos: 6 },
  ],
  120: [
    { rango: "121 a 150 km/h", importe: 100, puntos: 0 },
    { rango: "151 a 170 km/h", importe: 300, puntos: 2 },
    { rango: "171 a 180 km/h", importe: 400, puntos: 4 },
    { rango: "181 a 190 km/h", importe: 500, puntos: 6 },
    { rango: "191 km/h o más", importe: 600, puntos: 6 },
  ],
};

/** Comunidad (nombre del índice) → slug de /comunidades/<slug>/.
 *  Verificado contra src/lib/comunidades-data.ts. */
export const SLUG_COMUNIDAD: Record<string, string> = {
  "Aragón": "aragon",
  "Canarias": "canarias",
  "Cantabria": "cantabria",
  "Castilla y León": "castilla-y-leon",
  "Castilla-La Mancha": "castilla-la-mancha",
  "Comunidad Foral de Navarra": "navarra",
  "Comunitat Valenciana": "comunidad-valenciana",
  "Extremadura": "extremadura",
  "Galicia": "galicia",
  "Illes Balears": "baleares",
  "La Rioja": "la-rioja",
  "Principado de Asturias": "asturias",
  "Región de Murcia": "murcia",
};

function pkNumero(pk: string | number): number {
  const n = typeof pk === "number" ? pk : parseFloat(String(pk).replace(",", "."));
  return Number.isFinite(n) ? n : 0;
}

/** pk en formato español: 125.49 → «125,49». Se redondea a 3 decimales
 *  (precisión de metro) para no arrastrar artefactos float del dataset
 *  (p. ej. 32.560002 → «32,56»). */
export function fmtPk(pk: string | number): string {
  const n = pkNumero(pk);
  if (!Number.isFinite(n)) return String(pk).replace(".", ",");
  const redondeado = Math.round(n * 1000) / 1000;
  return String(redondeado).replace(".", ",");
}

/** Distancia por carretera entre dos pk: «12,7 km» o «300 m». */
function fmtDistancia(km: number): string {
  if (km >= 1) return `${km.toFixed(1).replace(".", ",")} km`;
  const m = Math.max(50, Math.round((km * 1000) / 10) * 10);
  return `${m} m`;
}

function hashId(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h;
}

function elegir<T>(variantes: T[], semilla: number): T {
  return variantes[Math.abs(semilla) % variantes.length];
}

function capitalizar(s: string): string {
  return s.length > 0 ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}

function explicacionSentido(sentido: string): string {
  if (sentido === "creciente") return "el de los puntos kilométricos ascendentes";
  if (sentido === "decreciente") return "el de los puntos kilométricos descendentes";
  return "ambos sentidos de la circulación";
}

function descripcionTipo(tipo: string, semilla: number): string {
  if (tipo === "tramo") {
    return elegir(
      [
        "Es un radar de tramo: dos puntos de control registran la matrícula y la hora de paso de cada " +
          "vehículo y calculan su velocidad media en el recorrido intermedio. No sirve de nada frenar solo " +
          "al llegar a la cabina: lo que se sanciona es la media de todo el tramo controlado.",
        "Funciona como radar de tramo: cronometra cada vehículo entre dos puntos y obtiene su velocidad " +
          "media en ese recorrido. Si la media supera el límite, hay denuncia; por eso levantar el pie " +
          "solo al pasar junto a la cabina no evita la multa en este tipo de control.",
      ],
      semilla,
    );
  }
  if (tipo === "fijo") {
    return elegir(
      [
        "Es un radar fijo: un cinemómetro instalado de forma permanente en este punto de la vía que mide " +
          "la velocidad instantánea de cada vehículo al pasar frente a él. Su ubicación es pública y está " +
          "señalizada: la propia autoridad de tráfico la difunde en su fichero oficial de radares fijos.",
        "Se trata de un cinemómetro fijo, instalado de forma permanente junto a la calzada. Mide la " +
          "velocidad instantánea de cada vehículo en el momento de pasar y, si supera el límite vigente, " +
          "registra la evidencia para tramitar la denuncia. Estos controles están señalizados y su " +
          "ubicación figura en el fichero oficial de radares.",
      ],
      semilla,
    );
  }
  return elegir(
    [
      "Es un radar de cabina: el cinemómetro va instalado dentro de una cabina metálica fija junto a la " +
        "calzada y mide la velocidad instantánea de cada vehículo en el momento de pasar frente a ella. Si " +
        "la velocidad registrada supera el límite vigente, el equipo guarda la evidencia y la denuncia se " +
        "tramita después; no hay parada en el momento.",
      "El equipo es un cinemómetro en cabina: una cabina metálica fija, instalada junto a la calzada, que " +
        "alberga el medidor. Registra la velocidad instantánea de cada vehículo al pasar frente a ella y, " +
        "si rebasa el límite vigente, guarda la evidencia para que la denuncia se tramite a posteriori, " +
        "sin detener al conductor en el acto.",
    ],
    semilla,
  );
}

/** Radares cercanos reales: primero los de la misma carretera a un máximo de
 *  60 km por pk (un «cercano» a 276 km no es cercano), y si faltan, los más
 *  próximos de la misma comunidad por coordenadas. */
export function radaresCercanos(radar: RadarDatos, lista: RadarDatos[]): RadarCercano[] {
  const pk0 = pkNumero(radar.pk);
  const mismaVia = lista
    .filter((r) => r.id_unico !== radar.id_unico && r.carretera === radar.carretera)
    .map((r) => ({ r, dist: Math.abs(pkNumero(r.pk) - pk0) }))
    .filter(({ dist }) => dist <= 60)
    .sort((a, b) => a.dist - b.dist);

  const salida: RadarCercano[] = mismaVia.slice(0, 4).map(({ r, dist }) => ({
    id_unico: r.id_unico,
    texto:
      `Radar ${r.carretera}, pk ${fmtPk(r.pk)} (${r.sentido}) — ${r.municipio}, ` +
      `a ${fmtDistancia(dist)} por la misma carretera`,
  }));

  if (salida.length < 3) {
    const usados = new Set(salida.map((c) => c.id_unico));
    const mismaComunidad = lista
      .filter(
        (r) =>
          r.id_unico !== radar.id_unico &&
          r.comunidad === radar.comunidad &&
          !usados.has(r.id_unico),
      )
      .map((r) => ({
        r,
        dist: Math.hypot(r.lat - radar.lat, r.lon - radar.lon),
      }))
      .sort((a, b) => a.dist - b.dist);
    for (const { r } of mismaComunidad) {
      if (salida.length >= 4) break;
      salida.push({
        id_unico: r.id_unico,
        texto:
          `Radar ${r.carretera}, pk ${fmtPk(r.pk)} (${r.sentido}) — ${r.municipio}, ` +
          `también en ${r.comunidad}`,
      });
    }
  }
  return salida;
}

export function generarContenidoRadar(radar: RadarDatos, lista: RadarDatos[]): ContenidoRadar {
  const h = hashId(radar.id_unico);
  const pk = fmtPk(radar.pk);
  const limite = radar.velocidad_limite;
  const filas = limite != null ? (CUADRO_SANCIONES[limite] ?? null) : null;

  // ---- Bloque 1: dónde está -------------------------------------------------
  const apertura = elegir(
    [
      `El radar está instalado en el punto kilométrico ${pk} de la ${radar.carretera}, dentro del ` +
        `término municipal de ${radar.municipio} (${radar.comunidad}). Vigila el sentido ` +
        `${radar.sentido} de la circulación, es decir, ${explicacionSentido(radar.sentido)}.`,
      `En el pk ${pk} de la ${radar.carretera}, a su paso por ${radar.municipio} ` +
        `(${radar.comunidad}), se encuentra este control fijo de velocidad. Solo mide a los ` +
        `vehículos que circulan en sentido ${radar.sentido}: ${explicacionSentido(radar.sentido)}.`,
      `Este cinemómetro se sitúa en la ${radar.carretera}, exactamente en su punto kilométrico ` +
        `${pk}, en el término de ${radar.municipio}, ${radar.comunidad}. Controla el sentido ` +
        `${radar.sentido} de la vía (${explicacionSentido(radar.sentido)}), así que no afecta a ` +
        `quien circula en dirección contraria.`,
    ],
    h,
  );

  const deLaVia = lista.filter((r) => r.carretera === radar.carretera);
  const deLaViaEnComunidad = deLaVia.filter((r) => r.comunidad === radar.comunidad);
  const deLaComunidad = lista.filter((r) => r.comunidad === radar.comunidad);
  const posicion =
    deLaViaEnComunidad
      .slice()
      .sort((a, b) => pkNumero(a.pk) - pkNumero(b.pk))
      .findIndex((r) => r.id_unico === radar.id_unico) + 1;

  let contexto: string;
  if (deLaViaEnComunidad.length > 1) {
    contexto = elegir(
      [
        `En el índice oficial de radares fijos, la ${radar.carretera} acumula ${deLaVia.length} ` +
          `controles en toda España, ${deLaViaEnComunidad.length} de ellos en ${radar.comunidad}. ` +
          `Ordenados por punto kilométrico dentro de la comunidad, este es el número ${posicion}.`,
        `No es el único control de esta carretera: el índice oficial recoge ${deLaViaEnComunidad.length} ` +
          `radares fijos de la ${radar.carretera} en ${radar.comunidad} y ${deLaVia.length} en el ` +
          `conjunto del país. Por orden de punto kilométrico, el de ${radar.municipio} es el ` +
          `número ${posicion} de la comunidad.`,
      ],
      h >> 3,
    );
  } else {
    contexto =
      `Es el único control fijo registrado en la ${radar.carretera} dentro de ${radar.comunidad}; ` +
      `en toda la comunidad, el índice oficial recoge ${deLaComunidad.length} radares fijos.`;
  }

  const dondeEsta = [apertura, descripcionTipo(radar.tipo, h >> 13), contexto];

  // ---- Bloque 2: sanción según el límite -----------------------------------
  let sancionIntro: string;
  let sancionCierre: string;
  if (limite != null && filas) {
    sancionIntro = elegir(
      [
        `El límite recogido para este punto es de ${limite} km/h. Superarlo no cuesta siempre lo ` +
          `mismo: el cuadro de sanciones por exceso de velocidad (Ley de Tráfico y Seguridad Vial, ` +
          `difundido por la DGT) fija importe y puntos según la velocidad registrada. Para un ` +
          `límite de ${limite} km/h, los tramos son estos:`,
        `La ficha oficial asigna a este punto un límite de ${limite} km/h. Si el cinemómetro te ` +
          `registra por encima, la sanción depende de cuánto te pases, según el cuadro general de ` +
          `la DGT para excesos de velocidad:`,
        `Aquí el límite es de ${limite} km/h. Esto es lo que arriesgas si pasas por el pk ${pk} ` +
          `por encima de esa velocidad, según el cuadro oficial de sanciones por exceso de ` +
          `velocidad de la Ley de Tráfico y Seguridad Vial:`,
      ],
      h >> 5,
    );
    sancionCierre = elegir(
      [
        `Antes de fijar la velocidad de la denuncia, el cinemómetro aplica a tu favor el margen de ` +
          `error oficial del equipo: en radares fijos y de tramo, 3 km/h hasta 100 km/h y el 3 % por ` +
          `encima de 100 km/h (Orden PCM/1030/2020). Si pagas dentro de los 20 días naturales desde la ` +
          `notificación, el importe se reduce al 50 %, pero renuncias a presentar alegaciones.`,
        `La velocidad de la denuncia no es la que marca el cuadro del coche: el equipo aplica antes ` +
          `el margen de error oficial a favor del conductor (3 km/h hasta 100 km/h y el 3 % por encima, ` +
          `en radares fijos y de tramo, según la Orden PCM/1030/2020). Con pronto pago —20 días ` +
          `naturales desde la notificación— la multa queda a la mitad, a cambio de no presentar ` +
          `alegaciones.`,
        `Dos cosas a tener en cuenta: la velocidad sancionable sale de aplicar al registro el margen ` +
          `de error oficial del cinemómetro (3 km/h o el 3 % en fijos y de tramo, Orden PCM/1030/2020), ` +
          `y el importe de la tabla se reduce al 50 % si pagas en los 20 días naturales siguientes a ` +
          `la notificación, renunciando en ese caso a alegar.`,
      ],
      h >> 17,
    );
  } else {
    sancionIntro =
      `La DGT no publica el límite concreto de este punto en su fichero oficial, así que el que ` +
      `manda es el de la señalización del tramo al acercarte al pk ${pk}. Lo que sí es fijo es el ` +
      `criterio de sanción: se aplica el cuadro general por exceso de velocidad de la Ley de ` +
      `Tráfico y Seguridad Vial.`;
    sancionCierre = elegir(
      [
        `Con ese cuadro, los excesos menores se sancionan con 100 € sin pérdida de puntos, y la ` +
          `escala sube a 300 € y 2 puntos, 400 € y 4 puntos, 500 € y 6 puntos y, para los excesos más ` +
          `graves, 600 € y 6 puntos, siempre según cuánto superes el límite vigente en el tramo. Si ` +
          `pagas dentro de los 20 días naturales desde la notificación, el importe se reduce al 50 %, ` +
          `pero renuncias a presentar alegaciones.`,
        `La escala es la misma en toda España: 100 € sin puntos para los excesos menores y, a medida ` +
          `que crece el exceso, 300 € y 2 puntos, 400 € y 4 puntos, 500 € y 6 puntos y hasta 600 € y ` +
          `6 puntos. El pronto pago, dentro de los 20 días naturales desde la notificación, deja el ` +
          `importe a la mitad pero implica renunciar a las alegaciones.`,
      ],
      h >> 17,
    );
  }

  // ---- Bloque 3: si te ha cazado -------------------------------------------
  const cazado = [
    elegir(
      [
        `Si has pasado por el pk ${pk} de la ${radar.carretera} por encima del límite, no lo sabrás ` +
          `en el momento: la denuncia llega después, por correo postal al domicilio del titular del ` +
          `vehículo o a su Dirección Electrónica Vial si está dado de alta. También se publica en ` +
          `el TESTRA, el tablón edictal de sanciones, cuando no se logra notificar en persona.`,
        `La denuncia de un radar fijo no se entrega en mano: si el equipo del pk ${pk} registró tu ` +
          `paso por encima del límite, la recibirás en casa por correo postal o en tu Dirección ` +
          `Electrónica Vial. Desde la notificación empieza a contar el plazo para decidir qué hacer.`,
      ],
      h >> 7,
    ),
    elegir(
      [
        `Antes de pagar, revisa la denuncia con calma: comprueba que la matrícula, la carretera ` +
          `(${radar.carretera}), el punto kilométrico (${pk}), el sentido (${radar.sentido}) y la ` +
          `velocidad registrada coinciden con los datos oficiales de esta ficha. Un error en la ` +
          `identificación del vehículo o del conductor, en la señalización del tramo o en la ` +
          `verificación del cinemómetro puede ser motivo de alegaciones. Tienes 20 días naturales ` +
          `para pagar con el 50 % de descuento o para alegar: las dos opciones se excluyen.`,
        `No pagues a ciegas: contrasta la denuncia con esta ficha. La carretera (${radar.carretera}), ` +
          `el punto kilométrico (${pk}), el sentido (${radar.sentido}) y la velocidad registrada deben ` +
          `coincidir con los datos oficiales del radar. Si algo no cuadra —vehículo o conductor mal ` +
          `identificados, señalización deficiente o cinemómetro sin la verificación en vigor— puede ` +
          `haber base para alegar. El plazo es de 20 días naturales, y pagar con descuento y alegar ` +
          `son opciones incompatibles.`,
        `Merece la pena dedicar cinco minutos a revisar el boletín: ¿coinciden la matrícula, la ` +
          `${radar.carretera}, el pk ${pk}, el sentido ${radar.sentido} y la velocidad registrada con ` +
          `lo que dice la ficha oficial? Un defecto en cualquiera de esos datos, o en la verificación ` +
          `periódica del equipo, puede sostener unas alegaciones. Recuerda que el plazo de 20 días ` +
          `naturales sirve para pagar a mitad de precio o para recurrir, pero no para las dos cosas.`,
      ],
      h >> 19,
    ),
  ];

  // ---- Bloque 4: cercanos ----------------------------------------------------
  const cercanos = radaresCercanos(radar, lista);
  const cercanosIntro =
    cercanos.length > 0
      ? elegir(
          [
            `Si recorres esta zona, estos son los controles fijos más próximos a este punto ` +
              `según el índice oficial:`,
            `El control de ${radar.municipio} no está solo. Estos son los radares fijos más ` +
              `cercanos registrados en el índice oficial:`,
          ],
          h >> 11,
        )
      : `Este es el único radar fijo del índice oficial en su entorno inmediato.`;

  // ---- FAQ -------------------------------------------------------------------
  const faq: FaqRadar[] = [
    {
      pregunta: `¿Dónde está el radar de la ${radar.carretera} situado en el pk ${pk}?`,
      respuesta:
        `Está en el término municipal de ${radar.municipio} (${radar.comunidad}), en el sentido ` +
        `${radar.sentido} de la ${radar.carretera}. Es un radar de tipo ${radar.tipo} y sus ` +
        `coordenadas oficiales (WGS84) son ${radar.lat}, ${radar.lon}.`,
    },
    limite != null && filas
      ? {
          pregunta: `¿Cuál es el límite de velocidad en este radar de ${radar.municipio}?`,
          respuesta: elegir(
            [
              `El límite recogido en la ficha oficial es de ${limite} km/h. Circular a ` +
                `${filas[0].rango.replace(" a ", "–")} supone 100 € sin pérdida de puntos; los ` +
                `excesos mayores suben a 300 € y 2 puntos, 400 € y 4 puntos, 500 € y 6 puntos y, ` +
                `desde ${filas[4].rango.replace(" o más", "")}, 600 € y 6 puntos.`,
              `La ficha oficial marca ${limite} km/h en este punto. Circular a ` +
                `${filas[0].rango.replace(" a ", "–")} cuesta 100 € sin puntos; por encima, la ` +
                `escala oficial sube a 300 € y 2 puntos, 400 € y 4 puntos, 500 € y 6 puntos y, desde ` +
                `${filas[4].rango.replace(" o más", "")}, 600 € y 6 puntos.`,
            ],
            h >> 23,
          ),
        }
      : {
          pregunta: `¿Cuál es el límite de velocidad en este radar de ${radar.municipio}?`,
          respuesta:
            `La DGT no publica el límite de este punto concreto en su fichero oficial: manda la ` +
            `señalización del tramo. La sanción, si te excedes, se calcula con el cuadro general ` +
            `por exceso de velocidad, de 100 € sin puntos a 600 € y 6 puntos según el exceso.`,
        },
    {
      pregunta: `¿Cómo sé si me ha multado el radar de la ${radar.carretera} pk ${pk}?`,
      respuesta:
        radar.tipo === "tramo"
          ? `No hay aviso en el momento: si tu velocidad media en el tramo superó el límite, la ` +
            `denuncia te llegará por correo postal o a tu Dirección Electrónica Vial, y también ` +
            `puedes consultarla en el TESTRA. Desde la notificación tienes 20 días naturales ` +
            `para pagar con el 50 % de descuento o presentar alegaciones.`
          : `No hay aviso en el momento: si el cinemómetro registró tu paso por encima del límite, ` +
            `la denuncia te llegará por correo postal o a tu Dirección Electrónica Vial, y ` +
            `también puedes consultarla en el TESTRA. Desde la notificación tienes 20 días ` +
            `naturales para pagar con el 50 % de descuento o presentar alegaciones.`,
    },
  ];

  return {
    dondeEsta,
    sancionIntro,
    sancionFilas: filas,
    sancionCierre,
    cazado,
    cercanosIntro,
    cercanos,
    faq,
  };
}

export function capitalizarTipo(tipo: string): string {
  return capitalizar(tipo);
}
