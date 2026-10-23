// Plan de mantenimiento oficial de la ficha (estándar 2026-10-07, orden de Daniel).
// Componente presentacional compartido por fichas de coches y motos.
// Muestra intervalo, tabla de revisiones (qué se cambia + coste) y coste anual.
import { CalendarClock } from "lucide-react";
import { fmtMiles } from "@/lib/formato.ts";

export interface RevisionPlan {
  nombre: string;
  queSeCambia: string;
  costeAproxEur: number | null;
}

export interface PlanMantenimientoData {
  intervalo: string;
  revisiones: RevisionPlan[];
  costeAnualAproxEur?: number | null;
  fuente?: string | null;
}

export default function PlanMantenimiento({
  plan,
  nombre,
}: {
  plan: PlanMantenimientoData;
  nombre: string;
}) {
  return (
    <section
      className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6"
      aria-label={`Plan de mantenimiento oficial del ${nombre}`}
    >
      <h2 className="flex items-center gap-2 text-xl font-extrabold text-gray-900">
        <CalendarClock className="h-5 w-5 text-red-600" /> Plan de mantenimiento oficial
      </h2>
      <p className="mt-1 text-sm text-gray-600">
        🗓️ Intervalo: <strong className="text-gray-900">{plan.intervalo}</strong>
      </p>
      {plan.revisiones.length > 0 && (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left text-xs uppercase tracking-wide text-gray-500">
                <th className="py-2 pr-3 font-bold">Revisión</th>
                <th className="py-2 pr-3 font-bold">Qué se cambia</th>
                <th className="py-2 text-right font-bold">Coste aprox.</th>
              </tr>
            </thead>
            <tbody>
              {plan.revisiones.map((r, i) => (
                <tr key={i} className="border-b border-gray-100 last:border-0">
                  <td className="py-2.5 pr-3 font-semibold text-gray-900">{r.nombre}</td>
                  <td className="py-2.5 pr-3 text-gray-600">{r.queSeCambia}</td>
                  <td className="py-2.5 text-right font-bold whitespace-nowrap text-gray-900">
                    {r.costeAproxEur != null ? `${fmtMiles(r.costeAproxEur)} €` : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {plan.costeAnualAproxEur != null && (
        <p className="mt-3 text-sm text-gray-700">
          💰 Coste anual aproximado:{" "}
          <strong className="text-gray-900">
            {fmtMiles(plan.costeAnualAproxEur)} €
          </strong>
        </p>
      )}
      {plan.fuente && <p className="mt-1 text-xs text-gray-500">Fuente: {plan.fuente}</p>}
    </section>
  );
}
