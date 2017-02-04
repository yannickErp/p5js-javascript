function Bubble(x, y, vibr) {
 this.x = x;
 this.y = y;
 this.r = 30;
 this.vibr = vibr;
 this.col = color(255);

 this.changeColor = function() {
  this.col = color(random(255), random(255), random(255))
 }
 this.display = function() {
  stroke(255);
  fill(this.col);
  ellipse(this.x, this.y, this.r * 2, this.r * 2);
 }

 this.intersects = function(other) {
  var d = dist(this.x, this.y, other.x, other.y);
  if (d < this.r + other.r) {
   return true;
  } else {
   return false;
  }
 }

 this.update = function() {
  this.x = this.x + random(-this.vibr, this.vibr);
  this.y = this.y + random(-this.vibr, this.vibr);
 }

 this.getBack = function() {
  if (this.x > width || this.y > height || this.x < 0 || this.y < 0) {
   this.x = width / 2;
   this.y = height / 2;
  }
 }
}