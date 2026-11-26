/* MOVE · i blocchi di esempio e il posto dove stanno i blocchi.
   Lo usano TUTTE E DUE le pagine di Move (l'editor e la seduta): così i blocchi sono gli stessi di qua e di là.
   - Clienti veri: i blocchi sono quelli fatti con l'editor ('move-blocchi' in questo browser). Se non ce ne sono, non ce ne sono.
   - Clienti di esempio (demo): un elenco a parte ('move-blocchi-demo'), che parte con i blocchi qui sotto. Si possono cambiare,
     aggiungere, togliere: restano nella demo e non toccano mai i blocchi veri.
   Gli esercizi sono nomi veri del foglio Esercizi (colonna Move). Il cardio è vuoto: nel foglio non c'è ancora nessun esercizio con la voce Cardio.
   I nomi dei blocchi sono solo la posizione più un numero. */
var MOVE_ESEMPI = [
  {id:'es1', nome:'In piedi 1',    e:['Box Squat','Squat to Calf Raise'],                 cardio:'', pos:'In piedi'},
  {id:'es2', nome:'In piedi 2',    e:['Single Leg Balance','Hurdle Step Over'],           cardio:'', pos:'In piedi'},
  {id:'es3', nome:'In piedi 3',    e:['Wallslide','Wall Sit'],                            cardio:'', pos:'In piedi'},
  {id:'es4', nome:'Seduto 1',      e:['Box Leg Extension','Stick Seated Military Press'], cardio:'', pos:'Seduto'},
  {id:'es5', nome:'Seduto 2',      e:['Seated Ring Adduction','Seated Dorsal Extention'], cardio:'', pos:'Seduto'},
  {id:'es6', nome:'Supino 1',      e:['Elasti-Res Hip Bridge','1/2 DeadBug'],             cardio:'', pos:'Prono/Sup.'},
  {id:'es7', nome:'Quadrupedia 1', e:['Cat Camel','Legs Bird Dog'],                       cardio:'', pos:'Quadrupedia'}
];
function moveDemo(){
  try{ if(/[?&]demo=1/.test(location.search)) return true; }catch(e){}
  try{ return !!(window.parent && window.parent !== window && window.parent.MYM_DEMO); }catch(e){ return false; }
}
function moveChiave(){
  if(!moveDemo()) return 'move-blocchi';
  try{ if(localStorage.getItem('move-blocchi-demo') == null) localStorage.setItem('move-blocchi-demo', JSON.stringify(MOVE_ESEMPI)); }catch(e){}
  return 'move-blocchi-demo';
}
