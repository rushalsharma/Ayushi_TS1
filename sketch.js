const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var g1,b1,polygon,image,s1,Hexa_img;


function preload() {
  Hexa_img=loadImage("HG200.png")
  
}




function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  g1=new Ground(370,265,300,20);
  b1=new Box(330,235,30,40)
  b2=new Box(360,235,30,40)
  b3=new Box(390,235,30,40)
  b4=new Box(420,235,30,40)
  b5=new Box(360,195,30,40)
  b6=new Box(390,195,30,40)
  b7=new Box(375,155,30,40)

  //var imag=loadImage("HG200.png")
  polygon=Bodies.circle(100,200,20)
  World.add(world,polygon)
  

  s1=new Slingshot(polygon,100,200)


  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  g1.display();
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b6.display()
  b7.display()
  imageMode(CENTER)
  image(Hexa_img,polygon.position.x,polygon.position.y,20,20)
  s1.display()

  //drawSprites();
}
function mouseDragged(){
Matter.body.setposition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  s1.fly();
}