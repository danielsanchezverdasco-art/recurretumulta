"use node";
/// <reference types="node" />
import { evaluarVelocidad, evaluarPrescripcion, PLAZOS } from "./lib/normativaTrafico";

import { v } from "convex/values";
import OpenAI from "openai";
import { action } from "./_generated/server";
import { ConvexError } from "convex/values";
import { internal, api } from "./_generated/api";
import { renderPdfFirstPageToJpegBase64, reducirImagenBase64 } from "./lib/pdfToImage";
import { getUserFromSession } from "./authSimple";

const MODEL_TEXT   = "openai/gpt-oss-120b";
const MODEL_VISION = "qwen/qwen3.8-27b";
// 13/10/2026 (plan gratuito de Groq, sin upgrade): cada modelo tiene su propia
// cuota por minuto. Si el principal devuelve 429 se prueba el siguiente; un 404
// (modelo retirado) simplemente se salta.
const MODELOS_TEXTO  = [MODEL_TEXT, "openai/gpt-oss-20b"];
const MODELOS_VISION = [MODEL_VISION, "meta-llama/llama-4-scout-17b-16e-instruct", "meta-llama/llama-4-maverick-17b-128e-instruct"];
// Tiempo máximo esperando a que se libere la cuota antes de mostrar "saturado".
const RATE_LIMIT_BUDGET_MS = 60_000;

const AI_ANALYSIS_DAILY_LIMIT = 10;
const MAX_RETRY_ATTEMPTS = 1;
const RETRY_DELAY_MS = 2000;
// La cuenta de Groq tiene un límite estricto de tokens de salida por minuto (OTPM).
// Al recibir un 429 por ese límite, hay que esperar mucho más (para caer en el
// siguiente minuto) en vez del reintento corto normal.
const RATE_LIMIT_RETRY_DELAY_MS = 8000;
// Máximo de tokens que puede generar cada respuesta. gpt-oss-120b es un modelo
// "razonador": el pensamiento interno oculto consume el mismo presupuesto que
// la respuesta visible. Con un límite bajo, el modelo agotaba todo el
// presupuesto pensando y nunca llegaba a escribir el JSON (respuesta vacía).
// Por eso se sube el límite y se pide un esfuerzo de razonamiento bajo.
const MAX_OUTPUT_TOKENS_ANALISIS = 4000;
const MAX_OUTPUT_TOKENS_CARTA = 4000;
const REASONING_EFFORT_TEXT = "low" as const;

function groq(): OpenAI {
  const apiKey = process.env.GROQ_API_KEY ?? "";
  if (!apiKey) {
    throw new ConvexError({
      code: "GROQ_NO_KEY",
      message: "El servicio de análisis no está configurado (falta GROQ_API_KEY). Contacta con soporte.",
    });
  }
  return new OpenAI({
    baseURL: "https://api.groq.com/openai/v1",
    apiKey,
    // 12/10/2026: sin timeout una llamada colgada dejaba el analizador girando sin fin.
    // 13/10/2026: presupuesto total < 100 s (timeout del cliente). Sin reintentos
    // internos del SDK; los controla withModelos según el tiempo que quede.
    timeout: 40_000,
    maxRetries: 0,
  });
}

function isRateLimitError(err: unknown): boolean {
  return err instanceof OpenAI.APIError && err.status === 429;
}

// Errores que NO deben reintentarse: la API key es inválida o el modelo no existe.
// Reintentar solo retrasa el mensaje de error al usuario.
function isFatalError(err: unknown): boolean {
  if (err instanceof OpenAI.APIError && (err.status === 401 || err.status === 403 || err.status === 404)) {
    return true;
  }
  return false;
}

// ── Retry helper ──────────────────────────────────────────────────────────────
function retryAfterMs(err: unknown): number {
  const ra = Number((err as InstanceType<typeof OpenAI.APIError>).headers?.get?.("retry-after"));
  return Number.isFinite(ra) && ra > 0 ? Math.ceil(ra * 1000) + 500 : RATE_LIMIT_RETRY_DELAY_MS;
}

/**
 * Llama a Groq probando los modelos en orden. Ante un 429 pasa al siguiente
 * modelo (otra cuota); si todos están limitados, espera (retry-after) y vuelve
 * a empezar, hasta RATE_LIMIT_BUDGET_MS en total. Solo entonces GROQ_SATURADO.
 */
