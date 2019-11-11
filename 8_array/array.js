// Array (lister)

// Definere en array
let minArray = ["Thor","Per","Pål",23];

// Hente ut en verdi fra et array
console.log(minArray[1]); // Per

// Legge til verdi i array
minArray.push("Kong Harald");
console.log(minArray);

// Fjerne en verdi fra et array
minArray.splice(1,2);
console.log(minArray);

/*
.splice() fjerner verdier fra et array,
det første tallet er startposisjonen
og det andre tallet er antall som skal fjernes.
*/

// Sortere arrays

let bokstaver = ["q","D","a","t"];
bokstaver.sort(alfabetisk);
console.log(bokstaver);

function alfabetisk(a, b){
 a = a.toLowerCase();
 b = b.toLowerCase();
 if(a > b){
   return 1;
 }
 else{
   return -1;
 }
}

// Sortere tall
let mineTall = [7,2,5,19,1];
mineTall.sort(tall);
console.log(mineTall);

function tall(a, b){
  return a - b;
}


// Prøv selv s. 206


let tre = ["lønn", "hassel", "eik", "blodlønn", "furu", "gran"];

function alfabetisk(a, b){
 a = a.toLowerCase();
 b = b.toLowerCase();
 if(a > b){
   return 1;
 }
 else{
   return -1;
 }
}

tre.sort(alfabetisk);
console.log(tre);




/// Oppgaver
/*
 Gå gjennom kapittel 8.2
 Gjør prøv selv s. 210
*/
