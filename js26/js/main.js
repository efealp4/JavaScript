// Fetch API requires a discussion of...
// Callbacks, Promises, Theneable and Async/Await

// Callbacks: This is old method not useful anymore for many developers because it's very complicated. Instead of using this way, developers use promises currently.
// Promises: It's more useful than callbacks. It has 3 different conditions(pending,fulfilled,rejected).
// Theneable: It's allow you to process after define some promise by .then()
// Async/Await: It's a modern way that make the structure of promise much more simple.

/* function firstFunction(parameters,callback){
    //do stuff
    callback();
}

// AKA "callback hell"
firstFunction(para,function(){
    secondFunction(para,function(){
        thirdFunction(para,function(){

        })
    })
})
 */



/* // Promises
// 3 states: pending, fulfilled, rejected.
// Pending(waiting): The process continue, not complete yet.
// Fulfilled(Completed): The process completed successful.
// Rejected(Failed): The process failed and return an error.

const myPromise= new Promise((resolve,rejected)=>{
    const error=false;
    if(!error){
        resolve("Yes! Resolved the promise.");
    }
    else{
        rejected("No! Rejected the promise.");
    }
})

console.log(myPromise);

// .then(): It checks the promise result as complete or failed according this, it returns the result.
myPromise
.then(value=>{
    return value;
})
.then(newValue=>{
    console.log(newValue);
}) // That second .then() block get the return value by first .then() after it makes its business.
.catch(err=>{
    console.error(err);
}) // If reject() block have called, .catch() block will go to run.

const myNextPromise= new Promise((resolve,rejected)=>{
    setTimeout(function(){
        resolve("myNextPromise resolved!");
    },3000);
});

myNextPromise
.then(value=>{
    console.log(value);
})

myPromise.then(value=>{
    console.log(value);
}) */



/* // Pending
// fetch(): This is a function that request to have a http. By fetch(), It sent a get request that link. Fetch() always return a Promise. Bu why we use that? It uses for get a data from a API.
const users= fetch("https://jsonplaceholder.typicode.com/users")
// What is .then() doing? It does get the response by API and convert it to the JSON format. We use this method because data that came from fetch() is not able to using directly, it's not in json format. By using response.json() we convert it in json format.
.then(response =>{
    return response.json();
})
// What is doing this code block? It get the data that just converted before by old .then() method.By data.forEach(), we print every user on the console. 
.then(data =>{
    data.forEach(user => {
        console.log(user);
    });
})
console.log(users);
// Why is output "Promise { <spending> }"? fetch() is an asenkron process so in the begging of the running section is pending... So until get the data from API, the users variable does not have a certain value. */



// Async / Await
const myUsers= {
    userList:[]
}
// asynchronous: Multiple running. It means that continue some process on the code while another codes are running.
// async: It shows that function going to run as asynchronous.
// fetch(): Pull the data from API.
// await: Wait until get the data.
// response.json(): Convert the data in json format.
const myCoolFunction= async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData= await response.json();
    console.log(jsonUserData);
    return jsonUserData;
}
myCoolFunction();

const anotherFunc = async () =>{
    const data= await myCoolFunction();
    console.log(data);
}
anotherFunc();



// Examples
//workflow function
/* const getAllUserEmails= async () => {
    const response= await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData= await response.json();

    const userEmailArray= jsonUserData.map(user=>{
        return user.email;
    });
    return userEmailArray;
}
getAllUserEmails();

//2nd parameter of fetch
const getDadJoke = async () =>{
    const response = await fetch("https://icanhazdadjokes.com/", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });

    const jsonJokesData= await response.json();

    console.log(jsonJokesData);
}
getDadJoke(); */



















