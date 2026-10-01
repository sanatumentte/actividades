/* Mi diario de terapia — rediseño del Cuaderno de terapia (esencia: diario entre sesiones). Sin automutilación (p6) ni registro de comidas (p45). */
FICHA({clave:'diario-terapia',titulo:'Mi diario de terapia',corto:'Diario de terapia',carp:['general']});
{ const E=['😄','🙂','😐','😟','😢'], EM=['Tranquilo(a)','Feliz','Triste','Ansioso(a)','Enojado(a)','Cansado(a)','Culpable','Agradecido(a)'];
  H('Mi día','✍️ Dos minutos al final del día.',
    `<style>.dt-cover{background:linear-gradient(90deg,#ffcf86 0 18px,#bec65a 18px calc(100% - 30px),#fff calc(100% - 30px));border-radius:18px;padding:22px 44px 22px 34px;text-align:center;color:#1f2a1a}
      .dt-cover h2{font-size:1.7rem;margin:0}.dt-cover q{display:block;font-style:italic;margin-top:8px}
      .dt-mood{display:flex;justify-content:space-between;gap:6px}.sec button.f.dt-e{font-size:1.8rem;padding:6px 0;flex:1;text-align:center;border-radius:14px}</style>
     <div class="dt-cover"><h2>📓 Mi diario de terapia</h2><q>Lo que hoy siente tu corazón, mañana lo entenderá tu cabeza.</q></div>
     <label class="lab" for="dt_f">Fecha</label><input class="f" id="dt_f" type="date">
     <label class="lab">¿Cómo me siento hoy?</label><div class="dt-mood">${E.map((e,i)=>`<button type="button" class="f dt-e" id="dt_m${i}" aria-pressed="false" aria-label="Ánimo ${5-i} de 5">${e}</button>`).join('')}</div>
     <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:8px">${EM.map((m,i)=>`<button type="button" class="f elegir" id="dt_e${i}" aria-pressed="false">${m}</button>`).join('')}</div>
     <label class="lab" for="dt_eo">✏️ Otra emoción: escríbela aquí</label><input class="f" id="dt_eo">`,
    [inp('dt_f','Fecha'),...E.map((e,i)=>nivel('dt_m'+i,`${5-i}/5`,'Ánimo de hoy (1–5)')),...EM.map((m,i)=>chk('dt_e'+i,'Emoción: '+m)),inp('dt_eo','Otra emoción')],{chip:'Mi día'});
  H('Lo que pasó','',
    `<label class="lab" for="dt_q0">¿Qué estaba haciendo o pensando cuando lo noté? ¿Por qué creo que me sentí así?</label><textarea class="f" id="dt_q0" rows="3"></textarea>
     <label class="lab" for="dt_q1">Si pudiera hacer algo pequeño para cuidarme ahora, ¿qué sería?</label><textarea class="f" id="dt_q1" rows="2"></textarea>`,
    [ta('dt_q0','Lo que pasó y por qué me sentí así'),ta('dt_q1','Algo pequeño para cuidarme')],{chip:'Lo que pasó'});
  /* p13–14: conocerme bien y mal — señales de alerta temprana */
  const SE=['Duermo mucho o muy poco','Me aíslo','Dejo de comer o como de más','Estoy más irritable','Lloro con facilidad','Descuido mi aseo o mi casa','Me cuesta concentrarme','Pienso mucho en lo negativo'];
  H('Mis señales de alerta','🚦 Conocer tus buenos y malos momentos te ayuda a pedir apoyo a tiempo.',
    `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px">
      <div style="background:#e6f2df;border-radius:16px;padding:10px"><b>🌤️ Cuando estoy bien…</b><label class="lab" for="dt_b0">Cómo me siento y qué hago</label><textarea class="f" id="dt_b0" rows="3"></textarea></div>
      <div style="background:#fbe3d8;border-radius:16px;padding:10px"><b>🌧️ Cuando no estoy bien…</b><label class="lab" for="dt_b1">Cómo me siento y qué hago</label><textarea class="f" id="dt_b1" rows="3"></textarea></div></div>
     <label class="lab">Me doy cuenta de que no estoy bien cuando…</label><div style="display:flex;flex-wrap:wrap;gap:6px">${SE.map((s,i)=>`<button type="button" class="f elegir" id="dt_a${i}" aria-pressed="false">${s}</button>`).join('')}</div>
     <label class="lab" for="dt_ao">✏️ Otra: escríbela aquí</label><input class="f" id="dt_ao">
     <label class="lab" for="dt_ap">Cuando note estas señales voy a… (qué hago y a quién busco)</label><textarea class="f" id="dt_ap" rows="2"></textarea>`,
    [ta('dt_b0','Cuando estoy bien'),ta('dt_b1','Cuando no estoy bien'),...SE.map((s,i)=>chk('dt_a'+i,'Señal: '+s)),inp('dt_ao','Otra señal'),ta('dt_ap','Lo que haré al notar las señales')],
    {chip:'Señales de alerta',nota:'Si las señales incluyen pensar en hacerte daño, no esperes a la sesión: busca a tu psicóloga o llama a la Línea 123.'});
  /* p10–12: estrés en el trabajo, la familia o por un conflicto */
  const AR=['💼 Trabajo o estudio','🏠 Familia','⚡ Un conflicto','✏️ Otro'];
  H('Lo que me estresa','👆 Toca de dónde viene tu estrés hoy y responde.',
    `<div style="display:flex;flex-wrap:wrap;gap:6px">${AR.map((a,i)=>`<button type="button" class="f elegir" id="dt_r${i}" aria-pressed="false">${a}</button>`).join('')}</div>
     <label class="lab" for="dt_r_q0">¿Qué está pasando y cómo me afecta (sueño, cuerpo, ánimo)?</label><textarea class="f" id="dt_r_q0" rows="3"></textarea>
     <label class="lab" for="dt_r_q1">¿Qué parte depende de mí y qué paso pequeño puedo dar? ¿Qué tiempo me dedico a mí?</label><textarea class="f" id="dt_r_q1" rows="3"></textarea>`,
    [...AR.map((a,i)=>nivel('dt_r'+i,a.slice(3),'Mi estrés viene de')),ta('dt_r_q0','Qué pasa y cómo me afecta'),ta('dt_r_q1','Lo que depende de mí y mi paso pequeño')],{chip:'Mi estrés'});
  /* p30–32: pensamiento flexible y patrones */
  const PT=['Dormí mal','No comí bien','Estaba sola(o)','Hubo un conflicto','Estaba cansada(o)','Usé mucho el celular'];
  H('Pensamiento flexible','🔄 Mira un pensamiento desde varios ángulos. No se trata de pensar «positivo», sino más justo.',
    `<label class="lab" for="dt_p0">La situación y el pensamiento negativo que apareció</label><textarea class="f" id="dt_p0" rows="2"></textarea>
     <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-top:6px">
      <div style="background:#eef1f5;border-radius:14px;padding:8px"><label class="lab" for="dt_p1" style="margin-top:0">😐 Una forma neutral de verlo</label><textarea class="f" id="dt_p1" rows="2"></textarea></div>
      <div style="background:#e6f2df;border-radius:14px;padding:8px"><label class="lab" for="dt_p2" style="margin-top:0">💚 Una forma más amable de verlo</label><textarea class="f" id="dt_p2" rows="2"></textarea></div></div>
     <label class="lab">¿Noto un patrón? Suele pasarme cuando…</label><div style="display:flex;flex-wrap:wrap;gap:6px">${PT.map((s,i)=>`<button type="button" class="f elegir" id="dt_pt${i}" aria-pressed="false">${s}</button>`).join('')}</div>
     <label class="lab" for="dt_pto">✏️ Otro: escríbelo aquí</label><input class="f" id="dt_pto">`,
    [ta('dt_p0','Situación y pensamiento negativo'),ta('dt_p1','Forma neutral'),ta('dt_p2','Forma más amable'),...PT.map((s,i)=>chk('dt_pt'+i,'Patrón: '+s)),inp('dt_pto','Otro patrón')],{chip:'Pensamiento flexible'});
  /* p23: la lista feliz */
  H('Mi lista feliz','😊 Cosas que te hacen sentir bien. Vuelve a ella en los días grises.',
    `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:6px">${[...Array(8).keys()].map(i=>`<input class="f" id="dt_l${i}" placeholder="${['Ej.: caminar al atardecer','Ej.: llamar a mi hermana','Ej.: mi música favorita','','','','',''][i]}">`).join('')}</div>`,
    [...Array(8).keys()].map(i=>inp('dt_l'+i,`Lista feliz ${i+1}`)),{chip:'Lista feliz'});
  H('Para mi próxima sesión','📌 Lo que no quiero olvidar contarle a mi psicóloga.',
    `<label class="lab" for="dt_s0">Lo que quiero contar o preguntar</label><textarea class="f" id="dt_s0" rows="3"></textarea>
     <label class="lab" for="dt_s1">Algo que aprendí o noté de mí esta semana</label><textarea class="f" id="dt_s1" rows="2"></textarea>`,
    [ta('dt_s0','Lo que quiero contar o preguntar'),ta('dt_s1','Lo que aprendí de mí')],{chip:'Próxima sesión'}); }
