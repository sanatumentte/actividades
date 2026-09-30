"use strict";
/* Motor común de las cartillas de Sana tu Mentte (casos clínicos).
   Modelo: «Ansiedad: libro de actividades». Cada cartilla (carpeta/index.html) define CFG y sus páginas con P(),
   y al final llama iniciar(). Compartida con la plataforma: token en el enlace, gana la versión más reciente,
   código SANA1 de cartilla (k:'c') para 📥 Pegar respuestas.

   Páginas:  P(n, título, pista, campos, opciones)
     · Sin opciones.html → se muestra la imagen pNN.jpg del PDF con los campos encima (coordenadas en puntos del PDF).
     · Con opciones.html → sección rediseñada; los campos son elementos con class="f" y el mismo id.
   Campos: ta (recuadro) · inp (línea) · chk (casilla) · hl (frase para resaltar) · oval (óvalo/círculo)
           · nivel (una sola opción del grupo g) · pinta (círculo para colorear) */
/* Línea de crisis según la zona horaria del celular (sin pedir ubicación). Si no se reconoce el país, texto general. */
function lineaCrisis(){ let z=''; try{ z=Intl.DateTimeFormat().resolvedOptions().timeZone||''; }catch(e){}
  const L=[[/^America\/Bogota$/,'la Línea 123 (Colombia)'],[/^America\/(New_York|Chicago|Denver|Phoenix|Los_Angeles|Anchorage|Detroit|Indiana|Kentucky|Boise|Adak)|^Pacific\/Honolulu$/,'la línea 988 (Estados Unidos: llama o escribe; marca 2 para español)'],
    [/^America\/(Toronto|Vancouver|Edmonton|Winnipeg|Halifax|Regina|St_Johns)$/,'la línea 988 (Canadá)'],[/^America\/(Mexico_City|Monterrey|Merida|Cancun|Chihuahua|Hermosillo|Mazatlan|Tijuana|Matamoros|Bahia_Banderas)$/,'la línea 911 (México)'],
    [/^(Europe\/Madrid|Atlantic\/Canary|Africa\/Ceuta)$/,'la línea 024 (España)'],[/^America\/Guayaquil$/,'la línea 911 (Ecuador)'],[/^America\/Lima$/,'la Línea 113, opción 5 (Perú)'],[/^America\/Santiago$/,'la línea *4141 (Chile)']];
  const m=L.find(([r])=>r.test(z)); return m?m[1]:'la línea de emergencias de tu país'; }
const PAG=[], FICHAS=[];
const CFG={W:648,H:792};
/* Medidas (puntos) de las páginas de cada PDF de origen: img/<pdf>/pNN.jpg */
const DIM={'lucha-huida':[648,792],'emociones-dificiles':[612,792],'ventana-tolerancia':[648,792],'arbol-vida':[648,792],'cartas-afirmaciones':[596,842],'cronograma-sn':[900,507],'plan-accion-sn':[900,507],'planificador-salud':[612,792],'espiral-depresion':[648,792],'plantilla-tac':[648,792],'ansiedad':[648,792],'circulo-control':[612,792],'distorsiones-mindapp':[648,792],'distorsiones':[648,792],'critico-interno':[648,792],'regulacion-sn':[596,842],'tept':[900,507],'traumas':[648,792],'roda-autocuidado':[648,792],'autoestima':[648,792],'entendiendo-ansiedad':[900,507],'plano-seguridad':[648,792],'cuaderno-terapia':[596,842],'hoja-limites':[596,842],'nuevos-limites':[648,792]};
/* Cada ficha (fichas/<clave>.js) empieza con FICHA({clave,titulo,…}); sus páginas quedan unidas a ella */
const FICHA=o=>{ FICHAS.push(o); };
const _ult=()=>FICHAS[FICHAS.length-1]||{};
/* Página del PDF: P('lucha-huida', 12, 'Título', 'pista', campos, opciones) · Sección rediseñada: H('Título','pista',html,campos,opciones) */
const P=(src,pag,t,hint,f,o)=>{ const d=DIM[src]||[CFG.W,CFG.H];
  PAG.push(Object.assign({n:PAG.length+1,t,hint,f:f||[],ficha:_ult().clave,img:`img/${src}/p${String(pag).padStart(2,'0')}.jpg`,W:d[0],H:d[1]},o||{})); };
