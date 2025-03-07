let gameChoice= confirm("Shall we play a guess game?");

if(gameChoice){
    let randomNumber= Math.floor(Math.random()*100 +1);
    let counter=0;
    let number= prompt("Please enter a number between 1-100");

    if (number>0 && number<100){
        while(true){
            if(number>randomNumber){
                alert("The number that you entered is bigger that random number.")
                counter++;
                let choice= confirm("Do you want to continue the game?")
                if(choice === false){
                    alert("Quiting from game.")
                    break;
                }
            }
            else if(randomNumber>number){
                alert("The number that you entered is smaller that random number.")
                counter++;
                let choice= confirm("Do you want to continue the game?")
                if(choice === false){
                    alert("Quiting from game.")
                    break;
                }
            }
            else{
                alert("Congrats! You find the random number.")
                break;
            }
            number= prompt(`Enter your new guess: \nYou guessed ${counter} times.`)
        }
    }
    else{
        alert("You entered wrongly or you've changed your mind, see you.")
    }
}
else{
    alert("Okay then have good day.");
}