/* Cartas de autocuidado (químicos de la felicidad): cada carta se voltea al tocarla.
   Frente = la parte de arriba de la carta original (químico, actividad e ilustración); reverso = la carta completa. */
FICHA({clave:'cartas-autocuidado',titulo:'Cartas de autocuidado: mis químicos de la felicidad',corto:'Cartas de autocuidado',carp:['depresion','emociones'],
  intro:`<p>Cada carta es una idea para cuidarte activando tus «químicos de la felicidad»: dopamina, serotonina, oxitocina y endorfinas. Toca una carta para voltearla y ver qué pasa en tu cerebro y cómo hacerlo.</p><p>Marca con ⭐ las que vas a probar esta semana.</p>`});
{
const Q={D:['Dopamina','#f4c7a1'],S:['Serotonina','#bfe3c8'],O:['Oxitocina','#f6c6d4'],E:['Endorfinas','#d7cdf2']};
const C=[
  [2,0,'S','El regulador del estado de ánimo'],[2,1,'E','El remedio para el dolor'],[2,2,'D','Ejercicio'],[2,3,'E','Acupuntura'],
  [3,0,'E','Comer algo picante'],[3,1,'E','Arte'],[3,2,'E','Bailar'],[3,3,'E','Jugar'],
  [4,0,'E','Viajes en el tiempo'],[4,1,'O','Conectarte en internet'],[4,2,'O',"Usar la letra «A»"],[4,3,'O','Un baño caliente y agradable'],
  [5,0,'O','Jugar con tu mascota'],[5,1,'O','Compartir tus sentimientos'],[5,2,'O','Ser amable'],[5,3,'O','Abrazar'],
  [6,0,'O','Amigos'],[6,1,'S','Practicar la gratitud'],[6,2,'S','Recordar'],[6,3,'S','Definir objetivos'],
  [7,0,'S','Noticias'],[7,1,'S','Aromaterapia'],[7,2,'S','Gratitud'],[7,3,'S','Masaje'],
  [8,0,'S','Reír'],[8,1,'D','Consciencia'],[8,2,'D','Comer chocolate'],[8,3,'D','Luz del sol'],
  [9,0,'D','Dieta'],[9,1,'D','Dormir'],[9,2,'D','Música'],[9,3,'D','Pequeñas victorias']];
const IMG=n=>`img/cartas-autocuidado/p${String(n).padStart(2,'0')}.jpg`, PW=1200, PH=1467, QW=600, QH=733.5;
const carta=([pg,q,k,t],i)=>{ const x=(q%2)*QW, y=(q>1?1:0)*QH;
  return cartaFlip(
    `${recorte(IMG(pg),x,y,QW,QH*.5,PW,PH)}<span class="carta-hint" style="background:${Q[k][1]}">👆 Toca para voltear</span>`,
    recorte(IMG(pg),x,y,QW,QH,PW,PH),
    `<button type="button" class="f elegir" id="ca_${i}" aria-pressed="false">⭐ La voy a probar</button>`,`data-quim="${k}"`); };
H('Mis químicos de la felicidad','',
  `<h2>¿Qué son los químicos de la felicidad?</h2>${recorte(IMG(1),0,0,PW,PH,PW,PH)}`,[],{chip:'Qué son'});
H('Mis cartas','👆 Toca una carta para voltearla. Usa los botones para ver solo un químico, y marca con ⭐ las que vas a probar.',
  `<h2>Mis cartas de autocuidado</h2><div class="filtros" role="group" aria-label="Filtrar por químico"><button type="button" data-filtro="" aria-pressed="true">Todas</button>${Object.entries(Q).map(([k,[n]])=>`<button type="button" data-filtro="${k}" aria-pressed="false">${n}</button>`).join('')}</div>
   <div class="cartas" id="caMazo">${C.map(carta).join('')}</div>
   <label class="lab" for="ca_plan">Mi plan: ¿cuándo, dónde y con quién las voy a hacer?</label><textarea class="f" id="ca_plan" placeholder="Ej.: El sábado en la mañana salgo a caminar al sol con mi hermana…"></textarea>`,
  [...C.map(([pg,q,k,t],i)=>chk('ca_'+i,`${t} (${Q[k][0]})`,0,0,0,0,{g:'Cartas que voy a probar'})),ta('ca_plan','Mi plan')],{chip:'Mis cartas'});
document.addEventListener('click',e=>{ const b=e.target.closest('[data-filtro]'); if(!b) return; const k=b.dataset.filtro;
  b.parentElement.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b));
  document.querySelectorAll('#caMazo [data-quim]').forEach(c=>{ c.hidden=!!k&&c.dataset.quim!==k; }); });
}
