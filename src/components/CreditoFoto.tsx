// 13/10/2026: atribución visible para fotos CC BY / CC BY-SA (Wikimedia Commons).
import { CREDITOS_FOTOS } from "@/lib/creditos-fotos.generated";

export function creditoDe(src?: string | null) {
  return src ? CREDITOS_FOTOS[src.split("?")[0]] ?? null : null;
}

export default function CreditoFoto({ src, className = "" }: { src?: string | null; className?: string }) {
  const c = creditoDe(src);
  if (!c) return null;
  if (c.licencia === "prensa") {
    return (
      <p className={`mt-1 text-[10px] leading-tight text-gray-400 ${className}`}>
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
      Foto:{" "}
      <a href={c.url} target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-600">
        {c.autor}
      </a>{" "}
      · {c.licencia} · Wikimedia Commons
    </p>
  );
}
