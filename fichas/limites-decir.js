/* Límites 3: cómo decir un límite con DEAR MAN (DBT, eficacia interpersonal) y qué hacer si lo cruzan (Nuevos límites p21–24, redacción propia). */
FICHA({clave:'limites-decir',titulo:'Cómo decir un límite (DEAR MAN)',corto:'Decir un límite',carp:['relaciones','autoestima']});
{ const D=[['D','Describe','Los hechos, sin juicios.','Cuando llegas sin avisar a mi casa…'],['E','Expresa','Cómo te sientes, hablando desde el «yo».','me siento incómoda porque no tengo tiempo para mí.'],
    ['A','Afirma','Pide lo que quieres o di que no, claro y corto.','Te pido que me escribas antes de venir.'],['R','Refuerza','Lo bueno que traerá para los dos.','Así podré recibirte con gusto y estar más tranquila.']],
  M=[['M','Mantente enfocado(a)','Vuelve a tu petición si te desvían, como un disco rayado.'],['A','Aparenta seguridad','Voz tranquila, postura firme, mirada amable: no es fingir, es mostrar tu confianza aunque haya nervios.'],['N','Negocia','Pides, no exiges: dispuesto(a) a dar para recibir.']];
  H('Mi límite, paso a paso','✍️ Piensa en un límite que quieras poner y arma tu mensaje. Abajo se va armando solo.',
    `<style>.dm{display:grid;grid-template-columns:44px 1fr;gap:8px;align-items:start;background:#eef3fa;border-radius:14px;padding:10px;margin-top:8px}.dm>b{font-family:'DM Serif Display',Georgia,serif;font-size:1.8rem;color:#5b6fa8;text-align:center}
     .dm-out{background:#fff;border:2px dashed #81a9a7;border-radius:16px;padding:12px;margin-top:10px;font-size:1.02rem;line-height:1.5}</style>
     <h2>🗣️ DEAR: qué decir</h2><p style="font-size:.88rem">Habilidad de la terapia dialéctica conductual (Marsha Linehan) para pedir o decir que no con respeto, en situaciones seguras.</p><label class="lab" for="dmS">¿Con quién y en qué situación?</label><input class="f" id="dmS">
     ${D.map(([l,n,d,e],i)=>`<div class="dm"><b>${l}</b><div><label class="lab" for="dm${i}" style="margin-top:0">${n}: ${d}</label><textarea class="f" id="dm${i}" rows="2" placeholder="Ej.: ${e}"></textarea></div></div>`).join('')}
     <h3 style="margin-top:12px">💬 Mi mensaje</h3><div class="dm-out" id="dmOut">Tu mensaje aparecerá aquí.</div>`,
    [inp('dmS','Con quién y en qué situación'),...D.map(([l,n],i)=>ta('dm'+i,`${l} · ${n}`))],{chip:'DEAR'});
  H('Cómo decirlo y qué hacer si no lo respetan','👆 Toca las actitudes que vas a practicar.',
    `<h2>🧭 MAN: cómo decirlo</h2>${M.map(([l,n,d],i)=>`<button type="button" class="f" id="dmm${i}" aria-pressed="false" style="display:block;width:100%;margin-top:6px"><b>${l} · ${n}</b><br><small style="font-weight:600">${d}</small></button>`).join('')}
     <h2 style="margin-top:14px">🚧 Si cruzan mi límite</h2>
     <label class="lab" for="dmx0">El límite que se cruzó</label><textarea class="f" id="dmx0" rows="2"></textarea>
     <label class="lab" for="dmx1">Acciones que puedo tomar (repetirlo, alejarme un rato, pedir apoyo, cambiar el acuerdo…)</label><textarea class="f" id="dmx1" rows="3"></textarea>`,
    [...M.map(([l,n],i)=>chk('dmm'+i,`${l} · ${n}`)),ta('dmx0','El límite que se cruzó'),ta('dmx1','Acciones que puedo tomar')],
    {chip:'MAN y acciones'});
  _ult().alCambiar=S=>{ const o=document.getElementById('dmOut'); if(!o) return; const t=[0,1,2,3].map(i=>(S['dm'+i]||'').trim()).filter(Boolean).join(' ');
    o.textContent=t||'Tu mensaje aparecerá aquí.'; o.style.opacity=t?1:.6; }; }
