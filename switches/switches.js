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
  document.cookie = name + "=" + (value || "") + "; path=/";
}

var keyPresses = getCookie("presses")

function setup() {
  createCanvas(1280, 720);
}

function keyPressed(){
    keyPresses++;
    setCookie("presses",keyPresses);
	var thiskey = getCookie(key)
	thiskey++;
	setCookie(key + "",thiskey);
}

function hovering(x,y,rwidth,rheight) {
  if (mouseX >= x && mouseY >= y && mouseX < x + rwidth && mouseY < y + rheight) {
    return true;
  }
  return false;
}

var menu = 0;

function draw() {
  resizeCanvas(window.innerWidth,window.innerHeight)
  background(68);
  textAlign(CENTER,CENTER)
  fill(190)
  noStroke();
	
  if (menu == 1) {
	if (keyIsPressed) {
		var stats = getCookie(key + "")
		var dispkey = key.toUpperCase()
		text("Presses of " + dispkey + ": " + (stats) + ".", windowWidth/2, windowHeight/2);
	} else {
	    text("Press any key to get it's stats.", windowWidth/2, windowHeight/2);
	}
	
	textAlign(LEFT,TOP)
	if (hovering(windowWidth-15,10,15,15)) {
      fill(245);
	  if (mouseIsPressed && mouseButton === LEFT) {
		menu = 0;
      }
    }
	text("X",windowWidth-15,10)
	return;
  }
	
  text(keyPresses, windowWidth / 2, windowHeight / 2)
  
  if (hovering(5,height - 15 - 5,50,15)) {
    fill(245)    
    if (mouseIsPressed && mouseButton === LEFT) {
      var cookies = document.cookie.split(";");

	  for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];
		var eqPos = cookie.indexOf("=");
		var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		document.cookie = name + "=0;expires=Thu, 01 Jan 1970 00:00:00 GMT";
	  }
      window.location.reload();
    }
  }
  rect(5,windowHeight - 15 - 5,50,15)
  
  textAlign(LEFT,LEFT)
  fill(190)
  
  if (hovering(windowWidth-20,windowHeight-20,20,20)) {
    fill(245);
	if (mouseIsPressed && mouseButton === LEFT) {
		menu = 1;
    }
  }
  
  text("?",windowWidth - 15,windowHeight - 10);
}