// 24/10/2026: 1–2 frases propias por ficha calculadas con los datos reales de la web
// (precio de partida del modelo frente a sus rivales directos de la ficha). Si falta un
// dato no se genera nada. Estructura rotada por hash del slug para no repetir plantilla.
import type { Rival } from "@/lib/ficha-extra.ts";

const fmt = (n: number) => `${Math.round(n).toLocaleString("es-ES")} €`;
function hash(s: string) { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return Math.abs(h); }

export default function FraseRivales({ id, nombre, precio, rivales }: { id: string; nombre: string; precio: number | null | undefined; rivales?: Rival[] }) {
  if (precio == null || !rivales) return null;
  const rs = rivales.filter((r) => typeof r[2] === "number" && (r[2] as number) > 0);
  if (rs.length < 2) return null;
  const media = rs.reduce((a, r) => a + (r[2] as number), 0) / rs.length;
  const dif = precio - media;
  const pct = Math.round((Math.abs(dif) / media) * 100);
  const todos = [...rs.map((r) => ({ n: r[1], p: r[2] as number })), { n: nombre, p: precio }].sort((a, b) => a.p - b.p);
  const pos = todos.findIndex((x) => x.n === nombre && x.p === precio) + 1;
  const total = todos.length;
  const barato = todos[0], caro = todos[total - 1];
  const masMenos = Math.abs(dif) < media * 0.02 ? "prácticamente lo mismo que" : dif < 0 ? `${fmt(-dif)} menos (−${pct} %) que` : `${fmt(dif)} más (+${pct} %) que`;
  const v = hash(id) % 4;
  let t: string;
  if (v === 0) t = `Con ${fmt(precio)} de partida, ${nombre} cuesta ${masMenos} la media de los ${rs.length} rivales que comparamos en esta ficha (${fmt(media)}). Ocupa el puesto ${pos} de ${total} si los ordenamos de más barato a más caro.`;
  else if (v === 1) t = `Entre los ${total} modelos de esta comparativa, ${nombre} es el ${pos}.º más asequible: parte de ${fmt(precio)}, frente a ${fmt(barato.p)} del más barato (${barato.n}) y ${fmt(caro.p)} del más caro (${caro.n}).`;
  else if (v === 2) t = `La media de precio de sus ${rs.length} rivales directos es de ${fmt(media)}; ${nombre}, desde ${fmt(precio)}, se sitúa ${masMenos.replace(/ que$/, "")} respecto a esa media.`;
  else t = `Precio frente a rivales: ${fmt(precio)} ${nombre}, ${fmt(media)} de media entre ${rs.map((r) => r[1]).slice(0, 3).join(", ")}${rs.length > 3 ? " y otros" : ""}. Puesto ${pos} de ${total} por precio de entrada.`;
  return <p className="mt-3 text-sm text-gray-700">{t}</p>;
}
