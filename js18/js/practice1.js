class Car {
    constructor(brand,model,year,fuelType){
        this.brand= brand;
        this.model= model;
        this.year= year;
        this.fuelType= fuelType;
        this.speed= 0;
        this.fuelLevel= 100;
    }

    getFuelLevel(){
        return `${this.brand} ${this.model} has ${this.fuelLevel} left.`;
    }

    drive(km){
        if(this.fuelLevel> 0){
            this.speed= 60;
            this.fuelLevel-=km*0.5;
            console.log(`Driving ${km}km at ${this.speed} km/h.`);
        }
        else{
            console.log(`Out of fuel!`);
        }
    }

    refuel(){
        this.fuelLevel=100;
        console.log(`Fuel tank is full now!`)
    }
}

const myCar= new Car("Audi","TT",2009,"Benzin");

console.log(myCar.getFuelLevel());
myCar.drive(100);
console.log(myCar.getFuelLevel());

myCar.refuel();
console.log(myCar.getFuelLevel());

const secondCar= new Car("Tesla","Model S",2023,"Electric");

console.log(secondCar.getFuelLevel());
secondCar.drive(40);
console.log(secondCar.getFuelLevel());
secondCar.refuel();
console.log(secondCar.getFuelLevel());