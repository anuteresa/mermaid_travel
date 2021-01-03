var mermaidImage,water,turtleImage,ground,crabImage,crab;
var score=0;
var gamestate="play"

function preload() {
  mermaidImage=loadAnimation("alienGreen.png","jump.png");
  water=loadImage("underwater.png");
  bubbleImage=loadImage("bubble.png");
  shipImage=loadImage("download.png")
  turtleImage=loadImage("turtle.png");
  crabImage=loadImage("crab.png")
}

function setup(){
  createCanvas(600,500);
  
  background1=createSprite(0,0,400,400);
  background1.addImage("water",water);
   background1.x =  background1.width / 2;
  background1.scale=3.5;
  
  meramid=createSprite(120,300,20,20)
  meramid.addAnimation("mermaid",mermaidImage);
  meramid.scale=1; 
  
  ground = createSprite(100, 420, 600, 5);
  ground.visible = false;
  
   bubbleGroup = new Group();
  shipGroup=new Group();
  crabGroup=new Group();
}

function draw(){
background("white")
  if (gamestate==="play")
    background1.velocityX = -8;
  if ( background1.x < 0) {
     background1.x =  background1.width / 2;
  }
  
  
  if (keyDown("space") && meramid.y >= 250) {
    meramid.velocityY = -17;
  }
  console.log(meramid.y);
  meramid.velocityY = meramid.velocityY + 0.9;
  
  if (frameCount % 80 === 0) {
    var bubble = createSprite(500, random(110, 190), 20, 20);
    bubble.addImage(bubbleImage);
    
    var turtle= createSprite(500,random(200,250),20,20);
    turtle.addImage(turtleImage)
    
    bubble.scale = .09;
    bubble.velocityX = -8;
    bubble.lifetime = 64;
    bubbleGroup.add(bubble);
    
    turtle.scale = .2;
    turtle.velocityX = -5;
    turtle.lifetime = 100;
    bubbleGroup.add(turtle);
  }
  
  
    if (frameCount % 100 === 0) {
    var ship = createSprite(500, random(50, 100), 20, 20);
    ship.addImage(shipImage);
    ship.scale = 1;
    ship.velocityX = -8;
    ship.lifetime = 64;
    shipGroup.add(ship);
  }
   if (frameCount % 100 === 0) {
    var crab = createSprite(500, random(380, 420), 20, 20);
    crab.addImage(crabImage);
    crab.scale = .3;
    crab.velocityX = -8;
    crab.lifetime = 64;
    crabGroup.add(crab);
 crab.collide(ground);
  }
  
  if (crabGroup.isTouching(meramid)) {
    crabGroup.destroyEach();
    meramid.scale=.1;
    score=0;
  
   
  
   
  }
  

  
  meramid.collide(ground);
  //crab.collide(ground);
  drawSprites();
  stroke("white");
  textSize(22);
  fill("white");
  text("Score : " + score, 450, 60)
}

