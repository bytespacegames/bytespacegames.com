let purplechar = -15
let textElement;
let text;

function setPurpleChar(charIndex) {
  if (!textElement || typeof textElement !== 'object') {
    return;
  }
  if (typeof charIndex !== 'number' || charIndex < 0 || charIndex >= textElement.textContent.length) {
    return;
  }
  const highlightedText = Array.from(text)
    .map((char, index) => index === charIndex ? `<span style="color: magenta">${char}</span>` : char)
    .join('');
  textElement.innerHTML = highlightedText;
}

function resetPurpleChar() {
    textElement.innerHTML = text;
}

function next() {
    if (purplechar >= 0 && purplechar < text.length) {
	setPurpleChar(purplechar)
    } else {
	resetPurpleChar();
    }
    purplechar++;
    if (purplechar >= text.length + 15) {
	purplechar = -15;
    }
}

window.addEventListener("DOMContentLoaded", function () {
    textElement = document.getElementById("title");
    text = textElement.textContent;
    setInterval(next,150);
});