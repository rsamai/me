function Particle(x , y, col) 
{
   //the data associated with a particle
   this.accelY = 0.1; //gravity
   this.velX = random(-4, 4);
   this.velY = random(-4, 4);
   
   this.locX = x;
   this.locY = y;
   this.r = 8.0;
   this.life = 100;
   this.colorR = red(col) + random (-15,15);
   this.colorG = green(col) + random (-15,15)
   this.colorB = blue (col) + random (-15,15)
  
   //a function to update the particle each frame
   this.updateP = function()
   {
      this.velY += this.accelY;
      this.locX += this.velX;
      this.locY += this.velY;
      this.life -= 2.0;
   };
  
   //function to draw a particle
   this.renderP = function() 
   {

      noStroke();
      push();
         ellipseMode(CENTER);
         fill( this.colorR, this.colorG, this.colorB, this.life);
         translate(this.locX, this.locY);
         ellipse(0, 0, this.r, this.r- this.life/5) ;
      pop();
   };
} //end of particle object definition

function mouseClicked ()
{
   fireworks.push (new PSys(mouseX, mouseY, 50));
}
//define a group of particles as a particleSys
function PSys(sX, sY, num)
{
    //the data - lots of particles
   this.particles = [];
   this.col = color(random (0,255), random (0, 255), random (0,255))
   for (var i=0; i < num; i++) 
   {
      this.particles.push(new Particle(sX, sY, this.col));
   }


  
    //function defining what to do each frame
   this.run = function() 
   {
      for (var i=0; i < this.particles.length; i++) 
      {
         //update each particle per frame
         this.particles[i].updateP();
         this.particles[i].renderP();
      }
   }
}

//declare of a variable to represent a particle system
var fireW1; 
var fireworks=[];
function setup() 
{
   createCanvas(500, 500);
   colorMode(RGB, 255, 255, 255, 100);
   frameRate(40);

   //start a new particle system
   fireW1 = new PSys(random (width), random (height), 90);

}

function draw() 
{
   background(0);

   //run the particle system
   fireW1.run(); 
   for (var i=0; i< fireworks.length; i++)
   {
     fireworks[i].run();
   }
   
}

function mouseClicked ()
{
   fireworks.push (new PSys(mouseX, mouseY, 20));
}function Particle(x , y, col) 
{
   //the data associated with a particle
   this.accelY = 0.1; //gravity
   this.velX = random(-5, 5);
   this.velY = random(-5, 5);
   
   this.locX = x;
   this.locY = y;
   this.r = 8.0;
   this.life = 100;
   this.colorR = red(col) + random (-15,15);
   this.colorG = green(col) + random (-15,15);
   this.colorB = blue (col) + random (-15,15);
  
   //a function to update the particle each frame
   this.updateP = function()
   {
      this.velY += this.accelY;
      this.locX += this.velX;
      this.locY += this.velY;
      this.life -= 2.0;
   };
  
   //function to draw a particle
   this.renderP = function() 
   {

      noStroke();
      push();
         ellipseMode(CENTER);
         fill( this.colorR, this.colorG, this.colorB, this.life);
         translate(this.locX, this.locY);
         ellipse(0, 0, this.r) ;
         rect(-10, -10, this.r+10, this.r+10) ;
      pop();
   };
} //end of particle object definition


//define a group of particles as a particleSys
function PSys(sX, sY, num)
{
    //the data - lots of particles
   this.particles = [];
   this.col = color(random (0,255), random (0, 255), random (0,255))
   for (var i=0; i < num; i++) 
   {
      this.particles.push(new Particle(sX, sY, this.col));
   }


  
    //function defining what to do each frame
   this.run = function() 
   {
      for (var i=0; i < this.particles.length; i++) 
      {
         //update each particle per frame
         this.particles[i].updateP();
         this.particles[i].renderP();
      }
   }
}

//declare of a variable to represent a particle system
var fireW1; 
var fireworks=[];
function setup() 
{
   createCanvas(500, 500);
   colorMode(RGB, 255, 255, 255, 100);
   frameRate(40);

   //start a new particle system
   fireW1 = new PSys(random (width), random (height), 20);

}

function draw() 
{
   background(0);

   //run the particle system
   fireW1.run(); 
   for (var i=0; i< fireworks.length; i++)
   {
     fireworks[i].run();
   }
   
}




