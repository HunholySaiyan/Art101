/*
  * Authors: Marco Fajardo, <Maanfaja@ucsc.edu>
  * Created: 22 February 2021
  * License: Public Domain
*/
//given a number, return a hogwart's house
function sortingHat(str){
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Hufflepuff"
  }
  else if (mod == 1) {
    return "Ravenclaw"
  }
  else if (mod == 2) {
    return "slytherin"
  }
  else if (mod == 3) {
    return "Gryffindor"
  }
};


var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>The sorting hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;

});
