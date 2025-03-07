// User input

//alert()
alert("Hello World!");

//confirm()
let myBoolean= confirm("If you click the [Ok] button myBoolean variable will return to True otherwise It will return False.");
console.log(myBoolean);

//prompt()
let myName = prompt("Please enter your name.");
if (myName) {
    console.log(myName.length);
    console.log(myName.trim().length);
    console.log(myName.trim());
}
else{
    console.log("You didn't enter your name.")
}