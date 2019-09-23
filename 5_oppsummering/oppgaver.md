# Oppgaver - 5_Oppsummering

## Variabler og datatyper

### Oppgave 1 - input

a. Lag et program hvor brukeren skriver inn navnet sitt også dukker det opp en melding på skjermen som starter med "Hei" + navn på bruker.

b. Utvid programmet slik at brukeren også skriver inn alder, deretter skal det dukke opp en melding om hvor mange år det er igen til brukeren er 50.

Tips:  
1.
```
  let variabel = prompt("Beskjed");
  alert("Beksjed" + variabel);
```
2. Det er også mulig med flere `prompt()` og `alert()`.
3. Husk riktig datatype. For å konvertere til tall: `Number(tekst);`.

## if-setninger

### Oppgave 2 - Tester

Lag et program tar input fra brukeren og sjekker:  

1. Om et tall er lik 10.
2. Om et tall er større enn 6.
3. Om et tall er mindre enn 5 ELLER større enn 15.
4. Om et tall er større enn 5 OG mindre enn 15.
5. Om en string er lik "Per".  

Skriv svarene ut i konsollen eller i en alert-boks.  

Tips: For å logge i konsollen: `console.log("beskjed" + variabel)`;


## Varibaler, datatyper og if-setninger

### Oppgave 3 - Arealkalkulator

1. Rektangel: Lag et program der brukeren kan skrive inn bredde og høyde, så skal programme gange sammen sidene og gi en melding om arealet av rektangelet.
2. Areal og sirkel: Legg til funksjonalitet slik at brukeren først kan skrive inn om figuren er et rektangel eller en sirkel, deretter bredde, høyde eller radius og til slutt skal brukeren få en beskjed med arealet av figuren sin.

Tips:  
1.
```
  if(figur === "firkant"){
    // Gjør noe

  }
  else if(figur === "sirkel"){
    // Gjør noe

  }
```
2. Pi i javascript er `Math.PI`
3. r^2 er enten `r*r` eller `Math.pow(r,2)`

### Oppgave 4 - Spørreprogram

Du skal lage et spørreprogram som stiller spørsmål du velger selv.  
1. Lag et spørreprogram som har et spørsmål, bruk alert til å gi brukeren beskjed om svaret var riktig eller galt.  
2. Lag minst fire spørsmål og opprett en variabel som holder kontroll på hvor mange riktige brukeren har. Når brukeren har svart på alle spørsmålene skal det dukke opp en beskjed med hvor mange poeng brukeren fikk sammen med en kommentar på hvor bra det gikk.  


## Løkker

### Oppgave 5 - Enkle løkker
1. Lag en løkke og skriv ut tallene fra 1 til 10 i konsollen.
2. Lag en løkke og skriv ut 7 gangen i konsollen.
3. Skriv ut summen av alle tallene mellom 1 og 1000 i konsollen.
4. Skriv ut alle partallene mellom 1 og 100 i konsollen.  

Tips: For å sjekke om et tall er partall, bruk en if-setning og sjekk `tall % 2 === 0`.

### Oppgave 6 - Tegning med P5
1. Tegn ti sirkler ved siden av hverandre på et P5-canvas  
2. Tegn ti sirkler ti sirkler ved siden av hverandre og ti under hverandre på et canvas  
3. Tegn 100 sirkler i et rutenett med ti i bredden og ti i høyden.

### Oppgave 7 - Den lille gangetabellen
Lag den lille gangetabellen med en dobbel for-løkke, og skriv ut tallene på et canvas.

## Ekstra

### Oppgave 8 - Hour of code
Bruk 30 min på hour of code, http://silentteacher.toxicode.fr/hourofcode

### Oppgave 9 - Sprettende boble
Lag et canvas med en boble som beveger seg bortover skjermen og snur retning når den treffer en kant.

### Oppgave 10 - Hoppespill
Lag et hoppespill med P5-canvas.