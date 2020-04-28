const armstrekkeren = document.querySelector('#armstrekkeren');
const bredeRyggmuskel = document.querySelector('#brede-ryggmuskel');
const lydArm = document.querySelector('#lyd-arm');
const lydRygg = document.querySelector('#lyd-rygg');
const tekst = document.querySelector('#tekst');

const animasjon = [{left:'-50%'},{left:'50%'}];
const settings = {duration: 4000, easing:'ease'};

armstrekkeren.onclick = () => {
  tekst.innerHTML = 'Armstrekkeren';
  let tekstAni = tekst.animate(animasjon,settings);

  lydArm.play();
}

bredeRyggmuskel.onclick = () => {
  tekst.innerHTML = 'Brede ryggmuskel';
  let tekstAni = tekst.animate(animasjon,settings);

  lydRygg.play();
}


