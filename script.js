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

function getHumanChoice() {
    const input = prompt("Rock, Paper, Scissors, SHOOT! (enter your chosen hand here):");
    const revisedInput = input.toLowerCase().trim();
    if (revisedInput === "rock" || revisedInput === "paper" || revisedInput === "scissors") {
        return revisedInput;
    } else {
        return "invalid input";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function winnerText(winner) {
        console.log(`${winner} won! The current score is Human: ${humanScore} and Computer: ${computerScore}`);
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "invalid input") {
            computerScore++;
            winnerText("Computer");
        } else if (humanChoice === computerChoice) {
            winnerText("No one");
        } else if ((computerChoice === "rock" && humanChoice === "paper") || 
        (computerChoice === "paper" && humanChoice ==="scissors") || 
        (computerChoice === "scissors" && humanChoice === "rock")) {
            computerScore++;
            winnerText("Computer");
        } else {
            humanScore++;
            winnerText("Human");
        }
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
}

playGame();