import type { ReactNode } from "react";

interface FlipCardSimpleProps {
  anverso: ReactNode;
  reverso: ReactNode;
  flipped: boolean;
  onFlip: () => void;
  className?: string;
}

/**
 * Reemplazo fluido del FlipCard 3D (07/10/2026, directriz "primero fluida").
 * Misma API y misma interacción (tocar para ver el reverso), pero sin
 * transforms 3D: solo intercambia el contenido. En móvil es mucho más
 * fluido porque evita preserve-3d, perspective y el triple render del DOM.
 * El efecto 3D original se puede recuperar cuando la prioridad vuelva
 * a ser la calidad visual.
 */
export default function FlipCardSimple({ anverso, reverso, flipped, onFlip, className = "" }: FlipCardSimpleProps) {
  return (
    <div
      className={className}
      onClick={onFlip}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onFlip();
        }
      }}
      style={{ cursor: "pointer" }}
    >
      {flipped ? reverso : anverso}
    </div>
  );
}
