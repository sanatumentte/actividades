/* TEPT p2–3, 7: qué es, síntomas y reacciones comunes (redacción propia). Sin narrativa del trauma. */
FICHA({clave:'tept-entender',titulo:'Entender el estrés postraumático',corto:'Entender el TEPT',carp:['trauma']});
{ const G=[['🔁','Revivir','#f6c7a8',['Recuerdos que llegan sin querer','Pesadillas','Mucha angustia ante algo que me lo recuerda']],
    ['🚪','Evitar','#bfdad3',['Evito lugares, personas o cosas','No quiero hablar ni pensar en eso','Me siento «apagado(a)» o desconectado(a)']],
    ['🌧️','Pensamientos y ánimo','#d9e4f3',['Veo el futuro sin esperanza','Me culpo o culpo a otros','Me cuesta sentir cosas buenas']],
    ['⚡','Estar en alerta','#f3d98b',['Siempre en guardia','Irritable o con explosiones','Me cuesta dormir o concentrarme']]];
  H('¿Qué es el estrés postraumático?','📖 Léelo con calma. Si algo te remueve mucho, detente y respira.',
    `<h2>🧠 Una alarma que se quedó encendida</h2>
     <p>Después de vivir o presenciar algo que amenazó tu vida o tu seguridad, es normal que el cuerpo y la mente reaccionen con fuerza. Si pasan semanas y no ceden (más de un mes), puede tratarse de estrés postraumático (TEPT); solo una evaluación profesional lo confirma. El sistema de alarma sigue funcionando como si el peligro continuara.</p>
     <p><b>No es debilidad ni culpa tuya</b>: es una respuesta del sistema nervioso, y tiene tratamiento.</p>
     <p style="font-size:.9rem">Reacciones frecuentes: miedo y alerta constante, rabia, culpa o vergüenza (muchas personas se culpan por lo que hicieron para sobrevivir), tristeza y ganas de aislarse.</p>`,[],{chip:'¿Qué es?'});
  H('Lo que noto en mí','👆 Toca lo que te pasa últimamente. No hace falta escribir sobre lo que ocurrió.',
    `<div style="display:grid;gap:8px">${G.map(([ic,n,col,L],g)=>`<div style="background:${col};border-radius:16px;padding:10px"><b>${ic} ${n}</b><div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:6px">${L.map((s,i)=>`<button type="button" class="f elegir" id="te${g}_${i}" aria-pressed="false">${s}</button>`).join('')}</div></div>`).join('')}</div>
     <label class="lab" for="te_o">✏️ Otro: escríbelo aquí</label><input class="f" id="te_o">
     <label class="lab" for="te_q">¿Qué es lo que más me afecta en el día a día?</label><textarea class="f" id="te_q" rows="2"></textarea>`,
    [...G.flatMap(([ic,n,c,L],g)=>L.map((s,i)=>chk(`te${g}_${i}`,`${n}: ${s}`))),inp('te_o','Otro'),ta('te_q','Lo que más me afecta')],{chip:'Lo que noto',nota:'Si marcas muchas o tienes ideas de hacerte daño, contacta hoy a tu psicóloga o a la Línea 123.'}); }
