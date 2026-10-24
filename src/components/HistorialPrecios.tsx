import { fmtMiles } from "@/lib/formato.ts";
// Historial de precios de una ficha técnica (coches, motos, patinetes y secciones futuras).
// Datos: src/data/historial-precios.json → scripts/historial-precios/gen.mjs →
// src/lib/historial-precios-gen/<inicial>.json (cada ficha carga solo su trozo).
// Gráfico SVG propio tipo bolsa (sin librerías, 18/10/2026): cabecera con precio actual y
// variación ±€ / %, rejilla sutil, área con degradado (verde si baja, rojo si sube, gris si
// no cambia), línea que se dibuja al entrar en pantalla, puntos en cada cambio y tooltip
// con precio y fecha (ratón, toque y teclado ←/→). Respeta prefers-reduced-motion.
// Tabla HTML con fechas y precios para SEO/GEO (va en el HTML prerenderizado).
// Guía para añadir cambios: docs/HISTORIAL-PRECIOS.md
import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

import { cargarHistorial, type PuntoGen } from "@/lib/historial-precios-cargar";

const fmtPrecio = (v: number, moneda = "EUR") => {
  try {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: moneda,
      maximumFractionDigits: Number.isInteger(v) ? 0 : 2,
      minimumFractionDigits: Number.isInteger(v) ? 0 : 2,
      useGrouping: "always",
    } as unknown as Intl.NumberFormatOptions).format(v);
  } catch {
    return `${fmtMiles(v)} ${moneda === "EUR" ? "€" : moneda}`;
  }
};
const fmtFecha = (iso: string) => {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
};
const fmtFechaCorta = (iso: string) => {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y.slice(2)}`;
};
const dominio = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};
const textoFuente = (s?: string) =>
  !s ? "Ficha técnica" : /^https?:\/\//.test(s) ? dominio(s) : s.startsWith("radar-precios") ? "Radar de precios" : s;


// 17/10/2026 (Daniel): punto verde que late + «Seguimiento de precio activo» y la fecha
// del último dato comprobado (el último punto del historial). Solo CSS (.hp-pulso en
// index.css), sin JS; con prefers-reduced-motion no se anima.
function Seguimiento({ fecha }: { fecha: string }) {
  const txt = fmtFecha(fecha);
  return (
    <p
      role="note"
      aria-label={`Seguimiento de precio activo. Última comprobación: ${txt}`}
      className="mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-xs text-gray-600"
    >
      <span className="hp-pulso" aria-hidden="true" />
      <span className="font-semibold text-green-800">Seguimiento</span>
      <span aria-hidden="true">·</span>
      <span>
        <time dateTime={fecha}>{txt}</time>
      </span>
    </p>
  );
}

const fmtPct = (v: number) =>
  `${v < 0 ? "−" : v > 0 ? "+" : ""}${Math.abs(v).toLocaleString("es-ES", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} %`;
const fmtEje = (v: number, moneda: string) => fmtPrecio(v >= 100 ? Math.round(v) : Math.round(v * 100) / 100, moneda);

type Tendencia = "baja" | "sube" | "igual";
const COLORES: Record<Tendencia, { linea: string; punto: string; pill: string; flecha: string }> = {
  baja: { linea: "#16a34a", punto: "#15803d", pill: "bg-green-100 text-green-800", flecha: "▼" },
  sube: { linea: "#dc2626", punto: "#b91c1c", pill: "bg-red-100 text-red-800", flecha: "▲" },
  igual: { linea: "#6b7280", punto: "#4b5563", pill: "bg-gray-100 text-gray-700", flecha: "■" },
};

export default function HistorialPrecios({ slug, nombre }: { slug: string; nombre: string }) {
  const [puntos, setPuntos] = useState<PuntoGen[] | null>(null);
  const [animar, setAnimar] = useState(false);
  const [activo, setActivo] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const cajaRef = useRef<HTMLDivElement | null>(null);
  // Ancho real del gráfico en px: el viewBox se ajusta a él para que textos y trazos no se
  // agranden en escritorio. 360 por defecto (prerender y primer pintado).
  const [ancho, setAncho] = useState(360);

  useEffect(() => {
    let vivo = true;
    setActivo(null);
    cargarHistorial(slug)
      .then((p) => vivo && setPuntos(p && p.length ? [...p].sort((a, b) => (a.f < b.f ? -1 : 1)) : null))
      .catch(() => vivo && setPuntos(null));
    return () => {
      vivo = false;
    };
  }, [slug]);

  const n = puntos?.length ?? 0;
  useEffect(() => {
    if (!n || !ref.current || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (ents) => {
        if (ents.some((e) => e.isIntersecting)) {
          setAnimar(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [n]);

  useEffect(() => {
    const el = cajaRef.current;
    if (!n || !el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver((ents) => {
      const w = Math.round(ents[0]?.contentRect.width ?? 0);
      if (w > 0) setAncho(Math.max(280, Math.min(w, 1200)));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [n]);

  if (!puntos || !n) return null;
  const ultimo = puntos[n - 1];
  const primero = puntos[0];
  const moneda = ultimo.m ?? "EUR";
  const aprox = !!ultimo.a;
  const precioTxt = `${aprox ? "≈" : ""}${fmtPrecio(ultimo.p, moneda)}`;
  const mismaMoneda = puntos.every((p) => (p.m ?? "EUR") === moneda);
  const delta = mismaMoneda ? ultimo.p - primero.p : 0;
  const pct = mismaMoneda && primero.p ? (delta / primero.p) * 100 : 0;
  const tend: Tendencia = delta < 0 ? "baja" : delta > 0 ? "sube" : "igual";
  const col = COLORES[tend];
  const unico = n === 1;

  // ── Geometría (eje X proporcional al tiempo; con 1 punto, línea plana de referencia) ──
  const W = ancho;
  const H = ancho >= 600 ? 230 : 180;
  const padL = 8;
  const padR = 58; // eje de precios a la derecha, como en los gráficos de bolsa
  const padT = 14;
  const padB = 24;
  const anchoUtil = W - padL - padR;
  const t = puntos.map((p) => Date.parse(p.f + "T00:00:00Z"));
  const t0 = t[0];
  const span = t[n - 1] - t0 || 1;
  const precios = puntos.map((p) => p.p);
  const min = Math.min(...precios);
  const max = Math.max(...precios);
  const rango = max - min || Math.abs(max) * 0.05 || 1;
  const lo = min - rango * 0.35;
  const hi = max + rango * 0.35;
  const x = (i: number) => (unico ? W - padR : padL + ((t[i] - t0) / span) * anchoUtil);
  const y = (v: number) => padT + (1 - (v - lo) / (hi - lo)) * (H - padT - padB);
  const base = H - padB;
  const d = unico
    ? `M${padL},${y(ultimo.p).toFixed(1)} L${x(0).toFixed(1)},${y(ultimo.p).toFixed(1)}`
    : puntos.map((p, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(p.p).toFixed(1)}`).join(" ");
  const xIni = unico ? padL : x(0);
  const area = `${d} L${x(n - 1).toFixed(1)},${base} L${xIni.toFixed(1)},${base} Z`;
  const gradId = `hpg-${slug.replace(/[^a-z0-9-]/gi, "")}`;
  // Rejilla con valores redondos (1, 2, 2,5 o 5 × 10^k)
  const bruto = (hi - lo) / 4;
  const mag = 10 ** Math.floor(Math.log10(bruto));
  const paso = ([1, 2, 2.5, 5, 10].find((m) => m * mag >= bruto) ?? 10) * mag;
  const ticks: number[] = [];
  for (let v = Math.ceil(lo / paso) * paso; v <= hi + 1e-9; v += paso) ticks.push(Math.round(v * 100) / 100);

  // ── Tooltip (ratón / toque / teclado) ──
  const masCercano = (clientX: number) => {
    const svg = svgRef.current;
    if (!svg) return null;
    const r = svg.getBoundingClientRect();
    if (!r.width) return null;
    const vx = ((clientX - r.left) / r.width) * W;
    let mejor = 0;
    for (let i = 1; i < n; i++) if (Math.abs(x(i) - vx) < Math.abs(x(mejor) - vx)) mejor = i;
    return mejor;
  };
  const onPointer = (e: PointerEvent<SVGSVGElement>) => {
    const i = masCercano(e.clientX);
    if (i != null) setActivo(i);
  };
  const onKey = (e: KeyboardEvent<SVGSVGElement>) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      const paso = e.key === "ArrowLeft" ? -1 : 1;
      setActivo((a) => Math.min(n - 1, Math.max(0, (a ?? (paso < 0 ? n : -1)) + paso)));
    } else if (e.key === "Escape") setActivo(null);
  };
  const pa = activo != null && activo < n ? puntos[activo] : null;
  const paPrev = activo ? puntos[activo - 1] : null;
  const paDif = pa && paPrev && (paPrev.m ?? "EUR") === (pa.m ?? "EUR") ? pa.p - paPrev.p : null;
  const tipX = activo != null ? (x(activo) / W) * 100 : 0;
  const tipY = pa ? (y(pa.p) / H) * 100 : 0;
  const tipAlign = tipX < 28 ? "translateX(-8%)" : tipX > 72 ? "translateX(-92%)" : "translateX(-50%)";

  return (
    <div
      ref={ref}
      className={`hp-bolsa mt-6 max-w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm${animar ? " hp-animar" : ""}`}
      data-historial-precios={n}
      data-tendencia={tend}
    >
      {/* Cabecera tipo cotización: precio actual grande + variación ±€ / % */}
      <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
        <div className="min-w-0">
          <h3 className="text-xs font-bold tracking-wide text-gray-500 uppercase">Historial de precios</h3>
          <p className="mt-0.5 text-2xl leading-tight font-extrabold text-gray-900 tabular-nums sm:text-3xl">
            {precioTxt}
          </p>
        </div>
        {mismaMoneda && (
          <div className="flex flex-col items-start sm:items-end sm:text-right">
            <span className={`inline-flex items-center gap-1 rounded-lg px-2 py-1 text-sm font-bold tabular-nums ${col.pill}`}>
              <span aria-hidden="true" className="text-[0.65rem]">
                {col.flecha}
              </span>
              {unico || delta === 0
                ? "Sin cambios"
                : `${delta < 0 ? "−" : "+"}${fmtPrecio(Math.abs(delta), moneda)} (${fmtPct(pct)})`}
            </span>
            <span className="mt-0.5 text-[0.7rem] text-gray-500">
              desde <time dateTime={primero.f}>{fmtFecha(primero.f)}</time>
            </span>
          </div>
        )}
      </div>
      <Seguimiento fecha={ultimo.f} />
      <p className="mt-1 text-sm text-gray-800">
        <strong>{precioTxt}</strong> (consultado el{" "}
        <time dateTime={ultimo.f}>{fmtFecha(ultimo.f)}</time>)
      </p>

      {/* 18/10/2026: con menos de 2 precios reales no se dibuja el gráfico (cabecera, punto verde de Seguimiento y tabla se mantienen) */}
      {!unico && (
      <div ref={cajaRef} className="relative mt-3">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="hp-svg block h-auto w-full max-w-full touch-pan-y select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
          role="img"
          tabIndex={0}
          aria-label={`Evolución del precio del ${nombre}: ${puntos.map((p) => `${fmtPrecio(p.p, p.m)} el ${fmtFecha(p.f)}`).join("; ")}. Usa las flechas para recorrer los puntos.`}
          preserveAspectRatio="xMidYMid meet"
          onPointerMove={onPointer}
          onPointerDown={onPointer}
          onPointerLeave={(e) => e.pointerType === "mouse" && setActivo(null)}
          onKeyDown={onKey}
          onBlur={() => setActivo(null)}
        >
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={col.linea} stopOpacity={0.32} />
              <stop offset="70%" stopColor={col.linea} stopOpacity={0.08} />
              <stop offset="100%" stopColor={col.linea} stopOpacity={0} />
            </linearGradient>
          </defs>
          {/* Rejilla sutil + eje de precios */}
          {ticks.map((v) => (
            <g key={v}>
              <line x1={padL} x2={W - padR} y1={y(v)} y2={y(v)} stroke="#e5e7eb" strokeWidth={1} strokeDasharray="3 4" />
              <text x={W - padR + 6} y={y(v) + 3.5} fontSize={10} fill="#9ca3af" className="tabular-nums">
                {fmtEje(v, moneda)}
              </text>
            </g>
          ))}
          <line x1={padL} y1={base} x2={W - padR} y2={base} stroke="#d1d5db" strokeWidth={1} />
          <path d={area} fill={`url(#${gradId})`} className="hp-area" />
          <path
            d={d}
            pathLength={1}
            fill="none"
            stroke={col.linea}
            strokeWidth={2.5}
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeDasharray={unico ? "0.02 0.015" : undefined}
            className={unico ? "hp-linea-plana" : "hp-linea"}
          />
          {/* Jeep vectorial original (sin marcas) que recorre la línea mientras se dibuja: CSS
              offset-path con la misma ruta, offset-rotate auto (se inclina con la pendiente) y
              termina en el último punto. Sin .hp-animar / reduced-motion: quieto al final. */}
          <g className="hp-jeep" style={{ offsetPath: `path("${d}")` }} aria-hidden="true" pointerEvents="none">
            <g transform="translate(-15,0.5)">
              <path d="M-13,-5 L-13,-11 L-6,-11 L-3,-17 L7,-17 L9,-11 L13,-10 L14,-5 Z" fill={col.punto} stroke="#111827" strokeWidth={1} strokeLinejoin="round" />
              <path d="M-2,-15.5 L1.5,-15.5 L1.5,-11.5 L-4,-11.5 Z M3,-15.5 L6,-15.5 L7.5,-11.5 L3,-11.5 Z" fill="#dbeafe" />
              <rect x={-16} y={-13} width={3} height={6} rx={1} fill="#374151" />
              <rect x={12} y={-9} width={2.5} height={2} fill="#fde047" />
              <circle cx={-7.5} cy={-4.5} r={4.5} fill="#111827" />
              <circle cx={7.5} cy={-4.5} r={4.5} fill="#111827" />
              <circle cx={-7.5} cy={-4.5} r={1.8} fill="#d1d5db" />
              <circle cx={7.5} cy={-4.5} r={1.8} fill="#d1d5db" />
            </g>
          </g>
          {/* Cursor vertical del tooltip */}
          {pa && (
            <line x1={x(activo!)} x2={x(activo!)} y1={padT - 6} y2={base} stroke="#9ca3af" strokeWidth={1} strokeDasharray="2 3" />
          )}
          {puntos.map((p, i) => {
            const ult = i === n - 1;
            const act = i === activo;
            return (
              <g
                key={p.f}
                className="hp-punto"
                style={{ animationDelay: `${unico ? 0.9 : 0.15 + (0.9 * (x(i) - padL)) / anchoUtil}s` }}
              >
                {ult && <circle cx={x(i)} cy={y(p.p)} r={9} fill={col.linea} opacity={0.18} className="hp-halo" />}
                <circle
                  cx={x(i)}
                  cy={y(p.p)}
                  r={act ? 6 : ult ? 4.5 : 3.5}
                  fill={ult || act ? col.punto : "#fff"}
                  stroke={col.linea}
                  strokeWidth={2}
                />
              </g>
            );
          })}
          {/* Fechas del eje X (inicio y fin) */}
          {unico ? (
            <text x={x(0)} y={base + 16} textAnchor="end" fontSize={10} fill="#6b7280">
              {fmtFechaCorta(ultimo.f)}
            </text>
          ) : (
            <>
              <text x={x(0)} y={base + 16} textAnchor="start" fontSize={10} fill="#6b7280">
                {fmtFechaCorta(primero.f)}
              </text>
              <text x={x(n - 1)} y={base + 16} textAnchor="end" fontSize={10} fill="#6b7280">
                {fmtFechaCorta(ultimo.f)}
              </text>
            </>
          )}
        </svg>
        {pa && (
          <div
            role="status"
            className="pointer-events-none absolute z-10 rounded-lg bg-gray-900 px-2.5 py-1.5 text-xs whitespace-nowrap text-white shadow-lg"
            style={{ left: `${tipX}%`, top: `${tipY}%`, transform: `${tipAlign} translateY(calc(-100% - 12px))` }}
          >
            <div className="font-bold tabular-nums">
              {pa.a ? "≈" : ""}
              {fmtPrecio(pa.p, pa.m)}
              {paDif != null && paDif !== 0 && (
                <span className={paDif < 0 ? "ml-1.5 text-green-300" : "ml-1.5 text-red-300"}>
                  {paDif < 0 ? "−" : "+"}
                  {fmtPrecio(Math.abs(paDif), pa.m)}
                </span>
              )}
            </div>
            <div className="text-gray-300">
              <time dateTime={pa.f}>{fmtFecha(pa.f)}</time>
            </div>
          </div>
        )}
      </div>
      )}

      {unico ? (
        <p className="mt-2 text-xs text-gray-500">
          Sin cambios registrados.
        </p>
      ) : null}
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-left text-xs text-gray-700">
          <caption className="sr-only">Historial de precios del {nombre}</caption>
          <thead>
            <tr className="border-b border-gray-200 text-gray-500">
              <th scope="col" className="py-1 pr-2 font-semibold">Fecha</th>
              <th scope="col" className="py-1 pr-2 font-semibold">Precio</th>
              <th scope="col" className="py-1 pr-2 font-semibold">Cambio</th>
              <th scope="col" className="py-1 font-semibold">Fuente</th>
            </tr>
          </thead>
          <tbody>
            {puntos.map((p, i) => {
              const prev = i ? puntos[i - 1] : null;
              const dif = prev && (prev.m ?? "EUR") === (p.m ?? "EUR") ? p.p - prev.p : null;
              return (
                <tr key={p.f} className="border-b border-gray-100 last:border-0">
                  <td className="py-1 pr-2 whitespace-nowrap">
                    <time dateTime={p.f}>{fmtFecha(p.f)}</time>
                  </td>
                  <td className="py-1 pr-2 font-bold whitespace-nowrap text-gray-900">
                    {p.a ? "≈" : ""}
                    {fmtPrecio(p.p, p.m)}
                  </td>
                  <td className={`py-1 pr-2 whitespace-nowrap ${dif == null || dif === 0 ? "text-gray-400" : dif < 0 ? "text-green-700" : "text-red-700"}`}>
                    {dif == null ? "—" : dif === 0 ? "=" : `${dif < 0 ? "−" : "+"}${fmtPrecio(Math.abs(dif), p.m)}`}
                  </td>
                  <td className="py-1 break-all">
                    {p.s && /^https?:\/\//.test(p.s) ? (
                      <a href={p.s} rel="nofollow noopener" target="_blank" className="underline hover:text-gray-900">
                        {dominio(p.s)}
                      </a>
                    ) : (
                      textoFuente(p.s)
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-gray-500">
        Precio de partida{moneda !== "EUR" ? ` (${moneda})` : ""}.
      </p>
    </div>
  );
}
