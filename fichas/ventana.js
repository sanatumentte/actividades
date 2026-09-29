/* Ventana de tolerancia (rediseño): se conservan el volcán, la ventana, el copo de nieve y los íconos del PDF original. */
FICHA({clave:'ventana',titulo:'Mi ventana de tolerancia',corto:'Ventana de tolerancia',carp:['emociones','trauma'],
  intro:`<p>La ventana de tolerancia es la «zona óptima» de activación: cuando estás dentro, puedes pensar con claridad, sentir sin desbordarte y responder en lugar de reaccionar. Fuera de ella, el cuerpo se acelera (volcán) o se apaga (copo de nieve).</p><p>Aquí vas a descubrir cómo es tu ventana y qué te ayuda a volver a ella.</p>`});
{
const IMG='img/ventana/';
const ZONAS=[
  ['hiper','🌋','Hiperactivación','#f7c9c4','#b3412f',IMG+'volcan.jpg',['Ansiedad extrema, con posibles ataques de pánico.','Sentirse abrumado y fuera de control.','El impulso de luchar o huir.']],
  ['sube','😣','Desregulación: subiendo','#d6ecea','#1f6f6d',IMG+'cara.jpg',['Aumentan la frustración y la agitación.','El malestar empieza a aumentar, pero aún está bajo control.']],
  ['ventana','🪟','Mi ventana de tolerancia','#f8dca8','#8a5a12',IMG+'ventana-abierta.jpg',['Me siento presente, tranquilo(a) y seguro(a).','Puedo pensar, sentir y decidir con claridad.']],
  ['baja','🔌','Desregulación: apagándome','#d6ecea','#1f6f6d',IMG+'apagado.jpg',['Me acerco a la fase de cierre.','El malestar aumenta, pero aún está bajo control.']],
  ['hipo','❄️','Hipoactivación','#dfe6ee','#34495e',IMG+'nieve.jpg',['Me siento desconectado(a) y distante.','Entumecimiento físico, como si me paralizara.','Letargo, sin energía.']]];
const HIPER=['Sudor','Ira','Frustración','Maldecir','Escapar','Agitación','Lanzar objetos','Romper objetos','Luchar','Tensión','Problemas de memoria','Olas de calor','Arrebatos emocionales','No poder concentrarme','No poder dormir','Sensación de perder el control'];
const HIPO=['Incapacidad para concentrarme','Cancelar planes','Abuso de sustancias','Aislarme u ocultarme','Atracones','Dificultad para seguir conversaciones','Sentirme paralizado(a)','No responder mensajes ni llamadas','Estar distante o desconectado(a)'];
const CIERRA=['Dolor físico','Dolor emocional','Estrés','Agobio','Agotamiento','Cansancio'];
const HAB=['Comer 3 comidas saludables','Dormir 7 horas o más','Beber agua fresca','Tomar aire fresco','Practicar la atención plena','Escribir 3 cosas por las que estoy agradecido(a)','Cepillarme los dientes','Tomar un baño caliente','Hacer mi cama','Leer un libro','Escuchar música','Pasar tiempo con amigos','Organizar un espacio pequeño','Desconectarme de redes sociales','Pedir un abrazo','Pasar tiempo con la familia','Practicar un pasatiempo','Escribir en mi diario','Decir 5 cosas que amo de mí','Hacer algo de ejercicio','Lavarme el pelo','Tomar una taza de té o café','No hacer nada y disfrutar la paz','Probar algo nuevo','Dibujar o pintar algo','Preparar mi comida favorita'];
const slug=s=>s.toLowerCase().normalize('NFD').replace(/[^a-z0-9]+/g,'').slice(0,14);
const chip=(id,lab)=>`<button type="button" class="f vt-chip" id="${id}" aria-pressed="false">${lab}</button>`;
const css=`<style>
  .vt-zonas{display:grid;gap:10px}
  .sec button.f.vt-z{display:grid;grid-template-columns:86px 1fr;gap:14px;align-items:center;border-radius:18px;padding:10px 14px 10px 10px;background:var(--zb);border:2px solid transparent;cursor:pointer;text-align:left;font:inherit;color:inherit;width:100%}
  .vt-z img{width:86px;height:86px;object-fit:cover;border-radius:14px;background:#fff}
  .vt-z h3{margin:0;color:var(--zc);font-size:1.05rem}
  .vt-z ul{margin:4px 0 0;padding-left:18px;font-size:.9rem}
  .sec button.f.vt-z[aria-pressed="true"]{background:var(--zb);color:inherit;border-color:var(--zc);box-shadow:0 0 0 4px rgba(22,90,108,.12)}
  .sec button.f.vt-z[aria-pressed="true"] h3::after{content:"  ← hoy estoy aquí";font-family:Caveat,cursive;font-size:1.25rem;color:var(--zc)}
  .sec button.f.vt-z.vt-ven{border-style:dashed;border-color:#dabb81}
  .vt-flecha{font-size:.8rem;font-weight:800;color:#8a5a12;text-align:center;letter-spacing:.05em;text-transform:uppercase}
  .vt-est{display:grid;gap:14px}
  .vt-e{display:grid;grid-template-columns:120px 1fr 1fr;gap:12px;align-items:stretch}
  .vt-e img{width:120px;height:150px;object-fit:cover;border-radius:16px}
  @media (max-width:640px){.vt-e{grid-template-columns:90px 1fr}.vt-e img{width:90px;height:112px;grid-row:span 2}}
  .vt-e label{font-weight:800;color:#165a6c;font-size:.9rem;display:grid;gap:4px}
  .sec .vt-e textarea.f{min-height:96px}
  .vt-chips{display:flex;flex-wrap:wrap;gap:8px}
  .sec button.f.vt-chip{border-radius:999px;padding:7px 13px;font-size:.9rem}
  .vt-hiper .sec,.vt-caja{border-radius:18px;padding:14px;display:grid;gap:10px}
  .vt-caja.rojo{background:#fdecea}.vt-caja.azul{background:#eaf0f6}.vt-caja.oro{background:#fdf2dc}
  .vt-caja h3{display:flex;align-items:center;gap:10px}.vt-caja h3 img{width:48px;height:48px;border-radius:50%;object-fit:cover}
  .vt-dos{display:grid;grid-template-columns:1fr 1fr;gap:12px}@media (max-width:640px){.vt-dos{grid-template-columns:1fr}}
  .vt-lista{border-radius:16px;padding:12px 14px}.vt-lista b{display:block;margin-bottom:4px}.vt-lista li{margin:2px 0}
  .sec button.f.vt-hab{border-radius:14px;display:flex;gap:10px;align-items:center;font-weight:700}
  .sec button.f.vt-hab::before{content:"";width:18px;height:18px;border-radius:50%;background:var(--dot);flex:none;box-shadow:inset 0 0 0 2px rgba(0,0,0,.08)}
  .sec button.f.vt-hab[aria-pressed="true"]::before{content:"✓";color:#fff;display:grid;place-items:center;font-size:.8rem;background:#047578}
  .vt-habs{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:8px}
</style>`;
/* 1 · Las zonas: tocar donde estoy hoy */
H('Las zonas de mi ventana','👆 Lee cada zona y toca la que describe cómo estás hoy.',
  css+`<h2>¿Dónde estoy hoy?</h2><div class="vt-zonas">${ZONAS.map(([k,ic,n,bg,col,img,L],i)=>`${i===2?'':''}
    <button type="button" class="f vt-z${k==='ventana'?' vt-ven':''}" id="vt_z_${k}" aria-pressed="false" style="--zb:${bg};--zc:${col}"><img src="${img}" alt=""><span><h3>${n}</h3><ul>${L.map(x=>`<li>${x}</li>`).join('')}</ul></span></button>`).join('')}</div>`,
  ZONAS.map(([k,ic,n])=>nivel('vt_z_'+k,n,'Hoy estoy en')),{chip:'¿Dónde estoy hoy?'});
/* 2 · Cómo me siento y qué puedo hacer en cada estado */
H('¿Cómo me siento? ¿Qué puedo hacer?','✍️ Para cada estado, escribe cómo te sientes y qué puedes hacer.',
  `<h2>¿Cómo me siento? ¿Qué puedo hacer?</h2><div class="vt-est">${[['hiper','Cuando soy volcán',IMG+'volcan.jpg'],['ventana','Cuando estoy en mi ventana',IMG+'ventana.jpg'],['hipo','Cuando me congelo',IMG+'nieve.jpg']].map(([k,n,img])=>`
    <div class="vt-e"><img src="${img}" alt="${n}"><label>¿Cómo me siento? <span style="font-weight:600;color:#5d7a7f">${n}</span><textarea class="f" id="vt_s_${k}"></textarea></label><label>¿Qué puedo hacer?<textarea class="f" id="vt_h_${k}"></textarea></label></div>`).join('')}</div>`,
  [['hiper','Volcán'],['ventana','En mi ventana'],['hipo','Congelado(a)']].flatMap(([k,n])=>[ta('vt_s_'+k,`${n} · ¿Cómo me siento?`),ta('vt_h_'+k,`${n} · ¿Qué puedo hacer?`)]),{chip:'Siento y hago'});
/* 3 · Mis señales en cada etapa */
H('Mis señales','👆 Toca las señales que reconoces en ti y añade las tuyas.',
  `<h2>Mis señales en cada etapa</h2>
  <div class="vt-caja rojo"><h3><img src="${IMG}volcan.jpg" alt="">Señales de hiperactivación</h3><div class="vt-chips">${HIPER.map(s=>chip('vt_hi_'+slug(s),s)).join('')}</div>
    <textarea class="f" id="vt_hi_mias" placeholder="Otras señales mías…"></textarea></div>
  <div class="vt-caja oro"><h3><img src="${IMG}ventana-abierta.jpg" alt="" style="object-fit:contain;background:#fff">Mi ventana empieza a cerrarse cuando…</h3><div class="vt-chips">${CIERRA.map(s=>chip('vt_ci_'+slug(s),s)).join('')}</div>
    <textarea class="f" id="vt_ci_mias" placeholder="Escribe cuándo se cierra tu ventana…"></textarea></div>
  <div class="vt-caja azul"><h3><img src="${IMG}nieve.jpg" alt="">Señales de hipoactivación</h3><div class="vt-chips">${HIPO.map(s=>chip('vt_ho_'+slug(s),s)).join('')}</div>
    <textarea class="f" id="vt_ho_mias" placeholder="Otras señales mías…"></textarea></div>`,
  [...HIPER.map(s=>chk('vt_hi_'+slug(s),s,0,0,0,0,{g:'Señales de hiperactivación'})),ta('vt_hi_mias','Mis otras señales de hiperactivación'),
   ...CIERRA.map(s=>chk('vt_ci_'+slug(s),s,0,0,0,0,{g:'Mi ventana se cierra con'})),ta('vt_ci_mias','Mi ventana empieza a cerrarse cuando'),
   ...HIPO.map(s=>chk('vt_ho_'+slug(s),s,0,0,0,0,{g:'Señales de hipoactivación'})),ta('vt_ho_mias','Mis otras señales de hipoactivación')],{chip:'Mis señales'});
/* 4 · Lo que achica y lo que amplía la ventana (información) + mis habilidades */
H('Cuidar mi ventana','👆 Toca las habilidades que ya usas o quieres probar, y escribe las tuyas.',
  `<h2>Cuidar mi ventana</h2><div class="vt-dos">
    <div class="vt-lista" style="background:#fdecea"><b>⬇️ Pueden hacer tu ventana más pequeña</b><ul><li>Estrés</li><li>Trauma</li><li>Ansiedad</li><li>Rechazo</li><li>Abandono</li></ul></div>
    <div class="vt-lista" style="background:#e1f1e6"><b>⬆️ Pueden ampliar tu ventana</b><ul><li>Atención plena</li><li>Ejercicios de conexión con la tierra</li><li>Gratitud</li><li>Afirmaciones positivas</li><li>Respiración profunda</li></ul></div></div>
  <h3 style="margin-top:6px">Mis habilidades de afrontamiento</h3><div class="vt-habs">${HAB.map((s,i)=>`<button type="button" class="f vt-hab" id="vt_ha_${slug(s)}" aria-pressed="false" style="--dot:${['#d86b52','#e8ad57','#07989c','#a8c89e','#a3cdd1','#f6e1d3'][i%6]}">${s}</button>`).join('')}</div>
  <textarea class="f" id="vt_ha_mias" placeholder="Mis propias habilidades, una por línea…"></textarea>`,
  [...HAB.map(s=>chk('vt_ha_'+slug(s),s,0,0,0,0,{g:'Mis habilidades'})),ta('vt_ha_mias','Mis propias habilidades')],{chip:'Mis habilidades'});
}
