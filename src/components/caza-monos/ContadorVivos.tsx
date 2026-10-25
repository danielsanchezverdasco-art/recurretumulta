import { JUEGO_MONOS_ACTIVO } from "@/config/juego.ts";
// Contador "los 350 monos siguen vivos" (13/10/2026): tiempo desde el inicio del juego
// (6/10/2026, fecha de las bases) hasta que alguien complete los 350 (GANADORES[0]).
// Sin librerías ni peticiones; tamaño fijo (tabular-nums) para no mover la maquetación.
import { useEffect, useState } from "react";
import { GANADORES } from "./datos";

export const INICIO_JUEGO = Date.parse("2026-10-06T00:00:00+02:00");

function partes(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return [Math.floor(s / 86400), Math.floor((s % 86400) / 3600), Math.floor((s % 3600) / 60), s % 60];
}

function ContadorVivosInner({ compacto = false }: { compacto?: boolean }) {
  const ganador = GANADORES[0];
  const [ahora, setAhora] = useState(() => Date.now());
  useEffect(() => {
    if (ganador) return;
    const t = setInterval(() => setAhora(Date.now()), 1000);
    return () => clearInterval(t);
  }, [ganador]);
  if (ganador) {
    return (
      <p className={`${compacto ? "text-xs" : "text-sm"} font-black text-amber-600`} role="status">
        🏆 ¡Los 350 monos ya tienen cazador! Ganó {ganador.nombre} ({ganador.fecha}).
      </p>
    );
  }
  const [d, h, m, s] = partes(ahora - INICIO_JUEGO);
  const dd = (n: number) => String(n).padStart(2, "0");
  return (
    <p className={`${compacto ? "text-xs" : "text-sm sm:text-base"} font-bold tabular-nums`} aria-live="off">
      🦍 Los 350 monos llevan vivos{" "}
      <span className="inline-block min-w-[16ch] font-black">{d} d {dd(h)} h {dd(m)} min {dd(s)} s</span>
    </p>
  );
}

// Interruptor del juego (src/config/juego.ts).
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ContadorVivos(props: any) {
  if (!JUEGO_MONOS_ACTIVO) return null;
  return <ContadorVivosInner {...props} />;
}
