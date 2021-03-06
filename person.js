function Person() {
  this.pos = createVector(20, height);
  this.vel = createVector(2, 0);
  this.acc = createVector(0.8, 0);
  this.mass = 5;
  this.jump = 0;
  this.life = 1;
  this.food = 0;
  this.score = 0;
  this.totalscore = this.score
  this.triesGood = 0;
  this.triesBad = 0;

  this.applyForce = function(force) {
  this.acc.add(force);
    }
  
 this.hits = function(x,y){
    var d = dist(this.pos.x, this.pos.y, x, y);
    if(d <= 20) {
      return true;
     }else{
       return false;
     }
  } 
  
  this.hitsBlock = function(x,y){
  var d = dist(this.pos.x + 30, this.pos.y, x,y)
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
    image(person1, this.pos.x, this.pos.y - 90,60,60);
    fill(30, 30, 250);
    rect(0, 330, 5000, 30);
    if (currentScene === 63){
      fill(30, 30, 250);
    rect(0, 330, 6000, 30);
    }
    if (currentScene === 6){
    fill(0, 0, 0);
    textSize(15)
    text("Level 1", 175, 200)
    }
    if (currentScene === 62){
      fill(0, 0, 0);
    textSize(15)
    text("Level 2", 175, 200)
    }
    if (currentScene === 63){
      fill(0, 0, 0);
    textSize(15)
    text("Level 3", 175, 200)
    }
   
  }
  
  this.edges = function(){
    if (this.pos.y >= height){
      this.vel.y *= 0;
      this.pos.y = height;
    } if (this.pos.y <= 50){
      this.vel.y *= -1;
      //this.pos.y = height;
    } if (currentScene === 6 && this.pos.x >= 4980){
      this.vel.x = 0; 
    }
    if (currentScene === 62 && this.pos.x >= 4980){
      this.vel.x = 0; 
    }
      
      if (currentScene === 63 && this.pos.x >= 5980){
         drawwin3(); 
      }
    }
  }


