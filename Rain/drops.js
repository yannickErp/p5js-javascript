function Drop(x, y, speed, y2) {
 this.x = x;
 this.y = y;
 this.speed = speed;
 this.y2 = y2;

 this.fall = function() {
  this.y += speed;
  this.y2 += speed;
 }

 this.display = function() {
  stroke(210,82,134);
  strokeWeight(3);
  line(this.x, this.y, this.x, this.y2);
 }
 
 this.splash = function(){
  
 }

}