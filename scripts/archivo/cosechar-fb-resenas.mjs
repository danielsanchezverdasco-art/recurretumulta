#!/usr/bin/env node
/* ── Cosechador de comentarios de Facebook → reseñas (12/10/2026) ──────────
   Lee los comentarios de NUESTRAS publicaciones de fichas en Facebook y los
   mete en la cola de moderación de Convex (estado "pendiente").
   NUNCA auto-publica: todo pasa por /moderar-resenas.

   Uso:
     MODERACION_CLAVE='...' CONVEX_DEPLOY_KEY='...' node scripts/cosechar-fb-resenas.mjs

   Registro de posts: scripts/fb-ficha-posts.json
   Watermark: hidden_files/fb-cosecha-watermark.json (NO en /tmp: se borra con reinicios)
   Log: hidden_files/fb-cosecha-YYYY-MM-DD.log

   Reglas de la cosecha (límites de la cuenta y del skill facebook-cli):
   - Solo publicaciones PROPIAS (las del registro). Nada de barridos masivos.
   - Se saltan los comentarios de la propia cuenta y los <15 caracteres.
   - Las FOTOS de los comentarios NO las expone el CLI (sin campo attachments):
     van por importación manual en /moderar-resenas. */

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync, appendFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const REGISTRY = join(ROOT, "scripts", "fb-ficha-posts.json");
const WATERMARK_FILE = join(ROOT, "hidden_files", "fb-cosecha-watermark.json");
const LOG_FILE = join(
  ROOT,
  "hidden_files",
  `fb-cosecha-${new Date().toISOString().slice(0, 10)}.log`,
);

const MODERACION_CLAVE = process.env.MODERACION_CLAVE;
const CONVEX_DEPLOY_KEY = process.env.CONVEX_DEPLOY_KEY;

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  process.stdout.write(line);
  try {
    appendFileSync(LOG_FILE, line);
  } catch {
    /* log best-effort */
  }
}

function runJson(cmd, args) {
  // Sin pipes: el exit code es el del comando (lección 03/10/2026).
  const out = execFileSync(cmd, args, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    maxBuffer: 32 * 1024 * 1024,
  });
  return JSON.parse(out);
}

const SPAM = ["viagra", "cialis", "casino", "porno", "http://", "https://", "www."];
function esSpam(t) {
  const s = t.toLowerCase();
  return SPAM.some((w) => s.includes(w));
}

function main() {
  const errors = [];
  if (!MODERACION_CLAVE) {
    console.error("Falta MODERACION_CLAVE en el entorno.");
    process.exit(2);
  }
  if (!CONVEX_DEPLOY_KEY) {
    console.error("Falta CONVEX_DEPLOY_KEY en el entorno.");
    process.exit(2);
  }
  if (!existsSync(REGISTRY)) {
    console.error(`No existe el registro ${REGISTRY}`);
    process.exit(2);
  }
  mkdirSync(join(ROOT, "hidden_files"), { recursive: true });

  const posts = JSON.parse(readFileSync(REGISTRY, "utf8"));
  let watermark = {};
  try {
    watermark = JSON.parse(readFileSync(WATERMARK_FILE, "utf8"));
  } catch {
    watermark = {};
  }

  // Nombre de la propia cuenta: sus comentarios se saltan.
  let miNombre = "";
  try {
    const me = runJson("facebook-cli", ["me"]);
    miNombre = String(me.name ?? me.nombre ?? "").trim().toLowerCase();
    log(`Cuenta: ${miNombre || "(desconocida)"}`);
  } catch (e) {
    log(`AVISO: no se pudo leer 'facebook-cli me': ${String(e).slice(0, 120)}`);
  }

  let totalNuevos = 0;
  let totalDuplicados = 0;

  for (const entry of posts) {
    const { post, tipo, slug, nombreVehiculo } = entry;
    if (!post || !tipo || !slug) {
      log(`Registro inválido (falta post/tipo/slug): ${JSON.stringify(entry).slice(0, 120)}`);
      continue;
    }
    const wmKey = String(post);
    const lastSeen = watermark[wmKey] ?? 0;
    log(`Post ${wmKey} (${tipo}/${slug}): watermark=${lastSeen}`);

    // Resolver post-id: se acepta id directo o permalink (se resuelve a id).
    let postId = String(post).trim();
    if (/^https?:\/\//i.test(postId)) {
      try {
        const read = runJson("facebook-cli", ["post", "read", "--url", postId]);
        postId = String(read.id ?? read.post_id ?? "");
        if (!postId) throw new Error("sin id");
        log(`  URL resuelta a post-id ${postId.slice(0, 24)}…`);
      } catch (e) {
        log(`  ERROR resolviendo URL: ${String(e).slice(0, 150)}`);
        errors.push(wmKey);
        continue;
      }
    }

    // Paginar comentarios (máx 20/página según el skill).
    const nuevos = [];
    let after = undefined;
    let maxSeen = lastSeen;
    try {
      for (;;) {
        const args = ["post", "comments", "read", "--post-id", postId, "--limit", "20"];
        if (after) args.push("--after", after);
        const resp = runJson("facebook-cli", args);
        const data = Array.isArray(resp.data) ? resp.data : [];
        for (const c of data) {
          const ts = Number(c.created_time ?? 0);
          if (ts > maxSeen) maxSeen = ts;
          if (ts <= lastSeen) continue;
          const autor = String(c.author_name ?? "").trim();
          const texto = String(c.text ?? "").trim();
          if (!autor || !texto) continue;
          if (miNombre && autor.toLowerCase() === miNombre) continue; // propio
          if (texto.length < 15 || esSpam(texto)) continue;
          nuevos.push({
            tipo,
            slug,
            nombreVehiculo: nombreVehiculo ?? slug,
            autor,
            texto,
            fbCommentId: String(c.id ?? ""),
            fbCommentUrl: c.comment_url ?? undefined,
          });
        }
        after = resp?.paging?.cursors?.after;
        if (!after) break;
      }
    } catch (e) {
      log(`  ERROR leyendo comentarios: ${String(e).slice(0, 200)}`);
      errors.push(wmKey);
      continue;
    }

    log(`  ${nuevos.length} comentario(s) nuevo(s)`);
    if (nuevos.length > 0) {
      try {
        const out = execFileSync(
          "npx",
          [
            "convex",
            "run",
            "resenasVehiculos:importarFacebook",
            JSON.stringify({ clave: MODERACION_CLAVE, items: nuevos }),
          ],
          { cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], maxBuffer: 8 * 1024 * 1024 },
        );
        let res = {};
        try {
          res = JSON.parse(out);
        } catch {
          res = {};
        }
        const val = res && typeof res === "object" && "value" in res ? res.value : res;
        totalNuevos += Number(val?.nuevos ?? 0);
        totalDuplicados += Number(val?.duplicados ?? 0);
        log(`  Convex: ${val?.nuevos ?? "?"} nuevos, ${val?.duplicados ?? "?"} duplicados`);
      } catch (e) {
        log(`  ERROR enviando a Convex: ${String(e).slice(0, 250)}`);
        errors.push(wmKey);
        continue;
      }
    }
    watermark[wmKey] = maxSeen;
    try {
      writeFileSync(WATERMARK_FILE, JSON.stringify(watermark, null, 2));
    } catch {
      /* best-effort */
    }
  }

  log(`FIN: ${totalNuevos} nuevos, ${totalDuplicados} duplicados, ${errors.length} post(s) con error`);
  if (errors.length > 0) process.exit(1);
}

main();
