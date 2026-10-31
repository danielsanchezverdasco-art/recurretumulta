"use node";
/// <reference types="node" />

import { v } from "convex/values";
import OpenAI from "openai";
import { action } from "./_generated/server";
import { ConvexError } from "convex/values";
import { internal, api } from "./_generated/api";
import { renderPdfFirstPageToJpegBase64 } from "./lib/pdfToImage";
import { getUserFromSession } from "./authSimple";

const MODEL_TEXT   = "openai/gpt-oss-120b";
const MODEL_VISION = "qwen/qwen3.8-27b";

const MAX_RETRY_ATTEMPTS = 2;
const RETRY_DELAY_MS = 2000;
// La cuenta de Groq tiene un límite estricto de tokens de salida por minuto (OTPM).
// Al recibir un 429 por ese límite, hay que esperar mucho más (para caer en el
// siguiente minuto) en vez del reintento corto normal.
const RATE_LIMIT_RETRY_DELAY_MS = 21000;
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
async function withRetry<T>(fn: () => Promise<T>, attempts = MAX_RETRY_ATTEMPTS): Promise<T> {
  let lastError: unknown;
  for (let i = 0; i <= attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      // No reintentar errores fatales (auth, modelo inexistente)
      if (isFatalError(err)) {
        if (err instanceof OpenAI.APIError && (err.status === 401 || err.status === 403)) {
          throw new ConvexError({
            code: "GROQ_AUTH",
            message: "El servicio de análisis no está disponible ahora mismo (error de configuración). Inténtalo más tarde.",
          });
        }
        if (err instanceof OpenAI.APIError && err.status === 404) {
          throw new ConvexError({
            code: "GROQ_MODEL",
            message: "El servicio de análisis no está disponible ahora mismo (modelo no disponible). Inténtalo más tarde.",
          });
        }
        throw err;
      }
      if (i < attempts) {
        const delay = isRateLimitError(err) ? RATE_LIMIT_RETRY_DELAY_MS : RETRY_DELAY_MS;
        await new Promise((res) => setTimeout(res, delay));
      }
    }
  }
  throw lastError;
}

type Defecto = { titulo: string; descripcion: string; gravedad: "alta" | "media" | "baja" };
type AnalisisSancionRaw = {
  nivel: "alta" | "media" | "baja" | "no_valorable";
  motivosNivel: string[];
  resumen: string;
  defectos: Defecto[];
  municipio: string;
  expediente: string;
  importe: string;
  infraccion: string;
  fecha: string;
  ley: string;
  plazoRecurso: string;
};

