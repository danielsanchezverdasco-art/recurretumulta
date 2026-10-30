// @ts-nocheck
// Portada reconstruida 1:1 a partir del bundle de producción 6ac8e7ec
// (el Index.tsx del export v2 era otra versión: otro hero y 4 secciones menos).
// Código derivado del JS compilado; se mantiene tal cual para garantizar paridad exacta.
import * as React from "react";
import * as JSX from "react/jsx-runtime";
import {
  createLucideIcon as a, ArrowRight as o, Sparkles as s, BookOpen as ee, Mail as c, Building2 as l,
  Check as f, ChevronDown as p, ChevronLeft as m, ChevronRight as h, ChevronUp as g, FileText as _,
  Shield as v, Zap as y, LoaderCircle as x, Info as C,
} from "lucide-react";
import u from "@/components/shared-navbar.tsx";
import te from "@/components/shared-footer.tsx";
import { useTranslation as d } from "react-i18next";
import { cn as b } from "@/lib/utils.ts";
import { Button as ne } from "@/components/ui/button.tsx";
import { Link as S } from "react-router-dom";
import w from "@/components/caza-monos/MonoEscondido.tsx";
import { fijoId as T } from "@/components/caza-monos/CazaMonosContext.tsx";
import { CosaAvatar as E } from "@/components/Cosa.tsx";
import { Card as O, CardContent as D } from "@/components/ui/card.tsx";
import { useSeo as k } from "@/hooks/use-seo.ts";
import { Badge as A } from "@/components/ui/badge.tsx";
import { Reveal as j, Swap as M, Collapse as N } from "@/components/anim.tsx";
import { cardThumb as P } from "@/lib/blog-image.ts";
import F, { AD_SLOTS as I } from "@/components/ads/AdBanner.tsx";
import { BLOG_LITE_HOME, BLOG_COUNT } from "@/lib/blog-lite-home.generated.ts";
import { hrefDesdeBlog } from "@/lib/blog-redir.generated";
import { LazyConvexProvider } from "@/components/providers/convex-lazy.tsx";
// 26/10/2026 (fix menú móvil): estos chunks usan useAction de convex/react. Si
// terminan de cargar antes que el ConvexProvider raíz (diferido con
// requestIdleCallback, frecuente en móviles lentos), lanzaban «Could not find
// Convex client», el ErrorBoundary raíz abortaba la hidratación y la portada
// quedaba muerta (hamburguesa sin respuesta). Se envuelven con LazyConvexProvider.
const conConvex = (p) =>
  p.then((m) => ({
    default: (props) =>
      React.createElement(LazyConvexProvider, null, React.createElement(m.default, props)),
  }));
const r = (fn) => fn();
const __vite__mapDeps = () => [];
var L = a(`scan-search`, [
    [`path`, { d: `M3 7V5a2 2 0 0 1 2-2h2`, key: `aa7l1z` }],
    [`path`, { d: `M17 3h2a2 2 0 0 1 2 2v2`, key: `4qcy5o` }],
    [`path`, { d: `M21 17v2a2 2 0 0 1-2 2h-2`, key: `6vwrx8` }],
    [`path`, { d: `M7 21H5a2 2 0 0 1-2-2v-2`, key: `ioqczr` }],
    [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }],
    [`path`, { d: `m16 16-1.9-1.9`, key: `1dq9hf` }],
  ]),
  R = a(`upload`, [
    [`path`, { d: `M12 3v12`, key: `1x0j5s` }],
    [`path`, { d: `m17 8-5-5-5 5`, key: `7q97r8` }],
    [`path`, { d: `M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`, key: `ih7n3h` }],
  ]),
  z = React,
  B = JSX;
function V({ className: e, ...t }) {
  return (0, B.jsx)(x, {
    role: `status`,
    "aria-label": `Loading`,
    className: b(`size-4 animate-spin`, e),
    ...t,
  });
}
var H = BLOG_LITE_HOME,
  U = BLOG_COUNT,
  W = [
    { l: 12, t: 70, ld: 0, lx: 30 },
    { l: 25, t: 40, ld: 1.5, lx: -40 },
    { l: 38, t: 78, ld: 2.8, lx: 25 },
    { l: 52, t: 30, ld: 0.9, lx: -30 },
    { l: 64, t: 66, ld: 2.1, lx: 35 },
    { l: 76, t: 44, ld: 3.4, lx: -25 },
    { l: 88, t: 72, ld: 1.2, lx: 30 },
    { l: 8, t: 52, ld: 2.5, lx: -35 },
    { l: 45, t: 58, ld: 0.4, lx: 20 },
    { l: 70, t: 80, ld: 3, lx: -20 },
  ],
  G = [
    { l: 10, t: 34, bd: 0, s: 9, c: `#ffb347` },
    { l: 78, t: 30, bd: 2.5, s: 7, c: `#9fe870` },
    { l: 66, t: 55, bd: 5, s: 11, c: `#ffb347` },
    { l: 88, t: 62, bd: 10, s: 7, c: `#9fe870` },
  ],
  K = [
    { x: 66.4, y: 41.6 },
    { x: 42.7, y: 44 },
  ];
