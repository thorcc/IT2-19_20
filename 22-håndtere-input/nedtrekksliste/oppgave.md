# Oppgave - Byer og info

## 1. Innbyggertall - nedtrekksliste med objekt

Lag et program som gir brukeren mulighet til å velge byer fra en nedtrekksliste. Når brukeren har valgt, så skrives byen og innbyggertallet ut i et p-element.

Nedtrekksliste i HTML:

```
 <select id="selByer">
            <option value="Oslo">Oslo</option>
            ...
 </select>
```

Objekt med steder og tilhørende innbyggertall, fylke og gps-koordinater:

```
const steder = {
    Oslo: {
        innbyggere: 676813,
        fylke: "Oslo",
        lat: 59.91,
        lon: 10.75
    },
    Bergen: {
        innbyggere: 257087,
        fylke: "Vestland",
        lat: 60.39,
        lon: 5.32
    },
    Kristiansand: {
        innbyggere: 64057,
        fylke: "Agder",
        lat: 58.14,
        lon: 7.99
    },
    Sandvika: {
        innbyggere: 114186,
        fylke: "Viken",
        lat: 60.53,
        lon: 11.18
    },
    Trondheim: {
        innbyggere: 186364,
        fylke: "Trøndelag",
        lat: 63.43,
        lon: 10.39
    },
}
```

### Pseudokode
```
Referanse til select-elementet
Referanse til p-element

Definerer objektet steder

Når select-elementet endres:
    valgtBy = verdien i select-elementet (selectElement.value)
    innbyggere = innbyggere til steders valgtBy (steder[valgtBy].innbyggere)
    Sett p-elementet sin indre HTML til å være lik innbyggere

```

TIPS: Du kan velger selv om du vil legge til `<option>`-valgene med HTML eller en for-løkke i javascript. For å loope gjennom et object med for-of kan Object.keys(objektet) brukes:
```
for(let bynavn of Object.keys(steder)){
    console.log(steder[bynavn]);
}
```

## 2. Fylkesvåpen - nedtrekksliste med to objekter
Utvid programmet slik at det også viser info om fylket byen ligger i. Det skal vises fylkesnavn og fylkesvåpen. Under er et nytt objekt med fylker og fylkesvåpen. Bruk dette objektet til å hente ut adressen til et bilde.

```
const fylker = {
    "Agder": { 
        bilde: "https://upload.wikimedia.org/wikipedia/commons/2/25/Agder_v%C3%A5pen.svg" 
    },
    "Oslo": { 
        bilde: "https://upload.wikimedia.org/wikipedia/commons/d/da/Oslo_komm.svg" 
    },
    "Trøndelag": { 
        bilde: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Tr%C3%B8ndelag_v%C3%A5pen.svg"
    },
    "Vestland": { 
        bilde: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Vestland_v%C3%A5pen.svg"
    },
    "Viken": { 
        bilde: "https://upload.wikimedia.org/wikipedia/commons/0/09/Viken_v%C3%A5pen.svg"
    },
}
```

TIPS: Bildetagg i template string:
```
`<img src="${bildeadresse}">`
```

## 3. CSS
Gjør siden pen med CSS.