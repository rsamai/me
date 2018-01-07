//Rutu Samai and Jett Moy
var starX = [];
var starY = [];
var numStar;
var max_theta;

function setup(){
   var x,y;
   numStar=20;
  createCanvas(700, 400);
  background(83, 106, 224);
  var th=0;

  fill(191, 174, 113);
  rect(0, 0, 50, height);
  rect(650, 0, 50, height);

  fill(191, 174, 113);
  ellipse(width/2, height-10, 650);

  fill(56, 74, 168);
  ellipse(width/2, height-5, 640, 650);

  fill(191, 174, 113);
  ellipse(width/2, height, 550);

  fill(39, 52, 117);
  ellipse(width/2, height+5, 540, 550);
  max_theta = 0;

var star_theta = 9*PI/10;
for (var i=0; i<numStar; i++)
  {
      starX.push(width/2 + 300*cos(star_theta));
      starY.push(height-10 + 300*sin(star_theta));
      star_theta += PI/10;
    
   /* x = random(50, 650);
    y = random(100, 400);
    //checks if x,y values are on/within circle
    if((x-350) * (x-350) + (y-400) * (y - 400) - (250) * (250) <= 0)
    {
      starX.push(x);
      starY.push(y);
    }
    else {
      i--;
    }*/

   }
}

function drawCurve(cx, cy, sc, rot){
  push();
  var x, y, theta, red, green, blue;
  translate(cx, cy);
  rotate(rot);
  red = 255;
  blue = 255;
  green = 255;

  for (theta = 0; theta < max_theta; theta += PI/5000)
  {
     x = sc*pow(sin(-5*theta),2)*pow(2, cos(cos(4.28*(2.3*theta))));
     y = sc*sin(sin(-5*theta))*pow(cos(4.28*(2.3*theta)), 2);

     fill(red, green, blue);
     ellipse(x, y, .5);
     red -= .05;
     green -= .01;
     blue -= .01;

  }
  pop();
}

function drawQueen(){
  push();
  fill(255);

  //body
  fill(119,51,43);
  push();
  translate(350, 400);
  rotate(PI/6);
  ellipse(0, 0, 400, 200);
  pop();

  //head
  fill(216,182,128);
  ellipse(200, 250, 80, 100);

  //crown
  fill(237,224,189);
  beginShape();
    vertex(165, 220);
    vertex(155, 180);
    vertex(175, 190);
    vertex(185, 180);
    vertex(200, 190);
    vertex(215, 180);
    vertex(225, 190);
    vertex(245, 180);
    vertex(235, 220);
  endShape(CLOSE);
  strokeWeight(2);
  line(200, 190, 200, 150);


  //face
  push();
  strokeWeight(1);
  fill(255);
  ellipse(185, 245, 20, 10);
  ellipse(215, 245, 20, 10);
  fill(0, 0, 255);
  ellipse(215, 245, 10, 8);
  ellipse(185, 245, 10, 8);
  pop();



  pop();
}


function draw()
{
   


   for (var i=0; i<numStar; i++)
    {
      push();
      drawStar(starX[i], starY[i], .5)


      pop();
    }

  drawQueen();
  drawCurve(200, 150, 30, 0);
  drawCurve(200, 150, -30, 0);
  drawCurve(200, 150, 30, PI/2);
  drawCurve(200, 150, 30, 3*PI/2);



   if(max_theta >= 5){
     noLoop();
   }
   max_theta += 2*PI/300;

   var xS=50;
   var yS=50;

   /*for(var j=0; j<10; j++){
       drawStar(xS,yS,.5);
       xS+=40;
   }*/


}

function drawStar(X,Y,sc) {
  //background(51);
  noStroke();
  fill(100);
   ellipse(X,Y,55);
   fill(153,204,255);
   ellipse(X,Y,50);

     fill(255,255,204);
     push();
      translate(X,Y);
      rotate(3*PI/4);
      rect(-35,-5,70,10);
      pop();
      push();
      translate(X,Y);
      rotate(-3*PI/4);
      rect(-35,-5,70,10);
      pop();
     
  push();
   translate(X, Y);
   
   scale(sc);
  //stroke(255);
     strokeWeight(2);
     beginShape();
      fill(204,229,255);
        vertex(0, -50);
        vertex(14, -20);
        vertex(47, -15);
        vertex(23, 7);
        vertex(29, 40);
        vertex(0, 25);
        vertex(-29, 40);
        vertex(-23, 7);
        vertex(-47, -15);
        vertex(-14, -20);
     endShape(CLOSE);

}