/* Técnicas para calmar el sistema nervioso (nervio vago): se elige una técnica y se ve su página; registro antes/después. */
FICHA({clave:'vagales',titulo:'Técnicas para calmar mi sistema nervioso',corto:'Técnicas vagales',carp:['emociones','ansiedad']});
{
const T=[['Respiración profunda',28],['Contorno facial',29],['Liberar la lengua',30],['Abrazo de mariposa',31],['Deglución',33],['Zumbido y tono',34],['Masaje de ojos',35],['Posiciones de la mano',36],['Meditación de concentración',37]];
const G='Técnica que estoy aprendiendo';
H('Elige una técnica','👆 Toca una técnica para ver cómo se hace. Practícala unos minutos.',
  `<style>.vg-op{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:8px}.sec button.f.vg-b{border-radius:14px;text-align:center}
   .vg-r{display:grid;gap:8px;background:#f4faf8;border-radius:16px;padding:12px}.vg-r input[type=range]{width:100%;accent-color:#047578}.vg-r output{font-weight:900;color:#047578}</style>
   <h2>Mis técnicas</h2><div class="vg-op">${T.map(([n],i)=>`<button type="button" class="f vg-b" id="vg_${i}" aria-pressed="false">${n}</button>`).join('')}</div>`,
  T.map(([n],i)=>nivel('vg_'+i,n,G)),{chip:'Elegir'});
T.forEach(([n,pg],i)=>P('regulacion-sn',pg,n,'',[],{grupo:'vg_'+i}));
const reg=i=>`<div class="vg-r"><h3>Práctica ${i+1}</h3><label class="lab" for="vg_t${i}">Técnica</label><select class="f" id="vg_t${i}"><option value="">Elige…</option>${T.map(([n])=>`<option>${n}</option>`).join('')}</select>
  <label class="lab" for="vg_a${i}">Tensión antes (0–10): <output id="vg_ao${i}">—</output></label><input class="f" type="range" min="0" max="10" id="vg_a${i}" value="0">
  <label class="lab" for="vg_d${i}">Tensión después (0–10): <output id="vg_do${i}">—</output></label><input class="f" type="range" min="0" max="10" id="vg_d${i}" value="0">
  <label class="lab" for="vg_n${i}">¿Qué noté?</label><textarea class="f" id="vg_n${i}" rows="2"></textarea></div>`;
H('Mi registro de práctica','✍️ Cada vez que practiques, anota la técnica y tu tensión antes y después.',`<h2>Mi registro</h2>${[0,1,2].map(reg).join('')}`,
  [0,1,2].flatMap(i=>[inp('vg_t'+i,`Práctica ${i+1} · técnica`),inp('vg_a'+i,`Práctica ${i+1} · tensión antes (0–10)`),inp('vg_d'+i,`Práctica ${i+1} · tensión después (0–10)`),ta('vg_n'+i,`Práctica ${i+1} · lo que noté`)]),{chip:'Mi registro'});
_ult().alCambiar=S=>{ const el=S['@'+G]; document.querySelectorAll('figure[data-grupo^="vg_"]').forEach(f=>{ f.hidden=f.dataset.grupo!==el; });
  document.querySelectorAll('#chips a').forEach(a=>{ const f=document.getElementById('p'+a.dataset.p); if(f&&f.dataset.grupo) a.hidden=f.hidden; });
  [0,1,2].forEach(i=>['a','d'].forEach(k=>{ const v=S[`vg_${k}${i}`], o=document.getElementById(`vg_${k}o${i}`), r=document.getElementById(`vg_${k}${i}`); if(o) o.textContent=v!=null&&v!==''?v+'/10':'—'; if(r&&(v==null||v==='')) r.value=0; })); };
}
