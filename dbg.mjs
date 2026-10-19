import { chromium } from 'playwright';
const b=await chromium.launch(); const pg=await (await b.newContext({viewport:{width:400,height:800}})).newPage();
for (const p of ['/coches/abarth-500e-2025-precio-ficha-tecnica/','/blog/maextro-v800-huawei-precio-ficha-tecnica/']){
await pg.goto('https://recurretumulta.online'+p,{waitUntil:'networkidle'}); await pg.waitForTimeout(3000);
console.log(await pg.evaluate(()=>[...document.querySelectorAll('aside[aria-label="Caza de monos"]')].map(e=>JSON.stringify(e.getBoundingClientRect())+' y='+window.scrollY)));
const el=await pg.$('aside[aria-label="Caza de monos"]'); await el.evaluate(e=>e.scrollIntoView({block:'center'})); await pg.waitForTimeout(500); console.log(await pg.evaluate(()=>window.scrollY));}
await b.close();
