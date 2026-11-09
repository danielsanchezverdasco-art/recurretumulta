import { motion } from "motion/react";
import { Coins, Share2, Sparkles, ArrowRight, Users, Megaphone } from "lucide-react";

const STEPS = [
  { icon: Users, label: "Regístrate gratis" },
  { icon: Share2, label: "Comparte tu enlace" },
  { icon: Coins, label: "Cobra el 20%" },
];

// Sección animada de la landing que invita a unirse al programa de afiliados
// "Gana dinero con nosotros". Pensada para colocarse debajo de la tabla de precios.
export default function GanaDineroLanding() {

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="block group">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-900 to-amber-950 text-white p-6 md:p-8 shadow-xl">
          {/* Fondo animado: monedas flotantes */}
          <motion.div
            className="absolute -right-8 -top-8 w-40 h-40 bg-amber-400/10 rounded-full blur-2xl"
            animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-1/4 -bottom-10 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          />
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-amber-300/30"
              style={{ left: `${8 + i * 16}%`, top: `${10 + (i % 3) * 22}%` }}
              animate={{ y: [0, -14, 0], rotate: [0, 12, 0], opacity: [0.25, 0.55, 0.25] }}
              transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
            >
              <Coins className="w-5 h-5" />
            </motion.div>
          ))}

          <div className="relative z-10 space-y-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3.5 py-1.5 text-xs font-bold text-amber-300"
            >
              <Megaphone className="w-3.5 h-3.5" /> Programa de afiliados
            </motion.div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div className="space-y-2 max-w-md">
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-balance">
                  Gana dinero <span className="text-amber-400">con nosotros</span>
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Únete gratis, comparte tu enlace único en WhatsApp o redes sociales y gana el{" "}
                  <span className="text-amber-300 font-bold">20% de comisión</span> por cada venta que generes.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="shrink-0"
              >
                <span className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 font-black text-sm rounded-xl h-12 px-6 shadow-lg shadow-amber-400/30 cursor-pointer">
                  <Sparkles className="w-4 h-4" />
                  Quiero registrarme
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.div>
            </div>

            {/* Pasos */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {STEPS.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1.5"
                >
                  <Icon className="w-3.5 h-3.5 text-amber-300" />
                  <span className="text-xs font-bold text-white">{label}</span>
                  {i < STEPS.length - 1 && <ArrowRight className="w-3 h-3 text-white/30 ml-1 hidden sm:block" />}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
