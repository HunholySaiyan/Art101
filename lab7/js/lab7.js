/*
  * Authors: Marco Fajardo, <Maanfaja@ucsc.edu>
             Elena Ibbetson  ,
  * Created: 30 January 2021
  * License: Public Domain
*/

function returnNewName () {

  var userName = window.prompt("Want a New name!!! Provide your old boring one first");
  console.log("userName=", userName);

  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //split the name into an array


  var nameArrayreverse = nameArray.reverse('');
  console.log("nameArrayreverse =", nameArrayreverse);
  //reverse string to form a new name

  var nameSorted = nameArrayreverse.join('');
  console.log("nameSorted = ", nameSorted);
  //sort the reversed name to form a new name
  return nameSorted;

}
document.writeln(" This is your new name:", returnNewName(), "</br>");
