class Spiller {
  constructor() {
    this.x = 50;
    this.y = 50;
    this.storrelse = 10;
    this.farge = `rgb(${floor(random(255))},${floor(random(255))},${floor(random(255))})`;
  }
  flytt() {
    this.x += (mouseX - this.x) * 0.01;
    this.y += (mouseY - this.y) * 0.01;
  }
  spis() {
    this.storrelse += 1;
  }
  tegn() {

    fill(this.farge);
    circle(this.x, this.y, this.storrelse);
    fill("white");
    textAlign(CENTER);
    text(this.storrelse, this.x, this.y);
  }
}