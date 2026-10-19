// Enlazado interno (14/10/2026): enlaces "Relacionados" hacia páginas en posición 8-20 de GSC.
// Datos: src/lib/relacionados.generated.json (desde /workspace/seo/enlazado-objetivo-gsc.csv).
import { Link } from "react-router-dom";
import MAPA from "@/lib/relacionados.generated.json";

const M = MAPA as Record<string, { to: string; txt: string }[]>;

export default function Relacionados({ pathname, enArticulo = false }: { pathname: string; enArticulo?: boolean }) {
  const p = pathname.replace(/\/?$/, "/");
  const enlaces = M[p];
  if (!enlaces || !enlaces.length) return null;
  return (
    <nav aria-label="Relacionados" className={enArticulo ? "rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6" : "mx-auto max-w-3xl px-4 py-6"}>
      <p className="text-sm font-bold text-gray-900">Relacionados</p>
      <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
        {enlaces.slice(0, 8).map((e) => (
          <li key={e.to}>
            <Link to={e.to} className="text-red-600 underline underline-offset-2 hover:text-red-700">
              {e.txt}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
