// main.js: Inport other modules inside of the main.js and use them all.

import * as Guitar from "./guitar.js";

// Alternative ways for importings
/* 
import playGuitar from "./guitar.js";
import { shredding as shred, plucking as fingerpicking } from "./guitar.js";
*/

// Import our user class as well.
import User from "./user.js";

// Create a new class for user.
const me= new User("email@email.com","Efe Alp");

// Print user informations to the console.
console.log(me);
console.log(me.greeting());

// Use the methods that inside of the guitar.js
console.log(Guitar.playGuitar());
console.log(Guitar.shredding());
console.log(Guitar.plucking());