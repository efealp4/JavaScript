 // Your First Interactive Game
 let playGame = confirm("Shall we play rock, paper, scissors?")
 
 if (playGame){
    let playerChoice = prompt("Please enter one of those [rock,paper,scissors]")

    if(playerChoice){
        let player = playerChoice.trim().toLowerCase();
        if (player === "rock" || player==="paper"|| player==="scissors"){
            let computerChoice = Math.floor(Math.random()*3 + 1)
            let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors" ;

            let result;
            
            if (player === computer) {
                result="Tie Game!"
            }
            else if (computer === "paper"){
                if (player === "scissors"){
                    result="You win";
                }
                else{
                    result="Computer win";
                }
            }
            else if (computer === "scissors"){
                if (player === "paper"){
                    result="Computer win";
                }
                else{
                    result="You win";
                }
            }
            else{
                if (player === "paper"){
                    result="You win";
                }
                else{
                    result="Computer win";
                }
            }

            alert(result)

            let playAgain = confirm("Play again?")
            playAgain ? location.reload() : alert("Ok, thanks for playing")
        }
        else{
            alert("You didn't enter rock, paper nor scissors.")
        }
    }
    else{
        alert("I guess you've changed your mind, maybe next time.")
    }
 }
 else{
    alert("Ok, Maybe next time.")
 }