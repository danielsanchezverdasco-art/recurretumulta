// Extrae la imagen hero (la primera <img>) del contenido HTML de un post.
// Convención de redacción del blog: <img src=URL alt=descripción> sin comillas,
// aunque también se aceptan comillas simples/dobles.
// Devuelve null si el post no tiene ninguna imagen.
export function postHeroImage(content: string): { src: string; alt: string } | null {
  const heroTag = content.match(/<img[^>]*>/i);
  if (!heroTag) return null;
  // Algunos contenidos guardan las comillas del alt escapadas (alt=\"...\"):
  // se normalizan para que el alt no salga con \" literales (informe Niky 20/10/2026).
  const tag = heroTag[0].replace(/\\"/g, '"');
  const srcM = tag.match(/src=("[^"]*"|'[^']*'|[^\s>]+)/i);
  if (!srcM) return null;
  const src = srcM[1].replace(/^["']|["']$/g, "");
  if (!src) return null;
  const altM = tag.match(/alt=("[^"]*"|'[^']*'|[^>]+)/i);
  const alt = altM
    ? altM[1].replace(/^["']|["']$/g, "").replace(/\s*\/?$/, "").trim()
    : "";
  return { src, alt };
}

// Devuelve la versión thumbnail (-card.webp, 640px) de una imagen para usar
// en tarjetas de blog/comparador. Si no existe el thumbnail, el navegador
// cargará la original (el 404 se evita porque el servidor sirve la original
// solo si el thumbnail no existe — ver nota abajo).
// (07/10/2026, rendimiento: las tarjetas cargaban heroes de 800KB+)
export function cardThumb(src: string): string {
  if (!src || !src.endsWith(".webp") || src.includes("-card.webp")) return src;
  // Solo para imágenes locales
  if (!src.startsWith("/media/")) return src;
  return src.replace(/\.webp$/, "-card.webp");
}
