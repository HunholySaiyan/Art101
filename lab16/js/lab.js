/*
  * Authors: Marco Fajardo, <Maanfaja@ucsc.edu>
  * Created: 8 March 2021
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
    url: "https://xkcd.com/666/info.0.json",

    data: {

            id: 123,
            api_key: "",
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
      var year = data.year;
      var alt = data.alt;
      var day = data.day;

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
