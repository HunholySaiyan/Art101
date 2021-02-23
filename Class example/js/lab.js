/*
  * Authors: Marco Fajardo, <Maanfaja@ucsc.edu>
  * Created: 17 February 2021
  * License: Public Domain
*/

// button to challange
$("#challenge").append("<button id='c-button'>Button</button>");
$("#problem").append("<button id='p-button'>Button</button>");
$("#results").append("<button id='r-button'>Button</button>");

$("#c-button").click(function(){
    $(this).parent.toggleClass("special");
    // $(this).parent()
})

$("#p-button").click(function(){
    $(this).parent.toggleClass("special");
    // $(this).parent()
})

$("#r-button").click(function(){
    $(this).parent.toggleClass("special");
    // $(this).parent()
})
