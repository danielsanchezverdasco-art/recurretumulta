// Base de datos de infracciones de tráfico españolas.
// Importes y puntos verificados contra la normativa vigente:
// - Reglamento General de Circulación (RD 1428/2003)
// - Ley sobre Tráfico, Circulación de Vehículos a Motor y Seguridad Vial (RDL 6/2015)
// - Reforma del Reglamento General de Circulación (RD 518/2026, en vigor desde el 01/10/2026)
// - Ley 18/2021 (endurecimiento: móvil en mano a 6 puntos, detector de radar a 500 €)
// - RDL 8/2004 (seguro obligatorio)
// Los importes son el importe base SIN aplicar el descuento del 50 % por pronto pago.

export type Gravedad = "leve" | "grave" | "muy grave";

export type CategoriaInfraccion =
  | "Velocidad"
  | "Alcohol y drogas"
  | "Móvil y distracciones"
  | "Cinturón y casco"
  | "Señalización"
  | "Circulación"
  | "Patinete / VMP"
  | "Documentación"
  | "Otras";

export interface Infraccion {
  codigo: string; // p. ej. "Art. 18.2 RGC"
  titulo: string;
  descripcion: string;
  importe: number; // euros, sin pronto pago
  importeMax?: number; // para rangos (p. ej. matrícula manipulada)
  puntos: number; // 0-6
  gravedad: Gravedad;
  baseLegal: string;
  boeUrl: string;
  categoria: CategoriaInfraccion;
  keywords: string[]; // para la búsqueda
  guiaSlug?: string; // /guias/... relacionada
  nota?: string;
}

const BOE_RGC = "https://www.boe.es/buscar/act.php?id=BOE-A-2003-23514";
const BOE_LSV = "https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722";
const BOE_RD518 = "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-13889";
const BOE_SEGURO = "https://www.boe.es/buscar/act.php?id=BOE-A-2004-18911";

