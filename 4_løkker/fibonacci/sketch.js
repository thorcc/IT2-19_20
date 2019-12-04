function setup() {
  // put setup code here
  createCanvas(400, 400);
  noLoop();

  let a = 1; // Oppretter en variabel som skal holde på det tallet som er før det forrige
  let b = 1; // Oppretter en variabel som skal holde på det forrige tallet
  for(let i = 0; i < 100; i = i +1){
    let c = a + b; // c er lik de to forrige tallene
    text(c, i*20, i*20);
    a = b;
    b = c;
  }
}

function draw() {
  // put drawing code here
  //background(220);

}
