import { JUEGO_MONOS_ACTIVO } from "@/config/juego.ts";
// MonoEscondido — el mono clicable de la Caza de monos (05/10/2026).
// Al hacer clic: animación de captura (respeta prefers-reduced-motion),
// bocadillo con frase del mono (~2 s, no bloquea) y +1 al contador.
// - pose: pose temática del personaje (POSES_COSA).
// - variante 0-7: espejo/rotación/escala/tono deterministas (spec de Daniel:
//   rotación -18..18°, escala 0.7-1.3, tono sutil -15..15°). No hay dos iguales.
// - bocadillo: frase en primera persona sobre el mono (al entrar en viewport).
// - Al cazar: bocadillo de captura con frase por pose; en hitos lo firma Cosa.
// - legendario: brillo dorado (no huye, no lleva variante).
// - Cada mono tiene fase de flotación propia (determinista) para no ir
//   sincronizados.
import { useState } from "react";
import type { CSSProperties } from "react";
import { POSES_COSA, POSES_VERTICALES, type PoseCosa } from "@/lib/cosa";
import { useCazaMonos } from "./CazaMonosContext";
import { fraseCaza, HITOS, MENSAJES_COSA_HITOS } from "./frases";
import CelebracionLegendario from "./CelebracionLegendario";

// Spec de Daniel: rotación -18..18°, escala 0.7-1.3, tono sutil -15..15°.
const ROTACIONES = [0, -12, 9, -18, 14, -6, 18, -9];
const ESCALAS = [1, 0.85, 1.15, 0.7, 1.3, 0.9, 1.1, 1];
const TONOS = [0, 12, -12, 8, -8, 15, -15, 5];

function estiloVariante(v: number | undefined): CSSProperties {
  if (v === undefined) return {};
  const i = v % 8;
  return {
    transform: `scaleX(${i % 2 === 1 ? -1 : 1}) scale(${ESCALAS[i]}) rotate(${ROTACIONES[i]}deg)`,
    filter: TONOS[i] ? `hue-rotate(${TONOS[i]}deg)` : undefined,
  };
}

type Fase = "idle" | "capturando" | "despedida";

interface MonoEscondidoProps {
  id: string; // ID único del placement
  pose?: PoseCosa;
  size?: number; // px (ancho; las poses verticales reservan el doble de alto)
  className?: string;
  style?: CSSProperties;
  titulo?: string;
  variante?: number; // 0-7
  bocadillo?: string | null;
  bocadilloAlign?: "centro" | "izq" | "der";
  legendario?: boolean;
}

function MonoEscondidoInner({
  id,
  pose = "frente",
  size = 40,
  className = "",
  style,
  titulo = "¡Un mono escondido! Haz clic para cazarlo 🦍",
  variante,
  bocadillo,
  bocadilloAlign = "centro",
  legendario = false,
}: MonoEscondidoProps) {
  // Durante el prerender no se pintan monos: acelera el prerender (las imágenes
  // y animaciones no aportan SEO) y evita cargar 250+ webp por página.
  // En producción __PRERENDER__ no existe: el juego funciona con normalidad.
  if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).__PRERENDER__) return null;
  const { total, yaEncontrado, cazar, uuid, apodo } = useCazaMonos();
  const [fase, setFase] = useState<Fase>("idle");
  const [fraseCaptura, setFraseCaptura] = useState<string | null>(null);
  const [celebracion, setCelebracion] = useState(false);

  if (yaEncontrado(id)) return null;

  const vertical = POSES_VERTICALES.has(pose);
  // Fase de flotación propia por mono (determinista, desincronizada).
  const faseFlotacion = variante !== undefined ? -(variante * 0.425) : 0;

  const onClick = () => {
    if (fase !== "idle") return;
    // ¿Es hito? El bocadillo de captura lo firma Cosa celebrándolo.
    const nuevoTotal = total + 1;
    const esHito = HITOS.includes(nuevoTotal);
    setFraseCaptura(
      esHito ? `Cosa: ${MENSAJES_COSA_HITOS[nuevoTotal]}` : fraseCaza(id, pose)
    );
    setFase("capturando");
    // Captura (450 ms) → bocadillo de despedida (~2 s) → se registra la caza.
    window.setTimeout(() => setFase("despedida"), 450);
    window.setTimeout(() => {
      cazar(id);
      // El legendario merece celebración especial + registro en el servidor.
      if (legendario) setCelebracion(true);
    }, 2450);
  };

  const bubbleAlignClass =
    bocadilloAlign === "izq"
      ? "left-0"
      : bocadilloAlign === "der"
        ? "right-0"
        : "left-1/2 mono-bocadillo-centro";

  const enDespedida = fase === "despedida";
  const bubbleCazaClass = legendario ? "mono-bocadillo-dorado mono-bocadillo-grande" : "";

  return (
    <>
      {celebracion && (
        <CelebracionLegendario
          hunterId={uuid}
          nickname={apodo}
          onClose={() => setCelebracion(false)}
        />
      )}
    <button
      type="button"
      onClick={onClick}
      title={titulo}
      aria-label={titulo}
      className={`mono-escondido ${fase === "capturando" ? "mono-capturando" : ""} ${legendario ? "mono-legendario" : ""} ${className}`}
      style={{ width: size, height: vertical ? size * 2 : size, ...style }}
    >
      {bocadillo && fase === "idle" && (
        <span
          className={`mono-bocadillo ${legendario ? "mono-bocadillo-dorado" : ""} ${bubbleAlignClass}`}
          aria-hidden="true"
        >
          {bocadillo}
        </span>
      )}
      {enDespedida && fraseCaptura && (
        <span
          className={`mono-bocadillo mono-bocadillo-caza ${bubbleCazaClass} ${bubbleAlignClass}`}
          aria-hidden="true"
        >
          {fraseCaptura}
        </span>
      )}
      <span
        className="mono-flota"
        aria-hidden="true"
        style={enDespedida ? { opacity: 0 } : { animationDelay: `${faseFlotacion}s` }}
      >
        <img
          src={POSES_COSA[pose]}
          alt=""
          width={size}
          height={vertical ? size * 2 : size}
          loading="lazy"
          draggable={false}
          style={legendario ? undefined : estiloVariante(variante)}
          className="block"
        />
      </span>
      {fase === "capturando" && (
        <>
          <span className="mono-poof" aria-hidden="true" />
          <span className="mono-mas-uno" aria-hidden="true">+1</span>
        </>
      )}
    </button>
    </>
  );
}

// Interruptor del juego (src/config/juego.ts).
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MonoEscondido(props: any) {
  if (!JUEGO_MONOS_ACTIVO) return null;
  return <MonoEscondidoInner {...props} />;
}
