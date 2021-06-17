class SnowFlake{ 
constructor(x,y)
{ 

var options =
{ 
restitution:1 
} 
this.snow = 
Bodies.circle(x,y,20,options) 
this.radius = 40; this.image= loadImage("images/snow4.webp"); 
World.add(world, this.snow); 
 }

updateY()
{ 
if(this.snow.position.y > height)
 { 
 Matter.Body.setPosition(this.snow, 
{x:random(0,800), y:random(0,400)}) 
 } 
} 

display(){ 
var pos=this.snow.position; 
imageMode(CENTER); 
image(this.image,pos.x,pos.y,this.radius,this.radius); 
} 
 } 