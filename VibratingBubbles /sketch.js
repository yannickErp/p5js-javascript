var bubbles = [];
var bubbleNum = 100; //Number of bubbles at the beginning 

function setup() {
 createCanvas(1200, 800);
 for (var i = 0; i < bubbleNum; i++) {
  var x = random(width);
  var y = random(height);
  var vibr = 1; //Rate at which bubble should vibrate at the beginning.
  bubbles.push(new Bubble(x, y, vibr));
 }
}

function mouseDragged() {
 for (var i = 0; i < bubbles.length; i++) {
  bubbles[i].clicked();
 }
}

function draw() {
 background(0);
 for (var i = 0; i < bubbles.length; i++) {
  bubbles[i].move();
  bubbles[i].display();
  bubbles[i].getBack();
 }
}