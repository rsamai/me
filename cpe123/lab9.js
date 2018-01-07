//To start the animation click anywhere in the window
var Dlocx;
var Dlocy;
var dirX, dirY;
var neckR, wingR, time, FlegR, beakR;

var neckDown = true;
var wingDown = false;
var animate = false;
var legDown = false;

var beakOpen = true;


//normal set up
function setup() 
{
   createCanvas(400, 400);

   neckR = 0;
   wingR =-.2;
   Dlocx = width*.9;
   Dlocy = height/2;
   dirX = -1.5;
   dirY = 0;
   time = 0.5;
   FlegR = 0;
   beakR = 0;

}

//normal draw
function draw() 
{

   background(204,255,255);

   //

   fill(255,128,0);
   ellipse(50,50,80);

   fill(255,255,102);
   ellipse(50,50,70);


   fill(102,204,0);
   rect(0,250,400,400);
   fill(102,178,255);
   ellipse(140,300,200,60); //lake

   //foreground
   fill(78, 155, 16);

   drawDuck();
   
    

   if (animate) 
   {
     moveDuck();
   }
}

//method to control starting the duck over again and control animation on and off
function mousePressed() 
{
   Dlocx = width*.9;
   animate = !animate;
}





//code to draw the duck with animation parameters neckR and wingR - other transforms align
//the peices to the correct pivot points
//Be very careful modifying this code - the structure of the push and pops are what builds
//the hierarchical relationships
function drawDuck() 
{

   noStroke();

   push();

      //move the entire duck
      translate(Dlocx, Dlocy);
      scale(2); //scale the entire duck


      // draw left leg
      push();
          translate(0, 10);
          rotate(-FlegR);
          fill(80, 40, 60);
          rect(0, 0, 2, 20);

          push();
                translate(1, 18);
                 ellipse(-2,1,7,4);
          pop();
      pop();


      // draw body
      fill(245, 226, 12);
      ellipse(0, 0, 40, 30); 

      //draw neck and head with possible animation transforms
      push();
         translate(-16, 0); //move into pivot position
         rotate(neckR);  //rotate by neckR parameter
         ellipse(0, -10, 10, 18); //neck
         ellipse(0, -17, 14, 14); //head
         fill(51,25,0);
         ellipse(0, -19, 4, 4);  //eye
         fill(255,255,255);
         ellipse(0, -19, 1, 1);  //eye

         
         push();
             
         translate(-4, -18);
             
             fill(51,25,0);
             rotate(beakR);
             triangle(-5, 0, 0, -4, 0, 0); //top beak
         pop();

         push();
         translate(-4, -18);
             fill(51,25,0);
             rotate(-beakR);
             triangle(-5, 0, 0, 0, 0, 4); //bottombeak
         pop();
             
         
        
      pop();

      //draw wing with possible animation transforms
      fill(227, 208, 66);
      push();
         translate(-8, -5); //move into pivot position
         rotate(wingR); //animtion parameter to control wing flap
         ellipse(14, 0, 34, 20); //wing
      pop();

      // draw right leg
      push();
         translate(0, 10);
         rotate(FlegR);
         fill(80, 40, 60);
         rect(0, 0, 2, 20);

         push();
             translate(1, 18);
             ellipse(-2,1,7,4);
         pop();
      pop();
 

   pop();
}

//function to update all animation parameters - very simple scripted animation
function moveDuck() 
{
   //update the ducks global location
   Dlocx = Dlocx + dirX*time;
   Dlocy = Dlocy + dirY * time;
   
   if(Dlocx < -60){
       Dlocx = width + 70;
   }


   if (FlegR > radians(45)) 
   {
      legDown = false;
   }
   if (FlegR < radians(-45)) 
   {
     legDown = true;
   }

   if (legDown) 
   {
      FlegR += 0.05; //.02
   } 
   else 
   {
      FlegR -= 0.05;
   }


  //find out how much the neck is rotated to decide which way to rotate
  //these constrain how much the neck moves up and down
   if (neckR < -1) 
   {
      neckDown = false;
   } 
   if (neckR > 0.3) 
   {
      neckDown = true;
   }

   // depending on which way we need to rotate, do so
   if (neckDown == true) 
   {
      neckR -= .03;
   } 
   else 
   {
      neckR += .03;
   }

   //find out how much the wing is rotated to decide which way to rotate
   //these constrain how much the wing moves up and down
   if (wingR < -1.1) 
   {
      wingDown = true;
   } 
   if (wingR > 0.3) 
   {
      wingDown = false;
   }

   // depending on which way we need to rotate, do so
   if (wingDown == false) 
   {
      wingR -= .03;
   } 
   else 
   {
      wingR += .03;
   }


    
   if (beakR < -0.1) {
       beakOpen = true;
   }
   if (beakR > 0.4) {
       beakOpen = false;
   }

    
   if (beakOpen == false) {
       beakR -= .02;
   }
   else {
       beakR += .02;
   }
}




