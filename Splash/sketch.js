var x = 600;
var y = 400;

var zoom = 1;

var particles = [];

function setup() {
 createCanvas(1200, 800);
}

function draw() {
 background(0);
 

}

function mousePressed(){
 particles.push(new Particle(300, 300));
 //for(var i = 0; i <= particles.length; i++){
  particles[0].display();
 //}
}