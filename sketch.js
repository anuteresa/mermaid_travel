var mermaidImage,water;
function preload() {
  mermaidImage=loadAnimation("image1.png","image2.png","image3.png","image4.png","image5.png");
  water=loadImage("underwater.png");
  bubbleImage=loadImage("bubble.png");
  shipImage=loadImage("download.png")
}

function setup(){
  createCanvas(800,600);
  
  background1=createSprite(0,0,600,600);
  background1.addImage("water",water);
  background1.scale=2.5;
  meramid=createSprite(120,300,20,20)
  meramid.addAnimation("mermaid",mermaidImage);
  meramid.scale=.81; 
  
   bubbleGroup = new Group();
  shipGroup=new Group();
}

function draw(){
background("white")
  
    background1.velocityX = -8;
  if ( background1.x < 0) {
     background1.x =  background1.width / 2;
  }
  
  
  if (frameCount % 80 === 0) {
    var bubble = createSprite(500, random(110, 190), 20, 20);
    bubble.addImage(bubbleImage);
    bubble.scale = .09;
    bubble.velocityX = -8;
    bubble.lifetime = 64;
    bubbleGroup.add(bubble);
  }
  
  
    if (frameCount % 400 === 0) {
    var ship = createSprite(500, random(50, 100), 20, 20);
    ship.addImage(shipImage);
    ship.scale = 1;
    ship.velocityX = -8;
    ship.lifetime = 64;
    shipGroup.add(ship);
  }
  drawSprites();
}
  
