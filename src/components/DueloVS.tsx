import { Trophy, X } from "lucide-react";
import CompartirBotones from "./CompartirBotones";
import { EleccionCosa } from "./Cosa.tsx";

export interface FilaDuelo {
  etiqueta: string;
  /** Un valor por vehículo, en el mismo orden que `items`. null = sin dato. */
  valores: (string | null)[];
  /** Índice del ganador en `valores`, o null si no hay ganador. */
  ganador?: number | null;
  /** 0-100 por vehículo para la barra de progreso (opcional). */
  barras?: (number | null)[];
}

export interface ItemDuelo {
  id: string;
  titulo: string;
  subtitulo?: string;
  imagen?: string;
}

interface DueloVSProps {
  items: ItemDuelo[];
  filas: FilaDuelo[];
  veredicto?: string;
  onCerrar?: () => void;
  id?: string;
  /**
   * "La elección de Cosa": id del item con mejor nota (ver elegirCosaIndice en
   * lib/cosa.ts: gana la mejor relación calidad-precio según datos reales de
   * la ficha; criterio automático, no patrocinado). Si no se pasa, no hay badge.
   */
  eleccionId?: string;
}

/**
 * Sección de duelo cara a cara: cabecera con fotos enfrentadas y VS,
 * tabla comparativa con ganador ★ por fila, barras de progreso y veredicto.
 */
