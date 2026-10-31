/**
 * Hero principal V16j (aprobado por Daniel 06/10/2026):
 * Jungla nocturna 4K, titular "En la jungla de las multas, Cosa rastrea el fallo",
 * Cosa pequeño y quieto (solo parpadeo), manos apoyadas sobre el botón rojo visible.
 * Compacto: 400px de alto en móvil.
 */
import { useState, useEffect } from "react";

const LUCIERNAGAS = [
  { l: 12, t: 70, ld: 0, lx: 30 }, { l: 25, t: 40, ld: 1.5, lx: -40 },
  { l: 38, t: 78, ld: 2.8, lx: 25 }, { l: 52, t: 30, ld: 0.9, lx: -30 },
  { l: 64, t: 66, ld: 2.1, lx: 35 }, { l: 76, t: 44, ld: 3.4, lx: -25 },
  { l: 88, t: 72, ld: 1.2, lx: 30 }, { l: 8, t: 52, ld: 2.5, lx: -35 },
  { l: 45, t: 58, ld: 0.4, lx: 20 }, { l: 70, t: 80, ld: 3.0, lx: -20 },
];
const BICHOS = [
  { l: 10, t: 34, bd: 0, s: 9, c: "#ffb347" }, { l: 78, t: 30, bd: 2.5, s: 7, c: "#9fe870" },
  { l: 66, t: 55, bd: 5, s: 11, c: "#ffb347" }, { l: 88, t: 62, bd: 10, s: 7, c: "#9fe870" },
];
// Posición de los ojos en % sobre la imagen del cuerpo (para los párpados)
const OJOS = [
  { x: 66.4, y: 41.6 },
  { x: 42.7, y: 44.0 },
];

