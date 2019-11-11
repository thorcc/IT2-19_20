let riktige = 0;
let galt = 0;

let svar1 = prompt("Hvem er den beste læreren?");
if(svar1 === "Thor" || svar1 === "thor"){
  riktige = riktige + 1;
  alert("Riktig! Thor er skikkelig bra lærer!")
}
else{
  alert("Nei nei nei! Han er jo kjempegod!")
  galt = galt + 1;
}

let svar2 = prompt("Hva er hovedstaden i Mongolia?");
if(svar2 === "Ulan Bataar"){
  riktige = riktige + 1;
  alert("Du er kjempeflink i geografi, du får karakter 6!")
}
else{
  alert("NEI! DET MÅ DU VITE!!");
  galt = galt + 1;
}

alert("Du fikk: " + riktige + " poeng!");