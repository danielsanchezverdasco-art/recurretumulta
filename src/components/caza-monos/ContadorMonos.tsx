import { JUEGO_MONOS_ACTIVO } from "@/config/juego.ts";
// ContadorMonos — contador de la Caza de monos en el menú superior (05/10/2026).
// Icono del mono (frontal) + nº de monos cazados. Clic → /juego-monos.
import { Link } from "react-router-dom";
import { AVATAR_COSA } from "@/lib/cosa";
import { useCazaMonos } from "./CazaMonosContext";

function ContadorMonosInner({ className = "" }: { className?: string }) {
  const { total, objetivo } = useCazaMonos();
  // 06/10/2026 (orden de Daniel): el contador SIEMPRE visible en el header
  // móvil (antes solo tras la primera captura). Va en el hueco del CTA.
  return (
    <Link
      to="/juego-monos/"
      title={`Caza de monos: llevas ${total} de ${objetivo} — ver el juego`}
      aria-label={`Caza de monos: llevas ${total} de ${objetivo} monos. Ir al juego.`}
      className={`inline-flex items-center gap-1 rounded-full bg-amber-100/80 hover:bg-amber-200/80 border border-amber-300/60 pl-1 pr-2 py-0.5 transition-colors cursor-pointer ${className}`}
    >
      <img
        src={AVATAR_COSA}
        alt="Cosa"
        aria-hidden="true"
        width={22}
        height={22}
        className="rounded-full w-[22px] h-[22px] object-cover"
      />
      <span
        key={total}
        className="mono-contador-pulso inline-flex items-center gap-1 text-xs font-black text-amber-900 tabular-nums leading-none"
      >
        {total}
        <span className="font-bold text-amber-700/70">/{objetivo}</span>
      </span>
    </Link>
  );
}

// Interruptor del juego (src/config/juego.ts).
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ContadorMonos(props: any) {
  if (!JUEGO_MONOS_ACTIVO) return null;
  return <ContadorMonosInner {...props} />;
}
