/*
  * Authors: Marco Fajardo, <Maanfaja@ucsc.edu>
  * Created: 15 February 2021
  * License: Public Domain
*/


//find the button elemetn
buttonEl = document.getElementById("submit-button");
console.log("button element:" + buttonEl);

//add
buttonEl.addEventListener("click", function(){
  //var userName = window.prompt("Want a New name!!! Provide your old boring one first");
// find the element
nameEl = document.getElementById("user-name");
//get value from name elemetn
var userName = nameEl.value;
  console.log("user-name:", userName);

  titleEl = document.getElementById("title");
  //
  titleEl.innerText = userName;
});
