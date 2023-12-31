for (let i=1; i<=5; i++){
    console.log(game());
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
                return("It's a tie!");
            }
            else if (computerSelection == options[1]){
                return("Paper beats Rock! Computer wins!");
            }
            else{
                return("Rock beats Scissors! Player wins!");
            } 
        }
        else if (playerSelection == options[1].toLowerCase()){
            if (computerSelection == options[0]){
                return("Paper beats Rock! Player wins!");
            }
            else if (computerSelection == options[1]){
                return("It's a tie!");
            }
            else{
                return("Scissors beat Paper! Computer wins!");
            } 
        }
        else if (playerSelection == options[2].toLowerCase()){
            if (computerSelection == options[0]){
                return("Rock beats Scissors! Computer wins!");
            }
            else if (computerSelection == options[1]){
                return("Scissors beat Paper! Player wins!");
            }
            else{
                return("It's a tie!");
            } 
        }
        else{
            return ("Please enter a valid choice: (Rock, Paper, Scissors)")
        }
    }
    return playRound(playerSelection,computerSelection);   
}

