var car, wall;
var speed, weigth;

function setup() {
  createCanvas(1600,400);
  speed = Math.round(random(15, 180));

  weigth = Math.round(random(400, 1500));
  
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;

  wall = createSprite(1500, 200, 60, width/2)
}

function draw() {
  background(255,255,255);

  if((wall.x-car.x < (car.width+wall.width)/2{
    car.shapeColour ("green");
  }

  drawSprites();
}