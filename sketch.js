//-----------------------------------------------------------------
var police, police_img, police_left;
var culprit_1, culprit_stand_img, culprit_left_img_1, boy_stand;
var border_left, border_right, border_up, border_down, border_right_sl;
var backround, background_img, background_img_2, background_2;
var Story = 2;
var PLAY = 1;
var END = 0;
var WON = 3;
var INSTRUCT = 4;
var dead = 5;
var GameState = Story;
var right_edge;
var left_edge;
var bottom_edge;
var top_edge;
var text_box;
var reset, reset_img;
var ohnoSound, whistleSound, sirenSound;
var win_box;
var continue_box, continue_box_img;
var culprit_opposite;
var carsGroup;
var car1, car2, car3, car4, car5, car6, car7, car8, car9;
var roadLine;
var childlaugh;
var up_button,this_img3;
var left_button,this_img;
var right_button,this_img2;
var movement_mouse;







//-----------------------------------------------------------------
function preload() {

  culprit_stand_img = loadAnimation("culprit1.png", "culprit2.png", "culprit3.png");

  background_img = loadImage("bg-img.jpg");

  police_img = loadAnimation("police.png", "police4.png", "police3.png");

  reset_img = loadImage("reset.png");

  ohnoSound = loadSound('ttsMP3.com_VoiceText_2020-2-5_10_27_1.mp3');

  whistleSound = loadSound("POLWHST2.mp3");

  sirenSound = loadSound("Police Siren-SoundBible.com-878640712.mp3")


  boy_stand = loadImage("man-1b.png");

  continue_box_img = loadImage("load.png");

  background_2 = loadImage("track.jpg");

  car1 = loadImage("car1.png");
  car2 = loadImage("car2.png");
  car3 = loadImage("car3.png");
  car4 = loadImage("car4.png");
  car5 = loadImage("car5.png");
  car6 = loadImage("car6.png");
  car7 = loadImage("car7.png");
  car8 = loadImage("car8.png");
  car9 = loadImage("car9.png");
  
  
  this_img3 = loadImage("bu.png");
  this_img = loadImage("bl.png");
  this_img2 = loadImage("br.png");
  
  
  

}
//----------------------------------------------------------------
function setup() {
  createCanvas(550, 800)
  police = createSprite(120, height-10, 20, 20);
  police.setCollider('rectangle', 0, 0, 50, 50);
  police.addAnimation("police_img", police_img);
  police.scale = 0.2;
  police.velocityY = -4;
  
  
  movement_mouse = createSprite(mouseX,mouseY,50,50);
  movement_mouse.visible = true;


  
  reset = createSprite(width / 2, height / 2 + 100, 30, 30);
  reset.addImage("again", reset_img);
  reset.visible = false;

  carsGroup = new Group();


  border_left = createSprite(width / width + 30, height / 2 - 100, 450, 3);
  border_left.visible = false;


  border_right = createSprite(width - 150 , height / 4 - 50, 1, height);
  border_right_sl = createSprite(width - 110, height / 4 + 50, 600, 3)
  border_right.visible = false;
  border_right_sl.visible = false;


  border_top = createSprite(width / 2, 0, width, 0);
  border_top.visible = false;

  border_down = createSprite(width / 2, height, width, 3)
  border_down.visible = false;

  continue_box = createSprite(width - 100, height - 75, 100, 100);
  continue_box.addImage("play", continue_box_img);

  background_img_2 = createSprite(width/2,height/2,20,1600);
  background_img_2.addImage("round",background_2);
  background_img_2.scale = 0.7;
   background_img_2.y = background_img_2.height /4;
  background_img_2.visible = false;


  culprit_1 = createSprite(350, 600, 20, 20);
  culprit_1.scale = 0.2;
  culprit_1.addAnimation("badboy!", culprit_stand_img);
  culprit_1.velocityY = -3;


  culprit_1.visible = true;


  culprit_2 = createSprite(culprit_1.x, culprit_1.y, 20, 20);
  culprit_2.visible = false;

  vanish_box = createSprite(width / 2 + 20, 255, 70, 70);
  vanish_box.visible = false;

  win_box = createSprite(120, height / 2, width, height);
  win_box.visible = false;




  right_edge = createSprite(width, height / 2, 3, height);

  left_edge = createSprite(0, height / 2, 3, height);

  bottom_edge = createSprite(width / 2, height, width + width, 3);

  top_edge = createSprite(width / 2, 0, width + width, 3);

  roadLine = createSprite(width / 2, height / 2, 30, height + 30);
  roadLine.visible = false;

up_button  = createSprite(width/2,height - 100,50,50);
  up_button.addImage("up",this_img3);
   up_button.scale = 0.4
  up_button.visible = false;
  
  left_button = createSprite(width/2-50,height-45,50,50);
    left_button.addImage("left",this_img);
     left_button.scale = 0.4
  left_button.visible = false;

  
  right_button = createSprite(width/2+50,height-45,50,50);
    right_button.addImage("right",this_img2);
   right_button.scale = 0.4
  right_button.visible = false;

  
//-----------------------------------------------------------------



}
//------------------------------------------------------------------
function draw() {
  background(255);
 fill(0,0,0)
  
    background_img_2.velocityY = 4;
  
    if (background_img_2.y > 525){
    background_img_2.y = background_img_2.height/4;
  }


    culprit_1.depth = movement_mouse.depth;
    movement_mouse.depth = movement_mouse.depth +1


  carsGroup.bounceOff(roadLine);
  
  police.bounceOff(top_edge);
  police.bounceOff(bottom_edge);
  police.bounceOff(right_edge);
  police.bounceOff(left_edge);




  textSize(15);
  fill(255, 255, 255);
  
  if(movement_mouse.isTouching(up_button)){
  
  }




if(culprit_1.isTouching(border_top)){
GameState = END;
}
  

  if (keyDown(LEFT_ARROW) || mousePressedOver(left_button) ) {
   
    police.velocityX = -4;
    police.velocityY = 0;

  }

  if (keyDown(RIGHT_ARROW)|| mousePressedOver(right_button)   ) {
    police.velocityX = 4;
    police.velocityY = 0;


  }

  if (keyDown(UP_ARROW)  || mousePressedOver(up_button)  ) {
    police.velocityY =  -6;
    police.velocityX = 0;

  }







  
  if (keyDown(DOWN_ARROW)) {
    police.velocityY = 4.5;
    police.velocityX = 0;


  }

  police.changeAnimation("police_img", police_img);


  culprit_1.setCollider('rectangle', 0, 0, 100, 1000);














  if (GameState === Story) {

    if (police.x >= 100) {
      police.visible = true;
      culprit_1.visible = true;
      continue_box.visible = false;
      
    }





    if (police.isTouching(win_box)) {
      sirenSound.play();
      var culprit_Velocity = random(0, 10);


      
  right_button.visible = true;
  left_button.visible = true;
  up_button.visible = true;









      GameState = PLAY;
    }


  }

  if (GameState === PLAY) {
    if (GameState === PLAY && police.isTouching(culprit_1)) {
      culprit_2.visible = true;
    }
    background_img_2.visible = true;

    police.visible = true;
    culprit_1.visible = true;

    continue_box.visible = false;
        police.velocityY = -4;
    culprit_1.velocityY = -3
    
      right_button.visible = true;
  left_button.visible = true;
  up_button.visible = true;


    


    
    carsGroup.depth = police.depth;
    police.depth = police.depth +1


    background_img_2.velocityY = -2;

    if (background_img_2.y < 250) {
      background_img_2.y = background_img_2.height;
    }

    spawnCars();

    if (carsGroup.isTouching(culprit_1)) {
      culprit_1.x = culprit_1.x + 5;
    }





    if (culprit_1.isTouching(vanish_box)) {
      GameState = END;

    }
    if (culprit_1.isTouching(police)) {
      GameState = WON;

    }

    if (carsGroup.isTouching(police)) {
      GameState = dead;
    }


  }
  
  
  if(GameState === dead){
        background(rgb(0, 0, 0, 0.5));
    police.visible = false;
    culprit_2.visible = false;
    culprit_1.visible = false;
    reset.visible = true;
    continue_box.visible = false;
    background_img_2.visible = false;
    culprit_1.velocityY = 0;
    police.velocityY = 0;
    
      right_button.visible = false;
  left_button.visible = false;
  up_button.visible = false;




    carsGroup.destroyEach();
    
    fill(0,0,0)
    text("OH NO! YOU SHOULD HAVE BEEN CAREFULL!",width/2-100,height/2)
    text("NO PROBLEM U CAN TRY AGAIN",width/2-100,height/2+20);
    
       if (mousePressedOver(reset) && GameState === dead   ) {
      
         Reset();


    }
  }
  
  
  
  
  
  

  if (GameState === END) {
    background(rgb(0, 0, 0, 0.5));
    police.visible = false;
    culprit_2.visible = false;
    culprit_1.visible = false;
    reset.visible = true;
    continue_box.visible = false;
    background_img_2.visible = false;
        culprit_1.velocityY = 0;
    police.velocityY = 0;
    
      right_button.visible = false;
  left_button.visible = false;
  up_button.visible = false;




    carsGroup.destroyEach();







    fill(255, 255, 255);
    text("OH NO!! YOU HAVE LOST THE CULPRIT", width / 3 - 50, height / 2);
    text(" HE IS THE CAUSE OF OUR ENVIRONMENT DESTRUCTION!!!", width / 3 - 80, height / 2 + 20);


    text("BETTER LUCK NEXT TIME!!!!!", width / 3, height / 2 + 40);


    if (mousePressedOver(reset) && GameState === END   ) {
      Reset();


    }

  }

  if (GameState === WON) {
    background(rgb(0, 0, 0, 0.5));
    police.visible = false;
    culprit_2.visible = false;
    culprit_1.visible = false;
    reset.visible = true;
    background_img_2.visible = false;
        culprit_1.velocityY = 0;
    police.velocityY = 0;


    carsGroup.destroyEach();






    textSize(15);
    fill(255, 255, 255);
    text("CONGRATULATIONS!! YOU HAVE CAUGHT THE CULPRIT", width / 20, 150);
    text("THE CRIME HE HAD CAUSED IS HOLDING PLASTIC BAGS OR USING IT!", width / 20, 170);

    text("1,00,000 MARINE ANIMALS DIE BECAUSE OF THIS PLASTIC", width / 20, 210);
    text("SO, STOP USING PLASTIC", width / 20, 230);
    continue_box.visible = false;

    if (mousePressedOver(reset) && GameState === WON  ){
      Reset();



    }



  }
  // console.log(background_img_2.y)
  drawSprites();

}

