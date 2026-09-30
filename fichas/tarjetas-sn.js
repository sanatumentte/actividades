/* Tarjetas de preguntas del sistema nervioso (págs. 41–43): se voltean y se responden. */
FICHA({clave:'tarjetas-sn',titulo:'Tarjetas de preguntas: conciencia, reflexión y acción',corto:'Tarjetas de preguntas',carp:['emociones']});
{
const PW=1200, PH=1695, CEL=[[130,310,470,425],[605,310,475,425],[130,742,470,423],[605,742,475,423],[130,1172,470,407],[605,1172,475,407]];
const M=[[41,'Conciencia','#e8a598',['¿Qué tan tranquilo(a) y centrado(a) me siento (1–10)?','¿Qué sensación física tengo ahora mismo?','¿Siento tensión o incomodidad? ¿Dónde?','¿Cuáles son mis pensamientos ahora? ¿Rápidos, lentos, positivos o negativos?','¿Cómo describiría mi estado emocional ahora?','Al respirar profundo, ¿qué cambia en mi cuerpo y mi mente?']],
  [42,'Reflexión','#7fb0c4',['¿Cuándo tuve una respuesta emocional intensa y qué la desencadenó?','¿Cómo reaccionó mi cuerpo ante una situación estresante reciente?','¿Un evento reciente en que me sentí conectado(a) o feliz?','¿Qué situaciones me provocan ansiedad o inquietud?','La semana pasada, ¿cuándo me sentí más relajado(a)?','¿Hubo momentos en que me sentí desconectado(a)? ¿Qué pudo causarlo?']],
  [43,'Acción','#9cc7a4',['¿Qué puedo hacer hoy para sentirme más conectado(a)?','¿Qué técnica de relajación puedo practicar para sentirme más tranquilo(a)?','¿Cómo puedo calmar suavemente mi sistema nervioso cuando me siento apagado(a)?','¿Qué medidas puedo tomar para sentirme más seguro(a) en mi entorno?','¿Qué actividades relajantes me ayudan a calmarme?','¿Qué autocuidado puedo sumar esta semana?']]];
const IMG=n=>`img/regulacion-sn/p${n}.jpg`, campos=[];
const html=M.map(([pg,cat,col,Q],m)=>`<h3 style="color:${col}">${cat}</h3><div class="cartas">${CEL.map(([x,y,w,h],i)=>{ const id=`ts_${m}_${i}`; campos.push(ta(id,`${cat} · ${Q[i]}`));
  return cartaFlip(`<span style="aspect-ratio:${w}/${h};display:grid;place-items:center;align-content:center;gap:6px;background:linear-gradient(150deg,${col},#1f3d45);color:#fff;padding:12px"><span style="font-size:2rem">❓</span><b style="font-family:'DM Serif Display',Georgia,serif;font-size:1.2rem;font-weight:400">${cat}</b><small>Toca para ver la pregunta</small></span>`,
    recorte(IMG(pg),x,y,w,h,PW,PH),`<details class="ts-r"><summary>✍️ Responder</summary><textarea class="f" id="${id}" rows="3"></textarea></details>`); }).join('')}</div>`).join('');
H('Mis tarjetas de preguntas','👆 Voltea una tarjeta, lee la pregunta con calma y responde las que quieras.',
  `<style>.ts-r{background:#fff;border:1px solid var(--beige);border-radius:14px;padding:6px 10px}.ts-r summary{cursor:pointer;font-weight:800;color:var(--petroleo);font-size:.88rem}.carta:has(.ts-r[open]){grid-column:1/-1;max-width:560px;justify-self:center;width:100%}</style><h2>Tarjetas de preguntas</h2>${html}`,
  campos,{chip:'Mis tarjetas'});
_ult().alCambiar=()=>document.querySelectorAll('.ts-r:not([data-ok])').forEach(d=>{ d.dataset.ok=1; if(d.querySelector('textarea').value.trim()) d.open=true; });
}
