import { chromium } from 'playwright';
const b=await chromium.launch();const ctx=await b.newContext({userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/129.0 Safari/537.36'});
const pg=await ctx.newPage();await pg.goto(process.argv[2],{waitUntil:'domcontentloaded'});await pg.waitForTimeout(4000);
for(let i=0;i<10;i++){await pg.mouse.wheel(0,3000);await pg.waitForTimeout(600);}
const r=await pg.evaluate((re)=>[...new Set([...document.links].map(a=>a.href).filter(h=>new RegExp(re,'i').test(h)))],process.argv[3]);
r.forEach(x=>console.log(x));await b.close();
