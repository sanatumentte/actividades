/* Pesadillas: ensayo en imaginación (IRT, Krakow) con redacción propia (Roda p18 tenía afirmaciones sin respaldo) + relajación p17.
   Condicionada: solo si se explicó en sesión; no con trauma activo ni riesgo. */
FICHA({clave:'pesadillas',titulo:'Pesadillas: un nuevo final',corto:'Pesadillas',carp:['trauma','general']});
H('Antes de empezar','⚠️ Haz este ejercicio solo si tu psicóloga te lo explicó en sesión.',
  `<h2>🌙 Reescribir una pesadilla</h2>
   <p>Cuando una pesadilla se repite, el cerebro la «ensaya» sin querer. Este ejercicio (terapia de ensayo en imaginación) propone crear
   una versión nueva del sueño, cambiada como tú quieras, y practicarla despierto(a) para que tu mente tenga otro camino.</p>
   <div style="display:grid;gap:8px">
    <div style="background:#eef6f4;border-radius:14px;padding:10px 12px"><b>1. Elige una pesadilla</b> que se repita y que no sea la más intensa. Para empezar, mejor una de menor intensidad.</div>
    <div style="background:#eef6f4;border-radius:14px;padding:10px 12px"><b>2. No la revivas:</b> no hace falta escribirla con detalle. Basta con un título o una frase.</div>
    <div style="background:#eef6f4;border-radius:14px;padding:10px 12px"><b>3. Cámbiala como quieras:</b> el cambio puede ser en cualquier momento y de cualquier forma: un final distinto, un lugar distinto, alguien que te ayuda…</div>
    <div style="background:#eef6f4;border-radius:14px;padding:10px 12px"><b>4. Escribe el nuevo sueño</b> de principio a fin, con detalles agradables (lugares, colores, olores).</div>
    <div style="background:#eef6f4;border-radius:14px;padding:10px 12px"><b>5. Ensáyalo</b> despierto(a) unos 10–20 minutos al día, en un momento tranquilo.</div></div>`,[],
  {chip:'Cómo funciona',nota:'Si al pensar en la pesadilla sientes mucha angustia, detente, usa tu técnica de calma y trabájalo con tu psicóloga en sesión.'});
H('Mi nuevo sueño','✍️ Escribe solo lo necesario de la pesadilla y dedica tu energía al nuevo sueño.',
  `<h2>✨ Mi nuevo final</h2>
   <label class="lab" for="ps1">La pesadilla en una frase (sin detalles)</label><input class="f" id="ps1">
   <label class="lab" for="ps2">¿Qué voy a cambiar?</label><textarea class="f" id="ps2" rows="2"></textarea>
   <label class="lab" for="ps3">Mi nuevo sueño, de principio a fin</label><textarea class="f" id="ps3" rows="7"></textarea>
   <label class="lab" for="ps4">Malestar al pensar en la pesadilla antes de empezar (0–10)</label><input class="f" id="ps4" type="number" min="0" max="10">
   <h3>Mis ensayos</h3>
   <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:6px">${[...Array(7).keys()].map(i=>`<button type="button" class="f" id="ps_e${i}" aria-pressed="false" style="border-radius:12px">✓ Día ${i+1}</button>`).join('')}</div>
   <label class="lab" for="ps5">Después de una semana: ¿qué noté? (frecuencia, intensidad, malestar 0–10)</label><textarea class="f" id="ps5" rows="3"></textarea>`,
  [inp('ps1','La pesadilla en una frase'),ta('ps2','Lo que voy a cambiar'),ta('ps3','Mi nuevo sueño'),inp('ps4','Malestar antes (0–10)'),
   ...[...Array(7).keys()].map(i=>chk('ps_e'+i,`Ensayo día ${i+1}`)),ta('ps5','Lo que noté después de una semana')],{chip:'Mi nuevo sueño'});
P('roda-autocuidado',17,'Relajación para dormir: un tren somnoliento','🎧 Léelo despacio antes de dormir, o pide que te lo lean.');