export const INFRACCIONES: Infraccion[] = [
  // ─── VELOCIDAD (Anexo IV del RDL 6/2015) ───
  {
    codigo: "Art. 50 RGC",
    titulo: "Exceso de velocidad leve (hasta 20 km/h sobre el límite)",
    descripcion:
      "Superar el límite de velocidad hasta en 20 km/h (p. ej. 140 en una vía limitada a 120). Es la franja más común de las multas de radar.",
    importe: 100,
    puntos: 0,
    gravedad: "grave",
    baseLegal: "Art. 50 del Reglamento General de Circulación y Anexo IV del RDL 6/2015",
    boeUrl: BOE_LSV,
    categoria: "Velocidad",
    keywords: ["radar", "velocidad", "exceso", "límite", "cinemómetro", "50 rgc", "artículo 50"],
    guiaSlug: "radares",
  },
  {
    codigo: "Art. 50 RGC",
    titulo: "Exceso de velocidad de 21 a 30 km/h sobre el límite",
    descripcion:
      "Superar el límite entre 21 y 30 km/h (p. ej. 145-150 en vía de 120). Además de la multa, resta 2 puntos del carné.",
    importe: 300,
    puntos: 2,
    gravedad: "grave",
    baseLegal: "Art. 50 del Reglamento General de Circulación y Anexo IV del RDL 6/2015",
    boeUrl: BOE_LSV,
    categoria: "Velocidad",
    keywords: ["radar", "velocidad", "exceso", "límite", "puntos"],
    guiaSlug: "radares",
  },
  {
    codigo: "Art. 50 RGC",
    titulo: "Exceso de velocidad de 31 a 40 km/h sobre el límite",
    descripcion:
      "Superar el límite entre 31 y 40 km/h (p. ej. 151-160 en vía de 120). Sanción de 400 € y 4 puntos menos.",
    importe: 400,
    puntos: 4,
    gravedad: "grave",
    baseLegal: "Art. 50 del Reglamento General de Circulación y Anexo IV del RDL 6/2015",
    boeUrl: BOE_LSV,
    categoria: "Velocidad",
    keywords: ["radar", "velocidad", "exceso", "límite", "puntos"],
    guiaSlug: "radares",
  },
  {
    codigo: "Art. 50 RGC",
    titulo: "Exceso de velocidad de 41 a 50 km/h sobre el límite",
    descripcion:
      "Superar el límite entre 41 y 50 km/h (p. ej. 161-170 en vía de 120). Sanción de 500 € y 6 puntos menos.",
    importe: 500,
    puntos: 6,
    gravedad: "grave",
    baseLegal: "Art. 50 del Reglamento General de Circulación y Anexo IV del RDL 6/2015",
    boeUrl: BOE_LSV,
    categoria: "Velocidad",
    keywords: ["radar", "velocidad", "exceso", "límite", "puntos"],
    guiaSlug: "radares",
  },
  {
    codigo: "Art. 77 LSV",
    titulo: "Exceso de velocidad superior a 50 km/h sobre el límite",
    descripcion:
      "Superar el límite en más de 50 km/h (p. ej. más de 170 en vía de 120). Infracción muy grave: 600 € y 6 puntos. Ojo: a partir de 60 km/h de exceso en vía urbana o 80 en interurbana puede ser delito (art. 379 del Código Penal).",
    importe: 600,
    puntos: 6,
    gravedad: "muy grave",
    baseLegal: "Art. 77 del RDL 6/2015 y Anexo IV; art. 379 del Código Penal si es delito",
    boeUrl: BOE_LSV,
    categoria: "Velocidad",
    keywords: ["radar", "velocidad", "exceso", "límite", "puntos", "delito", "muy grave"],
    guiaSlug: "radares",
  },
  // ─── ALCOHOL Y DROGAS ───
  {
    codigo: "Art. 20 RGC",
    titulo: "Alcohol: tasa entre 0,25 y 0,50 mg/l en aire",
    descripcion:
      "Conducir con una tasa de alcohol entre 0,25 y 0,50 mg/l en aire espirado (0,5-1,0 g/l en sangre). 500 € y 4 puntos. Para noveles (menos de 2 años de carné) y profesionales el tramo equivalente es 0,15-0,30 mg/l.",
    importe: 500,
    puntos: 4,
    gravedad: "muy grave",
    baseLegal: "Art. 20 del Reglamento General de Circulación y art. 77 del RDL 6/2015",
    boeUrl: BOE_RGC,
    categoria: "Alcohol y drogas",
    keywords: ["alcohol", "alcoholemia", "etilómetro", "tasa", "0,25", "0,50", "20 rgc", "artículo 20"],
    guiaSlug: "alcohol-drogas",
  },
  {
    codigo: "Art. 20 RGC",
    titulo: "Alcohol: más de 0,50 mg/l o reincidencia",
    descripcion:
      "Superar los 0,50 mg/l en aire (0,30 mg/l en noveles y profesionales) o dar positivo habiendo sido sancionado por alcohol en el año anterior. 1.000 € y 6 puntos. A partir de 0,60 mg/l en aire es delito (art. 379.2 del Código Penal).",
    importe: 1000,
    puntos: 6,
    gravedad: "muy grave",
    baseLegal: "Art. 20 del Reglamento General de Circulación; art. 80.2.a) del RDL 6/2015",
    boeUrl: BOE_RGC,
    categoria: "Alcohol y drogas",
    keywords: ["alcohol", "alcoholemia", "tasa", "reincidente", "0,60", "delito"],
    guiaSlug: "alcohol-drogas",
  },
  {
    codigo: "Art. 14 LSV",
    titulo: "Conducir con presencia de drogas en el organismo",
    descripcion:
      "Dar positivo en drogas (saliva confirmada en laboratorio). Da igual la cantidad: cualquier presencia confirmada se sanciona con 1.000 € y 6 puntos. Los medicamentos con receta pueden alegarse en el recurso.",
    importe: 1000,
    puntos: 6,
    gravedad: "muy grave",
    baseLegal: "Art. 14 del RDL 6/2015 y art. 80.2.a)",
    boeUrl: BOE_LSV,
    categoria: "Alcohol y drogas",
    keywords: ["drogas", "estupefacientes", "saliva", "positivo", "cannabis", "14 lsv"],
    guiaSlug: "alcohol-drogas",
  },
  {
    codigo: "Art. 14 LSV",
    titulo: "Negarse a las pruebas de alcohol o drogas",
    descripcion:
      "Negarse a someterse a las pruebas de alcoholemia o drogas cuando lo requieren los agentes. 1.000 € y 6 puntos en vía administrativa. Además, la negativa puede constituir delito (art. 383 del Código Penal: prisión de 6 meses a 1 año).",
    importe: 1000,
    puntos: 6,
    gravedad: "muy grave",
    baseLegal: "Art. 14 del RDL 6/2015; art. 383 del Código Penal",
    boeUrl: BOE_LSV,
    categoria: "Alcohol y drogas",
    keywords: ["negarse", "prueba", "alcoholemia", "etilómetro", "soplar", "delito"],
    guiaSlug: "alcohol-drogas",
  },
  // ─── MÓVIL Y DISTRACCIONES ───
  {
    codigo: "Art. 18.2 RGC",
    titulo: "Usar el móvil sujetándolo con la mano",
    descripcion:
      "Conducir sujetando el teléfono móvil con la mano, sea para lo que sea (llamar, mirar un mensaje, consultar el GPS). 200 € y 6 puntos desde la Ley 18/2021. Es una de las infracciones que más puntos resta.",
    importe: 200,
    puntos: 6,
    gravedad: "grave",
    baseLegal: "Art. 18.2 del Reglamento General de Circulación (redacción Ley 18/2021)",
    boeUrl: BOE_RGC,
    categoria: "Móvil y distracciones",
    keywords: ["móvil", "teléfono", "mano", "whatsapp", "gps", "distracción", "18 rgc", "artículo 18"],
  },
  {
    codigo: "Art. 18.1 RGC",
    titulo: "Conducir con auriculares o cascos de audio",
    descripcion:
      "Usar cascos, auriculares o instrumentos similares conectados a reproductores de sonido mientras se conduce (coche, moto o bici). 200 € y 3 puntos. No importa si solo llevas uno puesto.",
    importe: 200,
    puntos: 3,
    gravedad: "grave",
    baseLegal: "Art. 18.1 del Reglamento General de Circulación",
    boeUrl: BOE_RGC,
    categoria: "Móvil y distracciones",
    keywords: ["auriculares", "cascos", "música", "airpods", "oídos"],
  },
  {
    codigo: "Art. 18.2 RGC",
    titulo: "Intercomunicador no homologado o mal usado en moto",
    descripcion:
      "Desde el 01/10/2026 (RD 518/2026) el intercomunicador integrado y homologado en el casco es legal solo para hablar o navegar. Usar un dispositivo no homologado, no integrado o para escuchar música sigue sancionándose con 200 € y 3 puntos.",
    importe: 200,
    puntos: 3,
    gravedad: "grave",
    baseLegal: "Art. 18.2 del Reglamento General de Circulación (redacción RD 518/2026)",
    boeUrl: BOE_RD518,
    categoria: "Móvil y distracciones",
    keywords: ["intercomunicador", "casco", "moto", "bluetooth", "homologado"],
  },
  {
    codigo: "Art. 13.6 LSV",
    titulo: "Llevar un detector de radares en el vehículo",
    descripcion:
      "Llevar instalado o en el vehículo un mecanismo de detección de radares o cinemómetros, aunque esté apagado o no se use. 500 € y 3 puntos. Los avisadores por GPS (que informan de la posición) sí son legales.",
    importe: 500,
    puntos: 3,
    gravedad: "grave",
    baseLegal: "Art. 13.6 del RDL 6/2015 (redacción Ley 18/2021)",
    boeUrl: BOE_LSV,
    categoria: "Móvil y distracciones",
    keywords: ["detector", "radar", "avisador", "cinemómetro", "antirradar"],
    guiaSlug: "radares",
  },
  {
    codigo: "Art. 13.6 LSV",
    titulo: "Instalar un inhibidor de radares",
    descripcion:
      "Instalar o llevar un inhibidor de radares o cualquier mecanismo que interfiera en los sistemas de vigilancia del tráfico. Infracción muy grave: hasta 6.000 € y 6 puntos. Es de las multas más altas de la DGT.",
    importe: 6000,
    puntos: 6,
    gravedad: "muy grave",
    baseLegal: "Art. 13.6 y art. 77 del RDL 6/2015",
    boeUrl: BOE_LSV,
    categoria: "Móvil y distracciones",
    keywords: ["inhibidor", "radar", "interferir", "bloqueador", "muy grave"],
    guiaSlug: "radares",
  },
];

