function validateForm() {
  var validation = true
  validation &= validateUserName()
  validation &= validatePassword()
  return validation

}

// set dummy boolean -- no number has been found in the input yet
let found_number = false
// start function that checks for numbers in the username input
function validateUserName() {
  var user = document.forms["submitForm"]["username"].value
// for every character in the string check if i is a #
  for(i = 0; i < user.length; i++) {
// transform every character to number
    if(Number(user[i])) {
      found_number = true
    }
  }
// if number is found set the dummy boolean to true and end loop
  if(found_number) {
    return true
  } else {
// if number is not found alert the user that they need to input at least one number and end loop
      alert("Username must have at least one number")
      return false
  }
}

function validatePassword() {
  var password = document.forms["submitForm"]["password"].value
  if (Number(password) == 12345678) {
    return true
  } else {
    alert("your password must be 12345678")
  }
}


if (validateUserName() && validatePassword()) {
  document.getElementById("header").innerHTML = "success!"
}
