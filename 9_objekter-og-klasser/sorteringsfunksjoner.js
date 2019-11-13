// Sorteringsfunksjoner
function tallLavTilHoy(a, b){
  return a - b;
}
function tallHoyTilLav(a, b){
  return b - a;
}

function bokstaverATilAA(a, b){
  a = a.toLowerCase();
  b = b.toLowerCase();
  if(a > b){
    return 1;
  }
  else{
    return -1;
  }
}

function bokstaverAATilA(a, b){
  a = a.toLowerCase();
  b = b.toLowerCase();
  if(a < b){
    return 1;
  }
  else{
    return -1;
  }
}

// Sortere objekter
// OBS! Her kan vi ikke bare klippe og lime. Her må vi vite hvilken egenskap vi skal sortere etter.
let personer = [
  {
   navn: "Thor",
   alder: 28
 },
 {
   navn: "Espen",
   alder: 30
 }
];

function sorterObjektPersoner(a, b){
  return a.alder - b.alder;
}
