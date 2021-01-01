function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="orange";
  fixedRect.debug=true;
  movingRect=createSprite(400,200,50,80)
  movingRect.shapeColor="orange";
  movingRect.debug=true;
}

function draw() {
  background("pink");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
   //movingRect.depth=fixedRect.depth;  

//collsion logic
if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && 
  movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 && 
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 ){
  fixedRect.shapeColor="purple";
  movingRect.shapeColor="blue";
}
else{
  fixedRect.shapeColor="orange";
  movingRect.shapeColor="orange";
}




  drawSprites();
}