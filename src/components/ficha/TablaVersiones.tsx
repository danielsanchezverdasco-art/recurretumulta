// 18/10/2026 (rediseño fichas): tabla de versiones con precio. Solo se pinta si
// la ficha trae versiones[] reales (nunca se inventan; sin datos = oculta).
import { fmtEur } from "@/lib/formato.ts";

export interface VersionFicha {
  nombre: string;
  precio: number | null;
  potenciaCv?: number | null;
  autonomiaKm?: number | null;
  consumo?: string | null;
  aprox?: boolean;
}

export default function TablaVersiones({ versiones, nombre }: { versiones?: VersionFicha[] | null; nombre: string }) {
  const vs = (versiones ?? []).filter((v) => v && v.nombre);
  if (vs.length === 0) return null;
  const conCv = vs.some((v) => v.potenciaCv != null);
  const conKm = vs.some((v) => v.autonomiaKm != null);
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full min-w-[300px] text-sm">
        <caption className="mb-2 text-left text-sm font-bold text-gray-900">Versiones del {nombre} y precios</caption>
        <thead>
          <tr className="bg-gray-100 text-left text-xs uppercase tracking-wide text-gray-500">
            <th className="px-3 py-2">Versión</th>
            {conCv && <th className="px-3 py-2 text-right">CV</th>}
            {conKm && <th className="px-3 py-2 text-right">Autonomía</th>}
            <th className="px-3 py-2 text-right">Precio</th>
          </tr>
        </thead>
        <tbody>
          {vs.map((v, i) => (
            <tr key={v.nombre + i} className={i % 2 ? "bg-gray-50" : "bg-white"}>
              <td className="px-3 py-2 font-semibold text-gray-900">{v.nombre}</td>
              {conCv && <td className="px-3 py-2 text-right">{v.potenciaCv ?? "—"}</td>}
              {conKm && <td className="px-3 py-2 text-right">{v.autonomiaKm != null ? `${v.autonomiaKm} km` : "—"}</td>}
              <td className="px-3 py-2 text-right font-bold">{v.precio != null ? `${v.aprox ? "≈ " : ""}${fmtEur(v.precio)}` : "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
