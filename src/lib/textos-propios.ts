// 25/10/2026 (top7-sitemap-unico): textos propios opcionales por ficha.
// Cada clave sustituye, SOLO en la ficha que la define, una frase de plantilla
// común. Si la clave no existe se usa el texto de plantilla de siempre, así que
// el resto de fichas no cambia. Se aplica en el render de React (y en el JSON-LD
// de FAQ, que se construye con el mismo array), de modo que el HTML prerenderizado
// y los datos estructurados llevan exactamente el mismo texto.
export type ClaveTextoPropio =
  | "notaCosa" | "zbe" | "precio" | "fotos" | "costeNota" | "mantenimientoIntro"
  | "garantiaNota" | "rivalesIntro" | "fraseRivales" | "otrasVersiones" | "seguridadNota"
  | "preguntaBateria" | "preguntaConsumo" | "preguntaZbe"
  | "faqPrecio" | "faqAutonomia" | "faqMaletero" | "faqEtiqueta" | "faqAnalisis"
  | "faqCarnet" | "faqZbe"
  | "faqPreguntaAutonomia" | "faqPreguntaEtiqueta" | "faqPreguntaAnalisis";
export type TextosPropios = Partial<Record<ClaveTextoPropio, string>>;

export const propio = (t: TextosPropios | undefined, clave: ClaveTextoPropio, plantilla: string): string =>
  t?.[clave] ?? plantilla;
