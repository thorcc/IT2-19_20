const bilde = document.querySelector('#bilde');
const bilderamme = document.querySelector('.bilderamme');
let zoomrate = 1;



bilderamme.onmousemove = function(event){
  console.log("x:",event.clientX);
  console.log("y:",event.clientY);
  console.log(bilderamme.offsetLeft);

  bilde.style.width = 1000 * zoomrate + "px";
  if(zoomrate != 1){
    bilde.style.marginLeft = zoomrate * (3/4) * (-event.clientX + bilderamme.offsetLeft) + "px";
    bilde.style.marginTop = zoomrate * (3/4) * (-event.clientY + bilderamme.offsetTop) + "px";
  }
}

bilderamme.onmouseout = function(){
  bilde.style.width = 100 + "%";
  bilde.style.marginLeft = 0;
  bilde.style.marginTop = 0;
}

bilde.onclick = function(){
  zoomrate *= 2;
}
window.onresize = function(){
  console.log(window.innerWidth);
}