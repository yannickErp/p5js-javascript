var Particle = function(x, y) {
 this.acceleration = createVector(0, 0.05);
 this.velocity = createVector(random(-1, 1), random(-1, 0));
 this.x = x;
 this.y = y;
 this.lifespan = 100;


 this.display = function() {
  stroke(255);
  strokeWeight(3);
  fill(255);
  point(this.x, this.y);

 }
 
 this.update = function() {
  
  
 }
 
 



};