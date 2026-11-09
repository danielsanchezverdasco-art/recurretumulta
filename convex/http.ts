// Convex HTTP Actions — V8 runtime (no "use node")
// Expone endpoints para sitemap dinámico y datos estructurados
import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal, api } from "./_generated/api";
import { auth } from "./auth";

const DOMAIN = "https://recurretumulta.online";
const NOW = "2026-09-09";

// Slugs de las 52 provincias
const PROVINCIAS_SLUGS = [
  "madrid","barcelona","valencia","sevilla","malaga","zaragoza","bilbao","alicante",
  "cordoba","valladolid","granada","murcia","palma-mallorca","las-palmas","santa-cruz-tenerife",
  "pamplona","san-sebastian","vitoria","logrono","santander","oviedo","a-coruna",
  "santiago-compostela","vigo","cadiz","huelva","jaen","almeria","toledo","ciudad-real",
  "cuenca","guadalajara","albacete","burgos","leon","salamanca","zamora","segovia","soria",
  "palencia","avila","badajoz","caceres","lleida","tarragona","girona","castellon","teruel",
  "huesca","pontevedra","lugo","ourense",
];

// Slugs de las guías pilar que ya tienen página publicada.
// Cuando se cree la página real de una guía nueva, añadir su slug aquí.
const GUIAS_SLUGS = ["radares", "zbe", "prescripcion", "vicios-forma", "alcohol-drogas", "itv-documentacion"];

