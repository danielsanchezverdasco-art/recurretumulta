// Auditoría de las 500 fichas pendientes — verifica calidad de datos.
// Uso: node scripts/audit-batch2.mjs
import { readFileSync, existsSync, writeFileSync } from "fs";
import { COCHES_COMPARADOR } from "../src/lib/comparador-coches-data.ts";
import { MOTOS_COMPARADOR } from "../src/lib/comparador-motos-data.ts";
import { PATINETES_COMPARADOR } from "../src/lib/comparador-patinetes-data.ts";
import { tituloFichaCoche, tituloFichaMoto, tituloFichaPatinete } from "../src/lib/seo-titulo-ficha.ts";

const rutas = readFileSync("/tmp/batch2-500.txt", "utf8").split("\n").map(s => s.trim()).filter(Boolean);

const norm = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/\s+/g, " ");

const byId = new Map();
for (const c of COCHES_COMPARADOR) byId.set("/coches/" + c.id, { ...c, _tipo: "coche" });
for (const m of MOTOS_COMPARADOR) byId.set("/motos/" + m.id, { ...m, _tipo: "moto" });
for (const p of PATINETES_COMPARADOR) byId.set("/patinetes/" + p.id, { ...p, _tipo: "patinete" });

const issues = [];
const titles = new Map(); // title -> [rutas]

function addIssue(ruta, campo, detalle, severidad = "error") {
  issues.push({ ruta, campo, detalle, severidad });
}

