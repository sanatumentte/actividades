/* Espiral de la depresión p1–3: qué es (redacción propia, el PDF tenía errores) + «Comprendiendo mi depresión» (p3 con campos). */
FICHA({clave:'dep-entender',titulo:'Entender mi depresión',corto:'Entender la depresión',carp:['depresion']});
{ const ilus=recorte('img/espiral-depresion/p01.jpg',95,15,210,210,1200,1467), M=['Cuerpo','Pensamientos','Comportamiento'],
    D=['Cansancio, cambios en el sueño y el apetito, dolores, poca energía.','Desesperanza, sentirme insuficiente, culpa, me cuesta concentrarme.','Aislarme, dejar de hacer lo que disfrutaba, me cuestan las tareas diarias.'];
  H('¿Qué es la depresión?','📖 Léelo con calma.',
    `<div style="display:grid;grid-template-columns:96px 1fr;gap:12px;align-items:center"><div style="border-radius:50%;overflow:hidden">${ilus}</div><h2 style="margin:0">Más que estar triste</h2></div>
     <p>La depresión es un problema de salud frecuente y tratable. No es cualquier tristeza: dura semanas y afecta tu día a día: el ánimo, el interés por las cosas, el sueño, el apetito, la energía, la concentración y la forma de verte a ti y al futuro.</p>
     <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:8px">${M.map((m,i)=>`<div style="background:#fbe7dc;border-radius:14px;padding:10px"><b style="color:#5b6fa8">${m}</b><div style="font-size:.9rem">${D[i]}</div></div>`).join('')}</div>
     <p style="margin-top:10px"><b>No es tu culpa.</b> No es pereza, debilidad ni un defecto de carácter, y no se supera solo «con fuerza de voluntad».</p>
     <p>Suele surgir de una <b>combinación</b> de factores: situaciones estresantes o pérdidas, factores biológicos y genéticos (tener familiares con depresión aumenta el riesgo, no lo determina), rasgos como la autocrítica o el perfeccionismo, pensamientos negativos y conductas como aislarse, que la mantienen.</p>
     <p>Con tratamiento (psicoterapia y, cuando el profesional lo considere, medicación indicada por un médico) la mayoría de las personas mejora, aunque puede tomar tiempo.</p>
     <label class="lab" for="de0">¿Qué de esto me pasa a mí?</label><textarea class="f" id="de0" rows="3"></textarea>`,
    [ta('de0','Lo que me pasa a mí')],{chip:'¿Qué es?',nota:'Si tienes pensamientos de morir o de hacerte daño, cuéntaselo hoy a tu psicóloga o llama a la Línea 123.'});
  const Y=[382,552,722,890,1060,1230], L=['El medio ambiente (situaciones, pérdidas, estrés)','Lo biológico y la salud física','Mi forma de ser (autocrítica, perfeccionismo…)','Mis pensamientos','Mis comportamientos','Mi familia (antecedentes)'];
  P('espiral-depresion',3,'Comprendiendo mi depresión','✍️ ¿Qué factores pudieron contribuir en tu caso? Puedes dejar vacías las que no apliquen.',
    Y.map((y,i)=>ta('dc'+i,L[i],157,Math.round((y+42)*.54),345,Math.round(92*.54),{ph:' '})),{chip:'Mis factores'}); }
