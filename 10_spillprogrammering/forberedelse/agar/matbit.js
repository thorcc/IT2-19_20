class Matbit{
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.storrelse = 20;
    this.farge = `rgb(${floor(random(255))},${floor(random(255))},${floor(random(255))})`;

  }
  tegn(){
    fill(this.farge);
    circle(this.x,this.y,this.storrelse);
  }
}