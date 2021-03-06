// validating both username and password in one function
function validateForm() {
  console.log("validate form reached")
  var validation = true
  validation &= validateUserName()
  validation &= validatePassword()
  if (validation) {
    document.getElementById("header").innerHTML = "success!"
  }
  return validation
}


// validating that username has at least one number
function validateUserName() {
  console.log("called")
  let found_number = false
  var user = document.forms["submitForm"]["username"].value
  for(i = 0; i < user.length; i++) {
    if(Number(user[i])) {
      found_number = true
    }
  }
  if(found_number) {
    document.getElementById("userError").innerHTML = ""
    return true
  } else {
      document.getElementById("userError").innerHTML = "Your username must have a number"
      return false
  }
}

// validating password to be 12345678
function validatePassword() {
  console.log("validate password reached")
  var password = document.forms["submitForm"]["password"].value
  if (Number(password) == 12345678) {
    document.getElementById("passwordError").innerHTML = ""
    return true
  } else {
    document.getElementById("passwordError").innerHTML = "Your password must be 12345678"
    return false
  }
}

// changing header text to user input value
var inputUser = document.getElementById('username');

inputUser.onkeyup = function() {
  console.log("hit onInput")
  document.getElementById('header').innerHTML = inputUser.value
}
