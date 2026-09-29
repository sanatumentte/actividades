/* Trauma generacional 2: guion familiar, creencias (con medidor 0–10) y rueda para romper el ciclo. */
FICHA({clave:'trauma-gen-2',titulo:'Trauma generacional 2: mis creencias y romper el ciclo',corto:'Trauma generacional 2',carp:['trauma'],
  intro:`<p>Las familias transmiten mensajes —algunos dichos en voz alta y otros no— sobre la vida, el amor y el mundo. Aquí vas a reconocer los mensajes y las creencias que recibiste, ver cuánto pesan hoy y elegir qué dejas atrás y qué conservas.</p>
  <p class="note" style="margin-top:10px">Ve a tu ritmo y detente si lo necesitas; lo que surja lo puedes llevar a tu próxima sesión. Si te sientes muy mal o en riesgo, contacta a tu psicóloga o a la línea de emergencia (123 en Colombia).</p>`});
{
const IMG='img/trauma-gen/', PW=1200, PH=1553;
const slug=s=>s.toLowerCase().normalize('NFD').replace(/[^a-z0-9]+/g,'').slice(0,18);
const e=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const CR={'Emociones y expresión':['Mis sentimientos no importan.','Si expreso mis emociones, me verán como una persona débil.','No es seguro mostrar vulnerabilidad.','A nadie le importa cómo me siento.','Soy una carga para los demás.','Si alzo la voz, seré ignorado(a).'],
  'Autoestima e identidad':['No soy lo suficientemente bueno(a).','No soy digno(a) de amor.','No merezco ser feliz.','Tengo defectos fundamentales.','Soy un fracaso.','Nunca tendré éxito.','No merezco bondad ni compasión.'],
  'Confianza y relaciones':['No puedo confiar en nadie.','La gente siempre me abandonará.','Si bajo la guardia, saldré lastimado(a).','El amor es condicional.','Estoy mejor solo(a).','Tengo que ganarme el amor y la aceptación.','Las figuras de autoridad me traicionarán.','La gente solo me valora por lo que hago por ellos.'],
  'Sanación y crecimiento':['No puedo cambiar.','Siempre estaré atrapado(a) en mi dolor.','No tengo remedio.','Tengo que curarme por mi cuenta.','Ya es demasiado tarde para recuperarme.','Si dejo ir mi dolor, perderé una parte de mí.','No soy lo suficientemente fuerte para superar mis dificultades.'],
  'Control y seguridad':['El mundo es peligroso.','Si no tengo el control, algo malo sucederá.','Tengo que ser perfecto(a) para estar a salvo.','Soy incapaz de cambiar mis circunstancias.','Siempre debo estar alerta.','Si cometo un error, seré juzgado(a) o rechazado(a).','No puedo contar con la ayuda de los demás.']};
const TODAS=Object.entries(CR).flatMap(([g,L])=>L.map(t=>({g,t,id:'t2_c_'+slug(t)})));
/* Rueda del PDF (pág. 7): pétalos tocables. Recorte x100–1100, y410–1420; centros en px del recorte */
const PET=[['Buscar apoyo profesional',367,190],['Identificar la fuente de mi trauma',635,180],['Reconocer y aceptar mi trauma',825,385],['Permitir que mis relaciones cambien',825,640],['Practicar el autocuidado',635,830],['Darme tiempo para el duelo',365,830],['Enfrentar mis miedos',190,620],['Aceptar el cambio',180,350]];
const CSS=`<style>
  .t2-g{display:grid;grid-template-columns:1fr 1fr;gap:12px}@media (max-width:600px){.t2-g{grid-template-columns:1fr}}
  .t2-g label,.t2-q label{font-weight:800;color:var(--petroleo);display:block;margin-bottom:4px}
  .t2-cat{background:#f7f4fc;border-radius:16px;padding:12px;display:grid;gap:8px}
  .t2-cat h3{color:#5b4a86}
  .t2-cr{display:grid;gap:4px}
  .sec button.f.t2-b{border-radius:12px;font-weight:700;font-size:.92rem}
  .sec button.f.t2-b[aria-pressed="true"]{background:#7e6bb3;border-color:#7e6bb3}
  .t2-r{display:none;align-items:center;gap:10px;padding:2px 6px 6px}
  .t2-cr.on .t2-r{display:flex}
  .t2-r input{flex:1;accent-color:#7e6bb3}
  .t2-r output{font-weight:900;color:#7e6bb3;min-width:3.2em;text-align:right}
  .t2-bars{display:grid;gap:8px}
  .t2-bar{display:grid;gap:3px;font-size:.9rem}
  .t2-bar span{height:12px;border-radius:999px;background:linear-gradient(90deg,#b39ddb,#c0483c);width:var(--w)}
  .t2-rueda{position:relative;max-width:520px;margin:0 auto;width:100%}
  .t2-rueda .rec{border-radius:18px}
  .sec button.f.t2-p{position:absolute;width:24%;aspect-ratio:1;translate:-50% -50%;border-radius:50%;background:transparent;border:3px solid transparent;padding:0}
  .sec button.f.t2-p:hover{background:rgba(255,255,255,.18);border-color:rgba(255,255,255,.6)}
  .sec button.f.t2-p[aria-pressed="true"]{background:rgba(255,255,255,.42);border-color:#fff}
  .sec button.f.t2-p[aria-pressed="true"]::after{content:"✓";position:absolute;right:6%;top:4%;background:#2f7d4a;color:#fff;border-radius:50%;width:28px;height:28px;display:grid;place-items:center;font-weight:900}
  .t2-dos{display:grid;grid-template-columns:1fr 1fr;gap:12px}@media (max-width:600px){.t2-dos{grid-template-columns:1fr}}
  .t2-dos>div{border-radius:16px;padding:12px}
</style>`;
/* 1 · Guion familiar */
const GUI=[['t2_g1','Mensajes que recibí sobre la vida de mi padre (o cuidador)'],['t2_g2','Mensajes que recibí sobre la vida de mi madre (o cuidadora)'],['t2_g3','Mensajes que recibí de los acontecimientos clave'],['t2_g4','Mensajes que hoy creo (pueden ser ciertos o no)']];
H('El guion de mi familia','✍️ Los guiones son los mensajes y creencias que dan forma a cómo la familia se ve a sí misma, a los demás y al mundo. Escribe los que recibiste.',
  CSS+`<h2>El guion de mi familia</h2><div class="t2-g">${GUI.map(([id,l])=>`<div><label for="${id}">${l}</label><textarea class="f" id="${id}" rows="3"></textarea></div>`).join('')}</div>`,
  GUI.map(([id,l])=>ta(id,l)),{chip:'Mi guion'});
/* 2 · Creencias con medidor */
H('Mis creencias','👆 Toca las creencias que alguna vez te han parecido ciertas y mueve la barra: ¿cuánto te preocupan hoy? (0 = nada, 10 = muchísimo)',
  `<h2>Creencias que me acompañan</h2>${Object.entries(CR).map(([g,L])=>`<div class="t2-cat"><h3>${g}</h3>${L.map(t=>{ const id='t2_c_'+slug(t);
    return `<div class="t2-cr" data-cr="${id}"><button type="button" class="f t2-b" id="${id}" aria-pressed="false">${t}</button><div class="t2-r"><input type="range" class="f" id="${id}_n" min="0" max="10" step="1" value="5" aria-label="Cuánto me preocupa: ${e(t)}"><output id="${id}_o">5/10</output></div></div>`; }).join('')}</div>`).join('')}
   <h3>Las que más pesan hoy</h3><div class="t2-bars" id="t2Bars"></div>`,
  [...TODAS.map(c=>chk(c.id,c.t,0,0,0,0,{g:'Creencias'})),...TODAS.map(c=>inp(c.id+'_n',c.t,0,0,0,0,{sil:true}))],{chip:'Mis creencias'});
const REF=[['t2_r1','¿Qué creencias te resultan más inquietantes?'],['t2_r2','¿De dónde crees que se originaron? (la infancia, las relaciones, la sociedad…)'],['t2_r3','¿Cómo han influido en tus decisiones y comportamientos?'],['t2_r4','¿Cómo sería tu vida si ya no tuvieras estas creencias?']];
H('Reflexión sobre mis creencias','✍️ Mira tus barras y responde con calma.',
  `<h2>Reflexión</h2><div class="t2-q">${REF.map(([id,q])=>`<label for="${id}">${q}</label><textarea class="f" id="${id}" rows="3"></textarea>`).join('')}</div>`,REF.map(([id,q])=>ta(id,q)),{chip:'Reflexión'});
/* 3 · Rompiendo el ciclo */
H('Rompiendo el ciclo','👆 Toca en la rueda los pasos que ya estás dando. Después, elige qué dejas atrás y qué conservas.',
  `<h2>Rompiendo el ciclo</h2><div class="t2-rueda">${recorte(IMG+'p07.jpg',100,410,1000,1010,PW,PH)}${PET.map(([t,x,y],i)=>`<button type="button" class="f t2-p" id="t2_p${i}" aria-pressed="false" aria-label="${t}" style="left:${x/10}%;top:${y/1010*100}%"></button>`).join('')}</div>
   <div class="t2-dos"><div style="background:#fdecea"><label class="lab" for="t2_deja">🍂 Lo que dejo atrás</label><p style="font-size:.9rem;color:#5d7a7f;margin:0 0 6px">Patrones, hábitos y creencias de mi historia familiar que quiero dejar de lado.</p><textarea class="f" id="t2_deja" rows="4"></textarea></div>
   <div style="background:#e1f1e6"><label class="lab" for="t2_conserva">🌱 Lo que conservo</label><p style="font-size:.9rem;color:#5d7a7f;margin:0 0 6px">Patrones, hábitos, creencias y valores de mi familia que quiero seguir llevando conmigo.</p><textarea class="f" id="t2_conserva" rows="4"></textarea></div></div>`,
  [...PET.map(([t],i)=>chk('t2_p'+i,t,0,0,0,0,{g:'Pasos que ya estoy dando'})),ta('t2_deja','Lo que dejo atrás'),ta('t2_conserva','Lo que conservo')],{chip:'Romper el ciclo'});
/* Medidores: mostrar la barra solo en las creencias marcadas, y el resumen con su puntaje */
_ult().alCambiar=S=>{ TODAS.forEach(c=>{ const w=document.querySelector(`[data-cr="${c.id}"]`); if(!w) return; w.classList.toggle('on',!!S[c.id]);
    const v=S[c.id+'_n']??'5', o=document.getElementById(c.id+'_o'), r=document.getElementById(c.id+'_n'); if(o) o.textContent=v+'/10'; if(r&&r.value!==String(v)) r.value=v; });
  const b=document.getElementById('t2Bars'); if(b){ const L=TODAS.filter(c=>S[c.id]).map(c=>({t:c.t,n:+(S[c.id+'_n']??5)})).sort((x,y)=>y.n-x.n);
    b.innerHTML=L.length?L.map(x=>`<div class="t2-bar"><div>${e(x.t)} <b style="color:#7e6bb3">${x.n}/10</b></div><span style="--w:${Math.max(4,x.n*10)}%"></span></div>`).join(''):'<p style="color:#9aa;margin:0">Aquí verás tus creencias ordenadas de la que más pesa a la que menos.</p>'; } };
_ult().resumenExtra=(p,D,T)=>{ if(p.t!=='Mis creencias') return; const i=T.findIndex(x=>x.startsWith('Creencias:')); if(i<0) return;
  T[i]='Creencias (cuánto me preocupan hoy): '+TODAS.filter(c=>D[c.id]).map(c=>`${c.t} (${D[c.id+'_n']??5}/10)`).join(' · '); };
}
