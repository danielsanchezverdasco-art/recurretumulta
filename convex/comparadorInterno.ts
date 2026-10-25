// ── comparadorInterno: queries/mutations internas (isolate, SIN "use node") ──
// Las llama la action de comparador.ts vía ctx.runQuery/runMutation.

import { v } from "convex/values";
import { internalMutation, internalQuery } from "./_generated/server";
import { BASE_INDEX, normalizar } from "./comparadorDatos";
import type { FichaIA } from "./comparadorDatos";

// ── Operaciones internas de caché ─────────────────────────────────────────────
export const obtenerCache = internalQuery({
  args: { clave: v.string() },
  handler: async (ctx, { clave }) => {
    return await ctx.db.query("comparadorCache").withIndex("by_clave", (q) => q.eq("clave", clave)).first();
  },
});

export const tocarCache = internalMutation({
  args: { id: v.id("comparadorCache") },
  handler: async (ctx, { id }) => {
    const doc = await ctx.db.get(id);
    if (doc) await ctx.db.patch(id, { hits: doc.hits + 1 });
  },
});

export const guardarCache = internalMutation({
  args: {
    clave: v.string(),
    marca: v.string(),
    modelo: v.string(),
    ficha: v.string(),
    confianza: v.union(v.literal("alta"), v.literal("media"), v.literal("baja")),
    camposEstimados: v.array(v.string()),
    fuenteUrls: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    const hoy = new Date().toISOString();
    return await ctx.db.insert("comparadorCache", { ...args, createdAt: hoy, hits: 0 });
  },
});

