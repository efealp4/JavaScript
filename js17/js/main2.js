const phone= {
    brand: "Apple",
    model: "Iphone 15 Pro",
    isCharging: false,
    batteryLevel: 80,
    ring: function(){
        return `Ring ring! ${this.brand} ${this.model} is ringing!!!`
    }
};

console.log(phone.brand);
console.log(phone.model);
console.log(phone.isCharging);
console.log(phone.batteryLevel);
console.log(phone.ring());

console.log("--------------------------");

const myPhone= Object.create(phone);
myPhone.model= "Iphone 12";
myPhone.isCharging=true;
myPhone.batteryLevel= 95;

console.log(myPhone);
console.log(myPhone.ring());

console.log("--------------------------");

console.log(Object.keys(myPhone));
console.log(Object.values(myPhone));

for (let property in myPhone){
    console.log(`${property} is ${myPhone[property]}`);
}

delete phone.isCharging;
console.log(phone.hasOwnProperty("isCharging"));

console.log("--------------------------");

const {brand,model,batteryLevel} = phone;

console.log(brand,model,batteryLevel);

function phoneInfo({brand,model,batteryLevel}){
    return `${brand} ${model} has ${batteryLevel}` 
}

console.log(phoneInfo(myPhone));

