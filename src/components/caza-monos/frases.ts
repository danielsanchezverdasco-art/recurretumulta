// Frases y variantes de los monos de la Caza de monos (05/10/2026).
// - Frases en primera persona: cada mono "habla" en su bocadillo.
// - Variante visual determinista (0-7) derivada del hash del ID del mono:
//   espejo/rotación/tono. No hay dos monos iguales.
// - Pose temática según la sección de la página (13 poses definitivas del
//   mono robot, generadas por el agente 2 y verificadas visualmente).
import type { PoseCosa } from "@/lib/cosa";

/** Frases por pose (primera persona, tono juguetón). */
export const FRASES_MONO: Record<string, string[]> = {
  "mono-mecanico": [
    "¡Esta ficha la he revisado yo, está perfecta! 🔧",
    "¿Un tornillo suelto? ¡Yo no he sido! 🔧",
  ],
  "mono-policia": [
    "Alto ahí: ¿ya has analizado tu multa? 🚓",
    "Yo solo multo a los que no cazan monos. 🚓",
  ],
  "mono-apoyado": [
    "Descansando un rato entre caza y caza… 😌",
    "Apoyado aquí, que cazar cansa. ¡Casi me pillas! 😌",
  ],
  "mono-asomando": [
    "¡Te he visto! ¿Me has visto tú a mí? 👀",
    "Solo asomaba la cabeza… ¡cazado! 👀",
  ],
  "mono-durmiendo": [
    "Zzz… ¿me echaba una siesta y me cazas? 😴",
    "¡Eh! ¡Que estaba durmiendo! 😴",
  ],
  "mono-galleta": [
    "Esta galleta es mi soborno. ¿Funciona? 🍪",
    "Te doy la galleta si me cazas flojito. 🍪",
  ],
  "mono-colgado": [
    "¡Aguanto colgado todo el día! ¡Cázame si puedes! 🙈",
    "Del rabo colgado, como los buenos. ¡Clic! 🙈",
  ],
  "mono-fotobomba": [
    "¡FOTOBOMBA! ¡Salgo en todas las fotos! 📸",
    "¿Hacías una foto? ¡Ya salgo yo! 📸",
  ],
  "mono-lengua": [
    "¡Nananá, no me pillas! 👅",
    "¿Me sacas la lengua tú a mí? ¡Te he ganado! 👅",
  ],
  "mono-risa": [
    "¡Jajaja, me parto! ¡Casi no me ves! 😂",
    "¡Qué risa! ¡Otro cazador más! 😂",
  ],
  "mono-senala": [
    "¡Eh, por aquí! ¡El mono está aquí! 👉",
    "Te señalo el camino… ¡pero cázame a mí! 👉",
  ],
  "mono-sentado": [
    "Sentado, esperando a que me caces. 🪑",
    "¿Te sientas conmigo un rato? ¡Cazado! 🪑",
  ],
  "mono-trepando": [
    "¡Trepando por la web como un campeón! 🧗",
    "¡Casi llego arriba! ¡Cázame antes! 🧗",
  ],
  legendario: [
    "✨ ¡EL LEGENDARIO! ¡Me has encontrado! ¡Eres una leyenda! ✨",
  ],
};

/** Frases al huir: el mono se cambia de escondite y deja una pista. */
export const FRASES_HUIDA = [
  "¡Me aburría de esperarte! Búscame en el otro lado… 🙈",
  "¡Demasiado lento! Me cambio de escondite… 🙈",
  "¡Uy, casi! Pero me muevo por aquí mismo… 🙈",
  "¡Que no me pillas! Prueba más abajo… 🙈",
  "¡Me piro! Sigo en esta página, búscame bien… 🙈",
];

/** Plantillas de pista al huir: se componen con la zona del nuevo escondite. */
export const PLANTILLAS_PISTA_HUIDA = [
  "¡Me aburría de esperarte! Me he ido {zona} 😜",
  "¡Demasiado lento! Búscame {zona} 😜",
  "¡Que no me pillas! Me escondo {zona} 🙈",
  "¡Me piro! Estoy {zona}, a ver si me encuentras 🙈",
];

/** Describe la zona de un escondite para la pista de huida. */
export function describirZona(topPct: number, lado: "izq" | "der"): string {
  const vertical = topPct < 33 ? "arriba del todo" : topPct > 66 ? "abajo del todo" : "por el medio";
  const horizontal = lado === "izq" ? "a la izquierda" : "a la derecha";
  return `${vertical} ${horizontal}`;
}

/** Pista de huida determinista según el nº de huidas. */
export function pistaHuida(huidas: number, topPct: number, lado: "izq" | "der"): string {
  const plantilla = PLANTILLAS_PISTA_HUIDA[huidas % PLANTILLAS_PISTA_HUIDA.length];
  return plantilla.replace("{zona}", describirZona(topPct, lado));
}

