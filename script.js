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
function chooseWinner() {
  if (computerSelection === "rock" && playerSelection === "paper") {
    return "winner";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    return "looser";
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    return "winner";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    return "looser";
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    return "winner";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    return "looser";
  } else {
    return "tie";
  }
}
//console.log(computerPlay());
function playRound(playerSelection, computerSelection) {
  let result = chooseWinner();
  console.log(result);
  //compare player selection to computer selection
  //return the winner
}
const computerSelection = computerPlay();
const playerSelection = playerPlay();
console.log(playRound(playerSelection, computerSelection));
console.log(computerSelection);

//add a game() function to call the functions
//Add a loop to play multiple rounds.
//log the result of each loop to the console.
//log the game winner (Whoever won the most rounds)
