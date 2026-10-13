"use node";
/// <reference types="node" />

// Convierte la primera página de un PDF escaneado (sin texto extraíble) en una
// imagen JPEG real, para poder enviarla a un modelo de visión. Antes se enviaban
// los bytes crudos del PDF etiquetados como "image/jpeg", lo que el modelo de
// visión rechazaba con "invalid image data" y dejaba el análisis sin datos.
//
// Usamos una fábrica de canvas explícita (en vez de la que trae pdfjs-dist por
// defecto) y apuntamos a las fuentes estándar incluidas en el paquete: sin ellas,
// el texto del documento no se dibuja y la página sale en blanco, lo que hacía
// que la IA no encontrara ningún dato aunque ya no daba error.
type NapiCanvas = { width: number; height: number; getContext: (type: "2d") => unknown; toBuffer: (mime: "image/jpeg", quality?: number) => Buffer };
type CanvasAndContext = { canvas: NapiCanvas | null; context: unknown };

class NapiCanvasFactory {
  private createCanvas: (width: number, height: number) => NapiCanvas;

  constructor(createCanvas: (width: number, height: number) => NapiCanvas) {
    this.createCanvas = createCanvas;
  }

  create(width: number, height: number): CanvasAndContext {
    const canvas = this.createCanvas(width, height);
    const context = canvas.getContext("2d");
    return { canvas, context };
  }

  reset(canvasAndContext: CanvasAndContext, width: number, height: number): void {
    if (!canvasAndContext.canvas) return;
    canvasAndContext.canvas.width = width;
    canvasAndContext.canvas.height = height;
  }

  destroy(canvasAndContext: CanvasAndContext): void {
    canvasAndContext.canvas = null;
    canvasAndContext.context = null;
  }
}

export async function renderPdfFirstPageToJpegBase64(base64Data: string): Promise<string> {
  const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs" as string);
  const { createCanvas } = await import("@napi-rs/canvas");
  const path = await import("node:path");
  const { createRequire } = await import("node:module");
  const require = createRequire(import.meta.url);

  const canvasFactory = new NapiCanvasFactory(createCanvas);
  const standardFontDataUrl = path.join(
    path.dirname(require.resolve("pdfjs-dist/package.json")),
    "standard_fonts/"
  );

  const binaryData = Uint8Array.from(atob(base64Data), (c) => c.charCodeAt(0));
  const pdf = await pdfjs.getDocument({
    data: binaryData,
    useSystemFonts: true,
    isEvalSupported: false,
    standardFontDataUrl,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    canvasFactory: canvasFactory as any,
  }).promise;

  const page = await pdf.getPage(1);
  // Escala suficiente para que el texto sea legible por el modelo de visión.
  const viewport = page.getViewport({ scale: 2.0 });

  const { canvas, context } = canvasFactory.create(
    Math.ceil(viewport.width),
    Math.ceil(viewport.height)
  );
  if (!canvas) throw new Error("No se pudo crear el lienzo para renderizar el PDF");

  await page.render({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    canvasContext: context as any,
    viewport,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    canvasFactory: canvasFactory as any,
  }).promise;

  const jpegBuffer = canvas.toBuffer("image/jpeg", 0.92);
  return jpegBuffer.toString("base64");
}

// 13/10/2026: reduce las fotos grandes (máx. 1280 px de lado) antes de enviarlas
// a la IA. Menos tokens de entrada = menos 429 por el límite por minuto de Groq.
// Si algo falla, devuelve la imagen original.
export async function reducirImagenBase64(base64Data: string, maxLado = 1280): Promise<{ data: string; mime: string } | null> {
  try {
    const { createCanvas, loadImage } = await import("@napi-rs/canvas");
    const img = await loadImage(Buffer.from(base64Data, "base64"));
    const lado = Math.max(img.width, img.height);
    if (lado <= maxLado) return null;
    const k = maxLado / lado;
    const c = createCanvas(Math.round(img.width * k), Math.round(img.height * k));
    const ctx = c.getContext("2d");
    ctx.drawImage(img, 0, 0, c.width, c.height);
    return { data: c.toBuffer("image/jpeg", 88).toString("base64"), mime: "image/jpeg" };
  } catch {
    return null;
  }
}
