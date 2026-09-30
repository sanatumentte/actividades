/* Tabla TAC (Plantilla TAC, pág. 25): la tabla venía girada; aquí va vertical, una tarjeta por situación. */
FICHA({clave:'tabla-tac',titulo:'Mi tabla TAC: aceptar, elegir dirección y actuar',corto:'Tabla TAC',carp:['valores','ansiedad']});
{
const PASOS=[['ev','Identifica el evento que desencadenó la reacción','#e6eef0'],['pen','Identifica el pensamiento dañino','#f4c2ad'],['ace','Acepta tus reacciones (A)','#f8dca8'],['dir','Elige una dirección alineada con tus valores (D)','#dfeef0'],['med','Toma medidas (T)','#f4d4d0']];
const CSS=`<style>.tt-ADT{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.tt-ADT div{border-radius:18px;padding:12px;text-align:center}.tt-ADT b{font-family:'DM Serif Display',Georgia,serif;font-size:2rem;display:block;line-height:1}
 .tt-sit{border:1px solid var(--beige);border-radius:18px;padding:12px;display:grid;gap:8px}.tt-sit h3{color:#c9987c}.tt-p{border-radius:14px;padding:8px 10px;background:var(--c)}.tt-p label{font-weight:800;color:#1f3d45;font-size:.9rem;display:block;margin-bottom:4px}
 .sec .tt-p textarea.f{background:#fff;min-height:60px}</style>`;
H('Aceptar, dirigir y tomar medidas','',CSS+`<h2>Terapia de aceptación y compromiso</h2><div class="tt-ADT"><div style="background:#fdd5cc"><b>A</b>Acepta tus reacciones y está presente.</div><div style="background:#cfd6de"><b>D</b>Elige una dirección alineada con tus valores.</div><div style="background:#f8dca8"><b>T</b>Toma medidas.</div></div>`,[],{chip:'A · D · T'});
H('Mi tabla TAC','✍️ Llena una tarjeta por cada situación difícil. Puedes usar hasta cinco.',
  `<h2>Mis situaciones</h2>${[0,1,2,3,4].map(i=>`<div class="tt-sit"><h3>Situación ${i+1}</h3>${PASOS.map(([k,l,c])=>`<div class="tt-p" style="--c:${c}"><label for="tt${i}_${k}">${l}</label><textarea class="f" id="tt${i}_${k}" rows="2"></textarea></div>`).join('')}</div>`).join('')}`,
  [0,1,2,3,4].flatMap(i=>PASOS.map(([k,l])=>ta(`tt${i}_${k}`,`Situación ${i+1} · ${l}`))),{chip:'Mi tabla'});
}