async function withModelos<T>(modelos: string[], fn: (modelo: string) => Promise<T>): Promise<T> {
  const inicio = Date.now();
  let lastError: unknown;
  let erroresRed = 0;
  const vivos = [...modelos];
  for (;;) {
    let espera = Infinity;
    for (const modelo of [...vivos]) {
      try {
        const r = await fn(modelo);
        if (modelo !== modelos[0]) console.log(`[groq] respuesta con modelo de respaldo ${modelo}`);
        return r;
      } catch (err) {
        lastError = err;
        if (err instanceof OpenAI.APIError && (err.status === 404 || (err.status === 400 && modelo !== modelos[0])) && vivos.length > 1) {
          console.log(`[groq] ${modelo} no disponible (${err.status})`);
          vivos.splice(vivos.indexOf(modelo), 1); // modelo retirado: probar el siguiente
          continue;
        }
        if (isFatalError(err)) {
          if (err instanceof OpenAI.APIError && (err.status === 401 || err.status === 403)) {
            throw new ConvexError({ code: "GROQ_AUTH", message: "El servicio de análisis no está disponible ahora mismo (error de configuración). Inténtalo más tarde." });
          }
          if (err instanceof OpenAI.APIError && err.status === 404) {
            throw new ConvexError({ code: "GROQ_MODEL", message: "El servicio de análisis no está disponible ahora mismo (modelo no disponible). Inténtalo más tarde." });
          }
          throw err;
        }
        if (isRateLimitError(err)) {
          console.log(`[groq] 429 en ${modelo}`);
          espera = Math.min(espera, retryAfterMs(err));
          continue; // siguiente modelo, con su propia cuota
        }
        // error de red/5xx: un reintento corto con el mismo modelo
        if (++erroresRed > MAX_RETRY_ATTEMPTS) break;
        await new Promise((res) => setTimeout(res, RETRY_DELAY_MS));
        espera = 0;
        break;
      }
    }
    if (erroresRed > MAX_RETRY_ATTEMPTS) break;
    const quedan = RATE_LIMIT_BUDGET_MS - (Date.now() - inicio);
    if (espera === Infinity || quedan <= 1000) break;
    await new Promise((res) => setTimeout(res, Math.min(Math.max(espera, 1000), 20_000, quedan)));
  }
  if (isRateLimitError(lastError)) {
    throw new ConvexError({
      code: "GROQ_SATURADO",
      message: "El servicio de análisis está saturado ahora mismo. Espera un minuto y vuelve a intentarlo.",
    });
  }
  if (lastError instanceof OpenAI.APIConnectionTimeoutError || lastError instanceof OpenAI.APIConnectionError) {
    throw new ConvexError({
      code: "GROQ_TIMEOUT",
      message: "El análisis ha tardado demasiado. Vuelve a intentarlo en unos segundos.",
    });
  }
  throw lastError;
}

type Defecto = { titulo: string; descripcion: string; gravedad: "alta" | "media" | "baja" };
type AnalisisRaw = {
  tipoRadar?: "fijo" | "movil" | "desconocido";
  tipoDocumento?: "denuncia" | "resolucion" | "desconocido";
  fechaNotificacion?: string;
  calificacion?: string;
  organo?: string;
  datosFaltantes?: string[];
  fundamentos?: string[];
  viabilidad: number;
  nivel: "alta" | "media" | "baja";
  resumen: string;
  defectos: Defecto[];
  provincia: string;
  expediente: string;
  importe: string;
  infraccion: string;
  fecha: string;
  plazoRecurso: string;
  matricula: string;
  velocidadDetectada: string;
  limiteVia: string;
};