const H=(t,hint,html,f,o)=>PAG.push(Object.assign({n:PAG.length+1,t,hint,f:f||[],ficha:_ult().clave,html},o||{}));
const _c=k=>(id,lab,x,y,w,h,o)=>Object.assign({k,id,lab,x,y,w,h},o||{});
const ta=_c('ta'), chk=_c('chk'), hl=_c('hl'), oval=_c('oval'), pinta=_c('pinta');
const inp=(id,lab,x,y,w,h,o)=>Object.assign({k:'in',id,lab,x,y,w,h:h||16},o||{});
const nivel=(id,lab,g,x,y,w,h,o)=>Object.assign({k:'nivel',id,lab,g,x,y,w,h},o||{});
/* Varias líneas iguales (una por renglón): lineas('p3a','Mis síntomas',x,[y1,y2…],w) */
const lineas=(pre,lab,x,ys,w,o)=>ys.map((y,i)=>inp(pre+i,lab,x,y-15,w,15,Object.assign({g:lab},o||{})));
/* Renglones: agrupa las líneas de escritura (y de cada línea) en bloques y pone un recuadro con renglones por bloque.
   labels[i] = la pregunta del bloque i. */
const renglones=(pre,labels,ys,x,w,o)=>{ const g=[]; ys.slice().sort((a,b)=>a-b).forEach(y=>{ const b=g[g.length-1]; if(b&&y-b[b.length-1]<45) b.push(y); else g.push([y]); });
  return g.map((b,i)=>{ const sp=b.length>1?(b[b.length-1]-b[0])/(b.length-1):22, top=b[0]-sp*.82;
    return ta(pre+i,labels[i]||labels[labels.length-1],x,top,w,b[b.length-1]-top,Object.assign({cls:'lines',lh:sp,fs:Math.min(12,sp*.55),ph:' '},o||{})); }); };
/* Recorte de una zona de una imagen de página (x, y, ancho, alto y tamaño de la página, en píxeles de la imagen) */
const recorte=(src,x,y,w,h,PW,PH)=>`<span class="rec" style="aspect-ratio:${w}/${h}"><img src="${src}" alt="" loading="lazy" style="width:${PW/w*100}%;left:${-x/w*100}%;top:${-y/h*100}%"></span>`;
/* Carta que se voltea al tocarla (frente y reverso en HTML); extra = botones debajo */
const cartaFlip=(frente,atras,extra,attrs)=>`<div class="carta" ${attrs||""}><button type="button" class="carta-in" aria-label="Voltear la carta"><span class="cara frente">${frente}</span><span class="cara atras">${atras}</span></button>${extra||''}</div>`;
const $=s=>document.querySelector(s);
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const MI_WA='573150898447';

