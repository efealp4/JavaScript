// refactored cod for rock, paper, scissors

let choice1= confirm("Do you want to play rock, paper, scissors againts computer?");

let items=["rock","paper","scissors"];

while(choice1){
    let computer= items[Math.floor(Math.random()*3)];
    let player=prompt("Enter your choice your choice [rock,paper,scissors]").trim().toLowerCase();

    if (player === "paper" || player === "scissors" || player === "rock"){
        let result= player === computer
        ? "Tie game!"
        : player === "rock" && computer === "paper"
        ? `You: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "paper" && computer === "scissors"
        ? `You: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "scissors" && computer === "rock"
        ? `You: ${player}\nComputer: ${computer}\nComputer wins!`
        : `You: ${player}\nComputer: ${computer}\nYou win!`;

        alert(result);
    }
    else{
        alert("You entered your choice wrongly, try again...");
        continue;
    }
    let choice2= confirm("Do you want to play again?");
    if(choice2){
        alert("Okay then let's one more round...");
    }
    else{
        alert("Quiting from game... Have a nice day.");
        break;
    }
}
if (!choice1) alert("Okay then, have a nice day.");


