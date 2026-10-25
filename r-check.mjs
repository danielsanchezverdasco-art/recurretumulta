import {chromium} from 'playwright';
const b=await chromium.launch();const p=await b.newPage();
for(const u of ['/blog/maextro-v800-huawei-precio-ficha-tecnica/','/blog/stelato-g9-2026-precio-ficha-tecnica/','/blog/tabla-multas-exceso-velocidad-2026/']){
await p.goto('https://recurretumulta.online'+u,{waitUntil:'networkidle'});await p.waitForTimeout(3000);
const t=await p.evaluate(()=>document.querySelector('h1')?.innerText+' | '+document.body.innerText.length+' | '+(/no encontrad|404/i.test(document.body.innerText.slice(0,2000))));console.log(u,t);}
await b.close();
