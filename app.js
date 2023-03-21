const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');
let userChoice 
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    //console.log(typeof userChoice);
    //console.log(userChoiceDisplay.innerHTML);
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber ===1){
        computerChoice = 'rock';
    }
    if(randomNumber ===2){
        computerChoice = 'scissors';
    }
    if(randomNumber ===3){
        computerChoice = 'paper';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    if(computerChoice === userChoice){
        result = 'it is a draw!';
    }

    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'you win!';
    }
    if(computerChoice === 'rock' && userChoice === 'sissors'){
        result = 'you lose!';
    }
    if(computerChoice === 'paper' && userChoice === 'sissors'){
        result = 'you win!';
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'you lose!';
    }
    if(computerChoice === 'sissors' && userChoice === 'rock'){
        result = 'you win!';
    }
    if(computerChoice === 'sissors' && userChoice === 'paper'){
        result = 'you lose!';
    }
    resultDisplay.innerHTML = result;
}