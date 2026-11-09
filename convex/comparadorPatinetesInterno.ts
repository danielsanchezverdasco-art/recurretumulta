// ── comparadorPatinetesInterno: mutations internas (isolate, SIN "use node") ──
// Las llama la action de comparadorPatinetes.ts vía ctx.runMutation.
// La caché se reutiliza de comparadorInterno (tabla comparadorCache, genérica).

import { v } from "convex/values";
import { internalMutation } from "./_generated/server";
import { BASE_INDEX_PATINETES, normalizar } from "./comparadorPatinetesDatos";
import type { FichaPatineteIA } from "./comparadorPatinetesDatos";

// ── Borrador de artículo (published:false, revisión humana pendiente) ─────────
function slugify(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function fmtPrecio(v: number | null): string {
  return v == null ? "no publicado oficialmente" : `${v.toLocaleString("es-ES")} €`;
}
function fmtW(v: number | null): string | null {
  return v == null ? null : `${v.toLocaleString("es-ES")} W`;
}
function fmtKm(v: number | null): string | null {
  return v == null ? null : `${v} km`;
}
function fmtKg(v: number | null): string | null {
  return v == null ? null : `${v.toLocaleString("es-ES")} kg`;
}

function construirContenido(f: FichaPatineteIA): string {
  const rivales = BASE_INDEX_PATINETES.filter(
    (b) => normalizar(b.marca) !== normalizar(f.marca)
  ).slice(0, 3);
  const lineas: string[] = [];
  lineas.push(`<!-- HERO PENDIENTE: generar y verificar la foto de portada antes de publicar -->`);
  lineas.push(``);
  lineas.push(`> **Borrador generado por IA** a partir de la investigación web del comparador de patinetes. Revisión humana pendiente antes de publicar: verifica precio, datos técnicos y enlaces.`);
  lineas.push(``);
  lineas.push(`El **${f.marca} ${f.modelo}**${f.version ? ` (${f.version})` : ""} llega al comparador de patinetes eléctricos de RecurreTuMulta.online. Aquí tienes su ficha técnica completa${f.confianza === "baja" ? " (con los datos disponibles públicamente; actualizaremos la ficha cuando haya información oficial)" : ""}.`);
  lineas.push(``);
  lineas.push(`## Ficha técnica`);
  lineas.push(``);
  lineas.push(`| Dato | Valor |`);
  lineas.push(`|---|---|`);
  const fila = (n: string, v: string | null) => lineas.push(`| ${n} | ${v ?? "—"} |`);
  fila("Precio oficial", fmtPrecio(f.precioEur));
  fila("Potencia nominal", fmtW(f.potenciaNominalW));
  fila("Potencia pico", fmtW(f.potenciaPicoW));
  fila("Autonomía declarada", fmtKm(f.autonomiaKm));
  fila("Autonomía real estimada", fmtKm(f.autonomiaRealKm));
  fila("Velocidad máxima", f.velocidadMaxKmh == null ? null : `${f.velocidadMaxKmh} km/h`);
  fila("Peso", fmtKg(f.pesoKg));
  fila("Carga máxima", fmtKg(f.cargaMaxKg));
  fila("Tiempo de carga", f.tiempoCargaH == null ? null : `${f.tiempoCargaH} h`);
  fila("Batería", f.bateriaWh == null ? null : `${f.bateriaWh.toLocaleString("es-ES")} Wh`);
  fila("Frenos", f.frenos);
  fila("Neumáticos", f.neumaticos);
  fila(
    "Certificado DGT",
    f.certificadoDgt == null ? null : f.certificadoDgt ? "Sí (verificado)" : "No consta"
  );
  lineas.push(``);
  if (f.camposEstimados.length > 0) {
    lineas.push(`*Los datos marcados con ≈ son estimaciones: esta herramienta es gratuita y los muestra como orientativos hasta que haya cifra oficial.*`);
    lineas.push(``);
  }
  lineas.push(`## ¿Es legal en España?`);
  lineas.push(``);
  lineas.push(
    f.certificadoDgt
      ? `El ${f.marca} ${f.modelo} cuenta con certificado de circulación DGT: puede registrarse en el Registro de Vehículos Personales Ligeros, llevar su etiqueta identificativa y asegurarse. Recuerda: desde 2026 el seguro de responsabilidad civil es obligatorio y la edad mínima es de 15 años.`
      : `No hemos podido verificar que el ${f.marca} ${f.modelo} tenga certificado de circulación DGT. Sin certificado no puede registrarse ni circular legalmente: compruébalo en la web del fabricante antes de comprarlo. Tienes el detalle en nuestra [guía de patinetes eléctricos](/guias/patinetes-electricos).`
  );
  lineas.push(``);
  lineas.push(`## Puntos fuertes y débiles`);
  lineas.push(``);
  lineas.push(`### Lo mejor`);
  lineas.push(``);
  for (const p of f.pros) lineas.push(`- ✅ ${p}`);
  if (f.pros.length === 0) lineas.push(`- *Pendiente de completar en la revisión.*`);
  lineas.push(``);
  lineas.push(`### A mejorar`);
  lineas.push(``);
  for (const c of f.contras) lineas.push(`- ❌ ${c}`);
  if (f.contras.length === 0) lineas.push(`- *Pendiente de completar en la revisión.*`);
  lineas.push(``);
  if (rivales.length > 0) {
    lineas.push(`## Rivales a comparar`);
    lineas.push(``);
    lineas.push(`Sus rivales más directos en nuestra base son:`);
    lineas.push(``);
    for (const r of rivales) {
      lineas.push(`- **${r.marca} ${r.modelo}**: [compararlos cara a cara](/comparador-patinetes)`);
    }
    lineas.push(``);
  }
  if (f.videoYtId) {
    lineas.push(`## Vídeo`);
    lineas.push(``);
    lineas.push(`Puedes verlo en este vídeo${f.videoYtCanal ? ` del canal ${f.videoYtCanal}` : ""}: https://www.youtube.com/watch?v=${f.videoYtId}`);
    lineas.push(``);
  }
  lineas.push(`## Preguntas frecuentes`);
  lineas.push(``);
  const faqs: Array<[string, string]> = [
    [`¿Cuánto cuesta el ${f.marca} ${f.modelo}?`, `Su precio oficial es de ${fmtPrecio(f.precioEur)}.`],
    [`¿Qué autonomía tiene el ${f.marca} ${f.modelo}?`, f.autonomiaKm != null ? `Declara ${f.autonomiaKm} km de autonomía; en uso real espera algo menos según tu peso, el terreno y la velocidad.` : `Aún no hay cifra oficial de autonomía publicada.`],
    [`¿El ${f.marca} ${f.modelo} es legal en España?`, f.certificadoDgt ? `Sí: tiene certificado de circulación DGT y puede registrarse y asegurarse para circular legalmente.` : `No hemos verificado su certificado DGT: sin él no puede circular legalmente en España.`],
    [`¿Dónde puedo comparar el ${f.marca} ${f.modelo} con otros patinetes?`, `En nuestro [comparador de patinetes](/comparador-patinetes), lado a lado con fotos, datos técnicos y puntos fuertes y débiles.`],
    [`¿Me han multado con el patinete, puedo recurrir?`, `Antes de pagar o recurrir, [analiza tu multa gratis con nuestra IA](/) y descubre si tiene defectos recurribles. También tienes la [guía de patinetes eléctricos](/guias/patinetes-electricos).`],
  ];
  for (const [q, a] of faqs) {
    lineas.push(`### ${q}`);
    lineas.push(``);
    lineas.push(a);
    lineas.push(``);
  }
  lineas.push(`## Fuentes`);
  lineas.push(``);
  if (f.fuenteUrl) lineas.push(`- [${f.fuenteNombre ?? "Fuente principal"}](${f.fuenteUrl})`);
  lineas.push(`- [Comparador de patinetes](/comparador-patinetes)`);
  lineas.push(`- [Guía de patinetes eléctricos](/guias/patinetes-electricos)`);
  return lineas.join("\n");
}

export const crearBorradorPatinete = internalMutation({
  args: { ficha: v.string(), marca: v.string(), modelo: v.string() },
  handler: async (ctx, { ficha, marca, modelo }) => {
    const f = JSON.parse(ficha) as FichaPatineteIA;
    const hoy = new Date().toISOString().slice(0, 10);
    let slug = `ia-patinete-${slugify(marca)}-${slugify(modelo)}`;
    const existe = await ctx.db.query("blogPosts").withIndex("by_slug", (q) => q.eq("slug", slug)).first();
    if (existe) slug = `${slug}-${hoy.replace(/-/g, "")}`;
    const title = `${marca} ${modelo}: precio, autonomía y ficha técnica del patinete eléctrico`;
    const keywords = [marca, modelo, `${marca} ${modelo} precio`, `${marca} ${modelo} patinete electrico`, "comparador patinetes electricos"];
    const id = await ctx.db.insert("blogPosts", {
      slug,
      title,
      excerpt: `Ficha completa del patinete eléctrico ${marca} ${modelo}: precio, autonomía, peso, frenos, certificado DGT, pros y contras. Borrador generado por IA, pendiente de revisión.`,
      category: "Novedades Motor",
      date: hoy,
      readTime: 6,
      keywords,
      content: construirContenido(f),
      published: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      origenIA: "comparador-patinetes-v2",
      revisionPendiente: true,
    });
    return { slug, id: id as string };
  },
});
