// 18/10/2026 (rediseño fichas): franja de precio + variación desde el último
// precio registrado + etiqueta DGT + 4 datos clave con icono, y panel lateral
// fijo en escritorio. Solo datos reales: si falta un dato, no se pinta.
import type { ReactNode } from "react";
import { ArrowDownRight, ArrowLeftRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import EtiquetaDGT from "@/components/EtiquetaDGT.tsx";
import { fmtEur, fmtMiles } from "@/lib/formato.ts";
import type { PuntoGen } from "@/lib/historial-precios-cargar.ts";

export interface DatoClave {
  icono: ReactNode;
  valor: string;
  label: string;
}

export interface CambioPrecio {
  diff: number; // € (negativo = ha bajado)
  pct: number;
  desde: string; // fecha AAAA-MM-DD del precio anterior
}

/** Variación del último precio frente al anterior distinto (solo puntos en EUR). */
export function cambioDesdeHistorial(h: PuntoGen[] | null | undefined): CambioPrecio | null {
  if (!h || h.length < 2) return null;
  const pts = h.filter((p) => !p.m || p.m === "EUR").slice().sort((a, b) => a.f.localeCompare(b.f));
  if (pts.length < 2) return null;
  const ult = pts[pts.length - 1];
  for (let i = pts.length - 2; i >= 0; i--) {
    if (pts[i].p !== ult.p) {
      const diff = ult.p - pts[i].p;
      return { diff, pct: (diff / pts[i].p) * 100, desde: pts[i].f };
    }
  }
  return null;
}

const fecha = (f: string) => {
  const [a, m, d] = f.split("-");
  return `${d}/${m}/${a}`;
};

export function PrecioGrande({ precio, aprox, cambio, compacto = false }: { precio: number | null; aprox?: boolean; cambio: CambioPrecio | null; compacto?: boolean }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{aprox ? "Precio estimado desde" : "Precio desde"}</p>
      <p className={`${compacto ? "text-2xl" : "text-3xl sm:text-4xl"} font-black leading-tight text-gray-900`}>
        {precio == null ? <span className="text-xl font-bold text-gray-500">Sin precio oficial</span> : <>{aprox && "≈ "}{fmtEur(precio)}</>}
      </p>
      {precio != null && cambio && (
        <p className="mt-1 text-sm leading-snug">
          <span className={`inline-flex items-center gap-0.5 whitespace-nowrap rounded-full px-2 py-0.5 font-bold ${cambio.diff < 0 ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600"}`}>
            {cambio.diff < 0 ? <ArrowDownRight className="h-4 w-4" aria-hidden="true" /> : <ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
            <span className="sr-only">{cambio.diff < 0 ? "Ha bajado" : "Ha subido"} </span>
            {cambio.diff < 0 ? "−" : "+"}{fmtMiles(Math.abs(cambio.diff))} € ({cambio.pct > 0 ? "+" : "−"}{Math.abs(cambio.pct).toFixed(1).replace(".", ",")} %)
          </span>{" "}
          <span className="whitespace-nowrap text-xs font-medium text-gray-500">desde el {fecha(cambio.desde)}</span>
        </p>
      )}
    </div>
  );
}

export function FranjaPrecio({ precio, aprox, cambio, etiqueta, datos }: {
  precio: number | null;
  aprox?: boolean;
  cambio: CambioPrecio | null;
  etiqueta?: string | null;
  datos: DatoClave[];
}) {
  const visibles = datos.filter((d) => d.valor).slice(0, 4);
  return (
    <div className="mt-4 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <PrecioGrande precio={precio} aprox={aprox} cambio={cambio} />
        </div>
        {etiqueta && <EtiquetaDGT etiqueta={etiqueta} size="md" className="shrink-0" />}
      </div>
      {visibles.length > 0 && (
        <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4" aria-label="Datos clave">
          {visibles.map((d) => (
            <li key={d.label} className="flex items-center gap-2 rounded-2xl bg-gray-50 px-3 py-2">
              <span className="shrink-0 text-red-600" aria-hidden="true">{d.icono}</span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-extrabold text-gray-900">{d.valor}</span>
                <span className="block truncate text-[11px] text-gray-500">{d.label}</span>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Panel lateral fijo (solo escritorio): precio, alerta, comparar y PDF. */
export function PanelLateral({ precio, aprox, cambio, compararHref, alerta, pdf, nombre }: {
  precio: number | null;
  aprox?: boolean;
  cambio: CambioPrecio | null;
  compararHref: string;
  alerta: ReactNode;
  pdf: ReactNode;
  nombre: string;
}) {
  return (
    <aside className="hidden print:hidden lg:block" aria-label={`Precio y acciones del ${nombre}`}>
      <div className="sticky top-32 space-y-3 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-bold text-gray-900">{nombre}</p>
        <PrecioGrande precio={precio} aprox={aprox} cambio={cambio} compacto />
        <div className="flex flex-col gap-2 [&>*]:w-full">
          {alerta}
          <Link to={compararHref} className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-red-600 px-4 py-2.5 text-sm font-bold text-red-600 transition hover:bg-red-50">
            <ArrowLeftRight className="h-4 w-4" /> Comparar
          </Link>
          {pdf}
        </div>
      </div>
    </aside>
  );
}
