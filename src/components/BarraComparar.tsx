import { Swords, X } from "lucide-react";

export interface ItemComparar {
  id: string;
  etiqueta: string;
  imagen?: string;
}

interface BarraCompararProps {
  items: ItemComparar[];
  max?: number;
  onQuitar: (id: string) => void;
  onVerDuelo: () => void;
  onLimpiar?: () => void;
}

/**
 * Barra sticky inferior con los vehículos seleccionados para el duelo.
 * Aparece con slide-up cuando hay al menos 1 seleccionado.
 */
export default function BarraComparar({ items, max = 3, onQuitar, onVerDuelo, onLimpiar }: BarraCompararProps) {
  if (items.length === 0) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 motion-safe:animate-[barIn_0.35s_ease-out_both]"
      role="region"
      aria-label="Vehículos seleccionados para comparar"
    >
      <div className="mx-auto max-w-5xl px-3 pb-3 sm:px-4 sm:pb-4">
        <div className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white/95 p-2.5 shadow-2xl backdrop-blur sm:gap-3 sm:p-3">
          {/* Chips */}
          <div className="flex min-w-0 flex-1 flex-wrap items-center gap-1.5 sm:gap-2">
            {items.map((it) => (
              <span
                key={it.id}
                className="inline-flex max-w-[140px] items-center gap-1.5 rounded-full bg-gray-100 py-1 pl-1 pr-2 text-xs font-semibold text-gray-800 sm:max-w-[200px] motion-safe:animate-[chipPop_0.3s_cubic-bezier(.34,1.56,.64,1)_both]"
              >
                {it.imagen && (
                  <img src={it.imagen} alt="" className="h-6 w-6 rounded-full object-cover" loading="lazy" />
                )}
                <span className="truncate">{it.etiqueta}</span>
                <button
                  type="button"
                  onClick={() => onQuitar(it.id)}
                  aria-label={`Quitar ${it.etiqueta} de la comparativa`}
                  className="flex h-5 w-5 items-center justify-center rounded-full text-gray-500 transition hover:scale-110 hover:bg-[#cd001d] hover:text-white"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </span>
            ))}
            <span className="text-xs text-gray-500">
              {items.length}/{max}
            </span>
          </div>

          {onLimpiar && items.length > 1 && (
            <button
              type="button"
              onClick={onLimpiar}
              className="shrink-0 rounded-xl px-2 py-2 text-xs font-semibold text-gray-500 transition hover:text-gray-800"
            >
              Limpiar
            </button>
          )}

          <button
            type="button"
            onClick={onVerDuelo}
            disabled={items.length < 2}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#cd001d] px-3 py-2.5 text-sm font-black text-white shadow transition hover:bg-[#a50018] disabled:cursor-not-allowed disabled:opacity-40 sm:px-5"
          >
            <Swords className="h-4 w-4" />
            Ver duelo
          </button>
        </div>
      </div>

      <style>{`
        @keyframes barIn {
          from { opacity: 0; transform: translateY(100%); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes chipPop {
          0% { opacity: 0; transform: scale(0.6); }
          100% { opacity: 1; transform: scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          div[role="region"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
