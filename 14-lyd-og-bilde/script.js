const mal1 = document.querySelector("#mal1");
const mal2 = document.querySelector("#mal2");
const mal3 = document.querySelector("#mal3");
const film = document.querySelector("video");
const btnTale = document.querySelector("#btnTale");
const tale = document.querySelector("audio");
/*
mal1.onclick = function(){
  film.currentTime = 0;
}*/

mal1.onclick = () => film.currentTime = 75;

mal2.onclick = function(){
  film.currentTime = 75;
}

mal3.onclick = function(){
  film.currentTime = 230;
}

film.ontimeupdate = function(){
  if(film.currentTime < 75){
    mal1.classList.add("mal");
    mal2.classList.remove("mal");
    mal3.classList.remove("mal");
  }
  else if(film.currentTime < 230){
    mal1.classList.remove("mal");
    mal2.classList.add("mal");
    mal3.classList.remove("mal");
  }
  else{
    mal1.classList.remove("mal");
    mal2.classList.remove("mal");
    mal3.classList.add("mal");
  }
}
btnTale.onclick = () => tale.paused ? tale.play() : tale.pause();

btnTale.onclick = function(){

  if(tale.paused){
    tale.play();
  }
  else{
    tale.pause();
  }
}