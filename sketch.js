const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var binPart1a, binPart2, binPart3;
var paper, ground;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    options2 = {
		isStatic: true,
	}

	paper = new paperMake(200,650,20);
	ground = new groundMake(400,700,2000,20);

	binPart1a = Bodies.rectangle(550 , 650 , 20 , 100, options2);
	World.add(world, binPart1a);

	binPart1b = createSprite(300,300,20,100);

	binPart2a = Bodies.rectangle(750 , 650 , 20 , 100, options2);
	World.add(world, binPart2a);

	binPart2b = createSprite(300,300,20,100);

	binPart3a = Bodies.rectangle(650 , 690 , 200 , 20, options2);
	World.add(world, binPart3a);

	binPart3b = createSprite(300,300,200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  binPart1b.x = binPart1a.position.x;
  binPart1b.y = binPart1a.position.y;

  binPart2b.x = binPart2a.position.x;
  binPart2b.y = binPart2a.position.y;

  binPart3b.x = binPart3a.position.x;
  binPart3b.y = binPart3a.position.y;

  paper.display();
  ground.display();
  drawSprites();
 
  

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	    Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-60});
	}
  }


