// for (var index=0; index<10; index++){
//   //block of code
//   console.log(index);
//
//   var boxEl = document.createElement("div");
//     boxEl.className="box";
//     boxEl.id+"box_id_"+(index+1);
//   document.getElementById('container').appendChild(boxEl);
//
//
// }
// for (var index=0; index<10; index++){
//   if(index%2 == 0){
//     $("#container").append("<div id='box_id_" +(index+1)+" Class='box_even'></div>");
//   }else {
//     $("#container").append("<div id='box_id_" +(index+1)+" Class='box_odd'></div>");
//   }
//
// }

var original = $("original").text();
console.log(original);

function matchingfunction(){
  var input = $("input").val();
  var substring_var = original.substring(0,input.length)
  console.log(input);
  console.log(substring_var)

  if(input == substring_var){
    $("#input").css('border-color', "blue");
  } else { $("#input").css('border-color', 'red');
}
}
$("#input").keyup(matchingfunction);
