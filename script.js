let playerSelection;
let playerCounter = document.getElementById("playerScore");
let computerCounter = document.getElementById("computerScore");
let computerChoice = document.getElementById("computerChoice");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerSelection = button.id;
    game();
  });
});
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const number = Math.floor(Math.random() * 3);
  return choices[number];
}
function playRound(playerSelection, computerSelection) {
  computerChoice.innerHTML = `Computer picked ${computerSelection}`;
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
  let result = playRound(playerSelection, computerSelection);
  if (result === 0) {
    playerCounter.innerHTML++;
  } else if (result === 1) {
    computerCounter.innerHTML++;
  } else if (result === 2) {
    console.log(`It's a tie!`);
    computerChoice.innerHTML = "It's a tie, please try again.";
  }
  computerSelection = computerPlay();
  //playerSelection = playerPlay();
  if (result === 1) {
    playerScore++;
  } else if (result === 0) {
    computerScore++;
  }
  console.log(computerScore, playerScore);
  if (playerScore === 5 && computerScore <= 5) {
    gameOver();
  } else if (computerScore === 5 && playerScore <= 5) {
    gameOver();
  }
}
let computerSelection = computerPlay();
let computerScore = 0;
let playerScore = 0;

function gameOver() {
  document.getElementById("game").classList.add("hidden");
  document.querySelector("h3").classList.add("hidden");
  document.getElementById("winnerPlayer").classList.remove("hidden");
  const newGame = document.createElement("button");
  newGame.innerText = "New Game?";
  // newGame.addEventListener("click", reload());
  document.body.appendChild(newGame);
  newGame.addEventListener("click", function () {
    location.reload();
  });
  newGame.classList.add("newGame");
}
