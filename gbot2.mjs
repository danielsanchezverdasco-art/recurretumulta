import { chromium } from 'playwright';
const base=process.argv[2]||'https://recurretumulta.online';
const paths=process.argv.slice(3);
const b=await chromium.launch();
for (const mob of [false,true]) for (const p of paths){
 const ctx=await b.newContext({userAgent: mob?'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)':'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html) Chrome/129.0.0.0 Safari/537.36', viewport: mob?{width:412,height:732}:{width:1280,height:900}});
 await ctx.addInitScript(()=>{for(const k of ['localStorage','sessionStorage'])Object.defineProperty(window,k,{get(){throw new DOMException('denied','SecurityError')}});});
 await ctx.route(/convex|wss:/,r=>r.abort());
 const pg=await ctx.newPage(); const errs=[];
 pg.on('pageerror',e=>errs.push('PE '+e.message+' '+(e.stack||'').split('\n').slice(0,3).join(' | ')));
 pg.on('console',m=>m.type()==='error'&&errs.push('CE '+m.text().slice(0,300)));
 await pg.goto(base+p,{waitUntil:'load',timeout:20000}).catch(e=>errs.push('GOTO '+e.message));
 await pg.waitForTimeout(4000);
 const r=await pg.evaluate(()=>({h1:document.querySelector('h1')?.textContent?.slice(0,60),err:!!document.querySelector('[data-slot=error-state]')}));
 console.log(mob?'M':'D',p,JSON.stringify(r)); errs.forEach(e=>console.log('   ',e));
 await ctx.close();}
await b.close();
