const computerPlay = () => {
    let compChoice = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * compChoice.length);
    console.log(compChoice[random]);
}

computerPlay();