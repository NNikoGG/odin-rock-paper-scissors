let playerScore = 0;
let computerScore = 0;
let i=1;
for (i; i<=5; i++){
    console.log(game());
}

if (playerScore > computerScore){
    console.log("Player Wins!");
}

else{
    console.log("Computer Wins!");
}

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
    
    const playerSelection = prompt("Select your choice: ");
    const computerSelection = getComputerChoice();
    
    function playRound(playerSelection, computerSelection) {    
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection == options[0].toLowerCase()){
            if (computerSelection == options[0]){
                i--;
                return("It's a tie!");
            }
            else if (computerSelection == options[1]){
                computerScore++;
                return("Paper beats Rock! Computer wins!");
            }
            else{
                playerScore++;
                return("Rock beats Scissors! Player wins!");
            } 
        }
        else if (playerSelection == options[1].toLowerCase()){
            if (computerSelection == options[0]){
                playerScore++;
                return("Paper beats Rock! Player wins!");
            }
            else if (computerSelection == options[1]){
                i--;
                return("It's a tie!");
            }
            else{
                computerScore++;
                return("Scissors beat Paper! Computer wins!");
            } 
        }
        else if (playerSelection == options[2].toLowerCase()){
            if (computerSelection == options[0]){
                computerScore++;
                return("Rock beats Scissors! Computer wins!");
            }
            else if (computerSelection == options[1]){
                playerScore++;
                return("Scissors beat Paper! Player wins!");
            }
            else{
                i--;
                return("It's a tie!");
            } 
        }
        else{
            i--;
            return ("Please enter a valid choice: (Rock, Paper, Scissors)");
        }
    }
    let roundResult = playRound(playerSelection,computerSelection);
    return `${roundResult} Player Score: ${playerScore}, Computer Score: ${computerScore}`; 
}

