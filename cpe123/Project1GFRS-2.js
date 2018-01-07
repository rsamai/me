//Grant Fox, Rutu Samai
var y1 = 0;
var yDF =231;
var move_picture;

function setup(){
	createCanvas(400, 550);
	move_picture = false;
}

//human leg variables
var l1Sc = 1;
var l1X = 145;
var l1Y = 400;
var l1R = -0.3;
var l1Side = 1;

function drawLeg(lSc, lX, lY, lR, lSide){
	fill(255, 70, 70, 155);
	push();
	translate(lX, lY);
	rotate(lR);
	scale(lSc);
	beginShape();
	curveVertex(5*lSide, 20);
	curveVertex(5*lSide, 20);
	curveVertex(7.5*lSide, 7.5);
	curveVertex(20*lSide, 5);
	curveVertex(35*lSide, 20);
	curveVertex(32*lSide, 60);
	vertex(30*lSide, 70);
	vertex(12*lSide, 70);
	endShape(CLOSE);
	fill(121, 189, 228);
	beginShape();
	curveVertex(12*lSide, 75);
	curveVertex(12*lSide, 75);
	curveVertex(12*lSide, 83);
	curveVertex(1*lSide, 85);
	curveVertex(-4*lSide, 90);
	curveVertex(-2*lSide, 93);
	curveVertex(5*lSide, 95);
	curveVertex(32*lSide, 94);
	curveVertex(31*lSide, 75);
	endShape(CLOSE);
	fill(255);
	if(lSide == 1){
		rect(12*lSide, 70, 24, 7);
	}
	else if(lSide == -1){
		rect(11*lSide*3, 70, 24, 7);
	}
	pop();
}

function drawDeskLeg(lW, lH, lX, lY, lR){
	fill(116, 136, 64);
	push();
	translate(lX, lY);
	rotate(lR);
	rect(0, 0, lW, lH);
	arc(lW/2, lH, lW, lW/2, 0, PI);
	pop();
}

