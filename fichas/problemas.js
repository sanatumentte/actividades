/* Solución de problemas (Plantilla TAC, págs. 20–21): mismas preguntas, en pasos. */
FICHA({clave:'problemas',titulo:'Resolver un problema paso a paso',corto:'Solución de problemas',carp:['general','ansiedad']});
{
const PASOS=[['def','1. Define el problema en detalle','¿Quién está involucrado? ¿Qué sucedió exactamente? ¿Dónde y cuándo ocurrió? ¿Cómo surgió? ¿Por qué ocurrió?'],
  ['meta','2. ¿Qué quieres cambiar?','¿Cuál es la meta o el resultado que deseas alcanzar?'],
  ['ok','3. Lo que ya me ha funcionado','¿Qué solución usaste que te resultó eficaz? ¿Qué hiciste? ¿Cómo ayudó?'],
  ['no','4. Lo que no funcionó','¿Por qué fue ineficaz esa solución? ¿Cuáles fueron sus debilidades? ¿Por qué no funcionó como esperabas?'],
  ['mejor','5. La próxima vez','¿Cómo podrías manejar mejor el problema? ¿Qué harías diferente? ¿Qué medidas tomarías?']];
H('Resolver un problema','✍️ Avanza paso a paso. No necesitas la solución perfecta: busca el siguiente paso posible.',
  `<style>.pr-p{border-left:5px solid var(--verde);background:#f4faf8;border-radius:14px;padding:10px 12px}.pr-p h3{color:var(--petroleo)}.pr-p p{font-size:.9rem;color:#5d7a7f;margin:2px 0 6px}</style>
   <h2>Mi problema, paso a paso</h2>${PASOS.map(([k,t,q])=>`<div class="pr-p"><h3>${t}</h3><p>${q}</p><textarea class="f" id="pr_${k}" rows="3"></textarea></div>`).join('')}`,
  PASOS.map(([k,t])=>ta('pr_'+k,t)),{chip:'Mi problema'});
}
