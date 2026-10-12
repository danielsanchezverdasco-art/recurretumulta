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

const AI_ANALYSIS_DAILY_LIMIT = 10;
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
type AnalisisRaw = {
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
  "provincia": <provincia exacta detectada en el documento, o "Desconocida">,
  "expediente": <número de expediente exacto del documento, o "No encontrado">,
  "importe": <importe exacto en euros del documento, p.ej. "200€", o "No especificado">,
  "infraccion": <descripción COMPLETA de la infracción tal como aparece en el documento, incluyendo TODOS los valores numéricos (velocidad detectada Y límite de la vía si es radar)>,
  "fecha": <fecha exacta de la infracción del documento, o "No especificada">,
  "plazoRecurso": "20 días hábiles desde la notificación",
  "matricula": <matrícula del vehículo tal como aparece, o "No encontrada">,
  "velocidadDetectada": <velocidad medida por el radar/cinemómetro en km/h, p.ej. "68 km/h", o "No aplica" si no es exceso de velocidad>,
  "limiteVia": <límite de velocidad de la vía en km/h, p.ej. "50 km/h", o "No aplica" si no es exceso de velocidad>
}

REGLA CRÍTICA DE VELOCIDAD: si es un exceso de velocidad, la "velocidadDetectada" es la velocidad a la que IBA el vehículo y el "limiteVia" es el máximo permitido. NUNCA confundas la velocidad detectada con el exceso: si el documento dice "68 km/h en vía limitada a 50", la velocidad es 68 y el límite es 50 (el exceso son 18 km/h). Extrae AMBOS valores por separado.

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

// ── Caché de análisis: la misma multa siempre devuelve el mismo resultado ───
// (orden de Daniel 03/10/2026). Helpers puros; las queries/mutaciones viven en
// convex/multasInterno.ts porque los ficheros "use node" solo admiten actions.
function normalizarExpediente(exp: string | undefined): string {
  const n = (exp ?? "").toUpperCase().replace(/[\s.\-_/\\]+/g, "");
  return n === "" || n === "NOENCONTRADO" ? "SIN_EXPEDIENTE" : n;
}

async function sha256hex(text: string): Promise<string> {
  const { createHash } = await import("node:crypto");
  return createHash("sha256").update(text, "utf8").digest("hex");
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
  const client = groq();
  const response = await withRetry(() => client.chat.completions.create({
    model: MODEL_VISION,
    temperature: 0,
    max_tokens: MAX_OUTPUT_TOKENS_ANALISIS,
    messages: [
      { role: "system", content: ANALISIS_SYSTEM },
      {
        role: "user",
        content: [
          { type: "text", text: "Lee esta multa de tráfico y analízala. Extrae TODOS los datos que veas." },
          {
            type: "image_url",
            image_url: {
              url: `data:${mimeType};base64,${base64Data}`,
              detail: "high",
            },
          },
        ],
      },
    ],
  }));
  return parseAnalisis(response.choices[0]?.message?.content ?? "{}");
}

