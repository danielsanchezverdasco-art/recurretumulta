import { chromium } from 'playwright';
const b=await chromium.launch(); const pg=await (await b.newContext({viewport:{width:400,height:900}})).newPage();
await pg.goto(process.argv[2]+'/motos/sym-symphony-sr-125-abs-2026-ficha-tecnica-precio/',{waitUntil:'networkidle'}); await pg.waitForTimeout(2500);
console.log(await pg.evaluate(()=>{const i=document.querySelector('img[src*="sym-symphony-sr"]');return {img:!!i,ok:i?.naturalWidth,credit:document.body.innerText.match(/AVMOTO[^\n]*/)?.[0]}}));
await pg.screenshot({path:'/workspace/sbs/foto-sym-symphony.jpg',type:'jpeg',quality:70}); await b.close();
