/* Límites 4: mis círculos de límites (Nuevos límites p25–26) — los nombres aparecen en los anillos. */
FICHA({clave:'limites-circulos',titulo:'Mis círculos de límites',corto:'Círculos de límites',carp:['relaciones']});
{ const C=[['Círculo íntimo','Personas en las que confías y con las que compartes lo más personal.','#f3c9a8'],['Círculo medio','Personas con las que disfrutas, pero no compartes detalles íntimos.','#bfdad3'],['Círculo exterior','Conocidos: te caen bien, pero no los conoces a fondo.','#d9e4f3']];
  H('Mis círculos','✍️ Escribe los nombres separados por comas: aparecerán en tus círculos.',
    `<style>.lc-svg{width:100%;max-width:420px;display:block;margin:6px auto}.lc-svg text{font:800 13px Nunito,system-ui,sans-serif;fill:#1f3d45}</style>
     <h2>⭕ ¿Quién está en cada círculo?</h2>
     <svg class="lc-svg" id="lcSvg" viewBox="0 0 400 400" role="img" aria-label="Mis círculos de límites"><circle cx="200" cy="200" r="195" fill="${C[2][2]}"/><circle cx="200" cy="200" r="135" fill="${C[1][2]}"/><circle cx="200" cy="200" r="78" fill="${C[0][2]}"/><circle cx="200" cy="200" r="26" fill="#047578"/><text x="200" y="204" text-anchor="middle" style="fill:#fff;font-size:13px">TÚ</text><g id="lcN"></g></svg>
     ${C.map(([n,d],i)=>`<label class="lab" for="lc${i}">${n}: <span style="font-weight:600">${d}</span></label><textarea class="f" id="lc${i}" rows="2" placeholder="Nombre, nombre, nombre…"></textarea>`).join('')}`,
    C.map(([n],i)=>ta('lc'+i,n)),{chip:'Mis círculos'});
  H('Para pensar','✍️ Responde las que quieras.',
    `<label class="lab" for="lcq0">¿Qué tienen en común las personas de mi círculo íntimo?</label><textarea class="f" id="lcq0" rows="2"></textarea>
     <label class="lab" for="lcq1">¿Qué haría que moviera a alguien a un círculo más lejano (o más cercano)?</label><textarea class="f" id="lcq1" rows="2"></textarea>
     <label class="lab" for="lcq2">¿Cuánto tiempo y energía le doy a cada círculo? ¿Está equilibrado?</label><textarea class="f" id="lcq2" rows="2"></textarea>`,
    ['Lo que tiene en común mi círculo íntimo','Qué me haría mover a alguien de círculo','Mi tiempo y energía por círculo'].map((l,i)=>ta('lcq'+i,l)),{chip:'Para pensar'});
  const R=[[52,0],[106,.35],[165,.15]];
  _ult().alCambiar=S=>{ const g=document.getElementById('lcN'); if(!g) return; const esc=s=>s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
    g.innerHTML=[0,1,2].map(i=>{ const L=(S['lc'+i]||'').split(/[,\n;]+/).map(s=>s.trim()).filter(Boolean).slice(0,12), [r,o]=R[i];
      return L.map((n,k)=>{ const a=o+2*Math.PI*k/Math.max(L.length,1)-Math.PI/2; return `<text x="${(200+r*Math.cos(a)).toFixed(1)}" y="${(204+r*Math.sin(a)).toFixed(1)}" text-anchor="middle">${esc(n.slice(0,14))}</text>`; }).join(''); }).join(''); }; }