function fnv1a(str: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/** Frase determinista para un mono (por su ID y pose). */
export function frasePara(id: string, pose: PoseCosa): string {
  const frases = FRASES_MONO[pose] ?? FRASES_MONO["mono-sentado"];
  return frases[fnv1a(id) % frases.length];
}

/** Variante visual determinista 0-7 (espejo/rotación/tono). */
export function variantePara(id: string): number {
  return fnv1a("var:" + id) % 8;
}

const POSES_13: PoseCosa[] = [
  "mono-apoyado", "mono-asomando", "mono-durmiendo", "mono-galleta",
  "mono-colgado", "mono-fotobomba", "mono-lengua", "mono-risa",
  "mono-mecanico", "mono-policia", "mono-senala", "mono-sentado", "mono-trepando",
];

/**
 * Pose temática según la sección de la ruta (05/10/2026).
 * Mapa fijo y documentado: cada sección tiene su pose.
 */
export function poseParaRuta(ruta: string, id: string): PoseCosa {
  if (ruta.startsWith("/coches/")) return "mono-mecanico";
  if (ruta.startsWith("/motos/")) return "mono-apoyado";
  if (ruta.startsWith("/patinetes/")) return "mono-lengua";
  if (ruta.startsWith("/comparador-")) return "mono-fotobomba";
  if (ruta.startsWith("/blog/")) return "mono-asomando";
  if (ruta.startsWith("/herramientas") || ruta.startsWith("/calculadora")) return "mono-trepando";
  if (ruta.startsWith("/multas") || ruta.startsWith("/buscador-codigo-multa")) return "mono-policia";
  if (ruta.startsWith("/juego-monos")) return "mono-risa";
  // Resto: reparto determinista entre las 13 poses.
  return POSES_13[fnv1a("pose:" + id) % POSES_13.length];
}

/** Frases al CAZAR un mono (bocadillo ~2 s, primera persona, humor). */
export const FRASES_CAZA: Record<string, string[]> = {
  genericas: [
    "¡Me pillaste! 🐒",
    "¡Otro pa' la saca!",
    "¡Eh, que estaba escondido!",
    "¡Buena vista, cazador!",
  ],
  "mono-policia": ["¡Multado por exceso de caza!", "¡Alto ahí, cazador!"],
  "mono-mecanico": ["¡Buena caza, crack! 🔧", "¡Revisado y cazado!"],
  "mono-galleta": ["¡Mi galleta! 🍪", "¡Me has pillado merendando!"],
  "mono-durmiendo": ["¡Zzz… eh, qué pasa!", "¡Me despertaste!"],
  "mono-lengua": ["¡Vale, me rindo! 👅", "¡Me has pillado con la lengua fuera!"],
  "mono-risa": ["¡Jajaja, me cazaste! 😂", "¡Qué buena caza! 😂"],
  "mono-colgado": ["¡Me has descolgado! 🙈", "¡Casi aguanto más! 🙈"],
  "mono-fotobomba": ["¡Salgo en tu colección! 📸", "¡Fotobomba cazada! 📸"],
  "mono-asomando": ["¡Me viste asomar! 👀", "¡Pillado de refilón! 👀"],
  "mono-senala": ["¡Te señalé y me cazaste! 👉", "¡Buen ojo! 👉"],
  "mono-apoyado": ["¡Descanso interrumpido! 😌", "¡Me pillaste relajado! 😌"],
  "mono-sentado": ["¡De aquí no me movía! 🪑", "¡Cazado en mi sitio! 🪑"],
  "mono-trepando": ["¡Casi llego arriba! 🧗", "¡Trepador cazado! 🧗"],
  legendario: ["¡INCREÍBLE! ¡Has encontrado al MONO LEGENDARIO dorado! 👑"],
};

/** Frase de captura determinista por ID y pose. */
export function fraseCaza(id: string, pose: PoseCosa): string {
  const frases = FRASES_CAZA[pose] ?? FRASES_CAZA.genericas;
  const todas = [...frases, ...FRASES_CAZA.genericas];
  return todas[fnv1a("caza:" + id) % todas.length];
}

/** Hitos con confetti y mensaje de Cosa celebrándolo (05/10/2026). */
export const HITOS: number[] = [25, 50, 100, 150, 200, 250, 300, 350];

/** Mensajes de Cosa en cada hito (los firma ella). */
export const MENSAJES_COSA_HITOS: Record<number, string> = {
  25: "¡25 monos! Vas como un tiro, cazador 🚀",
  50: "¡50! Ya eres medio profesional 🦍",
  100: "¡100 monos! Esto se pone serio 👀",
  150: "¡150! Ya llevas más de un tercio 💪",
  200: "¡200! Solo te faltan 150 para los premios 💰",
  250: "¡250! ¡A 100 del premio! ¡No pares! 🔥",
  300: "¡300! ¡A solo 50 de los premios! 🔥",
  350: "¡LOS 350! ¡Eres una leyenda! 🏆",
};
