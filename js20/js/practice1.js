/* try{
    let x= y+ 1;
}catch(err){
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
}

try{
    let age=17;
    if(age<18){
        throw new Error("Under 18 are not allowed to enter!");
    }
    console.log("Login is suscessful.")
}catch(err){
    console.log(err.message);
}

try{
    console.log("The cod is running...");
    throw new Error("There is some problem!");
}catch(err){
    console.log("Found something is not good.",err.message);
}finally{
    console.log("That code always work.")
} */

function checkAge(age){
    try{
        if(isNaN(age)){
            throw new Error("Please enter a valid number.");
        }
        if(age<18){
            throw new Error("Under 18 are not allowed to login to the site.");
        }
    }catch(err){
        console.log(err.message);
    }finally{
        console.log("The control process is completed.");
    }
}

let userAge= prompt("Please enter your age: ");
checkAge(Number(userAge));