const ANALISIS_SANCION_SYSTEM = `Eres un abogado experto en derecho administrativo sancionador español, especializado en:
- Ley Orgánica 4/2015 de Protección de la Seguridad Ciudadana ("Ley Mordaza")
- Ordenanzas municipales de convivencia cívica
- Sanciones por consumo de alcohol en vía pública
- Sanciones por botellón y concentraciones no comunicadas
- Multas por ruido, desorden público y alteración de la convivencia
- Infracciones por falta de respeto a agentes de autoridad (art. 36.6 LO 4/2015)
- Ley 39/2015 (Procedimiento Administrativo Común)
- Jurisprudencia del Tribunal Constitucional sobre derechos fundamentales

Analiza la sanción y devuelve SOLO JSON puro sin markdown con esta estructura:
{
  "motivosNivel": [<máx. 3 frases cortas con el motivo concreto de cada defecto, citando el dato del documento>],
  "resumen": <2-3 frases: hallazgos y recomendación concreta>,
  "defectos": [
    { "titulo": <nombre del defecto>, "descripcion": <1 frase explicativa con referencia legal>, "gravedad": <"alta"|"media"|"baja"> }
  ],
  "municipio": <ciudad/municipio que impone la sanción, o "Desconocido">,
  "expediente": <número de expediente, o "No encontrado">,
  "importe": <importe exacto en euros, o "No especificado">,
  "infraccion": <descripción de la conducta infractora tal como aparece>,
  "fecha": <fecha de la infracción, o "No especificada">,
  "ley": <ley aplicada: "LO 4/2015", "Ordenanza Municipal", "ambas", etc.>,
  "plazoRecurso": <plazo exacto según la ley o resolución, habitualmente "30 días hábiles">
}

DEFECTOS MÁS FRECUENTES EN SANCIONES POLICIALES (analiza TODOS):
1. Falta de identificación correcta del agente denunciante (nombre, DNI profesional, número de placa)
2. Ausencia de testigos o testigos únicamente del propio cuerpo (art. 53.1 LO 4/2015 solo invierte la carga probatoria, no es prueba suficiente per se según TC)
3. Descripción vaga o genérica de la conducta sancionada (indefensión material)
4. No se indica con precisión el lugar, hora y circunstancias (nulidad por falta de motivación)
5. Falta de proporcionalidad de la sanción respecto a los hechos descritos
6. Ordenanza municipal aplicada no publicada correctamente o inaplicable al caso
7. Ausencia del trámite de audiencia al interesado antes de la resolución
8. Prescripción de la infracción (art. 30 Ley 40/2015): leve 6 meses, grave 2 años, muy grave 3 años
9. Caducidad del procedimiento (art. 21.3 Ley 39/2015): silencio administrativo positivo en procedimientos iniciados de oficio si superan 6 meses
10. Vulneración de derechos fundamentales (libertad de expresión art. 20 CE, reunión art. 21 CE)
11. Falta de graduación motivada de la sanción dentro del rango legal

REGLAS ANTI-INVENCIÓN: lista un defecto SOLO si se desprende de lo que se lee en el documento (p. ej. "falta el lugar" solo si el documento no trae lugar). Si no puedes leer el documento, devuelve "defectos": [] y los datos como "No encontrado". NO des porcentajes ni probabilidades de éxito: el nivel lo calcula el sistema.
EXTRAE los datos DIRECTAMENTE del documento. NO inventes. Incluye como máximo los 4 defectos más relevantes. Sé conciso: "resumen" máximo 2 frases y "descripcion" de cada defecto máximo 1 frase corta.`;

async function analizarSancionConVision(base64Data: string, mimeType: string): Promise<AnalisisSancionRaw> {
  const client = groq();
  const response = await withRetry(() => client.chat.completions.create({
    model: MODEL_VISION,
    temperature: 0,
    max_tokens: MAX_OUTPUT_TOKENS_ANALISIS,
    messages: [
      { role: "system", content: ANALISIS_SANCION_SYSTEM },
      {
        role: "user",
        content: [
          { type: "text", text: "Lee esta sanción/multa policial o municipal y analízala. Extrae TODOS los datos visibles." },
          { type: "image_url", image_url: { url: `data:${mimeType};base64,${base64Data}`, detail: "high" } },
        ],
      },
    ],
  }));
  return parseSancion(response.choices[0]?.message?.content ?? "{}");
}

async function analizarSancionConTexto(texto: string): Promise<AnalisisSancionRaw> {
  const client = groq();
  const response = await withRetry(() => client.chat.completions.create({
    model: MODEL_TEXT,
    temperature: 0,
    max_completion_tokens: MAX_OUTPUT_TOKENS_ANALISIS,
    reasoning_effort: REASONING_EFFORT_TEXT,
    messages: [
      { role: "system", content: ANALISIS_SANCION_SYSTEM },
      { role: "user", content: `TEXTO DE LA SANCIÓN:\n\n${texto.slice(0, 6000)}` },
    ],
  }));
  return parseSancion(response.choices[0]?.message?.content ?? "{}");
}