const ANALISIS_SYSTEM = `Eres un abogado experto en derecho de tráfico español (DGT, Ayuntamientos, Policía Local).
Analiza la multa en 3 FASES, con lógica jurídica estricta, y devuelve SOLO JSON puro sin markdown con esta estructura:
{
  "viabilidad": <entero 0-100, calculado con la RÚBRICA de abajo>,
  "nivel": <"alta" si viabilidad>=70, "media" si 40-69, "baja" si <40>,
  "resumen": <2-3 frases: hallazgos principales y recomendación>,
  "defectos": [
    { "titulo": <nombre del defecto>, "descripcion": <1 frase explicativa>, "gravedad": <"alta"|"media"|"baja"> }
  ],
  "organo": <órgano que denuncia o sanciona tal como figure (p. ej. "Jefatura Provincial de Tráfico de Madrid", "Alcaldía de Sevilla"), o "No consta">,
  "provincia": <provincia que figure escrita en el documento (o la del ayuntamiento/jefatura emisor), o "Desconocida"; no la deduzcas de nombres de carreteras>,
  "expediente": <número de expediente exacto del documento, o "No encontrado">,
  "importe": <importe exacto en euros del documento, p.ej. "200€", o "No especificado">,
  "infraccion": <descripción COMPLETA de la infracción tal como aparece en el documento, incluyendo TODOS los valores numéricos (velocidad detectada Y límite de la vía si es radar)>,
  "fecha": <fecha exacta de la infracción del documento, o "No especificada">,
  "tipoDocumento": <"denuncia" si es el boletín/notificación de denuncia, "resolucion" si es la resolución sancionadora, o "desconocido">,
  "fechaNotificacion": <fecha de notificación DE LA DENUNCIA tal como aparece, o "No consta">,
  "calificacion": <"leve" | "grave" | "muy grave" según figure en el documento, o "No consta">,
  "tipoRadar": <"fijo" | "movil" | "desconocido" según el medio de captación que figure>,
  "datosFaltantes": [<datos necesarios que NO aparecen en el documento>],
  "matricula": <matrícula del vehículo tal como aparece, o "No encontrada">,
  "velocidadDetectada": <velocidad medida por el radar/cinemómetro en km/h, p.ej. "68 km/h", o "No aplica" si no es exceso de velocidad>,
  "limiteVia": <límite de velocidad de la vía en km/h, p.ej. "50 km/h", o "No aplica" si no es exceso de velocidad>
}

REGLA CRÍTICA DE VELOCIDAD: si es un exceso de velocidad, la "velocidadDetectada" es la velocidad a la que IBA el vehículo y el "limiteVia" es el máximo permitido. NUNCA confundas la velocidad detectada con el exceso: si el documento dice "68 km/h en vía limitada a 50", la velocidad es 68 y el límite es 50 (el exceso son 18 km/h). Extrae AMBOS valores por separado.

REGLAS DE HONESTIDAD (obligatorias):
- NUNCA inventes datos: si un dato no aparece en el documento escribe "No consta" y añádelo a "datosFaltantes".
- Solo derecho español/UE de tráfico. En los defectos cita solo: LSV (RDL 6/2015) arts. 76, 77, 80, 81, 87, 89-91, 93-96, 112 y anexo IV; RGC arts. 48 y 50; Orden ICT/155/2020; Ley 39/2015 arts. 53 y 77; art. 24 CE.
- No calcules márgenes de radar, tramos ni plazos: los calcula el sistema.
- Mapa de artículos (úsalo para citar bien): art. 87.2 LSV contenido mínimo de toda denuncia (vehículo, identidad del denunciado SOLO "si se conoce", hecho con lugar/fecha/hora, identificación del agente o su nº profesional); art. 87.3 LSV lo que debe constar si se notifica en el acto (sanción, puntos, órgano competente y norma); art. 88 LSV valor probatorio de la denuncia del agente; arts. 89-91 LSV notificación (en el acto, causas para no detener, DEV/domicilio, BOE/TESTRA); art. 82 LSV responsables (titular/conductor); art. 112 LSV prescripción y caducidad (la calcula el sistema); anexo IV LSV y Orden ICT/155/2020 velocidad (los calcula el sistema). En multas municipales puedes citar además el artículo de la ordenanza que figure en el documento.
- En denuncias por radar o cámara notificadas al titular es normal que no figure el nombre del conductor: NO es defecto (art. 87.2.b solo exige la identidad "si se conoce").
- En denuncias captadas por cinemómetro fijo automático no hay agente presente: la falta de identificación de un agente NO es defecto.
- Que la velocidad medida supere el límite es el hecho denunciado, no una contradicción.
- Textos entre corchetes o de relleno (p. ej. "[nombre]") no son defectos.
- Cada defecto debe terminar con la cita concreta entre paréntesis, p. ej. "(art. 89 LSV)". Si no puedes citar un artículo de la lista anterior, no es un defecto.
- Si el documento es solo una FOTO o FOTOGRAMA del radar (no la notificación oficial), lo que no aparece en él (denunciado, precepto, órgano, importe, expediente, notificación) NO es un defecto: va a "datosFaltantes". Sin notificación, "defectos" puede ir vacío.
- Las marcas como "prueba", "ficticio", "muestra" o "test" no son defectos jurídicos: ignóralas.
- Los plazos (alegaciones, recurso, prescripción) no los escribas en "plazoRecurso": los pone el sistema.
- La falta de mención del certificado metrológico en el boletín NO es por sí sola causa de nulidad: como mucho gravedad "media" (se puede pedir en alegaciones que se aporte al expediente).

FASE 1 — EXTRACCIÓN LITERAL: copia expediente, importe, fecha, infracción, provincia, MATRÍCULA, velocidad detectada y límite de la vía EXACTAMENTE como aparecen. NO inventes ni completes datos. Si algo no se lee con claridad, escribe "No encontrado" / "No especificado" / "No aplica".

FASE 2 — CHECKLIST DE DEFECTOS FORMALES (verifica uno por uno contra el documento):
1. Identificación del denunciado y del vehículo (matrícula).
2. Descripción de los hechos: lugar, fecha y hora concretos.
3. Precepto infringido citado correctamente (artículo de la LTSV u ordenanza).
4. Sanción impuesta y su correspondencia con el precepto.
5. Órgano competente que sanciona.
6. Notificación: ¿en el acto o posterior? ¿plazos respetados?
7. Si es radar/cámara: ¿consta certificado de verificación metrológica vigente?
8. Firma o identificación del agente denunciante (o sistema automatizado).
9. Prescripción: ¿han pasado más de 3 meses (infracción leve) o 6 meses (grave/muy grave) sin notificar?
Solo incluye defectos que VEAS en el documento. Máximo 4, los más relevantes.

FASE 3 — RÚBRICA DE VIABILIDAD (determinista: mismos defectos = misma puntuación):
- Base: 25 (multa aparentemente correcta, sin defectos).
- +20 por cada defecto de gravedad "alta" (máx. 95).
- +10 por cada defecto de gravedad "media".
- +5 por cada defecto de gravedad "baja".
- Tope: 97. Redondea al entero.
El "nivel" se deriva de la viabilidad, nunca al revés.

REGLA DE CONSISTENCIA: ante el mismo documento debes producir siempre los mismos defectos y la misma puntuación. Sé conciso: "resumen" máximo 2 frases y "descripcion" de cada defecto máximo 1 frase corta.

REGLA DE COHERENCIA DATOS-DEFECTOS (obligatoria): cada defecto debe ser COHERENTE con los datos extraídos en la FASE 1. Está PROHIBIDO decir que falta un dato que SÍ extrajiste. Ejemplos: si "matricula" tiene un valor, no puedes listar "falta la matrícula" ni "vehículo no identificado"; si "fecha" tiene un valor, no digas que "falta la fecha"; si "expediente" tiene un valor, no digas que "falta el expediente". Antes de incluir cada defecto, comprueba que no contradice ningún campo extraído. Solo incluye defectos REALES que veas en el documento.`;

