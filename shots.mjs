import { chromium } from 'playwright';
const B='https://recurretumulta.online';
const b=await chromium.launch(); const ctx=await b.newContext({viewport:{width:400,height:800},deviceScaleFactor:2,isMobile:true,hasTouch:true});
const pg=await ctx.newPage(); const errs=[]; pg.on('pageerror',e=>errs.push(e.message));
async function go(p,name,sel){ await pg.goto(B+p,{waitUntil:'networkidle',timeout:30000}).catch(()=>{}); await pg.waitForTimeout(2500); const ok=await pg.$('text=Aceptar'); if(ok){await ok.click().catch(()=>{}); await pg.waitForTimeout(500);}
  if(sel){const el=await pg.$(sel); if(el) await el.evaluate(e=>{document.documentElement.style.scrollBehavior='auto';window.scrollTo({top:e.getBoundingClientRect().top+window.scrollY-300,behavior:'instant'});}); else console.log('NO SEL',name,sel); await pg.waitForTimeout(1500);}
  await pg.screenshot({path:`/tmp/${name}.png`}); console.log(name, await pg.evaluate(()=>document.body.innerText.match(/\d+\s*\/\s*350|\/350/)?.[0]||''));}
await go('/','monos-header');
await go('/no-existe-xyz','monos-404');
await go('/juego-monos/','monos-juego');
await go('/juego-monos/','monos-ranking','ol');
await go('/blog/maextro-v800-huawei-precio-ficha-tecnica/','monos-banner-blog','aside[aria-label="Caza de monos"]');
await go('/coches/abarth-500e-2025-precio-ficha-tecnica/','monos-banner-ficha','aside[aria-label="Caza de monos"]');
console.log('errs',errs); await b.close();
