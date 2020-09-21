
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5
var rope1,rope2,rope3,rope4,rope5
var roof,bobDiameter


function preload()
{
	
}

function setup() {
	createCanvas(1000,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(300,100,370,20);

	bob1 = new Bob(160,450,100);
	bob2 = new Bob(230,450,100);
	bob3 = new Bob(300,450,100);
	bob4 = new Bob(370,450,100);
	bob5 = new Bob(440,450,100);

	 bobDiameter = bob1.radius*2

	rope1 = new Rope(roof.body,bob1.body,-bobDiameter*2,0);
	rope2 = new Rope(roof.body,bob2.body,-bobDiameter*2,0);
	rope3 = new Rope(roof.body,bob3.body,-bobDiameter*2,0);
	rope4 = new Rope(roof.body,bob4.body,-bobDiameter*2,0);
	rope5 = new Rope(roof.body,bob5.body,-bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



