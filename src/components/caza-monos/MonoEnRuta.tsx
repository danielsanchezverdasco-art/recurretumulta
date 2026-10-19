import { JUEGO_MONOS_ACTIVO } from "@/config/juego.ts";
// MonoEnRuta — inyección 100% en cliente del mono aleatorio (05/10/2026).
// Vive en el shell global (dentro de FadedRoutes, contenedor relative): al hidratar,
// si la ruta actual está en la lista determinista, renderiza el mono en posición
// absoluta pseudoaleatoria derivada del hash del slug. Sin tocar el prerender.
//
// - Pose temática según la sección + variante visual determinista (espejo/rotación/tono).
// - Bocadillo con frase al entrar por primera vez en el viewport.
// - Si lleva 60 s visible sin ser cazado, HUYE a otro escondite de la misma
//   página y deja un bocadillo con pista (conserva su ID: sigue contando).
//   El legendario no huye.
// - Rendimiento: IntersectionObserver; solo transform/opacity en animaciones.
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { PLACEMENTS } from "./placements.generated";
import { rutaId, legendarioId } from "./CazaMonosContext";
import MonoEscondido from "./MonoEscondido";
import { frasePara, variantePara, poseParaRuta, pistaHuida } from "./frases";

const POR_RUTA = new Map(PLACEMENTS.map((p) => [p.ruta, p]));

function normalizar(pathname: string): string {
  return pathname === "/" || pathname.endsWith("/") ? pathname : `${pathname}/`;
}

const TIEMPO_HUIDA_MS = 60_000;
const PISTA_MS = 6_000;
const SALUDO_MS = 2_800;

function MonoEnRutaInner() {
  const { pathname } = useLocation();
  const placement = useMemo(() => POR_RUTA.get(normalizar(pathname)), [pathname]);
  const [huidas, setHuidas] = useState(0);
  const [pistaVisible, setPistaVisible] = useState(false);
  const [saludo, setSaludo] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const saludado = useRef(false);
  const timerHuida = useRef<number | null>(null);
  const timerPista = useRef<number | null>(null);

  const esLegendario = placement?.legendario === true;
  const id = placement
    ? esLegendario
      ? legendarioId(placement.ruta, placement.token)
      : rutaId(placement.ruta, placement.token)
    : "";
  const pose = placement
    ? esLegendario
      ? ("legendario" as const)
      : poseParaRuta(placement.ruta, id)
    : ("frente" as const);
  const variante = esLegendario ? undefined : variantePara(id || "x");

  // Posición: tras cada huida, otro escondite de la misma página (determinista).
  const pos = useMemo(() => {
    if (!placement) return null;
    if (huidas === 0) return placement;
    const lado = placement.lado === "izq" ? ("der" as const) : ("izq" as const);
    const topPct = 8 + ((placement.topPct * 37 + huidas * 53) % 84);
    const offsetPx = 6 + ((placement.offsetPx * 13 + huidas * 17) % 30);
    return { ...placement, lado, topPct, offsetPx };
  }, [placement, huidas]);

  // Pista de la huida: se genera con la zona del NUEVO escondite.
  const pistaHuidaActual = useMemo(() => {
    if (!pos || huidas === 0) return null;
    return pistaHuida(huidas - 1, pos.topPct, pos.lado);
  }, [pos, huidas]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !placement) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Saludo una sola vez por vista de página.
          if (!saludado.current) {
            saludado.current = true;
            setSaludo(frasePara(id, pose));
            window.setTimeout(() => setSaludo(null), SALUDO_MS);
          }
          // El legendario no huye. Los demás: 60 s visibles → nuevo escondite.
          if (!esLegendario) {
            if (timerHuida.current) window.clearTimeout(timerHuida.current);
            timerHuida.current = window.setTimeout(() => {
              setHuidas((h) => h + 1);
              if (timerPista.current) window.clearTimeout(timerPista.current);
              timerPista.current = window.setTimeout(() => setPistaVisible(false), PISTA_MS);
              setPistaVisible(true);
            }, TIEMPO_HUIDA_MS);
          }
        } else if (timerHuida.current) {
          window.clearTimeout(timerHuida.current);
          timerHuida.current = null;
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (timerHuida.current) window.clearTimeout(timerHuida.current);
      if (timerPista.current) window.clearTimeout(timerPista.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placement, esLegendario]);

  if (!placement || !pos) return null;

  const style =
    pos.lado === "izq"
      ? { left: pos.offsetPx, top: `${pos.topPct}%` }
      : { right: pos.offsetPx, top: `${pos.topPct}%` };

  return (
    <div className="pointer-events-none absolute inset-0 z-30">
      <div ref={ref} className="mono-huye pointer-events-auto absolute" style={style}>
        <MonoEscondido
          id={id}
          pose={pose}
          size={esLegendario ? 56 : 44}
          variante={variante}
          legendario={esLegendario}
          bocadillo={pistaVisible ? pistaHuidaActual : saludo}
          bocadilloAlign={pos.lado === "izq" ? "izq" : "der"}
          titulo={
            esLegendario
              ? "✨ ¡EL MONO LEGENDARIO DORADO! Haz clic para cazarlo ✨"
              : "¡Un mono escondido! Haz clic para cazarlo 🦍"
          }
        />
      </div>
    </div>
  );
}

// Interruptor del juego (src/config/juego.ts).
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MonoEnRuta(props: any) {
  if (!JUEGO_MONOS_ACTIVO) return null;
  return <MonoEnRutaInner {...props} />;
}
