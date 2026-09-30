FICHA({clave:'sn-mapa',titulo:'Conociendo mi sistema nervioso',corto:'Mi sistema nervioso',carp:['emociones','ansiedad']});
P('regulacion-sn',6,'El nervio vago');
P('regulacion-sn',8,'La escalera: mis estados del sistema nervioso');
P('regulacion-sn',9,'Las tres etapas de respuesta');
{ const E=[['Seguro(a) y conectado(a)','🟢','Tranquilo(a), presente, puedo conectar con otros.'],['En alerta: lucha o huida','🟠','Acelerado(a), ansioso(a), irritable, con ganas de escapar o pelear.'],['Apagado(a) o congelado(a)','🔵','Sin energía, desconectado(a), entumecido(a), sin ganas de nada.']];
  H('¿Dónde estoy más seguido?','👆 Toca el estado en el que pasas más tiempo esta semana y responde.',
    `<style>.sm-e{display:grid;gap:8px}.sec button.f.sm-b{display:grid;gap:2px;border-radius:16px}.sec button.f.sm-b small{font-weight:600;opacity:.85}</style>
     <h2>Mi estado más frecuente</h2><div class="sm-e">${E.map(([n,ic,d],i)=>`<button type="button" class="f sm-b" id="sm_${i}" aria-pressed="false"><span>${ic} ${n}</span><small>${d}</small></button>`).join('')}</div>
     <label class="lab" for="sm_q1">¿Qué situaciones me llevan a subir o bajar de la «escalera»?</label><textarea class="f" id="sm_q1" rows="2"></textarea>
     <label class="lab" for="sm_q2">¿Qué me ayuda a volver a sentirme seguro(a) y conectado(a)?</label><textarea class="f" id="sm_q2" rows="2"></textarea>`,
    [...E.map(([n],i)=>nivel('sm_'+i,n,'Mi estado más frecuente')),ta('sm_q1','Lo que me hace subir o bajar'),ta('sm_q2','Lo que me ayuda a volver a la seguridad')],{chip:'Mi estado'}); }
