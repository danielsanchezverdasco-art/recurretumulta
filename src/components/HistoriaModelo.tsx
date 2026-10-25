import { useEffect, useState } from "react";
import type { HistoriaModelo as HistoriaModeloData } from "@/lib/historia-modelos.ts";

import { loadRecordEntry } from "@/lib/data-loader-utils.ts";
import { History } from "lucide-react";

const ETIQUETAS: Record<string, string> = {
  lanzamiento: "Lanzamiento de la generación",
  restyling: "Restyling",
  fin: "Fin de producción",
};

export default function HistoriaModelo({ fichaId, nombre }: { fichaId: string; nombre: string }) {
  // Carga perezosa (05/10/2026): solo el registro de este modelo vía chunk
  // dedicado, no todo el histórico. Mientras carga no se renderiza nada.
  const [h, setH] = useState<HistoriaModeloData | null | undefined>(undefined);
  useEffect(() => {
    let alive = true;
    loadRecordEntry<HistoriaModeloData>("historia", fichaId).then((v) => {
      if (alive) setH(v ?? null);
    });
    return () => {
      alive = false;
    };
  }, [fichaId]);

  if (h === undefined) return null;
  if (!h || h.lanzamiento == null || h.hitos.length === 0) return null;
  return (
    <section className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6" aria-label={`Historia del ${nombre}`}>
      <h2 className="flex items-center gap-2 text-xl font-extrabold text-gray-900">
        <History className="h-5 w-5 text-red-600" /> Historia del modelo
      </h2>
      <ol className="mt-4 space-y-4">
        {h.hitos.map((hito) => (
          <li key={`${hito.anio}-${hito.tipo}`} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-black text-white">
                {String(hito.anio).slice(2)}
              </span>
              <span className="w-px flex-1 bg-gray-200" aria-hidden="true" />
            </div>
            <div className="pb-4">
              <p className="text-sm font-bold text-gray-900">
                {hito.anio} · {ETIQUETAS[hito.tipo] ?? hito.tipo}
              </p>
              {hito.cambio && <p className="mt-0.5 text-sm text-gray-600">{hito.cambio}</p>}
              {hito.foto && (
                <img
                  src={hito.foto}
                  alt={`${nombre} del año ${hito.anio}`}
                  loading="lazy"
                  className="mt-2 aspect-video w-full max-w-sm rounded-xl object-cover"
                />
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
