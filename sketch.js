
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, dustbin2, dustbin3;
var paper;
var ground;

function preload()
{
	dustbin = loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);
	background("black")

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Box(600, 640, 200, 20);
	dustbin2 = new Box(500, 610, 20, 80);
	dustbin3 = new Box(700, 610, 20, 80);
	paper = new Paper(100,600,15);
	ground = new Ground(400,650,800,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  ground.display();
  image(dustbin,470,450,250,200);

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:35, y:-35});
	}
}



