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

    while(true){
        playerSelection = //dodati
        computerSelection = getComputerChoice();
        let outcome = playRound(playerSelection, computerSelection);
        if (outcome === 0){
            computerScore += 1;
        }else if(outcome === 1){
            playerScore += 1;
        }

        if(computerScore == rounds){
          return 'Computer Wins!';
        }else if(playerScore == rounds){
          return 'Player Wins!';
        }
    }
}

document.addEventListener("copy", (event) => {
  alert('Coping is not allowed!');
  event.preventDefault();
});

//adding IMGS
const imgRock = document.createElement('img');
imgRock.setAttribute('src', 'rock.png');

const imgPaper = document.createElement('img');
imgPaper.setAttribute('src', 'paper.png');

const imgScissors = document.createElement('img');
imgScissors.setAttribute('src', 'scissor.png');

imgRock.style.height='220px';
imgRock.style.border= '1px solid red';
imgRock.style.transition = "all 0.5s ease";

imgPaper.style.height='220px';
imgPaper.style.border= '1px solid red';
imgPaper.style.paddingLeft='60px';
imgPaper.style.paddingRight='60px';
imgPaper.style.transition = "all 0.5s ease";

imgScissors.style.height='220px';
imgScissors.style.border= '1px solid red';
imgScissors.style.transition = "all 0.5s ease";

const mainScene = document.getElementById('main-scene');
mainScene.appendChild(imgRock);
mainScene.appendChild(imgPaper);
mainScene.appendChild(imgScissors);

mainScene.style.display = 'flex';
mainScene.style.justifyContent = 'center';
mainScene.style.flexWrap = 'wrap'
mainScene.style.marginTop = '50px';

//Img animation
//Rock hover animation
imgRock.addEventListener('mouseenter', () => {
  imgRock.style.height = "250px";
});
imgRock.addEventListener('mouseleave', () => {
  imgRock.style.height = "220px";
});
//paper hover animation
imgPaper.addEventListener('mouseenter', () => {
  imgPaper.style.height = "250px";
});
imgPaper.addEventListener('mouseleave', () => {
  imgPaper.style.height = "220px";
});
//Scissors hover animation
imgScissors.addEventListener('mouseenter', () => {
  imgScissors.style.height = "250px";
});
imgScissors.addEventListener('mouseleave', () => {
  imgScissors.style.height = "220px";
});




// Main Title!
const titleElement = document.createElement("h1");
const titleText = document.createTextNode("Rock Paper Scissors Game");
titleElement.appendChild(titleText);

// create the subtitle element
const subtitleElement = document.createElement("h3");
const subtitleText = document.createTextNode("Creator: NB, 2023");
subtitleElement.appendChild(subtitleText);

// set styles for title and subtitle elements
titleElement.style.color = "white";
subtitleElement.style.color = "white";
titleElement.style.marginBottom = "2px";
subtitleElement.style.marginTop = "2px";

// get the container element and add the title and subtitle elements
const mainTitle = document.getElementById("main-title");
mainTitle.appendChild(titleElement);
mainTitle.appendChild(subtitleElement);

// set styles for the container element
mainTitle.style.display = "flex";
mainTitle.style.flexDirection = "column";
mainTitle.style.alignItems = "center";

//Score text
const scoreText = document.createTextNode("Score:");

const mainScore = document.getElementById("score");
mainScore.appendChild(scoreText);
mainScore.style.color = "white";
mainScore.style.fontSize= "50px";
mainScore.style.marginTop= "10px";
mainScore.style.textAlign ='center';
mainScore.style.border= '1px solid red';

//CurrentScore function
const currentScoreText = document.createTextNode("0 - 0"); //initial score

const currentScore = document.getElementById("currentScore");
currentScore.appendChild(currentScoreText);
currentScore.style.color = "white";
currentScore.style.fontSize= "50px";
currentScore.style.marginTop= "4px";
currentScore.style.textAlign ='center';
currentScore.style.transition ='opacity 0.5s';
currentScore.style.fontSize ='70px';

imgRock.addEventListener('click', () =>{
  currentScore.style.opacity = "0";
  
  setTimeout(() => {
    currentScore.textContent = "1 - 0";
    currentScore.style.opacity = "1";
  }, 200);
});