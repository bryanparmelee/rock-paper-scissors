const button = document.querySelectorAll('.choice');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const uChoice = document.querySelector('#user-choice');
const cChoice = document.querySelector('#comp-choice');
const theResult = document.querySelector('.result');
const youScore = document.querySelector('#you-score');
const compScore = document.querySelector('#comp-score');
let uScore = 0;
let cScore = 0;

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
    cChoice.setAttribute('src', setPic(compChoice[random]));
    return compChoice[random];
}



const playRound = (playerSelection, computerSelection) => {
     let result = '';
     if (playerSelection === computerSelection) {
            result = "Tie! Choose again." 
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "You lose! Paper beats Rock";
        cScore++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "You win! Rock beats Scissors!";
        uScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "You lose! Scissors beats Paper!";
        cScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "You win! Paper beats Rock!";
        uScore++
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "You lose! Rock beats Scissors!";
        cScore++
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "You win! Scissors beats Paper";
        uScore++;
    }
    theResult.textContent = result;
    youScore.textContent = uScore;
    compScore.textContent = cScore;
    if (uScore === 5) {
        alert("You win! Congrats!");
        uScore = 0;
        cScore = 0;
    } else if (cScore === 5) {
        alert("You lose! Try again!");
        uScore = 0;
        cScore = 0;
    }
}

// const game = () => {
   
//    if (uScore === 5) {
//        alert("You win! Congrats!");
//        uScore = 0;
//        cScore = 0;
//        game();
//    } else if (cScore === 5) {
//        alert("You lose! Try again!");
//        uScore = 0;
//        cScore = 0;
//        game();
//    }
// }

// game();

