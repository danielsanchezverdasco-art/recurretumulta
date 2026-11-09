import { Trophy } from "lucide-react";
import EtiquetaDGT from "@/components/EtiquetaDGT.tsx";

/**
 * Tabla comparativa compacta para móvil: una fila por especificación con
 * columnas «A | B» y el ganador de cada fila destacado. En escritorio las
 * mitades ya van lado a lado, así que este componente solo se muestra en
 * móvil (el padre lo envuelve con `lg:hidden`).
 */
export interface FilaComparativa<T> {
  label: string;
  get: (x: T) => string;
}

/** Renderiza el valor de una fila: badge visual para la etiqueta DGT, texto para el resto. */
function ValorFila<T>({ fila, item }: { fila: FilaComparativa<T>; item: T }) {
  if (fila.label === "Etiqueta DGT") {
    const etiqueta = (item as { etiquetaDgt?: string | null }).etiquetaDgt;
    if (etiqueta) return <EtiquetaDGT etiqueta={etiqueta} size="sm" />;
  }
  return <>{fila.get(item)}</>;
}

export default function TablaComparativaMovil<T, F extends FilaComparativa<T>>({
  filas,
  ganador,
  a,
  b,
  nombreA,
  nombreB,
}: {
  filas: F[];
  ganador: (f: F, a: T, b: T) => 0 | 1 | -1;
  a: T;
  b: T;
  nombreA: string;
  nombreB: string;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-900 text-white">
            <th className="px-3 py-2.5 text-left text-xs font-bold uppercase tracking-wide">
              Especificación
            </th>
            <th className="px-2 py-2.5 text-right text-xs font-bold">
              <span className="mr-1 inline-block rounded bg-white/20 px-1.5 py-0.5">A</span>
              {nombreA}
            </th>
            <th className="px-3 py-2.5 text-right text-xs font-bold">
              <span className="mr-1 inline-block rounded bg-emerald-400/30 px-1.5 py-0.5">B</span>
              {nombreB}
            </th>
          </tr>
        </thead>
        <tbody>
          {filas.map((f, i) => {
            const g = ganador(f, a, b);
            const ganaA = g === 0;
            const ganaB = g === 1;
            return (
              <tr key={f.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <th className="px-3 py-2 text-left align-top font-medium text-gray-500">
                  {f.label}
                </th>
                <td
                  className={`px-2 py-2 text-right align-top font-semibold ${
                    ganaA ? "text-emerald-700" : "text-gray-900"
                  }`}
                >
                  <span
                    className={`inline-flex items-center gap-1 rounded-lg px-1.5 py-0.5 ${
                      ganaA ? "bg-emerald-100" : ""
                    }`}
                  >
                    {ganaA && <Trophy className="h-3.5 w-3.5 shrink-0" />}
                    <ValorFila fila={f} item={a} />
                  </span>
                </td>
                <td
                  className={`px-3 py-2 text-right align-top font-semibold ${
                    ganaB ? "text-emerald-700" : "text-gray-900"
                  }`}
                >
                  <span
                    className={`inline-flex items-center gap-1 rounded-lg px-1.5 py-0.5 ${
                      ganaB ? "bg-emerald-100" : ""
                    }`}
                  >
                    {ganaB && <Trophy className="h-3.5 w-3.5 shrink-0" />}
                    <ValorFila fila={f} item={b} />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
