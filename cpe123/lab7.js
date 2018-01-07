//Rutu Samai and Sveta Selwan
var numB;
var dx = [];
var dy = [];
var bX = [];
var bY = [];
var bScale = [];
var bColor = [];

var flowerX = [];
var flowerSc = [];
var flowerColor = [];

function mousePressed(){
    println("curveVertex("+mouseX + ", " + mouseY + ");");
}

function setup() 
{
   createCanvas(500, 500);

   numB = 8;

   for (var i=0; i < numB; i++) {
      dx.push(random(-3, 3));
      dy.push(random(-3, 3));
      bX.push(random(500));
      bY.push(random(500));

   bColor.push(color(random(180,255), random(0,140), random(119,170)));

      bScale.push(random(.5, 3));
   }


   var x = -50;
   while (x < width + 50)
   {
      flowerX.push(x);
      flowerSc.push(random(.5, 7));
      flowerColor.push(color(255, random(58,112), 95,200));
      x += random(20, 100);
   }
   noStroke();
}

function draw() 
{
   // sky
   background(124, 201, 194);


   for (var i=0; i < flowerX.length; i++)
   {
      drawFlower(flowerX[i], flowerSc[i], flowerColor[i]);
   }

   

   for (var i=0; i < numB; i++) 
   {

      drawbfly(bX[i], bY[i], dx[i], dy[i], bScale[i], bColor[i]);
      
      // updates the butterfly's location
      bX[i] += dx[i];
      bY[i] += dy[i];
      
      // bounces the butterfly
      if (bX[i] >= width || bX[i] <= 0) 
         dx[i] = -dx[i];

      if (bY[i] <= 0 || bY[i] >= height) 
         dy[i] = -dy[i];
   }
}


function drawbfly(x, y, dx, dy, sc, c)
{



   push();

      translate(x, y);
      rotate(atan2(dy, dx)+PI/2);
      scale(sc);
      fill(0);
       push();
        rotate(radians(45));
        rect(10,10,1,10);
      pop();

      push();
        rotate(radians(-45));
        rect(-10,10,1,10);
      pop();

      fill(200,0,0);
      push();

        rotate(radians(-45));
        ellipse(0,0,20,60);
        stroke(255,144,207);
        fill(c);
        ellipse(0,0,15,45);
      pop();
      push();

        rotate(radians(45));
        ellipse(0,0,20,60);
        stroke(255,144,207);
        fill(c);
        ellipse(0,0,15,45);
      pop();

      fill(c);
      ellipse(0, 0, 10, 40);
      fill(0);
     

   pop();
}


function drawFlower(x, sc, c)
{
   fill(232,184,89);
   push();
    translate(x,300);
    scale(sc);
    rect(0, 0, 2, 500);
    fill(255,56,95);
    ellipse(0,0,20,17);
    
    //white
    push();
      rotate(radians(-20));
      fill(255,255,255);
      rect(-4,-30,1,30);

      fill(255,56,95);
      ellipse(-4,-30,5,5);

    pop();

    push();
      rotate(radians(20));
      fill(255,255,255);
      rect(4,-30,1,30);
      
      fill(255,56,95);
      ellipse(4,-30,5,5);

    pop();

     
   pop();

   push();
    fill(c);
    translate(x,290);
    rotate(radians(45));
    ellipse(10,-25,40,70);

  pop();
   push();
    fill(c);
    translate(x,290);
    rotate(radians(45));
  

  pop();

push();
      rotate(radians(20));
      fill(255,255,255);
      rect(4,-30,1,30);
      fill(255,56,95);
      ellipse(4,-30,5,5);

    pop();



   push();
    fill(c);
    translate(x,290);
    rotate(radians(-45));
    ellipse(-10,-25,40,70);

  pop();


}