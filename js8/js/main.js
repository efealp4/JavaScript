// Conditionals: Switch Statements 

//syntax
/* switch(expression OR value){

    case choice1: 
        //run this code.
        break;

    case choice2:
        //run this code.
        break;

    dafault: 
        //run this code if no case matches.
        //no need for a break.
} */

let randomNumber = parseInt((Math.random())*5 +1);

switch(randomNumber){
    case 1: 
        console.log(`The random number is ${randomNumber}`,randomNumber);
        break;

    case 2: 
        console.log(`The random number is ${randomNumber}`,randomNumber);
        break;

    case 3:
        console.log(`The random number is ${randomNumber}`,randomNumber);
        break;

    default:
        console.log("The random number is not between 1-3 ",randomNumber)
}

