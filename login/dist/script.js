/*lets user type password without showing it*/
function turnPassword()
      {
         document.getElementById("password")
            .innerHTML = "<input id=\"password\" name=\"password\" type=\"password\"/>";
         document.getElementById("password").focus();
      }

/*Google sign in process*/
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); 
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); 
}

/*FB sign in process*/