// Subir CACHE_V cuando cambie la lógica del análisis: invalida la caché anterior.
const CACHE_V = "v9";
// ── Caché de análisis: la misma multa siempre devuelve el mismo resultado ───
// (orden de Daniel 03/10/2026). Helpers puros; las queries/mutaciones viven en
// convex/multasInterno.ts porque los ficheros "use node" solo admiten actions.
function normalizarExpediente(exp: string | undefined): string {
  const n = (exp ?? "").toUpperCase().replace(/[\s.\-_/\\]+/g, "");
  // "v3:" invalida los análisis guardados con la lógica anterior (13/10/2026).
  return n === "" || n === "NOENCONTRADO" || n === "NOCONSTA" ? "SIN_EXPEDIENTE" : `${CACHE_V}:${n}`;
}

async function sha256hex(text: string): Promise<string> {
  const { createHash } = await import("node:crypto");
  return CACHE_V + ":" + createHash("sha256").update(text, "utf8").digest("hex");
}

// ── Extracción de texto de PDF con pdfjs-dist ─────────────────────────────────
async function extractPdfText(base64Data: string): Promise<string> {
  const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs" as string);
  const binaryData = Uint8Array.from(atob(base64Data), (c) => c.charCodeAt(0));
  const pdf = await pdfjs.getDocument({
    data: binaryData,
    useSystemFonts: true,
    isEvalSupported: false,
  }).promise;

  const textPages: string[] = [];
  const maxPages = Math.min(pdf.numPages, 8);
  for (let i = 1; i <= maxPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items
      .map((item: { str?: string }) => item.str ?? "")
      .join(" ")
      .replace(/\s{2,}/g, " ")
      .trim();
    if (pageText) textPages.push(pageText);
  }
  return textPages.join("\n\n").trim();
}

// ── Análisis con visión — Llama 4 Scout ──────────────────────────────────────
async function analizarConVision(base64Data: string, mimeType: string): Promise<AnalisisRaw> {
  // 13/10/2026: la visión SOLO transcribe; el análisis jurídico lo hace el modelo
  // de texto (más fiable razonando) con las mismas reglas que un PDF.
  const red = await reducirImagenBase64(base64Data);
  if (red) { base64Data = red.data; mimeType = red.mime; }
  const client = groq();
  const response = await withModelos(MODELOS_VISION, (modelo) => client.chat.completions.create({
    model: modelo,
    temperature: 0,
    max_tokens: 2500,
    messages: [
      { role: "system", content: "Eres un transcriptor. Copia LITERALMENTE todo el texto legible de la imagen (multa, notificación o fotograma de radar), línea a línea, sin resumir, sin interpretar y sin añadir nada. Si la imagen es una foto de radar, transcribe también los datos sobreimpresos (velocidad, límite, fecha, hora, lugar, nº de serie, tipo de cinemómetro) y la matrícula visible. Al final añade una línea: TIPO_IMAGEN: notificación | fotograma radar | otro. Si no hay texto legible, responde solo: ILEGIBLE." },
      {
        role: "user",
        content: [
          { type: "text", text: "Transcribe esta imagen." },
          { type: "image_url", image_url: { url: `data:${mimeType};base64,${base64Data}`, detail: "high" } },
        ],
      },
    ],
  }));
  const texto = (response.choices[0]?.message?.content ?? "").replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
  if (!texto || /^ILEGIBLE/i.test(texto) || texto.length < 25) {
    throw new ConvexError({ code: "ANALISIS_VACIO", message: "No hemos podido leer el documento con seguridad. Sube una foto más nítida o el PDF original." });
  }
  return analizarConTexto(`(Transcripción automática de una imagen)\n${texto}`);
}

// ── Análisis con texto — Llama 3.3 70B ───────────────────────────────────────
async function analizarConTexto(texto: string): Promise<AnalisisRaw> {
  const client = groq();
  const response = await withModelos(MODELOS_TEXTO, (modelo) => client.chat.completions.create({
    model: modelo,
    temperature: 0,
    response_format: { type: "json_object" },
    max_completion_tokens: MAX_OUTPUT_TOKENS_ANALISIS,
    reasoning_effort: REASONING_EFFORT_TEXT,
    messages: [
      { role: "system", content: ANALISIS_SYSTEM },
      { role: "user", content: `TEXTO DE LA MULTA:\n\n${texto.slice(0, 6000)}` },
    ],
  }));
  return parseAnalisis(response.choices[0]?.message?.content ?? "{}");
}

function parseAnalisis(raw: string): AnalisisRaw {
  const defaults: AnalisisRaw = {
    viabilidad: 0,
    nivel: "baja",
    resumen: "",
    defectos: [],
    provincia: "No detectada",
    expediente: "No encontrado",
    importe: "No especificado",
    infraccion: "No especificada",
    fecha: "No especificada",
    plazoRecurso: "",
    matricula: "No encontrada",
    velocidadDetectada: "No aplica",
    limiteVia: "No aplica",
  };
  try {
    const sinThink = raw.replace(/<think>[\s\S]*?<\/think>/gi, "");
    const ini = sinThink.indexOf("{"), fin = sinThink.lastIndexOf("}");
    const cleaned = ini >= 0 && fin > ini ? sinThink.slice(ini, fin + 1) : sinThink.trim();
    const parsed = JSON.parse(cleaned) as Partial<AnalisisRaw>;
    return aplicarNormativa({ ...defaults, ...parsed });
  } catch {
    // 12/10/2026: antes devolvía un análisis "por defecto" con defectos inventados
    // (65 %, "se recomienda recurrir"). Ahora se dice la verdad.
    throw new ConvexError({
      code: "ANALISIS_VACIO",
      message: "No hemos podido leer el documento con seguridad. Sube una foto más nítida o el PDF original.",
    });
  }
}

