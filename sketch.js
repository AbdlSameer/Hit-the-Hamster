
var hamster, hamsterImg;
var hole;
var cheese;
var player, playerImg1, playerImg2;
var player_Animation;

function preload()
{
    hamsterImg = loadImage("images/mouse.jpeg");
    playerImg1 = loadImage("images/Boy 1.png");
    playerImg2 = loadImage("images/Boy 2.png");
    player_Animation = loadAnimation("images/Boy 1.png", "images/Boy 2.png");
}

function setup()
{
   createCanvas(displayWidth,displayHeight);
   
   hamster = createSprite(0,0,40,40);
   hamster.addImage(hamsterImg);
   hamster.scale = 0.2;

   player = createSprite(displayWidth/2, displayHeight/2);
   player.addAnimation("player Hammer",player_Animation);
   player.scale = 0.4;

}

function draw()
{
  background("green")
  hamster.x = random(10,displayWidth-200);
  hamster.y = random(10,displayHeight-100);

  player.x = mouseX;
  player.y = mouseY;
  drawSprites();
}