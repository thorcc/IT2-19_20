# Løkker

### Ressurser
- [Fagtekst løkker](https://github.com/fagstoff/IT2/blob/master/Fagtekster/Lokker.md)  
- Kode2 - 4.4 og 4.5 (s. 87 - 94)
- [YT: while-løkker (Norsk)](https://www.youtube.com/watch?v=agBmm-nhpJQ&index=4&list=PLJC9cL8YfNXo_CUCsG17Nr5e1Zv8jm9HW)
- [YT: for-løkker (Norsk)](https://www.youtube.com/watch?v=cwEvgSA4LxQ&index=3&list=PLJC9cL8YfNXo_CUCsG17Nr5e1Zv8jm9HW)
- [Coding train: 4.1: while and for Loops](https://www.youtube.com/watch?v=cnRD9o6odjk&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&t=0s)
- [Coding train: 4.2: Nested Loops](https://www.youtube.com/watch?v=1c1_TMdf8b8&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=19)

### Oppgave 1 - while
1. Lag en while-løkke som skriver ut tallene fra 0 til 100 i konsollen. (Tips: lag løkken utenfor draw)
2. Lag en while-løkke som skriver ut 8-gangen i konsollen.
3. Lag en while-løkke som tegner 10 vanrette streker under hverandre på canvaset.
4. Endre while-løkken slik at du nå tenger 100 vanrette streker.


### Oppgave 2 - for
1. Lag en for-løkke som skriver ut tallene fra 0 til 100.
2. Sammenlign denne løkken med den fra oppgave 1. Hvilken løkke mener du er best egnet til å løse disse oppgavene?
3. Tegn 20 sirkler på canvaset.

### Oppgave 3 - Matte
1. Bruk en dobbel for-løkke til å skrive ut den lille gangetabellen på canvaset ([tips: p5js-text](https://p5js.org/reference/#/p5/text))
2. Bruk en for løkke til å skrive ut de ti første Fibonaccitallene på en nettside (tips: se s. 92 i boken).

### Oppgave 4 - Sanger
1. Lag en nettside som genererer hele sangteskten til Daft Punks *Around The World*. [Finn teksten her](https://genius.com/Daft-punk-around-the-world-lyrics)
(tips: les kommentarene)

2. Lag en nettside som genererer den "egentlige" teksten til Lil Pumps *Gucci gang*.  
(teksten går egentlig slik: "*gucci gang (9 ganger)* + *spend three racks on new chains*", alt dette repeteres 74 ganger.)

3. Lag en nettside som genererer en forenklet versjon av The Trashmen sin Surfin' bird.   
(hint: løkker, if og partall)    
(hint 2: partall kan sjekkes i JS ved å bruke modulo (tall % 2 ===0))

Tekst:  
A well a everybody's heard about the bird  
B-b-b bird, bird, bird, b-bird's the word  

A well a bird, bird, bird, the bird is the word  
A well a bird, bird, bird, well the bird is the word  
A well a bird, bird, bird, the bird is the word   
A well a bird, bird, bird, well the bird is the word  
A well a bird, bird, bird, the bird is the word   
A well a bird, bird, bird, well the bird is the word  
A well a bird, bird, bird, the bird is the word   

A well a don't you know about the bird?  
Well, everybody knows that the bird is the word!  

A well a bird, bird, bird, the bird is the word  
A well a bird, bird, bird, well the bird is the word  
A well a bird, bird, bird, the bird is the word   
A well a bird, bird, bird, well the bird is the word  
A well a bird, bird, bird, the bird is the word   
A well a bird, bird, bird, well the bird is the word  
A well a bird, bird, bird, the bird is the word  

Surfin' bird  
B-b-b aah, aah!

Denne koden kan kopieres:

       let vers1 = "A well a everybody's heard about the bird B-b-b bird, bird, bird, b-bird's the word";
       let vers2 = "Surfin' bird  B-b-b aah, aah!";
       let vers3 = "A well a don't you know about the bird? Well, everybody knows that the bird is the word!";
       let refreng1 = "A well a bird, bird, bird, the bird is the word";
       let refreng2 = "A well a bird, bird, bird, well the bird is the word";