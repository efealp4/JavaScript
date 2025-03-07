// Conditionals: Ternary operator

//syntax
//condition ? ifTrue : ifFalse;

let soup= "chicken noodle soup";
let response = soup ? "Yes, we have soup." : "Sorry, no soup today.";

console.log(response)

let isCustomerBanned = false;
let soupAccess = isCustomerBanned ? "No soup for you!" : soup ? `We have ${soup} today.` : `We don't have soup today.`

console.log(soupAccess)

let testScore = 49; 
let myGrade = testScore > 89 ? "A" : testScore > 79 ? "B" : testScore > 69 ? "C" : testScore > 59 ? "D" : testScore >=50 ? "E" : "FF" ; 

console.log(`My test grade is ${myGrade}`)

let player1= "paper";
let computer= "rock";

let result= player1=== computer ? "Tie game!" 
: player1 === "scissor" && computer === "rock" ? "Computer win" 
: player1 === "scissor" && computer === "paper" ? "Player1 win" 
: player1 === "rock" && computer === "paper" ? "Computer win" 
: player1 === "rock" && computer === "scissor" ? "Player1 win"
: player1 === "paper" && computer === "scissor" ? "Computer win"
: "Player1 win";

console.log(result)


