function computerPlay(){
    arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random()*arr.length)]
}

function playerPlay(){
    selection= prompt("Rock Paper or Scissors?")
    return selection.toLowerCase()
}
const computerSelection = computerPlay();
const playerSelection = playerPlay()

function playRound(playerSelection, computerSelection) {

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
    //*Play Round test *//
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


