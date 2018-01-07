//at least 4 composed shapes or a shape with 15 or more vertices


function setup() {
	createCanvas(600, 600); 
	 noLoop();
	 //background(235, 202, 121);
	
}


 function skyscraper(x,y,blue,w,h,gray)
{
	
		fill(0,0,blue);
		noStroke();	
		rect(x, y, w,h);
		fill(gray);
		var Y;
		Y=y+h/6
		for(var i=0; i<5;i++){
			rect(x+w/4, Y, w/4, h/4);  
			rect(x+w/2+5, Y, w/4, h/4); 
			Y+= y/2;
		}
		

}




function mousePressed() {
  println("curveVertex("+mouseX + ", " + mouseY + ");");
}


function draw() {
	background(235, 202, 121);
	var x,w,h;
	//pillars
	var x=0;
	
	while(x<width)
	{
		w=random(30,80);
		h=random(80,400);

		//when we're at the edge of the screen
		if(x+w>width){
			w = width-x; //the width adjusts so it goes to the edge
		}
		skyscraper(x,(height-h),random(100,255),w,h, random(0,180));
		x+=w;

	}
	
	

}


   