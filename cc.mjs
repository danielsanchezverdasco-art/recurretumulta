import { chromium } from 'playwright';
const b=await chromium.launch();const ctx=await b.newContext({userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/129.0 Safari/537.36'});
for(const u of process.argv.slice(2)){const pg=await ctx.newPage();await pg.goto(u,{waitUntil:'domcontentloaded',timeout:40000}).catch(()=>{});await pg.waitForTimeout(4000);
const r=await pg.evaluate(()=>[...new Set([...document.querySelectorAll('img,source')].map(i=>i.currentSrc||i.src||i.srcset||'').filter(s=>/cecotec|media/.test(s)))].slice(0,60));
console.log(u, await pg.title());r.forEach(s=>console.log('  ',s.slice(0,200)));await pg.close();}
await b.close();
