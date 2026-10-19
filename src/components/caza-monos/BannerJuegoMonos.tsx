import { JUEGO_MONOS_ACTIVO } from "@/config/juego.ts";
// Banner discreto de la Caza de monos para posts del blog y fichas (13/10/2026).
import { Link } from "react-router-dom";

function BannerJuegoMonosInner() {
  return (
    <aside aria-label="Caza de monos" className="max-w-3xl mx-auto px-4 my-6">
      <Link
        to="/juego-monos/"
        className="flex items-center gap-2.5 rounded-xl border border-amber-200/70 bg-amber-50/60 px-3 py-2 text-xs text-amber-900 hover:bg-amber-50 transition"
      >
        <img src="/media/cosa-avatar.webp" alt="" width={22} height={22} loading="lazy" className="w-[22px] h-[22px] shrink-0" />
        <span className="leading-snug">
          <span className="inline-block rounded-full bg-amber-500 text-white font-black px-2 py-0.5 mr-1">💶 1.500 €</span><span className="font-bold">Caza de monos:</span> el 1º en encontrar los 350 gana 1.500 €. ¿Encuentras el mono dorado? 1 año de recursos gratis.
        </span>
        <span className="ml-auto font-bold whitespace-nowrap">Jugar →</span>
      </Link>
    </aside>
  );
}

// Interruptor del juego (src/config/juego.ts).
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BannerJuegoMonos(props: any) {
  if (!JUEGO_MONOS_ACTIVO) return null;
  return <BannerJuegoMonosInner {...props} />;
}
