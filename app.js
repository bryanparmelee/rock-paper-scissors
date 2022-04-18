const computerPlay = () => {
    let compChoice = ['ROCK', 'PAPER', 'SCISSORS'];
    let random = Math.floor(Math.random() * compChoice.length);
    return compChoice[random];
}



const userChoice = () => {
    const regex = /^rock(?!\d|\w|\s)|^paper(?!\d|\w|\s)|^scissors(?!\d|\w|\s)/i;
    let response = prompt("Rock, Paper or Scissors?");
    if (!regex.test(response)) {
        alert("I did not recognize that response. Please try again.");
        userChoice();
        } else {
        return response.toUpperCase();
        }    
    } 





// const playRound = (playerSelection, computerSelection) => {
//      if (playerSelection === computerSelection) {
//             alert("Tie! Choose again.");
//     } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
//         alert("You lose! Paper beats Rock");
//     } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
//         alert("You win! Rock beats Scissors!");
//     } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
//         alert("You lose! Scissors beats Paper!");
//     } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
//         alert("You win! Paper beats Rock!");
//     } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
//         alert("You lose! Rock beats Scissors!");
//     } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
//         alert("You win! Scissors beats Paper");
//     }
 
// }



// const game = () => {
//     for (let i = 0; i < 5; i++) {
//         let computerSelection = computerPlay();
//         let playerSelection = userChoice();
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }
