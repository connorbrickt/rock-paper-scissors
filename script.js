function getComputerChoice() {
    const choice = Math.floor((Math.random() * 3) + 1)
    let output = "";
    if (choice === 3) {
        output = "scissors";
    } else if (choice === 2) {
        output = "paper";
    } else {
        output = "rock";
    }
    return output;
}

let humanScore = 0;
let computerScore = 0;

const results = document.querySelector(".results");

function winnerText(winner) {
    if (humanScore === 5 || computerScore === 5) {
        results.textContent = `${winner} won the game! The final score is Human: ${humanScore} and Computer: ${computerScore}`;
        humanScore = 0;
        computerScore = 0;
    } else {
        results.textContent = `${winner} won this round! The current score is Human: ${humanScore} and Computer: ${computerScore}`;
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        winnerText("No one");
    } else if ((computerChoice === "rock" && humanChoice === "paper") ||
        (computerChoice === "paper" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "rock")) {
        computerScore++;
        winnerText("Computer");
    } else {
        humanScore++;
        winnerText("Human");
    }
}

const options = document.querySelector(".options");

options.addEventListener("click",
    e => playRound(e.target.textContent.toLowerCase(), getComputerChoice()));
