//computer chooses a random letter (a-z);
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//player chooses a random 9 letters (a-z);
var playerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 0;
var guesses = [];


//if one of the player's choices are equal to the computer's choice, player wins;
//if after 9 tries one of the player's choices are not equal to the computer's choice, player lost;
//keeping scores
//Guesses Left: starts with 9 and decreases by 1 with every player's choice untill player wins or it is 0;
//Your Guesses So Far: display the letters than player typed in untill player wins or lose;
//Wins: when player wins, increase the Wins by 1 and start the game again without refreshing the page; 
//Losses: when player lose, increase the Losses by 1 and start the game again without refreshing the page;