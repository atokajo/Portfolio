console.log("Hey, I'm in Javascript! See?");
console.log("Here's another line");

// var text = "Lions and tigers and ";

// function whichBeasts() {
// 	var newText = text + "and bears!";
// 	console.log(newText);
// }


//declare a variable to hold my button object
var myButton = document.getElementById("button1");
var isItHidden = false;
//assign it the ability to act like a button

myButton.addEventListener("click", hideText);
//add an action that when it is clicked like a button, hide some text

function hideText() {
	var myText = document.getElementById("text1");
	if (isItHidden == false) {
		myText.style.visibility = "hidden";
		myText.style.backgroundColor = "red";
		isItHidden = true;
	} else {
		myText.style.visibility = "visible";
		myText.style.backgroundColor = "red";
		isItHidden = false;
	}
	
}