var x;
var y;
var easing;
var emoji;
var bg;

function preload()
{
  emoji = loadImage('image/emoji.png');
  bg = loadImage('image/bg.png')

}


function setup() {
	createCanvas(windowWidth, windowHeight);
  background(bg);
  
	easing = .025;
	x = width/2;
	y = height/2;
}


function draw() {
  background(bg);
	var eX = (mouseX - x) * easing;
	var eY = (mouseY - y) * easing;

	x = x + eX;
	y = y + eY;
	textFont('Georgia');
	image(emoji, x, y);	

}