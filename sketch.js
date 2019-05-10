 let bimage;
let collectImage
function preload(){
bimage = loadImage('shutterstock-519106648.jpg ');
collectimage = loadImage('1241505.png');
}

var person;
//var obstacle;

function setup() {
createCanvas(623, 360);
grassImage = loadImage('228223_minecraft-grass-block-png (1).jpg')
person = new Person();

}

//Sets current scene
var currentScene=6;

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
  obstacles(500, 270, 20, 60);
  obstacles(600, 270, 20, 60);
  obstacles(1100, 290, 20, 40);
  obstacles(1200, 280, 20, 50);
  obstacles(1300, 270, 20, 60);
  obstacles(1430, 260, 20, 70);
  obstacles(1700, 300, 50, 30);
  obstacles(1850, 300, 50, 30);
  obstacles(1950, 270, 20, 60);
  obstacles(2100, 270, 20, 20);
  obstacles(2170, 290, 20, 20);
  obstacles(2300, 275, 20, 20);
  obstacles(2350, 255, 20, 20);
  collectables(800, 310);
  collectables(830, 310);
  collectables(860, 310);
  collectables(890, 310);
  collectables(920, 310);
  collectables(1110, 230);
  collectables(1360, 310);
  collectables(1500, 310);
  collectables(1850, 250);
  collectables(1700, 230);
  


  
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
    }else if (currentScene === 6){
      drawScene6();
    }
  //drawScene6();
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
        //currentScene++;
      } if (currentScene === 4 && mouseX >= 23 && mouseX <= 93 && mouseY >= 307 && mouseY <= 347){
        drawScene2();
      } if (currentScene === 3 && mouseX >= 23 && mouseX <= 93 && mouseY >= 307 && mouseY <= 347){
        drawScene2();
      } if (currentScene === 3 && mouseX >= 527 && mouseX <= 597 && mouseY >= 307 && mouseY <= 347){
        drawScene5();
      } if (currentScene === 5 && mouseX >= 23 && mouseX <= 93 && mouseY >= 307 && mouseY <= 347){
        drawScene3();
      } else if (currentScene === 5 && mouseX >= 527 && mouseX <= 597 && mouseY >= 307 && mouseY <= 347){
        drawScene6();
      }
  
}

function keyPressed(){
  if (key === ' '){
    var jump = createVector (0, -8);
    person.applyForce(jump);
  }
}
