function mouseClicked() {
  //SCENE CHANGES
    if ( currentScene === 1 && mouseX >= 548 && mouseX <= 618    && mouseY >= 315 && mouseY <= 355) {
        drawScene2();
        //currentScene++;
    }  if (currentScene === 2 && mouseX >= 300 && mouseX <= 370 && mouseY >= 200 && mouseY <= 240){
        drawScene3();
        //currentScene++;
      
      }  if (currentScene === 2 && mouseX >= 200 && mouseX <= 270 && mouseY >= 200 && mouseY <= 240){
        drawScene4();
      }
  if (currentScene === 2 && mouseX >= 250 && mouseX <= 320 && mouseY >= 260 && mouseY <= 300){
          levelmenu3();
    }
       if (currentScene === 4 && mouseX >= 23 && mouseX <= 93 && mouseY >= 307 && mouseY <= 347){
        drawScene2();
        
      } if (currentScene === 3 && mouseX >= 23 && mouseX <= 93 && mouseY >= 307 && mouseY <= 347){
        drawScene2();
      } if (currentScene === 3 && mouseX >= 527 && mouseX <= 597 && mouseY >= 307 && mouseY <= 347){
        drawScene5();
      } if (currentScene === 5 && mouseX >= 23 && mouseX <= 93 && mouseY >= 307 && mouseY <= 347){
        drawScene3();
      } if (currentScene === 5 && mouseX >= 527 && mouseX <= 597 && mouseY >= 307 && mouseY <= 347){
        drawScene6();
        person = new Person();
        person2 = new Person2();
      } 
  //Character select
  if (currentScene === 5 && mouseX >= 60 && mouseX <= 210 && mouseY >= 120 && mouseY <= 270 && mouseX >= 527 && mouseX <= 597 && mouseY >= 307 && mouseY <= 347){
    person = new Person();
  }
  if (currentScene === 5 && mouseX >= 450 && mouseX <= 550 && mouseY >= 200 && mouseY <= 300 && mouseX >= 527 && mouseX <= 597 && mouseY >= 307 && mouseY <= 347){
    person2 = new Person2();
  }
  
  if (currentScene === 7 && mouseX >= 548 && mouseX <= 618 && mouseY >= 315 && mouseY <= 355){
        drawScene8();
      } if (currentScene === 72 && mouseX >= 548 && mouseX <= 618 && mouseY >= 315 && mouseY <= 355){
        // drawScene8();
        drawquestion2();
        question = new questions();
        
      }if (currentScene === 7 && mouseX >= 5 && mouseX <= 75 && mouseY >= 315 && mouseY <= 355){
        drawScene2();
      }
  if (currentScene === 9 && mouseX >=547 && mouseX <= 617 && mouseY >= 315 && mouseY <= 355)      {
        drawScene2();
        person = new Person();
        person2 = new Person2();
      } 
  if (currentScene === 73 && mouseX >= 5 && mouseX <= 75 && mouseY >= 315 && mouseY <= 355){
    drawScene2();
  }
   if (currentScene === 72 && mouseX >= 5 && mouseX <= 75 && mouseY >= 315 && mouseY <= 355){
    drawScene2();
  }
  
  //FIRST SET OF QUESTIONS
  //QUESTIONS CORRECT
  //addition
  if (currentScene ===8 && question.addition && mouseX >= 100 && mouseX <= 170 && mouseY >= 200 && mouseY <= 240){
    drawScene11();
  }
  if (currentScene ===8 && question.addition && mouseX >= 280 && mouseX <= 350 && mouseY >= 200 && mouseY <= 240){
      drawScene10();
      }
    if (currentScene ===8 && question.addition && mouseX >= 460 && mouseX <= 510 && mouseY >= 200 && mouseY <= 140){
      drawScene10();
  }
  
  //subtraction
  if (currentScene ===8 && question.subtract && mouseX >= 280 && mouseX <= 350 && mouseY >= 200 && mouseY <= 240){
  drawScene11();
  }
  if (currentScene ===8 && question.subtract && mouseX >= 100 && mouseX <= 170 && mouseY >= 200 && mouseY <= 240){
      drawScene10();
      }
    if (currentScene ===8 && question.subtract && mouseX >= 460 && mouseX <= 510 && mouseY >= 200 && mouseY <= 240){
      drawScene10();
  }
  //multiplication
  if (currentScene ===8 && question.multiply && mouseX >= 460 && mouseX <= 510 && mouseY >= 200 && mouseY <= 240){
    drawScene11();
  }
  if (currentScene ===8 && question.multiply && mouseX >= 100 && mouseX <= 170 && mouseY >= 200 && mouseY <= 240){
      drawScene10();
      }
    if (currentScene ===8 && question.multiply && mouseX >= 280 && mouseX <= 350 && mouseY >= 200 && mouseY <= 140){
      drawScene10();
  }
  //SECOND SET OF QUESTIONS
  //QUESTIONS CORRECT
  //addition
  if (currentScene ===82 && question.addition && mouseX >= 100 && mouseX <= 170 && mouseY >= 200 && mouseY <= 240){
    drawScene112();
  }
  if (currentScene ===82  && question.addition && mouseX >= 280 && mouseX <= 350 && mouseY >= 200 && mouseY <= 240){
      drawtryagain2();
      }
    if (currentScene ===82  && question.addition && mouseX >= 460 && mouseX <= 510 && mouseY >= 200 && mouseY <= 140){
      drawScene102();
  }
  
  //subtraction
  if (currentScene ===82  && question.subtract && mouseX >= 280 && mouseX <= 350 && mouseY >= 200 && mouseY <= 240){
  drawScene112();
  }
  if (currentScene ===82 && question.subtract && mouseX >= 100 && mouseX <= 170 && mouseY >= 200 && mouseY <= 240){
      drawtryagain2();
      }
    if (currentScene ===82 && question.subtract && mouseX >= 460 && mouseX <= 510 && mouseY >= 200 && mouseY <= 240){
      drawtryagain2();
  }
  //multiplication
  if (currentScene ===82 && question.multiply && mouseX >= 460 && mouseX <= 510 && mouseY >= 200 && mouseY <= 240){
    drawScene112();
  }
  if (currentScene ===82 && question.multiply && mouseX >= 100 && mouseX <= 170 && mouseY >= 200 && mouseY <= 240){
      drawtryagain2();
      }
    if (currentScene ===82 && question.multiply && mouseX >= 280 && mouseX <= 350 && mouseY >= 200 && mouseY <= 140){
      drawtryagain2();
  }
  
  //Correct Scene
  if (currentScene === 11 && mouseX >= 547 && mouseX <= 617 && mouseY >= 315 && mouseY <= 355){
    levelmenu2();
  } if (currentScene === 112 && mouseX >= 547 && mouseX <= 617 && mouseY >= 315 && mouseY <= 355){
    levelmenu3();
  }
  //Wrong Scene
  if (currentScene ===10 && mouseX >= 547 && mouseX <= 617 && mouseY >= 315 && mouseY <= 355){
    drawScene8();
    question = new questions();
  }  
  if (currentScene ===102 && mouseX >= 547 && mouseX <= 617 && mouseY >= 315 && mouseY <= 355){
    drawquestion2();
    question = new questions();
  }
  
  //Level menu transitions
  //level1
  if (currentScene === 13 && mouseX >= 100 && mouseX <= 200 && mouseY >= 150 && mouseY <= 250){
    person = new Person();
    person2 = new Person2();
    drawScene6();
  }
  //level2
  if (currentScene === 13 && mouseX >= 250 && mouseX <= 350 && mouseY >= 150 && mouseY <= 250){
   person = new Person();
  person2 = new Person2();
   drawlvl2();
   person.vel = createVector(4, 0)
  }
  //level3
  if (currentScene === 12 && mouseX >= 400 && mouseX <= 500 && mouseY >= 150 && mouseY <= 250){
    person = new Person();
    person2 = new Person2();
   drawlvl3();
   person.vel = createVector(4, 0)
  }
  if (currentScene === 12 && mouseX >= 250 && mouseX <= 350 && mouseY >= 150 && mouseY <= 250){
    person = new Person();
    person2 = new Person2();
   drawlvl2();
   person.vel = createVector(4, 0)
  }
  if (currentScene === 12 && mouseX >= 100 && mouseX <= 200 && mouseY >= 150 && mouseY <= 250){
    person = new Person();
    person2 = new Person2();
   drawScene6();
  }
  
  //Back to main menu from level menu
  if (currentScene === 12 && mouseX >= 5 && mouseX <= 75 && mouseY >= 315 && mouseY <= 355){
    drawScene2();
  }
  if (currentScene === 13 && mouseX >= 5 && mouseX <= 75 && mouseY >= 315 && mouseY <= 355){
    drawScene2();
  }
  if (currentScene === 14 && mouseX >= 5 && mouseX <= 75 && mouseY >= 315 && mouseY <= 355){
    drawScene2();
  }
    
  
}
