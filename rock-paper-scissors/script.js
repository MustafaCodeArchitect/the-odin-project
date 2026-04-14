const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log("Computer Choice is:", choice);
    return choice;
}

function getPlayerChoice() {
    let selection = prompt("Enter rock, paper, or scissors: ");
    
    if (!selection) {
        return null;
    } 

    console.log("Player Choice is:", selection);
    return selection;
}

function checkWinnner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    } 
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
   
    if (!options.includes(playerSelection)) {
        return "Invalid input! Please choose rock, paper, or scissors.";
    }

    const result = checkWinnner(playerSelection, computerSelection);
    if (result === "Tie") {
        return "It's a Tie!";
    } else if (result === "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));