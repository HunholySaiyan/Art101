/*
  * Authors: Marco Fajardo, <Maanfaja@ucsc.edu>
            Jonathan Maeriaga,
  * Created: 30 January 2021
  * License: Public Domain
*/



var myTransport = [ "car", "walk", "Bus"];

var MyMainRide = {};
    MyMainRide.make = "Ford";
    MyMainRide.model = "Fusion";
    MyMainRide.color = " Grey";
    MyMainRide.year = 2010;
    MyMainRide.ownIt = true;

    console.log("Kinds of transport I use" , myTransport);
    console.log("My Main Ride" , MyMainRide);

    document.writeln("Getting around: " + myTransport + "<br>");
    document.writeln("My Main Ride: <pre>",
          JSON.stringify(MyMainRide, null, '\t'), "</pre>");
