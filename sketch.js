//let bimage;
//let grassImage;
//let collectImage
function preload(){
//preloading images
bimage = loadImage('Untitled-1.png');
lvl2back = loadImage('Untitled drawing.jpg')
lvl3back = loadImage('lvl3back.jpg')
lvllock = loadImage('lockedlevel.jpg')
collectimage = loadImage('1241505.png');
grassImage = loadImage('vPyllu4r_400x400 (1).png');
logo = loadImage('KingPigLogo.png');
win = loadImage('youwin.jpg');
person1 = loadImage('stickman.png')
//person2 = loadImage('unicornperson.png')

}

var person;
var hit;
var rec = [];
var collect = [];

function setup() {
createCanvas(623, 360);
question = new questions();
//calling obstacles and collectables as an array
person = new Person();
person2 = new Person2();
//levelMenu = new levelmenu3();
//levelMenu = new levelmenu2();
//levelMenu = new levelmenu1();
  //Calling Block
for (let i = 0; i < 200; i++){
 rec[i]= new
 block(random(400,5900),random(0,height - 50));
}
  //Calling coin
for (let i = 0; i < 70; i++){
  collect[i] = new coin(random(600, 5900), random (0, height - 50));
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
    background (104, 162, 255);
    image(logo, 40, -70);
    fill(229, 57, 94);
    textSize(35);
    //text("King Pigs", 200, 300);
    drawButton(548, 315, "Next");
}

//Second Scene (Main Menu)
function drawScene2 (){
    currentScene = 2;
    this.menustyle = (0 - 2);
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
    drawButton(250, 260, "Levels");
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
  image(person1, 60, 120, 150, 150)
  text("character #2", 470, 110);
  randomperson2(465, 220);
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
  background(win)
  textAlign(CENTER)
  textSize(20);
  fill(0)
  text('Congratulation!', 300, 120);
  drawButton(547, 315, "Next")
  drawButton(5, 315, "Menu")
} 
function drawwin2(){
  currentScene = 72;
  background(win)
  textAlign(CENTER)
  fill(0)
  textSize(20)
  text('Congratulation!', 300, 120);
  drawButton(547, 315, "Next")
  drawButton(5, 315, "Menu")
}
function drawwin3(){
  currentScene = 73;
  background(win)
  textAlign(CENTER)
  textSize(20)
  text('Congratulation!', 300, 120);
  drawButton(5, 315, "Menu")
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
 function drawtryagain2(){
  currentScene = 102;
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

function drawScene112(){
  currentScene = 112;
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
for (let i = 0; i < rec.length - 110; i++){
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
  
for (let i = 0; i < collect.length - 30; i++){ 
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

function drawlvl2(){
  currentScene = 62;
  background(lvl2back);
  translate(-person.pos.x + 20, 0);
  person.display();
  person.update();
  person.edges();
  person.mass = 10;
  var gravity = createVector(0, 0.2);
  person.applyForce(gravity);
 

//displaying obstacles and collectables
for (let i = 0; i < rec.length - 130; i++){
  if (person.hitsBlock(rec[i].x, rec[i].y)){

    drawlvl2();
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
  person.totalscore++
 collect[i].x -= 100;
  
 }
   collect[i].display(); 
}
}
function drawlvl3(){
  currentScene = 63;
  background(lvl3back);
  translate(-person.pos.x + 20, 0);
  person.display();
  person.update();
  person.edges();
  person.mass = 10;
  var gravity = createVector(0, 0.2);
  person.applyForce(gravity);
 

//displaying obstacles and collectables
for (let i = 0; i < rec.length; i++){
  if (person.hitsBlock(rec[i].x, rec[i].y)){

    drawlvl3();
    //person = new Person();
    person.life --;
  }
     rec[i].display();
}
  if (person.life === 0){
      drawScene9();
    }
  for (let i = 0; i < collect.length - 10; i++){ 
if(person.hits(collect[i].x,collect[i].y)){
  person.score++;
  person.totalscore++
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
//Second Scene of questions
function drawquestion2(){
  currentScene = 82;
  background (mouseX, 200, mouseY);
  questions();
  //question = new questions();
  question.display();
  if(questions.tiesGood === 4){
  }
  if(questions.triesBad === 6){
    drawScene9();
  }
}
//Thirds scene of questions
function drawquestion3(){
  currentScene = 83;
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
    
      if (person.pos.x >= 4980){
        drawScene7();
      } 
    }if (currentScene === 7){
        drawScene7();
      } if (currentScene === 8){
        drawScene8();
      }if (currentScene === 9){
        drawScene9();
      } if (currentScene === 62){
        drawlvl2();
        translate(person.pos.x, 0);
        textSize(15);
        text('Score:' + person.totalscore, 0, 345);
      text('Jumps:'+ person.jump, 100, 345)
      text('Lives:'+ person.life, 200, 345);
      }
  if (currentScene === 63){
        drawlvl3();
        translate(person.pos.x, 0);
        textSize(15);
      text('Score:' + person.totalscore, 0, 345);
      text('Jumps:'+ person.jump, 100, 345)
      text('Lives:'+ person.life, 200, 345);
      }
  if (currentScene === 62 && person.pos.x >= 4980){
        drawwin2();
  } 
  if (currentScene === 63 && person.pos.x >= 5950){
    drawwin3();
  }if (currentScene === 72){
    drawwin2();
  } if (currentScene === 73){
    drawwin3();
  }
   if (currentScene === 62){
    translate(-person.pos.x, 1);
   textSize(40);
  fill(random(255),random(255),random(255));
text('Coin Rush', 500, 250);
  } 
  if (currentScene === 63){
    translate(-person.pos.x, 1);
   textSize(40);
  fill(random(255),random(255),random(255));
text('Tornado', 500, 250);
  }
  if (currentScene === 12){
    levelmenu3();
  } if (currentScene === 82){
    drawquestion2();
  } if (currentScene === 112){
    drawScene112();
  } if (currentScene === 102){
    drawtryagain2();
  } if (currentScene === 14){
    this.menustyle = 1;
  } if (currentScene === 2){
    this.menustyle = 0;
  }
  
  //drawScene5();
    }


  //////////\\\\\\\\\\\         
 //** MouseClicked** \\
/////////////\\\\\\\\\\\\

//in Other file 


function keyPressed(){
  if (key === ' ' /*&& person.pos.y === height*/){
    var jump = createVector (0, -6);
    person.applyForce(jump);
    person.jump++;
  }
  }
