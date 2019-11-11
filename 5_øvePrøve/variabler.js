//alert("Javascriptet er lastet");

let mittTall = 23;

// Output
console.log(mittTall); // console.log(variabel); logger i konsollen
console.log("Mitt tall er",mittTall);
alert("Mitt tall er " + (mittTall + 52)); // alert(variabel); lager en popup-boks med en beskjed i konsollen

// Input
let brukersTall = Number(prompt("Skriv et tall")); // Lager en prompt-boks hvor brukeren kan skrive inn et tall, gjør dette tallet om til et tall med Number(tekst)
let brukersTall2 = Number(prompt("Skriv et annet tall"));

console.log(brukersTall + brukersTall2);

// Datatyper

// Enkle datatyper
let tall = 25; // Datatypen number
let desimaltall = 25.7; // Datatypen number

let tekst = "Hallo dett er en tekst"; // Datatypen string
let tekst2 = "42"; // Dette er også en string, vi må huske å konvertere til number

let tall3 = Number(tekst2); // Datatypen number

let bool1 = True; // Datatypen boolean
let bool2 = False; // Datatypen boolean

// Indekserte variabler / indekserte datatyper

let mittObjekt = {
  navn: "Thor Christian",
  alder: 28,
  yrke: "lærer"
}

let minListe = ["Thor","Ravi","Fredrik",25,65,True,mittObjekt];

minListe[6].navn = "Per";