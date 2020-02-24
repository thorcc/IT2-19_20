const video = document.querySelector("#video");
const btnStart = document.querySelector("#btnStart");
const rakett = document.querySelector("#rakett");
const slider = document.querySelector("#slider");
const status = document.querySelector("#status");
const speed = document.querySelector("#speed");

const animasjon = rakett.animate(
    [
        {bottom: "0%"}, // Start (0%) 
        {bottom: "100%"}, // Etter 33% av tiden
        {bottom: "200%"}, // Etter 66% av tiden
        {bottom: "0%"} // Slutt (100%)
    ],{
        duration: 65000, // Hele animasjonen varer i 65s
        delay: 15000, // Venter 15s før animasjonen starter
        easing: "ease-in" // animasjonen går saktere i starten
    })

animasjon.pause(); // Pauser animasjonen når siden lastes

btnStart.onclick = function(){ // Funksjon som kjøres når start-knappen trykkes på
    video.play(); // Starter film
    animasjon.play(); // Starter animasjon
}

speed.innerHTML = slider.value; // Setter speed-elementet sin innerHTML til å være lik verdien av slideren når nettsiden lastes

slider.onchange = function(){ // Funksjon som kjører når slideren endres
    video.playbackRate = slider.value; // Oppdaterer farten på filmen
    animasjon.updatePlaybackRate(slider.value); // Oppdaterer farten på animasjonen
    speed.innerHTML = slider.value; // Oppdaterer speed-elementet
}

video.ontimeupdate = function(){ // Funksjon som kjører når tiden på filmen endres
    if(video.currentTime < 20){ // Sjekker om tiden på filmen er under 20
        status.innerHTML = `Preparing lift-off`; // Oppdaterer status-elementet
    }
    else if(video.currentTime < 65){
        status.innerHTML = `In space`;
    }
    else if(video.currentTime < 80){
        status.innerHTML = `Landing`;
    }
    else{
        status.innerHTML = `On the moon`;
    }
}