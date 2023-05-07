// Assignment Code
var generateBtn = document.getElementById("button");

// Write password to the #password input
function writePassword(String) {
  var password = generatePassword(passwordText);
  var passwordText = document.querySelector(charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");
  var passwordLength = 10;
  passwordText.value = password;
  return (password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

