// AdSense A2 (10/11/2026): autoría + fecha VISIBLES en la cabecera de la ficha,
// bajo el H1 y dentro de <main> — igual que el byline de los blogs.
// Antes la autoría solo existía en el JSON-LD y en FirmaEditorial (fuera de
// <main>, al pie), así que el revisor humano veía 4.527 fichas sin autor ni fecha.
// La fecha sale de useFichaFechas (src/lib/fichas-fechas-eeat/*.json, generada
// por scripts/gen-fechas-eeat.mjs a partir del historial real de git).
// Sin fecha fiable no se inventa ninguna: se muestra solo la autoría.
import { Link } from "react-router-dom";
import { UserRound } from "lucide-react";
import { fechaLarga, isoDia } from "@/lib/eeat.ts";

export default function BylineFicha({
  publicado,
  actualizado,
}: {
  publicado?: string | null;
  actualizado?: string | null;
}) {
  const act = isoDia(actualizado);
  const pub = isoDia(publicado);
  return (
    <p
      data-byline-ficha="1"
      className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-500"
    >
      <span
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-600 text-white"
        aria-hidden="true"
      >
        <UserRound className="h-3.5 w-3.5" />
      </span>
      <span>
        Por{" "}
        <Link
          to="/sobre-nosotros/"
          rel="author"
          className="font-semibold text-gray-900 underline underline-offset-2"
        >
          Daniel
        </Link>
        , fundador y responsable de contenidos
      </span>
      {act && (
        <>
          <span aria-hidden="true">·</span>
          <span>
            Actualizado: <time dateTime={act}>{fechaLarga(act)}</time>
          </span>
        </>
      )}
      {!act && pub && (
        <>
          <span aria-hidden="true">·</span>
          <span>
            Publicado: <time dateTime={pub}>{fechaLarga(pub)}</time>
          </span>
        </>
      )}
    </p>
  );
}
