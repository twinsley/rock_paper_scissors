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
function playRound(playerSelection, computerSelection) {
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
function game() {
  for (let i = 0; i < 5; i++) {
    let result = playRound(playerSelection, computerSelection);
    if (result === 0) {
      console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    } else if (result === 1) {
      console.log(`You loose! ${computerSelection} beats ${playerSelection}!`);
    } else if (result === 2) {
      console.log(`It's a tie!`);
    }
    computerSelection = computerPlay();
    playerSelection = playerPlay();
    if (result === 1) {
      playerScore++;
    } else if (result === 0) {
      computerScore++;
    }
  }
}
let computerSelection = computerPlay();
let playerSelection = playerPlay();
let computerScore = 0;
let playerScore = 0;
game();
if (playerScore > computerScore) {
  console.log(`Player wins overall!`);
} else if (computerScore > playerScore) {
  console.log(`Computer wins overall!`);
}