function q() {
  let [e, t] = (0, z.useState)(!1);
  return (
    (0, z.useEffect)(() => {
      let e = requestAnimationFrame(() => t(!0));
      return () => cancelAnimationFrame(e);
    }, []),
    (0, B.jsxs)(`section`, {
      "aria-label": `En la jungla de las multas, Cosa rastrea el fallo: analiza tu multa con IA antes de pagar`,
      className: `hj-root relative overflow-hidden${e ? ` hj-anim` : ``}`,
      children: [
        (0, B.jsx)(`style`, {
          children: `
        .hj-root{height:378px;background:#0d0f0a;color:#fff}
        .hj-bg{position:absolute;inset:0;z-index:0;width:100%;height:100%;object-fit:cover;object-position:center}
        .hj-shade{position:absolute;inset:0;z-index:1;pointer-events:none;
          background:linear-gradient(180deg,rgba(5,10,6,.6) 0%,rgba(5,10,6,.15) 45%,rgba(5,10,6,.65) 100%)}
        .hj-badge{position:absolute;top:10px;left:50%;transform:translateX(-50%);z-index:20;background:#cd001d;color:#fff;
          font-size:11px;font-weight:800;padding:5px 14px;border-radius:20px;letter-spacing:.4px;white-space:nowrap;
          box-shadow:0 4px 14px rgba(205,0,29,.45)}
        .hj-luc{position:absolute;width:6px;height:6px;border-radius:50%;background:#ffe9a3;z-index:2;
          box-shadow:0 0 10px 3px rgba(255,233,163,.55);opacity:0}
        .hj-anim .hj-luc{animation:hj-luciernaga 6s ease-in-out infinite}
        @keyframes hj-luciernaga{0%,100%{opacity:0;transform:translate(0,0)}25%{opacity:.9}
          50%{opacity:.4;transform:translate(var(--lx),-26px)}75%{opacity:.9}}
        .hj-niebla{position:absolute;width:130%;height:40%;left:-15%;z-index:2;opacity:.5;filter:blur(30px);pointer-events:none;
          background:radial-gradient(ellipse at center,rgba(200,220,230,.14) 0%,transparent 65%)}
        .hj-anim .hj-niebla{animation:hj-niebla 14s ease-in-out infinite alternate}
        @keyframes hj-niebla{from{transform:translateX(-6%)}to{transform:translateX(6%)}}
        .hj-bicho{position:absolute;z-index:2;display:flex;gap:6px;opacity:0}
        .hj-anim .hj-bicho{animation:hj-bicho 12s ease-in-out infinite}
        .hj-bicho span{width:var(--bs);height:var(--bs);border-radius:50%;background:var(--bc);
          box-shadow:0 0 12px 4px var(--bc)}
        .hj-anim .hj-bicho span{animation:hj-parpadeoBicho 12s ease-in-out infinite}
        @keyframes hj-bicho{0%,100%{opacity:0}12%{opacity:1}80%{opacity:1}92%{opacity:0}}
        @keyframes hj-parpadeoBicho{0%,88%,100%{transform:scaleY(1)}92%,95%{transform:scaleY(.1)}}
        .hj-headline{position:absolute;top:0;left:0;right:0;z-index:10;padding:46px 20px 0;text-align:center}
        .hj-headline h1{font-size:28px;font-weight:800;line-height:1.25;margin:0;text-shadow:0 2px 12px rgba(0,0,0,.8)}
        .hj-headline h1 .hl{color:#b8f56b}
        .hj-headline p{color:#e2e2da;font-size:12px;margin:10px 0 0;text-shadow:0 1px 8px rgba(0,0,0,.85)}
        .hj-headline h1 .hj-sub{display:block;color:#e2e2da;font-size:12px;font-weight:400;line-height:1.5;margin:10px 0 0;text-shadow:0 1px 8px rgba(0,0,0,.85)}
        .hj-glow{position:absolute;z-index:4;border-radius:50%;pointer-events:none;top:158px;left:50%;width:220px;height:220px;
          margin-left:-110px;background:radial-gradient(ellipse at center,rgba(255,190,120,.20) 0%,transparent 62%);filter:blur(6px)}
        .hj-cosa{position:absolute;top:150px;left:50%;width:170px;margin-left:-85px;z-index:5}
        .hj-cosa .hj-cuerpo{display:block;width:100%;height:auto}
        .hj-manos{position:absolute;top:150px;left:50%;width:170px;margin-left:-85px;z-index:7;pointer-events:none}
        .hj-parpado{position:absolute;border-radius:50%;transform:scaleY(0);z-index:6;
          background:radial-gradient(ellipse at 50% 38%,#f9e3c6 0%,#f0c9a0 55%,#e2ac7e 100%);
          box-shadow:inset 0 -2px 4px rgba(120,70,40,.25)}
        .hj-anim .hj-parpado{animation:hj-blink 5.2s ease-in-out infinite}
        @keyframes hj-blink{0%,88%,100%{transform:scaleY(0)}92%,93.5%{transform:scaleY(1)}}
        .hj-cta-zone{position:absolute;left:24px;right:24px;top:300px;z-index:8}
        .hj-cta{display:block;position:relative;overflow:hidden;background:linear-gradient(180deg,#e01a2e,#b3001a);color:#fff;
          font-weight:800;font-size:15px;padding:12px 18px;border-radius:14px;text-align:center;cursor:pointer;border:0;width:100%;
          box-shadow:0 8px 26px rgba(205,0,29,.5),inset 0 1px 0 rgba(255,255,255,.25);font-family:inherit}
        .hj-cta::after{content:"";position:absolute;top:0;bottom:0;width:45%;left:-60%;
          background:linear-gradient(100deg,transparent,rgba(255,255,255,.5),transparent)}
        .hj-anim .hj-cta::after{animation:hj-brillo 3.4s ease-in-out infinite}
        @keyframes hj-brillo{0%{left:-60%}55%,100%{left:130%}}
        @media (prefers-reduced-motion:reduce){.hj-anim .hj-luc,.hj-anim .hj-niebla,.hj-anim .hj-bicho,.hj-anim .hj-bicho span,.hj-anim .hj-parpado,.hj-anim .hj-cta::after{animation:none!important}}
        .hj-ticks{display:flex;gap:6px;margin-top:8px;justify-content:center}
        .hj-ticks span{font-size:10px;color:#e8e8e0;text-shadow:0 1px 6px rgba(0,0,0,.85)}
        .hj-ticks i{font-style:normal;color:#8a8a80}
        @media (min-width:768px){
          .hj-root{height:430px}
          .hj-headline{padding-top:52px}
          .hj-headline h1{font-size:36px}
          .hj-headline p{font-size:14px}
          .hj-headline h1 .hj-sub{font-size:14px}
          .hj-cosa{width:200px;margin-left:-100px;top:158px}
          .hj-manos{width:200px;margin-left:-100px;top:158px}
          .hj-glow{top:166px}
          .hj-cta-zone{top:322px;max-width:420px;margin:0 auto}
        }
      `,
        }),
        (0, B.jsx)(`img`, {
          "aria-hidden": `true`,
          className: `hj-bg`,
          alt: ``,
          src: `/media/hero-jungla-selva-mobile-opt.webp`,
          srcSet: `/media/hero-jungla-selva-mobile-opt.webp 640w, /media/hero-jungla-selva-4k.webp 1280w`,
          sizes: `100vw`,
          fetchPriority: `high`,
          decoding: `sync`,
          width: `640`,
          height: `960`,
        }),
        (0, B.jsx)(`div`, { "aria-hidden": `true`, className: `hj-shade` }),
        (0, B.jsx)(`div`, {
          className: `hj-badge`,
          children: `⚡ Descubre si es recurrible`,
        }),
        (0, B.jsx)(`div`, {
          "aria-hidden": `true`,
          className: `hj-niebla`,
          style: { top: `8%` },
        }),
        (0, B.jsx)(`div`, {
          "aria-hidden": `true`,
          className: `hj-niebla`,
          style: { top: `48%`, animationDelay: `-7s` },
        }),
        W.map((e, t) =>
          (0, B.jsx)(
            `span`,
            {
              "aria-hidden": `true`,
              className: `hj-luc`,
              style: {
                left: `${e.l}%`,
                top: `${e.t}%`,
                animationDelay: `${e.ld}s`,
                "--lx": `${e.lx}px`,
              },
            },
            t,
          ),
        ),
        G.map((e, t) =>
          (0, B.jsxs)(
            `div`,
            {
              "aria-hidden": `true`,
              className: `hj-bicho`,
              style: {
                left: `${e.l}%`,
                top: `${e.t}%`,
                animationDelay: `${e.bd}s`,
                "--bs": `${e.s}px`,
                "--bc": e.c,
              },
              children: [
                (0, B.jsx)(`span`, { style: { animationDelay: `${e.bd}s` } }),
                (0, B.jsx)(`span`, { style: { animationDelay: `${e.bd}s` } }),
              ],
            },
            t,
          ),
        ),
        (0, B.jsxs)(`div`, {
          className: `hj-headline`,
          children: [
            (0, B.jsxs)(`h1`, {
              children: [
                `En la jungla de las multas,`,
                (0, B.jsx)(`br`, {}),
                (0, B.jsx)(`span`, {
                  className: `hl`,
                  children: `Cosa rastrea el fallo`,
                }),
                // 17/10/2026 SEO: «recurrir multas gratis» dentro del H1, con el mismo aspecto que el antiguo <p>
                (0, B.jsxs)(`span`, {
                  className: `hj-sub`,
                  children: [
                    `Recurrir multas `,
                    (0, B.jsx)(`strong`, {
                      style: { color: `#fff` },
                      children: `gratis`,
                    }),
                    ` con IA: analiza tu sanción en 2 minutos, sin registro`,
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, B.jsx)(`div`, { "aria-hidden": `true`, className: `hj-glow` }),
        (0, B.jsxs)(`div`, {
          className: `hj-cosa`,
          children: [
            (0, B.jsx)(`img`, {
              className: `hj-cuerpo`,
              src: `/media/cosa-jungla-apoyado-sm.webp`,
              srcSet: `/media/cosa-jungla-apoyado-sm.webp 240w, /media/cosa-jungla-apoyado.webp 735w`,
              sizes: `170px`,
              width: `240`,
              height: `326`,
              fetchPriority: `high`,
              alt: `Cosa, el mono robot, apoyado en el botón de análisis`,
            }),
            // 13/10/2026: mono estático (sin parpadeo) por rendimiento.
          ],
        }),
        (0, B.jsxs)(`div`, {
          className: `hj-cta-zone`,
          children: [
            (0, B.jsx)(`button`, {
              type: `button`,
              className: `hj-cta`,
              onClick: () => {
                document
                  .getElementById(`analizador`)
                  ?.scrollIntoView({ behavior: `smooth` });
              },
              children: `Analizar mi multa gratis`,
            }),
            (0, B.jsxs)(`div`, {
              className: `hj-ticks`,
              children: [
                (0, B.jsx)(`span`, { children: `✓ Gratis` }),
                (0, B.jsx)(`i`, { children: `·` }),
                (0, B.jsx)(`span`, { children: `✓ Sin registro` }),
                (0, B.jsx)(`i`, { children: `·` }),
                (0, B.jsx)(`span`, { children: `✓ 2 min` }),
              ],
            }),
          ],
        }),
        (0, B.jsx)(`img`, {
          className: `hj-manos`,
          src: `/media/cosa-jungla-manos-sm.webp`,
          srcSet: `/media/cosa-jungla-manos-sm.webp 240w, /media/cosa-jungla-manos.webp 735w`,
          sizes: `170px`,
          width: `240`,
          height: `326`,
          loading: `lazy`,
          alt: ``,
          "aria-hidden": `true`,
        }),
      ],
    })
  );
}
var J = [
  {
    img: `/media/caso-radar-madrid.jpg`,
    alt: `Boletín de denuncia real con fotos de radar, Madrid`,
    titulo: `Radar de tramo · Madrid`,
    dato: `73 km/h en zona 50`,
    resultado: `Recurrida`,
    color: `bg-green-600`,
  },
  {
    img: `/media/caso-radar-bmw.webp`,
    alt: `BMW captado por radar en autopista de noche`,
    titulo: `Radar fijo · Autopista`,
    dato: `128 km/h en zona 90`,
    resultado: `En análisis`,
    color: `bg-amber-500`,
  },
  {
    img: `/media/caso-radar-seat.webp`,
    alt: `SEAT León captado por radar en vía urbana`,
    titulo: `Radar urbano · Barcelona`,
    dato: `68 km/h en zona 50`,
    resultado: `Recurrida`,
    color: `bg-green-600`,
  },
  {
    img: `/media/caso-radar-golf.webp`,
    alt: `Volkswagen Golf captado por radar en carretera`,
    titulo: `Radar móvil · Carretera`,
    dato: `105 km/h en zona 90`,
    resultado: `Recurrida`,
    color: `bg-green-600`,
  },
];
function re() {
  let e = (0, z.useRef)(null),
    t = (t) => {
      e.current?.scrollBy({ left: t * 280, behavior: `smooth` });
    };
  return (0, B.jsx)(`section`, {
    "aria-label": `Casos reales analizados`,
    className: `py-8`,
    children: (0, B.jsxs)(`div`, {
      className: `max-w-6xl mx-auto px-4`,
      children: [
        (0, B.jsxs)(`div`, {
          className: `flex items-center justify-between mb-4`,
          children: [
            (0, B.jsxs)(`div`, {
              children: [
                (0, B.jsx)(`p`, {
                  className: `text-xs font-bold uppercase tracking-widest text-red-600`,
                  children: `Ejemplos`,
                }),
                (0, B.jsx)(`h2`, {
                  className: `text-xl md:text-2xl font-black text-gray-900`,
                  children: `Casos analizados con IA`,
                }),
              ],
            }),
            (0, B.jsxs)(`div`, {
              className: `flex gap-2`,
              children: [
                (0, B.jsx)(`button`, {
                  onClick: () => t(-1),
                  "aria-label": `Anterior`,
                  className: `w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50`,
                  children: (0, B.jsx)(m, { className: `w-5 h-5` }),
                }),
                (0, B.jsx)(`button`, {
                  onClick: () => t(1),
                  "aria-label": `Siguiente`,
                  className: `w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50`,
                  children: (0, B.jsx)(h, { className: `w-5 h-5` }),
                }),
              ],
            }),
          ],
        }),
        (0, B.jsx)(`div`, {
          ref: e,
          className: `flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide`,
          style: { scrollbarWidth: `none` },
          children: J.map((e) =>
            (0, B.jsxs)(
              `article`,
              {
                className: `snap-start shrink-0 w-[240px] rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm`,
                children: [
                  (0, B.jsxs)(`div`, {
                    className: `relative h-[130px]`,
                    children: [
                      (0, B.jsx)(`img`, {
                        src: e.img,
                        alt: e.alt,
                        className: `w-full h-full object-cover`,
                        loading: `lazy`,
                      }),
                      (0, B.jsx)(`span`, {
                        className: `absolute top-2 right-2 ${e.color} text-white text-[10px] font-black uppercase tracking-wide px-2 py-1 rounded-full`,
                        children: e.resultado,
                      }),
                    ],
                  }),
                  (0, B.jsxs)(`div`, {
                    className: `p-3`,
                    children: [
                      (0, B.jsx)(`h3`, {
                        className: `text-sm font-bold text-gray-900`,
                        children: e.titulo,
                      }),
                      (0, B.jsx)(`p`, {
                        className: `text-xs text-gray-500 mt-0.5`,
                        children: e.dato,
                      }),
                      (0, B.jsxs)(`p`, {
                        className: `mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-red-700`,
                        children: [
                          (0, B.jsx)(L, { className: `w-3.5 h-3.5` }),
                          `Analizar la mía gratis (PDF 4,99 €)`,
                        ],
                      }),
                    ],
                  }),
                ],
              },
              e.titulo,
            ),
          ),
        }),
      ],
    }),
  });
}
var X = (0, z.lazy)(() =>
    r(() => conConvex(import("./index/_components/AnalizadorMulta.tsx")), __vite__mapDeps([0])),
  ),
  ie = (0, z.lazy)(() =>
    r(() => conConvex(import("./index/_components/AnalizadorSancion.tsx")), __vite__mapDeps([0])),
  ),
  ae = (0, z.lazy)(() =>
    r(() => conConvex(import("./index/_components/VerificadorPago.tsx")), __vite__mapDeps([0])),
  ),
  oe = (0, z.lazy)(() =>
    r(() => import("@/components/Top3VentasMes.tsx"), __vite__mapDeps([0])),
  ),
  se = (0, z.lazy)(() =>
    r(() => import("@/components/caza-monos/SeccionJuegoPortada.tsx"), __vite__mapDeps([0])),
  ),
  ce = (0, z.lazy)(() =>
    r(() => conConvex(import("@/components/NewsletterSignup.tsx")), __vite__mapDeps([0])),
  ),
  Z = (0, z.lazy)(() =>
    r(
      () =>
        import("@/components/motion.tsx").then((e) => ({ default: e.Odometer })),
      [],
    ),
  ),
  le = (0, z.lazy)(() =>
    r(
      () =>
        import("@/components/motion.tsx").then((e) => ({
          default: e.BrandMarquee,
        })),
      [],
    ),
  ),
  ue = (0, z.lazy)(() =>
    r(
      () =>
        import("@/components/motion.tsx").then((e) => ({
          default: e.ScrollyWords,
        })),
      [],
    ),
  ),
  de = [...H]
    .sort((e, t) => new Date(t.date).getTime() - new Date(e.date).getTime())
    .slice(0, 6),
  fe = [
    `BYD`,
    `MG`,
    `Renault`,
    `Peugeot`,
    `Dacia`,
    `Hyundai`,
    `Kia`,
    `Skoda`,
    `BMW`,
    `Audi`,
    `XPeng`,
    `Zeekr`,
  ],
  pe = [
    {
      url: `/media/unsplash-1695866648629-8943afc459df.webp`,
      srcSet: `/media/unsplash-1695866648629-8943afc459df-640.webp 640w, /media/unsplash-1695866648629-8943afc459df.webp 880w`,
      label: `Multa de tráfico`,
    },
    {
      url: `/media/unsplash-1545948548-863537438416.webp`,
      srcSet: `/media/unsplash-1545948548-863537438416.webp 640w, /media/unsplash-1545948548-863537438416.webp 1080w`,
      label: `Semáforo en rojo`,
    },
    {
      url: `/media/unsplash-1605546290557-ff57ffe5abcc.webp`,
      srcSet: `/media/unsplash-1605546290557-ff57ffe5abcc.webp 640w, /media/unsplash-1605546290557-ff57ffe5abcc.webp 1080w`,
      label: `Radar de velocidad`,
    },
    {
      url: `/media/unsplash-1650567695177-168dec1c98a3.webp`,
      srcSet: `/media/unsplash-1650567695177-168dec1c98a3.webp 640w, /media/unsplash-1650567695177-168dec1c98a3.webp 1080w`,
      label: `Policía de tráfico`,
    },
    {
      url: `/media/unsplash-1605355654568-a896fe1d8b35.webp`,
      srcSet: `/media/unsplash-1605355654568-a896fe1d8b35.webp 640w, /media/unsplash-1605355654568-a896fe1d8b35.webp 1080w`,
      label: `Señal de tráfico`,
    },
  ],
  Q = [
    { label: `Exceso velocidad (hasta 20 km/h sobre el límite)`, base: 100 },
    { label: `Exceso velocidad (21-30 km/h sobre el límite)`, base: 300 },
    { label: `Exceso velocidad (31-40 km/h sobre el límite)`, base: 400 },
    { label: `Exceso velocidad (41-50 km/h sobre el límite)`, base: 500 },
    { label: `Exceso velocidad (más de 50 km/h sobre el límite)`, base: 600 },
    { label: `Semáforo en rojo`, base: 200 },
    { label: `Uso del móvil al volante`, base: 200 },
    { label: `No llevar cinturón`, base: 200 },
    { label: `Estacionar en lugar prohibido`, base: 80 },
    { label: `Adelantamiento indebido`, base: 200 },
    { label: `Conducción temeraria`, base: 500 },
  ],
  me = [
    {
      title: `Vicios de forma que anulan una multa DGT`,
      content: `Una multa puede ser anulada por defectos procedimentales o "vicios de forma" que vulneran tu derecho de defensa. Los más frecuentes son: (1) Falta de identificación del agente denunciante — la ley exige que conste el número TIP o placa del agente. (2) Ausencia de firma o sello oficial en la notificación. (3) Notificación defectuosa o fuera de plazo — si la DGT no te notifica correctamente en el plazo establecido, la infracción puede prescribir. (4) Descripción inexacta del vehículo — matrícula errónea, color incorrecto o confusión con otro vehículo. (5) Falta de indicación de la reducción del 50% por pronto pago, que es un derecho reconocido en el art. 94 del RDL 6/2015 (procedimiento sancionador abreviado). (6) Ausencia de la hora exacta de la infracción. Cada uno de estos vicios puede ser suficiente para obtener la nulidad de la sanción.`,
    },
    {
      title: `Plazos de prescripción de multas de tráfico`,
      content: `Según el artículo 112 del Real Decreto Legislativo 6/2015 (Ley de Tráfico), las infracciones leves prescriben a los 3 meses y las graves y muy graves a los 6 meses desde la fecha de la infracción. Si la Administración no inicia el procedimiento en ese plazo, la infracción prescribe. Además, el procedimiento sancionador caduca si transcurren más de 12 meses desde su inicio sin que se dicte resolución. Es importante conocer estos plazos porque puedes recurrir alegando prescripción o caducidad sin necesidad de entrar en el fondo del asunto.`,
    },
    {
      title: `Cómo recurrir una multa DGT paso a paso`,
      content: `1. Recibes la notificación de la multa. 2. Tienes 20 días naturales para pagar con el 50% de descuento O para presentar alegaciones — son incompatibles. 3. Sube la multa a RecurreTuMulta.online y obtén el análisis gratuito con los argumentos legales. 4. Si quieres el PDF listo para firmar, genéralo por 4,99€. 5. Firma el documento y envíalo al órgano que impuso la sanción: por la Sede Electrónica de la DGT (sede.dgt.gob.es) con certificado digital o Cl@ve, por correo certificado o presencialmente. 6. La DGT tiene 1 mes para resolver. Si no contesta, se entiende desestimado (silencio administrativo negativo). 7. Si se desestima, puedes acudir a la vía contencioso-administrativa.`,
    },
    {
      title: `Recurrir multa de radar: argumentos clave`,
      content: `Los radares de velocidad (fijos, móviles, de tramo) deben cumplir requisitos estrictos: homologación y verificación periódica por el organismo competente, señalización previa obligatoria, margen de error técnico aplicado, y correcta identificación del conductor. Puedes recurrir solicitando el certificado de calibración del radar, la hoja de verificación metrológica vigente, y comprobando si la señalización del radar era visible y estaba correctamente instalada. Si el radar no ha pasado la verificación en los últimos 2 años o no estaba debidamente señalizado, la multa puede anularse.`,
    },
    {
      title: `Multa por usar el móvil al volante: cómo recurrir`,
      content: `La multa por uso del teléfono móvil al volante (art. 18.2 RGC) conlleva 200€ y 6 puntos. Para recurrir con éxito debes alegar: (1) El agente debe haberse cerciorado de que el conductor estaba activamente usando el teléfono, no simplemente teniéndolo cerca. (2) Si la infracción fue captada por un sistema automático, debes identificar las coordenadas GPS y verificar que se realizó en vía pública. (3) Si el teléfono era del pasajero o estaba en el soporte del vehículo, puedes aportarlo como prueba. (4) Cualquier error de identificación del conductor o del vehículo invalida la multa.`,
    },
    {
      title: `¿Qué diferencia hay entre recurso de reposición y recurso de alzada?`,
      content: `El recurso de reposición es el primer paso y se presenta ante el mismo órgano que dictó la resolución (la Jefatura Provincial de Tráfico). Tiene un plazo de 1 mes. Es gratuito y no requiere abogado. Si se desestima, puedes interponer recurso contencioso-administrativo (requiere abogado para cuantías superiores a 2.000€). El recurso de alzada, en cambio, se presenta ante el superior jerárquico y es típico de multas de Policía Local o cuando la normativa lo prevé expresamente. RecurreTuMulta.online genera por defecto el recurso de reposición, que es el adecuado para la mayoría de multas de la DGT.`,
    },
    {
      title: `¿Qué tipos de defectos suelen encontrarse en las multas DGT?`,
      content: `Con base en los criterios habituales de revisión administrativa, los defectos más frecuentes que pueden dar lugar a la anulación de una multa son: (1) Notificación fuera de plazo o con errores de forma. (2) Radares sin certificado de calibración metrológica vigente. (3) Señalización de zonas de aparcamiento insuficiente o ambigua. (4) Discrepancias entre el conductor real y el titular del vehículo cuando no hubo notificación al verdadero infractor. (5) Expedientes sancionadores que superaron el plazo de caducidad de 6 meses. RecurreTuMulta.online analiza tu multa en busca de estos posibles defectos, pero cada caso depende de su documentación concreta.`,
    },
  ];
function he() {
  let { t: e } = d(`common`),
    [t, n] = (0, z.useState)(0),
    [i, a] = (0, z.useState)(() => new Set([0])),
    o = (0, z.useRef)(null),
    s = (0, z.useRef)(null);
  return (
    (0, z.useEffect)(() => {
      let e = 0,
        t = () => {
          (cancelAnimationFrame(e),
            (e = requestAnimationFrame(() => {
              let e = window.scrollY;
              (o.current &&
                (o.current.style.transform = `translate3d(0, ${(e * 0.25).toFixed(1)}px, 0)`),
                s.current &&
                  (s.current.style.opacity = String(Math.max(0, 1 - e / 400))));
            })));
        };
      return (
        t(),
        window.addEventListener(`scroll`, t, { passive: !0 }),
        () => {
          (window.removeEventListener(`scroll`, t), cancelAnimationFrame(e));
        }
      );
    }, []),
    (0, z.useEffect)(() => {
      let e = setInterval(() => {
        n((e) => {
          let t = (e + 1) % pe.length;
          return (a((e) => new Set(e).add(t)), t);
        });
      }, 4e3);
      return () => clearInterval(e);
    }, []),
    (0, z.useEffect)(() => {
      let e = !1,
        t = () => {
          e ||
            ((e = !0),
            r(() => import("./blog/[slug].tsx"), __vite__mapDeps([0])).catch(
              () => {},
            ));
        },
        n = (e) => {
          e.target.closest?.(`a[href^="/blog"]`) && t();
        };
      (document.addEventListener(`mouseover`, n, { passive: !0 }),
        document.addEventListener(`touchstart`, n, { passive: !0 }),
        document.addEventListener(`focusin`, n, { passive: !0 }));
      let i = navigator.connection,
        a = !i || (i.effectiveType === `4g` && !i.saveData),
        o = 0;
      return (
        a &&
          `requestIdleCallback` in window &&
          (o = window.requestIdleCallback(t, { timeout: 8e3 })),
        () => {
          (document.removeEventListener(`mouseover`, n),
            document.removeEventListener(`touchstart`, n),
            document.removeEventListener(`focusin`, n),
            o &&
              `cancelIdleCallback` in window &&
              window.cancelIdleCallback(o));
        }
      );
    }, []),
    (0, B.jsx)(q, {})
  );
}
function ge() {
  let { t: e } = d(`common`),
    t = [
      e(`trust.free`),
      e(`trust.detect`),
      e(`trust.pdf`),
      e(`trust.nolawyer`),
      e(`trust.instructions`),
    ];
  return (0, B.jsx)(`div`, {
    className: `bg-red-600 overflow-hidden py-2.5`,
    children: (0, B.jsx)(`div`, {
      className: `anim-marquee flex gap-0 whitespace-nowrap`,
      children: [...t, ...t].map((e, t) =>
        (0, B.jsxs)(
          `span`,
          {
            className: `inline-flex items-center gap-2 px-6 text-white text-xs font-semibold uppercase tracking-widest`,
            children: [(0, B.jsx)(f, { className: `w-3 h-3 shrink-0` }), e],
          },
          t,
        ),
      ),
    }),
  });
}
function $() {
  let { t: e } = d(`common`),
    [t] = (0, z.useState)(
      () =>
        typeof window < `u` &&
        new URLSearchParams(window.location.search).has(`pago`),
    ),
    [n, r] = (0, z.useState)(0),
    [i, a] = (0, z.useState)(null),
    [m, h] = (0, z.useState)(null),
    [b, x] = (0, z.useState)(`multa`);
  k({
    title: `Recurrir multa gratis con IA`,
    description: `Analiza tu multa de tráfico o de la DGT gratis con IA: detectamos posibles errores, plazos y cómo recurrir. Sin compromiso.`,
    canonical: `/`,
    keywords: [
      `recurrir multa DGT gratis`,
      `anular multa tráfico con IA`,
      `recurso reposición multa DGT online`,
      `vicios de forma multa tráfico`,
      `multa DGT cómo recurrir 2026`,
      `recurso multa DGT en 5 minutos`,
      `impugnar multa tráfico gratis`,
      `recurrir multa radar velocidad`,
      `recurrir multa semáforo rojo`,
      `anular multa DGT prescripción`,
    ],
    schema: [
      {
        "@context": `https://schema.org`,
        "@type": `WebSite`,
        "@id": `https://recurretumulta.online/#website`,
        url: `https://recurretumulta.online/`,
        name: `RecurreTuMulta.online`,
        description: `Herramienta de IA para recurrir multas DGT gratis en España`,
        inLanguage: `es-ES`,
        potentialAction: {
          "@type": `SearchAction`,
          target: {
            "@type": `EntryPoint`,
            urlTemplate: `https://recurretumulta.online/multas/{search_term_string}`,
          },
          "query-input": `required name=search_term_string`,
        },
      },
      {
        "@context": `https://schema.org`,
        "@type": `Organization`,
        "@id": `https://recurretumulta.online/#organization`,
        name: `RecurreTuMulta.online`,
        url: `https://recurretumulta.online/`,
        logo: {
          "@type": `ImageObject`,
          url: `/media/file_JCUW0M5ZDov5VKrmqbwPmQSz.png`,
          width: 512,
          height: 512,
        },
        sameAs: [`https://www.tiktok.com/@recurretumulta.online`],
        contactPoint: {
          "@type": `ContactPoint`,
          email: `soporte@recurretumulta.online`,
          contactType: `customer support`,
          availableLanguage: `Spanish`,
        },
      },
      {
        "@context": `https://schema.org`,
        "@type": `SoftwareApplication`,
        name: `RecurreTuMulta.online`,
        applicationCategory: `LegalService`,
        operatingSystem: `Web`,
        url: `https://recurretumulta.online/`,
        description: `Herramienta de inteligencia artificial para recurrir multas de tráfico DGT gratis en España. Análisis gratuito, recurso PDF por 4,99€.`,
        offers: [
          {
            "@type": `Offer`,
            name: `Análisis gratuito`,
            price: `0`,
            priceCurrency: `EUR`,
            availability: "https://schema.org/InStock",
            description: `Análisis de vicios de forma con IA completamente gratuito`,
          },
          {
            "@type": `Offer`,
            name: `Recurso PDF`,
            price: `4.99`,
            priceCurrency: `EUR`,
            availability: "https://schema.org/InStock",
            description: `PDF del recurso de reposición listo para firmar y presentar`,
          },
        ],
      },
      {
        "@context": `https://schema.org`,
        "@type": `FAQPage`,
        mainEntity: [
          {
            "@type": `Question`,
            name: `¿Es realmente gratis el análisis?`,
            acceptedAnswer: {
              "@type": `Answer`,
              text: `Sí, 100% gratis y sin trampa. Subes tu multa, la IA la analiza y te dice qué argumentos tienes, qué probabilidad de éxito hay y cómo presentar el recurso. Sin registrarte, sin tarjeta bancaria. Solo pagas si quieres el PDF listo para firmar (4,99€) — y eso es completamente opcional.`,
            },
          },
          {
            "@type": `Question`,
            name: `¿Qué pasa si mi multa no se puede recurrir?`,
            acceptedAnswer: {
              "@type": `Answer`,
              text: `Te lo decimos claramente. Si el análisis no encuentra defectos con opciones reales de recurso, te recomendamos pagar con el 50% de descuento por pronto pago antes de que venza el plazo. No te vamos a vender un recurso inútil: estamos para ayudarte, no para venderte papeles.`,
            },
          },
          {
            "@type": `Question`,
            name: `¿Qué tipo de multas se pueden recurrir?`,
            acceptedAnswer: {
              "@type": `Answer`,
              text: `Cualquier multa de tráfico de la DGT o del Ayuntamiento: exceso de velocidad, semáforo en rojo, zona azul/verde, teléfono al volante, cinturón, alcoholemia (si hay vicio de forma), etc. La IA analiza la multa y detecta si hay argumentos legales, no importa el tipo.`,
            },
          },
          {
            "@type": `Question`,
            name: `¿Qué garantías tengo? ¿Y si no funciona?`,
            acceptedAnswer: {
              "@type": `Answer`,
              text: `Si el análisis no detecta ningún error legal en tu multa, te lo decimos con total honestidad — no te cobramos nada. Si compras el PDF y la DGT no acepta el recurso por un error en nuestro documento, te devolvemos el importe íntegro.`,
            },
          },
          {
            "@type": `Question`,
            name: `¿Es esto legal? ¿Puedo hacerlo yo mismo?`,
            acceptedAnswer: {
              "@type": `Answer`,
              text: `Sí, completamente legal. Cualquier ciudadano tiene derecho a presentar un recurso de reposición contra una sanción de tráfico (art. 112 y siguientes de la Ley 39/2015, del Procedimiento Administrativo Común). No necesitas abogado ni procurador. RecurreTuMulta.online simplemente te ayuda a redactar ese recurso de forma más completa y con fundamentos legales sólidos.`,
            },
          },
          {
            "@type": `Question`,
            name: `¿La DGT puede aumentar la multa si recurro?`,
            acceptedAnswer: {
              "@type": `Answer`,
              text: `No. La DGT no puede aumentar el importe de la sanción como consecuencia del recurso (principio de non reformatio in peius). Lo máximo que puede ocurrir es que lo desestime y tengas que pagar el importe original.`,
            },
          },
          {
            "@type": `Question`,
            name: `¿Necesito abogado para recurrir una multa DGT?`,
            acceptedAnswer: {
              "@type": `Answer`,
              text: `No es necesario para el recurso de reposición. Es un trámite administrativo que cualquier ciudadano puede hacer por su cuenta. Solo necesitarías abogado si llevas el asunto a la vía contencioso-administrativa (importes muy altos o pérdida de puntos crítica).`,
            },
          },
          {
            "@type": `Question`,
            name: `¿Puedo recurrir si ya pagué la multa?`,
            acceptedAnswer: {
              "@type": `Answer`,
              text: `Si pagaste el importe íntegro sin la reducción del 50%, técnicamente sigues pudiendo recurrir para recuperar el dinero. Si pagaste con el 50% de descuento (pronto pago), renunciaste expresamente al recurso y ya no puedes reclamarlo.`,
            },
          },
          {
            "@type": `Question`,
            name: `¿Qué pasa si no recurro en 20 días?`,
            acceptedAnswer: {
              "@type": `Answer`,
              text: `La multa adquiere firmeza en vía administrativa. Podrías intentar un recurso extraordinario de revisión (causas muy tasadas) o acudir a la vía judicial, pero las posibilidades de éxito se reducen considerablemente. Por eso es importante actuar rápido.`,
            },
          },
          {
            "@type": `Question`,
            name: `¿Cuánto tiempo tengo para recurrir una multa?`,
            acceptedAnswer: {
              "@type": `Answer`,
              text: `Tienes 20 días naturales desde la notificación para presentar el recurso de reposición. Si pagas con el descuento del 50% (pronto pago), renuncias al derecho a recurrir. Actúa rápido.`,
            },
          },
          {
            "@type": `Question`,
            name: `¿Es gratis analizar mi multa en RecurreTuMulta?`,
            acceptedAnswer: {
              "@type": `Answer`,
              text: `Sí. El análisis inicial de tu multa con IA es completamente gratis y sin compromiso: subes una foto o los datos de la multa y en unos 2 minutos recibes un informe orientativo con posibles errores, tus plazos y los próximos pasos. El análisis es orientativo y no sustituye el asesoramiento jurídico profesional.`,
            },
          },
          {
            "@type": `Question`,
            name: `¿Qué plazo tengo para recurrir una multa de tráfico?`,
            acceptedAnswer: {
              "@type": `Answer`,
              text: `Desde que te notifican la denuncia tienes 20 días naturales para presentar alegaciones o pagar con un 50 % de descuento. Si pagas con descuento, renuncias a alegar. Si después llega la resolución sancionadora y no estás conforme, dispones de 1 mes para interponer recurso de reposición. Puedes presentarlas en la <a href="https://sede.dgt.gob.es/es/multas/presentacion-de-alegacion-o-recurso-a-una-multa/">sede electrónica de la DGT</a>.`,
            },
          },
          {
            "@type": `Question`,
            name: `¿Puedo recurrir una multa que ya he pagado con descuento?`,
            acceptedAnswer: {
              "@type": `Answer`,
              text: `No. Al pagar una multa con la reducción del 50 % por pronto pago aceptas la sanción y renuncias a presentar alegaciones, por lo que la vía administrativa queda cerrada. Por eso conviene analizar la multa antes de pagar: en 20 días naturales tienes que decidir entre pagar con descuento o defenderte.`,
            },
          },
          {
            "@type": `Question`,
            name: `¿Qué es un defecto formal en una multa y por qué importa?`,
            acceptedAnswer: {
              "@type": `Answer`,
              text: `Un defecto formal es un error en los datos o en el procedimiento de la denuncia: matrícula incorrecta, fecha o lugar erróneos, precepto infringido mal indicado, falta de identificación del conductor o notificación defectuosa. Estos errores pueden hacer que la sanción sea anulable, por eso el análisis revisa que todos los datos esenciales de tu multa sean correctos.`,
            },
          },
          {
            "@type": `Question`,
            name: `¿Cuándo prescribe una multa de tráfico?`,
            acceptedAnswer: {
              "@type": `Answer`,
              text: `Las infracciones leves prescriben a los 3 meses y las graves y muy graves a los 6 meses desde que se cometen, si la Administración no ha iniciado el procedimiento (artículo 112 del texto refundido de la Ley de Tráfico). Además, si el procedimiento sancionador queda paralizado más de 12 meses sin resolución, el expediente caduca.`,
            },
          },
          {
            "@type": `Question`,
            name: `¿Necesito un abogado para recurrir una multa?`,
            acceptedAnswer: {
              "@type": `Answer`,
              text: `No para las alegaciones ni para el recurso de reposición: puedes presentarlos tú mismo por registro electrónico o presencial. El abogado solo es necesario si decides acudir a la vía judicial (recurso contencioso-administrativo), que tiene un plazo de 2 meses y puede conllevar costas si se desestima la demanda.`,
            },
          },
          {
            "@type": `Question`,
            name: `¿Cómo sé si puedo recurrir mi multa?`,
            acceptedAnswer: {
              "@type": `Answer`,
              text: `Analizándola antes de mover un papel. Si recurres sin más, pierdes el descuento del 50 % por pronto pago. Sube tu multa a nuestro analizador gratuito con IA y descubre si tiene opciones reales de recurso y por qué.`,
            },
          },
          {
            "@type": `Question`,
            name: `¿Qué revisa la IA en mi multa?`,
            acceptedAnswer: {
              "@type": `Answer`,
              text: `Los datos y fechas del boletín, la identificación del conductor, los plazos de notificación, la señalización y los requisitos formales de la normativa. El resultado es orientativo y no sustituye el asesoramiento de un profesional del derecho.`,
            },
          },
        ],
      },
      {
        "@context": `https://schema.org`,
        "@type": `WebApplication`,
        name: `RecurreTuMulta.online — Analizador de multas con IA`,
        url: `https://recurretumulta.online/`,
        applicationCategory: `UtilitiesApplication`,
        operatingSystem: `Web`,
        inLanguage: `es-ES`,
        offers: { "@type": `Offer`, price: `0`, priceCurrency: `EUR`, availability: "https://schema.org/InStock" },
        featureList: `Análisis de multas con inteligencia artificial, detección de defectos de forma, comprobación de plazos de notificación y prescripción, borrador de alegaciones`,
      },
      {
        "@context": `https://schema.org`,
        "@type": `HowTo`,
        name: `Cómo saber si puedes recurrir una multa`,
        description: `Antes de recurrir una multa, analízala: descubre gratis con IA si tiene opciones reales.`,
        inLanguage: `es-ES`,
        step: [
          {
            "@type": `HowToStep`,
            name: `Sube tu multa`,
            text: `Sube una foto o el PDF de tu multa de tráfico o de patinete.`,
          },
          {
            "@type": `HowToStep`,
            name: `La IA la analiza gratis`,
            text: `Nuestra inteligencia artificial revisa defectos de forma, plazos, señalización y normativa aplicable.`,
          },
          {
            "@type": `HowToStep`,
            name: `Descubre si es recurrible`,
            text: `Recibe el veredicto: si tu multa tiene opciones reales de recurso y por qué.`,
          },
        ],
      },
      // 18/10/2026: fuera el BreadcrumbList de un solo elemento (portada): Google pide al menos 2.
    ],
  });
  let L = Q[n].base,
    V = i === `pronto_pago` ? L * 0.5 : L;
  return (0, B.jsxs)(`div`, {
    className: `min-h-screen bg-white text-foreground font-sans`,
    children: [
      t &&
        (0, B.jsx)(z.Suspense, {
          fallback: null,
          children: (0, B.jsx)(ae, {}),
        }),
      (0, B.jsx)(u, { ctaMode: `scroll` }),
      (0, B.jsxs)(`main`, {
        className: `pt-[49px]`,
        children: [
          (0, B.jsxs)(`div`, {
            className: `relative`,
            children: [
              (0, B.jsx)(he, {}),
              (0, B.jsx)(w, {
                id: T(`portada-hero`),
                pose: `mono-fotobomba`,
                size: 40,
                className: `absolute top-3 right-3 z-10`,
                titulo: `¡Un mono haciendo fotobomba en el hero! Haz clic para cazarlo 🦍`,
              }),
            ],
          }),
          (0, B.jsx)(ge, {}),
          (0, B.jsxs)(`div`, {
            className: `max-w-2xl mx-auto px-4 py-10 pb-28 space-y-12`,
            children: [
              (0, B.jsxs)(j, {
                as: `section`,
                id: `analizador`,
                y: 30,
                duration: 600,
                className: `space-y-5`,
                children: [
                  (0, B.jsxs)(`div`, {
                    className: `text-center space-y-1`,
                    children: [
                      (0, B.jsx)(`p`, {
                        className: `text-xs font-bold uppercase tracking-widest text-red-600`,
                        children: e(`tool.label`),
                      }),
                      (0, B.jsx)(`h2`, {
                        className: `text-2xl font-black text-gray-900`,
                        children: e(`tool.title`),
                      }),
                    ],
                  }),
                  (0, B.jsx)(`div`, {
                    className: `flex bg-gray-100 rounded-2xl p-1 gap-1`,
                    children: [
                      [`multa`, _, e(`tool.tab.multa`)],
                      [`sancion`, `scale`, e(`tool.tab.sancion`)],
                    ].map(([e, t, n]) =>
                      (0, B.jsx)(
                        `button`,
                        {
                          onClick: () => x(e),
                          className: `flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold transition-all
                    ${b === e ? `bg-white text-gray-900 shadow-sm` : `text-gray-600 hover:text-gray-800`}`,
                          children: n,
                        },
                        e,
                      ),
                    ),
                  }),
                  b === `multa` &&
                    (0, B.jsx)(M, {
                      swapKey: `multa`,
                      className: `space-y-6`,
                      children: (0, B.jsx)(X, {}),
                    }),
                  b === `sancion` &&
                    (0, B.jsx)(M, {
                      swapKey: `sancion`,
                      className: `space-y-6`,
                      children: (0, B.jsx)(ie, {}),
                    }),
                  (0, B.jsx)(`p`, {
                    className: `text-xs text-gray-600 bg-amber-50 border border-amber-200 rounded-xl p-3 text-center mt-2`,
                    children: `Aviso: el analizador es una herramienta informativa con IA. No es asesoramiento jurídico ni garantiza que la multa se anule; consulta con un abogado si tu caso lo requiere. El análisis es gratis; el recurso en PDF cuesta 4,99 € (opcional).`,
                  }),
                ],
              }),
              (0, B.jsxs)(`p`, {
                className: `mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] font-medium text-gray-400`,
                children: [
                  (0, B.jsx)(E, { size: 16 }),
                  `gestionada por Cosa · 24/7`,
                ],
              }),
              ` `,
              (0, B.jsxs)(j, {
                as: `section`,
                y: 20,
                className: `relative bg-emerald-50/60 border-y border-emerald-100 px-4 py-6`,
                children: [
                  (0, B.jsx)(w, {
                    id: T(`portada-tras-analizador`),
                    pose: `mono-policia`,
                    size: 34,
                    className: `absolute -top-4 right-5 z-10`,
                    titulo: `¡Un policía vigilando el analizador! Haz clic para cazarlo 🦍`,
                  }),
                  ` `,
                  (0, B.jsxs)(`div`, {
                    className: `max-w-2xl mx-auto space-y-4`,
                    children: [
                      ` `,
                      (0, B.jsx)(`p`, {
                        className: `text-xs font-bold uppercase tracking-widest text-emerald-600`,
                        children: `Analizador con IA`,
                      }),
                      ` `,
                      (0, B.jsx)(`h2`, {
                        className: `text-2xl font-black text-gray-900`,
                        children: `Antes de recurrir, analiza tu multa`,
                      }),
                      ` `,
                      (0, B.jsx)(`p`, {
                        className: `text-sm text-gray-600 leading-relaxed`,
                        children: `Recurrir a ciegas sale caro: en cuanto presentas alegaciones pierdes el 50 % de descuento por pronto pago. Por eso el primer paso no es recurrir, es analizar.`,
                      }),
                      ` `,
                      (0, B.jsxs)(`ol`, {
                        className: `space-y-3`,
                        children: [
                          ` `,
                          (0, B.jsxs)(`li`, {
                            className: `flex gap-3 items-start bg-white border border-gray-200 rounded-2xl p-4 shadow-sm`,
                            children: [
                              ` `,
                              (0, B.jsx)(`span`, {
                                className: `shrink-0 w-7 h-7 rounded-full bg-emerald-500 text-white text-sm font-black flex items-center justify-center`,
                                children: `1`,
                              }),
                              ` `,
                              (0, B.jsxs)(`div`, {
                                children: [
                                  ` `,
                                  (0, B.jsx)(`p`, {
                                    className: `text-sm font-bold text-gray-900`,
                                    children: `Sube tu multa`,
                                  }),
                                  ` `,
                                  (0, B.jsx)(`p`, {
                                    className: `text-xs text-gray-600 mt-0.5`,
                                    children: `Una foto o el PDF, de tráfico o de patinete.`,
                                  }),
                                  ` `,
                                ],
                              }),
                              ` `,
                            ],
                          }),
                          ` `,
                          (0, B.jsxs)(`li`, {
                            className: `flex gap-3 items-start bg-white border border-gray-200 rounded-2xl p-4 shadow-sm`,
                            children: [
                              ` `,
                              (0, B.jsx)(`span`, {
                                className: `shrink-0 w-7 h-7 rounded-full bg-emerald-500 text-white text-sm font-black flex items-center justify-center`,
                                children: `2`,
                              }),
                              ` `,
                              (0, B.jsxs)(`div`, {
                                children: [
                                  ` `,
                                  (0, B.jsx)(`p`, {
                                    className: `text-sm font-bold text-gray-900`,
                                    children: `La IA la analiza gratis`,
                                  }),
                                  ` `,
                                  (0, B.jsx)(`p`, {
                                    className: `text-xs text-gray-600 mt-0.5`,
                                    children: `Defectos de forma, plazos, señalización y normativa. En 2 minutos.`,
                                  }),
                                  ` `,
                                ],
                              }),
                              ` `,
                            ],
                          }),
                          ` `,
                          (0, B.jsxs)(`li`, {
                            className: `flex gap-3 items-start bg-white border border-gray-200 rounded-2xl p-4 shadow-sm`,
                            children: [
                              ` `,
                              (0, B.jsx)(`span`, {
                                className: `shrink-0 w-7 h-7 rounded-full bg-emerald-500 text-white text-sm font-black flex items-center justify-center`,
                                children: `3`,
                              }),
                              ` `,
                              (0, B.jsxs)(`div`, {
                                children: [
                                  ` `,
                                  (0, B.jsx)(`p`, {
                                    className: `text-sm font-bold text-gray-900`,
                                    children: `Decide con datos`,
                                  }),
                                  ` `,
                                  (0, B.jsx)(`p`, {
                                    className: `text-xs text-gray-600 mt-0.5`,
                                    children: `Si tiene opciones reales, recurre. Si no, paga con descuento.`,
                                  }),
                                  ` `,
                                ],
                              }),
                              ` `,
                            ],
                          }),
                          ` `,
                        ],
                      }),
                      ` `,
                      (0, B.jsxs)(`button`, {
                        onClick: () =>
                          document
                            .getElementById(`analizador`)
                            ?.scrollIntoView({ behavior: `smooth` }),
                        className: `w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm px-6 py-3.5 rounded-full shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-2 transition-colors`,
                        children: [
                          ` `,
                          (0, B.jsx)(s, { className: `w-4 h-4` }),
                          ` Analizar mi multa gratis `,
                        ],
                      }),
                      ` `,
                    ],
                  }),
                  ` `,
                ],
              }),
              (0, B.jsx)(z.Suspense, {
                fallback: null,
                children: (0, B.jsx)(se, {}),
              }),
              (0, B.jsxs)(j, {
                as: `section`,
                y: 30,
                className: `space-y-5`,
                children: [
                  (0, B.jsxs)(`div`, {
                    className: `text-center space-y-1`,
                    children: [
                      (0, B.jsx)(`p`, {
                        className: `text-xs font-bold uppercase tracking-widest text-red-600`,
                        children: e(`blog.label`),
                      }),
                      (0, B.jsx)(`h2`, {
                        className: `text-2xl font-black text-gray-900`,
                        children: e(`blog.title`),
                      }),
                      (0, B.jsx)(`p`, {
                        className: `text-xs text-gray-400`,
                        children: e(`blog.subtitle`),
                      }),
                    ],
                  }),
                  (0, B.jsx)(`div`, {
                    className: `grid gap-3 sm:grid-cols-2`,
                    children: de.map((e) => {
                      let t = e.heroSrc,
                        n = e.heroAlt || e.title;
                      return (0, B.jsx)(
                        S,
                        {
                          to: hrefDesdeBlog(e.slug),
                          className: `block group`,
                          children: (0, B.jsxs)(`div`, {
                            className: `border border-gray-200 rounded-xl overflow-hidden hover:border-red-200 hover:shadow-sm transition-all bg-white h-full`,
                            children: [
                              (0, B.jsx)(`div`, {
                                className: `aspect-video w-full overflow-hidden bg-gray-100`,
                                children: t
                                  ? (0, B.jsx)(`img`, {
                                      src: P(t),
                                      alt: n,
                                      loading: `lazy`,
                                      decoding: `async`,
                                      sizes: `(max-width: 639px) calc(100vw - 32px), 600px`,
                                      className: `h-full w-full object-cover`,
                                      onError: (e) => {
                                        let n = e.currentTarget;
                                        (window as any).__PRERENDER__ ||
                                          n.dataset.fb ||
                                          ((n.dataset.fb = `1`), (n.src = t));
                                      },
                                    })
                                  : (0, B.jsx)(`div`, {
                                      className: `flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200`,
                                      children: (0, B.jsx)(`img`, {
                                        src: `/media/logo-recurretumulta.webp`,
                                        alt: `RecurreTuMulta.online`,
                                        loading: `lazy`,
                                        className: `h-10 w-auto opacity-70`,
                                      }),
                                    }),
                              }),
                              (0, B.jsxs)(`div`, {
                                className: `p-4 space-y-1.5`,
                                children: [
                                  (0, B.jsx)(A, {
                                    className: `bg-red-50 text-red-600 border-0 text-[10px]`,
                                    children: e.category,
                                  }),
                                  (0, B.jsx)(`p`, {
                                    className: `text-sm font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2`,
                                    children: e.title,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        e.slug,
                      );
                    }),
                  }),
                  (0, B.jsx)(S, {
                    to: `/blog`,
                    className: `block`,
                    children: (0, B.jsxs)(ne, {
                      variant: `secondary`,
                      className: `w-full font-bold rounded-xl gap-2`,
                      children: [
                        (0, B.jsx)(ee, { className: `w-4 h-4` }),
                        e(`blog.viewAll`),
                        (0, B.jsx)(o, { className: `w-3.5 h-3.5` }),
                      ],
                    }),
                  }),
                  // 18/10/2026: enlace a «Favoritos del mes» (ranking de la audiencia).
                  (0, B.jsxs)(S, {
                    to: `/favoritos-del-mes/`,
                    className: `flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-gray-800 transition-colors hover:border-amber-300`,
                    children: [
                      (0, B.jsx)(`span`, { className: `text-xl`, "aria-hidden": `true`, children: `🏆` }),
                      (0, B.jsxs)(`span`, {
                        className: `min-w-0 flex-1`,
                        children: [
                          (0, B.jsx)(`strong`, { className: `block font-bold text-gray-900`, children: `Favoritos del mes` }),
                          `Los coches, motos y patinetes que más gustan a los lectores`,
                        ],
                      }),
                      (0, B.jsx)(o, { className: `w-4 h-4 shrink-0 text-amber-700` }),
                    ],
                  }),
                ],
              }),
              (0, B.jsxs)(j, {
                as: `section`,
                y: 30,
                className: `space-y-5`,
                children: [
                  (0, B.jsx)(oe, {}),
                  (0, B.jsx)(z.Suspense, {
                    fallback: (0, B.jsx)(`div`, { className: `h-12` }),
                    children: (0, B.jsx)(le, { brands: fe }),
                  }),
                ],
              }),
              (0, B.jsxs)(j, {
                as: `section`,
                y: 30,
                className: `space-y-6`,
                children: [
                  (0, B.jsxs)(`div`, {
                    className: `text-center space-y-2`,
                    children: [
                      (0, B.jsx)(`p`, {
                        className: `text-xs font-bold uppercase tracking-widest text-red-600`,
                        children: e(`steps.label`),
                      }),
                      (0, B.jsx)(`h2`, {
                        className: `text-2xl font-black text-gray-900`,
                        children: e(`steps.title`),
                      }),
                    ],
                  }),
                  (0, B.jsx)(`div`, {
                    className: `grid grid-cols-3 gap-4`,
                    children: [
                      {
                        n: `01`,
                        icon: R,
                        title: e(`steps.1.title`),
                        desc: e(`steps.1.desc`),
                      },
                      {
                        n: `02`,
                        icon: s,
                        title: e(`steps.2.title`),
                        desc: e(`steps.2.desc`),
                      },
                      {
                        n: `03`,
                        icon: _,
                        title: e(`steps.3.title`),
                        desc: e(`steps.3.desc`),
                      },
                    ].map(({ n: e, icon: t, title: n, desc: r }, i) =>
                      (0, B.jsxs)(
                        j,
                        {
                          y: 20,
                          delay: i * 150,
                          className: `flex flex-col items-center text-center gap-3`,
                          children: [
                            (0, B.jsxs)(`div`, {
                              className: `relative`,
                              children: [
                                (0, B.jsx)(`div`, {
                                  className: `w-14 h-14 bg-red-50 border-2 border-red-100 rounded-2xl flex items-center justify-center`,
                                  children: (0, B.jsx)(t, {
                                    className: `w-6 h-6 text-red-600`,
                                  }),
                                }),
                                (0, B.jsx)(`span`, {
                                  className: `absolute -top-2 -right-2 w-5 h-5 bg-red-600 text-white text-[10px] font-black rounded-full flex items-center justify-center`,
                                  children: e.slice(1),
                                }),
                              ],
                            }),
                            (0, B.jsxs)(`div`, {
                              children: [
                                (0, B.jsx)(`p`, {
                                  className: `text-xs font-bold text-gray-900`,
                                  children: n,
                                }),
                                (0, B.jsx)(`p`, {
                                  className: `text-xs text-gray-400`,
                                  children: r,
                                }),
                              ],
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
              (0, B.jsx)(F, {
                slotId: I.horizontal,
                format: `horizontal`,
                className: `rounded-xl overflow-hidden`,
              }),
              (0, B.jsxs)(j, {
                as: `section`,
                y: 30,
                id: `precios`,
                className: `space-y-5`,
                children: [
                  (0, B.jsxs)(`div`, {
                    className: `text-center space-y-1`,
                    children: [
                      (0, B.jsx)(`p`, {
                        className: `text-xs font-bold uppercase tracking-widest text-red-600`,
                        children: e(`pricing.label`),
                      }),
                      (0, B.jsx)(`h2`, {
                        className: `text-2xl font-black text-gray-900`,
                        children: e(`pricing.title`),
                      }),
                    ],
                  }),
                  (0, B.jsxs)(`div`, {
                    className: `space-y-3`,
                    children: [
                      (0, B.jsx)(O, {
                        className: `border-2 border-gray-200 shadow-sm`,
                        children: (0, B.jsxs)(D, {
                          className: `p-5 space-y-3`,
                          children: [
                            (0, B.jsxs)(`div`, {
                              className: `flex items-center justify-between`,
                              children: [
                                (0, B.jsx)(`span`, {
                                  className: `font-black text-gray-900`,
                                  children: e(`pricing.pdf.title`),
                                }),
                                (0, B.jsx)(A, {
                                  className: `bg-gray-100 text-gray-600 border-0 text-xs font-bold`,
                                  children: e(`pricing.pdf.badge`),
                                }),
                              ],
                            }),
                            (0, B.jsxs)(`p`, {
                              className: `text-3xl font-black text-gray-900`,
                              children: [
                                `4,99€ `,
                                (0, B.jsx)(`span`, {
                                  className: `text-base font-normal text-gray-400`,
                                  children: e(`pricing.pdf.perUnit`),
                                }),
                              ],
                            }),
                            (0, B.jsx)(`ul`, {
                              className: `space-y-2 text-xs text-gray-500`,
                              children: [
                                e(`pricing.pdf.f1`),
                                e(`pricing.pdf.f2`),
                                e(`pricing.pdf.f3`),
                                e(`pricing.pdf.f4`),
                              ].map((e) =>
                                (0, B.jsxs)(
                                  `li`,
                                  {
                                    className: `flex items-center gap-2`,
                                    children: [
                                      (0, B.jsx)(f, {
                                        className: `w-3.5 h-3.5 text-gray-400 shrink-0`,
                                      }),
                                      e,
                                    ],
                                  },
                                  e,
                                ),
                              ),
                            }),
                          ],
                        }),
                      }),
                      (0, B.jsx)(S, {
                        to: `/empresas`,
                        children: (0, B.jsx)(O, {
                          className: `border-2 border-gray-800 shadow-sm hover:shadow-md transition-shadow cursor-pointer`,
                          children: (0, B.jsxs)(D, {
                            className: `p-5 flex items-center justify-between gap-4`,
                            children: [
                              (0, B.jsxs)(`div`, {
                                className: `space-y-0.5`,
                                children: [
                                  (0, B.jsxs)(`div`, {
                                    className: `flex items-center gap-2`,
                                    children: [
                                      (0, B.jsx)(l, {
                                        className: `w-4 h-4 text-gray-700`,
                                      }),
                                      (0, B.jsx)(`span`, {
                                        className: `font-black text-gray-900 text-sm`,
                                        children: `Plan Empresas`,
                                      }),
                                      (0, B.jsx)(A, {
                                        className: `bg-gray-900 text-white border-0 text-[10px] font-bold`,
                                        children: `FLOTA`,
                                      }),
                                    ],
                                  }),
                                  (0, B.jsx)(`p`, {
                                    className: `text-xs text-gray-500`,
                                    children: `Recursos ilimitados · Asistencia prioritaria · Sin colas`,
                                  }),
                                ],
                              }),
                              (0, B.jsxs)(`div`, {
                                className: `text-right shrink-0`,
                                children: [
                                  (0, B.jsxs)(`p`, {
                                    className: `text-xl font-black text-gray-900`,
                                    children: [
                                      `70€`,
                                      (0, B.jsx)(`span`, {
                                        className: `text-xs font-normal text-gray-400`,
                                        children: `/mes`,
                                      }),
                                    ],
                                  }),
                                  (0, B.jsx)(o, {
                                    className: `w-4 h-4 text-gray-400 ml-auto mt-1`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, B.jsxs)(j, {
                as: `section`,
                y: 20,
                className: `space-y-3`,
                children: [
                  (0, B.jsxs)(`div`, {
                    className: `space-y-1`,
                    children: [
                      (0, B.jsxs)(`p`, {
                        className: `text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-1.5`,
                        children: [
                          (0, B.jsx)(C, { className: `w-3 h-3` }),
                          ` Guía legal DGT`,
                        ],
                      }),
                      (0, B.jsx)(`h2`, {
                        className: `text-xl font-black text-gray-900`,
                        children: `Todo lo que necesitas saber sobre multas de tráfico`,
                      }),
                      (0, B.jsx)(`p`, {
                        className: `text-xs text-gray-400`,
                        children: `Artículos redactados con referencias a la LTSV y el Reglamento General de Circulación.`,
                      }),
                    ],
                  }),
                  (0, B.jsx)(`img`, {
                    src: `/media/analizar-multa-ia-guia-legal.webp`,
                    srcSet: `/media/analizar-multa-ia-guia-legal-640.webp 640w, /media/analizar-multa-ia-guia-legal-960.webp 960w, /media/analizar-multa-ia-guia-legal-1280.webp 1280w, /media/analizar-multa-ia-guia-legal.webp 1920w`,
                    sizes: `(max-width: 640px) calc(100vw - 32px), 640px`,
                    alt: `Análisis de una denuncia de tráfico con lupa y portátil: revisión de vicios de forma antes de recurrir una multa DGT`,
                    width: 1920,
                    height: 1280,
                    className: `w-full h-44 object-cover rounded-2xl`,
                    loading: `lazy`,
                    decoding: `async`,
                  }),
                  (0, B.jsxs)(`p`, {
                    className: `text-xs text-gray-500`,
                    children: [
                      `¿Te suena a chino? Empieza por el`,
                      ` `,
                      (0, B.jsx)(S, {
                        to: `/glosario-multa`,
                        className: `text-red-600 font-semibold hover:underline`,
                        children: `glosario de tu multa`,
                      }),
                      ` `,
                      `o`,
                      ` `,
                      (0, B.jsx)(S, {
                        to: `/buscador-codigo-multa`,
                        className: `text-red-600 font-semibold hover:underline`,
                        children: `busca tu infracción por código`,
                      }),
                      `. ¿Viste un bache o una señal en mal estado?`,
                      ` `,
                      (0, B.jsx)(S, {
                        to: `/reportar-carretera`,
                        className: `text-red-600 font-semibold hover:underline`,
                        children: `Repórtalo gratis`,
                      }),
                      `: presentamos la reclamación por ti.`,
                    ],
                  }),
                  (0, B.jsxs)(`div`, {
                    className: `border border-gray-200 rounded-2xl overflow-hidden shadow-sm`,
                    id: `calculadora`,
                    children: [
                      (0, B.jsxs)(`button`, {
                        onClick: () => h(m === -1 ? null : -1),
                        className: `w-full flex items-center justify-between px-4 py-3.5 text-left bg-white hover:bg-gray-50 transition-colors`,
                        children: [
                          (0, B.jsxs)(`div`, {
                            className: `flex items-center gap-2`,
                            children: [
                              (0, B.jsx)(`span`, {
                                className: `w-5 h-5 bg-red-600 rounded-md flex items-center justify-center shrink-0`,
                                children: (0, B.jsx)(p, {
                                  className: `w-3 h-3 text-white`,
                                }),
                              }),
                              (0, B.jsx)(`span`, {
                                className: `text-xs font-bold text-gray-800`,
                                children: `Calculadora de sanciones DGT`,
                              }),
                            ],
                          }),
                          m === -1
                            ? (0, B.jsx)(g, {
                                className: `w-4 h-4 text-gray-400 shrink-0`,
                              })
                            : (0, B.jsx)(p, {
                                className: `w-4 h-4 text-gray-400 shrink-0`,
                              }),
                        ],
                      }),
                      (0, B.jsx)(N, {
                        open: m === -1,
                        className: `overflow-hidden`,
                        children: (0, B.jsxs)(`div`, {
                          className: `px-4 pb-5 pt-2 bg-gray-50 space-y-4`,
                          children: [
                            (0, B.jsx)(`p`, {
                              className: `text-xs text-gray-500`,
                              children: `Calcula el importe exacto de tu multa según el tipo de infracción y el escenario.`,
                            }),
                            (0, B.jsxs)(`div`, {
                              className: `space-y-1.5`,
                              children: [
                                (0, B.jsx)(`label`, {
                                  className: `text-xs text-gray-500 font-semibold uppercase tracking-wide`,
                                  children: `Tipo de infracción`,
                                }),
                                (0, B.jsx)(`select`, {
                                  value: n,
                                  onChange: (e) => {
                                    (r(Number(e.target.value)), a(null));
                                  },
                                  className: `w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500/30`,
                                  children: Q.map((e, t) =>
                                    (0, B.jsx)(
                                      `option`,
                                      { value: t, children: e.label },
                                      t,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                            (0, B.jsxs)(`div`, {
                              className: `space-y-1.5`,
                              children: [
                                (0, B.jsx)(`label`, {
                                  className: `text-xs text-gray-500 font-semibold uppercase tracking-wide`,
                                  children: `Escenario`,
                                }),
                                (0, B.jsx)(`div`, {
                                  className: `grid grid-cols-3 gap-2`,
                                  children: [
                                    [null, `Sin reducción`],
                                    [`pronto_pago`, `Pronto pago −50%`],
                                  ].map(([e, t]) =>
                                    (0, B.jsx)(
                                      `button`,
                                      {
                                        onClick: () => a(e),
                                        className: `rounded-xl border px-2 py-2.5 text-xs font-semibold transition-all text-center cursor-pointer
                                ${i === e ? `border-red-500 bg-red-50 text-red-600` : `border-gray-200 bg-white text-gray-500 hover:border-gray-300`}`,
                                        children: t,
                                      },
                                      String(e),
                                    ),
                                  ),
                                }),
                              ],
                            }),
                            (0, B.jsx)(`div`, {
                              className: `bg-white border border-gray-200 rounded-2xl p-4 flex items-center justify-between`,
                              children: (0, B.jsxs)(`div`, {
                                children: [
                                  (0, B.jsx)(`p`, {
                                    className: `text-xs text-gray-400`,
                                    children: `Importe estimado`,
                                  }),
                                  (0, B.jsxs)(`p`, {
                                    className: `text-4xl font-black text-gray-900 tabular-nums`,
                                    children: [
                                      V.toFixed(0),
                                      (0, B.jsx)(`span`, {
                                        className: `text-xl ml-0.5 font-bold text-gray-400`,
                                        children: `€`,
                                      }),
                                    ],
                                  }),
                                  i &&
                                    (0, B.jsxs)(`p`, {
                                      className: `text-xs text-gray-400 line-through mt-0.5`,
                                      children: [L, `€ original`],
                                    }),
                                ],
                              }),
                            }),
                            (0, B.jsx)(`p`, {
                              className: `text-xs text-gray-400`,
                              children: `* Estimación orientativa. Importes base según el RDL 6/2015 (Ley de Tráfico) y el Reglamento General de Circulación; el pronto pago no se aplica a todas las infracciones. No constituye asesoramiento jurídico.`,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  me.map((e, t) =>
                    (0, B.jsxs)(
                      `div`,
                      {
                        className: `border border-gray-200 rounded-2xl overflow-hidden shadow-sm`,
                        children: [
                          (0, B.jsxs)(`button`, {
                            onClick: () => h(m === t ? null : t),
                            className: `w-full flex items-center justify-between px-4 py-3.5 text-left bg-white hover:bg-gray-50 transition-colors`,
                            children: [
                              (0, B.jsx)(`span`, {
                                className: `text-xs font-bold text-gray-800 pr-4`,
                                children: e.title,
                              }),
                              m === t
                                ? (0, B.jsx)(g, {
                                    className: `w-4 h-4 text-gray-400 shrink-0`,
                                  })
                                : (0, B.jsx)(p, {
                                    className: `w-4 h-4 text-gray-400 shrink-0`,
                                  }),
                            ],
                          }),
                          (0, B.jsx)(N, {
                            open: m === t,
                            className: `overflow-hidden`,
                            children: (0, B.jsx)(`p`, {
                              className: `px-4 pb-4 pt-1 text-xs text-gray-600 leading-relaxed bg-gray-50`,
                              children: e.content,
                            }),
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                ],
              }),
              (0, B.jsx)(j, {
                as: `section`,
                y: 20,
                className: `px-2 py-4`,
                children: (0, B.jsx)(z.Suspense, {
                  fallback: (0, B.jsx)(`div`, { className: `h-16` }),
                  children: (0, B.jsx)(ue, {
                    text: `Antes de pagar o recurrir, analiza tu multa con IA: decidir con datos siempre sale más barato.`,
                    className: `text-center text-xl sm:text-2xl font-black text-gray-900 leading-snug max-w-lg mx-auto`,
                  }),
                }),
              }),
              (0, B.jsxs)(j, {
                as: `section`,
                y: 20,
                className: `space-y-3`,
                children: [
                  (0, B.jsxs)(`div`, {
                    className: `space-y-1`,
                    children: [
                      (0, B.jsx)(`p`, {
                        className: `text-xs font-bold uppercase tracking-widest text-gray-400`,
                        children: `Preguntas frecuentes`,
                      }),
                      (0, B.jsx)(`h2`, {
                        className: `text-xl font-black text-gray-900`,
                        children: `Todo lo que necesitas saber`,
                      }),
                    ],
                  }),
                  [
                    {
                      q: `¿Es realmente gratis el análisis?`,
                      a: `Sí, 100% gratis y sin trampa. Subes tu multa, la IA la analiza y te dice qué argumentos tienes, qué probabilidad de éxito hay y cómo presentar el recurso. Sin registrarte, sin tarjeta bancaria. Solo pagas si quieres el PDF listo para firmar (4,99€) — y eso es completamente opcional.`,
                    },
                    {
                      q: `¿Qué pasa si mi multa no se puede recurrir?`,
                      a: `Te lo decimos claramente. Si el análisis no encuentra defectos con opciones reales de recurso, te recomendamos pagar con el 50% de descuento por pronto pago antes de que venza el plazo. No te vamos a vender un recurso inútil: estamos para ayudarte, no para venderte papeles.`,
                    },
                    {
                      q: `¿Cómo sé si puedo recurrir mi multa?`,
                      a: `Analizándola antes de mover un papel. Si recurres sin más, pierdes el descuento del 50 % por pronto pago. Sube tu multa a nuestro analizador gratuito con IA y descubre si tiene opciones reales de recurso y por qué.`,
                    },
                    {
                      q: `¿Qué revisa la IA en mi multa?`,
                      a: `Los datos y fechas del boletín, la identificación del conductor, los plazos de notificación, la señalización y los requisitos formales de la normativa. El resultado es orientativo y no sustituye el asesoramiento de un profesional del derecho.`,
                    },
                    {
                      q: `¿Qué tipo de multas se pueden recurrir?`,
                      a: `Cualquier multa de tráfico de la DGT o del Ayuntamiento: exceso de velocidad, semáforo en rojo, zona azul/verde, teléfono al volante, cinturón, alcoholemia (si hay vicio de forma), etc. La IA analiza la multa y detecta si hay argumentos legales, no importa el tipo.`,
                    },
                    {
                      q: `¿Qué garantías tengo? ¿Y si no funciona?`,
                      a: `Si el análisis no detecta ningún error legal en tu multa, te lo decimos con total honestidad — no te cobramos nada. Si compras el PDF y la DGT no acepta el recurso por un error en nuestro documento, te devolvemos el importe íntegro. Nuestro compromiso es la transparencia.`,
                    },
                    {
                      q: `¿Qué hacéis con mis datos y la imagen de mi multa?`,
                      a: `Solo usamos los datos de tu multa para generar el recurso. No los compartimos con terceros, no los vendemos, no los usamos para publicidad. Cumplimos con el RGPD. Puedes solicitar la eliminación de tus datos en cualquier momento enviando un email a soporte@recurretumulta.online.`,
                    },
                    {
                      q: `¿Es esto legal? ¿Puedo hacerlo yo mismo?`,
                      a: `Sí, completamente legal. Cualquier ciudadano tiene derecho a presentar un recurso de reposición contra una sanción de tráfico (art. 112 y siguientes de la Ley 39/2015, del Procedimiento Administrativo Común). No necesitas abogado ni procurador. RecurreTuMulta.online simplemente te ayuda a redactar ese recurso de forma más completa y con fundamentos legales sólidos.`,
                    },
                    {
                      q: `¿La DGT puede aumentar la multa si recurro?`,
                      a: `No. La DGT no puede aumentar el importe de la sanción como consecuencia del recurso (principio de non reformatio in peius). Lo máximo que puede ocurrir es que lo desestime y tengas que pagar el importe original.`,
                    },
                    {
                      q: `¿Necesito abogado para recurrir una multa DGT?`,
                      a: `No es necesario para el recurso de reposición. Es un trámite administrativo que cualquier ciudadano puede hacer por su cuenta. Solo necesitarías abogado si llevas el asunto a la vía contencioso-administrativa (importes muy altos o pérdida de puntos crítica).`,
                    },
                    {
                      q: `¿Puedo recurrir si ya pagué la multa?`,
                      a: `Si pagaste el importe íntegro sin la reducción del 50%, técnicamente sigues pudiendo recurrir para recuperar el dinero. Si pagaste con el 50% de descuento (pronto pago), renunciaste expresamente al recurso y ya no puedes reclamarlo.`,
                    },
                    {
                      q: `¿Qué pasa si no recurro en 20 días?`,
                      a: `La multa adquiere firmeza en vía administrativa. Podrías intentar un recurso extraordinario de revisión (causas muy tasadas) o acudir a la vía judicial, pero las posibilidades de éxito se reducen considerablemente. Por eso es importante actuar rápido.`,
                    },
                    {
                      q: `¿Es gratis analizar mi multa en RecurreTuMulta?`,
                      a: `Sí. El análisis inicial de tu multa con IA es completamente gratis y sin compromiso: subes una foto o los datos de la multa y en unos 2 minutos recibes un informe orientativo con posibles errores, tus plazos y los próximos pasos. El análisis es orientativo y no sustituye el asesoramiento jurídico profesional.`,
                    },
                    {
                      q: `¿Qué plazo tengo para recurrir una multa de tráfico?`,
                      a: `Desde que te notifican la denuncia tienes 20 días naturales para presentar alegaciones o pagar con un 50 % de descuento. Si pagas con descuento, renuncias a alegar. Si después llega la resolución sancionadora y no estás conforme, dispones de 1 mes para interponer recurso de reposición. Puedes presentarlas en la sede electrónica de la DGT: https://sede.dgt.gob.es/es/multas/presentacion-de-alegacion-o-recurso-a-una-multa/`,
                    },
                    {
                      q: `¿Puedo recurrir una multa que ya he pagado con descuento?`,
                      a: `No. Al pagar una multa con la reducción del 50 % por pronto pago aceptas la sanción y renuncias a presentar alegaciones, por lo que la vía administrativa queda cerrada. Por eso conviene analizar la multa antes de pagar: en 20 días naturales tienes que decidir entre pagar con descuento o defenderte.`,
                    },
                    {
                      q: `¿Qué es un defecto formal en una multa y por qué importa?`,
                      a: `Un defecto formal es un error en los datos o en el procedimiento de la denuncia: matrícula incorrecta, fecha o lugar erróneos, precepto infringido mal indicado, falta de identificación del conductor o notificación defectuosa. Estos errores pueden hacer que la sanción sea anulable, por eso el análisis revisa que todos los datos esenciales de tu multa sean correctos.`,
                    },
                    {
                      q: `¿Cuándo prescribe una multa de tráfico?`,
                      a: `Las infracciones leves prescriben a los 3 meses y las graves y muy graves a los 6 meses desde que se cometen, si la Administración no ha iniciado el procedimiento (artículo 112 del texto refundido de la Ley de Tráfico). Además, si el procedimiento sancionador queda paralizado más de 12 meses sin resolución, el expediente caduca.`,
                    },
                    {
                      q: `¿Necesito un abogado para recurrir una multa?`,
                      a: `No para las alegaciones ni para el recurso de reposición: puedes presentarlos tú mismo por registro electrónico o presencial. El abogado solo es necesario si decides acudir a la vía judicial (recurso contencioso-administrativo), que tiene un plazo de 2 meses y puede conllevar costas si se desestima la demanda.`,
                    },
                  ].map(({ q: e, a: t }, n) =>
                    (0, B.jsxs)(
                      `div`,
                      {
                        className: `border border-gray-200 rounded-2xl overflow-hidden shadow-sm`,
                        children: [
                          (0, B.jsxs)(`button`, {
                            onClick: () => h(m === n + 100 ? null : n + 100),
                            className: `w-full flex items-center justify-between px-4 py-3.5 text-left bg-white hover:bg-gray-50 transition-colors`,
                            children: [
                              (0, B.jsx)(`span`, {
                                className: `text-xs font-bold text-gray-800 pr-4`,
                                children: e,
                              }),
                              m === n + 100
                                ? (0, B.jsx)(g, {
                                    className: `w-4 h-4 text-gray-400 shrink-0`,
                                  })
                                : (0, B.jsx)(p, {
                                    className: `w-4 h-4 text-gray-400 shrink-0`,
                                  }),
                            ],
                          }),
                          (0, B.jsx)(N, {
                            open: m === n + 100,
                            className: `overflow-hidden`,
                            children: (0, B.jsx)(`p`, {
                              className: `px-4 pb-4 pt-1 text-xs text-gray-600 leading-relaxed bg-gray-50`,
                              children: t,
                            }),
                          }),
                        ],
                      },
                      n,
                    ),
                  ),
                ],
              }),
              (0, B.jsxs)(j, {
                as: `section`,
                y: 20,
                className: `rounded-2xl border border-gray-200 bg-gray-50 p-5 space-y-4`,
                children: [
                  (0, B.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, B.jsx)(v, {
                        className: `w-5 h-5 text-gray-700 shrink-0`,
                      }),
                      (0, B.jsx)(`h3`, {
                        className: `text-sm font-black text-gray-900`,
                        children: `Tu privacidad y seguridad, primero`,
                      }),
                    ],
                  }),
                  (0, B.jsxs)(`div`, {
                    className: `flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-4`,
                    children: [
                      (0, B.jsx)(`div`, {
                        className: `text-3xl font-black text-gray-900 tabular-nums shrink-0`,
                        children: (0, B.jsx)(z.Suspense, {
                          fallback: (0, B.jsx)(`span`, { children: U }),
                          children: (0, B.jsx)(Z, {
                            value: U,
                            digits: String(U).length,
                          }),
                        }),
                      }),
                      (0, B.jsxs)(`p`, {
                        className: `text-xs text-gray-500 leading-relaxed`,
                        children: [
                          (0, B.jsx)(`span`, {
                            className: `font-bold text-gray-800`,
                            children: `artículos publicados`,
                          }),
                          ` en el blog, con normativa verificada y fuentes oficiales`,
                        ],
                      }),
                    ],
                  }),
                  (0, B.jsx)(`div`, {
                    className: `grid grid-cols-1 gap-3`,
                    children: [
                      {
                        icon: v,
                        title: `Datos protegidos (RGPD)`,
                        desc: `Tus documentos se procesan solo para generar el recurso y no se comparten con terceros.`,
                      },
                      {
                        icon: y,
                        title: `Pagos 100% seguros con Stripe`,
                        desc: `No almacenamos datos de tarjeta. El pago lo gestiona Stripe, líder mundial en pagos seguros.`,
                      },
                      {
                        icon: _,
                        title: `No somos un despacho de abogados`,
                        desc: `Somos una herramienta de IA que te ayuda a redactar. Revisa siempre el documento antes de firmarlo.`,
                      },
                      {
                        icon: c,
                        title: `Soporte real por email`,
                        desc: `Cualquier duda o problema, escríbenos a soporte@recurretumulta.online y respondemos en menos de 24h.`,
                      },
                    ].map(({ icon: e, title: t, desc: n }) =>
                      (0, B.jsxs)(
                        `div`,
                        {
                          className: `flex items-start gap-3`,
                          children: [
                            (0, B.jsx)(`div`, {
                              className: `w-7 h-7 bg-white border border-gray-200 rounded-lg flex items-center justify-center shrink-0 mt-0.5`,
                              children: (0, B.jsx)(e, {
                                className: `w-3.5 h-3.5 text-gray-600`,
                              }),
                            }),
                            (0, B.jsxs)(`div`, {
                              children: [
                                (0, B.jsx)(`p`, {
                                  className: `text-xs font-bold text-gray-800`,
                                  children: t,
                                }),
                                (0, B.jsx)(`p`, {
                                  className: `text-xs text-gray-500 leading-relaxed`,
                                  children: n,
                                }),
                              ],
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                  (0, B.jsxs)(`div`, {
                    className: `flex flex-wrap gap-3 pt-1`,
                    children: [
                      (0, B.jsx)(S, {
                        to: `/privacidad`,
                        className: `text-xs text-red-600 hover:underline font-semibold`,
                        children: `Política de privacidad →`,
                      }),
                      (0, B.jsx)(S, {
                        to: `/terminos`,
                        className: `text-xs text-red-600 hover:underline font-semibold`,
                        children: `Términos y condiciones →`,
                      }),
                      (0, B.jsx)(S, {
                        to: `/cookies`,
                        className: `text-xs text-red-600 hover:underline font-semibold`,
                        children: `Política de cookies →`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, B.jsx)(re, {}),
              (0, B.jsxs)(j, {
                as: `section`,
                y: 20,
                className: `space-y-4`,
                children: [
                  (0, B.jsxs)(`div`, {
                    className: `text-center space-y-1`,
                    children: [
                      (0, B.jsx)(`p`, {
                        className: `text-xs font-bold uppercase tracking-widest text-red-600`,
                        children: `Newsletter semanal`,
                      }),
                      (0, B.jsx)(`h2`, {
                        className: `text-2xl font-black text-gray-900`,
                        children: `La semana del motor en 5 minutos`,
                      }),
                      (0, B.jsxs)(`p`, {
                        className: `text-xs text-gray-500 max-w-md mx-auto`,
                        children: [
                          `Noticias, duelos, modelos nuevos y normativa, cada domingo en tu email.`,
                          ` `,
                          (0, B.jsx)(S, {
                            to: `/newsletter`,
                            className: `text-red-600 font-semibold hover:underline`,
                            children: `Descubre qué incluye →`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, B.jsx)(`div`, {
                    className: `max-w-xl mx-auto`,
                    children: (0, B.jsx)(z.Suspense, {
                      fallback: null,
                      children: (0, B.jsx)(ce, { origen: `portada` }),
                    }),
                  }),
                ],
              }),
              (0, B.jsxs)(`section`, {
                className: `space-y-2 text-sm text-gray-700 leading-relaxed`,
                children: [
                  (0, B.jsx)(`h2`, { className: `text-xl font-black text-gray-900`, children: `Por qué aquí hay multas y fichas de vehículos` }),
                  (0, B.jsx)(`p`, { children: `RecurreTuMulta.online nació para ayudar a conductores con sus multas de tráfico: guías y herramientas basadas en la normativa oficial publicada en el BOE (RDL 6/2015, Ley de Tráfico, y Ley 39/2015) y en la información de la DGT. Las fichas de coches, motos y patinetes completan ese objetivo: etiqueta ambiental DGT, acceso a zonas de bajas emisiones, potencia y datos técnicos que influyen en sanciones, ITV y en qué vehículo te conviene. Cada dato lleva su fuente; si no hay un dato fiable, no lo mostramos.` }),
                ],
              }),
              (0, B.jsx)(te, {}),
],
          }),
        ],
      }),
    ],
  });
}
export default $;