const MAS_INFRACCIONES: Infraccion[] = [
  // ─── CINTURÓN Y CASCO ───
  {
    codigo: "Art. 117 RGC",
    titulo: "Circular sin cinturón de seguridad",
    descripcion:
      "No llevar abrochado el cinturón de seguridad. 200 € y 4 puntos. Desde el 01/10/2026 (RD 518/2026) también es obligatorio para repartidores, taxistas y profesores de autoescuela, que perdieron su exención.",
    importe: 200,
    puntos: 4,
    gravedad: "grave",
    baseLegal: "Art. 117 del Reglamento General de Circulación (redacción RD 518/2026)",
    boeUrl: BOE_RD518,
    categoria: "Cinturón y casco",
    keywords: ["cinturón", "cinturon", "abrochar", "repartidor", "taxista", "117 rgc"],
  },
  {
    codigo: "Art. 118 RGC",
    titulo: "Circular en moto sin casco homologado",
    descripcion:
      "Conducir o viajar en moto o ciclomotor sin casco, con el casco sin abrochar o con un casco no homologado. 200 € y 3 puntos. Desde el 01/10/2026 el casco debe estar homologado según el Reglamento UNECE R22.",
    importe: 200,
    puntos: 3,
    gravedad: "grave",
    baseLegal: "Art. 118 del Reglamento General de Circulación (redacción RD 518/2026)",
    boeUrl: BOE_RD518,
    categoria: "Cinturón y casco",
    keywords: ["casco", "moto", "ciclomotor", "homologado", "abrochar", "118 rgc"],
  },
  {
    codigo: "Art. 117 RGC",
    titulo: "Menor sin sistema de retención infantil",
    descripcion:
      "Llevar a un menor sin el sistema de retención infantil adecuado a su talla y peso. 200 € y 4 puntos, que se imputan al conductor del vehículo.",
    importe: 200,
    puntos: 4,
    gravedad: "grave",
    baseLegal: "Art. 117 del Reglamento General de Circulación",
    boeUrl: BOE_RGC,
    categoria: "Cinturón y casco",
    keywords: ["niño", "menor", "sillita", "retención infantil", "sri", "bebé"],
  },
  // ─── SEÑALIZACIÓN ───
  {
    codigo: "Art. 146 RGC",
    titulo: "Saltarse un semáforo en rojo",
    descripcion:
      "No detenerse ante la luz roja del semáforo. 200 € y 4 puntos. Las cámaras de foto-rojo de la DGT y los ayuntamientos detectan esta infracción automáticamente.",
    importe: 200,
    puntos: 4,
    gravedad: "grave",
    baseLegal: "Art. 146 del Reglamento General de Circulación",
    boeUrl: BOE_RGC,
    categoria: "Señalización",
    keywords: ["semáforo", "rojo", "saltarse", "foto-rojo", "cámara", "146 rgc"],
  },
  {
    codigo: "Art. 151 RGC",
    titulo: "No respetar un stop o ceda el paso",
    descripcion:
      "No detenerse ante la señal de stop o no ceder el paso donde la señalización lo exige. 200 € y 4 puntos.",
    importe: 200,
    puntos: 4,
    gravedad: "grave",
    baseLegal: "Art. 151 del Reglamento General de Circulación",
    boeUrl: BOE_RGC,
    categoria: "Señalización",
    keywords: ["stop", "ceda el paso", "prioridad", "señal", "151 rgc"],
  },
  {
    codigo: "Art. 65 RGC",
    titulo: "No respetar el paso de peatones",
    descripcion:
      "No ceder el paso a los peatones en un paso señalizado o atropellar su prioridad al girar. 200 € y 4 puntos.",
    importe: 200,
    puntos: 4,
    gravedad: "grave",
    baseLegal: "Art. 65 del Reglamento General de Circulación",
    boeUrl: BOE_RGC,
    categoria: "Señalización",
    keywords: ["peatón", "paso de cebra", "prioridad", "atropello", "65 rgc"],
  },
  {
    codigo: "Art. 57 RGC",
    titulo: "No respetar la prioridad en una intersección",
    descripcion:
      "No ceder el paso al vehículo que tiene prioridad en una intersección (prioridad de la derecha o señalización específica). 200 € y 4 puntos.",
    importe: 200,
    puntos: 4,
    gravedad: "grave",
    baseLegal: "Art. 57 del Reglamento General de Circulación",
    boeUrl: BOE_RGC,
    categoria: "Señalización",
    keywords: ["prioridad", "intersección", "cruce", "derecha", "57 rgc"],
  },
  // ─── CIRCULACIÓN ───
  {
    codigo: "Art. 77 LSV",
    titulo: "Circular en sentido contrario",
    descripcion:
      "Circular en sentido contrario al estipulado en una vía de un solo sentido. Infracción muy grave: 500 € y 6 puntos por el grave peligro que supone.",
    importe: 500,
    puntos: 6,
    gravedad: "muy grave",
    baseLegal: "Art. 77 del RDL 6/2015",
    boeUrl: BOE_LSV,
    categoria: "Circulación",
    keywords: ["sentido contrario", "dirección prohibida", "muy grave"],
  },
  {
    codigo: "Art. 3 RGC",
    titulo: "Conducción temeraria",
    descripcion:
      "Conducir de forma manifiestamente temeraria poniendo en peligro la vida o la integridad de las personas. 500 € y 6 puntos en vía administrativa; si hay peligro concreto puede ser delito (art. 380 del Código Penal).",
    importe: 500,
    puntos: 6,
    gravedad: "muy grave",
    baseLegal: "Art. 3 del Reglamento General de Circulación y art. 77 del RDL 6/2015",
    boeUrl: BOE_RGC,
    categoria: "Circulación",
    keywords: ["temeraria", "peligrosa", "imprudente", "delito", "3 rgc"],
  },
  {
    codigo: "Art. 82 RGC",
    titulo: "Adelantamiento indebido o peligroso",
    descripcion:
      "Adelantar en lugar prohibido (curva sin visibilidad, cambio de rasante, paso a nivel) o poniendo en peligro a otros usuarios. 200 € y 4 puntos.",
    importe: 200,
    puntos: 4,
    gravedad: "grave",
    baseLegal: "Art. 82 a 88 del Reglamento General de Circulación",
    boeUrl: BOE_RGC,
    categoria: "Circulación",
    keywords: ["adelantar", "adelantamiento", "prohibido", "curva", "82 rgc"],
  },
  {
    codigo: "Art. 54 RGC",
    titulo: "No mantener la distancia de seguridad",
    descripcion:
      "Circular sin guardar la distancia de seguridad con el vehículo precedente. 200 € y 4 puntos. Es una de las causas más habituales de colisiones por alcance.",
    importe: 200,
    puntos: 4,
    gravedad: "grave",
    baseLegal: "Art. 54 del Reglamento General de Circulación",
    boeUrl: BOE_RGC,
    categoria: "Circulación",
    keywords: ["distancia", "seguridad", "alcance", "colisión", "54 rgc"],
  },
  {
    codigo: "Art. 35 RGC",
    titulo: "Circular por carril bus-VAO sin autorización",
    descripcion:
      "Utilizar un carril reservado a autobuses, taxis o vehículos de alta ocupación sin estar autorizado. 200 €, infracción grave sin pérdida de puntos.",
    importe: 200,
    puntos: 0,
    gravedad: "grave",
    baseLegal: "Art. 35 del Reglamento General de Circulación",
    boeUrl: BOE_RGC,
    categoria: "Circulación",
    keywords: ["carril bus", "vao", "reservado", "autobús", "35 rgc"],
  },
  // ─── PATINETE / VMP (RD 518/2026, en vigor desde el 01/10/2026) ───
  {
    codigo: "Art. 121 RGC",
    titulo: "Patinete eléctrico por la acera",
    descripcion:
      "Circular con un patinete eléctrico (VMP) por aceras, paseos o zonas peatonales. Desde el 01/10/2026 es infracción grave: 200 €.",
    importe: 200,
    puntos: 0,
    gravedad: "grave",
    baseLegal: "Reglamento General de Circulación (redacción RD 518/2026, en vigor 01/10/2026)",
    boeUrl: BOE_RD518,
    categoria: "Patinete / VMP",
    keywords: ["patinete", "vmp", "acera", "peatonal", "eléctrico"],
  },
  {
    codigo: "RD 518/2026",
    titulo: "Patinete eléctrico sin casco",
    descripcion:
      "Circular en patinete eléctrico sin casco de protección correctamente abrochado. Obligatorio para todos los usuarios de VMP desde el 01/10/2026: 200 €.",
    importe: 200,
    puntos: 0,
    gravedad: "grave",
    baseLegal: "Reglamento General de Circulación (redacción RD 518/2026, en vigor 01/10/2026)",
    boeUrl: BOE_RD518,
    categoria: "Patinete / VMP",
    keywords: ["patinete", "vmp", "casco", "eléctrico"],
  },
  {
    codigo: "RD 518/2026",
    titulo: "Patinete eléctrico trucado (velocidad o potencia)",
    descripcion:
      "Circular con un VMP manipulado para superar los límites de velocidad o potencia de fábrica. 200 € como infracción grave, además de la inmovilización del vehículo y posibles gastos de custodia.",
    importe: 200,
    puntos: 0,
    gravedad: "grave",
    baseLegal: "Reglamento General de Circulación (redacción RD 518/2026, en vigor 01/10/2026)",
    boeUrl: BOE_RD518,
    categoria: "Patinete / VMP",
    keywords: ["patinete", "vmp", "trucado", "manipulado", "deslimitado", "inmovilización"],
    nota: "Además de la multa, conlleva la inmovilización del vehículo.",
  },
  // ─── DOCUMENTACIÓN ───
  {
    codigo: "Art. 76 LSV",
    titulo: "Circular con la ITV caducada",
    descripcion:
      "Circular con la Inspección Técnica de Vehículos caducada o sin haberla pasado en plazo. 200 €. Si te paran, te retiran el permiso de circulación y te dan 10 días para pasarla (sin poder circular).",
    importe: 200,
    puntos: 0,
    gravedad: "grave",
    baseLegal: "Art. 76 del RDL 6/2015",
    boeUrl: BOE_LSV,
    categoria: "Documentación",
    keywords: ["itv", "inspección", "caducada", "revisión"],
    guiaSlug: "itv-documentacion",
  },
  {
    codigo: "Art. 76 LSV",
    titulo: "Circular con ITV desfavorable",
    descripcion:
      "Circular con resultado desfavorable de la inspección sin subsanar los defectos en el plazo correspondiente. 200 €.",
    importe: 200,
    puntos: 0,
    gravedad: "grave",
    baseLegal: "Art. 76 del RDL 6/2015",
    boeUrl: BOE_LSV,
    categoria: "Documentación",
    keywords: ["itv", "inspección", "desfavorable", "defectos"],
    guiaSlug: "itv-documentacion",
  },
  {
    codigo: "Art. 76 LSV",
    titulo: "Circular con ITV negativa",
    descripcion:
      "Circular con resultado negativo de la inspección (fallos muy graves). 500 € e inmovilización del vehículo.",
    importe: 500,
    puntos: 0,
    gravedad: "grave",
    baseLegal: "Art. 76 del RDL 6/2015",
    boeUrl: BOE_LSV,
    categoria: "Documentación",
    keywords: ["itv", "inspección", "negativa", "inmovilización"],
    guiaSlug: "itv-documentacion",
    nota: "Con ITV negativa, el vehículo queda inmovilizado.",
  },
  {
    codigo: "Art. 3 RDL 8/2004",
    titulo: "Circular sin seguro obligatorio",
    descripcion:
      "Circular sin el seguro obligatorio de responsabilidad civil. La multa va de 601 € a 3.005 € según el tipo de vehículo (unos 1.500 € para un turismo), además del precinto e inmovilización del vehículo.",
    importe: 1500,
    importeMax: 3005,
    puntos: 0,
    gravedad: "grave",
    baseLegal: "Art. 3 del RDL 8/2004, sobre seguro obligatorio",
    boeUrl: BOE_SEGURO,
    categoria: "Documentación",
    keywords: ["seguro", "sin asegurar", "póliza", "responsabilidad civil"],
    nota: "El importe exacto depende del vehículo: de 601 € a 3.005 €. El vehículo queda precintado.",
  },
  {
    codigo: "Art. 1 RGC",
    titulo: "Conducir sin haber obtenido nunca el carné",
    descripcion:
      "Conducir un vehículo sin haber obtenido nunca el permiso o licencia de conducción. 500 € como infracción muy grave. Ojo: si el permiso está retirado por sentencia, es delito (art. 384 del Código Penal).",
    importe: 500,
    puntos: 0,
    gravedad: "muy grave",
    baseLegal: "Art. 1 del Reglamento General de Circulación y art. 77 del RDL 6/2015",
    boeUrl: BOE_RGC,
    categoria: "Documentación",
    keywords: ["carné", "carnet", "permiso", "sin carnet", "licencia", "1 rgc"],
    nota: "Sin puntos porque no hay permiso del que restarlos. Si el carné está retirado por sentencia, es delito.",
  },
  {
    codigo: "Art. 12 RGC",
    titulo: "Conducir con el permiso caducado",
    descripcion:
      "Conducir con el permiso de conducción caducado (sin renovar). 200 €, infracción grave sin pérdida de puntos.",
    importe: 200,
    puntos: 0,
    gravedad: "grave",
    baseLegal: "Art. 12 del Reglamento General de Conductores",
    boeUrl: BOE_RGC,
    categoria: "Documentación",
    keywords: ["carné", "carnet", "permiso", "caducado", "renovar"],
  },
  {
    codigo: "Art. 10 LSV",
    titulo: "Matrícula manipulada o ilegible para eludir el control",
    descripcion:
      "Alterar, tapar o manipular la matrícula para impedir la identificación del vehículo (p. ej. para eludir radares o cámaras de ZBE). Hasta 6.000 € y 6 puntos como infracción muy grave.",
    importe: 6000,
    puntos: 6,
    gravedad: "muy grave",
    baseLegal: "Art. 10 y art. 77 del RDL 6/2015",
    boeUrl: BOE_LSV,
    categoria: "Documentación",
    keywords: ["matrícula", "matricula", "manipulada", "tapada", "ilegible", "placa"],
  },
  {
    codigo: "Art. 98 RGC",
    titulo: "Circular de noche sin alumbrado",
    descripcion:
      "Circular entre la puesta y la salida del sol (o en condiciones de visibilidad reducida) sin llevar encendido el alumbrado reglamentario. 200 €, infracción grave.",
    importe: 200,
    puntos: 0,
    gravedad: "grave",
    baseLegal: "Art. 98 a 104 del Reglamento General de Circulación",
    boeUrl: BOE_RGC,
    categoria: "Documentación",
    keywords: ["luces", "alumbrado", "noche", "faros", "98 rgc"],
  },
  // ─── OTRAS ───
  {
    codigo: "Art. 12 RGC",
    titulo: "Neumáticos en mal estado",
    descripcion:
      "Circular con neumáticos desgastados por debajo del límite legal (1,6 mm de dibujo), con deformaciones o en mal estado general. 200 € por infracción grave. En la ITV es defecto grave.",
    importe: 200,
    puntos: 0,
    gravedad: "grave",
    baseLegal: "Art. 12 del Reglamento General de Circulación",
    boeUrl: BOE_RGC,
    categoria: "Otras",
    keywords: ["neumáticos", "ruedas", "desgaste", "dibujo", "12 rgc"],
    guiaSlug: "itv-documentacion",
  },
  {
    codigo: "Art. 4 RGC",
    titulo: "Arrojar objetos a la vía (colillas, etc.)",
    descripcion:
      "Arrojar a la vía o sus inmediaciones objetos que puedan producir incendios o accidentes, como colillas encendidas. 200 € y 4 puntos.",
    importe: 200,
    puntos: 4,
    gravedad: "grave",
    baseLegal: "Art. 4 del Reglamento General de Circulación",
    boeUrl: BOE_RGC,
    categoria: "Otras",
    keywords: ["colilla", "arrojar", "cigarrillo", "incendio", "objetos", "4 rgc"],
  },
  {
    codigo: "Art. 94 RGC",
    titulo: "Estacionar en doble fila",
    descripcion:
      "Parar o estacionar en doble fila obstaculizando la circulación. 200 € como infracción grave (según ordenanza municipal).",
    importe: 200,
    puntos: 0,
    gravedad: "grave",
    baseLegal: "Art. 94 del Reglamento General de Circulación y ordenanzas municipales",
    boeUrl: BOE_RGC,
    categoria: "Otras",
    keywords: ["doble fila", "aparcar", "estacionar", "94 rgc"],
  },
  {
    codigo: "Art. 94 RGC",
    titulo: "Estacionar donde está prohibido",
    descripcion:
      "Estacionar en lugar señalizado con prohibición (señal R-308, línea amarilla, etc.). Infracción leve: 80 € según ordenanza municipal.",
    importe: 80,
    puntos: 0,
    gravedad: "leve",
    baseLegal: "Art. 94 del Reglamento General de Circulación y ordenanzas municipales",
    boeUrl: BOE_RGC,
    categoria: "Otras",
    keywords: ["aparcar", "estacionar", "prohibido", "señal", "línea amarilla"],
  },
  {
    codigo: "Art. 76 LSV",
    titulo: "Acceder a una ZBE sin etiqueta o autorización",
    descripcion:
      "Entrar en una Zona de Bajas Emisiones sin el distintivo ambiental requerido o sin autorización. 200 € como infracción grave (la cuantía concreta la fija cada ordenanza municipal).",
    importe: 200,
    puntos: 0,
    gravedad: "grave",
    baseLegal: "Art. 76 del RDL 6/2015 y ordenanzas municipales",
    boeUrl: BOE_LSV,
    categoria: "Otras",
    keywords: ["zbe", "etiqueta", "ambiental", "distintivo", "bajas emisiones"],
    guiaSlug: "zbe",
  },
];

