function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();
    return humanChoice;
}

function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice = " ";
    if (randomNumber == 1) {
        computerChoice = "rock";
    } if (randomNumber == 2) {
        computerChoice = "paper";
    } if (randomNumber == 3) {
        computerChoice = "scissors";
    }
    return computerChoice;
}

const results = document.querySelector("#results");
const roundResult = document.querySelector("#roundResult");
const score = document.querySelector("#score");
const gameWinner = document.querySelector("#gameWinner");

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanScore >= 5 || computerScore >= 5) {
        return; 
    }

    if (humanChoice === computerChoice) {
        roundResult.textContent = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice ==="paper")
    ) {
        humanScore++;
        roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
    score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5) {
        gameWinner.textContent = `You won the game!`;
    } else if (computerScore === 5) {
        gameWinner.textContent = `You lose, the computer won!`;
    }
}

let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", function () {
    playRound("rock", getComputerChoice());
});

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", function () {
    playRound("paper", getComputerChoice());
});

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", function () {
    playRound("scissors", getComputerChoice());
});

