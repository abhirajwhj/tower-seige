const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body=Matter.Body;

var engine, world;
var box1,box2,box3,box4,box5;
var Wball,chain;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(770,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(770,240,70,70);
    box5 = new Box(735,160,70,70);

    Wball = new MyPolygon(500,320,60);
    chain = new WreckingChain(Wball.body,{x:500,y:100});
}

function draw(){
    background("white");
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    Wball.display();
    chain.display();
}
function mouseDragged(){
    Matter.Body.setPosition(Wball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  
}