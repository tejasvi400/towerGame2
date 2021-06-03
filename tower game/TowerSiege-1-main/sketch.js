const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, ground2;
var block;
var slingshot;

function preload(){

}

function setup(){
    var canvas = createCanvas(800,600)
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(250,410,280,10);
    ground2 = new Ground(600,230,280,10);
    block= new Block(210,400,20,30);
    block2= new Block(220,400,20,30);
    block3= new Block(230,400,20,30);
    block4= new Block(240,400,20,30);
    block5= new Block(250,400,20,30);
    block6= new Block(260,400,20,30);
    block7= new Block(270,400,20,30);
    block8= new Block(280,400,20,30);
    block9= new Block(290,400,20,30);
    block10= new Block(300,400,20,30);
    block11= new Block(230,360,20,30);
    block12= new Block(240,360,20,30);
    block13= new Block(250,360,20,30);
    block14= new Block(260,360,20,30);
    block15= new Block(270,360,20,30);
    block16= new Block(280,360,20,30);
    block17= new Block(230,330,20,30);
    block18= new Block(240,330,20,30);
    block19= new Block(260,330,20,30);
    block20= new Block(270,330,20,30);
    block21 = new Block(240,300,20,30);
    block22 = new Block(260,300,20,30);      

    block23 = new Block(550,220,20,30);
    block24 = new Block(560,220,20,30);
    block25 = new Block(570,220,20,30);
    block26 = new Block(580,220,20,30);
    block27 = new Block(590,220,20,30);
    block28 = new Block(600,220,20,30);
    block29 = new Block(610,220,20,30);
    block30 = new Block(620,220,20,30);
    block31 = new Block(630,220,20,30);

    block32 = new Block(560,190,20,30);
    block33 = new Block(570,190,20,30);
    block34 = new Block(580,190,20,30);
    block35 = new Block(590,190,20,30);
    block36 = new Block(600,190,20,30);
    block37 = new Block(605,190,20,30);

    block38 = new Block(540,150,20,30);
    block39 = new Block(560,150,20,30);
    block40 = new Block(580,150,20,30);
    block41 = new Block(600,150,20,30);
    block42 = new Block(560,120,20,30);
    block43 = new Block(580,120,20,30);
   
   
    
    polygon= new Polygon(100,200,40,40)
    sling = new SlingShot(polygon.body,{x:100, y:200})
}

function draw(){
    background("black");
    textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
    Engine.update(engine);

    ground.display();
    ground2.display();
    block.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();
    block33.display();
    block34.display();
    block35.display();
    block36.display();
    block37.display();
    block38.display();
    block39.display();
    block40.display();
    block41.display();
    block42.display();
    block43.display();
   
   
    polygon.display();
    sling.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    sling.fly();

}

function keyPressed(){
    if(keyCode===32){
        sling.attach(polygon.body)
    }

}