function iniciar(){
  /* Una o varias fichas en el mismo enlace: la clave compartida con la plataforma es f:<clave1>+<clave2>… */
  if(!CFG.clave&&FICHAS.length){ const f1=FICHAS[0];
    CFG.clave='f:'+FICHAS.map(f=>f.clave).join('+');
    CFG.titulo=FICHAS.length===1?f1.titulo:'Mis ejercicios: '+FICHAS.map(f=>f.corto||f.titulo).join(' · ');
    CFG.corto=FICHAS.length===1?(f1.corto||f1.titulo):'Mis ejercicios';
    CFG.sub=FICHAS.length===1?'Ejercicio':FICHAS.length+' ejercicios';
    CFG.imprimir=FICHAS.some(f=>f.imprimir);
    if(FICHAS.some(f=>f.ancho)) CFG.ancho=true;
    const al=FICHAS.map(f=>f.alCambiar).filter(Boolean); if(al.length) CFG.alCambiar=S=>al.forEach(fn=>fn(S));
    const re=FICHAS.map(f=>f.resumenExtra).filter(Boolean); if(re.length) CFG.resumenExtra=(p,D,T)=>re.forEach(fn=>fn(p,D,T));
    if(FICHAS.length===1&&f1.intro) CFG.intro=f1.intro; }
  const K=CFG.clave;
  const KS=K.replace(/[^a-z0-9+-]/gi,'_');
  document.title=CFG.titulo;
  document.body.insertAdjacentHTML('afterbegin',`
<header class="top"><div><b>${esc(CFG.corto||CFG.titulo)}</b><small id="prog">${esc(CFG.sub||'Cuaderno de actividades')}</small></div>
  <a class="btn pri" href="#enviar">Enviar respuestas</a></header>
<main id="main"${CFG.ancho?' class="ancho"':''}>
  <section class="intro"><div class="eyebrow">${esc(CFG.eyebrow||'Para hacer con calma')}</div><h1>${esc(CFG.titulo)}</h1>
    ${CFG.intro||`<p>Lee cada página y completa los ejercicios aquí mismo: escribe en los recuadros, marca las casillas y toca las opciones. Lo que escribes se guarda solo en este dispositivo.</p><p>Al final puedes enviarle tus respuestas a tu psicóloga.</p>`}
    <div class="chips" id="chips"></div></section>
  <section class="cartilla" id="cartilla"><h2>Mi cartilla</h2>
    <div class="note" id="modoSesion" hidden style="background:#e7f1f0;border-color:#b9d6d2;color:#1f3d45">🩺 <b>Modo sesión:</b> se abrió con lo último guardado en el caso del paciente. Al terminar, toca <b>«📋 Copiar para enviar a mi psicóloga»</b> (abajo) y pégalo en la plataforma con <b>📥 Pegar respuestas</b>.</div>
    <p id="ultima"></p>
    <div class="fila"><button class="btn teal" id="bGuardar" type="button">💾 Guardar esta sesión</button><button class="btn sec" id="bAvances" type="button">📈 Ver mis avances</button>${CFG.imprimir?'<button class="btn sec" id="bImprimir" type="button">🖨️ Imprimir / guardar PDF</button>':''}</div></section>
  <div id="paginas" style="display:grid;gap:26px"></div>
  <section class="enviar" id="enviar"><h2>Envía tus respuestas</h2>
    <p>Cuando termines (o cuando quieras), envíale tus respuestas a tu psicóloga. Van en un código que solo se abre en su plataforma.</p>
    <div class="fila"><a class="btn" id="wa" href="#" target="_blank" rel="noopener" style="background:#25a35a;color:#fff">📲 Enviar a mi psicóloga por WhatsApp</a>
      <button class="btn sec" id="copiar" type="button">📋 Copiar para enviar a mi psicóloga</button></div>
    <div class="ok" id="okc" aria-live="polite"></div><div class="code" id="code" hidden></div>
    <div class="note">Si en algún momento sientes que podrías hacerte daño, no esperes: llama a ${lineaCrisis()} o acude a urgencias.</div>
    <div class="fila"><button class="btn sec" id="borrar" type="button">Borrar esta cartilla</button><span class="ok" id="okb"></span></div></section>
  <p class="foot">Tus respuestas no se guardan en internet: solo las recibe tu psicóloga cuando se las envías.</p>
</main>`);

  /* ---------- Estado en este dispositivo: una cartilla por token (útil en el computador de la psicóloga) ---------- */
  const KEYC='sana_'+KS+'_cartillas';
  let C=null; try{ C=JSON.parse(localStorage.getItem(KEYC)||'null'); }catch(_){}
  if(!C||!Array.isArray(C.lista)||!C.lista.length) C={actual:'yo',lista:[{id:'yo',n:'Mi cartilla'}]};
  if(!C.lista.some(x=>x.id===C.actual)) C.actual=C.lista[0].id;
  const guardarC=()=>{ try{ localStorage.setItem(KEYC,JSON.stringify(C)); }catch(_){} };
  const actual=()=>C.lista.find(x=>x.id===C.actual);
  /* Enlace de la plataforma: #<token>.<WhatsApp de la psicóloga>[.<últimas respuestas del caso>][.p] (o solo #<WhatsApp>) */
  let ESTADO=null, EN_SESION=false;
  { const h=decodeURIComponent(location.hash.slice(1)), m=h.match(/^([A-Za-z0-9]{4,16})\.(\d{8,15})?(?:\.([A-Za-z0-9_-]*))?(\.p)?$/), w=(h.match(/^(\d{8,15})$/)||[])[1];
    EN_SESION=!!(m&&m[4]);
    if(m&&!w){ const tok=m[1]; let c=C.lista.find(x=>x.t===tok);
      if(!c){ c=actual(); if(c.t&&c.t!==tok){ c={id:'c'+Date.now().toString(36),n:'Cartilla '+(C.lista.length+1)}; C.lista.push(c); } c.t=tok; }
      if(m[2]) c.w=m[2]; C.actual=c.id; guardarC(); ESTADO=m[3]||null; }
    else if(w){ actual().w=w; guardarC(); } }
  const suf=C.actual==='yo'?'':':'+C.actual;
  const KEY='sana_'+KS+'_libro'+suf, KEYH='sana_'+KS+'_sesiones'+suf;
  let S={}; try{ S=JSON.parse(localStorage.getItem(KEY)||'{}')||{}; }catch(_){ S={}; }
  let ACTUALIZADA=false;
  if(ESTADO){ try{ const o=deB64(ESTADO);
    if(o&&typeof o==='object'&&(EN_SESION||!Object.keys(S).length||(+o._t||0)>(+S._t||0))){ ACTUALIZADA=Object.keys(S).length>0&&!EN_SESION; S=o; localStorage.setItem(KEY,JSON.stringify(S)); } }catch(_){} }
  let H=[]; try{ H=JSON.parse(localStorage.getItem(KEYH)||'[]')||[]; }catch(_){ H=[]; }
  let tG; const guardar=()=>{ S._t=Date.now(); clearTimeout(tG); tG=setTimeout(()=>{ try{ localStorage.setItem(KEY,JSON.stringify(S)); }catch(_){} actualizar(); },250); if(CFG.alCambiar) CFG.alCambiar(S); };

  /* ---------- Pintar páginas ---------- */
  const CAMPOS=PAG.flatMap(p=>p.f.map(f=>Object.assign({pag:p},f)));
  const PORID={}; CAMPOS.forEach(f=>PORID[f.id]=f);
  /* Tipo especial x: la ficha define html(S), clic(e,S,el), activo(D), resumen(D,L) y cambios(A,B,L) */
  const activo=(f,D)=>f.k==='x'?!!(f.activo&&f.activo(D)):f.k==='nivel'?D['@'+f.g]===f.id:(f.k==='ta'||f.k==='in')?!!String(D[f.id]||'').trim():!!D[f.id];
  const ejercicios=PAG.filter(p=>p.f.length);
  const pos=f=>`--x:${f.x};--y:${f.y};--w:${f.w};--h:${f.h}${f.fs?';--fs:'+f.fs:''}${f.lh?';--lh:calc('+f.lh+'*var(--u))':''}`;
  function campo(f){
    const v=S[f.id];
    if(f.k==='x') return `<div class="fx" data-fx="${f.id}">${f.html(S)}</div>`;
    if(f.k==='ta') return `<textarea class="f ${f.cls||''}" id="${f.id}" style="${pos(f)}" aria-label="${esc(f.lab)}" placeholder="${esc(f.ph!=null?f.ph:'Escribe aquí…')}">${esc(v||'')}</textarea>`;
    if(f.k==='in') return `<input class="f${f.cls?' '+f.cls:''}" id="${f.id}" style="${pos(f)}" aria-label="${esc(f.lab)}" placeholder="${esc(f.ph||'')}" value="${esc(v||'')}">`;
    return `<button type="button" class="f ${f.k}" id="${f.id}" style="${pos(f)}" aria-pressed="${activo(f,S)}" aria-label="${esc(f.lab)}">${f.k==='chk'?`<span class="mk" style="left:calc(${f.mx||2}*var(--u))">✓</span>`:''}</button>`;
  }
  const cont=$('#paginas');
  cont.innerHTML=PAG.map(p=>{ const W=p.W||CFG.W, Hh=p.H||CFG.H;
    const hint=p.hint?`<div class="hint">${esc(p.hint)}</div>`:'', nota=p.nota?`<div class="nota">ℹ️ ${esc(p.nota)}</div>`:'';
    if(p.html) return `<section class="sec ${p.cls||""}" id="p${p.n}">${hint}${p.html}${nota}</section>`;
    return `<figure id="p${p.n}"${p.grupo?` data-grupo="${p.grupo}"`:""}>${hint}<div class="pg" style="--W:${W};--H:${Hh}"><img src="${p.img||'p'+String(p.n).padStart(2,'0')+'.jpg'}" alt="Página ${p.n}: ${esc(p.t)}" loading="${p.n<3?'eager':'lazy'}">${p.f.map(campo).join('')}</div>${nota}</figure>`; }).join('');
  /* Secciones rediseñadas: poner lo guardado en sus campos */
  PAG.filter(p=>p.html).forEach(p=>p.f.forEach(f=>{ const el=document.getElementById(f.id); if(!el) return;
    if(f.k==='ta'||f.k==='in') el.value=S[f.id]||''; else el.setAttribute('aria-pressed',activo(f,S)); }));
  $('#chips').innerHTML=ejercicios.map(p=>`<a href="#p${p.n}" data-p="${p.n}">${esc(p.chip||p.t)}</a>`).join('');

  cont.addEventListener('input',e=>{ const el=e.target; if(!el.classList.contains('f')||!PORID[el.id]) return; S[el.id]=el.value; guardar(); });
  cont.addEventListener('click',e=>{ const ci=e.target.closest('.carta-in'); if(ci){ ci.parentElement.classList.toggle('volteada'); return; }
    const x=e.target.closest('[data-fx]'); if(x&&PORID[x.dataset.fx]&&PORID[x.dataset.fx].clic){ if(PORID[x.dataset.fx].clic(e,S,x)!==false) guardar(); return; }
    const b=e.target.closest('button.f'); if(!b||!PORID[b.id]) return; const f=PORID[b.id], on=b.getAttribute('aria-pressed')!=='true';
    if(f.k==='nivel'){ CAMPOS.filter(x=>x.k==='nivel'&&x.g===f.g).forEach(x=>{ const el=document.getElementById(x.id); if(el) el.setAttribute('aria-pressed',x===f&&on); }); S['@'+f.g]=on?f.id:''; }
    else { b.setAttribute('aria-pressed',on); S[f.id]=on; }
    guardar(); });
  /* En el teléfono, los recuadros pequeños sobre el PDF se abren en un editor grande */
  const movil=()=>matchMedia('(max-width: 700px)').matches;
  cont.addEventListener('focusin',e=>{ const el=e.target; if(!movil()||!el.matches('.pg textarea.f,.pg input.f')) return; el.blur(); abrirEditor(el); });
  function abrirEditor(el){
    const h=document.createElement('div'); h.className='hoja';
    h.innerHTML=`<div role="dialog" aria-modal="true" aria-labelledby="hl"><label id="hl" for="ht">${esc(el.getAttribute('aria-label'))}</label><textarea id="ht" placeholder="Escribe aquí…">${esc(el.value)}</textarea><div class="fila" style="justify-content:flex-end"><button class="btn pri" type="button">Listo</button></div></div>`;
    document.body.appendChild(h); const t=h.querySelector('textarea'); t.focus();
    t.addEventListener('input',()=>{ el.value=t.value; S[el.id]=t.value; guardar(); });
    const cerrar=()=>h.remove(); h.querySelector('button').onclick=cerrar; h.addEventListener('click',e=>{ if(e.target===h) cerrar(); });
  }

  /* ---------- Resumen para enviar (lo que se lee en el historial del paciente) ---------- */
  function resumen(D){
    D=D||S; const out=[];
    PAG.forEach(p=>{ const L=[], grupos={}, add=(g,v)=>(grupos[g]=grupos[g]||[]).push(v);
      p.f.forEach(f=>{
        if(f.k==='x'){ if(f.resumen) f.resumen(D,L); }
        else if(f.k==='ta'||f.k==='in'){ const v=String(D[f.id]||'').trim(); if(!v||f.sil) return; if(f.g) add(f.g,v); else L.push(`${f.lab}: ${v}`); }
        else if(f.k==='nivel'){ if(D['@'+f.g]===f.id) L.push(`${f.g}: ${f.lab}`); }
        else if(D[f.id]&&!f.sil) add(f.g||'Marcado',f.lab);
      });
      const T=Object.keys(grupos).map(g=>`${g}: ${grupos[g].join(' · ')}`).concat(L);
      if(CFG.resumenExtra) CFG.resumenExtra(p,D,T);
      if(T.length) out.push([p.t,T]);
    });
    return out;
  }
  const hechasEn=D=>ejercicios.filter(p=>p.f.some(f=>activo(f,D))).length;
  const fechaTxt=iso=>{ try{ return new Date(iso).toLocaleDateString('es-CO',{day:'numeric',month:'short',year:'numeric'}); }catch(_){ return String(iso).slice(0,10); } };
  function mensajeSana(){
    const res=resumen().map(([label,L])=>({label,val:L.join('\n')}));
    if(!res.length) return '';
    if(H.length) res.push({label:'Sesiones guardadas',val:H.map(x=>`${x.n} · ${fechaTxt(x.f)} · ${hechasEn(x.d)} de ${ejercicios.length} ejercicios`).join('\n')});
    const hoy=new Date(), f=`${hoy.getFullYear()}-${String(hoy.getMonth()+1).padStart(2,'0')}-${String(hoy.getDate()).padStart(2,'0')}`;
    const o={v:1,k:'c',c:K,f,res,s:S}; const t=actual().t; if(t) o.t=t;
    return `🌿 Mis respuestas — ${CFG.titulo}\nSANA1:`+aB64(o);
  }
  function actualizar(){
    const hechas=new Set(ejercicios.filter(p=>p.f.some(f=>activo(f,S))).map(p=>p.n));
    document.querySelectorAll('#chips a').forEach(a=>a.classList.toggle('ok',hechas.has(+a.dataset.p)));
    $('#prog').textContent=`${hechas.size} de ${ejercicios.length} ejercicios hechos`;
    const msg=mensajeSana(); $('#code').textContent=msg;
    $('#wa').href=`https://api.whatsapp.com/send?phone=${actual().w||MI_WA}&text=${encodeURIComponent(msg)}`;
    return msg;
  }
  $('#wa').addEventListener('click',e=>{ const msg=actualizar(); if(!msg){ e.preventDefault(); $('#okc').textContent='Todavía no has escrito nada.'; } });
  $('#copiar').onclick=()=>{ const msg=actualizar(); if(!msg){ $('#okc').textContent='Todavía no has escrito nada.'; return; }
    const sel=()=>{ $('#code').hidden=false; const r=document.createRange(); r.selectNodeContents($('#code')); const s=getSelection(); s.removeAllRanges(); s.addRange(r); $('#okc').textContent='Selecciona el código de abajo, cópialo y envíaselo por WhatsApp.'; };
    try{ navigator.clipboard.writeText(msg).then(()=>{ $('#okc').textContent='✓ Copiado. Ahora pégalo en el chat de WhatsApp con tu psicóloga.'; },sel); }catch(_){ sel(); } };
  let confirmar=false;
  $('#borrar').onclick=()=>{ if(!confirmar){ confirmar=true; $('#borrar').textContent='Sí, borrar todo'; $('#okb').textContent='¿Seguro? Esto borra tus respuestas y tus sesiones guardadas en este dispositivo.'; return; }
    try{ localStorage.removeItem(KEY); localStorage.removeItem(KEYH); }catch(_){}
    if(C.lista.length>1){ C.lista=C.lista.filter(x=>x.id!==C.actual); C.actual=C.lista[0].id; } guardarC(); location.reload(); };
  if(CFG.imprimir) $('#bImprimir').onclick=()=>window.print();

  /* ---------- Sesiones guardadas y avances ---------- */
  const guardarH=()=>{ try{ localStorage.setItem(KEYH,JSON.stringify(H)); }catch(_){} pintarUltima(); actualizar(); };
  function pintarUltima(){ const u=H[H.length-1];
    $('#ultima').textContent=u?`Última sesión guardada: ${u.n} · ${fechaTxt(u.f)}. Llevas ${H.length} sesión${H.length>1?'es':''} guardada${H.length>1?'s':''}.`:'Puedes guardar cada sesión con su fecha y ver tus avances. Lo que escribes queda guardado en este dispositivo.'; }
  function hoja(html){ const h=document.createElement('div'); h.className='hoja'; h.innerHTML=`<div role="dialog" aria-modal="true">${html}<div class="fila" style="justify-content:flex-end"><button class="btn sec" type="button" data-cerrar>Cerrar</button></div></div>`;
    document.body.appendChild(h); h.addEventListener('click',e=>{ if(e.target===h||e.target.closest('[data-cerrar]')) h.remove(); }); return h; }
  $('#bGuardar').onclick=()=>{
    const h=hoja(`<h3>Guardar esta sesión</h3><p>Se guarda una copia con la fecha de hoy. Después puedes seguir escribiendo en la misma cartilla y comparar.</p>
      <label for="sn">Nombre de la sesión</label><input type="text" id="sn" value="Sesión ${H.length+1}">
      <div class="fila"><button class="btn teal" type="button" id="sok">💾 Guardar</button></div><div class="ok" id="smsg" aria-live="polite"></div>`);
    h.querySelector('#sok').onclick=()=>{ const n=h.querySelector('#sn').value.trim()||`Sesión ${H.length+1}`;
      H.push({n,f:new Date().toISOString(),d:JSON.parse(JSON.stringify(S))}); guardarH();
      h.querySelector('#smsg').textContent=`✓ Guardada «${n}» (${fechaTxt(H[H.length-1].f)}). Puedes seguir trabajando.`; h.querySelector('#sok').disabled=true; };
  };
  function cambios(A,B){
    const out=[];
    PAG.forEach(p=>{ const L=[], grupos={};
      p.f.forEach(f=>{
        if(f.k==='x'){ if(f.cambios) f.cambios(A,B,L); return; }
        if(f.k==='ta'||f.k==='in'){ const a=String(A[f.id]||'').trim(), b=String(B[f.id]||'').trim(); if(a===b||f.sil) return; const lab=f.g||f.lab;
          L.push(!a?`<li><b>${esc(lab)}:</b> <span class="mas">nuevo</span> ${esc(b)}</li>`:!b?`<li><b>${esc(lab)}:</b> <span class="menos">borró</span> <span class="antes">${esc(a)}</span></li>`:`<li><b>${esc(lab)}:</b> <span class="antes">${esc(a)}</span> → ${esc(b)}</li>`); }
        else if(f.k==='nivel'){ const a=A['@'+f.g]===f.id, b=B['@'+f.g]===f.id; if(a!==b&&b) L.push(`<li><b>${esc(f.g)}:</b> ${esc(f.lab)}</li>`); }
        else if(!f.sil){ const a=!!A[f.id], b=!!B[f.id]; if(a===b) return; const g=grupos[f.g||'Marcado']=grupos[f.g||'Marcado']||{mas:[],menos:[]}; (b?g.mas:g.menos).push(f.lab); }
      });
      Object.keys(grupos).forEach(g=>{ const x=grupos[g];
        L.unshift(`<li><b>${esc(g)}:</b> ${x.mas.length?`<span class="mas">marcó</span> ${esc(x.mas.join(', '))}`:''}${x.mas.length&&x.menos.length?' · ':''}${x.menos.length?`<span class="menos">desmarcó</span> ${esc(x.menos.join(', '))}`:''}</li>`); });
      if(L.length) out.push(`<section><h4>${esc(p.t)}</h4><ul>${L.join('')}</ul></section>`);
    });
    return out;
  }
  $('#bAvances').onclick=()=>{
    if(!H.length){ hoja(`<h3>Mis avances</h3><p>Todavía no hay sesiones guardadas. Al terminar cada sesión, toca «Guardar esta sesión»; así podrás comparar cómo va cambiando tu cartilla.</p>`); return; }
    const opt=sel=>H.map((x,i)=>`<option value="${i}"${i===sel?' selected':''}>${esc(x.n)} · ${fechaTxt(x.f)}</option>`).join('');
    const h=hoja(`<h3>Mis avances</h3>
      <div class="linea">${H.map(x=>`<div class="ses"><b>${esc(x.n)}</b><span>${fechaTxt(x.f)} · ${hechasEn(x.d)} de ${ejercicios.length} ejercicios</span></div>`).join('')}
        <div class="ses"><b>Ahora</b><span>${hechasEn(S)} de ${ejercicios.length} ejercicios</span></div></div>
      <p>Compara dos momentos para ver qué cambió:</p>
      <div class="cols"><div><label for="ca">Desde</label><select id="ca">${opt(H.length-1)}</select></div>
        <div><label for="cb">Hasta</label><select id="cb">${opt(-1)}<option value="ahora" selected>Ahora (lo actual)</option></select></div></div>
      <div class="cambios" id="cc"></div>`);
    const pintar=()=>{ const a=H[+h.querySelector('#ca').value].d, vb=h.querySelector('#cb').value, b=vb==='ahora'?S:H[+vb].d;
      const c=cambios(a,b); h.querySelector('#cc').innerHTML=c.length?c.join(''):'<p>No hay cambios entre estos dos momentos.</p>'; };
    h.querySelector('#ca').onchange=pintar; h.querySelector('#cb').onchange=pintar; pintar();
  };
  pintarUltima(); actualizar();
  if(CFG.alCambiar) CFG.alCambiar(S);
  if(EN_SESION){ $('#modoSesion').hidden=false; $('#ultima').hidden=true; }
  if(ACTUALIZADA){ const n=$('#modoSesion'); n.hidden=false; n.innerHTML='✨ <b>Tu cartilla se actualizó</b> con lo más reciente que trabajaste con tu psicóloga. Sigue desde aquí y, cuando termines, envíasela.'; }
  window.CARTILLA={S:()=>S,guardar,resumen};
}
function aB64(o){ const by=new TextEncoder().encode(JSON.stringify(o)); let bin=''; for(let i=0;i<by.length;i+=0x8000) bin+=String.fromCharCode.apply(null,by.subarray(i,i+0x8000)); return btoa(bin).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,''); }
function deB64(t){ const b=t.replace(/-/g,'+').replace(/_/g,'/'), bin=atob(b+'==='.slice((b.length+3)%4)); return JSON.parse(new TextDecoder().decode(Uint8Array.from(bin,c=>c.charCodeAt(0)))); }
