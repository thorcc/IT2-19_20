const inpFarge = document.querySelector("#inpFarge"); // oppretter en variabel som refererer til HTML-elementet med id inpFarge

function byttBakgrunn(){
  // Oppretter en funksjon som endrer bakgrunnsfarge på hele nettsiden til verdien i input-feltet
  document.body.style.transition = "0.8s"; // Setter på en liten overgang
  document.body.style.backgroundColor = inpFarge.value; // Endrer bakgrunnsfarge
}

inpFarge.oninput = byttBakgrunn; // Knytter funksjonen byttBakgrunn til hendelsen oninput på input-feltet