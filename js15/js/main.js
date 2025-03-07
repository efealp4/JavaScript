// Arrays
const myArray= [];

// add elements to an array
myArray[0]="Efe Alp";
myArray[1]=44;
myArray[2]=true;

//refer to an array
console.log(myArray);

//lenght property
console.log(myArray.length);

//last element in an array
console.log(myArray[myArray.length-1]);

console.log(myArray[1]);

//add an element in an array
myArray.unshift("ehehehhe");
myArray.push("school");

console.log(myArray);

//remove something from an array
const lastItem= myArray.pop();
const firstItem= myArray.shift();

console.log(lastItem);
console.log(firstItem);
console.log(myArray);

delete myArray[1];
console.log(myArray);
console.log(myArray[1]);

myArray.splice(1,1);
myArray.splice(0,0,"new_element");
console.log(myArray);

const array=["a","b","c","d","e","f"];
const newArray1= array.slice(2,5);

console.log(newArray1);

const newArray2= array.reverse();

console.log(newArray2);

array.reverse();

const newString= array.join();

console.log(newString);

const newArray3= newString.split(",");

console.log(newArray3);

const myArrayA= ["a","b","c"]; 
const myArrayB= ["d","e","f"];

const newArrayA= myArrayA.concat(myArrayB);
const newArrayB= myArrayB.concat(myArrayA);
const newArrayC= [...myArrayA,...myArrayB];

console.log(newArrayA);
console.log(newArrayB);
console.log(newArrayC);

const equipShelfA = ["baseball","football","volleyball"];
const equipShelfB = ["basketball","golf balls","tennis balls"];

const clothesShelfA= ["tank tops","t-shirt","jerseys"];
const clothesShelfB= ["sweat tops","sweat pants","hoodies"];

console.log(equipShelfA[1]);
//or 
console.log(clothesShelfB[0]);

const equipDept= [equipShelfA,equipShelfB];
const clothesDept= [clothesShelfA,clothesShelfB];

console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);

const sportStore= [equipDept,clothesDept];
console.log(sportStore);

console.log(sportStore[0][0][1]);
console.log(sportStore[1][1][0]);







