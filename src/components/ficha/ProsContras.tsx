// 18/10/2026 (rediseño fichas): pros y contras siempre visibles (antes FlipCard).
import { CheckCircle2, XCircle } from "lucide-react";

export default function ProsContras({ pros, contras, id = "pros-contras" }: { pros: string[]; contras: string[]; id?: string }) {
  if (!pros.length && !contras.length) return null;
  return (
    <section id={id} className="mt-8 scroll-mt-32 grid gap-4 sm:grid-cols-2" aria-label="Puntos fuertes y débiles">
      {pros.length > 0 && (
        <div className="rtm-card rounded-3xl border border-emerald-200 bg-emerald-50 p-4 sm:p-6">
          <h2 className="flex items-center gap-1.5 text-lg font-extrabold text-emerald-700">
            <CheckCircle2 className="h-5 w-5" /> Puntos fuertes
          </h2>
          <ul className="mt-3 space-y-2">
            {pros.map((p, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {contras.length > 0 && (
        <div className="rtm-card rounded-3xl border border-red-200 bg-red-50 p-4 sm:p-6">
          <h2 className="flex items-center gap-1.5 text-lg font-extrabold text-red-600">
            <XCircle className="h-5 w-5" /> Puntos débiles
          </h2>
          <ul className="mt-3 space-y-2">
            {contras.map((p, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700">
                <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
