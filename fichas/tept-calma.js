/* TEPT p13–14 (y 16): PAUSA y técnica del frío para bajar la activación en el momento (redacción propia, se unificó PAUSA con las «4 R»). */
FICHA({clave:'tept-calma',titulo:'Calmarme en el momento: PAUSA y frío',corto:'PAUSA y frío',carp:['trauma','ansiedad']});
{ const P=[['P','Pausa','Detén lo que estás haciendo apenas notes la activación.'],['A','Actívate','Si tu cuerpo lo permite, muévete un minuto: sentadillas, saltos suaves o golpes firmes con los pies.'],['U','Ubícate','Dite: «Es una alarma; reviso si hay peligro real ahora». Mira dónde estás y qué hay a tu alrededor.'],['S','Siente','Frota las palmas rápido y nota el calor y la fricción.'],['A','Al exhalar, suelta','Inhala por la nariz y suelta lento por la boca, más largo que la inhalación.']];
  H('PAUSA','👆 Toca cada paso cuando lo practiques.',
    `<h2>⏸️ Mi PAUSA</h2>${P.map(([l,n,d],i)=>`<button type="button" class="f" id="pz${i}" aria-pressed="false" style="display:grid;grid-template-columns:40px 1fr;gap:8px;width:100%;margin-top:6px;text-align:left"><b style="font-family:'DM Serif Display',Georgia,serif;font-size:1.6rem;color:#047578">${l}</b><span><b>${n}</b><br><small style="font-weight:600">${d}</small></span></button>`).join('')}`,
    P.map(([l,n],i)=>chk('pz'+i,`PAUSA · ${n}`)),{chip:'PAUSA'});
  H('El frío para volver al cuerpo','✍️ Prueba una opción y anota cómo te fue.',
    `<h2>🧊 Técnica del frío</h2><p>El frío intenso ayuda a sacar al cuerpo de la alarma y a traer la atención al presente.</p>
     <ul><li>Sostén un cubo de hielo en la mano (sin llegar al dolor, de 30 segundos a 1 minuto) y nota la sensación.</li><li>Ponte una compresa fría en el pecho o la nuca.</li><li>Pasa agua fría por la cara y las muñecas.</li></ul>
     <label class="lab" for="fr0">¿Qué probé y en qué situación?</label><textarea class="f" id="fr0" rows="2"></textarea>
     <label class="lab" for="fr1">Mi malestar antes y después (0–10) y qué noté</label><textarea class="f" id="fr1" rows="2"></textarea>`,
    [ta('fr0','Lo que probé y cuándo'),ta('fr1','Malestar antes y después')],{chip:'Frío',nota:'Si tienes alguna condición del corazón, presión baja, Raynaud, heridas o piel sensible, o un trastorno alimentario, consulta antes de usar el frío intenso. Si estás en peligro real ahora, prioriza tu seguridad, pide ayuda y usa tu plan de seguridad.'}); }
