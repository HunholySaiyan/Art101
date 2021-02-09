/*
  * Authors: Marco Fajardo, <Maanfaja@ucsc.edu>
  * Created: 30 January 2021
  * License: Public Domain
*/

//Functions
function firstThing(test) {
  console.log(test + ": this is the first thing.<br>")
}
function secondThing(test) {
  console.log(test + ": this is the second thing.<br>")
}
function thirdThing(test) {
  console.log(test + ": this is the third thing.<br>")
}
//first test with the callbacks
firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");

//second test with the callbacks
setTimeout(function(){
  firstThing("TEST 2");
}, 0);
setTimeout(function(){
  secondThing("TEST 2");
}, 0);
setTimeout(function(){
  thirdThing("TEST 2");
}, 0);

//third test with the callback in different order
setTimeout(function(){
  firstThing("TEST 3");
}, 3000);
setTimeout(function(){
  secondThing("TEST 3");
}, 1000);
setTimeout(function(){
  thirdThing("TEST 3");
}, 2000);
