/* Límites 1: qué son, por qué importan y mis 6 tipos de límites (Nuevos límites p2–17, redacción propia y diseño nuevo). */
FICHA({clave:'limites-que',titulo:'Mis límites: qué son y cuáles son los míos',corto:'Qué son los límites',carp:['relaciones','autoestima']});
{ const T=[['🧍','Físicos','#f6c7a8','Tu espacio personal, tu cuerpo y tu privacidad.',['¿Con quién me siento cómodo(a) con el contacto físico y con quién no?','¿Le digo a los demás cuando algo me incomoda?']],
    ['🕒','De tiempo','#9fc3e6','Tu energía, tu agenda y cuánto das a los demás.',['¿En qué momentos me siento más abrumado(a) por los compromisos?','¿Cómo comunico lo que necesito de mi tiempo?']],
    ['💬','Verbales','#f7c6dd','Cómo te hablan y de qué temas quieres hablar.',['¿Qué palabras o tonos me incomodan?','¿Cómo quiero responder cuando alguien cruza ese límite?']],
    ['💛','Emocionales','#f3d98b','Tus sentimientos, valores y cuánto compartes.',['¿Qué tipo de apoyo necesito?','¿Cuánta energía emocional puedo dar a otros sin agotarme?']],
    ['👜','Materiales','#b9dccf','Tus cosas, tu dinero y tus decisiones económicas.',['¿Qué cosas presto con tranquilidad y cuáles no?','¿Alguien ha cruzado este límite? ¿Qué pasó?']],
    ['🔒','Íntimos y sexuales','#d6c4ec','Tu consentimiento, tu intimidad y tus deseos.',['¿Me siento cómodo(a) hablando de mis límites con mi pareja?','¿Tengo claro qué estoy dispuesto(a) a hacer y qué no?']]];
  H('¿Qué son los límites?','📖 Léelo y toca los tipos de límite para explorarlos.',
    `<h2>🚧 Mis fronteras personales</h2><p>Los límites son las líneas que pones para sentirte bien y seguro(a) en tus relaciones: muestran a los demás cómo quieres que te traten. Cada persona tiene los suyos. Poner límites es una forma de respetarte, cuidar tus relaciones, bajar el estrés y cuidarte sin culpa.</p>
     <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px;margin-top:8px">${['Acercarse demasiado o tocar sin permiso','Culparte o minimizar lo que sientes','Dar por hecho que siempre estás disponible','Irrespetar tus opiniones','Usar tus cosas o tu dinero sin consentimiento'].map(x=>`<div style="background:#fbeee6;border-radius:12px;padding:8px;font-size:.88rem">⚠️ ${x}</div>`).join('')}</div>
     <p style="font-size:.9rem;margin-top:6px">Así se suelen cruzar los límites: a veces sin darse cuenta, a veces a propósito.</p>`,[],{chip:'¿Qué son?'});
  H('Mis tipos de límites','👆 Toca cada tipo y responde las preguntas de los que más te importan.',
    `<style>.lt-g{display:grid;gap:8px}.lt-c{border-radius:16px;padding:10px 12px}.lt-c summary{cursor:pointer;list-style:none;display:flex;gap:10px;align-items:center}.lt-c summary::-webkit-details-marker{display:none}.lt-c summary b{font-size:1.05rem}.lt-c summary span.ic{font-size:1.6rem;background:#fff8;border-radius:50%;width:44px;height:44px;display:grid;place-items:center}</style>
     <div class="lt-g">${T.map(([ic,n,col,d,Q],i)=>`<details class="lt-c" style="background:${col}"><summary><span class="ic">${ic}</span><span><b>Límites ${n.toLowerCase()}</b><br><small>${d}</small></span></summary>
       ${Q.map((q,j)=>`<label class="lab" for="lq${i}_${j}">${q}</label><textarea class="f" id="lq${i}_${j}" rows="2"></textarea>`).join('')}</details>`).join('')}</div>
     <label class="lab" for="lq_top">¿Cuál de estos límites me cuesta más poner?</label><input class="f" id="lq_top">`,
    [...T.flatMap(([ic,n,c,d,Q],i)=>Q.map((q,j)=>ta(`lq${i}_${j}`,`Límites ${n.toLowerCase()} · ${q}`))),inp('lq_top','El límite que más me cuesta')],{chip:'Mis tipos'});
  _ult().alCambiar=S=>document.querySelectorAll('.lt-c:not([data-ok])').forEach(d=>{ d.dataset.ok=1; if([...d.querySelectorAll('textarea')].some(t=>t.value.trim())) d.open=true; }); }
