/* Entendiendo la ansiedad p20: mi mapa de recursos personales (rediseño). */
FICHA({clave:'recursos',titulo:'Mi mapa de recursos personales',corto:'Mis recursos',carp:['ansiedad','general']});
{ const F=['Perseverancia','Creatividad','Humor','Empatía','Fe','Paciencia','Valentía','Organización'],
        T=['Respiración lenta','Anclaje 5-4-3-2-1','Escribir mis pensamientos','Frases de calma','Caminar o moverme','Hablar con alguien','Orar o meditar','Música'];
  const chips=(pre,L)=>`<div style="display:flex;flex-wrap:wrap;gap:6px">${L.map((t,i)=>`<button type="button" class="f elegir" id="${pre}${i}" aria-pressed="false">${t}</button>`).join('')}</div>
     <label class="lab" for="${pre}o">✏️ Otro: escríbelo aquí</label><input class="f" id="${pre}o">`;
  const caja=(ic,t,d,html)=>`<div style="background:#f1f0fb;border-radius:16px;padding:12px"><h3 style="margin:0 0 4px">${ic} ${t}</h3><div style="font-size:.9rem;margin-bottom:8px">${d}</div>${html}</div>`;
  H('Mis fortalezas y mi red','💡 Todo lo que ya tienes para atravesar momentos difíciles.',
    `<h2>🗺️ Mi mapa de recursos</h2><div style="display:grid;gap:10px">
     ${caja('💪','Mis fortalezas','Toca las cualidades que te han servido en momentos difíciles.',chips('rf_',F))}
     ${caja('🤝','Mi red de apoyo','¿A quién puedes acudir cuando necesitas hablar?',
       ['Una persona','Otra persona','Un profesional','Otro recurso (grupo, iglesia, línea de ayuda)'].map((l,i)=>`<label class="lab" for="rr${i}">${l}</label><input class="f" id="rr${i}">`).join(''))}</div>`,
    [...F.map((t,i)=>chk('rf_'+i,'Fortaleza: '+t)),inp('rf_o','Otra fortaleza'),...['Persona','Persona','Profesional','Otro recurso'].map((l,i)=>inp('rr'+i,'Red de apoyo · '+l))],{chip:'Fortalezas y red'});
  H('Mis herramientas y mis victorias','',
    `<div style="display:grid;gap:10px">
     ${caja('🧰','Mis herramientas para la ansiedad','Toca las que más te sirven y tenlas a mano.',chips('rt_',T))}
     ${caja('🏆','Mis victorias pasadas','Una situación difícil que ya superaste.',
       '<label class="lab" for="rv0">Superé…</label><input class="f" id="rv0"><label class="lab" for="rv1">Lo que me ayudó</label><input class="f" id="rv1"><label class="lab" for="rv2">Lo que aprendí</label><input class="f" id="rv2">')}</div>
     <p style="margin-top:10px">🌟 Guarda este mapa y léelo cuando la ansiedad suba: recordar tus recursos es una habilidad que se entrena.</p>`,
    [...T.map((t,i)=>chk('rt_'+i,'Herramienta: '+t)),inp('rt_o','Otra herramienta'),inp('rv0','Superé'),inp('rv1','Lo que me ayudó'),inp('rv2','Lo que aprendí')],{chip:'Herramientas y victorias'}); }
