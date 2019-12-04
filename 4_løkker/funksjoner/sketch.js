function setup() {
  // put setup code here
  createCanvas(400, 400);

}

function draw() {
  // put drawing code here
  //background(220);
  //tegnGulSirkel(100,200,70);
  //tegnGulSirkel(150,300,10);
  //tegnGulSirkel(50,70,50);
}

function tegnGulSirkel(x,y){
  fill("yellow");
  circle(x,y,50);
}

function mousePressed(){
  tegnGulSirkel(mouseX,mouseY);
}

//window.onclick = tegnGulSirkel;