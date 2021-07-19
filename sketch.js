const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,iron,rubber,stone;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
  
    stone = new Stone(500,500)
    iron = new Iron(540,500);
    rubber = new Rubber(580,500,50);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    stone.display();
    iron.display();
    rubber.display();
    hammer.display();
    
    
 
}