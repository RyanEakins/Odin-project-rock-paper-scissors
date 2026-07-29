function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();
    return humanChoice;
}

function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice = " ";
    if (randomNumber == 1) {
        computerChoice = "rock!";
    } if (randomNumber == 2) {
        computerChoice = "paper!";
    } if (randomNumber == 3) {
        computerChoice = "scissors!";
    }
    return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock!" && computerChoice === "scissors!") ||
        (humanChoice === "paper" && computerChoice === "rock!") ||
        (humanChoice === "scissors!" && computerChoice ==="paper!")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
    console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    for (let i= 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }
}

playGame();