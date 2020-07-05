var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody;
var container1,container2,container3;
var ground;
var garbage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;




function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//garbage = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, garbage);
	

//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);

	container = new Container(700,600,100,100);
	garbage = new Garbage(100,600,20,20);
	ground = new Ground(200,700,1200,20);
	launcher = new Launcher(garbage.body, {x: 200, y: 600});
	
}


function draw() {
  rectMode(CENTER);
  background("white");
  container.display();
  garbage.display();
  ground.display();
  launcher.display();
  drawSprites();
}

//function keyPressed() {
	//if(keyCode == UP_ARROW) {
	//Matter.Body.applyForce(garbage.body,garbage.body.position,{x:18,y:-16});
//}
//}

function mouseDragged() {
	Matter.Body.setPosition(garbage.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
	launcher.fly();
}