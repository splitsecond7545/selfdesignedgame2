var house1,house2,house3, house4;
var person1, person2, person3, person4;

function setup() {
  createCanvas(1200,800);
  //fill("white");
  house1 = createSprite(143, 40, 300, 200);
  house1.shapeColor = "white";

  house2 = createSprite( 1044, 40, 300, 200);
  house2.shapeColor = "white";

  house3 = createSprite(143, 641, 300, 200);
  house3.shapeColor = "white";

  house4 = createSprite(1044, 641, 300, 200);
  house4.shapeColor = "white";

  person1 = createSprite(150, 100, 10, 10);
  person1.shapeColor = "green";

  person2 = createSprite(1050, 100, 10, 10);
  person2.shapeColor = "green";

  person3 = createSprite(150, 761, 10, 10);
  person3.shapeColor = "green";

  person4 = createSprite(1050, 761, 10, 10);
  person4.shapeColor = "green";
}

function draw() {
  background(0);  
  drawSprites();
}