/* Gratitud: Roda p45 (corazón), preguntas de p46 con redacción propia (el texto original exageraba) y diario p51. */
FICHA({clave:'gratitud',titulo:'Mi gratitud: corazón y diario',corto:'Gratitud',carp:['depresion','autoestima']});
H('¿Qué es practicar la gratitud?','📖 Lee y responde lo que te salga, sin forzarte.',
  `<h2>🧡 Notar lo bueno</h2>
   <p>Practicar la gratitud es detenerte a notar y anotar lo bueno que hay en tu día, grande o pequeño. Se asocia con un pequeño aumento
   del bienestar. No se trata de negar lo difícil ni de «tener que» sentirte agradecido(a): es una práctica más, que complementa tu proceso.</p>
   <label class="lab" for="gr_v">Agradezco mi vida porque…</label><textarea class="f" id="gr_v" rows="2"></textarea>
   <label class="lab" for="gr_c">Agradezco a mi cuerpo porque…</label><textarea class="f" id="gr_c" rows="2"></textarea>
   <label class="lab" for="gr_f">Agradezco a mi familia (o a quienes son mi familia) porque…</label><textarea class="f" id="gr_f" rows="2"></textarea>
   <label class="lab" for="gr_a">Agradezco a mis amigos porque…</label><textarea class="f" id="gr_a" rows="2"></textarea>`,
  [ta('gr_v','Agradezco mi vida porque'),ta('gr_c','Agradezco a mi cuerpo porque'),ta('gr_f','Agradezco a mi familia porque'),ta('gr_a','Agradezco a mis amigos porque')],
  {chip:'Gratitud',nota:'La gratitud no sustituye el tratamiento. Si hoy no te sale nada, está bien: vuelve otro día.'});
{ const N=[[280,572],[230,677],[258,803],[329,742],[432,531],[406,677],[394,773],[348,927],[431,927],[546,887],[624,762],[521,1088],[648,642],[660,1015],[744,572],[729,904],[748,741],[802,803],[842,682],[831,943]];
  const CX=[84,220,359,488], LY=[675,693,710,727,744];
  P('roda-autocuidado',45,'Gratitud en el corazón','✍️ Escribe abajo, en cada número, una persona, lugar o cosa que agradeces. Luego toca ese número en el corazón para pintarlo.',
    [...N.map(([x,y],i)=>pinta('gc_p'+i,`Corazón: espacio ${i+1} pintado`,Math.round(x*.54)-13,Math.round(y*.54)-13,26,26)),
     ...CX.flatMap((x,c)=>LY.map((y,r)=>inp('gc_'+(c*5+r),`Gratitud ${c*5+r+1}`,x,y-15,86,15)))],{chip:'Mi corazón'}); }
P('roda-autocuidado',51,'Mi diario de gratitud','✍️ Úsalo al final del día. Toca el corazón de tu ánimo (1 a la izquierda, 5 a la derecha).',
  [inp('gd_f','Fecha',98,135,220,27),...[704,773,845,906,972].map((x,k)=>nivel('gd_h'+k,`Ánimo ${k+1}/5`,'Mi estado de ánimo hoy (1–5)',Math.round((x-22)*.54),144,24,24)),
   ta('gd_fr','Frase del día',115,240,420,60),...lineas('gd_r','6 razones por las que estoy agradecido(a) hoy',97,[365,394,427],212),...lineas('gd_r2','6 razones por las que estoy agradecido(a) hoy',333,[365,394,427],212),
   ...lineas('gd_s','Motivos para reír y sonreír',95,[495,529],450),...lineas('gd_e','Cosas que espero con ganas hoy',92,[595,629],450),...lineas('gd_a','Autorreflexión',92,[688,721],450)],{chip:'Mi diario'});
