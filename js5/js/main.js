// Numbers

// An integer is a whole number.
let myNumber = 42;

console.log(myNumber);
// A number with a decimal poins is a float which references the 'floating point'.
let myFloat = 42.01;
let myString = "42"

console.log(myFloat);
console.log(myString);

console.log(myNumber === myFloat);
console.log(myNumber === myString);

console.log(myString + 3);

console.log(Number(myString) + 3);
console.log(Number(myString) === myNumber);

console.log(Number("Efe Alp"));
console.log(Number(undefined));
console.log(Number(true));
console.log(Number(false));

// Number Methods
// The Number. isInteger() method determines whether the passed value is an integer.
myNumber = 42;
myFloat = 42.01;
myString = "42";

console.log(Number.isInteger(myNumber));
console.log(Number.isInteger(myString));
console.log(Number.isInteger(myFloat));

// The Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.

console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(myFloat));
console.log(Number.parseFloat(myNumber));

myString = "42.123abc" ; 

console.log(Number.parseFloat(myString));

//The toFixed() method formats a number according to how many decimal points you provide as the parameter.

console.log(Number.parseFloat(myString).toFixed(2));
console.log(myFloat.toFixed(2));

// The Number.parseInt() method parses a string argument and returns an integer.

myNumber = 42;
myFloat = 42.0151;
myString = "42.123abc";

console.log(Number.parseInt(myFloat).toFixed(2));
console.log(Number.parseInt(myString));
console.log(Number.parseInt(myNumber));

// The toString() method returns a string representing the number. 

myNumber = 42;
myFloat = 42.0151;
myString = "42.123abc";

console.log(myFloat.toString());
console.log(typeof myFloat.toString());

// Chaining: Using several methods chained together. 

console.log(Number.parseFloat("4.237abc").toFixed(2).toString());

//  NaN is an acronym for Not a Number

console.log(Number("Number"))

// The Number.isNaN() method determines whather the passed value is NaN AND its type is number. 

console.log(Number.isNaN(myString))
console.log(isNaN(myString))
console.log(Number.isNaN(myNumber))



