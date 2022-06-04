function computerPlay(){
    arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random()*arr.length)]
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function playRound( playerSelection, computerSelection) {
    playerSelection.toLowerCase()
    console.log(computerSelection)
    if (playerSelection  === computerSelection) {
        return "Play again!"
    } else if ((player === 'rock') && (computerSelection ==='paper')){
        return "You Lose! Paper beats Rock"
    } else if ((player === 'paper') && (computerSelection ==='scissors')){
        return "You Lose! Scissors beats Paper"
    } else if ((player === 'scissors') && (computerSelection ==='rock')){
        return "You Lose! Rock beats Scissors"
    } else ;{
        return "You Win"
    }

  }
    //*Play Round test *//

    //const playerSelection = "rock";
    //const computerSelection = computerPlay();
    //console.log(playRound(playerSelection, computerSelection))


function game(playRound){
    player = 0
    computer = 0
    console.log("Lets play Rock,Paper or Scissors")
    for (let i = 0; i < 5; i++) {
        // your code here!
        if (playRound == "You win"){
            player += 1
        } else if (playRound = 'Play again!'){
            continue
        } else{
            computer += 1
        }
    if (player > computer){
        console.log("Congratulations You win with " + player)
    }else{
        console.log('You lose with '+ computer)
    }

     }

  }
  
  function game() {
    //Play game 5 times
    player =0
    computer =0
    round = 0
    for (let i = 0; i < 5; i++) {
      const playerSelection = playerPlay();
      const computerSelection = computerPlay();
      const currentRound = playRound(playerSelection, computerSelection);
      //result
      console.log(currentRound);
    }
    if (currentRound == "You win"){
        player += 1
    } else if (currentRound = 'Play again!'){
        round +=1
    } else {
        computer += 1
    }
 }



