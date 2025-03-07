// user.js: Define the user class and export it. 
export default class user{
    constructor(email,name){
        this._id= email; // Save the email as id.
        this._name=name; // Save the name as well.
    }

    // There is a method that use for greeting
    greeting(){
        return `Hi, my name is ${this.name}`
    }
}