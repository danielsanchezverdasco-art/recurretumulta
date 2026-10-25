// ── COSA: la IA mascota de RecurreTuMulta.online ──────────────────────────────
// Punto único de verdad de las imágenes de Cosa (avatar definitivo: MONO ROBOT,
// elegido por Daniel el 05/10/2026). Para cambiar de imagen, editar SOLO estas
// líneas: todos los componentes usan estas constantes y nunca rutas hardcodeadas.
// Las imágenes viven en public/media/ (optimizadas con ffmpeg desde
// ~/workspace/cosa-ia/avatars/): la ruta del workspace NO se sirve en producción.
export const AVATAR_COSA = "/media/cosa-avatar.webp";
/** Pose sonriente frontal: hero y secciones destacadas. */
export const AVATAR_COSA_HERO = "/media/cosa-pose-hero.webp";
/** Pose pensando: loaders y tiempos de espera. */
export const AVATAR_COSA_CARGANDO = "/media/cosa-pose-cargando.webp";
/** Pose despistada: página 404. */
export const AVATAR_COSA_404 = "/media/cosa-pose-404.webp";
/** Pose guiño: sello "La elección de Cosa" y marca de agua. */
export const AVATAR_COSA_GUINO = "/media/cosa-pose-guino.webp";
/** Pose colgando del rabo: elemento decorativo juguetón (colgar del borde superior de una tarjeta). */
export const AVATAR_COSA_COLGANDO = "/media/cosa-mono-gamberro-colgado-boca-abajo.webp";

// ── Poses temáticas de la Caza de monos (Temporada 1, 05/10/2026) ────────────
// Mismo personaje (mono robot). 13 poses definitivas generadas por el agente 2
// (verificadas visualmente: policía y galleta perfectas), optimizadas a 256px.
// `legendario` es el mono dorado (1 por temporada, extra).
export const AVATAR_COSA_LEGENDARIO = "/media/cosa-pose-legendario.webp"; // mono legendario dorado
const MONO = (n: string) => `/media/cosa-mono-${n}.webp` as const;

/** Mapa de poses por nombre (para la Caza de monos). */
export const POSES_COSA = {
  frente: AVATAR_COSA,
  hero: AVATAR_COSA_HERO,
  cargando: AVATAR_COSA_CARGANDO,
  "404": AVATAR_COSA_404,
  guino: AVATAR_COSA_GUINO,
  colgando: AVATAR_COSA_COLGANDO,
  legendario: AVATAR_COSA_LEGENDARIO,
  "mono-apoyado": MONO("apoyado"),
  "mono-asomando": MONO("asomando"),
  "mono-durmiendo": MONO("durmiendo"),
  "mono-galleta": MONO("galleta"),
  "mono-colgado": MONO("gamberro-colgado-boca-abajo"),
  "mono-fotobomba": MONO("gamberro-fotobomba"),
  "mono-lengua": MONO("gamberro-lengua"),
  "mono-risa": MONO("gamberro-risa"),
  "mono-mecanico": MONO("mecanico"),
  "mono-policia": MONO("policia"),
  "mono-senala": MONO("senala"),
  "mono-sentado": MONO("sentado"),
  "mono-trepando": MONO("trepando"),
} as const;
export type PoseCosa = keyof typeof POSES_COSA;
/** Poses con imagen vertical (el botón reserva el doble de alto). */
export const POSES_VERTICALES: ReadonlySet<PoseCosa> = new Set(["colgando"] as PoseCosa[]);

// ── "La nota de Cosa": puntuación 0–10 determinista y honesta ────────────────
// Criterio documentado (NO es una opinión editorial: es una fórmula fija sobre
// datos reales de la ficha):
//   · Valor precio/potencia (35 %): €/CV. ≤150 €/CV → 10 · ≥600 €/CV → 0.
//   · Eficiencia (25 %): consumo l/100km (≤4 → 10 · ≥10 → 0) o kWh/100km
//     (≤14 → 10 · ≥22 → 0). Sin consumo verificado se estima desde la etiqueta
//     DGT (Cero≈8, ECO≈7, C≈5, B≈3,5) y se indica en el desglose.
//   · Seguridad (20 %): estrellas EuroNCAP / 5 × 10. SOLO con test verificado.
//     Sin datos → el criterio NO penaliza: su peso se reparte entre el resto.
//   · Garantía (10 %): años de garantía (≥7 → 10 · 5 → 7 · 3 → 5 · 2 → 3).
//   · Practicidad (10 %): maletero en litros (≥600 → 10 · ≤200 → 0).
// Si un criterio no tiene dato (null/undefined), su peso se reparte
// proporcionalmente entre los criterios con dato. Cero datos inventados.

