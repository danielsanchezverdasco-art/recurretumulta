import { HISTORICO_PRECIOS } from "@/lib/historico-precios.ts";

const fmtEur = (v: number) => v.toLocaleString("es-ES") + " €";
const fmtEurDelta = (v: number) =>
  (v < 0 ? "−" : "+") + Math.abs(v).toLocaleString("es-ES") + " €";
const fmtFechaCorta = (iso: string) => {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y.slice(2)}`;
};

/**
 * Gráfico de barras con el histórico de PVP de un modelo.
 * Solo se pinta si hay 2 o más puntos registrados.
 */
export default function HistoricoPrecios({ id }: { id: string }) {
  const raw = HISTORICO_PRECIOS[id];
  if (!raw || raw.length < 2) return null;

  const puntos = [...raw]
    .sort((a, b) => (a.fecha < b.fecha ? -1 : 1))
    .slice(-12);
  const precios = puntos.map((p) => p.precio);
  const min = Math.min(...precios);
  const max = Math.max(...precios);
  const rango = max - min;
  const lo = rango === 0 ? min * 0.9 : min - rango * 0.3;
  const hi = rango === 0 ? max * 1.1 : max + rango * 0.3;

  const W = 400;
  const H = 226;
  const padTop = 38;
  const padBottom = 32;
  const padX = 12;
  const chartH = H - padTop - padBottom;
  const baseY = padTop + chartH;
  const y = (p: number) => padTop + chartH - ((p - lo) / (hi - lo)) * chartH;

  const n = puntos.length;
  const slot = (W - padX * 2) / n;
  const barW = Math.min(58, slot * 0.58);

  const delta = precios[n - 1] - precios[0];
  const deltaCls =
    delta < 0
      ? "bg-green-100 text-green-800"
      : delta > 0
        ? "bg-red-100 text-red-800"
        : "bg-gray-100 text-gray-600";

  return (
    <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-base font-extrabold text-gray-900">
          Histórico de precios
        </h3>
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-bold ${deltaCls}`}
        >
          {fmtEurDelta(delta)} desde {fmtFechaCorta(puntos[0].fecha)}
        </span>
      </div>
      <p className="mt-1 text-xs text-gray-500">
        PVP desde · Fuente: webs oficiales de las marcas
      </p>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mt-2 w-full"
        role="img"
        aria-label={`Histórico de precios: ${puntos.map((p) => `${fmtEur(p.precio)} el ${p.fecha}`).join(", ")}`}
      >
        {/* línea base */}
        <line
          x1={padX}
          y1={baseY}
          x2={W - padX}
          y2={baseY}
          stroke="#d1d5db"
          strokeWidth={1}
        />
        {puntos.map((p, i) => {
          const cx = padX + slot * i + slot / 2;
          const top = y(p.precio);
          const esUltimo = i === n - 1;
          return (
            <g key={p.fecha + "-" + i}>
              <text
                x={cx}
                y={top - 8}
                textAnchor="middle"
                fontSize={12}
                fontWeight={800}
                fill={esUltimo ? "#b91c1c" : "#374151"}
              >
                {fmtEur(p.precio)}
              </text>
              <rect
                x={cx - barW / 2}
                y={top}
                width={barW}
                height={Math.max(4, baseY - top)}
                rx={5}
                fill={esUltimo ? "#dc2626" : "#fca5a5"}
              >
                <title>{`${fmtEur(p.precio)} · ${p.fecha}`}</title>
              </rect>
              <text
                x={cx}
                y={baseY + 18}
                textAnchor="middle"
                fontSize={11}
                fill="#6b7280"
              >
                {fmtFechaCorta(p.fecha)}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
