let bimage;
let grassImage;
let collectImage
function preload(){
bimage = loadImage('shutterstock-519106648.jpg');
collectimage = loadImage('1241505.png');
grassImage = loadImage('vPyllu4r_400x400 (1).png');
//logo = loadImage('');
}

var person;

//var collectables;
//var obstacle;
var hit;
var rec = [];
var collect = [];

function setup() {
createCanvas(623, 360);
question = new questions();
//calling obstacles and collectables as an array
person = new Person();
  //Calling Block
for (let i = 0; i < 30; i++){
 rec[i]= new
 block(random(400,2800),random(0,height - 50));
}
  //Calling coin
for (let i = 0; i < 25; i++){
  collect[i] = new coin(random(600, 2900), random (0, height - 50));
}
  
}

//Sets current scene
var currentScene=0;

//Team Name color Animation
function tnameColor() {
  var r = 229;
  var g = 57;
  var b = 94;
  fill(r, g, b);
  textSize(35);
  text("King Pigs", 210, 300);
  
    r+=1;
    g-=1;
    b+=1;
}

function rectColorRules(){
  fill(mouseX, mouseY, 190);
  rect(20, 10, 580, 340);
}

//First Scene (intro)
function drawScene1 (){
    currentScene = 1;
    background (112, 247, 90);
    rectAnimation();
    fill(229, 57, 94);
    textSize(35);
    text("Logo goes here",160, 150);
    //text("King Pigs", 200, 300);
    drawButton(548, 315, "Next");
}

//Second Scene (Main Menu)
function drawScene2 (){
    currentScene = 2;
    background (112, 247, 90);
    rectAnimation2();
    fill(255, 255, 255);
    textSize(15);
    fill(0, 0, 0);
    text("Main Menu", 240, 15);
    textSize(35);
    fill(0, 0, 0);
    text("Royal Run",200, 135);
    drawButton(300, 200, "Rules");
    drawButton(200, 200, "About");
}
//Third Scene (Rules)
function drawScene3 (){
  currentScene = 3;
  background (112, 247, 90);
  rectColorRules();
  fill(0, 0, 0);
  textSize(35);
  text("How to play", 200, 50);
  textSize(12);
  textAlign(LEFT);
  Instructions();
  drawButton(527, 307, "Continue");
  drawButton(23, 307, "Back");
}

//Fourth Scene (About Us)
function drawScene4 (){
  currentScene = 4;
  background(112, 247, 90);
  //fill(100, 100, 100);
  //rect(20, 10, 580, 340);
  rectColorRules();
  fill(0, 0, 0);
  textSize(35);
  text("About us", 220, 100);
  textSize(13);
  AboutUs();
  drawButton(23, 307, "Back");
  }

//Fifth Scene (Character Select)
function drawScene5(){
  currentScene = 5;
  background(112, 247, 90)
  rectColorRules();
  fill(0, 0, 0);
  textSize(35);
  textAlign(CENTER);
  text("Character Select", 290, 50);
  textSize(15);
  text("character #1", 130, 110);
  text("character #2", 470, 110);
  drawButton(527, 307, "Start");
  drawButton(23, 307, "Back");
}


//Drawing Buttons
var drawButton = function(x, y, words) {
    fill(255, 255, 255);
    rect(x, y, 70, 40, 5);
    fill(0, 0, 0);
    textSize(16);
    textAlign(LEFT, TOP);
    text(words, x+5, y + 12);
};

//Animates rectangle around title #1
function rectAnimation(){
  var recL = 260;
  var recH = 70
  fill(100, 100, 100);
  rect(150, 110,recL, recH);
  
  recL = cos(millis()*1);
  recH = cos(millis()*1);
} 

function rectAnimation2(){
  var recLL = 260
  var recHH = 300
  var r =100;
  var g =100;
  var b =190;
  fill(mouseX, mouseY, b);
  rect(150, 30, recLL, recHH);
  
  recLL = cos(millis()*1);
  recHH = cos(millis()*1);
}
//YOU WIN
function drawScene7(){
  currentScene = 7;
  background(255, 238, 0)
  textAlign(CENTER)
  textSize(50);
  fill(0)
  text('YOU WIN!!!!', 300, 150);
  textSize(20)
  text('Congratulation!', 300, 120);
  drawButton(547, 315, "Next")
}
//YOU LOSE
function drawScene9(){
  currentScene = 9;
  background(255, 0, 0)
  textAlign(CENTER)
  textSize(50);
  fill(0)
  text('YOU LOSE!!!!', 300, 150);
  textSize(20)
  drawButton(547, 315, 'Menu')
}
//TRY AGAIN
function drawScene10(){
  currentScene = 10;
  background(255, 0, 0);
  textAlign(CENTER);
  textSize(50);
  fill(0);
  text('Try Again', 300, 150);
  textSize(20)
  text('oops', 300, 120)
  drawButton(547, 315, 'Again')
}
function drawScene11(){
  currentScene = 11;
  background(0, 247, 28);
  textAlign(CENTER);
  textSize(50);
  fill(0);
  text('Well Done', 300, 150);
  textSize(20)
  text('Yay', 300, 120)
  drawButton(547, 315, 'Next')
}

  ///////////\\\\\\\\\\\         
 //***** THE GAME***** \\
/////////////\\\\\\\\\\\\\

