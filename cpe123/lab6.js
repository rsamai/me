
function setup()
{
   var d, res1, res2,res3,res4, res5;

   createCanvas(500, 500);
   background(0);
   noStroke();

   //night sky
   for (var y=5; y<height; y+=2)
   {
      for (var x=5; x<width; x+=2)
      {
         d = distance(x, y, x, height);
         fill(0, 0, 200+random(-50,50)-d/2);
         ellipse(x+random(-10,10), y+random(-10,10), 100, 5);
      }
   }

  //moon
  for (var y=5; y<height+10; y+= 1)
     {
        for (var x=5; x<width+10; x+=1)
        {
            if (impl_circ(250, height/2, 75, x, y) < 0)
              {

           fill(random(200,255))
           ellipse(x+random(-1,1), y+random(-1,1), 15, 10);
          }
        }
    }
     // hills
     for (var y=5; y<height; y+= 1)
     {
        for (var x=0; x<width; x+=1)
        {
           d = distance(x, y, x, height);
           res1 = imp_line(x, y, 0, 400, 140, 300);
           res2 = imp_line(x, y, 140, 300, 240, 345);
           if (res1 > 0 && res2 > 0) {
              fill(50+random(-10,10), 0, 50+random(-10,10));
              rect(x+random(-3,3), y+random(-3,3), 4, 4);

           }

           res3 = imp_line(x, y, 300, 345, 375, 325);
           res4 = imp_line(x, y, 375, 325,440,350);
           res5 = imp_line(x, y, 440, 350,500,260);

          if (res3 > 0 && res4 > 0) {
              fill(50+random(-10,10), 0, 50+random(-10,10));
              rect(x+random(-3,3), y+random(-3,3), 4, 4);

          }
          if (res4 > 0 && res5 > 0) {
             fill(50+random(-10,10), 0, 50+random(-10,10));
            rect(x+random(-3,3), y+random(-3,3), 4, 4);
         }
       }
    }
}

function mousePressed() {
  println(mouseX + ", " + mouseY );
}

function imp_line(x, y, x0, y0, x1, y1)
{
   return (y0-y1)*x + (x1-x0)*y + x0*y1 - x1*y0;
}

function impl_circ(cx, cy, radi, in_x, in_y) {
  return ( (in_x-cx)*(in_x-cx) + (in_y-cy)*(in_y-cy) - radi*radi);
}

function distance(x0, y0, x1, y1)
{
   return sqrt(pow(x0-x1, 2) + pow(y0-y1, 2));
}

