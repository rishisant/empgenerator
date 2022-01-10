var i = 0;
var j = 0;
var alltext = {
  1: "Empire Simulator",
  2: "Created by Rishi Santhanam",
  3: "Briggamono dakara ii ne?"
};

var title = "Empire Simulator";
var author = "Created by Rishi Santhanam";
var speed = 70;


function displayTitle() {
	if (i < alltext[1].length) {
  document.getElementsByClassName('title')[0].innerHTML += alltext[1].charAt(i);
  i++;
  setTimeout(displayTitle, speed);

  if (i == title.length) { displayAuthor(); }
  }
}

function displayAuthor() {
	if (j < alltext[2].length) {
  	document.getElementsByClassName('title')[1].innerHTML += alltext[2].charAt(j);
  	j++;
  	setTimeout(displayAuthor, speed);
  }

  if (j == alltext[2].length) { document.getElementsByClassName('initButtons')[0].style.visibility = "visible"; }

}
