let player1;
let mat = [];
let capture;

function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
  player1 = new Spiller;
  for (let i = 0; i < 40; i++) {
    mat.push(new Matbit);
  }
}

function draw() {
  // put drawing code here
  background(220);
  player1.flytt();


  for (let i = 0; i < mat.length; i++) {
    let distance = dist(player1.x, player1.y, mat[i].x, mat[i].y);

    if (distance < player1.storrelse - 5) {
      player1.spis();
      mat.splice(i,1);
    }
    else{
      mat[i].tegn();
    }
  }
  player1.tegn();
}