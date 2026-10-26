// Modal de anuncio de video — el usuario lo ve a cambio de +10 puntos
// El video se simula con un iframe de YouTube (sin-publicidad) o con un video tag.
// En producción integrar con el SDK de Google IMA para rewarded video ads.

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Play, Gift, Clock } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { LazyConvexProvider } from "@/components/providers/convex-lazy.tsx";
import { toast } from "sonner";
import { useAuthSimple, withSession } from "@/lib/authSimple.ts";

// URL del video de anuncio (placeholder — reemplazar con IMA SDK en producción)
const AD_VIDEO_URL = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
const AD_DURATION_SECS = 15; // segundos mínimos para ganar puntos

type VideoAdModalProps = {
  open: boolean;
  onClose: () => void;
  onRewarded?: (newPoints: number) => void;
};

function VideoAdModalInner({ open, onClose, onRewarded }: VideoAdModalProps) {
  const [phase, setPhase] = useState<"intro" | "playing" | "done">("intro");
  const [secondsLeft, setSecondsLeft] = useState(AD_DURATION_SECS);
  const [canSkip, setCanSkip] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const rewardAd = useMutation(api.puntos.rewardAdView);

  // Reset al abrir
  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => setPhase("intro"));;
      setSecondsLeft(AD_DURATION_SECS);
      setCanSkip(false);
    }
  }, [open]);

  const startAd = () => {
    setPhase("playing");
    videoRef.current?.play().catch(() => {});

    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          setCanSkip(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleVideoEnded = async () => {
    clearInterval(intervalRef.current!);
    setPhase("done");
    try {
      const result = await rewardAd(withSession({}));
      toast.success(`+${result.ganados} puntos ganados 🎉`);
      onRewarded?.(result.points);
    } catch {
      toast.error("Error al acreditar puntos. Inténtalo de nuevo.");
    }
  };

  const handleSkip = async () => {
    if (!canSkip) return;
    videoRef.current?.pause();
    clearInterval(intervalRef.current!);
    await handleVideoEnded();
  };

  // Cleanup al cerrar
  const handleClose = () => {
    clearInterval(intervalRef.current!);
    videoRef.current?.pause();
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b bg-gray-50">
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-red-500" />
                <span className="text-sm font-black text-gray-900">+10 puntos gratis</span>
              </div>
              {phase !== "playing" && (
                <button onClick={handleClose} aria-label="Cerrar" className="text-gray-400 hover:text-gray-600 cursor-pointer">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Fase: intro */}
            {phase === "intro" && (
              <div className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto">
                  <Play className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <p className="font-black text-gray-900 text-base">Ver un anuncio corto</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Mira {AD_DURATION_SECS} segundos de publicidad y gana <strong>+10 puntos</strong>.
                    Con 500 puntos consigues 1 PDF gratis.
                  </p>
                </div>
                <Button onClick={startAd} className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl font-black">
                  Ver anuncio ahora
                </Button>
              </div>
            )}

            {/* Fase: reproduciendo */}
            {phase === "playing" && (
              <div className="relative bg-black aspect-video">
                <video
                  ref={videoRef}
                  src={AD_VIDEO_URL}
                  aria-label="Anuncio en vídeo"
                  className="w-full h-full object-cover"
                  muted={false}
                  onEnded={handleVideoEnded}
                  playsInline
                />
                {/* Contador y botón skip */}
                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                  {!canSkip ? (
                    <div className="flex items-center gap-1.5 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                      <Clock className="w-3 h-3" />
                      {secondsLeft}s
                    </div>
                  ) : (
                    <button
                      onClick={handleSkip}
                      className="bg-white text-gray-900 text-xs px-4 py-1.5 rounded-full font-black hover:bg-gray-100 cursor-pointer"
                    >
                      Continuar →
                    </button>
                  )}
                </div>
                {/* Label publicitario */}
                <div className="absolute top-2 left-2 bg-black/50 text-white text-[10px] px-2 py-0.5 rounded font-semibold">
                  Anuncio
                </div>
              </div>
            )}

            {/* Fase: completado */}
            {phase === "done" && (
              <div className="p-6 text-center space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto"
                >
                  <Gift className="w-8 h-8 text-green-500" />
                </motion.div>
                <div>
                  <p className="font-black text-gray-900 text-base">¡+10 puntos ganados!</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Sigue viendo anuncios para llegar a 500 puntos y obtener tu PDF gratis.
                  </p>
                </div>
                <Button onClick={handleClose} className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl font-black">
                  Cerrar
                </Button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function VideoAdModal(props: VideoAdModalProps) {
  return (
    <LazyConvexProvider>
      <VideoAdModalInner {...props} />
    </LazyConvexProvider>
  );
}

// ── Botón de acceso rápido al video ad (para usar en cualquier página) ────────
function VideoAdButtonSinProvider({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const { isAuthenticated } = useAuthSimple();

  if (!isAuthenticated) return null;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 cursor-pointer ${className}`}
      >
        <Play className="w-4 h-4" />
        Ver anuncio (+10 pts)
      </button>
      <VideoAdModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

// 26/10/2026 (fix menú móvil fichas): usa hooks de convex/react; se autoenvuelve en
// LazyConvexProvider para no depender del provider raíz diferido («Could not find Convex client»).
export function VideoAdButton(props: { className?: string }) {
  return (
    <LazyConvexProvider>
      <VideoAdButtonSinProvider {...props} />
    </LazyConvexProvider>
  );
}
