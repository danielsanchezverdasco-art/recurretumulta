import { useEffect, useRef, useState } from "react";

const GOLPES = ["¡ZAS!", "¡PAM!", "¡TOMA!", "¡K.O.!"];
const PARTICULAS = [
  { dx: -34, dy: -30, dl: 0 },
  { dx: 30, dy: -38, dl: 0.05 },
  { dx: -40, dy: 6, dl: 0.1 },
  { dx: 38, dy: 10, dl: 0.08 },
  { dx: -16, dy: -44, dl: 0.12 },
  { dx: 20, dy: 34, dl: 0.06 },
];
const BRASAS = [
  { l: 8, ed: 0, s: 5 }, { l: 18, ed: 2.5, s: 7 }, { l: 30, ed: 1.2, s: 4 },
  { l: 45, ed: 3.8, s: 6 }, { l: 58, ed: 0.6, s: 5 }, { l: 70, ed: 2.1, s: 7 },
  { l: 82, ed: 4.4, s: 4 }, { l: 93, ed: 1.7, s: 6 },
];

/**
 * Hero principal: Cosa boxeando contra la multa.
 * Titular claro arriba (qué es la web), pelea como gancho visual, CTA al analizador.
 */
export default function HeroCosaBoxeo() {
  const [golpe, setGolpe] = useState(0);
  const [fallos, setFallos] = useState(0);
  const [pop, setPop] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const tick = () => {
      setGolpe((g) => (g + 1) % GOLPES.length);
      setFallos((f) => f + 1);
      setPop(true);
      timers.current.push(window.setTimeout(() => setPop(false), 550));
    };
    // Primer golpe sincronizado con la animación CSS (~2.8s del ciclo de 4s)
    timers.current.push(window.setTimeout(() => {
      tick();
      timers.current.push(window.setInterval(tick, 4000));
    }, 2800));
    return () => { timers.current.forEach((t) => { clearTimeout(t); clearInterval(t); }); };
  }, []);

  const irAnalizador = () => {
    document.getElementById("analizador")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      aria-label="Analiza tu multa con IA antes de pagar"
      className="cosa-anim relative overflow-hidden animate-[cosa-temblor_4s_ease-in-out_infinite]"
      style={{ background: "radial-gradient(110% 80% at 50% 0%, #3a121d 0%, #101016 60%, #0b0b10 100%)" }}
    >
      {/* Fondo con vida: líneas de cómic + brasas */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div
          className="cosa-anim absolute animate-[cosa-giro_46s_linear_infinite]"
          style={{
            width: 760, height: 760, left: "50%", top: "64%",
            background: "repeating-conic-gradient(from 0deg, rgba(205,0,29,.16) 0deg 5deg, transparent 5deg 13deg)",
            WebkitMaskImage: "radial-gradient(circle, black 0%, transparent 60%)",
            maskImage: "radial-gradient(circle, black 0%, transparent 60%)",
          }}
        />
        {BRASAS.map((b, i) => (
          <span
            key={i}
            className="cosa-anim absolute rounded-full animate-[cosa-subir_7s_ease-in_infinite]"
            style={{
              left: `${b.l}%`, bottom: -12, width: b.s, height: b.s,
              background: "#ff8f6b", opacity: 0, filter: "blur(.4px)",
              animationDelay: `${b.ed}s`,
            }}
          />
        ))}
      </div>

      {/* Burbuja centrada */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap rounded-full bg-[#cd001d] px-3 py-1 text-[10px] font-bold tracking-wide text-white shadow-[0_4px_14px_rgba(205,0,29,.45)]">
        RecurreTuMulta.online · IA
      </div>

      <div className="relative z-10 mx-auto max-w-xl px-5 pb-5 pt-9 text-center">
        <h1 className="cosa-anim animate-[cosa-entrada_.6s_ease-out_both] text-[23px] font-extrabold leading-[1.2] text-white">
          ¿Te han multado? <span className="text-[#ff4d5e]">Analízala con IA</span> antes de pagar
        </h1>
        <p className="cosa-anim mt-2 text-[12.5px] text-[#b9b9c6] animate-[cosa-entrada_.6s_.1s_ease-out_both]">
          En 2 minutos sabes si se puede recurrir · <strong className="text-white">Gratis</strong>, sin registro
        </p>

        {/* Pelea */}
        <div className="cosa-anim relative mx-auto h-[132px] animate-[cosa-entrada_.6s_.2s_ease-out_both]">
          <div className="cosa-anim absolute bottom-0 left-[6%] w-[38%] animate-[cosa-bote_1.1s_ease-in-out_infinite]">
            <div className="cosa-anim animate-[cosa-punetazo_4s_ease-in-out_infinite]">
              <img
                src="/media/cosa-boxeador.webp"
                alt="Cosa, el mono robot, boxeando contra una multa"
                width={640}
                height={640}
                className="w-full"
                style={{ filter: "drop-shadow(0 8px 16px rgba(205,0,29,.4))" }}
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
          <div className="cosa-anim absolute bottom-[44px] left-[44%] z-[5] animate-[cosa-pulso-vs_1.6s_ease-in-out_infinite]">
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#cd001d] text-[15px] font-black text-white shadow-[0_0_16px_rgba(205,0,29,.6)]">
              VS
            </div>
          </div>
          <div className="cosa-anim absolute bottom-[14px] right-[6%] w-[34%] animate-[cosa-golpe-multa_4s_ease-in-out_infinite]">
            <div className="rounded-lg border-t-[5px] border-t-[#cd001d] bg-gradient-to-b from-white to-[#f1ede2] p-2.5 text-left shadow-[0_8px_22px_rgba(0,0,0,.5)]">
              <div className="text-[8px] font-bold tracking-widest text-[#999]">DENUNCIA</div>
              <div className="mt-1.5 text-[19px] font-black text-[#111]">200&nbsp;€</div>
            </div>
          </div>
          <div className="absolute bottom-[56px] left-[56%] z-[6] h-[74px] w-[74px]">
            <div className="cosa-anim relative h-full w-full animate-[cosa-estallido_4s_ease-in-out_infinite]">
              <div className="cosa-estrella flex h-full w-full items-center justify-center bg-[#ffd166]">
                <span className="text-[15px] font-black text-[#cd001d]" style={{ transform: "rotate(12deg)" }}>
                  {GOLPES[golpe]}
                </span>
              </div>
              {PARTICULAS.map((p, i) => (
                <span
                  key={i}
                  className="cosa-anim absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-[#ffd166] opacity-0 animate-[cosa-particula_4s_ease-out_infinite]"
                  style={{ ["--dx" as string]: `${p.dx}px`, ["--dy" as string]: `${p.dy}px`, animationDelay: `${p.dl}s` } as React.CSSProperties}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className="mb-3 inline-block rounded-full border border-[#2e2e3a] bg-[#1c1c26]/85 px-3.5 py-1.5 text-[12.5px] font-bold text-[#c9c9d4] animate-[cosa-entrada_.6s_.3s_ease-out_both]"
        >
          Fallos detectados:{" "}
          <span
            className="inline-block text-[#ff4d5e]"
            style={pop ? { animation: "cosa-pop .5s ease-out", color: "#ffd166", transform: "scale(1.35)" } : undefined}
          >
            {fallos}
          </span>
        </div>

        <div className="cosa-anim animate-[cosa-entrada_.6s_.35s_ease-out_both]">
          <button
            onClick={irAnalizador}
            className="relative block w-full overflow-hidden rounded-xl bg-[#cd001d] px-[18px] py-[13px] text-[16px] font-extrabold text-white shadow-[0_6px_22px_rgba(205,0,29,.4)] transition-transform active:scale-[.98]"
          >
            <span
              aria-hidden="true"
              className="cosa-anim pointer-events-none absolute inset-y-0 w-[45%] animate-[cosa-brillo_3.2s_ease-in-out_infinite]"
              style={{ left: "-60%", background: "linear-gradient(100deg, transparent, rgba(255,255,255,.45), transparent)" }}
            />
            Analizar mi multa gratis
          </button>
          <div className="mt-2.5 flex justify-center gap-1.5 text-[10.5px] text-[#9a9aa8]">
            <span>✓ Gratis</span><span className="text-[#5a5a68]">·</span>
            <span>✓ Sin registro</span><span className="text-[#5a5a68]">·</span>
            <span>✓ 2 min</span>
          </div>
        </div>
      </div>
    </section>
  );
}