async function extractPdfText(base64Data: string): Promise<string> {
  const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs" as string);
  const binaryData = Uint8Array.from(atob(base64Data), (c) => c.charCodeAt(0));
  const pdf = await pdfjs.getDocument({ data: binaryData, useSystemFonts: true, isEvalSupported: false }).promise;
  const textPages: string[] = [];
  const maxPages = Math.min(pdf.numPages, 8);
  for (let i = 1; i <= maxPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items.map((item: { str?: string }) => item.str ?? "").join(" ").replace(/\s{2,}/g, " ").trim();
    if (pageText) textPages.push(pageText);
  }
  return textPages.join("\n\n").trim();
}

const VACIO_RE = /^(|no (encontrado|especificad[oa]|detectado|disponible)|desconocido)$/i;
const vacioS = (x: unknown) => typeof x !== "string" || VACIO_RE.test(x.trim());

// Interpreta la respuesta del modelo SIN rellenar nada inventado: si no hay datos reales, error claro.
// El nivel lo calcula el sistema a partir de los defectos; nunca hay porcentaje.
function parseSancion(raw: string): AnalisisSancionRaw {
  const ilegible = () => new ConvexError({ code: "ANALISIS_VACIO", message: "No hemos podido leer el documento, prueba con una foto más nítida (o sube el PDF original)." });
  let parsed: Record<string, unknown>;
  try {
    const cleaned = raw.replace(/^```(?:json)?\s*/i, "").replace(/\s*```\s*$/i, "").trim();
    parsed = JSON.parse(cleaned) as Record<string, unknown>;
  } catch {
    throw ilegible();
  }
  const str = (k: string, def: string) => (typeof parsed[k] === "string" && (parsed[k] as string).trim() ? (parsed[k] as string).trim() : def);
  const datos = {
    municipio: str("municipio", "No detectado"),
    expediente: str("expediente", "No encontrado"),
    importe: str("importe", "No especificado"),
    infraccion: str("infraccion", "No especificada"),
    fecha: str("fecha", "No especificada"),
    ley: str("ley", "No especificada"),
    plazoRecurso: str("plazoRecurso", "30 días hábiles desde la notificación"),
  };
  if (vacioS(datos.expediente) && vacioS(datos.importe) && vacioS(datos.fecha) && vacioS(datos.infraccion)) throw ilegible();
  const GRAV = new Set(["alta", "media", "baja"]);
  const defectos: Defecto[] = (Array.isArray(parsed.defectos) ? parsed.defectos : [])
    .filter((d): d is Record<string, unknown> => !!d && typeof d === "object")
    .map((d) => ({
      titulo: String(d.titulo ?? "").trim(),
      descripcion: String(d.descripcion ?? "").trim(),
      gravedad: (GRAV.has(String(d.gravedad)) ? d.gravedad : "media") as Defecto["gravedad"],
    }))
    .filter((d) => d.titulo && d.descripcion)
    .slice(0, 4);
  const faltan = [["la infracción", datos.infraccion], ["la fecha", datos.fecha], ["el importe", datos.importe]].filter(([, v]) => vacioS(v)).map(([n]) => n);
  let nivel: AnalisisSancionRaw["nivel"];
  const motivosNivel: string[] = [];
  if (vacioS(datos.infraccion) && vacioS(datos.fecha)) {
    nivel = "no_valorable";
    motivosNivel.push(`No se ha podido leer ${faltan.join(", ")}; sin ellos no se puede valorar el recurso.`);
  } else if (defectos.some((d) => d.gravedad === "alta")) {
    nivel = "alta";
  } else if (defectos.length > 0) {
    nivel = "media";
  } else {
    nivel = "baja";
    motivosNivel.push("No se aprecian defectos claros en los datos leídos.");
  }
  if (nivel !== "no_valorable") for (const d of defectos) motivosNivel.push(`${d.titulo}: ${d.descripcion}`);
  if (nivel !== "no_valorable" && faltan.length) motivosNivel.push(`No se han podido leer: ${faltan.join(", ")}.`);
  const resumen = str("resumen", defectos.length ? "Se han detectado posibles motivos de recurso en el documento." : "No se aprecian defectos claros en los datos leídos.");
  return { ...datos, nivel, motivosNivel: motivosNivel.slice(0, 6), resumen, defectos };
}

