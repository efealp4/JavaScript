let gameChoice = confirm("Shall we play guess game? If you want to roll your dices click [Ok]");

if (gameChoice){
    let dice1= Math.floor(Math.random()*6 +1);
    let dice2= Math.floor(Math.random()*6 +1);
    let comp_dice1= Math.floor(Math.random()*6 +1);
    let comp_dice2= Math.floor(Math.random()*6 +1);

    total_comp = comp_dice1 + comp_dice2;
    total_player = dice1 + dice2 ; 

    if (total_comp > total_player) {
        alert(`Computer win\nTotal of yours: ${total_player}\nTotal of computer's: ${total_comp}`)
    }
    else if (total_player > total_comp){
        alert(`You win\nTotal of yours: ${total_player}\nTotal of computer's: ${total_comp}`)
    }

    else{
        alert(`Tie game!\nTotal of yours: ${total_player}\nTotal of computer's: ${total_comp}`)
    }

    let playAgain= confirm("Play again?");
    playAgain ? location.reload() : alert("Ok, thanks for playing.");
}
else{
    alert("Okay then have a good day.")
}