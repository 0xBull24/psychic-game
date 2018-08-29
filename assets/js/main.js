// No undeclared variables
"use strict";

// Game object
var gameObject = {
  alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  guessChoices: [],
  userChoice: '',
  guesses: 10,
  wins: 0,
  losses: 0,

  // Resest most things on the page without a refresh
  // Dont reset the win to allow it to count up
  reset: function () {
    this.guesses = 10;
    this.guessChoices = [],
    document.querySelector("#losses").innerHTML = this.losses.toString(10);
    document.querySelector("#guesses").innerHTML = this.guesses.toString(10);
    document.querySelector("#guesschoices").innerHTML = gameObject.guessChoices;
  }
}

// Set computers guess
var computerLetter = gameObject.alphabet[Math.floor(Math.random() * gameObject.alphabet.length)].toLowerCase();

// Track user input
document.onkeydown = function (event) {
  gameObject.userChoice = event.key.toLowerCase();
  
  // Test User Choice
  console.log('The users choice is: ' + gameObject.userChoice);

  // Win condition checks if user guess is the computers guess
  // increments the win counter, change the scoreboard, and resets the game
  if (gameObject.userChoice === computerLetter ) {
    gameObject.wins++;
    document.querySelector("#wins").innerHTML = gameObject.wins.toString(10);
    gameObject.reset();
    computerLetter = gameObject.alphabet[Math.floor(Math.random() * gameObject.alphabet.length)].toLowerCase();
  }

  // Resst condition
  // Game resets but not the wins
  else if (gameObject.guesses === 0){
    gameObject.reset();
    gameObject.losses++;
    computerLetter = gameObject.alphabet[Math.floor(Math.random() * gameObject.alphabet.length)].toLowerCase();
  }

  // Bad Guess Condition
  else {
    gameObject.guesses--;
    gameObject.guessChoices.push(gameObject.userChoice);
    document.querySelector("#losses").innerHTML = gameObject.losses.toString(10);
    document.querySelector("#guesses").innerHTML = gameObject.guesses.toString(10);
    document.querySelector("#guesschoices").innerHTML = gameObject.guessChoices;
  }
}