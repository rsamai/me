//Rutu Samai and Jake 
numFlowers = 2;
animate = false;
x = 400;
y = 50;
var X;
var Y;
var move;
var rotateL=0;
var rot=false;


function setup() 
{
   createCanvas(600, 600);
   X=110;
   Y=150;
   move=false;

  

}
function smiley(x,y)
{
   push();
      translate(x,y);
      fill(255,0,0);
      ellipse(0,0,70,70);
      fill(0,255,0);
      ellipse(-20,-10,20);
      ellipse(20,-10,20);
      ellipse(0,20,50,10);
      //
   pop();
}






function draw()
{
   background(181,113,68);
   if(move){
      smiley(X,Y);

   }

   noStroke(0);
   //crown molding brown
   fill(157, 108, 52);
   quad(147, 30,290,30,290, 324,147,324);
   fill(185, 173, 219);
   quad(167, 50,270,50,270,180,167,180 );
   fill(140, 141, 205);
   quad(167, 180,270,180,270,240,167,240);
   fill(215, 165, 86);
   quad(167,240,270,240,270,311,167,311);
   fill(187, 140, 94);
   quad(167,311,270,311,270,324,167,314 );

   //dark under cloud 
   beginShape();
      fill(117, 87, 71,150);
      curveVertex(50, 63.5);
      curveVertex(41, 78.5);
      curveVertex(40, 84.5);
      curveVertex(48, 96.5);
      curveVertex(32, 104.5);
      curveVertex(24, 114.5);
      curveVertex(29, 120.5);
      curveVertex(42, 123.5);
      curveVertex(56, 126.5);
      curveVertex(68, 136.5);
      curveVertex(77, 144.5);
      curveVertex(88, 140.5);
      curveVertex(96, 136.5);
      curveVertex(108, 139.5);
      curveVertex(129, 143.5);
      curveVertex(137, 147.5);
      curveVertex(117, 147.5);
      curveVertex(144, 140.5);
      curveVertex(168, 147.5);
   endShape(CLOSE);


   //cloud
    beginShape(); 
      fill(239, 229, 240);
      curveVertex(118, 75.8);
      curveVertex(122, 79.8);
      curveVertex(134, 80.8);
      curveVertex(144, 71.8);
      curveVertex(164, 84.8);
      curveVertex(180, 77.8);
      curveVertex(184, 83);
      curveVertex(208, 101);
      curveVertex(216, 128);
      curveVertex(184, 135.8);
      curveVertex(173, 143.8);
      curveVertex(164, 143);
      curveVertex(157, 137);
      curveVertex(144, 132);
      curveVertex(132, 132.9);
      curveVertex(126, 127.8);
      curveVertex(102, 133.83);
      curveVertex(92, 118);
      curveVertex(66, 125);
      curveVertex(54, 110);
      curveVertex(60, 98);
      curveVertex(54, 86);
      curveVertex(50, 65);
      curveVertex(53, 57);
      curveVertex(62, 37.8);
      curveVertex(74, 34);
      curveVertex(92, 46);
      curveVertex(116, 58);   
   endShape(CLOSE);
//ground crown molding

   fill(157, 108, 52);
   rect(0,305,600,20);

//    //wood floor
//    var x1=5;
//    var y1=325;
//    var x2=0;
//    var y2=335;
// line(10,325,10,290);
//    for(var i=0; i<20;i++){
//          line(x1,y1,x2,y2);
//          x1+=20;
//          y1+=20;
//    }
//Ground
   fill(100,100,50);
   rect(0,325, width, 500);
   //door 
   fill(185, 173, 219);
   quad(200, 20,270, 50,270,324, 200,363);
   fill(140, 141, 205);
   quad(200, 20, 195,29,193,357,200,363);



   //squares in door

   quad(212,40,260,60,260,180,211,170);
   fill(185, 173, 219);
   quad(215,45,257,62,257,175,214,167);

   fill(140, 141, 205);
   quad(212,210,257,220,255,320,211,340);
   fill(185, 173, 219);
   quad(215,215,253,223,252,317,214,334);

   fill(140, 141, 205);
   quad(212, 179,258, 189,258, 213,213, 202);
   fill(185, 173, 219);
   quad(214,182,256,192,256,209,215,199);

   fill(157, 108, 52);
   ellipse(206,190,6,7);
   rect(207,184,2,14);

   if (move)
   {
      Y += 1;
   }
   //  // sky
   // background(0, 150, 200);

   

   //Lake
   fill(0,0,200);
   push();
      translate(300,450);
      if(rot){
         rotate(rotateL);
         rotateL+= PI/100;
      }     
      ellipse(100,0,200,100);
   pop();

  
      for (var i=0; i < numFlowers; i++)
   {
     
      drawEye(400,220);
    
      }
      if (animate == true)
      {
         drawTear(x,y);
         y ++
         if (y>370)
         {
            animate = false
            y = 50
         }
      }
}

function drawEye(center_x, center_y)
{
   xLoc = 400
   yLoc = 100

   //Draw White of Eye
   fill(255,255,255)
   ellipse(xLoc, yLoc, 120, 80);
   
    //Draw Iris
   fill(0,0,255);
   ellipse(xLoc, yLoc, 50, 50);

   //Draw Pupil
   fill(0);
   ellipse(xLoc, yLoc, 24, 24);


}




 
    function mousePressed()
  {
   if (mouseX > 350 && mouseX < 500 && mouseY >20 && mouseY < 175){
   animate = true
   }

   if (mouseX > 49 && mouseX < 190 && mouseY > 69 && mouseY<137)
   {
      Y = 108;
      move = true;
   }
   if(mouseX>300 && mouseX<500 && mouseY>400 && mouseY<550){
      rot=true;
   }
  }
      


   function drawTear(x,y)
   {
        fill(0,0,200);
        push();
         translate(x,y);
      beginShape();
         curveVertex(0,85);
         curveVertex(0,85);
         curveVertex(10,110);
         curveVertex(0,120);
         curveVertex(-10,110);
         curveVertex(0,85);
         curveVertex(0,85);
      endShape();
      pop();
      
   }

  

 
 