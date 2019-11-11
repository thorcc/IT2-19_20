const imgSlide = document.querySelector("#imgSlide");
const btnNeste = document.querySelector("#btnNeste");

const bilder = ["bilder/bonus.jpg","bilder/kart.jpg","bilder/luther500logo.png","bilder/lutherTegning.png","bilder/skysportsLuther.png"];
let bildeNr = 0;

btnNeste.onclick = nesteBilde;

function nesteBilde(){
  if(bildeNr >= bilder.length - 1){
    bildeNr = 0;
  }
  else{
    bildeNr += 1;
  }
  imgSlide.src = bilder[bildeNr];
}
