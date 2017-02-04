var r;
var g;
var b;
var diamtr;

function setup() {
  createCanvas(1200,800);
}

function draw() {
  noStroke();
  r = map(mouseX,0,1200,0,255);
  g = map(mouseY,0,800,0,255);
  b = map(mouseX,1200,0,0,255);
  fill(r,g,b,100);
  diamtr = random(40,100);
  ellipse(random(0,1200),random(0,800),diamtr,diamtr);
}