// Cálculos legales deterministas + saneado de lo que devuelve la IA (12/10/2026).
function aplicarNormativa(a: AnalisisRaw): AnalisisRaw {
  const hechos = evaluarVelocidad({
    velocidadDetectada: a.velocidadDetectada, limiteVia: a.limiteVia, importe: a.importe,
    tipoRadar: a.tipoRadar ?? "desconocido",
  });
  const esVelocidad = /\d/.test(a.velocidadDetectada ?? "") || /velocidad|km\/h/i.test(a.infraccion ?? "");
  // Solo defectos con cita concreta (13/10/2026): sin artículo no es un motivo jurídico.
  const CITA = /\b(art(?:ículo|\.)?\s*\d+|anexo\s+[IVX]+|Orden\s+ICT\/155\/2020|ordenanza)/i;
  const esVel = /\d/.test(a.velocidadDetectada ?? "") || /velocidad|km\/h/i.test(a.infraccion ?? "");
  // En velocidad, márgenes y tramos los calcula el sistema: fuera los "defectos" de la IA sobre la cifra.
  const sobreCifra = (d: Defecto) => esVel && /velocidad|km\/h|margen|exceso|contradic|tramo/i.test(`${d.titulo} ${d.descripcion}`) && !/certificad|verificaci|metrol/i.test(`${d.titulo} ${d.descripcion}`);
  const defectos: Defecto[] = (a.defectos ?? []).filter((d) => CITA.test(`${d.titulo} ${d.descripcion}`) && !sobreCifra(d)).slice(0, 4).map((d) =>
    /certificad|verificaci|metrol/i.test(`${d.titulo} ${d.descripcion}`) && d.gravedad === "alta" ? { ...d, gravedad: "media" } : d
  );
  // 13/10/2026: si no es una notificación (p. ej. solo el fotograma del radar), lo
  // que "falta" no es un defecto de la multa sino un dato que no tenemos.
  const noEsNotificacion = (a.tipoDocumento ?? "desconocido") === "desconocido" && /no encontrad|^$/i.test(a.expediente ?? "");
  const FALTA = /\b(falta|ausencia|no consta|no se (indica|especifica|identifica)|no (aparece|figura|indica|especifica)|sin identificar|omisi)/i;
  const faltasMovidas: string[] = [];
  if (noEsNotificacion) for (let i = defectos.length - 1; i >= 0; i--) if (FALTA.test(`${defectos[i].titulo} ${defectos[i].descripcion}`)) faltasMovidas.unshift(defectos.splice(i, 1)[0].titulo.toLowerCase());
  const presc = evaluarPrescripcion({ fecha: a.fecha, fechaNotificacion: a.fechaNotificacion, calificacion: a.calificacion });
  // El cálculo manda: se quitan los defectos de prescripción que haya escrito la IA.
  if (presc.motivo || presc.linea) for (let i = defectos.length - 1; i >= 0; i--) if (/prescrip/i.test(defectos[i].titulo)) defectos.splice(i, 1);
  if (presc.motivo) {
    defectos.unshift({ titulo: "Prescripción de la infracción", descripcion: presc.motivo, gravedad: "alta" });
  }
  for (const m of hechos.motivosFuertes) defectos.unshift({ titulo: "Error en el cálculo de la sanción por velocidad", descripcion: m, gravedad: "alta" });
  const faltan = [...new Set([...(a.datosFaltantes ?? []), ...faltasMovidas, ...(esVelocidad ? hechos.datosFaltantes : []), ...(presc.falta ? [presc.falta] : [])])];
  const puntos = { alta: 20, media: 10, baja: 5 } as const;
  let viabilidad = Math.min(95, 25 + defectos.reduce((n, d) => n + (puntos[d.gravedad as keyof typeof puntos] ?? 0), 0));
  // Motivos calculados con la norma (prescripción, importe o velocidad fuera de tramo): son objetivos.
  const objetivos = (presc.motivo ? 1 : 0) + hechos.motivosFuertes.length;
  if (objetivos) viabilidad = Math.max(viabilidad, 75);
  const tipoDoc = a.tipoDocumento ?? "desconocido";
  const plazo = tipoDoc === "resolucion" ? PLAZOS[1] : tipoDoc === "denuncia" ? PLAZOS[0] : `${PLAZOS[0]} ${PLAZOS[1]}`;
  return {
    ...a,
    defectos,
    viabilidad,
    nivel: viabilidad >= 70 ? "alta" : viabilidad >= 40 ? "media" : "baja",
    plazoRecurso: plazo,
    datosFaltantes: faltan,
    fundamentos: [...(esVelocidad ? hechos.lineas : []), ...(presc.linea ? [presc.linea] : []), ...(presc.motivo ? [presc.motivo] : []), plazo, PLAZOS[2]],
    // Resumen determinista (13/10/2026): coherente siempre con defectos y puntuación.
    resumen: [
      objetivos
        ? `Hay un motivo objetivo para recurrir: ${defectos[0].titulo.toLowerCase()}.`
        : defectos.length
          ? `Hay ${defectos.length === 1 ? "un posible defecto" : `${defectos.length} posibles defectos`}: ${defectos.map((d) => d.titulo.toLowerCase()).join("; ")}.`
          : "No vemos defectos formales en lo que muestra el documento: la multa parece correcta y recurrir tiene pocas posibilidades.",
      esVelocidad && hechos.lineas[1] ? hechos.lineas[1] : "",
      faltan.length ? `Faltan datos para valorarlo del todo: ${faltan.join(", ")}.` : "",
    ].filter(Boolean).join(" "),
  };
}

