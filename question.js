//HELLO

function questions() {

  var num1 = round(random(1, 50));
  var num2 = round(random(1, 50));
  var numRand1 = round(random(1, 50));
  var numRand2 = round(random(1, 50));
  var numRand3 = round(random(1, 50));
  //Random question number
  var num3 = round(random(0, 2));
  //Just more random numbers
  //for subtraction
  var num4 = round(random(1, 49));
  var num5 = round(random(50, 100));
  //for multiplication
  var num6 = round(random(1, 7))
  var num7 = round(random(1, 10))

  if (num3 === 0){
  this.addition = num1 + num2;
  } if (num3 === 1){
  this.subtract = num5 - num4;
  } else{
  this.multiply = num6 * num7;
  }
  
  this.display = function() {
    textAlign(CENTER);
    textSize(40)
    if (num3 === 0){
    text(num1 + '+' + num2, 311.5, 100);
    } if (num3 === 1){
      text(num5 + '-' + num4, 311.5, 100);
    } if (num3 === 2){
      text(num6 + 'x' + num7, 311.5, 100)
    }
    textSize(20)
    text('Pick the right answer to continue', 305, 10);


    //Answers
    var button1 = drawButton(100, 200, this.addition || numRand1);
    var button2 = drawButton(280, 200, this.subtract || numRand2);
    var button3 = drawButton(460, 200, this.multiply || numRand3)
    
  }
}
