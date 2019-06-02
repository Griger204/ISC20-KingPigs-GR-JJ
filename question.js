function questions(){
  
  var num1 = round(random(0,50));
  var num2 = round(random(0,50));
  var numRand1 = round(random(0,50));
  var numRand2 = round(random(0,50));
  var num3 = num1 + num2;
  var  num4 = num1 - num2;
  this.addition = num1 + num2;
  this.subtract = num1 - num2;
  this.multiply = num1 * num2;
  
  this.display = function(){
    textAlign(CENTER);
    textSize(40)
    text(num1 + '+' + num2, 311.5, 100);
    textSize(20)
    text('Pick the right answer to continue', 305, 10);
  
    
    //Answers
 var button1 = drawButton(100, 200, this.addition);
 var button2 = drawButton(280, 200, numRand1);
 var button3 = drawButton(460, 200, numRand2)
 }
}
