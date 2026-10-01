/* BORRADOR — Cuaderno de terapia rediseñado (esencia: diario entre sesiones). Pendiente de aprobación de Camila; no está en el catálogo. */
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
  H('Para mi próxima sesión','📌 Lo que no quiero olvidar contarle a mi psicóloga.',
    `<label class="lab" for="dt_s0">Lo que quiero contar o preguntar</label><textarea class="f" id="dt_s0" rows="3"></textarea>
     <label class="lab" for="dt_s1">Algo que aprendí o noté de mí esta semana</label><textarea class="f" id="dt_s1" rows="2"></textarea>`,
    [ta('dt_s0','Lo que quiero contar o preguntar'),ta('dt_s1','Lo que aprendí de mí')],{chip:'Próxima sesión'}); }