// ── Genera el texto del recurso de reposición dado el análisis y los datos personales ──
async function generarCartaSancion(
  datos: { municipio: string; expediente: string; importe: string; infraccion: string; fecha: string; ley: string },
  defectos: Defecto[],
  personal: { nombreRecurrente?: string; dniRecurrente?: string; domicilioRecurrente?: string },
  hoy: string
): Promise<string> {
  const recursoSystem = `Eres un abogado especialista en derecho administrativo sancionador español con 20 años de experiencia en recursos contra sanciones de la Policía Local, Policía Nacional y ordenanzas municipales.

Redacta un RECURSO DE REPOSICIÓN formal, completo y técnico.

ESTRUCTURA OBLIGATORIA:
1. ENCABEZADO: lugar, fecha actual, órgano destinatario (Ayuntamiento / Delegación del Gobierno según corresponda)
2. IDENTIFICACIÓN: nombre completo, DNI/NIE, domicilio
3. EXPONE (numerado): hechos relevantes — cuándo, dónde, qué ocurrió según la denuncia y la versión del recurrente
4. ALEGA (numerado): desarrolla CADA defecto detectado con:
   - Artículos exactos de LO 4/2015, Ley 39/2015, Ley 40/2015, CE
   - Jurisprudencia del TC/TS relevante (menciona sentencias concretas si aplica)
   - Principios de proporcionalidad, tipicidad, legalidad sancionadora
5. SUPLICA: nulidad de la resolución sancionadora y archivo del expediente
6. OTROSÍ: solicitud de suspensión cautelar del pago durante la tramitación
7. PIE: lugar, fecha, firma

Lenguaje jurídico formal. Datos desconocidos → "[COMPLETAR]". Primera persona. Sé contundente y exhaustivo.`;

  const recursoUser = `Recurrente: ${personal.nombreRecurrente ?? "[COMPLETAR: Nombre y apellidos]"}
DNI/NIE: ${personal.dniRecurrente ?? "[COMPLETAR: DNI/NIE]"}
Domicilio: ${personal.domicilioRecurrente ?? "[COMPLETAR: Domicilio completo]"}
Fecha de redacción: ${hoy}
Expediente sancionador: ${datos.expediente}
Importe de la sanción: ${datos.importe}
Conducta imputada: ${datos.infraccion}
Fecha de los hechos: ${datos.fecha}
Municipio / Órgano: ${datos.municipio}
Ley aplicada: ${datos.ley}

DEFECTOS LEGALES DETECTADOS (desarrolla cada uno con profundidad jurídica):
${defectos.map((d, i) => `${i + 1}. [${d.gravedad.toUpperCase()}] ${d.titulo}: ${d.descripcion}`).join("\n")}

Redacta el recurso de reposición completo con todos los argumentos jurídicos. Incluye artículos exactos y jurisprudencia constitucional cuando sea relevante.`;

  const client = groq();
  const cartaResponse = await withRetry(() => client.chat.completions.create({
    model: MODEL_TEXT,
    max_completion_tokens: MAX_OUTPUT_TOKENS_CARTA,
    reasoning_effort: REASONING_EFFORT_TEXT,
    messages: [
      { role: "system", content: recursoSystem },
      { role: "user", content: recursoUser },
    ],
  }));

  return cartaResponse.choices[0]?.message?.content ?? "";
}

