/* Trauma generacional 1: entender y explorar la historia familiar (rediseño dinámico).
   Textos psicoeducativos revisados con el consultor clínico (2026-09-29): sin «se transmite por el ADN», sin determinismo ni culpa. */
FICHA({clave:'trauma-gen',titulo:'Trauma generacional 1: mi historia familiar',corto:'Trauma generacional 1',carp:['trauma'],
  intro:`<p>El trauma generacional (o intergeneracional) describe cómo el impacto de experiencias muy dolorosas —violencia, guerra, pobreza extrema, desplazamiento, abuso— puede influir en generaciones siguientes, sobre todo a través de lo que se aprende en casa, las historias y creencias de la familia y el clima emocional. No todas las personas lo viven igual: la resiliencia, el apoyo y los recursos también cuentan. Con apoyo y tiempo, muchas personas logran cambiar sus patrones.</p>
  <p class="note" style="margin-top:10px">Explorar la historia familiar puede remover emociones fuertes. Ve a tu ritmo, detente si lo necesitas y lleva lo que surja a tu próxima sesión. Si te sientes muy mal o en riesgo, contacta a tu psicóloga o a la línea de emergencia (123 en Colombia).</p>`});
{
const IMG='img/trauma-gen/', PW=1200, PH=1553;
const slug=s=>s.toLowerCase().normalize('NFD').replace(/[^a-z0-9]+/g,'').slice(0,16);
const chip=(id,t)=>`<button type="button" class="f tg-chip" id="${id}" aria-pressed="false">${t}</button>`;
const CSS=`<style>
  .tg-hero{display:grid;grid-template-columns:minmax(0,1fr) 180px;gap:16px;align-items:center}
  @media (max-width:600px){.tg-hero{grid-template-columns:1fr 120px}}
  .tg-hero .rec{border-radius:16px}
  .tg-cards .cara{min-height:190px;padding:16px;justify-content:center;gap:8px;text-align:center}
  .tg-cards .cara.frente{background:linear-gradient(150deg,#b39ddb,#7e6bb3);color:#fff}
  .tg-cards .cara.frente b{font-family:'DM Serif Display',Georgia,serif;font-size:1.2rem;font-weight:400}
  .tg-cards .cara.atras{background:#f4f0fb;color:#3d2f5c;font-size:.92rem;line-height:1.45}
  .tg-chips{display:flex;flex-wrap:wrap;gap:8px}
  .sec button.f.tg-chip{border-radius:999px;padding:8px 14px;font-size:.9rem}
  .sec button.f.tg-chip[aria-pressed="true"]{background:#7e6bb3;border-color:#7e6bb3}
  .tg-cont{font-weight:800;color:#7e6bb3}
  .tg-senal{display:grid;gap:8px}
  .sec button.f.tg-s{display:grid;gap:2px;border-radius:14px}
  .sec button.f.tg-s small{font-weight:600;color:#5d7a7f}
  .sec button.f.tg-s[aria-pressed="true"]{background:#f1ecfb;border-color:#7e6bb3;color:#3d2f5c}
  .sec button.f.tg-s[aria-pressed="true"] small{color:#5b4a86}
  .sec button.f.tg-s[aria-pressed="true"]::after{content:"✓ Lo reconozco en mi familia";font-size:.78rem;font-weight:800;color:#7e6bb3}
  .tg-q label{font-weight:800;color:var(--petroleo);display:block;margin:6px 0 4px}
  .tg-lt{position:relative;padding-left:26px;display:grid;gap:10px}
  .tg-lt::before{content:"";position:absolute;left:9px;top:4px;bottom:4px;width:3px;border-radius:3px;background:linear-gradient(#c9987c,#81a9a7)}
  .tg-ev{position:relative;background:#fff;border:1px solid var(--beige);border-radius:12px;padding:8px 12px}
  .tg-ev::before{content:"";position:absolute;left:-22px;top:12px;width:13px;height:13px;border-radius:50%;background:var(--c);box-shadow:0 0 0 3px #fff}
  .tg-ev b{color:var(--c)} .tg-ev small{color:#5d7a7f;font-weight:700}
  .tg-4{display:grid;grid-template-columns:1fr 1fr;gap:12px}@media (max-width:600px){.tg-4{grid-template-columns:1fr}}
  .tg-4 label{font-weight:800;display:block;margin-bottom:4px}
</style>`;
const COMO=[['🔁','Patrones de comportamiento','Quien vivió un trauma puede transmitir sin querer formas de afrontarlo, como sobreprotección, distancia emocional o crianza impredecible. No es una culpa: son formas de sobrevivir que se aprendieron.'],
  ['📖','Narrativas y creencias familiares','Las historias que la familia cuenta —de supervivencia, desconfianza o resiliencia— pueden influir en cómo nos vemos y cómo vemos el mundo.'],
  ['🌦️','Clima emocional','Cuando en casa no se habla de lo que se siente, a veces se aprenden formas de afrontar que pueden repetirse.'],
  ['🧬','Epigenética','Algunos estudios, sobre todo en animales y con resultados aún limitados en humanos, sugieren que el estrés extremo podría dejar marcas biológicas que influyen en la respuesta al estrés de los hijos. Esto no significa que el trauma se herede en el ADN ni que tu historia esté escrita: es un campo en desarrollo.']];
const SEN=[['Supresión emocional','Dificultad para expresar emociones o tendencia a guardarlas.'],['Hipervigilancia','Estar siempre en alerta, incluso en situaciones seguras.'],['Problemas de confianza','Dificultad para confiar o sostener relaciones sanas.'],['Perfeccionismo','Presión intensa por lograr o ser perfecto(a).'],['Evitación de conflictos','Evitar a toda costa los desacuerdos o las discusiones.'],['Culpa o vergüenza inexplicables','Una culpa que parece desproporcionada a lo vivido.'],['Adicciones','Consumo de sustancias como forma de afrontar el dolor.'],['Dificultad para regular emociones','Arrebatos frecuentes o dificultad con el estrés y la ira.'],['Miedo o ansiedad persistente','Miedo continuo sin una causa clara.'],['Repetir conductas dañinas','Ciclos de abuso, negligencia o dinámicas poco sanas.']];
const PAT=['Abuso de sustancias','Ira poco saludable o evitar los conflictos','Infidelidad o secretos','Resentimiento o aislamiento emocional','Abuso emocional, físico o verbal','Creencias discriminatorias','Perfeccionismo o énfasis excesivo en el éxito','Adicción al trabajo o descuido del autocuidado'];
const EVE=['Pérdidas tempranas o muertes prematuras','Enfermedades crónicas o hereditarias','Violencia, abuso o negligencia','Desastres naturales o desplazamiento','Dificultades económicas o pobreza','Divorcio, infertilidad o pérdidas gestacionales','Problemas de salud mental','Adicciones y su impacto en la familia'];
/* 1 · Entender */
H('¿Qué es el trauma generacional?','👆 Toca cada tarjeta para descubrir cómo puede pasar de una generación a otra.',
  CSS+`<div class="tg-hero"><div><h2>Rompiendo el ciclo y sanando</h2><p style="color:#5d7a7f;margin-top:6px">Lo que vivieron nuestros padres y abuelos puede dejar huellas en cómo sentimos, confiamos y nos relacionamos. Entenderlo no es buscar culpables: es darte la oportunidad de elegir qué conservas y qué cambias.</p></div>${recorte(IMG+'p01.jpg',380,1025,440,475,PW,PH)}</div>
  <h3>¿Cómo se transmite?</h3><div class="cartas tg-cards">${COMO.map(([ic,t,d])=>cartaFlip(`<span style="font-size:2rem">${ic}</span><b>${t}</b><small>👆 Toca para voltear</small>`,`<b style="color:#7e6bb3">${t}</b><span>${d}</span>`)).join('')}</div>`,[],{chip:'Qué es'});
/* 2 · Señales */
H('Señales en mi familia','👆 Toca las señales que reconoces en tu familia (o en ti).',
  `<h2>Señales que reconozco</h2><p class="tg-cont" id="tgCont"></p><div class="tg-senal">${SEN.map(([t,d])=>`<button type="button" class="f tg-s" id="tg_s_${slug(t)}" aria-pressed="false"><span>${t}</span><small>${d}</small></button>`).join('')}</div>`,
  SEN.map(([t])=>chk('tg_s_'+slug(t),t,0,0,0,0,{g:'Señales que reconozco'})),{chip:'Señales'});
/* 3 · Patrones y acontecimientos */
H('Patrones y acontecimientos de mi familia','👆 Marca lo que ha estado presente en la historia de tu familia y escribe lo que falte.',
  `<h2>Lo que ha pasado en mi familia</h2><h3>Creencias o patrones dañinos</h3><div class="tg-chips">${PAT.map(t=>chip('tg_p_'+slug(t),t)).join('')}</div><textarea class="f" id="tg_p_otros" rows="2" placeholder="Otros patrones…"></textarea>
   <h3>Acontecimientos difíciles</h3><div class="tg-chips">${EVE.map(t=>chip('tg_e_'+slug(t),t)).join('')}</div><textarea class="f" id="tg_e_otros" rows="2" placeholder="Otros acontecimientos…"></textarea>`,
  [...PAT.map(t=>chk('tg_p_'+slug(t),t,0,0,0,0,{g:'Patrones en mi familia'})),ta('tg_p_otros','Otros patrones'),...EVE.map(t=>chk('tg_e_'+slug(t),t,0,0,0,0,{g:'Acontecimientos en mi familia'})),ta('tg_e_otros','Otros acontecimientos')],{chip:'Patrones'});
/* 4 · Lo que heredé */
const HER=[['tg_h1','¿Qué creencias o comportamientos he adoptado de mi familia, de forma consciente o inconsciente?'],['tg_h2','¿He enfrentado alguna dificultad que refleje las de generaciones pasadas?'],['tg_h3','¿Cómo han influido estas experiencias en mis relaciones, mi autoestima o mi forma de afrontar?'],['tg_h4','¿Qué valores, fortalezas o recursos también me dejó mi familia?']];
H('Lo que heredé','✍️ Escribe sin juzgarte. Incluye también lo bueno que recibiste.',
  `<h2>Lo que heredé</h2><div class="tg-q">${HER.map(([id,q])=>`<label for="${id}">${q}</label><textarea class="f" id="${id}" rows="3"></textarea>`).join('')}</div>`,
  HER.map(([id,q])=>ta(id,q)),{chip:'Lo que heredé'});
/* 5 · Línea de tiempo */
const LT=[['tg_lt_tm','Trauma en mi vida','#c0483c','Mi vida'],['tg_lt_rm','Momentos de redención en mi vida','#2f7d4a','Mi vida'],['tg_lt_tf','Trauma en mi vida familiar','#c9987c','Mi familia'],['tg_lt_rf','Momentos de redención en mi familia','#047578','Mi familia']];
H('Mi línea de tiempo familiar','✍️ Escribe un acontecimiento por línea. Si pones el año al inicio («1998 - …»), aparece en orden en tu línea de tiempo.',
  `<h2>Mi línea de tiempo</h2><div class="tg-4">${LT.map(([id,l])=>`<div><label for="${id}">${l}</label><textarea class="f" id="${id}" rows="3" placeholder="Ej.: 1998 - …"></textarea></div>`).join('')}</div>
   <h3>Así se ve mi historia</h3><div class="tg-lt" id="tgLinea"></div>`,
  LT.map(([id,l])=>ta(id,l)),{chip:'Línea de tiempo'});
const linea=S=>{ const ev=[]; LT.forEach(([id,l,c,q])=>String(S[id]||'').split('\n').map(s=>s.trim()).filter(Boolean).forEach(s=>{ const m=s.match(/^(\d{4})\s*[-–:.]?\s*(.*)$/); ev.push({a:m?+m[1]:null,t:m?m[2]:s,l,c,q}); }));
  ev.sort((x,y)=>(x.a??9999)-(y.a??9999));
  const e=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  return ev.length?ev.map(x=>`<div class="tg-ev" style="--c:${x.c}"><small>${x.a??'Sin año'} · ${x.q}</small><div><b>${x.l.startsWith('Trauma')?'⛈️':'🌱'}</b> ${e(x.t)}</div></div>`).join(''):'<p style="color:#9aa;margin:0">Tu línea de tiempo aparecerá aquí.</p>'; };
_ult().alCambiar=S=>{ const n=SEN.filter(([t])=>S['tg_s_'+slug(t)]).length, c=document.getElementById('tgCont'); if(c) c.textContent=n?`Reconoces ${n} de ${SEN.length} señales. Reconocerlas es el primer paso para cambiarlas.`:'';
  const l=document.getElementById('tgLinea'); if(l) l.innerHTML=linea(S); };
}
