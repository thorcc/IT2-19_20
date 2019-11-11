// --- Funksjoner ---

// 2 grunner til å bruke Funksjoner
// 1. Oppdeling av kode
// 2. Gjenbruk av kode

// --- Skrivemåte ---

// Funksjonsdefinisjon
function siHei(){
  console.log("Hei!");
}

// Funksjonskall
siHei();


// --- Hendelser ---

window.onclick = siHei;

const overskrift1 = document.querySelector("#overskrift1");

overskrift1.onclick = byttTekst;


function byttTekst(){
  let navn = "Thor";
  overskrift1.innerHTML += `
    <div>
      Hei på deg ${navn}!
    </div>
  `;
}


overskrift1.style.backgroundColor = "blue";
overskrift1.style.fontSize = "blue";
overskrift1.style.color = "white";