export default function DueloVS({ items, filas, veredicto, onCerrar, id = "duelo", eleccionId }: DueloVSProps) {
  if (items.length < 2) return null;
  const conVS = items.length === 2;

  return (
    <section id={id} aria-label="Duelo comparativo" className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
        {/* Cabecera: fotos enfrentadas + VS */}
        <div className="relative">
          <div className="flex" aria-hidden={!conVS}>
            {items.map((it, i) => (
              <div
                key={it.id}
                className="relative h-36 flex-1 overflow-hidden sm:h-48 motion-safe:animate-[slideIn_0.5s_ease-out_both]"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {it.imagen ? (
                  <img src={it.imagen} alt={it.titulo} className="h-full w-full object-cover" loading="lazy" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                    <span className="text-4xl font-black text-gray-400">{it.titulo.charAt(0)}</span>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2.5 sm:p-3">
                  <p className="truncate text-sm font-black text-white sm:text-base">{it.titulo}</p>
                  {it.subtitulo && <p className="truncate text-[11px] text-white/75">{it.subtitulo}</p>}
                </div>
                {eleccionId === it.id && (
                  <div className="absolute left-2 top-2 z-10 motion-safe:animate-[vsDueloEntrada_0.9s_ease-out_both]">
                    <EleccionCosa compacto />
                  </div>
                )}
              </div>
            ))}
          </div>
          {conVS && (
            <>
              <div aria-hidden="true" className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/40" />
              {/* Badge VS: centrado entre las dos imágenes (el wrapper centra con
                  `translate`; los keyframes solo animan `scale` para no desplazarlo) */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 z-10 h-14 w-14 -translate-x-1/2 -translate-y-1/2 sm:h-16 sm:w-16"
              >
                <span className="absolute inset-0 rounded-full bg-[#cd001d]/40 motion-safe:animate-[vsPing_2.2s_cubic-bezier(0,0,.2,1)_infinite]" />
                <span className="absolute inset-0 flex items-center justify-center rounded-full bg-[#cd001d] text-lg font-black text-white shadow-xl ring-4 ring-white sm:text-xl motion-safe:animate-[vsDueloEntrada_0.9s_ease-out_both,vsDueloPulso_2.8s_ease-in-out_1s_infinite]">
                  VS
                </span>
              </div>
            </>
          )}
          {onCerrar && (
            <button
              type="button"
              onClick={onCerrar}
              aria-label="Cerrar duelo"
              className="absolute right-2.5 top-2.5 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Compartir duelo */}
        <div className="flex justify-center border-b border-gray-100 px-4 py-2.5">
          <CompartirBotones
            titulo={`Duelo: ${items[0].titulo} vs ${items[1].titulo}`}
            texto={`¿Quién gana este duelo? ${items[0].titulo} contra ${items[1].titulo}, comparativa cara a cara.`}
            url={
              typeof window !== "undefined"
                ? `${window.location.origin}${window.location.pathname}#${id}`
                : undefined
            }
          />
        </div>

        {/* Tabla comparativa */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[320px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/60">
                <th className="px-3 py-2.5 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                  Característica
                </th>
                {items.map((it) => (
                  <th key={it.id} className="px-3 py-2.5 text-left text-xs font-bold text-gray-900">
                    {it.titulo}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filas.map((f, fi) => (
                <tr
                  key={f.etiqueta}
                  className="border-b border-gray-50 last:border-0 motion-safe:animate-[fadeSlideUp_0.4s_ease-out_both]"
                  style={{ animationDelay: `${0.3 + fi * 0.06}s` }}
                >
                  <th scope="row" className="px-3 py-2.5 text-left font-semibold text-gray-600">
                    {f.etiqueta}
                  </th>
                  {f.valores.map((v, vi) => {
                    const esGanador = f.ganador === vi;
                    const barra = f.barras?.[vi];
                    return (
                      <td
                        key={vi}
                        className={`px-3 py-2.5 ${esGanador ? "bg-[#fdecec] font-bold text-gray-900" : "text-gray-700"}`}
                      >
                        <span className="inline-flex items-center gap-1">
                          {esGanador && (
                            <Trophy className="h-3.5 w-3.5 shrink-0 text-[#cd001d]" aria-label="Ganador" />
                          )}
                          {v ?? "—"}
                        </span>
                        {barra != null && (
                          <span
                            className="mt-1 block h-1.5 overflow-hidden rounded-full bg-gray-100"
                            role="img"
                            aria-label={`${barra}%`}
                          >
                            <span
                              className={`block h-full rounded-full ${esGanador ? "bg-[#cd001d]" : "bg-gray-300"} motion-safe:animate-[growBar_0.8s_ease-out_both]`}
                              style={{ width: `${Math.min(100, Math.max(0, barra))}%`, animationDelay: `${0.5 + fi * 0.06}s` }}
                            />
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Veredicto */}
        {veredicto && (
          <div className="border-t border-gray-100 bg-gray-50/60 px-4 py-4 motion-safe:animate-[fadeSlideUp_0.5s_ease-out_0.8s_both]">
            <p className="text-sm font-semibold text-gray-800">
              <Trophy className="mr-1.5 inline h-4 w-4 text-[#cd001d]" />
              {veredicto}
            </p>
          </div>
        )}
      </div>

      <style>{`
        /* NOTA: estos keyframes animan SOLO transform: scale() / opacity.
           El centrado lo hace la propiedad CSS translate de Tailwind
           (-translate-x-1/2 -translate-y-1/2); si el keyframe incluyera
           translate(-50%,-50%) el badge se desplazaria el doble (bug visto
           en Tailwind v4, donde translate es propiedad nativa).
           La entrada (vsDueloEntrada) se ejecuta UNA vez; el pulso
           (vsDueloPulso) es el bucle infinito y empieza/termina en scale(1)
           para que el reinicio del ciclo sea invisible (sin parpadeo). */
        @keyframes vsDueloEntrada {
          0% { transform: scale(0); opacity: 0; }
          14% { transform: scale(1.18); opacity: 1; }
          24% { transform: scale(0.94); }
          34%, 100% { transform: scale(1); opacity: 1; }
        }
        @keyframes vsDueloPulso {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes vsPing {
          0% { transform: scale(1); opacity: 0.7; }
          80%, 100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(var(--tw-translate-x, 0)); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes growBar {
          from { width: 0 !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          #${id} * { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