INFRACCIONES.push(...MAS_INFRACCIONES);

export const CATEGORIAS: CategoriaInfraccion[] = [
  "Velocidad",
  "Alcohol y drogas",
  "Móvil y distracciones",
  "Cinturón y casco",
  "Señalización",
  "Circulación",
  "Patinete / VMP",
  "Documentación",
  "Otras",
];

const SIN_TILDES = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export function buscarInfracciones(query: string, categoria?: CategoriaInfraccion | "todas"): Infraccion[] {
  const q = SIN_TILDES(query.trim());
  return INFRACCIONES.filter((inf) => {
    if (categoria && categoria !== "todas" && inf.categoria !== categoria) return false;
    if (!q) return true;
    const haystack = SIN_TILDES(
      [inf.codigo, inf.titulo, inf.descripcion, inf.baseLegal, inf.categoria, ...inf.keywords].join(" ")
    );
    // Coincide si todos los términos de la búsqueda aparecen en algún campo
    return q.split(/\s+/).every((term) => haystack.includes(term));
  });
}

export function formatoImporte(inf: Infraccion): string {
  const base = `${inf.importe.toLocaleString("es-ES")} €`;
  return inf.importeMax ? `${base} – ${inf.importeMax.toLocaleString("es-ES")} €` : base;
}
