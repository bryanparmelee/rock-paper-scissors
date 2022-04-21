const button = document.querySelectorAll('.choice');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const uChoice = document.querySelector('#user-choice');
const cChoice = document.querySelector('#comp-choice');
const theResult = document.querySelector('.result');

const setPic = (choice) => {
    switch(choice) {
        case 'rock':
            return './ASSETS/rock.png';
            break;
        case 'paper':
            return './ASSETS/paper.png';
            break;
        case 'scissors':
            return './ASSETS/scissors.png'
            break;
    }
}


button.forEach((button) => {
    button.addEventListener('click', () => {
      console.log(button.id);
      playRound(button.id, computerPlay());
      uChoice.setAttribute('src', setPic(button.id));
    })
});

const computerPlay = () => {
    let compChoice = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * compChoice.length);
    return compChoice[random];
}

// const userChoice = () => {
//     const regex = /^rock(?!\d|\w|\s)|^paper(?!\d|\w|\s)|^scissors(?!\d|\w|\s)/i;
//     let response = prompt("Rock, Paper or Scissors?");
//     if (!regex.test(response)) {
//         alert("I did not recognize that response. Please try again.");
//         userChoice();
//         } else {
//         return response.toUpperCase();
//         }    
//     } 

const playRound = (playerSelection, computerSelection) => {
     let result = '';
     if (playerSelection === computerSelection) {
            result = "Tie! Choose again." 
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "You lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "You win! Rock beats Scissors!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "You lose! Scissors beats Paper!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "You win! Paper beats Rock!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "You lose! Rock beats Scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "You win! Scissors beats Paper";
    }
        theResult.textContent = result;
}

const game = () => {
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        const playerSelection = userChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

