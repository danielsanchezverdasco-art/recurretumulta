import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Check, X, Loader2, Video, Camera, Tv } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { useQuery, useMutation } from "convex/react";
import { LazyConvexProvider } from "@/components/providers/convex-lazy.tsx";
import { useCurrentUser } from "@/lib/useCurrentUser.ts";
import { withSession } from "@/lib/authSimple.ts";
import { api } from "@/convex/_generated/api.js";
import { toast } from "sonner";
import { ConvexError } from "convex/values";

function CanalIcon({ canal }: { canal?: string }) {
  if (!canal) return <Heart className="w-3.5 h-3.5 text-red-400" />;
  const c = canal.toLowerCase();
  if (c.includes("youtube")) return <Video className="w-3.5 h-3.5 text-red-500" />;
  if (c.includes("instagram")) return <Camera className="w-3.5 h-3.5 text-pink-500" />;
  if (c.includes("twitch")) return <Tv className="w-3.5 h-3.5 text-purple-500" />;
  return <Heart className="w-3.5 h-3.5 text-red-400" />;
}

// ── Widget compacto para pegar en el analizador ───────────────────────────────
function CodigoCreadorWidgetInner() {
  const [codigo, setCodigo] = useState("");
  const [applying, setApplying] = useState(false);
  const [applied, setApplied] = useState(false);
  const [open, setOpen] = useState(false);

  const currentUser = useCurrentUser();
  const aplicarCodigo = useMutation(api.creadores.aplicarCodigo);
  const validarCodigo = useQuery(
    api.creadores.validarCodigo,
    codigo.trim().length >= 3 ? { codigo: codigo.toUpperCase().trim() } : "skip"
  );

  // Si el usuario ya tiene código aplicado, mostrarlo
  const codigoYaAplicado = currentUser?.codigoCreadorUsado;

  if (codigoYaAplicado) {
    return (
      <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-3 py-2">
        <Heart className="w-3.5 h-3.5 text-green-600 fill-green-600" />
        <span className="text-xs font-bold text-green-700">Apoyando a: {codigoYaAplicado}</span>
        <Check className="w-3.5 h-3.5 text-green-500 ml-auto" />
      </div>
    );
  }

  const handleAplicar = async () => {
    if (!codigo.trim()) return;
    setApplying(true);
    try {
      const result = await aplicarCodigo(withSession({ codigo }));
      setApplied(true);
      toast.success(`¡Gracias por apoyar a ${result.nombre}! 💪`);
    } catch (err) {
      if (err instanceof ConvexError) {
        const { message } = err.data as { message: string };
        toast.error(message);
      } else {
        toast.error("Código no válido");
      }
    } finally {
      setApplying(false);
    }
  };

  if (applied) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-3 py-2"
      >
        <Heart className="w-3.5 h-3.5 text-green-600 fill-green-600" />
        <span className="text-xs font-bold text-green-700">¡Creador apoyado! Gracias.</span>
        <Check className="w-3.5 h-3.5 text-green-500 ml-auto" />
      </motion.div>
    );
  }

  return (
    <div className="space-y-1.5">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="w-full flex items-center gap-2 text-xs text-gray-400 hover:text-red-500 transition-colors py-1 cursor-pointer"
        >
          <Heart className="w-3.5 h-3.5" />
          <span>¿Tienes el código de un creador? Apóyalo aquí</span>
        </button>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-2"
          >
            <div className="flex items-center gap-2">
              <Heart className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span className="text-xs font-bold text-gray-700">Apoya a tu creador</span>
              <button onClick={() => setOpen(false)} aria-label="Cerrar" className="ml-auto cursor-pointer">
                <X className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600" />
              </button>
            </div>

            <div className="flex gap-2">
              <Input
                value={codigo}
                onChange={(e) => setCodigo(e.target.value.toUpperCase())}
                placeholder="CÓDIGO DEL CREADOR"
                className="flex-1 h-9 text-xs font-bold tracking-widest uppercase"
                maxLength={20}
                onKeyDown={(e) => e.key === "Enter" && handleAplicar()}
              />
              <Button
                size="sm"
                className="h-9 px-3 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg"
                onClick={handleAplicar}
                disabled={applying || !codigo.trim()}
              >
                {applying ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : "Aplicar"}
              </Button>
            </div>

            {/* Preview del creador mientras escribe */}
            <AnimatePresence>
              {validarCodigo && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2"
                >
                  <CanalIcon canal={validarCodigo.canal} />
                  <div>
                    <p className="text-xs font-black text-gray-900">{validarCodigo.nombre}</p>
                    {validarCodigo.canal && (
                      <p className="text-[10px] text-gray-500">{validarCodigo.canal}</p>
                    )}
                  </div>
                  <Check className="w-3.5 h-3.5 text-green-500 ml-auto" />
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-[10px] text-gray-400 leading-relaxed">
              Al usar el código, una parte de tu compra va directamente al creador. No cambia el precio para ti.
            </p>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

// ── Tarjeta grande para sección de landing ────────────────────────────────────
function CreadorLandingSectionInner() {
  const [codigo, setCodigo] = useState("");
  const [applying, setApplying] = useState(false);
  const [applied, setApplied] = useState(false);

  const currentUser = useCurrentUser();
  const aplicarCodigo = useMutation(api.creadores.aplicarCodigo);
  const validarCodigo = useQuery(
    api.creadores.validarCodigo,
    codigo.trim().length >= 3 ? { codigo: codigo.toUpperCase().trim() } : "skip"
  );

  const codigoYaAplicado = currentUser?.codigoCreadorUsado;

  const handleAplicar = async () => {
    if (!codigo.trim()) return;
    setApplying(true);
    try {
      const result = await aplicarCodigo(withSession({ codigo }));
      setApplied(true);
      toast.success(`¡Gracias por apoyar a ${result.nombre}! 💪`);
    } catch (err) {
      if (err instanceof ConvexError) {
        const { message } = err.data as { message: string };
        toast.error(message);
      } else {
        toast.error("Código no válido");
      }
    } finally {
      setApplying(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-6 text-white space-y-4 shadow-xl shadow-red-200"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center">
          <Heart className="w-5 h-5 text-white fill-white" />
        </div>
        <div>
          <p className="text-xs font-semibold text-red-200 uppercase tracking-wide">Programa de Creadores</p>
          <h3 className="text-lg font-black">Apoya a tu creador favorito</h3>
        </div>
      </div>

      <p className="text-sm text-red-100 leading-relaxed">
        Si un youtuber o creador te recomendó RecurreTuMulta.online, usa su código al comprar tu recurso.
        Recibirá una <strong className="text-white">comisión directa</strong> sin coste adicional para ti.
      </p>

      {/* Input de código — directo en la sección */}
      {codigoYaAplicado || applied ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 bg-white/15 border border-white/30 rounded-xl px-4 py-3"
        >
          <Heart className="w-4 h-4 text-white fill-white shrink-0" />
          <span className="text-sm font-black text-white">
            Apoyando a: {codigoYaAplicado ?? codigo.toUpperCase()}
          </span>
          <Check className="w-4 h-4 text-green-300 ml-auto shrink-0" />
        </motion.div>
      ) : (
        <div className="space-y-2">
          <div className="flex gap-2">
            <Input
              value={codigo}
              onChange={(e) => setCodigo(e.target.value.toUpperCase())}
              placeholder="CÓDIGO DEL CREADOR"
              className="flex-1 h-11 text-sm font-black tracking-widest uppercase bg-white/15 border-white/30 text-white placeholder:text-white/50 focus:bg-white/20"
              maxLength={20}
              onKeyDown={(e) => e.key === "Enter" && handleAplicar()}
            />
            <Button
              className="h-11 px-5 bg-white text-red-600 hover:bg-white/90 font-black text-sm rounded-xl shrink-0"
              onClick={handleAplicar}
              disabled={applying || !codigo.trim()}
            >
              {applying ? <Loader2 className="w-4 h-4 animate-spin" /> : "Activar"}
            </Button>
          </div>

          {/* Preview del creador mientras escribe */}
          <AnimatePresence>
            {validarCodigo && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="flex items-center gap-2 bg-white/15 border border-white/30 rounded-xl px-3 py-2"
              >
                <CanalIcon canal={validarCodigo.canal} />
                <div>
                  <p className="text-xs font-black text-white">{validarCodigo.nombre}</p>
                  {validarCodigo.canal && (
                    <p className="text-[10px] text-red-200">{validarCodigo.canal}</p>
                  )}
                </div>
                <Check className="w-3.5 h-3.5 text-green-300 ml-auto" />
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-[10px] text-red-200 leading-relaxed">
            Al usar el código, una parte de tu compra va directamente al creador. No cambia el precio para ti.
          </p>
        </div>
      )}

      <p className="text-[10px] text-red-200 text-center">
        ¿Eres creador? Escríbenos a{" "}
        <a href="mailto:creadores@recurretumulta.online" className="text-white underline font-bold">
          creadores@recurretumulta.online
        </a>{" "}
        para obtener tu código personalizado.
      </p>
    </motion.section>
  );
}

export function CodigoCreadorWidget() {
  return (
    <LazyConvexProvider>
      <CodigoCreadorWidgetInner />
    </LazyConvexProvider>
  );
}

export function CreadorLandingSection() {
  return (
    <LazyConvexProvider>
      <CreadorLandingSectionInner />
    </LazyConvexProvider>
  );
}
