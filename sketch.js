//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {

	background(65,105,225); //an RGB color for the canvas' background
  //circle
  stroke(75,0,130) // an RGB color for the circle's border
	strokeWeight(6)// thinkness of RGB color for the circle's border
  fill(46,139,87); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(200,250,100,100); // center of canvas, 20px dia
	fill("#DAA520");//uses Hex Code to color the other cicle and Text
	ellipse(200,150,20,20);//changes the shape and position of cicle 2
	textSize(15);
	textFont("Arial Black");
	textStyle(BOLD);
	textAlign(CENTER);
	text("This is my Project",90,40);

	if (mouseIsPressed) {
    background(random(255), random(200, 255), random(255));
	  stroke(75,0,130) // an RGB color for the circle's border
		strokeWeight(6)// thinkness of RGB color for the circle's border
	  fill(46,139,87); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
	  ellipse(200,250,100,100); // center of canvas, 20px dia
		fill("#DAA520");//uses Hex Code to color the other cicle and Text
		ellipse(200,150,20,20);//changes the shape and position of cicle 2
		textSize(15);
		textFont("Arial Black");
		textStyle(BOLD);
		textAlign(CENTER);
		text("This is my Project",90,40);
  } else {
    background(65,105,255);
		stroke(75,0,130) // an RGB color for the circle's border
		strokeWeight(6)// thinkness of RGB color for the circle's border
	  fill(46,139,87); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
	  ellipse(200,250,100,100); // center of canvas, 20px dia
		fill("#DAA520");//uses Hex Code to color the other cicle and Text
		ellipse(200,150,20,20);//changes the shape and position of cicle 2
		textSize(15);
		textFont("Arial Black");
		textStyle(BOLD);
		textAlign(CENTER);
		text("This is my Project",90,40);

}
}
