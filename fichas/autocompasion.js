/* Pausa de autocompasión (rediseño): qué es y qué no es, los tres pasos (atención plena, humanidad compartida, amabilidad)
   con frases para tocar, un gesto de cuidado y mi frase para llevar. Malestar antes y después.
   Basado en K. Neff (2003) y R. Baer (Mindfulness para la felicidad, cap. autocompasión). Redacción propia. */
FICHA({clave:'autocompasion',titulo:'Pausa de autocompasión',corto:'Autocompasión',carp:['autoestima','duelo','emociones'],
  intro:`<p>Cuando algo duele, solemos hablarnos con dureza: «qué torpe», «otra vez lo mismo», «no sirvo para nada». La autocompasión es hacer lo contrario: <b>tratarte como tratarías a alguien que quieres mucho</b> cuando está pasando un mal momento.</p><p>Este ejercicio toma unos 5 minutos. Úsalo cada vez que te sientas mal contigo, y repítelo: es una habilidad que se entrena.</p>`});
{
const AC_CSS=`<style>
.ac-hero{display:grid;grid-template-columns:120px 1fr;gap:16px;align-items:center;background:linear-gradient(135deg,#fde8df,#fbf6ef 55%,#e4f0ee);border-radius:20px;padding:16px}
.ac-hero svg{width:120px;height:120px}
.ac-hero p{font-size:1.02rem}
@media(max-width:480px){.ac-hero{grid-template-columns:1fr;text-align:center}.ac-hero svg{margin:0 auto}}
.ac-tres{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:10px}
.ac-p{border-radius:18px;padding:14px;color:#1f3d45;position:relative;overflow:hidden}
.ac-p .n{font-family:"DM Serif Display",Georgia,serif;font-size:2.4rem;line-height:1;opacity:.25;position:absolute;right:12px;top:6px}
.ac-p .ic{font-size:1.8rem}
.ac-p b{display:block;font-size:1.05rem;margin:4px 0 2px;color:#165a6c}
.ac-p small{display:block;font-size:.9rem;line-height:1.4}
.ac-p q{display:block;margin-top:8px;font-family:"Caveat",cursive;font-size:1.35rem;color:#9a5a3c;quotes:"«" "»"}
.ac1{background:#e4f0ee}.ac2{background:#f6eedd}.ac3{background:#fde8df}
.ac-mito{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}
.ac-mito .cara{min-height:130px;display:grid;place-items:center;padding:12px;border-radius:16px;font-weight:800;text-align:center;line-height:1.3}
.ac-mito .frente{background:#fff;border:2px dashed #c9987c;color:#9a5a3c}
.ac-mito .atras{background:#047578;color:#fff;font-weight:700;font-size:.93rem}
.ac-paso{border-radius:20px;padding:16px;display:grid;gap:10px}
.ac-paso h3{display:flex;align-items:center;gap:10px;font-size:1.15rem}
.ac-paso h3 .num{flex:none;width:36px;height:36px;border-radius:50%;display:grid;place-items:center;color:#fff;font-weight:900}
.ac-paso p{font-size:.95rem}
.ac-frases{display:flex;flex-wrap:wrap;gap:6px}
.ac-frases button{font:inherit;font-size:.88rem;font-weight:700;border:1.5px solid currentColor;background:#fff;border-radius:999px;padding:6px 12px;cursor:pointer;color:#165a6c}
.ac-frases button:hover{background:#fff7ee}
.ac-frases button::before{content:"＋ ";opacity:.6}
.ac-gestos{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:8px}
.sec button.f.ac-g{text-align:center;border-radius:16px;padding:12px 8px;background:#fff}
.sec button.f.ac-g span{display:block;font-size:1.7rem;margin-bottom:2px}
.sec button.f.ac-g[aria-pressed="true"]{background:#c9987c;border-color:#c9987c}
.ac-med{background:#f4faf8;border-radius:18px;padding:14px;display:grid;gap:6px}
.ac-med .fila{display:flex;align-items:center;gap:12px}
.ac-med input[type=range]{flex:1;accent-color:#047578;height:28px}
.ac-med .cara{font-size:2.2rem;width:48px;text-align:center}
.ac-med output{font-weight:900;color:#047578;min-width:46px;text-align:right}
.ac-post{background:linear-gradient(160deg,#fff 0%,#fdf1ea 100%);border:2px solid #e7cdbd;border-radius:22px;padding:22px 20px;text-align:center;box-shadow:0 12px 28px rgba(201,152,124,.18)}
.ac-post .t{font-family:"Caveat",cursive;font-size:1.6rem;line-height:1.35;color:#7a4a32;white-space:pre-line}
.ac-post .t.vacio{opacity:.55;font-family:inherit;font-size:1rem}
.ac-post .firma{margin-top:8px;font-size:.8rem;color:#5d7a7f;font-weight:700}
.ac-baja{font-weight:900;color:#047578;text-align:center;font-size:1.05rem}
.ac-guardar{display:grid;gap:6px;justify-items:center;text-align:center;background:#e4f0ee;border-radius:18px;padding:14px}
.ac-guardar .btn{font-size:1rem}
.ac-guardar small{color:#5d7a7f;font-weight:700}
.ac-mes{display:grid;gap:14px}
.ac-mes-nav{display:flex;align-items:center;justify-content:space-between;gap:8px}
.ac-mes-nav b{font-family:"DM Serif Display",Georgia,serif;font-weight:400;font-size:1.45rem;color:#165a6c;text-transform:capitalize}
.ac-mes-nav button{font:inherit;font-weight:800;border:2px solid #e7decf;background:#fff;border-radius:999px;width:40px;height:40px;cursor:pointer;color:#165a6c}
.ac-mes-nav button:disabled{opacity:.35;cursor:default}
.ac-tiles{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.ac-tile{background:#fbf6ef;border:1px solid #e7decf;border-radius:16px;padding:10px;text-align:center}
.ac-tile b{display:block;font-size:1.5rem;color:#165a6c;font-variant-numeric:tabular-nums}
.ac-tile span{font-size:.78rem;font-weight:700;color:#5d7a7f}
@media(max-width:420px){.ac-tiles{grid-template-columns:1fr 1fr}.ac-tile:last-child{grid-column:1/-1}}
.ac-graf{background:#fff;border:1px solid #e7decf;border-radius:16px;padding:10px 8px 4px;overflow-x:auto}
.ac-graf svg{display:block;min-width:100%}
.ac-ley{display:flex;gap:14px;justify-content:center;font-size:.8rem;font-weight:700;color:#5d7a7f;margin-top:4px}
.ac-ley i{display:inline-block;width:12px;height:12px;border-radius:3px;margin-right:4px;vertical-align:-1px}
.ac-postales{display:grid;gap:10px}
.ac-postal{position:relative;background:linear-gradient(160deg,#fff 0%,#fdf1ea 100%);border:1.5px solid #e7cdbd;border-radius:18px;padding:14px 16px}
.ac-postal .fe{font-size:.78rem;font-weight:800;color:#9a5a3c;text-transform:uppercase;letter-spacing:.05em}
.ac-postal .t{font-family:"Caveat",cursive;font-size:1.4rem;line-height:1.3;color:#7a4a32;white-space:pre-line;margin:2px 0}
.ac-postal .me{font-size:.85rem;color:#1f3d45;font-weight:700}
.ac-postal .x{position:absolute;top:8px;right:8px;border:none;background:none;color:#9a5a3c;font:inherit;font-size:.78rem;font-weight:800;cursor:pointer;padding:4px 8px;border-radius:999px}
.ac-postal .x:hover{background:#fbe6dc}
.ac-vacio{text-align:center;color:#5d7a7f;background:#fbf6ef;border:2px dashed #e7decf;border-radius:16px;padding:18px}
</style>`;
const manos=`<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="56" fill="#fff" opacity=".7"/>
  <path d="M60 86 C40 72 30 60 30 48 a14 14 0 0 1 30-6 a14 14 0 0 1 30 6 c0 12-10 24-30 38z" fill="#e0857a"/>
  <path d="M18 74 q8-4 18 4 l18 14 q6 5 0 9 l-6 1 H24 q-8 0-10-8z" fill="#f2c6a8" stroke="#c9987c" stroke-width="2"/>
  <path d="M102 74 q-8-4-18 4 l-18 14 q-6 5 0 9 l6 1 h24 q8 0 10-8z" fill="#f2c6a8" stroke="#c9987c" stroke-width="2"/>
  <circle cx="44" cy="38" r="3" fill="#fff" opacity=".8"/></svg>`;
const frases=(to,L)=>`<div class="ac-frases">${L.map(t=>`<button type="button" data-ins="${esc(t)}" data-to="${to}">${esc(t)}</button>`).join('')}</div>`;
const caraDe=v=>v===''||v==null?'😶':+v>=8?'😣':+v>=6?'😟':+v>=4?'😕':+v>=2?'🙂':'😌';
const medidor=(id,lab)=>`<div class="ac-med"><label class="lab" for="${id}">${lab}</label>
  <div class="fila"><span class="cara" id="${id}c">😶</span><input class="f" type="range" min="0" max="10" step="1" id="${id}" value="5"><output id="${id}o">sin marcar</output></div>
  <div style="display:flex;justify-content:space-between;font-size:.78rem;color:#5d7a7f;font-weight:700"><span>0 · nada</span><span>10 · muchísimo</span></div></div>`;
const MITOS=[['Es tenerme lástima','No. Es reconocer que duele, sin dramatizar ni hacerme la víctima.'],['Es ser débil','Al contrario: da fuerza para levantarse después de un error.'],['Es dejarme pasar todo','No. Me hago cargo de mis errores, pero sin castigarme.'],['Es egoísta','Cuando me cuido, tengo más para dar a los demás.']];
const GESTOS=[['🦋','Abrazo de mariposa'],['🌬️','Respirar lento 1 minuto'],['☕','Algo caliente para tomar'],['🚶‍♀️','Caminar un rato'],['🎵','Música que me calme'],['🛁','Un baño tranquilo'],['📞','Hablar con alguien que me quiere']];

H('¿Qué es la autocompasión?','👀 Lee con calma y toca las tarjetas para descubrir qué NO es la autocompasión.',
  `${AC_CSS}<div class="ac-hero">${manos}<p><b>Autocompasión</b> es darte a ti mismo(a) el mismo cariño, paciencia y comprensión que le darías a una amiga que está sufriendo. No borra el problema, pero <b>cambia cómo lo atraviesas</b>: con alguien a tu lado, que eres tú.</p></div>
  <h2>Tiene tres partes</h2>
  <div class="ac-tres">
    <div class="ac-p ac1"><span class="n">1</span><span class="ic">🧘‍♀️</span><b>Atención plena</b><small>Notar lo que siento, sin exagerarlo ni esconderlo.</small><q>Esto me duele.</q></div>
    <div class="ac-p ac2"><span class="n">2</span><span class="ic">🤝</span><b>Humanidad compartida</b><small>Recordar que equivocarse y sufrir es parte de ser humano(a). No estoy solo(a).</small><q>A otras personas también les pasa.</q></div>
    <div class="ac-p ac3"><span class="n">3</span><span class="ic">💗</span><b>Amabilidad</b><small>Hablarme con cariño y darme lo que necesito, en vez de criticarme.</small><q>Que pueda ser amable conmigo.</q></div>
  </div>
  <h2>Lo que NO es</h2>
  <div class="ac-mito cartas">${MITOS.map(([f,a])=>cartaFlip(`🤔 «${f}»`,a)).join('')}</div>`,
  [],{chip:'Qué es'});

H('Antes de empezar','🎚️ Mueve la barra: ¿cuánto malestar sientes ahora?',
  `<h2>¿Cómo estás ahora?</h2><p>Piensa en lo que te está haciendo sentir mal hoy: un error, una discusión, una preocupación, algo que te dijeron.</p>${medidor('ac_antes','Mi malestar ahora (0–10)')}`,
  [inp('ac_antes','Malestar antes (0–10)')],{chip:'Antes'});

H('Mi pausa en tres pasos','✍️ Escribe en cada paso. Si no sabes qué decir, toca una frase y la puedes cambiar.',
  `<h2>Mi pausa de autocompasión</h2>
  <div class="ac-paso ac1"><h3><span class="num" style="background:#047578">1</span>🧘‍♀️ Noto lo que siento</h3>
    <p>Ponle nombre a lo que pasa, como si lo describieras desde afuera, con calma. No hace falta resolverlo todavía.</p>
    <label class="lab" for="ac_1">¿Qué está pasando y qué siento?</label>
    <textarea class="f" id="ac_1" rows="3" placeholder="Ej.: Me equivoqué en el trabajo y siento vergüenza y rabia conmigo."></textarea>
    ${frases('ac_1',['Este es un momento difícil.','Esto me duele.','Me siento triste y está bien sentirlo.','Estoy agotado(a).'])}</div>
  <div class="ac-paso ac2"><h3><span class="num" style="background:#b98a3e">2</span>🤝 No estoy solo(a)</h3>
    <p>Muchas personas, en este mismo momento, sienten algo parecido. Sufrir no significa que algo esté mal contigo: significa que eres humano(a).</p>
    <label class="lab" for="ac_2">¿Qué me digo al recordarlo?</label>
    <textarea class="f" id="ac_2" rows="3" placeholder="Ej.: Equivocarse le pasa a todo el mundo; no me hace menos valioso(a)."></textarea>
    ${frases('ac_2',['Equivocarme es parte de ser humano(a).','Otras personas también se sienten así.','No estoy solo(a) en esto.','Todos tenemos días difíciles.'])}</div>
  <div class="ac-paso ac3"><h3><span class="num" style="background:#c9987c">3</span>💗 Me hablo con cariño</h3>
    <p>Imagina que tu mejor amiga te cuenta lo mismo. ¿Qué le dirías? Ahora díselo a ella… y a ti.</p>
    <label class="lab" for="ac_3">Lo que le diría a alguien que quiero (y ahora me digo a mí)</label>
    <textarea class="f" id="ac_3" rows="3" placeholder="Ej.: Es comprensible que te sientas así; hiciste lo mejor que pudiste con lo que sabías."></textarea>
    ${frases('ac_3',['Es comprensible que me sienta así.','Que pueda ser amable conmigo.','Que pueda aceptarme como soy.','Hice lo mejor que pude con lo que sabía.','Merezco el mismo cariño que doy.','«Nuevas son cada mañana sus misericordias» (Lamentaciones 3:23)'])}</div>`,
  [ta('ac_1','1 · Lo que noto y siento'),ta('ac_2','2 · No estoy solo(a)'),ta('ac_3','3 · Me hablo con cariño')],{chip:'Los 3 pasos'});

H('Un gesto de cuidado','👆 Toca uno o varios gestos que vas a hacer por ti hoy.',
  `<h2>Un gesto de cuidado para mí</h2><p>El cuerpo también necesita sentir el cuidado. Elige algo pequeño que puedas hacer ahora o hoy.</p>
  <div class="ac-gestos">${GESTOS.map(([ic,t],i)=>`<button type="button" class="f ac-g" id="ac_g${i}" aria-pressed="false"><span>${ic}</span>${t}</button>`).join('')}</div>
  <label class="lab" for="ac_gx">Otro gesto (opcional)</label><input class="f" id="ac_gx" placeholder="Ej.: escribirme una nota y pegarla en el espejo">`,
  [...GESTOS.map(([,t],i)=>chk('ac_g'+i,t,0,0,0,0,{g:'Gesto de cuidado'})),inp('ac_gx','Otro gesto de cuidado')],{chip:'Gesto'});

H('Mi frase para llevar','💌 Tu frase se arma sola con lo que te dijiste en los pasos 2 y 3. Luego marca cómo te sientes ahora.',
  `<h2>Mi frase para llevar</h2><p>Tómale una foto o cópiala: léela cuando vuelva el momento difícil.</p>
  <div class="ac-post"><div class="t vacio" id="acPost">Tu frase aparecerá aquí cuando escribas en los pasos 2 y 3.</div><div class="firma">— con cariño, de mí para mí 💗</div></div>
  ${medidor('ac_desp','Mi malestar después (0–10)')}<div class="ac-baja" id="acBaja"></div>
  <label class="lab" for="ac_nota">¿Qué noté al hacer la pausa?</label><textarea class="f" id="ac_nota" rows="3" placeholder="Ej.: Me costó al principio, pero sentí el pecho más suelto."></textarea>
  <div class="ac-guardar"><button type="button" class="btn teal" id="acGuardar">💾 Guardar esta pausa y empezar otra</button><small id="acGuardarMsg">Cada pausa que guardes aparece en «Mi mes», con su fecha, tu frase y tu malestar.</small></div>`,
  [inp('ac_desp','Malestar después (0–10)'),ta('ac_nota','Lo que noté al hacer la pausa')],{chip:'Mi frase'});

/* ---------- Varios registros: cada pausa guardada va a S.ac_reg; «Mi mes» muestra frases y malestar ---------- */
const CAMPOS_PAUSA=['ac_antes','ac_1','ac_2','ac_3','ac_gx','ac_desp','ac_nota',...GESTOS.map((_,i)=>'ac_g'+i)];
const regs=S=>Array.isArray(S.ac_reg)?S.ac_reg:[];
const hoyISO=()=>{ const d=new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; };
const MESES=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const ddmm=f=>f.slice(8,10)+'/'+f.slice(5,7);
const num=v=>v===''||v==null||isNaN(+v)?null:+v;
let mesSel=hoyISO().slice(0,7), borrarId=null;
const fraseDe=r=>[r.c2,r.c3].map(x=>String(x||'').trim()).filter(Boolean).join('\n');
function grafico(L){
  const n=L.length, bw=14, g=10, paso=bw*2+g, W=Math.max(300,40+n*paso), Hh=150, y0=120, esc10=v=>y0-(v/10)*100;
  const ejes=[0,5,10].map(v=>`<line x1="28" x2="${W-6}" y1="${esc10(v)}" y2="${esc10(v)}" stroke="#e7decf" stroke-width="1"/><text x="22" y="${esc10(v)+4}" text-anchor="end" font-size="10" fill="#5d7a7f" font-weight="700">${v}</text>`).join('');
  const barras=L.map((r,i)=>{ const x=36+i*paso, a=num(r.a), d=num(r.d);
    const b=(v,xx,col)=>v==null?'':`<rect x="${xx}" y="${esc10(v)}" width="${bw}" height="${y0-esc10(v)}" rx="3" fill="${col}"><title>${v}/10</title></rect>`;
    return b(a,x,'#c9987c')+b(d,x+bw,'#047578')+`<text x="${x+bw}" y="${y0+14}" text-anchor="middle" font-size="9.5" fill="#5d7a7f" font-weight="700">${ddmm(r.f)}</text>`; }).join('');
  return `<div class="ac-graf"><svg viewBox="0 0 ${W} ${Hh}" width="${W}" height="${Hh}" role="img" aria-label="Malestar antes y después de cada pausa">${ejes}${barras}</svg></div>
    <div class="ac-ley"><span><i style="background:#c9987c"></i>Antes</span><span><i style="background:#047578"></i>Después</span></div>`;
}
function htmlMes(S){
  const R=regs(S), L=R.filter(r=>(r.f||'').slice(0,7)===mesSel).sort((a,b)=>(a.f+a.id).localeCompare(b.f+b.id));
  const meses=[...new Set(R.map(r=>(r.f||'').slice(0,7)).concat(hoyISO().slice(0,7)))].sort(), i=meses.indexOf(mesSel);
  const [y,m]=mesSel.split('-'), nav=`<div class="ac-mes-nav"><button type="button" data-mes="-1" aria-label="Mes anterior" ${i<=0?'disabled':''}>‹</button><b>${MESES[+m-1]} ${y}</b><button type="button" data-mes="1" aria-label="Mes siguiente" ${i>=meses.length-1?'disabled':''}>›</button></div>`;
  if(!L.length) return `<div class="ac-mes">${nav}<div class="ac-vacio">Todavía no hay pausas guardadas este mes.<br>Al terminar una pausa, toca <b>«💾 Guardar esta pausa y empezar otra»</b> y aparecerá aquí.</div></div>`;
  const pares=L.filter(r=>num(r.a)!=null&&num(r.d)!=null), prom=k=>pares.length?(pares.reduce((s,r)=>s+num(r[k]),0)/pares.length).toFixed(1):'—';
  const dias=new Set(L.map(r=>r.f)).size;
  return `<div class="ac-mes">${nav}
    <div class="ac-tiles"><div class="ac-tile"><b>${L.length}</b><span>pausa${L.length>1?'s':''} guardada${L.length>1?'s':''}</span></div>
      <div class="ac-tile"><b>${dias}</b><span>día${dias>1?'s':''} con pausa</span></div>
      <div class="ac-tile"><b>${prom('a')} → ${prom('d')}</b><span>malestar promedio antes → después</span></div></div>
    ${pares.length?`<h3>📉 Mi malestar en cada pausa</h3>${grafico(L)}`:''}
    <h3>💌 Mis frases autocompasivas</h3>
    <div class="ac-postales">${L.slice().reverse().map(r=>`<div class="ac-postal"><div class="fe">${ddmm(r.f)}${num(r.a)!=null&&num(r.d)!=null?` · malestar ${r.a} → ${r.d}`:''}</div>
      <div class="t">${esc(fraseDe(r)||'(sin frase)')}</div>${r.g&&r.g.length?`<div class="me">Me cuidé con: ${esc(r.g.join(', '))}</div>`:''}
      <button type="button" class="x" data-borrar="${r.id}">${borrarId===r.id?'¿Borrar? Toca otra vez':'✕ Borrar'}</button></div>`).join('')}</div></div>`;
}
const repintarMes=S=>{ const el=document.querySelector('[data-fx="ac_mes"]'); if(el) el.innerHTML=htmlMes(S); };
H('Mi mes de autocompasión','📅 Aquí ves cada pausa que guardaste: tus frases y cómo cambió tu malestar.',
  `<h2>Mi mes de autocompasión</h2><p>Mira cómo te has ido hablando con más cariño. Cambia de mes con las flechas.</p><div class="fx" data-fx="ac_mes"></div>`,
  [{k:'x',id:'ac_mes',lab:'Mis pausas guardadas',html:htmlMes,activo:D=>regs(D).length>0,
    clic:(e,S)=>{ const mb=e.target.closest('[data-mes]'); if(mb){ const R=regs(S), meses=[...new Set(R.map(r=>(r.f||'').slice(0,7)).concat(hoyISO().slice(0,7)))].sort(), i=meses.indexOf(mesSel)+(+mb.dataset.mes);
        if(meses[i]) mesSel=meses[i]; borrarId=null; repintarMes(S); return false; }
      const xb=e.target.closest('[data-borrar]'); if(xb){ const id=xb.dataset.borrar; if(borrarId!==id){ borrarId=id; repintarMes(S); return false; }
        S.ac_reg=regs(S).filter(r=>r.id!==id); borrarId=null; repintarMes(S); return true; }
      return false; },
    resumen:(D,L)=>{ regs(D).slice().sort((a,b)=>(a.f+a.id).localeCompare(b.f+b.id)).forEach(r=>{
      const t=[num(r.a)!=null||num(r.d)!=null?`Malestar: ${r.a??'—'} → ${r.d??'—'}`:'',r.c1?'Lo que pasaba: '+r.c1:'',r.c2?'No estoy solo(a): '+r.c2:'',r.c3?'Me dije: '+r.c3:'',r.g&&r.g.length?'Me cuidé con: '+r.g.join(', '):'',r.n?'Noté: '+r.n:''].filter(Boolean);
      L.push(`• ${ddmm(r.f)}: ${t.join(' | ')}`); }); },
    cambios:(A,B,L)=>{ const n=regs(B).length-regs(A).length; if(n>0) L.push(`<li><b>Pausas guardadas:</b> <span class="mas">+${n}</span></li>`); }}],
  {chip:'Mi mes'});

document.addEventListener('click',e=>{ if(!e.target.closest('#acGuardar')||!window.CARTILLA) return;
  const S=window.CARTILLA.S(), msg=document.getElementById('acGuardarMsg');
  const g=GESTOS.map(([,t],i)=>S['ac_g'+i]?t:null).filter(Boolean).concat(String(S.ac_gx||'').trim()?[String(S.ac_gx).trim()]:[]);
  const r={id:'r'+Date.now().toString(36),f:hoyISO(),a:num(S.ac_antes),d:num(S.ac_desp),c1:String(S.ac_1||'').trim(),c2:String(S.ac_2||'').trim(),c3:String(S.ac_3||'').trim(),g,n:String(S.ac_nota||'').trim()};
  if(!r.c1&&!r.c2&&!r.c3&&r.a==null&&r.d==null){ msg.textContent='Escribe algo en tu pausa antes de guardarla.'; return; }
  S.ac_reg=regs(S).concat([r]); mesSel=r.f.slice(0,7);
  CAMPOS_PAUSA.forEach(k=>{ delete S[k]; const el=document.getElementById(k); if(!el) return; if(el.tagName==='BUTTON') el.setAttribute('aria-pressed','false'); else el.value=''; });
  window.CARTILLA.guardar(); repintarMes(S);
  msg.textContent=`✓ Guardada (${ddmm(r.f)}). Ya está en «Mi mes». Puedes empezar otra pausa cuando la necesites.`;
  const ini=document.getElementById('ac_antes'); if(ini) ini.closest('section').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}); });

