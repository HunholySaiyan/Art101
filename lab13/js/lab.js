/*
  * Authors: Marco Fajardo, <Maanfaja@ucsc.edu>
  * Created: 24 February 2021
  * License: Public Domain
*/
  var longString = i;
for (var i=1; i<=200; i++){
    if(i% 15 == 0) {
    console.log("FizzBuzz!");
    longString += i + "FizzBuzz!<br>";

  } else if(i% 21 == 0) {
    console.log("FizzBoom!");
    longString += i + "FizzBoom!<br>";

  } else if(i% 35 == 0 ) {
    console.log("BuzzBoom!");
  longString += i + "BuzzBoom!<br>";

  } else if (i% 3 == 0) {
    console.log("Fizz!");
  longString += i + "Fizz!<br>";

  } else if (i% 5 ==0){
    console.log("Buzz!");
  longString += i + "Buzz!<br>";

  } else if (i% 7 == 0){
    console.log("Boom!");
    longString += i + "Boom!<br>";

} else console.log(i);

};

$("#output").html(longString);

// function sortingHat(str){
//   len = str.length;
//   mod = len % 4;
//   if (mod == 0) {
//     return "Hufflepuff"
//   }
//   else if (mod == 1) {
//     return "Ravenclaw"
//   }
//   else if (mod == 2) {
//     return "slytherin"
//   }
//   else if (mod == 3) {
//     return "Gryffindor"
//   }
// };


// var myButton = document.getElementById("button");
// myButton.addEventListener("click", function() {
//   var name = document.getElementById("input").value;
//   var house = sortingHat(name);
//   newText = "<p>The sorting hat has sorted you into " + house + "</p>";
//   document.getElementById("output").innerHTML = newText;
//
// });
