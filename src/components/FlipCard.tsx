import { useState, type ReactNode } from "react";

interface FlipCardProps {
  anverso: ReactNode;
  reverso: ReactNode;
  flipped: boolean;
  onFlip: () => void;
  className?: string;
}

/**
 * Tarjeta flip 3D reutilizable para los comparadores.
 * Al hacer clic gira y muestra el reverso. Respeta prefers-reduced-motion.
 */
export default function FlipCard({ anverso, reverso, flipped, onFlip, className = "" }: FlipCardProps) {
  const [reduceMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  return (
    <div
      className={`flip-card ${className}`}
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
      style={{ perspective: "1200px", cursor: "pointer" }}
    >
      <div
        className="flip-card-inner"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: reduceMotion ? "none" : "transform 0.6s cubic-bezier(.34,1.18,.4,1)",
        }}
      >
        <div
          className="flip-card-front"
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {anverso}
        </div>
        <div
          className="flip-card-back"
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {reverso}
        </div>
      </div>
    </div>
  );
}
