// ---------------------------
// Display Images
// ---------------------------
// Display the corresponding image when the button is clicked

// Cache each button, attach event listener to trigger imgToggle

var fry = document.querySelector('button.fry');
fry.addEventListener('click', imgToggle);

var leela = document.querySelector('button.leela').addEventListener('click', imgToggle);
var bender = document.querySelector('button.bender').addEventListener('click', imgToggle);
var professor = document.querySelector('button.professor').addEventListener('click', imgToggle);
var amy = document.querySelector('button.amy').addEventListener('click', imgToggle);
var zapp = document.querySelector('button.zapp').addEventListener('click', imgToggle);
var zoidberg = document.querySelector('button.zoidberg').addEventListener('click', imgToggle);
var mom = document.querySelector('button.mom').addEventListener('click', imgToggle);


function imgToggle(e) {
	var pic = document.getElementById( this.className );

	// check to see if the element has a class of 'isHidden'
	if (pic.classList.contains('isHidden')) {
		// remove it
		pic.classList.remove('isHidden');
	} else {
		// add it
		pic.classList.add('isHidden');
	}
}
