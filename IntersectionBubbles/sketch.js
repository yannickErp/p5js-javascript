var b1;
var b2;

var bubbles = [];


function setup() {
 createCanvas(600, 400);
}

function draw() {
 background(0);
 for (var i = 0; i < bubbles.length; i++) {
  bubbles[i].update();
  bubbles[i].display();
  bubbles[i].getBack()
  for (var j = 0; j < bubbles.length; j++) {
   if (bubbles[i].intersects(bubbles[j]) && i != j) {
    bubbles[i].changeColor();
    bubbles[j].changeColor();
   }
  }
 }
}

function mouseClicked() {
 if (mouseX < width && mouseY < height && mouseX > 0 && mouseY > 0) {
  var x = mouseX;
  var y = mouseY;
  var vibr = 10;
  bubbles.push(new Bubble(x, y, vibr));
 }
}