# Web animations API i Javascript
https://developer.mozilla.org/en-US/docs/Web/API/Element/animate

Vi kan animere HTML-elementer med javascript ved å bruke metoden `.animate` på elementene.

## Syntaks 
`element.animate(keyframes, options);`

## Parametere
- `keyframes`: en **Array** med keyframe-objekter. Eks: `[{ transform: "translateX(0)" }, { transform: "translateX(100px)" }]`

- `options`: enten et **Number** med tiden på animasjonen eller et **Object** med egenskaper. Options-objektet kan ha disse egenskapene:
    - `duration`: Antall millisekunder for hver iterasjon av animasjonen. (Number)
    - `iterations`: Antall ganger animasjonen skal kjøre, `Infinity` er for alltid. (Number)
    - `delay`: Antall millisekunder før animasjonen starter. (Number)
    - `direction`: Retningen på animasjonen, kan være: `normal`, `reverse`, `alternate`, `alternate-reverse`. (String)
    - `easing`: Hvordan animasjonen endrer seg over en iterasjon, kan være: `linear`,`ease`, `ease-in`, `ease-in-out`, eller `cubic-bezier()`, [mer om easing](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function). (String)
    - `fill`: Hva som skjer med elementet når animasjonen er ferdig. `forwards` lar elementet bli slik det er ved slutten av animasjonen, `backwards` endrer det tilbake til utangspunktet. (String)
    
## Eksempel 1 - enkel animasjon
```
const kongen = document.querySelector("#kongen");

kongen.animate([
    { transform: 'translateY(0px)' }, 
    { transform: 'translateY(-300px)' }
],{
    duration: 1000,
    iterations: Infinity
});
```
[Se eksempel på codesandbox.io](https://codesandbox.io/s/charming-snow-pn5ew?fontsize=14&hidenavigation=1&theme=dark)

## Eksempel 2 - styre en animasjon med knapper

```
const kongen = document.querySelector("#kongen");
const btnStart = document.querySelector("#btnStart");
const btnStopp = document.querySelector("#btnStopp");

// Lagrer animasjonen i en variabel
const animasjon = kongen.animate([
    { transform: "translateY(0px)" },
    { transform: "translateY(300px)"},
    { transform: "translateY(100px)" }
],{
    duration: 1000,
    iterations: Infinity
});

animasjon.pause(); // Setter animasjonen på pause når siden lastes

btnStart.onclick = function() {
    animasjon.play();
};

btnStopp.onclick = function() {
    animasjon.pause();
};
```
[Se eksempel på codesandbox.io](https://codesandbox.io/s/sweet-proskuriakova-ms3ok?fontsize=14&hidenavigation=1&theme=dark)

## Eksempel 3 - samme animasjon på flere elementer
```
const kongen = document.querySelector("#kongen");
const dronningen = document.querySelector("#dronningen");

// Lagrer keyframes og options i variabler
const mineKeyframes = [
    { transform: 'translateY(0px) scale(1)' }, 
    { transform: 'translateY(-300px) scale(3)' }
]
const mineOptions = {
    duration: 1000,
    iterations: Infinity
};

// Sender variablene inn i .animate funksjonene
kongen.animate(mineKeyframes, mineOptions);
dronningen.animate(mineKeyframes, mineOptions);
```

## Oppgaver
### Oppgave 1
Finn bilde av Eirik Braut Haaland, en fotball og et fotballmål, og lag en animasjon hvor det ser ut som Haaland skyter ballen i mål.
Alternativt kan du finne tre bilder av et selvvalgt tema som du animerer.

### Oppgave 2
Prøv selv på s. 283.
