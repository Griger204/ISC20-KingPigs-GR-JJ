class coin {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.length = 20;
    this.height = 20;
    //this.score = 0;
    this.trans = 250;
    this.r = 30;
    
  }
  
  display(){
    fill(255, 255, 255, this.trans);
    ellipse(this.x, this.y, this.length, this.height, this.r);
}
}
