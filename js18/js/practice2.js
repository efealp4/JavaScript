class Animal{
    constructor(type,sound){
        this.type=type;
        this.sound=sound;
    }
    makeSound(){
        return `${this.type} makes a "${this.sound}" sound.`
    }
}

class Dog extends Animal{
    constructor(breed){
        super("Dog","woof woof");
        this.breed=breed;
    }
    bark(){
        console.log(`${this.breed} says "Bark bark!"`);
    }
}

const myDog = new Dog("Golden Retveiler");
console.log(myDog.makeSound());
myDog.bark();

console.log("------------------")

const secondDog= new Dog("Husky");
console.log(secondDog.makeSound());
secondDog.bark();


