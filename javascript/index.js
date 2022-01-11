let i = 0, j = 0, k = 0, l = 0, m = 0;
let xy = false;

var alltext = {
  0: "",
  1: "Empire Simulator",
  2: "Created by Rishi Santhanam",
  3: "How to Play Empire Simulator",
  4: "Empire Simulator is a game of decisions. Your goal is to lead your empire to victory through various means. <br> At the beginning of the game, you select an archetype, which enhances your leadership style. The three given<br> archetypes are: Scholar, Leader, and Conqueror. Each different archetype has its own strengths.<br><br>After selecting an archetype, you must select an area to rule in. Each area has large groups of people, who you will lead over. <br>Not only that, but some areas allow for different tactical uses (e.g. areas closer to the sea would have a greater potential navy,<br> and better trading potential as well. An area in a mountaineous area may be more difficult to attack, as the mountaineous terrain<br>is difficult to navigate through.) All in all, each area has its own strengths, which you can use to your advantage.<br><br>By the way, I hope you enjoy the game! The game is meant to be played in one sitting, so there is no game save available.<br>Good luck, my conquerors! Press 'ESC' to start the game.",
  5: "Archetype Selection",
  6: "The Scholar archetype is one that prioritizes advancement of society. Researching technologies and improving quality of life<br>tend to be a scholar's main concerns. Scholars have great battle IQ, which can make the difference in long fought battles and wars.<br>Scholarly rulers have access to the special technology <b>Bane of the Dark Ages</b> which improves technology research rates and life <br>expectancy; all in all, scholars are a jack of all trades and are revered for their sophistication.",
  7: "The Leader archetype is one that prioritizes the populus. Gaining more followers and increasing performance all-around<br>is the leader's forte. Leaders are able to gain more military easier, and in times of despair, can lift the mood of the populus<br>through inspiring them by his or her sheer will. Leader-like rulers have access to the ability <b>By Sheer Will</b>, which allows the army<br>to gain militia, which aids you in difficult wars. Leaders are able to make the difference in the tough times you need 'em.",
  8: "The Conqueror archetype is one that prioritizes land control. Often victorious, conquerors have good battle sense and know when to take the right engagements.<br>Conquerors are able to turn the tables with smaller armies, and have insanely large battle IQ. Conquering rulers have access to the ability <b>The Last Stand</b><br>which enhances any given army, making the opposition weaker in relation to your troops; taking fights against larger groups is much easier with this ability.<br>Conquerors are revered for their quick-thinking and ability to lead, whilst being a middle ground between scholar and leader."
};

var title = "Empire Simulator";
var author = "Created by Rishi Santhanam";
var speed = 70;

// archetypes
// Scholar
function dScholar() {
  document.getElementById('archdisp').innerHTML = alltext[6];
}
// leader
function dLeader() {
  document.getElementById('archdisp').innerHTML = alltext[7];
}
// Conqueror
function dConqueror() {
  document.getElementById('archdisp').innerHTML = alltext[8];
}

// mousleave
function dLeave() {
  document.getElementById('archdisp').innerHTML = alltext[0];
}

// start game, choosing an archetype
function startGame() {
  document.getElementsByClassName('title')[0].innerHTML = "";
  document.getElementsByClassName('title')[1].innerHTML = "";
  document.getElementsByClassName('initButtons')[0].style.visibility = "hidden";
  document.getElementsByClassName('initButtons')[1].style.visibility = "hidden";
  // using htp1 to talk about archetypes
  document.getElementById('htp1').style.marginTop = "50px";
  document.getElementById('htp1').innerHTML = "";

  // now use l to iterate
  // also if how to play is Esc pressed, A gets skipped
  // hard coding this fix >>
  if (xy == true) { document.getElementsByClassName('title')[0].innerHTML += 'A'; }
  archTitle();

}

function archTitle() {

  if (l < alltext[5].length) {
    document.getElementsByClassName('title')[0].innerHTML += alltext[5].charAt(l);
    l++;
    setTimeout(archTitle, speed - 10)
  }

  if (l == alltext[5].length) {
    // changing everything BRAH
    document.getElementById('spacing_arch').style.margin = "25px";
    document.getElementsByClassName('spacing3')[0].style.margin = "10px";
    document.getElementsByClassName('archT')[0].innerHTML = "Scholar";
    document.getElementsByClassName('archT')[0].style.visibility = "visible";
    document.getElementsByClassName('spacing3')[1].style.margin = "10px";
    document.getElementsByClassName('archT')[1].innerHTML = "Leader";
    document.getElementsByClassName('archT')[1].style.visibility = "visible";
    document.getElementsByClassName('spacing3')[2].style.margin = "10px";
    document.getElementsByClassName('archT')[2].innerHTML = "Conqueror";
    document.getElementsByClassName('archT')[2].style.visibility = "visible";
    document.getElementById('archdisp').style.marginTop = "45px";
  }
}

// how to play displayed
function htp() {
  document.getElementsByClassName('title')[0].innerHTML = "";
  document.getElementsByClassName('title')[1].innerHTML = "";
  document.getElementsByClassName('initButtons')[0].style.visibility = "hidden";
  document.getElementsByClassName('initButtons')[1].style.visibility = "hidden";

  htp2();

}

function htp2() {
  document.getElementById('htp1').style.marginTop = '70px';
  if (k < alltext[3].length) {
    document.getElementsByClassName('title')[0].innerHTML += alltext[3].charAt(k);
    k++;
    setTimeout(htp2, speed - 10);
  }

  if (k == alltext[3].length) {
    document.getElementById('htp1').innerHTML = alltext[4];

    // checking for escape
    document.addEventListener('keydown', (event) => {
      if (event.key == "Escape") {
        xy = true;
        startGame();
       }
}, false);
    }
  }

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

  if (j == alltext[2].length) {
  document.getElementsByClassName('initButtons')[0].style.visibility = "visible";
  document.getElementsByClassName('initButtons')[1].style.visibility = "visible";
}

}