// Slugs de los 68 posts del blog (generado desde el snapshot 30/09/2026)
const BLOG_SLUGS = [
  "adelantar-ciclistas-nueva-norma-octubre",
  "atraco-en-el-surtidor-el-precio-de-la-gasolina-en-2026-roza-los-186-historico-de-subidas-desde-2010-impuestos-abusivos-y-cuanto-gana-realmente-la-gasolinera",
  "atropello-de-jabali-o-animal-en-la-carretera-quien-paga-los-danos-del-coche-segun-la-ley-en-2024-guia-definitiva-para-reclamar",
  "autocaravanas-aparcar-norma-octubre",
  "balizas-v16-vs-triangulos-el-gran-debate-nacional-estadisticas-de-atropellos-y-la-multa-por-no-llevar-la-luz-conectada",
  "camaras-ocultas-de-la-dgt-para-movil-y-cinturon-como-funciona-el-gran-ojo-invisible-multas-de-200-euros-y-trucos-legales-para-recurrirlas-con-exito",
  "casco-obligatorio-bicicleta-carretera-octubre",
  "coches-autonomos-de-nivel-3-y-4-en-espana-quien-asume-la-responsabilidad-legal-en-caso-de-accidente",
  "codigo-78-carnet-automatico-manual-curso-7-horas",
  "como-adelantar-ahora-a-ciclistas-y-coches-averiados-para-que-la-dgt-no-te-cruja-a-multas",
  "como-recurrir-multa-de-patinete-electrico-vmp-modelo-gratis",
  "como-recurrir-multas-de-la-zbe-en-madrid-barcelona-y-toda-espana-guia-definitiva-y-modelos-con-ia",
  "como-recurrir-multas-de-trafico-en-canarias-guia-legal-especifica-peculiaridades-insulares-plazos-y-recursos-en-las-islas",
  "como-recurrir-multas-de-trafico-en-ceuta-y-melilla-guia-legal-especifica-plazos-peculiaridades-fronterizas-y-recursos-eficaces",
  "cronica-oficial-del-gp-de-espana-de-f1-en-madring-resultados-podio-datos-tecnicos-del-circuito-y-guia-para-recurrir-multas-de-trafico-en-madrid",
  "curiosidades-sustos-y-accidentes-en-madring-todo-lo-que-no-te-contaron-del-circuito-de-f1-en-madrid-y-como-lidiar-con-las-multas-del-evento",
  "descubre-las-nuevas-medidas-de-la-dgt-para-octubre-uso-obligatorio-de-guantes-y-calzado-para-motoristas-fin-de-exenciones-del-cinturon-y-como-recurrir-multas",
  "dgt-anuncia-reforma-entra-en-vigor-1-octubre",
  "el-coche-te-vigila-obligatoriedad-del-sistema-addw-antidistracciones-camaras-de-control-de-mirada-y-multas-de-la-dgt",
  "el-gran-timo-del-coche-electrico-de-las-promesas-sin-impuestos-al-sablazo-por-kilometro-y-la-doble-fiscalidad",
  "el-millonario-negocio-de-la-f1-en-madrid-costes-impacto-economico-y-cuantas-multas-ha-recaudado-la-dgt-por-el-gran-premio",
  "el-nuevo-carril-de-emergencia-obligatorio-en-retenciones-como-abrir-pasillo-a-ambulancias-y-bomberos-para-evitar-multas-de-la-dgt",
  "el-nuevo-escenario-de-los-semaforos-octubre-2026-cuenta-atras-para-octubre-toda-la-atencion-se-centra-en-la-modificacion-del-reglamento-de-circulacion-que-prohibe-la-luz-ambar-intermitente-para-vehiculos-si-coincide-con-el-verde-peatonal-obligando-a-detenerse-por-completo",
  "el-tuning-en-espana-1999-vs-2026-murio-la-fiebre-de-las-modificaciones-guia-de-homologacion-y-costes-actuales",
  "entornos-escolares-seguros-octubre",
  "falsa-multa-dgt-sms-correo-phishing",
  "gasolina-230-euros-deposito-100-septiembre-2026",
  "guantes-calzado-obligatorios-moto-octubre",
  "guia-completa-de-testigos-de-avarias-y-luces-del-salpicadero-significado-diagnostico-y-consejos-tecnicos",
  "guia-tecnica-definitiva-de-madring-datos-tiempos-record-secretos-del-circuito-de-f1-en-madrid-y-como-evitar-multas",
  "historico-gp-de-espana-de-f1-en-madrid-resultados-de-la-carrera-en-madring-podio-y-como-evitar-multas-tras-el-evento",
  "homologacion-camper-y-caravanas-en-espana-vacios-legales-itv-y-como-evitar-multas-de-la-dgt",
  "itv-cada-cuanto-me-toca-tabla-por-anos-multas-por-circular-sin-ella-y-que-pasa-si-llevo-reformas-en-el-coche",
  "la-guia-definitiva-del-motor-en-2026-asistentes-adas-ayudas-a-la-movilidad-preguntas-del-dia-y-el-futuro-de-la-automocion",
  "la-pesadilla-de-los-2-euros-por-que-la-gasolina-en-espana-esta-por-las-nubes",
  "las-10-herramientas-online-imprescindibles-para-profesionales-talleres-y-conductores-en-el-sector-de-la-automocion",
  "levante-vs-barcelona-hoy-horario-donde-ver-levante-barcelona-alineaciones-levante-barcelona-partido-levante-barca-hoy-estadio-curiosidades-levante-barcelona",
  "llevas-la-nueva-luz-v16-conectada-en-el-coche-descubre-la-normativa-oficial-de-la-dgt-el-importe-de-las-multas-y-como-evitar-sanciones",
  "margenes-de-error-de-los-radares-de-la-dgt-te-han-multado-injustamente-tablas-oficiales-multas-falsas-y-como-recurrirlas",
  "me-ha-llegado-una-multa-de-la-dgt-pero-el-conductor-no-era-yo-quien-paga-como-identificarlo-y-plazos-para-evitar-multas-triplicadas",
  "motos-arcen-atascos-nueva-norma",
  "multa-fantasma-testra-dgt-que-hacer",
  "multas-a-patinetes-electricos-vmp-en-espana-2027-millones-en-recaudacion-normativa-de-seguros-preguntas-callejeras-y-como-recurrir",
  "multas-absurdas-de-la-dgt-tabla-oficial-de-sanciones-y-los-casos-mas-raros-que-te-costaran-puntos-y-dinero",
  "multas-de-aparcamiento-y-grua-en-madrid-como-recuperar-tu-coche-y-recurrir-la-sancion-con-exito",
  "multas-de-la-dgt-por-despistes-en-la-m-30-y-accesos-a-madrid-por-que-llegan-y-como-recurrirlas-al-instante",
  "multas-de-trafico-en-barcelona-y-la-zbe-como-recurrir-sanciones-de-la-dgt-y-el-ayuntamiento-al-instante",
  "multas-de-trafico-en-el-extranjero-francia-portugal-italia-alemania-como-recurrir-multa-radar-extranjero-en-espana-conductor-extranjero-multado-en-espana-dgt-anular-multa-ztl-italia-antai-francia-convenio-intercambio-datos-trafico-union-europea",
  "multas-dgt",
  "multas-en-la-m-30-y-madrid-central-como-evitar-sanciones-y-recurrirlas-si-te-desplazas-por-la-capital",
  "nieve-prohibido-adelantar-octubre",
  "normas-de-trafico-mas-raras-y-estrictas-en-europa-delito-penal-en-francia-prohibicion-del-movil-en-semaforos-y-multas-absurdas-al-volante",
  "nuevas-marcas-viales-en-forma-de-circulo-que-significan-multan-y-como-afectan-a-las-curvas-en-espana",
  "patinete-electrico-normativa-dgt-2026-multas",
  "patinetes-15-anos-casco-obligatorio",
  "plataforma-unica-prioridad-peaton",
  "precio-gasolina-comunidades-autonomas-comparativa",
  "precio-gasolina-deposito-100-euros-espana",
  "preinstalacion-obligatoria-de-alcoholimetros-alcolock-en-coches-nuevos-normativa-europea-gsr2-multas-y-como-afecta-en-espana-francia-italia-y-portugal",
  "prescripcion-y-caducidad-de-las-multas-de-trafico-cuando-expira-una-sancion-de-la-dgt-plazos-legales-mitos-y-como-anular-expedientes-fuera-de-plazo",
  "radares-velolaser-dgt-2026-que-son-donde-los-colocan-como-recurrir-multas",
  "real-sociedad-vs-atletico-madrid-real-sociedad-atletico-de-madrid-partido-real-sociedad-alineaciones-de-real-sociedad-contra-atletico-de-madrid-resultado-real-sociedad-atletico-de-madrid",
  "revolucion-al-volante-nuevas-normativas-de-la-dgt-el-fin-del-semaforo-ambar-y-multas-en-la-a-2",
  "robar-romper-radar-dgt-consecuencias",
  "ruedas-de-km0-chollo-o-timo-pros-contras-precios-reales-y-multas-por-neumaticos-caducados-o-gastados",
  "tasa-unica-alcohol-02-reforma",
  "te-ha-llegado-una-multa-de-la-dgt-o-de-un-pais-europeo-como-francia-alemania-italia-o-portugal",
  "te-van-a-multar-por-llevar-los-cristales-delanteros-tintados-lo-que-la-dgt-no-te-cuenta-multas-de-infarto-y-por-que-te-tiran-en-la-itv",
];

