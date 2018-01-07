
function setup() {
	createCanvas(600, 600); 
	
	//var Leye;
	
	
}

function draw() {
	background(255,182,193);  //so background is redrawn 
	
	fill(0,0,255);
	ellipse(300,300,200);
//left
	fill(255,255,255);
	ellipse(250,270,50);
//right
	fill(255,255,255);
	ellipse(350,270,50);

//left pupil
	fill(0);
	var Leye=createVector(mouseX-250, mouseY-270); //center of white eye
	Leye.normalize();
	Leye.mult(15);
	ellipse(250+Leye.x, 270+Leye.y, 20,20);


//right pupil
	fill(0);
	var Leye=createVector(mouseX-350, mouseY-270); //center of white eye
	Leye.normalize();
	Leye.mult(15);
	ellipse(350+Leye.x, 270+Leye.y, 20,20);


}
  


	




