// HISTORIA LOTE-E-B — Honda Gold Wing 2026 y SYM Maxsym TL 508 2026.
// Investigación verificada 18/10/2026 (press kit oficial Honda 26YM en
// hondanews.eu, SYM España en sym.com.es, prensa española del motor).
// foto: IA de época en los hitos antiguos; foto real en el hito actual.
import type { HistoriaModelo } from "./historia-modelos.ts";

export const HISTORIA_LOTE_E_B: Record<string, HistoriaModelo> = {
  "honda-gold-wing-2026-ficha-tecnica-precio": {
    lanzamiento: 1975,
    hitos: [
      { anio: 1975, tipo: "lanzamiento", cambio: "nace la GL1000: la primera Gold Wing, una naked de 1.000 cc con bóxer de 4 cilindros", foto: "/media/historia-honda-gold-wing-2026-ficha-tecnica-precio-1975.webp" },
      { anio: 2018, tipo: "restyling", cambio: "sexta generación: rediseño total, bóxer de 6 cilindros y 1.833 cc, DCT de 7 marchas", foto: "/media/historia-honda-gold-wing-2026-ficha-tecnica-precio-2018.webp" },
      { anio: 2025, tipo: "restyling", cambio: "50º aniversario: CarPlay y Android Auto por WiFi, altavoces mejorados, Euro5+", foto: "/media/motos/honda-gold-wing-2026-ficha-tecnica-precio-3.webp" },
      { anio: 2026, tipo: "restyling", cambio: "nuevo color Mat Bullet Silver; 126 CV y 373 kg (393 kg la Tour DCT)", foto: "/media/motos/honda-gold-wing-2026-ficha-tecnica-precio-1.webp" },
    ],
  },
  "sym-maxsym-tl-508-2026-ficha-tecnica-precio": {
    lanzamiento: 2020,
    hitos: [
      { anio: 2020, tipo: "lanzamiento", cambio: "Maxsym TL 500: el primer maxiscooter bicilíndrico de SYM", foto: "/media/historia-sym-maxsym-tl-508-2026-ficha-tecnica-precio-2020.webp" },
      { anio: 2022, tipo: "lanzamiento", cambio: "Maxsym TL 508 Euro 5: 508 cc, 45,5 CV, TCS y Smart Key; sustituye al TL 465", foto: "/media/historia-sym-maxsym-tl-508-2026-ficha-tecnica-precio-2022.webp" },
      { anio: 2026, tipo: "restyling", cambio: "gama 2026: 8.999 € en promoción con seguro gratis y 5 años de garantía", foto: "/media/sym-maxsym-tl-508-2026-ficha-tecnica-precio-oficial.webp" },
    ],
  },
};
