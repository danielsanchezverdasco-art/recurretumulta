// Captura móvil 390px para verificación visual post-deploy.
import { chromium } from "playwright";
import { join } from "node:path";
const EXE = join(process.env.HOME, ".cache/ms-playwright/chromium-1243/chrome-linux/chrome");

const shots = [
  ["http://localhost:4321/", "/tmp/shot-portada-390.png"],
  ["http://localhost:4321/blog/multa-carnet-caducado-200-euros/", "/tmp/shot-articulo-390.png"],
];
const browser = await chromium.launch({ executablePath: EXE });
for (const [url, out] of shots) {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(2500);
  await page.screenshot({ path: out });
  console.log("OK", out);
  await page.close();
}
await browser.close();
