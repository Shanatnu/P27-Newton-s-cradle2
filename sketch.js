
const Engine = Matter.Engine; const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Body = Matter.Body; const Constraint = Matter.Constraint; var bobObject1,bobObject2,
bobObject3,bobObject4,bobObject5; 

var roof1; var rope1,rope2,rope3,rope4,rope5; 
function preload() { } 


function setup() { 
  createCanvas(800, 700); 
  engine = Engine.create(); world = engine.world; 
  //Create the Bodies Here. 
 // bobObject1 = new bob(50,400,100);

   bobDiameter=30; 
   startBobPositionX=width/2; 
   startBobPositionY=height/4+400; 
    bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter); 
    bobObject2=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter); 
    bobObject3=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter); 
    bobObject4=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter); 
    bobObject5=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter); 


  
   
   roof1 = new roof(450,200,500,20); 
    rope3 = new rope(bobObject3.body,roof1.body,0,0); 
    rope1 = new rope(bobObject1.body,roof1.body,-70,0); 
   rope2 = new rope(bobObject2.body,roof1.body,-140,0); 
   rope4 = new rope(bobObject4.body,roof1.body,70,0); 
   rope5 = new rope(bobObject5.body,roof1.body,140,0); 
   
   Engine.run(engine);
  } 
  function draw() { 
    rectMode(CENTER); 
    background(100); 
   bobObject1.display(); 
   bobObject2.display(); 
    bobObject3.display(); 
    bobObject4.display(); 
     bobObject5.display(); 
     roof1.display(); 
    
    rope1.display(); 
    rope2.display(); 
    rope3.display(); 
    rope4.display(); 
    rope5.display(); 

     drawSprites(); 
  } 
  
  function keyPressed(){
     console.log("PRINT") 
     if(keyCode===UP_ARROW){ 
       Matter.Body.applyForce (bobObject1.body,bobObject1.body.position,{x:-0.1,y:0.1} ) 
  } 
  
  }
