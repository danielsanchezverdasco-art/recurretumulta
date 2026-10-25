import { chromium, devices } from 'playwright';
import fs from 'fs';
const B=process.argv[2];const S=JSON.parse(fs.readFileSync('/workspace/fotos97/final/sel.json'));
let bad=0;
for(const s of S){const r=await fetch(B+s.destino);if(r.status!==200||!(r.headers.get('content-type')||'').includes('webp')){bad++;console.log('IMG',r.status,s.destino);}}
console.log('imagenes ok',S.length-bad,'/',S.length);
const pages=['/patinetes/joyor-c10/','/motos/harley-davidson-sportster-s-2025-ficha-tecnica-precio/','/coches/cupra-leon-20-tdi-2026/','/blog/leapmotor-b03-electrico-paris-2026/'];
const b=await chromium.launch();const ctx=await b.newContext({...devices['Pixel 7']});
for(const p of pages){const pg=await ctx.newPage();const r=await pg.goto(B+p,{waitUntil:'networkidle'}).catch(e=>null);await pg.waitForTimeout(2500);
const t=await pg.evaluate(()=>[...document.querySelectorAll('p')].map(x=>x.innerText).filter(x=>/^Foto:/.test(x)).join(' | '));
const imgs=await pg.evaluate(()=>[...document.images].filter(i=>/\/media\//.test(i.src)).slice(0,2).map(i=>i.src.split('/').pop()+':'+i.naturalWidth));
console.log(r&&r.status(),p,'|',t,'|',imgs.join(','));await pg.close();}
await b.close();
