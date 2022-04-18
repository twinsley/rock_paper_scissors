function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const number = Math.floor(Math.random() * 3);
  return choices[number];
}
function playerPlay() {
  const choice = prompt("Please choose rock, paper, or scissors").toLowerCase();
  return choice;
}
//console.log(computerPlay());
function playRound(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection);
  //compare player selection to computer selection
  //return the winner
}
const computerSelection = computerPlay();
const playerSelection = playerPlay();
console.log(playRound(playerSelection, computerSelection));

//add a game() function to call the functions
//Add a loop to play multiple rounds.
//log the result of each loop to the console.
//log the game winner (Whoever won the most rounds)
