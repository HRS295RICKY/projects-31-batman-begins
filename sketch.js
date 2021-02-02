const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var maxDrops=100;
var boy;
var createdrops=[];
var engine,world;

function preload(){
    
}

function setup(){
   var canvas = createCanvas(600,600);
   engine = Engine.create();
   world = engine.world;
   for(var i=0;i<maxDrops;i++){
    createdrops.push(new drops(random(0,600),random(0,600),3));
   }
}

function draw(){
    Engine.update(engine);
    background("black");
    for(var i=0;i<createdrops.length;i++){
        createdrops[i].display();
       createdrops[i].update();
    }
    
}   

