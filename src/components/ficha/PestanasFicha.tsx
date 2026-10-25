// 18/10/2026 (rediseño fichas): pestañas de sección fijas arriba, con anclas y
// resaltado de la sección visible (IntersectionObserver). Solo pinta las
// secciones que existen en el DOM de esa ficha.
import { useEffect, useRef, useState } from "react";

export interface SeccionFicha { id: string; label: string }

export default function PestanasFicha({ secciones }: { secciones: SeccionFicha[] }) {
  const [presentes, setPresentes] = useState<SeccionFicha[]>(secciones);
  const [activa, setActiva] = useState(secciones[0]?.id ?? "");
  const navRef = useRef<HTMLDivElement>(null);
  const clave = secciones.map((s) => s.id).join("|");

  useEffect(() => {
    // Las secciones lazy pueden tardar: se recalcula un par de veces.
    let io: IntersectionObserver | null = null;
    const montar = () => {
      const ok = secciones.filter((s) => document.getElementById(s.id));
      setPresentes(ok);
      io?.disconnect();
      if (typeof IntersectionObserver === "undefined") return;
      io = new IntersectionObserver(
        (entries) => {
          const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          if (vis[0]) setActiva(vis[0].target.id);
        },
        { rootMargin: "-130px 0px -60% 0px", threshold: 0 },
      );
      ok.forEach((s) => io!.observe(document.getElementById(s.id)!));
    };
    montar();
    const t1 = window.setTimeout(montar, 1500);
    const t2 = window.setTimeout(montar, 5000);
    return () => { io?.disconnect(); clearTimeout(t1); clearTimeout(t2); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clave]);

  // Mantener visible la pestaña activa en móvil.
  useEffect(() => {
    const nav = navRef.current;
    const el = nav?.querySelector<HTMLElement>(`[data-sec="${activa}"]`);
    if (nav && el) nav.scrollTo({ left: el.offsetLeft - 16, behavior: "smooth" });
  }, [activa]);

  if (presentes.length < 2) return null;
  return (
    <nav aria-label="Secciones de la ficha" className="sticky top-16 z-30 -mx-4 mt-4 border-b border-gray-200 bg-gray-50/95 px-4 backdrop-blur print:hidden">
      <div ref={navRef} className="flex gap-1 overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {presentes.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            data-sec={s.id}
            aria-current={activa === s.id ? "true" : undefined}
            onClick={() => setActiva(s.id)}
            className={`shrink-0 rounded-full px-3 py-1.5 text-sm font-bold transition ${activa === s.id ? "bg-red-600 text-white" : "text-gray-600 hover:bg-gray-200"}`}
          >
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
