//Rutu Samai and Jett Moy
var max_theta;
var counter;

function setup()
{
   createCanvas(400, 400);
   background(0);
   noStroke();

   max_theta = 0;
}

function draw()
{
   var x, y, theta, radius, red, blue;

   radius = 0;
   red = 200;
   blue = 100;
   for (theta = 0; theta < max_theta; theta += PI/5000)
   {
      x = 10+200*pow(sin(-5*theta),2)*pow(2, cos(cos(4.28*(2.3*theta))));
      y = 200+200*sin(sin(-5*theta))*pow(cos(4.28*(2.3*theta)), 2);

      fill(red, 0, blue);
      ellipse(x, y, 2);
      red -= .05
      blue += .05;
      //if(theta = 1){
        //noLoop();
      //}
   }
   //println(max_theta);
   if(max_theta >= 5){
     noLoop();
   }
   max_theta += 2*PI/300;
   counter ++;

}
