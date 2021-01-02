
function Match() {
        var password = document.getElementById("password").value;
        var confirm = document.getElementById("confirm").value;
        if (password!=confirm) {
            alert("Passwords must match");
            return false;
        }
  else {
    return true;
  }
        