export default function HeroCosaJungla() {
  const [anim, setAnim] = useState(false);
  useEffect(() => {
    // Las animaciones decorativas arrancan tras la hidratación para no bloquear LCP/TBT (PageSpeed 07/10/2026)
    const t = requestAnimationFrame(() => setAnim(true));
    return () => cancelAnimationFrame(t);
  }, []);
  const irAnalizador = () => {
    document.getElementById("analizador")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      aria-label="En la jungla de las multas, Cosa rastrea el fallo: analiza tu multa con IA antes de pagar"
      className={`hj-root relative overflow-hidden${anim ? " hj-anim" : ""}`}
    >
      <style>{`
        .hj-root{height:378px;background:#0d0f0a;color:#fff}
        .hj-bg{position:absolute;inset:0;z-index:0;width:100%;height:100%;object-fit:cover;object-position:center}
        .hj-shade{position:absolute;inset:0;z-index:1;pointer-events:none;
          background:linear-gradient(180deg,rgba(5,10,6,.6) 0%,rgba(5,10,6,.15) 45%,rgba(5,10,6,.65) 100%)}
        .hj-badge{position:absolute;top:10px;left:50%;transform:translateX(-50%);z-index:20;background:#cd001d;color:#fff;
          font-size:11px;font-weight:800;padding:5px 14px;border-radius:20px;letter-spacing:.4px;white-space:nowrap;
          box-shadow:0 4px 14px rgba(205,0,29,.45)}
        .hj-luc{position:absolute;width:6px;height:6px;border-radius:50%;background:#ffe9a3;z-index:2;
          box-shadow:0 0 10px 3px rgba(255,233,163,.55);opacity:0}
        .hj-anim .hj-luc{animation:hj-luciernaga 6s ease-in-out infinite}
        @keyframes hj-luciernaga{0%,100%{opacity:0;transform:translate(0,0)}25%{opacity:.9}
          50%{opacity:.4;transform:translate(var(--lx),-26px)}75%{opacity:.9}}
        .hj-niebla{position:absolute;width:130%;height:40%;left:-15%;z-index:2;opacity:.5;filter:blur(30px);pointer-events:none;
          background:radial-gradient(ellipse at center,rgba(200,220,230,.14) 0%,transparent 65%)}
        .hj-anim .hj-niebla{animation:hj-niebla 14s ease-in-out infinite alternate}
        @keyframes hj-niebla{from{transform:translateX(-6%)}to{transform:translateX(6%)}}
        .hj-bicho{position:absolute;z-index:2;display:flex;gap:6px;opacity:0}
        .hj-anim .hj-bicho{animation:hj-bicho 12s ease-in-out infinite}
        .hj-bicho span{width:var(--bs);height:var(--bs);border-radius:50%;background:var(--bc);
          box-shadow:0 0 12px 4px var(--bc)}
        .hj-anim .hj-bicho span{animation:hj-parpadeoBicho 12s ease-in-out infinite}
        @keyframes hj-bicho{0%,100%{opacity:0}12%{opacity:1}80%{opacity:1}92%{opacity:0}}
        @keyframes hj-parpadeoBicho{0%,88%,100%{transform:scaleY(1)}92%,95%{transform:scaleY(.1)}}
        .hj-headline{position:absolute;top:0;left:0;right:0;z-index:10;padding:46px 20px 0;text-align:center}
        .hj-headline h1{font-size:28px;font-weight:800;line-height:1.25;margin:0;text-shadow:0 2px 12px rgba(0,0,0,.8)}
        .hj-headline h1 .hl{color:#b8f56b}
        .hj-headline p{color:#e2e2da;font-size:12px;margin:10px 0 0;text-shadow:0 1px 8px rgba(0,0,0,.85)}
        .hj-glow{position:absolute;z-index:4;border-radius:50%;pointer-events:none;top:158px;left:50%;width:220px;height:220px;
          margin-left:-110px;background:radial-gradient(ellipse at center,rgba(255,190,120,.20) 0%,transparent 62%);filter:blur(6px)}
        .hj-cosa{position:absolute;top:150px;left:50%;width:170px;margin-left:-85px;z-index:5}
        .hj-cosa .hj-cuerpo{display:block;width:100%;height:auto}
        .hj-manos{position:absolute;top:150px;left:50%;width:170px;margin-left:-85px;z-index:7;pointer-events:none}
        .hj-parpado{position:absolute;border-radius:50%;transform:scaleY(0);z-index:6;
          background:radial-gradient(ellipse at 50% 38%,#f9e3c6 0%,#f0c9a0 55%,#e2ac7e 100%);
          box-shadow:inset 0 -2px 4px rgba(120,70,40,.25)}
        .hj-anim .hj-parpado{animation:hj-blink 5.2s ease-in-out infinite}
        @keyframes hj-blink{0%,88%,100%{transform:scaleY(0)}92%,93.5%{transform:scaleY(1)}}
        .hj-cta-zone{position:absolute;left:24px;right:24px;top:300px;z-index:8}
        .hj-cta{display:block;position:relative;overflow:hidden;background:linear-gradient(180deg,#e01a2e,#b3001a);color:#fff;
          font-weight:800;font-size:15px;padding:12px 18px;border-radius:14px;text-align:center;cursor:pointer;border:0;width:100%;
          box-shadow:0 8px 26px rgba(205,0,29,.5),inset 0 1px 0 rgba(255,255,255,.25);font-family:inherit}
        .hj-cta::after{content:"";position:absolute;top:0;bottom:0;width:45%;left:-60%;
          background:linear-gradient(100deg,transparent,rgba(255,255,255,.5),transparent)}
        .hj-anim .hj-cta::after{animation:hj-brillo 3.4s ease-in-out infinite}
        @keyframes hj-brillo{0%{left:-60%}55%,100%{left:130%}}
        @media (prefers-reduced-motion:reduce){.hj-anim .hj-luc,.hj-anim .hj-niebla,.hj-anim .hj-bicho,.hj-anim .hj-bicho span,.hj-anim .hj-parpado,.hj-anim .hj-cta::after{animation:none!important}}
        .hj-ticks{display:flex;gap:6px;margin-top:8px;justify-content:center}
        .hj-ticks span{font-size:10px;color:#e8e8e0;text-shadow:0 1px 6px rgba(0,0,0,.85)}
        .hj-ticks i{font-style:normal;color:#8a8a80}
        @media (min-width:768px){
          .hj-root{height:430px}
          .hj-headline{padding-top:52px}
          .hj-headline h1{font-size:36px}
          .hj-headline p{font-size:14px}
          .hj-cosa{width:200px;margin-left:-100px;top:158px}
          .hj-manos{width:200px;margin-left:-100px;top:158px}
          .hj-glow{top:166px}
          .hj-cta-zone{top:322px;max-width:420px;margin:0 auto}
        }
      `}</style>

      <img aria-hidden="true" className="hj-bg" alt=""
        src="/media/hero-jungla-selva-mobile-opt.webp"
        srcSet="/media/hero-jungla-selva-mobile-opt.webp 640w, /media/hero-jungla-selva-828w.webp 828w, /media/hero-jungla-selva-4k.webp 1280w"
        sizes="100vw" fetchPriority="high" decoding="sync"
        width="640" height="960" />
      <div aria-hidden="true" className="hj-shade" />
      <div className="hj-badge">⚡ Descubre si es recurrible</div>
      <div aria-hidden="true" className="hj-niebla" style={{ top: "8%" }} />
      <div aria-hidden="true" className="hj-niebla" style={{ top: "48%", animationDelay: "-7s" }} />
      {LUCIERNAGAS.map((f, i) => (
        <span key={i} aria-hidden="true" className="hj-luc"
          style={{ left: `${f.l}%`, top: `${f.t}%`, animationDelay: `${f.ld}s`, ["--lx" as string]: `${f.lx}px` }} />
      ))}
      {BICHOS.map((b, i) => (
        <div key={i} aria-hidden="true" className="hj-bicho"
          style={{ left: `${b.l}%`, top: `${b.t}%`, animationDelay: `${b.bd}s`, ["--bs" as string]: `${b.s}px`, ["--bc" as string]: b.c }}>
          <span style={{ animationDelay: `${b.bd}s` }} /><span style={{ animationDelay: `${b.bd}s` }} />
        </div>
      ))}

      <div className="hj-headline">
        <h1>En la jungla de las multas,<br /><span className="hl">Cosa rastrea el fallo</span></h1>
        <p>Analiza tu sanción con IA en 2 minutos y descubre si se puede recurrir · <strong style={{ color: "#fff" }}>Gratis</strong>, sin registro</p>
      </div>

      <div aria-hidden="true" className="hj-glow" />
      <div className="hj-cosa">
        <img className="hj-cuerpo" src="/media/cosa-jungla-apoyado-sm.webp"
          srcSet="/media/cosa-jungla-apoyado-sm.webp 240w, /media/cosa-jungla-apoyado-300w.webp 300w, /media/cosa-jungla-apoyado.webp 735w"
          sizes="170px" fetchPriority="high" alt="Cosa, el mono robot, apoyado en el botón de análisis" />
        {OJOS.map((o, i) => (
          <div key={i} aria-hidden="true" className="hj-parpado"
            style={{ left: `calc(${o.x}% - 6.9%)`, top: `calc(${o.y}% - 6.6%)`, width: "13.8%", aspectRatio: "1/1.05" }} />
        ))}
      </div>

      <div className="hj-cta-zone">
        <button type="button" className="hj-cta" onClick={irAnalizador}>Analizar mi multa gratis</button>
        <div className="hj-ticks"><span>✓ Gratis</span><i>·</i><span>✓ Sin registro</span><i>·</i><span>✓ 2 min</span></div>
      </div>
      <img className="hj-manos" src="/media/cosa-jungla-manos-sm.webp"
        srcSet="/media/cosa-jungla-manos-sm.webp 240w, /media/cosa-jungla-manos-300w.webp 300w, /media/cosa-jungla-manos.webp 735w"
        sizes="170px" alt="" aria-hidden="true" />
    </section>
  );
}
