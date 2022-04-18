function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const number = Math.floor(Math.random() * 3);
  return choices[number];
}
function playerPlay() {
  let choice = prompt("Please choose rock, paper, or scissors").toLowerCase();
  if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    alert("That was not rock, paper, or scissors. Please try again.");
    location.reload();
  } else {
    return choice;
  }
}
function chooseWinner(playerSelection, computerSelection) {
  if (computerSelection === "rock" && playerSelection === "paper") {
    return 0;
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    return 1;
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    return 0;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    return 1;
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    return 0;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    return 1;
  } else {
    return 2;
  }
}
function playRound(playerSelection, computerSelection) {
  let result = chooseWinner(playerSelection, computerSelection);

  if (result === 0) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
  } else if (result === 1) {
    console.log(`You loose! ${computerSelection} beats ${playerSelection}!`);
  } else if (result === 2) {
    console.log(`It's a tie!`);
  }
  //console.log(result);
  //compare player selection to computer selection
  //return the winner
}
const computerSelection = computerPlay();
const playerSelection = playerPlay();
playRound(playerSelection, computerSelection);
console.log(computerSelection);

//add a game() function to call the functions
//Add a loop to play multiple rounds.
//log the result of each loop to the console.
//log the game winner (Whoever won the most rounds)
