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

function setCookie(name, value) {
  document.cookie = name + "=" + (value || "") + "; path=/";
}

var keyPresses = getCookie("presses")

function setup() {
  createCanvas(1280, 720);
}

function keyPressed(){
    keyPresses++;
    setCookie("presses",keyPresses);
}

function hovering(x,y,rwidth,rheight) {
  if (mouseX >= x && mouseY >= y && mouseX < x + rwidth && mouseY < y + rheight) {
    return true;
  }
  return false;
}

function draw() {
  resizeCanvas(window.innerWidth,window.innerHeight)
	
  background(68);
  textAlign(CENTER,CENTER)
  fill(190)
  text(keyPresses, windowWidth / 2, windowHeight / 2)
  
  noStroke();
  
  if (hovering(5,height - 15 - 5,50,15)) {
    fill(245)    
    if (mouseIsPressed && mouseButton === LEFT) {
      keyPresses=0;
      setCookie("presses",keyPresses);
    }
  }
  rect(5,windowHeight - 15 - 5,50,15)
}