/* Entendiendo la ansiedad p19: carta a mi ansiedad (externalización, terapia narrativa). Rediseño con la foto del PDF. */
FICHA({clave:'carta-ansiedad',titulo:'Carta a mi ansiedad',corto:'Carta a mi ansiedad',carp:['ansiedad']});
{ const foto=recorte('img/entendiendo-ansiedad/p19.jpg',620,264,518,517,1200,1217);
  const P5=[['Saluda a tu ansiedad','¿Cómo la llamarías? ¿Tiene forma, color, voz? Descríbela como algo separado de ti.'],
    ['Dile cómo te ha afectado','¿Qué te ha impedido hacer? ¿Cómo ha cambiado tu vida?'],
    ['Reconoce lo que intenta hacer','A veces la ansiedad «cree» que te protege. ¿De qué intenta protegerte?'],
    ['Haz un nuevo acuerdo','¿Qué necesitas de ella? ¿Qué espacio le das y qué límites le pones?'],
    ['Cierra con compasión','La ansiedad no va a desaparecer del todo: ¿cómo quieres convivir con ella de ahora en adelante?']];
  const parte=(i)=>`<div style="background:#f4f7fb;border-radius:16px;padding:12px"><b style="color:#047578">${String(i+1).padStart(2,'0')} · ${P5[i][0]}</b><div style="font-size:.9rem;margin:2px 0 6px">${P5[i][1]}</div><textarea class="f" id="ca${i}" rows="3"></textarea></div>`;
  H('Escribe tu carta','✍️ Escríbele a tu ansiedad como si fuera un personaje, no tú. Sin respuestas correctas.',
    `<style>.ca-g{display:grid;gap:10px}@media(min-width:720px){.ca-top{display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:center}}</style>
     <div class="ca-top"><div><h2>✉️ Querida ansiedad…</h2><p>Mirarla como algo separado de ti ayuda a observarla con más calma y menos miedo, y a recordar que tú eres más que tu ansiedad (aunque lo que decides hacer sigue siendo tuyo).</p></div><div style="border-radius:16px;overflow:hidden">${foto}</div></div>
     <div class="ca-g">${[0,1].map(parte).join('')}</div>`,
    [0,1].map(i=>ta('ca'+i,P5[i][0])),{chip:'Mi carta (1)'});
  H('Termina tu carta','',`<div class="ca-g">${[2,3,4].map(parte).join('')}</div>
     <details style="margin-top:10px"><summary style="cursor:pointer;font-weight:800;color:#047578">➕ Opcional: la respuesta de tu ansiedad</summary>
     <p style="font-size:.9rem">¿Qué te diría ella si pudiera hablar? Escríbelo y llévalo a sesión: suele mostrar creencias que vale la pena explorar juntas.</p><textarea class="f" id="ca5" rows="4"></textarea></details>`,
    [...[2,3,4].map(i=>ta('ca'+i,P5[i][0])),ta('ca5','La respuesta de mi ansiedad')],{chip:'Mi carta (2)',nota:'Si al escribir sientes un malestar muy fuerte, para, usa tu técnica de calma y llévalo a sesión. Este ejercicio complementa tu proceso, no lo reemplaza.'}); }