/* Frases para tocar: se agregan al recuadro de su paso (y se guardan como si se hubieran escrito) */
document.addEventListener('click',e=>{ const b=e.target.closest('[data-ins]'); if(!b) return; const t=document.getElementById(b.dataset.to); if(!t) return;
  const v=t.value.trim(); t.value=v?v+(/[.!?»]$/.test(v)?' ':'. ')+b.dataset.ins:b.dataset.ins; t.dispatchEvent(new Event('input',{bubbles:true})); });
_ult().alCambiar=S=>{
  ['ac_antes','ac_desp'].forEach(id=>{ const v=S[id], r=document.getElementById(id), o=document.getElementById(id+'o'), c=document.getElementById(id+'c');
    const hay=v!=null&&v!==''; if(o) o.textContent=hay?v+'/10':'sin marcar'; if(c) c.textContent=caraDe(hay?v:''); if(r&&!hay) r.value=5; });
  const p=document.getElementById('acPost'); if(p){ const t=['ac_2','ac_3'].map(k=>String(S[k]||'').trim()).filter(Boolean);
    p.textContent=t.length?t.join('\n'):'Tu frase aparecerá aquí cuando escribas en los pasos 2 y 3.'; p.classList.toggle('vacio',!t.length); }
  repintarMes(S);
  const b=document.getElementById('acBaja'); if(b){ const a=S.ac_antes, d=S.ac_desp; b.textContent=(a!=null&&a!==''&&d!=null&&d!=='')?(+d<+a?`Tu malestar bajó de ${a} a ${d} 🌱`:+d===+a?'Tu malestar sigue igual: está bien, la pausa también es para acompañarte.':'Hoy subió un poco: dale tiempo y vuelve a intentarlo. Cuéntaselo a tu psicóloga.'):''; }
};
}
