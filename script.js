// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split(
  '');
var uperCase = "QWERTYUIOPLKJHGFDSAZXCVBNM".split("");
var numbers = "1234567890".split("");
var passwordLength = ""
var askUper = true
var askLower = true
var askNumber = true

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
function generatePassword() {
  var passwordLength = prompt (
"How long do you want you password to be ?"
  );
  var askUper = confirm("Do you want uppercase lettersin your password?")
  var askNumber = confirm("Do you want numbers password?")
  var askLower = confirm("Do you want lowercase letters in you password?")
console.log(passwordLength)
console.log(askUper)
console.log(askNumber)
console.log(askLower)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

