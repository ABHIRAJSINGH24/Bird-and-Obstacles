const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2,box3,box4,box5, ground;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(700,320,70,70);   
    box2=new Box(920,320,70,70);
    box3=new Box(700,230,70,70);   
    box4=new Box(920,230,70,70);
    box5=new Box(810,150,70,70);
    
    pig1=new Pig(810,350);
    pig2=new Pig(810,260);

    log1=new Log(811,285,290,PI/2);
    log2=new Log(810,195,290,PI/2);
    log3=new Log(730,150,120,PI/7);
    log4=new Log(880,150,120,-PI/7)
    
    bird=new Bird(200,75);

    ground=new Ground(600,height,1200,30);    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
    ground.display();
}