function drawScene6(){
  currentScene = 6;
  background(bimage);
  translate(-person.pos.x + 20, 0);
  person.display();
  person.update();
  person.edges();
  var gravity = createVector(0, 0.2);
  person.applyForce(gravity);

//displaying obstacles and collectables
for (let i = 0; i < rec.length; i++){
  if (person.hitsBlock(rec[i].x, rec[i].y)){

    drawScene6();
    //person = new Person();
    person.life --;

  }
     rec[i].display();
}
  if (person.life === 0){
      drawScene9();
    }
  
for (let i = 0; i < collect.length; i++){ 
if(person.hits(collect[i].x,collect[i].y)){
  person.score++;
  //collect[i].trans = 0;
   //console.log("score");
   //person.hits = true
 collect[i].x -= 100;
  
 }
  
  collect[i].display();
  
}
 }

  //////////\\\\\\\\\\\         
 //** The questions** \\
/////////////\\\\\\\\\\\\

function drawScene8(){
  currentScene = 8;
  background (mouseX, 200, mouseY);
  questions();
  question.display();
  if(questions.tiesGood === 4){
  }
  if(questions.triesBad === 6){
    drawScene9();
  }
}

function draw(){
  
    if(currentScene===0){
      rectAnimation();
      drawScene1();
    } if (currentScene === 1){
      tnameColor();
    } if (currentScene === 2){
      rectAnimation2();
      drawScene2();
    } if (currentScene === 3){
      rectColorRules();
      drawScene3();
    } if (currentScene === 4){
      rectColorRules();
      drawScene4();
    } if (currentScene === 5){
      drawScene5();
    } if (currentScene === 6){
      drawScene6();
      translate(person.pos.x, 0);
      textSize(15);
      text('Score:' + person.score, 0, 345);
      text('Jumps:'+ person.jump, 100, 345)
      text('Lives:'+ person.life, 200, 345);
    
      if (person.pos.x >= 3000){
        drawScene7();
      } 
    }if (currentScene === 7){
        drawScene7();
      } if (currentScene === 8){
        drawScene8();
      }if (currentScene === 9){
        drawScene9();
      }
    
  //drawScene11();
  
  
  /*textSize(100);
  text('thank u, next', width/2-280, height/2);
  
   textSize(90);
  fill(random(255),random(255),random(255));
text('thank u, next', width/2-280, height/2);*/
  
  
    }

  

function mouseClicked() {
    if ( currentScene === 1 && mouseX >= 548 && mouseX <= 618    && mouseY >= 315 && mouseY <= 355) {
        drawScene2();
        //currentScene++;
    }  if (currentScene === 2 && mouseX >= 300 && mouseX <= 370 && mouseY >= 200 && mouseY <= 240){
        drawScene3();
        //currentScene++;
      
      } else if (currentScene === 2 && mouseX >= 200 && mouseX <= 270 && mouseY >= 200 && mouseY <= 240){
        drawScene4();
      } if (currentScene === 4 && mouseX >= 23 && mouseX <= 93 && mouseY >= 307 && mouseY <= 347){
        drawScene2();
      } if (currentScene === 3 && mouseX >= 23 && mouseX <= 93 && mouseY >= 307 && mouseY <= 347){
        drawScene2();
      } if (currentScene === 3 && mouseX >= 527 && mouseX <= 597 && mouseY >= 307 && mouseY <= 347){
        drawScene5();
      } if (currentScene === 5 && mouseX >= 23 && mouseX <= 93 && mouseY >= 307 && mouseY <= 347){
        drawScene3();
      } if (currentScene === 5 && mouseX >= 527 && mouseX <= 597 && mouseY >= 307 && mouseY <= 347){
        drawScene6();
      } if (currentScene === 7 && mouseX >= 548 && mouseX <= 618 && mouseY >= 315 && mouseY <= 355){
        drawScene8();
      }
  if (currentScene === 9 && mouseX >=547 && mouseX <= 617 && mouseY >= 315 && mouseY <= 355)      {
        drawScene2();
        person = new Person();
      } 
  
  //QUESTIONS CORRECT
  if (currentScene ===8 && question.addition && mouseX >= 100 && mouseX <= 170 && mouseY >= 200 && mouseY <= 240){
    drawScene11();
    questions.triesGood++;
  } if (currentScene ===8 && question.subtract && mouseX >= 280 && mouseX <= 350 && mouseY >= 200 && mouseY <= 240){
    drawScene11();
    questions.triesGood++;
  } else if (currentScene ===8 && question.multiply && mouseX >= 460 && mouseX <= 530 && mouseY >= 200 && mouseY <= 240){
    drawScene11();
    questions.triesGood++;
  }
  
  //QUESTIONS WRONG
  if (currentScene ===8 && question.addition && mouseX >= 280 && mouseX <= 350 && mouseY >= 200 && mouseY <= 240 ||  mouseX >= 460 && mouseX <= 530 && mouseY >= 200 && mouseY <= 240){
    drawScene10();
    questions.triesBad++;
  }
  //Correct Scene
  if (currentScene ===11 && mouseX >= 547 && mouseX <= 617 && mouseY >= 315 && mouseY <= 355){
    drawScene8();
    question = new questions();
  }
  //Wrong Scene
  if (currentScene ===10 && mouseX >= 547 && mouseX <= 617 && mouseY >= 315 && mouseY <= 355){
    drawScene8();
    question = new questions();
  }
      
}


function keyPressed(){
  if (key === ' ' /*&& person.pos.y === height*/){
    var jump = createVector (0, -6);
    person.applyForce(jump);
    person.jump++;
  }
}

