
let numbers = ['0','1','2','3','4','5','6','7','8','9']
let lowerCaseLetters = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\', ';', ':', '\'', '"', '<', '>', ',', '.', '/', '?', '`', '~']

function chooseRandom (array) {
  if (array && array.length) {
    let randomIndex = Math.floor(Math.random*(array.length-1))
    return array[randomIndex];
  } else {
  return null;
  }
}



function randomGenerator (max) {
  return Math.floor(Math.random()*max);
}

function shuffle(input) {

  let stringArray = input.split("")

  console.log(stringArray);

  for (let i= stringArray.length-1; i>=0; i--) {
    let randomIndex = randomGenerator(stringArray.length);
    console.log(`Switch chracter at index ${i} with character at index ${randomIndex}` )
    let a = stringArray[i];
    stringArray[i] - stringArray[randomIndex];
    stringArray[randomIndex] = a;
  }
  return stringArray.join("");
}

console.log(shuffle('Hello World'))

function PasswordOptions() {

  let passwordLength = parseInt(prompt(("Choose number of characters for your password"), 10));

  if (Number.isNaN(passwordLength)){
    alert(`Please enter a Number`)
    return null;
  }
 
  if (passwordLength < 8) {
    alert ('Password length must be minimum 8 characters')
    return null;
  }
  
  if (passwordLength > 128) {
    alert ('Password length must be less than 129 characters')
    return null;
  }
  
   console.log(`userInput: ${passwordLength}, type: ${typeof passwordLength}`);

}

function generatePassword(){
  PasswordOptions()
}

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

