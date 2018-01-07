
function setup() {
	createCanvas(400, 400);  //295:166
	background(255,250,250);
	
}

function mousePressed() {
  println("curveVertex("+mouseX + ", " + mouseY + ");");
}

function draw() {

	var scaleDF=1;
	var xDF =275 ;
	var yDF =231;

   noStroke(0);
   fill(214, 92, 118);
   textSize(40);
   textFont("Arial");
   text("A ", 12, 40);
     textSize(65);
   text("SHOOT", 50, 85);

   //head
   ellipse(210,180,50);
   
   //nose
   push();

		translate(230,190);
		rotate(radians(145));
		fill(214, 92, 118);
		ellipse(0,0,9,18);
	pop();

	//pot
	ellipse(279,339,50,20);
	quad(255,341,245,281,313,282,304,341);
	//top circles
	quad(242,281,239,272,319,272,316,282);
	ellipse(279,267,82,38);
	//brown soil
	fill(75, 61, 42);
	ellipse(279,263,73,20);
	
	//stem
	push();
		translate(xDF,yDF);
		scale(scaleDF);

		fill(78, 91, 49);
	
	    ellipse(4, 0, 9, 5);
	    ellipse(-4, 0, 9, 5);

	 	fill(78, 91, 49);
	    beginShape();
		   	fill(78, 91, 49);
		  	curveVertex(0,0);
		   	vertex(6,10);
		   	vertex(4,10);
	   endShape(CLOSE);

	   beginShape();
		   curveVertex(6,10);
		   vertex(0,30);
		   vertex(0,25);
		   vertex(4,10);
	   endShape(CLOSE);
	   
	pop();

	

	//head arc
	push(); 
		translate(205,175);
		rotate(radians(140));
		fill(75, 61, 42);
		arc(0,0,47,35,0,-PI);
	pop();

	//hair spikes
	beginShape();
		fill(75, 61, 42);
		vertex(223, 158);
		vertex(232, 164);
		vertex(223, 164);
		//spike 2
		vertex(235,170);
		vertex(236,177);
		vertex(228,172.5);
		vertex(222,170);
		//spike 3
		vertex(223,177.5);
		vertex(210,170.5);
		curveVertex(204,185.5);
		vertex(196,183.5);

		curveVertex(191, 188.5);
		curveVertex(189, 182.5);
		//starting point
		vertex(187,190);

	endShape(CLOSE);

	//collar
	push();
		fill(89,153,205,160);
		translate(183,188);
		rotate(radians(40));
		rect(0,0,33,12);
	pop();
	
	//shirt
	beginShape();
		fill(89,153,205);
		vertex(176,197.5);
		
		curveVertex(167,206.5);
		vertex(161,213.5);
		curveVertex(154, 236.5);
		curveVertex(153, 281.5);
		curveVertex(185, 296.5);
		curveVertex(189, 290.5);
		curveVertex(198, 307.5);
		vertex(212, 302.5);
		curveVertex(208, 288.5);
		curveVertex(200, 267.5);
		curveVertex(199, 249.5);
		curveVertex(200, 216.5);
		vertex(177,198);
	endShape(CLOSE);

	//foot
	beginShape();	
		fill(75, 61, 42);
		curveVertex(156, 317.5);
		curveVertex(149, 319.5);
		curveVertex(151.6, 324.5);
		curveVertex(151, 332.5);
		curveVertex(159, 336.5);
		curveVertex(163, 334.5);
		curveVertex(155, 316);
	endShape(CLOSE);

	//hand
		
	fill(214, 92, 118,160);
	ellipse(206,309.5,11);
	push();
		translate(212,311.5);
		rotate(radians(-20));
		ellipse(0,0,6,11);
	pop();


	//pants
	beginShape();	
		fill(78, 91, 49,160);
		curveVertex(153, 293.5);
		curveVertex(188, 297.5);
		curveVertex(197, 307.5);
		curveVertex(209, 313.5);
		curveVertex(214, 322.5);
		curveVertex(216, 330.5);
		curveVertex(204, 339.5);
		curveVertex(183, 335.5);
		curveVertex(161, 330.5);
		curveVertex(155, 320.5);
		curveVertex(156, 314.5);
		curveVertex(152, 308.5);
		curveVertex(153, 294.5);
	endShape(CLOSE);

	fill(78, 91, 49);
	ellipse(206, 327.5,28);

}


