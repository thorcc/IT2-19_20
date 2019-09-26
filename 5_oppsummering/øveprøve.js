/*
-------- Øveprøve IT2 ----------
Dato: 24 sep. 2019
Pensum: Input, output, variabler, valg og løkker.
Hjelpemidler: Se vedlegg siste side.
*/

// Oppgave 1
/*
a. Lag et program hvor brukeren først skriver inn navnet sitt,
   og deretter dukker det opp en melding på skjermen som starter
   med "Hei" og navnet på brukeren.
*/

let __________ = prompt("Hva heter du?");

alert(_________________________________________________);

/*
b. Utvid programmet slik at brukeren også skriver inn alder,
   deretter skal det dukke opp en beskjed med en melding og hvor mange år
   det er igen til brukeren er 50.
*/

let _________ = prompt("Hva heter du?");

let _________ = ________________________________________;

alert(__________________________________________________);

// Oppgave 2 - Tester
/*
Lag et program tar input fra brukeren og sjekker:
Skriv svarene ut i konsollen eller i en alert - boks.
Tips: For å logge i konsollen: console.log("beskjed" + variabel);
*/
//Ekstempel: Om et tall er lik 10.
let tall = Number((prompt("Skriv et tall")));

if(tall === 10){
  console.log("Tallet er lik 10!");
}
else{
  console.log("Tallet er IKKE lik 10!");
}

//1. Om et tall er større enn 6.

_____________________________________

_____________________________________

_____________________________________

_____________________________________

_____________________________________



//2. Om et tall er større enn 5 OG mindre eller lik 15.

_____________________________________

_____________________________________

_____________________________________

_____________________________________

_____________________________________

//3. Om en tekst er lik "Per".

_____________________________________

_____________________________________

_____________________________________

_____________________________________

_____________________________________

/*
Oppgave 3 - Løkker
*/
// 1. Lag en løkke som skriver ut tallene fra 1 til 10 i konsollen.
/* Tips: For å logge i konsollen i JS: console.log(variabel) */

for (__________________________________________) {

    _____________________________________

    _____________________________________

    _____________________________________

    _____________________________________

    _____________________________________
}

// 2. Lag en løkke og skriv ut 7 gangen i konsollen.

for (__________________________________________) {

    _____________________________________

    _____________________________________

    _____________________________________

    _____________________________________

    _____________________________________
}


// 3. Lag kode som skriver ut summen av alle tallene mellom 1 og 1000 i konsollen.

_____________________________________

_____________________________________

_____________________________________

_____________________________________

_____________________________________

// 4. Skriv ut alle partallene mellom 1 og 100 i konsollen.
// Tips: for å sjekke om et tall er partall: tall % 2 === 0.

_____________________________________

_____________________________________

_____________________________________

_____________________________________

_____________________________________

// 5. Tegn ti sirkler ved siden av hverandre på et P5 - canvas

function setup(){
  createCanvas(400, 400);
}

function draw(){
  background(220);

  _____________________________________

  _____________________________________

  _____________________________________

  _____________________________________

  _____________________________________
}















//6. Tegn 100 sirkler i et rutenett med ti i bredden og ti i høyden.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  _____________________________________

  _____________________________________

  _____________________________________

  _____________________________________

  _____________________________________
}

/* Oppgave 3 - Den lille gangetabellen
Lag den lille gangetabellen med en dobbel
for-løkke, og skriv ut tallene på et P5-canvas.
*/

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  _____________________________________

  _____________________________________

  _____________________________________

  _____________________________________

  _____________________________________
}

// Oppgave 4 - Arealkalkulator
/*
   a. Areal av et rektangel. Lag et program der brukeren kan
   skrive inn bredde og høyde, så skal programme gange
   sammen sidene og gi en melding om arealet av rektangelet.
*/
let hoyde = prompt("Hva er høyden?");
let bredde = prompt("Hva er bredden?");

_____________________________________

_____________________________________

_____________________________________

_____________________________________

/*
  b. Arealkalkulator med flere figurer:
  Lag en arealkalkulator hvor brukeren først kan skrive inn
  om figuren er et rektangel eller en sirkel, deretter
  bredde, høyde eller radius og til slutt skal brukeren
  få en beskjed med arealet av figuren sin.

  Tips: Arealet av en sirkel er pi*r^2.
        Pi i javascript er Math.PI
        r^2 er enten r*r eller Math.pow(r,2)
*/
// Skriv koden til programmet på linjene under, her må du skrive alt selv.

_____________________________________

_____________________________________

_____________________________________

_____________________________________

_____________________________________

_____________________________________

_____________________________________

_____________________________________

_____________________________________

_____________________________________

// Oppgave 5 - Kalkulator (Kan også gjøres på PC)
/*
Lag en kalkulator der brukeren kan taste inn to tall, og velge regneoperasjon (+,-,*,/).
Tips: Her må du bruke tre prompts().
*/

_____________________________________

_____________________________________

_____________________________________

_____________________________________

_____________________________________

_____________________________________

_____________________________________

_____________________________________

_____________________________________

_____________________________________

/*
Ekstraoppgaver på PC

### Oppgave 6 - Spørreprogram

Du skal lage et spørreprogram som stiller spørsmål du velger selv.
1. Lag et spørreprogram som har et spørsmål, bruk alert til å gi brukeren 
beskjed om svaret var riktig eller galt.
2. Lag minst fire spørsmål og opprett en variabel som holder kontroll på 
hvor mange riktige brukeren har. Når brukeren har svart på alle spørsmålene 
skal det dukke opp en beskjed med hvor mange poeng brukeren fikk sammen 
med en kommentar på hvor bra det gikk.

Oppgave 7 - Hour of code
Bruk 30 min på hour of code, http: //silentteacher.toxicode.fr/hourofcode

Oppgave 8 - Sprettende boble
Lag et canvas med en boble som beveger seg bortover skjermen og snur retning når den treffer en kant.

Oppgave 9 - Bruk javascript til å endre nettsiden
Søk på nettet og finn ut hvordan du kan lage input-elemeneter, hente ut verdier fra dem
og gjøre ting med nettsiden avhengig av hva som står i input-elementene

*/

/*
---- Vedlegg ----

for-løkke:
for(variabel; betingelse; endring){
  // kode som kjøres hver gang
}

---

if-setning:
if(betingelse){
  // kode
}
else if(betingelse2){
  // kode
}
else{
  // kode
}

*/
