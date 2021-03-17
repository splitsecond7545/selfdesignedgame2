var house1,house2,house3, house4;
var person1, person2, person3, person4;
var covid;
var edges = [];


function setup() {
  createCanvas(1200,800);
  //fill("white");
  house1 = createSprite(143, 40, 300, 200);
  house1.shapeColor = "white";

  house2 = createSprite( 1044, 40, 300, 200);
  house2.shapeColor = "white";

  house3 = createSprite(153, 701, 300, 200);
  house3.shapeColor = "white";

  house4 = createSprite(1050, 701, 300, 200);
  house4.shapeColor = "white";

  person1 = createSprite(150, 50, 20, 20);
  person1.shapeColor = "green";

  person2 = createSprite(1050, 50, 20, 20);
  person2.shapeColor = "green";

  person3 = createSprite(150, 661, 20, 20);
  person3.shapeColor = "green";

  person4 = createSprite(1050, 661, 20, 20);
  person4.shapeColor = "green";

  covid = createSprite(600, 400, 10, 10);
  covid.shapeColor = "red";

  edges = createEdgeSprites();
}

function draw() {
  background(0);
  
  covid.velocityX = 2;
  covid.velocityY = 4;
  if(covid.isTouching(edges[0]) || covid.isTouching(edges[1]) ||  covid.isTouching(edges[2]) || covid.isTouching(edges[3])){
      covid.bounceOff(edges[0]);
      covid.bounceOff(edges[1]);
      covid.bounceOff(edges[2]);
      covid.bounceOff(edges[3]);
      covid.velocityX = covid.velocityX * (-1);
      covid.velocityY = covid.velocityY * (-1);
  }
  if(covid.isTouching(house1) || covid.isTouching(house2) ||  covid.isTouching(house3) || covid.isTouching(house4)){
    covid.bounceOff(house1);
    covid.bounceOff(house2);
    covid.bounceOff(house3);
    covid.bounceOff(house4);
    covid.velocityX = covid.velocityX * (-1);
    covid.velocityY = covid.velocityY * (-1);
}

person1.velocityX = 3;
person1.velocityY = 4;

if(person1.isTouching(edges[0]) || person1.isTouching(edges[1]) ||  person1.isTouching(edges[2]) || person1.isTouching(edges[3])){
  person1.bounceOff(edges[0]);
  person1.bounceOff(edges[1]);
  person1.bounceOff(edges[2]);
  person1.bounceOff(edges[3]);
}
if(person1.isTouching(house1) || person1.isTouching(house2) ||  person1.isTouching(house3) || person1.isTouching(house4)){
person1.bounceOff(house1);
person1.bounceOff(house2);
person1.bounceOff(house3);
person1.bounceOff(house4);
}

if(person1.isTouching(covid)){
  person1.shapeColor = "red";
}
  drawSprites();
}