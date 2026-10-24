// 24/10/2026: 1–2 frases propias por ficha calculadas con los datos reales de la web
// (precio de partida del modelo frente a sus rivales directos de la ficha). Si falta un
// dato no se genera nada. Estructura rotada por hash del slug para no repetir plantilla.
import type { Rival } from "@/lib/ficha-extra.ts";

const fmt = (n: number) => `${Math.round(n).toLocaleString("es-ES")} €`;

export default function FraseRivales({ id, nombre, precio, rivales, texto }: { id: string; nombre: string; precio: number | null | undefined; rivales?: Rival[]; texto?: string }) {
  if (texto) return <p className="mt-3 text-sm text-gray-700">{texto}</p>;
  if (precio == null || !rivales) return null;
  const rs = rivales.filter((r) => typeof r[2] === "number" && (r[2] as number) > 0);
  if (rs.length < 2) return null;
  const media = rs.reduce((a, r) => a + (r[2] as number), 0) / rs.length;
  const dif = precio - media;
  const pct = Math.round((Math.abs(dif) / media) * 100);
  const todos = [...rs.map((r) => ({ n: r[1], p: r[2] as number })), { n: nombre, p: precio }].sort((a, b) => a.p - b.p);
  const pos = todos.findIndex((x) => x.n === nombre && x.p === precio) + 1;
  const total = todos.length;
  // 24/10 (unicidad): solo datos, sin frase de plantilla ni rotación por hash.
  return (
    <dl className="mt-3 grid grid-cols-3 gap-2 text-sm text-gray-700">
      <div><dt className="text-xs text-gray-500">Precio</dt><dd className="font-bold">{fmt(precio)}</dd></div>
      <div><dt className="text-xs text-gray-500">Media rivales ({rs.length})</dt><dd className="font-bold">{fmt(media)}</dd></div>
      <div><dt className="text-xs text-gray-500">Puesto por precio</dt><dd className="font-bold">{pos}/{total}{dif !== 0 ? ` (${dif < 0 ? "−" : "+"}${pct} %)` : ""}</dd></div>
    </dl>
  );
}
