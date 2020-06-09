const express = require('express');
const app = express();

const norge = {
    navn: "Norge",
    hovedstad: "Oslo"
}
const land = {
    norge: {
        navn: "Norge",
        hovedstad: "Oslo"
    },
    danmark: {
        navn: "Danmark",
        hovedstada: "København"
    }
}

app.get('/', function(req, res){
    res.send('Hello world!');
})

app.get('/norge',function(req, res){
    res.send(norge)
})


app.get('/land/:landNavn', function (req, res) {
    landNavn = req.params.landNavn;
    landInfo = land[landNavn];
    res.send(landInfo)
  })

app.get("/areal", (req, res) => {
   areal = Number(req.query.bredde) * Number(req.query.hoyde)
   res.send(String(areal))
   console.log("Areal = " + areal)
})

app.listen(3000);