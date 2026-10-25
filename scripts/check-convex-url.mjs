// check-convex-url.mjs — Plan AdSense p1 (23/10/2026).
//
// Falla el build si VITE_CONVEX_URL está definida pero NO es la URL regional
// de producción. Sin variable definida se permite (dev local contra
// http://localhost:3000). El runtime (convex-lazy.tsx) degrada con
// console.error pero nunca rompe la web.
//
// La variable EXACTA que debe ir en Netlify > Site settings > Environment:
//   VITE_CONVEX_URL=https://handsome-rhinoceros-259.eu-west-1.convex.cloud

const ESPERADA = "https://handsome-rhinoceros-259.eu-west-1.convex.cloud";
const url = (process.env.VITE_CONVEX_URL ?? "").trim();

const esRegional = /^https:\/\/[a-z0-9-]+\.eu-west-1\.convex\.cloud\/?$/.test(url);
const esNoRegional = /^https:\/\/[a-z0-9-]+\.convex\.cloud\/?$/.test(url);

if (!url) {
  console.log("[convex] VITE_CONVEX_URL no definida: dev local (http://localhost:3000).");
  process.exit(0);
}

if (esRegional) {
  console.log(`[convex] VITE_CONVEX_URL OK (regional): ${url}`);
  process.exit(0);
}

if (esNoRegional) {
  console.error(
    `\n[convex] ERROR DE BUILD: VITE_CONVEX_URL es la URL NO regional (${url}).\n` +
      `  La URL sin región devuelve 404 y deja muertos votos/duelo/opiniones/favoritos/reacciones.\n` +
      `  En Netlify > Site settings > Environment pon:\n` +
      `    VITE_CONVEX_URL=${ESPERADA}\n`,
  );
  process.exit(1);
}

console.error(
  `\n[convex] ERROR DE BUILD: VITE_CONVEX_URL no es una URL regional válida de Convex: ${url}\n` +
    `  En Netlify > Site settings > Environment pon:\n` +
    `    VITE_CONVEX_URL=${ESPERADA}\n`,
);
process.exit(1);
