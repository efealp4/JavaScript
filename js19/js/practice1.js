const user= {
    id: 1,
    name: "Efe Alp",
    age: 21,
    favorites: ["JavaScript","HTML","CSS"],
    isActive: true,
    greet: function(){
        return `Hello, my name is ${this.name}`;
    }
};

console.log(user);
console.log(typeof user);
const userJSON= JSON.stringify(user);
console.log(userJSON);
console.log(typeof userJSON);

console.log("----------------");

const parsedUser= JSON.parse(userJSON);
console.log(parsedUser);
console.log(typeof parsedUser);


