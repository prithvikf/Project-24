
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var box1,box2,box3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(100,400);
	ground=new Ground(400,680,800,20);
	box1=new Ground(500,620,20,100);
	box2=new Ground(575,660,130,20);
	box3=new Ground(650,620,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
	paper.display()
	ground.display()
	box1.display()
	box2.display()
	box3.display()

}
function keyPressed() {
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-130})
	}	
}