export const analizarSancion = action({
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
    nivel: "alta" | "media" | "baja" | "no_valorable";
    motivosNivel: string[];
    resumen: string;
    defectos: Defecto[];
    datosSancion: {
      municipio: string;
      expediente: string;
      importe: string;
      infraccion: string;
      fecha: string;
      ley: string;
      plazoRecurso: string;
    };
  }> => {
    // Rate limiting desactivado por orden de Daniel (01/10/2026).
    const sessionUser = await getUserFromSession(ctx, sessionToken);

    // ── 1. Validar tamaño del archivo
    const MAX_BASE64_LENGTH = 7 * 1024 * 1024;
    if (fileBase64.length > MAX_BASE64_LENGTH) {
      throw new ConvexError({
        code: "BAD_REQUEST",
        message: "El archivo es demasiado grande. El tamaño máximo es 5MB.",
      });
    }

    const hoy = new Date().toLocaleDateString("es-ES", { day: "2-digit", month: "long", year: "numeric" });

    // 1. Extraer contenido
    let analisis: AnalisisSancionRaw;
    if (fileMimeType === "application/pdf") {
      let textoExtraido = "";
      try { textoExtraido = await extractPdfText(fileBase64); } catch { /* PDF escaneado */ }
      if (textoExtraido.length > 80) {
        analisis = await analizarSancionConTexto(textoExtraido);
      } else {
        // PDF escaneado — renderizar la primera página como imagen real
        // antes de enviarla al modelo de visión (los bytes del PDF no son
        // una imagen JPEG válida).
        const paginaJpegBase64 = await renderPdfFirstPageToJpegBase64(fileBase64);
        analisis = await analizarSancionConVision(paginaJpegBase64, "image/jpeg");
      }
    } else {
      analisis = await analizarSancionConVision(fileBase64, fileMimeType);
    }

    // 2. Redactar recurso de reposición específico para sanciones policiales
    const carta = await generarCartaSancion(
      { municipio: analisis.municipio, expediente: analisis.expediente, importe: analisis.importe, infraccion: analisis.infraccion, fecha: analisis.fecha, ley: analisis.ley },
      analisis.defectos,
      { nombreRecurrente, dniRecurrente, domicilioRecurrente },
      hoy
    );

    return {
      carta,
      nivel: analisis.nivel,
      motivosNivel: analisis.motivosNivel,
      resumen: analisis.resumen,
      defectos: analisis.defectos,
      datosSancion: {
        municipio: analisis.municipio,
        expediente: analisis.expediente,
        importe: analisis.importe,
        infraccion: analisis.infraccion,
        fecha: analisis.fecha,
        ley: analisis.ley,
        plazoRecurso: analisis.plazoRecurso,
      },
    };
  },
});

// ── Regenera el recurso ya redactado con los datos personales reales del
// usuario (nombre, DNI, domicilio), sustituyendo los "[COMPLETAR]" del
// primer borrador. Se llama después de ver el análisis, justo antes de
// generar el PDF final, para no pedir estos datos en la portada.
export const regenerarCartaSancion = action({
  args: {
    municipio: v.string(),
    expediente: v.string(),
    importe: v.string(),
    infraccion: v.string(),
    fecha: v.string(),
    ley: v.string(),
    defectos: v.array(v.object({
      titulo: v.string(),
      descripcion: v.string(),
      gravedad: v.union(v.literal("alta"), v.literal("media"), v.literal("baja")),
    })),
    nombreRecurrente: v.string(),
    dniRecurrente: v.string(),
    domicilioRecurrente: v.string(),
    sessionToken: v.optional(v.string()),
  },
  handler: async (ctx, args): Promise<{ carta: string }> => {
    // Sin registro: la carta se regenera justo antes del pago, sin sesión.
    const hoy = new Date().toLocaleDateString("es-ES", { day: "2-digit", month: "long", year: "numeric" });
    const carta = await generarCartaSancion(
      { municipio: args.municipio, expediente: args.expediente, importe: args.importe, infraccion: args.infraccion, fecha: args.fecha, ley: args.ley },
      args.defectos,
      { nombreRecurrente: args.nombreRecurrente, dniRecurrente: args.dniRecurrente, domicilioRecurrente: args.domicilioRecurrente },
      hoy
    );
    return { carta };
  },
});
