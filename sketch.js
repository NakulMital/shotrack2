gameState = 1;
var database;
var cross;
var circle;
var x = 0;
var y = 0;
var makeImg;
var missImg;

function preload() {
    circle = loadImage("Images/circle.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  database = firebase.database()
  screen1 = new Screen();
  screen1.display();
  
}

function draw() {
  console.log(x+" and "+y);
}