// ── Genera el texto del recurso de reposición dado el análisis y los datos personales ──
async function generarCartaMulta(
  datos: { organo?: string; provincia: string; expediente: string; importe: string; infraccion: string; fecha: string; matricula: string; velocidadDetectada: string; limiteVia: string; tipoDocumento?: string; fechaNotificacion?: string; fundamentos?: string[] },
  defectos: Defecto[],
  personal: { nombreRecurrente?: string; dniRecurrente?: string; domicilioRecurrente?: string },
  hoy: string
): Promise<string> {
  const recursoSystemPrompt = `Eres un abogado especialista en derecho de tráfico español con 20 años de experiencia.
Redacta el escrito que indique TIPO DE ESCRITO (alegaciones a la denuncia o recurso de reposición contra la resolución), formal y completo.

ESTRUCTURA OBLIGATORIA:
1. ENCABEZADO: lugar, fecha actual, órgano destinatario (según provincia detectada)
2. IDENTIFICACIÓN: nombre completo, DNI/NIE, domicilio ("[COMPLETAR: domicilio]" si no se sabe)
3. EXPONE (numerado): hechos relevantes cronológicamente
4. ALEGA (numerado): desarrolla CADA defecto con artículos exactos de LTSV, Ley 39/2015, CE, jurisprudencia TS/TC
5. SUPLICA: nulidad/anulación del expediente y devolución del importe
6. OTROSÍ si procede medida cautelar de suspensión
7. PIE: lugar, fecha, firma

Lenguaje jurídico formal. Datos desconocidos → "[COMPLETAR]". Primera persona.
DESTINATARIO: el órgano que figure en el documento (p. ej. "Jefatura Provincial de Tráfico de X" o "Alcaldía / Ayuntamiento de X"). NUNCA un juzgado. Si no consta: "[COMPLETAR: órgano que dictó el acto]".
CITAS: PROHIBIDO citar sentencias, jurisprudencia o números de resolución. Cita SOLO estos artículos: LSV (RDL 6/2015) arts. 75, 76, 77, 80, 81, 82, 87, 88, 89, 90, 91, 93, 94, 95, 96, 112 y anexo IV; RGC arts. 48 y 50; Orden ICT/155/2020 (anexo III); Ley 39/2015 arts. 53, 77, 112, 117 y 124; CE arts. 24 y 25; y el artículo de la ordenanza municipal que figure en el documento.
QUÉ DICE CADA UNO (cítalo solo para eso): LSV 75/76/77 = catálogo de infracciones leves/graves/muy graves; 80 = tipos de sanción; 81 = graduación de la multa; anexo IV = cuadro de velocidad; 82 = responsables; 87 = contenido obligatorio de la denuncia; 88 = valor probatorio de la denuncia del agente; 89-91 = notificación; 93-95 = procedimiento, alegaciones (20 días naturales) y pronto pago; 96 = recurso de reposición (1 mes); 112 = prescripción y caducidad. Ley 39/2015: 53 = derecho a acceder al expediente y obtener copia; 77 = prueba; 112 = recursos; 117 = suspensión de la ejecución; 124 = plazo de reposición. CE 24 = derecho de defensa y presunción de inocencia; 25 = legalidad sancionadora. RGC 48 = límites de velocidad; 50 = límites en vías urbanas.
No atribuyas a un artículo exigencias que no contiene.
No añadas alegaciones que no estén en DEFECTOS DETECTADOS o HECHOS CALCULADOS. Si no hay defectos, limita el escrito a pedir el expediente completo y la prueba (fotograma y certificado de verificación del cinemómetro si es radar) (art. 53 Ley 39/2015).
FORMATO: texto plano, sin markdown (sin asteriscos, almohadillas ni líneas de guiones). Usa títulos en MAYÚSCULAS.
Usa literalmente los HECHOS CALCULADOS que se te dan (márgenes, tramos y plazos).`;

  const recursoUserPrompt = `Recurrente: ${personal.nombreRecurrente ?? "[COMPLETAR: Nombre y apellidos]"}
DNI/NIE: ${personal.dniRecurrente ?? "[COMPLETAR: DNI/NIE]"}
Domicilio: ${personal.domicilioRecurrente ?? "[COMPLETAR: Domicilio completo]"}
Fecha de redacción: ${hoy}
Expediente: ${datos.expediente}
Importe sanción: ${datos.importe}
Infracción: ${datos.infraccion}
Fecha infracción: ${datos.fecha}
Órgano que figura en el documento (destinatario): ${datos.organo ?? "No consta"}
Provincia: ${datos.provincia}
Matrícula: ${datos.matricula}
Velocidad detectada: ${datos.velocidadDetectada}
Límite de la vía: ${datos.limiteVia}
Fecha de notificación: ${datos.fechaNotificacion ?? "No consta"}
TIPO DE ESCRITO: ${datos.tipoDocumento === "resolucion" ? "RECURSO DE REPOSICIÓN contra la resolución sancionadora (art. 96 LSV)" : "ESCRITO DE ALEGACIONES a la denuncia (art. 95 LSV)"}

HECHOS CALCULADOS (úsalos literalmente, no los modifiques):
${(datos.fundamentos ?? []).map((f) => `- ${f}`).join("\n") || "- (ninguno)"}

REGLA OBLIGATORIA: si hay velocidad detectada y límite de vía, descríbelos SIEMPRE por separado ("circulaba a X km/h en vía limitada a Y km/h"). NUNCA digas "X km/h por encima del límite" salvo que el documento indique expresamente el exceso.

DEFECTOS DETECTADOS (desarrolla cada uno en profundidad):
${defectos.map((d, i) => `${i + 1}. [${d.gravedad.toUpperCase()}] ${d.titulo}: ${d.descripcion}`).join("\n")}

Redacta el escrito completo con todos los argumentos jurídicos.`;

  const client = groq();
  const cartaResponse = await withModelos(MODELOS_TEXTO, (modelo) => client.chat.completions.create({
    model: modelo,
    temperature: 0,
    max_completion_tokens: MAX_OUTPUT_TOKENS_CARTA,
    reasoning_effort: REASONING_EFFORT_TEXT,
    messages: [
      { role: "system", content: recursoSystemPrompt },
      { role: "user", content: recursoUserPrompt },
    ],
  }));

  return limpiarCarta(cartaResponse.choices[0]?.message?.content ?? "");
}

