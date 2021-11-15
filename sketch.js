var bgImage, background;
var snakegroup, snakeImage;
var bunny, bunnyImage;

function preload() {
  //load game assets
  bgImage = loadImage("images/bg.png");
  snakeImage = loadImage("images/snake.png");
  bunnyImage = loadImage("images/bunnyimg.png");
  carrotImage = loadImage("images/carrot.png");
}



function setup() {
  createCanvas(600, 600);
  //create background sprite
  background = createSprite(580, 300);
  background.addImage(bgImage);
  background.scale = 4.8;
  bunny = createSprite(9, 50, 1, 1);
  bunny.addImage(bunnyImage);
  carrot = createSprite(550, 40, 13, 5);
  carrot.addImage(carrotImage);
  brick1 = createSprite(80, 280, 120, 20);
  brick2 = createSprite(380, 280, 120, 20);
  brick3 = createSprite(530, 280, 120, 20);
  brick4 = createSprite(230, 280, 120, 20);
  brick5 = createSprite(10, 330, 120, 20);
  brick6 = createSprite(160, 330, 120, 20);
  brick7 = createSprite(310, 330, 120, 20);
  brick8 = createSprite(460, 330, 120, 20);
  brick9 = createSprite(610, 330, 120, 20);
  // snakegroup = new Group()


}

function draw() {

  // bunny.scale=0.5;
  // carrot.scale=0.;


  if (keyDown("up")) {
    bunny.y = bunny.y - 3;
  }
  if (keyDown("down")) {
    bunny.y = bunny.y + 3;
  }
  if (keyDown("left")) {
    bunny.x = bunny.x - 3;
  }
  if (keyDown("right")) {
    bunny.x = bunny.x + 3;
  }
  if (bunny.isTouching(carrot)) {
    text("YOU WIN", 200, 200);
    snasketext.shapeColor = "black";
  }
  if (bunny.isTouching(brick1)) {
    bunny.x = 40;
    bunny.y = 550;
  }
  if (bunny.isTouching(brick2)) {
    bunny.x = 40;
    bunny.y = 550;
  }
  if (bunny.isTouching(brick3)) {
    bunny.x = 40;
    bunny.y = 550;
  } if (bunny.isTouching(brick4)) {
    bunny.x = 40;
    bunny.y = 550;
  }
  if (bunny.isTouching(brick5)) {
    bunny.x = 40;
    bunny.y = 550;
  }
  if (bunny.isTouching(brick6)) {
    bunny.x = 40;
    bunny.y = 550;
  }
  if (bunny.isTouching(brick7)) {
    bunny.x = 40;
    bunny.y = 550;
  }
  if (bunny.isTouching(brick8)) {
    bunny.x = 40;
    bunny.y = 550;
  }
  if (bunny.isTouching(brick9)) {
    bunny.x = 40;
    bunny.y = 550;
  }





  drawSprites();
}
// function generatesnakes() {
//   if (frameCount % 30 == 0) {
//     var snake = createSprite(600, random(70, 520), random(30, 120), 5);
//     snake.velocityX = -6;
//     snakegroup.add(snake);
//     snake.addImage(snakeImage);
//     snake.scale=random(0.1,0.4,0.8);
//   }
// }