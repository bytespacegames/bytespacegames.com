var width = window.innerWidth;
var height = window.innerHeight;

function getCookie(cookieName) {
  var name = cookieName + "=";
  var ca = document.cookie.split(';');
  
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if ((c.indexOf(name)) == 0) {
      return c.substr(name.length);
    }
  }

return 0;
}

//GITHUB IS BEING STUPID AND NOT UPDATING WEBSITE SO IM PUSHING ANOTHER COMMIT WITH A MINOR CHANGE
function setCookie(name, value) {
  var cookieValue = name + "=" + encodeURIComponent(value) + "; path=/";
  if (!value) {
    cookieValue += "; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
  document.cookie = cookieValue;
}

function setup() {
  let canvas = createCanvas(1280, 720);
  frameRate(5000);
  canvas.parent('game');
}
var menu = 0;

let lastMouse = false
//cookie size adjustments
let widthAdj = 0;
let widthDes = 0;
function draw() {
  resizeCanvas(window.innerWidth / 3.5,window.innerHeight)
  background(68);
  fill(255);
  textSize(45);
  textAlign(CENTER);
  text(Game.money, width / 2, 100)
  
  //draw cookie
  
  widthAdj += (widthDes - widthAdj) / 12;
  ellipse(width/2,450,width / (2-widthAdj),width / (2-widthAdj));
  
  let cookieWidth = (width/2);
  let hovering = (mouseX > (width/2) - cookieWidth / 2 && mouseX < (width/2) + cookieWidth / 2) && (mouseY > 450 - cookieWidth / 2 && mouseY < 450 + cookieWidth / 2);
  
  if (hovering) {
	widthDes = .3;  
  } else {
	  widthDes = 0;
  }
  
  if (!lastMouse && mouseIsPressed && hovering) {
	Game.money += Game.mpc;
  }
  lastMouse = mouseIsPressed;
}