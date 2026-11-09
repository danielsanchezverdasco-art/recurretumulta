// Genera una lista exhaustiva de marcas/modelos vendidos en España (2000-2026)
// usando Groq, en lotes por grupos de marcas. Luego se fusiona con el índice
// de fichas propias (gen-buscador-modelos.mjs).
// Uso: GROQ_API_KEY=... node scripts/gen-modelos-exhaustivo.mjs
// Salida: /tmp/modelos-exhaustivo.json
import { writeFileSync } from "node:fs";

const API_KEY = process.env.GROQ_API_KEY;
if (!API_KEY) {
  console.error("Falta GROQ_API_KEY");
  process.exit(1);
}

const LOTES = [
  {
    nombre: "volumen-europeas",
    marcas: ["Volkswagen", "Seat", "Skoda", "Renault", "Dacia", "Peugeot", "Citroën", "Opel", "Fiat", "Ford"],
  },
  {
    nombre: "premium-alemanas",
    marcas: ["Audi", "BMW", "Mercedes-Benz", "Porsche", "Mini", "Smart", "Volvo", "Alpina"],
  },
  {
    nombre: "francesas-italianas",
    marcas: ["Alfa Romeo", "Lancia", "DS", "Abarth", "Maserati", "Ferrari", "Lamborghini", "Pagani"],
  },
  {
    nombre: "asiaticas",
    marcas: ["Toyota", "Honda", "Nissan", "Mazda", "Hyundai", "Kia", "Mitsubishi", "Suzuki", "Subaru", "Lexus", "Infiniti"],
  },
  {
    nombre: "americanas-otras",
    marcas: ["Jeep", "Tesla", "Land Rover", "Range Rover", "Jaguar", "Aston Martin", "Bentley", "Rolls-Royce", "McLaren", "Lotus", "Caterham", "SsangYong", "KGM"],
  },
  {
    nombre: "chinas",
    marcas: ["MG", "BYD", "Omoda", "Jaecoo", "Ebro", "Leapmotor", "DFSK", "SWM", "DR", "EVO", "Xpeng", "Nio", "Zeekr", "Lynk & Co", "Polestar", "Aiways", "Maxus", "JAC", "Chery", "Dongfeng", "BAIC", "GWM", "Haval", "Tank", "Voyah", "Hongqi", "Denza", "Deepal", "Smart", "Lotus", "Xpeng", "IM Motors", "Onvo", "Livan", "Lepas", "iCar", "Firefly"],
  },
  {
    nombre: "nicho",
    marcas: ["Aixam", "Ligier", "Casalini", "Bellier", "Chatenet", "Microcar", "Cupra", "Alpine", "DS", "Genesis", "Ineos", "Fisker", "Lucid", "Rivian", "Vinfast", "Elaris", "Meyers Manx", "Donkervoort", "KTM", "Ariel", "Cupra", "Tavascan"],
  },
];

async function loteModelos(marcas) {
  const prompt =
    `Lista TODOS los modelos de turismos/SUV/furgonetas de las marcas ${marcas.join(", ")} vendidos en ESPAÑA entre 2000 y 2026, incluyendo distintas generaciones cuando el nombre cambie poco (ej: "Golf V", "Golf VI", "Golf VII", "Golf VIII").\n\n` +
    `Devuelve SOLO JSON válido con este formato exacto:\n` +
    `[{"marca": "Volkswagen", "modelos": ["Golf IV", "Golf V", "Golf VI"]}, ...]\n\n` +
    `Reglas estrictas:\n` +
    `- SOLO modelos realmente comercializados en España en ese periodo. Nada de prototipos, concepts ni modelos de otros mercados.\n` +
    `- Si dudas de un modelo, NO lo incluyas.\n` +
    `- Nombres en el formato habitual español (ej: "Ibiza", no "SEAT Ibiza Mk5").\n` +
    `- Máximo 60 modelos por marca.\n` +
    `- PROHIBIDO inventar.`;
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${API_KEY}` },
    body: JSON.stringify({
      model: "openai/gpt-oss-120b",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 6000,
      temperature: 0.1,
    }),
  });
  if (!res.ok) {
    console.error("Groq error:", res.status, await res.text().then((t) => t.slice(0, 200)));
    return [];
  }
  const json = await res.json();
  const raw = json.choices?.[0]?.message?.content ?? "";
  const m = /```json\s*([\s\S]*?)```/.exec(raw) ?? /(\[[\s\S]*\])/.exec(raw);
  if (!m) {
    console.error("Sin JSON en lote");
    return [];
  }
  try {
    return JSON.parse(m[1]);
  } catch (e) {
    console.error("JSON inválido:", e.message);
    return [];
  }
}

const todo = [];
for (const lote of LOTES) {
  console.log("Lote:", lote.nombre, "...");
  const r = await loteModelos(lote.marcas);
  console.log("  →", r.length, "marcas");
  todo.push(...r);
  await new Promise((r2) => setTimeout(r2, 1500));
}

writeFileSync("/tmp/modelos-exhaustivo.json", JSON.stringify(todo, null, 1));
const nModelos = todo.reduce((s, m) => s + (m.modelos?.length ?? 0), 0);
console.log(`OK: ${todo.length} marcas, ${nModelos} modelos → /tmp/modelos-exhaustivo.json`);
