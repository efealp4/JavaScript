const iulia= {
    hair: "blonde",
    isSheTattoos: true,
    age: 18,
    favoriteWord: "Baaaaa",
    speak: function(){
        return this.favoriteWord
    }
}

console.log(iulia.hair);
console.log(iulia.isSheTattoos);
console.log(iulia.age);
console.log(iulia.speak());

console.log("------------------");

const ourChild= Object.create(iulia);
ourChild.isSheTattoos=false;
ourChild.age=0;
console.log(ourChild.hair);
console.log(ourChild.isSheTattoos);
console.log(ourChild.age);
console.log(ourChild.speak());

console.log(Object.keys(iulia));
console.log(Object.values(iulia));

for(let property in iulia){
    console.log(`Iulia's ${property} is ${iulia[property]}`);
}

delete iulia.isSheTattoos;

console.log(iulia.hasOwnProperty("isSheHasTattooes"));
console.log(iulia);

const {hair, age,favoriteWord} = iulia;
console.log(hair);
console.log(age);
console.log(favoriteWord);

function introduce({age,favoriteWord}){
    return `Iulia is ${age} and her favorite word is ${favoriteWord}.`
}

console.log(introduce(iulia));
