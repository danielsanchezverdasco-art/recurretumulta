// 13/10/2026: atribución visible para fotos CC BY / CC BY-SA (Wikimedia Commons).
import { CREDITOS_FOTOS } from "@/lib/creditos-fotos.generated";
import { referenciaDe } from "@/lib/fotos-referencia";

export function creditoDe(src?: string | null) {
  return src ? CREDITOS_FOTOS[src.split("?")[0]] ?? null : null;
}

export default function CreditoFoto({ src, className = "" }: { src?: string | null; className?: string }) {
  const c = creditoDe(src);
  if (!c) return null;
  const ref = referenciaDe(src);
  const leyenda = ref ? (
    <span className="mb-0.5 block text-xs font-medium text-gray-600">Imagen de referencia: {ref}</span>
  ) : null;
  if (c.licencia === "prensa") {
    return (
      <p className={`mt-1 text-[10px] leading-tight text-gray-400 ${className}`}>
        {leyenda}
        Foto:{" "}
        <a href={c.url} target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-600">
          {c.autor}
        </a>{" "}
        (prensa)
      </p>
    );
  }
  return (
    <p className={`mt-1 text-[10px] leading-tight text-gray-400 ${className}`}>
      {leyenda}
      Foto:{" "}
      <a href={c.url} target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-600">
        {c.autor}
      </a>{" "}
      · {c.licencia} · Wikimedia Commons
    </p>
  );
}
