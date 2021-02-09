console.log("javascript loaded");
var nameVar = "Toni";
var numVar = 5;
console.log(numVar);
numVar = 25;
console.log(numVar);

function myFirstFunction () {
  console.log("this is my first function!!!");
}

function comparingNumbers(firstNum, secondNum){
    console.log("first Number: "+firstNum+"second number: "+secondNum);
    console.log("first Number is greater than second Number " + (firstNum>secondNum));
    console.log(numVar);
    firstNum = 11;
    secondNum = 12;
    console.log("first Number is greater than second Number " + (firstNum>secondNum))
    numVar=numVar+3
}
comparingNumbers(1,2);
console.log(numVar);
numVar = numVar + 40; //68
comparingNumbers(12,18);
console.log(numVar);

function userInfo(firstName, lastName) {
  var results;
  results = "my first name is "+firstName +" and my last name is "+lastName
  return results;
}

userInfo("Marco", "Fajardo");