const http = httpRouter();

// ── Rutas de autenticación (Convex Auth: magic link por email) ────────────────
auth.addHttpRoutes(http);

// ── Callback de Google OAuth (sistema simple) ────────────────────────────────
// URL a registrar en Google Cloud Console:
// https://handsome-rhinoceros-259.eu-west-1.convex.site/api/auth-simple/google-callback

// Decodifica base64url sin depender de Node (el runtime HTTP de Convex es V8,
// donde `Buffer` no existe). Devuelve null si el valor no es válido.
function decodeStateParam(state: string): { frontendBase?: string; redirectUri?: string } | null {
  try {
    let base64 = state.replace(/-/g, "+").replace(/_/g, "/");
    const pad = base64.length % 4;
    if (pad) base64 += "=".repeat(4 - pad);
    const binary = atob(base64);
    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
    const json = new TextDecoder().decode(bytes);
    return JSON.parse(json);
  } catch {
    return null;
  }
}
http.route({
  path: "/api/auth-simple/google-callback",
  method: "GET",
  handler: httpAction(async (ctx, request) => {
    const url = new URL(request.url);
    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state"); // contiene la redirect_uri del frontend
    const error = url.searchParams.get("error");

    // URL base del frontend (viene en el state o fallback)
    let frontendBase = "https://recurretumulta.pages.dev";
    let redirectUri = "";
    if (state) {
      const parsed = decodeStateParam(state);
      if (parsed) {
        frontendBase = parsed.frontendBase || frontendBase;
        redirectUri = parsed.redirectUri || "";
      }
    }

    if (error) {
      // Google rechazó la petición (p.ej. redirect_uri_mismatch): informar el motivo
      return Response.redirect(
        `${frontendBase}/login?error=google&detail=${encodeURIComponent(error)}`,
        302
      );
    }
    if (!code) {
      return Response.redirect(`${frontendBase}/login?error=google&detail=no_code`, 302);
    }

    try {
      const result = await ctx.runAction(api.authSimple.googleCallback, {
        code,
        redirectUri: redirectUri || `https://handsome-rhinoceros-259.eu-west-1.convex.site/api/auth-simple/google-callback`,
      });
      // Redirigir al frontend con el token de sesión
      const finalUrl = `${frontendBase}/login?session_token=${result.token}`;
      return Response.redirect(finalUrl, 302);
    } catch (e) {
      console.error("Google callback error:", e);
      const detail = e instanceof Error ? e.message.slice(0, 120) : "callback_failed";
      return Response.redirect(
        `${frontendBase}/login?error=google&detail=${encodeURIComponent(detail)}`,
        302
      );
    }
  }),
});

