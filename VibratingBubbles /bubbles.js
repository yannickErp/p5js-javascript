function Bubble(x, y, vibr) {
 this.x = x;
 this.y = y;
 this.col = color(255, 100);
 this.diamtr = random(30, 100);
 this.vibr = vibr;

 this.display = function() {
  stroke(255);
  fill(this.col);
  ellipse(this.x, this.y, this.diamtr, this.diamtr);
 }

 this.move = function() {
  this.x = this.x + random(-this.vibr, this.vibr);
  this.y = this.y + random(-this.vibr, this.vibr);

 }

 this.getBack = function() {
  if (this.x > width || this.y > height || this.x < 0 || this.y < 0) {
   this.x = width / 2;
   this.y = height / 2;
  }
 }
 this.clicked = function() {
  var d = dist(mouseX, mouseY, this.x, this.y);
  if (d < this.diamtr / 2) {
   this.col = color(random(255), random(255), random(255)); //Color after click
   this.vibr = 10; //Vibration-rate after click
  }
 }

}