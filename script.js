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
  console.log(length)
  // Then do validations, if I am doing the checking

  if (size >= 8 && size <= 128) {
    var isLowercase = confirm("Include Lowercase?")
    console.log(isLowercase)
    var isUppercase = confirm("Include Uppercase?")
    console.log(isUppercase)
    var isNumber = confirm("Include Numbers?")
    console.log(isNumber)
    var isSpecial = confirm("Include Special Character?")
    console.log(isSpecial)

    if (isLowercase === true) {
      var positionString = Math.floor(Math.random() * 26)
      console.log(positionString)
      finalpwd = finalpwd + lowercase[positionString]
    }
    if (isUppercase === true) {
      var positionString = Math.floor(Math.random() * 26)
      console.log(positionString)
      finalpwd = finalpwd + uppercase[positionString]
    }
    if (isNumber === true) {
      var positionString = Math.floor(Math.random() * 10)
      console.log(positionString)
      finalpwd = finalpwd + number[positionString]
    }
    if (isSpecial === true) {
      var positionString = Math.floor(Math.random() * 10)
      console.log(positionString)
      finalpwd = finalpwd + special[positionString]
    }

  }
  else {
    alert("Invalid Entry")
  }

  return finalpwd
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
