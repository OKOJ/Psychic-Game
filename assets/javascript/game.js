//computer chooses a random letter (a-z);
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerGuess = choices[Math.floor(Math.random() * choices.length)];
console.log(computerGuess);

//player chooses a random 9 letters (a-z);
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var playerGuesses = [];

//References to the places in the HTML <span>
var playerWinsText = document.getElementById("wins-text");
var playerLossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var playerGuessesText = document.getElementById("yourGuesses-text");

document.onkeyup = function (event) {

    guessesLeft--;
    var playerGuess = event.key;
    var playerGuessLower = playerGuess.toLowerCase();
    // add letter to playerGuesses array
    playerGuesses.push(playerGuess);
    // show letter on page
    playerGuessesText.textContent = playerGuesses;
    // change guessesLeftText to guessesLeft
    guessesLeftText.textContent = guessesLeft;
    //set the guesses to 9 tries
    function resetGame() {

        guessesLeft = 9;
        playerGuesses = [];

        //References to the places in the HTML <span>

        guessesLeftText = document.getElementById("guessesLeft-text");
        playerGuessesText = document.getElementById("yourGuesses-text");
    };

    //you win 
    if (playerGuessLower === computerGuess) {
        //if you win increament wins
        wins++;
        // change playerWinsText
        playerWinsText.textContent = wins;

    };

    // you lose
    if (guessesLeft === 0 && playerGuessLower !== computerGuess) {
        //if you lose increament losses
        losses++;
        // change playerLossesText
        playerLossesText.textContent = losses;

    };

    //reset
    if (guessesLeft === 0) {

        resetGame();
    };
}