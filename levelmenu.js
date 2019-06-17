function levelmenu3(){
  currentScene = 12;
  background(mouseX, mouseY, 120);
  textAlign(CENTER);
  fill(0)
  text('Level Menu', 300, 50);
  textSize(13)
  text('Level 1', 150, 130)
  text('Level 2', 300, 130)
  text('Level 3', 450, 130)
  textSize(18);
  text('Noraml', 150, 260)
  text('Coin Rush', 300, 260)
   text('Tornado', 450, 260)
  image(bimage, 100, 150, 100, 100);
  image(lvl2back, 250, 150, 100, 100)
  image(lvl3back, 400, 150, 100, 100)
  drawButton(5, 315, "Menu")
}

function levelmenu2(){
  currentScene = 13;
  background(mouseX, mouseY, 120);
  textAlign(CENTER);
  fill(0)
  text('Level Menu', 300, 50);
  textSize(13)
  text('Level 1', 150, 130)
  text('Level 2', 300, 130)
  text('Level 3', 450, 130)
  textSize(18);
  text('Noraml', 150, 260)
  text('Coin Rush', 300, 260)
  text('Locked', 450, 260)
  image(bimage, 100, 150, 100, 100);
  image(lvl2back, 250, 150, 100, 100);
  image(lvllock, 400, 150, 100, 100);
  drawButton(5, 315, "Menu")

}

function levelmenu1(){
  currentScene = 14;
  background(mouseX, mouseY, 120);
  textAlign(CENTER);
  fill(0)
  text('Level Menu', 300, 50);
  textSize(13)
  text('Level 1', 150, 130)
  text('Level 2', 300, 130)
  text('Level 3', 450, 130)
  textSize(18);
  text('Noraml', 150, 260)
  text('Locked', 300, 260)
  text('Locked', 450, 260)
  image(bimage, 100, 150, 100, 100);
  image(lvllock, 250, 150, 100, 100);
  image(lvllock, 400, 150, 100, 100);
  drawButton(5, 315, "Menu")

}
