function computerPlay(){
    arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random()*arr.length)]
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    console.log(computerSelection)
    if (playerSelection  === computerSelection) {
        return "Play again!"
    } else if ((playerSelection === 'rock') && (computerSelection ==='paper')){
        return "You Lose! Paper beats Rock"
    } else if ((playerSelection === 'paper') && (computerSelection ==='scissors')){
        return "You Lose! Scissors beats Paper"
    } else if ((playerSelection === 'scissors') && (computerSelection ==='rock')){
        return "You Lose! Rock beats Scissors"
    } else ;{
        return "You Win"
    }

  }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection))

