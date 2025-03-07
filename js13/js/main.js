// Functions

// Function Declaration Syntax: 

function sum(n1,n2) {
    if(n2 === undefined){
        return n1;
    }
    else{
        return n1+n2;
    }
}

console.log(sum(1,23));

function getUserNameFromEmail(email){
    return email.slice(0,email.indexOf("@"));
}

console.log(getUserNameFromEmail("efealp12341234@hotmail.com"));


const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(toProperCase("dAvE"));

function properCase(name){
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(properCase("jOnaTHaN"))


