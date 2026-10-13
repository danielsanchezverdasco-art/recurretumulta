// Banner discreto de la Caza de monos para posts del blog y fichas (13/10/2026).
import { Link } from "react-router-dom";

export default function BannerJuegoMonos() {
  return (
    <aside aria-label="Caza de monos" className="max-w-3xl mx-auto px-4 my-6">
      <Link
        to="/juego-monos/"
        className="flex items-center gap-2.5 rounded-xl border border-amber-200/70 bg-amber-50/60 px-3 py-2 text-xs text-amber-900 hover:bg-amber-50 transition"
      >
        <img src="/media/cosa-avatar.webp" alt="" width={22} height={22} loading="lazy" className="w-[22px] h-[22px] shrink-0" />
        <span className="leading-snug">
          <span className="font-bold">Caza de monos:</span> hay 350 escondidos por la web. El 1º gana 1.500 € + 1 año de recursos ilimitados; del 2º al 50º, 1 año ilimitado.
        </span>
        <span className="ml-auto font-bold whitespace-nowrap">Jugar →</span>
      </Link>
    </aside>
  );
}
