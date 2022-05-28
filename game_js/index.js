function computerPlay(){
    arr = ["Rock", "Paper", "Scissors"];
    return arr[Math.floor(Math.random()*arr.length)]
}

function playRound(playerSelection, computerSelection) {
    // your code here!
  }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection))