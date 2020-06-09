# 9. juni - [Node.js](https://nodejs.org/en/)

Node gjør at vi kan kjøre javascript uten en nettleser. Brukes for det meste for å programmere servere.
[Les mer om Node.js her](https://no.wikipedia.org/wiki/Node.js).  

I dag skal vi lage en egen web-server med Node og [express](https://expressjs.com/).

## Installering av node

1. Last ned og innstaller node fra [Node.js](https://nodejs.org/en/download/).
2. Åpne opp terminal på mac eller powershell på windows
3. Skriv `node -v` og trykk enter, du skal nå få `v12.18.0` svar i terminalen.

## Opprette et prosjekt

1. Gå inn på skrivebordet i terminalen ved å skrive: `cd desktop`
2. Lag en ny mappe ved å skrive `mkdir node-express`
3. Gå inn i den nye mappen ved `cd node-express`
4. Skriv `npm init` for å starte et nytt prosjekt, og trykk enter på alt helt til du er tilbake til vanlig terminal
5. Skriv `npm install express` for å installere epxress-pakken

## Lage en webserver

1. Åpne mappen `node-express` i Atom/VS Code
2. Lag en ny fil som heter `server.js`
3. Skriv følgende kode for å opprette en webserver:

   ``` javascript
    const express = require('express');
    const app = express();

    app.get("/", function(req, res){
        res.send("Hallo verden!");
        console.log("Hallo sendt!");
    })

    app.listen(3000);
   ```

4. Skriv `node server.js` i terminalen
5. Gå inn på [http://localhost:3000](http://localhost:3000) i nettleseren

## Ressurser

- [Coding train - Server-side with node.js](https://www.youtube.com/watch?v=wxbQP1LMZsw)

### Land-api

``` javascript
    const express = require('express');
    const app = express();


    const land = {
        norge: {
            navn: "Norge",
            hovedstad: "Oslo"
        },
        danmark: {
            navn: "Danmark",
            hovedstad: "København"
        }
    }

    app.get('/land/:landNavn', function (req, res) {
        landNavn = req.params.landNavn;
        landInfo = land[landNavn];
        console.log(`Info om ${landNavn} hentet.`)
        res.send(landInfo)
    })

    app.listen(3000);

```

### Areal-kalkulator

``` javascript
    const express = require('express');
    const app = express();

    app.get("/areal", (req, res) => {
        areal = Number(req.query.bredde) * Number(req.query.hoyde)
        res.send(String(areal))
        console.log("Areal = " + areal)
    })

    app.listen(3000);
```
