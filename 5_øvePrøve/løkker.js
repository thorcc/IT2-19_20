// Oppgave 5.1

// Løsning med while
let i = 1; // Definerer en global variabel i, som skal fungere som telleren i løkka
while(i <= 10){ // Så lenge i er mindre eller lik 10, skal løkka kjøre
  console.log(i * 7); // Logger i i konsollen

  i = i + 1; // Legger en til i, disse tre linjene gjør akkurat det samme
  // i += 1; disse tre linjene gjør akkurat det samme
  // i++; disse tre linjene gjør akkurat det samme
}

// Løsning med for
/*
for(oppretter en teller; betingelsen, løkka kjører så lenge den er True; Hva som skal skje med telleren){
  // Koden i løkka
}

*/

for(let i = 1; i <= 10; i += 1){
  console.log(i);
}

// Oppgave 5.3
/*
let sum = 0;
for(let i = 0; i <= 100000; i += 1){
  sum += i;
}
console.log(sum);
*/

// Oppgave 5.4
for(let i = 0; i <= 100; i += 1){
  if(i % 2 === 0){
    console.log(i);
  }
}