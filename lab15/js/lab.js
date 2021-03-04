/*
  * Authors: Marco Fajardo, <Maanfaja@ucsc.edu>
  * Created: 3 March 2021
  * License: Public Domain
*/

// apiEndpoint = "https://api.thecatapi.com/v1/images/search";

$("#activate").click(catApi);

function textOnscreen(text){
  $("#output").html(text);
}

function catApi (){
$.ajax({
    //my endpoint
    url: "https://api.thecatapi.com/v1/images/search",

    data: {

            id: 123,
            api_key: "125c6ddb-369e-4f27-99cb-96b1c689e939",
          },
    //type would be GET
    type: "GET",
    // I need the json and image from the api
    dataType : "json",

    success: function(data) {
      var textData = JSON.stringify(data);
      var str = "";
      var imageURL = data.img;
      var title = data.title;
      str += "<h2>" + title + "</h1>";
      str += "<img src='" + imageURL + "'>"
        console.log("Success", textData);
        textOnscreen(str);
    },

    error: function (jqXHR, textStatus, errorThrown) {
        console.log("Failure");
        textOnscreen(errorThrown + " Status:" + status);
    }
})
}
