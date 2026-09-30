FICHA({clave:'regulacion',titulo:'Regulación emocional paso a paso',corto:'Regulación emocional',carp:['emociones']});
{ const X=78, W=447;
  P('regulacion-sn',20,'Regulación emocional (1)','✍️ Describe tu emoción, su intensidad (0–10), tus sensaciones y lo que la desencadenó.',
    renglones('re20_',['1. Emoción actual','2. Intensidad (0–10)','3. Sensaciones físicas','4. Desencadenante'],[347,368,389,471,494,596,618,640,718,741,763,785],X+2,W-4),{chip:'Pasos 1–4'});
  P('regulacion-sn',21,'Regulación emocional (2)','✍️ Sigue los pasos: pensamientos, aceptar, respirar, replantear y resolver.',
    renglones('re21_',['5. Pensamientos que pasan por mi cabeza','8. Replantear: pensamientos más equilibrados','9. Resolución: ¿cómo transformarlos?'],[203,224,244,483,504,525,633,656,680],X+2,W-4),{chip:'Pasos 5–9'});
  H('Al terminar','✍️ Reflexiona sobre lo que hiciste.',`<h2>Al terminar</h2>${[['re_f1','¿Cómo cambió la intensidad de mi emoción después de hacer esto?'],['re_f2','¿Qué aprendí sobre cómo vivo y proceso esta emoción?'],['re_f3','¿Qué estrategias me resultaron más efectivas?']].map(([id,l])=>`<label class="lab" for="${id}">${l}</label><textarea class="f" id="${id}" rows="2"></textarea>`).join('')}`,
    [ta('re_f1','¿Cómo cambió la intensidad?'),ta('re_f2','¿Qué aprendí de esta emoción?'),ta('re_f3','Estrategias más efectivas')],{chip:'Al terminar'}); }
