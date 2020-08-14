var rect1;
var rect2;

function setup() {
  createCanvas(1200,800);
  rect1 = createSprite(400, 200, 50, 50);
  rect1.shapeColor = "green";
  rect2 = createSprite(200,200,80,30);
  rect2.shapeColor = "green";
}

function draw() {
  background(255,255,255);
  var edge = createEdgeSprites();

  //rect1.x = World.mouseX;
  //rect1.y = World.mouseY;
  
  rect2.velocityX = 3;
  rect1.velocityX = -3;


  if(rect1.x - rect2.x < rect1.width/2 + rect2.width/2 && 
    rect2.x - rect1.x < rect1.width/2 + rect2.width/2 && 
    rect2.y - rect1.y < rect1.height/2 + rect2.height/2 &&
    rect1.y - rect2.y < rect1.height/2 + rect2.height/2) {

    rect1.shapeColor = "red";
    rect2.shapeColor = "red";
    rect2.velocityX = -3;
    rect1.velocityX = 3;
  }
  
  else{
    rect1.shapeColor = "green";
    rect2.shapeColor = "green";
    rect2.velocityX = 3;
    rect1.velocityX = -3;
  }

  drawSprites();
}