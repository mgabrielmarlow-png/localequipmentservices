const callNow = document.getElementById('callNow');
const contactButton = document.getElementById('contactButton');

let currentFontSize = 20;

contactButton.addEventListener('click',() => {
	currentFontSize += 20;
	callNow.style.fontSize = '${currentFontSize}px';
})