//-----------------------------------------------------------------
function spawnCars() {

  if (frameCount % 100 === 0) {

    var cars = createSprite(225, -20, 40, 40);
    cars.velocityY = 4;
    cars.scale = 0.4;
    cars.x = random(225, 350);


    var rand = Math.round(random(1, 9));
    switch (rand) {
      case 1:
        cars.addImage(car1);
        break;
      case 2:
        cars.addImage(car2);
        break;
      case 3:
        cars.addImage(car3);
        break;
      case 4:
        cars.addImage(car4);
        break;
      case 5:
        cars.addImage(car5);
        break;
      case 6:
        cars.addImage(car6);
        break;
      case 7:
        cars.addImage(car7);
        break;
      case 8:
        cars.addImage(car8);
        break;
      case 9:
        cars.addImage(car9);
        break;
      default:
        break;
    }


    carsGroup.add(cars);
  }
}
//------------------------------------------------------------------
function Reset() {
  GameState = Story;
  police.visible = true;
  culprit_2.visible = false;
  culprit_1.visible = true;
  reset.visible = false;

  culprit_1.x = 350;
  culprit_1.y = 600;
  police.x = 120;
  police.y = height-10;
  police.velocityX = 0;
  culprit_1.velocityY = -4;
  police.velocityY = -4;
  continue_box.visible = false;
    right_button.visible = true;
  left_button.visible = true;
  up_button.visible = true;
}
//-----------------------------------------------------------------

function mousePressed() {
 
}