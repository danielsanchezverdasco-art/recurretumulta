import { Link } from "react-router-dom";
import HUB_MARCAS from "@/lib/hub-marcas.generated.json";
import REDIRIGIDAS from "@/lib/fichas-redirigidas.generated.json";
import { slugify } from "@/lib/ficha-match.ts";

/* ── Más fichas de la marca (18/10/2026). Enlazado interno: cada ficha enlaza a las
   otras versiones del mismo modelo (p. ej. Stelato G9 -> G9 EREV), a otras fichas
   de la marca y a la página de la marca. Antes la ficha prerenderizada no enlazaba
   a ninguna otra ficha y muchas quedaban huérfanas. ── */

type Tipo = "coches" | "motos" | "patinetes";
type Item = { id: string; marca: string | null; modelo: string | null };

const REDIR = new Set(Object.keys(REDIRIGIDAS as Record<string, string>));
const MAX = 18;

/** Primera palabra del modelo tras la marca, sacada de la id ("stelato-g9-erev-…" -> "g9"). */
function familia(id: string, marca: string): string {
  const mt = slugify(marca).split("-");
  const ts = id.split("-");
  let i = 0;
  while (i < mt.length && ts[i] === mt[i]) i++;
  return ts[i] ?? "";
}

export function hubDeMarca(tipo: Tipo, marca: string | null | undefined): string | null {
  if (!marca) return null;
  const lista = (HUB_MARCAS as Record<string, string[][]>)[tipo] ?? [];
  const s = slugify(marca);
  const h = lista.find(([slug, nombre]) => slug === s || slugify(nombre) === s);
  return h ? `/${tipo}/marca/${h[0]}/` : null;
}

export default function OtrasFichasMarca({
  tipo,
  actual,
  todas,
}: {
  tipo: Tipo;
  actual: Item;
  todas: Item[];
}) {
  const marca = actual.marca ?? "";
  if (!marca) return null;
  const fam = familia(actual.id, marca);
  const vistos = new Set<string>([actual.id]);
  const hermanas = todas.filter((x) => {
    if (!x.id || vistos.has(x.id) || x.marca !== marca || REDIR.has(`${tipo}/${x.id}`)) return false;
    vistos.add(x.id);
    return true;
  });
  if (hermanas.length === 0) return null;
  const mismoModelo = hermanas.filter((x) => familia(x.id, marca) === fam);
  const resto = hermanas
    .filter((x) => familia(x.id, marca) !== fam)
    .sort((a, b) => (a.modelo ?? "").localeCompare(b.modelo ?? "", "es"));
  const lista = [...mismoModelo, ...resto].slice(0, MAX);
  const hub = hubDeMarca(tipo, marca);
  return (
    <section
      className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6"
      aria-label={`Más fichas de ${marca}`}
    >
      <h2 className="text-xl font-extrabold text-gray-900">Más fichas de {marca}</h2>
      {mismoModelo.length > 0 && (
        <p className="mt-1 text-sm text-gray-600">Primero, las otras versiones de este modelo.</p>
      )}
      <ul className="mt-3 grid gap-x-4 gap-y-1.5 sm:grid-cols-2">
        {lista.map((x) => (
          <li key={x.id} className="min-w-0">
            <Link to={`/${tipo}/${x.id}/`} className="break-words text-sm font-semibold text-red-600 hover:underline">
              {marca} {x.modelo}
            </Link>
          </li>
        ))}
      </ul>
      {hub && (
        <Link to={hub} className="mt-3 inline-block text-sm font-bold text-gray-900 underline underline-offset-2">
          Todas las fichas de {marca} →
        </Link>
      )}
    </section>
  );
}
