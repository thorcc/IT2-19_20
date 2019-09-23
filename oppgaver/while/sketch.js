function setup() {
  // put setup code here
  createCanvas(400, 400);

}

function draw() {
  // put drawing code here
  background(220);

  let y = 10;
  let x = 10;
  while(x < 1000){
    circle(x,10,25);
    x = x + 10;
    y = y + 10;
  }

  for(let x = 10, y = 10; y < 1000 && x < 1000; x = x + 10, y = y + 10){
    circle(10,y,25);
    circle(x,10,25);
  }

}

let gange = 1;

while(gange <= 10){
  console.log(gange*8);
  gange = gange + 1;
}