export interface NotaCosaInput {
  precioEur?: number | null;
  potenciaCv?: number | null;
  consumoL100?: number | null;
  consumoKwh100?: number | null;
  etiquetaDgt?: string | null;
  /** Estrellas EuroNCAP verificadas (1-5). null/undefined = sin test: no penaliza. */
  estrellasEuroNCAP?: number | null;
  garantiaAnos?: number | null;
  maleteroL?: number | null;
  /** km de autonomía declarada (motos/patinetes): se usa como practicidad si no hay maletero. */
  autonomiaKm?: number | null;
  /** Peso en kg (motos/patinetes): más ligero = más práctico (≤120 kg → 10 · ≥220 kg → 0). */
  pesoKg?: number | null;
  /** true = el precio no es una tarifa oficial en España (≈ o de otro mercado): no se calcula precio/potencia. */
  precioNoOficialEspana?: boolean;
  /** true = EuroNCAP no prueba este tipo de vehículo (motos, patinetes): el criterio no existe. */
  noAplicaEuroNCAP?: boolean;
}

export interface NotaCosaCriterio {
  clave: string;
  etiqueta: string;
  puntos: number; // 0-10
  peso: number; // peso final aplicado (repartido)
  nota: string; // texto corto del dato usado ("—" si estimado/sin dato)
}

export interface NotaCosaResultado {
  nota: number; // 0-10 con 1 decimal
  criterios: NotaCosaCriterio[];
  justificacion: string; // mini justificación determinista
  sinEuroNCAP: boolean;
}

const clamp10 = (v: number) => Math.min(10, Math.max(0, v));
/** Interpolación lineal: v<=bueno → 10, v>=malo → 0 (menos es mejor). */
const escala = (v: number, bueno: number, malo: number) =>
  clamp10(((malo - v) / (malo - bueno)) * 10);
/** Interpolación lineal invertida: v>=bueno → 10, v<=malo → 0 (más es mejor). */
const escalaInv = (v: number, bueno: number, malo: number) =>
  clamp10(((v - malo) / (bueno - malo)) * 10);

function garantiaAPuntos(anos: number): number {
  if (anos >= 7) return 10;
  if (anos >= 5) return 7;
  if (anos >= 4) return 6;
  if (anos >= 3) return 5;
  return 3;
}

function etiquetaAPuntos(et: string): number | null {
  const e = et.trim().toUpperCase();
  if (e === "CERO" || e === "0") return 8;
  if (e === "ECO") return 7;
  if (e === "C") return 5;
  if (e === "B") return 3.5;
  return null;
}