// ── /sitemap.xml dinámico ──────────────────────────────────────────────────────
http.route({
  path: "/sitemap-dynamic.xml",
  method: "GET",
  handler: httpAction(async () => {
    const pages = [
      { loc: `${DOMAIN}/`, priority: "1.0", changefreq: "weekly" },
      { loc: `${DOMAIN}/multas`, priority: "0.9", changefreq: "monthly" },
      { loc: `${DOMAIN}/blog`, priority: "0.9", changefreq: "weekly" },
      { loc: `${DOMAIN}/contacto`, priority: "0.6", changefreq: "yearly" },
      { loc: `${DOMAIN}/privacidad`, priority: "0.4", changefreq: "yearly" },
      { loc: `${DOMAIN}/terminos`, priority: "0.4", changefreq: "yearly" },
      { loc: `${DOMAIN}/cookies`, priority: "0.3", changefreq: "yearly" },
    ];

    for (const slug of BLOG_SLUGS) {
      pages.push({ loc: `${DOMAIN}/blog/${slug}`, priority: "0.85", changefreq: "monthly" });
    }
    for (const slug of PROVINCIAS_SLUGS) {
      pages.push({ loc: `${DOMAIN}/multas/${slug}`, priority: "0.85", changefreq: "monthly" });
    }
    for (const slug of GUIAS_SLUGS) {
      pages.push({ loc: `${DOMAIN}/guias/${slug}`, priority: "0.85", changefreq: "monthly" });
    }

    const urls = pages.map(
      (p) => `  <url>
    <loc>${p.loc}</loc>
    <lastmod>${NOW}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
    );

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=86400",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }),
});

// ── /robots.txt dinámico ──────────────────────────────────────────────────────
http.route({
  path: "/robots-dynamic.txt",
  method: "GET",
  handler: httpAction(async () => {
    const content = `User-agent: *
Allow: /
Disallow: /auth/
Disallow: /perfil
Sitemap: ${DOMAIN}/sitemap.xml
User-agent: GPTBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: ClaudeBot
Allow: /`;

    return new Response(content, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=86400",
      },
    });
  }),
});

// ── /api/provincias — datos estructurados para IA/AEO ─────────────────────────
http.route({
  path: "/api/provincias",
  method: "GET",
  handler: httpAction(async () => {
    const data = {
      service: "RecurreTuMulta.online",
      description: "API de datos sobre recursos de multas de tráfico por provincia en España",
      domain: DOMAIN,
      totalProvincias: PROVINCIAS_SLUGS.length,
      provincias: PROVINCIAS_SLUGS.map((slug) => ({
        slug,
        url: `${DOMAIN}/multas/${slug}`,
        description: `Guía para recurrir multas de tráfico DGT en ${slug}`,
      })),
    };
    return new Response(JSON.stringify(data, null, 2), {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=3600",
      },
    });
  }),
});

// ── /api/blog — índice del blog para IA/AEO ───────────────────────────────────
http.route({
  path: "/api/blog",
  method: "GET",
  handler: httpAction(async () => {
    const data = {
      service: "RecurreTuMulta.online — Blog DGT",
      description: "Artículos sobre derecho de tráfico, recursos de multas DGT y vicios de forma en España",
      domain: DOMAIN,
      totalArticulos: BLOG_SLUGS.length,
      articulos: BLOG_SLUGS.map((slug) => ({
        slug,
        url: `${DOMAIN}/blog/${slug}`,
      })),
    };
    return new Response(JSON.stringify(data, null, 2), {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=3600",
      },
    });
  }),
});

// ── /api/health — healthcheck ─────────────────────────────────────────────────
http.route({
  path: "/api/health",
  method: "GET",
  handler: httpAction(async () => {
    return new Response(JSON.stringify({ status: "ok", service: "RecurreTuMulta.online", timestamp: new Date().toISOString() }), {
      headers: { "Content-Type": "application/json" },
    });
  }),
});

// ── Stripe Webhook (V8 router → Node action para verificación de firma) ──────
http.route({
  path: "/stripe/webhook",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const body = await request.text();
    const sig = request.headers.get("stripe-signature");
    if (!sig) return new Response("Missing stripe-signature", { status: 400 });

    const result = await ctx.runAction(internal.stripeNode.verifyAndProcessWebhook, {
      body,
      signature: sig,
    });

    if (!result.ok) {
      console.error("[stripe-webhook] signature verification failed:", result.error);
      return new Response(`Webhook Error: ${result.error}`, { status: 400 });
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }),
});

export default http;
