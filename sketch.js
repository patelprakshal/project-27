
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var body1,body2;
var offsetX,offsetY;
var display;
var ball1,ball2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	sprite = new Sprite(100,300,100,200);
	sprite = new Sprite(50,300,180,10);
	constructor(body1,body2,offsetX,offsetY)
	{
		this.offsetX = offsetX
		this.offsetY = offsetY
		var option = {
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.offsetX,y:this.offsetY}
		}
		this.rope = Constraint.create(option)
		World.add(world,this.rope)
	}


	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

display();
	sprite.display();
	sprite1.display();
	{
		var pointA = this.rope.bodyA.position;
		var pointB = this.rope.bodyB.position;
	
		strokeWeight(2);
		var Anchor1X = pointA.x
		var Anchor1Y = pointA.y
	
		var Anchor2X = pointB.x+this.offsetX
		var Anchor2Y = pointB.y+this.offsetY
	
		line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
	}








