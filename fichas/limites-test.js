/* Límites 2: cuestionario de límites personales (Nuevos límites p18–20) — toca las frases que te describen. No es diagnóstico. */
FICHA({clave:'limites-test',titulo:'¿Cómo manejo mis límites? Cuestionario y reflexión',corto:'Cuestionario de límites',carp:['relaciones','autoestima']});
{ const Q=['Me cuesta decir que no, incluso cuando quiero hacerlo.','Me siento culpable cuando pongo límites a amigos o familiares.','Acepto cosas que me incomodan para evitar conflictos.','Me siento abrumado(a) por lo que otros me piden de mi tiempo y energía.','Me siento responsable de la felicidad de los demás.','Me cuesta expresar lo que necesito en mis relaciones.','Me cuesta pedir ayuda cuando la necesito.','Dejo que otros decidan por mí, aunque tenga una preferencia.','Me da ansiedad poner límites en el trabajo o el estudio.','Siento que se aprovechan de mi generosidad.','Dejo de lado mis necesidades para atender primero a los demás.','Me resiento cuando no respetan mis límites.','Me cuesta equilibrar mi vida personal y laboral.','Quedo agotado(a) después de estar con ciertas personas.','Ignoro lo que siento para mantener la paz.','Pido perdón de más, aun sin haber hecho nada malo.','Me cuesta separar mis emociones de las de los demás.','Me preocupa qué pensarán de mí si pongo límites.'];
  H('Mi cuestionario','👆 Toca las frases que te describen. No es un examen: es para conocerte.',
    `<style>.lq-b{display:grid;gap:6px}.sec button.f.lq{font-weight:600;border-radius:12px}.lq-n{font-weight:900;color:#047578;font-size:1.1rem}</style>
     <h2>🪞 ¿Me pasa a mí?</h2><div class="lq-b">${Q.map((q,i)=>`<button type="button" class="f lq" id="lt${i}" aria-pressed="false">${q}</button>`).join('')}</div>
     <p style="margin-top:10px">Me identifico con <span class="lq-n" id="lt_n">0</span> de ${Q.length} frases.</p>`,
    Q.map((q,i)=>chk('lt'+i,q)),{chip:'Cuestionario'});
  H('Lo que descubrí','✍️ Mira las frases que tocaste y responde.',
    `<label class="lab" for="lr0">¿Qué patrón veo en mi forma de manejar los límites?</label><textarea class="f" id="lr0" rows="2"></textarea>
     <label class="lab" for="lr1">¿Cómo me siento cuando acepto cosas que me incomodan?</label><textarea class="f" id="lr1" rows="2"></textarea>
     <label class="lab" for="lr2">¿Cómo podrían mejorar mis relaciones si pusiera más límites?</label><textarea class="f" id="lr2" rows="2"></textarea>
     <label class="lab" for="lr3">Un paso pequeño que puedo dar esta semana</label><textarea class="f" id="lr3" rows="2"></textarea>`,
    ['Patrón que veo','Cómo me siento al aceptar lo que me incomoda','Cómo mejorarían mis relaciones','Mi paso pequeño de esta semana'].map((l,i)=>ta('lr'+i,l)),{chip:'Reflexión'});
  _ult().alCambiar=S=>{ const n=Q.filter((q,i)=>S['lt'+i]).length, el=document.getElementById('lt_n'); if(el) el.textContent=n; }; }
