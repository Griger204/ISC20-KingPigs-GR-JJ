function Person() {
  this.pos = createVector(20, height);
  this.vel = createVector(5, 0);
  this.acc = createVector(0.8, 0);
  this.mass = 5;
  this.jump = 0;
  this.life = 3;
  this.food = 0;
  this.score = 0;
  this.triesGood = 0;
  this.triesBad = 0;

  this.applyForce = function(force) {
  this.acc.add(force);
    }
  
 this.hits = function(x,y){
    var d = dist(this.pos.x, this.pos.y,x,y);
    if(d <= 20) {
      return true;
     }else{
       return false;
     }
  } 
  
  this.hitsBlock = function(x,y){
  var d = dist(this.pos.x, this.pos.y, x,y)
   if (d <= 5){
    return true;
  }else{
    return false;
  }
  }
  
  
    this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    //this.hits(coin);
    //this.hits(block);
  }
  
  this.display = function() {
    var r = 30;
    fill(59, 237, 151);
    stroke(200);
    fill(200, 100, 50);
    ellipse(this.pos.x, this.pos.y - 45, 30, r);
    fill(255, 255, 255);
    ellipse(this.pos.x+5, this.pos.y-50, 5, 5);
    ellipse(this.pos.x-4, this.pos.y-50, 5, 5);
    fill(255, 0, 0);
    ellipse(this.pos.x+4, this.pos.y-40, 7, 7);
    fill(0, 0, 0);
    ellipse(this.pos.x+6, this.pos.y-49, 4, 4);
    ellipse(this.pos.x-3, this.pos.y-49, 4, 4);
    fill(50, 200, 50);
    rect(0, 330, 3020, 30);
    fill(0, 0, 0);
    textSize(15)
    text("Level 1", 175, 200)
   
  }
  
  this.edges = function(){
    if (this.pos.y >= height){
      this.vel.y *= 0;
      this.pos.y = height;
    } if (this.pos.y <= 50){
      this.vel.y *= -1;
      //this.pos.y = height;
    } if (this.pos.x >= 3000){
      
      this.vel.x = 0;  
      
    }
  }
}
