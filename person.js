function Person() {
  this.pos = createVector(20, height);
  this.vel = createVector(0.6, 0);
  this.acc = createVector(0.6, 0);
  this.mass = 5;
  this.jump = 0;
  this.Life = 3;
  this.applyForce = function(force) {
  this.acc.add(force);
}
  
   this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
  
  this.display = function() {
    fill(59, 237, 151);
    stroke(200);
    fill(200, 100, 50);
    ellipse(this.pos.x, this.pos.y - 45, 30, 30);
    fill(50, 200, 50);
    rect(0, 330, 3000, 30);
    fill(0, 0, 0);
    text("Level 1", 175, 200)
    text("Jump!", 455, 290);
    text("l", 470   , 310)
    text("Jump!", 555, 290);
    text("l", 570, 310)
  }
  
  this.edges = function(){
    if (this.pos.y >= height){
      this.vel.y *= 0;
      this.pos.y = height;
    } if (this.pos.y <= 50){
      this.vel.y *= -1;
      //this.pos.y = height;
    }
  }
}

function obstacles(x, y, m, n){
    fill(0, 0, 0);
    rect(x, y, m, n);
}
