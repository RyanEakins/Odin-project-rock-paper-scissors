function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();
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

console.log(getComputerChoice());

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++)
    function playRound(humanChoice, computerChoice) {
// Code goes here for step 5. 
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection); 
}