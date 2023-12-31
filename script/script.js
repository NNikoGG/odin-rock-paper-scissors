function getComputerChoice(){
    let options = ["Rock", "Paper", "Scissors"];
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

function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
  const playerSelection = "Rock";
  const computerSelection = getComputerChoice();

