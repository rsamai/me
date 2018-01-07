
function setup() {
	createCanvas(600, 600); 
	background(255,182,193); 
	noLoop();
	
}

 function pizza(x,y,rot,w, r)
{
	push();
		translate(x,y);
		rotate(rot);
		noStroke();
	
		//cheese
		fill(255,215,0);

		arc(0, 0, w, 20, PI, 0, OPEN);
		
		triangle(-w/2,0,w/2,0,0,(1.33333*(w)));

		//crust

		fill(218,165,32);
		arc(0, 0, w, 30, PI, 0, OPEN);

		fill(r,0,0);
		ellipse(w/4,(w/6),(w/7));
		ellipse(-5,(w/3),(w/7));
		ellipse(10,(w/2),(w/6));
		ellipse(5,(w/1.3),(w/6));
		ellipse(-14,(w/3.4),(w/6));	

	pop();
}


function mousePressed() {
  println("curveVertex("+mouseX + ", " + mouseY + ");");
}


function draw() {
	
	
	
	//upper left corner
	for(var i=0; i<5; i++){
		
		pizza(random(0,width/2), random(0,height/2), random(0,360), random(40,100),random(100,255)) ;
	}

	//upper right corner
	for(var i=0; i<5; i++){
		pizza(random(width/2,width),random(0,height/2),random(0,360), random(40,100),random(100,255));
	}
	//bottom left corner
	for(var i=0; i<5; i++){
		pizza(random(0,width/2),random(height/2,height),random(0,360), random(40,100),random(100,255));
	}
	//bottom right corner
	for(var i=0; i<5; i++){
		pizza(random(width/2,width),random(height/2,height),random(0,360), random(40,150),random(100,255));
	}
	

}


   


	




