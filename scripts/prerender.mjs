// Prerender build-time para Cloudflare Pages.
// Uso: 1) pnpm build (con VITE_CONVEX_URL del backend nuevo)
//      2) node scripts/prerender.mjs
// Genera dist/<ruta>/index.html con el HTML renderizado de cada página pública
// y dist/_redirects con fallback SPA para las rutas de cliente (/perfil, /admin/*).
import { chromium } from "playwright";
import { spawn, execSync } from "node:child_process";
import { mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
// OUT_DIR permite escribir el HTML en un outDir distinto (p. ej. dist-new).
const DIST = join(ROOT, (process.env.PREVIEW_DIR || "").trim() || "dist");
const PORT = Number(process.env.PRERENDER_PORT || 4317);
// 24/10/2026: carpeta de media de respaldo para el prerender (ver page.route de /media/).
const MEDIA_DIR = (process.env.PRERENDER_MEDIA_DIR || "/workspace/codigo-original/limpio/public/media").trim();
const EXPANDIR_RUTAS = new Set((process.env.PRERENDER_EXPANDIR ?? "/fichas-tecnicas").split(",").filter(Boolean));

// ÚNICA FUENTE DE VERDAD DE RUTAS: scripts/routes.json (diseño 11/10/2026).
// prerender-resume.mjs y gen-sitemap.mjs leen el mismo fichero: las listas ya no
// se duplican a mano en cada script (antes divergían: /buscador-coches faltaba en 2 de 4).
const ROUTES_CFG = JSON.parse(
  readFileSync(join(ROOT, "scripts", "routes.json"), "utf8")
);
const readSlugsFile = (f) =>
  readFileSync(join(ROOT, f), "utf8")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
const ROUTES = [
  ...new Set([
    ...ROUTES_CFG.staticRoutes,
    ...ROUTES_CFG.provinceSlugs.map((p) => `/multas/${p}`),
    ...ROUTES_CFG.provinceSlugs.map((p) => `/provincias/${p}`),
    ...ROUTES_CFG.communitySlugs.map((c) => `/comunidades/${c}`),
    ...ROUTES_CFG.slugFiles.flatMap((sf) =>
      readSlugsFile(sf.file).map((s) => `${sf.prefix}${s}`)
    ),
  ]),
];

// Filtro opcional para reintentos: PRERENDER_ONLY="/a,/b" prerenderiza solo esas rutas.
// Para listas largas (límite de la línea de comandos), PRERENDER_ONLY_FILE
// apunta a un fichero con rutas separadas por comas o saltos de línea.
const ONLY_FROM_FILE = (process.env.PRERENDER_ONLY_FILE || "").trim();
const ONLY = (
  ONLY_FROM_FILE ? readFileSync(ONLY_FROM_FILE, "utf8").split(/[,\n]/) : (process.env.PRERENDER_ONLY || "").split(",")
)
  .map((s) => s.trim())
  .filter(Boolean);
const ROUTES_FINAL = ONLY.length > 0 ? ROUTES.filter((r) => ONLY.includes(r)) : ROUTES;

// R9 (auditoría 11/10/2026): avisar de las rutas pedidas que no existen en
// scripts/routes.json (typo o ruta nueva no registrada). Antes se ignoraban
// en silencio y el prerender devolvía "OK" sin haber hecho nada.
if (ONLY.length > 0) {
  const ignored = ONLY.filter((r) => !ROUTES.includes(r));
  if (ignored.length > 0) {
    console.warn(
      `  ⚠ ${ignored.length} ruta(s) ignorada(s): no están en scripts/routes.json: ${ignored.join(", ")}`
    );
  }
}

// Mata previews zombis de ESTE proyecto que ocupen el puerto (p. ej. de un
// prerender anterior cuyo startPreview() murió por timeout). NUNCA mata a
// ciegas: solo procesos cuya línea de comandos contenga la ruta de ESTE repo
// (el proyecto viejo migracion-clon también usa vite preview en 4317).
function killStalePreviews(port) {
  try {
    const out = execSync("ps -eo pid,args 2>/dev/null", { encoding: "utf8" });
    for (const line of out.split("\n")) {
      const m = line.trim().match(/^(\d+)\s+(.*)$/);
      if (!m) continue;
      const pid = Number(m[1]);
      const args = m[2];
      if (pid === process.pid) continue;
      if (
        args.includes("node_modules/.bin/vite") &&
        args.includes("preview") &&
        args.includes(`--port ${port}`) &&
        args.includes(ROOT)
      ) {
        try {
          process.kill(pid, "SIGKILL");
        } catch {}
      }
    }
  } catch {}
  // Pequeña pausa para que el SO libere el puerto.
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 1500);
}