// 13/10/2026: quita markdown y cualquier línea con citas no permitidas
// (sentencias inventadas o artículos fuera de la lista).
const PERMITIDOS: Record<string, number[]> = {
  lsv: [75, 76, 77, 80, 81, 82, 87, 88, 89, 90, 91, 93, 94, 95, 96, 112],
  ley39: [53, 77, 112, 117, 124],
  ce: [24, 25],
  rgc: [48, 50],
};
function citaPermitida(linea: string): boolean {
  if (/\b(STS|STC|SSTS|sentencia|jurisprudencia|Tribunal Supremo|Tribunal Constitucional|Audiencia)\b/i.test(linea)) return false;
  const re = /art(?:ículo|ículos|s?\.)\s*(\d+)[^.;\n]{0,60}?(LSV|Seguridad Vial|RDL 6\/2015|Real Decreto Legislativo 6\/2015|Ley 39\/2015|Constituci|CE\b|RGC|Reglamento General de Circulaci)/gi;
  for (const m of linea.matchAll(re)) {
    const n = Number(m[1]); const ley = m[2].toLowerCase();
    const lista = /39\/2015/.test(ley) ? PERMITIDOS.ley39 : /constituci|ce/.test(ley) ? PERMITIDOS.ce : /rgc|reglamento/.test(ley) ? PERMITIDOS.rgc : PERMITIDOS.lsv;
    if (!lista.includes(n)) return false;
  }
  return true;
}
function limpiarCarta(t: string): string {
  return t
    .replace(/<think>[\s\S]*?<\/think>/gi, "")
    .replace(/\*\*|__/g, "")
    .replace(/^#{1,6}\s*/gm, "")
    .split("\n")
    .filter((l) => !/^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(l) && citaPermitida(l))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// ── ACTION PRINCIPAL ──────────────────────────────────────────────────────────
export const analizarMulta = action({
  args: {
    fileBase64: v.string(),
    fileMimeType: v.string(),
    nombreRecurrente: v.optional(v.string()),
    dniRecurrente: v.optional(v.string()),
    domicilioRecurrente: v.optional(v.string()),
    // Identificador anónimo del cliente (localStorage) para rate limiting
    // cuando el usuario analiza sin registrarse.
    fingerprint: v.optional(v.string()),
    sessionToken: v.optional(v.string()),
  },
  handler: async (ctx, { fileBase64, fileMimeType, nombreRecurrente, dniRecurrente, domicilioRecurrente, fingerprint, sessionToken }): Promise<{
    carta: string;
    viabilidad: number;
    nivel: "alta" | "media" | "baja";
    resumen: string;
    defectos: Defecto[];
    datosFaltantes?: string[];
    fundamentos?: string[];
    datosMulta: {
      provincia: string;
      expediente: string;
      importe: string;
      infraccion: string;
      fecha: string;
      plazoRecurso: string;
      matricula: string;
      velocidadDetectada: string;
      limiteVia: string;
    };
  }> => {
    // Rate limiting desactivado por orden de Daniel (01/10/2026).
    const sessionUser = await getUserFromSession(ctx, sessionToken);

    // ── 1. Validar tamaño del archivo (base64 ~1.33x el tamaño real)
    // 7MB de base64 ≈ ~5MB de archivo real
    const MAX_BASE64_LENGTH = 7 * 1024 * 1024;
    if (fileBase64.length > MAX_BASE64_LENGTH) {
      throw new ConvexError({
        code: "BAD_REQUEST",
        message: "El archivo es demasiado grande. El tamaño máximo es 5MB.",
      });
    }

    const hoy = new Date().toLocaleDateString("es-ES", {
      day: "2-digit", month: "long", year: "numeric",
    });

    // ── 1b. Caché: si este documento (o este expediente) ya se analizó,
    // devolver el MISMO resultado sin llamar a la IA (03/10/2026) ──────────
    const docHash = await sha256hex(fileBase64);
    const hitDoc = await ctx.runQuery(internal.multasInterno.buscarAnalisisCache, { docHash });
    if (hitDoc) {
      await ctx.runMutation(internal.multasInterno.contarHitCache, { id: hitDoc._id });
      return JSON.parse(hitDoc.resultado);
    }

    // ── 2. Extraer contenido según tipo de archivo ─────────────────────────────
    let analisis: AnalisisRaw;

    if (fileMimeType === "application/pdf") {
      let textoExtraido = "";
      try {
        textoExtraido = await extractPdfText(fileBase64);
      } catch {
        // PDF escaneado o corrupto — continuar sin texto
      }

      if (textoExtraido.length > 80) {
        // PDF con texto nativo — más preciso y rápido
        analisis = await analizarConTexto(textoExtraido);
      } else {
        // PDF escaneado — renderizar la primera página como imagen real
        // antes de enviarla al modelo de visión (los bytes del PDF no son
        // una imagen JPEG válida).
        const paginaJpegBase64 = await renderPdfFirstPageToJpegBase64(fileBase64);
        analisis = await analizarConVision(paginaJpegBase64, "image/jpeg");
      }
    } else {
      // Imagen (jpg, png, webp) — visión directa
      analisis = await analizarConVision(fileBase64, fileMimeType);
    }

    // ── 2b. Segundo intento de caché: mismo expediente con otro archivo
    // (reescaneo o foto distinta de la misma multa) ─────────────────────────
    const expedienteKey = normalizarExpediente(analisis.expediente);
    const hitExp = await ctx.runQuery(internal.multasInterno.buscarAnalisisCache, { expedienteKey });
    if (hitExp) {
      await ctx.runMutation(internal.multasInterno.contarHitCache, { id: hitExp._id });
      return JSON.parse(hitExp.resultado);
    }

    // ── 2. Redactar recurso de reposición ─────────────────────────────────────
    const carta = await generarCartaMulta(
      { organo: analisis.organo, provincia: analisis.provincia, expediente: analisis.expediente, importe: analisis.importe, infraccion: analisis.infraccion, fecha: analisis.fecha, matricula: analisis.matricula, velocidadDetectada: analisis.velocidadDetectada, limiteVia: analisis.limiteVia, tipoDocumento: analisis.tipoDocumento, fechaNotificacion: analisis.fechaNotificacion, fundamentos: analisis.fundamentos },
      analisis.defectos,
      { nombreRecurrente, dniRecurrente, domicilioRecurrente },
      hoy
    );

    const resultado = {
      carta,
      viabilidad: analisis.viabilidad,
      nivel: analisis.nivel,
      resumen: analisis.resumen,
      defectos: analisis.defectos,
      datosFaltantes: analisis.datosFaltantes ?? [],
      fundamentos: analisis.fundamentos ?? [],
      datosMulta: {
        provincia: analisis.provincia,
        expediente: analisis.expediente,
        importe: analisis.importe,
        infraccion: analisis.infraccion,
        fecha: analisis.fecha,
        plazoRecurso: analisis.plazoRecurso,
        matricula: analisis.matricula,
        velocidadDetectada: analisis.velocidadDetectada,
        limiteVia: analisis.limiteVia,
      },
    };

    // ── 2c. Guardar en caché para futuras consultas idénticas ───────────────
    await ctx.runMutation(internal.multasInterno.guardarAnalisisCache, {
      expedienteKey,
      docHash,
      resultado: JSON.stringify(resultado),
    });

    return resultado;
  },
});

// ── Regenera el recurso ya redactado con los datos personales reales del
// usuario (nombre, DNI, domicilio), sustituyendo los "[COMPLETAR]" del
// primer borrador. Se llama después de ver el análisis, justo antes de
// generar el PDF final, para no pedir estos datos en la portada.
export const regenerarCartaMulta = action({
  args: {
    provincia: v.string(),
    expediente: v.string(),
    importe: v.string(),
    infraccion: v.string(),
    fecha: v.string(),
    defectos: v.array(v.object({
      titulo: v.string(),
      descripcion: v.string(),
      gravedad: v.union(v.literal("alta"), v.literal("media"), v.literal("baja")),
    })),
    nombreRecurrente: v.string(),
    dniRecurrente: v.string(),
    domicilioRecurrente: v.string(),
    sessionToken: v.optional(v.string()),
    // 13/10/2026: carta del análisis, por si no hay caché (multa sin expediente).
    cartaBase: v.optional(v.string()),
  },
  handler: async (ctx, args): Promise<{ carta: string }> => {
    // Sin registro: la carta se regenera justo antes del pago, sin sesión.
    // DETERMINISTA (03/10/2026): sustitución directa de los [COMPLETAR] en vez
    // de llamar a la IA otra vez, para que el documento final sea siempre igual.
    const { carta: base } = await ctx.runQuery(internal.multasInterno.obtenerCartaBase, {
      expedienteKey: normalizarExpediente(args.expediente),
    });

    let carta = base || args.cartaBase || "";
    if (!carta.trim()) {
      throw new ConvexError({ code: "SIN_CARTA", message: "No encontramos el borrador del recurso. Vuelve a analizar la multa." });
    }
    carta = carta.replace(/\[COMPLETAR:\s*Nombre y apellidos\]/gi, args.nombreRecurrente);
    carta = carta.replace(/\[COMPLETAR:\s*DNI\/NIE\]/gi, args.dniRecurrente);
    carta = carta.replace(/\[COMPLETAR:\s*Domicilio completo\]/gi, args.domicilioRecurrente);
    carta = carta.replace(/\[COMPLETAR:\s*domicilio\]/gi, args.domicilioRecurrente);
    return { carta };
  },
});

// NOTA: obtenerCartaBase vive en convex/multasInterno.ts (los ficheros
// "use node" solo pueden definir actions).