function draw(){
	background(255);
	noStroke();

	var scaleDF=1;
	var xDF =275;

	translate(0, y1);

	push();
	translate(0, -550);
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
		fill(89,153,205);
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
	
	fill(214, 92, 118);
	ellipse(206,309.5,11);
	push();
		translate(212,311.5);
		rotate(radians(-20));
		ellipse(0,0,6,11);
	pop();


	//pants
	beginShape();	
		fill(78, 91, 49);
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
	pop();

	//text
	fill(121, 189, 228);
	textSize(70);
	textFont("Arial");
	text("DREAMER", 20, 75);
	
	//chair legs
	drawDeskLeg(8, 70, 150, 405, 0.2);
	drawDeskLeg(8, 70, 240, 405, -0.2);

	//legs of person
	drawLeg(l1Sc, l1X, l1Y, l1R, l1Side);
	drawLeg(1, 250, 400, 0.2, -1);

	//body of person
	fill(121, 189, 228);
	beginShape();
	vertex(120, 270);
	vertex(150, 273);
	vertex(155, 270);
	vertex(160, 310);
	vertex(160, 260);
	endShape(CLOSE);
	beginShape();
	curveVertex(120, 270);
	curveVertex(120, 270);
	curveVertex(125, 240);
	curveVertex(135, 220);
	curveVertex(145, 210);
	curveVertex(180, 200);
	curveVertex(215, 200);
	curveVertex(250, 210);
	curveVertex(260, 220);
	curveVertex(270, 240);
	curveVertex(270, 270);
	curveVertex(270, 270);
	endShape();
	rect(160, 260, 70, 50);

	//person's left arm top part
	fill(255, 140, 130);
	beginShape();
	vertex(270, 270);
	vertex(268.5, 300);
	vertex(225, 300);
	vertex(210, 225);
	vertex(222, 220);
	vertex(245, 270);
	endShape();

	//person's head
	arc(197.5, 210, 32, 32, 0, PI);
	quad(213.5, 210, 181.5, 210, 184, 146, 230, 167);
	beginShape();
	curveVertex(181.5, 210);
	curveVertex(181.5, 210);
	curveVertex(180, 205);
	curveVertex(165, 190);
	curveVertex(170, 170);
	curveVertex(164, 162);
	curveVertex(177, 158);
	curveVertex(185, 145);
	curveVertex(185, 145);
	endShape();
	push();
	translate(207, 157);
	rotate(PI/7.4);
	arc(0, 0, 50.567, 40, PI, 2*PI);
	pop();

	//person's hair
	fill(101, 169, 228, 165);
	push();
	translate(205, 155);
	rotate(PI/7.4);
	arc(0, 0, 55, 40, PI, 2*PI);
	beginShape();
	vertex(-27.5, 0);
	vertex(-26, 2);
	vertex(-24, 1);
	vertex(-22, 3);
	vertex(-20, 0);
	vertex(-18, 1);
	vertex(-16, 2);
	vertex(-14, 0);
	vertex(-12, 4);
	vertex(-10, 1);
	vertex(-8, 3);
	vertex(-6, 0);
	vertex(-4, 2);
	vertex(-2, 0);
	vertex(0, 1);
	vertex(2, 6);
	vertex(4, 4);
	vertex(6, 9);
	vertex(8, 6);
	vertex(12, 5);
	vertex(13, 4);
	vertex(15, 3);
	vertex(17, 4);
	vertex(18, 5);
	vertex(19, 10);
	vertex(21, 25);
	vertex(23, 23);
	vertex(25, 27);
	vertex(27, 26);
	vertex(29, 28);
	vertex(27.5, 0);
	endShape();
	pop();

	//person's left hand
	fill(255, 140, 130);
	beginShape();
	curveVertex(210, 225);
	curveVertex(210, 225);
	curveVertex(210, 210);
	curveVertex(220, 190);
	curveVertex(225, 175);
	curveVertex(230, 200);
	curveVertex(222, 220);
	curveVertex(222, 220);
	endShape();

	//wood part of desk
	fill(212, 170, 60);
	quad(350, 380, 50, 380, 100, 300, 300, 300);
	quad(350, 395, 50, 395, 50, 380, 350, 380);
	quad(330, 410, 70, 410, 65, 395, 335, 395);

	//paper
	fill(255);
	quad(260, 365, 150, 365, 165, 310, 245, 310);

	//person's left arm bottom part
	fill(255, 90, 90, 155);
	beginShape();
	curveVertex(268.5, 300);
	curveVertex(268.5, 300);
	curveVertex(266, 310);
	curveVertex(246.75, 330);
	curveVertex(230, 310);
	curveVertex(225, 300);
	curveVertex(225, 300);
	endShape();

	//person's right arm
	beginShape();
	curveVertex(120, 270);
	curveVertex(120, 270);
	curveVertex(123, 311);
	curveVertex(175, 345);
	curveVertex(175, 335);
	curveVertex(145, 305);
	curveVertex(145, 303);
	curveVertex(150, 273);
	curveVertex(150, 273);
	endShape();

	//person's right hand
	fill(255, 147, 137);
	beginShape();
	vertex(172, 343);
	vertex(179, 348.5);
	vertex(180, 349);
	vertex(192, 349);
	vertex(193, 347);
	vertex(193, 345);
	vertex(192.7, 343);
	vertex(193.5, 341);
	vertex(193.5, 340);
	vertex(193, 338);
	vertex(192, 336);
	vertex(192.5, 334);
	vertex(192.5, 332);
	vertex(192.5, 331.5);
	vertex(186, 330.5);
	vertex(186, 331);
	vertex(186, 333);
	vertex(178, 332.5);
	vertex(178.3, 332);
	vertex(179, 331);
	vertex(181, 329);
	vertex(184, 328);
	vertex(187, 327);
	vertex(188, 326);
	vertex(188.5, 325);
	vertex(188, 324);
	vertex(187, 322);
	vertex(184, 323);
	vertex(180, 324);
	vertex(176, 326);
	vertex(171, 330);
	vertex(170, 330);
	endShape();

	//pencil
	fill(80, 106, 30, 165);
	push();
	translate(180, 320);
	rotate(-PI/9);
	rect(0, 0, 4, 15);
	pop();

	//legs of desk
	drawDeskLeg(8, 120, 300, 410, 0);
	drawDeskLeg(8, 70, 270, 410, 0);
	drawDeskLeg(8, 120, 90, 410, 0);
	drawDeskLeg(8, 70, 120, 410, 0);

	if(y1 < 550 && move_picture){
		y1++;
	}
	if(y1 >= 549 && yDF > -30){
		yDF--;
	}
}

function mouseClicked(){
	if(mouseX > 150 && mouseX < 260 && mouseY > 310 && mouseY < 365){
		move_picture = true;
	}
}

