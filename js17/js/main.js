// Objects 
// key-value pairs in curly braces 
const myObj= { name: "Efe Alp"}
console.log(myObj.name);

const anotherObj= {alive: true,
    answer: 42,
    hobbies: ["eat","sleep","code"],
    beverage: {
        morning: "coffee",
        afternoon: "ice tea"
    },
    action: function(){
        return `Time for ${this.beverage.morning}.`;
    }
}

console.log(anotherObj.alive);
console.log(anotherObj.answer);
console.log(anotherObj.hobbies[1]);
console.log(anotherObj.beverage.afternoon);
console.log(anotherObj.action());

const vehicle = {
    wheels: 4,
    engine: function(){
        return "Vrroomm!";
    }
}

const truck= Object.create(vehicle);
truck.doors =2;
console.log(truck);
console.log(truck.wheels); // Inheritance
console.log(truck.engine()); // Inheritance

const car= Object.create(vehicle);
car.doors= 4;
car.engine= function() {
    return "Whoossh!";
}
console.log(car.doors);
console.log(car.engine());
console.log(car.wheels);

const tesla= Object.create(car);
console.log(tesla.wheels);
console.log(tesla.engine());
tesla.engine= function(){
    return "Zzzzzzzzz!";
}
console.log(tesla.engine());

const band={
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
}
console.log(Object.keys(band));
console.log(Object.values(band));

for(let job in band){
    console.log(job);
    console.log(band[job]);
}

console.log("-----------------")

delete band.drums;
console.log(band.hasOwnProperty("drums"));
for(let job in band){
    console.log(job);
    console.log(band[job]);
}

//destructuring objects
const { vocals, guitar, bass, drums}= band;
console.log(guitar);
console.log(vocals);

function sings({vocals}) {
    return `${vocals} sings!`
};
console.log(sings(band));
console.log(band);

