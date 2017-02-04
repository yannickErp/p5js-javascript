var drops = [];

function setup() {
 createCanvas(1200, 800);
 //frameRate(10);
}

function draw() {
 background(0);
 var y = -50;
 var speed = 10;
 var rate = random(10);

if(rate < 50){
 for (var i = 0; i < random(1, 3); i++) {
  var x = random(width);
  var y2 = random(-30,-10);
  drops.push(new Drop(x, y, speed, y2));
 }
}

 for (var j = 0; j < drops.length; j++) {
  drops[j].fall();
  drops[j].display();
  if (drops[j].y2 >= height + 0) {
   print(drops[j].y2);
   drops[j].splash();
   drops.splice(j, 1);
  }
 }
}