function checkFicha(ruta, f) {
  const tipo = f._tipo;
  const nombre = `${f.marca} ${f.modelo}`;

  // 1. Precio
  const precio = tipo === "patinete" ? f.precioEur : f.precioDesde;
  if (precio == null) addIssue(ruta, "precio", "SIN PRECIO (null)");
  else if (typeof precio !== "number" || precio <= 0) addIssue(ruta, "precio", `precio inválido: ${precio}`);

  // 2. Título
  let title = "";
  if (tipo === "coche") title = tituloFichaCoche(nombre, f);
  else if (tipo === "moto") title = tituloFichaMoto(nombre, f);
  else title = tituloFichaPatinete(nombre, f);

  if (title.length > 60) addIssue(ruta, "titulo", `>60 car (${title.length}): "${title}"`);
  if (/recurretumulta/i.test(title)) addIssue(ruta, "titulo", "contiene marca del sitio");
  // marca duplicada: el modelo empieza por la marca
  if (norm(f.modelo).startsWith(norm(f.marca))) {
    addIssue(ruta, "marca-duplicada", `"${nombre}" — modelo incluye la marca`);
  }
  // "Fiat 500 Fiat 500" pattern: modelo contiene marca dos veces
  const parts = norm(nombre).split(" ");
  if (new Set(parts).size < parts.length * 0.7 && parts.length > 3) {
    addIssue(ruta, "titulo-repetitivo", `"${nombre}"`);
  }
  if (!titles.has(title)) titles.set(title, []);
  titles.get(title).push(ruta);

  // precio sin formato en strings (pros/contras/veredicto)
  const priceRe = /\b(\d{4,})\s*€/g;
  const allText = [...(f.pros || []), ...(f.contras || []), f.veredicto || ""].join(" ");
  let m;
  while ((m = priceRe.exec(allText))) {
    const num = m[1];
    if (num.length >= 4 && !num.includes(".") && !num.includes(",")) {
      const withSep = Number(num).toLocaleString("es-ES");
      if (num !== withSep.replace(/\./g, "")) {
        addIssue(ruta, "precio-formato", `"${m[0]}" debería ser "${withSep} €"`, "warning");
        break;
      }
    }
  }
  // cilindrada fea con decimal (motos)
  if (tipo === "moto" && f.cilindradaCc && String(f.cilindradaCc).includes(".")) {
    addIssue(ruta, "cilindrada", `${f.cilindradaCc} cc con decimal`, "warning");
  }

  // 3. Datos técnicos
  if (tipo === "coche") {
    if (f.potenciaCv == null && f.autonomiaKm == null) addIssue(ruta, "datos", "sin potencia ni autonomía");
    if (f.largoMm == null || f.anchoMm == null || f.altoMm == null) addIssue(ruta, "datos", "dimensiones incompletas", "warning");
  } else if (tipo === "moto") {
    if (f.potenciaCv == null && f.potenciaKw == null && f.cilindradaCc == null) addIssue(ruta, "datos", "sin potencia ni cilindrada");
  } else {
    if (f.autonomiaKm == null && f.potenciaPicoW == null) addIssue(ruta, "datos", "sin autonomía ni potencia");
  }

  // 4. EuroNCAP
  if (tipo === "coche" || tipo === "moto") {
    if (!f.euroncap) {
      addIssue(ruta, "euroncap", "campo euroncap ausente");
    } else if (f.euroncap.estrellas != null) {
      if (!f.euroncap.ano) addIssue(ruta, "euroncap", "estrellas sin año");
      if (!f.euroncap.url || !/euroncap\.com/.test(f.euroncap.url)) addIssue(ruta, "euroncap", "sin enlace oficial euroncap.com");
    }
  }

  // 5. Mantenimiento
  if (tipo === "coche" || tipo === "moto") {
    if (!f.planMantenimiento) addIssue(ruta, "mantenimiento", "planMantenimiento ausente (obligatorio)");
  } else {
    if (!f.mantenimientoDIY) addIssue(ruta, "mantenimiento", "mantenimientoDIY ausente", "warning");
  }

  // 6. Pros/contras
  if (!f.pros || f.pros.length < 5) addIssue(ruta, "pros", `solo ${f.pros?.length || 0} pros (<5)`);
  if (!f.contras || f.contras.length < 5) addIssue(ruta, "contras", `solo ${f.contras?.length || 0} contras (<5)`);

  // 7. Imágenes
  const imgs = [];
  if (f.imagen) imgs.push(f.imagen);
  if (tipo === "coche") {
    if (f.imagenOficial) imgs.push(f.imagenOficial);
    if (f.imagenInteriorOficial) imgs.push(f.imagenInteriorOficial);
  } else if (tipo === "patinete") {
    if (f.foto) imgs.push(f.foto);
  }
  for (const img of imgs) {
    const p = "public" + img;
    if (!existsSync(p)) addIssue(ruta, "imagen", `no existe: ${img}`);
  }
  // galería 3 fotos
  const gal = f.galeria || [];
  if (gal.length < 3) addIssue(ruta, "galeria", `solo ${gal.length} fotos (<3)`, "warning");

  // 8. Enlace al blog (analisisSlug)
  if (tipo === "coche" && !f.analisisSlug) addIssue(ruta, "blog-link", "sin analisisSlug (enlace al blog)", "warning");

  // 9. Fuentes
  if (!f.fuenteNombre && !f.fuenteUrl) addIssue(ruta, "fuentes", "sin fuente", "warning");

  // 10. esIA / confianza
  if (f.esIA && f.confianza === "baja") addIssue(ruta, "confianza", "IA con confianza baja", "warning");
}

let missing = 0;
for (const ruta of rutas) {
  const f = byId.get(ruta);
  if (!f) { missing++; addIssue(ruta, "existe", "ficha NO encontrada en datos"); continue; }
  checkFicha(ruta, f);
}

// Títulos duplicados
for (const [title, rs] of titles) {
  if (rs.length > 1) {
    for (const r of rs) addIssue(r, "titulo-duplicado", `"${title}" usado en ${rs.length} fichas`);
  }
}

const byField = {};
for (const i of issues) {
  byField[i.campo] = (byField[i.campo] || 0) + 1;
}

console.log(`Fichas auditadas: ${rutas.length - missing}/${rutas.length} (faltan: ${missing})`);
console.log(`Issues totales: ${issues.length}`);
console.log("Por campo:", JSON.stringify(byField, null, 1));

writeFileSync("/tmp/audit-batch2.json", JSON.stringify({ issues, total: rutas.length, missing }, null, 1));
console.log("Reporte: /tmp/audit-batch2.json");
