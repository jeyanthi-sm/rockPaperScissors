var playerScore = 0;
var computerScore = 0;

function getComputerChoice() {
    let choice = (Math.floor(Math.random() *4));
    
    switch (choice) {
        case 1: {
            return ('rock'); 
            break;
        }
        case 2: {
            return ('paper');
            break;

        }
        case 3: {
            return ('scissors');
            break;
        }
        default: {
            return ('rock');
            break;
        }
    }
}
function playRound(playerSel, computerSel){
 //   console.log('Inside playRound');
   // console.log(computerSel);
    let playerSelection = playerSel.toLowerCase();
    let computerSelection = computerSel; 
   // console.log(computerSelection);
   // console.log(playerSelection);
   // console.log('over playRound');
    if (playerSelection === computerSelection) {
        incrPlayerSco();
        incrComputerSco();
        return("Tie");
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper'){
        incrComputerSco();
       return('You lose! Paper beats Rock');
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        incrPlayerSco();
       return('You win! Rock beats Scissors');
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        incrPlayerSco();
       return('You win! Paper beats Rock');
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        incrComputerSco();
       return('You lose! Scissors beats Paper');
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
       incrPlayerSco();    
       return('You win! Scissors beats Paper');
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        incrComputerSco();
       return('You lose! Rock beats Scissors');
    }
}
function testPlayRound(playerSel){
 let computerSelect = getComputerChoice();
 document.getElementById('compChoice').value = computerSelect; 
 //console.log('inside testPlayRound');
 //console.log(playerSel);
 //console.log(computerSelect);
  let testPlayResult = "";
  testPlayResult = playRound(playerSel, computerSelect);
  console.log(testPlayResult);
  return(testPlayResult);
}
function resetSel(){
    playerScore = 0;
    computerScore = 0;
    document.getElementById('playSel').value = "";
    document.getElementById('compChoice').value = "";
    resetPlayerSco();
    resetComputerSco();

}
function game() {
    playerScore = 0;
    computerScore = 0;
   for (let i = 0; i < 5; ++i)
   {
    let playselect = prompt("Enter your Choice");
    testres = testPlayRound(playselect);

   }
   console.log(`Player Score ${playerScore} Computer Score ${computerScore}`);

}
function incrPlayerSco() {
    playerScore++;
    document.getElementById('playSco').value = Number(document.getElementById('playSco').value) + 1;
}
function incrComputerSco() {
    computerScore++;
    document.getElementById('compSco').value = Number(document.getElementById('compSco').value) + 1;
}
function resetPlayerSco() {
 
    document.getElementById('playSco').value = 0;
}
function resetComputerSco() {
    computerScore++;
    document.getElementById('compSco').value = 0;
}
