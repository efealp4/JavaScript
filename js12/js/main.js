 // Loops
 let myNumber=1;

 while(myNumber<=50){
    console.log(myNumber);
    myNumber+=1;
 }

 // don't create an endless loop

 /* while(true){
    console.log(myNumber)
    myNumber+=1;
 } */

myNumber= 0;

do{
    myNumber+=2;
    console.log(myNumber)
}while(myNumber<0);


for(let i= 0; i<10; i++){
    console.log(i);
}

let i;
for(; i<10;){
    console.log(i);
    i++;
}

let myName= "Efe Alp Altop";

for(let i=0;i<myName.length;i++){
    console.log(myName.charAt(i));
}

myName="Efe Alp Altop";
let counter= 0;
let myLetter;
while(true){
    myLetter= myName[counter];
    console.log(myLetter)
    if(myLetter === "l") break;
    counter++;
}

counter=0;
while(counter<=3){
    myLetter=myName[counter];
    console.log(myLetter);
    if(counter===1){
        counter+=2;
        continue;
    }
    if(myLetter === "l") break;
    counter++;
}
console.log(counter)
