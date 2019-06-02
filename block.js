class block {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.length = 20;
    this.height = 20;
  }
  display(){
    fill(0, 0, 0);
    rect(this.x, this.y, this.length, this.height);
   }
  
  
