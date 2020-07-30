
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var cPaper,binpart1,binpartSP,ground;
function preload()
{
 	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	binpart1=new Dustbin(900,900,200,20);
	
	//binpart2=new Dustbin(500,590,20,100)
	//bi//npart3=new Dustbin(700,590,20,100);
	
	cPaper= new paper(80,560);
	ground=new Ground(150,660,1900,10)
	Engine.run(engine);

}

function draw() {
	rectMode(CENTER);
  background("white");
  binpart1.display();
 // binpart2.display();
  //binpart3.display();
  ground.display();
  cPaper.display();
 
  drawSprites();
}


function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(cPaper.body,cPaper.body.position,{x:50,y:-50});
	}

}



