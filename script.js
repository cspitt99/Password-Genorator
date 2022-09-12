// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = lowercase.toUpperCase()
var number = "0123456789"
var special = "!@#$%^&*()"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var finalpwd = ""

  var length = prompt("Please enter 8 to 128 characters")

  if (length >= 8 && length <= 128) {
    var isLowercase = confirm("Include Lowercase?")
    var isUppercase = confirm("Include Uppercase?")
    var isNumber = confirm("Include Numbers?")
    var isSpecial = confirm("Include Special Character?")

    if (isLowercase === true) {
      var positionString = Math.floor(Math.random() * 26)
      finalpwd = finalpwd + lowercase[positionString]
    }
    if (isUppercase === true) {
      var positionString = Math.floor(Math.random() * 26)
      finalpwd = finalpwd + uppercase[positionString]
    }
    if (isNumber === true) {
      var positionString = Math.floor(Math.random() * 10)
      finalpwd = finalpwd + number[positionString]
    }
    if (isSpecial === true) {
      var positionString = Math.floor(Math.random() * 10)
      finalpwd = finalpwd + special[positionString]
    }

  }

  else {
    alert("Invalid Entry")
  }

  for (var i = 0; i < length; i++) {
    finalpwd += finalpwd[Math.floor(Math.random() * finalpwd.length)];
}

  return finalpwd
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
