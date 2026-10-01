/* TEPT p23 (y Traumas p26): entumecimiento emocional — pequeñas prácticas para volver a sentir lo bueno. */
FICHA({clave:'entumecimiento',titulo:'Cuando no siento nada: volver a sentir',corto:'Entumecimiento emocional',carp:['trauma','depresion']});
{ const A=[['🙏','Notar lo bueno','Anotar algo bueno del día, por pequeño que sea.'],['🌅','Saborear','Quedarte unos segundos más en un momento agradable: un café, el sol, una canción.'],['🙂','Sonreír y conectar','Una conversación corta, un saludo, algo que te haga sonreír.'],['🚶','Moverte','Caminar, estirarte, bailar: el cuerpo ayuda a despertar las emociones.']];
  H('Volver a sentir','👆 Toca las prácticas que vas a probar esta semana.',
    `<h2>🌱 Cuando todo se siente apagado</h2><p>El entumecimiento emocional es cuando cuesta sentir o expresar emociones, incluso las buenas. Suele ser una forma en que la mente se protege: no estás roto(a). No se fuerza: se invita, poco a poco.</p>
     <div style="display:grid;gap:6px">${A.map(([ic,n,d],i)=>`<button type="button" class="f" id="en${i}" aria-pressed="false" style="width:100%;text-align:left">${ic} <b>${n}</b><br><small style="font-weight:600">${d}</small></button>`).join('')}</div>
     <label class="lab" for="en_o">✏️ Otra: escríbela aquí</label><input class="f" id="en_o">`,
    [...A.map(([ic,n],i)=>chk('en'+i,'Práctica: '+n)),inp('en_o','Otra práctica')],{chip:'Prácticas'});
  H('Mi registro','✍️ Al final de cada día, dos líneas.',
    `<label class="lab" for="enr0">Lo que hice y lo que sentí (aunque sea poquito)</label><textarea class="f" id="enr0" rows="3"></textarea>
     <label class="lab" for="enr1">Lo que noté al final de la semana</label><textarea class="f" id="enr1" rows="2"></textarea>`,
    [ta('enr0','Lo que hice y sentí'),ta('enr1','Lo que noté en la semana')],{chip:'Registro',nota:'Si el entumecimiento dura mucho tiempo, coméntalo con tu psicóloga.'}); }
