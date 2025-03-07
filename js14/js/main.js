// var, let and const

var x= 1;
var x=2;

console.log(x)

let y=1;
/* let y=2; this code makes error*/
y=3;

console.log(y)

// global scope 
var x=1;
let z=2;
const i=3;

// local scope
{
    let y=4;
    console.log(y)
}

function myFunc(){
    const i=1;
    return i;
}

console.log(y)
console.log(myFunc())

 var a=1;
 let b=2;
 const c=3;

 console.log(`global: ${a}`);
 console.log(`global: ${b}`);
 console.log(`global: ${c}`);

 function myFunction(){
    var a=10;
    let b=18;
    const c=5;
    console.log(`function: ${a}`);
    console.log(`function: ${b}`);
    console.log(`function: ${c}`);

    {
        var a=11;
        const c=6;
        console.log(`block: ${a}`);
        console.log(`block: ${b}`);
        console.log(`block: ${c}`);
    }

    console.log(`function: ${a}`);
    console.log(`function: ${b}`);
    console.log(`function: ${c}`);
 }

 myFunction();

 console.log(`final: ${a}`);
 console.log(`final: ${b}`);
 console.log(`final: ${c}`);




