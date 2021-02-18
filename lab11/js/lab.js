/*
  * Authors: Marco Fajardo, <Maanfaja@ucsc.edu>
  * Created: 17 February 2021
  * License: Public Domain
*/

// button to challange
var challengeEl = $("#challenge");
  challengeEl.append("<button id=my-button> Challenge").css("color","red");
  $("#my-button").on('click',function(){
    $("#challenge").css('color','green');
    $("#challenge").css('font-size','200%');
    $("#challenge").css('font-family','cursive');
  });

// button to Problems
var challengeEl = $("#problem");
  challengeEl.append("<button id=my-button2> Problems").css("color","purple");
  $("#my-button2").on('click',function(){
  $("#problem").css('color','pink');
  $("#problem").css('font-size','300%');
  $("#problem").css('font-family','sans-serif');
  });
// button to Results
var challengeEl = $("#results");
  challengeEl.append("<button id=my-button3> Results").css("color","blue");
  $("#my-button3").on('click',function(){
  $("#results").css('color','red');
  $("#results").css('font-size','100%');
  $("#results").css('font-family','system-ui');
});