export function calcularNotaCosa(input: NotaCosaInput): NotaCosaResultado {
  type Crudo = { clave: string; etiqueta: string; puntos: number | null; nota: string };
  const crudos: Crudo[] = [];

  // 1. Valor precio/potencia
  if (!input.precioNoOficialEspana && input.precioEur != null && input.potenciaCv != null && input.potenciaCv > 0) {
    const ratio = input.precioEur / input.potenciaCv;
    crudos.push({
      clave: "valor",
      etiqueta: "Relación precio/potencia",
      puntos: escala(ratio, 150, 600),
      nota: `${Math.round(ratio)} €/CV`,
    });
  } else {
    crudos.push({
      clave: "valor",
      etiqueta: "Relación precio/potencia",
      puntos: null,
      nota: input.precioNoOficialEspana ? "sin precio oficial en España" : "—",
    });
  }

  // 2. Eficiencia
  if (input.consumoL100 != null) {
    crudos.push({
      clave: "eficiencia",
      etiqueta: "Consumo",
      puntos: escala(input.consumoL100, 4, 10),
      nota: `${String(input.consumoL100).replace(".", ",")} l/100km`,
    });
  } else if (input.consumoKwh100 != null) {
    crudos.push({
      clave: "eficiencia",
      etiqueta: "Consumo eléctrico",
      puntos: escala(input.consumoKwh100, 14, 22),
      nota: `${String(input.consumoKwh100).replace(".", ",")} kWh/100km`,
    });
  } else if (input.etiquetaDgt) {
    const p = etiquetaAPuntos(input.etiquetaDgt);
    crudos.push({
      clave: "eficiencia",
      etiqueta: "Eficiencia (estimada por etiqueta DGT)",
      puntos: p,
      nota: p != null ? `etiqueta ${input.etiquetaDgt} (estimación)` : "—",
    });
  } else {
    crudos.push({ clave: "eficiencia", etiqueta: "Consumo", puntos: null, nota: "—" });
  }

  // 3. Seguridad EuroNCAP (solo verificado; sin datos no penaliza)
  const sinEuroNCAP = !input.noAplicaEuroNCAP && input.estrellasEuroNCAP == null;
  if (!input.noAplicaEuroNCAP) crudos.push({
    clave: "seguridad",
    etiqueta: "Seguridad EuroNCAP",
    puntos: sinEuroNCAP ? null : clamp10((input.estrellasEuroNCAP! / 5) * 10),
    nota: sinEuroNCAP ? "sin test verificado" : `${input.estrellasEuroNCAP}/5 estrellas`,
  });

  // 4. Garantía
  crudos.push({
    clave: "garantia",
    etiqueta: "Garantía",
    puntos: input.garantiaAnos != null ? garantiaAPuntos(input.garantiaAnos) : null,
    nota: input.garantiaAnos != null ? `${input.garantiaAnos} años` : "—",
  });

  // 5. Practicidad: maletero, o autonomía/peso en motos y patinetes
  if (input.maleteroL != null) {
    crudos.push({
      clave: "practicidad",
      etiqueta: "Practicidad (maletero)",
      puntos: escalaInv(input.maleteroL, 600, 200),
      nota: `${input.maleteroL} L`,
    });
  } else if (input.autonomiaKm != null || input.pesoKg != null) {
    const partes: number[] = [];
    if (input.autonomiaKm != null) partes.push(escalaInv(input.autonomiaKm, 200, 40));
    if (input.pesoKg != null) partes.push(escala(input.pesoKg, 120, 220));
    crudos.push({
      clave: "practicidad",
      etiqueta: "Practicidad",
      puntos: partes.length ? partes.reduce((a, b) => a + b, 0) / partes.length : null,
      nota:
        input.autonomiaKm != null
          ? `${input.autonomiaKm} km de autonomía`
          : input.pesoKg != null
            ? `${input.pesoKg} kg`
            : "—",
    });
  } else {
    crudos.push({ clave: "practicidad", etiqueta: "Practicidad", puntos: null, nota: "—" });
  }

  // Pesos base; se reparten los de criterios sin dato
  const PESOS: Record<string, number> = {
    valor: 0.35,
    eficiencia: 0.25,
    seguridad: 0.2,
    garantia: 0.1,
    practicidad: 0.1,
  };
  const conDato = crudos.filter((c) => c.puntos != null);
  const pesoTotal = conDato.reduce((a, c) => a + PESOS[c.clave], 0);

  const criterios: NotaCosaCriterio[] = crudos.map((c) => ({
    clave: c.clave,
    etiqueta: c.etiqueta,
    puntos: c.puntos ?? 0,
    peso: c.puntos != null && pesoTotal > 0 ? PESOS[c.clave] / pesoTotal : 0,
    nota: c.nota,
  }));

  const notaBruta = criterios.reduce((a, c) => a + c.puntos * c.peso, 0);
  const nota = Math.round(clamp10(notaBruta) * 10) / 10;

  // ── Justificación determinista: los 2 criterios con más aporte ──
  const aportes = criterios
    .filter((c) => c.peso > 0)
    .map((c) => ({ ...c, aporte: c.puntos * c.peso }))
    .sort((a, b) => b.aporte - a.aporte);
  const frases: Record<string, (p: number) => string | null> = {
    valor: (p) => (p >= 7 ? "gran relación precio/potencia" : p <= 3.5 ? "precio alto para su potencia" : null),
    eficiencia: (p) => (p >= 7 ? "consumo contenido" : p <= 3.5 ? "consumo elevado" : null),
    seguridad: (p) => (p >= 8 ? "máxima seguridad EuroNCAP" : p >= 6 ? "buena seguridad EuroNCAP" : p <= 4 ? "seguridad EuroNCAP mejorable" : null),
    garantia: (p) => (p >= 7 ? "garantía por encima de la media" : null),
    practicidad: (p) => (p >= 7 ? "muy práctico en el día a día" : p <= 3.5 ? "practicidad justa" : null),
  };
  // Puntos fuertes (p >= 7) y débiles (p <= 3.5) por separado: «precio alto» nunca es un «destaca por».
  const fuertes: string[] = [];
  const debiles: string[] = [];
  for (const a of aportes) {
    const f = frases[a.clave]?.(a.puntos);
    if (!f) continue;
    if (a.puntos >= 7) {
      if (fuertes.length < 2) fuertes.push(f);
    } else if (debiles.length < 2) debiles.push(f);
  }
  let justificacion =
    fuertes.length > 0 ? `Destaca por ${fuertes.join(" y ")}.` : "Nota calculada con los datos verificados de la ficha.";
  if (debiles.length > 0) justificacion += ` En contra: ${debiles.join(" y ")}.`;
  if (sinEuroNCAP) {
    // (24/10) coletilla EuroNCAP repetida en 100+ fichas eliminada: no aporta valor único
  }

  return { nota, criterios, justificacion, sinEuroNCAP };
}

/**
 * "La elección de Cosa": compara dos entradas normalizadas y devuelve el índice
 * (0 o 1) de la que tiene mejor nota. Criterio determinista y honesto: gana la
 * mejor relación calidad-precio según los datos reales de la ficha
 * (ver calcularNotaCosa). Documentado aquí para que nadie lo "arregle" a mano.
 */
export function elegirCosaIndice(a: NotaCosaInput, b: NotaCosaInput): 0 | 1 {
  const na = calcularNotaCosa(a).nota;
  const nb = calcularNotaCosa(b).nota;
  return nb > na ? 1 : 0;
}