function startPreview() {
  return new Promise((resolve, reject) => {
    killStalePreviews(PORT);
    // PREVIEW_DIR permite servir un outDir distinto de dist/ (p. ej. dist-new
    // para prerenderizar rutas sueltas de un build paralelo sin tocar dist/).
    const previewDir = (process.env.PREVIEW_DIR || "").trim();
    const args = ["preview", "--port", String(PORT), "--strictPort"];
    if (previewDir) args.push("--outDir", previewDir);
    const proc = spawn(join(ROOT, "node_modules", ".bin", "vite"), args, {
      cwd: ROOT,
      stdio: ["ignore", "pipe", "pipe"],
    });
    let settled = false;
    let killedByTimeout = false;
    const done = (fn, val) => {
      if (!settled) {
        settled = true;
        clearTimeout(timer);
        fn(val);
      }
    };
    const timer = setTimeout(() => {
      killedByTimeout = true;
      proc.kill("SIGKILL");
      // Esperar a que el proceso muera de verdad antes de rechazar: si no,
      // el puerto queda ocupado por un zombi y el siguiente intento (o lote)
      // falla en cascada con otro "preview timeout" (incidente 11-12/10/2026).
      const iv = setInterval(() => {
        if (proc.exitCode !== null || proc.signalCode !== null) {
          clearInterval(iv);
          done(reject, new Error("preview timeout"));
        }
      }, 200);
      setTimeout(() => {
        clearInterval(iv);
        done(reject, new Error("preview timeout"));
      }, 5000);
    }, 45000);
    proc.stdout.on("data", (d) => {
      if (String(d).includes("Local:")) {
        done(resolve, proc);
      }
    });
    proc.stderr.on("data", () => {});
    proc.on("error", (e) => done(reject, e));
    proc.on("exit", (code) => {
      // vite con --strictPort sale con código != 0 si el puerto está ocupado.
      // Sin este handler el script esperaba 45s para nada.
      if (!killedByTimeout && code !== 0 && code !== null) {
        done(
          reject,
          new Error(`vite preview exited with code ${code} (port ${PORT} busy or bad outDir?)`)
        );
      }
    });
  });
}

function outPath(route) {
  const clean = route === "/" ? "index.html" : join(route.slice(1), "index.html");
  return join(DIST, clean);
}

