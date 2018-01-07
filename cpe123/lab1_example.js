
function setup() {
	createCanvas(400, 400);
	background(255,250,250);
	
}


function draw() {
	
	noStroke(0);
	fill(170,206,226); //baby blue
	quad(0,0,400,0,400,250,0,250);
	fill(255,255,255); //white

	for(var i=0; i<20; i++){ //snowflakes

		ellipse(random(10,400),random(10,250),5);
	}

	fill(51,0,0); //trunk
	rect(340,275,20,50);

	fill(101, 143, 49);//tree
	stroke(85,107,47);
	strokeWeight(3);
	triangle(350,25,305,280,395,280);

	noStroke(0);
	fill(255,255,255);

	push(); //arms
		translate(130,163);
		rotate(PI/6);
		fill(0,0,0);
		ellipse(10,10,50,150);
	pop();

	push();
		translate(250,172);
		rotate(-PI/6);
		fill(0,0,0);
		ellipse(10,10,50,150);
	pop();

	stroke(0);
	ellipse(200,200,145,200); //body
	noStroke(0);
	fill(0,0,0); 
	ellipse(200,90,100,90); //head
	fill(255,255,255);
	arc(200,95,80,60,0,PI); 

	ellipse(175,85,35); //left mask 
	ellipse(225,85,35); //right mask 

	fill(0,0,0);//black
	ellipse(175,85,25); //left eye
	ellipse(225,85,25); //right eye

	fill(255,255,255);
	ellipse(170,83,7); //left inside eye
	ellipse(220,83,7); //right inside eye

	fill(214,128,69);
	triangle(180,97,220,97,200,110); //nose
	fill(255,255,255);

	
	fill(214,128,69);
	ellipse(170,290,50,25); //feet
	ellipse(235,290,50,25); 

	push(); //eyebrows

		translate(160,57);
		rotate(-PI/3);
		fill(102,51,0);
		rect(6,8,5,29);
	pop();

	push();

		translate(230,43);
		rotate(PI/3);
		fill(102,51,0);
		rect(6,7,5,29);
	pop();

	

}


