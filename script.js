// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
var uperCase = "QWERTYUIOPLKJHGFDSAZXCVBNM".split("");
var numbers = "1234567890".split("");
var symbols = "!@#$%^&*!@#$%^&*".split("");
var passwordLength = ""
var askUper = true
var askLower = true
var askNumber = true
var askSymbols = true
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
  var passwordLength = prompt ("How long do you want you password to be? It must be between 8 and 128.");
  var passNum = Number(passwordLength, 10)
  if (passNum > 128 || passNum < 8) alert ("Please pick a length between 8 and 128")
  var askUper = confirm("Do you want uppercase letters in your password?")
  var askNumber = confirm("Do you want numbers in your password?")
  var askSymbols = confirm("Do you want special symbols in your password?")
  let characters = lowerCase
  if (askUper === true) characters = characters.concat(uperCase);
  if (askNumber === true) characters = characters.concat(numbers);
  if (askSymbols === true) characters = characters.concat(symbols);
  const passwordCharacters = []
  for (var i = 0; i < passNum; i++) { 
  var passEntry = characters[Math.floor(Math.random() * characters.length)]
  passwordCharacters.push(passEntry);
}
return passwordCharacters.join("")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Get random Characters code
function getRandomLowerCase() {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)]
  };
  function getRandomNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]
  };
  function getRandomUperCase() {
      return uperCase[Math.floor(Math.random() * uperCase.length)]
  };
  