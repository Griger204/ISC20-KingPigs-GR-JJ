 class block {
  constructor(){
    this.x = 500;
    this.y = 270;
    this.length = 20;
    this.height = 60;
  }
  display(){
    fill(0, 0, 0);
    rect(this.x, this.y, this.length, this.height);
  }
  // contact(){
  //   if(person.pos.x === obstacles.x){
  //     drawScene6();
  //     //life--;
  //   }
  // }
}