// ── Borrador de artículo (published:false, revisión humana pendiente) ─────────
function slugify(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function rivalesDe(f: FichaIA): typeof BASE_INDEX {
  const porCat = BASE_INDEX.filter(
    (b) => b.categoria === f.categoria && normalizar(b.marca) !== normalizar(f.marca)
  );
  const porTipo = BASE_INDEX.filter(
    (b) => b.tipo === f.tipo && !porCat.includes(b) && normalizar(b.marca) !== normalizar(f.marca)
  );
  return [...porCat, ...porTipo].slice(0, 3);
}

function fmtPrecioBorrador(v: number | null): string {
  return v == null ? "no publicado oficialmente" : `${v.toLocaleString("es-ES")} €`;
}

function construirContenido(f: FichaIA): string {
  const rivales = rivalesDe(f);
  const lineas: string[] = [];
  lineas.push(`<!-- HERO PENDIENTE: generar y verificar la foto de portada antes de publicar -->`);
  lineas.push(``);
  lineas.push(`> **Borrador generado por IA** a partir de la investigación web del comparador. Revisión humana pendiente antes de publicar: verifica precios, datos técnicos y enlaces.`);
  lineas.push(``);
  lineas.push(`El **${f.marca} ${f.modelo}**${f.version ? ` (${f.version})` : ""} llega al comparador de RecurreTuMulta.online. Aquí tienes su ficha técnica completa${f.confianza === "baja" ? " (con los datos disponibles públicamente; actualizaremos la ficha cuando haya homologación oficial)" : ""}.`);
  lineas.push(``);
  lineas.push(`## Ficha técnica`);
  lineas.push(``);
  lineas.push(`| Dato | Valor |`);
  lineas.push(`|---|---|`);
  const fila = (n: string, v: string | null) => lineas.push(`| ${n} | ${v ?? "—"} |`);
  fila("Precio desde", f.precioDesde == null ? null : fmtPrecioBorrador(f.precioDesde));
  fila("Tipo", f.tipo);
  fila("Categoría", f.categoria);
  fila("Potencia", f.potenciaCv == null ? null : `${f.potenciaCv} CV`);
  fila("Par máximo", f.parNm == null ? null : `${f.parNm} Nm`);
  fila("Autonomía (WLTP)", f.autonomiaKm == null ? null : `${f.autonomiaKm} km`);
  fila("Batería", f.bateriaKwh == null ? null : `${f.bateriaKwh} kWh`);
  fila("Carga rápida (DC)", f.cargaRapidaKw == null ? null : `${f.cargaRapidaKw} kW`);
  fila("0-100 km/h", f.ceroCien == null ? null : `${f.ceroCien} s`);
  fila("Velocidad máxima", f.velocidadMax == null ? null : `${f.velocidadMax} km/h`);
  fila("Maletero", f.maleteroL == null ? null : `${f.maleteroL} L`);
  fila("Plazas", f.plazas == null ? null : String(f.plazas));
  fila(
    "Dimensiones (L×An×Al)",
    f.largoMm == null || f.anchoMm == null || f.altoMm == null
      ? null
      : `${f.largoMm} × ${f.anchoMm} × ${f.altoMm} mm`
  );
  fila("Peso", f.pesoKg == null ? null : `${f.pesoKg.toLocaleString("es-ES")} kg`);
  fila("Consumo (WLTP)", f.consumo == null ? null : `${f.consumo} ${f.consumoUnidad ?? ""}`.trim());
  fila("Tracción", f.traccion);
  fila("Emisiones CO₂", f.emisionesCo2 == null ? null : `${f.emisionesCo2} g/km`);
  fila("Etiqueta DGT", f.etiquetaDgt);
  lineas.push(``);
  if (f.camposEstimados.length > 0) {
    lineas.push(`*Los datos marcados con ≈ son estimaciones: esta herramienta es gratuita y los muestra como orientativos hasta que haya cifra oficial.*`);
    lineas.push(``);
  }
  lineas.push(`## Precios y versiones`);
  lineas.push(``);
  lineas.push(
    `El ${f.marca} ${f.modelo} parte de **${fmtPrecioBorrador(f.precioDesde)}**${f.version ? ` en su versión ${f.version}` : ""}. Actualizaremos este apartado con la gama completa y los precios por acabado cuando la marca los publique oficialmente.`
  );
  lineas.push(``);
  lineas.push(`## Curiosidades`);
  lineas.push(``);
  for (const c of f.curiosidades) lineas.push(`- ${c}`);
  if (f.curiosidades.length === 0) lineas.push(`- *Pendiente de completar en la revisión.*`);
  lineas.push(``);
  lineas.push(`## Rivales a comparar`);
  lineas.push(``);
  if (rivales.length > 0) {
    lineas.push(`Sus rivales más directos en nuestra base son:`);
    lineas.push(``);
    for (const r of rivales) {
      lineas.push(`- **${r.marca} ${r.modelo}** (${r.tipo}): [compararlos cara a cara](/comparador-coches)`);
    }
    lineas.push(``);
  } else {
    lineas.push(`Aún estamos incorporando sus rivales directos al comparador.`);
    lineas.push(``);
  }
  lineas.push(`## Puntos fuertes y débiles`);
  lineas.push(``);
  lineas.push(`### Lo mejor`);
  lineas.push(``);
  for (const p of f.pros) lineas.push(`- ✅ ${p}`);
  lineas.push(``);
  lineas.push(`### A mejorar`);
  lineas.push(``);
  for (const c of f.contras) lineas.push(`- ❌ ${c}`);
  lineas.push(``);
  if (f.videoYtId) {
    lineas.push(`## Vídeo`);
    lineas.push(``);
    lineas.push(`Puedes verlo en este vídeo${f.videoYtCanal ? ` del canal ${f.videoYtCanal}` : ""}: https://www.youtube.com/watch?v=${f.videoYtId}`);
    lineas.push(``);
  }
  lineas.push(`## Preguntas frecuentes`);
  lineas.push(``);
  const faqs: Array<[string, string]> = [
    [`¿Cuánto cuesta el ${f.marca} ${f.modelo}?`, `Parte de ${fmtPrecioBorrador(f.precioDesde)}. El precio final depende de la versión y los descuentos de la marca.`],
    [`¿Qué autonomía tiene el ${f.marca} ${f.modelo}?`, f.autonomiaKm != null ? `Homologa ${f.autonomiaKm} km en ciclo WLTP. La autonomía real depende de la velocidad, la temperatura y el uso del climatizador.` : `Aún no hay cifra oficial de autonomía WLTP publicada.`],
    [`¿Qué etiqueta DGT lleva el ${f.marca} ${f.modelo}?`, f.etiquetaDgt ? `Lleva la etiqueta ${f.etiquetaDgt} de la DGT.` : `La DGT aún no ha publicado su etiqueta correspondiente.`],
    [`¿El ${f.marca} ${f.modelo} es buena compra?`, `Depende de tu uso: compara su ficha con sus rivales en nuestro [comparador](/comparador-coches) y fíjate en autonomía, maletero y precio.`],
    [`¿Dónde puedo comparar el ${f.marca} ${f.modelo} con otros coches?`, `En nuestro [comparador de coches](/comparador-coches), lado a lado con fotos, vídeos y puntos fuertes y débiles.`],
    [`¿Tengo una multa y no sé si recurrirla?`, `Antes de pagar o recurrir, [analiza tu multa gratis con nuestra IA](/) y descubre si tiene defectos recurribles.`],
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
  lineas.push(`- [Comparador de coches](/comparador-coches)`);
  lineas.push(`- [Novedades Motor](/blog)`);
  return lineas.join("\n");
}

export const crearBorrador = internalMutation({
  args: { ficha: v.string(), marca: v.string(), modelo: v.string() },
  handler: async (ctx, { ficha, marca, modelo }) => {
    const f = JSON.parse(ficha) as FichaIA;
    const hoy = new Date().toISOString().slice(0, 10);
    let slug = `ia-${slugify(marca)}-${slugify(modelo)}`;
    const existe = await ctx.db.query("blogPosts").withIndex("by_slug", (q) => q.eq("slug", slug)).first();
    if (existe) slug = `${slug}-${hoy.replace(/-/g, "")}`;
    const title = `${marca} ${modelo}: precio, ficha técnica, autonomía y opiniones`;
    const keywords = [marca, modelo, `${marca} ${modelo} precio`, `${marca} ${modelo} ficha tecnica`, "comparador coches"];
    const id = await ctx.db.insert("blogPosts", {
      slug,
      title,
      excerpt: `Ficha completa del ${marca} ${modelo}: precio, autonomía, batería, maletero, pros y contras. Borrador generado por IA, pendiente de revisión.`,
      category: "Novedades Motor",
      date: hoy,
      readTime: 8,
      keywords,
      content: construirContenido(f),
      published: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      origenIA: "comparador-v2",
      revisionPendiente: true,
    });
    return { slug, id: id as string };
  },
});
