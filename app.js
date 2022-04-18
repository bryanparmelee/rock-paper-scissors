const computerPlay = () => {
    let compChoice = ['ROCK', 'PAPER', 'SCISSORS'];
    let random = Math.floor(Math.random() * compChoice.length);
    console.log(compChoice[random]);
}


const userChoice = () => {
    const regex = /rock|paper|scissors/i;
    let response = prompt("Rock, Paper or Scissors?");
    if (!regex.test(response)) {
        alert("I did not recognize that response. Please try again.");
        userChoice();
        } else {
        return response.toUpperCase();
        }    
    } 





const playRound = (playerSelection, computerSelection) => {
     if (playerSelection === computerSelection) {
            return "Tie! Choose again.";
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return "You lose! Paper beats Rock";
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return "You win! Rock beats Scissors!";
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return "You lose! Scissors beats Paper!";
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return "You win! Paper beats Rock!";
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return "You lose! Rock beats Scissors!";
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return "You win! Scissors beats Paper";
    }
 
}
computerSelection = computerPlay();
playerSelection = userChoice();
console.log(playRound(playerSelection, computerSelection));
