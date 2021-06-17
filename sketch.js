const Engine=
Matter.Engine; 
const World=Matter.World; 
const Bodies=Matter.Bodies; 
var snow =[] 
var maxSnowFall=100 

function preload(){ 
bgImg= loadImage ("images/bgImg.jpeg"); }

 function setup() 
 { 
   createCanvas(900,900); 
  engine = Engine.create(); 
  world = engine.world; 
  //creating snow 
  if(frameCount % 1000 === 0)
  { for(var i=0; i<maxSnowFall; i++)
    { 
    snow.push(new SnowFlake(random(0,800), random(0,400))); 
    }
  }
} 

  function draw() 
  {
    background(bgImg); 
    Engine.update(engine);
  for(var i = 0; i<maxSnowFall; i++)
    { 
     snow[i].display();
    snow[i].updateY() 
    } 
  }