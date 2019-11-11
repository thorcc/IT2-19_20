let capture;

function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  // put drawing code here
  image(capture, 0, 0, width, width * capture.height / capture.width);
}
