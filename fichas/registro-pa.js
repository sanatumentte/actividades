/* Registro de pensamientos automáticos: la tabla del cuaderno (pág. 9) venía girada; aquí va vertical, una tarjeta por registro. */
FICHA({clave:'registro-pa',titulo:'Mi registro de pensamientos automáticos',corto:'Registro de pensamientos',carp:['ansiedad','depresion']});
{
const COL=[['fecha','Fecha'],['sit','Situación'],['pen','Pensamiento automático'],['sen','Sentimientos que experimenté'],['resp','Mi respuesta'],['nueva','Nueva respuesta ajustada']];
P('distorsiones-mindapp',8,'¿Por qué llevar un registro?');
const reg=i=>`<div class="rp-reg"><h3>📝 Registro ${i+1}</h3>${COL.map(([k,l])=>`<label class="lab" for="rp${i}_${k}">${l}</label>${k==='fecha'?`<input class="f" id="rp${i}_${k}" type="date">`:`<textarea class="f" id="rp${i}_${k}" rows="2"></textarea>`}`).join('')}
  <label class="lab" for="rp${i}_int">Intensidad de mi pensamiento automático: <output id="rp${i}_o">—</output></label><input class="f" id="rp${i}_int" type="range" min="0" max="100" step="5" value="0"></div>`;
H('Mi registro','✍️ Llena un registro cada vez que notes un pensamiento automático que te afecta. Tienes espacio para tres.',
  `<style>.rp-reg{background:#fbf6ef;border:1px solid var(--beige);border-radius:16px;padding:14px;display:grid;gap:6px}.rp-reg h3{color:#c9987c}.rp-reg input[type=range]{accent-color:#047578}</style>
   <h2>Mi registro de pensamientos</h2>${[0,1,2].map(reg).join('')}`,
  [0,1,2].flatMap(i=>[...COL.map(([k,l])=>(k==='fecha'?inp:ta)(`rp${i}_${k}`,`Registro ${i+1} · ${l}`)),inp(`rp${i}_int`,`Registro ${i+1} · Intensidad (0–100)`)]),{chip:'Mi registro'});
_ult().alCambiar=S=>[0,1,2].forEach(i=>{ const o=document.getElementById(`rp${i}_o`), r=document.getElementById(`rp${i}_int`), v=S[`rp${i}_int`];
  if(o) o.textContent=v?v+'/100':'—'; if(r&&!v) r.value=0; });
}
