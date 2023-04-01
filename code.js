function getComputerChoice() {

    const choices = [1, 2, 3]; //rock = 1, paper = 2 and scissors = 3
    const randomValue = choices[Math.floor(Math.random() * choices.length)];

    return randomValue;
}

function playRound(playerSelection){
    const computerSelection = getComputerChoice();

    if ((playerSelection == 1 && computerSelection == 2) || (playerSelection == 2 && computerSelection == 3) || (playerSelection == 3 && computerSelection == 1)){
        console.log('Player Lose!' + playerSelection + " " + computerSelection);
        return -1;
    }else if ((playerSelection == 1 && computerSelection == 3) || (playerSelection == 2 && computerSelection == 1) || (playerSelection == 3 && computerSelection == 2)){
        console.log('Player Win!' + playerSelection + " " + computerSelection);
        return 1;
    }else{
      console.log('Tie!' + playerSelection + " " + computerSelection);
        return 0;
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


//ading IMG atributes
imgRock.style.height='220px';
imgRock.style.transition = "all 0.5s ease";

imgPaper.style.height='220px';
imgPaper.style.paddingLeft='60px';
imgPaper.style.paddingRight='60px';
imgPaper.style.transition = "all 0.5s ease";

imgScissors.style.height='220px';
imgScissors.style.transition = "all 0.5s ease";


// grouping IMGS together
const mainScene = document.getElementById('main-scene');
mainScene.appendChild(imgRock);
mainScene.appendChild(imgPaper);
mainScene.appendChild(imgScissors);

mainScene.style.display = 'flex';
mainScene.style.justifyContent = 'center';
mainScene.style.flexWrap = 'wrap'
mainScene.style.marginTop = '50px';

//Img animations
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

//CurrentScore function
let currentScoreText = document.createTextNode("0  -  0"); //initial score

const currentScore = document.getElementById("currentScore");
currentScore.appendChild(currentScoreText);
currentScore.style.color = "white";
currentScore.style.fontSize= "50px";
currentScore.style.marginTop= "4px";
currentScore.style.textAlign ='center';
currentScore.style.transition ='opacity 0.5s';
currentScore.style.fontSize ='70px';

//Score message function
const scoreMsg = document.getElementById("scoreMessage");
let scoreMessage = document.createTextNode("poruka");
scoreMsg.appendChild(scoreMessage);
scoreMsg.style.color = "white";
scoreMsg.style.fontSize= "40px";
scoreMsg.style.marginTop= "4px";
scoreMsg.style.textAlign ='center';
scoreMsg.style.transition ='opacity 0.5s';

const scoreMsgFunc = (outcome) =>{
  if(outcome == -1){
    scoreMessage.textContent = 'Computer got this round!';
  }else if(outcome == 1){
    scoreMessage.textContent = 'User got this round!';
  }else if(outcome == 0){
    scoreMessage.textContent = 'Tie!';
  }else{
    console.log('wrong input');
  }
};


// CLICK Event listeners
imgRock.addEventListener('click', () =>{ //rock = 1
  game(1);

  currentScore.style.opacity = "0";
  
  setTimeout(() => {
    currentScore.textContent = `${playerScore}  -  ${computerScore}`;
    currentScore.style.opacity = "1";
  }, 200);
});

imgPaper.addEventListener('click', () =>{ //paper = 1
  game(2);

  currentScore.style.opacity = "0";
  
  setTimeout(() => {
    currentScore.textContent = `${playerScore}  -  ${computerScore}`;
    currentScore.style.opacity = "1";
  }, 200);
});

imgScissors.addEventListener('click', () =>{ //scissors = 1
  game(3);

  currentScore.style.opacity = "0";
  
  setTimeout(() => {
    currentScore.textContent = `${playerScore}  -  ${computerScore}`;
    currentScore.style.opacity = "1";
  }, 200);
});

//GAME START
const rounds = 5; //first to 5 wins
let playerScore = 0;
let computerScore = 0;

function game(playerChoice){

      const outcome = playRound(playerChoice);
      if (outcome == -1){ //computer wins
        computerScore += 1;
        scoreMsgFunc(outcome);
      }else if(outcome == 1){ //player wins
        playerScore += 1;
        scoreMsgFunc(outcome);
      }else if(outcome == 0){ //tie
        scoreMsgFunc(outcome);
      }

      if(computerScore == rounds){
        finalMessage(0);
      }else if(playerScore == rounds){
        finalMessage(1);
      }
}

  // Game winner message
  function finalMessage(winner) {
    if(winner == 1){
      scoreMessage.textContent = 'User wins the game!';
    }else if(winner == 0){
      scoreMessage.textContent = 'Computer wins the game!';
    }

    computerScore = 0; //reset score
    playerScore = 0;

    currentScore.style.opacity = "0";
  
    setTimeout(() => {
      currentScore.textContent = `${playerScore}  -  ${computerScore}`;
      currentScore.style.opacity = "1";
    }, 5000);
  }