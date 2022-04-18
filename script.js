function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const number = Math.floor(Math.random() * 3);
  return choices[number];
}
console.log(computerPlay());
//function playRound(playerSelection, computerSelection) {
//prompt player for input
//sanatize input to lowercase
//compare player selection to computer selection
//return the winner
//}
//const computerSelection = computerPlay();
//console.log(playRound)

//add a game() function to call the functions
//Add a loop to play multiple rounds.
//log the result of each loop to the console.
//log the game winner (Whoever won the most rounds)
