/* ── Etiqueta medioambiental DGT (04/10/2026, orden Daniel: debe aparecer en
   todos los blogs de coches y fichas técnicas). Replica los colores oficiales
   de las etiquetas de la DGT:
   - "Cero" (0 emisiones): azul #0066cc
   - "ECO": verde azulado #00a99d
   - "C": verde #00a651
   - "B": amarillo #ffcc00
   Si la etiqueta es null o desconocida, no renderiza nada. ── */

export type EtiquetaDgtValor = "Cero" | "ECO" | "C" | "B";

const ESTILOS: Record<
  EtiquetaDgtValor,
  { bg: string; fg: string; texto: string; descripcion: string }
> = {
  Cero: {
    bg: "#0066cc",
    fg: "#ffffff",
    // 20/10/2026: el distintivo muestra «CERO», no «0» (revisión del borrador 2).
    texto: "CERO",
    descripcion:
      "Etiqueta CERO de la DGT: vehículos de cero emisiones (eléctricos, pila de combustible). Acceso sin restricciones a las ZBE.",
  },
  ECO: {
    bg: "#00a99d",
    fg: "#ffffff",
    texto: "ECO",
    descripcion:
      "Etiqueta ECO de la DGT: híbridos, gas (GNC/GNL/GLP) y eléctricos de autonomía extendida. Acceso a las ZBE con posibles restricciones puntuales.",
  },
  C: {
    bg: "#00a651",
    fg: "#ffffff",
    texto: "C",
    descripcion:
      "Etiqueta C de la DGT: gasolina Euro 4/5/6 y diésel Euro 6. Puede circular por las ZBE pero no entrar en zonas de especial protección como Distrito Centro.",
  },
  B: {
    bg: "#ffcc00",
    fg: "#1a1a1a",
    texto: "B",
    descripcion:
      "Etiqueta B de la DGT: gasolina Euro 3 y diésel Euro 4/5. La más restrictiva: muchas ZBE limitan su acceso.",
  },
};

export function normalizarEtiquetaDgt(v: string | null | undefined): EtiquetaDgtValor | null {
  if (!v) return null;
  const n = v.trim().toLowerCase();
  if (n === "cero" || n === "0" || n === "0 emisiones") return "Cero";
  if (n === "eco") return "ECO";
  if (n === "c") return "C";
  if (n === "b") return "B";
  return null;
}

export default function EtiquetaDGT({
  etiqueta,
  size = "sm",
  className = "",
}: {
  /** Valor de la etiqueta ("Cero" | "ECO" | "C" | "B"). null = no renderiza. */
  etiqueta: string | null | undefined;
  /** sm = inline en listados/tablas, md = destacado en fichas. */
  size?: "sm" | "md";
  className?: string;
}) {
  const valor = normalizarEtiquetaDgt(etiqueta);
  if (!valor) return null;
  const e = ESTILOS[valor];

  const medidas =
    size === "md"
      ? "h-11 min-w-11 px-3 text-xl rounded-xl"
      : "h-6 min-w-6 px-1.5 text-xs rounded-md";

  return (
    <span
      role="img"
      aria-label={e.descripcion}
      title={e.descripcion}
      className={`inline-flex items-center justify-center font-black leading-none shadow-sm ${medidas} ${className}`}
      style={{ backgroundColor: e.bg, color: e.fg }}
    >
      {e.texto}
    </span>
  );
}
