import { chromium } from 'playwright'; import fs from 'fs';
const B=process.argv[2]; const F=JSON.parse(fs.readFileSync('/workspace/dedupe/mapa.json')); const S=new Set(Object.keys(F).map(k=>k.replace(/\/$/,'')));
const paths=['/','/blog/','/coches/','/motos/','/blog/maextro-v800-huawei-precio-ficha-tecnica/','/blog/stelato-g9-erev-2026-precio-ficha-tecnica/','/coches/stelato-g9-erev-2026-precio-ficha-tecnica/',Object.values(F)[0],Object.values(F)[100]];
const b=await chromium.launch(); let fails=0;
for(const p of paths){const ctx=await b.newContext({userAgent:'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X) AppleWebKit/537.36 Chrome/129 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',viewport:{width:412,height:732}});
await ctx.addInitScript(()=>{delete window.WebSocket;window.WebSocket=undefined;});await ctx.route(/convex|wss:/,r=>r.abort());
const pg=await ctx.newPage();const errs=[];pg.on('pageerror',e=>errs.push(e.message));
await pg.goto(B+p,{waitUntil:'load',timeout:25000}).catch(e=>errs.push(e.message));await pg.waitForTimeout(3500);
const r=await pg.evaluate((s)=>{const bad=[...document.querySelectorAll('a[href^="/"]')].map(a=>a.getAttribute('href').split(/[?#]/)[0].replace(/\/$/,'')).filter(h=>s.includes(h));return{h1:document.querySelector('h1')?.textContent?.slice(0,50),err:!!document.querySelector('[data-slot=error-state]'),title:document.title.slice(0,60),bad:bad.length}},[...S]);
if(r.err||r.bad||errs.length)fails++;console.log(p,JSON.stringify(r),errs.slice(0,2));await ctx.close();}
console.log('fallos',fails);await b.close();
