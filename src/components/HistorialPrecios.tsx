// Historial de precios de una ficha técnica (coches, motos, patinetes y secciones futuras).
// Datos: src/data/historial-precios.json → scripts/historial-precios/gen.mjs →
// src/lib/historial-precios-gen/<inicial>.json (cada ficha carga solo su trozo).
// Gráfico SVG propio (sin librerías): la línea se dibuja al entrar en pantalla y
// respeta prefers-reduced-motion. Tabla HTML con fechas y precios para SEO/GEO.
// Guía para añadir cambios: docs/HISTORIAL-PRECIOS.md
import { useEffect, useRef, useState } from "react";

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
    return `${v.toLocaleString("es-ES")} ${moneda === "EUR" ? "€" : moneda}`;
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
      <span className="font-semibold text-green-800">Seguimiento de precio activo</span>
      <span aria-hidden="true">·</span>
      <span>
        Última comprobación: <time dateTime={fecha}>{txt}</time>
      </span>
    </p>
  );
}

export default function HistorialPrecios({ slug, nombre }: { slug: string; nombre: string }) {
  const [puntos, setPuntos] = useState<PuntoGen[] | null>(null);
  const [animar, setAnimar] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let vivo = true;
    cargarHistorial(slug)
      .then((p) => vivo && setPuntos(p && p.length ? [...p].sort((a, b) => (a.f < b.f ? -1 : 1)) : null))
      .catch(() => vivo && setPuntos(null));
    return () => {
      vivo = false;
    };
  }, [slug]);

  const n = puntos?.length ?? 0;
  useEffect(() => {
    if (n < 2 || !ref.current || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (ents) => {
        if (ents.some((e) => e.isIntersecting)) {
          setAnimar(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [n]);

  if (!puntos || !n) return null;
  const ultimo = puntos[n - 1];
  const moneda = ultimo.m ?? "EUR";
  const aprox = !!ultimo.a;
  const precioTxt = `${aprox ? "≈" : ""}${fmtPrecio(ultimo.p, moneda)}`;

  if (n === 1) {
    return (
      <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-4" data-historial-precios="1">
        <h3 className="text-base font-extrabold text-gray-900">Historial de precios</h3>
        <Seguimiento fecha={ultimo.f} />
        <p className="mt-1 text-sm text-gray-800">
          Precio actual: <strong>{precioTxt}</strong> ({aprox ? "dato aproximado, registrado" : "registrado"}{" "}
          <time dateTime={ultimo.f}>{fmtFecha(ultimo.f)}</time>)
        </p>
        <p className="mt-1 text-xs text-gray-500">
          Todavía no hemos registrado cambios de precio del {nombre}. Cada subida o bajada que detecte nuestro radar
          aparecerá aquí con su fecha y su fuente, y el gráfico se irá completando.
        </p>
      </div>
    );
  }

  // ── Gráfico de línea (eje X proporcional al tiempo) ──
  const W = 360;
  const H = 170;
  const padL = 10;
  const padR = 10;
  const padT = 26;
  const padB = 26;
  const t = puntos.map((p) => Date.parse(p.f + "T00:00:00Z"));
  const t0 = t[0];
  const span = t[n - 1] - t0 || 1;
  const precios = puntos.map((p) => p.p);
  const min = Math.min(...precios);
  const max = Math.max(...precios);
  const rango = max - min || max * 0.1 || 1;
  const lo = min - rango * 0.25;
  const hi = max + rango * 0.25;
  const x = (i: number) => padL + ((t[i] - t0) / span) * (W - padL - padR);
  const y = (v: number) => padT + (1 - (v - lo) / (hi - lo)) * (H - padT - padB);
  const d = puntos.map((p, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(p.p).toFixed(1)}`).join(" ");
  const area = `${d} L${x(n - 1).toFixed(1)},${H - padB} L${x(0).toFixed(1)},${H - padB} Z`;
  const delta = ultimo.p - puntos[0].p;
  const mismaMoneda = puntos.every((p) => (p.m ?? "EUR") === moneda);
  const deltaCls =
    delta < 0 ? "bg-green-100 text-green-800" : delta > 0 ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-600";
  const anchor = (i: number) => (i === 0 ? "start" : i === n - 1 ? "end" : "middle");
  const etiquetar = new Set([0, n - 1, precios.indexOf(min), precios.indexOf(max)]);

  return (
    <div
      ref={ref}
      className={`mt-6 max-w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-4${animar ? " hp-animar" : ""}`}
      data-historial-precios={n}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-base font-extrabold text-gray-900">Historial de precios</h3>
        {mismaMoneda && (
          <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${deltaCls}`}>
            {delta === 0 ? "Sin cambios" : `${delta < 0 ? "−" : "+"}${fmtPrecio(Math.abs(delta), moneda)}`} desde{" "}
            {fmtFecha(puntos[0].f)}
          </span>
        )}
      </div>
      <Seguimiento fecha={ultimo.f} />
      <p className="mt-1 text-sm text-gray-800">
        Precio actual: <strong>{precioTxt}</strong> ({aprox ? "dato aproximado, registrado" : "registrado"}{" "}
        <time dateTime={ultimo.f}>{fmtFecha(ultimo.f)}</time>)
      </p>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mt-2 block h-auto w-full max-w-full"
        role="img"
        aria-label={`Evolución del precio del ${nombre}: ${puntos.map((p) => `${fmtPrecio(p.p, p.m)} el ${fmtFecha(p.f)}`).join("; ")}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <line x1={padL} y1={H - padB} x2={W - padR} y2={H - padB} stroke="#d1d5db" strokeWidth={1} />
        <path d={area} fill="#fee2e2" className="hp-area" />
        <path
          d={d}
          pathLength={1}
          fill="none"
          stroke="#dc2626"
          strokeWidth={2.5}
          strokeLinejoin="round"
          strokeLinecap="round"
          className="hp-linea"
        />
        {puntos.map((p, i) => (
          <g key={p.f} className="hp-punto" style={{ animationDelay: `${(0.9 * (x(i) - padL)) / (W - padL - padR)}s` }}>
            <circle cx={x(i)} cy={y(p.p)} r={i === n - 1 ? 4.5 : 3.5} fill={i === n - 1 ? "#b91c1c" : "#fff"} stroke="#dc2626" strokeWidth={2}>
              <title>{`${fmtPrecio(p.p, p.m)} · ${fmtFecha(p.f)}`}</title>
            </circle>
            {etiquetar.has(i) && (
              <text x={x(i) + (i === n - 1 ? -7 : i === 0 ? 2 : 0)} y={y(p.p) - 9} textAnchor={anchor(i)} fontSize={11} fontWeight={800} fill={i === n - 1 ? "#b91c1c" : "#374151"}>
                {fmtPrecio(p.p, p.m)}
              </text>
            )}
            {(i === 0 || i === n - 1 || n <= 4) && (
              <text x={x(i)} y={H - padB + 16} textAnchor={anchor(i)} fontSize={10} fill="#6b7280">
                {fmtFechaCorta(p.f)}
              </text>
            )}
          </g>
        ))}
      </svg>
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
        Precio de partida{moneda !== "EUR" ? ` (${moneda})` : ""}. Solo registramos cambios con fecha y fuente; nunca
        estimamos precios pasados.
      </p>
    </div>
  );
}
