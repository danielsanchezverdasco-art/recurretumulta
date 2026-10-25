// 18/10/2026 (rediseño fichas): fachada de YouTube. Miniatura + botón de play;
// el iframe solo se carga al tocar (antes cargaba un cuadro en blanco y ~1 MB de JS).
import { useState } from "react";

export function idDeYoutube(urlOId: string): string | null {
  if (/^[\w-]{11}$/.test(urlOId)) return urlOId;
  const m = urlOId.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/);
  return m ? m[1] : null;
}

export default function VideoYoutube({ id, titulo }: { id: string; titulo: string }) {
  const vid = idDeYoutube(id);
  const [on, setOn] = useState(false);
  const [thumb, setThumb] = useState(vid ? `https://i.ytimg.com/vi/${vid}/hqdefault.jpg` : "");
  if (!vid) return null;
  if (on)
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${vid}?autoplay=1&rel=0`}
        title={titulo}
        className="aspect-video w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  return (
    <button type="button" onClick={() => setOn(true)} aria-label={`Reproducir vídeo: ${titulo}`} className="group relative block aspect-video w-full overflow-hidden bg-black">
      {thumb && (
        <img src={thumb} alt="" loading="lazy" decoding="async" width={480} height={360} className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
          onError={() => setThumb(`https://i.ytimg.com/vi/${vid}/mqdefault.jpg`)} />
      )}
      <span className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 68 48" className="h-12 w-[68px] drop-shadow-lg" aria-hidden="true">
          <path d="M66.5 7.7a8.5 8.5 0 0 0-6-6C55.2.3 34 .3 34 .3s-21.2 0-26.5 1.4a8.5 8.5 0 0 0-6 6C.1 13 .1 24 .1 24s0 11 1.4 16.3a8.5 8.5 0 0 0 6 6C12.8 47.7 34 47.7 34 47.7s21.2 0 26.5-1.4a8.5 8.5 0 0 0 6-6C67.9 35 67.9 24 67.9 24s0-11-1.4-16.3z" fill="#f00" />
          <path d="M45 24 27 14v20z" fill="#fff" />
        </svg>
      </span>
    </button>
  );
}
