
function setup() {
  // put setup code here
  createCanvas(400, 400);

}

function draw() {
  // put drawing code here
  background(220);
  for(let i = 1; i <= 10; i += 1){
    circle(i * 40,25,50);
    circle(25, i * 40, 50);
  }
}
