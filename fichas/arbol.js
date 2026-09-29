/* Árbol de la vida (rediseño): cada respuesta aparece en el árbol — personas = hojas, regalos = frutos,
   habilidades = tronco, raíces, suelo, sueños = ramas, desafíos = nubes. Se puede imprimir con sus respuestas. */
FICHA({clave:'arbol',titulo:'Mi árbol de la vida',corto:'Árbol de la vida',carp:['trauma','autoestima'],imprimir:true,
  intro:`<p>Tu vida contada como un árbol: de dónde vienes, lo que te sostiene, las personas que te rodean, lo que has recibido y lo que sueñas. Responde cada parte y mira cómo tu árbol se va llenando.</p><p>Al final puedes imprimirlo o guardarlo en PDF, y enviárselo a tu psicóloga.</p>`});
{
const PARTES=[
  ['raices','🌱','Raíces','De dónde vengo','¿Dónde naciste? ¿Cuáles son tus recuerdos favoritos? ¿Quiénes te ayudaron a forjar tu vida? ¿Crees que tu pasado ha influido en tu presente?','Ej.: Mi abuela · la finca · la música de casa'],
  ['suelo','🟫','Suelo','Mi vida presente','¿Qué es lo mejor de tu vida actual? ¿Cómo te gusta pasar tu tiempo libre? ¿Qué te gustaría poder hacer con más tiempo? ¿Qué es lo que más valoras?','Ej.: Mi trabajo · caminar los domingos'],
  ['tronco','🪵','Tronco','Mis habilidades','¿Cuáles son tus tres principales habilidades? ¿Cómo las has desarrollado para afrontar las dificultades? ¿Algo las ha afectado? ¿Te centras más en tus debilidades que en tus fortalezas?','Ej.: Escucho · soy constante · me río de mí'],
  ['hojas','🍃','Hojas','Personas importantes','¿Quiénes desempeñan un papel fundamental en tu vida? ¿En quiénes confías y a quiénes recurres en busca de apoyo? ¿Cómo han influido en tu vida? ¿Saben que son importantes para ti?','Escribe un nombre por línea'],
  ['frutos','🍊','Frutos','Mis regalos','¿Qué halagos has recibido? ¿Cuáles son algunas de tus fortalezas? ¿Las personas importantes te han ayudado a desarrollarlas? ¿Has recibido algún regalo que te haya sido útil? ¿En qué fortaleza estás trabajando?','Un regalo por línea'],
  ['ramas','✨','Ramas','Mis sueños','Si tuvieras tres deseos, ¿cuáles serían? ¿Los usarías para mejorar como persona? ¿Le concederías alguno a otra persona? ¿A quién y por qué?','Un sueño por línea'],
  ['tormentas','⛈️','Tormentas','Mis desafíos','Las dificultades pueden ser problemas de salud mental, conflictos con amigos o familia, o falta de recursos y apoyo. ¿Qué dificultades has enfrentado? ¿Qué obstáculos necesitas superar? ¿Qué podrías enfrentar en el futuro?','Un desafío por línea']];
const HIST=[['pasado','Mi pasado','¿Cuál es la historia de mi pasado? ¿Qué desafíos tuve que superar? ¿Qué fortalezas adquirí de mis experiencias pasadas?'],
  ['presente','Mi presente','¿Cómo describiría mi vida actual y qué tipo de persona soy? ¿Soy diferente de la persona que era antes? ¿Me enfrento a algún nuevo reto ahora mismo?'],
  ['futuro','Mi futuro','¿Cómo sería mi futuro ideal? ¿Sería diferente al presente? Si es así, ¿en qué se diferenciaría? ¿Quiénes formarán parte de mi futuro?']];
const items=(S,k)=>String(S['ar_'+k]||'').split(/\n|;|·/).map(s=>s.trim()).filter(Boolean);
const corta=(t,n)=>t.length>n?t.slice(0,n-1)+'…':t;
const e=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
/* Ilustración realista del árbol (de la lámina «El árbol de la vida» de Traumas, pág. 9) con las respuestas encima.
   viewBox 760×970; el árbol va en (73,100) y mide 614×858. */
const OX=73, OY=100;
const HOJ=[[307,48],[195,100],[420,100],[105,175],[307,150],[515,170],[215,225],[405,225],[65,275],[70,390],[440,300],[330,420]];
const MANZ=[[152,318],[275,367],[385,305],[476,367],[558,275],[180,445],[558,455]];
const pill=(x,y,t,bg,fg,fs,bd)=>{ const w=Math.max(44,t.length*(fs||11)*.58+20); return `<rect x="${x-w/2}" y="${y-11}" width="${w}" height="22" rx="11" fill="${bg}"${bd?` stroke="${bd}" stroke-width="1.5"`:''}/><text x="${x}" y="${y+4}" text-anchor="middle" font-size="${fs||11}" font-weight="800" fill="${fg}">${e(t)}</text>`; };
function arbolSVG(S){
  const H=items(S,'hojas'), F=items(S,'frutos'), T=items(S,'tronco'), R=items(S,'raices'), SU=items(S,'suelo'), RA=items(S,'ramas'), TO=items(S,'tormentas');
  const hojas=H.slice(0,HOJ.length).map((n,i)=>{ const [x,y]=HOJ[i]; return pill(OX+x,OY+y,'🍃 '+corta(n,16),'#2f7d4a','#fff',11,'#fff'); }).join('');
  const frutos=F.slice(0,MANZ.length).map((n,i)=>{ const [x,y]=MANZ[i]; return pill(OX+x,OY+y+34,corta(n,18),'#fff','#a3262a',10.5,'#d33a3f'); }).join('');
  const tronco=T.slice(0,4).map((t,i)=>pill(OX+312,OY+470+i*28,corta(t,16),'#5c3a1d','#fff',11,'#f3e6d6')).join('');
  const suelo=SU.slice(0,2).map((t,i)=>pill(i?590:170,OY+640,corta(t,26),'#fff','#3c6b48',11,'#8fbf7f')).join('');
  const raices=R.slice(0,4).map((t,i)=>pill(OX+[140,480,210,410][i],OY+[700,700,790,790][i],corta(t,24),'#fff8ef','#5a3b1c',11,'#8a5a30')).join('');
  const suenos=RA.slice(0,3).map((t,i)=>pill(640,40+i*30,'✨ '+corta(t,22),'#fff4d6','#6b4e12',11,'#dabb81')).join('');
  const torm=TO.slice(0,3).map((t,i)=>pill(95,165+i*28,'⛈️ '+corta(t,20),'#e9eef5','#34495e',11,'#8b9aa8')).join('');
  return `<svg viewBox="0 0 760 970" role="img" aria-label="Mi árbol de la vida" font-family="Nunito, Segoe UI, sans-serif" style="width:100%;height:auto;display:block">
    <rect width="760" height="970" fill="#daecec"/><rect y="${OY+605}" width="760" height="${970-OY-605}" fill="#cde4ac"/>
    <image href="img/arbol/arbol.jpg" x="${OX}" y="${OY}" width="614" height="858"/>
    <image href="img/arbol/nube.jpg" x="15" y="8" width="150" height="150"/>
    ${torm}${suenos}${hojas}${frutos}${tronco}${suelo}${raices}
    <text x="745" y="960" text-anchor="end" font-size="11" fill="#3c6b48">Mi árbol de la vida · Sana tu Mentte</text></svg>`;
}
const leyenda=S=>`<div class="ar-ley">${PARTES.map(([k,ic,n,sub])=>{ const L=items(S,k); return `<div><b>${ic} ${n} · ${sub}</b>${L.length?`<ul>${L.map(x=>`<li>${e(x)}</li>`).join('')}</ul>`:'<p class="ar-vacio">Aún sin respuesta</p>'}</div>`; }).join('')}</div>`;
const css=`<style>
  .ar-arbol{background:linear-gradient(160deg,#fff,#eef6f4);border:2px solid #81a9a7}
  .ar-grid{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:18px;align-items:start}
  @media (max-width:760px){.ar-grid{grid-template-columns:1fr}}
  .ar-ley{display:grid;gap:8px;font-size:.9rem}.ar-ley b{color:#165a6c}.ar-ley ul{margin:2px 0 0;padding-left:20px}.ar-vacio{color:#9aa;margin:0;font-size:.85rem}
  .ar-parte{display:grid;grid-template-columns:52px 1fr;gap:12px;align-items:start;border-top:1px dashed #e7decf;padding-top:14px}
  .ar-parte:first-of-type{border-top:none;padding-top:0}
  .ar-ic{width:52px;height:52px;border-radius:16px;display:grid;place-items:center;font-size:1.7rem;background:#eef6f4}
  .ar-parte h3{margin:0}.ar-parte .ar-sub{font-family:Caveat,cursive;font-size:1.3rem;color:#c9987c;line-height:1}
  .ar-parte p{color:#5d7a7f;font-size:.92rem;margin:4px 0 8px}
  @media print{.ar-grid{grid-template-columns:1.2fr 1fr}.ar-arbol{border:none}}
</style>`;
H('Mi árbol','🌳 Así va tu árbol: se llena solo con tus respuestas.',
  css+`<h2>Mi árbol de la vida</h2><div class="ar-grid"><div id="arSVG"></div><div id="arLey"></div></div>`,[],{cls:'ar-arbol',chip:'Mi árbol'});
H('Las partes de mi árbol','✍️ Responde cada parte. En las hojas, los frutos, las ramas y las tormentas, escribe una cosa por línea: cada una aparece en tu árbol.',
  `<h2>Las partes de mi árbol</h2>${PARTES.map(([k,ic,n,sub,q,ph])=>`<div class="ar-parte"><div class="ar-ic">${ic}</div><div><h3>${n}</h3><div class="ar-sub">${sub}</div><p>${q}</p>
    <textarea class="f" id="ar_${k}" rows="4" placeholder="${ph}"></textarea></div></div>`).join('')}`,
  PARTES.map(([k,ic,n,sub])=>ta('ar_'+k,`${n} · ${sub}`)),{cls:'noprint',chip:'Las partes'});
H('Mi historia de vida','✍️ Para cerrar, cuenta tu historia en tres momentos.',
  `<h2>Mi historia de vida</h2>${HIST.map(([k,n,q])=>`<div><label class="lab" for="ar_${k}">${n}</label><p style="color:#5d7a7f;font-size:.92rem;margin:0 0 6px">${q}</p><textarea class="f" id="ar_${k}" rows="4"></textarea></div>`).join('')}`,
  HIST.map(([k,n])=>ta('ar_'+k,n)),{chip:'Mi historia'});
_ult().alCambiar=S=>{ const a=document.getElementById('arSVG'), b=document.getElementById('arLey'); if(a) a.innerHTML=arbolSVG(S); if(b) b.innerHTML=leyenda(S); };
}
