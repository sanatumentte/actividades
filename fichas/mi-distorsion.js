/* Mi distorsión: la persona elige una de las 12 distorsiones y solo ve su explicación con ejemplos y sus 3 preguntas.
   Base: «Cuaderno de ejercicios sobre distorsiones cognitivas» (648×792). */
FICHA({clave:'mi-distorsion',titulo:'Mi distorsión cognitiva',corto:'Mi distorsión',carp:['ansiedad','depresion'],
  intro:`<p>Las distorsiones cognitivas son formas de pensar que deforman la realidad sin que nos demos cuenta. Elige la que más reconoces en ti (o la que te sugirió tu psicóloga): verás qué es, ejemplos y tres preguntas para cuestionarla.</p>`});
{
/* [nombre, página de ejemplos, página de preguntas, [[y,alto]×3]] */
const D=[['Filtro mental',10,11,[[157,163],[365,168],[579,170]]],['Conclusiones precipitadas',12,13,[[158,162],[356,177],[568,180]]],['Razonamiento emocional',14,15,[[155,161],[359,169],[572,178]]],
  ['Etiquetado',16,17,[[155,161],[359,169],[572,178]]],['Culpa',18,19,[[177,160],[386,160],[610,150]]],['Catastrofización',20,21,[[155,161],[369,159],[581,168]]],
  ['Sobregeneralización',22,23,[[164,152],[369,159],[581,168]]],['Pensamiento en blanco y negro',24,25,[[155,161],[359,169],[583,166]]],['Declaraciones de «debería»',26,27,[[164,152],[369,159],[581,168]]],
  ['Personalización',28,29,[[174,142],[369,159],[581,168]]],['Falacia del cambio',30,31,[[185,125],[378,140],[622,126]]],['Falacia de la justicia',32,33,[[196,105],[385,120],[617,130]]]];
const G='Mi distorsión';
H('Elige tu distorsión','👆 Toca la distorsión que quieres trabajar. Puedes cambiarla cuando quieras: lo que escribas en cada una queda guardado.',
  `<style>.md-op{display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:8px}.sec button.f.md-b{border-radius:14px;text-align:center}</style>
   <h2>¿Qué distorsión quieres trabajar?</h2><div class="md-op">${D.map(([n],i)=>`<button type="button" class="f md-b" id="md_${i}" aria-pressed="false">${n}</button>`).join('')}</div>`,
  D.map(([n],i)=>nivel('md_'+i,n,G)),{chip:'Elegir'});
D.forEach(([n,pe,pq,Y],i)=>{
  P('distorsiones-mindapp',pe,n+': qué es y ejemplos','',[],{grupo:'md_'+i});
  P('distorsiones-mindapp',pq,n+': preguntas de reflexión','✍️ Responde las tres preguntas pensando en una situación tuya.',
    Y.map(([y,h],k)=>ta(`md_${i}_${k}`,`${n} · pregunta ${k+1}`,75,y,498,h,{fs:10.5,cls:'clear'})),{grupo:'md_'+i,chip:n});
});
_ult().alCambiar=S=>{ const el=S['@'+G]; document.querySelectorAll('figure[data-grupo^="md_"]').forEach(f=>{ f.hidden=f.dataset.grupo!==el; });
  document.querySelectorAll('#chips a').forEach(a=>{ const f=document.getElementById('p'+a.dataset.p); if(f&&f.dataset.grupo) a.hidden=f.hidden; }); };
}
