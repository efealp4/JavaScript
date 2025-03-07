// Conditionals: If statements

//syntax

let condition = false;
if(condition) {
    //run some code 
    console.log("If block ran.")
} else{
    //run some different code
    console.log("Else block ran.")
}

let customerIsBanned = false ;
let soup="chicken noodle soup";
let reply; 
let crackers = true;

if (customerIsBanned) {
    reply= `We don't have soup for you!`;
}
else if(soup && crackers){
    reply= `Here's your order of ${soup} & crackers`;
}
else if(soup){
    reply= `Here's your order of ${soup}`;
}
else{
    reply=`Sorry, we're out of soup`;
}
console.log(reply);

let testScore = 59;
let collegeStudent = true;
let grade; 

if(testScore >= 90) {
    grade= "A";
}
else if(testScore >=80){
    grade="B";
}
else if(testScore >=70){
    grade="C";
}
else if(testScore >=60){
    grade="D";
}
else{
    if(collegeStudent){
        grade = "U";
    }
    else{
        grade = "F";
    }
}

console.log(grade)

// Decision Tree!
let computer="paper";
let playerOne="paper";

if (playerOne === computer) {
    console.log("Tie game!")
}
else if (computer === "paper"){
    if (playerOne === "scissor"){
        console.log("Player 1 win.")
    }
    else{
        console.log("Computer win.")
    }
}
else if (computer === "scissor"){
    if (playerOne === "paper"){
        console.log("Computer win.")
    }
    else{
        console.log("Player 1 win.")
    }
}
else{
    if (playerOne === "paper"){
        console.log("Player 1 win.")
    }
    else{
        console.log("Computer win.")
    }
}
