// Logo de RecurreTuMulta.online usado como marca de agua/cabecera en los PDFs generados.
export const PDF_LOGO_URL = "/media/file_JCUW0M5ZDov5VKrmqbwPmQSz.png";

let cachedLogoDataUrl: string | null = null;

/**
 * Descarga el logo y lo convierte a un data URL base64 (PNG), listo para
 * `doc.addImage(...)` en jsPDF. El resultado se cachea en memoria para no
 * volver a descargarlo cada vez que el usuario genera un PDF.
 */
export async function getLogoDataUrl(): Promise<string | null> {
  if (cachedLogoDataUrl) return cachedLogoDataUrl;
  try {
    const res = await fetch(PDF_LOGO_URL);
    if (!res.ok) return null;
    const blob = await res.blob();
    const dataUrl = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(blob);
    });
    cachedLogoDataUrl = dataUrl;
    return dataUrl;
  } catch {
    return null;
  }
}