// ── Análisis con texto — Llama 3.3 70B ───────────────────────────────────────
async function analizarConTexto(texto: string): Promise<AnalisisRaw> {
  const client = groq();
  const response = await withRetry(() => client.chat.completions.create({
    model: MODEL_TEXT,
    temperature: 0,
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
    viabilidad: 65,
    nivel: "media",
    resumen: "Se han detectado posibles irregularidades en la tramitación. Se recomienda recurrir.",
    defectos: [
      { titulo: "Posible defecto de notificación", descripcion: "La notificación podría no cumplir los requisitos del art. 41 de la Ley 39/2015.", gravedad: "media" },
      { titulo: "Verificación metrológica pendiente", descripcion: "Debe comprobarse la vigencia del certificado de calibración del instrumento de medida.", gravedad: "media" },
    ],
    provincia: "No detectada",
    expediente: "No encontrado",
    importe: "No especificado",
    infraccion: "No especificada",
    fecha: "No especificada",
    plazoRecurso: "20 días hábiles desde la notificación",
    matricula: "No encontrada",
    velocidadDetectada: "No aplica",
    limiteVia: "No aplica",
  };
  try {
    const cleaned = raw
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/\s*```\s*$/i, "")
      .trim();
    const parsed = JSON.parse(cleaned) as Partial<AnalisisRaw>;
    return { ...defaults, ...parsed };
  } catch {
    return defaults;
  }
}

// ── Genera el texto del recurso de reposición dado el análisis y los datos personales ──
async function generarCartaMulta(
  datos: { provincia: string; expediente: string; importe: string; infraccion: string; fecha: string; matricula: string; velocidadDetectada: string; limiteVia: string },
  defectos: Defecto[],
  personal: { nombreRecurrente?: string; dniRecurrente?: string; domicilioRecurrente?: string },
  hoy: string
): Promise<string> {
  const recursoSystemPrompt = `Eres un abogado especialista en derecho de tráfico español con 20 años de experiencia.
Redacta un RECURSO DE REPOSICIÓN formal y completo.

ESTRUCTURA OBLIGATORIA:
1. ENCABEZADO: lugar, fecha actual, órgano destinatario (según provincia detectada)
2. IDENTIFICACIÓN: nombre completo, DNI/NIE, domicilio ("[COMPLETAR: domicilio]" si no se sabe)
3. EXPONE (numerado): hechos relevantes cronológicamente
4. ALEGA (numerado): desarrolla CADA defecto con artículos exactos de LTSV, Ley 39/2015, CE, jurisprudencia TS/TC
5. SUPLICA: nulidad/anulación del expediente y devolución del importe
6. OTROSÍ si procede medida cautelar de suspensión
7. PIE: lugar, fecha, firma

Lenguaje jurídico formal. Datos desconocidos → "[COMPLETAR]". Primera persona.`;

  const recursoUserPrompt = `Recurrente: ${personal.nombreRecurrente ?? "[COMPLETAR: Nombre y apellidos]"}
DNI/NIE: ${personal.dniRecurrente ?? "[COMPLETAR: DNI/NIE]"}
Domicilio: ${personal.domicilioRecurrente ?? "[COMPLETAR: Domicilio completo]"}
Fecha de redacción: ${hoy}
Expediente: ${datos.expediente}
Importe sanción: ${datos.importe}
Infracción: ${datos.infraccion}
Fecha infracción: ${datos.fecha}
Provincia/Órgano: ${datos.provincia}
Matrícula: ${datos.matricula}
Velocidad detectada: ${datos.velocidadDetectada}
Límite de la vía: ${datos.limiteVia}

REGLA OBLIGATORIA: si hay velocidad detectada y límite de vía, descríbelos SIEMPRE por separado ("circulaba a X km/h en vía limitada a Y km/h"). NUNCA digas "X km/h por encima del límite" salvo que el documento indique expresamente el exceso.

DEFECTOS DETECTADOS (desarrolla cada uno en profundidad):
${defectos.map((d, i) => `${i + 1}. [${d.gravedad.toUpperCase()}] ${d.titulo}: ${d.descripcion}`).join("\n")}

Redacta el recurso de reposición completo con todos los argumentos jurídicos.`;

  const client = groq();
  const cartaResponse = await withRetry(() => client.chat.completions.create({
    model: MODEL_TEXT,
    max_completion_tokens: MAX_OUTPUT_TOKENS_CARTA,
    reasoning_effort: REASONING_EFFORT_TEXT,
    messages: [
      { role: "system", content: recursoSystemPrompt },
      { role: "user", content: recursoUserPrompt },
    ],
  }));

  return cartaResponse.choices[0]?.message?.content ?? "";
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
      { provincia: analisis.provincia, expediente: analisis.expediente, importe: analisis.importe, infraccion: analisis.infraccion, fecha: analisis.fecha, matricula: analisis.matricula, velocidadDetectada: analisis.velocidadDetectada, limiteVia: analisis.limiteVia },
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
  },
  handler: async (ctx, args): Promise<{ carta: string }> => {
    // Sin registro: la carta se regenera justo antes del pago, sin sesión.
    // DETERMINISTA (03/10/2026): sustitución directa de los [COMPLETAR] en vez
    // de llamar a la IA otra vez, para que el documento final sea siempre igual.
    const { carta: base } = await ctx.runQuery(internal.multasInterno.obtenerCartaBase, {
      expedienteKey: normalizarExpediente(args.expediente),
    });

    let carta = base;
    carta = carta.replace(/\[COMPLETAR:\s*Nombre y apellidos\]/gi, args.nombreRecurrente);
    carta = carta.replace(/\[COMPLETAR:\s*DNI\/NIE\]/gi, args.dniRecurrente);
    carta = carta.replace(/\[COMPLETAR:\s*Domicilio completo\]/gi, args.domicilioRecurrente);
    carta = carta.replace(/\[COMPLETAR:\s*domicilio\]/gi, args.domicilioRecurrente);
    return { carta };
  },
});

// NOTA: obtenerCartaBase vive en convex/multasInterno.ts (los ficheros
// "use node" solo pueden definir actions).
