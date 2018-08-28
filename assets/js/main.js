// No undeclared variables
"use strict";

// Game object
var gameObject = {
  alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  computerLetter: this.alphabet[Math.floor(Math.random() * this.alphabet.length)],
  userChoice: '',
  guesses: 10,
  wins: 0,
  losses: 0,
}

// Track user input
document.onkeyup = function (event) {
  gameObject.userChoice = event.key;

  // Test User Choice
  console.log('The users choice is: ' + gameObject.userChoice);
}

// Tests
// Test all letters in array
for (var count = 0; count < gameObject.alphabet.length; count++) {
  console.log(gameObject.alphabet[count]);
}

// Test Random letter
console.log('This is the letter the computer selected: ' + gameObject.computerLetter);