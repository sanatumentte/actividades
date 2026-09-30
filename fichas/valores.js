/* Mis valores (ACT: diana de valores). Reemplaza «Brújula de valores» y «Cuestionario de valores».
   La diana es la imagen del PDF (Plantilla TAC, pág. 4); la persona toca en cada área dónde está hoy. */
FICHA({clave:'valores',titulo:'Mis valores: la diana de mi vida',corto:'Mis valores',carp:['valores'],
  intro:`<p>Los valores son lo que de verdad te importa: cómo quieres vivir y qué tipo de persona quieres ser. No son metas que se cumplen y se acaban; son una dirección, como una brújula.</p><p>En esta ficha vas a elegir tus valores, ver qué tan cerca estás de vivirlos en cada área de tu vida y armar un plan para acercarte al centro de tu diana.</p>`});
{
const AREAS=[['trabajo','Trabajo / educación','#5f9ea0','¿Tienes metas en las que estés trabajando? ¿Cómo te comportas con tus compañeros? ¿Valoras el aprendizaje, el crecimiento o el liderazgo?'],
  ['ocio','Ocio','#c9987c','¿Qué te produce alegría? ¿Cuánto tiempo necesitas para esta área? ¿Hay algo que te gustaría hacer y aún no has logrado?'],
  ['relaciones','Relaciones','#e08a5f','Pareja, familia, amistades, comunidad: ¿cómo quieres ser con las personas que te importan?'],
  ['crecimiento','Crecimiento personal / salud','#6f9fc9','Salud, ejercicio, espiritualidad y fe, aprendizaje: ¿cómo quieres cuidarte y crecer?']];
/* Cuadrante de cada área en la diana: ángulo desde las 12 en punto, en sentido horario */
const CUAD={ocio:[0,90],relaciones:[90,180],crecimiento:[180,270],trabajo:[270,360]};
const VAL=['Amor','Familia','Fe','Honestidad','Respeto','Autenticidad','Lealtad','Compromiso','Justicia','Amabilidad','Empatía','Compasión','Gratitud','Paciencia','Perdón','Tolerancia','Generosidad','Servicio','Conexión','Confianza','Libertad','Independencia','Aventura','Curiosidad','Aprendizaje','Creatividad','Humor','Diversión','Salud','Paz','Seguridad','Coraje','Persistencia','Responsabilidad','Dedicación','Productividad','Organización','Cooperación','Igualdad','Diversidad','Tradición','Presencia','Optimismo','Fortaleza','Asumir riesgos','Ética'];
const slug=s=>s.toLowerCase().normalize('NFD').replace(/[^a-z0-9]+/g,'');
const e=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
/* Diana: recorte de la pág. 4 (1200×1467 px): x 130–1076, y 386–1332; centro (602,860), radio 471 */
const R={x:130,y:386,w:946,h:946,cx:602,cy:860,r:471};
const puntaje=([x,y])=>{ const d=Math.hypot(x-R.cx,y-R.cy); return Math.max(1,Math.min(10,Math.round(10-9*Math.min(1,d/R.r)))); };
const areaDe=(x,y)=>{ let a=Math.atan2(x-R.cx,-(y-R.cy))*180/Math.PI; if(a<0) a+=360; return Object.keys(CUAD).find(k=>a>=CUAD[k][0]&&a<CUAD[k][1]); };
const diana={k:'x',id:'vl_diana',
  html:()=>`<svg viewBox="${R.x} ${R.y} ${R.w} ${R.h}" id="vlSvg" style="position:absolute;inset:0;width:100%;height:100%;cursor:crosshair"></svg>`,
  clic:(ev,S,el)=>{ const svg=el.querySelector('svg'), b=svg.getBoundingClientRect(), x=R.x+(ev.clientX-b.left)/b.width*R.w, y=R.y+(ev.clientY-b.top)/b.height*R.h;
    if(Math.hypot(x-R.cx,y-R.cy)>R.r+10) return false; const a=areaDe(x,y); S.vl_diana=Object.assign({},S.vl_diana,{[a]:[Math.round(x),Math.round(y)]}); },
  activo:D=>Object.keys(D.vl_diana||{}).length>0,
  resumen:(D,L)=>AREAS.forEach(([k,n])=>{ const p=(D.vl_diana||{})[k]; if(p) L.push(`${n}: ${puntaje(p)}/10 (10 = vivo este valor cada día)`); }),
  cambios:(A,B,L)=>AREAS.forEach(([k,n])=>{ const a=(A.vl_diana||{})[k], b=(B.vl_diana||{})[k]; if(String(a)!==String(b)) L.push(`<li><b>${e(n)}:</b> ${a?puntaje(a):'—'} → ${b?puntaje(b):'—'}</li>`); })};
const pintarDiana=S=>{ const svg=document.getElementById('vlSvg'); if(!svg) return; const M=S.vl_diana||{};
  svg.innerHTML=AREAS.map(([k,n,c])=>{ const p=M[k]; return p?`<g><circle cx="${p[0]}" cy="${p[1]}" r="26" fill="${c}" stroke="#fff" stroke-width="6"/><text x="${p[0]}" y="${p[1]+11}" text-anchor="middle" font-size="32" font-weight="900" fill="#fff">✕</text><text x="${p[0]}" y="${p[1]-36}" text-anchor="middle" font-size="30" font-weight="900" fill="#1f3d45" stroke="#fff" stroke-width="6" paint-order="stroke">${puntaje(p)}/10</text></g>`:''; }).join('');
  const t=document.getElementById('vlPuntos'); if(t) t.innerHTML=AREAS.map(([k,n,c])=>{ const p=M[k]; return `<div class="vl-p" style="--c:${c}"><b>${n}</b><span>${p?puntaje(p)+'/10':'toca la diana'}</span><i style="width:${p?puntaje(p)*10:0}%"></i></div>`; }).join(''); };
const CSS=`<style>
  .vl-chips{display:flex;flex-wrap:wrap;gap:7px}
  .sec button.f.vl-c{border-radius:999px;padding:7px 13px;font-size:.9rem}
  .vl-4{display:grid;grid-template-columns:1fr 1fr;gap:12px}@media (max-width:600px){.vl-4{grid-template-columns:1fr}}
  .vl-a{border-radius:16px;padding:12px;background:color-mix(in srgb,var(--c) 14%,#fff);border:2px solid color-mix(in srgb,var(--c) 45%,#fff)}
  .vl-a h3{color:var(--c)} .vl-a p{font-size:.88rem;color:#5d7a7f;margin:2px 0 6px}
  .vl-diana{position:relative;max-width:520px;margin:0 auto;width:100%}
  .vl-puntos{display:grid;gap:8px}
  .vl-p{display:grid;grid-template-columns:1fr auto;gap:2px 10px;font-size:.92rem}
  .vl-p span{font-weight:900;color:var(--c)} .vl-p i{grid-column:1/-1;height:10px;border-radius:999px;background:var(--c);display:block;min-width:4px}
  .vl-plan{display:grid;gap:10px}
  .vl-fila{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px}@media (max-width:600px){.vl-fila{grid-template-columns:1fr}}
</style>`;
H('Elige mis valores','👆 Toca los valores que te representan (los que de verdad te importan, no los que «deberías» tener).',
  CSS+`<h2>Mis valores fundamentales</h2><div class="vl-chips">${VAL.map(v=>`<button type="button" class="f vl-c" id="vl_v_${slug(v)}" aria-pressed="false">${v}</button>`).join('')}</div>
  <label class="lab" for="vl_otros">Otros valores míos</label><input class="f" id="vl_otros" placeholder="Escríbelos separados por comas">`,
  [...VAL.map(v=>chk('vl_v_'+slug(v),v,0,0,0,0,{g:'Mis valores'})),inp('vl_otros','Otros valores míos')],{chip:'Mis valores'});
H('Mis valores en cada área','✍️ Escribe qué valores quieres vivir en cada área de tu vida.',
  `<h2>Mis valores por área</h2><div class="vl-4">${AREAS.map(([k,n,c,q])=>`<div class="vl-a" style="--c:${c}"><h3>${n}</h3><p>${q}</p><textarea class="f" id="vl_a_${k}" rows="3" placeholder="Mis valores en esta área…"></textarea></div>`).join('')}</div>`,
  AREAS.map(([k,n])=>ta('vl_a_'+k,n+' · mis valores')),{chip:'Por área'});
H('Mi diana','🎯 Toca en cada área de la diana dónde estás hoy: el centro significa que vives ese valor cada día; el borde, que hoy no es una prioridad.',
  `<h2>¿Dónde estoy hoy?</h2><div class="vl-diana" data-fx="vl_diana">${recorte('img/plantilla-tac/p04.jpg',R.x,R.y,R.w,R.h,1200,1467)}${diana.html()}</div><div class="vl-puntos" id="vlPuntos"></div>`,
  [diana],{chip:'Mi diana'});
H('Lo que me aleja y lo que me acerca','✍️ En cada área: ¿qué te impide vivir tus valores? ¿Qué acciones puedes emprender?',
  `<h2>Barreras y acciones</h2><div class="vl-4">${AREAS.map(([k,n,c])=>`<div class="vl-a" style="--c:${c}"><h3>${n}</h3><label class="lab" for="vl_b_${k}">¿Qué me lo impide? ¿Qué bloquea el camino?</label><textarea class="f" id="vl_b_${k}" rows="2"></textarea><label class="lab" for="vl_c_${k}">¿Qué puedo hacer para vivir más acorde a mis valores?</label><textarea class="f" id="vl_c_${k}" rows="2"></textarea></div>`).join('')}</div>`,
  AREAS.flatMap(([k,n])=>[ta('vl_b_'+k,n+' · lo que me lo impide'),ta('vl_c_'+k,n+' · lo que puedo hacer')]),{chip:'Barreras y acciones'});
H('Mi plan de acción','✍️ Elige hasta tres valores que quieres fortalecer y tres pasos concretos para cada uno (qué, cuándo, con quién).',
  `<h2>Mi plan de acción</h2><div class="vl-plan">${[0,1,2].map(i=>`<div class="vl-fila"><input class="f" id="vl_p${i}_v" placeholder="Valor ${i+1}">${[1,2,3].map(j=>`<input class="f" id="vl_p${i}_${j}" placeholder="Paso ${j}">`).join('')}</div>`).join('')}</div>`,
  [0,1,2].flatMap(i=>[inp(`vl_p${i}_v`,`Valor ${i+1}`,0,0,0,0,{sil:true}),...[1,2,3].map(j=>inp(`vl_p${i}_${j}`,`Valor ${i+1} · paso ${j}`,0,0,0,0,{g:`Plan · valor ${i+1}`}))]),{chip:'Mi plan'});
_ult().alCambiar=S=>pintarDiana(S);
_ult().resumenExtra=(p,D,T)=>{ if(p.t!=='Mi plan de acción') return; [0,1,2].forEach(i=>{ const v=String(D[`vl_p${i}_v`]||'').trim(), g=`Plan · valor ${i+1}`, k=T.findIndex(x=>x.startsWith(g+':')); if(v&&k>=0) T[k]=T[k].replace(g,'Plan · '+v); }); };
}
