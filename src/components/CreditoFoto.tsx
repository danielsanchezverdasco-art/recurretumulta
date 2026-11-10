// 13/10/2026: atribución visible para fotos CC BY / CC BY-SA (Wikimedia Commons).
import { CREDITOS_FOTOS } from "@/lib/creditos-fotos.generated";
import { referenciaDe } from "@/lib/fotos-referencia";

export function creditoDe(src?: string | null) {
  return src ? CREDITOS_FOTOS[src.split("?")[0]] ?? null : null;
}

// 10/11/2026 (AdSense F-22): la fuente a veces solo está en el alt
// ("(foto oficial de X)", "(foto: X)", "(foto del catálogo oficial)", ...).
// Devuelve el texto del marcador tal cual, sin inventar autor ni URL;
// null si el marcador no dice nada útil ("foto", "foto del modelo").
export function creditoDeAlt(alt?: string | null): string | null {
  if (!alt) return null;
  const m = alt.match(/\(\s*foto[^)]*\)/i);
  if (!m) return null;
  const texto = m[0].slice(1, -1).trim().replace(/\s+/g, " ");
  if (/^foto\s*(del modelo)?\s*$/.test(texto)) return null;
  if (/^foto:\s*$/.test(texto)) return null;
  return texto;
}

/** Texto de crédito visible en plano: crédito del mapa o marcador del alt. */
export function creditoTexto(src?: string | null, alt?: string | null): string | null {
  const c = creditoDe(src);
  if (c) {
    return `Foto: ${c.autor} ${c.licencia === "prensa" ? "(prensa)" : `· ${c.licencia} · Wikimedia Commons`}`;
  }
  const t = creditoDeAlt(alt);
  return t ? t.charAt(0).toUpperCase() + t.slice(1) : null;
}

export default function CreditoFoto({ src, alt, className = "" }: { src?: string | null; alt?: string | null; className?: string }) {
  const c = creditoDe(src);
  if (!c) {
    // Sin entrada en el mapa: el marcador del alt, si lo hay.
    const texto = creditoDeAlt(alt);
    if (!texto) return null;
    return (
      <p className={`mt-1 text-[10px] leading-tight text-gray-400 ${className}`}>
        {texto.charAt(0).toUpperCase() + texto.slice(1)}
      </p>
    );
  }
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
