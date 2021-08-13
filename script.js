// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = 'abcdefghijklmnopqrstuvwxyz0123456789 '.split(
  '');
var uperCase = "QWERTYUIOPLKJHGFDSAZXCVBNM".split("");
var numbers = "1234567890".split("");

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

console.log(getRandomLowerCase());
console.log(getRandomUperCase());
console.log(getRandomNumber());
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

