//setting variables 
var player, bomb, coin, path, FullPower, MediumPower, LowPower;
var battery = 0;
var score = 0;

var noseX = 0;
var noseY = 0;

rightWristScore = 0;
leftWristScore = 0;

randomNumber = 0;

function preload() {
  //loading images
  player = loadAnimation("assets/player1.png", "assets/player2.png", "assets/player3.png", "assets/player4.PNG", "assets/player5.png");
  bomb = loadImage("assets/bomb.png");
  coin = loadImage("assets/coin.png");
  path = loadImage("assets/path.png");

  FullPower = loadImage("assets/fullpower.png");
  MediumPower = loadImage("assets/mediumPower.png");
  LowPower = loadImage("assets/lowPower.png");
  music = loadSound("assets/Subway-Surfers-theme-song.mp3");
}

function setup() {
  canvas = createCanvas(300,700);

  setupNinjaGame();

  video = createCapture(VIDEO);
  video.size(600,400);
  video.parent('game_console');
  poseNet = ml5.poseNet(video, modelLoaded);
}

function setupNinjaGame()
{
  console.log("setupNinjaGame");
}


function modelLoaded() {
  console.log('Model Loaded!');
 }

