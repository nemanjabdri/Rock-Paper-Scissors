function getComputerChoice() {

    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomValue = choices[Math.floor(Math.random() * choices.length)];

    return randomValue;
}

function playRound(playerSelection, computerSelection){

    const playerChoice = playerSelection.toLowerCase();

    if (playerChoice === 'rock' && computerSelection === 'Paper'){
        console.log('You Lose! Paper beats Rock');
        return 0;
    }else if (playerChoice === 'rock' && computerSelection === 'Scissors'){
        console.log('You Win! Rock beats Scissors');
        return 1;
    }else if (playerChoice === 'paper' && computerSelection === 'Rock'){
        console.log('You Win! Paper beats Rock');
        return 1;
    }else if (playerChoice === 'paper' && computerSelection === 'Scissors'){
        console.log('You Lose! Paper beats Rock');
        return 0;
    }else if (playerChoice === 'scissors' && computerSelection === 'Rock'){
        console.log('You Lose! Paper beats Rock');
        return 0;
    }else if (playerChoice === 'scissors' && computerSelection === 'Paper'){
        console.log('You Win! Scissors beats Paper');
        return 1;
    }else {
        console.log('Drew! Keep going :)');
        return -1;
    }
}

function game(){

    const rounds = 5;
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection, computerSelection;

    for(let i = 0; i < rounds; i++){
        playerSelection = prompt('Select: Rock or Paper or Scissors');
        computerSelection = getComputerChoice();
        let outcome = playRound(playerSelection, computerSelection);
        if (outcome === 0){
            computerScore += 1;
        }else if(outcome === 1){
            playerScore += 1;
        }
    }

    if(playerScore > computerScore){
        return 'Player Wins!, Brutal!';
    }else if(playerScore < computerScore){
        return 'Computer Wins!';
    }else if(playerScore === computerScore){
        return 'Drew, good game!';
    }
}

const gameMessage = game();
console.log(gameMessage);
alert(gameMessage);