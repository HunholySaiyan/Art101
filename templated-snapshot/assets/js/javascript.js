// var newEl = document.getElementById('nav');
// newEl.innerHTML = "this is a navigation box";
function submitBio(){

  var nameVar = document.getElementById("name").value;

    console.log(nameVar);

  var emailVar = document.getElementById("email").value;
    console.log(emailVar);

  var messageVar = document.getElementById("message").value;
    console.log(messageVar);

      document.getElementById('name_email_id').innerHTML= nameVar + emailVar;

      document.getElementById('bio_id').innerHTML= messageVar;
}
document.getElementById("submit_bio_id").addEventListener('click', submitBio);
