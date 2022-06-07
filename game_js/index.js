function computerPlay(){
    arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random()*arr.length)]
}

//const playerSelection = "rock";
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

function playRound( playerSelection, computerSelection) {
    console.log(computerSelection)
    if (playerSelection  === computerSelection) {
        return "Play again!"
    } else if ((player === 'rock') && (computerSelection ==='paper')){
        return "You Lose! Paper beats Rock"
    } else if ((player === 'paper') && (computerSelection ==='scissors')){
        return "You Lose! Scissors beats Paper"
    } else if ((player === 'scissors') && (computerSelection ==='rock')){
        return "You Lose! Rock beats Scissors"
    } else if((player === 'rock') && (computerSelection ==='scissors')){
        return "You Win"
    }else if((player === 'scissors') && (computerSelection ==='paper')){
        return "You Win"
    }else ((player === 'paper') && (computerSelection ==='rock'));{
        return "You Win"
    }

  }
  
  function playerPlay(){
      let playerChoice = prompt("Choose Rock Paper or Scissors").toLowerCase()
      return playerChoice
  }
  
  function game() {
    //Play game 5 times
    player =0
    computer =0

    for (let i = 0; i < 5; i++) {
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        const currentRound = playRound(playerSelection, computerSelection);
        //result
        console.log(currentRound);
        if (currentRound == "You win"){
            player += 1
        } else if (currentRound == "Play again!"){
            continue
        } 
        else {
            computer += 1
        }
    //if ((player ===0 )&& (computer ===3)){
    //    console.log("You lose agains the computer 3-0")
    //    break
    //}else if((computer===0)&&(player===3)){
    //    console.log("You win 3-0")
    //    break
    //} else if(player>computer){
    //    console.log("You win,Congratulations")
    //}else {
    //    console.log("You lose, Try again!")
    //}
    console.log("Player score " + player)
    console.log("Computer score "+ computer)

    
    }
    //if (currentRound == "You win"){
    //    player += 1
    //} else if (currentRound = 'Play again!'){
    //    round +=1
    //} else {
    //    computer += 1
    //}
 }



