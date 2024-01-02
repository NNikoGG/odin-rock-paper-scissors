const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const rockBtnText = rockBtn.textContent;
const paperBtnText = paperBtn.textContent;
const scissorsBtnText = scissorsBtn.textContent;
let playerSelection = '';
let playerScoreDisplay = document.getElementById('player-score');
let computerScoreDisplay = document.getElementById('computer-score');
let announcement = document.getElementById('round-result');

function inputChoice(event){
    const finalResult = document.querySelector('div.final-result');
    if (roundsPlayed < 5){
        playerSelection = event.target.textContent;
        game();
        console.log(roundsPlayed);
    }
    else if (roundsPlayed == 5){
        playerSelection = event.target.textContent;
        game();
        if (playerScore > computerScore){
            finalResult.textContent = "Player wins the game!";
        }
        else if (playerScore < computerScore){
            finalResult.textContent = "Computer wins the game!";
        }
        else {
            finalResult.textContent = "It's a tie!";
        }
        let restartButton = document.querySelector('div.restart-button button');
        if (!restartButton) {
            const restart = document.querySelector('div.restart-button');
            restartButton = document.createElement('button');
            restartButton.textContent = "Restart";
            restart.appendChild(restartButton);
        }    
        restartButton.addEventListener('click', function(){
            playerScore = 0;
            computerScore = 0;
            roundsPlayed = 1;
            finalResult.textContent = '';
            announcement.textContent = '';
            playerScoreDisplay.textContent = '0';
            computerScoreDisplay.textContent = '0';
        });
    }
}

rockBtn.addEventListener('click', inputChoice);
paperBtn.addEventListener('click', inputChoice);
scissorsBtn.addEventListener('click', inputChoice);

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 1;

function game(){
    let options = ["Rock", "Paper", "Scissors"];
    function getComputerChoice(){
        let size = options.length;
        let choice = Math.random() * (size);
        choice = parseInt(choice);
        if (choice==0){
            return options[0];
        }
        else if (choice==1){
            return options[1];
        }
        else{
            return options[2];
        }
    }
    
    const computerSelection = getComputerChoice();
    function playRound(playerSelection, computerSelection) {    
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection == options[0].toLowerCase()){
            if (computerSelection == options[0]){
                announcement.textContent = "It's a tie!";    
            }
            else if (computerSelection == options[1]){
                computerScore++;
                announcement.textContent = "Paper beats Rock! Computer wins the round!";
                roundsPlayed++;
            }
            else{
                playerScore++;
                announcement.textContent = "Rock beats Scissors! Player wins the round!";
                roundsPlayed++;
            } 
        }
        else if (playerSelection == options[1].toLowerCase()){
            if (computerSelection == options[0]){
                playerScore++;
                announcement.textContent = "Paper beats Rock! Player wins the round!";
                roundsPlayed++;
            }
            else if (computerSelection == options[1]){
                announcement.textContent = "It's a tie!";
            }
            else{
                computerScore++;
                announcement.textContent = "Scissors beat Paper! Computer wins the round!";
                roundsPlayed++;
            } 
        }
        else if (playerSelection == options[2].toLowerCase()){
            if (computerSelection == options[0]){
                computerScore++;
                announcement.textContent = "Rock beats Scissors! Computer wins the round!";
                roundsPlayed++;
            }
            else if (computerSelection == options[1]){
                playerScore++;
                announcement.textContent = "Scissors beat Paper! Player wins the round!";
                roundsPlayed++;
            }
            else{
                announcement.textContent = "It's a tie!";
            } 
        }
    }
    playRound(playerSelection,computerSelection);
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