async function main() {
  if (!existsSync(join(DIST, "index.html"))) {
    throw new Error("dist/ no existe: ejecuta 'pnpm build' antes del prerender");
  }
  console.log(`Prerender de ${ROUTES_FINAL.length} rutas…`);

  // PRERENDER_EXTERNAL=1: usar un servidor estático ya arrancado en PRERENDER_PORT
  // (p. ej. `npm run serve:dist`), mucho más rápido que vite preview.
  const preview = process.env.PRERENDER_EXTERNAL ? null : await startPreview();
  // Usar el Chromium completo (el headless-shell no se pudo descargar en este entorno)
  const browser = await chromium.launch({
    executablePath: process.env.CHROME_PATH || undefined,
    // El prerender solo navega a localhost: el proxy de egress a veces cuelga o
    // devuelve respuestas que Chromium rechaza (goto timeout / ERR_HTTP_RESPONSE_CODE_FAILURE).
    args: ["--no-proxy-server"],
  });
  const CONCURRENCY = Number(process.env.PRERENDER_CONCURRENCY || 2);
  let ok = 0, fail = 0, spaFallback = 0;

  try {

  async function render(route) {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    // El prerender no necesita el backend: todo el contenido SEO sale del bundle
    // estático. Abortar las peticiones a Convex evita que WebSockets colgados o
    // reintentos lentos hagan el prerender no determinista (02/10/2026: 34/55
    // artículos del blog capturaron el shell genérico en vez del artículo).
    // 12/10/2026: el glob anterior ("**/convex.cloud/**") NO casaba con
    // <deploy>.convex.cloud ni cubría el WebSocket: con la URL real de Convex,
    // networkidle no llegaba y el prerender se atascaba. Se bloquea TODO lo externo
    // (HTTP y WebSocket): el HTML estático no debe depender de terceros.
    await page.route((u) => !/^https?:\/\/localhost[:/]/.test(u.href), (r) => r.abort());
    if (page.routeWebSocket) await page.routeWebSocket(/.*/, (ws) => ws.close());
    // 07/10/2026 (velocidad): bloquear Google Analytics durante el prerender.
    // El loader diferido de GA en index.html se dispara por requestIdleCallback/
    // setTimeout durante la captura e inyecta <script src="gtag/js"> en el DOM,
    // que queda baked en el HTML estático → GA se cargaba 2 veces en producción
    // (el loader diferido + el script capturado). Con esto, el HTML prerenderizado
    // solo lleva el loader diferido.
    // 24/10/2026 (velocidad/ficha): si una imagen de /media/ no está en DIST (la media
    // vive en Netlify, no en el build), el prerender horneaba «Foto pendiente de
    // verificación» en vez de la foto hero (LCP y SEO). Se sirve desde PRERENDER_MEDIA_DIR
    // y, si falta la variante -480w/-828w, se sirve la base (solo afecta a la captura).
    await page.route(
      (u) => /^https?:\/\/localhost[:/]/.test(u.href) && u.pathname.startsWith("/media/"),
      async (r) => {
        const rel = decodeURIComponent(new URL(r.request().url()).pathname);
        const candidatos = [join(DIST, rel), join(MEDIA_DIR, rel.replace(/^\/media\//, ""))];
        const base = rel.replace(/-(480|828)w\.webp$/, ".webp");
        if (base !== rel) candidatos.push(join(DIST, base), join(MEDIA_DIR, base.replace(/^\/media\//, "")));
        const f = candidatos.find((c) => existsSync(c));
        if (!f) return r.continue();
        const ext = f.split(".").pop().toLowerCase();
        const tipos = { webp: "image/webp", png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", svg: "image/svg+xml", avif: "image/avif", gif: "image/gif" };
        return r.fulfill({ status: 200, body: readFileSync(f), headers: { "content-type": tipos[ext] || "application/octet-stream" } });
      },
    );
    await page.route("**/googletagmanager.com/**", (r) => r.abort());
    await page.route("**/google-analytics.com/**", (r) => r.abort());
    // El juego de los monos no se pinta en el prerender: no aporta SEO y sus
    // imágenes/animaciones ralentizan la captura (05/10/2026: 6 rutas/min con
    // el juego vs 16 sin él). En producción el flag no existe y el juego va normal.
    await page.addInitScript(() => {
      window.__PRERENDER__ = true;
      // 11/10/2026 (auditoría): señal determinista de que React ya tocó el DOM.
      // Para "/" el canonical del shell YA coincide antes de que React arranque
      // y data-pageloader no existe hasta el primer commit → el waitForFunction
      // se resolvía en esa ventana y se capturaba el spinner inicial. Con este
      // MutationObserver el wait solo resuelve cuando React ya mutó #root.
      // El init script corre en document_start (puede no existir #root aún):
      // se sondea con intervalo — los módulos de React son deferred, así que
      // el observer siempre engancha antes de que React toque el DOM, y nunca
      // ve las mutaciones del propio parser HTML.
      window.__rootMutated = false;
      const __attachRootObserver = () => {
        const r = document.getElementById("root");
        if (!r) return;
        new MutationObserver(() => { window.__rootMutated = true; })
          .observe(r, { childList: true, subtree: true });
      };
      if (document.readyState === "loading") {
        const __t = setInterval(() => {
          if (document.getElementById("root")) { clearInterval(__t); __attachRootObserver(); }
        }, 30);
      } else {
        __attachRootObserver();
      }
    });
    try {
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: "networkidle",
        timeout: 25000,
      });
      // Esperar a que useSeo haya fijado el canonical PROPIO de la ruta
      // (señal de que React hidrató y renderizó la página correcta, incluido el
      // chunk lazy). 02/10/2026: sin esto, /multas/madrid capturaba el contenido
      // de la portada y /multas/barcelona el shell vacío; el .catch silencioso
      // publicaba páginas rotas. Ahora el timeout es un FALLO explícito.
      const canonRoute = route === "/" ? "/" : route.endsWith("/") ? route : `${route}/`;
      const expectedCanon = `https://recurretumulta.online${canonRoute}`;
      // 05/10/2026 (rendimiento): las páginas de contenido (/blog/*, /coches/*,
      // /motos/*, /patinetes/*) cargan sus datos con import() dinámico. Además
      // del canonical, se espera a la marca data-page-ready que la página fija
      // cuando TODOS sus datos resolvieron (artículo + galería + relacionados +
      // ficha destacada / modelo + historia + EuroNCAP). Sin esto se capturaría
      // el esqueleto de carga.
      const needsReady = /^\/(blog|coches|motos|patinetes)\//.test(route);
      try {
        await page.waitForFunction(
          ({ exp, waitReady }) => {
            const c = document.querySelector('link[rel="canonical"]');
            if (!c || c.getAttribute("href") !== exp) return false;
            // 06/10/2026: el canonical solo NO basta. El HTML servido por el
            // preview ya trae el canonical del prerender anterior, así que la
            // espera se resolvía con el spinner del Suspense aún visible (la
            // portada se capturaba sin el hero: el chunk lazy tarda ~3-4s).
            // data-pageloader desaparece cuando el chunk lazy ya renderizó.
            // 11/10/2026: ADEMÁS el wait necesita que React haya arrancado.
            // En "/" el canonical del shell ya coincide en t=0 y data-pageloader
            // no existe hasta el primer commit de React → sin __rootMutated el
            // wait se resolvía antes del arranque y se bakeaba el spinner.
            if (!window.__rootMutated) return false;
            if (document.querySelector("[data-pageloader]")) return false;
            if (document.querySelector("[data-editorial-cargando]")) return false; // 31/10/2026: shard del análisis editorial
            if (waitReady && document.body.dataset.pageReady !== "1") return false;
            return true;
          },
          { exp: expectedCanon, waitReady: needsReady },
          { timeout: 30000 }
        );
      } catch {
        throw new Error(`canonical no coincide con ${expectedCanon} (timeout 30s)`);
      }
      await page.waitForTimeout(500);
      // 11/10/2026 (auditoría): re-verificación justo antes de capturar. Si el
      // fallback del Suspense de ruta reapareció durante esos 500 ms, esperar
      // a que vuelva a desaparecer en vez de bakear el spinner en el HTML
      // (lo detecta la puerta 4 de scripts/verify-dist.py con --strict).
      if (await page.evaluate(() => !!document.querySelector("[data-pageloader]"))) {
        await page.waitForFunction(
          () => !document.querySelector("[data-pageloader]") && window.__rootMutated === true,
          null,
          { timeout: 15000 }
        );
        await page.waitForTimeout(500);
      }
      // 13/10/2026: como producción 6ac8e7ec, /fichas-tecnicas se publica con la
      // lista completa en el HTML: se pulsa "Cargar más fichas" hasta agotarla.
      if (EXPANDIR_RUTAS.has(route.replace(/\/$/, ""))) {
        for (let i = 0; i < 400; i++) {
          const n = await page.evaluate(() => {
            const b = [...document.querySelectorAll("button")].find((x) => /^Cargar más/.test(x.textContent.trim()));
            if (!b) return -1;
            b.click();
            return document.querySelectorAll("a[href]").length;
          });
          if (n < 0) break;
          await page.waitForTimeout(60);
        }
        await page.waitForTimeout(500);
      }
      let html = await page.content();
      // Saneamiento 02/10/2026 (auditoría 7h): el HTML capturado del preview
      // local arrastra la origin http://localhost:4317 en los <link
      // modulepreload> y en el enlace "compartir por WhatsApp" (construido
      // con window.location.href). Sin esto se publicaban URLs de localhost.
      // Se reescribe a relativo / al dominio canónico.
      html = html
        .split(`http://localhost:${PORT}`).join("")
        .split(`http%3A%2F%2Flocalhost%3A${PORT}`)
        .join("https%3A%2F%2Frecurretumulta.online");
      // 07/10/2026 ~16:00: el preload del hero LCP ya vive en index.html
      // (con imagesrcset/imagesizes correctos); la inyección aquí era un
      // duplicado que descargaba el hero dos veces. Eliminada.
      // 31/10/2026 (velocidad): index.html precarga hero-jungla-selva (~145 KB, prioridad alta) en TODAS
      // las páginas, pero solo la usa la portada (HeroCosaJungla, img.hj-bg). En fichas y posts competía con
      // el LCP real. Se quita del HTML capturado cuando la página no pinta ese hero.
      if (!/class="hj-bg"/.test(html)) {
        html = html.replace(/<link\s+rel="preload"\s+as="image"[^>]*hero-jungla-selva[^>]*>\s*/s, "");
      }
      const dest = outPath(route);
      mkdirSync(dirname(dest), { recursive: true });
      writeFileSync(dest, html);
      ok++;
    } catch (err) {
      // Slugs de más de 255 caracteres no pueden existir como fichero
      // en ningún Linux: esa ruta se sirve por el fallback SPA.
      if (err.code === "ENAMETOOLONG") {
        console.log(`  ↪ ${route}: slug demasiado largo, fallback SPA`);
        spaFallback++;
        ok++;
      } else {
        fail++;
        console.error(`  ✗ ${route}: ${err.message.split("\n")[0]}`);
        // R9: línea parseable para que safe-publish-v2.sh reintente solo las rutas fallidas.
        console.error(`FAIL_ROUTE:${route}`);
      }
    } finally {
      await page.close();
    }
  }

  // 12/10/2026: pool de workers (antes lotes con Promise.all: un timeout de 30 s
  // bloqueaba el lote entero y el prerender completo tardaba horas).
  let next = 0, done = 0;
  await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
    while (next < ROUTES_FINAL.length) {
      const r = ROUTES_FINAL[next++];
      // 13/10/2026: watchdog por ruta; una página colgada (page.content/close) ya no bloquea al worker.
      let timer;
      await Promise.race([
        render(r),
        new Promise((res) => { timer = setTimeout(() => { console.error(`  ✗ ${r}: watchdog 70s`); console.error(`FAIL_ROUTE:${r}`); res(); }, 70000); }),
      ]);
      clearTimeout(timer);
      if (++done % 200 === 0) console.log(`  …${done}/${ROUTES_FINAL.length}`);
    }
  }));
  {
  }

  // Fallback SPA para rutas de cliente en Cloudflare Pages.
  // Rutas específicas (NO wildcard global): el wildcard /* interceptaría las
  // páginas estáticas prerenderizadas y produciría resultados inconsistentes.
  // Sin rutas SPA con fallback: todo está prerenderizado.

  console.log(`Hecho: ${ok} ok (${spaFallback} por fallback SPA), ${fail} fallos.`);
  // 12/10/2026: no fallar el lote por rutas individuales; prerender-resume.mjs
  // detecta las pendientes vía isComplete() y las reintenta sin repetir las 80.
  // if (fail > 0) process.exitCode = 1;
  } finally {
    await browser.close().catch(() => {});
    // SIGKILL directo: es un servidor de desarrollo, no necesita cierre
    // elegante, y un SIGTERM ignorado deja el puerto ocupado (zombi).
    try {
      preview?.kill("SIGKILL");
    } catch {}
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
