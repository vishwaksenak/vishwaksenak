var seaImage, sea, ship;
var shipImage, shipImage1;
function preload() {
  seaImage = loadImage("sea.png");
  shipImage = loadAnimation("ship-1.png", "ship-2.png");
  shipImage1 = loadAnimation("ship-3.png", "ship-4.png")
}

function setup() {

  createCanvas(400, 400);
  background("blue");
  sea = createSprite(400, 300);
  sea.addImage(seaImage);
  sea.velocityX = -5;
  sea.scale = 0.3;
  ship = createSprite(130, 200, 30, 30);
  ship.addAnimation("movingship", shipImage);
  ship.scale = 0.25;
}

function draw() {
  background("0");
  sea.velocityX = -3;
  if (sea.x < 0) {
    sea.x = sea.width / 2;
  }
  if (keyDown("space")) {
    ship.addAnimation("movingship", shipImage1);
  }

  drawSprites();
}