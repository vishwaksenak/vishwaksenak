var garden,rabbit;
var gardenImg,rabbitImg,appleImage,leafImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leafImage = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  var select_sprites = Math.round(random(1,2));
  if(frameCount % 80 == 0){
    if(select_sprites == 1){
      createApples();
    }else{
      createLeaves();
    }

  }
  drawSprites();
}

function createApples() {
  apple=createSprite(random(40,300),40,10,10);
  apple.addImage(appleImage);
  apple.scale = 0.1;
  apple.velocityY = 1;
  apple.lifetime = 200;
  } 

  function createLeaves() {
    leaves=createSprite(random(20,150),40,10,10);
    leaves.addImage(leafImage);
    leaves.scale = 0.1;
    leaves.velocityY = 1;
    leaves.lifetime = 200;
    } 
  